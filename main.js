const { app, BrowserWindow } = require('electron');

app.on('web-contents-created', (_, webContents) => {
  // fires when sandbox is true
  // errorCode is -3
  webContents.on('did-fail-load', (event, errorCode) => console.log('did-fail-load'));

  // fires when sandbox is false
  webContents.on('new-window', () => console.log('new-window'));
});

app.on('ready', () => {
  const win = new BrowserWindow({ webPreferences: { sandbox: true, webviewTag: true } });
  win.loadURL('file://' + __dirname + '/index.html');
});
