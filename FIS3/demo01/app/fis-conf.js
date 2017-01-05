
//1、文件指纹，而 FIS3 选择的是添加 MD5 戳，
// 直接修改文件的 URL，而不是在其后添加 query。
fis.match('*.{js,css,png}', {
    useHash: true
});


//2、CssSprite图片合并
//FIS3 提供了比较简易、使用方便的图片合并工具。
// 通过配置即可调用此工具并对资源进行合并。
// 启用 fis-spriter-csssprites 插件
fis.match('::package', {
    spriter: fis.plugin('csssprites')
})
// 对 CSS 进行图片合并
fis.match('*.css', {
    // 给匹配到的文件分配属性 `useSprite`
    useSprite: true
});

//3、压缩资源
//为了减少资源网络传输的大小，
// 通过压缩器对 js、css、图片进行压缩是一直以来前端工程优化的选择。
// 在 FIS3 中这个过程非常简单，通过给文件配置压缩器即可。
// 清除其他配置，只保留如下配置
fis.match('*.js', {
    // fis-optimizer-uglify-js 插件进行压缩，已内置
    optimizer: fis.plugin('uglify-js')
});

fis.match('*.css', {
    // fis-optimizer-clean-css 插件进行压缩，已内置
    optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
    // fis-optimizer-png-compressor 插件进行压缩，已内置
    optimizer: fis.plugin('png-compressor')
});

