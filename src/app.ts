import '../templates/style.scss';
const isElectron = require('is-electron-renderer');

function init() {
    if(isElectron) {
        document.getElementsByTagName('body')[0].innerHTML = `node Version: ${process.versions.node}`;
    } else {
        document.getElementsByTagName('body')[0].innerHTML = `browser Version`;
    }
}

init();
