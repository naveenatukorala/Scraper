describe("csv",function(){describe("cell",function(){it("should encode undefined",function(){expect(bit155.csv.cell()).toEqual("")});it("should encode null",function(){expect(bit155.csv.cell(null)).toEqual("")});it("should encode number",function(){expect(bit155.csv.cell(1)).toEqual("1")});it("should encode string",function(){expect(bit155.csv.cell("my string")).toEqual("my string")});it("should keep newlines",function(){expect(bit155.csv.cell("my\nstring")).toEqual('"my\nstring"')});it("should not escape commas, only quote",
function(){expect(bit155.csv.cell("my, string")).toEqual('"my, string"')});it("should escape quotes",function(){expect(bit155.csv.cell('my "string"')).toEqual('"my ""string"""')});it("should not escape backspace",function(){expect(bit155.csv.cell("my\\string")).toEqual("my\\string")});it("should escape lots",function(){expect(bit155.csv.cell('my\n"string" is, awesome\\wicked')).toEqual('"my\n""string"" is, awesome\\wicked"')});it("should not trim",function(){expect(bit155.csv.cell("  boo,  ")).toEqual('"  boo,  "')});
it("should escape multiple quotes",function(){expect(bit155.csv.cell('2.5" / 230,000 px')).toEqual('"2.5"" / 230,000 px"')});it("should escape tab delimiters",function(){expect(bit155.csv.cell("1\t2","\t")).toEqual('"1\t2"')});it("should not escape commas when using tab delimiters",function(){expect(bit155.csv.cell("1,2","\t")).toEqual("1,2")})});describe("row",function(){it("should encode empty row",function(){expect(bit155.csv.row()).toEqual("")});it("should encode empty row array",function(){expect(bit155.csv.row([])).toEqual("")});
it("should encode null values varargs",function(){expect(bit155.csv.row(null,null)).toEqual(",")});it("should encode null values array",function(){expect(bit155.csv.row([null,null])).toEqual(",")});it("should not encode object values",function(){expect(bit155.csv.row({name:"hello"})).toEqual("[object Object]")})});describe("csv",function(){it("should encode nothing",function(){expect(bit155.csv.csv()).toEqual("")});it("should encode an empty array",function(){expect(bit155.csv.csv([])).toEqual("")});
it("should encode a 2d array single row",function(){expect(bit155.csv.csv([["one","two,too,to"]])).toEqual('one,"two,too,to"\n')});it("should encode a 2d array two rows",function(){expect(bit155.csv.csv([["one","two"],[3,'four or "for"']])).toEqual('one,two\n3,"four or ""for"""\n')});it("should encode using tab delimiters",function(){expect(bit155.csv.csv([["one","two"],[3,'four or "for"'],["five\t\t\t\t\ttabs","six, not so much"]],"\t")).toEqual('one\ttwo\n3\t"four or ""for"""\n"five\t\t\t\t\ttabs"\tsix, not so much\n')})})});