import React, { Component } from 'react';
import { Container } from './styled';
import { css } from '@emotion/core';
import { ClipLoader } from 'react-spinners';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  position: absolute;
  z-index: 100;
  top: 50%;
  margin-top: -25px;
`;

class Loading extends Component {
  render() {
    console.log(this.props.isLoading);
    if (this.props.isLoading) {
      return (
        <Container>
          <ClipLoader
            css={override}
            sizeUnit={'px'}
            size={50}
            color={'#123abc'}
            loading={this.props.isLoading}
          />
        </Container>
      );
    }
    return <div />;
  }
}

export default Loading;
