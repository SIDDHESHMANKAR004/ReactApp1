export default function FieldValidate(event, errorEntity) {
  let i,
    flag,
    name,
    value,
    requiredMessage = " is required",
    type,
    message = "",
    mnLen,
    mxLen,
    onlyDigits,
    allDigits,
    noSymbols;
  name = event.target.name;
  type = event.target.type;
  if (type === "text" || type === "textarea" || type === "password") {
    // check if 'required', also check min no. of characters
    value = event.target.value.trim();
    // mnLen = errorEntity[`${name}`].mnLen;
    mxLen = errorEntity[`${name}`].mxLen;
    onlyDigits = errorEntity[`${name}`].onlyDigits;
    allDigits = errorEntity[`${name}`].allDigits;
    noSymbols = errorEntity[`${name}`].noSymbols;
    if (value.length === 0) {
      message = name + requiredMessage;
    } else if (value.length < mnLen) {
      if (!onlyDigits) message = "Min " + mnLen + " characters required";
      else message = "Min " + mnLen + " digits required";
    } //else
    else if (value.length > mxLen) {
      if (!onlyDigits) message = "Maximum " + mxLen + " characters allowed";
      else message = "Maximum " + mxLen + " digits allowed";
    } //else
    else if (onlyDigits) {
      for (let i = value.length - 1; i >= 0; i--) {
        const d = value.charCodeAt(i);
        if (d != 46 && (d < 48 || d > 57)) {
          message = "Enter only digits";
          break;
        } //if
      } //for
    } //else if... onlyDigits
    else if (noSymbols && !allDigits) {
      let d,
        count = 0;
      for (i = value.length - 1, flag = false; i >= 0; i--) {
        d = value.charCodeAt(i);
        if (d >= 48 && d <= 57) {
          count++; // digits are being counted
        } //if
        if (
          (d >= 97 && d <= 122) ||
          (d >= 65 && d <= 90) ||
          (d >= 48 && d <= 57) ||
          value.charAt(i) == "_"
        ) {
          continue;
        } //if
        else {
          // symbol is there, may be space
          flag = true;
          break;
        }
      } //for
      if (flag == true) {
        let q = String.fromCharCode(d);
        if (d == 32) {
          message = "space is not allowed";
        } else
          message =
            "Symbols other than underscore (_) are not allowed, you have used " +
            q;
      } else {
        if (count == value.length) {
          message = "Only digits are not allowed, use some alphabets also";
        }
      }
    } //else if... noSymbols
    else {
      message = "";
    }
  } //if... text || textarea
  else if (event.target.type === "select-one") {
    value = event.target.selectedIndex;
    if (value == 0) {
      message = name + requiredMessage;
    } else {
      message = "";
    }
  } //else if
  else if (type === "email") {
    value = event.target.value.trim();
    if (/\S+@\S+\.\S+/.test(value) == 0) {
      message = "valid email-id " + requiredMessage;
    } else {
      message = "";
    }
  } //else if
  else {
    message = "";
  }
  return message;
}
