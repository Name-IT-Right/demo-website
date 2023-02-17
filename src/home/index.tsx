import { AppLayout, Container, ContentLayout, Header, SpaceBetween, TextContent } from "@cloudscape-design/components";
import { Breadcrumbs } from "../app/_navigation/breadcrumbs";
import { Link } from "../app/_navigation/link";
import { Navigation } from "../app/_navigation/top-navigation";

const breadcrumbsItems = [
  { text: 'Name IT Right', href: '/' },
  { text: 'Home', href: '#' }
];

export const Home = () => {
  return (
    <>
      <Navigation />
      <AppLayout
        breadcrumbs={<Breadcrumbs items={breadcrumbsItems} />}
        content={<Content />}
        navigationHide
        toolsHide
      />
    </>
  )
}

export const Content = () => {
  return (
    <ContentLayout header={<Header variant='h1'>Welcome!</Header>}>
      <SpaceBetween size="l">
        <Container header={<Header>About</Header>}>
          <TextContent>
            <p>
              We would like to propose a new approach to validating names for AWS resources.
            </p>
            <p>
              Instead of copying rules from other projects or codifying them from the documentation yourself,
              you are now able to access them in an easy-to-use format for your next software project!
            </p>

            <p>
              It's like a library with all AWS naming restrictions, that can be used at a backend or a frontend,
              or in any other tool you're currently building - you choose!
            </p>
          </TextContent>
        </Container>

        <Container header={<Header>UI Demos</Header>}>
          <TextContent>
            <p>
              Please see our demos that are using Name IT Right rules.
            </p>
            <p>
              In the <Link href="/s3"><b>S3 Demo</b></Link>, please see how potential incompatibilities
              between services can be displayed to users in an inobtrusive way, while they are creating their resources.
            </p>
            <p>
              In the <Link href="/sagemaker"><b>Sagemaker Demo</b></Link>, you can see how our
              granular rule approach gives users specific errors. Designed to be read by humans,
              with Name IT Right it will always be clear what is wrong with the input about the invalid input,
              instead of just stating <i>"Member must satisfy regular expression pattern"</i>.
            </p>
          </TextContent>
        </Container>

        {/* <Container header={<Header>Validating names in CloudFormation templates</Header>}>
          <TextContent>
            <p>
              You can donwload our Visual Studio Code extension here: <Link href="/s3"><b>S3 Demo</b></Link>, please see how potential incompatibilities
            </p>
          </TextContent>
        </Container> */}
      </SpaceBetween>
    </ContentLayout>
  )
}
