import React, { Component } from 'react';
import {
  AppBar,
  Hidden,
  Toolbar,
  Typography,
  Grid,
  Fab,
  IconButton,
  Badge,
  Menu,
  MenuItem
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExitToApp from '@material-ui/icons/ExitToApp';

const styles = {
  root: {
    flexGrow: 1
  },
  fab: {
    margin: 2,
    backgroundColor: 'rgb(252, 67, 73)',
    width: '100px',
    height: '30px'
  },
  title: {
    marginTop: '12px',
    alignItems: 'center',
    marginRight: '30px',
    justifyContent: 'center'
  }
};

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      anchorEl: null,
      setAnchorEl: null
    };
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <AppBar position="static" color="default">
          <Toolbar>
            <Grid
              justify="space-between" // Add it here :)
              container
              spacing={24}
            >
              <Grid item>
                <a href="/">
                  <img
                    alt="logo-9cv9"
                    src="https://9cv9.com/wp-content/uploads/2018/04/Webp.net-resizeimage.png"
                    style={{ height: 35 }}
                  />
                </a>
              </Grid>

              <Hidden smUp>
                <IconButton
                  aria-label="More"
                  aria-owns={this.state.open ? 'long-menu' : undefined}
                  aria-haspopup="true"
                  onClick={event =>
                    this.setState({
                      open: true
                    })
                  }
                >
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  id="simple-menu"
                  anchorReference="none"
                  open={this.state.open}
                  onClose={() => this.setState({ open: false })}
                  PaperProps={{
                    style: {
                      width: 200,
                      padding: 0,
                      left: '60%',
                      transform: 'translateX(-50%)'
                    }
                  }}
                >
                  <MenuItem onClick={() => this.setState({ open: false })}>
                    <IconButton color="inherit">
                      <Badge badgeContent={11} color="secondary">
                        <NotificationsIcon />
                      </Badge>
                    </IconButton>
                    <p>Notifications</p>
                  </MenuItem>
                  <MenuItem onClick={() => this.setState({ open: false })}>
                    <IconButton color="inherit">
                      <AccountCircle />
                    </IconButton>
                    <p>Candidates</p>
                  </MenuItem>
                  <MenuItem onClick={() => this.setState({ open: false })}>
                    <IconButton color="inherit">
                      <ExitToApp />
                    </IconButton>
                    <p>Logout </p>
                  </MenuItem>
                </Menu>
              </Hidden>

              <Hidden xsDown>
                <Grid item>
                  <div
                    style={{
                      display: 'flex',
                      float: 'left',
                      justifyContent: 'center'
                    }}
                  >
                    <Typography
                      className={classes.title}
                      variant="p"
                      color="inherit"
                      noWrap
                    >
                      Candidates
                    </Typography>
                  </div>
                  <IconButton color="inherit">
                    <Badge badgeContent={17} color="secondary">
                      <NotificationsIcon />
                    </Badge>
                  </IconButton>
                  <Fab
                    variant="extended"
                    color="primary"
                    aria-label="Delete"
                    className={classes.fab}
                  >
                    Logout
                  </Fab>
                </Grid>
              </Hidden>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavBar);
