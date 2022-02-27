        // 此函数用于修正js toFixed(n) 函数四舍五入不精准的问题
        
        // 应用此函数后 0.4125.toFixed(3)=0.413，139.605.toFixed(2)=139.60，可以修正逢5进一，但不能修正逢0进一
        // Number.prototype.toFixed = function (s) {
        //     var changenum = (parseInt(this * Math.pow(10, s) + 0.5) / Math.pow(10, s)).toString();
        //     index = changenum.indexOf(".");
        //     if (index < 0 && s > 0) {
        //         changenum = changenum + ".";
        //         for (i = 0; i < s; i++) {
        //             changenum = changenum + "0";
        //         }

        //     } else {
        //         index = changenum.length - index;
        //         for (i = 0; i < (s - index) + 1; i++) {
        //             changenum = changenum + "0";
        //         }

        //     }

        //     return changenum;
        // }

        // 应用此函数后 0.4125.toFixed(3)=0.413，139.605.toFixed(2)=139.61，达到预期效果
        // 转自https: //blog.csdn.net/nndhyp/article/details/78614480
        Number.prototype.toFixed = function (d) {
            var s = this + "";
            if (!d) d = 0;
            if (s.indexOf(".") == -1) s += ".";
            s += new Array(d + 1).join("0");
            if (new RegExp("^(-|\\+)?(\\d+(\\.\\d{0," + (d + 1) + "})?)\\d*$").test(s)) {
                var s = "0" + RegExp.$2,
                    pm = RegExp.$1,
                    a = RegExp.$3.length,
                    b = true;
                if (a == d + 2) {
                    a = s.match(/\d/g);
                    if (parseInt(a[a.length - 1]) > 4) {
                        for (var i = a.length - 2; i >= 0; i--) {
                            a[i] = parseInt(a[i]) + 1;
                            if (a[i] == 10) {
                                a[i] = 0;
                                b = i != 1;
                            } else break;
                        }
                    }
                    s = a.join("").replace(new RegExp("(\\d+)(\\d{" + d + "})\\d$"), "$1.$2");

                }
                if (b) s = s.substr(1);
                return (pm + s).replace(/\.$/, "");
            }
            return this + "";

        };