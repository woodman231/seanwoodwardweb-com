import FolderRepository from '../../../util/folderRepository'
import path from 'path';

export default async function handler(req, res) {
    var postsRepository = new FolderRepository(path.join(process.cwd(), 'content', 'posts'));

    const { method } = req;

    switch (method) {
        case 'POST':
            await postsRepository.create(req.body);
            res.status(200).json(req.body);
            break;
        case 'GET':
            var categories = await postsRepository.getAllArrayOfObjects();
            res.status(200).json(categories);
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }

}