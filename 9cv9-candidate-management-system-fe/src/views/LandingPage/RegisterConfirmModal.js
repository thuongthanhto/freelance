import React, { Component } from 'react';
import { Modal, withStyles, IconButton } from '@material-ui/core';
import {
  ModalContainer,
  LeftSection,
  RightSection,
  CloseContainer,
  ModalTitle,
  ThanksForSection
} from './styled';
import CloseIcon from '@material-ui/icons/Close';
import { bindActionCreators } from 'redux';
import { signupResendWatcher } from '../../redux/sagas/signupSaga/actions';
import { connect } from 'react-redux';
import {
  getRegisterError,
  getRegisterSuccess,
  getEmailRegister
} from '../../redux/sagas/signupSaga/selectors';

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

class RegisterConfirmModal extends Component {
  resend = () => {
    const { email, signupResendWatcher } = this.props;

    signupResendWatcher({ email });
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
            <LeftSection />
            <RightSection>
              <CloseContainer>
                <IconButton onClick={handleClose}>
                  <CloseIcon />
                </IconButton>
              </CloseContainer>

              <ModalTitle style={{ marginTop: 50 }}>Register</ModalTitle>
              <ThanksForSection>
                <div style={{ width: 399 }}>
                  <span>
                    Thanks for registering.
                    <br />
                    <br />
                    Please check your email to confirm your account.
                    <br />
                    <br />
                    Didn’t receive it? We can{' '}
                    <span
                      style={{
                        color: 'rgba(0,105,176,1.0)',
                        cursor: 'pointer'
                      }}
                      onClick={this.resend}
                    >
                      resend it
                    </span>
                  </span>
                </div>
              </ThanksForSection>
            </RightSection>
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
      signupResendWatcher
    },
    dispatch
  );
};

const mapStateToProps = state => ({
  errors: getRegisterError(state),
  success: getRegisterSuccess(state),
  email: getEmailRegister(state)
});

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(RegisterConfirmModal)
);
