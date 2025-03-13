import { v4 as uuidv4 } from 'uuid';

const randInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomUser = () => {
  const users = [
    { id: uuidv4(), name: 'John', age: randInt(20, 30) },
    { id: uuidv4(), name: 'Jane', age: randInt(20, 30) },
    { id: uuidv4(), name: 'Bob', age: randInt(20, 30) },
  ];

  return users[randInt(0, users.length - 1)];
};
