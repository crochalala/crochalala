function calculateAge(yearBorn) {
  var currentTime = new Date();
  var currentYear = currentTime.getFullYear();
  return currentYear - yearBorn;
}

var name = prompt("Enter your name: ");

console.log(name);

var yearBorn = prompt("Enter the year you were born: ");
var age;
age = calculateAge(yearBorn);
