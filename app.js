'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection( {port: 3000} );

// Load routes
require("./lib/routes")(server);

server.start(( err ) => {
	if ( err ) {
		throw err;
	}

	console.log(`Server running at: ${server.info.uri}`);
});
