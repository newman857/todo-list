# 📋 待办事项清单 (To-Do List)

一个简单实用的待办事项清单 Web 应用，使用纯 HTML、CSS 和 JavaScript 构建。

## 🎯 项目目标

- 学习并实践前端三件套（HTML/CSS/JS）
- 掌握 Web 应用开发全流程
- 构建个人项目作品集

## ✨ 功能特性

- ✅ 添加新任务
- ✅ 删除任务
- ✅ 标记任务为已完成/未完成
- ✅ 本地数据存储（刷新页面数据不丢失）
- ✅ 任务统计（总任务数/已完成数）
- ✅ 响应式设计（适配手机、平板、电脑）
- ✅ 任务过滤（全部/未完成/已完成）
- ✅ 键盘快捷键支持（Enter 添加任务）

## 🛠️ 技术栈

- **HTML5** - 页面结构与语义化标签
- **CSS3** - 样式设计（Flexbox、Grid、动画效果）
- **JavaScript (ES6+)** - 交互逻辑与数据处理
- **LocalStorage API** - 浏览器本地数据存储
- **Font Awesome** - 图标库

## 📁 项目结构

```
todo-list/
├── index.html          # 主 HTML 文件
├── style.css           # 样式表
├── script.js           # JavaScript 逻辑
├── README.md           # 项目说明文档
├── .gitignore          # Git 忽略文件配置
└── images/             # 图片资源目录
    └── placeholder.txt # 占位文件
```

## 🚀 快速开始

### 方法一：直接运行

1. 克隆项目到本地：
```bash
git clone https://github.com/newman857/todo-list.git
```

2. 进入项目目录：
```bash
cd todo-list
```

3. 用浏览器直接打开 `index.html` 文件

### 方法二：使用开发工具（推荐）

1. 使用 VS Code 打开项目文件夹
2. 安装 **Live Server** 插件
3. 右键点击 `index.html`，选择 **"Open with Live Server"**
4. 应用将在 `http://localhost:5500` 自动打开并实时刷新

## 📝 使用说明

### 基本操作
1. **添加任务**：在输入框中输入任务内容，点击"添加"按钮或按 Enter 键
2. **完成任务**：点击任务前的复选框 ✓
3. **删除任务**：点击任务右侧的删除按钮 🗑️
4. **过滤任务**：使用顶部过滤器查看全部/未完成/已完成任务

### 数据存储
- 所有任务自动保存到浏览器本地存储
- 刷新页面或关闭浏览器后数据不会丢失
- 数据仅保存在当前设备浏览器中

## 📅 开发计划

- [x] **Day 1**: 项目基础搭建（环境配置、项目结构、基础页面）
- [x] **Day 2**: 核心功能实现（增删改查、本地存储）
- [ ] **Day 3**: 界面美化优化（动画效果、响应式设计）
- [ ] **Day 4**: 增强功能添加（任务分类、搜索功能）
- [ ] **Day 5**: 测试与部署（功能测试、部署到 GitHub Pages）

## 🔧 开发指南

### 环境要求
- 现代浏览器（Chrome 80+ / Firefox 75+ / Edge 80+）
- VS Code（推荐）或其他代码编辑器
- Git（版本控制）

### 扩展功能建议
1. **任务优先级**：高/中/低优先级标识
2. **任务分类**：工作、学习、生活等分类
3. **到期提醒**：设置任务截止日期
4. **数据导出**：将任务导出为 JSON 或 CSV 文件
5. **深色模式**：支持夜间浏览主题

## 🤝 参与贡献

欢迎提交 Issue 或 Pull Request 来改进这个项目！

1. Fork 本仓库
2. 创建功能分支：`git checkout -b feature/your-feature`
3. 提交更改：`git commit -m 'Add some feature'`
4. 推送分支：`git push origin feature/your-feature`
5. 提交 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 👨‍💻 作者

**newman**  
- GitHub: [@newman857](https://github.com/newman857)
- 项目地址: [todo-list](https://github.com/newman857/todo-list)

## 🙏 致谢

感谢以下资源提供的帮助：
- [菜鸟教程 (runoob.com)](https://www.runoob.com/) - 优质的中文编程教程
- [Font Awesome](https://fontawesome.com/) - 精美的图标库
- [GitHub](https://github.com/) - 代码托管与协作平台
- [MDN Web Docs](https://developer.mozilla.org/) - Web 开发文档

---

**✨ 小提示**：这个项目非常适合前端初学者练习，涵盖了 Web 开发的核心概念和技术。祝你开发愉快！