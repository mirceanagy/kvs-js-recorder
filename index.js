var aws4 = require('aws4')
var http = require('https')
var AWS = require('aws-sdk');
var uuid = require('node-uuid');

module.exports = {sign: getSignature, request: request, getMedia: getMedia};

function getSignature(opts, accessKeyId, secretAccessKey) {
	return aws4.sign(opts, { accessKeyId: accessKeyId, secretAccessKey: secretAccessKey });
}

function request(opts, callback) { http.request(opts, callback).end(opts.body || '') }

function getMedia(options, params, callback) {
	var kinesisvideomedia = new AWS.KinesisVideoMedia({
	'credentials': new AWS.Credentials({
		accessKeyId: options.accessKeyId, secretAccessKey: options.secretAccessKey, sessionToken: null
	}),
	'region' : options.region,
	'endpoint' : new AWS.Endpoint(options.endpoint)
	});
	kinesisvideomedia.getMedia(params, callback);
}

