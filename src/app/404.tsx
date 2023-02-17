import { AppLayout, Button, Container, ContentLayout, Header, Link, TextContent } from "@cloudscape-design/components";
import { Breadcrumbs } from "./_navigation/breadcrumbs";
import { useNavigate } from "react-router-dom";
import { Navigation } from "./_navigation/top-navigation";

const breadcrumbsItems = [
  { text: 'Name IT Right', href: '' },
  { text: '404', href: '' },
];

export const Page404 = () => {
  return (
    <>
      <Navigation />
      <AppLayout
        breadcrumbs={<Breadcrumbs items={breadcrumbsItems} />}
        content={<Content404 />}
        contentType='form'
        navigationHide
        toolsHide
      />
    </>
  )
}

const Content404 = () => {
  const navigate = useNavigate();

  return (
    <ContentLayout header={<Header variant="h1">404.</Header>}>
      <Container header={<Header variant="h2">The requested resource could not be found.</Header>}>
        <TextContent>
          <p>Please check the URL and try again.</p>
        </TextContent>
        <Link data-testid="go-back" onFollow={() => navigate(-1)}><Button variant="primary" iconName="arrow-left">Go back</Button></Link>
      </Container>
    </ContentLayout>
  )
}