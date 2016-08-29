'use strict';

const controller = require("./controllers");

module.exports = ( server ) => {
  server.route({
    method: 'GET',
    path: '/',
    handler: controller.firstPage
  });

  server.route({
    method: 'GET',
    path: '/profile/{nickname}/{language}',
    handler: controller.tfmProfile
  });

  server.route({
    method: 'GET',
    path: '/tribe/{tribe}',
    handler: controller.tfmTribe
  });
};
