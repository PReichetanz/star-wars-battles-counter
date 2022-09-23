import styled from "styled-components";
import { useState, useRef, useEffect, useCallback } from "react";

export default function Form({ handlePoints }) {
  const [isDarkSideChosen, setIsDarkSideChosen] = useState(false);
  const sideInputRef = useRef(null);

  const handleSideSwitch = useCallback(() => {
    setIsDarkSideChosen(!isDarkSideChosen);
  }, [isDarkSideChosen]);

  useEffect(() => {
    sideInputRef.current.addEventListener("change", handleSideSwitch);
  }, [handleSideSwitch]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const submittedData = Object.fromEntries(formData);

    handlePoints(submittedData);
    event.target.reset();
    setIsDarkSideChosen(false);
  };

  return (
    <StyledForm onSubmit={handleSubmit} aria-label="Submit battle result">
      <StyledCheckbox
        className="side-switch__input"
        id="light"
        type="checkbox"
        name="side"
        value="dark"
        ref={sideInputRef}
      />
      <StyledCheckboxLabel
        className="side-switch__label"
        htmlFor="light"
        aria-label="Switch light and darkness"
      ></StyledCheckboxLabel>
      <Fieldset aria-label="Number of points achieved">
        <PointsInput
          id="zero"
          type="radio"
          name="points"
          value="0"
          required
          isDarkSideChosen={isDarkSideChosen}
        />
        <PointsLabel className="points__label" htmlFor="zero">
          <PointsCircle>0</PointsCircle>
        </PointsLabel>
        <PointsInput
          id="one"
          type="radio"
          name="points"
          value="1"
          isDarkSideChosen={isDarkSideChosen}
        />
        <PointsLabel className="points__label" htmlFor="one">
          <PointsCircle>1</PointsCircle>
        </PointsLabel>
        <PointsInput
          id="two"
          type="radio"
          name="points"
          value="2"
          isDarkSideChosen={isDarkSideChosen}
        />
        <PointsLabel className="points__label" htmlFor="two">
          <PointsCircle>2</PointsCircle>
        </PointsLabel>
        <PointsInput
          id="three"
          type="radio"
          name="points"
          value="3"
          isDarkSideChosen={isDarkSideChosen}
        />
        <PointsLabel className="points__label" htmlFor="three">
          <PointsCircle>3</PointsCircle>
        </PointsLabel>
        <PointsInput
          id="four"
          type="radio"
          name="points"
          value="4"
          isDarkSideChosen={isDarkSideChosen}
        />
        <PointsLabel className="points__label" htmlFor="four">
          <PointsCircle>4</PointsCircle>
        </PointsLabel>
        <PointsInput
          id="five"
          type="radio"
          name="points"
          value="5"
          isDarkSideChosen={isDarkSideChosen}
        />
        <PointsLabel className="points__label" htmlFor="five">
          <PointsCircle>5</PointsCircle>
        </PointsLabel>
      </Fieldset>
      <SubmitButton type="submit" isDarkSideChosen={isDarkSideChosen}>
        Submit
      </SubmitButton>
    </StyledForm>
  );
}

const Fieldset = styled.fieldset`
  color: var(--white);
  border: none;
  display: flex;
  & label {
    margin-left: 0.25rem;
  }
  padding: 0;
`;

const PointsInput = styled.input.attrs((props) => ({
  isDarkSideChosen: props.isDarkSideChosen,
}))`
  height: 0;
  width: 0;
  visibility: hidden;
  &:checked + .points__label > span {
    background-color: ${(props) =>
      props.isDarkSideChosen ? "var(--primary-red)" : "var(--primary-blue)"};
    color: var(--white);
  }
`;

const PointsCircle = styled.span`
  display: inline-block;
  width: 30px;
  height: 30px;
  margin: -1px 4px 0 0;
  vertical-align: middle;
  cursor: pointer;
  border-radius: 50%;
  background-color: var(--white);
  color: var(--black);
  text-align: center;
  line-height: 35px;
`;

const PointsLabel = styled.label`
  cursor: pointer;
  position: relative;
  height: 40px;
  font-size: 1.25rem;
`;

const StyledForm = styled.form`
  margin: 2rem auto;
  display: grid;
  gap: 1rem;
  justify-items: center;
`;

const StyledCheckboxLabel = styled.label`
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 40px;
  &:before {
    content: "";
    position: absolute;
    width: 80px;
    height: 40px;
    background: var(--primary-blue);
    display: block;
    border-radius: 100px;
    right: -40px;
  }
  &:after {
    content: "";
    position: absolute;
    top: 5px;
    right: 0px;
    width: 30px;
    height: 30px;
    background: var(--white);
    border-radius: 90px;
    transition: right 0.3s;
  }
`;

const StyledCheckbox = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
  &:checked + .side-switch__label:before {
    background: var(--primary-red);
  }
  &:checked + .side-switch__label:after {
    right: -25px;
  }
`;

const SubmitButton = styled.button.attrs((props) => ({
  isDarkSideChosen: props.isDarkSideChosen,
}))`
  color: var(--white);
  background: ${(props) =>
    props.isDarkSideChosen
      ? `linear-gradient(0.25turn,
    var(--primary-red) 70%,
    var(--primary-blue))`
      : `linear-gradient(0.25turn,
    var(--primary-blue) 70%,
    var(--primary-red))`};
  transition: background 2s ease-out;
  font-weight: 700;
  width: 50%;
  border: none;
  border-radius: 5px;
  padding: 1rem;
  font-family: "Starjedi";
  text-transform: uppercase;
`;
