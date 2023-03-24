const {app, BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1280,
        height: 720,
        titleBarStyle: 'hidden',
        titleBarOverlay: {
            color: '#3c3c3c',
            symbolColor: '#ccc',
            height: 60
        }
    })

    win.loadFile('dist/index.html')
    // win.loadURL('http://localhost:5173/')
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})