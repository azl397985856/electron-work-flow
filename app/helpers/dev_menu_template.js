import { app, BrowserWindow } from 'electron';

export var devMenuTemplate = {
    label: '开发环境',
    submenu: [{
        label: '刷新',
        accelerator: 'F5',
        click: function () {
            BrowserWindow.getFocusedWindow().webContents.reloadIgnoringCache();
        }
    },{
        label: '开发者工具',
        accelerator: 'F12',
        click: function () {
            BrowserWindow.getFocusedWindow().toggleDevTools();
        }
    },{
        label: '退出',
        accelerator: 'CmdOrCtrl+Q',
        click: function () {
            app.quit();
        }
    }]
};
