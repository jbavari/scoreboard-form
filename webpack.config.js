var path = require('path');
var paths = {
    appDir: 'app',
    appSrcModule: 'app.js',
    appBuildBundle: 'app.bundle.js',
    appSassSrc: ['app.ios.scss', 'app.md.scss'],
    appSassWatch: '**/*.scss',
    bootstrapJsFile: path.join(__dirname, 'app', 'angular2', 'app', 'bootstrap.js'),
    buildDir: 'build',
    buildJSDir: 'js',
    buildCSSDir: 'css',
    buildFontsDir: 'fonts',
    ionicDir: 'node_modules/ionic-framework',
    ionicSassDir: 'node_modules/ionic-framework',
    ionicFontFiles: 'fonts/**/*.ttf',
    wwwDir: 'app'
  };

console.log('bootstrapJsFile', paths.bootstrapJsFile);

module.exports = {
  entry: [
    // 'es6-shim/es6-shim.min',
    'reflect-metadata',
    // 'web-animations.min',
    'zone.js',
    // './f.js'
    path.join(__dirname, 'app', 'angular2', 'app', 'bootstrap.js')
  ],
  output: {
    path: path.join(__dirname, 'www', 'scripts'),
    filename: 'build.js',
    // publicPath: path.join(paths.buildDir, paths.buildJSDir),
    pathinfo: false // show module paths in the bundle, handy for debugging
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'awesome-typescript',
        query: {
          'doTypeCheck': false,
          'useWebpackText': true
          // 'useBabel': true
        },
        // include: [path.join(__dirname, paths.wwwDir)],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ["", ".js", ".ts"]
  }
};
