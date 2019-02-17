import React, { Component } from 'react';
import { Container, LogoSection } from './styled';
import logo from './onboarding-employer-9cv9-logo-01@2x.png';

class OnboardingLayout extends Component {
  render() {
    const { children } = this.props;
    return (
      <Container>
        <LogoSection>
          <img src={logo} alt="9cv9" width="186" height="69" />
        </LogoSection>
        {children}
      </Container>
    );
  }
}

export default OnboardingLayout;
