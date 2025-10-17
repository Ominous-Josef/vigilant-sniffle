import type { Storage } from "redux-persist";

// Create a noop storage for SSR that implements the Storage interface
const createNoopStorage = (): Storage => {
  return {
    getItem(_key: string): Promise<string | null> {
      return Promise.resolve(null);
    },
    setItem(_key: string, _value: string): Promise<void> {
      return Promise.resolve();
    },
    removeItem(_key: string): Promise<void> {
      return Promise.resolve();
    },
  };
};

// Create a proper storage that works in both SSR and client
const createClientStorage = (): Storage => {
  if (typeof window === "undefined") {
    // Server-side: return noop storage
    return createNoopStorage();
  }

  // Client-side: return actual localStorage wrapper
  return {
    getItem(key: string): Promise<string | null> {
      return Promise.resolve(window.localStorage.getItem(key));
    },
    setItem(key: string, value: string): Promise<void> {
      window.localStorage.setItem(key, value);
      return Promise.resolve();
    },
    removeItem(key: string): Promise<void> {
      window.localStorage.removeItem(key);
      return Promise.resolve();
    },
  };
};

const storage = createClientStorage();

export default storage;