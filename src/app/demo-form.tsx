import { Button, Form, Header, Input, Link, SpaceBetween, TextContent } from "@cloudscape-design/components"
import { BaseChangeDetail } from "@cloudscape-design/components/input/interfaces"
import { NonCancelableEventHandler } from "@cloudscape-design/components/internal/events"
import { validationsSafe as validations } from "@name-it-right/db"
import { useState } from "react"
import { ValidatedFormField } from "../validated-form-field"

export const DemoForm = () => {
  const [submitClicked, setSubmitClicked] = useState(false);
  const handleOnSubmit = () => setSubmitClicked(true);

  const [inputValue, setInputValue] = useState('');
  const handleOnChange: NonCancelableEventHandler<BaseChangeDetail> = e => setInputValue(e.detail.value);

  return (
    <Form
      header={<Header variant='h2'>ValidatedFormField Demo</Header>}
      actions={
        <SpaceBetween size='xxs' direction='horizontal'>
          <Button>Cancel</Button>
          <Button variant='primary' onClick={handleOnSubmit}>Submit</Button>
        </SpaceBetween>
      }
    >
      <ValidatedFormField
        label="Bucket name"
        constraintText={
          <>
            Bucket name must be globally unique and must not contain spaces or uppercase letters.{" "}
            <Link external fontSize="body-s" href="https://docs.aws.amazon.com/console/s3/bucket-naming">See rules for bucket naming</Link>
          </>
        }
        nameItRight={{
          enabled: submitClicked,
          input: inputValue,
          rules: validations.S3.Bucket.BucketName,
        }}
      >
        <Input
          value={inputValue}
          onChange={handleOnChange}
          placeholder='myawsbucket'
        />
      </ValidatedFormField>
    </Form>
  )
}
