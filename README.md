## Introduction
Form element generators are used on the platform to generate an HTML (specifically JSX) form element, for use either when creating a form to show a preview of the form you are building as you work, editing a form to load back in the form data and reconstruct the preview, or when simply viewing a form.

To use the functions, you call the appropriate function for the type you want to build, and pass in an options object to tell the function how to construct your form field. A simple example would look like this:
```js
	const textField = createTextInput({
		label: "First Name",
		maxlength: 50,
		required: true,
		placeholder: "Write first name here",
		defaultValue: "",
	});
```
This call would create a simple single line text input field and label with the options specified, and return the JSX that represents it. Combining together these kinds of function calls enable you to build full forms from JS function calls.
## Available Methods
#### createTextInput() 
Create a single line text input, this uses the same input type as html input elements with type "text".
#### createMultilineText()
#### createSelectField()
#### createMultipleChoice()
#### createCheckboxField()
#### createNumericInput()