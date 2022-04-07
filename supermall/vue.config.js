// 这样写cli3 里貌似可以，但是 cli4 里不起作用，目前还不清楚为何
// module.export={
//     configureWebpack:{
//         resolve:{
//             alias:{
//                 'assets':'@/assets',
//                 'common':'@/common',
//                 'components':'@/components',
//                 'network':'@/network',
//                 'views':'@/views'
//             }
//         }
//     }
// }

// cli4 写法
const path = require("path");

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    chainWebpack: config => {
        config.resolve.alias
            .set("@", resolve("src"))
            .set("assets", resolve("src/assets"))
            .set("components", resolve("src/components"))
            // .set("base", resolve("baseConfig"))
            // .set("public", resolve("public"));
    },
}