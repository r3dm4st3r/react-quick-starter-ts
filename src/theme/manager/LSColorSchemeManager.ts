import {
  isMantineColorScheme,
  MantineColorScheme,
  MantineColorSchemeManager,
} from "@mantine/core";

export interface LSColorManagerOptions {
  key?: string;
}

export const LSColorSchemeManager = ({
  key = "color-scheme",
}: LSColorManagerOptions = {}): MantineColorSchemeManager => {
  let handleStorageEvent: (event: StorageEvent) => void;

  return {
    get: (defaultValue) => {
      if (typeof window === "undefined") {
        return defaultValue;
      }

      try {
        return (
          (window.localStorage.getItem(key) as MantineColorScheme) ||
          defaultValue
        );
      } catch {
        return defaultValue;
      }
    },

    set: (value) => {
      try {
        window.localStorage.setItem(key, value);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.warn("LS Manager was unable to save color scheme.", error);
      }
    },

    subscribe: (onUpdate) => {
      handleStorageEvent = (event) => {
        if (event.storageArea === window.localStorage && event.key === key) {
          isMantineColorScheme(event.newValue) && onUpdate(event.newValue);
        }
      };

      window.addEventListener("storage", handleStorageEvent);
    },

    unsubscribe: () => {
      window.removeEventListener("storage", handleStorageEvent);
    },

    clear: () => {
      window.localStorage.removeItem(key);
    },
  };
};
