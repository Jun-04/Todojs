import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //adding to todo list
  createIncompleteTodo(inputText);
};

const createIncompleteTodo = (todo) => {
  //create li
  const li = document.createElement("li");

  const div = document.createElement("div");
  div.className = "list-row";

  const p = document.createElement("p");
  p.className = "todo-item";
  p.innerText = todo;

  //button tag
  const completeButton = document.createElement("button");
  completeButton.innerText = "COMPLETED";
  completeButton.addEventListener("click", () => {
    const moveTarget = completeButton.closest("li");
    completeButton.nextElementSibling.remove();
    completeButton.remove();

    const backButton = document.createElement("button");
    backButton.innerText = "BACK";
    backButton.addEventListener("click", () => {
      const todoText = backButton.previousElementSibling.innerText;
      createIncompleteTodo(todoText);
      backButton.closest("li").remove();
    });
    moveTarget.firstElementChild.appendChild(backButton);

    document.getElementById("complete-list").appendChild(moveTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "DELETE";
  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.closest("li");
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);

  document.getElementById("incomplete-list").appendChild(li);
};

document.getElementById("add-button").addEventListener("click", onClickAdd);
