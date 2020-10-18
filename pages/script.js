document.getElementById("currencySubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const amount = document.getElementById("amount").value;
  if (amount === "")
    return;
  console.log("amount = " + amount);

  const toValue = document.getElementById("toInput").value;
  if (toValue === "")
    return;
  console.log("convert to = " + toValue);
  console.log("convert " + amount + " USD to " + toValue);

const url = "https://v6.exchangerate-api.com/v6/966ed0e95ece25fe720b8d8e/latest/" + toValue;
fetch(url)
  .then(function(response) {
      return response.json();
    }).then(function(json) {
      let results = "";
      let mathConversion = amount * (1/json.conversion_rates.USD);
      answer = mathConversion.toFixed(2);
      results += "<h2> USD " + amount + " = " + toValue + " " + answer + "</h2>";
      console.log("math conversion... there is " + mathConversion + " in " + amount + " USD");
      console.log(results);
      document.getElementById("currencyConverterResults").innerHTML = results;
    });

  });

