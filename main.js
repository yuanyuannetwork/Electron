// 控制应用程序生命周期和创建本机浏览器窗口的模块
const {app, BrowserWindow} = require('electron')
const path = require('path')

//保留窗口对象的全局引用，否则，当JavaScript对象被垃圾收集时，窗口将自动关闭。
let mainWindow

function createWindow () {
  // 创建浏览器窗口。
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // 并加载应用程序的index.html。
  mainWindow.loadFile('konzhitai.html')

  // 打开DevTools。
  // mainWindow.webContents.openDevTools()

  //当窗口关闭时发出。
  mainWindow.on('closed', function () {
    // 取消对窗口对象的引用，如果应用程序支持多个窗口，则通常会将窗口存储在数组中，此时应删除相应的元素。
    mainWindow = null
  })
}

//当Electron完成初始化并准备创建浏览器窗口时，将调用此方法。某些api只能在该事件发生后使用。
app.on('ready', createWindow)

// 关闭所有窗口后退出。
app.on('window-all-closed', function () {
 // 在macOS上，应用程序及其菜单栏通常保持活动状态，直到用户使用Cmd+Q显式退出
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  //在macOS上，当点击dock图标并且没有其他窗口打开时，通常会在应用程序中重新创建一个窗口。
  if (mainWindow === null) createWindow()
})

// 在此文件中，您可以包含应用程序的其他特定主进程代码。您也可以将它们放在单独的文件中，并在这里要求它们。
