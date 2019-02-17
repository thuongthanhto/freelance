import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles'; 
import { Button } from '@material-ui/core'

const styles = Theme => ({
  button: {
    
  }
})

class HoverButton extends Component {
  render(){
    const {classes} = this.props
    return(
      <Button variant="contained" color="secondary" className={classes.button} onClick={this.props.onClick}>
                {this.props.title}
      </Button>
    )
  }
}

HoverButton.proptypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(HoverButton)