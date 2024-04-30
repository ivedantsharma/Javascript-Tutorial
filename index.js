function appendToDisplay(value) {
  document.querySelector("input").value += value;
}

function clearDisplay() {
  document.querySelector("input").value = "";
}

function backspace() {
  var expression = document.querySelector("input").value;
  document.querySelector("input").value = expression.substring(
    0,
    expression.length - 1
  );
}

function calculate() {
  var expression = document.getElementById("display").value.trim(); // Trim leading and trailing whitespace

  try {
    // Check for empty expression
    if (expression === "") {
      throw "Empty expression";
    }

    // Check for invalid characters or consecutive operators
    if (
      /[^0-9+\-*/.]/.test(expression) ||
      /[\+\-\*\/]{2,}/.test(expression) ||
      /[\+\-\*\/]$/.test(expression)
    ) {
      throw "Invalid expression";
    }

    // Use regular expression to split the expression into numbers and operators
    var tokens = expression.match(/\d+|\+|\-|\*|\/|\./g);

    // Evaluate expressions within parentheses recursively
    while (tokens.includes("(")) {
      var startIndex = tokens.lastIndexOf("("); // Find the last index of '('
      var endIndex = tokens.indexOf(")", startIndex); // Find the corresponding ')'
      if (endIndex === -1) {
        throw "Mismatched parentheses"; // Throw error if ')' is missing
      }
      // Evaluate the expression within parentheses and replace it with the result
      var subExpression = tokens.slice(startIndex + 1, endIndex);
      var subResult = evaluateExpression(subExpression);
      tokens.splice(
        startIndex,
        endIndex - startIndex + 1,
        subResult.toString()
      );
    }

    // Evaluate the remaining expression using the evaluateExpression function
    var result = evaluateExpression(tokens);
    document.getElementById("display").value = result; // Display the result
  } catch (error) {
    document.getElementById("display").value = "Error: " + error; // Display error message
  }
}

// Function to evaluate an expression array according to the BODMAS rule
function evaluateExpression(tokens) {
  // Perform exponentiation first
  for (var i = 0; i < tokens.length; i++) {
    if (tokens[i] === "^") {
      var base = parseFloat(tokens[i - 1]);
      var exponent = parseFloat(tokens[i + 1]);
      var result = Math.pow(base, exponent);
      tokens.splice(i - 1, 3, result.toString()); // Replace base, ^, and exponent with the result
      i--; // Decrement i to account for the removal of two elements
    }
  }

  // Perform multiplication and division
  for (var i = 0; i < tokens.length; i++) {
    if (tokens[i] === "*") {
      var operand1 = parseFloat(tokens[i - 1]);
      var operand2 = parseFloat(tokens[i + 1]);
      var result = operand1 * operand2;
      tokens.splice(i - 1, 3, result.toString()); // Replace operand1, *, and operand2 with the result
      i--; // Decrement i to account for the removal of two elements
    } else if (tokens[i] === "/") {
      var operand1 = parseFloat(tokens[i - 1]);
      var operand2 = parseFloat(tokens[i + 1]);
      if (operand2 === 0) {
        throw "Division by zero"; // Throw error for division by zero
      }
      var result = operand1 / operand2;
      tokens.splice(i - 1, 3, result.toString()); // Replace operand1, /, and operand2 with the result
      i--; // Decrement i to account for the removal of two elements
    }
  }

  // Perform addition and subtraction
  var result = parseFloat(tokens[0]); // Initialize result with the first number
  for (var i = 1; i < tokens.length; i += 2) {
    var operator = tokens[i]; // Operator
    var operand = parseFloat(tokens[i + 1]); // Operand
    if (operator === "+") {
      result += operand;
    } else if (operator === "-") {
      result -= operand;
    }
  }

  return result; // Return the final result
}
