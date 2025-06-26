import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
    getAppPath: (name: string) => ipcRenderer.invoke('app:get-path', name)
});
