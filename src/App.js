import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Grid, Container, makeStyles } from "@material-ui/core";
import Header from "./components/Header";
import MovieCard from "./components/MovieCard";

const useMainStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(4)
  }
}));

function App() {
  const classes = useMainStyles();
  const movies = useSelector(state => state.movies);

  return (
    <Fragment>
      <Header />
      <Container className={classes.container}>
        <Grid container spacing={2}>
          {movies
            .sort((a, b) => {
              return b.rate - a.rate;
            })
            .map((movie, id) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={id}>
                <MovieCard {...movie} id={id} />
              </Grid>
            ))}
        </Grid>
      </Container>
    </Fragment>
  );
}

export default App;
