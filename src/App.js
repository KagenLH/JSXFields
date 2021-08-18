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
        {createTextInput(textValue, setTextValue, {instructions: "Testing if this works"})}
        {createMultiLineText(multiLineValue, setMultiLineValue, { instructions: "Put in some text here...", placeholder: "Put in some text here..." })}
        {createSelectField(selectFieldValue, setSelectFieldValue,{choices: ['1', '2', '3']})}
        {createMultipleChoice(mulitpleChoiceValue, setMultipleChoiceValue, { instructions: "Put in some text here..." })}
        {createCheckboxField(checkBoxFieldValue, setCheckBoxFieldValue, { instructions: "Put in some text here..." })}
        {createNumericInput(numericInputValue, setNumericInputValue, { instructions: "Put in some text here..."})}
      </div>
    </>
  );
}

export default App;
