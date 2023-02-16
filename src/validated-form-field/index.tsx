import { Alert, FormField, FormFieldProps, SpaceBetween } from "@cloudscape-design/components"
import { Rule, Validation } from "@name-it-right/types"

type NameItRight = {
  enabled: boolean;
  input: string;
  rules: Validation;
}

type ValidatedFormFieldProps = FormFieldProps & { nameItRight: NameItRight };

export const ValidatedFormField = (props: ValidatedFormFieldProps) => {
  const { enabled, input, rules } = props.nameItRight;

  const getMatches = (inputValue: string) => (result: string[], rule: Rule) => {
    const ruleMatchingResult = inputValue.match(rule.regex);
    // If didn't match then that the rule was broken
    if (ruleMatchingResult === null) {
      result.push(rule.errorMessage);
    }
    return result;
  };

  const errorMessages = rules.errors.reduce(getMatches(input), []);
  const error = errorMessages.map((text, i) => <span key={i}>{text}<br/></span>);
  const errorText = enabled && errorMessages.length ? error : '';

  const warningMessages = rules.warnings.reduce(getMatches(input), []);
  const warning = warningMessages.map((text, i) => <span key={i}>{text}<br /></span>);
  const warningText = warningMessages.length ? warning : '';

  return (
    <SpaceBetween size="xxs">
      {warningText && <Alert statusIconAriaLabel="Info">{warningText}</Alert>}
      <FormField
        errorText={errorText}
        {...props}
      />
    </SpaceBetween>
  )
}
