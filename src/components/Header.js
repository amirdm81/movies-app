import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles
} from "@material-ui/core";
import { rate } from "../redux/actions/movies";

const useHeaderStyles = makeStyles({
  title: {
    flexGrow: 1
  }
});

const Header = () => {
  const classes = useHeaderStyles();
  const movies = useSelector(state => state.movies);
  const dispatch = useDispatch();
  const [hasInterval, setHasInterval] = useState(false);

  const getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  const update = () => {
    const id = getRandomInt(movies.length);
    const value = getRandomInt(5);
    dispatch(rate(id, value));
  };

  const loop = () => {
    let rand = Math.round(Math.random() * (3000 - 500)) + 500;
    setHasInterval(
      setTimeout(() => {
        update();
        loop();
      }, rand)
    );
  };

  const handleStartRandomRating = () => {
    loop();
  };

  const handleStopRandomRating = () => {
    setHasInterval(clearTimeout(hasInterval));
  };

  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Movie App
        </Typography>
        {!hasInterval ? (
          <Button onClick={handleStartRandomRating} color="inherit">
            RANDOM RATING ON
          </Button>
        ) : (
          <Button color="inherit" onClick={handleStopRandomRating}>
            RANDOM RATEING OFF
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
