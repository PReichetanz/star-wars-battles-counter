import styled, { keyframes } from "styled-components";

export default function Stars() {
  return <StarBackground></StarBackground>;
}

const zoom = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.5);
  }
`;

const StarBackground = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  height: 1px;
  width: 1px;
  background-color: #fff;
  border-radius: 50%;
  animation: ${zoom} 15s alternate infinite;
  box-shadow: 30px 50px 3px 1px #fff, -30px -70px 1px 1px #fff,
    48vw 41vh 3px 0px #fff, 10vw 37vh 3px 1px #fff, 22vw 39vh 1px 0px #fff,
    -17vw -43vh 2px 1px #fff, 44vw -46vh 3px 1px #fff, -17vw -10vh 0px 1px #fff,
    37vw 20vh 1px 0px #fff, 26vw 18vh 1px 3px #fff, 39vw 20vh 0px 1px #fff,
    -22vw -38vh 3px 1px #fff, -38vw -7vh 3px 2px #fff, 47vw -42vh 2px 0px #fff,
    25vw 7vh 0px 2px #fff, -2vw 10vh 0px 2px #fff, -28vw -37vh 3px 2px #fff,
    -23vw 37vh 3px 3px #fff, -47vw 45vh 1px 1px #fff, 4vw -49vh 1px 2px #fff,
    24vw 46vh 0px 2px #fff, -49vw 25vh 1px 3px #fff, -5vw 6vh 3px 1px #fff,
    -47vw 45vh 0px 3px #fff, 10vw 33vh 3px 1px #fff, 15vw 50vh 0px 3px #fff,
    45vw 5vh 2px 0px #fff, -4vw -26vh 2px 0px #fff, -42vw -35vh 0px 3px #fff,
    32vw -46vh 2px 0px #fff, 3vw 27vh 1px 2px #fff, 4vw 18vh 0px 0px #fff,
    -40vw 48vh 3px 3px #fff, 44vw 33vh 0px 0px #fff, -21vw 35vh 2px 2px #fff,
    -33vw -4vh 1px 2px #fff, -2vw 12vh 2px 0px #fff, -48vw 25vh 3px 3px #fff,
    -29vw 31vh 3px 2px #fff, 22vw 29vh 0px 0px #fff, -2vw -25vh 2px 1px #fff,
    -1vw 6vh 2px 2px #fff, 22vw 21vh 0px 0px #fff, 31vw -43vh 3px 1px #fff,
    3vw 3vh 0px 1px #fff, 29vw 23vh 2px 2px #fff, -31vw 17vh 3px 3px #fff,
    -23vw 28vh 1px 0px #fff, -33vw -29vh 0px 2px #fff, -9vw -2vh 3px 0px #fff,
    22vw 1vh 2px 3px #fff, -26vw 44vh 3px 2px #fff, 23vw 45vh 3px 3px #fff,
    1vw 27vh 0px 1px #fff, -39vw -36vh 0px 1px #fff, 43vw -25vh 3px 1px #fff,
    -2vw -45vh 3px 3px #fff, -35vw -31vh 1px 0px #fff, 16vw 25vh 3px 2px #fff,
    -23vw 14vh 2px 2px #fff, -38vw 19vh 3px 2px #fff, 2vw 38vh 1px 3px #fff,
    47vw -40vh 1px 3px #fff, -9vw 9vh 1px 2px #fff, -14vw -33vh 1px 0px #fff,
    -7vw -13vh 2px 3px #fff, 41vw 14vh 1px 3px #fff, 36vw 30vh 1px 2px #fff,
    -46vw 45vh 3px 0px #fff, -20vw 20vh 2px 1px #fff, -22vw -9vh 2px 1px #fff,
    39vw 17vh 2px 0px #fff, -11vw -30vh 3px 1px #fff, -42vw -2vh 1px 0px #fff,
    32vw -21vh 3px 0px #fff, -31vw 8vh 3px 2px #fff, 46vw 26vh 1px 3px #fff,
    19vw 13vh 0px 3px #fff, -7vw -8vh 3px 0px #fff, -20vw -14vh 2px 1px #fff,
    -50vw 20vh 1px 0px #fff, -17vw -12vh 3px 2px #fff, 42vw 15vh 0px 0px #fff,
    -39vw -12vh 0px 0px #fff, -30vw 32vh 2px 2px #fff, -28vw -12vh 1px 3px #fff,
    14vw 47vh 2px 1px #fff, 35vw 48vh 0px 0px #fff, -17vw 50vh 1px 0px #fff,
    -26vw -34vh 1px 2px #fff, 10vw -8vh 3px 2px #fff, -6vw 6vh 1px 2px #fff,
    -40vw -3vh 2px 0px #fff, 27vw -50vh 2px 0px #fff, -38vw 21vh 1px 1px #fff,
    14vw -4vh 1px 0px #fff, -22vw 36vh 3px 3px #fff, 41vw 47vh 1px 0px #fff,
    0vw 44vh 2px 0px #fff, 33vw -49vh 2px 3px #fff, -38vw 34vh 0px 0px #fff,
    0vw -26vh 1px 0px #fff, -15vw -47vh 3px 1px #fff, -23vw -37vh 0px 0px #fff,
    -31vw -39vh 2px 0px #fff, 13vw 45vh 3px 0px #fff, 25vw -28vh 3px 2px #fff,
    -2vw -10vh 1px 0px #fff, -19vw -23vh 2px 0px #fff, 25vw -16vh 1px 1px #fff,
    5vw 5vh 1px 2px #fff, 6vw 3vh 0px 2px #fff, 39vw 38vh 1px 1px #fff,
    38vw -9vh 2px 3px #fff, -10vw -28vh 2px 2px #fff, 29vw 47vh 1px 0px #fff,
    18vw -12vh 0px 2px #fff, -29vw 30vh 2px 3px #fff, -14vw -24vh 3px 1px #fff,
    19vw 42vh 0px 0px #fff, -48vw -19vh 1px 1px #fff, -19vw -7vh 0px 1px #fff,
    -32vw -46vh 0px 0px #fff, -7vw -20vh 0px 1px #fff, 31vw -24vh 2px 2px #fff,
    28vw 15vh 3px 2px #fff, 25vw 35vh 2px 2px #fff, -28vw -8vh 3px 2px #fff,
    44vw -6vh 2px 0px #fff, -23vw -25vh 1px 0px #fff, -31vw -15vh 3px 0px #fff,
    17vw 21vh 3px 2px #fff, -20vw 39vh 1px 3px #fff, 48vw -11vh 2px 2px #fff,
    41vw -50vh 1px 2px #fff, -5vw -21vh 1px 2px #fff, -49vw -22vh 3px 1px #fff,
    -7vw -40vh 1px 2px #fff, 35vw 46vh 1px 2px #fff, 13vw -21vh 1px 0px #fff,
    31vw 11vh 0px 1px #fff, -47vw 20vh 3px 3px #fff, -2vw -34vh 0px 1px #fff,
    -40vw -35vh 1px 2px #fff, 44vw -39vh 0px 3px #fff, 29vw -27vh 1px 3px #fff,
    25vw 30vh 3px 0px #fff, 23vw 46vh 0px 1px #fff, -30vw -8vh 1px 3px #fff,
    36vw -23vh 1px 0px #fff, -4vw 17vh 0px 2px #fff, 18vw -33vh 0px 3px #fff,
    -47vw -46vh 1px 3px #fff, 21vw -38vh 2px 3px #fff, -26vw -8vh 1px 2px #fff,
    -37vw -26vh 3px 1px #fff, -48vw -3vh 0px 1px #fff, 21vw -3vh 3px 1px #fff,
    -19vw -45vh 0px 2px #fff, -45vw -29vh 1px 1px #fff, -38vw 24vh 1px 2px #fff,
    27vw -2vh 3px 1px #fff, 11vw -32vh 1px 1px #fff, -21vw -16vh 3px 1px #fff,
    1vw 30vh 3px 1px #fff, -11vw 10vh 3px 3px #fff, 21vw 30vh 2px 3px #fff,
    10vw 35vh 1px 0px #fff, 24vw -35vh 1px 3px #fff;
`;
