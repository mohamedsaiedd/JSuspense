"use strict";
var holder = document.querySelectorAll('.JSuspense-wraper .content');
window.addEventListener("load", function (event) {
    holder.forEach(function (ele) {
        ele.classList.add('loaded');
        ele.parentElement.classList.remove('JSuspense-wraper');
    });
});
