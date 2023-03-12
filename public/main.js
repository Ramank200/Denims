const path = require("path")
const { BrowserWindow, app } = require("electron");
const isDev = require("electron-is-dev")


function createNewWindow(){
    const win = new BrowserWindow({
      height:800,
      width:1000,
      webPreferences:{
       nodeIntegration:true
      }
    })
    win.loadURL(isDev?"http://localhost:3000":`file://${path.join(__dirname,"../build/index.html")}`)
    if (isDev) {
        win.webContents.openDevTools({ mode: 'detach' });
      }
}

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createNewWindow();
    }
  });

app.whenReady().then(()=>{
    createNewWindow();
})
