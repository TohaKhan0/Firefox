const calculateBtn = document.getElementById('calculate');
const resetBtn = document.getElementById('reset');
const items = document.getElementsByClassName('item');
const totalElement = document.getElementById('total');

calculateBtn.addEventListener('click', () => {
  let total = 0;
  for (let item of items) {
    const price = parseFloat(item.getElementsByClassName('item-price')[0].textContent.slice(4));
    const quantity = parseInt(item.getElementsByClassName('item-quantity')[0].value);
    if (isNaN(quantity)) {
      continue;
    }
    total += price * quantity; } totalElement.textContent = `Tk. ${total.toFixed(2)}`; }); resetBtn.addEventListener('click', () => { for (let item of items) { item.getElementsByClassName('item-quantity')[0].value = ''; } totalElement.textContent = ''; });
