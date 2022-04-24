const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")
// 每次build打包都会删除dist文件目录重新生成文件
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

/**
 * entry: 指定入口文件路径
 * output: 指定出口
 *      path: 指定打包文件的出口路径
 *      filename: 打包后的文件名称
 * module: webpack打包时要使用的模块
 */
module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
        // 告诉webpack打包成的文件不使用箭头函数
        environment: {
            arrowFunction: false
        }
    },
    module: {
        rules: [
            {
                // 指定规则生效的文件
                test: /\.ts$/,
                use: [
                    // 配置babel
                    {
                        // 指定加载器
                        loader: 'babel-loader',
                        options: {
                            // 设置预定义环境「也就是定义代码可以在哪些浏览器上执行」
                            presets: [
                                [
                                    // 指定环境的插件
                                    '@babel/preset-env',
                                    // 配置信息
                                    {
                                        // 要兼容的目标浏览器
                                        targets: {
                                            "chrome": "58",
                                            "ie": "11"
                                        },
                                        // 指定corejs版本, corejs可以使用Promise
                                        "corejs": "3",
                                        // 使用corejs的方法，设置为按需加载
                                        "useBuiltIns": "usage"
                                    }
                                ]
                            ],
                            plugins: [
                                ['@babel/plugin-proposal-decorators', { legacy: true }],
                                ['@babel/plugin-proposal-class-properties', { loose: true }],
                            ]
                        }
                    },
                    'ts-loader'
                ],
                // 要排除的文件
                exclude: /node_modules/
            },
            
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            // title: 'study ts'
            template: './src/index.html'
        }),
        new CleanWebpackPlugin()
    ],


    // 用来设置可以被引入的模块
    resolve: {
        extensions: [".ts", ".js"]
    }
}