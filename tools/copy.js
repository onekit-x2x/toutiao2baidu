//console.log(process.cwd())
const fs = require('fs-extra')
const path = require('path')
const { exec } = require('child_process');

const cwd = process.cwd()
const root = 'Smartprogram_npm'
const dist = 'Smartprogram_dist'

/*
const list = fs.readdirSync(path.join(cwd, dist))
fs.removeSync(root)
list.forEach(file => {
    const stat = fs.lstatSync(path.join(cwd, dist, file))
    if (stat.isDirectory() && file !== 'weui-css') {
        const npmDist =  path.join(cwd, root, file, dist)
        fs.ensureDirSync(npmDist)
        exec(`cp -a ${dist}/${file}/* ${root}/${file}/${dist}`)
        exec(`cp -a src/${file}/package.json ${root}/${file}/package.json`)
    }
})*/
const package = JSON.parse(fs.readFileSync(`${cwd}/package.json`));
const url = `${path.join(cwd, dist)}/package.json`;
const dist_package = JSON.parse(fs.readFileSync(url));
dist_package.dependencies = package.dependencies;
fs.writeFileSync(url,JSON.stringify(dist_package,null, 2));