// 公共的 js 工具

// 建立防抖函数
// timer 建立之后，延迟时间内如果没有后续调用过来就会执行主体函数，
// 如果有后续调用会立即清除该次timer，然后建立新的timer,至终只有一次timer会被执行，这就是防抖
export function debounce(func, delay) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

export function formatDate(date, fmt) {
  // 格式化年份
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }

  // 格式化非年份（月，日，时等等）
  let o = {
    "M+": date.getMonth() + 1, //月份
    "d+": date.getDate(), //日
    "h+": date.getHours(), //小时
    "m+": date.getMinutes(), //分
    "s+": date.getSeconds(), //秒
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + "";
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? str : padLeftZero(str)
      );
    }
  }
  return fmt;
}

// 非年份数字，不足十位，左侧补0
function padLeftZero(str) {
  return ("00" + str).substr(str.length);
}
