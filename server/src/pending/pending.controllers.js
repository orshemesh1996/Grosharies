const PendingService = require('./pending.services');  

getPosts = async function (req, res, next) {
    // Validate request parameters, queries using express-validator
    
    const page = req.params.page ? req.params.page : 1;
    const limit = req.params.limit ? req.params.limit : 10;
    try {
        const posts = await PendingService.getPosts({}, page, limit);
        return res.status(200).json({ posts: posts, message: "Succesfully Posts Retrieved" });
    } catch (e) {
        console.log('controller error: ' + e.message);

        return res.status(400).json({ message: e.message });
    }
};

getPostById = async function (req, res, next) {
    // Validate request parameters, queries using express-validator
    try {
        const post = await PendingService.getPostById(req.params.id);
        return res.status(200).json({ post: post, message: "Succesfully Post Retrieved" });
    } catch (e) {
        console.log('controller error: ' + e.message);

        return res.status(400).json({ message: e.message });
    }
};

getPostsByUser = async function (req, res, next) {
    // Validate request parameters, queries using express-validator
    try {
        const posts = await PendingService.getPostsByUser(req.params.id);
        return res.status(200).json({ posts: posts, message: "Succesfully Posts Retrieved" });
    } catch (e) {
        console.log('controller error: ' + e.message);

        return res.status(400).json({ message: e.message });
    }
};

getPostsByCategory = async function (req, res, next) {
    // Validate request parameters, queries using express-validator
    try {
        const posts = await PendingService.getPostsByCategory(req.params.id);
        return res.status(200).json({ posts: posts, message: "Succesfully Posts Retrieved" });
    } catch (e) {
        console.log('controller error: ' + e.message);

        return res.status(400).json({ message: e.message });
    }
};

getPostsByTag = async function (req, res, next) {
    // Validate request parameters, queries using express-validator
    try {
        const posts = await PendingService.getPostsByTag(req.params.id);
        return res.status(200).json({ posts: posts, message: "Succesfully Posts Retrieved" });
    } catch (e) {
        console.log('controller error: ' + e.message);

        return res.status(400).json({ message: e.message });
    }
};

getPostsByCollector = async function (req, res, next) {
    // Validate request parameters, queries using express-validator
    try {
        const posts = await PendingService.getPostsByCollector(req.params.id);
        return res.status(200).json({ posts: posts, message: "Succesfully Posts Retrieved" });
    } catch (e) {
        console.log('controller error: ' + e.message);

        return res.status(400).json({ message: e.message });
    }
};

getAllPendingPosts = async function (req, res, next) {
    // Validate request parameters, queries using express-validator
    try {
        const posts = await PendingService.getAllPendingPosts();
        return res.status(200).json({ posts: posts, message: "Succesfully Posts Retrieved" });
    } catch (e) {
        console.log('controller error: ' + e.message);

        return res.status(400).json({ message: e.message });
    }
};

getAllFinishedPosts = async function (req, res, next) {
    // Validate request parameters, queries using express-validator
    try {
        const posts = await PendingService.getAllFinishedPosts();
        return res.status(200).json({ posts: posts, message: "Succesfully Posts Retrieved" });
    } catch (e) {
        console.log('controller error: ' + e.message);

        return res.status(400).json({ message: e.message });
    }
};

addPost = async function (req, res, next) {
    // Validate request parameters, queries using express-validator

    try {
        const post = await PendingService.addPost(req.body);
        return res.status(200).json({ post: post, message: "Succesfully Posts Added" });
    } catch (e) {
        console.log('controller error: ' + e.message);

        return res.status(400).json({ message: e.message });
    }
};

deletePost = async function (req, res, next) {
    try {
        const post = await PendingService.deletePost(req.params.id);
        return res.status(200).json({ post: post, message: "Succesfully Posts Deleted" });
    } catch (e) {
        console.log('controller error: ' + e.message);

        return res.status(400).json({ message: e.message });
    }
}

updatePost = async function (req, res, next) {
    // Validate request parameters, queries using express-validator

    try {
        const oldPost = await PendingService.updatePost(req.params.id, req.body);
        return res.status(200).json({ oldPost: oldPost, message: "Succesfully Post Updated" });
    } catch (e) {
        console.log('controller error: ' + e.message);

        return res.status(400).json({ message: e.message });
    }
};

module.exports = {
    getPosts,
    getPostById,
    getPostsByUser,
    getPostsByCategory,
    getPostsByTag,
    getPostsByCollector,
    getAllFinishedPosts,
    getAllPendingPosts,
    addPost,
    deletePost,
    updatePost
}