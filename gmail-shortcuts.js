// ==UserScript==
// @name        gmail-extended-shortcuts
// @namespace   affinehat.net
// @description Custom shortcuts for Gmail
// @include     https://mail.google.com/mail/*
// @version     0.1.2
// @grant       none
// ==/UserScript==


// next and previous page button references
var back = document.getElementById(':ip');
var forward = document.getElementById(':iq');

// custom shortcuts
function keyHandler(event) {
  if (event.charCode === 104) { // 'h' pressed
    simulateClick(back);
  }

  if (event.charCode === 108) { // 'l' pressed
    simulateClick(forward);
    event.stopPropagation(); // overwrite other shortcuts for 'l'
  }
}


// Gmail registers a click by 'mousedown' followed by 'mouseup' events
// (likely for Safari compatability reasons).
// Sending 'click' event will not work.

var mdown = new MouseEvent('mousedown', {'bubbles': true});
var mup = new MouseEvent('mouseup', {'bubbles': true});

function simulateClick(element) {
  element.dispatchEvent(mdown);
  element.dispatchEvent(mup);
}


// apply shortcuts globally on <body>
document.body.addEventListener('keypress', keyHandler, true);
