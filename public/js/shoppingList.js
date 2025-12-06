function addItem() {
    const name = document.getElementById('itemInput').value.trim();
    const qty = document.getElementById('qtyInput').value.trim() || 1;
    const aisle = document.getElementById('aisleInput').value;

    if (!name) {
        alert("Item name is required!");
        return;
    }

    const list = document.getElementById('listContainer');

    const row = document.createElement('div');
    row.className = 'item-row';

    row.innerHTML = `
      <div class="left">
        <input type="checkbox" onchange="toggleComplete(this)">
        <span>${name} (x${qty}) — ${aisle}</span>
      </div>
      <button class="edit-btn" onclick="editItem(this)">Edit</button>
      <button class="delete-btn" onclick="this.parentElement.remove()">Delete</button>
    `;

    list.appendChild(row);

    document.getElementById('itemInput').value = "";
    document.getElementById('qtyInput').value = "";
}

function toggleComplete(box) {
    const text = box.nextElementSibling;
    text.style.textDecoration = box.checked ? "line-through" : "none";
}

function editItem(button) {
    const text = button.parentElement.querySelector("span");
    const newValue = prompt("Edit item:", text.textContent);
    if (newValue) text.textContent = newValue;
}
