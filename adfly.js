// ==UserScript==
// @name         AdF.ly - Aproxtime Dev
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Skip countdown and redirect to real URL address
// @author       Aproxtime Dev
// @match        http://threadsphere.bid/*
// @updateURL https://raw.githubusercontent.com/aproxtimedev/adfly-bypass/master/adfly.js
// @downloadURL https://raw.githubusercontent.com/aproxtimedev/adfly-bypass/master/adfly.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    if ($("#skip_bu2tton").length == 1) {
        while ($("#skip_bu2tton")[0].href === "") {
            try{
                cnt();
                console.log('Trying to skip countdown');
            }catch(e){
                //entah
            }
        }
        window.stop();
        window.location=$("#skip_bu2tton")[0].href;
    }
})();
