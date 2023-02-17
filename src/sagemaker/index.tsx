import { Alert, AppLayout, ContentLayout, Header, Link, SpaceBetween } from "@cloudscape-design/components";
import { Breadcrumbs } from "../app/_navigation/breadcrumbs";
import { Navigation } from "../app/_navigation/top-navigation";
import { CreateNotebookForm } from "./form";

const breadcrumbsItems = [
  { text: 'Amazon SageMaker', href: '' },
  { text: 'Notebook instances', href: '' },
  { text: 'Create notebook instance', href: '' }
];

export const SagemakerDemo = () => {
  return (
    <>
      <Navigation />
      <AppLayout
        breadcrumbs={<Breadcrumbs items={breadcrumbsItems} />}
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
          description={<>Amazon SageMaker provides pre-built fully managed notebook instances that run Jupyter notebooks. The notebook instances include example code for common model training and hosting exercises.{" "}<Link external href="https://docs.aws.amazon.com/sagemaker/latest/dg/how-it-works-notebooks-instances.html">Learn more</Link></>}
        >
          Create notebook instance
        </Header>
      }
    >
      <SpaceBetween size="l">
        <Alert>
          The purpose of this demo is to show benefits of input validation implemented in a consistent manner across multiple products and technologies.<br />
          Designed to be read by humans, with Name IT Right it will always be exactly clear why the provided input value is invalid.
        </Alert>
        <CreateNotebookForm />
      </SpaceBetween>
    </ContentLayout>
  )
}
