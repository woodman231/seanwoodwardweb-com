import FolderRepository from '../../../util/folderRepository'
import path from 'path';

export default async function categoryHandler(req, res) {
    var postsRepository = new FolderRepository(path.join(process.cwd(), 'content', 'posts'));

    const {
        query: { id },
        method,
        body
    } = req

    switch (method) {
        case 'GET':
            // Get data from your database
            var category = await postsRepository.getOne(id);
            res.status(200).json(category);
            break
        case 'PUT':
            // Update or create data in your database
            await postsRepository.update(body);
            res.status(200).json(body);
            break;
        case 'DELETE':
            await postsRepository.delete(id);
            res.status(204).send();
            break;
        default:
            res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}