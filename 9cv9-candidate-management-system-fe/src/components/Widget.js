import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles'; 
import { Grid, Typography } from '@material-ui/core'

const styles = Theme => ({
  button: {
    
  },
  widgetTitle:{
    fontSize: '1.0rem',
    fontWeight: 500
  }
})

class WidgetItem extends Component {
  render(){
    const {classes} = this.props
    return(
      <Grid item style={{marginTop: '20px', textAlign: 'left'}}>
             <Typography className={classes.widgetTitle}>
                {this.props.title}
             </Typography>
              {this.props.content}
            </Grid>
    )
  }
}

WidgetItem.proptypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(WidgetItem)