import { TopNavigation as PolarisTopNavigation, TopNavigationProps } from "@cloudscape-design/components";
import { useNavigate } from "react-router-dom";
import { onFollow, onIdentityClick } from "./on-follow";

/**
 * A component for displaying a side navigation menu, using the Cloudscape (AWS Polaris) library to prevent full page reloads when links in the menu are clicked.
 *
 * @param props - the component props
 * @param props.onFollow - an optional event handler for the "follow" event, called when a link in the menu is clicked. If not provided, an event handler will be used that prevents full page reloads.
 * @returns a component for displaying a side navigation menu
 */
const TopNavigation = (props: TopNavigationProps) => {
  const navigate = useNavigate();
  const identity = { ...props.identity, onFollow: onIdentityClick(navigate) };
  const utilities = props.utilities?.map(u => ({ ...u, onClick: onFollow(navigate) }));
  return <PolarisTopNavigation {...props} identity={identity} utilities={utilities} />;
}

const i18nStrings = {
  searchIconAriaLabel: 'Search',
  searchDismissIconAriaLabel: 'Close search',
  overflowMenuTriggerText: 'More',
  overflowMenuTitleText: 'All',
  overflowMenuBackIconAriaLabel: 'Back',
  overflowMenuDismissIconAriaLabel: 'Close menu',
};

export const Navigation = () => {
  return (
    <TopNavigation
      identity={{ title: 'Name IT Right', href: '/', logo: { src: './logo.png' } }}
      i18nStrings={i18nStrings}
      utilities={[
        // { text: 'Rules Explorer', type: 'button' },
        { text: 'S3 Demo', type: 'button', href: '/s3' },
        // { text: 'Sagemaker Demo', type: 'button', href: '/sagemaker' },
        { text: 'Sources', type: 'button', href: 'https://github.com/Name-IT-Right/', external: true },
      ]}
    />
  )
}
