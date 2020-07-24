let useApiUrl = "http://192.168.49.97:8088",
  isRelease = false; //是否是线上发布版本

if (process.env.NODE_ENV !== "development") {
  //production
  switch (process.env.VUE_APP_MODE) {
    case "buildDev":
      useApiUrl = "http://192.168.48.192:9188";
      break;
    case "buildTest":
      useApiUrl = "http://192.168.48.192:9188";
      break;
    default:
      useApiUrl = "https://api.xssxx.cn";
      isRelease = true;
      break;
  }
}

export { useApiUrl, isRelease }; //可以导出更多需要不同环境区分的url
