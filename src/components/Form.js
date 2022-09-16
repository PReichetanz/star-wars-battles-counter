import styled from "styled-components";

export default function Form({ handlePoints }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const submittedData = Object.fromEntries(formData);

    handlePoints(submittedData);
    event.target.reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit} aria-label="Submit battle result">
      <StyledCheckbox
        className="side-switch__input"
        id="light"
        type="checkbox"
        name="side"
        value="dark"
      />
      <StyledCheckboxLabel
        className="side-switch__label"
        htmlFor="light"
        aria-label="Switch light and darkness"
      ></StyledCheckboxLabel>
      <Fieldset aria-label="Number of points achieved">
        <PointsLabel htmlFor="zero">0</PointsLabel>
        <PointsInput id="zero" type="radio" name="points" value="0" required />
        <PointsLabel htmlFor="one">1</PointsLabel>
        <PointsInput id="one" type="radio" name="points" value="1" />
        <PointsLabel htmlFor="two">2</PointsLabel>
        <PointsInput id="two" type="radio" name="points" value="2" />
        <PointsLabel htmlFor="three">3</PointsLabel>
        <PointsInput id="three" type="radio" name="points" value="3" />
        <PointsLabel htmlFor="four">4</PointsLabel>
        <PointsInput id="four" type="radio" name="points" value="4" />
        <PointsLabel htmlFor="five">5</PointsLabel>
        <PointsInput id="five" type="radio" name="points" value="5" />
      </Fieldset>
      <SubmitButton type="submit">Submit</SubmitButton>
    </StyledForm>
  );
}

const Fieldset = styled.fieldset`
  color: var(--white);
  border: none;
  display: flex;
  gap: 5px;
  & label {
    margin-left: 0.5rem;
  }
`;

const PointsInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
  &:checked {
    background-color: var(--primary-blue);
  }
`;

const PointsLabel = styled.label`
  cursor: pointer;
  position: relative;
  height: 40px;
  &:before {
    color: var(--white);
    content: "";
  }
  &:after {
    content: "";
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    top: 5px;
    background-color: var(--white);
    display: block;
  }
`;

const StyledForm = styled.form`
  max-width: 300px;
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

const SubmitButton = styled.button`
  color: var(--white);
  background: linear-gradient(
    0.25turn,
    var(--primary-blue),
    var(--primary-red)
  );
  font-weight: 700;
  width: 50%;
  border: none;
  border-radius: 5px;
  padding: 1rem;
  font-family: "Starjedi";
  text-transform: uppercase;
`;
