// import  from '@measured/puck'

export interface PluginDefinition {
  overrides?: any
}

const plugins:PluginDefinition[] = []

// https://puckeditor.com/docs/api-reference/overrides/field-types
export function registerPlugin(plugin: PluginDefinition) {
  plugins.push(plugin);
}

export function getAllRegisteredPlugins():any[] {
  return [...plugins]
}




