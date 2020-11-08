import React from 'react';
import Format from '../../Format';

const js = `let $dropdownContent;
let $dropdownEllipsis;
let $dropdownMenu3;
let DNONE = 'd-none';
let ELLIPSIS = 'fa-ellipsis-v';

function toggle(content) {
  if (content.hasClass(DNONE)) {
    show(content);
  } else {
    hide(content);
  }
}

function show(content) {
  content.removeClass(DNONE);
}

function hide(content) {
  content.addClass(DNONE);
}

$(window).click(function (event) {
  if (!$(event.target).hasClass(ELLIPSIS)) {
    hide($dropdownContent);
  }
});

//initialization
$(function main() {
  $dropdownContent = $('.dropdown-content');
  $dropdownEllipsis = $('.fa-ellipsis-v');
  $dropdownMenu3 = $('.dropdown-menu3');

  //open dropdown
  $dropdownEllipsis.click(() => toggle($dropdownContent));
  //open dialog
  $dropdownMenu3.click(() => show($dialog));
});`;

const json = [
  {
    code: js,
  },
];

const JQuery = () => {
  return <Format json={json} />;
};

export default JQuery;
