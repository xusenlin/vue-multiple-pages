import { getPageParams } from "./common.js";
import allPageConfig from "@/config/page.js";

let pageName = window.PAGE_PATH; //PAGE_PATH在public中定义。
let pageConfig = allPageConfig[pageName] || {};

function validateParams(requiredParams = {}, pageParams) {
  let errorMsg = [];
  if (Object.keys(requiredParams).length === 0) return errorMsg;
  for (let key in requiredParams) {
    if (!pageParams[key]) {
      errorMsg.push({ name: key, desc: requiredParams[key] });
    }
  }
  return errorMsg;
}

export function initPage() {
  let pageParams = getPageParams();
  let errorMsg = validateParams(pageConfig.requiredParams, pageParams);
  return new Promise((resolve, reject) => {
    if (errorMsg.length !== 0) {
      console.table(errorMsg);
      document.body.innerHTML = `<div style="width: 100%;height: 100vh;display: flex;flex-direction:column;justify-content: center;align-items: center">
页面路径出错，请尝试重新打开。
<code style="padding: 20px;margin-top:20px;background: #eee;">参数：${errorMsg.map(r=>(r.desc)).join("、")}</code>
</div>`;
      reject(errorMsg);
    } else {
      resolve({pageName, pageParams});
    }
  });
}
