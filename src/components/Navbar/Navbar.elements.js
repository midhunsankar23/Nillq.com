import styled from 'styled-components';
import { Container } from '../../globalStyles';
import { FaMagento } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Define the primary color
const primaryColor = '#6D5CA5';
const darkText = '#333';
const white = '#FFFFFF';

export const Nav = styled.nav`
    background: ${white}; // White background
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 999;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); // Subtle shadow for UX improvement
`;

export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 80px;
    ${Container}
`;

export const NavLogo = styled(Link)`
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;

    img {
        height: 40px;
        width: auto;
    }
`;

export const NavIcon = styled(FaMagento)`
    margin-right: 0.5rem;
    color: ${darkText}; // Darker color for the icon
`;

export const HamburgerIcon = styled.div`
    display: none;
    color: ${darkText}; // Darker color for the mobile menu icon

    @media screen and (max-width: 960px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;   
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 80px;
        opacity: 1;
        transition: all 0.5s ease;
        background-color: ${white}; // White background for mobile menu
        left: ${({ click }) => (click ? 0 : '-100%')};
    }
`;

export const NavItem = styled.li`
    height: 80px;
    border-bottom: 2px solid transparent;

    &:hover {
        border-bottom: 4px solid ${primaryColor}; // Primary color border on hover
    }

    @media screen and (max-width: 960px) {
        width: 100%;

        &:hover {
            border-bottom: none;
        }
    }
`;

export const NavLinks = styled(Link)`
    color: ${darkText}; // Dark text for links
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;

    @media screen and (max-width: 960px) {
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;

        &:hover {
            color: ${primaryColor}; // Primary color on hover
            transition: all 0.3s ease;
        }
    }
`;

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;
