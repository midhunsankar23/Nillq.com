import styled from 'styled-components';
import { FaMagento } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Define the primary colors
const primaryColor = '#6D5CA5';
const darkText = '#1c2237';
const lightGrey = '#a9b3c1';
const white = '#FFFFFF';

export const FooterContainer = styled.div`
  background-color: ${white}; // White background for the footer
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterSubscription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
  padding: 24px;
  color: ${darkText}; // Dark text for better contrast
`;

export const FooterSubHeading = styled.p`
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  margin-bottom: 24px;
  font-size: 24px;
  color: ${darkText}; // Dark text
`;

export const FooterSubText = styled.p`
  margin-bottom: 24px;
  font-size: 20px;
  color: ${darkText}; // Dark text
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 80%;
  }
`;

export const FormInput = styled.input`
  padding: 10px 20px;
  border-radius: 2px;
  margin-right: 10px;
  outline: none;
  border: 1px solid ${darkText}; // Dark border for inputs
  font-size: 16px;

  &::placeholder {
    color: ${lightGrey}; // Light grey for placeholder text
  }

  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`;

export const FooterLinksContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: ${darkText}; // Dark text for footer links

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h2`
  margin-bottom: 16px;
  color: ${darkText}; // Dark text for link titles
`;

export const FooterLink = styled(Link)`
  color: ${darkText}; // Dark text for links
  text-decoration: none;
  margin-bottom: 0.5rem;

  &:hover {
    color: ${primaryColor}; // Primary color on hover
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: ${darkText}; // Dark text for the logo
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  &:hover {
    color: ${primaryColor}; // Primary color on hover
    transition: 0.3s ease-out;
  }
`;

export const SocialIcon = styled(FaMagento)`
  margin-right: 10px;
  color: ${primaryColor}; // Primary color for the icon
`;

export const WebsiteRights = styled.small`
  color: ${darkText}; // Dark text for website rights
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: ${darkText}; // Dark text for social icons
  font-size: 24px;

  &:hover {
    color: ${primaryColor}; // Primary color on hover
    transition: 0.3s ease-out;
  }
`;
