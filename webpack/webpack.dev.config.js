/**
 * DEVELOPMENT WEBPACK CONFIGURATION
 */

const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin'); //检查循环引用插件

// CSS文件单独提取出来（如果需要热加载的话与css-hot-loader一起用）
// 在生产环境的时候将style-loader替换成MiniCssExtractPlugin.loader就可以了
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const postcssOptions = require('./postcssConfig');
module.exports = merge(baseConfig, {
  entry: [
    'babel-polyfill',
    'eventsource-polyfill', // IE热加载
    'webpack-hot-middleware/client?reload=true',
    // path.join(process.cwd(), "src/app.js")
    path.join(process.cwd(), `src/example/${process.env.FOLDER}/index.js`)
  ],

  // 在development环境不要用到的hash
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        //处理自己的css文件
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          {
            loader: 'postcss-loader',
            options: postcssOptions
          }
        ]
      },
      {
        //编译处于node_modules中的css文件
        test: /\.css$/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader']
      },
      {
        //处理自己的scss/sass文件
        test: /\.(scss|sass)$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          {
            // https://preset-env.cssdb.org/features
            loader: 'postcss-loader',
            options: postcssOptions
          },
          'sass-loader'
        ]
      },
      {
        //处理自己的less文件
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          {
            // https://preset-env.cssdb.org/features
            loader: 'postcss-loader',
            options: postcssOptions
          },
          'less-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      inject: true, //js包自动注入html
      template: 'src/index.html'
    }),
    //打包哦（当module已配置该插件的loader时）
    // new MiniCssExtractPlugin({
    //   filename: "[name].css",
    //   chunkFilename: "[id].css"
    // }),
    //循环引用相关
    new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/,
      failOnError: false //如果有则显示警告即可
    }),
    new webpack.HotModuleReplacementPlugin(), //热加载插件
    new webpack.NamedModulesPlugin() //热加载相关插件
  ],
  // 引入source-map更利于调试
  // 查看 https://webpack.js.org/configuration/devtool/#devtool
  devtool: 'inline-source-map',

  performance: {
    hints: false
  }
});
