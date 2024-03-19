let valueTotal = [0, 0];
let valueProduct = [20.0, 10.0];
let qtd = [0, 0];

function addItem(item) {
  let quantity = document.getElementById("quantity" + item);
  let total = document.getElementById("total" + item);
  qtd[item] += 1;
  valueTotal[item] = Number.parseFloat(valueProduct[item]) * qtd[item];
  quantity.innerHTML = qtd[item];
  total.innerHTML = valueTotal[item].toFixed(2);
  valueBuy();
}

function removeItem(item) {
  if (qtd[item] > 0) {
    qtd[item] -= 1;

    let quantity = document.getElementById("quantity" + item);
    let total = document.getElementById("total" + item);
    quantity.innerHTML = qtd[item];
    valueTotal[item] = Number.parseFloat(valueProduct[item]) * qtd[item];
    total.innerHTML = valueTotal[item].toFixed(2);
    valueBuy();
  }
}

function valueBuy() {
  let buyTotalElement = document.getElementById("buyTotal");
  let value = 0;

  for (let i = 0; i < valueTotal.length; i++) {
    value += valueTotal[i];
  }
  buyTotalElement.innerHTML = value.toFixed(2);
}
