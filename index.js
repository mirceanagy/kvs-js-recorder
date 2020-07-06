var aws4 = require('aws4')
var http = require('https')

module.exports = {sign: getSignature, request: request};

function getSignature(opts, accessKeyId, secretAccessKey) {
	return aws4.sign(opts, { accessKeyId: accessKeyId, secretAccessKey: secretAccessKey });
}

function request(opts) { http.request(opts, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);
}).end(opts.body || '') }

