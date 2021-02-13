// Importing Bootstrap
const bootstrap = require('bootstrap');

console.log("Modules Loaded");

let exampleEl = document.getElementById('exampleTooltip');
let tooltip = new bootstrap.Tooltip(exampleEl, {
	animation: true,
})