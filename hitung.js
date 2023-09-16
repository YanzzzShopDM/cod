document.getElementById('calculate').addEventListener('click', function() {
  const denominations = [
    { value: 100000, label: '100,000' },
    { value: 50000, label: '50,000' },
    { value: 20000, label: '20,000' },
    { value: 10000, label: '10,000' },
    { value: 5000, label: '5,000' },
    { value: 2000, label: '2,000' },
    { value: 1000, label: '1,000' },
    { value: 500, label: '500' }
  ];
  let total = 0;

  let resultHTML = '';

  for (let denomination of denominations) {
    const inputId = `input-${denomination.value}`;
    const count = parseInt(document.getElementById(inputId).value) || 0; // Menggunakan 0 jika input kosong
    total += denomination.value * count;
    resultHTML += `${denomination.label} ada ${count} lembar<br>`;
  }

  const transferredAmount = parseInt(document.getElementById('input-transferred').value) || 0; // Menggunakan 0 jika input kosong
  total += transferredAmount; // Tambahkan jumlah yang ditransfer ke total

  const dfodAmount = parseInt(document.getElementById('input-dfod').value) || 0; // Menggunakan 0 jika input kosong

  // Tambahan: Tambahkan jumlah DFOD ke target
  let targetAmount = parseInt(document.getElementById('target').value) || 0; // Menggunakan 0 jika input kosong
  targetAmount += dfodAmount; // Tambahkan jumlah DFOD ke target
  
  const difference = total - targetAmount;

  let remainingHTML = '';
  if (difference > 0) {
    remainingHTML = `LEBIH: ${difference.toLocaleString()}`;
  } else if (difference < 0) {
    remainingHTML = `KURANG: ${Math.abs(difference).toLocaleString()}`;
  } else {
    remainingHTML = "PAS MAS BRO!";
  }

  document.getElementById('output').innerHTML = resultHTML;
  document.getElementById('transferred').innerHTML = `Transfer: ${transferredAmount.toLocaleString()}`;
  document.getElementById('dfod').innerHTML = `DFOD: ${dfodAmount.toLocaleString()}`;
  document.getElementById('total').innerHTML = `Total: ${total.toLocaleString()}`;
  document.getElementById('remaining').innerHTML = remainingHTML;
  document.getElementById('results').style.display = 'flex';
});

document.getElementById('closePopup').addEventListener('click', function() {
  document.getElementById('results').style.display = 'none';
});
// Fungsi untuk membuka popup kalkulator
        function openCalculator() {
            document.getElementById('calculator-popup').style.display = 'block';
        }

        // Fungsi untuk menutup popup kalkulator
        function closeCalculator() {
            document.getElementById('calculator-popup').style.display = 'none';
        }

        // Fungsi untuk menambahkan angka atau operator ke tampilan kalkulator
        function appendToDisplay(value) {
            document.getElementById('display').value += value;
        }

        // Fungsi untuk menghapus tampilan kalkulator
        function clearDisplay() {
            document.getElementById('display').value = '';
        }

        // Fungsi untuk menghitung ekspresi matematika di tampilan kalkulator
        function calculate() {
            try {
                const result = eval(document.getElementById('display').value);
                document.getElementById('display').value = result;
            } catch (error) {
                document.getElementById('display').value = 'Error';
            }
        }
