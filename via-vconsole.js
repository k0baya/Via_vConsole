// ==UserScript==
// @name         vConsole
// @name:cn      vConsole
// @version      0.9
// @description  Via手机浏览器控制台
// @author       k0baya
// @include      *
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdn.jsdelivr.net/npm/vconsole@latest/dist/vconsole.min.js';
    document.body.appendChild(script);
    script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML =
    `
        (function wait() {
            try {
                var vc = new VConsole();
                console.log('vConsole has been created.');
            } catch {
                setTimeout(wait, 50);
            };
        })();
    `;
    document.body.appendChild(script);
})();
