function addContact() {
  const name = document.getElementById("nameInput").value.trim();
  const phone = document.getElementById("phoneInput").value.trim();

  if (!name || !phone) {
    alert("Please enter both name and phone number.");
    return;
  }

  const initials = name[0].toUpperCase();

  const li = document.createElement("li");
  li.className = "flex items-center justify-between bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition mb-2";

  li.innerHTML = `
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold">${initials}</div>
      <div>
        <p class="font-semibold text-gray-800 contact-name">${name}</p>
        <p class="text-gray-500 text-sm contact-phone">${phone}</p>
      </div>
    </div>
    <div class="flex gap-2">
      <button onclick="editContact(this)" class="p-2 hover:bg-yellow-100 rounded-lg transition">
        <i data-lucide="pencil" class="w-5 h-5 text-yellow-600"></i>
      </button>
      <button onclick="deleteContact(this)" class="p-2 hover:bg-red-100 rounded-lg transition">
        <i data-lucide="trash-2" class="w-5 h-5 text-red-600"></i>
      </button>
    </div>
  `;

  document.getElementById("contactList").appendChild(li);

  document.getElementById("nameInput").value = "";
  document.getElementById("phoneInput").value = "";
  lucide.createIcons();
}

function editContact(button) {
  const li = button.closest("li");

  const nameElement = li.querySelector(".contact-name");
  const phoneElement = li.querySelector(".contact-phone");

 
  const newName = prompt("Edit name:", nameElement.textContent);
  if (newName === null || newName.trim() === "") return;

  const newPhone = prompt("Edit phone number:", phoneElement.textContent);
  if (newPhone === null || newPhone.trim() === "") return;

  nameElement.textContent = newName;
  phoneElement.textContent = newPhone;
  li.querySelector("div.w-10").textContent = newName[0].toUpperCase();
}

function deleteContact(button) {
  button.closest("li").remove();
}
