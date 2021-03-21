// Importing Bootstrap Collapse.
// I'm not using any other components.
import { Collapse } from 'bootstrap';

console.log("Modules Loaded");

// Enabling the navbar collapse element.
let collapseElement = document.querySelector(".collapse");
let collapseEntity = new Collapse(collapseElement);