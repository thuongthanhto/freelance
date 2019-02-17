import React, { Component } from 'react';
import { Modal, withStyles, IconButton } from '@material-ui/core';
import {
  ModalContainer,
  ModalTitle,
  LeftLoginSection,
  CloseLoginContainer,
  RightForgotSection,
  ThanksForSection
} from './styled';
import CloseIcon from '@material-ui/icons/Close';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { forgotWatcher } from '../../redux/sagas/forgotSaga/actions';
import {
  getForgotError,
  getForgotSuccess,
  getEmailForgot
} from '../../redux/sagas/forgotSaga/selectors';

const styles = theme => ({
  paper: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: 0,
    outline: 'none'
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  margin: {
    margin: theme.spacing.unit
  },
  textField: {
    flexBasis: 300,
    width: 300
  }
});

class ForgotConfirmModal extends Component {
  resend = () => {
    const { email, forgotWatcher } = this.props;

    forgotWatcher({ email });
  };

  render() {
    const { open, handleClose, classes } = this.props;

    return (
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className={classes.paper}>
          <ModalContainer>
            <LeftLoginSection>
              <CloseLoginContainer>
                <IconButton onClick={handleClose}>
                  <CloseIcon />
                </IconButton>
              </CloseLoginContainer>

              <ModalTitle style={{ marginTop: 50 }}>
                Forgot Password?
              </ModalTitle>

              <ThanksForSection>
                <div style={{ width: 399 }}>
                  <span>
                    We have sent a link to your email to reset the password.
                    <br />
                    <br />
                    Please check your email inbox.
                    <br />
                    <br />
                    Didn’t receive it? We can{' '}
                    <span
                      style={{
                        color: 'rgba(0,105,176,1.0)',
                        cursor: 'pointer'
                      }}
                      onClick={this.render}
                    >
                      resend it
                    </span>
                  </span>
                </div>
              </ThanksForSection>
            </LeftLoginSection>
            <RightForgotSection />
          </ModalContainer>
        </div>
      </Modal>
    );
  }
}

// mapping dispatch functions to the props of LoginForm component
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      forgotWatcher
      // add other watcher sagas to this object to map them to props
    },
    dispatch
  );
};

const mapStateToProps = state => ({
  errors: getForgotError(state),
  success: getForgotSuccess(state),
  email: getEmailForgot(state)
});

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ForgotConfirmModal)
);
