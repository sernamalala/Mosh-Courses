
let myArray = [];
let myInterests = ['Bangtan','Manga/Manhua/Manhwa','BL series','Sims','Donghua','Danmei','Wuxia','China','Japan'];

let people = [
    'Franklin Roosevelt',
    'Thomas Edison',
    'Benjamin Franklin'
  ];

  let myGuy = people[0];
  console.log(myGuy);

  people[1] = 'Inventor of the lightbulb';
  console.log(people);

const posBTS = myInterests.indexOf('Bangtan');

people.push('Serna','Aaliyah');
people.unshift('Jesus');

console.log(people);

people.shift();
console.log(people);

people.pop();
console.log(people);

people.splice(0,0,'Tychique','Keren','Ketsia');
console.log(people);
const num = [1,2,3,4];

num.splice(num.length,0,5,6,7,8,9,10);
console.log(num);

const ages = [20,34,56];
ages.splice(2,0,44);
console.log(ages);


const deleted = ages.splice(ages.length-2,2);
console.log(deleted);

const copy = myInterests.slice();
copy.push("YOH");
console.log(copy);