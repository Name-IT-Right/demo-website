import { Alert, AppLayout, ContentLayout, Header, Link, SpaceBetween } from "@cloudscape-design/components";
import { Breadcrumbs } from "../app/breadcrumbs";
import { CreateBucketForm } from "./form";

const breadcrumbsItems = [
  { text: 'Amazon S3', href: '#' },
  { text: 'Buckets', href: '#' },
  { text: 'Create bucket', href: '#' }
];

export const S3Demo = () => {
  return (
    <AppLayout
      breadcrumbs={<Breadcrumbs items={breadcrumbsItems} />}
      content={<Content />}
      contentType='form'
      navigationHide={true}
      toolsHide={true}
    />
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
