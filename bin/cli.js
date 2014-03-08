#! /usr/bin/env node

/**
 * keeping-cli v0.0.1
 * A tool for measuring round-trip time of http requests under a Keep-Alived connection.
 */

var keeping = require('../lib/keeping');

var usage = function () {
    console.log('usage: keeping [url]');
};

var statistics = function (rtts) {
    var avg = rtts.reduce(function (x, y) {
        return x + y;
    }) / rtts.length;

    console.log('avg=' + avg + 'ms');
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
