import styled from "styled-components";

export default function Form({ handlePoints, onSideSwitch, isDarkSideChosen }) {
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
        onChange={onSideSwitch}
      />
      <StyledCheckboxLabel
        className="side-switch__label"
        htmlFor="light"
        aria-label="Switch light and darkness"
      ></StyledCheckboxLabel>
      <Fieldset aria-label="Number of points achieved">
        <label htmlFor="zero">0</label>
        <input id="zero" type="radio" name="points" value="0" required />
        <label htmlFor="one">1</label>
        <input id="one" type="radio" name="points" value="1" />
        <label htmlFor="two">2</label>
        <input id="two" type="radio" name="points" value="2" />
        <label htmlFor="three">3</label>
        <input id="three" type="radio" name="points" value="3" />
        <label htmlFor="four">4</label>
        <input id="four" type="radio" name="points" value="4" />
        <label htmlFor="five">5</label>
        <input id="five" type="radio" name="points" value="5" />
      </Fieldset>
      <SubmitButton type="submit" isDarkSideChosen={isDarkSideChosen}>
        Submit
      </SubmitButton>
    </StyledForm>
  );
}

const Fieldset = styled.fieldset`
  color: var(--white);
  & label {
    margin-left: 0.5rem;
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
    width: 80px;
    height: 40px;
    background: var(--primary-blue);
    display: block;
    border-radius: 100px;
    position: absolute;
    content: "";
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
