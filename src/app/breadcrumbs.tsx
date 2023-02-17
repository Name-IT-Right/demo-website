import { BreadcrumbGroup, BreadcrumbGroupProps } from "@cloudscape-design/components";

interface Props {
  items: BreadcrumbGroupProps.Item[];
}

export const Breadcrumbs = (props: Props) => (
  <BreadcrumbGroup items={props.items} expandAriaLabel="Show path" ariaLabel="Breadcrumbs" />
);