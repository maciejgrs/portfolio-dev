const currencyOne = document.querySelector(".currency-one");
const amountOne = document.querySelector(".amount-one");
const currencyTwo = document.querySelector(".currency-two");
const amountTwo = document.querySelector(".amount-two");
const swapBtn = document.querySelector(".swap");
const rateInfo = document.querySelector(".rate-info");

const calculate = () => {
  fetch(
    `https://api.ratesapi.io/api/latest?base=${currencyOne.value}&symbols=${currencyTwo.value}`
  )
    .then((res) => res.json())
    .then((data) => {
      const currency1 = currencyOne.value;
      const currency2 = currencyTwo.value;

      const rate = data.rates[currency2];
      rateInfo.textContent = `1 ${currency1} = ${rate.toFixed(4)}${currency2}`;

      amountTwo.value = (amountOne.value * rate).toFixed(2);
    });
};

currencyOne.addEventListener("change", calculate);
currencyTwo.addEventListener("change", calculate);
amountOne.addEventListener("input", calculate);
amountTwo.addEventListener("input", calculate);
calculate();

swapBtn.addEventListener("click", () => {
  const smth = currencyOne.value;
  currencyOne.value = currencyTwo.value;
  currencyTwo.value = smth;
  calculate();
});
const wrapper = document.querySelector(".wrapper");
const closeApp = document.querySelector("#closingBtn");
closeApp.addEventListener("click", () => {
  wrapper.style.display = "none";
});

const waluta = document.querySelector(".waluta");
waluta.addEventListener("click", () => {
  wrapper.style.display = "block";
});