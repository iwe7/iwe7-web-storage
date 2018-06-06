import { WebStorageUtility } from "../utility/web-storage";

const cache = {};
export let WebStorage = (webStorage: Storage, key: string) => {
  return (target: Object, propertyName: string): void => {
    key = key || propertyName;
    const storageKey = WebStorageUtility.generateStorageKey(key);
    const storedValue = WebStorageUtility.get(webStorage, key);
    Object.defineProperty(target, propertyName, {
      get: function () {
        return WebStorageUtility.get(webStorage, key);
      },
      set: function (value: any) {
        WebStorageUtility.set(webStorage, key, value);
      }
    });
  };
};

export function LocalStorage(key?: string) {
  return WebStorage(localStorage, key);
}
export function SessionStorage(key?: string) {
  return WebStorage(sessionStorage, key);
}
