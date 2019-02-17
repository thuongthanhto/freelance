import React, { Component } from 'react';
import qs from 'qs';
import { connect } from 'react-redux';
import { withStyles, IconButton } from '@material-ui/core';
import { push } from 'connected-react-router';
import Narbar from '../components/Narbar';
import {
  MainContent,
  FormContainer,
  Title,
  ButtonReset,
  ButtonContainer
} from './styled';
import { bindActionCreators } from 'redux';
import classNames from 'classnames';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { resetPasswordWatcher } from '../../../redux/sagas/resetPassword/actions';
import {
  getResetPasswordError,
  getResetPasswordSuccess
} from '../../../redux/sagas/resetPassword/selectors';
import { Container } from '../styled';

const styles = theme => ({
  icon: {
    fontSize: '50px'
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  margin: {
    margin: theme.spacing.unit
  },
  textField: {
    width: 300
  }
});

class ResetPassword extends Component {
  state = {
    new_password1: '',
    new_password2: '',
    showNewPassword1: false,
    showNewPassword2: false
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClickShowNewPassword1 = () => {
    this.setState(state => ({ showNewPassword1: !state.showNewPassword1 }));
  };

  handleClickShowNewPassword2 = () => {
    this.setState(state => ({
      showNewPassword2: !state.showNewPassword2
    }));
  };

  handleSubmit = () => {
    const qsParsed = qs.parse(this.props.location.search.slice(1));

    if (qsParsed.token && qsParsed.uid) {
      const { new_password1, new_password2 } = this.state;
      const { token, uid } = qsParsed;

      this.props.resetPasswordWatcher({
        new_password1,
        new_password2,
        token,
        uid
      });
    }
  };

  render() {
    const { classes, errors } = this.props;
    return (
      <Container>
        <Narbar />
        <MainContent>
          <FormContainer>
            <Title>Reset Password</Title>
            <TextField
              id="outlined-adornment-new-password-1"
              className={classNames(classes.margin, classes.textField)}
              variant="outlined"
              type={this.state.showNewPassword1 ? 'text' : 'password'}
              label="Password"
              value={this.state.new_password1}
              helperText={
                errors.new_password1 &&
                errors.new_password1.length > 0 &&
                errors.new_password1[0]
              }
              error={errors.new_password1 && errors.new_password1.length > 0}
              onChange={this.handleChange('new_password1')}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Toggle password visibility"
                      onClick={this.handleClickShowNewPassword1}
                    >
                      {this.state.showNewPassword1 ? (
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
              id="outlined-adornment-new-password-2"
              className={classNames(classes.margin, classes.textField)}
              variant="outlined"
              type={this.state.showNewPassword2 ? 'text' : 'password'}
              label="Type again your password"
              value={this.state.new_password2}
              helperText={
                errors.new_password2 &&
                errors.new_password2.length > 0 &&
                errors.new_password2[0]
              }
              error={errors.new_password2 && errors.new_password2.length > 0}
              onChange={this.handleChange('new_password2')}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Toggle password visibility"
                      onClick={this.handleClickShowNewPassword2}
                    >
                      {this.state.showNewPassword2 ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />

            <ButtonContainer>
              <ButtonReset onClick={this.handleSubmit}>
                RESET PASSWORD
              </ButtonReset>
            </ButtonContainer>
          </FormContainer>
        </MainContent>
      </Container>
    );
  }
}

// mapping dispatch functions to the props of LoginForm component
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      resetPasswordWatcher,
      goHome: () => push('/')
    },
    dispatch
  );
};

const mapStateToProps = state => ({
  errors: getResetPasswordError(state),
  success: getResetPasswordSuccess(state)
});

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ResetPassword)
);
