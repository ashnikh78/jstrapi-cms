'use strict';

/**
 * workflow-stage service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::workflow-stage.workflow-stage');
