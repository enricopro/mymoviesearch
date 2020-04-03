import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MovieCreationRoundedIcon from "@material-ui/icons/MovieCreationRounded";
import MenuIcon from "@material-ui/icons/Menu";
import GitHubIcon from "@material-ui/icons/GitHub";
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <MovieCreationRoundedIcon
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </MovieCreationRoundedIcon>
          <Typography variant="h4" className={classes.title}>
            MyMovieSearch
          </Typography>
          <IconButton color="inherit" href="https://github.com/enricopro/mymoviesearch"><GitHubIcon /></IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
