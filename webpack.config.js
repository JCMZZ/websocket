module.exports = {
    entry:__dirname+"/static/client.js",
    output:{
        path:__dirname+"/public",
        filename:"bundle.js"
    },
    devServer:{
        contentBase:"./public",
        historyApiFallback:true,
        inline:true
    },
    module:{
        rules:[
            {
                test:/(\.css)$/,
                use:[
                    {
                        loader:"style-loader"
                    },
                    {
                        loader:"css-loader"
                    }
                ]
            }
        ]
    }
}