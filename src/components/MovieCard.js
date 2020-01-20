import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab";

import { rate as rateFunc } from "../redux/actions/movies";

const MovieCard = ({ name, image, rate, id }) => {
  const dispatch = useDispatch();

  const handleChangeRate = (e, value) => {
    dispatch(rateFunc(id, value));
  };

  return name && image ? (
    <Card>
      <CardMedia
        component="img"
        image={require(`../assets/images/${image}`)}
        title={name}
      />
      <CardContent>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Rating name={name} value={rate} onChange={handleChangeRate} />
      </CardContent>
    </Card>
  ) : null;
};

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rate: PropTypes.number
};

export default MovieCard;
