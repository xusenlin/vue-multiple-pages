const glob = require("glob")
const pageConfig = require("./src/config/page.js")

try {
    entries = glob('src/pages/*/index.js', {sync: true})
} catch (err) {
    entries = []
    console.log('读取目录出错！')
    throw err
}


let pages = {}
let commonConfig = {
    template:'public/index.html',
}

entries.forEach(page=>{
    let name = page.split('/')[2]
    pages[name] = {
        entry: 'src/pages/'+name+'/index.js',
        filename: name + '.html',
        title:pageConfig.hasOwnProperty(name) ? pageConfig[name].title : '',
        ...commonConfig
    }
})

module.exports = pages
