# React + TypeScript + Vite

内置 eslint stylelint commit-hook 进行代码规范

##### 开发须知

1. 严格按照 eslint、styleLint 规范代码开发，否则 commit 不了
2. npm run eslint:fix  自动修复 eslint  — ps: 若无法修复请手动修复
3. npm run stylelint:fix 自动修复 stylelint
4. 严格按照 Angular 规范提交代码

##### 为什么使用 eslint ？

1. 规范代码风格，便于后续多人开发。

##### 为什么使用 stylelint ？

1. 样式顺序会影响重排重绘损耗性能。
2. 规范代码风格，便于后续多人开发。

##### 为什么使用 commit-hook

1、在提交前进行代码检测是否符合规范，防止不达标的代码进入代码仓库
2、规范 commit 提交信息，便于后续查看

##### 开发必备插件 — VSCode

1. ESlint — 方便代码规范和保存自动修复
2. Stylelint — 方便样式规范和保存自动修复

##### 提交示例

git commit -m "feat: 新的功能"
git commit -m "fix: 修复 *** bug"
git commit -m “pref: "优化了 xxxx "

详情查看根目录下的 commitlint.config.cjs 文件