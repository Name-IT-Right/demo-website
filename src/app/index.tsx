import { AppLayout, Container, Header } from "@cloudscape-design/components"
import { DemoForm } from "./demo-form"

export const App = () => {
  return (
    <AppLayout
      content={<Content />}
      contentType='form'
      navigationHide={true}
      toolsHide={true}
    />
  )
}

const Content = () => {
  return (
    <Container header={<Header variant='h1'>Name IT Right</Header>}>
      <DemoForm />
    </Container>
  )
}
