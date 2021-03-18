import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "35ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

const SimpleList = (props) => {
  const classes = useStyles();

  return (
    <List className={classes.root} key={props.id}>
      <ListItem alignItems="center">
        <ListItemAvatar>
          <Avatar src={props.avatar_url} alt="Tesseract Avatar" />
        </ListItemAvatar>
        <List>
          <Link to={`/details/${props.login}`}>
            <ListItemText
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body1"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    {props.login}
                  </Typography>
                </React.Fragment>
              }
            />
          </Link>
        </List>
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
};

export default SimpleList;
