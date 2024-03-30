var tasks = []
const list = document.querySelector('.list')
const text = document.querySelector('.text')

const printList = () => {
    tasks.length ? list.classList.add('showElement') : list.classList.remove('showElement')
    list.innerHTML = ''

    tasks.forEach((task, index) => {
        const listItem = document.createElement('li')
        const deleteButton = document.createElement('button')
        deleteButton.className = 'fa-solid fa fa-trash deleteButton'
        deleteButton.onclick = () => {
            tasks.splice(index, 1)
            printList()
        }

        listItem.innerHTML = task
        listItem.appendChild(deleteButton)
        list.appendChild(listItem)
    })
}

document.querySelector('.addTask').addEventListener('click', (e) => {
    if (text.value !== '') { 
        tasks.push(text.value)
        printList()
        text.value = ''
    } else {
        alert('Enter a task')
    }

    e.preventDefault()
})

printList()