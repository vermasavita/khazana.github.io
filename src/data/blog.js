import { v4 as uuid } from "uuid";

const blogData = [
  {
    id: uuid(),
    title: "How JavaScript Code is Executed?",
    content:
      "JavaScript is a single-threaded, non-blocking, asynchronous, concurrent programming language with lots of flexibility.",
    link: "https://savitaverma.hashnode.dev/how-javascript-code-is-executed",
  },
  {
    id: uuid(),
    title: "7 Features you MUST know about Javascript ES6",
    content:
      "JavaScript ES6 or ECMAScript 2015 or ECMAScript 6 is the 6th major edition to the ECMAScript language. It has introduced new features like, arrow function, let & const, destructuring, rest operator & spread operator and many others",
    link: "https://savitaverma.hashnode.dev/7-features-you-must-know-about-javascript-es6",
  },
  {
    id: uuid(),
    title: "Master the Arrow Function",
    content:
      "Arrow functions were introduced in ES6 version of JavaScript. It is a new way to write an anonymous function with some extra benefits and limitations. We cannot use arrow function in all the situations though",
    link: "https://savitaverma.hashnode.dev/master-the-arrow-function",
  },
];

export { blogData };
