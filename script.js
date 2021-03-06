#!/usr/bin/env node

console.log("This is post init script");
const prompts = require("prompts");

const questions = [
  {
    type: "text",
    name: "username",
    message: "What is your GitHub username?",
  },
  {
    type: "number",
    name: "age",
    message: "How old are you?",
  },
  {
    type: "text",
    name: "about",
    message: "Tell something about yourself",
    initial: "Why should I?",
  },
];

(async () => {
  const response = await prompts(questions);

  // => response => { username, age, about }
})();
