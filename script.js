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
}
