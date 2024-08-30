const path = require('path');
const SwaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');

// Construct path relative to the current file's directory
const swaggerDocument = YAML.load(path.join(__dirname, '../../../swagger.yaml'));

module.exports = {
  async render(ctx) {
    return ctx.send(SwaggerUI.setup(swaggerDocument));
  },
};
