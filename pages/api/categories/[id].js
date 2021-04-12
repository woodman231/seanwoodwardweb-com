import CategoriesRepository from '../../../repositories/categoriesRepository';

export default async function categoryHandler(req, res) {    

    const {
        query: { id },
        method,
        body
    } = req

    switch (method) {
        case 'GET':
            // Get data from your database
            var category = await CategoriesRepository.getOne(id);
            res.status(200).json(category);
            break
        case 'PUT':
            // Update or create data in your database
            await CategoriesRepository.update(body);
            res.status(200).json(body);
            break;
        case 'DELETE':
            await CategoriesRepository.delete(id);
            res.status(204).send();
            break;
        default:
            res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}