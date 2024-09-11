const AdmZip = require("adm-zip");
const dayjs = require("dayjs");
const fse = require("fs-extra");

/** 异步复制文件夹 */
const copyFilesAsync = async (source, target) => {
  if (fse.existsSync(source)) {
    await fse.copy(source, target);
  } else {
    console.warn(`未找到源文件夹[${source}]，检查是否打包失败`);
  }
}

//删除老文件夹，如果文件夹不存在，则不会做任何变更
fse.removeSync('./dist');
//创建文件夹
fse.mkdirpSync('./dist');

Promise.all([
  copyFilesAsync('./apps/app-a/dist/', './dist/app-a/'),
]).then(() => {
  try {
    //如果存在老的，则改名作为备份
    if (fse.existsSync('./monorepo-template.zip')) {
      fse.moveSync('./monorepo-template.zip', `./monorepo-template-${dayjs().format('YYYYMMDD')}.zip`, { overwrite: true });
    }
  } catch (error) {
    console.log('moveSync fail', error);
  }
  
  // 在内存中创建新的zip文件
  const distZip = new AdmZip();
  // 为zip添加本地文件夹
  distZip.addLocalFolder('./dist/', './monorepo-template/');
  // 生成zip文件
  distZip.writeZip(`./monorepo-template.zip`);
})
