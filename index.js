"use strict";

const objName = { name: 'Данил' };
const objAge = { age: 28 };

const user = {};
console.log( user );

// Объединение объектов первым способом
Object.assign(user, objName, objAge);
console.log( "user: ", user );

// Объединение объектов вторым способом
const userOther = Object.assign({}, objName, objAge);
console.log( "userOther:", userOther );

// Объединение объектов третьим способом
const userOtherMore = { ...objName, ...objAge };
console.log( "userOtherMore:", userOtherMore );





























