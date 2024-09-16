import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::category.category', ({ strapi }) => ({
  async find(ctx) {
    try {
      const { data } = await strapi.service('api::category.category').find(ctx.query);
      return ctx.send(data);
    } catch (error) {
      ctx.throw(500, error);
    }
  },
}));
