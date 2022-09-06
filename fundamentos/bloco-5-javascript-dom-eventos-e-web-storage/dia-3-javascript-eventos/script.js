function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.


// Exercicio 1
let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function addDays() {
    let decemberDays = document.querySelector('#days')

    for (let i = 0; i < decemberDaysList.length; i += 1) {
        const days = decemberDaysList[i]
        const daysList = document.createElement('li');
        daysList.innerHTML = days;

        if (days === 24 || days === 31) {
            daysList.className = 'day holiday'
            decemberDays.appendChild(daysList)
        } else if (days === 4 || days === 11 || days === 18) {
            daysList.className = 'day friday'
            decemberDays.appendChild(daysList)
        } else if (days === 25) {
            daysList.className = 'day friday holiday'
            decemberDays.appendChild(daysList)
        } else {
            daysList.className = 'day'
            decemberDays.appendChild(daysList)
        }
    }
}
addDays()

// Exercicio 2
function addButtonH(value) {
    let btnHoliday = document.createElement('button')
    btnHoliday.innerText = value
    btnHoliday.id = 'btn-holiday'
    let btnContainer = document.querySelector('.buttons-container')
    btnContainer.appendChild(btnHoliday)
}
addButtonH('Feriados')

// Exercicio 3
function alterColor(color) {
    let btnHolidays = document.querySelector('#btn-holiday')
    const holiday = document.querySelectorAll('.holiday');
    btnHolidays.addEventListener('click', function () {
        for (let i = 0; i < holiday.length; i += 1) {
            if (holiday[i].style.backgroundColor === color) {
                holiday[i].style.backgroundColor = 'rgb(238,238,238)';
            } else {
                holiday[i].style.backgroundColor = color;
            }
        };
    });
}
alterColor('green')

// Exercicio 4
function addButtonF(value) {
    let btnFriday = document.createElement('button')
    btnFriday.innerText = value
    btnFriday.id = 'btn-friday'
    let btnContainer = document.querySelector('.buttons-container')
    btnContainer.appendChild(btnFriday)
}
addButtonF('Sexta-Feira')

// Exercicio 5
function alterTxt(arrayFriday) {
    let btnFridays = document.querySelector('#btn-friday')
    const friday = document.querySelectorAll('.friday');
    let newTxt = 'Sextouuuuu';

    btnFridays.addEventListener('click', function () {
        for (let i = 0; i < friday.length; i += 1) {
            if (friday[i].innerText !== newTxt) {
                friday[i].innerText = newTxt;
            } else {
                friday[i].innerHTML = arrayFriday[i];
            }
        };
    });
}
let arrayFriday = [4, 11, 18, 25]
alterTxt(arrayFriday)

// Exercicio 6
let dayZoom = document.querySelector('#days')
function zoomIn() {
    dayZoom.addEventListener('mouseover', function (event) {
        event.target.style.fontSize = '30px'
        event.target.style.fontWeight = '600'

    })
}

function zoomOut() {
    dayZoom.addEventListener('mouseout', function (event) {
        event.target.style.fontSize = '20px'
        event.target.style.fontWeight = '200'
    })
}
zoomIn();
zoomOut();

// Exercicio 7
function addTasks(txt) {
    let task = document.createElement('span')
    let myTasks = document.querySelector('.my-tasks')
    task.innerText = txt
    myTasks.appendChild(task)
}
addTasks('Compromissos')

// Exercicio 8
function addColor(bgColor) {
    let myTask = document.querySelector('.my-tasks')
    let classTask = document.createElement('div')
    classTask.className = 'task'
    classTask.style.backgroundColor = bgColor
    classTask.style.opacity = '0.2'
    myTask.appendChild(classTask)
}
addColor('blue')

// Exercicio 9
function selectTask() {
    let classTask = document.querySelector('.task')
    let selectedTask = document.getElementsByClassName('task-selected')
    classTask.addEventListener('click', function(event) {
        if (selectedTask.length === 0) {
            event.target.className = 'task-selected';
            event.target.style.opacity = '1'
        } else {
            event.target.className = 'task';
            event.target.style.opacity = '0.2'
        }    
    })
}
selectTask()

// Exercicio 10
function selectDays() {
    let selectedTask = document.getElementsByClassName('task-selected');
    let days = document.querySelector('#days');
    let classTask = document.querySelector('.task');
    let differentColor = classTask.style.backgroundColor;
    
    days.addEventListener('click', function(event){
        let actionChangeColor = event.target.style.color;
        if (selectedTask.length > 0 && actionChangeColor !== differentColor) {
            let color = classTask.style.backgroundColor;
            event.target.style.color = color;
        } else if (actionChangeColor === differentColor){
            event.target.style.color = 'rgb(119,119,119)';
        }    
    });
}
selectDays();

// Exercicio Bônus

function addText() {
    let input = document.querySelector('#task-input');
    let btnAdd = document.querySelector('#btn-add');
    let taskList = document.querySelector('.task-list');
    
    btnAdd.addEventListener('click', function() {
        if (input.value.length > 0) {
            let taskItemsList = document.createElement('li');
            taskItemsList.innerText = input.value;

            taskList.appendChild(taskItemsList);
            input.value = '';
        } 
    });
    input.addEventListener('keyup', function(event){
        if (event.key === 'Enter' || event.key === btnAdd && input.value.length > 0) {
            let taskItemsList = document.createElement('li');
            taskItemsList.innerText = input.value;

            taskList.appendChild(taskItemsList);
            input.value = '';
        }
    });
}
addText();