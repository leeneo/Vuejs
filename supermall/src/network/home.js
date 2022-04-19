import { request, goodsData, getMoreData } from "./request";

export function requestHomeMultidata() {
  return request({
    url: "/home/multidata",
  });
}

export function requestHomeGoods(type, page) {
  return request({
    url: "/home/data",
    params: {
      type,
      page
    }
  });
}

export function getMoreHomeData(type) {
  return getMoreData(type);
}

export const HomeGoodsData = goodsData;
