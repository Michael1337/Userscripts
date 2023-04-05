// ==UserScript==
// @name         Hide Ads on Ebay Kleinanzeigen
// @version      1
// @description  Hides HTML Ads on ebay-kleinanzeigen.de
// @match        https://www.ebay-kleinanzeigen.de/*
// ==/UserScript==

(function() {
    'use strict';
    setTimeout(function() {
        let ad = document.getElementById("srp_adsense-top");
        if (ad) ad.style.display = 'none';

        ad = document.getElementById("brws_banner-supersize");
        if (ad) ad.style.display = 'none';

        document.querySelectorAll(".badge-topad").forEach(function(el) {
            el.style.display = 'none';
        })

        document.querySelectorAll(".ad-listitem .badge-hint-pro-small-srp").forEach(function(el) {
            ad = el.closest(".ad-listitem");
            if(ad) ad.style.display = 'none';
        })

        document.querySelectorAll("iframe").forEach(function(el) {
            let ad = el.closest(".ad-listitem");
            if(ad) ad.style.display = 'none';
        })
    }, 50);
})();
