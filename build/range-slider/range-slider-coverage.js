if (typeof _yuitest_coverage == "undefined"){
    _yuitest_coverage = {};
    _yuitest_coverline = function(src, line){
        var coverage = _yuitest_coverage[src];
        if (!coverage.lines[line]){
            coverage.calledLines++;
        }
        coverage.lines[line]++;
    };
    _yuitest_coverfunc = function(src, name, line){
        var coverage = _yuitest_coverage[src],
            funcId = name + ":" + line;
        if (!coverage.functions[funcId]){
            coverage.calledFunctions++;
        }
        coverage.functions[funcId]++;
    };
}
_yuitest_coverage["/home/yui/src/yui3/src/slider/build_tmp/range-slider.js"] = {
    lines: {},
    functions: {},
    coveredLines: 0,
    calledLines: 0,
    coveredFunctions: 0,
    calledFunctions: 0,
    path: "/home/yui/src/yui3/src/slider/build_tmp/range-slider.js",
    code: []
};
_yuitest_coverage["/home/yui/src/yui3/src/slider/build_tmp/range-slider.js"].code=["YUI.add('range-slider', function(Y) {","","/**"," * Create a sliding value range input visualized as a draggable thumb on a"," * background rail element."," * "," * @module slider"," * @main slider"," * @submodule range-slider"," */","","/**"," * Create a slider to represent an integer value between a given minimum and"," * maximum.  Sliders may be aligned vertically or horizontally, based on the"," * <code>axis</code> configuration."," *"," * @class Slider"," * @constructor"," * @extends SliderBase"," * @uses SliderValueRange"," * @uses ClickableRail"," * @param config {Object} Configuration object"," */","Y.Slider = Y.Base.build( 'slider', Y.SliderBase,","    [ Y.SliderValueRange, Y.ClickableRail ] );","","","}, '@VERSION@' ,{requires:['slider-base', 'clickable-rail', 'slider-value-range']});"];
_yuitest_coverage["/home/yui/src/yui3/src/slider/build_tmp/range-slider.js"].lines = {"1":0,"24":0};
_yuitest_coverage["/home/yui/src/yui3/src/slider/build_tmp/range-slider.js"].functions = {"(anonymous 1):1":0};
_yuitest_coverage["/home/yui/src/yui3/src/slider/build_tmp/range-slider.js"].coveredLines = 2;
_yuitest_coverage["/home/yui/src/yui3/src/slider/build_tmp/range-slider.js"].coveredFunctions = 1;
_yuitest_coverline("/home/yui/src/yui3/src/slider/build_tmp/range-slider.js", 1);
YUI.add('range-slider', function(Y) {

/**
 * Create a sliding value range input visualized as a draggable thumb on a
 * background rail element.
 * 
 * @module slider
 * @main slider
 * @submodule range-slider
 */

/**
 * Create a slider to represent an integer value between a given minimum and
 * maximum.  Sliders may be aligned vertically or horizontally, based on the
 * <code>axis</code> configuration.
 *
 * @class Slider
 * @constructor
 * @extends SliderBase
 * @uses SliderValueRange
 * @uses ClickableRail
 * @param config {Object} Configuration object
 */
_yuitest_coverfunc("/home/yui/src/yui3/src/slider/build_tmp/range-slider.js", "(anonymous 1)", 1);
_yuitest_coverline("/home/yui/src/yui3/src/slider/build_tmp/range-slider.js", 24);
Y.Slider = Y.Base.build( 'slider', Y.SliderBase,
    [ Y.SliderValueRange, Y.ClickableRail ] );


}, '@VERSION@' ,{requires:['slider-base', 'clickable-rail', 'slider-value-range']});
