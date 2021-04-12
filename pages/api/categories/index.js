import CategoriesRepository from '../../../repositories/categoriesRepository';

export default async function categoriesHandler(req, res) {

    if (req.method === 'POST') {
        // Process a POST request
        await CategoriesRepository.create(req.body);
        res.status(200).json(req.body);

    } else {
        // Handle any other HTTP method
        if (req.query.returnType && req.query.returnType === 'array') {
            var categories = await CategoriesRepository.getAllArrayOfObjects();
            res.status(200).json(categories);
        }

        if (req.query.returnType && req.query.returnType === 'object') {
            var categories = await CategoriesRepository.getAllObjectOfObjects();
            res.status(200).json(categories);
        }

    }
}