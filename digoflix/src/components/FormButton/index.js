import React from 'react';
import { Button, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const ButtonSucces = withStyles({
  root: {
    // #009422
    borderColor: '#fff',
    color: '#fff',
    // Atrasa o efeito do botão
    transition: '0.3s',
    '&  MuiButton-outlined': {
      color: '#fff',
    },
    '&:hover': {
      color: '#009422',
      borderColor: '#009422',
    },
  },
})(Button);

function FormButton({ value }) {
  return (
    <ButtonSucces variant="outlined" color="primary" type="submit">
      {value}
    </ButtonSucces>
  );
}

// Tipagem com Prop-Types
FormButton.propTypes = {
  value: PropTypes.string.isRequired,
};

export default FormButton;
