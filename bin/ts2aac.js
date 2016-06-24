#!/usr/bin/env node

var USAGE = _multiline(function() {/*
    Usage:
        node ts2js [--help]
                   [--verbose]
                   input output

    Example: node index.js test/assets/a.ts test/assets/b.aac

*/});

function put(msg) { console.log(msg); }
put.error = function(msg) { put("\u001b[31m" + msg + "\u001b[0m"); };
put.warn  = function(msg) { put("\u001b[33m" + msg + "\u001b[0m"); };
put.info  = function(msg) { put("\u001b[32m" + msg + "\u001b[0m"); };

var fs     = require("fs");
var wm     = require("../lib/WebModule.js");

WebModule.VERIFY  = false;
WebModule.VERBOSE = false;
WebModule.PUBLISH = true;

require("../node_modules/uupaa.hexdump.js/lib/HexDump.js");
require("../node_modules/uupaa.filestore.js/node_modules/uupaa.uri.js/lib/URI.js");
require("../node_modules/uupaa.filestore.js/node_modules/uupaa.uri.js/lib/URISearchParams.js");
require("../node_modules/uupaa.filestore.js/node_modules/uupaa.mimetype.js/lib/MimeType.js");
require("../node_modules/uupaa.filestore.js/lib/FileStoreSandBox.js");
require("../node_modules/uupaa.filestore.js/lib/FileStore.js");
require("../node_modules/uupaa.fileloader.js/lib/FileLoader.js");
require("../node_modules/uupaa.fileloader.js/lib/FileLoaderQueue.js");
require("../node_modules/uupaa.mpeg2ts.js/node_modules/uupaa.bit.js/lib/Bit.js");
require("../node_modules/uupaa.mpeg2ts.js/node_modules/uupaa.bit.js/lib/BitView.js");
require("../node_modules/uupaa.mpeg2ts.js/node_modules/uupaa.hash.js/lib/Hash.js");
require("../node_modules/uupaa.mpeg2ts.js/node_modules/uupaa.mpeg4bytestream.js/node_modules/uupaa.nalunit.js/lib/NALUnitType.js");
require("../node_modules/uupaa.mpeg2ts.js/node_modules/uupaa.mpeg4bytestream.js/node_modules/uupaa.nalunit.js/lib/NALUnitParameterSet.js");
require("../node_modules/uupaa.mpeg2ts.js/node_modules/uupaa.mpeg4bytestream.js/node_modules/uupaa.nalunit.js/lib/NALUnitEBSP.js");
require("../node_modules/uupaa.mpeg2ts.js/node_modules/uupaa.mpeg4bytestream.js/node_modules/uupaa.nalunit.js/lib/NALUnitAUD.js");
require("../node_modules/uupaa.mpeg2ts.js/node_modules/uupaa.mpeg4bytestream.js/node_modules/uupaa.nalunit.js/lib/NALUnitSPS.js");
require("../node_modules/uupaa.mpeg2ts.js/node_modules/uupaa.mpeg4bytestream.js/node_modules/uupaa.nalunit.js/lib/NALUnitPPS.js");
require("../node_modules/uupaa.mpeg2ts.js/node_modules/uupaa.mpeg4bytestream.js/node_modules/uupaa.nalunit.js/lib/NALUnitSEI.js");
require("../node_modules/uupaa.mpeg2ts.js/node_modules/uupaa.mpeg4bytestream.js/node_modules/uupaa.nalunit.js/lib/NALUnitIDR.js");
require("../node_modules/uupaa.mpeg2ts.js/node_modules/uupaa.mpeg4bytestream.js/node_modules/uupaa.nalunit.js/lib/NALUnitNON_IDR.js");
require("../node_modules/uupaa.mpeg2ts.js/node_modules/uupaa.mpeg4bytestream.js/node_modules/uupaa.nalunit.js/lib/NALUnit.js");
require("../node_modules/uupaa.mpeg2ts.js/node_modules/uupaa.mpeg4bytestream.js/lib/MPEG4ByteStream.js");
require("../node_modules/uupaa.mpeg2ts.js/lib/MPEG2TSParser.js");
require("../node_modules/uupaa.mpeg2ts.js/lib/MPEG2TS.js");
require("../node_modules/uupaa.aac.js/lib/AAC.js");
require("../node_modules/uupaa.aac.js/lib/ADTS.js");

var ts2aac = require("../lib/ts2aac.js");

var argv   = process.argv.slice(2);

var options = _parseCommandLineOptions({
        help:       false,      // Boolean - show help.
        verbose:    false,      // Boolean - verbose mode.
        input:      "",         // String - verbose mode.
        output:     "",         // String - update test/index.html file.
    });

if (options.help) {
    put.warn( USAGE );
    return;
}

if (options.verbose) {
    put.info( "input: "  + options.input  + "\n");
    put.info( "output: " + options.output + "\n");

    WebModule.MPEG2TS.VERBOSE = true;
    WebModule.MPEG2TSParser.VERBOSE = true;
} else {
}

ts2aac(options.input, options.output);

// =========================================================
function _parseCommandLineOptions(options) { // @arg Object:
                                             // @ret Object:
    var source = "";
    var target = "";
    for (var i = 0, iz = argv.length; i < iz; ++i) {
        switch (argv[i]) {
        case "-h":
        case "--help":      options.help    = true; break;
        case "-v":
        case "--verbose":   options.verbose = true; break;
        default:
            if (target) {
                //
            } else if (source) {
                target = argv[i];
            } else {
                source = argv[i];
            }
        }
    }
    options.input  = source;
    options.output = target;
    return options;
}

function _multiline(fn) { // @arg Function:
                          // @ret String:
    return (fn + "").split("\n").slice(1, -1).join("\n");
}

