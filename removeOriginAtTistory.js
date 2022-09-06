// ==UserScript==
// @name         Remove origin at tistory
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  titosry 출처를 삭제하자!
// @author       kshired
// @match        https://*.tistory.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.oncontextmenu = new Function ('return true');
    document.ondragstart = new Function ('return true');
    document.onselectstart = new Function ('return true');

    window.addEventListener('copy',(e)=> {
        document.execCommand('copy');
        e.preventDefault();
        console.log(document.getSelection().toString());
        e.clipboardData.setData('text/plain', document.getSelection());
    });

})();

