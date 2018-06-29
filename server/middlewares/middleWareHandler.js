/**
 * 服务器部分参考了react-boilerplate的服务配置
 * @Author: xiezuobing(948466)[435321508@qq.com]
 * @Date: 2018-05-18 21:20:36
 * @Last Modified by: xiezuobing
 * @Last Modified time: 2018-06-11 16:19:06
 */
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const proxy = require('http-proxy-middleware'); //proxy

const setupApi = require('./api');
const handlebars = require('handlebars');

function createWebpackMiddleware(compiler, publicPath) {
  return webpackDevMiddleware(compiler, {
    noInfo: false,
    publicPath,
    silent: false
    // stats: "errors-only"
  });
}

module.exports = function addDevMiddlewares(app, webpackConfig) {
  const compiler = webpack(webpackConfig);
  const middleware = createWebpackMiddleware(
    compiler,
    webpackConfig.output.publicPath
  );

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));

  const fs = middleware.fileSystem;

  /******测试*******/
  const apiProxy = proxy('/', {
    target: 'https://www.easy-mock.com/',
    changeOrigin: true
  }); //将请求转发
  app.use('/api/*', apiProxy); //全目录下的都是用代理
  /****************/

  // app.set('views', 'src');
  // app.set('view engine', 'hbs');

  setupApi(app);

  app.get('/*', (req, res) => {
    fs.readFile(path.join(compiler.outputPath, 'index.html'), (err, file) => {
      if (err) {
        res.sendStatus(404);
      } else {
        // const template = handlebars.compile(file.toString());
        // const context = { test: 1 };
        // res.send(template(context));
        res.send(file.toString());
      }
    });
  });
};
