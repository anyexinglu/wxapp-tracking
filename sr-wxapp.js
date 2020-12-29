!(function (t, i) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = i())
    : "function" == typeof define && define.amd
    ? define(i)
    : ((t = t || self).SRT = i());
})(this, function () {
  "use strict";
  /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
  var t = function (i, e) {
    return (t =
      Object.setPrototypeOf ||
      ({
        __proto__: [],
      } instanceof Array &&
        function (t, i) {
          t.__proto__ = i;
        }) ||
      function (t, i) {
        for (var e in i) i.hasOwnProperty(e) && (t[e] = i[e]);
      })(i, e);
  };
  function i(i, e) {
    function s() {
      this.constructor = i;
    }
    t(i, e),
      (i.prototype =
        null === e ? Object.create(e) : ((s.prototype = e.prototype), new s()));
  }
  var e = function () {
    return (e =
      Object.assign ||
      function (t) {
        for (var i, e = 1, s = arguments.length; e < s; e++)
          for (var r in (i = arguments[e]))
            Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r]);
        return t;
      }).apply(this, arguments);
  };
  function s(t, i, e, s) {
    var r,
      n = arguments.length,
      o =
        n < 3
          ? i
          : null === s
          ? (s = Object.getOwnPropertyDescriptor(i, e))
          : s;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
      o = Reflect.decorate(t, i, e, s);
    else
      for (var h = t.length - 1; h >= 0; h--)
        (r = t[h]) && (o = (n < 3 ? r(o) : n > 3 ? r(i, e, o) : r(i, e)) || o);
    return n > 3 && o && Object.defineProperty(i, e, o), o;
  }
  function r() {
    for (var t = 0, i = 0, e = arguments.length; i < e; i++)
      t += arguments[i].length;
    var s = Array(t),
      r = 0;
    for (i = 0; i < e; i++)
      for (var n = arguments[i], o = 0, h = n.length; o < h; o++, r++)
        s[r] = n[o];
    return s;
  }
  try {
    Object.entries ||
      (Object.entries = function (t) {
        for (var i = Object.keys(t), e = i.length, s = new Array(e); e--; )
          s[e] = [i[e], t[i[e]]];
        return s;
      }),
      Array.prototype.includes ||
        (Array.prototype.includes = function (t) {
          return !!~this.indexOf(t);
        });
  } catch (t) {
    console.error("polyfill exec failed", t);
  }
  var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    o = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,
    h = function (t) {
      return (function (t) {
        for (
          var i, e, s, r, o = "", h = 0, a = (t = String(t)).length % 3;
          h < t.length;

        ) {
          if (
            (e = t.charCodeAt(h++)) > 255 ||
            (s = t.charCodeAt(h++)) > 255 ||
            (r = t.charCodeAt(h++)) > 255
          )
            throw new TypeError(
              "Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range."
            );
          o +=
            n.charAt(((i = (e << 16) | (s << 8) | r) >> 18) & 63) +
            n.charAt((i >> 12) & 63) +
            n.charAt((i >> 6) & 63) +
            n.charAt(63 & i);
        }
        return a ? o.slice(0, a - 3) + "===".substring(a) : o;
      })(
        encodeURIComponent(t).replace(/%([0-9A-F]{2})/g, function (t, i) {
          var e;
          return (e = "0x" + i), String.fromCharCode(e);
        })
      );
    },
    a = function (t) {
      return decodeURIComponent(
        (function (t) {
          if (((t = String(t).replace(/[\t\n\f\r ]+/g, "")), !o.test(t)))
            throw new TypeError(
              "Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded."
            );
          t += "==".slice(2 - (3 & t.length));
          for (var i, e, s, r = "", h = 0; h < t.length; )
            (i =
              (n.indexOf(t.charAt(h++)) << 18) |
              (n.indexOf(t.charAt(h++)) << 12) |
              ((e = n.indexOf(t.charAt(h++))) << 6) |
              (s = n.indexOf(t.charAt(h++)))),
              (r +=
                64 === e
                  ? String.fromCharCode((i >> 16) & 255)
                  : 64 === s
                  ? String.fromCharCode((i >> 16) & 255, (i >> 8) & 255)
                  : String.fromCharCode(
                      (i >> 16) & 255,
                      (i >> 8) & 255,
                      255 & i
                    ));
          return r;
        })(t)
          .split("")
          .map(function (t) {
            return "%" + ("00" + t.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      );
    },
    c = {
      encode: function (t) {
        return h(t).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
      },
      decode: function (t) {
        var i = (t = t.replace(/\-/g, "+").replace(/_/g, "/")).length % 4;
        return i > 0 && (t += "====".substring(i)), a(t);
      },
    },
    u = Object.prototype.toString,
    d = c,
    p = function (t) {
      return "[object Object]" === u.call(t);
    },
    f = function (t) {
      return "[object Array]" === u.call(t);
    },
    l = function (t, i) {
      var e;
      void 0 === i && (i = 0);
      var s = [];
      return function () {
        for (var r = arguments, n = [], o = 0; o < arguments.length; o++)
          n[o] = r[o];
        return (
          clearTimeout(e),
          (e = setTimeout(function () {
            var i = t.apply(void 0, n);
            s.forEach(function (t) {
              return t(i);
            }),
              (s = []);
          }, i)),
          new Promise(function (t) {
            return s.push(t);
          })
        );
      };
    },
    g = function () {
      return (
        Date.now() +
        "-" +
        "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t) {
          var i = (16 * Math.random()) | 0;
          return ("x" == t ? i : (3 & i) | 8).toString(16);
        })
      );
    },
    _ = function () {
      for (var t = arguments, i = [], e = 0; e < arguments.length; e++)
        i[e] = t[e];
      return 0 === i.length
        ? {}
        : i.length < 2
        ? i[0]
        : i.reduce(function (t, i) {
            if (!p(t) || !p(i))
              return console.error("deepMerge arguments only access object"), t;
            var e = t || {};
            return (
              Object.entries(i).forEach(function (i) {
                var s = i[0],
                  n = i[1];
                if (void 0 !== n)
                  if (t[s])
                    if (f(t[s])) {
                      if (!f(n)) return void (e[s] = n);
                      var o = f(n) ? n : [n];
                      e[s] = r(t[s], o);
                    } else p(t[s]) ? (e[s] = _(t[s], n)) : (e[s] = n);
                  else e[s] = n;
              }),
              e
            );
          });
    },
    v = function (t) {
      return !!/^[a-zA-Z\$_][a-zA-Z\d_]*$/.test(t);
    },
    x = /^v?(?:\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+))?(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i,
    m = function (t) {
      if ("string" != typeof t)
        throw new TypeError("Invalid argument expected string");
      if (!x.test(t))
        throw new Error(
          "Invalid argument not valid semver ('" + t + "' received)"
        );
    },
    S = function (t) {
      return isNaN(Number(t)) ? t : Number(t);
    },
    y = function (t) {
      var i,
        e,
        s = t.replace(/^v/, "").replace(/\+.*$/, ""),
        r = ((e = "-"), -1 === (i = s).indexOf(e) ? i.length : i.indexOf(e)),
        n = s.substring(0, r).split(".");
      return n.push(s.substring(r + 1)), n;
    },
    k = function (t, i) {
      [t, i].forEach(m);
      for (
        var e = y(t), s = y(i), r = 0;
        r < Math.max(e.length - 1, s.length - 1);
        r++
      ) {
        var n = parseInt(e[r] || 0, 10),
          o = parseInt(s[r] || 0, 10);
        if (n > o) return 1;
        if (o > n) return -1;
      }
      var h = e[e.length - 1],
        a = s[s.length - 1];
      if (h && a) {
        var c = h.split(".").map(S),
          u = a.split(".").map(S);
        for (r = 0; r < Math.max(c.length, u.length); r++) {
          if (
            void 0 === c[r] ||
            ("string" == typeof u[r] && "number" == typeof c[r])
          )
            return -1;
          if (
            void 0 === u[r] ||
            ("string" == typeof c[r] && "number" == typeof u[r])
          )
            return 1;
          if (c[r] > u[r]) return 1;
          if (u[r] > c[r]) return -1;
        }
      } else if (h || a) return h ? -1 : 1;
      return 0;
    },
    b = (function (t) {
      function s(i) {
        var e = t.call(this, i.request) || this;
        return (
          (e.stack = []),
          (e.initialize = function () {
            return Promise.resolve(!0);
          }),
          (e.add = function (t) {
            e.stack.push(t);
          }),
          (e.getItems = function () {
            return e.stack;
          }),
          (e.unshift = function (t) {
            var i;
            return (i = e.stack).unshift.apply(i, t);
          }),
          (e.clean = function () {
            var t = e.stack;
            return (e.stack = []), t;
          }),
          (e.option = i),
          e.initialize(),
          e
        );
      }
      return (
        i(s, t),
        (s.prototype.flush = function (t) {
          var i = this;
          if ((void 0 === t && (t = {}), this.stack.length)) {
            var s = this.stack.map(function (i) {
              return (i.props = e(e({}, i.props), t)), i;
            });
            (this.stack = []),
              this.upload({
                events: s,
              })
                .then(function (t) {
                  t.success || (i.stack = s);
                })
                .catch(function () {
                  i.stack = s;
                });
          }
        }),
        s
      );
    })(function (t) {
      (this.delay = 100), (this.upload = l(t, this.delay));
    }),
    I = function (t, i, e) {
      var s = e.value;
      return (
        (e.value = function () {
          var t;
          try {
            t = s.apply(this, arguments);
          } catch (t) {
            try {
              console.error("Calling " + i + " error with", arguments),
                console.error(t);
              var e = this.getServerUrl();
              this.request(
                {
                  type: "sdk api exec error",
                  props: {
                    sr_sdk_version: this.version,
                    system_info: this.getSystemInfo(),
                    framework_info: this.getFrameworkInfo(),
                    message: (t || {}).message || t,
                    stack: (t || {}).stack,
                  },
                },
                {
                  url: e,
                  method: "POST",
                }
              );
            } catch (t) {}
          }
          return t;
        }),
        e
      );
    },
    w = function (t, i, e) {
      var s = e.value;
      return (
        (e.value = function () {
          if (this.inited) return s.apply(this, arguments);
          console.error("\u8bf7\u5148\u5b8c\u6210\u521d\u59cb\u5316");
        }),
        e
      );
    },
    A = {
      SDK: "__SR_SDK_TRACKER__",
      TRACKS: "TRACKS",
      USER_INFO: "USER_INFO",
      LOGID_EVENTS: "LOGID_EVENTS",
    },
    C = {
      WAITING: "WAITING",
      REPORTING: "REPORTING",
      PAUSED: "PAUSED",
    },
    T = {
      MISS: "should exec cacheManagerInitialize first",
    },
    O = {};
  try {
    O = JSON.parse(
      '{"mp":{"version":{"min":"1.3.18","max":"1.3.18"},"download":"https://mp.zhls.qq.com/sdk/sdk-weapp/index.js"},"xxx-for-git":{}}'
    );
  } catch (t) {}
  var U = (function () {
    function t() {
      var t = this;
      (this.versions = O),
        (this.env = "production"),
        (this.cachePrefix = A.SDK),
        (this.inited = !1),
        (this.option = {}),
        (this.context = {}),
        (this.reportState = C.WAITING),
        (this.triggerFlush = l(function () {
          t.checkAndUpload();
        }, 1e3)),
        (this.eventDataFmatter = function (i) {
          var s = +new Date(),
            r = t.getPageInfo();
          if (void 0 !== t._onQueue) {
            var n = t._onQueue(i);
            p(i)
              ? (i = n)
              : console.warn("eventDataFmatter should return Object type");
          }
          return e(e(e({}, r), i), {
            time: s,
          });
        }),
        (this.checkRequiredOptionItem = function () {
          return (
            !!t.option.token ||
            (t.option.skipTokenCheck
              ? (console.warn(
                  "token \u672a\u914d\u7f6e\uff0c\u5df2\u8df3\u8fc7\u8be5\u68c0\u67e5"
                ),
                !0)
              : (console.error(
                  "sdk.init - Option \u5fc5\u8981\u53c2\u6570\u914d\u7f6e\u7f3a\u5931\uff0c\u8bf7\u68c0\u67e5"
                ),
                !1))
          );
        }),
        (this.checkVersionInfo = function () {
          t.setContext({
            sr_sdk_version: t.version,
          });
          var i =
            "https://mp.zhls.qq.com/sdk/sr-sdk-version-info.json?timesamp=" +
            Date.now();
          return t
            .request(
              {},
              {
                url: i,
                method: "GET",
              }
            )
            .then(function (i) {
              var e = (i.data || {})[t.name],
                s = !0;
              if (e) {
                var r = (((t.versions || {})[t.name] || {}).version || {}).max;
                return (
                  r &&
                    (1 === k(e.version.min, r)
                      ? (console.error(
                          "\u5f53\u524dSDK\u7248\u672c\u8fc7\u4f4e, \u8bf7\u5347\u7ea7\uff01"
                        ),
                        (s = !1))
                      : 1 === k(e.version.max, r) &&
                        console.warn(
                          "\u5f53\u524dSDK\u6709\u66f4\u65b0, \u63a8\u8350\u5347\u7ea7\uff01"
                        )),
                  {
                    success: s,
                    data: e,
                    msg: "",
                  }
                );
              }
            })
            .catch(function (t) {
              return (
                void 0 === t && (t = {}),
                {
                  success: !1,
                  data: void 0,
                  msg: t.errMsg,
                }
              );
            });
        }),
        (this.queueInitialize = function () {
          var i = t.getServerUrl();
          return (
            (t.queue = new b({
              request: function (s) {
                var r = s.events.map(function (i) {
                  return e(e({}, i), {
                    from: "sr-sdk-wxapp",
                    tracking_id: t.tracking_id,
                    log_id: ++t.log_id,
                  });
                });
                return (
                  t.setCache(A.LOGID_EVENTS, {
                    last_tracking_id: t.tracking_id,
                    last_max_log_id: t.log_id,
                  }),
                  t
                    .request(r, {
                      url: i,
                      method: "POST",
                    })
                    .catch(function (t) {
                      return (
                        console.error("APICaller error", t),
                        "request:fail url not in domain list" === t.msg
                          ? e(e({}, t), {
                              success: !0,
                            })
                          : t
                      );
                    })
                );
              },
            })),
            !0
          );
        }),
        (this.trackLogEvents = function () {
          var i = t.getCache(A.LOGID_EVENTS) || {};
          return i.last_max_log_id
            ? (t.track("logid_events", i), !0)
            : (++t.log_id, !1);
        }),
        (this.tracking_id = g()),
        (this.log_id = -1),
        this.checkStaticMethods();
    }
    return (
      (t.prototype.init = function (t) {
        if (this.inited) return this;
        if (
          ((this.version = (
            (this.versions[this.name] || {}).version || {}
          ).max),
          (this.option = _(this.defaultOptions, this.option, t)),
          t.autoProxy &&
            ((this.option.proxyComponent = !0),
            (this.option.proxyPage = !0),
            (this.option.openAutoTrackOpenId = !0),
            (this.option.autoTrack = !0),
            (this.option.openSdkShareDepth = !0)),
          !this.checkRequiredOptionItem())
        )
          return this;
        this.cacheManagerInitialize();
        try {
          this.proxyInitialize();
        } catch (t) {
          this.errorHandle(t);
        }
        return (
          this.queueInitialize(),
          this.contextInitialize(),
          (this.inited = !0),
          this.checkFallback(),
          this.option.autoStart && this.startReport(),
          this.checkVersionInfo(),
          this.trackLogEvents(),
          this
        );
      }),
      (t.prototype.track = function (t, i) {
        var e = this.option.debug;
        JSON.stringify(i || {}).length > 5e3 &&
          console.warn(
            "\u76d1\u6d4b\u5230\u8d85\u8fc75000\u7684\u4e0a\u62a5\u65e5\u5fd7\uff1a" +
              t
          );
        var s = this.eventDataFmatter(i);
        return (
          e &&
            console &&
            "function" == typeof console.log &&
            console.log("\u3010Track\u3011 " + t, s),
          this.queue.add({
            type: t,
            props: s,
          }),
          this.triggerFlush(),
          this
        );
      }),
      (t.prototype.setContext = function (t) {
        return (
          console.warn(
            "setContext \u4e0d\u5728\u63a8\u8350\u4f7f\u7528\uff0c\u8bf7\u7528\u66f4\u8f7b\u4fbf\u7684 setUser\u3001setChan\u7b49\u65b9\u6cd5\u4ee3\u66ff"
          ),
          (this.context = e(e(e({}, this.context), t), {
            wx_user: e(e({}, this.context.wx_user), t.wx_user || {}),
            chan: e(e({}, this.context.chan), t.chan || {}),
          })),
          this
        );
      }),
      (t.prototype.setUser = function (t) {
        return (
          void 0 === t && (t = {}),
          (this.context = Object.assign({}, this.context, {
            wx_user: e(e({}, this.context.wx_user), t),
          })),
          this.setCache(A.USER_INFO, this.context.wx_user),
          this
        );
      }),
      (t.prototype.setChan = function (t) {
        var i = t.chan_id,
          s = (this.context.chan || {}).chan_id;
        return (
          (this.context = Object.assign({}, this.context, {
            chan: e(e(e({}, this.context.chan), t), {
              chan_id: i || s || "",
            }),
          })),
          this
        );
      }),
      (t.prototype.setComponent = function (t) {
        var i = t.component_id,
          s = t.component_name;
        return (
          (this.context = Object.assign({}, this.context, {
            component: e(e({}, t), {
              component_id: i,
              component_name: s,
            }),
          })),
          this
        );
      }),
      (t.prototype.clearComponent = function () {
        return delete this.context.component, this;
      }),
      (t.prototype.setActivityInfo = function (t) {
        var i = t.activity_id,
          s = t.activity_name,
          r = t.activity_type,
          n = t.activity_index;
        return (
          (this.context = Object.assign({}, this.context, {
            activity_info: e(e({}, t), {
              activity_id: i,
              activity_name: s,
              activity_type: r,
              activity_index: n,
            }),
          })),
          this
        );
      }),
      (t.prototype.clearActivityInfo = function () {
        return delete this.context.activity_info, this;
      }),
      (t.prototype.startReport = function () {
        return (this.reportState = C.REPORTING), this.triggerFlush(), this;
      }),
      (t.prototype.resumeReport = function () {
        var t = this.getCache(A.TRACKS) || [];
        return (
          this.queue.unshift(t),
          this.reportState === C.PAUSED && (this.reportState = C.REPORTING),
          this.triggerFlush(),
          this
        );
      }),
      (t.prototype.pauseReport = function () {
        return (
          (this.reportState = C.PAUSED),
          this.setCache(A.TRACKS, this.queue.clean()),
          this
        );
      }),
      (t.prototype.flush = function () {
        return this.queue.flush(this.context), this;
      }),
      (t.prototype.onQueue = function (t) {
        return (this._onQueue = t), this;
      }),
      (t.prototype.getInfo = function () {
        var t = {
          option: this.option,
          tracking_id: this.tracking_id,
          context: this.context,
          is_dev: this.isDev(),
        };
        return "SR_SDK_INFO=" + d.encode(JSON.stringify(t));
      }),
      (t.prototype.checkStaticMethods = function () {
        if ("development" === this.env)
          try {
            var t = this.constructor;
            ["create"].forEach(function (i) {
              !t[i] && console.error("static " + i + " should be implement");
            });
          } catch (t) {
            console.error("checkStaticMethods error", t);
          }
      }),
      (t.prototype.checkFallback = function () {
        var t = this;
        setTimeout(function () {
          t.checkAndUpload(), t.checkFallback();
        }, 1e4);
      }),
      (t.prototype.checkAndUpload = function () {
        this.reportState === C.REPORTING && this.flush();
      }),
      (t.prototype.contextInitialize = function () {
        var t = this.getUser(),
          i = this.getSystemInfo(),
          s = i.brand,
          r = i.model,
          n = i.version,
          o = i.environment,
          h = i.screenWidth,
          a = i.screenHeight,
          c = i.system,
          u = i.platform,
          d = this.getFrameworkInfo();
        this.context = _(this.context, {
          wx_user: e(e({}, t), {
            app_id: this.option.appid,
          }),
          system_info: {
            brand: s,
            model: r,
            version: n,
            environment: o,
            screenWidth: h,
            screenHeight: a,
            system: c,
            platform: u,
          },
          framework_info: d,
          chan: {},
        });
      }),
      (t.prototype.getUser = function () {
        var t = this.context.wx_user || this.getCache(A.USER_INFO) || {};
        return (
          (t.local_id && 50 === t.local_id.length) ||
            ((t = {
              local_id: g(),
            }),
            this.setCache(A.USER_INFO, t)),
          t
        );
      }),
      (t.prototype.cacheManagerInitialize = function () {
        var t = this.getCacheManager();
        this.cacheManager = t;
      }),
      (t.prototype.getCache = function (t) {
        return this.cacheManager
          ? (this.cacheManager.get(A.SDK) || {})[t]
          : (console.error(T.MISS), {});
      }),
      (t.prototype.setCache = function (t, i) {
        var s;
        this.cacheManager || console.error(T.MISS);
        var r = e(
          e({}, this.cacheManager.get(A.SDK) || {}),
          (((s = {})[t] = i), s)
        );
        this.cacheManager.set(A.SDK, r);
      }),
      (t.prototype.getServerUrl = function () {
        var t = "";
        return (
          (t =
            "function" == typeof this.option.serverUrl
              ? this.option.serverUrl.call(this)
              : this.option.serverUrl || "https://zhls.qq.com/api/report"),
          (t += "?token=" + this.option.token)
        );
      }),
      (t.prototype.getTrackingId = function () {
        return this.tracking_id;
      }),
      s([I], t.prototype, "init", null),
      s([I, w], t.prototype, "track", null),
      s([I, w], t.prototype, "setContext", null),
      s([I, w], t.prototype, "setUser", null),
      s([I, w], t.prototype, "setChan", null),
      s([I, w], t.prototype, "setComponent", null),
      s([I, w], t.prototype, "clearComponent", null),
      s([I, w], t.prototype, "setActivityInfo", null),
      s([I, w], t.prototype, "clearActivityInfo", null),
      s([I, w], t.prototype, "startReport", null),
      s([I, w], t.prototype, "resumeReport", null),
      s([I, w], t.prototype, "pauseReport", null),
      s([I, w], t.prototype, "flush", null),
      s([I, w], t.prototype, "onQueue", null),
      s([I, w], t.prototype, "getInfo", null),
      t
    );
  })();
  //
  function F(t, i, e, s) {
    void 0 === s && (s = !1);
    var n = t[i];
    t[i] = function () {
      for (
        var t = arguments, i = this, o = [], h = 0;
        h < arguments.length;
        h++
      )
        o[h] = t[h];
      var a = function () {
        return n && n.apply(i, o);
      };
      return (
        s &&
          (a = function () {
            return Promise.resolve().then(function () {
              return n.apply(i, o);
            });
          }),
        e.apply(this, r([a], o))
      );
    };
  }
  var R = (function () {
      function t() {}
      return (
        (t.AddUnsigned = function (t, i) {
          var e, s, r, n, o;
          return (
            (r = 2147483648 & t),
            (n = 2147483648 & i),
            (o = (1073741823 & t) + (1073741823 & i)),
            (e = 1073741824 & t) & (s = 1073741824 & i)
              ? 2147483648 ^ o ^ r ^ n
              : e | s
              ? 1073741824 & o
                ? 3221225472 ^ o ^ r ^ n
                : 1073741824 ^ o ^ r ^ n
              : o ^ r ^ n
          );
        }),
        (t.FF = function (t, i, e, s, r, n, o) {
          return (
            (t = this.AddUnsigned(
              t,
              this.AddUnsigned(this.AddUnsigned(this.F(i, e, s), r), o)
            )),
            this.AddUnsigned(this.RotateLeft(t, n), i)
          );
        }),
        (t.GG = function (t, i, e, s, r, n, o) {
          return (
            (t = this.AddUnsigned(
              t,
              this.AddUnsigned(this.AddUnsigned(this.G(i, e, s), r), o)
            )),
            this.AddUnsigned(this.RotateLeft(t, n), i)
          );
        }),
        (t.HH = function (t, i, e, s, r, n, o) {
          return (
            (t = this.AddUnsigned(
              t,
              this.AddUnsigned(this.AddUnsigned(this.H(i, e, s), r), o)
            )),
            this.AddUnsigned(this.RotateLeft(t, n), i)
          );
        }),
        (t.II = function (t, i, e, s, r, n, o) {
          return (
            (t = this.AddUnsigned(
              t,
              this.AddUnsigned(this.AddUnsigned(this.I(i, e, s), r), o)
            )),
            this.AddUnsigned(this.RotateLeft(t, n), i)
          );
        }),
        (t.ConvertToWordArray = function (t) {
          for (
            var i,
              e = t.length,
              s = e + 8,
              r = 16 * ((s - (s % 64)) / 64 + 1),
              n = Array(r - 1),
              o = 0,
              h = 0;
            h < e;

          )
            (o = (h % 4) * 8),
              (n[(i = (h - (h % 4)) / 4)] = n[i] | (t.charCodeAt(h) << o)),
              h++;
          return (
            (o = (h % 4) * 8),
            (n[(i = (h - (h % 4)) / 4)] = n[i] | (128 << o)),
            (n[r - 2] = e << 3),
            (n[r - 1] = e >>> 29),
            n
          );
        }),
        (t.WordToHex = function (t) {
          var i,
            e = "",
            s = "";
          for (i = 0; i <= 3; i++)
            e += (s = "0" + ((t >>> (8 * i)) & 255).toString(16)).substr(
              s.length - 2,
              2
            );
          return e;
        }),
        (t.Utf8Encode = function (t) {
          var i,
            e = "";
          t = t.replace(/\r\n/g, "\n");
          for (var s = 0; s < t.length; s++)
            (i = t.charCodeAt(s)) < 128
              ? (e += String.fromCharCode(i))
              : i > 127 && i < 2048
              ? ((e += String.fromCharCode((i >> 6) | 192)),
                (e += String.fromCharCode((63 & i) | 128)))
              : ((e += String.fromCharCode((i >> 12) | 224)),
                (e += String.fromCharCode(((i >> 6) & 63) | 128)),
                (e += String.fromCharCode((63 & i) | 128)));
          return e;
        }),
        (t.init = function (t) {
          for (
            "string" != typeof t && (t = JSON.stringify(t)),
              this._string = this.Utf8Encode(t),
              this.x = this.ConvertToWordArray(this._string),
              this.a = 1732584193,
              this.b = 4023233417,
              this.c = 2562383102,
              this.d = 271733878,
              this.k = 0;
            this.k < this.x.length;
            this.k += 16
          )
            (this.AA = this.a),
              (this.BB = this.b),
              (this.CC = this.c),
              (this.DD = this.d),
              (this.a = this.FF(
                this.a,
                this.b,
                this.c,
                this.d,
                this.x[this.k],
                this.S11,
                3614090360
              )),
              (this.d = this.FF(
                this.d,
                this.a,
                this.b,
                this.c,
                this.x[this.k + 1],
                this.S12,
                3905402710
              )),
              (this.c = this.FF(
                this.c,
                this.d,
                this.a,
                this.b,
                this.x[this.k + 2],
                this.S13,
                606105819
              )),
              (this.b = this.FF(
                this.b,
                this.c,
                this.d,
                this.a,
                this.x[this.k + 3],
                this.S14,
                3250441966
              )),
              (this.a = this.FF(
                this.a,
                this.b,
                this.c,
                this.d,
                this.x[this.k + 4],
                this.S11,
                4118548399
              )),
              (this.d = this.FF(
                this.d,
                this.a,
                this.b,
                this.c,
                this.x[this.k + 5],
                this.S12,
                1200080426
              )),
              (this.c = this.FF(
                this.c,
                this.d,
                this.a,
                this.b,
                this.x[this.k + 6],
                this.S13,
                2821735955
              )),
              (this.b = this.FF(
                this.b,
                this.c,
                this.d,
                this.a,
                this.x[this.k + 7],
                this.S14,
                4249261313
              )),
              (this.a = this.FF(
                this.a,
                this.b,
                this.c,
                this.d,
                this.x[this.k + 8],
                this.S11,
                1770035416
              )),
              (this.d = this.FF(
                this.d,
                this.a,
                this.b,
                this.c,
                this.x[this.k + 9],
                this.S12,
                2336552879
              )),
              (this.c = this.FF(
                this.c,
                this.d,
                this.a,
                this.b,
                this.x[this.k + 10],
                this.S13,
                4294925233
              )),
              (this.b = this.FF(
                this.b,
                this.c,
                this.d,
                this.a,
                this.x[this.k + 11],
                this.S14,
                2304563134
              )),
              (this.a = this.FF(
                this.a,
                this.b,
                this.c,
                this.d,
                this.x[this.k + 12],
                this.S11,
                1804603682
              )),
              (this.d = this.FF(
                this.d,
                this.a,
                this.b,
                this.c,
                this.x[this.k + 13],
                this.S12,
                4254626195
              )),
              (this.c = this.FF(
                this.c,
                this.d,
                this.a,
                this.b,
                this.x[this.k + 14],
                this.S13,
                2792965006
              )),
              (this.b = this.FF(
                this.b,
                this.c,
                this.d,
                this.a,
                this.x[this.k + 15],
                this.S14,
                1236535329
              )),
              (this.a = this.GG(
                this.a,
                this.b,
                this.c,
                this.d,
                this.x[this.k + 1],
                this.S21,
                4129170786
              )),
              (this.d = this.GG(
                this.d,
                this.a,
                this.b,
                this.c,
                this.x[this.k + 6],
                this.S22,
                3225465664
              )),
              (this.c = this.GG(
                this.c,
                this.d,
                this.a,
                this.b,
                this.x[this.k + 11],
                this.S23,
                643717713
              )),
              (this.b = this.GG(
                this.b,
                this.c,
                this.d,
                this.a,
                this.x[this.k],
                this.S24,
                3921069994
              )),
              (this.a = this.GG(
                this.a,
                this.b,
                this.c,
                this.d,
                this.x[this.k + 5],
                this.S21,
                3593408605
              )),
              (this.d = this.GG(
                this.d,
                this.a,
                this.b,
                this.c,
                this.x[this.k + 10],
                this.S22,
                38016083
              )),
              (this.c = this.GG(
                this.c,
                this.d,
                this.a,
                this.b,
                this.x[this.k + 15],
                this.S23,
                3634488961
              )),
              (this.b = this.GG(
                this.b,
                this.c,
                this.d,
                this.a,
                this.x[this.k + 4],
                this.S24,
                3889429448
              )),
              (this.a = this.GG(
                this.a,
                this.b,
                this.c,
                this.d,
                this.x[this.k + 9],
                this.S21,
                568446438
              )),
              (this.d = this.GG(
                this.d,
                this.a,
                this.b,
                this.c,
                this.x[this.k + 14],
                this.S22,
                3275163606
              )),
              (this.c = this.GG(
                this.c,
                this.d,
                this.a,
                this.b,
                this.x[this.k + 3],
                this.S23,
                4107603335
              )),
              (this.b = this.GG(
                this.b,
                this.c,
                this.d,
                this.a,
                this.x[this.k + 8],
                this.S24,
                1163531501
              )),
              (this.a = this.GG(
                this.a,
                this.b,
                this.c,
                this.d,
                this.x[this.k + 13],
                this.S21,
                2850285829
              )),
              (this.d = this.GG(
                this.d,
                this.a,
                this.b,
                this.c,
                this.x[this.k + 2],
                this.S22,
                4243563512
              )),
              (this.c = this.GG(
                this.c,
                this.d,
                this.a,
                this.b,
                this.x[this.k + 7],
                this.S23,
                1735328473
              )),
              (this.b = this.GG(
                this.b,
                this.c,
                this.d,
                this.a,
                this.x[this.k + 12],
                this.S24,
                2368359562
              )),
              (this.a = this.HH(
                this.a,
                this.b,
                this.c,
                this.d,
                this.x[this.k + 5],
                this.S31,
                4294588738
              )),
              (this.d = this.HH(
                this.d,
                this.a,
                this.b,
                this.c,
                this.x[this.k + 8],
                this.S32,
                2272392833
              )),
              (this.c = this.HH(
                this.c,
                this.d,
                this.a,
                this.b,
                this.x[this.k + 11],
                this.S33,
                1839030562
              )),
              (this.b = this.HH(
                this.b,
                this.c,
                this.d,
                this.a,
                this.x[this.k + 14],
                this.S34,
                4259657740
              )),
              (this.a = this.HH(
                this.a,
                this.b,
                this.c,
                this.d,
                this.x[this.k + 1],
                this.S31,
                2763975236
              )),
              (this.d = this.HH(
                this.d,
                this.a,
                this.b,
                this.c,
                this.x[this.k + 4],
                this.S32,
                1272893353
              )),
              (this.c = this.HH(
                this.c,
                this.d,
                this.a,
                this.b,
                this.x[this.k + 7],
                this.S33,
                4139469664
              )),
              (this.b = this.HH(
                this.b,
                this.c,
                this.d,
                this.a,
                this.x[this.k + 10],
                this.S34,
                3200236656
              )),
              (this.a = this.HH(
                this.a,
                this.b,
                this.c,
                this.d,
                this.x[this.k + 13],
                this.S31,
                681279174
              )),
              (this.d = this.HH(
                this.d,
                this.a,
                this.b,
                this.c,
                this.x[this.k],
                this.S32,
                3936430074
              )),
              (this.c = this.HH(
                this.c,
                this.d,
                this.a,
                this.b,
                this.x[this.k + 3],
                this.S33,
                3572445317
              )),
              (this.b = this.HH(
                this.b,
                this.c,
                this.d,
                this.a,
                this.x[this.k + 6],
                this.S34,
                76029189
              )),
              (this.a = this.HH(
                this.a,
                this.b,
                this.c,
                this.d,
                this.x[this.k + 9],
                this.S31,
                3654602809
              )),
              (this.d = this.HH(
                this.d,
                this.a,
                this.b,
                this.c,
                this.x[this.k + 12],
                this.S32,
                3873151461
              )),
              (this.c = this.HH(
                this.c,
                this.d,
                this.a,
                this.b,
                this.x[this.k + 15],
                this.S33,
                530742520
              )),
              (this.b = this.HH(
                this.b,
                this.c,
                this.d,
                this.a,
                this.x[this.k + 2],
                this.S34,
                3299628645
              )),
              (this.a = this.II(
                this.a,
                this.b,
                this.c,
                this.d,
                this.x[this.k],
                this.S41,
                4096336452
              )),
              (this.d = this.II(
                this.d,
                this.a,
                this.b,
                this.c,
                this.x[this.k + 7],
                this.S42,
                1126891415
              )),
              (this.c = this.II(
                this.c,
                this.d,
                this.a,
                this.b,
                this.x[this.k + 14],
                this.S43,
                2878612391
              )),
              (this.b = this.II(
                this.b,
                this.c,
                this.d,
                this.a,
                this.x[this.k + 5],
                this.S44,
                4237533241
              )),
              (this.a = this.II(
                this.a,
                this.b,
                this.c,
                this.d,
                this.x[this.k + 12],
                this.S41,
                1700485571
              )),
              (this.d = this.II(
                this.d,
                this.a,
                this.b,
                this.c,
                this.x[this.k + 3],
                this.S42,
                2399980690
              )),
              (this.c = this.II(
                this.c,
                this.d,
                this.a,
                this.b,
                this.x[this.k + 10],
                this.S43,
                4293915773
              )),
              (this.b = this.II(
                this.b,
                this.c,
                this.d,
                this.a,
                this.x[this.k + 1],
                this.S44,
                2240044497
              )),
              (this.a = this.II(
                this.a,
                this.b,
                this.c,
                this.d,
                this.x[this.k + 8],
                this.S41,
                1873313359
              )),
              (this.d = this.II(
                this.d,
                this.a,
                this.b,
                this.c,
                this.x[this.k + 15],
                this.S42,
                4264355552
              )),
              (this.c = this.II(
                this.c,
                this.d,
                this.a,
                this.b,
                this.x[this.k + 6],
                this.S43,
                2734768916
              )),
              (this.b = this.II(
                this.b,
                this.c,
                this.d,
                this.a,
                this.x[this.k + 13],
                this.S44,
                1309151649
              )),
              (this.a = this.II(
                this.a,
                this.b,
                this.c,
                this.d,
                this.x[this.k + 4],
                this.S41,
                4149444226
              )),
              (this.d = this.II(
                this.d,
                this.a,
                this.b,
                this.c,
                this.x[this.k + 11],
                this.S42,
                3174756917
              )),
              (this.c = this.II(
                this.c,
                this.d,
                this.a,
                this.b,
                this.x[this.k + 2],
                this.S43,
                718787259
              )),
              (this.b = this.II(
                this.b,
                this.c,
                this.d,
                this.a,
                this.x[this.k + 9],
                this.S44,
                3951481745
              )),
              (this.a = this.AddUnsigned(this.a, this.AA)),
              (this.b = this.AddUnsigned(this.b, this.BB)),
              (this.c = this.AddUnsigned(this.c, this.CC)),
              (this.d = this.AddUnsigned(this.d, this.DD));
          return (
            this.WordToHex(this.a) +
            this.WordToHex(this.b) +
            this.WordToHex(this.c) +
            this.WordToHex(this.d)
          ).toLowerCase();
        }),
        (t.x = Array()),
        (t.S11 = 7),
        (t.S12 = 12),
        (t.S13 = 17),
        (t.S14 = 22),
        (t.S21 = 5),
        (t.S22 = 9),
        (t.S23 = 14),
        (t.S24 = 20),
        (t.S31 = 4),
        (t.S32 = 11),
        (t.S33 = 16),
        (t.S34 = 23),
        (t.S41 = 6),
        (t.S42 = 10),
        (t.S43 = 15),
        (t.S44 = 21),
        (t.RotateLeft = function (t, i) {
          return (t << i) | (t >>> (32 - i));
        }),
        (t.F = function (t, i, e) {
          return (t & i) | (~t & e);
        }),
        (t.G = function (t, i, e) {
          return (t & e) | (i & ~e);
        }),
        (t.H = function (t, i, e) {
          return t ^ i ^ e;
        }),
        (t.I = function (t, i, e) {
          return i ^ (t | ~e);
        }),
        t
      );
    })(),
    H = "production";
  function getPage() {
    var t = getCurrentPages() || "";
    return t[t.length - 1] || "";
  }
  function getCurrentPageUrlWithArgs(t) {
    var i = "/";
    try {
      var e = getPage();
      if (!e) return e;
      var s,
        r = e.route,
        n = e.options;
      for (var o in ((s = e.options), (i = r + "?"), n)) {
        if ("share" !== t || "txsrShareInfoSdk" !== o)
          if (v(o)) if (s[o]) i += o + "=" + n[o] + "&";
      }
      i = i.substring(0, i.length - 1);
    } catch (t) {
      console.error("getCurrentPageUrlWithArgs error", t);
    }
    return i;
  }
  function P(t) {
    try {
      var i = getPage();
      if (!i) return i;
      i.options;
      return i.options[t] || "";
    } catch (t) {
      console.error("getCurrentPageKey error", t);
    }
    return "/";
  }
  function E() {
    var t = getPage();
    try {
      var i = __wxConfig.global.window.navigationBarTitleText;
      return (
        (t
          ? (__wxConfig.page[t.route + ".html"].window || {})
              .navigationBarTitleText
          : "") ||
        i ||
        "\u672a\u77e5"
      );
    } catch (t) {}
    return "\u672a\u77e5";
  }
  function N() {
    return (
      "devtools" ===
      (function () {
        try {
          return __wxConfig.platform;
        } catch (t) {
          console.error("getEnv failed: ", t);
        }
        return "";
      })()
    );
  }
  function M(t, i, s) {
    try {
      var r = t[0],
        n = void 0 === r ? {} : r;
      if (n)
        switch (n.type) {
          case "tap":
          case "change":
          case "longpress":
          case "confirm":
            var o = (n.currentTarget || {}).dataset,
              h = void 0 === o ? {} : o,
              a = this || {},
              c = a.is,
              u = void 0 === c ? "" : c;
            a.data;
            i(
              "element",
              e(
                {
                  is_sdk_auto_track: !0,
                  is: u,
                  type: n.type,
                  element_id: "#" + s,
                },
                h
              )
            );
        }
    } catch (t) {
      console.error("elementEventTrack error", t);
    }
  }
  function q() {
    var t,
      i = "" + H,
      e = (getPage() || {}).route || "";
    try {
      t = wx.getStorageSync(A.SDK + "_" + i);
    } catch (t) {
      console.error("CacheManager.get error", t);
    }
    var s = t.USER_INFO || {},
      r = s.local_id,
      n = s.txsr_from_share_info,
      o = void 0 === n ? {} : n,
      h = o.mi,
      a = void 0 === h ? "" : h,
      c = o.d,
      u = void 0 === c ? 0 : c,
      d = o.o,
      p = void 0 === d ? "" : d,
      f = R.init(r + e),
      l = "" !== a && f === a ? u : u + 1;
    return (
      (a = R.init(r + e)),
      0 === u && (p = a),
      console.log("ooooo", p, u),
      JSON.stringify({
        mi: a,
        d: l,
        o: p,
      })
    );
  }
  var j = function () {},
    z = {},
    L = {},
    K = function () {
      return new Date().getTime();
    };
  var W = function (t, i, e, s) {
      return function (r) {
        return (function (t, i, e, s, r) {
          if (
            (F(t, "onLoad", function (t, i) {
              t(), (this.lauchTime = K());
            }),
            F(
              t,
              "onShow",
              function (t) {
                var s = this,
                  r = function () {
                    s.showTime = K();
                    var t =
                      P.call(s, "room_id") ||
                      P.call(s, "roomId") ||
                      P.call(s, "roomid");
                    t &&
                      e({
                        room_id: t,
                      }),
                      i("browse_wxapp_page", {
                        is_sdk_auto_track: !0,
                        refer_page: L.route,
                        is_newly_open: !z[s.route],
                      }),
                      (z[s.route] = !0),
                      (L = s);
                  };
                t().then(r).catch(r);
              },
              !0
            ),
            F(t, "onHide", function (t) {
              t();
              var e = this.showTime ? K() - this.showTime : 0;
              (e = e > 144e5 ? 0 : e),
                (this.showTime = 0),
                i("leave_wxapp_page", {
                  is_sdk_auto_track: !0,
                  stay_time: e,
                });
            }),
            F(t, "onUnload", function (t) {
              t();
              var e = this.showTime ? K() - this.showTime : 0;
              i("leave_wxapp_page", {
                is_sdk_auto_track: !0,
                stay_time: (e = e > 144e5 ? 0 : e),
              });
            }),
            F(t, "onPullDownRefresh", function (t) {
              t(),
                i("page_pull_down_refresh", {
                  is_sdk_auto_track: !0,
                });
            }),
            F(t, "onReachBottom", function (t) {
              t(),
                i("page_reach_bottom", {
                  is_sdk_auto_track: !0,
                });
            }),
            "function" == typeof t.onShareAppMessage)
          ) {
            var n = t.onShareAppMessage || j,
              o = t.onShareTimeline || j;
            (t.onShareAppMessage = function (t) {
              void 0 === t && (t = {});
              var e = n.call(this, t) || {};
              try {
                var s = e.path || getCurrentPageUrlWithArgs.call(this, "share");
                -1 === s.indexOf("?")
                  ? (s += "?")
                  : "&" !== s.slice(-1) && (s += "&");
                var o = void 0,
                  h = void 0;
                r &&
                  ((o = q()),
                  (h = JSON.parse(o)),
                  (s = s + "txsrShareInfoSdk=" + encodeURIComponent(o))),
                  i("page_share_app_message", {
                    is_sdk_auto_track: !0,
                    from_type: t.from || "\u672a\u77e5",
                    share_to: "friends",
                    share_path: s,
                    share_title: e.title,
                    share_image_url: e.imageUrl,
                    txsr_share_info_sdk: h,
                  }),
                  (e.path = s);
              } catch (t) {
                console.error("onShareAppMessage error", t);
              }
              return e;
            }),
              (t.onShareTimeline = function (t) {
                void 0 === t && (t = {});
                var e = o.call(this, t) || {};
                try {
                  var s =
                      e.path || getCurrentPageUrlWithArgs.call(this, "share"),
                    n = e.query || "";
                  -1 === s.indexOf("?")
                    ? (s += "?")
                    : "&" !== s.slice(-1) && (s += "&");
                  var h = void 0,
                    a = void 0;
                  r &&
                    ((h = q()),
                    (a = JSON.parse(h)),
                    (s = s + "txsrShareInfoSdk=" + encodeURIComponent(h))),
                    i("page_share_app_message", {
                      is_sdk_auto_track: !0,
                      from_type: t.from || "\u672a\u77e5",
                      share_to: "timeline",
                      query: n,
                      share_path: s,
                      share_title: e.title,
                      share_image_url: e.imageUrl,
                      txsr_share_info_sdk: a,
                    }),
                    (e.path = s);
                } catch (t) {
                  console.error("onShareAppMessage error", t);
                }
                return e;
              });
          }
          return (
            s &&
              Object.entries(t)
                .filter(function (t) {
                  var i = t[0];
                  t[1];
                  return ![
                    "onLoad",
                    "onShow",
                    "onReady",
                    "onHide",
                    "onUnload",
                    "onPullDownRefresh",
                    "onReachBottom",
                    "onPageScroll",
                    "onShareAppMessage",
                    "onResize",
                    "onTabItemTap",
                  ].includes(i);
                })
                .forEach(function (e) {
                  var s = e[0];
                  "function" == typeof e[1] &&
                    F(t, s, function (t) {
                      for (
                        var e = arguments, r = [], n = 1;
                        n < arguments.length;
                        n++
                      )
                        r[n - 1] = e[n];
                      return M.call(this, r, i, s), t();
                    });
                }),
            t
          );
        })(r, t, i, e, s);
      };
    },
    B = function () {},
    J = {},
    V = {},
    Q = function () {
      return new Date().getTime();
    };
  var Z = function (t, i, e, s) {
      return function (r) {
        return (function (t, i, e, s, r) {
          try {
            if (
              ((t.methods = t.methods || {}),
              F(t.methods, "onLoad", function (t, i) {
                t(), (this.lauchTime = Q());
              }),
              F(
                t.methods,
                "onShow",
                function (t) {
                  var s = this,
                    r = function () {
                      s.showTime = Q();
                      var t =
                        P.call(s, "room_id") ||
                        P.call(s, "roomId") ||
                        P.call(s, "roomid");
                      t &&
                        e({
                          room_id: t,
                        }),
                        i("browse_wxapp_page", {
                          is_sdk_auto_track: !0,
                          refer_page: V.route,
                          is_newly_open: !J[s.route],
                        }),
                        (J[s.route] = !0),
                        (V = s);
                    };
                  t().then(r).catch(r);
                },
                !0
              ),
              F(t.methods, "onUnload", function (t) {
                t();
                var e = this.showTime ? Q() - this.showTime : 0;
                i("leave_wxapp_page", {
                  is_sdk_auto_track: !0,
                  stay_time: (e = e > 144e5 ? 0 : e),
                });
              }),
              F(t.methods, "onPullDownRefresh", function (t) {
                t(),
                  i("page_pull_down_refresh", {
                    is_sdk_auto_track: !0,
                  });
              }),
              F(t.methods, "onReachBottom", function (t) {
                t(),
                  i("page_reach_bottom", {
                    is_sdk_auto_track: !0,
                  });
              }),
              F(t.methods, "onHide", function (t) {
                t();
                var e = this.showTime ? Q() - this.showTime : 0;
                (e = e > 144e5 ? 0 : e),
                  (this.showTime = 0),
                  i("leave_wxapp_page", {
                    is_sdk_auto_track: !0,
                    stay_time: e,
                  });
              }),
              "function" == typeof t.methods.onShareAppMessage)
            ) {
              var n = t.methods.onShareAppMessage || B,
                o = t.methods.onShareTimeline || B;
              (t.methods.onShareAppMessage = function (t) {
                void 0 === t && (t = {});
                var e = n.call(this, t) || {};
                try {
                  var s =
                    e.path || getCurrentPageUrlWithArgs.call(this, "share");
                  -1 === s.indexOf("?")
                    ? (s += "?")
                    : "&" !== s.slice(-1) && (s += "&");
                  var o = void 0,
                    h = void 0;
                  r &&
                    ((o = q()),
                    (h = JSON.parse(o)),
                    (s = s + "txsrShareInfoSdk=" + encodeURIComponent(o))),
                    i("page_share_app_message", {
                      is_sdk_auto_track: !0,
                      from_type: t.from || "\u672a\u77e5",
                      share_to: "friends",
                      share_path: s,
                      share_title: e.title,
                      share_image_url: e.imageUrl,
                      txsr_share_info_sdk: h,
                    }),
                    (e.path = s);
                } catch (t) {
                  console.error("onShareAppMessage error", t);
                }
                return e;
              }),
                (t.methods.onShareTimeline = function (t) {
                  void 0 === t && (t = {});
                  var e = o.call(this, t) || {};
                  try {
                    var s =
                        e.path || getCurrentPageUrlWithArgs.call(this, "share"),
                      n = e.query || "";
                    -1 === s.indexOf("?")
                      ? (s += "?")
                      : "&" !== s.slice(-1) && (s += "&");
                    var h = void 0,
                      a = void 0;
                    r &&
                      ((h = q()),
                      (a = JSON.parse(h)),
                      (s = s + "txsrShareInfoSdk=" + encodeURIComponent(h))),
                      i("page_share_app_message", {
                        is_sdk_auto_track: !0,
                        from_type: t.from || "\u672a\u77e5",
                        share_to: "timeline",
                        share_path: s,
                        query: n,
                        share_title: e.title,
                        share_image_url: e.imageUrl,
                        txsr_share_info_sdk: a,
                      }),
                      (e.path = s);
                  } catch (t) {
                    console.error("onShareAppMessage error", t);
                  }
                  return e;
                });
            }
            t.methods &&
              s &&
              Object.entries(t.methods)
                .filter(function (t) {
                  var i = t[0];
                  t[1];
                  return ![
                    "onLoad",
                    "onShow",
                    "onReady",
                    "onHide",
                    "onUnload",
                    "onPullDownRefresh",
                    "onReachBottom",
                    "onPageScroll",
                    "onShareAppMessage",
                    "onResize",
                    "onTabItemTap",
                    "observer",
                  ].includes(i);
                })
                .forEach(function (e) {
                  var s = e[0];
                  "function" == typeof e[1] &&
                    F(t.methods, s, function (t) {
                      for (
                        var e = arguments, r = [], n = 1;
                        n < arguments.length;
                        n++
                      )
                        r[n - 1] = e[n];
                      return M.call(this, r, i, s), t();
                    });
                });
          } catch (t) {
            console.error("componentProxy error", t);
          }
          return t;
        })(r, t, i, e, s);
      };
    },
    $ = {},
    X = function (t) {
      return t;
    },
    Y = function () {
      return new Date().getTime();
    },
    tt = (function (t) {
      function s() {
        var i = t.call(this) || this;
        return (
          (i.name = "mp"),
          (i.component = X),
          (i.page = X),
          (i.proxySetNavigation = function () {
            try {
              var t = wx.setNavigationBarTitle;
              Object.defineProperty(wx, "setNavigationBarTitle", {
                get: function () {
                  return function (i) {
                    void 0 === i && (i = {});
                    try {
                      var e = getPage();
                      __wxConfig.page = __wxConfig.page || {};
                      var s = __wxConfig.page[e.route + ".html"];
                      s && ((s.window || {}).navigationBarTitleText = i.title);
                    } catch (t) {}
                    t.call(this, i);
                  };
                },
              });
            } catch (t) {
              console.warn("proxySetNavigation failed", t);
            }
          }),
          (i.request = function (t, e) {
            var s = function (t) {
              return void 0 === t && (t = {}), 0 === t.code;
            };
            return (
              "function" == typeof i.option.onUploaded &&
                (s = i.option.onUploaded),
              new Promise(function (i, r) {
                wx.request({
                  url: e.url,
                  method: e.method || "POST",
                  data: t,
                  success: function (t) {
                    void 0 === t && (t = {});
                    var e = t.data,
                      r = void 0 === e ? {} : e,
                      n = s(r);
                    i({
                      success: void 0 === n || n,
                      data: r.data || r,
                      msg: r.errMsg,
                    });
                  },
                  fail: function (t) {
                    r({
                      success: !1,
                      data: void 0,
                      msg: t.errMsg,
                    });
                  },
                });
              })
            );
          }),
          (i.defaultOptions = {
            autoProxy: !1,
            autoStart: !0,
            debug: !1,
            usePlugin: !1,
            proxyPage: !1,
            proxyComponent: !1,
            autoTrack: !1,
            trackApp: !0,
            openSdkShareDepth: !1,
            installFrom: "",
            openAutoTrackOpenId: !1,
          }),
          i.proxySetNavigation(),
          i
        );
      }
      return (
        i(s, t),
        (s.prototype.getCacheManager = function () {
          var t = "" + this.env,
            i = function (i) {
              return i + "_" + t;
            };
          return {
            get: function (t) {
              var e;
              try {
                e = wx.getStorageSync(i(t));
              } catch (t) {
                return console.error("CacheManager.get error", t), e;
              }
              return e;
            },
            set: function (t, e) {
              try {
                wx.setStorageSync(i(t), e);
              } catch (t) {
                return console.error("CacheManager.set error", t), !1;
              }
              return !0;
            },
          };
        }),
        (s.prototype.proxyInitialize = function () {
          return (tt.options = this.option), this.trackApp(), !0;
        }),
        (s.prototype.trackApp = function () {
          var t = this,
            i = !1;
          wx.onAppShow(function (s) {
            void 0 === s && (s = {});
            var r = s,
              n = r.query,
              o = void 0 === n ? {} : n,
              h = r.path,
              a = r.shareTicket,
              c = t.option.openSdkShareDepth,
              u = t.option.openAutoTrackOpenId,
              d = t.option.appid,
              p = t.cacheManager.get(A.SDK) || {},
              f = (function (t) {
                void 0 === t && (t = {});
                var i = {};
                if (t.scene) {
                  try {
                    var s = decodeURIComponent(t.scene);
                    (s = s.replace("?", "").trim())
                      .split("&")
                      .map(function (t) {
                        if (t) {
                          var e = t.split("="),
                            s = e[0],
                            r = e[1];
                          v(s) && (i[s] = void 0 === r || r);
                        }
                      });
                  } catch (t) {
                    console.error(t);
                  }
                  t = e(e({}, t), i);
                }
                return t;
              })(o || {}),
              l = f.txsrShareInfoSdk || "{}",
              g = t,
              _ = p.USER_INFO,
              x = (_.open_id, _.union_id, _.get_auto_id_time);
            if (f && "{}" !== JSON.stringify(f)) {
              var m = "?";
              Object.entries(f).forEach(function (t, i) {
                var e = t[0],
                  s = t[1];
                m += (0 === i ? "" : "&") + e + "=" + s;
              }),
                (h += m);
            }
            if (
              (t.setChan(
                e(e({}, f), {
                  chan_wxapp_scene: s.scene,
                  chan_refer_app_id: (s.referrerInfo || {}).appId,
                })
              ),
              f.chan_id &&
                t.setChan({
                  chan_id: f.chan_id,
                }),
              !i)
            ) {
              if (((i = !0), c && "{}" !== l))
                try {
                  t.setUser({
                    txsr_from_share_info: JSON.parse(decodeURIComponent(l)),
                  });
                } catch (t) {}
              t.option.trackApp &&
                t.track("app_launch", {
                  is_sdk_auto_track: !0,
                  page: h,
                });
            }
            if (c || (u && (!x || Y() - x >= 2592e5)))
              try {
                wx.login({
                  success: function (t) {
                    var i = t.code;
                    wx.request({
                      url:
                        "https://zhls.qq.com/wxlogin/getOpenId?appid=" +
                        d +
                        "&js_code=" +
                        i,
                      data: {},
                      header: {
                        "content-type": "json",
                      },
                      success: function (t) {
                        var i = t.data,
                          e = i.openId,
                          s = i.unionId,
                          r = void 0 === s ? "" : s;
                        g.setUser({
                          open_id: e,
                          union_id: r,
                          get_auto_id_time: Y(),
                        }),
                          c &&
                            a &&
                            e &&
                            wx.getShareInfo({
                              shareTicket: a,
                              success: function (t) {
                                var i = t.iv,
                                  s = t.encryptedData;
                                wx.request({
                                  url:
                                    "https://zhls.qq.com/wxlogin/convertData",
                                  data: {
                                    appid: d,
                                    openid: e,
                                    data: s,
                                    iv: i,
                                  },
                                  header: {
                                    "content-type": "json",
                                  },
                                  success: function (t) {
                                    var i = (t && t.data).openGId;
                                    i &&
                                      g.setChan({
                                        openGId: i,
                                      });
                                  },
                                });
                              },
                              fail: function (t) {},
                            });
                      },
                    });
                  },
                });
              } catch (i) {
                t.errorHandle(i);
              }
            t.option.trackApp &&
              t.track("app_show", {
                is_sdk_auto_track: !0,
                page: h,
              });
          }),
            wx.onAppHide(function () {
              t.option.trackApp &&
                t.track("exit_wxapp", {
                  is_sdk_auto_track: !0,
                });
            });
        }),
        (s.prototype.errorHandle = function (t) {
          try {
            var i = this.getServerUrl();
            this.request(
              {
                type: "sdk api exec error",
                props: {
                  sr_sdk_version: this.version,
                  system_info: this.getSystemInfo(),
                  framework_info: this.getFrameworkInfo(),
                  message: t,
                  stack: t,
                },
              },
              {
                url: i,
                method: "POST",
              }
            );
          } catch (t) {
            console.log("errorHandle error", t);
          }
        }),
        (s.prototype.getSystemInfo = function () {
          try {
            return wx.getSystemInfoSync();
          } catch (t) {
            return {};
          }
        }),
        (s.prototype.getFrameworkInfo = function () {
          var t, i;
          try {
            if (
              (process && process.env && process.env.TARO_ENV && (t = "taro"),
              this.option.installFrom)
            ) {
              var e = String(this.option.installFrom).toLowerCase(),
                s = /^((taro)|(uni[\-]?app)|(chameleon)|(wepy)|(mpvue))(@v?([\S]*))?/g.exec(
                  e
                );
              s &&
                s[1] &&
                ("taro" === t && s[2]
                  ? (i = s[8])
                  : "taro" !== t &&
                    ((i = s[8]),
                    (t = s[3]
                      ? "uni-app"
                      : s[4] || s[5] || s[6] || "unknown")));
            }
          } catch (i) {
            t = "unknown";
          }
          return {
            framework: t,
            version: i,
          };
        }),
        (s.prototype.getPageInfo = function () {
          var t = getCurrentPageUrlWithArgs(),
            i = getPage() || {},
            e = E,
            s = (i.data || {}).title || i.title;
          try {
            void 0 === s &&
              t &&
              !$[t] &&
              (($[t] = !0),
              console.warn(
                "\u9875\u9762[" +
                  t +
                  "]\u6ca1\u6709\u5b9e\u73b0 title \u5c5e\u6027\uff0c\u4f1a\u5bfc\u81f4\u90e8\u5206\u673a\u578b\u4e0b\u6536\u96c6\u4e0d\u5230\u9875\u9762\u6807\u9898!"
              )),
              "string" == typeof s &&
                (e = function () {
                  return s;
                }),
              "function" == typeof s && (e = s);
          } catch (t) {
            console.error("curPage.data.title \u6267\u884c\u9519\u8bef", t);
          }
          return {
            page: t,
            page_title: s || e(),
          };
        }),
        (s.prototype.isDev = function () {
          return N();
        }),
        (s.create = function () {
          var t;
          try {
            t = new s();
          } catch (i) {
            (t = s.prototype), console.error("new sr_sdk failed", i);
          }
          return t;
        }),
        s
      );
    })(U).create(),
    it = Page,
    et = Component;
  return (
    (Page = function (t) {
      if (tt.option.proxyPage) {
        var i = W(
          tt.track.bind(tt),
          tt.setChan.bind(tt),
          tt.option.autoTrack,
          tt.option.openSdkShareDepth
        );
        it(i(t));
      } else it(t);
    }),
    (Component = function (t) {
      if (tt.option.proxyComponent) {
        var i = Z(
          tt.track.bind(tt),
          tt.setChan.bind(tt),
          tt.option.autoTrack,
          tt.option.openSdkShareDepth
        );
        return et(i(t));
      }
      return et(t);
    }),
    tt
  );
});
