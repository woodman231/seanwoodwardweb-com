import FolderRepository from '../util/folderRepository'
import path from 'path';

var categoriesPath = path.join(process.cwd(), 'content', 'categories');

export default new FolderRepository(categoriesPath);