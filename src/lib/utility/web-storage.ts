const KEY_PREFIX = "iwe7WebStorage";

export class WebStorageUtility {
  static generateStorageKey(key: string): string {
    return `${KEY_PREFIX}_${key}`;
  }
  static get(storage: Storage, key: string): any {
    const storageKey = WebStorageUtility.generateStorageKey(key);
    const value = storage.getItem(storageKey);
    return WebStorageUtility.getGettable(value);
  }
  static set(storage: Storage, key: string, value: any): void {
    const storageKey = WebStorageUtility.generateStorageKey(key);
    storage.setItem(storageKey, WebStorageUtility.getSettable(value));
  }
  static remove(storage: Storage, key: string): void {
    const storageKey = WebStorageUtility.generateStorageKey(key);
    storage.removeItem(storageKey);
  }
  private static getSettable(value: any): string {
    return typeof value === "string" ? value : JSON.stringify(value);
  }
  private static getGettable(value: string): any {
    try {
      return JSON.parse(value);
    } catch (e) {
      return value;
    }
  }
}
