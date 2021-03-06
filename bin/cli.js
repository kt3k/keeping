#! /usr/bin/env node

/**
 * keeping-cli v0.1.0
 * A tool for measuring round-trip time of http requests under a Keep-Alived connection.
 */

var keeping = require('../lib/keeping');

var usage = function () {
    console.log('usage: keeping [url]');
};

var statistics = function (rtts) {
    console.log('avg=' + average(rtts) + 'ms');
    rtts.shift();
    console.log('avg[1:]=' + average(rtts) + 'ms');
};

var average = function (array) {
    return array.reduce(function (x, y) {
        return x + y;
    }) / array.length;
};

var cli = function () {

    if (process.argv.length != 3) {
        usage();
        process.exit(1);
    }

    var urlStr = process.argv[2];

    keeping(urlStr, 10, console, statistics);
};

cli();
