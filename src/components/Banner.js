import styled from "styled-components";
import Image from "../images/lego-star-wars-battles-banner.jpg";

export default function Banner() {
  return (
    <StyledImage src={Image} alt="Lego Star Wars Battles Banner"></StyledImage>
  );
}

const StyledImage = styled.img`
  width: 100px;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
`;
