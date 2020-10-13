const form = document.querySelector('form');
const list = document.querySelector('ul');
const input = document.querySelector('form input');
let allTasks = [];

form.addEventListener('submit', event => {
    event.preventDefault();

    const text = input.value.trim();
    if(text !== '') {
        addTask(text);
        input.value = "";
    }
})

function addTask(text) {

    const todo = {
        text,
        // Date.now() method return milliseconds since 1 January 1970
        id: Date.now()
    }
    displayList(todo);
}

function displayList(todo) {
    
    const item = document.createElement('li');
    item.setAttribute('data-key', todo.id);

    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.addEventListener('click', taskDone);
    item.appendChild(input);

    const txt = document.createElement('span');
    txt.innerText = todo.text;
    item.appendChild(txt);

    const btn = document.createElement('button');
    btn.addEventListener('click', removeTask);
    const img = document.createElement('img');
    img.setAttribute('src', 'ressources/fermer.svg');
    btn.appendChild(img);
    item.appendChild(btn);

    list.appendChild(item);
    allTasks.push(item);
}

function taskDone(e) {
    e.target.parentNode.classList.toggle('endTask')
}

function removeTask(e) {
    allTasks.forEach(el => {
        if(e.target.parentNode.getAttribute('data-key') === el.getAttribute('data-key')) {
            el.remove();
            allTasks = allTasks.filter(li => li.dataset.key !== el.dataset.key);
        }
    })
}