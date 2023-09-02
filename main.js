 function cal() {
            const checkboxes = document.querySelectorAll('input[name="item"]:checked');
            const quantities = document.querySelectorAll('input[name="quantity"]');
            let total = 0;

            const tableBody = document.querySelector('#billingTable tbody');
            tableBody.innerHTML = '';

            checkboxes.forEach((checkbox, index) => {
                const item = checkbox.value;
                const price = parseInt(checkbox.nextSibling.textContent.match(/\d+/)[0]);
                const quantity = parseInt(quantities[index].value);
                const itemTotal = price * quantity;
                total += itemTotal;

                const newRow = tableBody.insertRow();
                const cell1 = newRow.insertCell(0);
                const cell2 = newRow.insertCell(1);
                const cell3 = newRow.insertCell(2);
                const cell4 = newRow.insertCell(3);

                cell1.textContent = item;
                cell2.textContent = price;
                cell3.textContent = quantity;
                cell4.textContent = itemTotal;
            });

            document.getElementById('totalamt').textContent = "$"+total;
        }
function printBill() {
            window.print();
        }
  