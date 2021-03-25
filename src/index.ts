"use strict;";

// Importing Bootstrap Collapse and ScrollSpy
// Tree-shaking!
import { Collapse, ScrollSpy } from "bootstrap";

console.log("Modules Loaded");

// Enable collapse elements
let collapseElementList: Array<HTMLElement> = [].slice.call(
  document.querySelectorAll(".collapse")
);

let collapseList: Array<Collapse> = collapseElementList.map(function (
  collapseEl
) {
  return new Collapse(collapseEl, {
    toggle: false,
  });
});

// Enabling ScrollSpy
let scrollSpyElements: ScrollSpy = new ScrollSpy(document.body, {
  target: "#navbarContent",
});
