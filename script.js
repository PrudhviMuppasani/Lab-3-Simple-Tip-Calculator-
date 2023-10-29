// Extract the element
const tipForm = document.getElementById("tipForm");

// put the input elements
const bill_Amount_Input = document.getElementById("billAmount");
const tip_Percentage_Input = document.getElementById("tipPercentage");
const tip_Percentage_Value = document.getElementById("tipPercentageValue");
const tip_Amount_Input = document.getElementById("tipAmount");
const total_Amount_Input = document.getElementById("totalAmount");
const custom_TipPercentage_Input = document.getElementById("tipPercentageInput");

// To listen for "input" or "change" events, add an event listener to the form.
tipForm.addEventListener("input", function() {
    // Update the Tip Percentage field with the value from the tip input slider
    tip_Percentage_Value.textContent = tip_Percentage_Input.value + "%";

    // caluculate the tip amt
    calculateTip();
});

// Custom tip % input event listener
custom_TipPercentage_Input.addEventListener("input", function() {
    // The value from the custom tip % input should be updated in the tip input slider.
    tip_Percentage_Input.value = custom_TipPercentage_Input.value;

    // Update the Tip Percentage field
    tip_Percentage_Value.textContent = custom_TipPercentage_Input.value + "%";

    // Calculate the tip
    calculateTip();
});

// Function to calculate the tip and total amount
function calculateTip() {
    const bill_Amount = parseFloat(bill_Amount_Input.value);
    const tip_Percentage = parseFloat(custom_TipPercentage_Input.value) || parseFloat(tip_Percentage_Input.value);
    const tip_Amount = (bill_Amount * tip_Percentage) / 100;
    const total_Amount = bill_Amount + tip_Amount;

    tip_Amount_Input.value = tip_Amount.toFixed(2); // Round to 2 decimal places
    total_Amount_Input.value = total_Amount.toFixed(2); // Round to 2 decimal places
}


// Initial calculation
calculateTip();