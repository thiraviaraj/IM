import React, { useState, useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "100ch",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));



function MainContent() {
  const inputEl = useRef(null);
  let [num, setNum] = useState(1);
  const classes = useStyles();
  useEffect(()=>{
    inputEl.current.focus();
  }, []);
  
  
  return (
    <header className="App-header">
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ paddingTop: "2vh" }}
      >
       <img height="350" alt="to be replaced with prod logo" src="https://helpdeskgeek.com/wp-content/pictures/2019/06/google-photos.png"></img>
        <TextField inputRef={inputEl} id="standard-basic" className={classes.textField} />
        <Grid
          container
          direction="row"
          style={{ paddingTop: 10 }}
          justify="center"
          alignItems="center"
        >
          <Button
            variant="contained"
            style={{ marginRight: 10 }}
            onClick={() => setNum(2)}
            color="primary"
          >
            IM Search {num}
          </Button>
          <Button variant="contained" color="primary">
            I'm Feeling Lucky
          </Button>
        </Grid>
      </Grid>
    </header>
  );
}

export default MainContent;
