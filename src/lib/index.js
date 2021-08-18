import { useState } from "react";

const optionDefaults = {
    label: "Untitled",
    maxlength: 255,
    required: false,
    size: "m",
    defaultValue: "",
    placeholder: "",
    instructions: "",
    labelPlacement: "top",
    preStyled: true,
    choices: ['First Choice', 'Second Choice', 'Third Choice'],
    name: "name",
}

const globalStylesInput = {
    marginTop: "5px",
    padding: "3px",
};

const labelStyles = {
    marginBottom: "5px",
    marginTop: "5px",
    fontSize: "18px",
    fontWeight: "600",
    letterSpacing: "0.7px",
};

const instructionStyles = {
    padding: "10px",
    color: "#666666",
    backgroundColor: "rgba(0, 0, 0, 0.05)"
};

export function createTextInput(passedOptions = optionDefaults) {
    const options = {
        ...optionDefaults,
        ...passedOptions
    };

    if (options.labelPlacement === "top") {
        return (
            <div style={{ display: "flex", flexDirection: "column" }}>
                <label style={options.preStyled ? labelStyles : {}}>{options.label}</label>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <input
                        type="text"
                        style={{ width: options.size === "m" ? "300px" : "450px", maxHeight: "25px", minHeight: "25px" }}
                        required={options.required}
                        value={options.defaultValue}
                        placeholder={options.placeholder}
                        maxlength={options.maxlength}
                    />
                    <span style={options.preStyled ? instructionStyles : {}}>{options.instructions}</span>
                </div>
            </div>
        );
    } else if (options.labelPlacement === "left") {
        return (
            <div style={{ display: "flex" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <label style={options.preStyled ? labelStyles : {}}>{options.label}</label>
                    <input
                        type="text"
                        style={{ width: (options.size === "m" ? "300px" : "450px") }}
                        required={options.required}
                        value={options.defaultValue}
                        placeholder={options.placeholder}
                        maxlength={options.maxlength}
                    />
                    <span style={options.preStyled ? instructionStyles : {}}>{options.instructions}</span>
                </div>
            </div>
        );
    } else if (options.labelPlacement === "right") {
        return (
            <div style={{ display: "flex" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <input
                        type="text"
                        style={{ width: options.size === "m" ? "300px" : "450px" }}
                        required={options.required}
                        value={options.defaultValue}
                        placeholder={options.placeholder}
                        maxlength={options.maxlength}
                    />
                    <label style={options.preStyled ? labelStyles : {}}>{options.label}</label>
                    <span style={options.preStyled ? instructionStyles : {}}>{options.instructions}</span>
                </div>
            </div>
        );
    }

}

export function createMultiLineText(passedOptions = optionDefaults) {
    const options = {
        ...optionDefaults,
        ...passedOptions
    };

    if (options.labelPlacement === "top") {
        return (
            <div style={{ display: "flex", flexDirection: "column" }}>
                <label style={options.preStyled ? labelStyles : {}}>{options.label}</label>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <textarea
                        type="text"
                        style={{ width: options.size === "m" ? "300px" : "450px", maxHeight: "75px", minHeight: "75px" }}
                        required={options.required}
                        placeholder={options.placeholder}
                        maxlength={options.maxlength}
                    >{options.defaultValue}</textarea>
                    <span style={options.preStyled ? instructionStyles : {}}>{options.instructions}</span>
                </div>
            </div>
        );
    }
    else if (options.labelPlacement === "left") {
        return (
            <div style={{ display: "flex" }}>               
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <label style={options.preStyled ? labelStyles : {}}>{options.label}</label>
                    <textarea
                        type="text"
                        style={{ width: options.size === "m" ? "300px" : "450px", maxHeight: "75px", minHeight: "75px" }}
                        required={options.required}
                        placeholder={options.placeholder}
                        maxlength={options.maxlength}
                    >{options.defaultValue}</textarea>
                    <span style={options.preStyled ? instructionStyles : {}}>{options.instructions}</span>
                </div>
            </div>
        )
    }
    else if (options.labelPlacement === "right") {
        return (
            <div style={{ display: "flex" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <textarea
                        type="text"
                        style={{ width: options.size === "m" ? "300px" : "450px", maxHeight: "75px", minHeight: "75px" }}
                        required={options.required}
                        placeholder={options.placeholder}
                        maxlength={options.maxlength}
                    >{options.defaultValue}</textarea>
                    <label style={options.preStyled ? labelStyles : {}}>{options.label}</label>
                    <span style={options.preStyled ? instructionStyles : {}}>{options.instructions}</span>
                </div>
            </div>
        );
    }
}

export function createSelectField(passedOptions = optionDefaults) {
    const options = {
        ...optionDefaults,
        ...passedOptions
    };


    if (options.labelPlacement === "top") {
        return (
            <div style={{ display: "flex", flexDirection: "column" }}>
                <label style={options.preStyled ? labelStyles : {}}>{options.label}</label>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <select required={options.required}>
                        {options.choices.map(choice => (
                            <option value={choice}>{choice}</option>
                         ) )}
                    </select>
                    <span style={options.preStyled ? instructionStyles : {}}>{options.instructions}</span>
                </div>
            </div>
        );
    }
    else if (options.labelPlacement === "left") {
        return (
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <label style={options.preStyled ? labelStyles : {}}>{options.label}</label>
                    <select required={options.required}>
                        {options.choices.map(choice => (
                            <option value={choice}>{choice}</option>
                        ))}
                    </select>
                    <span style={options.preStyled ? instructionStyles : {}}>{options.instructions}</span>
                </div>
            </div>
        );
    }
    else if (options.labelPlacement === "right") {
        return (
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <select required={options.required}>
                        {options.choices.map(choice => (
                            <option value={choice}>{choice}</option>
                        ))}
                    </select>
                    <label style={options.preStyled ? labelStyles : {}}>{options.label}</label>
                    <span style={options.preStyled ? instructionStyles : {}}>{options.instructions}</span>
                </div>
            </div>
        );
    }
}

export function createMultipleChoice(passedOptions = optionDefaults) {
    const options = {
        ...optionDefaults,
        ...passedOptions,
    };


    if (options.labelPlacement === "top") {
        return (
            <div style={{ display: "flex", flexDirection: "column" }}>
                <label style={options.preStyled ? labelStyles : {}}>{options.label}</label>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                        {options.choices.map(choice => (
                            <div>
                                <input
                                type="radio"
                                value={choice}
                                name={options.name}
                                />
                                <label style={{marginLeft: "5px"}}>{choice}</label>
                            </div>
                         ) )}
                        </div>
                    <span style={options.preStyled ? instructionStyles : {}}>{options.instructions}</span>
                </div>
            </div>
        );
    }
    else if (options.labelPlacement === "left") {
        return (
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <label style={options.preStyled ? labelStyles : {}}>{options.label}</label>
                    <div>
                        {options.choices.map(choice => (
                            <div>
                                <input
                                type="radio"
                                value={choice}
                                name={options.name}
                                />
                                <label style={{marginLeft: "5px"}}>{choice}</label>
                            </div>
                         ) )}
                    </div>
                    <span style={options.preStyled ? instructionStyles : {}}>{options.instructions}</span>
                </div>
            </div>
        );
    }
    else if (options.labelPlacement === "right") {
        return (
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                        {options.choices.map(choice => (
                            <div>
                                <input
                                type="radio"
                                value={choice}
                                name={options.name}
                                />
                                <label style={{marginLeft: "5px"}}>{choice}</label>
                            </div>
                         ) )}
                    </div>
                    <label style={options.preStyled ? labelStyles : {}}>{options.label}</label>
                    <span style={options.preStyled ? instructionStyles : {}}>{options.instructions}</span>
                </div>
            </div>
        );
    }
}