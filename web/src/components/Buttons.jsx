import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons(props) {
  return (
    <Stack spacing={2} direction="row">
      <Button
        variant="contained"
        value="English"
        onClick={(event) => {
          const filter = props.state.filter(
            (language) => language.language === event.target.value
          );
          props.setStateCopy(filter);
        }}
      >
        English
      </Button>
      <Button
        variant="contained"
        value="French"
        onClick={(event) => {
          const filter = props.state.filter(
            (language) => language.language === event.target.value
          );
          props.setStateCopy(filter);
        }}
      >
        French
      </Button>
      <Button
        variant="contained"
        value="TypeScript"
        onClick={(event) => {
          const filter = props.state.filter(
            (language) => language.language === event.target.value
          );
          props.setStateCopy(filter);
        }}
      >
        TypeScript
      </Button>
      <Button
        variant="contained"
        value="PHP"
        onClick={(event) => {
          const filter = props.state.filter(
            (language) => language.language === event.target.value
          );
          props.setStateCopy(filter);
        }}
      >
        PHP
      </Button>
      <Button
        variant="contained"
        value="PHP"
        onClick={(event) => {
          props.setStateCopy(props.state);
        }}
      >
        Reset Filter
      </Button>
    </Stack>
  );
}
