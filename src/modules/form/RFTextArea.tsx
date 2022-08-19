import * as React from 'react';
import { FieldRenderProps } from 'react-final-form';
import TextArea, { OnePirateTextFieldProps } from '../components/TextArea';

function RFTextArea(
  props: OnePirateTextFieldProps & FieldRenderProps<string, HTMLElement>,
) {
  const {
    autoComplete,
    input,
    InputProps,
    meta: { touched, error, submitError },
    ...other
  } = props;

  return (
    <TextArea
      error={Boolean(!!touched && (error || submitError))}
      {...input}
      {...other}
      InputProps={{
        inputProps: {
          autoComplete,
        },
        ...InputProps,
      }}
      helperText={touched ? error || submitError : ''}
      variant="standard"
    />
  );
}

export default RFTextArea;
