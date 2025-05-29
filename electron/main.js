import { app, BrowserWindow } from 'electron'
import { join } from 'path'

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: join(__dirname, 'preload.js'),
    }
  })

  win.loadURL('http://localhost:5173') // Vite dev server
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
