import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Paper, InputBase, IconButton } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';


const styles = {
  rootSearch: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '93%',
    height: 30,
    marginLeft: 23
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}

class SearchBar extends Component {
  render(){
    const {classes} = this.props
    return(
    <div>
      <Paper className={classes.rootSearch} elevation={1}>
          <InputBase className={classes.input} placeholder="Search by skill..." />
          <IconButton className={classes.iconButton} aria-label="Search">
            <SearchIcon />
          </IconButton>
        </Paper>
    </div>)
  }
}

SearchBar.propTypes = {
       classes: PropTypes.object.isRequired,
      }
      
export default withStyles(styles)(SearchBar);