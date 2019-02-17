import React, { Component, Fragment } from 'react';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  NarBarSection,
  LogoSection,
  MenuSection,
  ItemSection,
  ButtonMenuGroup,
  ButtonMenu
} from './styled';
import RegisterModal from '../../RegisterModal';
import LoginModal from '../../LoginModal';
import ForgotModal from '../../ForgotModal';
import logo from './../../assets/9cv9-logo.svg';
import RegisterConfirmModal from '../../RegisterConfirmModal';
import ForgotConfirmModal from '../../ForgotConfirmModal';
import { getRegisterSuccess } from '../../../../redux/sagas/signupSaga/selectors';
import { getForgotSuccess } from '../../../../redux/sagas/forgotSaga/selectors';

class Narbar extends Component {
  state = {
    openRegisterModal: false,
    openLoginModal: false,
    openForgotModal: false,
    openForgotConfirmModal: false,
    openRegisterConfirmModal: false
  };

  handleOpenRegisterModal = () => {
    this.setState({
      openRegisterModal: true,
      openForgotModal: false,
      openLoginModal: false,
      openForgotConfirmModal: false,
      openRegisterConfirmModal: false
    });
  };

  handleCloseRegisterModal = () => {
    this.setState({ openRegisterModal: false });
  };

  handleOpenForgotModal = () => {
    this.setState({
      openForgotModal: true,
      openLoginModal: false,
      openRegisterModal: false,
      openForgotConfirmModal: false,
      openRegisterConfirmModal: false
    });
  };

  handleCloseForgotModal = () => {
    this.setState({ openForgotModal: false });
  };

  handleOpenLoginModal = () => {
    this.setState({
      openLoginModal: true,
      openForgotModal: false,
      openRegisterModal: false,
      openForgotConfirmModal: false,
      openRegisterConfirmModal: false
    });
  };

  handleCloseLoginModal = () => {
    this.setState({ openLoginModal: false });
  };

  handleOpenRegisterConfirmModal = () => {
    this.setState({
      openLoginModal: false,
      openForgotModal: false,
      openRegisterModal: false,
      openForgotConfirmModal: false,
      openRegisterConfirmModal: true
    });
  };

  handleCloseRegisterConfirmModal = () => {
    this.setState({ openRegisterConfirmModal: false });
  };

  handleOpenForgotConfirmModal = () => {
    this.setState({
      openLoginModal: false,
      openForgotModal: false,
      openRegisterModal: false,
      openForgotConfirmModal: false,
      openRegisterConfirmModal: true
    });
  };

  handleCloseForgotConfirmModal = () => {
    this.setState({ openForgotConfirmModal: false });
  };

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.successRegister !== this.props.successRegister &&
      nextProps.successRegister === 'Verification e-mail sent.'
    ) {
      this.handleOpenRegisterConfirmModal();
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.successForgot !== this.props.successForgot) {
      this.handleOpenForgotConfirmModal();
    }
  }

  render() {
    const {
      openRegisterModal,
      openLoginModal,
      openForgotModal,
      openRegisterConfirmModal,
      openForgotConfirmModal
    } = this.state;

    return (
      <Fragment>
        <RegisterModal
          open={openRegisterModal}
          handleOpenLoginModal={this.handleOpenLoginModal}
          handleClose={this.handleCloseRegisterModal}
        />
        <RegisterConfirmModal
          open={openRegisterConfirmModal}
          handleClose={this.handleCloseRegisterConfirmModal}
        />
        <LoginModal
          open={openLoginModal}
          handleOpenRegisterModal={this.handleOpenRegisterModal}
          handleOpenForgotModal={this.handleOpenForgotModal}
          handleClose={this.handleCloseLoginModal}
        />
        <ForgotModal
          open={openForgotModal}
          handleOpenLoginModal={this.handleOpenLoginModal}
          handleOpenRegisterModal={this.handleOpenRegisterModal}
          handleClose={this.handleCloseForgotModal}
        />
        <ForgotConfirmModal
          open={openForgotConfirmModal}
          handleClose={this.handleCloseForgotConfirmModal}
        />
        <NarBarSection>
          <LogoSection onClick={() => this.props.goHome}>
            <img src={logo} alt="logo" />
          </LogoSection>
          <MenuSection>
            <ItemSection>How it works</ItemSection>
            <ItemSection>Pricing</ItemSection>
            <ItemSection>Candidates</ItemSection>
            <ButtonMenuGroup>
              <ButtonMenu
                backgroundColor="#283583"
                onClick={this.handleOpenRegisterModal}
              >
                Register
              </ButtonMenu>
              <ButtonMenu
                backgroundColor="#EB5B49"
                onClick={this.handleOpenLoginModal}
              >
                Login
              </ButtonMenu>
            </ButtonMenuGroup>
          </MenuSection>
        </NarBarSection>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      goHome: () => push('/')
    },
    dispatch
  );
};

const mapStateToProps = state => ({
  successRegister: getRegisterSuccess(state),
  successForgot: getForgotSuccess(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Narbar);
