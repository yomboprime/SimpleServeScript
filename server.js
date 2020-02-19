
// Substitute with your path to Three.js repo:
var projectDIR = "~/devel/threejs";
var listenPort = 5555;
var projectURL = "http://127.0.0.1:" + listenPort + "/examples";



var fs = require( 'fs' );
var path = require( 'path' );
var pathJoin = path.join;
var express = require( 'express' );
var http = require( 'http' );


var app, httpServer;

var title = "SimpleServeScript v1";
process.title = title;
console.log( title );

// Termination signal
process.on( "SIGINT", function() {

	console.log( " SIGINT Signal Received, shutting down." );
	process.exit( 0 );

} );

// Create server
app = express();
httpServer = http.Server( app );
app.use( "/", express.static( projectDIR ) );

// Start listening
httpServer.listen( listenPort, function () { console.log( "Server started on: " + projectURL ); } );

console.log( "Press ctrl-c to exit." );
