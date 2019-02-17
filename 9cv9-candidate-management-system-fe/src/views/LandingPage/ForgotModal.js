import React, { Component } from 'react';
import { Modal, withStyles, IconButton, Button } from '@material-ui/core';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import {
  ModalContainer,
  ModalTitle,
  FormContainer,
  FormSection,
  FieldAlignCenter,
  LeftLoginSection,
  CloseLoginContainer,
  RowContainer,
  RegisterNow,
  ForgotPasswordLink,
  TextEmail,
  RightForgotSection,
  SocialButtonSection,
  SocialButtonContainer,
  IconContainer,
  LinkedInCustom
} from './styled';
import CloseIcon from '@material-ui/icons/Close';
import classNames from 'classnames';
import TextField from '@material-ui/core/TextField';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CenterLineText from './components/CenterLineText';
import {
  forgotWatcher,
  setEmailForgot
} from '../../redux/sagas/forgotSaga/actions';
import {
  getForgotError,
  getForgotSuccess
} from '../../redux/sagas/forgotSaga/selectors';
import {
  signupLinkedinWatcher,
  signupFacebookWatcher
} from '../../redux/sagas/signupSaga/actions';

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

class ForgotModal extends Component {
  state = {
    email: ''
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleSubmit = () => {
    const { email } = this.state;
    this.props.setEmailForgot({ email });
    this.props.forgotWatcher({ email });
  };

  responseFacebook = response => {
    console.log(response);
    this.setState({
      subscribe: false
    });
    this.props.signupFacebookWatcher({
      access_token: response.accessToken,
      type: 0,
      subscribe: false
    });
  };

  handleSuccess = data => {
    console.log(data);
    this.props.signupLinkedinWatcher({
      code: data.code,
      type: 0,
      subscribe: true
    });
  };

  handleFailure = error => {
    console.log(error);
  };

  render() {
    const {
      open,
      handleClose,
      classes,
      errors,
      handleOpenLoginModal,
      handleOpenRegisterModal
    } = this.props;

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

              <FormSection>
                <FormContainer>
                  <TextEmail>
                    Type in your email to reset your password
                  </TextEmail>
                  <TextField
                    id="outlined-adornment-email"
                    className={classNames(classes.margin, classes.textField)}
                    variant="outlined"
                    type="text"
                    label="Email"
                    value={this.state.email}
                    helperText={
                      errors.email && errors.email.length > 0 && errors.email[0]
                    }
                    error={errors.email && errors.email.length > 0}
                    onChange={this.handleChange('email')}
                  />

                  <FieldAlignCenter style={{ paddingBottom: 40 }}>
                    <Button
                      variant="contained"
                      size="large"
                      color="primary"
                      className={classes.margin}
                      onClick={this.handleSubmit}
                    >
                      Reset
                    </Button>
                  </FieldAlignCenter>

                  <RowContainer>
                    <RegisterNow onClick={handleOpenRegisterModal}>
                      Register now
                    </RegisterNow>
                    <ForgotPasswordLink onClick={handleOpenLoginModal}>
                      Login now
                    </ForgotPasswordLink>
                  </RowContainer>

                  <RowContainer>
                    <CenterLineText />
                  </RowContainer>

                  <SocialButtonSection>
                    <FacebookLogin
                      appId="322487501726507"
                      callback={this.responseFacebook}
                      render={renderProps => (
                        <SocialButtonContainer
                          onClick={renderProps.onClick}
                          backgroundColor="#3b5998"
                          marginTop="10"
                        >
                          <IconContainer>
                            <FaFacebookF style={{ color: 'white' }} />
                          </IconContainer>
                          Login with Facebook
                        </SocialButtonContainer>
                      )}
                    />

                    <LinkedInCustom
                      clientId="813xu7gy0gjwy1"
                      onFailure={this.handleFailure}
                      onSuccess={this.handleSuccess}
                      redirectUri="https://ninecvninetechhiring.herokuapp.com/linkedin"
                    >
                      <SocialButtonContainer
                        backgroundColor="#007bb6"
                        marginTop="0"
                      >
                        <IconContainer>
                          <FaLinkedinIn style={{ color: 'white' }} />
                        </IconContainer>
                        Login with Linkedin
                      </SocialButtonContainer>
                    </LinkedInCustom>
                  </SocialButtonSection>
                </FormContainer>
              </FormSection>
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
      forgotWatcher,
      signupFacebookWatcher,
      signupLinkedinWatcher,
      setEmailForgot
    },
    dispatch
  );
};

const mapStateToProps = state => ({
  errors: getForgotError(state),
  success: getForgotSuccess(state)
});

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ForgotModal)
);
