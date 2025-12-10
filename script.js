console.log('To-Do List应用已加载');

document.addEventListener('DOMContentLoaded', function(){
    console.log('DOM内容已加载,开始初始化应用');
    initApp();
});

function initApp(){
    console.log('To-Do List应用初始化');

    setCurrentDate();

    loadTasks();

    setupEventListeners();

    console.log('To-Do List应用初始化完成');
}

function setCurrentDate(){
    const dateElement= document.getElementById('current-date');
    const now= new Date();
    const options={
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    dateElement.textContent = date.toLocaleDateString('zh-CN', options);
}

function loadTasks(){
    console.log('加载任务列表');
    // 这里可以添加从本地存储或服务器加载任务的代码
}

function setupEventListeners(){
    console.log('设置事件监听器');
}