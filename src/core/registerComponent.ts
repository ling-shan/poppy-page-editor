import { ComponentConfig } from "@measured/puck";

export interface ComponentDefinition extends ComponentConfig {
  name: string
}

const componentDefinitions = new Map<string, ComponentDefinition>();

export function registerComponent(component: ComponentDefinition) {
  const name = component.name;
  if (!name) {
    throw new Error("InvalidComponentName");
  }

  componentDefinitions.set(name, component);
}

export function hasRegisteredComponent(name: string): boolean {
  return componentDefinitions.has(name);
}

export function getRegisteredComponent(name: string) {
  return componentDefinitions.get(name);
}

export function getAllRegisteredComponents():ComponentDefinition[]  {
  const results: ComponentDefinition[] = [];
  componentDefinitions.forEach((item) => {
    results.push(item);
  })
  return results;
}
