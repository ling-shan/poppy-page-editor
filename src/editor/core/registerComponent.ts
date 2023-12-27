import { ComponentConfig, DefaultComponentProps } from "@measured/puck";

export interface ComponentDefinition<P extends DefaultComponentProps = DefaultComponentProps> extends ComponentConfig<P> {
  name: string
}

const componentDefinitions = new Map<string, ComponentDefinition>();

export function registerComponent<P extends DefaultComponentProps = DefaultComponentProps>(component: ComponentDefinition<P>) {
  const name = component.name;
  if (!name) {
    throw new Error("InvalidComponentName");
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  componentDefinitions.set(name, component as any);
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
