import swaggerJSDoc from 'swagger-jsdoc';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Express API with Swagger',
    version: '1.0.0',
    description: 'users-api with Swagger',
  }
};

const options = {
  swaggerDefinition,
  apis: ['./src/routes/*.ts', './src/dtos/*.ts'],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;