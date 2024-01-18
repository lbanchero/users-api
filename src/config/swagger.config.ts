import swaggerJSDoc from 'swagger-jsdoc';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Users API',
    version: '1.0.0',
  }
};

const options = {
  swaggerDefinition,
  apis: ['./src/routes/*.ts', './src/dtos/*.ts'],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;