let people = [
    'Benjamin Franklin',
    'Thomas Edison',
    'Franklin Roosevelt',
    'Mahatma Gandhi',
    'Napoleon Bonaparte',
    'Abraham Lincoln'
  ]

console.log(people.indexOf('Mahatma Gandhi'));//correct
  people.unshift('Winston Churchill','Albert Einstein');//correct
  people.splice(0,0,'Winston Churchill','Albert Einstein');//correct

  people.push('Charles Darwin','Walt Disney');//correct
  people.splice(people.length,0,'Charles Darwin','Walt Disney');//..

people.splice(people.indexOf('Mahatma Gandhi')+1,0,'Pablo Picasso','Ludwig van Beethoven');

people.splice(0,2);
people.shift();
people.shift();

people.pop()
people.pop()

people.splice(people.length-2,2);

people.splice(people.indexOf('Mahatma Gandhi'),1);

