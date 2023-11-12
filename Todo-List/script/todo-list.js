const todoList = JSON.parse(localStorage.getItem('todoList')) || [{name: 'None', date: 'None'}]; // empty string to start

renderList();

function renderList() {
    let todoListHTML = '';

    for(let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        
        const { name, date } = todoObject;

        const html = `
        <div class="name-todo">${name}</div>
        <div class="date-todo">${date}</div> 
        <button onclick="
            todoList.splice(${i}, 1);
            renderList();
        " class="delete-button"><img src="images/x-icon.png" class="delete-icon"></button>
        `;
        todoListHTML += html;
    }

    document.querySelector('.js-div-todo-list').innerHTML = todoListHTML;
    localStorage.setItem('todoList', JSON.stringify(todoList))    
}

function addItem() {
    const nameInput = document.querySelector('.js-item-name-input');
    const dateInput = document.querySelector('.js-date-input')

    const name = nameInput.value;
    const date = dateInput.value;

    todoList.push({name,date});

    nameInput.value = '';

    console.log(todoList);

    renderList();
}

 