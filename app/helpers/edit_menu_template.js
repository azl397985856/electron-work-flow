export var editMenuTemplate = {
    label: '编辑',
    submenu: [
        { label: "撤销", accelerator: "CmdOrCtrl+Z", selector: "undo:" },
        { label: "重做", accelerator: "Shift+CmdOrCtrl+Z", selector: "redo:" },
        { type: "separator" },
        { label: "剪贴", accelerator: "CmdOrCtrl+X", selector: "cut:" },
        { label: "复制", accelerator: "CmdOrCtrl+C", selector: "copy:" },
        { label: "粘贴", accelerator: "CmdOrCtrl+V", selector: "paste:" },
        { label: "全选", accelerator: "CmdOrCtrl+A", selector: "selectAll:" }
    ]
};
