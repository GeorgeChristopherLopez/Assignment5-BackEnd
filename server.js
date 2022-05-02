const http = require('http')
const {getUsers, getUserById, getUserProductsByUserId, getUserProductById} = require('./controllers/userController')
const server = http.createServer((req, res)=>{

    if(req.url === '/users' && req.method === 'GET'){
        getUsers(req, res)
    }  else if (req.url.match(/\/users\/([0-9]+)\/products\/([0-9]+)/) && req.method === 'GET'){
        
         const id = req.url.split('/')[2]; 
         const productID = req.url.split('/')[4]; 
        // console.log("getting products", productID)
         getUserProductById(req, res, id, productID)
     }
    else if (req.url.match(/\/users\/([0-9]+)\/products/) && req.method === 'GET'){
       console.log("getting products")
        const id = req.url.split('/')[2]; 
        getUserProductsByUserId(req, res, id)
    }
    else if (req.url.match(/\/users\/([0-9]+)/) && req.method === 'GET'){
        const id = req.url.split('/')[2]; 
        getUserById(req, res, id)
    }
    else {
        res.writeHead(404, {'Content-Type': 'application/json'})
        res.end(JSON.stringify({message: 'route not found'}))
    }

})

const PORT  = process.env.PORT || 8080

server.listen(PORT, ()=> console.log("server listening on port "+ PORT))