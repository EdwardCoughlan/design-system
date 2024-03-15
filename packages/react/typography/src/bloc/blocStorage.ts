import type { ComponentMapper } from "./types";

const components = new Map<string, ComponentMapper>();

const BlocComponentRegister = {
  registerComponent: (key: string, componentMapper: ComponentMapper) => {
    const id = key;
    if (!components.has(id)) {
      components.set(id, componentMapper);
    }
  },

  getComponent: (key: string) => {
    const id = key;
    return components.get(id);
  },

  getMap: () => {
    return components;
  },
};

Object.freeze(BlocComponentRegister);
export default BlocComponentRegister;
