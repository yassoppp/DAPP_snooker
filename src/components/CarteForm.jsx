import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./Card.css";
import { makeStyles } from "@mui/styles";
import { Row, Col } from "antd";
import img from "../images/ronnie.jpg";
import Video from "../images/video.mp4";
import { Backclip, Conteneur, SubConteneur, Contenuu } from "./bgvideo";
const useStyles = makeStyles({
  b1: {
    marging: 1000,
  },
  media: {
    height: "100%",
  },
  media1: {
    height: 0,
    border: "2px solid black",
  },
});

export default function ActionAreaCard() {
  const classes = useStyles();
  const a = [1, 1, 1, 1, 1, 1];
  return (
    <div className="collection" id="collection">
      <video autoPlay muted loop id="Video">
        <source src={Video} type="video/mp4" />
      </video>
      <div className="content">
        <h1 className="app__header-h1">Snook's Collection</h1>
      </div>

      <Row gutter={[32, 32]} className="crypto-card-container">
        {a?.map((currency, index) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={index}>
            <Card sx={{ maxWidth: 345 }} className={classes.b1}>
              <CardActionArea
                style={{
                  border: "5px solid var(--color-golden)",
                }}
              >
                <CardMedia
                  component="img"
                  alt="green iguana"
                  image={img}
                  className={classes.media}
                  style={{
                    height: "100%",
                  }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    offer {index + 1}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    description ...
                  </Typography>
                </CardContent>
              </CardActionArea>
              <button type="button" className="custom__button bg">
                BUY
              </button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
