import FolderRepository from '../../../util/folderRepository'
import path from 'path';

export default async function handler(req, res) {
    var categoriesRepository = new FolderRepository(path.join(process.cwd(), 'content', 'categories'));

    if (req.method === 'POST') {
        // Process a POST request
        await categoriesRepository.create(req.body);
        res.status(200).json(req.body);

    } else {
        // Handle any other HTTP method
        if(req.query.returnType && req.query.returnType === 'array') {
            var categories = await categoriesRepository.getAllArrayOfObjects();
            res.status(200).json(categories);
        }

        if(req.query.returnType && req.query.returnType === 'object') {
            var categories = await categoriesRepository.getAllObjectOfObjects();
            res.status(200).json(categories);
        }       
        
    }
}