import React, { Component } from 'react';
import {
  Modal,
  withStyles,
  IconButton,
  Button,
  Checkbox
} from '@material-ui/core';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import {
  ModalContainer,
  LeftSection,
  RightSection,
  CloseContainer,
  ModalTitle,
  FormContainer,
  FormSection,
  FieldAlignCenter,
  SocialButtonSection,
  SocialButtonContainer,
  IconContainer,
  LinkedInCustom,
  FieldAlignCenterCheckbox
} from './styled';
import CloseIcon from '@material-ui/icons/Close';
import classNames from 'classnames';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { bindActionCreators } from 'redux';
import {
  signupWatcher,
  signupFacebookWatcher,
  signupLinkedinWatcher,
  setEmailRegister
} from '../../redux/sagas/signupSaga/actions';
import { connect } from 'react-redux';
import CenterLineText from './components/CenterLineText/index';
import {
  getRegisterError,
  getRegisterSuccess,
  getLoadingRegister
} from '../../redux/sagas/signupSaga/selectors';
import { TextCheckbox, TextLink } from './components/CenterLineText/styled';
import Loading from '../../components/Loading/index';

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

class RegisterModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password1: '',
      password2: '',
      email: '',
      showPassword1: false,
      showPassword2: false,
      confirm: false,
      subscribe: true
    };
  }

  handleChange = prop => event => {
    if (prop === 'confirm' || prop === 'subscribe') {
      this.setState({ [prop]: event.target.checked });
    } else {
      this.setState({ [prop]: event.target.value });
    }
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword1: !state.showPassword1 }));
  };

  handleClickShowConfirmPassword = () => {
    this.setState(state => ({
      showPasswor2: !state.showPassword2
    }));
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

  handleSubmit = () => {
    const { password1, password2, email, subscribe } = this.state;
    this.props.setEmailRegister(email);
    this.props.signupWatcher({
      email,
      password1,
      password2,
      type: 0,
      subscribe
    });
  };

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.success !== this.props.success &&
      nextProps.success === 'Verification e-mail sent.'
    ) {
      this.setState({
        password1: '',
        password2: '',
        email: '',
        confirm: false,
        subscribe: true
      });
    }
  }

  render() {
    const {
      open,
      handleClose,
      classes,
      errors,
      handleOpenLoginModal
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
            <LeftSection />
            <RightSection>
              <CloseContainer>
                <IconButton onClick={handleClose}>
                  <CloseIcon />
                </IconButton>
              </CloseContainer>

              <ModalTitle>Register</ModalTitle>

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
                    type={this.state.showPassword1 ? 'text' : 'password'}
                    label="Password"
                    value={this.state.password1}
                    helperText={
                      errors.password1 &&
                      errors.password1.length > 0 &&
                      errors.password1[0]
                    }
                    error={errors.password1 && errors.password1.length > 0}
                    onChange={this.handleChange('password1')}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="Toggle password visibility"
                            onClick={this.handleClickShowPassword}
                          >
                            {this.state.showPassword1 ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                  />

                  <TextField
                    id="outlined-adornment-confirm-password"
                    className={classNames(classes.margin, classes.textField)}
                    variant="outlined"
                    type={this.state.showPassword2 ? 'text' : 'password'}
                    label="Confirm Password"
                    value={this.state.password2}
                    helperText={
                      errors.password2 &&
                      errors.password2.length > 0 &&
                      errors.password2[0]
                    }
                    error={errors.password2 && errors.password2.length > 0}
                    onChange={this.handleChange('password2')}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="Toggle password visibility"
                            onClick={this.handleClickShowConfirmPassword}
                          >
                            {this.state.showPassword2 ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                  />

                  <FieldAlignCenterCheckbox>
                    <Checkbox
                      checked={this.state.subscribe}
                      onChange={this.handleChange('subscribe')}
                      value="subscribe"
                      style={{ padding: 5 }}
                    />
                    <TextCheckbox>Subscribe to our newsletter</TextCheckbox>
                  </FieldAlignCenterCheckbox>

                  <FieldAlignCenterCheckbox>
                    <Checkbox
                      checked={this.state.confirm}
                      onChange={this.handleChange('confirm')}
                      value="confirm"
                      style={{ padding: 5 }}
                    />
                    <TextCheckbox>
                      I agree to the{' '}
                      <a
                        style={{
                          cursor: 'pointer',
                          color: 'blue',
                          textDecoration: 'none'
                        }}
                      >
                        terms and conditions
                      </a>
                      .
                    </TextCheckbox>
                  </FieldAlignCenterCheckbox>

                  <FieldAlignCenter>
                    <Button
                      variant="contained"
                      size="large"
                      color="primary"
                      className={classes.margin}
                      onClick={this.handleSubmit}
                      disabled={!this.state.confirm}
                    >
                      Register
                    </Button>
                  </FieldAlignCenter>

                  <FieldAlignCenter>
                    <TextLink onClick={handleOpenLoginModal}>
                      Have an account already? Login
                    </TextLink>
                  </FieldAlignCenter>

                  <FieldAlignCenter>
                    <CenterLineText />
                  </FieldAlignCenter>

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
                          Register with Facebook
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
                        Register with Linkedin
                      </SocialButtonContainer>
                    </LinkedInCustom>
                  </SocialButtonSection>
                </FormContainer>
              </FormSection>
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
      signupWatcher,
      signupFacebookWatcher,
      signupLinkedinWatcher,
      setEmailRegister
    },
    dispatch
  );
};

const mapStateToProps = state => ({
  errors: getRegisterError(state),
  success: getRegisterSuccess(state),
  loading: getLoadingRegister(state)
});

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(RegisterModal)
);
