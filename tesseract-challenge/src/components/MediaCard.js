import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Divider, ListItemAvatar } from "@material-ui/core";
import { MediaLink } from "./styles"

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const MediaCard = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <ListItemAvatar>
            <Avatar src={props.avatar_url} alt="Tesseract Avatar" />
          </ListItemAvatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title
        variant="h5"
        subheader={props.name}
      />
      <CardMedia
        className={classes.media}
        image={props.avatar_url}
        title="Paella dish"
      />
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
        ></Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton>
          <MediaLink href={props.html_url} target="_blank">
            <GitHubIcon />
          </MediaLink>
        </IconButton>
        <IconButton>
          <MediaLink href={`https://twitter.com/${props.twitter_username}`} target="_blank">
            <TwitterIcon />
          </MediaLink>
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Bio:</Typography>
          <Typography paragraph>{props.bio}</Typography>
          <Typography paragraph>{props.location}</Typography>
          <Typography paragraph>Repositórios: {props.public_repos}</Typography>
          <Typography paragraph>Seguidores: {props.followers}</Typography>
          <Typography paragraph>Data de entrada: {props.created_at}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default MediaCard;
