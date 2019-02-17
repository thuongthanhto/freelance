import styled from 'styled-components';
import imageRegister from './assets/pexels-photo.png';
import imageLogin from './assets/man-sunglasses-art-graffiti.png';
import imageForgot from './assets/art-drawing-eye-948620.png';
import { LinkedIn } from 'react-linkedin-login-oauth2';
import { FaFacebookF } from 'react-icons/fa';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
`;

export const ButtonCustom = styled.button`
  background-color: ${props => props.backgroundColor};
  border-radius: 17px;
  width: 143px;
  height: 34px;
  color: white;
  border-width: 0;
  cursor: pointer;
  margin: 0 10px;
`;

export const TitleSection = styled.div`
  margin-top: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: #283583;
  font-family: AvenirNext;
  font-size: 82px;
  font-weight: 700;
  line-height: 80px;
  width: 553px;
  text-align: center;
  margin-bottom: 50px;
`;

export const Description = styled.p`
  color: #818182;
  font-family: AvenirNext;
  font-size: 24px;
  font-weight: 400;
  line-height: 35px;
  width: 553px;
  text-align: center;
`;

export const ScrollDownText = styled.div`
  color: #000000;
  font-family: AvenirNext;
  font-size: 18px;
  font-weight: 400;
  line-height: 35px;
  width: 553px;
  text-align: center;
  margin-top: 93px;
`;

export const ContainerImage = styled.div`
  margin: 85px 0;
`;

export const FindingItHardContent = styled.div`
  color: #818182;
  font-family: AvenirNext;
  font-size: 20px;
  font-weight: 400;
  line-height: 35px;
  width: 1139px;
  text-align: center;
  padding-bottom: 40px;
`;

export const ContainerFindingIt = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ContainerFindOut = styled.div`
  margin: 35px 0;
`;

export const ContainerClientSay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const SubTitle = styled.h2`
  color: #020202;
  font-family: AvenirNext;
  font-size: 48px;
  font-weight: 400;
  line-height: 32px;
  width: 1140px;
  text-align: center;
`;

export const SubDescription = styled.div`
  color: #818182;
  font-family: AvenirNext;
  font-size: 20px;
  font-weight: 400;
  line-height: 35px;
  width: 588px;
  text-align: center;
`;

export const ContainerCandidate = styled.div`
  margin: 100px 0;
  display: flex;
  justify-content: space-around;
`;

export const CardCandidateSection = styled.div`
  display: flex;
`;

export const CandidateImage = styled.div``;

export const CandidateMainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CandidateName = styled.div`
  color: #eb5b49;
  font-family: AvenirNext;
  font-size: 24px;
  font-weight: 700;
  line-height: 35px;
  width: 360px;
  text-align: left;
`;

export const CandidateDescription = styled.div`
  color: #818182;
  font-family: AvenirNext;
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  width: 360px;
  text-align: left;
  height: 221px;
`;

export const ProcessSection = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 150px;
  margin-bottom: 400px;
`;

export const ProcessCart = styled.div`
  background-color: #fdfdfd;
  border-radius: 10px;
  box-shadow: 0 4px 21px 0 rgba(97, 97, 97, 0.23);
  width: 226px;
  height: 235px;
  box-sizing: border-box;
  padding: 29px;
  text-align: left;
`;

export const CartTitle = styled.div`
  color: #283583;
  font-family: AvenirNext;
  font-size: 24px;
  font-weight: 500;
  opacity: 0.6838169642857143;
  width: 179px;
  text-align: left;
`;

export const CartDescription = styled.div`
  color: #929292;
  font-family: AvenirNext;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  width: 171px;
  text-align: left;
  margin-top: 10px;
`;

export const BranchSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BranchContainer = styled.div`
  margin-top: 10px;
  display: flex;
`;

export const BranchImage = styled.div`
  padding: 5px 50px;
`;

export const Footer = styled.div`
  background-color: #eb5b49;
  width: 100%;
  height: 157px;
  display: flex;
  justify-content: space-around;
`;

export const LogoFooterContainer = styled.div`
  padding-left: 100px;
  padding-top: 20px;
  cursor: pointer;
`;

export const ColumnContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 83px;
  margin-right: 271px;
`;

export const FooterMenuText = styled.div`
  color: #ffffff;
  font-family: AvenirNext;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  padding: 4px;
`;

export const SocialSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ContainerIcon = styled.div`
  padding: 10px;
`;

// Model

export const ModalContainer = styled.div`
  display: flex;
  width: 1100px;
  height: 700px;
`;

export const LeftSection = styled.div`
  flex: 1;
  background: url(${imageRegister});
  background-repeat: no-repeat;
`;

export const RightLoginSection = styled.div`
  flex: 1;
  background: url(${imageLogin});
  background-repeat: no-repeat;
`;

export const RightForgotSection = styled.div`
  flex: 1;
  background: url(${imageForgot});
  background-repeat: no-repeat;
`;

export const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const LeftLoginSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const CloseContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CloseLoginContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ModalTitle = styled.h1`
  color: #283583;
  font-family: AvenirNext;
  font-size: 40px;
  font-weight: 700;
  line-height: 48px;
  text-align: center;
  margin-top: -5px;
`;

export const FormSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.div`
  width: 318px;
`;

export const FieldAlignCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FieldAlignCenterCheckbox = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

export const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const RegisterNow = styled.div`
  color: #5d8ffc;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  text-align: left;
  padding-left: 14px;
  cursor: pointer;
`;

export const ForgotPasswordLink = styled.div`
  color: #929699;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  text-align: right;
  padding-right: 8px;
  cursor: pointer;
`;

export const TextEmail = styled.div`
  color: #929699;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  text-align: center;
  padding-bottom: 30px;
`;

export const ThanksForSection = styled.div`
  font-family: 'AvenirNext-Regular', Helvetica, Arial, serif;
  font-size: 20px;
  color: rgba(145, 150, 152, 1);
  text-align: center;
  line-height: 27px;
  display: flex;
  justify-content: center;
  margin-top: 25px;
`;

export const SocialButtonSection = styled.div`
  margin-top: 15px;
`;

export const SocialButtonContainer = styled.a`
  margin-top: ${props => props.marginTop}px;
  background-color: ${props => props.backgroundColor};
  color: #fff !important;
  position: relative;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  vertical-align: middle;
  z-index: 1;
  transition: 0.3s ease-out;
  text-decoration: none;
  border: none;
  border-radius: 8px;
  height: 52px;
  width: 100%;
  line-height: 52px;
  text-transform: uppercase;
`;

export const IconContainer = styled.i`
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  padding: 0 1rem;
  margin-right: 2rem;
`;

export const LinkedInCustom = styled(LinkedIn)`
  padding: 0 !important;
  width: 100%;
  text-align: start;
  background: white;
  color: white;
  border-width: 0;
  font: inherit;
  margin-top: 10px;
  &:focus {
    outline: 0;
  }
`;
