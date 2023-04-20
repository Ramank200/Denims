const path = require("path")
const { BrowserWindow, app, Tray, Notification, Menu } = require("electron");
const isDev = require("electron-is-dev")
const os = require("node:os")

let tray;

function createNewWindow() {
  const win = new BrowserWindow({
    height: 1200,
    width: 1000,
    webPreferences: {
      nodeIntegration: true
    }
  })
  win.loadURL(isDev ? "http://localhost:3000" : `file://${path.join(__dirname, "../build/index.html")}`)
  if (isDev) {
    win.webContents.openDevTools({ mode: "detach" });
  }
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Item1', type: 'radio' },
    { label: 'Item2', type: 'radio' },
    { label: 'Item3', type: 'radio', checked: true },
    { label: 'Item4', type: 'radio' }
  ])
  // tray = new Tray("C:/Users/Raman/Desktop/Electron/electron/public/logo.png")
  tray = new Tray("public/logo.png")
  tray.setToolTip("Denims")
  tray.setContextMenu(contextMenu)
  tray.on("click", () => {
    win.isVisible()?win.hide():win.show()
  })
}

console.log(os)
// console.log

app.on('activate', () => {
  console.log("Active")
  if (BrowserWindow.getAllWindows().length === 0) {
    createNewWindow();
  }
});

app.whenReady().then(() => {
  createNewWindow();
  
  
  // tray = new Tray("../public/logo.png")
  // console.log(tray)

  // let c = 1;

  const notification = new Notification({
    title: "Hello",
    timeoutType: "default",
    body: `"Have you done your work ???"`,
    icon: 'public/logo.png',
    subtitle: "Denim waleyyy",
    // silent: false,
    sound:"public/Chling.mp3",
    closeButtonText: "Close",
    hasReply: true,
    replyPlaceholder: "Reply here ...",
    urgency: "critical",
  })

  setInterval(() => {
    notification.show();
  }, 1000*60*60);
  // createNewWindow();
})
