// lower case
var personName = "Bilal";
console.log("lowercases:", personName.toLowerCase());
console.log("uppercase:", personName.toLocaleUpperCase());
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
