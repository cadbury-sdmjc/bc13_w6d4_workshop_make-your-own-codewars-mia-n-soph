import { test, expect } from "@jest/globals"; 

import { fightKid } from './main.js';

//👉 Write your tests below here:

test('20 Teachers vs 3 Kids: Teachers should win', () => {
    let actual = fightKid(20, 3, ['Salmon', 'Cod', 'Plaice', 'Tuna', 'Haddock', 'Swordfish', 'Nemo', 'Michael']);
    let expected = 'teachers';
    expect(actual.toLowerCase()).toBe(expected);
})

test('1 Teacher vs 14 Kids: Kids should win', () => {
    let actual = fightKid(1, 14, ['Soggy Sandwiches']);
    let expected = 'kids';
    expect(actual.toLowerCase()).toBe(expected);
})

test('0 Teachers vs 3 Kids: Output should be `Nominate fighter`', () => {
    let actual = fightKid(0, 3, ['Dead pigeon']);
    let expected = 'nominate fighter';
    expect(actual.toLowerCase()).toBe(expected);
})

test('1 Teacher vs 8 Kids: Output should be `FIGHT FIGHT FIGHT`', () => {
    let actual = fightKid(1, 8, []);
    let expected = 'fight fight fight';
    expect(actual.toLowerCase()).toBe(expected);
})

test("-1 Teacher vs -1 Kids: Output should be `Nominate fighter`", () => {
  let actual = fightKid(-1, -1, []);
  let expected = "nominate fighter";
  expect(actual.toLowerCase()).toBe(expected);
});

test("1 Teacher vs 11 Kids, ball is present so teacher strength is increased: Teachers should win", () => {
  let actual = fightKid(1, 11,[] ,true);
  let expected = "teachers";
  expect(actual.toLowerCase()).toBe(expected);
});

test("2 Teachers vs 99 Kids, ball is present so teacher strength increased but there are too many kids: Kids should win", () => {
  let actual = fightKid(2, 99,[], true);
  let expected = "kids";
  expect(actual.toLowerCase()).toBe(expected);
});

test("Uncertain input for ball: You've ballsed up!", () => {
  let actual = fightKid(1, 5,[],1);
  let expected = "you've ballsed up!";
  expect(actual.toLowerCase()).toBe(expected);
});

test("2 Teachers vs 16 Kids, we gots pies in the lunch: Kids should win", () => {
  let actual = fightKid(2, 16,['Pie', 'Pie'] ,false);
  let expected = "kids";
  expect(actual.toLowerCase()).toBe(expected);
});

test("2 Teachers vs 16 Kids, big ol' lunch box: Output should be `Fight fight fight`", () => {
  let actual = fightKid(2, 16,['Sandwich', 'Cake', 'Carrot' ] ,false);
  let expected = "fight fight fight";
  expect(actual.toLowerCase()).toBe(expected);
});
