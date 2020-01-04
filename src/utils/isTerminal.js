const ua = window.navigator.userAgent;

const isAndroid = /(Android);?[\s/]+([\d.]+)?/i.test(ua);
const isIpad = /(iPad).*OS\s([\d_]+)/i.test(ua);
const isIpod = /(iPod)(.*OS\s([\d_]+))?/i.test(ua);
const isIphone = !isIpad && /(iPhone\sOS)\s([\d_]+)/i.test(ua);
const isWechat = /micromessenger/i.test(ua);
const isAlipay = /alipayclient/i.test(ua);

export {isIphone,isWechat,isAlipay,isAndroid,isIpad,isIpod}
