import { currentUrlToParams } from "./common.js";
import allPageConfig from "@/config/page.js";

let pageConfig = allPageConfig[window.PAGE_PATH] || {}; //PAGE_PATH在public中定义。

export function validateInitUrlParams() {
  window.PAGE_PARAMS = currentUrlToParams();
  let errorMsg = [];
  if (
    pageConfig.requiredParams &&
    Object.keys(pageConfig.requiredParams).length !== 0
  ) {
    let requiredParams = pageConfig.requiredParams;
    for (let key in requiredParams) {
      if (!window.PAGE_PARAMS.hasOwnProperty(key)) {
        errorMsg.push({ name: key, desc: requiredParams[key] });
      }
    }
  }
  if (errorMsg.length !== 0) {
    console.table(errorMsg);
    document.body.innerHTML = `<div style="width: 100%;height: 100vh;display: flex;justify-content: center;align-items: center">页面路径出错，请尝试重新打开。</div>`;
    throw new Error("Url缺少必填参数！");
  }

  return true;
}
