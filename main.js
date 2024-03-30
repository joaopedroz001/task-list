function addTask() {
    let list = document.getElementById("list");
    let task = document.getElementById("new-task").value;
    let listItem = document.createElement("li");
    let none = document.getElementById("none");
    listItem.className = "list-item";

    if(task.length === 0) {
        alert('Put more characters in the field');
        return;
    }

    if(none){
        none.parentNode.removeChild(none);
    }
    
    document.getElementById("new-task").value = ""

    const textElement = document.createTextNode(task);
    listItem.appendChild(textElement);
    list.appendChild(listItem);
}
