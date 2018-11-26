
  document.addEventListener('click', (e) => {
    if(e.target && e.target.classList == 'todoItem'){
      if (e.target.parentElement == notDone) {
        Done.appendChild(e.target)
      } else if(e.target.parentElement == Done) {
        notDone.appendChild(e.target)
      }
    }
 })
  const notDone = document.querySelector(".first")
  const Done = document.querySelector(".completedTodoWrapper")
  const listBuilder = () => {
    const mylist = prompt("What do you want to do today?")
    if (mylist != false && mylist!=null) {
      newDiv = document.createElement("li")
      newDiv.classList.add("todoItem")
      content = document.createTextNode(mylist)
      newDiv.appendChild(content)
      notDone.appendChild(newDiv)
      newDiv.addEventListener
    } else {
      console.log("failed or null")
    }
  }

const listAdder = document.querySelector("#addItem");
listAdder.addEventListener("click", (e) =>{
    listBuilder()
})
