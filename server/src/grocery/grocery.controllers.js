const GroceryService = require('./grocery.services');  

getGroceries = async function (req, res, next) {
    // Validate request parameters, queries using express-validator
    
    const page = req.params.page ? req.params.page : 1;
    const limit = req.params.limit ? req.params.limit : 10;
    try {
        const groceries = await GroceryService.getGroceries({}, page, limit)
        return res.status(200).json({ status: 200, data: groceries, message: "Succesfully Groceries Retrieved" });
    } catch (e) {
        console.log('controller error: ' + e.message);

        return res.status(400).json({ status: 400, message: e.message });
    }
};

getGroceryById = async function (req, res, next) {
    // Validate request parameters, queries using express-validator
    try {
        const grocery = await GroceryService.getGroceryById(req.params.id)
        return res.status(200).json({ status: 200, data: grocery, message: "Succesfully Grocery Retrieved" });
    } catch (e) {
        console.log('controller error: ' + e.message);

        return res.status(400).json({ status: 400, message: e.message });
    }
};

addGrocery = async function (req, res, next) {
    // Validate request parameters, queries using express-validator

    try {
        const grocery = await GroceryService.addGrocery(req.body);
        return res.status(200).json({ status: 200, data: grocery, message: "Succesfully Grocery Added" });
    } catch (e) {
        console.log('controller error: ' + e.message);

        return res.status(400).json({ status: 400, message: e.message });
    }
};

deleteGrocery = async function (req, res, next) {
    try {
        const grocery = await GroceryService.deleteGrocery(req.params.id);
        return res.status(200).json({ status: 200, data: grocery, message: "Succesfully grocery Deleted" });
    } catch (e) {
        console.log('controller error: ' + e.message);

        return res.status(400).json({ status: 400, message: e.message });
    }
}

updateGrocery = async function (req, res, next) {
    // Validate request parameters, queries using express-validator

    try {
        const oldGrocery = await GroceryService.updateGrocery(req.params.id, req.body);
        return res.status(200).json({ status: 200, data: oldGrocery, message: "Succesfully Grocery Updated" });
    } catch (e) {
        console.log('controller error: ' + e.message);

        return res.status(400).json({ status: 400, message: e.message });
    }
};

module.exports = {
    getGroceries,
    getGroceryById,
    addGrocery,
    deleteGrocery,
    updateGrocery
}