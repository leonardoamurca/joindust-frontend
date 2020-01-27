import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  background-color: white;
  padding-left: 15px;
  padding-right: 25px;
  box-shadow: 0 5px 2px -2px rgba(0, 0, 0, 0.3);
`;

export const HamburgerMenuContainer = styled.div`
  position: fixed;
  width: 280px;
  max-width: 60%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 200;
  background-color: #ffffff;
  padding-top: 32px;
  box-sizing: border-box;
  transition: transform 0.3s ease-out;
  transform: ${props =>
    !props.isOpen ? 'translateX(-100%)' : 'translateX(0)'};
`;

export const BackdropContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
`;
