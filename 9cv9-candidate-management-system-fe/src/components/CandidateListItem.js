import React, { Component } from 'react';
import {
  Paper,
  Grid,
  Avatar,
  Button,
  Typography,
  Hidden
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import RoomIcon from '@material-ui/icons/Room';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 0.5,
    paddingBottom: theme.spacing.unit * 0.5,
    marginTop: '20px'
  },
  titlePosition: {
    fontSize: '1.5rem',
    fontWeight: 600
  },
  bigAvatar: {
    width: 70,
    height: 70
  },
  button: {
    marginTop: '10px'
  },
  icon: {
    fontSize: 35,
    color: 'rgb(245, 0, 87);',
    marginRight: 35
  },
  iconBottom: {
    fontSize: 18,
    color: 'rgb(245, 0, 87);'
  }
});

class CandidateListItem extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root} elevation={3}>
        <Grid container style={{ padding: '10px' }}>
          <Grid item sm={2} xs={12} style={{ backgroundColor: 'white' }}>
            <Avatar
              alt="Remy Sharp"
              src={this.props.avatar}
              className={classes.bigAvatar}
            />
            <Grid container style={{ marginTop: '5px' }}>
              <RoomIcon className={classes.iconBottom} />
              <Typography>{this.props.country}</Typography>
            </Grid>
          </Grid>
          <Grid item sm={8} xs={12} style={{ textAlign: 'left' }}>
            <Grid item>
              <Typography className={classes.titlePosition}>
                {this.props.type}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                component="span"
                className={classes.inline}
                color="textPrimary"
              >
                Expected Sallary: USD {this.props.expected_salary}
              </Typography>
              <Typography
                component="span"
                className={classes.inline}
                color="textPrimary"
              >
                Exp: {this.props.exp} years
              </Typography>
              <Typography
                component="span"
                className={classes.inline}
                color="textPrimary"
              >
                Best Skill: {this.props.skill}
              </Typography>
            </Grid>
          </Grid>
          <Grid item sm={2} xs={12} alignItems="center" justify="center">
            <Hidden xsDown>
              <Grid item>
                <FavoriteBorderIcon className={classes.icon} />
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                >
                  Interview
                </Button>
              </Grid>
            </Hidden>
            <Hidden smUp>
              <Grid container>
                <Grid item>
                  <FavoriteBorderIcon className={classes.icon} />
                </Grid>
                <Grid item>
                  <Button
                    fullWidth="true"
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                  >
                    Interview
                  </Button>
                </Grid>
              </Grid>
            </Hidden>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

CandidateListItem.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CandidateListItem);
