/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */


require('bootstrap');
require('../scss/app.scss');
import Chart from 'chart.js'

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register("/sw.js", { scope: "/" }).then(() => {
        });
    });
}