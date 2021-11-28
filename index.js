

function todolist(){
  let newTask = document.getElementById("inputlist").value
  let item = document.createTextNode(newTask)
  let newitem = document.createElement("li")
  newitem.appendChild(item)
  document.getElementById("todolists").appendChild(newitem)
}

