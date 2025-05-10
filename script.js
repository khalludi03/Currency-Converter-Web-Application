// Static exchange rates relative to BDT
const rates = {
  BDT: 1,
  USD: 0.0118,
  EUR: 0.0109,
  INR: 0.91,
  GBP: 0.0086
};

document.getElementById('convert-btn').addEventListener('click', () => {
  const from = document.getElementById('from-currency').value;
  const to = document.getElementById('to-currency').value;
  const amount = parseFloat(document.getElementById('amount').value);

  if (isNaN(amount)) {
    showResult('Please enter a valid number');
    return;
  }

  // Convert: amount in BDT -> target
  const inBDT = amount * rates[from];
  const converted = inBDT / rates[to];
  showResult(`${amount.toFixed(2)} ${from} = ${converted.toFixed(2)} ${to}`);
});

function showResult(text) {
  const resEl = document.getElementById('result');
  resEl.style.opacity = '0';
  setTimeout(() => {
    resEl.textContent = text;
    resEl.style.opacity = '1';
  }, 200);
}
