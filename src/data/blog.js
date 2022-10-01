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
  {
    id: uuid(),
    title: "Async & Defer HTML Attributes",
    content:
    "Async & Defer are boolean attributes that are used along with script tags to load the external script efficiently"
    link: "https://savitaverma.hashnode.dev/understanding-async-defer-html-attributes",
  },
  {
    id: uuid(),
    title: "Event Bubbling v/s Event Capturing",
    content:
      "We will understand event listeners before understanding event bubbling & event capturing. An event listener is nothing but a function that gets executed when an event happens and that event can be anything like onclick event, onchange event, pressing key, etc.",
    link: "https://savitaverma.hashnode.dev/event-bubbling-vs-event-capturing",
  },
];

export { blogData };
