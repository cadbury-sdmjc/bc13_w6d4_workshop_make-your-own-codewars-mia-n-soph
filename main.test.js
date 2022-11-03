import { test, expect } from "@jest/globals"; 

import { fightKid } from './main.js';

//👉 Write your tests below here:

test('teachers should win', () => {
    let actual = fightKid(20, 3);
    let expected = 'teachers';
    expect(actual.toLowerCase()).toBe(expected);
})

test('kids should win', () => {
    let actual = fightKid(1, 14);
    let expected = 'kids';
    expect(actual.toLowerCase()).toBe(expected);
})

test('zero input, should be nominate fighter', () => {
    let actual = fightKid(0, 3);
    let expected = 'nominate fighter';
    expect(actual.toLowerCase()).toBe(expected);
})

test('draw, so fight fight fight', () => {
    let actual = fightKid(1, 8);
    let expected = 'fight fight fight';
    expect(actual.toLowerCase()).toBe(expected);
})

test("less than zero input, should be nominate fighter", () => {
  let actual = fightKid(-1, -1);
  let expected = "nominate fighter";
  expect(actual.toLowerCase()).toBe(expected);
});

test("Ball is present. Teacher strength increased. Teachers win", () => {
  let actual = fightKid(1, 11, true);
  let expected = "teachers";
  expect(actual.toLowerCase()).toBe(expected);
});

test("Ball is present. Teacher strength increased but there are too many kids. Kids win", () => {
  let actual = fightKid(2, 99, true);
  let expected = "kids";
  expect(actual.toLowerCase()).toBe(expected);
});

test("Uncertain input for ball. You've balls up!", () => {
  let actual = fightKid(1, 5, 1);
  let expected = "you've ballsed up!";
  expect(actual.toLowerCase()).toBe(expected);
});