const UserController = require('./controllers/userController');

async function userRoutes(fastify, options) {
  fastify.post('/users', UserController.getAllUsers);
  fastify.get('/:id', UserController.getUserById);
  fastify.post('/', UserController.createUser);
  fastify.delete('/:id', UserController.deleteUserById);
}

module.exports = userRoutes;