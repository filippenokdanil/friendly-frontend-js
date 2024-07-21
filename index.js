"use strict";

const user = { 
  name: 'Данил',
  age: 22,
  isDeveloper: true,
  address: {
    city: 'Курган',
    zipcode: '123456',
  }, 
};

console.log( user );
console.log( user.address?.city );

console.log('Ураааа!');