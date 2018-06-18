import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router} from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import MyRouter from './components/Router'


const muiTheme = createMuiTheme({});

render(
  <MuiThemeProvider theme={muiTheme}>
    <Router >
      <MyRouter/>
    </Router>
  </MuiThemeProvider>,
  document.getElementById("root")
);
