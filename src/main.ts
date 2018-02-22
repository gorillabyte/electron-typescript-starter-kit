import { app, BrowserWindow } from 'electron';

let mainWindow: Electron.BrowserWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    });

    const fileName = `file://${__dirname}/index.html`;
    mainWindow.loadURL(fileName);

    mainWindow.on('close', () => {
        app.quit();
    });
}

app.on('ready', () => createWindow());
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});
console.log(`Electron Version ${app.getVersion()}`);
