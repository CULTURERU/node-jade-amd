define(['jadeRuntime'], function(jade) {
return function anonymous(locals, attrs, escape, rethrow) {
var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<p> \nHello <b>' + escape((interp = locals.name || 'World') == null ? '' : interp) + '</b>!</p>');
}
return buf.join("");
};
});
