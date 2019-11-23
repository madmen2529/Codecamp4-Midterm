/*
ให้สร้าง array2 จาก array1 ตามที่โจทย์กำหนด โดยใช้ฟังก์ชัน Array.map()

1.1   array1 = [1, 2, 30, 400]
      array2 [2, 4, 60, 800]

1.2   array1 = [1, 2, 3, 4]
      array2 ["1", "2", "3", "4"]

1.3   array1 = [1, "1", 2, {}] 
      array2 ["number", "string", "number", "object"]

1.4   array1 = ["apple", "banana", "orange"]
      array2 ["APPLE", "BANANA", "ORANGE"]

1.5 array1 = [
      { name: "apple", age: 14 },
      { name: "banana", age: 18 },
      { name: "watermelon", age: 32 },
    ]
    array2 ["apple", "banana", "watermelon"]

1.6 array1 = [
      { name: "apple", age: 14 },
      { name: "banana", age: 18 },
      { name: "watermelon", age: 32 },
    ]
    array2 [14, 18, 32]   

1.7 array1 = [
      { name: "apple", surname: "London" },
      { name: "banana", surname: "Bangkok" },
      { name: "watermelon", surname: "Singapore" },
    ]
    array2 ["apple London", "banana Bangkok", "watermelon Singapore"]

1.8 array1 = [1,3,4,5,6,7,8]
    array2 ["odd", "odd", "even", "odd", "even", "odd", "even"]

1.9 array1 = [1, -3, 2, 8, -4, 5]
    array2 [1, 3, 2, 8, 4, 5]

1.10 array1 = [100, 200.25, 300.84, 400.3]
     array2 ["100.00", "200.25", "300.84", "400.30"]

1.11 array1 = [
       { name: "apple", birth: "2000-01-01" },
       { name: "banana", birth: "1990-10-01" },
       { name: "watermelon", birth: "1985-12-01" },
     ]
     array2 [
       { name: "apple", birth: "2000-01-01", age: 19 },
       { name: "banana", birth: "1990-10-01", age: 29 },
       { name: "watermelon", birth: "1985-12-01", age: 33 },
     ]

1.12 array1 = [
       { name: "apple", birth: "2000-01-01" },
       { name: "banana", birth: "1990-10-10" },
       { name: "watermelon", birth: "1985-12-30" },
     ]
     array2 [
         "<tr>
           <td>apple</td> 
           <td>01 jan 2000</td>
          </tr>",
         "<tr> <td>banana</td> <td>10 oct 1990</td> </tr>",
         "<tr> <td>watermelon</td> <td>30 dec 1985</td> </tr>",
     ]
*/

console.log(`
1.1   array1 = [1, 2, 30, 400]
      array2 [2, 4, 60, 800]
`);
console.log([1, 2, 30, 400].map(x => x * 2));

console.log(`
1.2   array1 = [1, 2, 3, 4]
      array2 ["1", "2", "3", "4"]
`);
console.log([1, 2, 3, 4].map(x => x.toString()));

console.log(`
1.3   array1 = [1, "1", 2, {}] 
      array2 ["number", "string", "number", "object"]
`);
console.log([1, "1", 2, {}].map(x => typeof x));

console.log(`
1.4   array1 = ["apple", "banana", "orange"]
      array2 ["APPLE", "BANANA", "ORANGE"]
`);
console.log(["apple", "banana", "orange"].map(x => x.toUpperCase()));

console.log(`
1.5 array1 = [
  { name: "apple", age: 14 },
  { name: "banana", age: 18 },
  { name: "watermelon", age: 32 },
]
array2 ["apple", "banana", "watermelon"]
`);
console.log([
    { name: "apple", age: 14 },
    { name: "banana", age: 18 },
    { name: "watermelon", age: 32 },
].map(x => x.name));

console.log(`
1.6 array1 = [
  { name: "apple", age: 14 },
  { name: "banana", age: 18 },
  { name: "watermelon", age: 32 },
]
array2 [14, 18, 32]   
`);
console.log([
    { name: "apple", age: 14 },
    { name: "banana", age: 18 },
    { name: "watermelon", age: 32 },
].map(x => x.age));

console.log(`
1.7 array1 = [
  { name: "apple", surname: "London" },
  { name: "banana", surname: "Bangkok" },
  { name: "watermelon", surname: "Singapore" },
]
array2 ["apple London", "banana Bangkok", "watermelon Singapore"]
`);
console.log([
    { name: "apple", surname: "London" },
    { name: "banana", surname: "Bangkok" },
    { name: "watermelon", surname: "Singapore" },
].map(x => x.name + ' ' + x.surname));

console.log(`
1.8 array1 = [1,3,4,5,6,7,8]
    array2 ["odd", "odd", "even", "odd", "even", "odd", "even"]
`);
console.log([1, 3, 4, 5, 6, 7, 8].map(x => x % 2 == 0 ? 'even' : 'odd'));

console.log(`
1.9 array1 = [1, -3, 2, 8, -4, 5]
    array2 [1, 3, 2, 8, 4, 5]
`);
console.log([1, -3, 2, 8, -4, 5].map(x => Math.abs(x)));

console.log(`
1.10 array1 = [100, 200.25, 300.84, 400.3]
     array2 ["100.00", "200.25", "300.84", "400.30"]
`);
console.log([100, 200.25, 300.84, 400.3].map(x => x.toFixed(2)));

console.log(`
1.11 array1 = [
  { name: "apple", birth: "2000-01-01" },
  { name: "banana", birth: "1990-10-01" },
  { name: "watermelon", birth: "1985-12-01" },
]
array2 [
  { name: "apple", birth: "2000-01-01", age: 19 },
  { name: "banana", birth: "1990-10-01", age: 29 },
  { name: "watermelon", birth: "1985-12-01", age: 33 },
]
`);
console.log([
    { name: "apple", birth: "2000-01-01" },
    { name: "banana", birth: "1990-10-01" },
    { name: "watermelon", birth: "1985-12-01" },
].map(x => Object.assign(x, { age: (new Date().getFullYear() - new Date(x.birth).getFullYear()) })));

console.log(`
1.12 array1 = [
  { name: "apple", birth: "2000-01-01" },
  { name: "banana", birth: "1990-10-10" },
  { name: "watermelon", birth: "1985-12-30" },
]
array2 [
    "<tr>
      <td>apple</td> 
      <td>01 jan 2000</td>
     </tr>",
    "<tr> <td>banana</td> <td>10 oct 1990</td> </tr>",
    "<tr> <td>watermelon</td> <td>30 dec 1985</td> </tr>",
]
`);
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
console.log([
    { name: "apple", birth: "2000-01-01" },
    { name: "banana", birth: "1990-10-10" },
    { name: "watermelon", birth: "1985-12-30" },
].map(x => '<tr><td>' + x.name + '</td><td>' +
    new Date(x.birth).getDay() + ' ' +
    monthNames[new Date(x.birth).getMonth()] + ' ' +
    new Date(x.birth).getFullYear() +
    '</td></tr>'));