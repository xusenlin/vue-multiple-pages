

// 基准大小
const baseSize = 100

function setRem() {
    // 当前页面宽度相对于 375 宽的缩放比例，可根据自己需要修改。
    const scale = document.documentElement.clientWidth / 375
    document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px'
}
// 初始化
setRem()
// 改变窗口大小时重新设置 fontSize
window.onresize = function() {
    setRem()
}
