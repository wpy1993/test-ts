# 一些QA和总结


1. `ts-node index.ts` 报错， `TypeError: Unknown file extension ".ts"`
解决方案： package.json中，不要配置 `type: module`.原因未知

[refer](https://stackoverflow.com/questions/62096269/cant-run-my-node-js-typescript-project-typeerror-err-unknown-file-extension)