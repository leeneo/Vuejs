(() => {
    "use strict";
    var e, n, t, r, o = {
            907: (e, n) => {
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.name = "LiMing", n.age = 18, n.height = 1.88
            },
            898: e => {
                e.exports = {
                    add: function (e, n) {
                        return e + n
                    },
                    mul: function (e, n) {
                        return e * n
                    }
                }
            },
            288: (e, n, t) => {
                t.d(n, {
                    Z: () => a
                });
                var r = t(645),
                    o = t.n(r)()((function (e) {
                        return e[1]
                    }));
                o.push([e.id, "h2 {\n  font-size: 40px;\n  color: orange;\n}\ndiv {\n  margin-bottom: 50px;\n}\n", ""]);
                const a = o
            },
            58: (e, n, t) => {
                t.d(n, {
                    Z: () => l
                });
                var r = t(645),
                    o = t.n(r),
                    a = t(667),
                    i = t.n(a),
                    c = t(670),
                    s = o()((function (e) {
                        return e[1]
                    })),
                    u = i()(c.Z);
                s.push([e.id, "body {\r\n    /* background-color: aqua; */\r\n    /* background-image: url('../img/test.jpg'); */\r\n    /* background: url('../img/timg.jpg') fixed center; */\r\n    background: url(" + u + ") fixed center;\r\n    color: #3bffe4;\r\n}\r\n", ""]);
                const l = s
            },
            645: e => {
                e.exports = function (e) {
                    var n = [];
                    return n.toString = function () {
                        return this.map((function (n) {
                            var t = e(n);
                            return n[2] ? "@media ".concat(n[2], " {").concat(t, "}") : t
                        })).join("")
                    }, n.i = function (e, t, r) {
                        "string" == typeof e && (e = [
                            [null, e, ""]
                        ]);
                        var o = {};
                        if (r)
                            for (var a = 0; a < this.length; a++) {
                                var i = this[a][0];
                                null != i && (o[i] = !0)
                            }
                        for (var c = 0; c < e.length; c++) {
                            var s = [].concat(e[c]);
                            r && o[s[0]] || (t && (s[2] ? s[2] = "".concat(t, " and ").concat(s[2]) : s[2] = t), n.push(s))
                        }
                    }, n
                }
            },
            667: e => {
                e.exports = function (e, n) {
                    return n || (n = {}), "string" != typeof (e = e && e.__esModule ? e.default : e) ? e : (/^['"].*['"]$/.test(e) && (e = e.slice(1, -1)), n.hash && (e += n.hash), /["'() \t\n]/.test(e) || n.needQuotes ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : e)
                }
            },
            570: (e, n, t) => {
                t.r(n), t.d(n, {
                    default: () => i
                });
                var r = t(379),
                    o = t.n(r),
                    a = t(288);
                o()(a.Z, {
                    insert: "head",
                    singleton: !1
                });
                const i = a.Z.locals || {}
            },
            131: (e, n, t) => {
                t.r(n), t.d(n, {
                    default: () => i
                });
                var r = t(379),
                    o = t.n(r),
                    a = t(58);
                o()(a.Z, {
                    insert: "head",
                    singleton: !1
                });
                const i = a.Z.locals || {}
            },
            379: (e, n, t) => {
                var r, o = function () {
                        var e = {};
                        return function (n) {
                            if (void 0 === e[n]) {
                                var t = document.querySelector(n);
                                if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement) try {
                                    t = t.contentDocument.head
                                } catch (e) {
                                    t = null
                                }
                                e[n] = t
                            }
                            return e[n]
                        }
                    }(),
                    a = [];

                function i(e) {
                    for (var n = -1, t = 0; t < a.length; t++)
                        if (a[t].identifier === e) {
                            n = t;
                            break
                        } return n
                }

                function c(e, n) {
                    for (var t = {}, r = [], o = 0; o < e.length; o++) {
                        var c = e[o],
                            s = n.base ? c[0] + n.base : c[0],
                            u = t[s] || 0,
                            l = "".concat(s, " ").concat(u);
                        t[s] = u + 1;
                        var d = i(l),
                            f = {
                                css: c[1],
                                media: c[2],
                                sourceMap: c[3]
                            }; - 1 !== d ? (a[d].references++, a[d].updater(f)) : a.push({
                            identifier: l,
                            updater: g(f, n),
                            references: 1
                        }), r.push(l)
                    }
                    return r
                }

                function s(e) {
                    var n = document.createElement("style"),
                        r = e.attributes || {};
                    if (void 0 === r.nonce) {
                        var a = t.nc;
                        a && (r.nonce = a)
                    }
                    if (Object.keys(r).forEach((function (e) {
                            n.setAttribute(e, r[e])
                        })), "function" == typeof e.insert) e.insert(n);
                    else {
                        var i = o(e.insert || "head");
                        if (!i) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                        i.appendChild(n)
                    }
                    return n
                }
                var u, l = (u = [], function (e, n) {
                    return u[e] = n, u.filter(Boolean).join("\n")
                });

                function d(e, n, t, r) {
                    var o = t ? "" : r.media ? "@media ".concat(r.media, " {").concat(r.css, "}") : r.css;
                    if (e.styleSheet) e.styleSheet.cssText = l(n, o);
                    else {
                        var a = document.createTextNode(o),
                            i = e.childNodes;
                        i[n] && e.removeChild(i[n]), i.length ? e.insertBefore(a, i[n]) : e.appendChild(a)
                    }
                }

                function f(e, n, t) {
                    var r = t.css,
                        o = t.media,
                        a = t.sourceMap;
                    if (o ? e.setAttribute("media", o) : e.removeAttribute("media"), a && "undefined" != typeof btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a)))), " */")), e.styleSheet) e.styleSheet.cssText = r;
                    else {
                        for (; e.firstChild;) e.removeChild(e.firstChild);
                        e.appendChild(document.createTextNode(r))
                    }
                }
                var p = null,
                    v = 0;

                function g(e, n) {
                    var t, r, o;
                    if (n.singleton) {
                        var a = v++;
                        t = p || (p = s(n)), r = d.bind(null, t, a, !1), o = d.bind(null, t, a, !0)
                    } else t = s(n), r = f.bind(null, t, n), o = function () {
                        ! function (e) {
                            if (null === e.parentNode) return !1;
                            e.parentNode.removeChild(e)
                        }(t)
                    };
                    return r(e),
                        function (n) {
                            if (n) {
                                if (n.css === e.css && n.media === e.media && n.sourceMap === e.sourceMap) return;
                                r(e = n)
                            } else o()
                        }
                }
                e.exports = function (e, n) {
                    (n = n || {}).singleton || "boolean" == typeof n.singleton || (n.singleton = (void 0 === r && (r = Boolean(window && document && document.all && !window.atob)), r));
                    var t = c(e = e || [], n);
                    return function (e) {
                        if (e = e || [], "[object Array]" === Object.prototype.toString.call(e)) {
                            for (var r = 0; r < t.length; r++) {
                                var o = i(t[r]);
                                a[o].references--
                            }
                            for (var s = c(e, n), u = 0; u < t.length; u++) {
                                var l = i(t[u]);
                                0 === a[l].references && (a[l].updater(), a.splice(l, 1))
                            }
                            t = s
                        }
                    }
                }
            },
            670: (e, n, t) => {
                t.d(n, {
                    Z: () => r
                });
                const r = t.p + "img/test.f07dce83.jpg"
            }
        },
        a = {};

    function i(e) {
        if (a[e]) return a[e].exports;
        var n = a[e] = {
            id: e,
            exports: {}
        };
        return o[e](n, n.exports, i), n.exports
    }
    i.n = e => {
        var n = e && e.__esModule ? () => e.default : () => e;
        return i.d(n, {
            a: n
        }), n
    }, i.d = (e, n) => {
        for (var t in n) i.o(n, t) && !i.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: n[t]
        })
    }, i.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n), i.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, i.p = "dist/", e = i(907), t = (n = i(898)).add, r = n.mul, console.log(t(20, 30)), console.log(r(20, 30)), console.log(e.name, e.age, e.height), i(131), i(570)
})();