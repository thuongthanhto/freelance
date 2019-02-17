import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles'; 
import { Button } from '@material-ui/core'

const styles = theme => ({
  button: {
    border: '0.5px solid rgba(0, 0, 0, 0.38)', 
    width: '100%', 
    height: '33px'
  }
})

class BigButton extends Component{
  super(props){}
  render(){
    const {classes} = this.props
    return(
    <Button variant="contained" color="dark" className={classes.button} >
               {this.props.title}
        </Button>
    )
  }
}

BigButton.proptypes = {
              classes: PropTypes.object.isRequired,
}
export default withStyles(styles)(BigButton);