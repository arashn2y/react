document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("todo-input");
  const addBtn = document.getElementById("add-todo");
  const list = document.getElementById("todo-list");

  addBtn.addEventListener("click", () => {
    const value = input.value.trim();
    if (value === "") return;

    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.textContent = value;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "btn btn-danger btn-sm";
    deleteBtn.addEventListener("click", () => {
      list.removeChild(li);
    });

    li.appendChild(deleteBtn);
    list.appendChild(li);

    input.value = "";
    input.focus();
  });
});
