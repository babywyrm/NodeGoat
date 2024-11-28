const express = require('express');
const handlebars = require('handlebars');
const _ = require('lodash');

const app = express();
const port = 3000;

// Vulnerable Handlebars usage
const template = handlebars.compile("Hello {{name}}!");
const result = template({ name: "<script>alert('XSS')</script>" });
console.log(result); // Will output: Hello <script>alert('XSS')</script>

// Example of Lodash prototype pollution
_.set({}, '__proto__.polluted', 'yes');
console.log({}.polluted); // Outputs "yes" - vulnerable to prototype pollution!

// Simple server
app.get('/', (req, res) => res.send('Vulnerable Node.js App'));
app.listen(port, () => console.log(`App running on http://localhost:${port}`));

