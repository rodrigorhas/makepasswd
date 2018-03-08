#!/usr/bin/env node

const isNumber = require('util').isNumber;
const celestials = require('./celestials.json');
const keys = require('./keys.json');
const specialKeys = ['@', '#', '$', '&'];

function randRange(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const UPPER = (str) => str.toString().toUpperCase();
const capitalize = (str) =>
  `${str[0].toString().toUpperCase()}${str.slice(1)}`;

const randomCelestial = () => capitalize(celestials[randRange(0, celestials.length)]);
const randomKey = () => keys[randRange(0, keys.length)];
const randomYear = () => randRange(1993, new Date().getFullYear());
const randomSpecialKey = () => specialKeys[randRange(0, specialKeys.length)];
const reverseAll = (target) => target.toString().split('').reverse().join('');

const random = () => Math.random();

const moreRandom = (target) =>
  (random() <= random()) ? UPPER(target) : target;


const genKey = () => {
  const celestial = randomCelestial();
  const superKey = randomSpecialKey();
  const year = randomYear();
  const key = randomKey();

  return [moreRandom(celestial), superKey, year, key].join('');
}

const args = process.argv.slice(2);
const repeat = args[0] ? parseInt(args[0], 10) : 10;

if (isNumber(repeat)) {
  new Array(repeat).fill(0).forEach(() => console.log(genKey()))
}

process.exit();