console.log("hello typescript");
// Implicit Types
var helloWorld = "Hello World";
// Explicit Types
var firstName = "John";
var age = 30;
var a = ["Wendi", 19];
// cannot like this
// let a: stringAndNumber = ["wendi", "Kardian"];
// Enum from typescript
var Continents;
(function (Continents) {
    Continents[Continents["North_America"] = 0] = "North_America";
    Continents[Continents["South_America"] = 1] = "South_America";
    Continents[Continents["Africa"] = 2] = "Africa";
    Continents[Continents["Asia"] = 3] = "Asia";
    Continents[Continents["Europe"] = 4] = "Europe";
    Continents[Continents["Antartica"] = 5] = "Antartica";
    Continents[Continents["Australia"] = 6] = "Australia";
})(Continents || (Continents = {}));
// Usage for enum iin typescritp
var region = Continents.Africa; // 2
