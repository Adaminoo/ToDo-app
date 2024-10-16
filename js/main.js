const lists = [
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
/*
const lists = {
    1: {
        name: "Shopping list",
        todos: [
            {
                text: 'bananas',
                completed: false
            },
            {
                text:'1 lbs ground turkey',
                completed: false
            }
        ]
    },
    2: {
        name: "Games to play",
        todos: [
            {
                text: 'Satisfactory',
                completed: false
            },
            {
                text: 'Doom Eternal',
                completed: false
            }
        ]
    },
    3: {
        name: "JS Projects to complete",
        todos: [
            {
                text: 'ToDo App',
                completed: false
            },
            {
                text: 'factofn',
                completed: true
            },
            {
                text: 'Bidding App',
                compelted: true
            },
            {
                text: 'Queue Implementation',
                completed: false
            }
        ]
    },
};
*/
const currentList = lists[0];

// Print out the todos
document.getElementById('current-list-todos').innerHTML = todosHTML

function render() {
    // This will hold the html that will be displayed in the sidebar
    let listsHTML = '<ul class="list-group">';
    // Iterate through the lists to get their names
    lists.forEach((list) => {
        listsHTML += `<li class="list-group-item">${list.name}</li>`;
    });
    listsHTML += '</ul>'
    // Print out the lists
    document.getElementById('lists').innerHTML = listsHTML;
}

