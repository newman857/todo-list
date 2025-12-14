// 测试函数
function runTests() {
    console.log('开始功能测试...');
    
    // 测试1：添加任务
    console.log('测试1：添加任务');
    taskInput.value = '测试任务';
    addTask();
    
    // 测试2：空输入处理
    console.log('测试2：空输入处理');
    taskInput.value = '';
    addTask(); // 应该弹出警告
    
    // 测试3：删除任务
    console.log('测试3：删除任务（请手动测试）');
    
    // 测试4：切换状态
    console.log('测试4：切换任务状态（请手动测试）');
    
    // 测试5：本地存储
    console.log('测试5：本地存储');
    console.log('保存的数据：', JSON.parse(localStorage.getItem('tasks')));
    
    // 测试6：刷新页面数据保持
    console.log('测试6：请手动刷新页面测试数据持久化');
    
    console.log('测试完成！');
}

// 在控制台运行：runTests()