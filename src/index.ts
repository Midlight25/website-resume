'use strict;'

// Importing Bootstrap Collapse.
// I'm not using any other components.
import { Collapse } from 'bootstrap';

console.log("Modules Loaded");

// Enable collapse elements
let collapseElementList:Array<HTMLElement> = [].slice.call(document.querySelectorAll('.collapse'));
let collapseList:Array<Collapse> = collapseElementList.map(function (collapseEl) {
	return new Collapse(collapseEl, {
		toggle: false
	});
});
