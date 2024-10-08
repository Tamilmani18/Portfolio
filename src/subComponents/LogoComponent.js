import styled from "styled-components";
import { darkTheme, mediaQueries } from "../components/Themes";

const Logo = styled.h1`
  display: inline-block;
  color: ${(props) =>
    props.color === "dark" ? darkTheme.text : darkTheme.body};
  font-family: "Pacifico", cursive;
  position: fixed;
  left: 2rem;
  top: 2rem;

  z-index: 3;

  ${mediaQueries(40)`
      font-size:1.5em;
      left:1rem;
      top:2rem;
  `};
`;

const LogoComponent = (props) => {
  // return <Logo color={props.theme}>TM</Logo>;
  return <Logo color={props.theme}>Tamil</Logo>;
};

export default LogoComponent;
