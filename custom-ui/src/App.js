import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

function App() {
  return (
    <div className="App">
      <Select className="method-box">
        <MenuItem value='get'>GET</MenuItem>
        <MenuItem value='post'>POST</MenuItem>
        <MenuItem value='patch'>PATCH</MenuItem>
        <MenuItem value='put'>PUT</MenuItem>
        <MenuItem value='delete'>DELETE</MenuItem>
      </Select>
      <TextField className='url-input' label='Url' placeholder="https://www.api.com/v1/action/" size="medium"></TextField>
      <Button className="btn-send" variant='contained' color='primary'>
        SEND
      </Button>
      <div className="side-bar">
        <Accordion>
          <AccordionSummary>
            <Typography>Headers</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>json headers</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>
            <Typography>Body</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>json body</Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="response-box">
        <Accordion>
          <AccordionSummary>
            <Typography>Headers</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>json headers</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>
            <Typography>Preview</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>json preview</Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default App;
