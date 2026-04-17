import React from "react";
import styled from "styled-components";

const Burger = ({ isOpen, toggleMenu, scrolled }) => {
  return (
    <StyledWrapper $isOpen={isOpen} $scrolled={scrolled}>
      <label className="burger" htmlFor="burger">
        <input
          type="checkbox"
          checked={isOpen}
          onChange={toggleMenu}
          id="burger"
        />
        <span />
        <span />
        <span />
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .burger {
    position: relative;
    width: 45px;
    height: 28px;
    background: transparent;
    cursor: pointer;
    display: block;
  }

  .burger input {
    display: none;
  }

  .burger span {
    position: absolute;
    display: block;
    height: 5px;
    width: 100%;
    background: #cba964;
    border-radius: 9px;
    opacity: 1;
    right: 0;
    transform: rotate(0deg);
    transition: 250ms ease-in-out;
  }

  .burger span:nth-of-type(1) {
    top: 0;
    transform-origin: left center;
  }

  .burger span:nth-of-type(2) {
    top: 50%;
    transform: translateY(-50%);
    transform-origin: left center;
  }

  .burger span:nth-of-type(3) {
    bottom: 0;
    transform-origin: left center;
  }

  .burger input:checked ~ span:nth-of-type(1) {
    transform: rotate(45deg);
    background: #929292;
    top: -4px;
    left: 5px;
  }

  .burger input:checked ~ span:nth-of-type(2) {
    width: 0%;
    opacity: 0;
  }

  .burger input:checked ~ span:nth-of-type(3) {
    background: #929292;
    transform: rotate(-45deg);
    top: 28px;
    left: 5px;
  }
`;

export default Burger;

// StyledWrapper use the styled-components library to create a styled div that contains the styles for the burger menu. The styles include the appearance of the burger icon, the transition effects when toggling the menu, and the changes in appearance when the menu is open or closed. The component uses props ($isOpen and $scrolled) to conditionally apply styles based on the state of the menu and whether the page has been scrolled.
