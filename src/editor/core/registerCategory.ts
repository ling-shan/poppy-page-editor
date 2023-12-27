export interface CategoryDefinition {
  name: string
  components?: string[];
  title?: string;
  visible?: boolean;
  defaultExpanded?: boolean;
}

const categoryDefinitions = new Map<string, CategoryDefinition>();

export function registerCategory(category: CategoryDefinition) {
  const name = category.name;
  if (!name) {
    throw new Error("InvalidCategoryName");
  }

  const categoryDefinition = categoryDefinitions.get(name);
  if (!categoryDefinition) {
    categoryDefinitions.set(name, {
      ...category,
      components: [...(category.components ?? [])],
    });
    return;
  }

  if (category.title !== undefined) {
    categoryDefinition.title = category.title;
  }

  if (category.visible !== undefined) {
    categoryDefinition.visible = category.visible;
  }

  if (category.defaultExpanded !== undefined) {
    categoryDefinition.defaultExpanded = category.defaultExpanded;
  }

  if (Array.isArray(category.components)) {
    categoryDefinition.components?.push(...category.components);
  }
}

export function hasRegisteredCategory(name: string): boolean {
  return categoryDefinitions.has(name);
}

export function getRegisteredCategory(name: string) {
  return categoryDefinitions.get(name);
}

export function getAllRegisteredCategories():CategoryDefinition[]  {
  const results: CategoryDefinition[] = [];
  categoryDefinitions.forEach((item) => {
    results.push(item);
  })
  return results;
}


