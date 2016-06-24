var ModuleTestts2aac = (function(global) {

var test = new Test(["ts2aac"], { // Add the ModuleName to be tested here (if necessary).
        disable:    false, // disable all tests.
        browser:    false, // enable browser test.
        worker:     false, // enable worker test.
        node:       true,  // enable node test.
        nw:         true,  // enable nw.js test.
        el:         true,  // enable electron (render process) test.
        button:     true,  // show button.
        both:       true,  // test the primary and secondary modules.
        ignoreError:false, // ignore error.
        callback:   function() {
        },
        errorback:  function(error) {
            console.error(error.message);
        }
    });

if (IN_NW || IN_EL || IN_NODE) {
    test.add([
        test_ts2aac,
    ]);
}

// --- test cases ------------------------------------------
function test_ts2aac(test, pass, miss) {
    var source = IN_NODE ? "test/assets/a0001.ts"  : "../assets/a0001.ts";
    var target = IN_NODE ? "test/assets/a0001.aac" : "../assets/a0001.aac";

    ts2aac(source, target);

    var source = IN_NODE ? "test/assets/a0002.ts"  : "../assets/a0002.ts";
    var target = IN_NODE ? "test/assets/a0002.aac" : "../assets/a0002.aac";

    ts2aac(source, target);

    test.done(pass());
}

return test.run();

})(GLOBAL);

