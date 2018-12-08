



// 要使用请安装weixin-js-sdk

import wx from 'weixin-js-sdk';
import {Toast} from 'vant'
import {isWechat} from './isTerminal.js'
import {wechatSignatureApi} from '../api/api.js'




function wechatSignature(callback) {
    if(!isWechat)return;
    wx.hideOptionMenu();
    wechatSignatureApi({url:window.location.href}).then(r=>{

        wx.config({
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: r.appId, // 必填，公众号的唯一标识
            timestamp: r.timestamp, // 必填，生成签名的时间戳
            nonceStr: r.nonceStr, // 必填，生成签名的随机串
            signature: r.signature,// 必填，签名
            jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage','showMenuItems','hideOptionMenu','closeWindow'] // 必填，需要使用的JS接口列表
        });
        wx.ready(function(){
            wx.hideOptionMenu();
            callback();
        });
        wx.error(function(){
            Toast('微信签名失败');
        });

    }).catch(()=>{Toast('获取签名信息失败');})
}

function shareFriend(config,callback){
    wx.onMenuShareAppMessage({
        title: config.shareTitle, // 分享标题
        desc: config.shareBody, // 分享描述
        link: config.shareUrl, // 分享链接
        imgUrl: config.shareImg, // 分享图标
        //type: '', // 分享类型,music、video或link，不填默认为link
        //dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
        success: function () {
            callback()
        },
        cancel: function () {
            Toast('分享失败');
        }
    });
}

function shareFriendQ(config,callback){

    wx.onMenuShareTimeline({
        title: config.shareTitle, // 分享标题
        link: config.shareUrl, // 分享链接
        imgUrl: config.shareImg, // 分享图标
        success: function () {
            callback()
            //Toast('分享成功');
        },
        cancel: function () {
            Toast('分享失败');
        }
    });
}

export {wechatSignature,shareFriendQ,shareFriend}
