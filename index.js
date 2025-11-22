//! Temperature data
let day1TempF = 32, day2TempC = 25, day3TempF = 70, day4TempC = 18;
let day5TempF = 80, day6TempC = 15, day7TempF = 72, day8TempC = 28;
let day9TempF = 68, day10TempC = 20, day11TempF = 75, day12TempC = 23;
let day13TempF = 82, day14TempC = 30, day15TempF = 65, day16TempC = 22;
let day17TempF = 77, day18TempC = 26, day19TempF = 78, day20TempC = 24;
let day21TempF = 73, day22TempC = 21, day23TempF = 79, day24TempC = 27;
let day25TempF = 71, day26TempC = 19, day27TempF = 74, day28TempC = 17;
let day29TempF = 76, day30TempC = 29;

//* Arrays of temperatures
const tempInFahrenheit = [
  day1TempF, day3TempF, day5TempF, day7TempF, day9TempF,
  day11TempF, day13TempF, day15TempF, day17TempF, day19TempF,
  day21TempF, day23TempF, day25TempF, day27TempF, day29TempF
];

const tempInCelsius = [
  day2TempC, day4TempC, day6TempC, day8TempC, day10TempC,
  day12TempC, day14TempC, day16TempC, day18TempC, day20TempC,
  day22TempC, day24TempC, day26TempC, day28TempC, day30TempC
];

//* Convert Celsius to Fahrenheit
const celsiusToFahrenheit = tempInCelsius.map(temp => (temp * 9/5) + 32);

//* Convert Fahrenheit to Celsius
const fahrenheitToCelsius = tempInFahrenheit.map(temp => (temp - 32) * 5/9);

//* Total temperatures
const tot_temperature_in_fahrenheit = tempInFahrenheit.reduce((a, b) => a + b, 0) + celsiusToFahrenheit.reduce((a, b) => a + b, 0);
const tot_temperature_in_celsius = tempInCelsius.reduce((a, b) => a + b, 0) + fahrenheitToCelsius.reduce((a, b) => a + b, 0);

//* Average temperatures
const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / (tempInFahrenheit.length + tempInCelsius.length);
const avg_temperature_in_celsius = tot_temperature_in_celsius / (tempInFahrenheit.length + tempInCelsius.length);

//* Export for tests
module.exports = {
    tot_temperature_in_fahrenheit,
    tot_temperature_in_celsius,
    avg_temperature_in_fahrenheit,
    avg_temperature_in_celsius
};
