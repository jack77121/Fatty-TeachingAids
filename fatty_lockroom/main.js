const electron = require('electron')
const {app, BrowserWindow, dialog} = electron
// const {app, BrowserWindow, dialog} = require('electron')
const url = require('url')
const path = require('path')


let win


function createWindow(){
	const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize;
	win=new BrowserWindow({fullscreen: true, frame: false, toolbar: false, resizable: false, width, height});
	win.setMinimizable(false);
	win.setAlwaysOnTop(true);
	win.setMenu(null);
	win.loadURL(url.format ({
		pathname: path.join(__dirname, 'fatty_2.html'),
		protocol: 'file',
		slashes: true
	}));
	// you need to force it, otherwise the app won't going to terminate
	win.on('close', function(e) { //   <---- Catch close event
		// The dialog box below will open, instead of your app closing.
		e.preventDefault();
	});
}

app.on('ready', createWindow)

