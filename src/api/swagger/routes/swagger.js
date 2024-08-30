module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/api-docs',
      handler: 'swagger.render',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
