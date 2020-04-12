# API RESTFUL WITH NODE.JS - MONGODB

First attempt doing an API of an online market with Node.JS and MongoDB.

It's possible to interact with the API thanks to a little frontend application (see "Frontend Application").

## API
#### https://api-restful-nodejs-example.herokuapp.com/api

| Endpoint | HTTP | Description |
| --- | --- | ---|
| `/product` | GET | Retrieve all the products |
| `/product/:id` | GET | Retrieve an specific product with `id`
| `/product` | POST | Create a new product |
| `/product/:id` | PUT | Update an existing product with `id`|
| `/videos/:id` | DELETE | Remove an existing product with `id`|
| `/signin` | POST | Signin an user |
| `/login` | POST | Login as a user  |

## Frontend Application
There are two renders deployed, developed with "express-handlebars":

* **https://api-restful-nodejs-example.herokuapp.com/login**
* **https://api-restful-nodejs-example.herokuapp.com/products**

## Deployment

* **Heroku**
* **MongoLab**

## Authors

* **Raúl Javierre**

## Learned

* **Node.JS API designing**
* **NoSQL particularities**
* **Use of Postman**
* **Use of MongoDB Compass**
* **Deployment of an Heroku application with Node.JS and MongoLab**
* **Use of markdown languages**
* **Use of Visual Studio Code**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
