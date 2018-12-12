import Config from '../config/app.js'

// 基准大小
const baseSize = 100

function setHtmlFontSize() {
    const scale = document.documentElement.clientWidth / Config.designSize
    document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px'
}
// 初始化
setHtmlFontSize()
// 改变窗口大小时重新设置 fontSize
window.onresize = function() {
    setHtmlFontSize()
}
