const glob = require("glob")
try {
    entries = glob('src/pages/*/index.js', {sync: true})
} catch (err) {
    entries = []
    console.log('读取目录出错！')
    throw err
}


let pages = {}
let commonConfig = {
    title: '网站标题在page.config.js里面修改',
    template:'public/index.html',
}

entries.forEach(page=>{
    let name = page.split('/')[2]
    pages[name] = {
        entry: 'src/pages/'+name+'/index.js',
        filename: name + '.html',
        ...commonConfig
    }
})

module.exports = pages
