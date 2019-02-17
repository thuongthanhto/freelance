import React, { Component } from 'react';
import {
  Modal,
  withStyles,
  IconButton,
  Button,
  Checkbox
} from '@material-ui/core';
import {
  ModalContainer,
  ModalTitle,
  FormContainer,
  FormSection,
  FieldAlignCenter,
  LeftLoginSection,
  RightLoginSection,
  CloseLoginContainer,
  RowContainer,
  RegisterNow,
  ForgotPasswordLink,
  LinkedInCustom,
  SocialButtonContainer,
  IconContainer,
  SocialButtonSection
} from './styled';
import CloseIcon from '@material-ui/icons/Close';
import classNames from 'classnames';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loginWatcher } from '../../redux/sagas/loginSaga/actions';
import CenterLineText from './components/CenterLineText/index';
import {
  getLoginSuccess,
  getLoginError,
  getLoadingLogin
} from '../../redux/sagas/loginSaga/selectors';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import {
  signupLinkedinWatcher,
  signupFacebookWatcher
} from '../../redux/sagas/signupSaga/actions';
import Loading from '../../components/Loading';

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

class LoginModal extends Component {
  state = {
    password: '',
    email: '',
    showPassword: false,
    remember: false
  };

  handleChange = prop => event => {
    if (prop === 'remember') {
      this.setState({ [prop]: event.target.checked });
    } else {
      this.setState({ [prop]: event.target.value });
    }
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  handleSubmit = () => {
    const { password, email } = this.state;
    this.props.loginWatcher({ email, password });
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
      handleOpenForgotModal,
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
            <Loading isLoading={this.props.loading} />
            <LeftLoginSection>
              <CloseLoginContainer>
                <IconButton onClick={handleClose}>
                  <CloseIcon />
                </IconButton>
              </CloseLoginContainer>

              <ModalTitle style={{ marginTop: 50 }}>Welcome Back</ModalTitle>

              <FormSection>
                <FormContainer>
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
                  <TextField
                    id="outlined-adornment-password1"
                    className={classNames(classes.margin, classes.textField)}
                    variant="outlined"
                    type={this.state.showPassword ? 'text' : 'password'}
                    label="Password"
                    value={this.state.password}
                    helperText={
                      errors.password &&
                      errors.password.length > 0 &&
                      errors.password[0]
                    }
                    error={errors.password && errors.password.length > 0}
                    onChange={this.handleChange('password')}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="Toggle password visibility"
                            onClick={this.handleClickShowPassword}
                          >
                            {this.state.showPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                  />

                  <RowContainer>
                    <FieldAlignCenter>
                      <Checkbox
                        checked={this.state.confirm}
                        onChange={this.handleChange('remember')}
                        value="confirm"
                      />
                      <div>Remember me</div>
                    </FieldAlignCenter>

                    <FieldAlignCenter>
                      <Button
                        variant="contained"
                        size="large"
                        color="primary"
                        className={classes.margin}
                        onClick={this.handleSubmit}
                      >
                        Login
                      </Button>
                    </FieldAlignCenter>
                  </RowContainer>

                  <RowContainer>
                    <RegisterNow onClick={handleOpenRegisterModal}>
                      Register now
                    </RegisterNow>
                    <ForgotPasswordLink onClick={handleOpenForgotModal}>
                      Forgot password?
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
            <RightLoginSection />
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
      loginWatcher,
      signupFacebookWatcher,
      signupLinkedinWatcher
      // add other watcher sagas to this object to map them to props
    },
    dispatch
  );
};

const mapStateToProps = state => ({
  errors: getLoginError(state),
  success: getLoginSuccess(state),
  loading: getLoadingLogin(state)
});

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginModal)
);
