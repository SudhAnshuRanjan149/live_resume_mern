import React from "react";
import TextField from "@mui/material/TextField";

// CSS
import "./InputField.css";
const InputField = ({ value, setValue, label = "Hello", required = true,type="text" }) => {
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div className="my-inputField">
        <TextField
          id="filled-basic"
          variant="filled"
          required={required}
          label={label}
          value={value}
          onChange={handleChange}
          fullWidth
          className="inputField"
		  type={type}
        />
      </div>
    </>
  );
};

export default InputField;

//    // <div className="inputField">
//    <TextField
//    required={required}
//    id="outlined-required"
//    // defaultValue={value}
//    label={label}
//    value={value}
//    onChange={handleChange}
//    className="inputField"
//  />
// // </div>

{
  /* <Box
component="form"
sx={{
  '& > :not(style)': { m: 1, width: '25ch' },
}}
noValidate
autoComplete="off"
>

<TextField id="filled-basic" label="Filled" variant="filled" />
<TextField id="outlined-basic" label="Outlined" variant="outlined" />
<TextField id="standard-basic" label="Standard" variant="standard" />
</Box> */
}
