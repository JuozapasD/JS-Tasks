/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const output = document.getElementById("output");

document.getElementById("submit-btn").addEventListener("click", e => {
  e.preventDefault();

  const getEl = document.getElementById("search").value;

  const kilo = document.createElement("h2");
  kilo.textContent = getEl + " Kilograms equals to:";

  const pound = document.createElement("h3");
  pound.textContent = "Pounds: " + getEl * 2.2046;

  const g = document.createElement("h3");
  g.textContent = "Grams: " + getEl / 0.001;

  const oz = document.createElement("h3");
  oz.textContent = "Ounces: " + getEl * 35.274;

  output.append(kilo, pound, g, oz);
  output.style.marginLeft = "15%";
  output.style.lineHeight = "1.8";
});
