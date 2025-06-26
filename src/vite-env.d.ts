/// <reference types="vite/client" />
interface Window {
    electronAPI: {
        getAppPath: (name: string) => Promise<string>;
    };
}
