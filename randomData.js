'use strict';

module.exports = {
  generateRandomData
};

const Faker = require('faker');

function generateRandomData(userContext, events, done) {
 
  const randomFriend = `${Faker.name.firstName()}`;
  const randomPriority = Math.floor(Math.random()*4)+1;
  userContext.vars.randomFriend = randomFriend;
  userContext.vars.randomPriority = randomPriority;
  return done();

}