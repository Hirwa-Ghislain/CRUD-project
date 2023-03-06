const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  info: {
    title: 'User Management System API',
    version: '1.0.0',
    description: 'API for managing users'
  },
  host: 'localhost:3000',
  basePath: '/',
};

const options = {
  swaggerDefinition,
  apis: ['/routes/router.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
