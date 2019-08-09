import Config from '../config/app.js'

// 基准大小
const baseSize = 100;

function setFontSize() {
    const scale = document.documentElement.clientWidth / Config.designSize;
    document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px';
}


export function setHtmlFontSize() {
    // 初始化
    setFontSize();
// 改变窗口大小时重新设置 fontSize
    window.onresize = function() {
        setFontSize();
    }
}
