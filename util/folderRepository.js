import fsp from 'fs/promises';
import path from 'path';
import { v4 } from 'uuid';

export default class FolderRepository {
    _folderPath;

    constructor(folderPath) {
        this._folderPath = folderPath;
    }

    async getAllArrayOfObjects() {
        return new Promise(async (resolve, reject) => {
            var results = [];
            var files = await fsp.readdir(this._folderPath);
            var fileReadPromises = files.map(async (file) => {
                var fullFilePath = path.join(this._folderPath, file);
                return await fsp.readFile(fullFilePath);
            });

            Promise.all(fileReadPromises).then((fileReadPromiseResults) => {
                fileReadPromiseResults.forEach((fileReadPromiseResult) => {
                    results.push(JSON.parse(fileReadPromiseResult));
                });

                resolve(results);
            })
        });

    }

    async getAllObjectOfObjects() {
        return new Promise(async (resolve, reject) => {
            var results = {};
            var files = await fsp.readdir(this._folderPath);
            var fileReadPromises = files.map(async (file) => {
                var fullFilePath = path.join(this._folderPath, file);
                return await fsp.readFile(fullFilePath);
            });

            Promise.all(fileReadPromises).then((fileReadPromiseResults) => {
                fileReadPromiseResults.forEach((fileReadPromiseResult) => {
                    var fileAsObject = JSON.parse(fileReadPromiseResult);
                    results[fileAsObject['uuid']] = fileAsObject;
                });

                resolve(results);
            })
        });
    }

    async getOne(uuid) {
        var fileName = path.join(this._folderPath, `${uuid}.json`);
        var fileData = await fsp.readFile(fileName);
        return JSON.parse(fileData);
    }

    async getOneBySlug(slug) {
        var results = {};
        var allObjects = await this.getAllArrayOfObjects();
        for(var i=0; i< allObjects.length; i++) {
            var thisObject = allObjects[i];
            if(thisObject['slug'] && thisObject['slug'] === slug) {
                results = thisObject;
                break;
            }
        }

        return results;
    }

    async create(object) {
        if (!object['uuid']) {
            object['uuid'] = v4();
        }

        var fileName = path.join(this._folderPath, `${object['uuid']}.json`);
        await fsp.writeFile(fileName, JSON.stringify(object, null, '\t'));
    }

    async update(object) {
        if (!object['uuid']) {
            object['uuid'] = v4();
        }

        var fileName = path.join(this._folderPath, `${object['uuid']}.json`);
        await fsp.writeFile(fileName, JSON.stringify(object, null, '\t'));
    }

    async delete(uuid) {
        var fileName = path.join(this._folderPath, `${uuid}.json`);
        await fsp.rm(fileName);
    }
}

