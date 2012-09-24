Hogan.Template = function(fn) {};

// template result buffering
Hogan.Template.prototype.b = function(s) {};

// find values with normal names
Hogan.Template.prototype.f = function(k, c, p, r) {};

// variable escaping
Hogan.Template.prototype.v = function(str) {};

// Render
Hogan.Template.prototype.fl = function() {};

// render: replaced by generated code.
Hogan.Template.prototype.r = function(c, p, i) {};

// triple stache
Hogan.Template.prototype.t = function(val) {};

Hogan.Template.prototype.render = function (c, p, i) {};

// render internal -- a hook for overrides that catches partials too
Hogan.Template.prototype.ri = function (c, p, i) {};

// tries to find a partial in the curent scope and render it
Hogan.Template.prototype.rp = function(n, c, p, i) {};

// render a section
Hogan.Template.prototype.rs = function(c, p, s) {};

// maybe start a section
Hogan.Template.prototype.s = function(v, c, p, i, s, e, t) {};

// find values with dotted names
Hogan.Template.prototype.d = function(k, c, p, r) {};

// lambda replace section
Hogan.Template.prototype.ls = function(v, c, p, i, s, e, t) {};

// lambda replace variable
Hogan.Template.prototype.lv = function(v, c, p) {};
