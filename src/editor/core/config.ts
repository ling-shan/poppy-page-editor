import type { Config } from '@measured/puck'
import "@measured/puck/puck.css";

import { ComponentDefinition, getAllRegisteredComponents } from './registerComponent';
import { CategoryDefinition, getAllRegisteredCategories } from './registerCategory';

function getComponentsConfig() {
  const results = getAllRegisteredComponents();
  const config = results.reduce<Record<string, ComponentDefinition>>((map, def) => {
    if (def.name === "root") {
      return map;
    }

    map[def.name] = def;
    return map;
  }, {});
  return config;
}

function getRootConfig() {
  const results = getAllRegisteredComponents();
  const config = results.reduce<Record<string, ComponentDefinition>>((map, def) => {
    if (def.name !== "root") {
      return map;
    }

    map[def.name] = def;
    return map;
  }, {});
  return config;
}

function getCategoriesConfig() {
  const results = getAllRegisteredCategories();
  const config = results.reduce<Record<string, CategoryDefinition>>((map, def) => {
    map[def.name] = def;
    return map;
  }, {});


  return config;
}

let runtimeConfig: Config | null = null;
export function getConfig():Config {
  if (runtimeConfig) {
    return runtimeConfig;
  }

  runtimeConfig = {
    categories: getCategoriesConfig(),
    components: getComponentsConfig() as any,
    root: getRootConfig() as any,
  };

  return runtimeConfig;
}
