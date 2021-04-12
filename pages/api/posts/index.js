import ArticlesRepository from '../../../repositories/articlesRepository';

export default async function postsHandler(req, res) {
    const { method } = req;

    switch (method) {
        case 'POST':
            await ArticlesRepository.create(req.body);
            res.status(200).json(req.body);
            break;
        case 'GET':
            var articles = await ArticlesRepository.getAllArrayOfObjects();
            res.status(200).json(articles);
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }

}