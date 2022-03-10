const { Module } = require("module");

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function div(a, b) {
  return a / b;
}

function mul(a, b) {
  return a * b;
}

// Adding These Functions into Custom Module
module.exports = {
  addition: add,
  subtraction: sub,
  division: div,
  multiply: mul,
};
