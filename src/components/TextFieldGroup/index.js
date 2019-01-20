import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup, Label, Input, FormFeedback } from 'reactstrap'

function TextFieldGroup({
  field,
  type,
  label,
  placeholder,
  id,
  error,
  onChange,
  className,
}) {
  return (
    <FormGroup>
      <Label for={id} hidden>
        {label}
      </Label>
      <Input
        type={type}
        name={field}
        onChange={onChange}
        id={id}
        placeholder={placeholder}
        invalid={!!error}
        className={className}
      />
      {error && <FormFeedback tooltip>{error}</FormFeedback>}
    </FormGroup>
  )
}

TextFieldGroup.prototype = {
  field: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  id: PropTypes.string,
  error: PropTypes.object,
  onChange: PropTypes.func.isRequired,
}

export default TextFieldGroup
