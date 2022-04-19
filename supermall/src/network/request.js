import axios from "axios";

// promise 简化
export function request(config) {
  // 1.创建 axios 的实例
  const instance = axios.create({
    // baseURL: "http://123.207.32.32:8000",
    baseURL: "http://152.136.185.210:7878/api/hy66",
    timeout: 5000,
  });

  // 2.设置拦截器
  // 设置请求拦截器
  instance.interceptors.request.use(
    (config) => {
      return config;
    },
    (err) => {
      console.log(err);
    }
  );
  // 设置请求拦截器
  instance.interceptors.response.use(
    (result) => {
      return result.data;
    },
    (err) => {
      console.log(err);
    }
  );

  // 3.发送真正的网络请求，本身不处理结果，而将结果回调给 使用者
  return instance(config);
}

// 这里模拟的数据比较简单，应该还有个page项，每一页对应一个list 数据列表
export const goodsData = {
  pop: [
    {
      title: "2022新春流行女装1",
      link: "https://item.meilishuo.com/h5/detail/1m93p4u?acm=3.ms.0_4_1m93p4u.0.13386-69004.s026vr4qnwskg.t_-sd_117-lc_16",
      show: {
        h: 416,
        w: 320,
        img: "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_320x999.jpg",
      },
      showLarge:
        "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_560x999.jpg",
      price: "59.00",
      orgPrice: "84.29",
      cfav: "120",
      iid: "1m93p4u",
    },
    {
      title: "2022新春流行女装2",
      link: "https://m.meilishuo.com/?acm=3.ms.0_4_1m93p4u.0.13386-69004.s026vr4qnwskg.t_-sd_117-lc_16",
      show: {
        h: 416,
        w: 320,
        img: "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_320x999.jpg",
      },
      showLarge:
        "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_560x999.jpg",
      price: "49.00",
      orgPrice: "94.99",
      cfav: "100",
      iid: "1jw0sr2",
    },
    {
      title: "2022新春流行女装3",
      link: "https://m.meilishuo.com/?acm=3.ms.0_4_1m93p4u.0.13386-69004.s026vr4qnwskg.t_-sd_117-lc_16",
      show: {
        h: 416,
        w: 320,
        img: "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_320x999.jpg",
      },
      showLarge:
        "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_560x999.jpg",
      price: "49.00",
      orgPrice: "94.99",
      cfav: "100",
      iid: "1m93p4ub",
    },
    {
      title: "2022新春流行女装4",
      link: "https://m.meilishuo.com/?acm=3.ms.0_4_1m93p4u.0.13386-69004.s026vr4qnwskg.t_-sd_117-lc_16",
      show: {
        h: 416,
        w: 320,
        img: "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_320x999.jpg",
      },
      showLarge:
        "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_560x999.jpg",
      price: "49.00",
      orgPrice: "94.99",
      cfav: "100",
      iid: "1m93p4uc",
    },
    {
      title: "2022新春流行女装5",
      link: "https://item.meilishuo.com/h5/detail/1m93p4u?acm=3.ms.0_4_1m93p4u.0.13386-69004.s026vr4qnwskg.t_-sd_117-lc_16",
      show: {
        h: 416,
        w: 320,
        img: "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_320x999.jpg",
      },
      showLarge:
        "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_560x999.jpg",
      price: "59.00",
      orgPrice: "84.29",
      cfav: "120",
      iid: "1m93p4ud",
    },
    {
      title: "2022新春流行女装6",
      link: "https://m.meilishuo.com/?acm=3.ms.0_4_1m93p4u.0.13386-69004.s026vr4qnwskg.t_-sd_117-lc_16",
      show: {
        h: 416,
        w: 320,
        img: "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_320x999.jpg",
      },
      showLarge:
        "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_560x999.jpg",
      price: "49.00",
      orgPrice: "94.99",
      cfav: "100",
      iid: "1m93p4ue",
    },
    {
      title: "2022新春流行女装7",
      link: "https://m.meilishuo.com/?acm=3.ms.0_4_1m93p4u.0.13386-69004.s026vr4qnwskg.t_-sd_117-lc_16",
      show: {
        h: 416,
        w: 320,
        img: "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_320x999.jpg",
      },
      showLarge:
        "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_560x999.jpg",
      price: "49.00",
      orgPrice: "94.99",
      cfav: "100",
      iid: "1m93p4uf",
    },
    {
      title: "2022新春流行女装8",
      link: "https://m.meilishuo.com/?acm=3.ms.0_4_1m93p4u.0.13386-69004.s026vr4qnwskg.t_-sd_117-lc_16",
      show: {
        h: 416,
        w: 320,
        img: "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_320x999.jpg",
      },
      showLarge:
        "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_560x999.jpg",
      price: "49.00",
      orgPrice: "94.99",
      cfav: "100",
      iid: "1m93p4ug",
    },
    {
      title: "2022新春流行女装9",
      link: "https://item.meilishuo.com/h5/detail/1m93p4u?acm=3.ms.0_4_1m93p4u.0.13386-69004.s026vr4qnwskg.t_-sd_117-lc_16",
      show: {
        h: 416,
        w: 320,
        img: "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_320x999.jpg",
      },
      showLarge:
        "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_560x999.jpg",
      price: "59.00",
      orgPrice: "84.29",
      cfav: "120",
      iid: "1m93p4uh",
    },
    {
      title: "2022新春流行女装10",
      link: "https://m.meilishuo.com/?acm=3.ms.0_4_1m93p4u.0.13386-69004.s026vr4qnwskg.t_-sd_117-lc_16",
      show: {
        h: 416,
        w: 320,
        img: "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_320x999.jpg",
      },
      showLarge:
        "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_560x999.jpg",
      price: "49.00",
      orgPrice: "94.99",
      cfav: "100",
      iid: "1m93p4ui",
    },
    {
      title: "2022新春流行女装11",
      link: "https://m.meilishuo.com/?acm=3.ms.0_4_1m93p4u.0.13386-69004.s026vr4qnwskg.t_-sd_117-lc_16",
      show: {
        h: 416,
        w: 320,
        img: "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_320x999.jpg",
      },
      showLarge:
        "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_560x999.jpg",
      price: "49.00",
      orgPrice: "94.99",
      cfav: "100",
      iid: "1m93p4uj",
    },
    {
      title: "2022新春流行女装12",
      link: "https://m.meilishuo.com/?acm=3.ms.0_4_1m93p4u.0.13386-69004.s026vr4qnwskg.t_-sd_117-lc_16",
      show: {
        h: 416,
        w: 320,
        img: "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_320x999.jpg",
      },
      showLarge:
        "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_560x999.jpg",
      price: "49.00",
      orgPrice: "94.99",
      cfav: "100",
      iid: "1m93p4uk",
    },
  ],
  new: [
    {
      title: "2022新春靓丽女装1",
      link: "https://item.meilishuo.com/h5/detail/1m93p4u?acm=3.ms.0_4_1m93p4u.0.13386-69004.s026vr4qnwskg.t_-sd_117-lc_16",
      show: {
        h: 416,
        w: 320,
        img: "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_320x999.jpg",
      },
      showLarge:
        "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_560x999.jpg",
      price: "59.00",
      orgPrice: "84.29",
      cfav: "120",
      iid: "1m93p4ul",
    },
    {
      title: "2022新春靓丽女装2",
      link: "https://m.meilishuo.com/?acm=3.ms.0_4_1m93p4u.0.13386-69004.s026vr4qnwskg.t_-sd_117-lc_16",
      show: {
        h: 416,
        w: 320,
        img: "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_320x999.jpg",
      },
      showLarge:
        "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_560x999.jpg",
      price: "49.00",
      orgPrice: "94.99",
      cfav: "100",
      iid: "1m93p4um",
    },
    {
      title: "2022新春靓丽女装3",
      link: "https://m.meilishuo.com/?acm=3.ms.0_4_1m93p4u.0.13386-69004.s026vr4qnwskg.t_-sd_117-lc_16",
      show: {
        h: 416,
        w: 320,
        img: "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_320x999.jpg",
      },
      showLarge:
        "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_560x999.jpg",
      price: "49.00",
      orgPrice: "94.99",
      cfav: "100",
      iid: "1m93p4un",
    },
    {
      title: "2022新春靓丽女装4",
      link: "https://m.meilishuo.com/?acm=3.ms.0_4_1m93p4u.0.13386-69004.s026vr4qnwskg.t_-sd_117-lc_16",
      show: {
        h: 416,
        w: 320,
        img: "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_320x999.jpg",
      },
      showLarge:
        "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_560x999.jpg",
      price: "49.00",
      orgPrice: "94.99",
      cfav: "100",
      iid: "1m93p4uo",
    },
    {
      title: "2022新春靓丽女装5",
      link: "https://item.meilishuo.com/h5/detail/1m93p4u?acm=3.ms.0_4_1m93p4u.0.13386-69004.s026vr4qnwskg.t_-sd_117-lc_16",
      show: {
        h: 416,
        w: 320,
        img: "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_320x999.jpg",
      },
      showLarge:
        "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_560x999.jpg",
      price: "59.00",
      orgPrice: "84.29",
      cfav: "120",
      iid: "1m93p4up",
    },
    {
      title: "2022新春靓丽女装6",
      link: "https://m.meilishuo.com/?acm=3.ms.0_4_1m93p4u.0.13386-69004.s026vr4qnwskg.t_-sd_117-lc_16",
      show: {
        h: 416,
        w: 320,
        img: "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_320x999.jpg",
      },
      showLarge:
        "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_560x999.jpg",
      price: "49.00",
      orgPrice: "94.99",
      cfav: "100",
      iid: "1m93p4uq",
    },
    {
      title: "2022新春靓丽女装7",
      link: "https://m.meilishuo.com/?acm=3.ms.0_4_1m93p4u.0.13386-69004.s026vr4qnwskg.t_-sd_117-lc_16",
      show: {
        h: 416,
        w: 320,
        img: "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_320x999.jpg",
      },
      showLarge:
        "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_560x999.jpg",
      price: "49.00",
      orgPrice: "94.99",
      cfav: "100",
      iid: "1m93p4ur",
    },
    {
      title: "2022新春靓丽女装8",
      link: "https://m.meilishuo.com/?acm=3.ms.0_4_1m93p4u.0.13386-69004.s026vr4qnwskg.t_-sd_117-lc_16",
      show: {
        h: 416,
        w: 320,
        img: "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_320x999.jpg",
      },
      showLarge:
        "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_560x999.jpg",
      price: "49.00",
      orgPrice: "94.99",
      cfav: "100",
      iid: "1m93p4us",
    },
    {
      title: "2022新春靓丽女装9",
      link: "https://m.meilishuo.com/?acm=3.ms.0_4_1m93p4u.0.13386-69004.s026vr4qnwskg.t_-sd_117-lc_16",
      show: {
        h: 416,
        w: 320,
        img: "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_320x999.jpg",
      },
      showLarge:
        "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_560x999.jpg",
      price: "49.00",
      orgPrice: "94.99",
      cfav: "100",
      iid: "1m93p4ut",
    },
    {
      title: "2022新春靓丽女装10",
      link: "https://m.meilishuo.com/?acm=3.ms.0_4_1m93p4u.0.13386-69004.s026vr4qnwskg.t_-sd_117-lc_16",
      show: {
        h: 416,
        w: 320,
        img: "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_320x999.jpg",
      },
      showLarge:
        "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_560x999.jpg",
      price: "49.00",
      orgPrice: "94.99",
      cfav: "100",
      iid: "1m93p4uu",
    },
    {
      title: "2022新春靓丽女装11",
      link: "https://m.meilishuo.com/?acm=3.ms.0_4_1m93p4u.0.13386-69004.s026vr4qnwskg.t_-sd_117-lc_16",
      show: {
        h: 416,
        w: 320,
        img: "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_320x999.jpg",
      },
      showLarge:
        "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_560x999.jpg",
      price: "49.00",
      orgPrice: "94.99",
      cfav: "100",
      iid: "1m93p4uv",
    },
  ],
  sell: [
    {
      title: "2022新春精选女装1",
      link: "https://item.meilishuo.com/h5/detail/1m93p4u?acm=3.ms.0_4_1m93p4u.0.13386-69004.s026vr4qnwskg.t_-sd_117-lc_16",
      show: {
        h: 416,
        w: 320,
        img: "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_320x999.jpg",
      },
      showLarge:
        "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_560x999.jpg",
      price: "59.00",
      orgPrice: "84.29",
      cfav: "120",
      iid: "1m93p4uw",
    },
    {
      title: "2022新春精选女装2",
      link: "https://m.meilishuo.com/?acm=3.ms.0_4_1m93p4u.0.13386-69004.s026vr4qnwskg.t_-sd_117-lc_16",
      show: {
        h: 416,
        w: 320,
        img: "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_320x999.jpg",
      },
      showLarge:
        "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_560x999.jpg",
      price: "49.00",
      orgPrice: "94.99",
      cfav: "100",
      iid: "1m93p4ux",
    },
    {
      title: "2022新春精选女装3",
      link: "https://m.meilishuo.com/?acm=3.ms.0_4_1m93p4u.0.13386-69004.s026vr4qnwskg.t_-sd_117-lc_16",
      show: {
        h: 416,
        w: 320,
        img: "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_320x999.jpg",
      },
      showLarge:
        "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_560x999.jpg",
      price: "49.00",
      orgPrice: "94.99",
      cfav: "100",
      iid: "1m93p4uy",
    },
    {
      title: "2022新春精选女装4",
      link: "https://m.meilishuo.com/?acm=3.ms.0_4_1m93p4u.0.13386-69004.s026vr4qnwskg.t_-sd_117-lc_16",
      show: {
        h: 416,
        w: 320,
        img: "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_320x999.jpg",
      },
      showLarge:
        "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_560x999.jpg",
      price: "49.00",
      orgPrice: "94.99",
      cfav: "100",
      iid: "1m93p4uz",
    },
    {
      title: "2022新春精选女装5",
      link: "https://item.meilishuo.com/h5/detail/1m93p4u?acm=3.ms.0_4_1m93p4u.0.13386-69004.s026vr4qnwskg.t_-sd_117-lc_16",
      show: {
        h: 416,
        w: 320,
        img: "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_320x999.jpg",
      },
      showLarge:
        "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_560x999.jpg",
      price: "59.00",
      orgPrice: "84.29",
      cfav: "120",
      iid: "1m93p4u1",
    },
    {
      title: "2022新春精选女装6",
      link: "https://m.meilishuo.com/?acm=3.ms.0_4_1m93p4u.0.13386-69004.s026vr4qnwskg.t_-sd_117-lc_16",
      show: {
        h: 416,
        w: 320,
        img: "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_320x999.jpg",
      },
      showLarge:
        "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_560x999.jpg",
      price: "49.00",
      orgPrice: "94.99",
      cfav: "100",
      iid: "1m93p4u2",
    },
    {
      title: "2022新春精选女装7",
      link: "https://m.meilishuo.com/?acm=3.ms.0_4_1m93p4u.0.13386-69004.s026vr4qnwskg.t_-sd_117-lc_16",
      show: {
        h: 416,
        w: 320,
        img: "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_320x999.jpg",
      },
      showLarge:
        "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_560x999.jpg",
      price: "49.00",
      orgPrice: "94.99",
      cfav: "100",
      iid: "1m93p4u3",
    },
    {
      title: "2022新春精选女装8",
      link: "https://m.meilishuo.com/?acm=3.ms.0_4_1m93p4u.0.13386-69004.s026vr4qnwskg.t_-sd_117-lc_16",
      show: {
        h: 416,
        w: 320,
        img: "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_320x999.jpg",
      },
      showLarge:
        "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_560x999.jpg",
      price: "49.00",
      orgPrice: "94.99",
      cfav: "100",
      iid: "1m93p4u4",
    },
    {
      title: "2022新春精选女装9",
      link: "https://m.meilishuo.com/?acm=3.ms.0_4_1m93p4u.0.13386-69004.s026vr4qnwskg.t_-sd_117-lc_16",
      show: {
        h: 416,
        w: 320,
        img: "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_320x999.jpg",
      },
      showLarge:
        "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_560x999.jpg",
      price: "49.00",
      orgPrice: "94.99",
      cfav: "100",
      iid: "1m93p4u5",
    },
    {
      title: "2022新春精选女装10",
      link: "https://m.meilishuo.com/?acm=3.ms.0_4_1m93p4u.0.13386-69004.s026vr4qnwskg.t_-sd_117-lc_16",
      show: {
        h: 416,
        w: 320,
        img: "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_320x999.jpg",
      },
      showLarge:
        "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_560x999.jpg",
      price: "49.00",
      orgPrice: "94.99",
      cfav: "100",
      iid: "1m93p4u6",
    },
  ],
};

function randomString(e) {
  e = e || 32;
  let t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",
    a = t.length,
    n = "";
  for (let i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
  return n;
}

export function getMoreData(type) {
  const pop = {
    title: "2022新春流行女装",
    link: "https://item.meilishuo.com/h5/detail/1m93p4u?acm=3.ms.0_4_1m93p4u.0.13386-69004.s026vr4qnwskg.t_-sd_117-lc_16",
    show: {
      h: 416,
      w: 320,
      img: "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_320x999.jpg",
    },
    showLarge:
      "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_560x999.jpg",
    price: "59.00",
    orgPrice: "84.29",
    cfav: "120",
  };
  const newItem = {
    title: "2022新春靓丽女装",
    link: "https://item.meilishuo.com/h5/detail/1m93p4u?acm=3.ms.0_4_1m93p4u.0.13386-69004.s026vr4qnwskg.t_-sd_117-lc_16",
    show: {
      h: 416,
      w: 320,
      img: "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_320x999.jpg",
    },
    showLarge:
      "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_560x999.jpg",
    price: "59.00",
    orgPrice: "84.29",
    cfav: "120",
  };
  const sell = {
    title: "2022新春精选女装",
    link: "https://item.meilishuo.com/h5/detail/1m93p4u?acm=3.ms.0_4_1m93p4u.0.13386-69004.s026vr4qnwskg.t_-sd_117-lc_16",
    show: {
      h: 416,
      w: 320,
      img: "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_320x999.jpg",
    },
    showLarge:
      "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_560x999.jpg",
    price: "59.00",
    orgPrice: "84.29",
    cfav: "120",
  };

  pop.title += randomString();
  newItem.title += randomString();
  sell.title += randomString();
  console.log(pop);
  switch (type) {
    case "pop":
      goodsData[type].push(pop);
      break;
    case "new":
      goodsData[type].push(newItem);
      break;
    case "sell":
      goodsData[type].push(sell);
      break;
  }
  console.log(goodsData);
}
