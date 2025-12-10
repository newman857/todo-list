// script.js - 初始骨架

// DOM元素引用
const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');
const totalTasks = document.getElementById('total-tasks');
const completedTasks = document.getElementById('completed-tasks');

// 任务数据数组（示例数据）
let tasks = [
    { id: 1, text: '学习HTML', completed: false },
    { id: 2, text: '学习CSS', completed: true }
];

// 初始化函数
function init() {
    console.log('待办事项应用已启动');
    updateStats();
}

// 更新统计信息
function updateStats() {
    // 稍后实现
}

// 渲染任务列表
function renderTasks() {
    // 稍后实现
}

// 添加任务函数
function addTask() {
    // 稍后实现
}

// 删除任务函数
function deleteTask(id) {
    // 稍后实现
}

// 切换任务状态
function toggleTask(id) {
    // 稍后实现
}

// 事件监听
addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', init);