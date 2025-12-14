// script.js - 初始骨架

// DOM元素引用
const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');
const totalTasks = document.getElementById('total-tasks');
const completedTasks = document.getElementById('completed-tasks');

// 任务数据数组（示例数据）
let tasks = loadFromLocalStorage();

function saveToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log('任务已保存到本地存储');
}

function loadFromLocalStorage() {
    const storedTasks = localStorage.getItem('tasks');

    if (storedTasks) {
        console.log('从本地存储加载任务');
        return JSON.parse(storedTasks);
    }
    else {
        console.log('本地存储中无任务，初始化为空数组');
        return [];
    }
}

// 初始化函数
function init() {
    console.log('待办事项应用已启动');

    taskList.addEventListener('click', handleTaskListClick);
    taskList.addEventListener('change', handleTaskListChange);
    renderTasks();
    updateStats();
};

function handleTaskListClick(e) {
    if (e.target.closest('.delete-btn')) {
        const taskItem = e.target.closest('.task-item');
        const taskId = parseInt(taskItem.dataset.id);
        if(confirm('确定要删除此任务吗？')) {
            deleteTask(taskId);
        }
    }
}

function handleTaskListChange(e) {
    if (e.target.classList.contains('task-checkbox')) {
        const taskItem = e.target.closest('.task-item');
        const taskId = parseInt(taskItem.dataset.id);
        toggleTask(taskId);
    }
}

// 更新统计信息
function updateStats() {
    const total = tasks.length;
    const completed = tasks.filter(task => task.completed).length;
    const pending = total - completed;
    const completionRate = total > 0 ? ((completed / total) * 100): 0;

    document.getElementById('total-tasks').textContent = total;
    document.getElementById('completed-tasks').textContent = completed;
    document.getElementById('pending-tasks').textContent = pending;
    document.getElementById('completion-rate').textContent = '${completionRate}%';

    updateProgressBar(completionRate);

    animateStatChange();
};

function updateProgressBar(percentage) {
    const progressBar = document.querySelector('.progress-bar-fill');
    if(progressBar){
        progressBar.style.width = '${percentage}%';
        progressBar.style.backgroundColor = percentage === 100 ? '#10b981' : percentage >=75 ? '#3b82f6': percentage >= 50 ? '#f59e0b' : '#ef4444';
    }
}

function animateStatChange() {
    const stats = document.querySelectorAll('.stats-value');
    stats.forEach(el=> {
        el.classList.add('stat-updating');
        setTimeout(() => {
            el.classList.remove('stat-updating');
        }, 500);
    });
}

// 渲染任务列表
function renderTasks() {
    taskList.innerHTML = '';

    if(tasks.length === 0) {
        const emptyMsg = document.createElement('li');
        emptyMsg.className = 'empty-msg';
        emptyMsg.textContent = '暂无任务，快去添加一些吧！';
        emptyMsg.style.textAlign = 'center';
        emptyMsg.style.color = '#888';
        taskList.appendChild(emptyMsg);
        return;
    }

    tasks.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';
        taskItem.dataset.id = task.id;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'task-checkbox';
        checkbox.checked = task.completed;
        
        const taskText = document.createElement('span');
        taskText.className = 'task-text';
        taskText.textContent = task.text;
        if (task.completed) {
            taskText.classList.add('completed');
        }

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = '删除';

        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskText);
        taskItem.appendChild(deleteBtn);
        taskList.appendChild(taskItem);

        console.log(`渲染任务: ${task.text}`);
    });
};

// 添加任务函数
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('任务内容不能为空！');
        taskInput.focus();
        return;
    }

    const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false,
        createdAt: new Date().toISOString()
    };

    tasks.push(newTask);
    taskInput.value = '';
    taskInput.focus();
    renderTasks();
    updateStats();

    console.log(`添加任务: ${taskText}`);
    saveToLocalStorage();
    checkEmptyState();
}

// 删除任务函数
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    console.log(`删除任务ID: ${id}`);
    console.log('当前任务列表:', tasks);
    renderTasks();
    updateStats();
    saveToLocalStorage();
    checkEmptyState();
}

// 切换任务状态
function toggleTask(id) {
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex !== -1) {
        tasks[taskIndex].completed = !tasks[taskIndex].completed;

        if(tasks[taskIndex].completed) {
            tasks[taskIndex].completedAt = new Date().toISOString();
        }
        
        console.log(`切换任务ID: ${id} 状态为: ${tasks[taskIndex].completed}`);
        renderTasks();
        updateStats();
    }
}

// 事件监听
addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function checkEmptyState() {
    const emptyState=document.querySelector('.empty-state');
    const taskList=document.getElementById('task-list');
    if(tasks.length===0){
        emptyState.style.display='flex';
        taskList.style.display='none';

        animateEmptyState();
    }
    else{
        emptyState.style.display='none';
        taskList.style.display='block';
    }
}

function animateEmptyState() {
    const emptyIcon=document.querySelector('.empty-state-icon');
    emptyIcon.style.animation='float 3s ease-in-out infinite';
}

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', init);