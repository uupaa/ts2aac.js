(function moduleExporter(name, closure) {
"use strict";

var entity = GLOBAL["WebModule"]["exports"](name, closure);

if (typeof module !== "undefined") {
    module["exports"] = entity;
}
return entity;

})("ts2aac", function moduleClosure(global, WebModule, VERIFY /*, VERBOSE */) {
"use strict";

// --- technical terms / data structure --------------------
// --- dependency modules ----------------------------------
var FileLoader = WebModule["FileLoader"];
var FileStore  = WebModule["FileStore"];
var MPEG2TS    = WebModule["MPEG2TS"];
var ADTS       = WebModule["ADTS"];
// --- import / local extract functions --------------------
// --- define / local variables ----------------------------
// --- class / interfaces ----------------------------------
// --- implements ------------------------------------------
function ts2aac(source,   // @arg URLString - source url (a.ts)
                target) { // @arg URLString - target url (a.aac)
//{@dev
    if (VERIFY) {
        $valid($type(source, "URLString"), ts2aac, "source");
        $valid($type(target, "URLString"), ts2aac, "target");
    }
//}@dev

    FileLoader["toArrayBuffer"](source, function(buffer) {
        var mpeg2ts = MPEG2TS["parse"]( new Uint8Array(buffer) );
        var audio   = MPEG2TS["convertTSPacketToByteStream"]( mpeg2ts["AUDIO_TS_PACKET"] );
        var adts    = ADTS["parse"]( audio );

        FileStore["save"]({ "url": target, "mime": "audio/aac", "src": audio },
            function(event) {
                console.log("saved: " + target);
            },
            function(error) {
                console.log("error: " + error.message);
            });
    }, function(error) {
        console.error(error.message);
    });
}

return ts2aac; // return entity

});

