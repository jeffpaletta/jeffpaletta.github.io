(window.webpackJsonp = window.webpackJsonp || []).push([
  [0], {
    118: function(e, t, r) {
      "use strict";
      r.r(t);
      var n, a, o, i, c, s, l, u, p = r(0),
        d = r.n(p),
        b = r(16),
        h = r.n(b),
        O = (r(67), r(3)),
        m = r(4),
        f = r(7),
        j = r(5),
        y = r(6),
        v = r(2),
        g = Object(v.b)("store")(n = Object(v.c)(n = function(e) {
          function t() {
            return Object(O.a)(this, t), Object(f.a)(this, Object(j.a)
              (t).apply(this, arguments))
          }
          return Object(y.a)(t, e), Object(m.a)(t, [{
            key: "render",
            value: function() {
              var e = this.props.store.ui__menuOpen;
              return d.a.createElement("iframe", {
                className: e ? "iframe--blur" : "",
                src: "https://docs.google.com/spreadsheets/d/1MiZ-yTn6SbXEX41W7gobUX0fNDux58Todra6s-skml4/edit?usp=sharing",
                frameBorder: "0"
              })
            }
          }]), t
        }(p.Component)) || n) || n,
        C = r(27),
        k = Object(v.b)("store")(a = Object(v.c)(a = function(e) {
          function t() {
            return Object(O.a)(this, t), Object(f.a)(this, Object(j.a)
              (t).apply(this, arguments))
          }
          return Object(y.a)(t, e), Object(m.a)(t, [{
            key: "render",
            value: function() {
              var e = this.props.store.ui__menuOpen;
              return d.a.createElement("div", {
                className: e ? "draw-interface" : "draw-interface draw-interface--hide"
              }, d.a.createElement(x, null), d.a.createElement(
                w, null))
            }
          }]), t
        }(p.Component)) || a) || a,
        w = Object(v.b)("store")(o = Object(v.c)(o = function(e) {
          function t(e) {
            var r;
            return Object(O.a)(this, t), (r = Object(f.a)(this,
                Object(j.a)(t).call(this, e))).grid = [], r.count = 0,
              window.grid = Object(C.a)(Object(C.a)(r)), r
          }
          return Object(y.a)(t, e), Object(m.a)(t, [{
            key: "componentDidMount",
            value: function() {
              this.props.store.constructGrid()
            }
          }, {
            key: "initAnimation",
            value: function() {
              var e = document.getElementsByClassName(
                  "grid-cell"),
                t = document.getElementsByClassName(
                  "color-swatch");
              this.colors = t, this.count = 0,
                requestAnimationFrame(this.loop.bind(this, e))
            }
          }, {
            key: "loop",
            value: function(e) {
              this.count >= e.length || (this.colors[3 * this
                  .count % 16].click(), e[this.count].click(),
                this.count++, requestAnimationFrame(this.loop
                  .bind(this, e)))
            }
          }, {
            key: "render",
            value: function() {
              if (!this.props.store.gridReady) return null;
              var e = this.props.store,
                t = e.ROWNUM,
                r = e.COLNUM,
                n = (e.ui__menuOpen, new Array(t).fill(void 0));
              new Array(r).fill(void 0);
              return d.a.createElement("div", {
                className: "grid"
              }, d.a.createElement(E, null), d.a.createElement(
                "div", {
                  className: "grid__inner"
                }, n.map(function(e, t) {
                  return d.a.createElement(N, {
                    i: t,
                    key: "gr-".concat(t)
                  })
                })))
            }
          }]), t
        }(p.Component)) || o) || o,
        E = function(e) {
          function t() {
            return Object(O.a)(this, t), Object(f.a)(this, Object(j.a)(t)
              .apply(this, arguments))
          }
          return Object(y.a)(t, e), Object(m.a)(t, [{
            key: "render",
            value: function() {
              return d.a.createElement("div", {
                className: "grid-header header"
              }, d.a.createElement("div", {
                className: "icon-wrap"
              }, d.a.createElement(_, null)), d.a.createElement(
                "h1", null, "Nicky Tesla [PORTFOLIO]"))
            }
          }]), t
        }(p.Component),
        _ = function(e) {
          function t() {
            return Object(O.a)(this, t), Object(f.a)(this, Object(j.a)(t)
              .apply(this, arguments))
          }
          return Object(y.a)(t, e), Object(m.a)(t, [{
            key: "render",
            value: function() {
              return d.a.createElement("div", {
                className: "spreadsheet-icon"
              }, d.a.createElement("span", null))
            }
          }]), t
        }(p.Component),
        N = Object(v.b)("store")(i = Object(v.c)(i = function(e) {
          function t() {
            return Object(O.a)(this, t), Object(f.a)(this, Object(j.a)
              (t).apply(this, arguments))
          }
          return Object(y.a)(t, e), Object(m.a)(t, [{
            key: "render",
            value: function() {
              var e = this.props,
                t = e.store.COLNUM,
                r = e.i,
                n = new Array(t).fill(void 0);
              return d.a.createElement("div", {
                className: "grid-row"
              }, n.map(function(e, t) {
                return d.a.createElement(D, {
                  key: "cell-".concat(r).concat(t),
                  val: e,
                  i: r,
                  j: t
                })
              }))
            }
          }]), t
        }(p.Component)) || i) || i,
        D = Object(v.b)("store")(c = Object(v.c)(c = function(e) {
          function t() {
            var e, r;
            Object(O.a)(this, t);
            for (var n = arguments.length, a = new Array(n), o = 0; o <
              n; o++) a[o] = arguments[o];
            return (r = Object(f.a)(this, (e = Object(j.a)(t)).call.apply(
              e, [this].concat(a)))).handleClick = function() {
              var e = r.props,
                t = e.i,
                n = e.j;
              r.props.store.registerCell(t, n)
            }, r
          }
          return Object(y.a)(t, e), Object(m.a)(t, [{
            key: "_getStyles",
            value: function() {
              var e = this.props,
                t = (e.val, e.store),
                r = t.COLORS,
                n = t.gridContainer,
                a = e.i,
                o = e.j;
              return {
                backgroundColor: r[n["r-".concat(a)][o]]
              }
            }
          }, {
            key: "render",
            value: function() {
              var e = this._getStyles(),
                t = this.props,
                r = t.i,
                n = t.j;
              return d.a.createElement("div", {
                style: e,
                className: "grid-cell r-".concat(r, " c-")
                  .concat(n),
                onClick: this.handleClick
              })
            }
          }]), t
        }(p.Component)) || c) || c,
        M = k,
        A = Object(v.b)("store")(s = Object(v.c)(s = function(e) {
          function t(e) {
            var r;
            return Object(O.a)(this, t), (r = Object(f.a)(this,
              Object(j.a)(t).call(this, e)))._toggle = function() {
              r.props.store.ui__menuOpen || r.props.store.toggleMenu()
            }, r.idx = 0, r
          }
          return Object(y.a)(t, e), Object(m.a)(t, [{
            key: "componentDidMount",
            value: function() {}
          }, {
            key: "_updateBackground",
            value: function() {
              this.idx++;
              var e = this.props.store.COLORS;
              this.idx >= e.length && (this.idx = 0), this.setState({
                backgroundColor: e[this.idx]
              })
            }
          }, {
            key: "render",
            value: function() {
              var e = this.props.store,
                t = e.ui__menuOpen,
                r = e.COLORS,
                n = e.activeColor;
              if (!this.props.store.gridReady) return null;
              var a = {
                backgroundColor: t ? r[n] : "#fff"
              };
              return d.a.createElement("div", {
                className: t ?
                  "draw-button draw-button--open" : "draw-button",
                onClick: this._toggle
              }, d.a.createElement("div", {
                style: a,
                className: "draw-header header"
              }, d.a.createElement("div", {
                className: "icon-wrap"
              }, d.a.createElement(R, null)), d.a.createElement(
                "h1", null, "FILL")), d.a.createElement(F,
                null))
            }
          }]), t
        }(p.Component)) || s) || s,
        R = function() {
          return d.a.createElement("div", {
            className: "color-icon"
          }, d.a.createElement("span", null))
        },
        F = (p.Component, Object(v.b)("store")(l = Object(v.c)(l =
          function(e) {
            function t() {
              return Object(O.a)(this, t), Object(f.a)(this, Object(j
                .a)(t).apply(this, arguments))
            }
            return Object(y.a)(t, e), Object(m.a)(t, [{
              key: "_updateActiveColor",
              value: function(e) {
                this.props.store.updateActiveColor(e)
              }
            }, {
              key: "_renderColors",
              value: function() {
                var e = this,
                  t = this.props.store,
                  r = t.COLORS,
                  n = t.activeColor;
                return r.map(function(t, r) {
                  return d.a.createElement("div", {
                    style: {
                      backgroundColor: t
                    },
                    className: n === r ?
                      "color-swatch color-swatch--active" : "color-swatch",
                    onClick: e._updateActiveColor.bind(
                      e, r)
                  })
                })
              }
            }, {
              key: "render",
              value: function() {
                var e = this.props.store.ui__menuOpen;
                if (!this.props.store.gridReady) return null;
                var t = this._renderColors();
                return d.a.createElement("div", {
                  className: e ?
                    "color-picker color-picker--show" : "color-picker"
                }, t)
              }
            }]), t
          }(p.Component)) || l) || l),
        B = A,
        L = Object(v.b)("store")(u = Object(v.c)(u = function(e) {
          function t() {
            var e, r;
            Object(O.a)(this, t);
            for (var n = arguments.length, a = new Array(n), o = 0; o <
              n; o++) a[o] = arguments[o];
            return (r = Object(f.a)(this, (e = Object(j.a)(t)).call.apply(
              e, [this].concat(a))))._close = function() {
              r.props.store.closeMenu()
            }, r
          }
          return Object(y.a)(t, e), Object(m.a)(t, [{
            key: "render",
            value: function() {
              return this.props.store.gridReady ? d.a.createElement(
                "div", {
                  className: "close-button header",
                  onClick: this._close
                }, d.a.createElement("div", {
                  className: "icon-wrap"
                }, d.a.createElement(S, null)), d.a.createElement(
                  "h1", null, "EXIT")) : null
            }
          }]), t
        }(p.Component)) || u) || u,
        S = function() {
          return d.a.createElement("img", {
            className: "close-icon",
            src: "/images/ex.svg",
            alt: ""
          })
        },
        x = L,
        z = (r(68), function(e) {
          function t() {
            return Object(O.a)(this, t), Object(f.a)(this, Object(j.a)(
              t).apply(this, arguments))
          }
          return Object(y.a)(t, e), Object(m.a)(t, [{
            key: "render",
            value: function() {
              return d.a.createElement("div", {
                className: "App"
              }, d.a.createElement("div", {
                className: "overlay"
              }), d.a.createElement("div", {
                className: "disclaimer"
              }, d.a.createElement("h3", null,
                "**Edits made to the collaborative drawing will be incorporated every minute."
              )), d.a.createElement(g, null), d.a.createElement(
                M, null), d.a.createElement(B, null))
            }
          }]), t
        }(p.Component));
      Boolean("localhost" === window.location.hostname || "[::1]" ===
        window.location.hostname || window.location.hostname.match(
          /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
      var P, I, U, T, G, J, W, V = r(20),
        q = r(8),
        H = (r(69), r(1)),
        K = r(33),
        X = (r(115), new(P = H.d.bound, I = function() {
            function e() {
              Object(O.a)(this, e), Object(V.a)(this, "ready", U, this),
                Object(V.a)(this, "ui__menuOpen", T, this), Object(V.a)
                (this, "grid", G, this), Object(V.a)(this, "gridReady",
                  J, this), Object(V.a)(this, "activeColor", W, this),
                this.COLORS = ["#EFEFEF", "#E6B8AF", "#DD7E6B",
                  "#CC4124", "#A61C01", "#F4CCCB", "#EA9999", "#FF9901",
                  "#FCE5CD", "#FFF2CC", "#FFE599", "#D9E9D3", "#B6D7A8",
                  "#93C47D", "#274E13", "#C9B393", "#A48969", "#EAD1DC"
                ];
              K.initializeApp({
                  apiKey: "AIzaSyB_NzFhXxMSZLh_M1lBntJJS4CrzCMjxcM",
                  authDomain: "portfolio-3d488.firebaseapp.com",
                  databaseURL: "https://portfolio-3d488.firebaseio.com",
                  projectId: "portfolio-3d488",
                  storageBucket: "portfolio-3d488.appspot.com",
                  messagingSenderId: "946387219169"
                }), this.database = K.database(), this.ROWNUM = 142,
                this.COLNUM = 15, this.gridContainer = {}
            }
            return Object(m.a)(e, [{
              key: "constructGrid",
              value: function() {
                for (var e = this.ROWNUM, t = this.COLNUM, r =
                    0; r < e; r++) {
                  this.gridContainer["r-".concat(r)] = Object(H
                    .k)(new Array(t).fill(0));
                  for (var n = 0; n < t; n++) {
                    this.grid[r] || (this.grid[r] = []), this.grid[
                      r][n] = 0
                  }
                }
                this.listenToDatabase()
              }
            }, {
              key: "registerCell",
              value: function(e, t) {
                this.gridContainer["r-".concat(e)][t] = this.activeColor,
                  this.updateDatabase(e, t)
              }
            }, {
              key: "openMenu",
              value: function() {
                this.ui__menuOpen = !0
              }
            }, {
              key: "closeMenu",
              value: function() {
                this.ui__menuOpen = !1
              }
            }, {
              key: "toggleMenu",
              value: function() {
                this.ui__menuOpen = !this.ui__menuOpen
              }
            }, {
              key: "updateActiveColor",
              value: function(e) {
                this.activeColor = e
              }
            }, {
              key: "updateDatabase",
              value: function(e, t) {
                this.database.ref("grid/grid/".concat(e, "/").concat(
                  t)).set(this.activeColor), this.database.ref(
                  "clicks/totalClicks").transaction(function(
                  e) {
                  return (e || 0) + 1
                }), this.database.ref("clicks/clicksByColor/"
                  .concat(this.activeColor)).transaction(
                  function(e) {
                    return (e || 0) + 1
                  })
              }
            }, {
              key: "listenToDatabase",
              value: function() {
                var e = K.database().ref("grid/grid"),
                  t = this;
                e.once("value").then(function(e) {
                  e.val().forEach(t.updateRow), t.gridReady = !
                    0
                }), e.on("child_changed", function(e) {
                  var r = e.key,
                    n = e.val();
                  t.gridContainer["r-".concat(r)].forEach(
                    function(e, a) {
                      var o = n[a];
                      t.gridContainer["r-".concat(r)][a] =
                        o
                    })
                })
              }
            }, {
              key: "updateRow",
              value: function(e, t) {
                this.gridContainer["r-".concat(t)] = Object(H.k)
                  (e)
              }
            }, {
              key: "updateRowVal",
              value: function(e, t) {
                this.gridContainer["r-".concat(e)][t] = this.activeColor
              }
            }]), e
          }(), U = Object(q.a)(I.prototype, "ready", [H.k], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
              return !0
            }
          }), T = Object(q.a)(I.prototype, "ui__menuOpen", [H.k], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
              return !1
            }
          }), G = Object(q.a)(I.prototype, "grid", [H.k], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
              return []
            }
          }), J = Object(q.a)(I.prototype, "gridReady", [H.k], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
              return !1
            }
          }), W = Object(q.a)(I.prototype, "activeColor", [H.k], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function() {
              return 0
            }
          }), Object(q.a)(I.prototype, "constructGrid", [H.d], Object.getOwnPropertyDescriptor(
            I.prototype, "constructGrid"), I.prototype), Object(q.a)(I.prototype,
            "registerCell", [H.d], Object.getOwnPropertyDescriptor(I.prototype,
              "registerCell"), I.prototype), Object(q.a)(I.prototype,
            "openMenu", [H.d], Object.getOwnPropertyDescriptor(I.prototype,
              "openMenu"), I.prototype), Object(q.a)(I.prototype,
            "closeMenu", [H.d], Object.getOwnPropertyDescriptor(I.prototype,
              "closeMenu"), I.prototype), Object(q.a)(I.prototype,
            "toggleMenu", [H.d], Object.getOwnPropertyDescriptor(I.prototype,
              "toggleMenu"), I.prototype), Object(q.a)(I.prototype,
            "updateActiveColor", [H.d], Object.getOwnPropertyDescriptor(
              I.prototype, "updateActiveColor"), I.prototype), Object(q
            .a)(I.prototype, "listenToDatabase", [H.d], Object.getOwnPropertyDescriptor(
            I.prototype, "listenToDatabase"), I.prototype), Object(q.a)
          (I.prototype, "updateRow", [P], Object.getOwnPropertyDescriptor(
            I.prototype, "updateRow"), I.prototype), Object(q.a)(I.prototype,
            "updateRowVal", [H.d], Object.getOwnPropertyDescriptor(I.prototype,
              "updateRowVal"), I.prototype), I));
      h.a.render(d.a.createElement(function() {
          return d.a.createElement(v.a, {
            store: X
          }, d.a.createElement(z, null))
        }, null), document.getElementById("root")), "serviceWorker" in
        navigator && navigator.serviceWorker.ready.then(function(e) {
          e.unregister()
        })
    },
    62: function(e, t, r) {
      e.exports = r(118)
    },
    67: function(e, t, r) {},
    68: function(e, t, r) {}
  },
  [
    [62, 1, 2]
  ]
]);
//# sourceMappingURL=main.30863a49.chunk.js.map
