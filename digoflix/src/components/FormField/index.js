import React from 'react';
import { TextField, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const TextFieldWhite = withStyles({
  root: {
    background: '#292626',
    // borderColor: "#f1f1f1",
    marginBottom: '1rem',
    color: '#f1f1f1',
    borderRadius: '4px',
    // Label do form
    '& .MuiFormLabel-root': {
      color: '#f1f1f1',
      borderColor: '#f1f1f1',
    },
    // Cor do Texto
    '& input': {
      color: '#f1f1f1',
    },

    '& .MuiOutlinedInput-root': {
      // Aqui é a borda do campo
      '& fieldset': {
        // borderColor: "white",
      },
      '&:hover fieldset': {
        // borderColor: "white",
      },
      '&.Mui-focused fieldset': {
        // borderColor: "#f1f1f1",
        borderColor: 'transparent',
      },
      /* Para textarea */
      '& .MuiInputBase-input': {
        color: '#f1f1f1',
      },
    },
  },
})(TextField);

function FormField({
  label,
  value,
  name,
  onChange,
  type,
  multiline,
  required,
}) {
  return (
    <TextFieldWhite
      type={type}
      label={label}
      variant="outlined"
      autoComplete="off"
      value={value}
      name={name}
      onChange={onChange}
      required={required}
      multiline={multiline}
      fullWidth
    />
  );
}

// Valores padrão
FormField.defaultProps = {
  type: 'text',
  value: '',
  multiline: false,
  required: false,
  onChange: () => {},
};

// Tipagem com Prop-Types
FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  multiline: PropTypes.bool,
  required: PropTypes.bool,
  onChange: PropTypes.func,
};
export default FormField;
