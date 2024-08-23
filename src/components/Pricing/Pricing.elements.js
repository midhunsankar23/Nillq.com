import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Define the colors for text and backgrounds
const darkText = '#1c2237';
const lightGrey = '#a9b3c1';
const white = '#FFFFFF';
const primaryColor = '#6D5CA5';

export const PricingSection = styled.div`
  padding: 100px 0 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${white}; // White background for the section
`;

export const PricingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const PricingHeading = styled.h1`
  color: ${darkText}; // Dark text for the heading
  font-size: 48px;
  margin-bottom: 24px;
`;

export const PricingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px; // Gap between cards for better spacing

  @media screen and (max-width: 960px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const PricingCard = styled(Link)`
  background: ${white}; // White background for the pricing cards
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 320px;
  height: 500px;
  text-decoration: none;
  border-radius: 12px; // Rounded corners for modern look
  color: ${darkText}; // Dark text for the pricing card
  transition: all 0.3s ease-out;

  &:hover {
    transform: scale(1.06);
    color: ${primaryColor}; // Use primary color on hover
  }

  @media screen and (max-width: 960px) {
    width: 90%;
    &:hover {
      transform: none;
    }
  }
`;

export const PricingCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 24px;
  align-items: center;
  justify-content: space-between; // Ensures proper spacing between content and button
  color: ${darkText}; // Dark text for better contrast
`;

export const PricingCardIcon = styled.div`
  margin: 24px 0;
  font-size: 64px; // Proper icon sizing
`;

export const PricingCardPlan = styled.h3`
  margin-bottom: 5px;
  font-size: 24px;
`;

export const PricingCardFeatures = styled.ul`
  margin: 16px 0 32px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${lightGrey}; // Lighter color for features text
`;

export const PricingCardFeature = styled.li`
  margin-bottom: 10px;
`;

export const PricingButton = styled(Link)`
  background-color: ${primaryColor};
  color: ${white};
  padding: 10px 20px;
  font-size: 18px;
  border-radius: 50px; // Rounded button
  text-decoration: none;
  transition: all 0.3s ease-out;

  &:hover {
    background-color: ${darkText}; // Darker background on hover
    color: ${white}; // Keep text color white
    transform: scale(1.05); // Slight scale on hover
  }
`;
