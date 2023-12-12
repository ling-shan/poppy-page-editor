import { ComponentConfig } from "@measured/puck";

export interface ComponentDefinition {
  name: string
  component: ComponentConfig,
  categories?: string[]
}

export type ComponentDefinitionFactory = () => Omit<ComponentDefinition, 'name'>;

const componentDefinitions = new Map<string, ComponentDefinitionFactory>();

export function registerComponent(name: string, factory: ComponentDefinitionFactory) {
  componentDefinitions.set(name, factory);
}

export function hasRegisteredComponent(name: string): boolean {
  return componentDefinitions.has(name);
}

export function getAllRegisteredComponents():ComponentDefinitionFactory[]  {
  const results: ComponentDefinitionFactory[] = [];
  componentDefinitions.forEach((item) => {
    results.push(item);
  })
  return results;
}
