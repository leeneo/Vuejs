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
