let lists = [
    {
        name:'Shopping List',
        todos: [
            {
                text:'bananas',
                completed:false
            },
            {
                text:'1 lbs ground turkey',
                completed: false
            }
        ]
    },
    {
        name:'Games to play',
        todos: [
            {
                text:'Satisfactory',
                completed:false
            },
            {
                text:'Doom Eternal',
                completed:false
            },
            {
                text:'Voices of the Void',
                completed:true
            }
        ]
    }
]
let currentList = lists[0];


function render() {
    // This will hold the html that will be displayed in the sidebar
    let listsHTML = itrLists(lists);
    // Iterate through the lists to get their names
    
    
    // Print out the lists
    document.getElementById('lists').innerHTML = listsHTML;
    // Print out the name of the current list
    document.getElementById('current-list-name').innerText = currentList.name;
    // Iterate over the todos in the current list
    
    
    //itrTodos(currentList);
    //itrLists(lists);
    
    
    // Print out the todos
    let todosHTML = itrTodos(currentList);
    document.getElementById('current-list-todos').innerHTML = todosHTML;
}
function itrLists(list) {
    let listsHTML = '<ul class="list-group">';
    for (let i = 0; i < list.length; i++) {
        listsHTML += `<a class="list-group-item" onclick="switchList(${i})">${lists[i].name}</a>`;
    }
    listsHTML += '</ul>'
    return listsHTML;
}
function itrTodos(currentList) {
    let todosHTML = '<ul class="list-group-flush">';
    for (let i = 0; i < currentList.todos.length; i++) {
        let list = currentList.todos[i];
        if (!list.completed) {
            todosHTML += `<li class="list-current-item"><input onclick="markTodoAsCompleted(${i})" type="checkbox" ${(list.completed ? "checked" : "")} style="margin-right:10px;">${list.text}</li>`
        }
        
    }
    todosHTML += '</ul>';
    return todosHTML;
}
function addTodo() {
    // Get the todo text from the todo input box
    const text = document.getElementById('todo-input-box').value;
    if(text) {
        currentList.todos.push({
            text: text,
            completed: false
        })
        render();
    }
}

function removeTodo() {
    currentList.todos.pop();
    render();
}

function addList() {
    const text = document.getElementById('list-input-box').value;
    if(text) {
        lists.push({
            name:text,
            todos:[]
        })
        render();
    }
}

function removeList() {
    lists.pop();
    render();
}

function markTodoAsCompleted(todoIndex) {
    //let checkBox = document.getElementById(`todoCheck`);
    //checkBox.checked = true;
    console.log(todoIndex);
    currentList.todos[todoIndex].completed = true;
    render();
}

function switchList(listsIndex) {
    currentList = lists[listsIndex];
    console.log(listsIndex)
    render();
}

function save() {
    localStorage.setItem('currentList', JSON.stringify(currentList));
    localStorage.setItem('lists', JSON.stringify(lists))
}

function load() {
    currentList = JSON.parse(localStorage.getItem('currentList'));
    lists = JSON.parse(localStorage.getItem('lists'));
    render();
}
