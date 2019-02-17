import React, { Component } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grow from '@material-ui/core/Grow';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter
} from 'react-icons/fa';
import qs from 'qs';
import { connect } from 'react-redux';
import {
  Container,
  ButtonCustom,
  TitleSection,
  Title,
  Description,
  ScrollDownText,
  ContainerImage,
  FindingItHardContent,
  ContainerFindingIt,
  ContainerFindOut,
  ContainerClientSay,
  SubTitle,
  SubDescription,
  ContainerCandidate,
  CardCandidateSection,
  CandidateImage,
  CandidateMainContainer,
  CandidateName,
  CandidateDescription,
  ProcessSection,
  ProcessCart,
  CartTitle,
  CartDescription,
  BranchSection,
  BranchContainer,
  BranchImage,
  Footer,
  LogoFooterContainer,
  ColumnContent,
  FooterMenuText,
  SocialSection,
  ContainerIcon
} from './styled';
import logo from './assets/9cv9-logo.svg';
import image1 from './assets/Image1.svg';
import IssacTay from './assets/IssacTay.svg';
import JunTeoh from './assets/JunTeoh.svg';
import CocCocLogo from './assets/CocCocLogo.svg';
import Honestbeelogo from './assets/Honestbeelogo.svg';
import MorpheusLabsLogo from './assets/MorpheusLabsLogo.svg';
import AlephLabsLogo from './assets/AlephLabsLogo.svg';
import HostelHuntingLogo from './assets/HostelHuntingLogo.svg';
import Ninjavanlogo from './assets/Ninjavanlogo.svg';
import Gluulife from './assets/Gluulife.svg';
import { withStyles } from '@material-ui/styles';
import { bindActionCreators } from 'redux';
import { verifyEmailWatcher } from '../../redux/sagas/verifyEmailSaga/actions';
import {
  getVerifyEmailSuccess,
  getVerifyEmailError
} from '../../redux/sagas/verifyEmailSaga/selectors';
import { push } from 'connected-react-router';
import Narbar from './components/Narbar';
import GoodSection from './components/GoodSection';
import InViewMonitor from 'react-inview-monitor';

const styles = theme => ({
  icon: {
    fontSize: '50px'
  }
});

class LandingPage extends Component {
  componentDidMount() {
    const qsParsed = qs.parse(this.props.location.search.slice(1));

    if (qsParsed.key) {
      this.props.verifyEmailWatcher(qsParsed);
    }
  }

  render() {
    return (
      <Container>
        <Narbar />
        <InViewMonitor
          classNameNotInView="vis-hidden"
          classNameInView="animated zoomIn" // fadeInLeft, or fadeInRight
        >
          <TitleSection>
            <Title>9cv9 Tech Hiring</Title>

            <Description>
              Hire the best tech talents on this planet through our AI and
              Data-Driven Sourcing Technologies
            </Description>
            <ScrollDownText>Scroll Down</ScrollDownText>
            <ExpandMoreIcon style={{ fontSize: 50 }} />

            <ContainerImage>
              <img src={image1} alt="image-1" />
            </ContainerImage>
          </TitleSection>
        </InViewMonitor>

        <InViewMonitor
          classNameNotInView="vis-hidden"
          classNameInView="animated zoomIn" // fadeInLeft, or fadeInRight
        >
          <ContainerFindingIt>
            <FindingItHardContent>
              Finding it hard to source for tech developers or UXUI designers?
              or finding it risky to hire unfamiliar developer and designers
              into your company? We can relate.
            </FindingItHardContent>
            <FindingItHardContent>
              That’s why we build up this platform to source and meet your tech
              hiring needs.
            </FindingItHardContent>

            <ContainerFindOut>
              <ButtonCustom backgroundColor="#283583">
                FIND OUT MORE
              </ButtonCustom>
            </ContainerFindOut>
          </ContainerFindingIt>

          <ContainerClientSay>
            <SubTitle>What our Clients say</SubTitle>
            <SubDescription>
              Focused on Tech Hiring since Dec 2017, we have grew to 100+
              clients over Singapore, Malaysia, Thailand, Indonesia, Vietnam,
              Hong Kong, Europe and the United States of America
            </SubDescription>
          </ContainerClientSay>
        </InViewMonitor>

        <InViewMonitor
          classNameNotInView="vis-hidden"
          classNameInView="animated zoomIn" // fadeInLeft, or fadeInRight
        >
          <ContainerCandidate>
            <CardCandidateSection>
              <CandidateImage>
                <img src={JunTeoh} alt="JunTeoh" />
              </CandidateImage>
              <CandidateMainContainer>
                <CandidateName>Jun Teoh, Piktochart</CandidateName>
                <CandidateDescription>
                  9cv9 team is by far the best recruiter I have worked with in
                  Vietnam. The team is very responsive and helpful. They really
                  looked into your hiring requirements and understand who you
                  are looking for. Also, I am impressed with their persistency
                  in sourcing despite how challenging it is. Well done, team
                  9cv9.
                </CandidateDescription>
                <ButtonCustom backgroundColor="#283583">HIRE NOW</ButtonCustom>
              </CandidateMainContainer>
            </CardCandidateSection>

            <CardCandidateSection>
              <CandidateImage>
                <img src={IssacTay} alt="Issac Tay, Honestbee" />
              </CandidateImage>
              <CandidateMainContainer>
                <CandidateName>Issac Tay, Honestbee</CandidateName>
                <CandidateDescription>
                  The Developer referred by 9cv9 is a diligent worker who is
                  pro-active in his work, constantly ensuring that he supports
                  the business use cases. Fast learner.
                </CandidateDescription>
                <ButtonCustom backgroundColor="#283583">HIRE NOW</ButtonCustom>
              </CandidateMainContainer>
            </CardCandidateSection>
          </ContainerCandidate>
        </InViewMonitor>

        <InViewMonitor
          classNameNotInView="vis-hidden"
          classNameInView="animated zoomIn" // fadeInLeft, or fadeInRight
        >
          <ContainerClientSay>
            <SubTitle>Process</SubTitle>
            <SubDescription>
              We shorten the hiring process from months to weeks or even days.
            </SubDescription>
          </ContainerClientSay>

          <div style={{ width: 1000, margin: '0 auto' }}>
            <ProcessSection>
              <ProcessCart>
                <CartTitle>01 Register</CartTitle>
                <CartDescription>
                  Sign up for an account and sign an online contract with us.
                </CartDescription>
              </ProcessCart>
              <ProcessCart>
                <CartTitle>02 Source</CartTitle>
                <CartDescription>
                  Search our list of amazing developers to find the best-fit
                  ones and interview them
                </CartDescription>
              </ProcessCart>
              <ProcessCart>
                <CartTitle>03 Hire</CartTitle>
                <CartDescription>
                  Found the right one? Send in a hire request and the
                  corresponding employment contract. That’s it.
                </CartDescription>
              </ProcessCart>
            </ProcessSection>
          </div>
        </InViewMonitor>

        <ContainerClientSay>
          <SubDescription>Why we are so good?</SubDescription>
        </ContainerClientSay>

        <InViewMonitor
          classNameNotInView="vis-hidden"
          classNameInView="animated zoomIn" // fadeInLeft, or fadeInRight
        >
          <GoodSection />
        </InViewMonitor>

        <InViewMonitor
          classNameNotInView="vis-hidden"
          classNameInView="animated zoomIn" // fadeInLeft, or fadeInRight
        >
          <ContainerClientSay>
            <SubDescription>Some of our client</SubDescription>
          </ContainerClientSay>

          <BranchSection>
            <BranchContainer>
              <BranchImage>
                <img src={CocCocLogo} alt="image-1" />
              </BranchImage>
              <BranchImage>
                <img src={Honestbeelogo} alt="image-1" />
              </BranchImage>
              <BranchImage>
                <img src={MorpheusLabsLogo} alt="image-1" />
              </BranchImage>
              <BranchImage>
                <img src={AlephLabsLogo} alt="image-1" />
              </BranchImage>
            </BranchContainer>
            <BranchContainer>
              <BranchImage>
                <img src={HostelHuntingLogo} alt="image-1" />
              </BranchImage>
              <BranchImage>
                <img src={Ninjavanlogo} alt="image-1" />
              </BranchImage>
              <BranchImage>
                <img src={Gluulife} alt="image-1" />
              </BranchImage>
            </BranchContainer>
          </BranchSection>
        </InViewMonitor>

        <Footer ref={this.myRef}>
          <LogoFooterContainer>
            <img src={logo} alt="logo" width="150" height="100" />
          </LogoFooterContainer>
          <ColumnContent>
            <FooterMenuText>Team</FooterMenuText>
            <FooterMenuText>About us</FooterMenuText>
            <FooterMenuText>Pricing</FooterMenuText>
            <FooterMenuText>Private Policy</FooterMenuText>
          </ColumnContent>

          <ColumnContent>
            <FooterMenuText>Candidate</FooterMenuText>
            <FooterMenuText>News</FooterMenuText>
            <FooterMenuText>Contact</FooterMenuText>
            <FooterMenuText>Terms and Conditions</FooterMenuText>
          </ColumnContent>

          <SocialSection>
            <ContainerIcon>
              <FaFacebookF style={{ color: 'white' }} />
            </ContainerIcon>
            <ContainerIcon>
              <FaTwitter style={{ color: 'white' }} />
            </ContainerIcon>
            <ContainerIcon>
              <FaInstagram style={{ color: 'white' }} />
            </ContainerIcon>
            <ContainerIcon>
              <FaLinkedinIn style={{ color: 'white' }} />
            </ContainerIcon>
          </SocialSection>
        </Footer>
      </Container>
    );
  }
}

// mapping dispatch functions to the props of LoginForm component
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      goHome: () => push('/'),
      verifyEmailWatcher
      // add other watcher sagas to this object to map them to props
    },
    dispatch
  );
};

const mapStateToProps = state => ({
  errors: getVerifyEmailError(state),
  success: getVerifyEmailSuccess(state)
});

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LandingPage)
);
