/**
 * 创建一个webpack.dll.config.js文件打包常用类库到dll中;
 * 使得开发过程中基础模块不会重复打包，而是去动态连接库里获取;
 * (注意这个是在开发环境使用，生产环境打包对时间要求并不高，后者往往是项目持续集成的一部分)
 * @Author: xiezuobing(948466)[435321508@qq.com]
 * @Date: 2018-05-17 19:56:17
 * @Last Modified by: xiezuobing
 * @Last Modified time: 2018-06-01 15:32:33
 */

// 比较完整的配置请参考（脚手架react-boilerplate）的dll相关配置
const path = require("path");
const webpack = require("webpack");
/**
 * 尽量减小搜索范围
 * target: 'dll_[name]' 指定导出变量名字
 */
module.exports = {
  entry: {
    vendor: ["redux-actions"]
  },
  output: {
    path: path.resolve(process.cwd(), "build"),
    filename: "[name].js",
    library: "[name]", // 全局变量名，其他模块会从此变量上获取里面模块
    libraryTarget: "umd"
  },
  // manifest是描述文件
  plugins: [
    new webpack.DllPlugin({
      name: "[name]",
      path: path.resolve(process.cwd(), "build/manifest.json")
    })
  ]
};
