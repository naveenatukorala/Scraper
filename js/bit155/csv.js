var bit155 = bit155 || {}; bit155.csv = bit155.csv || {};
(function () {
    bit155.csv.cell = function (b, c) { var a, d; c || (c = ","); if (void 0 === b || null === b) return ""; a = "string" === typeof b ? b : b.toString(); d = '(["\n\r]|' + (c + "").replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&") + ")"; a.match(new RegExp(d)) && (a = a.replace(/"/g, '""'), a = '"' + a + '"'); return a }; bit155.csv.row = function () {
        var b, c = "", a, d = ","; 1 === arguments.length ? b = $.isArray(arguments[0]) ? arguments[0] : arguments : 2 === arguments.length && $.isArray(arguments[0]) && "string" === typeof arguments[1] ? (b = arguments[0], d = arguments[1]) : b = arguments;
        for (a = 0; a < b.length; a++)0 < a && (c += d), c += bit155.csv.cell(b[a], d); return c
    }; bit155.csv.csv = function (b, c) { var a = "", d; c || (c = ","); if (!$.isArray(b)) return ""; for (d = 0; d < b.length; d++)a += bit155.csv.row(b[d], c) + "\n"; return a }
})(bit155);
