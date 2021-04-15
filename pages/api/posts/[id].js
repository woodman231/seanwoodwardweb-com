import ArticlesRepository from '../../../repositories/articlesRepository';

export default async function postHandler(req, res) {

    const {
        query: { id },
        method,
        body
    } = req

    switch (method) {
        case 'GET':
            // Get data from your database
            var article = await ArticlesRepository.getOne(id);
            res.status(200).json(article);
            break
        case 'PUT':
            // Update or create data in your database
            await ArticlesRepository.update(body, true);
            res.status(200).json(body);
            break;
        case 'DELETE':
            await ArticlesRepository.delete(id);
            res.status(204).send();
            break;
        default:
            res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}