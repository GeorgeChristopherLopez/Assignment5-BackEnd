const users = require('../data/db.json')


function findAll(){
    return new Promise((resolve, reject)=> {
        resolve(users)
    })
}

function findById(id){
    return new Promise((resolve, reject)=> {
        const user = users.find((p)=> p.id == id )
        resolve(user)
    })
}

function findProductsByUserId(id){
    return new Promise((resolve, reject)=> {
        console.log("finding products")
        const user = users.find((p)=> p.id == id )
        if(user)
        resolve(user['products'])
        else
        resolve(user)
    })
}


function findUserProductById(id, productId){
    return new Promise((resolve, reject)=> {
        console.log('finding product')
        const user = users.find((p)=> p.id == id )
        if(!user){
            resolve(user)
        } else {
            const product = (user['products']).find((p)=>{
                return(p.id == productId)
            })
            console.log('product', product, productId)
            resolve(product)
        }
       
    })
}





module.exports = {
    findAll,
    findById,
    findProductsByUserId,
    findUserProductById
}