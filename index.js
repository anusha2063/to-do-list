function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();
    
    if (taskText === "") return;
  
    const li = document.createElement("li");
    li.innerHTML = `${taskText} <button class="delete">❌</button>`;
    
    document.getElementById("taskList").appendChild(li);
    input.value = "";
  }
  
  // Event Delegation: only one listener on the parent
  document.getElementById("taskList").addEventListener("click", function(e) {
    if (e.target.classList.contains("delete")) {
      e.target.parentElement.remove(); // delete the li
    }
  });
  