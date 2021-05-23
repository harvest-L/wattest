/*
 * @Author: your name
 * @Date: 2021-05-23 03:22:32
 * @LastEditTime: 2021-05-23 03:22:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /wattest/.wat.config.js
 */
module.exports = {
  name: 'watTest',
  author: '0.0.1',
  tag:'vue',
  git: 'git@github.com:harvest-L/wattest.git',
  prompt: [
    {
      name: 'vueVersion',
      type: 'input',
      default: '3'
    },
    {
      name: 'doesCompile',
      type: 'confirm'
    },
    {
      name: 'useloadsh',
      type: 'confirm'
    }
  ]
}