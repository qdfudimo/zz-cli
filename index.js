#! /usr/bin/env node

const program = require('commander');
const download = require('download-git-repo');
//version 版本号
//name 新项目名称
program.version('1.0.0', '-v, --version')
    .command('init <templateName> <projectName>')
    .action((templateName, projectName) => {
        if (templateName === "vue") {
            console.log('clone template ...',templateName,projectName);
            //对应的模板地址地址
            download('github:qdfudimo/vue3-screen', projectName, function (err) {
                console.log(err ? 'Error' : 'Success')
            })
        } else if(templateName === "react") {
            console.log('clone template ...',templateName,projectName);
            // download('github:qdfudimo/vue3-screen', projectName, function (err) {
            //     console.log(err ? 'Error' : 'Success')
            // })
        } else {
          console.error('A template name that does not exist')
        }
    });
program.parse(process.argv);
