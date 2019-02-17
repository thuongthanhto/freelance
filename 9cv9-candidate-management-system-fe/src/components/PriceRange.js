import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { ReactiveBase, RangeSlider } from '@appbaseio/reactivesearch';

const styles = Theme => ({
  button: {},
  widgetTitle: {
    fontSize: '1.0rem',
    fontWeight: 500
  }
});

class PriceRange extends Component {
  render() {
    return (
      <ReactiveBase
        app="good-books-ds"
        credentials="nY6NNTZZ6:27b76b9f-18ea-456c-bc5e-3a5263ebc63d"
      >
        <RangeSlider
          style={{ width: '80%' }}
          dataField="ratings_count"
          componentId=""
          range={{
            start: 3000,
            end: 50000
          }}
          rangeLabels={{
            start: '50SGD',
            end: '50KSGD'
          }}
        />
      </ReactiveBase>
    );
  }
}

PriceRange.proptypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PriceRange);
