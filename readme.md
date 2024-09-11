# Monorepo模板仓库

## build

根目录执行```npm run build```。

所有项目build完成默认会执行gzip创建压缩包，不需要的话注释即可。

## start

进入apps/app-a目录执行```npm run start```。

## father

### 兼容性

father 本身需要在 Node.js v14 以上的环境中运行，使用前请确保已安装 Node.js v14 及以上版本。

father 产出的 Node.js 产物默认兼容到 Node.js v14，Browser 产物默认兼容到 ES5（IE11）。

### 快速上手

通过 create-father 快速创建一个 father 项目：

```npx create-father my-father-project```

执行构建：

```npx father build```
