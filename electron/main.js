import { app, BrowserWindow } from 'electron';
import { join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, '..');

function createWindow() {
  const window = new BrowserWindow({
    title: 'Pixel Puppy',
    width: 1280,
    height: 832,
    titleBarStyle: 'hidden',
    frame: false,
    webPreferences: {
      preload: join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  const isDev = process.env.NODE_ENV === 'development';
  const startUrl = isDev 
    ? 'http://localhost:5173' // In dev mode load vite
    : `file://${join(__dirname, '../dist/index.html')}`; // In production, load the compiled file

  window.loadURL(startUrl);
  if (isDev) window.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

