import React from 'react'
import type { ComponentConfig, Config } from '@measured/puck'
import "@measured/puck/puck.css";

import { getAllRegisteredComponents } from './registerComponent';

function getComponentsConfig() {
  const components = getAllRegisteredComponents();
  const config = components.reduce<Record<string, ComponentConfig>>((map, factory) => {
    const componentDef = factory();
    map[factory.name] = componentDef.component;
    return map;
  }, {});
  return config;
}

function getRootConfig() {
  const config = getComponentsConfig();
  return config.root ?? undefined;
}

function getCategoriesConfig() {
  const components = getAllRegisteredComponents();
  const config: Config["categories"] = {};

  components.forEach((factory) => {
    const componentDef = factory();
    if (!componentDef.categories) {
      return;
    }

    componentDef.categories.forEach((category) => {
      if (!config[category]) {
        config[category] = {
          components: []
        }
      }

      config[category].components?.push(factory.name);
    })
  })

  return config;
}

let commonConfig: Config | null = null;

export function getCommonConfig() {
  if (commonConfig) {
    return commonConfig;
  }

  commonConfig = {
    categories: getCategoriesConfig(),
    components: getComponentsConfig() as any,
    root: getRootConfig() as any,
  };

  return commonConfig;
}

let customizedConfig: Config | null = null;
export function getCustomizedConfig() {
  return customizedConfig ?? {};
}

export function setCustomizedConfig(config: Config) {
  customizedConfig = config;
}


let editorConfig: Config | null = null;
export function getEditorConfig() {
  if (editorConfig) {
    return editorConfig;
  }

  editorConfig = {
    ...getCommonConfig(),
    ...customizedConfig,
  };

  return editorConfig as Config;
}

let renderConfig: Config | null = null;
export function getRenderConfig() {
  if (renderConfig) {
    return renderConfig;
  }

  renderConfig = {
    ...commonConfig,
    ...customizedConfig,
  } as any;

  return renderConfig as Config;
}
