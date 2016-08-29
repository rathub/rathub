'use strict';

const Boom = require('boom');
const get = require('request');

exports.firstPage = ( request, reply ) => {
  const pkg = require('../package.json');

  const welcome = {
    name: pkg.name,
    version: pkg.version,
    description: pkg.description,
    author: pkg.author
  };

  reply(welcome);
};

exports.tfmProfile = ( request, reply ) => {
  let nickname = encodeURIComponent(request.params.nickname);
  let language = request.params.language;

  get({
    url: `http://api.formice.com/mouse/stats.json?n=${nickname}&l=${language}`,
    json: true
  }, ( error, response, result) => {
    if ( !error && response.statusCode === 200 && !result.error) {
      reply(result);
    }else {
      reply(Boom.notFound('Mouse not found'));
    }
  });
};

exports.tfmTribe = ( request, reply ) => {
  const base64 = require("base-64");
  let tribeName = base64.encode(request.params.tribe);

  get({
    url: `http://api.formice.com/tribe/stats.json?t=${tribeName}`,
    json: true
  }, ( error, response, result) => {
    if ( !error && response.statusCode === 200 && !result.error) {
      reply(result);
    }else {
      reply(Boom.notFound('Mouse not found'));
    }
  });
};
