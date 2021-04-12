import FolderRepository from '../util/folderRepository'
import path from 'path';

var articlesPath = path.join(process.cwd(), 'content', 'posts');

export default new FolderRepository(articlesPath);