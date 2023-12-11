
alert("Hello World!");
console.log("Hello World");
document.getElementById("hello").innerHTML = "Hello World";

function renderTodos(todos) {
  document.write("<ul>");
  todos.forEach((todo) => {
    document.write(`<li>${todo.text}</li>`);
  });
  document.write("</ul>");
}

const todos = [
  { id: 1, text: "Learn JavaScript", isCompleted: false },
  { id: 2, text: "Learn React", isCompleted: false },
  { id: 3, text: "Learn Node", isCompleted: false },
];

renderTodos(todos);
