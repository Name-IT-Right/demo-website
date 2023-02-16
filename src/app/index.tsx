import { Alert, AppLayout, BreadcrumbGroup, ContentLayout, Header, Link, SpaceBetween, TopNavigation } from "@cloudscape-design/components"
import { resourceCreateBreadcrumbs } from "./breadcrumbs"
import { CreateBucketForm } from "./form"

const i18nStrings = {
  searchIconAriaLabel: 'Search',
  searchDismissIconAriaLabel: 'Close search',
  overflowMenuTriggerText: 'More',
  overflowMenuTitleText: 'All',
  overflowMenuBackIconAriaLabel: 'Back',
  overflowMenuDismissIconAriaLabel: 'Close menu',
};

const Breadcrumbs = () => (
  <BreadcrumbGroup items={resourceCreateBreadcrumbs} expandAriaLabel="Show path" ariaLabel="Breadcrumbs" />
);

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
      <AppLayout
        breadcrumbs={<Breadcrumbs />}
        content={<Content />}
        contentType='form'
        navigationHide={true}
        toolsHide={true}
      />
    </>
  )
}

const Content = () => {
  return (
    <ContentLayout
      header={
        <Header
          variant='h1'
          description={<>Buckets are containers for data stored in S3.{" "}<Link external href="https://docs.aws.amazon.com/console/s3/usings3bucket">Learn more</Link></>}
          info={<Link>Info</Link>}
        >
          Create Bucket
        </Header>
      }
    >
      <SpaceBetween size="l">
        <Alert>
          The purpose of this demo is to:
          <li>show benefits of input validation implemented in a consistent manner across multiple products and technologies,</li>
          <li>open a discussion on how AWS Console users should be informed about incompatibilities between services when creating resources.</li>
          Official <b><Link href='https://cloudscape.design/patterns/general/validation/' external >Validation pattern</Link></b> recommend delaying validation before a form is submitted.<br />
          We argue that some information, if displayed when applicable and in an unobtrusive way, may be useful before submitting the form.
        </Alert>
        <CreateBucketForm />
      </SpaceBetween>
    </ContentLayout>
  )
}
