let myNumber: number = 42;
console.log(myNumber);

let myName: string = "Aquib";
// myName = 42

let isStudent: boolean = true;

let myData: null = null;

let numbersArr: number[] = [1, 2, 3, 4, 5];
// numbersArr.push("A")

let fruits: string[] = ["Apple", "Banana", "Cherry"];

// let person: { name: string; age: number } = { name: "Aquib", age: 25 };

const car: { make: string; year: number } = {
  make: "Toyota",
  year: 2020,
};

const student: { name: string; age: number; isEnrolled: boolean } = {
  name: "Aquib",
  age: 24,
  isEnrolled: true,
};

const personDetails: {
  name: string;
  age: number;
  hobbies: string[];
  address: {
    street: string;
    city: string;
  };
  isStudent: boolean;
  scores: number[];
  extrainfo: null;
} = {
  name: "Aquib",
  age: 24,
  hobbies: ["Reading", "Coding", "Gaming"],
  address: { street: "Khadka road", city: "Kathmandu" },
  isStudent: true,
  scores: [1, 2, 3, 4, 5],
  extrainfo: null,
};

// type Person = { name: string; age: number };
// type Student = Person & { studentId: string };
// type Teacher = Person & { subject: string };

const id: string | number = 42;

const numberOrStringArray: (number | string)[] = [1, "two"];

const mixedArray: (number | string | boolean)[] = [1, "two", true];

let myInferrredNumber = 10;

//functions types

function greet(name: string): void {
  console.log(`Hello, ${name}!`);
}

function addNumbers(a: number, b: number) {
  console.log(a + b);
}

function calculateVolume(
  length: number,
  width: number,
  height: number
): number {
  return length * width * height;
}

function printInfo(info: string | number): void {
  console.log(info);
}

type Info = string | number;
function printInfo(info: Info): void {
  console.log(info);
}

type Circle = {
  kind: "circle";
  radius: number;
};

type Rectangle = {
  kind: "rectangle";
  length: number;
  width: number;
};

type Shape = Circle | Rectangle;

function getArea(shape: Shape): number {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  } else {
    return shape.length * shape.width;
  }
}

getArea({ kind: "circle", radius: 2 });

type Person = {
  name: string;
  age: number;
};

type Student = Person & {
  studentId: string;
};

function convertPersonToStudent(person: Person): Student {
  return { ...person, studentId: "S123" };
}

function doubleNumbers(arr: number[]): number[] {
  return arr.map((num) => num * 2);
}

interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: "Aquib",
  age: 30,
};

interface Car {
  make: string;
  model: string;
  year: number;
  isElectric: boolean;
  features: string[];
}

interface Person {
  name: string;
  age: number;
}

function displayPerson(person: Person): void {
  console.log(`Name: ${person.name}, Age ${person.age}`);
}

interface MathFunction {
  (a: number, b: number): number;
}

const add: MathFunction = (a, b) => a + b;

function identity<T>(value: T): T {
  return value;
}

// identity<number>("22");

function findItem<T>(items: T[], item: T): number {
  return items.indexOf(item);
}

// findItem([1,2,3], "4")
findItem([1, 2, 3], 4);

interface Book1 {
  title: string;
  author: string;
  year: number;
  genre?: string;
}

interface Book2 {
  title: string;
  author: string;
  year: number;
}

type QuizQuestion = {
  question: string;
  options: string[];
  correctOption: number;
};

const quizQuestion: QuizQuestion[] = [
  {
    question: "how are you?",
    options: ["A", "B"],
    correctOption: 1,
  },
];

type quizChecker = (quizQuestion: QuizQuestion, userAnswer: number) => boolean;

const quizChecker: quizChecker = (quizQuestion, userAnswer) => {
  return userAnswer === quizQuestion.correctOption;
};

type fiterFunction<T> = (
  array: T[],
  predicate: (value: T) => boolean
) => T[];

const filterArray: fiterFunction<string> = (array, predicate) => {
  return array.filter(predicate);
};

const isEven = (num: number) => num % 2 === 0;
const numbers = [1, 2, 3, 4, 5, 6];
// console.log(filterArray(numbers, isEven));

filterArray(["a", "bc", "def", "ghij"], (str) => str.length > 3);

type mapFunction<T, R> = (
  array: T[],
  mapper: (value: T) => R
) => R[];

const mapArray: mapFunction<number, string> = (array, mapper) => {
  return array.map(mapper);
};

const doubleToString = (num: number) => (num * 2).toString();

console.log(mapArray(numbers, doubleToString));

type reduceFunction<T, R> = (
  array: T[],
  accumulator: (acc: R, value: T) => R,
  init: T
) => R;

const reduceArr: reduceFunction<number, number> = (
  array,
  accumulator,
  init
) => {
  return array.reduce(accumulator, init);
};

const sumAccumulator = (acc: number, num: number) => acc + num;

console.log(reduceArr(numbers, sumAccumulator, 0));
