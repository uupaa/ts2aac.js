// ts2aac test

require("../../lib/WebModule.js");

WebModule.VERIFY  = false; // true;
WebModule.VERBOSE = false; // true;
WebModule.PUBLISH = true;  // true;

require("../../node_modules/uupaa.hexdump.js/lib/HexDump.js");
require("../../node_modules/uupaa.filestore.js/node_modules/uupaa.uri.js/lib/URI.js");
require("../../node_modules/uupaa.filestore.js/node_modules/uupaa.uri.js/lib/URISearchParams.js");
require("../../node_modules/uupaa.filestore.js/node_modules/uupaa.mimetype.js/lib/MimeType.js");
require("../../node_modules/uupaa.filestore.js/lib/FileStoreSandBox.js");
require("../../node_modules/uupaa.filestore.js/lib/FileStore.js");
require("../../node_modules/uupaa.fileloader.js/lib/FileLoader.js");
require("../../node_modules/uupaa.fileloader.js/lib/FileLoaderQueue.js");
require("../../node_modules/uupaa.mpeg2ts.js/node_modules/uupaa.bit.js/lib/Bit.js");
require("../../node_modules/uupaa.mpeg2ts.js/node_modules/uupaa.bit.js/lib/BitView.js");
require("../../node_modules/uupaa.mpeg2ts.js/node_modules/uupaa.hash.js/lib/Hash.js");
require("../../node_modules/uupaa.mpeg2ts.js/node_modules/uupaa.mpeg4bytestream.js/node_modules/uupaa.nalunit.js/lib/NALUnitType.js");
require("../../node_modules/uupaa.mpeg2ts.js/node_modules/uupaa.mpeg4bytestream.js/node_modules/uupaa.nalunit.js/lib/NALUnitParameterSet.js");
require("../../node_modules/uupaa.mpeg2ts.js/node_modules/uupaa.mpeg4bytestream.js/node_modules/uupaa.nalunit.js/lib/NALUnitEBSP.js");
require("../../node_modules/uupaa.mpeg2ts.js/node_modules/uupaa.mpeg4bytestream.js/node_modules/uupaa.nalunit.js/lib/NALUnitAUD.js");
require("../../node_modules/uupaa.mpeg2ts.js/node_modules/uupaa.mpeg4bytestream.js/node_modules/uupaa.nalunit.js/lib/NALUnitSPS.js");
require("../../node_modules/uupaa.mpeg2ts.js/node_modules/uupaa.mpeg4bytestream.js/node_modules/uupaa.nalunit.js/lib/NALUnitPPS.js");
require("../../node_modules/uupaa.mpeg2ts.js/node_modules/uupaa.mpeg4bytestream.js/node_modules/uupaa.nalunit.js/lib/NALUnitSEI.js");
require("../../node_modules/uupaa.mpeg2ts.js/node_modules/uupaa.mpeg4bytestream.js/node_modules/uupaa.nalunit.js/lib/NALUnitIDR.js");
require("../../node_modules/uupaa.mpeg2ts.js/node_modules/uupaa.mpeg4bytestream.js/node_modules/uupaa.nalunit.js/lib/NALUnitNON_IDR.js");
require("../../node_modules/uupaa.mpeg2ts.js/node_modules/uupaa.mpeg4bytestream.js/node_modules/uupaa.nalunit.js/lib/NALUnit.js");
require("../../node_modules/uupaa.mpeg2ts.js/node_modules/uupaa.mpeg4bytestream.js/lib/MPEG4ByteStream.js");
require("../../node_modules/uupaa.mpeg2ts.js/lib/MPEG2TSParser.js");
require("../../node_modules/uupaa.mpeg2ts.js/lib/MPEG2TS.js");
require("../../node_modules/uupaa.aac.js/lib/AAC.js");
require("../../node_modules/uupaa.aac.js/lib/ADTS.js");
require("../wmtools.js");
require("../../lib/ts2aac.js");
require("../../release/ts2aac.n.min.js");
require("../testcase.js");

