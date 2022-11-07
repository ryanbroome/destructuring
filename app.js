'Obj Destructuring 1';
// numPlanets = 8;
// yearNeptuneDiscovered = 1846;
'Obj Destructuring 2';
// discoveryYears = {'yearNeptuneDiscovered': 1846, 'yearMarsDiscovered': 1659};
//syntax creates a new variable named numPlanets = 8, then spreads remaining key value pairs into a new object named discoveryYears.
'Obj Destructuring 3';
// getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' });
// 'Your name is Alejandro and you like purple.
// If favorite color has a value it will use it, otherwise it will use default value green. In this case it has a color "purple" so it uses that.

// getUserData({ firstName: 'Melissa' });
// 'Your name is Melissa and you like green.
// Because there was no "favoriteColor" key name this syntax would create one and set the default value to green.

// getUserData({});
// 'Your name is undefined and you like green.
// Because an empty object is passed in it will try to evaluate against undefined key value pairs. Since favorite color was given a default value it is able to return favoriteColor with the default value of green.
'Array Destructuring 1';
//first = 'Maya';
//second = 'Marisa';
//third = 'Chi';
'Array Destructuring 2';
// raindrops = "Raindrops on roses";
// whiskers = "whiskers on kittens";
// aFewOfMyFavoriteThings = ['Bright copper kettles',  'warm woolen mittens', 'brown paper packages tied up with strings'];
'Array Destructuring 3';
// numbers = [10, 30, 20]
// reassigns variable values within array, the left side of equals designates which indexes to change and the right side of equals array is what they will be replaced with, based on their position within the array
'ES2015';
const obj = { numbers: { a: 1, b: 2 } };
const {
  numbers: { a, b },
} = obj;
('ES5 Array Swap');
let value1 = 1;
let value2 = 2;
let arr = [value1, value2];
[value2, value1] = [value1, value2];
// This made sense (lines 38-41) until attempting this exericse. I'm not sure if this was done correctly.
('raceResults()');
//
//  first attempt raceResults
// const raceResults = (arr) => {
//   const [first, second, third, ...rest] = arr;
//   return { first, second, third, rest };
// };

// Had to lookup solution to get all on oneline, a few gotcha's here I was not thinking to destructure the array within the function parameters, then also the gotcha of surrounding the return object needing parens to work.
const raceResults = ([first, second, third, ...rest]) => ({ first, second, third, rest });
// Seems like there's an assumption with these methods that the array's will be sorted by some sort of variable. In example the fastest time being in arr[0] or the highest gpa being in arr[0].
