import React, { useState } from "react";
import axios from "axios";
import Results from "./components/Results";
import Popup from "./components/Popup";
import Header from "./components/Header";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import theme from "./components/theme";
import {ThemeProvider} from '@material-ui/core/styles';
import "./styles.css";
import {TextField, Grid} from "@material-ui/core";
import Footer from "./components/Footer"


function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  });
  const apiurl = "https://www.omdbapi.com/?apikey=7b037297";

  const search = e => {
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.s)
        .then(response => {
          let results = response.data.Search;
          setState(prevState => {
            return { ...prevState, results: results };
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  const handleInput = e => {
    let s = e.target.value;

    setState(prevState => {
      return { ...prevState, s: s };
    });
  };

  const openPopup = id => {
    axios(apiurl + "&i=" + id).then(response => {
      let result = response.data;
      console.log(result);
      setState(prevState => {
        return { ...prevState, selected: result };
      });
    });
  };

  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: {} };
    });
  };

  const openRandomPopup = () => {
    let randomId = Math.floor(Math.random() * (9999999 - 1000000 + 1) + 1000000);
    console.log(randomId);

    axios(apiurl + "&i=tt" + randomId).then(response => {
      let result = response.data;
      console.log(result);
      if (result.Response === "True" && result.Poster !== "N/A") {
        setState(prevState => {
          return { ...prevState, selected: result };
        });
      } else {
        openRandomPopup();
      }
    });
  };

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
    <Header />

      <div className="input">
      <Button variant="contained" color="primary" size="large" onClick={openRandomPopup}>
        Inspire me!
      </Button>
      <Typography color="secondary" variant="h6">or</Typography>
      <TextField
        search={search}
        onChange={handleInput}
        onKeyPress={search}
        type="text"
        id="outlined-basic"
        label="search for a film..."
        variant="outlined"
      />
      </div>
      
      {typeof state.selected.Title !== "undefined" ? (
         <Popup className="title" selected={state.selected} closePopup={closePopup} />
      ) : (
          <Grid item xs><Results results={state.results} openPopup={openPopup} /></Grid>
      )}
      <div class="divider"></div>
     <Footer/>
    
    </div>    
    </ThemeProvider>

  );
}

export default App;
