import { FormField, FormFieldProps } from "@cloudscape-design/components"
import { Rule, Validation } from "@name-it-right/types"

type NameItRight = {
  enabled: boolean;
  input: string;
  rules: Validation;
  showWarnings?: boolean;
}

type ValidatedFormFieldProps = FormFieldProps & { nameItRight: NameItRight };

export const ValidatedFormField = (props: ValidatedFormFieldProps) => {
  const { enabled, input, rules, showWarnings } = props.nameItRight;

  const getMatches = (inputValue: string) => (result: string[], rule: Rule) => {
    const ruleMatchingResult = inputValue.match(rule.regex);
    // If didn't match then that the rule was broken
    if (ruleMatchingResult === null) {
      result.push(rule.errorMessage);
    }
    return result;
  };

  const errorMessages = rules.errors.reduce(getMatches(input), []);
  const error = errorMessages.map((text, i) => <div key={i}>{text}</div>);
  const errorText = enabled && errorMessages.length ? error : '';

  const warningMessages = rules.warnings.reduce(getMatches(input), []);
  const warning = warningMessages.map((text, i) => <i key={i}>{text}<br /></i>);
  const warningText = enabled && showWarnings && warningMessages.length ? warning : '';

  return (
    <FormField
      errorText={(errorText || warningText) && <>{errorText}{warningText}</>}
      {...props}
    />
  )
}
