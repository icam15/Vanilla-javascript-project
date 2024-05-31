const btnEl = document.getElementById("calculate");
const inputBillEl = document.getElementById("bill");
const inputTipEl = document.getElementById("tip");
const totalEl = document.getElementById("total");

function calculateTotal() {
  const billValue = inputBillEl.value;
  const tipValue = inputTipEl.value;
  const totalValue = billValue * (1 + tipValue / 100);
  totalEl.innerText = totalValue.toFixed(2);
}

btnEl.addEventListener("click", calculateTotal);
