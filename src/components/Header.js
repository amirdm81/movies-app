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

  const setDeceleratingTimeout = (callback, factor, times) => {
    var internalCallback = (function(tick, counter) {
      return function() {
        if (--tick >= 0) {
          window.setTimeout(internalCallback, ++counter * factor);
          callback();
        }
      };
    })(times, 0);

    window.setTimeout(internalCallback, factor);
  };

  const handleStartRandomRating = () => {
    setHasInterval(
      setDeceleratingTimeout(
        () => {
          const id = getRandomInt(movies.length);
          const value = getRandomInt(5);
          dispatch(rate(id, value));
        },
        100,
        10
      )
    );
  };

  const handleStopRandomRating = () => {
    setHasInterval(clearInterval(hasInterval));
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
          <Button onClick={handleStopRandomRating} color="inherit">
            RANDOM RATEING OFF
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
