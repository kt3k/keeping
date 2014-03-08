#! /usr/bin/env node

/**
 * keeping v0.0.1
 * A tool for measuring round-trip time of http requests under a Keep-Alived connection.
 */

var http = require('http');
var url = require('url');

var main = function (urlStr, maxCount, logger, statisticsCallback) {

    // ping counter
    var n = 0;

    // round-trip times
    var rtts = [];

    var options = url.parse(urlStr);
    logger.log('pinging to ' + urlStr);

    var ping = function () {

        var startTime, endTime;

        if (n >= maxCount) {
            statisticsCallback(rtts);
            return;
        }
        
        n++;

        var req = http.request(options)

        req.on('response', function (res) {
            var data = '';

            res.setEncoding('utf8');

            res.on('data', function (chunk) {
                data += chunk.toString();
            });

            res.on('end', function () {

                endTime = new Date().getTime();

                var rtt = endTime - startTime;

                rtts.push(rtt);

                logger.log('status=' + res.statusCode + ' rtt=' + rtt + 'ms body=' + data.substring(0, 15) + '...(length=' + data.length + 'B)');

                ping(); // loop
            });
        });

        req.on('error', function (err) {
            logger.log(err);
            logger.log(JSON.stringify(options));
            process.exit();
        });

        startTime = new Date().getTime();

        req.end();
    };

    ping();
};

module.exports = main;
