import { Button, Container, Form, Header, Input, SpaceBetween } from "@cloudscape-design/components";
import { BaseChangeDetail } from "@cloudscape-design/components/input/interfaces";
import { NonCancelableEventHandler } from "@cloudscape-design/components/internal/events";
import { ValidatedFormField } from "@name-it-right/components";
import { validationsSafe as validations } from "@name-it-right/db";
import { useState } from "react";

export const CreateNotebookForm = () => {
  const [submitClicked, setSubmitClicked] = useState(false);
  const handleOnSubmit = () => setSubmitClicked(true);

  const [inputValue, setInputValue] = useState('');
  const handleOnChange: NonCancelableEventHandler<BaseChangeDetail> = e => setInputValue(e.detail.value);

  return (
    <Form
    actions={
      <SpaceBetween size='xs' direction='horizontal'>
        <Button>Cancel</Button>
        <Button variant='primary' onClick={handleOnSubmit}>Submit</Button>
      </SpaceBetween>
    }
  >
    <Container
      header={
        <Header variant='h2'>Notebook instance settings</Header>
      }
    >
      <ValidatedFormField
        label="Notebook instance name"
        constraintText="Maximum of 63 alphanumeric characters. Can include hyphens (-), but not spaces. Must be unique within your account in an AWS Region."
        nameItRight={{
          enabled: submitClicked,
          input: inputValue,
          rules: validations.SageMaker.NotebookInstance.NotebookInstanceName,
        }}
      >
        <Input
          value={inputValue}
          onChange={handleOnChange}
          placeholder='myawsbucket'
        />
      </ValidatedFormField>
    </Container>
  </Form>
  )
}

