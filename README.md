# Assignment5-BackEnd

## Run via NodeJS
<b>node server.js</b> </br>
with node installed run "node server.js" in root directory
should get a message saying "server listening on port 8080"


## Run via Docker
<b>docker build -t [docker imageName] . </b></br>
<b>docker run -p 8080:8080 [your docker imageID or imageName] </b> </br>
with docker installed run "docker build" followed by "docker run"
should get a message saying "server listening on port 8080"

# Endpoints & Expected Results

## Get /users
returns an array of user objects </br>
[{ id:1,firstname: “bugs”, lastname:”bunny”, email:”bugsbunny”, products:[{id:1, name: “bananas”}, {id:2, firstName: “daffy”,.....}]}]
## Get /users/1
returns a user object with matching id </br>
{ id:1,firstname: “bugs”, lastname:”bunny”, email:”bugsbunny”, products:[{id:1, name: “bananas”}]}
## Get /users/1/products
returns an array of product objects, nested inside user object of id </br>
[{id:1, name: “bananas”},...]
## Get /users/1/products/1
returns product by id </br>
{id:1, name: “bananas”}
