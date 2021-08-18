import { createTextInput, createMultiLineText, createSelectField, createMultipleChoice, createCheckboxField, createNumericInput } from './lib';
import { useState } from 'react';

function App() {
  const [textValue, setTextValue] = useState("");
  const [multiLineValue, setMultiLineValue] = useState("")
  const [selectFieldValue, setSelectFieldValue] = useState(0)
  const [mulitpleChoiceValue, setMultipleChoiceValue] = useState("")
  const [checkBoxFieldValue, setCheckBoxFieldValue] = useState("")
  const [numericInputValue, setNumericInputValue] = useState("")

  return (
    <>
      <div style={{ width: "600px" }}>
        {createTextInput(textValue, setTextValue, {instructions: "Testing if this works", labelPlacement: "left"})}
        {createMultiLineText(multiLineValue, setMultiLineValue, { instructions: "Put in some text here...", placeholder: "Put in some text here...", labelPlacement: "left" })}
        {createSelectField(selectFieldValue, setSelectFieldValue,{choices: ['1', '2', '3'], labelPlacement: "left"})}
        {createMultipleChoice(mulitpleChoiceValue, setMultipleChoiceValue, { labelPlacement: "left" })}
        {createCheckboxField(checkBoxFieldValue, setCheckBoxFieldValue, { labelPlacement: "left" })}
        {createNumericInput(numericInputValue, setNumericInputValue, { labelPlacement: "left"})}
      </div>
    </>
  );
}

export default App;
