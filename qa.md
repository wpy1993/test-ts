# 一些QA和总结


1. `ts-node index.ts` 报错， `TypeError: Unknown file extension ".ts"`
解决方案： package.json中，不要配置 `type: module`.原因未知

[refer](https://stackoverflow.com/questions/62096269/cant-run-my-node-js-typescript-project-typeerror-err-unknown-file-extension)


2. 导入导出遇到了问题
当我A文件，只有`export default {A, B}`的时候，相当于解构导出。那么B文件中，导入的时候，不能二次解构了，必须一次性 `import ACollect from 'a.ts'`

3. tsc的使用
当直接 `tsc`的时候，会 **逐级向上** 寻找`tsconfig.json`
当 `tsc -p ./` 的时候，会 **只从当前目录** 寻找`tsconfig.json`
找不到就报错
当 `tsc [filepath]` 的时候，会无视tsconfig.json 的配置,打包指定文件和它引用的文件（如果有import）

// 上面的，@TODO 存疑

