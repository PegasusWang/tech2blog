var webpack = require('webpack');

module.exports = {
	//入口文件配置
    entry: {
    	post : './build/src/js/post.js' //演示单入口文件
    }
    output: {
        path: './build/dist/js',  //打包输出的路径
        filename: '[name].js',              //打包后的名字
    }
};