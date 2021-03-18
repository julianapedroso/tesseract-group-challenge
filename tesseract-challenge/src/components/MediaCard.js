import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import FolderIcon from "@material-ui/icons/Folder";
import TodayIcon from "@material-ui/icons/Today";
import { ListItemAvatar } from "@material-ui/core";
import { MediaLink } from "./styles";

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
    <Card className={classes.root} style={{ width: "300vw" }} key={props.id}>
      <CardHeader
        avatar={
          <ListItemAvatar>
            <Avatar src={props.avatar_url} alt="Tesseract Avatar" />
          </ListItemAvatar>
        }
        action={<IconButton aria-label="settings"></IconButton>}
        title
        variant="h4"
        subheader={props.name}
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
            <GitHubIcon color="inherit"/>
          </MediaLink>
        </IconButton >
        <IconButton>
          <MediaLink
            href={`https://twitter.com/${props.twitter_username}`}
            target="_blank"
          >
            <TwitterIcon color="inherit"/>
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
          <Typography paragraph>"{props.bio}"</Typography>
          <hr />
          <Typography
            variant="body2"
            paragraph
            style={{ display: "flex", alignItems: "center" }}
          >
            <LocationOnIcon color="secondary" style={{marginRight: "0.5rem"}}/>
            {props.location}
          </Typography>
          <Typography
            variant="body2"
            paragraph
            style={{ display: "flex", alignItems: "center" }}
          >
            <FolderIcon color="inherit" style={{marginRight: "0.5rem"}}/>
            Repositórios: {props.public_repos}
          </Typography>
          <Typography
            variant="body2"
            paragraph
            style={{ display: "flex", alignItems: "center" }}
          >
            <PeopleAltIcon color="inherit" style={{marginRight: "0.5rem"}}/>
            Seguidores: {props.followers}
          </Typography>
          <Typography
            variant="body2"
            paragraph
            style={{ display: "flex", alignItems: "center" }}
          >
            <TodayIcon color="inherit " display="inline" style={{marginRight: "0.5rem"}}/>
            <span>Data de entrada: {props.created_at}</span>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default MediaCard;
