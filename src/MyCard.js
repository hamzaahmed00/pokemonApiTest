import React from "react";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function MyCard({ name, url }) {
  const classes = useStyles();

  const [pImage, setImage] = useState(null);
  const fetchPokemon = () => {
    console.log("here?");
    axios
      .get(url)
      .then(function (response) {
        // handle success
        setPokemon(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <Card className={classes.root}>
      {pokemon && (
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={pokemon.sprites.front_default}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
      )}
    </Card>
  );
}

export default MyCard;
