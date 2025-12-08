// ------------------------------
// DOM ELEMENTS
// ------------------------------
const itemInput = document.getElementById("itemInput");
const qtyInput = document.getElementById("qtyInput");
const aisleInput = document.getElementById("aisleInput");
const listContainer = document.getElementById("listContainer");
const addBtn = document.getElementById("addBtn");

// ------------------------------
// LOAD ITEMS ON PAGE START
// ------------------------------
document.addEventListener("DOMContentLoaded", loadItems);


// ------------------------------
// FETCH ALL ITEMS
// ------------------------------
async function loadItems() {
    listContainer.innerHTML = ""; // Clear old list

    try {
        const res = await fetch("/api/groceries");
        const data = await res.json();

        data.forEach(item => renderItem(item));
    } catch (err) {
        console.error("Error loading items:", err);
    }
}


// ------------------------------
// RENDER ITEM IN UI
// ------------------------------
function renderItem(item) {
    const div = document.createElement("div");
    div.className = "list-item";

    div.innerHTML = `
        <span>
            <strong>${item.name}</strong>  
            (${item.aisle}) — Qty: ${item.qty || 1}
        </span>
        <button class="delete-btn" onclick="deleteItem(${item.id})">✖</button>
    `;

    listContainer.appendChild(div);
}


// ------------------------------
// ADD NEW ITEM
// ------------------------------
addBtn.addEventListener("click", async () => {
    const name = itemInput.value.trim();
    const aisle = aisleInput.value;
    const qty = qtyInput.value || 1;

    if (!name) {
        alert("Please enter an item name.");
        return;
    }

    try {
        const res = await fetch("/api/groceries", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, aisle, qty })
        });

        const data = await res.json();

        renderItem(data.item); // Add item to list instantly

        itemInput.value = "";
        qtyInput.value = "";
        aisleInput.value = "produce";

    } catch (err) {
        console.error("Error adding item:", err);
    }
});


// ------------------------------
// DELETE ITEM
// ------------------------------
async function deleteItem(id) {
    try {
        await fetch(`/api/groceries/${id}`, { method: "DELETE" });
        loadItems(); // reload list
    } catch (err) {
        console.error("Error deleting item:", err);
    }
}

