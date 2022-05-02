const User = require('../models/userModel')

// @descr Gets all users
// @route GET /api/users
async function getUsers(req, res) {
    try {

        const users = await User.findAll()
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(users))
    } catch (error) {
        console.log(error)
    }
}


// @descr get user by id
// @route GET /api/users/:id
async function getUserById(req, res, id) {
    try {

        const user = await User.findById(id)

        if(!user){
            res.writeHead(404, {'Content-Type': 'application/json'})
            res.end(JSON.stringify({message: 'user not found'}))

        } else {
            res.writeHead(200, {'Content-Type': 'application/json'})
            res.end(JSON.stringify(user))
        }
       
    } catch (error) {
        console.log(error)
    }
}

// @descr get user products by user id
// @route GET /api/users/:id/products
async function getUserProductsByUserId(req, res, id) {
    try {

        const products = await User.findProductsByUserId(id)
        console.log(products)
        if(!products){
            res.writeHead(404, {'Content-Type': 'application/json'})
            res.end(JSON.stringify({message: 'products not found'}))

        } else {
            res.writeHead(200, {'Content-Type': 'application/json'})
            res.end(JSON.stringify(products))
        }
       
    } catch (error) {
        console.log(error)
    }
}

// @descr get user product by user id and product id
// @route GET /api/users/:id/products/:productId
async function getUserProductById(req, res, id, productID) {
    try {

        const product = await User.findUserProductById(id, productID)

        if(!product){
            res.writeHead(404, {'Content-Type': 'application/json'})
            res.end(JSON.stringify({message: 'products not found'}))

        } else {
            res.writeHead(200, {'Content-Type': 'application/json'})
            res.end(JSON.stringify(product))
        }
       
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    getUsers,
    getUserById,
    getUserProductsByUserId,
    getUserProductById
}