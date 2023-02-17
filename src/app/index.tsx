import { TopNavigation } from "@cloudscape-design/components";
import { S3Demo } from "../s3";

const i18nStrings = {
  searchIconAriaLabel: 'Search',
  searchDismissIconAriaLabel: 'Close search',
  overflowMenuTriggerText: 'More',
  overflowMenuTitleText: 'All',
  overflowMenuBackIconAriaLabel: 'Back',
  overflowMenuDismissIconAriaLabel: 'Close menu',
};

export const App = () => {
  return (
    <>
      <TopNavigation
        identity={{ title: 'Name IT Right', href: '#', logo: { src: './logo.png' } }}
        i18nStrings={i18nStrings}
        utilities={[
          { text: "Rules Explorer", type: "button" },
          { text: "S3 Demo", type: "button" },
          { text: "Sources", type: 'button', href: 'https://github.com/Name-IT-Right/', external: true },
        ]}
      />
      <Main />
    </>
  )
}

const Main = () => {
  return (
    <S3Demo />
  )
}