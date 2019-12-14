
// 要使用请安装weixin-js-sdk


//import wx from 'weixin-js-sdk';
import {isWechat} from './isTerminal.js'
import {wechatSignatureApi} from '../api/api.js'
import Config from "@/config/app";

/**
 * 签名
 * @param apiList
 * @returns {Promise<any>}
 */
function wechatSignature(apiList = []) {
    return new Promise((resolve, reject) => {
        if (!isWechat) {
            return reject('请在微信客户端打开')
        }
        if (0 === apiList.length) {
            apiList = ['onMenuShareTimeline', 'onMenuShareAppMessage', 'showMenuItems', 'hideOptionMenu', 'closeWindow']
        }
        wechatSignatureApi({url:window.location.href}).then(r=>{
            wx.config({
                debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: r.appId, // 必填，公众号的唯一标识
                timestamp: r.timestamp, // 必填，生成签名的时间戳
                nonceStr: r.nonceStr, // 必填，生成签名的随机串
                signature: r.signature,// 必填，签名
                jsApiList:apiList  // 必填，需要使用的JS接口列表
            });
            wx.ready(function(){
                wx.hideOptionMenu();
                resolve();
            });
            wx.error(function(){
                reject('微信签名失败')
                //Toast('微信签名失败');
            });

        }).catch(()=>{
            reject('获取签名信息失败')
            //Toast('获取签名信息失败');
        })
    })
}

/**
 * 分享给朋友
 * @param config
 * @param callback
 */
function shareFriend(config,callback){
    wx.onMenuShareAppMessage({
        title: config.shareTitle, // 分享标题
        desc: config.shareBody, // 分享描述
        link: config.shareUrl, // 分享链接
        imgUrl: config.shareImg, // 分享图标
        //type: '', // 分享类型,music、video或link，不填默认为link
        //dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
        success: function () {
            callback() //官方说这个可能不会调用了吧
        },
        cancel: function () {
            //Toast('分享失败');
        }
    });
}

/**
 * 分享到朋友圈
 * @param config
 * @param callback
 */
function shareFriendQ(config,callback){

    wx.onMenuShareTimeline({
        title: config.shareTitle, // 分享标题
        link: config.shareUrl, // 分享链接
        imgUrl: config.shareImg, // 分享图标
        success: function () {
            callback()//官方说这个可能不会调用了吧
            //Toast('分享成功');
        },
        cancel: function () {
            //Toast('分享失败');
        }
    });
}


function hideOptionMenu() {
    wx.hideOptionMenu();
}

function showOptionMenu() {
    wx.showOptionMenu();
}


/**
 * 批量隐藏菜单项
 * @param menuItems
 */
function hideMenuItems(menuItems) {
    // menuItems = [
    //     'menuItem:readMode', // 阅读模式
    //     'menuItem:share:timeline', // 分享到朋友圈
    //     'menuItem:copyUrl' // 复制链接
    // ]
    wx.hideMenuItems({
        menuList: menuItems,
        success: function (res) {
            alert('隐藏阅读模式,分享到朋友圈,复制链接');
        },
        fail: function (res) {
            alert(JSON.stringify(res));
        }
    });
}

/**
 * 批量显示菜单项
 * @param menuItems
 */
function showMenuItems(menuItems) {
    // menuItems = [
    //     'menuItem:readMode', // 阅读模式
    //     'menuItem:share:timeline', // 分享到朋友圈
    //     'menuItem:copyUrl' // 复制链接
    // ]
    wx.showMenuItems({
        menuList: menuItems,
        success: function (res) {
            alert('已显示阅读模式,分享到朋友圈,复制链接');
        },
        fail: function (res) {
            alert(JSON.stringify(res));
        }
    });
}

/**
 * 隐藏所有非基本菜单项
 */
function hideAllNonBaseMenuItem() {
    wx.hideAllNonBaseMenuItem({
        success: function () {
            alert('隐藏所有非基本菜单项');
        }
    });
}

/**
 * 显示所有非基本菜单项
 */
function showAllNonBaseMenuItem() {
    wx.showAllNonBaseMenuItem({
        success: function () {
            alert('显示所有非基本菜单项');
        }
    });
}

/**
 * 关闭微信窗口
 */
function closeWechatWindow() {
    wx.closeWindow();
}



function WechatPay(params) {
    if (!isWechat  || typeof WeixinJSBridge == "undefined"){
        //Toast("检测不到微信环境");
        return;
    }

    WeixinJSBridge.invoke(
      'getBrandWCPayRequest', {
          "appId":params.appId,
          "timeStamp":params.timeStamp,
          "nonceStr":params.nonceStr,
          "package":params.packageValue,
          "signType":params.signType,
          "paySign":params.paySign
      },
      function(res){
          if(res.err_msg == "get_brand_wcpay_request:ok" ){
              // 使用以上方式判断前端返回,微信团队郑重提示：
              //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
             // Toast('支付成功！');
              // window.location.href = `${Config.sharePageUrl}/paySuccess.html?orderNo=` + params.orderNo;
          }else {
              //Toast('支付失败，请重试！')
          }
      }
    );

}


export {
    WechatPay,
    shareFriend,
    shareFriendQ,
    hideMenuItems,
    showMenuItems,
    hideOptionMenu,
    showOptionMenu,
    wechatSignature,
    closeWechatWindow,
    hideAllNonBaseMenuItem,
    showAllNonBaseMenuItem
}
