console.log('To-Do List应用已加载');

const currentDateElement= document.getElementById('current-date');

function setCurrentDate(){
    const date = new Date();
    const options={
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    const formattedDate = date.toLocaleDateString('zh-CN', options);
    currentDateElement.textContent = formattedDate;
}

function initApp(){
    console.log('To-Do List应用初始化');
    setCurrentDate();

    console.log('To-Do List应用初始化完成');
}

document.addEventListener('DOMContentLoaded', initApp);