(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  [function(e, t, n) {
    "use strict";
    e.exports = n(63)
  }, function(e, t, n) {
    "use strict";
    (function(e, r) {
      n.d(t, "b", function() {
        return Pe
      }), n.d(t, "m", function() {
        return pe
      }), n.d(t, "f", function() {
        return x
      }), n.d(t, "l", function() {
        return Fe
      }), n.d(t, "j", function() {
        return Tt
      }), n.d(t, "h", function() {
        return ft
      }), n.d(t, "i", function() {
        return yt
      }), n.d(t, "k", function() {
        return Q
      }), n.d(t, "d", function() {
        return je
      }), n.d(t, "e", function() {
        return ze
      }), n.d(t, "g", function() {
        return Pt
      }), n.d(t, "c", function() {
        return X
      }), n.d(t, "a", function() {
        return C
      });
      var i = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function(e, t) {
        e.__proto__ = t
      } || function(e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
      };
      var o = Object.assign || function(e) {
        for (var t, n = 1, r = arguments.length; n < r; n++)
          for (var i in t = arguments[n]) Object.prototype.hasOwnProperty
            .call(t, i) && (e[i] = t[i]);
        return e
      };

      function a(e) {
        var t = "function" === typeof Symbol && e[Symbol.iterator],
          n = 0;
        return t ? t.call(e) : {
          next: function() {
            return e && n >= e.length && (e = void 0), {
              value: e && e[n++],
              done: !e
            }
          }
        }
      }

      function s(e, t) {
        var n = "function" === typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r, i, o = n.call(e),
          a = [];
        try {
          for (;
            (void 0 === t || t-- > 0) && !(r = o.next()).done;) a.push(
            r.value)
        } catch (s) {
          i = {
            error: s
          }
        } finally {
          try {
            r && !r.done && (n = o.return) && n.call(o)
          } finally {
            if (i) throw i.error
          }
        }
        return a
      }
      var u =
        "An invariant failed, however the error is obfuscated because this is an production build.",
        l = [];
      Object.freeze(l);
      var c = {};

      function f() {
        return ++_e.mobxGuid
      }

      function p(e) {
        throw h(!1, e), "X"
      }

      function h(e, t) {
        if (!e) throw new Error("[mobx] " + (t || u))
      }
      Object.freeze(c);

      function d(e) {
        var t = !1;
        return function() {
          if (!t) return t = !0, e.apply(this, arguments)
        }
      }
      var y = function() {};

      function v(e) {
        return null !== e && "object" === typeof e
      }

      function m(e) {
        if (null === e || "object" !== typeof e) return !1;
        var t = Object.getPrototypeOf(e);
        return t === Object.prototype || null === t
      }

      function g(e, t, n) {
        Object.defineProperty(e, t, {
          enumerable: !1,
          writable: !0,
          configurable: !0,
          value: n
        })
      }

      function _(e, t) {
        var n = "isMobX" + e;
        return t.prototype[n] = !0,
          function(e) {
            return v(e) && !0 === e[n]
          }
      }

      function b(e) {
        return e instanceof Map
      }

      function w(e) {
        return e instanceof Set
      }

      function E(e) {
        return null === e ? null : "object" === typeof e ? "" + e : e
      }
      var C = Symbol("mobx administration"),
        S = function() {
          function e(e) {
            void 0 === e && (e = "Atom@" + f()), this.name = e, this.isPendingUnobservation = !
              1, this.isBeingObserved = !1, this.observers = new Set,
              this.diffValue = 0, this.lastAccessedBy = 0, this.lowestObserverState =
              ee.NOT_TRACKING
          }
          return e.prototype.onBecomeObserved = function() {
            this.onBecomeObservedListeners && this.onBecomeObservedListeners
              .forEach(function(e) {
                return e()
              })
          }, e.prototype.onBecomeUnobserved = function() {
            this.onBecomeUnobservedListeners && this.onBecomeUnobservedListeners
              .forEach(function(e) {
                return e()
              })
          }, e.prototype.reportObserved = function() {
            return xe(this)
          }, e.prototype.reportChanged = function() {
            Se(),
              function(e) {
                if (e.lowestObserverState === ee.STALE) return;
                e.lowestObserverState = ee.STALE, e.observers.forEach(
                  function(t) {
                    t.dependenciesState === ee.UP_TO_DATE && (t.isTracing !==
                        ne.NONE && ke(t, e), t.onBecomeStale()), t.dependenciesState =
                      ee.STALE
                  })
              }(this), Te()
          }, e.prototype.toString = function() {
            return this.name
          }, e
        }(),
        T = _("Atom", S);

      function x(e, t, n) {
        void 0 === t && (t = y), void 0 === n && (n = y);
        var r, i = new S(e);
        return t !== y && qe("onBecomeObserved", i, t, r), n !== y &&
          function(e, t, n) {
            qe("onBecomeUnobserved", e, t, n)
          }(i, n), i
      }
      var k = {
          identity: function(e, t) {
            return e === t
          },
          structural: function(e, t) {
            return Nt(e, t)
          },
          default: function(e, t) {
            return Object.is(e, t)
          }
        },
        P = Symbol("mobx did run lazy initializers"),
        O = Symbol("mobx pending decorators"),
        N = {},
        I = {};

      function R(e) {
        if (!0 !== e[P]) {
          var t = e[O];
          if (t)
            for (var n in g(e, P, !0), t) {
              var r = t[n];
              r.propertyCreator(e, r.prop, r.descriptor, r.decoratorTarget,
                r.decoratorArguments)
            }
        }
      }

      function A(e, t) {
        return function() {
          var n, r, i = function(r, i, a, s) {
            if (!0 === s) return t(r, i, a, r, n), null;
            if (!Object.prototype.hasOwnProperty.call(r, O)) {
              var u = r[O];
              g(r, O, o({}, u))
            }
            return r[O][i] = {
                prop: i,
                propertyCreator: t,
                descriptor: a,
                decoratorTarget: r,
                decoratorArguments: n
              },
              function(e, t) {
                var n = t ? N : I;
                return n[e] || (n[e] = {
                  configurable: !0,
                  enumerable: t,
                  get: function() {
                    return R(this), this[e]
                  },
                  set: function(t) {
                    R(this), this[e] = t
                  }
                })
              }(i, e)
          };
          return (2 === (r = arguments).length || 3 === r.length) &&
            "string" === typeof r[1] || 4 === r.length && !0 === r[3] ?
            (n = l, i.apply(null, arguments)) : (n = Array.prototype.slice
              .call(arguments), i)
        }
      }

      function D(e, t, n) {
        return Ye(e) ? e : Array.isArray(e) ? Q.array(e, {
          name: n
        }) : m(e) ? Q.object(e, void 0, {
          name: n
        }) : b(e) ? Q.map(e, {
          name: n
        }) : w(e) ? Q.set(e, {
          name: n
        }) : e
      }

      function F(e) {
        return e
      }

      function L(t) {
        h(t);
        var n = A(!0, function(e, n, r, i, o) {
            var a = r ? r.initializer ? r.initializer.call(e) : r.value :
              void 0;
            bt(e).addObservableProp(n, a, t)
          }),
          r = ("undefined" !== typeof e && Object({
            NODE_ENV: "production",
            PUBLIC_URL: ""
          }), n);
        return r.enhancer = t, r
      }
      var M = {
        deep: !0,
        name: void 0,
        defaultDecorator: void 0,
        proxy: !0
      };

      function j(e) {
        return null === e || void 0 === e ? M : "string" === typeof e ? {
          name: e,
          deep: !0,
          proxy: !0
        } : e
      }
      Object.freeze(M);
      var U = L(D),
        W = L(function(e, t, n) {
          return void 0 === e || null === e ? e : Tt(e) || ft(e) ||
            yt(e) || gt(e) ? e : Array.isArray(e) ? Q.array(e, {
              name: n,
              deep: !1
            }) : m(e) ? Q.object(e, void 0, {
              name: n,
              deep: !1
            }) : b(e) ? Q.map(e, {
              name: n,
              deep: !1
            }) : w(e) ? Q.set(e, {
              name: n,
              deep: !1
            }) : p(!1)
        }),
        V = L(F),
        B = L(function(e, t, n) {
          return Nt(e, t) ? t : e
        });

      function q(e) {
        return e.defaultDecorator ? e.defaultDecorator.enhancer : !1 ===
          e.deep ? F : D
      }
      var z = {
          box: function(e, t) {
            arguments.length > 2 && H("box");
            var n = j(t);
            return new re(e, q(n), n.name, !0, n.equals)
          },
          array: function(e, t) {
            arguments.length > 2 && H("array");
            var n = j(t);
            return function(e, t, n, r) {
              void 0 === n && (n = "ObservableArray@" + f());
              void 0 === r && (r = !1);
              var i = new st(n, t, r);
              o = i.values, a = C, s = i, Object.defineProperty(o,
                a, {
                  enumerable: !1,
                  writable: !1,
                  configurable: !0,
                  value: s
                });
              var o, a, s;
              var u = new Proxy(i.values, at);
              if (i.proxy = u, e && e.length) {
                var l = J(!0);
                i.spliceWithArray(0, 0, e), Z(l)
              }
              return u
            }(e, q(n), n.name)
          },
          map: function(e, t) {
            arguments.length > 2 && H("map");
            var n = j(t);
            return new dt(e, q(n), n.name)
          },
          set: function(e, t) {
            arguments.length > 2 && H("set");
            var n = j(t);
            return new mt(e, q(n), n.name)
          },
          object: function(e, t, n) {
            "string" === typeof arguments[1] && H("object");
            var r = j(n);
            if (!1 === r.proxy) return Qe({}, e, t, r);
            var i = He(r),
              o = function(e) {
                var t = new Proxy(e, Ze);
                return e[C].proxy = t, t
              }(Qe({}, void 0, void 0, r));
            return Ke(o, e, t, i), o
          },
          ref: V,
          shallow: W,
          deep: U,
          struct: B
        },
        Q = function(e, t, n) {
          if ("string" === typeof arguments[1]) return U.apply(null,
            arguments);
          if (Ye(e)) return e;
          var r = m(e) ? Q.object(e, t, n) : Array.isArray(e) ? Q.array(
            e, t) : b(e) ? Q.map(e, t) : w(e) ? Q.set(e, t) : e;
          if (r !== e) return r;
          p(!1)
        };

      function H(e) {
        p("Expected one or two arguments to observable." + e +
          ". Did you accidentally try to use observable." + e +
          " as decorator?")
      }
      Object.keys(z).forEach(function(e) {
        return Q[e] = z[e]
      });
      var K = A(!1, function(e, t, n, r, i) {
        var a = n.get,
          s = n.set,
          u = i[0] || {};
        bt(e).addComputedProp(e, t, o({
          get: a,
          set: s,
          context: e
        }, u))
      });
      K({
        equals: k.structural
      });

      function G(e, t) {
        var n = function() {
          return $(e, t, this, arguments)
        };
        return n.isMobxAction = !0, n
      }

      function $(e, t, n, r) {
        var i = function(e, t, n, r) {
            var i = !1,
              o = 0;
            var a = he();
            Se();
            var s = J(!0);
            return {
              prevDerivation: a,
              prevAllowStateChanges: s,
              notifySpy: i,
              startTime: o
            }
          }(),
          o = !0;
        try {
          var a = t.apply(n, r);
          return o = !1, a
        } finally {
          o ? (_e.suppressReactionErrors = o, Y(i), _e.suppressReactionErrors = !
            1) : Y(i)
        }
      }

      function Y(e) {
        Z(e.prevAllowStateChanges), Te(), de(e.prevDerivation), e.notifySpy
      }

      function X(e, t) {
        var n, r = J(e);
        try {
          n = t()
        } finally {
          Z(r)
        }
        return n
      }

      function J(e) {
        var t = _e.allowStateChanges;
        return _e.allowStateChanges = e, t
      }

      function Z(e) {
        _e.allowStateChanges = e
      }
      var ee, te, ne, re = function(e) {
          function t(t, n, r, i, o) {
            void 0 === r && (r = "ObservableValue@" + f()), void 0 ===
              i && (i = !0), void 0 === o && (o = k.default);
            var a = e.call(this, r) || this;
            return a.enhancer = n, a.name = r, a.equals = o, a.hasUnreportedChange = !
              1, a.value = n(t, void 0, r), a
          }
          return function(e, t) {
            function n() {
              this.constructor = e
            }
            i(e, t), e.prototype = null === t ? Object.create(t) : (n
              .prototype = t.prototype, new n)
          }(t, e), t.prototype.dehanceValue = function(e) {
            return void 0 !== this.dehancer ? this.dehancer(e) : e
          }, t.prototype.set = function(e) {
            this.value;
            if ((e = this.prepareNewValue(e)) !== _e.UNCHANGED) {
              0,
              this.setNewValue(e)
            }
          }, t.prototype.prepareNewValue = function(e) {
            if (le(this), et(this)) {
              var t = nt(this, {
                object: this,
                type: "update",
                newValue: e
              });
              if (!t) return _e.UNCHANGED;
              e = t.newValue
            }
            return e = this.enhancer(e, this.value, this.name), this.equals(
              this.value, e) ? _e.UNCHANGED : e
          }, t.prototype.setNewValue = function(e) {
            var t = this.value;
            this.value = e, this.reportChanged(), rt(this) && ot(this, {
              type: "update",
              object: this,
              newValue: e,
              oldValue: t
            })
          }, t.prototype.get = function() {
            return this.reportObserved(), this.dehanceValue(this.value)
          }, t.prototype.intercept = function(e) {
            return tt(this, e)
          }, t.prototype.observe = function(e, t) {
            return t && e({
              object: this,
              type: "update",
              newValue: this.value,
              oldValue: void 0
            }), it(this, e)
          }, t.prototype.toJSON = function() {
            return this.get()
          }, t.prototype.toString = function() {
            return this.name + "[" + this.value + "]"
          }, t.prototype.valueOf = function() {
            return E(this.get())
          }, t.prototype[Symbol.toPrimitive] = function() {
            return this.valueOf()
          }, t
        }(S),
        ie = (_("ObservableValue", re), function() {
          function e(e) {
            this.dependenciesState = ee.NOT_TRACKING, this.observing = [],
              this.newObserving = null, this.isBeingObserved = !1,
              this.isPendingUnobservation = !1, this.observers = new Set,
              this.diffValue = 0, this.runId = 0, this.lastAccessedBy =
              0, this.lowestObserverState = ee.UP_TO_DATE, this.unboundDepsCount =
              0, this.__mapid = "#" + f(), this.value = new ae(null),
              this.isComputing = !1, this.isRunningSetter = !1, this.isTracing =
              ne.NONE, this.derivation = e.get, this.name = e.name ||
              "ComputedValue@" + f(), e.set && (this.setter = G(this.name +
                "-setter", e.set)), this.equals = e.equals || (e.compareStructural ||
                e.struct ? k.structural : k.default), this.scope = e.context,
              this.requiresReaction = !!e.requiresReaction, this.keepAlive = !
              !e.keepAlive
          }
          return e.prototype.onBecomeStale = function() {
              ! function(e) {
                if (e.lowestObserverState !== ee.UP_TO_DATE) return;
                e.lowestObserverState = ee.POSSIBLY_STALE, e.observers
                  .forEach(function(t) {
                    t.dependenciesState === ee.UP_TO_DATE && (t.dependenciesState =
                      ee.POSSIBLY_STALE, t.isTracing !== ne.NONE &&
                      ke(t, e), t.onBecomeStale())
                  })
              }(this)
            }, e.prototype.onBecomeObserved = function() {
              this.onBecomeObservedListeners && this.onBecomeObservedListeners
                .forEach(function(e) {
                  return e()
                })
            }, e.prototype.onBecomeUnobserved = function() {
              this.onBecomeUnobservedListeners && this.onBecomeUnobservedListeners
                .forEach(function(e) {
                  return e()
                })
            }, e.prototype.get = function() {
              this.isComputing && p("Cycle detected in computation " +
                  this.name + ": " + this.derivation), 0 !== _e.inBatch ||
                0 !== this.observers.size || this.keepAlive ? (xe(
                    this), ue(this) && this.trackAndCompute() &&
                  function(e) {
                    if (e.lowestObserverState === ee.STALE) return;
                    e.lowestObserverState = ee.STALE, e.observers.forEach(
                      function(t) {
                        t.dependenciesState === ee.POSSIBLY_STALE ?
                          t.dependenciesState = ee.STALE : t.dependenciesState ===
                          ee.UP_TO_DATE && (e.lowestObserverState =
                            ee.UP_TO_DATE)
                      })
                  }(this)) : ue(this) && (this.warnAboutUntrackedRead(),
                  Se(), this.value = this.computeValue(!1), Te());
              var e = this.value;
              if (se(e)) throw e.cause;
              return e
            }, e.prototype.peek = function() {
              var e = this.computeValue(!1);
              if (se(e)) throw e.cause;
              return e
            }, e.prototype.set = function(e) {
              if (this.setter) {
                h(!this.isRunningSetter,
                  "The setter of computed value '" + this.name +
                  "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?"
                ), this.isRunningSetter = !0;
                try {
                  this.setter.call(this.scope, e)
                } finally {
                  this.isRunningSetter = !1
                }
              } else h(!1, !1)
            }, e.prototype.trackAndCompute = function() {
              var e = this.value,
                t = this.dependenciesState === ee.NOT_TRACKING,
                n = this.computeValue(!0),
                r = t || se(e) || se(n) || !this.equals(e, n);
              return r && (this.value = n), r
            }, e.prototype.computeValue = function(e) {
              var t;
              if (this.isComputing = !0, _e.computationDepth++, e) t =
                ce(this, this.derivation, this.scope);
              else if (!0 === _e.disableErrorBoundaries) t = this.derivation
                .call(this.scope);
              else try {
                t = this.derivation.call(this.scope)
              } catch (n) {
                t = new ae(n)
              }
              return _e.computationDepth--, this.isComputing = !1, t
            }, e.prototype.suspend = function() {
              this.keepAlive || (fe(this), this.value = void 0)
            }, e.prototype.observe = function(e, t) {
              var n = this,
                r = !0,
                i = void 0;
              return We(function() {
                var o = n.get();
                if (!r || t) {
                  var a = he();
                  e({
                    type: "update",
                    object: n,
                    newValue: o,
                    oldValue: i
                  }), de(a)
                }
                r = !1, i = o
              })
            }, e.prototype.warnAboutUntrackedRead = function() {}, e.prototype
            .toJSON = function() {
              return this.get()
            }, e.prototype.toString = function() {
              return this.name + "[" + this.derivation.toString() +
                "]"
            }, e.prototype.valueOf = function() {
              return E(this.get())
            }, e.prototype[Symbol.toPrimitive] = function() {
              return this.valueOf()
            }, e
        }()),
        oe = _("ComputedValue", ie);
      (te = ee || (ee = {}))[te.NOT_TRACKING = -1] = "NOT_TRACKING", te
        [te.UP_TO_DATE = 0] = "UP_TO_DATE", te[te.POSSIBLY_STALE = 1] =
        "POSSIBLY_STALE", te[te.STALE = 2] = "STALE",
        function(e) {
          e[e.NONE = 0] = "NONE", e[e.LOG = 1] = "LOG", e[e.BREAK = 2] =
            "BREAK"
        }(ne || (ne = {}));
      var ae = function() {
        return function(e) {
          this.cause = e
        }
      }();

      function se(e) {
        return e instanceof ae
      }

      function ue(e) {
        switch (e.dependenciesState) {
          case ee.UP_TO_DATE:
            return !1;
          case ee.NOT_TRACKING:
          case ee.STALE:
            return !0;
          case ee.POSSIBLY_STALE:
            for (var t = he(), n = e.observing, r = n.length, i = 0; i <
              r; i++) {
              var o = n[i];
              if (oe(o)) {
                if (_e.disableErrorBoundaries) o.get();
                else try {
                  o.get()
                } catch (a) {
                  return de(t), !0
                }
                if (e.dependenciesState === ee.STALE) return de(t), !0
              }
            }
            return ye(e), de(t), !1
        }
      }

      function le(e) {
        var t = e.observers.size > 0;
        _e.computationDepth > 0 && t && p(!1), _e.allowStateChanges ||
          !t && "strict" !== _e.enforceActions || p(!1)
      }

      function ce(e, t, n) {
        ye(e), e.newObserving = new Array(e.observing.length + 100), e.unboundDepsCount =
          0, e.runId = ++_e.runId;
        var r, i = _e.trackingDerivation;
        if (_e.trackingDerivation = e, !0 === _e.disableErrorBoundaries)
          r = t.call(n);
        else try {
          r = t.call(n)
        } catch (o) {
          r = new ae(o)
        }
        return _e.trackingDerivation = i,
          function(e) {
            for (var t = e.observing, n = e.observing = e.newObserving,
                r = ee.UP_TO_DATE, i = 0, o = e.unboundDepsCount, a = 0; a <
              o; a++) {
              var s = n[a];
              0 === s.diffValue && (s.diffValue = 1, i !== a && (n[i] =
                s), i++), s.dependenciesState > r && (r = s.dependenciesState)
            }
            n.length = i, e.newObserving = null, o = t.length;
            for (; o--;) {
              var s = t[o];
              0 === s.diffValue && Ee(s, e), s.diffValue = 0
            }
            for (; i--;) {
              var s = n[i];
              1 === s.diffValue && (s.diffValue = 0, we(s, e))
            }
            r !== ee.UP_TO_DATE && (e.dependenciesState = r, e.onBecomeStale())
          }(e), r
      }

      function fe(e) {
        var t = e.observing;
        e.observing = [];
        for (var n = t.length; n--;) Ee(t[n], e);
        e.dependenciesState = ee.NOT_TRACKING
      }

      function pe(e) {
        var t = he();
        try {
          return e()
        } finally {
          de(t)
        }
      }

      function he() {
        var e = _e.trackingDerivation;
        return _e.trackingDerivation = null, e
      }

      function de(e) {
        _e.trackingDerivation = e
      }

      function ye(e) {
        if (e.dependenciesState !== ee.UP_TO_DATE) {
          e.dependenciesState = ee.UP_TO_DATE;
          for (var t = e.observing, n = t.length; n--;) t[n].lowestObserverState =
            ee.UP_TO_DATE
        }
      }
      var ve = function() {
          return function() {
            this.version = 5, this.UNCHANGED = {}, this.trackingDerivation =
              null, this.computationDepth = 0, this.runId = 0, this.mobxGuid =
              0, this.inBatch = 0, this.pendingUnobservations = [],
              this.pendingReactions = [], this.isRunningReactions = !
              1, this.allowStateChanges = !0, this.enforceActions = !
              1, this.spyListeners = [], this.globalReactionErrorHandlers = [],
              this.computedRequiresReaction = !1, this.disableErrorBoundaries = !
              1, this.suppressReactionErrors = !1
          }
        }(),
        me = !0,
        ge = !1,
        _e = function() {
          var e = be();
          return e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (me = !
              1), e.__mobxGlobals && e.__mobxGlobals.version !== (new ve)
            .version && (me = !1), me ? e.__mobxGlobals ? (e.__mobxInstanceCount +=
              1, e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
              e.__mobxGlobals) : (e.__mobxInstanceCount = 1, e.__mobxGlobals =
              new ve) : (setTimeout(function() {
              ge || p(
                "There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`"
              )
            }, 1), new ve)
        }();

      function be() {
        return "undefined" !== typeof window ? window : r
      }

      function we(e, t) {
        e.observers.add(t), e.lowestObserverState > t.dependenciesState &&
          (e.lowestObserverState = t.dependenciesState)
      }

      function Ee(e, t) {
        e.observers.delete(t), 0 === e.observers.size && Ce(e)
      }

      function Ce(e) {
        !1 === e.isPendingUnobservation && (e.isPendingUnobservation = !
          0, _e.pendingUnobservations.push(e))
      }

      function Se() {
        _e.inBatch++
      }

      function Te() {
        if (0 === --_e.inBatch) {
          Ie();
          for (var e = _e.pendingUnobservations, t = 0; t < e.length; t++) {
            var n = e[t];
            n.isPendingUnobservation = !1, 0 === n.observers.size && (n
              .isBeingObserved && (n.isBeingObserved = !1, n.onBecomeUnobserved()),
              n instanceof ie && n.suspend())
          }
          _e.pendingUnobservations = []
        }
      }

      function xe(e) {
        var t = _e.trackingDerivation;
        return null !== t ? (t.runId !== e.lastAccessedBy && (e.lastAccessedBy =
          t.runId, t.newObserving[t.unboundDepsCount++] = e, e.isBeingObserved ||
          (e.isBeingObserved = !0, e.onBecomeObserved())), !0) : (0 ===
          e.observers.size && _e.inBatch > 0 && Ce(e), !1)
      }

      function ke(e, t) {
        if (console.log("[mobx.trace] '" + e.name +
            "' is invalidated due to a change in: '" + t.name + "'"), e
          .isTracing === ne.BREAK) {
          var n = [];
          ! function e(t, n, r) {
            if (n.length >= 1e3) return void n.push("(and many more)");
            n.push("" + new Array(r).join("\t") + t.name);
            t.dependencies && t.dependencies.forEach(function(t) {
              return e(t, n, r + 1)
            })
          }((r = e, Ge(xt(r, i))), n, 1), new Function(
            "debugger;\n/*\nTracing '" + e.name +
            "'\n\nYou are entering this break point because derivation '" +
            e.name + "' is being traced and '" + t.name +
            "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" +
            (e instanceof ie ? e.derivation.toString().replace(
              /[*]\//g, "/") : "") +
            "\n\nThe dependencies for this derivation are:\n\n" + n.join(
              "\n") + "\n*/\n    ")()
        }
        var r, i
      }
      var Pe = function() {
        function e(e, t, n) {
          void 0 === e && (e = "Reaction@" + f()), this.name = e,
            this.onInvalidate = t, this.errorHandler = n, this.observing = [],
            this.newObserving = [], this.dependenciesState = ee.NOT_TRACKING,
            this.diffValue = 0, this.runId = 0, this.unboundDepsCount =
            0, this.__mapid = "#" + f(), this.isDisposed = !1, this._isScheduled = !
            1, this._isTrackPending = !1, this._isRunning = !1, this.isTracing =
            ne.NONE
        }
        return e.prototype.onBecomeStale = function() {
          this.schedule()
        }, e.prototype.schedule = function() {
          this._isScheduled || (this._isScheduled = !0, _e.pendingReactions
            .push(this), Ie())
        }, e.prototype.isScheduled = function() {
          return this._isScheduled
        }, e.prototype.runReaction = function() {
          if (!this.isDisposed) {
            if (Se(), this._isScheduled = !1, ue(this)) {
              this._isTrackPending = !0;
              try {
                this.onInvalidate(), this._isTrackPending
              } catch (e) {
                this.reportExceptionInDerivation(e)
              }
            }
            Te()
          }
        }, e.prototype.track = function(e) {
          Se();
          this._isRunning = !0;
          var t = ce(this, e, void 0);
          this._isRunning = !1, this._isTrackPending = !1, this.isDisposed &&
            fe(this), se(t) && this.reportExceptionInDerivation(t.cause),
            Te()
        }, e.prototype.reportExceptionInDerivation = function(e) {
          var t = this;
          if (this.errorHandler) this.errorHandler(e, this);
          else {
            if (_e.disableErrorBoundaries) throw e;
            var n =
              "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" +
              this + "'";
            _e.suppressReactionErrors ? console.warn(
                "[mobx] (error in reaction '" + this.name +
                "' suppressed, fix error of causing action below)") :
              console.error(n, e), _e.globalReactionErrorHandlers.forEach(
                function(n) {
                  return n(e, t)
                })
          }
        }, e.prototype.dispose = function() {
          this.isDisposed || (this.isDisposed = !0, this._isRunning ||
            (Se(), fe(this), Te()))
        }, e.prototype.getDisposer = function() {
          var e = this.dispose.bind(this);
          return e[C] = this, e
        }, e.prototype.toString = function() {
          return "Reaction[" + this.name + "]"
        }, e.prototype.trace = function(e) {
          void 0 === e && (e = !1),
            function() {
              for (var e = [], t = 0; t < arguments.length; t++) e[
                t] = arguments[t];
              var n = !1;
              "boolean" === typeof e[e.length - 1] && (n = e.pop());
              var r = function(e) {
                switch (e.length) {
                  case 0:
                    return _e.trackingDerivation;
                  case 1:
                    return xt(e[0]);
                  case 2:
                    return xt(e[0], e[1])
                }
              }(e);
              if (!r) return p(!1);
              r.isTracing === ne.NONE && console.log(
                "[mobx.trace] '" + r.name + "' tracing enabled");
              r.isTracing = n ? ne.BREAK : ne.LOG
            }(this, e)
        }, e
      }();
      var Oe = 100,
        Ne = function(e) {
          return e()
        };

      function Ie() {
        _e.inBatch > 0 || _e.isRunningReactions || Ne(Re)
      }

      function Re() {
        _e.isRunningReactions = !0;
        for (var e = _e.pendingReactions, t = 0; e.length > 0;) {
          ++t === Oe && (console.error(
            "Reaction doesn't converge to a stable state after " +
            Oe +
            " iterations. Probably there is a cycle in the reactive function: " +
            e[0]), e.splice(0));
          for (var n = e.splice(0), r = 0, i = n.length; r < i; r++) n[
            r].runReaction()
        }
        _e.isRunningReactions = !1
      }
      var Ae = _("Reaction", Pe);

      function De(e) {
        var t = Ne;
        Ne = function(n) {
          return e(function() {
            return t(n)
          })
        }
      }

      function Fe(e) {
        return console.warn(
            "[mobx.spy] Is a no-op in production builds"),
          function() {}
      }

      function Le() {
        p(!1)
      }

      function Me(e) {
        return function(t, n, r) {
          if (r) {
            if (r.value) return {
              value: G(e, r.value),
              enumerable: !1,
              configurable: !0,
              writable: !0
            };
            var i = r.initializer;
            return {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              initializer: function() {
                return G(e, i.call(this))
              }
            }
          }
          return function(e) {
            return function(t, n, r) {
              Object.defineProperty(t, n, {
                configurable: !0,
                enumerable: !1,
                get: function() {},
                set: function(t) {
                  g(this, n, je(e, t))
                }
              })
            }
          }(e).apply(this, arguments)
        }
      }
      var je = function(e, t, n, r) {
        return 1 === arguments.length && "function" === typeof e ? G(
            e.name || "<unnamed action>", e) : 2 === arguments.length &&
          "function" === typeof t ? G(e, t) : 1 === arguments.length &&
          "string" === typeof e ? Me(e) : !0 !== r ? Me(t).apply(null,
            arguments) : void g(e, t, G(e.name || t, n.value))
      };

      function Ue(e, t, n) {
        g(e, t, G(t, n.bind(e)))
      }

      function We(e, t) {
        void 0 === t && (t = c);
        var n, r = t && t.name || e.name || "Autorun@" + f();
        if (!t.scheduler && !t.delay) n = new Pe(r, function() {
          this.track(a)
        }, t.onError);
        else {
          var i = Be(t),
            o = !1;
          n = new Pe(r, function() {
            o || (o = !0, i(function() {
              o = !1, n.isDisposed || n.track(a)
            }))
          }, t.onError)
        }

        function a() {
          e(n)
        }
        return n.schedule(), n.getDisposer()
      }
      je.bound = function(e, t, n, r) {
        return !0 === r ? (Ue(e, t, n.value), null) : n ? {
          configurable: !0,
          enumerable: !1,
          get: function() {
            return Ue(this, t, n.value || n.initializer.call(this)),
              this[t]
          },
          set: Le
        } : {
          enumerable: !1,
          configurable: !0,
          set: function(e) {
            Ue(this, t, e)
          },
          get: function() {}
        }
      };
      var Ve = function(e) {
        return e()
      };

      function Be(e) {
        return e.scheduler ? e.scheduler : e.delay ? function(t) {
          return setTimeout(t, e.delay)
        } : Ve
      }

      function qe(e, t, n, r) {
        var i = "string" === typeof n ? xt(t, n) : xt(t),
          o = "string" === typeof n ? r : n,
          a = e + "Listeners";
        return i[a] ? i[a].add(o) : i[a] = new Set([o]), "function" !==
          typeof i[e] ? p(!1) : function() {
            var e = i[a];
            e && (e.delete(o), 0 === e.size && delete i[a])
          }
      }

      function ze(e) {
        var t = e.enforceActions,
          n = e.computedRequiresReaction,
          r = e.disableErrorBoundaries,
          i = e.reactionScheduler;
        if (!0 === e.isolateGlobalState && ((_e.pendingReactions.length ||
            _e.inBatch || _e.isRunningReactions) && p(
            "isolateGlobalState should be called before MobX is running any reactions"
          ), ge = !0, me && (0 === --be().__mobxInstanceCount && (be()
            .__mobxGlobals = void 0), _e = new ve)), void 0 !== t) {
          var o = void 0;
          switch (t) {
            case !0:
            case "observed":
              o = !0;
              break;
            case !1:
            case "never":
              o = !1;
              break;
            case "strict":
            case "always":
              o = "strict";
              break;
            default:
              p("Invalid value for 'enforceActions': '" + t +
                "', expected 'never', 'always' or 'observed'")
          }
          _e.enforceActions = o, _e.allowStateChanges = !0 !== o &&
            "strict" !== o
        }
        void 0 !== n && (_e.computedRequiresReaction = !!n), void 0 !==
          r && (!0 === r && console.warn(
            "WARNING: Debug feature only. MobX will NOT recover from errors when `disableErrorBoundaries` is enabled."
          ), _e.disableErrorBoundaries = !!r), i && De(i)
      }

      function Qe(e, t, n, r) {
        var i = He(r = j(r));
        return R(e), bt(e, r.name, i.enhancer), t && Ke(e, t, n, i), e
      }

      function He(e) {
        return e.defaultDecorator || (!1 === e.deep ? V : U)
      }

      function Ke(e, t, n, r) {
        Se();
        try {
          for (var i in t) {
            var o = Object.getOwnPropertyDescriptor(t, i);
            0;
            var a = (n && i in n ? n[i] : o.get ? K : r)(e, i, o, !0);
            a && Object.defineProperty(e, i, a)
          }
        } finally {
          Te()
        }
      }

      function Ge(e) {
        var t = {
          name: e.name
        };
        return e.observing && e.observing.length > 0 && (t.dependencies =
          function(e) {
            var t = [];
            return e.forEach(function(e) {
              -1 === t.indexOf(e) && t.push(e)
            }), t
          }(e.observing).map(Ge)), t
      }

      function $e(e, t) {
        return null !== e && void 0 !== e && (void 0 !== t ? !!Tt(e) &&
          e[C].values.has(t) : Tt(e) || !!e[C] || T(e) || Ae(e) || oe(
            e))
      }

      function Ye(e) {
        return 1 !== arguments.length && p(!1), $e(e)
      }

      function Xe(e, t) {
        void 0 === t && (t = void 0), Se();
        try {
          return e.apply(t)
        } finally {
          Te()
        }
      }

      function Je(e) {
        return e[C]
      }
      var Ze = {
        has: function(e, t) {
          if (t === C || "constructor" === t || t === P) return !0;
          var n = Je(e);
          return "string" === typeof t ? n.has(t) : t in e
        },
        get: function(e, t) {
          if (t === C || "constructor" === t || t === P) return e[t];
          var n = Je(e),
            r = n.values.get(t);
          if (r instanceof S) {
            var i = r.get();
            return void 0 === i && n.has(t), i
          }
          return "string" === typeof t && n.has(t), e[t]
        },
        set: function(e, t, n) {
          return "string" === typeof t && (function e(t, n, r) {
            if (2 !== arguments.length)
              if (Tt(t)) {
                var i = t[C];
                i.values.get(n) ? i.write(n, r) : i.addObservableProp(
                  n, r, i.defaultEnhancer)
              } else if (yt(t)) t.set(n, r);
            else {
              if (!ft(t)) return p(!1);
              "number" !== typeof n && (n = parseInt(n, 10)), h(
                  n >= 0, "Not a valid index: '" + n + "'"), Se(),
                n >= t.length && (t.length = n + 1), t[n] = r,
                Te()
            } else {
              Se();
              var o = n;
              try {
                for (var a in o) e(t, a, o[a])
              } finally {
                Te()
              }
            }
          }(e, t, n), !0)
        },
        deleteProperty: function(e, t) {
          return "string" === typeof t && (Je(e).remove(t), !0)
        },
        ownKeys: function(e) {
          return Je(e).keysAtom.reportObserved(), Reflect.ownKeys(e)
        },
        preventExtensions: function(e) {
          return p("Dynamic observable objects cannot be frozen"), !
            1
        }
      };

      function et(e) {
        return void 0 !== e.interceptors && e.interceptors.length > 0
      }

      function tt(e, t) {
        var n = e.interceptors || (e.interceptors = []);
        return n.push(t), d(function() {
          var e = n.indexOf(t); - 1 !== e && n.splice(e, 1)
        })
      }

      function nt(e, t) {
        var n = he();
        try {
          var r = e.interceptors;
          if (r)
            for (var i = 0, o = r.length; i < o && (h(!(t = r[i](t)) ||
                t.type,
                "Intercept handlers should return nothing or a change object"
              ), t); i++);
          return t
        } finally {
          de(n)
        }
      }

      function rt(e) {
        return void 0 !== e.changeListeners && e.changeListeners.length >
          0
      }

      function it(e, t) {
        var n = e.changeListeners || (e.changeListeners = []);
        return n.push(t), d(function() {
          var e = n.indexOf(t); - 1 !== e && n.splice(e, 1)
        })
      }

      function ot(e, t) {
        var n = he(),
          r = e.changeListeners;
        if (r) {
          for (var i = 0, o = (r = r.slice()).length; i < o; i++) r[i](
            t);
          de(n)
        }
      }
      var at = {
        get: function(e, t) {
          return t === C ? e[C] : "length" === t ? e[C].getArrayLength() :
            "number" === typeof t ? ut.get.call(e, t) : "string" !==
            typeof t || isNaN(t) ? ut.hasOwnProperty(t) ? ut[t] : e[
              t] : ut.get.call(e, parseInt(t))
        },
        set: function(e, t, n) {
          return "length" === t ? (e[C].setArrayLength(n), !0) :
            "number" === typeof t ? (ut.set.call(e, t, n), !0) : !
            isNaN(t) && (ut.set.call(e, parseInt(t), n), !0)
        },
        preventExtensions: function(e) {
          return p("Observable arrays cannot be frozen"), !1
        }
      };
      var st = function() {
          function e(e, t, n) {
            this.owned = n, this.values = [], this.proxy = void 0, this
              .lastKnownLength = 0, this.atom = new S(e ||
                "ObservableArray@" + f()), this.enhancer = function(n,
                r) {
                return t(n, r, e + "[..]")
              }
          }
          return e.prototype.dehanceValue = function(e) {
            return void 0 !== this.dehancer ? this.dehancer(e) : e
          }, e.prototype.dehanceValues = function(e) {
            return void 0 !== this.dehancer && e.length > 0 ? e.map(
              this.dehancer) : e
          }, e.prototype.intercept = function(e) {
            return tt(this, e)
          }, e.prototype.observe = function(e, t) {
            return void 0 === t && (t = !1), t && e({
              object: this.proxy,
              type: "splice",
              index: 0,
              added: this.values.slice(),
              addedCount: this.values.length,
              removed: [],
              removedCount: 0
            }), it(this, e)
          }, e.prototype.getArrayLength = function() {
            return this.atom.reportObserved(), this.values.length
          }, e.prototype.setArrayLength = function(e) {
            if ("number" !== typeof e || e < 0) throw new Error(
              "[mobx.array] Out of range: " + e);
            var t = this.values.length;
            if (e !== t)
              if (e > t) {
                for (var n = new Array(e - t), r = 0; r < e - t; r++)
                  n[r] = void 0;
                this.spliceWithArray(t, 0, n)
              } else this.spliceWithArray(e, t - e)
          }, e.prototype.updateArrayLength = function(e, t) {
            if (e !== this.lastKnownLength) throw new Error(
              "[mobx] Modification exception: the internal structure of an observable array was changed."
            );
            this.lastKnownLength += t
          }, e.prototype.spliceWithArray = function(e, t, n) {
            var r = this;
            le(this.atom);
            var i = this.values.length;
            if (void 0 === e ? e = 0 : e > i ? e = i : e < 0 && (e =
                Math.max(0, i + e)), t = 1 === arguments.length ? i -
              e : void 0 === t || null === t ? 0 : Math.max(0, Math.min(
                t, i - e)), void 0 === n && (n = l), et(this)) {
              var o = nt(this, {
                object: this.proxy,
                type: "splice",
                index: e,
                removedCount: t,
                added: n
              });
              if (!o) return l;
              t = o.removedCount, n = o.added
            }
            n = 0 === n.length ? n : n.map(function(e) {
              return r.enhancer(e, void 0)
            });
            var a = this.spliceItemsIntoValues(e, t, n);
            return 0 === t && 0 === n.length || this.notifyArraySplice(
              e, n, a), this.dehanceValues(a)
          }, e.prototype.spliceItemsIntoValues = function(e, t, n) {
            var r;
            if (n.length < 1e4) return (r = this.values).splice.apply(
              r,
              function() {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e = e.concat(s(arguments[t]));
                return e
              }([e, t], n));
            var i = this.values.slice(e, e + t);
            return this.values = this.values.slice(0, e).concat(n,
              this.values.slice(e + t)), i
          }, e.prototype.notifyArrayChildUpdate = function(e, t, n) {
            var r = !this.owned && !1,
              i = rt(this),
              o = i || r ? {
                object: this.proxy,
                type: "update",
                index: e,
                newValue: t,
                oldValue: n
              } : null;
            this.atom.reportChanged(), i && ot(this, o)
          }, e.prototype.notifyArraySplice = function(e, t, n) {
            var r = !this.owned && !1,
              i = rt(this),
              o = i || r ? {
                object: this.proxy,
                type: "splice",
                index: e,
                removed: n,
                added: t,
                removedCount: n.length,
                addedCount: t.length
              } : null;
            this.atom.reportChanged(), i && ot(this, o)
          }, e
        }(),
        ut = {
          intercept: function(e) {
            return this[C].intercept(e)
          },
          observe: function(e, t) {
            return void 0 === t && (t = !1), this[C].observe(e, t)
          },
          clear: function() {
            return this.splice(0)
          },
          replace: function(e) {
            var t = this[C];
            return t.spliceWithArray(0, t.values.length, e)
          },
          toJS: function() {
            return this.slice()
          },
          toJSON: function() {
            return this.toJS()
          },
          splice: function(e, t) {
            for (var n = [], r = 2; r < arguments.length; r++) n[r -
              2] = arguments[r];
            var i = this[C];
            switch (arguments.length) {
              case 0:
                return [];
              case 1:
                return i.spliceWithArray(e);
              case 2:
                return i.spliceWithArray(e, t)
            }
            return i.spliceWithArray(e, t, n)
          },
          spliceWithArray: function(e, t, n) {
            return this[C].spliceWithArray(e, t, n)
          },
          push: function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] =
              arguments[t];
            var n = this[C];
            return n.spliceWithArray(n.values.length, 0, e), n.values
              .length
          },
          pop: function() {
            return this.splice(Math.max(this[C].values.length - 1, 0),
              1)[0]
          },
          shift: function() {
            return this.splice(0, 1)[0]
          },
          unshift: function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] =
              arguments[t];
            var n = this[C];
            return n.spliceWithArray(0, 0, e), n.values.length
          },
          reverse: function() {
            var e = this.slice();
            return e.reverse.apply(e, arguments)
          },
          sort: function(e) {
            var t = this.slice();
            return t.sort.apply(t, arguments)
          },
          remove: function(e) {
            var t = this[C],
              n = t.dehanceValues(t.values).indexOf(e);
            return n > -1 && (this.splice(n, 1), !0)
          },
          get: function(e) {
            var t = this[C];
            if (t) {
              if (e < t.values.length) return t.atom.reportObserved(),
                t.dehanceValue(t.values[e]);
              console.warn(
                "[mobx.array] Attempt to read an array index (" + e +
                ") that is out of bounds (" + t.values.length +
                "). Please check length first. Out of bound indices will not be tracked by MobX"
              )
            }
          },
          set: function(e, t) {
            var n = this[C],
              r = n.values;
            if (e < r.length) {
              le(n.atom);
              var i = r[e];
              if (et(n)) {
                var o = nt(n, {
                  type: "update",
                  object: this,
                  index: e,
                  newValue: t
                });
                if (!o) return;
                t = o.newValue
              }(t = n.enhancer(t, i)) !== i && (r[e] = t, n.notifyArrayChildUpdate(
                e, t, i))
            } else {
              if (e !== r.length) throw new Error(
                "[mobx.array] Index out of bounds, " + e +
                " is larger than " + r.length);
              n.spliceWithArray(e, 0, [t])
            }
          }
        };
      ["concat", "every", "filter", "forEach", "indexOf", "join",
        "lastIndexOf", "map", "reduce", "reduceRight", "slice", "some",
        "toString", "toLocaleString"
      ].forEach(function(e) {
        ut[e] = function() {
          var t = this[C];
          t.atom.reportObserved();
          var n = t.dehanceValues(t.values);
          return n[e].apply(n, arguments)
        }
      });
      var lt, ct = _("ObservableArrayAdministration", st);

      function ft(e) {
        return v(e) && ct(e[C])
      }
      var pt, ht = {},
        dt = function() {
          function e(e, t, n) {
            if (void 0 === t && (t = D), void 0 === n && (n =
                "ObservableMap@" + f()), this.enhancer = t, this.name =
              n, this[lt] = ht, this._keysAtom = x(this.name +
                ".keys()"), this[Symbol.toStringTag] = "Map",
              "function" !== typeof Map) throw new Error(
              "mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js"
            );
            this._data = new Map, this._hasMap = new Map, this.merge(e)
          }
          return e.prototype._has = function(e) {
            return this._data.has(e)
          }, e.prototype.has = function(e) {
            return this._hasMap.has(e) ? this._hasMap.get(e).get() :
              this._updateHasMapEntry(e, !1).get()
          }, e.prototype.set = function(e, t) {
            var n = this._has(e);
            if (et(this)) {
              var r = nt(this, {
                type: n ? "update" : "add",
                object: this,
                newValue: t,
                name: e
              });
              if (!r) return this;
              t = r.newValue
            }
            return n ? this._updateValue(e, t) : this._addValue(e, t),
              this
          }, e.prototype.delete = function(e) {
            var t = this;
            if (et(this) && !(r = nt(this, {
                type: "delete",
                object: this,
                name: e
              }))) return !1;
            if (this._has(e)) {
              var n = rt(this),
                r = n ? {
                  type: "delete",
                  object: this,
                  oldValue: this._data.get(e).value,
                  name: e
                } : null;
              return Xe(function() {
                t._keysAtom.reportChanged(), t._updateHasMapEntry(
                    e, !1), t._data.get(e).setNewValue(void 0), t
                  ._data.delete(e)
              }), n && ot(this, r), !0
            }
            return !1
          }, e.prototype._updateHasMapEntry = function(e, t) {
            var n = this._hasMap.get(e);
            return n ? n.setNewValue(t) : (n = new re(t, F, this.name +
              "." + e + "?", !1), this._hasMap.set(e, n)), n
          }, e.prototype._updateValue = function(e, t) {
            var n = this._data.get(e);
            if ((t = n.prepareNewValue(t)) !== _e.UNCHANGED) {
              var r = rt(this),
                i = r ? {
                  type: "update",
                  object: this,
                  oldValue: n.value,
                  name: e,
                  newValue: t
                } : null;
              0, n.setNewValue(t), r && ot(this, i)
            }
          }, e.prototype._addValue = function(e, t) {
            var n = this;
            le(this._keysAtom), Xe(function() {
              var r = new re(t, n.enhancer, n.name + "." + e, !1);
              n._data.set(e, r), t = r.value, n._updateHasMapEntry(
                e, !0), n._keysAtom.reportChanged()
            });
            var r = rt(this),
              i = r ? {
                type: "add",
                object: this,
                name: e,
                newValue: t
              } : null;
            r && ot(this, i)
          }, e.prototype.get = function(e) {
            return this.has(e) ? this.dehanceValue(this._data.get(e).get()) :
              this.dehanceValue(void 0)
          }, e.prototype.dehanceValue = function(e) {
            return void 0 !== this.dehancer ? this.dehancer(e) : e
          }, e.prototype.keys = function() {
            return this._keysAtom.reportObserved(), this._data.keys()
          }, e.prototype.values = function() {
            var e = this,
              t = 0,
              n = Array.from(this.keys());
            return Dt({
              next: function() {
                return t < n.length ? {
                  value: e.get(n[t++]),
                  done: !1
                } : {
                  done: !0
                }
              }
            })
          }, e.prototype.entries = function() {
            var e = this,
              t = 0,
              n = Array.from(this.keys());
            return Dt({
              next: function() {
                if (t < n.length) {
                  var r = n[t++];
                  return {
                    value: [r, e.get(r)],
                    done: !1
                  }
                }
                return {
                  done: !0
                }
              }
            })
          }, e.prototype[(lt = C, Symbol.iterator)] = function() {
            return this.entries()
          }, e.prototype.forEach = function(e, t) {
            var n, r;
            try {
              for (var i = a(this), o = i.next(); !o.done; o = i.next()) {
                var u = s(o.value, 2),
                  l = u[0],
                  c = u[1];
                e.call(t, c, l, this)
              }
            } catch (f) {
              n = {
                error: f
              }
            } finally {
              try {
                o && !o.done && (r = i.return) && r.call(i)
              } finally {
                if (n) throw n.error
              }
            }
          }, e.prototype.merge = function(e) {
            var t = this;
            return yt(e) && (e = e.toJS()), Xe(function() {
              if (m(e)) Object.keys(e).forEach(function(n) {
                return t.set(n, e[n])
              });
              else if (Array.isArray(e)) e.forEach(function(e) {
                var n = s(e, 2),
                  r = n[0],
                  i = n[1];
                return t.set(r, i)
              });
              else if (b(e)) {
                if (e.constructor !== Map) return p(
                  "Cannot initialize from classes that inherit from Map: " +
                  e.constructor.name);
                e.forEach(function(e, n) {
                  return t.set(n, e)
                })
              } else null !== e && void 0 !== e && p(
                "Cannot initialize map from " + e)
            }), this
          }, e.prototype.clear = function() {
            var e = this;
            Xe(function() {
              pe(function() {
                var t, n;
                try {
                  for (var r = a(e.keys()), i = r.next(); !i.done; i =
                    r.next()) {
                    var o = i.value;
                    e.delete(o)
                  }
                } catch (s) {
                  t = {
                    error: s
                  }
                } finally {
                  try {
                    i && !i.done && (n = r.return) && n.call(
                      r)
                  } finally {
                    if (t) throw t.error
                  }
                }
              })
            })
          }, e.prototype.replace = function(e) {
            var t = this;
            return Xe(function() {
              var n, r = m(n = e) ? Object.keys(n) : Array.isArray(
                n) ? n.map(function(e) {
                return s(e, 1)[0]
              }) : b(n) || yt(n) ? Array.from(n.keys()) : p(
                "Cannot get keys from '" + n + "'");
              Array.from(t.keys()).filter(function(e) {
                return -1 === r.indexOf(e)
              }).forEach(function(e) {
                return t.delete(e)
              }), t.merge(e)
            }), this
          }, Object.defineProperty(e.prototype, "size", {
            get: function() {
              return this._keysAtom.reportObserved(), this._data.size
            },
            enumerable: !0,
            configurable: !0
          }), e.prototype.toPOJO = function() {
            var e, t, n = {};
            try {
              for (var r = a(this), i = r.next(); !i.done; i = r.next()) {
                var o = s(i.value, 2),
                  u = o[0],
                  l = o[1];
                n["" + u] = l
              }
            } catch (c) {
              e = {
                error: c
              }
            } finally {
              try {
                i && !i.done && (t = r.return) && t.call(r)
              } finally {
                if (e) throw e.error
              }
            }
            return n
          }, e.prototype.toJS = function() {
            return new Map(this)
          }, e.prototype.toJSON = function() {
            return this.toPOJO()
          }, e.prototype.toString = function() {
            var e = this;
            return this.name + "[{ " + Array.from(this.keys()).map(
              function(t) {
                return t + ": " + e.get(t)
              }).join(", ") + " }]"
          }, e.prototype.observe = function(e, t) {
            return it(this, e)
          }, e.prototype.intercept = function(e) {
            return tt(this, e)
          }, e
        }(),
        yt = _("ObservableMap", dt),
        vt = {},
        mt = function() {
          function e(e, t, n) {
            if (void 0 === t && (t = D), void 0 === n && (n =
                "ObservableSet@" + f()), this.name = n, this[pt] = vt,
              this._data = new Set, this._atom = x(this.name), this[
                Symbol.toStringTag] = "Set", "function" !== typeof Set)
              throw new Error(
                "mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js"
              );
            this.enhancer = function(e, r) {
              return t(e, r, n)
            }, e && this.replace(e)
          }
          return e.prototype.dehanceValue = function(e) {
            return void 0 !== this.dehancer ? this.dehancer(e) : e
          }, e.prototype.clear = function() {
            var e = this;
            Xe(function() {
              pe(function() {
                var t, n;
                try {
                  for (var r = a(e._data.values()), i = r.next(); !
                    i.done; i = r.next()) {
                    var o = i.value;
                    e.delete(o)
                  }
                } catch (s) {
                  t = {
                    error: s
                  }
                } finally {
                  try {
                    i && !i.done && (n = r.return) && n.call(
                      r)
                  } finally {
                    if (t) throw t.error
                  }
                }
              })
            })
          }, e.prototype.forEach = function(e, t) {
            var n, r;
            try {
              for (var i = a(this), o = i.next(); !o.done; o = i.next()) {
                var s = o.value;
                e.call(t, s, s, this)
              }
            } catch (u) {
              n = {
                error: u
              }
            } finally {
              try {
                o && !o.done && (r = i.return) && r.call(i)
              } finally {
                if (n) throw n.error
              }
            }
          }, Object.defineProperty(e.prototype, "size", {
            get: function() {
              return this._atom.reportObserved(), this._data.size
            },
            enumerable: !0,
            configurable: !0
          }), e.prototype.add = function(e) {
            var t = this;
            if ((le(this._atom), et(this)) && !(r = nt(this, {
                type: "add",
                object: this,
                newValue: e
              }))) return this;
            if (!this.has(e)) {
              Xe(function() {
                t._data.add(t.enhancer(e, void 0)), t._atom.reportChanged()
              });
              var n = rt(this),
                r = n ? {
                  type: "add",
                  object: this,
                  newValue: e
                } : null;
              0, n && ot(this, r)
            }
            return this
          }, e.prototype.delete = function(e) {
            var t = this;
            if (et(this) && !(r = nt(this, {
                type: "delete",
                object: this,
                oldValue: e
              }))) return !1;
            if (this.has(e)) {
              var n = rt(this),
                r = n ? {
                  type: "delete",
                  object: this,
                  oldValue: e
                } : null;
              return Xe(function() {
                t._atom.reportChanged(), t._data.delete(e)
              }), n && ot(this, r), !0
            }
            return !1
          }, e.prototype.has = function(e) {
            return this._atom.reportObserved(), this._data.has(this.dehanceValue(
              e))
          }, e.prototype.entries = function() {
            var e = 0,
              t = Array.from(this.keys()),
              n = Array.from(this.values());
            return Dt({
              next: function() {
                var r = e;
                return e += 1, r < n.length ? {
                  value: [t[r], n[r]],
                  done: !1
                } : {
                  done: !0
                }
              }
            })
          }, e.prototype.keys = function() {
            return this.values()
          }, e.prototype.values = function() {
            this._atom.reportObserved();
            var e = this,
              t = 0,
              n = Array.from(this._data.values());
            return Dt({
              next: function() {
                return t < n.length ? {
                  value: e.dehanceValue(n[t++]),
                  done: !1
                } : {
                  done: !0
                }
              }
            })
          }, e.prototype.replace = function(e) {
            var t = this;
            return gt(e) && (e = e.toJS()), Xe(function() {
              Array.isArray(e) ? (t.clear(), e.forEach(function(e) {
                return t.add(e)
              })) : w(e) ? (t.clear(), e.forEach(function(e) {
                return t.add(e)
              })) : null !== e && void 0 !== e && p(
                "Cannot initialize set from " + e)
            }), this
          }, e.prototype.observe = function(e, t) {
            return it(this, e)
          }, e.prototype.intercept = function(e) {
            return tt(this, e)
          }, e.prototype.toJS = function() {
            return new Set(this)
          }, e.prototype.toString = function() {
            return this.name + "[ " + Array.from(this).join(", ") +
              " ]"
          }, e.prototype[(pt = C, Symbol.iterator)] = function() {
            return this.values()
          }, e
        }(),
        gt = _("ObservableSet", mt),
        _t = function() {
          function e(e, t, n, r) {
            void 0 === t && (t = new Map), this.target = e, this.values =
              t, this.name = n, this.defaultEnhancer = r, this.keysAtom =
              new S(n + ".keys")
          }
          return e.prototype.read = function(e) {
            return this.values.get(e).get()
          }, e.prototype.write = function(e, t) {
            var n = this.target,
              r = this.values.get(e);
            if (r instanceof ie) r.set(t);
            else {
              if (et(this)) {
                if (!(o = nt(this, {
                    type: "update",
                    object: this.proxy || n,
                    name: e,
                    newValue: t
                  }))) return;
                t = o.newValue
              }
              if ((t = r.prepareNewValue(t)) !== _e.UNCHANGED) {
                var i = rt(this),
                  o = i ? {
                    type: "update",
                    object: this.proxy || n,
                    oldValue: r.value,
                    name: e,
                    newValue: t
                  } : null;
                0, r.setNewValue(t), i && ot(this, o)
              }
            }
          }, e.prototype.has = function(e) {
            var t = this.pendingKeys || (this.pendingKeys = new Map),
              n = t.get(e);
            if (n) return n.get();
            var r = !!this.values.get(e);
            return n = new re(r, F, this.name + "." + e.toString() +
              "?", !1), t.set(e, n), n.get()
          }, e.prototype.addObservableProp = function(e, t, n) {
            void 0 === n && (n = this.defaultEnhancer);
            var r = this.target;
            if (et(this)) {
              var i = nt(this, {
                object: this.proxy || r,
                name: e,
                type: "add",
                newValue: t
              });
              if (!i) return;
              t = i.newValue
            }
            var o = new re(t, n, this.name + "." + e, !1);
            this.values.set(e, o), t = o.value, Object.defineProperty(
              r, e,
              function(e) {
                return wt[e] || (wt[e] = {
                  configurable: !0,
                  enumerable: !0,
                  get: function() {
                    return this[C].read(e)
                  },
                  set: function(t) {
                    this[C].write(e, t)
                  }
                })
              }(e)), this.notifyPropertyAddition(e, t)
          }, e.prototype.addComputedProp = function(e, t, n) {
            var r = this.target;
            n.name = n.name || this.name + "." + t, this.values.set(t,
              new ie(n)), (e === r || function(e, t) {
              var n = Object.getOwnPropertyDescriptor(e, t);
              return !n || !1 !== n.configurable && !1 !== n.writable
            }(e, t)) && Object.defineProperty(e, t, function(e) {
              return Et[e] || (Et[e] = {
                configurable: !1,
                enumerable: !1,
                get: function() {
                  return Ct(this).read(e)
                },
                set: function(t) {
                  Ct(this).write(e, t)
                }
              })
            }(t))
          }, e.prototype.remove = function(e) {
            if (this.values.has(e)) {
              var t = this.target;
              if (et(this))
                if (!(a = nt(this, {
                    object: this.proxy || t,
                    name: e,
                    type: "remove"
                  }))) return;
              try {
                Se();
                var n = rt(this),
                  r = this.values.get(e),
                  i = r && r.get();
                if (r && r.set(void 0), this.keysAtom.reportChanged(),
                  this.values.delete(e), this.pendingKeys) {
                  var o = this.pendingKeys.get(e);
                  o && o.set(!1)
                }
                delete this.target[e];
                var a = n ? {
                  type: "remove",
                  object: this.proxy || t,
                  oldValue: i,
                  name: e
                } : null;
                0, n && ot(this, a)
              } finally {
                Te()
              }
            }
          }, e.prototype.illegalAccess = function(e, t) {
            console.warn("Property '" + t + "' of '" + e +
              "' was accessed through the prototype chain. Use 'decorate' instead to declare the prop or access it statically through it's owner"
            )
          }, e.prototype.observe = function(e, t) {
            return it(this, e)
          }, e.prototype.intercept = function(e) {
            return tt(this, e)
          }, e.prototype.notifyPropertyAddition = function(e, t) {
            var n = rt(this),
              r = n ? {
                type: "add",
                object: this.proxy || this.target,
                name: e,
                newValue: t
              } : null;
            if (n && ot(this, r), this.pendingKeys) {
              var i = this.pendingKeys.get(e);
              i && i.set(!0)
            }
            this.keysAtom.reportChanged()
          }, e.prototype.getKeys = function() {
            var e, t;
            this.keysAtom.reportObserved();
            var n = [];
            try {
              for (var r = a(this.values), i = r.next(); !i.done; i =
                r.next()) {
                var o = s(i.value, 2),
                  u = o[0];
                o[1] instanceof re && n.push(u)
              }
            } catch (l) {
              e = {
                error: l
              }
            } finally {
              try {
                i && !i.done && (t = r.return) && t.call(r)
              } finally {
                if (e) throw e.error
              }
            }
            return n
          }, e
        }();

      function bt(e, t, n) {
        if (void 0 === t && (t = ""), void 0 === n && (n = D), Object.prototype
          .hasOwnProperty.call(e, C)) return e[C];
        m(e) || (t = (e.constructor.name || "ObservableObject") + "@" +
          f()), t || (t = "ObservableObject@" + f());
        var r = new _t(e, new Map, t, n);
        return g(e, C, r), r
      }
      var wt = Object.create(null),
        Et = Object.create(null);

      function Ct(e) {
        var t = e[C];
        return t || (R(e), e[C])
      }
      var St = _("ObservableObjectAdministration", _t);

      function Tt(e) {
        return !!v(e) && (R(e), St(e[C]))
      }

      function xt(e, t) {
        if ("object" === typeof e && null !== e) {
          if (ft(e)) return void 0 !== t && p(!1), e[C].atom;
          if (gt(e)) return e[C];
          if (yt(e)) {
            var n = e;
            return void 0 === t ? n._keysAtom : ((r = n._data.get(t) ||
              n._hasMap.get(t)) || p(!1), r)
          }
          var r;
          if (R(e), t && !e[C] && e[t], Tt(e)) return t ? ((r = e[C].values
            .get(t)) || p(!1), r) : p(!1);
          if (T(e) || oe(e) || Ae(e)) return e
        } else if ("function" === typeof e && Ae(e[C])) return e[C];
        return p(!1)
      }

      function kt(e, t) {
        return e || p("Expecting some object"), void 0 !== t ? kt(xt(e,
          t)) : T(e) || oe(e) || Ae(e) ? e : yt(e) || gt(e) ? e : (R(
          e), e[C] ? e[C] : void p(!1))
      }

      function Pt(e, t) {
        return (void 0 !== t ? xt(e, t) : Tt(e) || yt(e) || gt(e) ? kt(
          e) : xt(e)).name
      }
      var Ot = Object.prototype.toString;

      function Nt(e, t) {
        return It(e, t)
      }

      function It(e, t, n, r) {
        if (e === t) return 0 !== e || 1 / e === 1 / t;
        if (null == e || null == t) return !1;
        if (e !== e) return t !== t;
        var i = typeof e;
        return ("function" === i || "object" === i || "object" ==
          typeof t) && function(e, t, n, r) {
          e = Rt(e), t = Rt(t);
          var i = Ot.call(e);
          if (i !== Ot.call(t)) return !1;
          switch (i) {
            case "[object RegExp]":
            case "[object String]":
              return "" + e === "" + t;
            case "[object Number]":
              return +e !== +e ? +t !== +t : 0 === +e ? 1 / +e === 1 /
                t : +e === +t;
            case "[object Date]":
            case "[object Boolean]":
              return +e === +t;
            case "[object Symbol]":
              return "undefined" !== typeof Symbol && Symbol.valueOf.call(
                e) === Symbol.valueOf.call(t)
          }
          var o = "[object Array]" === i;
          if (!o) {
            if ("object" != typeof e || "object" != typeof t) return !
              1;
            var a = e.constructor,
              s = t.constructor;
            if (a !== s && !("function" === typeof a && a instanceof a &&
                "function" === typeof s && s instanceof s) &&
              "constructor" in e && "constructor" in t) return !1
          }
          r = r || [];
          var u = (n = n || []).length;
          for (; u--;)
            if (n[u] === e) return r[u] === t;
          if (n.push(e), r.push(t), o) {
            if ((u = e.length) !== t.length) return !1;
            for (; u--;)
              if (!It(e[u], t[u], n, r)) return !1
          } else {
            var l, c = Object.keys(e);
            if (u = c.length, Object.keys(t).length !== u) return !1;
            for (; u--;)
              if (l = c[u], !At(t, l) || !It(e[l], t[l], n, r)) return
                !1
          }
          return n.pop(), r.pop(), !0
        }(e, t, n, r)
      }

      function Rt(e) {
        return ft(e) ? e.slice() : b(e) || yt(e) ? Array.from(e.entries()) :
          w(e) || gt(e) ? Array.from(e.entries()) : e
      }

      function At(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
      }

      function Dt(e) {
        return e[Symbol.iterator] = Ft, e
      }

      function Ft() {
        return this
      }
      if ("undefined" === typeof Proxy || "undefined" === typeof Symbol)
        throw new Error(
          "[mobx] MobX 5+ requires Proxy and Symbol objects. If your environment doesn't support Proxy objects, please downgrade to MobX 4. For React Native Android, consider upgrading JSCore."
        );
      "object" === typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ &&
        __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
          spy: Fe,
          extras: {
            getDebugName: Pt
          },
          $mobx: C
        })
    }).call(this, n(34), n(21))
  }, function(e, t, n) {
    "use strict";
    n.d(t, "c", function() {
      return fe
    }), n.d(t, "a", function() {
      return ge
    }), n.d(t, "b", function() {
      return H
    });
    var r = n(1),
      i = n(0),
      o = n.n(i),
      a = n(16);

    function s(e) {
      return (s = "function" === typeof Symbol && "symbol" === typeof Symbol
        .iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" === typeof Symbol && e.constructor ===
            Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function u(e, t) {
      if (!(e instanceof t)) throw new TypeError(
        "Cannot call a class as a function")
    }

    function l(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in
          r && (r.writable = !0), Object.defineProperty(e, r.key, r)
      }
    }

    function c(e, t, n) {
      return t && l(e.prototype, t), n && l(e, n), e
    }

    function f(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e
    }

    function p(e, t) {
      if ("function" !== typeof t && null !== t) throw new TypeError(
        "Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), t && d(e, t)
    }

    function h(e) {
      return (h = Object.setPrototypeOf ? Object.getPrototypeOf :
        function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function d(e, t) {
      return (d = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e
      })(e, t)
    }

    function y(e, t) {
      return !t || "object" !== typeof t && "function" !== typeof t ?
        function(e) {
          if (void 0 === e) throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
          return e
        }(e) : t
    }

    function v(e, t) {
      return e(t = {
        exports: {}
      }, t.exports), t.exports
    }
    var m, g = v(function(e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = "function" === typeof Symbol && Symbol.for,
        r = n ? Symbol.for("react.element") : 60103,
        i = n ? Symbol.for("react.portal") : 60106,
        o = n ? Symbol.for("react.fragment") : 60107,
        a = n ? Symbol.for("react.strict_mode") : 60108,
        s = n ? Symbol.for("react.profiler") : 60114,
        u = n ? Symbol.for("react.provider") : 60109,
        l = n ? Symbol.for("react.context") : 60110,
        c = n ? Symbol.for("react.async_mode") : 60111,
        f = n ? Symbol.for("react.concurrent_mode") : 60111,
        p = n ? Symbol.for("react.forward_ref") : 60112,
        h = n ? Symbol.for("react.suspense") : 60113,
        d = n ? Symbol.for("react.memo") : 60115,
        y = n ? Symbol.for("react.lazy") : 60116;

      function v(e) {
        if ("object" === typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case r:
              switch (e = e.type) {
                case c:
                case f:
                case o:
                case s:
                case a:
                  return e;
                default:
                  switch (e = e && e.$$typeof) {
                    case l:
                    case p:
                    case u:
                      return e;
                    default:
                      return t
                  }
              }
            case i:
              return t
          }
        }
      }

      function m(e) {
        return v(e) === f
      }
      t.typeOf = v, t.AsyncMode = c, t.ConcurrentMode = f, t.ContextConsumer =
        l, t.ContextProvider = u, t.Element = r, t.ForwardRef = p, t.Fragment =
        o, t.Profiler = s, t.Portal = i, t.StrictMode = a, t.isValidElementType =
        function(e) {
          return "string" === typeof e || "function" === typeof e ||
            e === o || e === f || e === s || e === a || e === h ||
            "object" === typeof e && null !== e && (e.$$typeof === y ||
              e.$$typeof === d || e.$$typeof === u || e.$$typeof ===
              l || e.$$typeof === p)
        }, t.isAsyncMode = function(e) {
          return m(e) || v(e) === c
        }, t.isConcurrentMode = m, t.isContextConsumer = function(e) {
          return v(e) === l
        }, t.isContextProvider = function(e) {
          return v(e) === u
        }, t.isElement = function(e) {
          return "object" === typeof e && null !== e && e.$$typeof ===
            r
        }, t.isForwardRef = function(e) {
          return v(e) === p
        }, t.isFragment = function(e) {
          return v(e) === o
        }, t.isProfiler = function(e) {
          return v(e) === s
        }, t.isPortal = function(e) {
          return v(e) === i
        }, t.isStrictMode = function(e) {
          return v(e) === a
        }
    });
    (m = g) && m.__esModule && Object.prototype.hasOwnProperty.call(m,
      "default") && m.default;
    g.typeOf, g.AsyncMode, g.ConcurrentMode, g.ContextConsumer, g.ContextProvider,
      g.Element, g.ForwardRef, g.Fragment, g.Profiler, g.Portal, g.StrictMode,
      g.isValidElementType, g.isAsyncMode, g.isConcurrentMode, g.isContextConsumer,
      g.isContextProvider, g.isElement, g.isForwardRef, g.isFragment, g.isProfiler,
      g.isPortal, g.isStrictMode;
    var _ = v(function(e) {
        e.exports = g
      }),
      b = {
        childContextTypes: !0,
        contextType: !0,
        contextTypes: !0,
        defaultProps: !0,
        displayName: !0,
        getDefaultProps: !0,
        getDerivedStateFromError: !0,
        getDerivedStateFromProps: !0,
        mixins: !0,
        propTypes: !0,
        type: !0
      },
      w = {
        name: !0,
        length: !0,
        prototype: !0,
        caller: !0,
        callee: !0,
        arguments: !0,
        arity: !0
      },
      E = {};
    E[_.ForwardRef] = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0
    };
    var C = Object.defineProperty,
      S = Object.getOwnPropertyNames,
      T = Object.getOwnPropertySymbols,
      x = Object.getOwnPropertyDescriptor,
      k = Object.getPrototypeOf,
      P = Object.prototype;
    var O = function e(t, n, r) {
        if ("string" !== typeof n) {
          if (P) {
            var i = k(n);
            i && i !== P && e(t, i, r)
          }
          var o = S(n);
          T && (o = o.concat(T(n)));
          for (var a = E[t.$$typeof] || b, s = E[n.$$typeof] || b, u = 0; u <
            o.length; ++u) {
            var l = o[u];
            if (!w[l] && (!r || !r[l]) && (!s || !s[l]) && (!a || !a[l])) {
              var c = x(n, l);
              try {
                C(t, l, c)
              } catch (f) {}
            }
          }
          return t
        }
        return t
      },
      N = function() {
        function e() {
          u(this, e), this.listeners = []
        }
        return c(e, [{
          key: "on",
          value: function(e) {
            var t = this;
            return this.listeners.push(e),
              function() {
                var n = t.listeners.indexOf(e); - 1 !== n && t.listeners
                  .splice(n, 1)
              }
          }
        }, {
          key: "emit",
          value: function(e) {
            this.listeners.forEach(function(t) {
              return t(e)
            })
          }
        }]), e
      }();

    function I(e) {
      function t(t, n, i, o, a, s) {
        for (var u = arguments.length, l = new Array(u > 6 ? u - 6 : 0),
            c = 6; c < u; c++) l[c - 6] = arguments[c];
        return Object(r.m)(function() {
          if (o = o || "<<anonymous>>", s = s || i, null == n[i]) {
            if (t) {
              var r = null === n[i] ? "null" : "undefined";
              return new Error("The " + a + " `" + s +
                "` is marked as required in `" + o +
                "`, but its value is `" + r + "`.")
            }
            return null
          }
          return e.apply(void 0, [n, i, o, a, s].concat(l))
        })
      }
      var n = t.bind(null, !1);
      return n.isRequired = t.bind(null, !0), n
    }

    function R(e) {
      var t = s(e);
      return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" :
        function(e, t) {
          return "symbol" === e || "Symbol" === t["@@toStringTag"] ||
            "function" === typeof Symbol && t instanceof Symbol
        }(t, e) ? "symbol" : t
    }

    function A(e, t) {
      return I(function(n, i, o, a, s) {
        return Object(r.m)(function() {
          if (e && R(n[i]) === t.toLowerCase()) return null;
          var a;
          switch (t) {
            case "Array":
              a = r.h;
              break;
            case "Object":
              a = r.j;
              break;
            case "Map":
              a = r.i;
              break;
            default:
              throw new Error("Unexpected mobxType: ".concat(t))
          }
          var u = n[i];
          if (!a(u)) {
            var l = function(e) {
                var t = R(e);
                if ("object" === t) {
                  if (e instanceof Date) return "date";
                  if (e instanceof RegExp) return "regexp"
                }
                return t
              }(u),
              c = e ? " or javascript `" + t.toLowerCase() + "`" :
              "";
            return new Error("Invalid prop `" + s + "` of type `" +
              l + "` supplied to `" + o +
              "`, expected `mobx.Observable" + t + "`" + c +
              ".")
          }
          return null
        })
      })
    }

    function D(e, t) {
      return I(function(n, i, o, a, s) {
        for (var u = arguments.length, l = new Array(u > 5 ? u - 5 :
            0), c = 5; c < u; c++) l[c - 5] = arguments[c];
        return Object(r.m)(function() {
          if ("function" !== typeof t) return new Error(
            "Property `" + s + "` of component `" + o +
            "` has invalid PropType notation.");
          var r = A(e, "Array")(n, i, o);
          if (r instanceof Error) return r;
          for (var u = n[i], c = 0; c < u.length; c++)
            if ((r = t.apply(void 0, [u, c, o, a, s + "[" + c +
                "]"
              ].concat(l))) instanceof Error) return r;
          return null
        })
      })
    }
    A(!1, "Array"), D.bind(null, !1), A(!1, "Map"), A(!1, "Object"), A(!0,
      "Array"), D.bind(null, !0);
    var F = A(!0, "Object");
    var L = 0;

    function M(e) {
      if ("function" === typeof Symbol) return Symbol(e);
      var t = "__$mobx-react ".concat(e, " (").concat(L, ")");
      return L++, t
    }
    var j = M("patchMixins"),
      U = M("patchedDefinition");

    function W(e, t) {
      for (var n = this, r = arguments.length, i = new Array(r > 2 ? r -
          2 : 0), o = 2; o < r; o++) i[o - 2] = arguments[o];
      t.locks++;
      try {
        var a;
        return void 0 !== e && null !== e && (a = e.apply(this, i)), a
      } finally {
        t.locks--, 0 === t.locks && t.methods.forEach(function(e) {
          e.apply(n, i)
        })
      }
    }

    function V(e, t) {
      return function() {
        for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
          r[i] = arguments[i];
        W.call.apply(W, [this, e, t].concat(r))
      }
    }

    function B(e, t) {
      for (var n = function(e, t) {
            var n = e[j] = e[j] || {},
              r = n[t] = n[t] || {};
            return r.locks = r.locks || 0, r.methods = r.methods || [], r
          }(e, t), r = arguments.length, i = new Array(r > 2 ? r - 2 : 0),
          o = 2; o < r; o++) i[o - 2] = arguments[o];
      for (var a = 0; a < i.length; a++) {
        var s = i[a];
        n.methods.indexOf(s) < 0 && n.methods.push(s)
      }
      var u = Object.getOwnPropertyDescriptor(e, t);
      if (!u || !u[U]) {
        var l = e[t],
          c = function e(t, n, r, i, o) {
            var a;
            var s = V(o, i);
            return a = {}, f(a, U, !0), f(a, "get", function() {
              return s
            }), f(a, "set", function(o) {
              if (this === t) s = V(o, i);
              else {
                var a = e(this, n, r, i, o);
                Object.defineProperty(this, n, a)
              }
            }), f(a, "configurable", !0), f(a, "enumerable", r), a
          }(e, t, u ? u.enumerable : void 0, n, l);
        Object.defineProperty(e, t, c)
      }
    }
    var q = {
      mobxStores: F
    };
    Object.seal(q);
    var z = {
      contextTypes: {
        get: function() {
          return q
        },
        set: function(e) {
          console.warn(
            "Mobx Injector: you are trying to attach `contextTypes` on an component decorated with `inject` (or `observer`) HOC. Please specify the contextTypes on the wrapped component instead. It is accessible through the `wrappedComponent`"
          )
        },
        configurable: !0,
        enumerable: !1
      },
      isMobxInjector: {
        value: !0,
        writable: !0,
        configurable: !0,
        enumerable: !0
      }
    };

    function Q(e, t, n) {
      var r = "inject-" + (t.displayName || t.name || t.constructor && t.constructor
        .name || "Unknown");
      n && (r += "-with-" + n);
      var o = function(n) {
        function r() {
          var e, t;
          u(this, r);
          for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++)
            i[o] = arguments[o];
          return (t = y(this, (e = h(r)).call.apply(e, [this].concat(i))))
            .storeRef = function(e) {
              t.wrappedInstance = e
            }, t
        }
        return p(r, i["Component"]), c(r, [{
          key: "render",
          value: function() {
            var n = {};
            for (var r in this.props) this.props.hasOwnProperty(
              r) && (n[r] = this.props[r]);
            var o = e(this.context.mobxStores || {}, n, this.context) || {};
            for (var a in o) n[a] = o[a];
            return function(e) {
                return !(e.prototype && e.prototype.render)
              }(t) || (n.ref = this.storeRef), Object(i.createElement)
              (t, n)
          }
        }]), r
      }();
      return o.displayName = r, O(o, t), o.wrappedComponent = t, Object.defineProperties(
        o, z), o
    }

    function H() {
      var e;
      if ("function" === typeof arguments[0]) return e = arguments[0],
        function(t) {
          var n = Q(e, t);
          return n.isMobxInjector = !1, (n = fe(n)).isMobxInjector = !0,
            n
        };
      for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[
        n];
      return e = function(e) {
          return function(t, n) {
            return e.forEach(function(e) {
              if (!(e in n)) {
                if (!(e in t)) throw new Error(
                  "MobX injector: Store '" + e +
                  "' is not available! Make sure it is provided by some Provider"
                );
                n[e] = t[e]
              }
            }), n
          }
        }(t),
        function(n) {
          return Q(e, n, t.join("-"))
        }
    }
    var K = r.a || "$mobx",
      G = M("isUnmounted"),
      $ = !1,
      Y = !1,
      X = !1,
      J = "undefined" !== typeof WeakMap ? new WeakMap : void 0,
      Z = new N,
      ee = M("skipRender"),
      te = M("isForcingUpdate"),
      ne = "function" === typeof i.forwardRef && Object(i.forwardRef)(
        function(e, t) {}).$$typeof;

    function re(e, t, n) {
      Object.hasOwnProperty.call(e, t) ? e[t] = n : Object.defineProperty(
        e, t, {
          enumerable: !1,
          configurable: !0,
          writable: !0,
          value: n
        })
    }

    function ie(e) {
      if (a.findDOMNode) try {
        return Object(a.findDOMNode)(e)
      } catch (t) {
        return null
      }
      return null
    }

    function oe(e) {
      var t = ie(e);
      t && J && J.set(t, e), Z.emit({
        event: "render",
        renderTime: e.__$mobRenderEnd - e.__$mobRenderStart,
        totalTime: Date.now() - e.__$mobRenderStart,
        component: e,
        node: t
      })
    }
    var ae = new N;

    function se(e, t) {
      if (ue(e, t)) return !0;
      if ("object" !== s(e) || null === e || "object" !== s(t) || null ===
        t) return !1;
      var n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (var i = 0; i < n.length; i++)
        if (!hasOwnProperty.call(t, n[i]) || !ue(e[n[i]], t[n[i]])) return
          !1;
      return !0
    }

    function ue(e, t) {
      return e === t ? 0 !== e || 1 / e === 1 / t : e !== e && t !== t
    }
    var le = {
      componentWillUnmount: function() {
        if (!0 !== Y && (this.render[K] && this.render[K].dispose(),
            this[G] = !0, $)) {
          var e = ie(this);
          e && J && J.delete(e), Z.emit({
            event: "destroy",
            component: this,
            node: e
          })
        }
      },
      componentDidMount: function() {
        $ && oe(this)
      },
      componentDidUpdate: function() {
        $ && oe(this)
      },
      shouldComponentUpdate: function(e, t) {
        return Y && console.warn(
          "[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side."
        ), this.state !== t || !se(this.props, e)
      }
    };

    function ce(e, t) {
      var n = M("reactProp_".concat(t, "_valueHolder")),
        i = M("reactProp_".concat(t, "_atomHolder"));

      function o() {
        return this[i] || re(this, i, Object(r.f)("reactive " + t)), this[
          i]
      }
      Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !0,
        get: function() {
          return o.call(this).reportObserved(), this[n]
        },
        set: function(e) {
          this[te] || se(this[n], e) ? re(this, n, e) : (re(this, n,
              e), re(this, ee, !0), o.call(this).reportChanged(),
            re(this, ee, !1))
        }
      })
    }

    function fe(e, t) {
      if ("string" === typeof e) throw new Error(
        "Store names should be provided as array");
      if (Array.isArray(e)) return X || (X = !0, console.warn(
        'Mobx observer: Using observer to inject stores is deprecated since 4.0. Use `@inject("store1", "store2") @observer ComponentClass` or `inject("store1", "store2")(observer(componentClass))` instead of `@observer(["store1", "store2"]) ComponentClass`'
      )), t ? H.apply(null, e)(fe(t)) : function(t) {
        return fe(e, t)
      };
      var n = e;
      if (!0 === n.isMobxInjector && console.warn(
          "Mobx observer: You are trying to use 'observer' on a component that already has 'inject'. Please apply 'observer' before applying 'inject'"
        ), n.__proto__ === i.PureComponent && console.warn(
          "Mobx observer: You are using 'observer' on React.PureComponent. These two achieve two opposite goals and should not be used together"
        ), ne && n.$$typeof === ne) {
        var a = n.render;
        if ("function" !== typeof a) throw new Error(
          "render property of ForwardRef was not a function");
        return Object(i.forwardRef)(function() {
          var e = arguments;
          return o.a.createElement(pe, null, function() {
            return a.apply(void 0, e)
          })
        })
      }
      if ("function" === typeof n && (!n.prototype || !n.prototype.render) &&
        !n.isReactClass && !i.Component.isPrototypeOf(n)) {
        var s, l, f = fe((l = s = function(e) {
            function t() {
              return u(this, t), y(this, h(t).apply(this, arguments))
            }
            return p(t, i["Component"]), c(t, [{
              key: "render",
              value: function() {
                return n.call(this, this.props, this.context)
              }
            }]), t
          }(), s.displayName = n.displayName || n.name, s.contextTypes =
          n.contextTypes, s.propTypes = n.propTypes, s.defaultProps =
          n.defaultProps, l));
        return O(f, n), f
      }
      if (!n) throw new Error(
        "Please pass a valid component to 'observer'");
      var d = n.prototype || n;
      ! function(e) {
        ["componentDidMount", "componentWillUnmount",
          "componentDidUpdate"
        ].forEach(function(t) {
            ! function(e, t) {
              B(e, t, le[t])
            }(e, t)
          }), e.shouldComponentUpdate ? e.shouldComponentUpdate !== le.shouldComponentUpdate &&
          console.warn(
            "Use `shouldComponentUpdate` in an `observer` based component breaks the behavior of `observer` and might lead to unexpected results. Manually implementing `sCU` should not be needed when using mobx-react."
          ) : e.shouldComponentUpdate = le.shouldComponentUpdate
      }(d), n.isMobXReactObserver = !0, ce(d, "props"), ce(d, "state");
      var v = d.render;
      return d.render = function() {
        return function(e) {
          var t = this;
          if (!0 === Y) return e.call(this);

          function n() {
            var e = this;
            u = !1;
            var t = void 0,
              n = void 0;
            if (l.track(function() {
                $ && (e.__$mobRenderStart = Date.now());
                try {
                  n = Object(r.c)(!1, s)
                } catch (i) {
                  t = i
                }
                $ && (e.__$mobRenderEnd = Date.now())
              }), t) throw ae.emit(t), t;
            return n
          }
          var o = this.displayName || this.name || this.constructor &&
            (this.constructor.displayName || this.constructor.name) ||
            "<component>",
            a = this._reactInternalInstance && this._reactInternalInstance
            ._rootNodeID || this._reactInternalInstance && this._reactInternalInstance
            ._debugID || this._reactInternalFiber && this._reactInternalFiber
            ._debugID;
          re(this, ee, !1), re(this, te, !1);
          var s = e.bind(this),
            u = !1,
            l = new r.b("".concat(o, "#").concat(a, ".render()"),
              function() {
                if (!u && (u = !0, "function" === typeof t.componentWillReact &&
                    t.componentWillReact(), !0 !== t[G])) {
                  var e = !0;
                  try {
                    re(t, te, !0), t[ee] || i.Component.prototype.forceUpdate
                      .call(t), e = !1
                  } finally {
                    re(t, te, !1), e && l.dispose()
                  }
                }
              });
          return l.reactComponent = this, n[K] = l, this.render = n,
            n.call(this)
        }.call(this, v)
      }, n
    }
    var pe = fe(function(e) {
      var t = e.children,
        n = e.inject,
        r = e.render,
        i = t || r;
      if ("undefined" === typeof i) return null;
      if (!n) return i();
      console.warn(
        "<Observer inject=.../> is no longer supported. Please use inject on the enclosing component instead"
      );
      var a = H(n)(i);
      return o.a.createElement(a, null)
    });
    pe.displayName = "Observer";
    var he = function(e, t, n, r, i) {
      var o = "children" === t ? "render" : "children";
      return "function" === typeof e[t] && "function" === typeof e[o] ?
        new Error(
          "Invalid prop,do not use children and render in the same time in`" +
          n) : "function" !== typeof e[t] && "function" !== typeof e[o] ?
        new Error("Invalid prop `" + i + "` of type `" + s(e[t]) +
          "` supplied to `" + n + "`, expected `function`.") : void 0
    };

    function de() {
      var e = this.constructor.getDerivedStateFromProps(this.props, this.state);
      null !== e && void 0 !== e && this.setState(e)
    }

    function ye(e) {
      this.setState(function(t) {
        var n = this.constructor.getDerivedStateFromProps(e, t);
        return null !== n && void 0 !== n ? n : null
      }.bind(this))
    }

    function ve(e, t) {
      try {
        var n = this.props,
          r = this.state;
        this.props = e, this.state = t, this.__reactInternalSnapshotFlag = !
          0, this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
            n, r)
      } finally {
        this.props = n, this.state = r
      }
    }
    pe.propTypes = {
        render: he,
        children: he
      }, de.__suppressDeprecationWarning = !0, ye.__suppressDeprecationWarning = !
      0, ve.__suppressDeprecationWarning = !0;
    var me = {
        children: !0,
        key: !0,
        ref: !0
      },
      ge = function(e) {
        function t(e, n) {
          var r;
          return u(this, t), (r = y(this, h(t).call(this, e, n))).state = {},
            _e(e, r.state), r
        }
        return p(t, i["Component"]), c(t, [{
          key: "render",
          value: function() {
            return i.Children.only(this.props.children)
          }
        }, {
          key: "getChildContext",
          value: function() {
            var e = {};
            return _e(this.context.mobxStores, e), _e(this.props,
              e), {
              mobxStores: e
            }
          }
        }], [{
          key: "getDerivedStateFromProps",
          value: function(e, t) {
            if (!e) return null;
            if (!t) return e;
            if (Object.keys(e).filter(be).length !== Object.keys(
                t).filter(be).length && console.warn(
                "MobX Provider: The set of provided stores has changed. Please avoid changing stores as the change might not propagate to all children"
              ), !e.suppressChangedStoreWarning)
              for (var n in e) be(n) && t[n] !== e[n] && console.warn(
                "MobX Provider: Provided store '" + n +
                "' has changed. Please avoid replacing stores as the change might not propagate to all children"
              );
            return e
          }
        }]), t
      }();

    function _e(e, t) {
      if (e)
        for (var n in e) be(n) && (t[n] = e[n])
    }

    function be(e) {
      return !me[e] && "suppressChangedStoreWarning" !== e
    }
    ge.contextTypes = {
        mobxStores: F
      }, ge.childContextTypes = {
        mobxStores: F.isRequired
      },
      function(e) {
        var t = e.prototype;
        if (!t || !t.isReactComponent) throw new Error(
          "Can only polyfill class components");
        if ("function" !== typeof e.getDerivedStateFromProps &&
          "function" !== typeof t.getSnapshotBeforeUpdate) return e;
        var n = null,
          r = null,
          i = null;
        if ("function" === typeof t.componentWillMount ? n =
          "componentWillMount" : "function" === typeof t.UNSAFE_componentWillMount &&
          (n = "UNSAFE_componentWillMount"), "function" === typeof t.componentWillReceiveProps ?
          r = "componentWillReceiveProps" : "function" === typeof t.UNSAFE_componentWillReceiveProps &&
          (r = "UNSAFE_componentWillReceiveProps"), "function" === typeof t
          .componentWillUpdate ? i = "componentWillUpdate" : "function" ===
          typeof t.UNSAFE_componentWillUpdate && (i =
            "UNSAFE_componentWillUpdate"), null !== n || null !== r ||
          null !== i) {
          var o = e.displayName || e.name,
            a = "function" === typeof e.getDerivedStateFromProps ?
            "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
          throw Error(
            "Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n" +
            o + " uses " + a +
            " but also contains the following legacy lifecycles:" + (
              null !== n ? "\n  " + n : "") + (null !== r ? "\n  " + r :
              "") + (null !== i ? "\n  " + i : "") +
            "\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks"
          )
        }
        if ("function" === typeof e.getDerivedStateFromProps && (t.componentWillMount =
            de, t.componentWillReceiveProps = ye), "function" === typeof t
          .getSnapshotBeforeUpdate) {
          if ("function" !== typeof t.componentDidUpdate) throw new Error(
            "Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype"
          );
          t.componentWillUpdate = ve;
          var s = t.componentDidUpdate;
          t.componentDidUpdate = function(e, t, n) {
            var r = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot :
              n;
            s.call(this, e, t, r)
          }
        }
      }(ge);
    M("disposeOnUnmount");
    if (!i.Component) throw new Error(
      "mobx-react requires React to be available");
    if (!r.l) throw new Error("mobx-react requires mobx to be available");
    "function" === typeof a.unstable_batchedUpdates && Object(r.e)({
      reactionScheduler: a.unstable_batchedUpdates
    });
    if ("object" === ("undefined" === typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ ?
        "undefined" : s(__MOBX_DEVTOOLS_GLOBAL_HOOK__))) {
      var we = {
          spy: r.l,
          extras: {
            getDebugName: r.g
          }
        },
        Ee = {
          renderReporter: Z,
          componentByNodeRegistry: J,
          componentByNodeRegistery: J,
          trackComponents: function() {
            if ("undefined" === typeof WeakMap) throw new Error(
              "[mobx-react] tracking components is not supported in this browser."
            );
            $ || ($ = !0)
          }
        };
      __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobxReact(Ee, we)
    }
  }, function(e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError(
        "Cannot call a class as a function")
    }
    n.d(t, "a", function() {
      return r
    })
  }, function(e, t, n) {
    "use strict";

    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in
          r && (r.writable = !0), Object.defineProperty(e, r.key, r)
      }
    }

    function i(e, t, n) {
      return t && r(e.prototype, t), n && r(e, n), e
    }
    n.d(t, "a", function() {
      return i
    })
  }, function(e, t, n) {
    "use strict";

    function r(e) {
      return (r = Object.setPrototypeOf ? Object.getPrototypeOf :
        function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    n.d(t, "a", function() {
      return r
    })
  }, function(e, t, n) {
    "use strict";

    function r(e, t) {
      return (r = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e
      })(e, t)
    }

    function i(e, t) {
      if ("function" !== typeof t && null !== t) throw new TypeError(
        "Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), t && r(e, t)
    }
    n.d(t, "a", function() {
      return i
    })
  }, function(e, t, n) {
    "use strict";

    function r(e) {
      return (r = "function" === typeof Symbol && "symbol" === typeof Symbol
        .iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" === typeof Symbol && e.constructor ===
            Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function i(e) {
      return (i = "function" === typeof Symbol && "symbol" === r(Symbol.iterator) ?
        function(e) {
          return r(e)
        } : function(e) {
          return e && "function" === typeof Symbol && e.constructor ===
            Symbol && e !== Symbol.prototype ? "symbol" : r(e)
        })(e)
    }
    var o = n(27);

    function a(e, t) {
      return !t || "object" !== i(t) && "function" !== typeof t ? Object(
        o.a)(e) : t
    }
    n.d(t, "a", function() {
      return a
    })
  }, function(e, t, n) {
    "use strict";

    function r(e, t, n, r, i) {
      var o = {};
      return Object.keys(r).forEach(function(e) {
          o[e] = r[e]
        }), o.enumerable = !!o.enumerable, o.configurable = !!o.configurable, (
          "value" in o || o.initializer) && (o.writable = !0), o = n.slice()
        .reverse().reduce(function(n, r) {
          return r(e, t, n) || n
        }, o), i && void 0 !== o.initializer && (o.value = o.initializer ?
          o.initializer.call(i) : void 0, o.initializer = void 0), void 0 ===
        o.initializer && (Object.defineProperty(e, t, o), o = null), o
    }
    n.d(t, "a", function() {
      return r
    })
  }, function(e, t, n) {
    var r = n(39)("wks"),
      i = n(24),
      o = n(10).Symbol,
      a = "function" == typeof o;
    (e.exports = function(e) {
      return r[e] || (r[e] = a && o[e] || (a ? o : i)("Symbol." + e))
    }).store = r
  }, function(e, t) {
    var n = e.exports = "undefined" != typeof window && window.Math ==
      Math ? window : "undefined" != typeof self && self.Math == Math ?
      self : Function("return this")();
    "number" == typeof __g && (__g = n)
  }, function(e, t) {
    var n = e.exports = {
      version: "2.5.5"
    };
    "number" == typeof __e && (__e = n)
  }, function(e, t, n) {
    var r = n(10),
      i = n(11),
      o = n(13),
      a = n(23),
      s = n(52),
      u = function e(t, n, u) {
        var l, c, f, p, h = t & e.F,
          d = t & e.G,
          y = t & e.P,
          v = t & e.B,
          m = d ? r : t & e.S ? r[n] || (r[n] = {}) : (r[n] || {}).prototype,
          g = d ? i : i[n] || (i[n] = {}),
          _ = g.prototype || (g.prototype = {});
        for (l in d && (u = n), u) f = ((c = !h && m && void 0 !== m[l]) ?
            m : u)[l], p = v && c ? s(f, r) : y && "function" == typeof f ?
          s(Function.call, f) : f, m && a(m, l, f, t & e.U), g[l] != f &&
          o(g, l, p), y && _[l] != f && (_[l] = f)
      };
    r.core = i, u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u
      .U = 64, u.R = 128, e.exports = u
  }, function(e, t, n) {
    var r = n(17),
      i = n(29);
    e.exports = n(18) ? function(e, t, n) {
      return r.f(e, t, i(1, n))
    } : function(e, t, n) {
      return e[t] = n, e
    }
  }, function(e, t) {
    e.exports = function(e) {
      return "object" === typeof e ? null !== e : "function" === typeof e
    }
  }, function(e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function(e, t) {
      return n.call(e, t)
    }
  }, function(e, t, n) {
    "use strict";
    ! function e() {
      if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
        "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
      } catch (t) {
        console.error(t)
      }
    }(), e.exports = n(64)
  }, function(e, t, n) {
    var r = n(28),
      i = n(50),
      o = n(35),
      a = Object.defineProperty;
    t.f = n(18) ? Object.defineProperty : function(e, t, n) {
      if (r(e), t = o(t, !0), r(n), i) try {
        return a(e, t, n)
      } catch (s) {}
      if ("get" in n || "set" in n) throw TypeError(
        "Accessors not supported!");
      return "value" in n && (e[t] = n.value), e
    }
  }, function(e, t, n) {
    e.exports = !n(22)(function() {
      return 7 != Object.defineProperty({}, "a", {
        get: function() {
          return 7
        }
      }).a
    })
  }, function(e, t, n) {
    var r = n(36),
      i = n(25);
    e.exports = function(e) {
      return r(i(e))
    }
  }, function(e, t, n) {
    "use strict";

    function r(e, t, n, r) {
      n && Object.defineProperty(e, t, {
        enumerable: n.enumerable,
        configurable: n.configurable,
        writable: n.writable,
        value: n.initializer ? n.initializer.call(r) : void 0
      })
    }
    n.d(t, "a", function() {
      return r
    })
  }, function(e, t) {
    var n;
    n = function() {
      return this
    }();
    try {
      n = n || new Function("return this")()
    } catch (r) {
      "object" === typeof window && (n = window)
    }
    e.exports = n
  }, function(e, t) {
    e.exports = function(e) {
      try {
        return !!e()
      } catch (t) {
        return !0
      }
    }
  }, function(e, t, n) {
    var r = n(10),
      i = n(13),
      o = n(15),
      a = n(24)("src"),
      s = Function.toString,
      u = ("" + s).split("toString");
    n(11).inspectSource = function(e) {
      return s.call(e)
    }, (e.exports = function(e, t, n, s) {
      var l = "function" == typeof n;
      l && (o(n, "name") || i(n, "name", t)), e[t] !== n && (l && (o(
          n, a) || i(n, a, e[t] ? "" + e[t] : u.join(String(t)))),
        e === r ? e[t] = n : s ? e[t] ? e[t] = n : i(e, t, n) : (
          delete e[t], i(e, t, n)))
    })(Function.prototype, "toString", function() {
      return "function" == typeof this && this[a] || s.call(this)
    })
  }, function(e, t) {
    var n = 0,
      r = Math.random();
    e.exports = function(e) {
      return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(
        36))
    }
  }, function(e, t) {
    e.exports = function(e) {
      if (void 0 == e) throw TypeError("Can't call method on  " + e);
      return e
    }
  }, function(e, t, n) {
    var r = n(55),
      i = n(42);
    e.exports = Object.keys || function(e) {
      return r(e, i)
    }
  }, function(e, t, n) {
    "use strict";

    function r(e) {
      if (void 0 === e) throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called");
      return e
    }
    n.d(t, "a", function() {
      return r
    })
  }, function(e, t, n) {
    var r = n(14);
    e.exports = function(e) {
      if (!r(e)) throw TypeError(e + " is not an object!");
      return e
    }
  }, function(e, t) {
    e.exports = function(e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t
      }
    }
  }, function(e, t) {
    var n = {}.toString;
    e.exports = function(e) {
      return n.call(e).slice(8, -1)
    }
  }, function(e, t) {
    var n = Math.ceil,
      r = Math.floor;
    e.exports = function(e) {
      return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e)
    }
  }, function(e, t) {
    t.f = {}.propertyIsEnumerable
  }, function(e, t, n) {
    "use strict";
    n(70);
    var r, i = (r = n(59)) && "object" === typeof r && "default" in r ? r
      .default : r;
    e.exports = i
  }, function(e, t) {
    var n, r, i = e.exports = {};

    function o() {
      throw new Error("setTimeout has not been defined")
    }

    function a() {
      throw new Error("clearTimeout has not been defined")
    }

    function s(e) {
      if (n === setTimeout) return setTimeout(e, 0);
      if ((n === o || !n) && setTimeout) return n = setTimeout,
        setTimeout(e, 0);
      try {
        return n(e, 0)
      } catch (t) {
        try {
          return n.call(null, e, 0)
        } catch (t) {
          return n.call(this, e, 0)
        }
      }
    }! function() {
      try {
        n = "function" === typeof setTimeout ? setTimeout : o
      } catch (e) {
        n = o
      }
      try {
        r = "function" === typeof clearTimeout ? clearTimeout : a
      } catch (e) {
        r = a
      }
    }();
    var u, l = [],
      c = !1,
      f = -1;

    function p() {
      c && u && (c = !1, u.length ? l = u.concat(l) : f = -1, l.length &&
        h())
    }

    function h() {
      if (!c) {
        var e = s(p);
        c = !0;
        for (var t = l.length; t;) {
          for (u = l, l = []; ++f < t;) u && u[f].run();
          f = -1, t = l.length
        }
        u = null, c = !1,
          function(e) {
            if (r === clearTimeout) return clearTimeout(e);
            if ((r === a || !r) && clearTimeout) return r = clearTimeout,
              clearTimeout(e);
            try {
              r(e)
            } catch (t) {
              try {
                return r.call(null, e)
              } catch (t) {
                return r.call(this, e)
              }
            }
          }(e)
      }
    }

    function d(e, t) {
      this.fun = e, this.array = t
    }

    function y() {}
    i.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[
            n];
        l.push(new d(e, t)), 1 !== l.length || c || s(h)
      }, d.prototype.run = function() {
        this.fun.apply(null, this.array)
      }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version =
      "", i.versions = {}, i.on = y, i.addListener = y, i.once = y, i.off =
      y, i.removeListener = y, i.removeAllListeners = y, i.emit = y, i.prependListener =
      y, i.prependOnceListener = y, i.listeners = function(e) {
        return []
      }, i.binding = function(e) {
        throw new Error("process.binding is not supported")
      }, i.cwd = function() {
        return "/"
      }, i.chdir = function(e) {
        throw new Error("process.chdir is not supported")
      }, i.umask = function() {
        return 0
      }
  }, function(e, t, n) {
    var r = n(14);
    e.exports = function(e, t) {
      if (!r(e)) return e;
      var n, i;
      if (t && "function" == typeof(n = e.toString) && !r(i = n.call(e)))
        return i;
      if ("function" == typeof(n = e.valueOf) && !r(i = n.call(e)))
        return i;
      if (!t && "function" == typeof(n = e.toString) && !r(i = n.call(e)))
        return i;
      throw TypeError("Can't convert object to primitive value")
    }
  }, function(e, t, n) {
    var r = n(30);
    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
      return "String" == r(e) ? e.split("") : Object(e)
    }
  }, function(e, t, n) {
    var r = n(25);
    e.exports = function(e) {
      return Object(r(e))
    }
  }, function(e, t, n) {
    var r = n(31),
      i = Math.min;
    e.exports = function(e) {
      return e > 0 ? i(r(e), 9007199254740991) : 0
    }
  }, function(e, t, n) {
    var r = n(10),
      i = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
    e.exports = function(e) {
      return i[e] || (i[e] = {})
    }
  }, function(e, t, n) {
    var r = n(9)("unscopables"),
      i = Array.prototype;
    void 0 == i[r] && n(13)(i, r, {}), e.exports = function(e) {
      i[r][e] = !0
    }
  }, function(e, t, n) {
    var r = n(39)("keys"),
      i = n(24);
    e.exports = function(e) {
      return r[e] || (r[e] = i(e))
    }
  }, function(e, t) {
    e.exports =
      "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf"
      .split(",")
  }, function(e, t) {
    t.f = Object.getOwnPropertySymbols
  }, function(e, t, n) {
    var r = n(17).f,
      i = n(15),
      o = n(9)("toStringTag");
    e.exports = function(e, t, n) {
      e && !i(e = n ? e : e.prototype, o) && r(e, o, {
        configurable: !0,
        value: t
      })
    }
  }, function(e, t, n) {
    t.f = n(9)
  }, function(e, t, n) {
    var r = n(10),
      i = n(11),
      o = n(47),
      a = n(45),
      s = n(17).f;
    e.exports = function(e) {
      var t = i.Symbol || (i.Symbol = o ? {} : r.Symbol || {});
      "_" == e.charAt(0) || e in t || s(t, e, {
        value: a.f(e)
      })
    }
  }, function(e, t) {
    e.exports = !1
  }, function(e, t) {
    e.exports = {}
  }, function(e, t, n) {
    "use strict";
    var r = Object.getOwnPropertySymbols,
      i = Object.prototype.hasOwnProperty,
      o = Object.prototype.propertyIsEnumerable;
    e.exports = function() {
      try {
        if (!Object.assign) return !1;
        var e = new String("abc");
        if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0])
          return !1;
        for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(
          n)] = n;
        if ("0123456789" !== Object.getOwnPropertyNames(t).map(function(
            e) {
            return t[e]
          }).join("")) return !1;
        var r = {};
        return "abcdefghijklmnopqrst".split("").forEach(function(e) {
          r[e] = e
        }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({},
          r)).join("")
      } catch (i) {
        return !1
      }
    }() ? Object.assign : function(e, t) {
      for (var n, a, s = function(e) {
          if (null === e || void 0 === e) throw new TypeError(
            "Object.assign cannot be called with null or undefined"
          );
          return Object(e)
        }(e), u = 1; u < arguments.length; u++) {
        for (var l in n = Object(arguments[u])) i.call(n, l) && (s[l] =
          n[l]);
        if (r) {
          a = r(n);
          for (var c = 0; c < a.length; c++) o.call(n, a[c]) && (s[a[c]] =
            n[a[c]])
        }
      }
      return s
    }
  }, function(e, t, n) {
    e.exports = !n(18) && !n(22)(function() {
      return 7 != Object.defineProperty(n(51)("div"), "a", {
        get: function() {
          return 7
        }
      }).a
    })
  }, function(e, t, n) {
    var r = n(14),
      i = n(10).document,
      o = r(i) && r(i.createElement);
    e.exports = function(e) {
      return o ? i.createElement(e) : {}
    }
  }, function(e, t, n) {
    var r = n(77);
    e.exports = function(e, t, n) {
      if (r(e), void 0 === t) return e;
      switch (n) {
        case 1:
          return function(n) {
            return e.call(t, n)
          };
        case 2:
          return function(n, r) {
            return e.call(t, n, r)
          };
        case 3:
          return function(n, r, i) {
            return e.call(t, n, r, i)
          }
      }
      return function() {
        return e.apply(t, arguments)
      }
    }
  }, function(e, t, n) {
    var r = n(52),
      i = n(36),
      o = n(37),
      a = n(38),
      s = n(78);
    e.exports = function(e, t) {
      var n = 1 == e,
        u = 2 == e,
        l = 3 == e,
        c = 4 == e,
        f = 6 == e,
        p = 5 == e || f,
        h = t || s;
      return function(t, s, d) {
        for (var y, v, m = o(t), g = i(m), _ = r(s, d, 3), b = a(g.length),
            w = 0, E = n ? h(t, b) : u ? h(t, 0) : void 0; b > w; w++)
          if ((p || w in g) && (v = _(y = g[w], w, m), e))
            if (n) E[w] = v;
            else if (v) switch (e) {
            case 3:
              return !0;
            case 5:
              return y;
            case 6:
              return w;
            case 2:
              E.push(y)
          } else if (c) return !1;
        return f ? -1 : l || c ? c : E
      }
    }
  }, function(e, t, n) {
    var r = n(30);
    e.exports = Array.isArray || function(e) {
      return "Array" == r(e)
    }
  }, function(e, t, n) {
    var r = n(15),
      i = n(19),
      o = n(85)(!1),
      a = n(41)("IE_PROTO");
    e.exports = function(e, t) {
      var n, s = i(e),
        u = 0,
        l = [];
      for (n in s) n != a && r(s, n) && l.push(n);
      for (; t.length > u;) r(s, n = t[u++]) && (~o(l, n) || l.push(n));
      return l
    }
  }, function(e, t, n) {
    var r = n(28),
      i = n(99),
      o = n(42),
      a = n(41)("IE_PROTO"),
      s = function() {},
      u = function() {
        var e, t = n(51)("iframe"),
          r = o.length;
        for (t.style.display = "none", n(100).appendChild(t), t.src =
          "javascript:", (e = t.contentWindow.document).open(), e.write(
            "<script>document.F=Object<\/script>"), e.close(), u = e.F; r--;
        ) delete u.prototype[o[r]];
        return u()
      };
    e.exports = Object.create || function(e, t) {
      var n;
      return null !== e ? (s.prototype = r(e), n = new s, s.prototype =
        null, n[a] = e) : n = u(), void 0 === t ? n : i(n, t)
    }
  }, function(e, t, n) {
    var r = n(55),
      i = n(42).concat("length", "prototype");
    t.f = Object.getOwnPropertyNames || function(e) {
      return r(e, i)
    }
  }, function(e, t, n) {
    "use strict";
    var r = n(47),
      i = n(12),
      o = n(23),
      a = n(13),
      s = n(48),
      u = n(110),
      l = n(44),
      c = n(111),
      f = n(9)("iterator"),
      p = !([].keys && "next" in [].keys()),
      h = function() {
        return this
      };
    e.exports = function(e, t, n, d, y, v, m) {
      u(n, t, d);
      var g, _, b, w = function(e) {
          if (!p && e in T) return T[e];
          switch (e) {
            case "keys":
            case "values":
              return function() {
                return new n(this, e)
              }
          }
          return function() {
            return new n(this, e)
          }
        },
        E = t + " Iterator",
        C = "values" == y,
        S = !1,
        T = e.prototype,
        x = T[f] || T["@@iterator"] || y && T[y],
        k = x || w(y),
        P = y ? C ? w("entries") : k : void 0,
        O = "Array" == t && T.entries || x;
      if (O && (b = c(O.call(new e))) !== Object.prototype && b.next &&
        (l(b, E, !0), r || "function" == typeof b[f] || a(b, f, h)), C &&
        x && "values" !== x.name && (S = !0, k = function() {
          return x.call(this)
        }), r && !m || !p && !S && T[f] || a(T, f, k), s[t] = k, s[E] =
        h, y)
        if (g = {
            values: C ? k : w("values"),
            keys: v ? k : w("keys"),
            entries: P
          }, m)
          for (_ in g) _ in T || o(T, _, g[_]);
        else i(i.P + i.F * (p || S), t, g);
      return g
    }
  }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = n(60),
      i = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
      },
      o = "[DEFAULT]",
      a = [],
      s = function() {
        function e(e, t, n) {
          this.firebase_ = n, this.isDeleted_ = !1, this.services_ = {},
            this.name_ = t.name, this._automaticDataCollectionEnabled = t
            .automaticDataCollectionEnabled || !1, this.options_ = r.deepCopy(
              e), this.INTERNAL = {
              getUid: function() {
                return null
              },
              getToken: function() {
                return Promise.resolve(null)
              },
              addAuthTokenListener: function(e) {
                a.push(e), setTimeout(function() {
                  return e(null)
                }, 0)
              },
              removeAuthTokenListener: function(e) {
                a = a.filter(function(t) {
                  return t !== e
                })
              }
            }
        }
        return Object.defineProperty(e.prototype,
          "automaticDataCollectionEnabled", {
            get: function() {
              return this.checkDestroyed_(), this._automaticDataCollectionEnabled
            },
            set: function(e) {
              this.checkDestroyed_(), this._automaticDataCollectionEnabled =
                e
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "name", {
          get: function() {
            return this.checkDestroyed_(), this.name_
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "options", {
          get: function() {
            return this.checkDestroyed_(), this.options_
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.delete = function() {
          var e = this;
          return new Promise(function(t) {
            e.checkDestroyed_(), t()
          }).then(function() {
            e.firebase_.INTERNAL.removeApp(e.name_);
            var t = [];
            return Object.keys(e.services_).forEach(function(n) {
              Object.keys(e.services_[n]).forEach(function(r) {
                t.push(e.services_[n][r])
              })
            }), Promise.all(t.map(function(e) {
              return e.INTERNAL.delete()
            }))
          }).then(function() {
            e.isDeleted_ = !0, e.services_ = {}
          })
        }, e.prototype._getService = function(e, t) {
          if (void 0 === t && (t = o), this.checkDestroyed_(), this.services_[
              e] || (this.services_[e] = {}), !this.services_[e][t]) {
            var n = t !== o ? t : void 0,
              r = this.firebase_.INTERNAL.factories[e](this, this.extendApp
                .bind(this), n);
            this.services_[e][t] = r
          }
          return this.services_[e][t]
        }, e.prototype.extendApp = function(e) {
          var t = this;
          r.deepExtend(this, e), e.INTERNAL && e.INTERNAL.addAuthTokenListener &&
            (a.forEach(function(e) {
              t.INTERNAL.addAuthTokenListener(e)
            }), a = [])
        }, e.prototype.checkDestroyed_ = function() {
          this.isDeleted_ && u("app-deleted", {
            name: this.name_
          })
        }, e
      }();

    function u(e, t) {
      throw l.create(e, t)
    }
    s.prototype.name && s.prototype.options || s.prototype.delete ||
      console.log("dc");
    var l = new r.ErrorFactory("app", "Firebase", {
        "no-app": "No Firebase App '{$name}' has been created - call Firebase App.initializeApp()",
        "bad-app-name": "Illegal App name: '{$name}",
        "duplicate-app": "Firebase App named '{$name}' already exists",
        "app-deleted": "Firebase App named '{$name}' already deleted",
        "duplicate-service": "Firebase service named '{$name}' already registered",
        "sa-not-supported": "Initializing the Firebase SDK with a service account is only allowed in a Node.js environment. On client devices, you should instead initialize the SDK with an api key and auth domain",
        "invalid-app-argument": "firebase.{$name}() takes either no argument or a Firebase App instance."
      }),
      c = function e() {
        var t = {},
          n = {},
          a = {},
          l = {
            __esModule: !0,
            initializeApp: function(e, n) {
              if (void 0 === n && (n = {}), "object" !== typeof n ||
                null === n) {
                var r = n;
                n = {
                  name: r
                }
              }
              var a = n;
              void 0 === a.name && (a.name = o);
              var c = a.name;
              "string" === typeof c && c || u("bad-app-name", {
                name: c + ""
              }), i(t, c) && u("duplicate-app", {
                name: c
              });
              var f = new s(e, a, l);
              return t[c] = f, p(f, "create"), f
            },
            app: c,
            apps: null,
            Promise: Promise,
            SDK_VERSION: "5.8.1",
            INTERNAL: {
              registerService: function(e, t, i, o, p) {
                n[e] && u("duplicate-service", {
                  name: e
                }), n[e] = t, o && (a[e] = o, f().forEach(function(e) {
                  o("create", e)
                }));
                var h = function(t) {
                  return void 0 === t && (t = c()), "function" !==
                    typeof t[e] && u("invalid-app-argument", {
                      name: e
                    }), t[e]()
                };
                return void 0 !== i && r.deepExtend(h, i), l[e] = h, s.prototype[
                  e] = function() {
                  for (var t = [], n = 0; n < arguments.length; n++) t[
                    n] = arguments[n];
                  return this._getService.bind(this, e).apply(this, p ?
                    t : [])
                }, h
              },
              createFirebaseNamespace: e,
              extendNamespace: function(e) {
                r.deepExtend(l, e)
              },
              createSubscribe: r.createSubscribe,
              ErrorFactory: r.ErrorFactory,
              removeApp: function(e) {
                p(t[e], "delete"), delete t[e]
              },
              factories: n,
              useAsService: h,
              Promise: Promise,
              deepExtend: r.deepExtend
            }
          };

        function c(e) {
          return i(t, e = e || o) || u("no-app", {
            name: e
          }), t[e]
        }

        function f() {
          return Object.keys(t).map(function(e) {
            return t[e]
          })
        }

        function p(e, t) {
          Object.keys(n).forEach(function(n) {
            var r = h(e, n);
            null !== r && a[r] && a[r](t, e)
          })
        }

        function h(e, t) {
          if ("serverAuth" === t) return null;
          var n = t;
          return e.options, n
        }
        return r.patchProperty(l, "default", l), Object.defineProperty(l,
          "apps", {
            get: f
          }), r.patchProperty(c, "App", s), l
      }();
    t.firebase = c, t.default = c
  }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = n(61),
      i = {
        NODE_CLIENT: !1,
        NODE_ADMIN: !1,
        SDK_VERSION: "${JSCORE_VERSION}"
      },
      o = function(e, t) {
        if (!e) throw a(t)
      },
      a = function(e) {
        return new Error("Firebase Database (" + i.SDK_VERSION +
          ") INTERNAL ASSERT FAILED: " + e)
      },
      s = function(e) {
        for (var t = [], n = 0, r = 0; r < e.length; r++) {
          var i = e.charCodeAt(r);
          i < 128 ? t[n++] = i : i < 2048 ? (t[n++] = i >> 6 | 192, t[n++] =
              63 & i | 128) : 55296 == (64512 & i) && r + 1 < e.length &&
            56320 == (64512 & e.charCodeAt(r + 1)) ? (i = 65536 + ((1023 &
                i) << 10) + (1023 & e.charCodeAt(++r)), t[n++] = i >> 18 |
              240, t[n++] = i >> 12 & 63 | 128, t[n++] = i >> 6 & 63 |
              128, t[n++] = 63 & i | 128) : (t[n++] = i >> 12 | 224, t[n++] =
              i >> 6 & 63 | 128, t[n++] = 63 & i | 128)
        }
        return t
      },
      u = {
        byteToCharMap_: null,
        charToByteMap_: null,
        byteToCharMapWebSafe_: null,
        charToByteMapWebSafe_: null,
        ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        get ENCODED_VALS() {
          return this.ENCODED_VALS_BASE + "+/="
        },
        get ENCODED_VALS_WEBSAFE() {
          return this.ENCODED_VALS_BASE + "-_."
        },
        HAS_NATIVE_SUPPORT: "function" === typeof atob,
        encodeByteArray: function(e, t) {
          if (!Array.isArray(e)) throw Error(
            "encodeByteArray takes an array as a parameter");
          this.init_();
          for (var n = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
              r = [], i = 0; i < e.length; i += 3) {
            var o = e[i],
              a = i + 1 < e.length,
              s = a ? e[i + 1] : 0,
              u = i + 2 < e.length,
              l = u ? e[i + 2] : 0,
              c = o >> 2,
              f = (3 & o) << 4 | s >> 4,
              p = (15 & s) << 2 | l >> 6,
              h = 63 & l;
            u || (h = 64, a || (p = 64)), r.push(n[c], n[f], n[p], n[h])
          }
          return r.join("")
        },
        encodeString: function(e, t) {
          return this.HAS_NATIVE_SUPPORT && !t ? btoa(e) : this.encodeByteArray(
            s(e), t)
        },
        decodeString: function(e, t) {
          return this.HAS_NATIVE_SUPPORT && !t ? atob(e) : function(e) {
            for (var t = [], n = 0, r = 0; n < e.length;) {
              var i = e[n++];
              if (i < 128) t[r++] = String.fromCharCode(i);
              else if (i > 191 && i < 224) {
                var o = e[n++];
                t[r++] = String.fromCharCode((31 & i) << 6 | 63 & o)
              } else if (i > 239 && i < 365) {
                var a = ((7 & i) << 18 | (63 & (o = e[n++])) << 12 |
                  (63 & (s = e[n++])) << 6 | 63 & e[n++]) - 65536;
                t[r++] = String.fromCharCode(55296 + (a >> 10)), t[r++] =
                  String.fromCharCode(56320 + (1023 & a))
              } else {
                o = e[n++];
                var s = e[n++];
                t[r++] = String.fromCharCode((15 & i) << 12 | (63 & o) <<
                  6 | 63 & s)
              }
            }
            return t.join("")
          }(this.decodeStringToByteArray(e, t))
        },
        decodeStringToByteArray: function(e, t) {
          this.init_();
          for (var n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_,
              r = [], i = 0; i < e.length;) {
            var o = n[e.charAt(i++)],
              a = i < e.length ? n[e.charAt(i)] : 0,
              s = ++i < e.length ? n[e.charAt(i)] : 64,
              u = ++i < e.length ? n[e.charAt(i)] : 64;
            if (++i, null == o || null == a || null == s || null == u)
              throw Error();
            var l = o << 2 | a >> 4;
            if (r.push(l), 64 != s) {
              var c = a << 4 & 240 | s >> 2;
              if (r.push(c), 64 != u) {
                var f = s << 6 & 192 | u;
                r.push(f)
              }
            }
          }
          return r
        },
        init_: function() {
          if (!this.byteToCharMap_) {
            this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {},
              this.charToByteMapWebSafe_ = {};
            for (var e = 0; e < this.ENCODED_VALS.length; e++) this.byteToCharMap_[
                e] = this.ENCODED_VALS.charAt(e), this.charToByteMap_[
                this.byteToCharMap_[e]] = e, this.byteToCharMapWebSafe_[
                e] = this.ENCODED_VALS_WEBSAFE.charAt(e), this.charToByteMapWebSafe_[
                this.byteToCharMapWebSafe_[e]] = e, e >= this.ENCODED_VALS_BASE
              .length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE
                .charAt(e)] = e, this.charToByteMapWebSafe_[this.ENCODED_VALS
                .charAt(e)] = e)
          }
        }
      },
      l = function(e) {
        try {
          return u.decodeString(e, !0)
        } catch (t) {
          console.error("base64Decode failed: ", t)
        }
        return null
      };

    function c(e, t) {
      if (!(t instanceof Object)) return t;
      switch (t.constructor) {
        case Date:
          return new Date(t.getTime());
        case Object:
          void 0 === e && (e = {});
          break;
        case Array:
          e = [];
          break;
        default:
          return t
      }
      for (var n in t) t.hasOwnProperty(n) && (e[n] = c(e[n], t[n]));
      return e
    }
    var f = function() {
        function e() {
          var e = this;
          this.promise = new Promise(function(t, n) {
            e.resolve = t, e.reject = n
          })
        }
        return e.prototype.wrapCallback = function(e) {
          var t = this;
          return function(n, r) {
            n ? t.reject(n) : t.resolve(r), "function" === typeof e &&
              (t.promise.catch(function() {}), 1 === e.length ? e(n) :
                e(n, r))
          }
        }, e
      }(),
      p = function() {
        return "undefined" !== typeof navigator && "string" === typeof navigator
          .userAgent ? navigator.userAgent : ""
      },
      h = "FirebaseError",
      d = Error.captureStackTrace;
    var y = function() {
      return function(e, t) {
        if (this.code = e, this.message = t, d) d(this, v.prototype.create);
        else try {
          throw Error.apply(this, arguments)
        } catch (n) {
          this.name = h, Object.defineProperty(this, "stack", {
            get: function() {
              return n.stack
            }
          })
        }
      }
    }();
    y.prototype = Object.create(Error.prototype), y.prototype.constructor =
      y, y.prototype.name = h;
    var v = function() {
      function e(e, t, n) {
        this.service = e, this.serviceName = t, this.errors = n, this.pattern =
          /\{\$([^}]+)}/g
      }
      return e.prototype.create = function(e, t) {
        void 0 === t && (t = {});
        var n, r = this.errors[e],
          i = this.service + "/" + e;
        n = void 0 === r ? "Error" : r.replace(this.pattern, function(
          e, n) {
          var r = t[n];
          return void 0 !== r ? r.toString() : "<" + n + "?>"
        }), n = this.serviceName + ": " + n + " (" + i + ").";
        var o = new y(i, n);
        for (var a in t) t.hasOwnProperty(a) && "_" !== a.slice(-1) &&
          (o[a] = t[a]);
        return o
      }, e
    }();

    function m(e) {
      return JSON.parse(e)
    }
    var g = function(e) {
        var t = {},
          n = {},
          r = {},
          i = "";
        try {
          var o = e.split(".");
          t = m(l(o[0]) || ""), n = m(l(o[1]) || ""), i = o[2], r = n.d || {},
            delete n.d
        } catch (a) {}
        return {
          header: t,
          claims: n,
          data: r,
          signature: i
        }
      },
      _ = function(e, t) {
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t(
          n, e[n])
      },
      b = function(e, t) {
        return _(t, function(t, n) {
          e[t] = n
        }), e
      },
      w = function(e, t, n) {
        for (var r in e)
          if (t.call(n, e[r], r, e)) return r
      },
      E = function(e) {
        function t() {
          var t = e.call(this) || this;
          t.chain_ = [], t.buf_ = [], t.W_ = [], t.pad_ = [], t.inbuf_ =
            0, t.total_ = 0, t.blockSize = 64, t.pad_[0] = 128;
          for (var n = 1; n < t.blockSize; ++n) t.pad_[n] = 0;
          return t.reset(), t
        }
        return r.__extends(t, e), t.prototype.reset = function() {
          this.chain_[0] = 1732584193, this.chain_[1] = 4023233417,
            this.chain_[2] = 2562383102, this.chain_[3] = 271733878,
            this.chain_[4] = 3285377520, this.inbuf_ = 0, this.total_ =
            0
        }, t.prototype.compress_ = function(e, t) {
          t || (t = 0);
          var n = this.W_;
          if ("string" === typeof e)
            for (var r = 0; r < 16; r++) n[r] = e.charCodeAt(t) << 24 |
              e.charCodeAt(t + 1) << 16 | e.charCodeAt(t + 2) << 8 | e.charCodeAt(
                t + 3), t += 4;
          else
            for (r = 0; r < 16; r++) n[r] = e[t] << 24 | e[t + 1] << 16 |
              e[t + 2] << 8 | e[t + 3], t += 4;
          for (r = 16; r < 80; r++) {
            var i = n[r - 3] ^ n[r - 8] ^ n[r - 14] ^ n[r - 16];
            n[r] = 4294967295 & (i << 1 | i >>> 31)
          }
          var o, a, s = this.chain_[0],
            u = this.chain_[1],
            l = this.chain_[2],
            c = this.chain_[3],
            f = this.chain_[4];
          for (r = 0; r < 80; r++) {
            r < 40 ? r < 20 ? (o = c ^ u & (l ^ c), a = 1518500249) : (
              o = u ^ l ^ c, a = 1859775393) : r < 60 ? (o = u & l |
              c & (u | l), a = 2400959708) : (o = u ^ l ^ c, a =
              3395469782);
            i = (s << 5 | s >>> 27) + o + f + a + n[r] & 4294967295;
            f = c, c = l, l = 4294967295 & (u << 30 | u >>> 2), u = s,
              s = i
          }
          this.chain_[0] = this.chain_[0] + s & 4294967295, this.chain_[
              1] = this.chain_[1] + u & 4294967295, this.chain_[2] =
            this.chain_[2] + l & 4294967295, this.chain_[3] = this.chain_[
              3] + c & 4294967295, this.chain_[4] = this.chain_[4] + f &
            4294967295
        }, t.prototype.update = function(e, t) {
          if (null != e) {
            void 0 === t && (t = e.length);
            for (var n = t - this.blockSize, r = 0, i = this.buf_, o =
                this.inbuf_; r < t;) {
              if (0 == o)
                for (; r <= n;) this.compress_(e, r), r += this.blockSize;
              if ("string" === typeof e) {
                for (; r < t;)
                  if (i[o] = e.charCodeAt(r), ++r, ++o == this.blockSize) {
                    this.compress_(i), o = 0;
                    break
                  }
              } else
                for (; r < t;)
                  if (i[o] = e[r], ++r, ++o == this.blockSize) {
                    this.compress_(i), o = 0;
                    break
                  }
            }
            this.inbuf_ = o, this.total_ += t
          }
        }, t.prototype.digest = function() {
          var e = [],
            t = 8 * this.total_;
          this.inbuf_ < 56 ? this.update(this.pad_, 56 - this.inbuf_) :
            this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
          for (var n = this.blockSize - 1; n >= 56; n--) this.buf_[n] =
            255 & t, t /= 256;
          this.compress_(this.buf_);
          var r = 0;
          for (n = 0; n < 5; n++)
            for (var i = 24; i >= 0; i -= 8) e[r] = this.chain_[n] >> i &
              255, ++r;
          return e
        }, t
      }(function() {
        return function() {
          this.blockSize = -1
        }
      }());
    var C = function() {
      function e(e, t) {
        var n = this;
        this.observers = [], this.unsubscribes = [], this.observerCount =
          0, this.task = Promise.resolve(), this.finalized = !1, this.onNoObservers =
          t, this.task.then(function() {
            e(n)
          }).catch(function(e) {
            n.error(e)
          })
      }
      return e.prototype.next = function(e) {
        this.forEachObserver(function(t) {
          t.next(e)
        })
      }, e.prototype.error = function(e) {
        this.forEachObserver(function(t) {
          t.error(e)
        }), this.close(e)
      }, e.prototype.complete = function() {
        this.forEachObserver(function(e) {
          e.complete()
        }), this.close()
      }, e.prototype.subscribe = function(e, t, n) {
        var r, i = this;
        if (void 0 === e && void 0 === t && void 0 === n) throw new Error(
          "Missing Observer.");
        void 0 === (r = function(e, t) {
            if ("object" !== typeof e || null === e) return !1;
            for (var n = 0, r = t; n < r.length; n++) {
              var i = r[n];
              if (i in e && "function" === typeof e[i]) return !0
            }
            return !1
          }(e, ["next", "error", "complete"]) ? e : {
            next: e,
            error: t,
            complete: n
          }).next && (r.next = S), void 0 === r.error && (r.error = S),
          void 0 === r.complete && (r.complete = S);
        var o = this.unsubscribeOne.bind(this, this.observers.length);
        return this.finalized && this.task.then(function() {
          try {
            i.finalError ? r.error(i.finalError) : r.complete()
          } catch (e) {}
        }), this.observers.push(r), o
      }, e.prototype.unsubscribeOne = function(e) {
        void 0 !== this.observers && void 0 !== this.observers[e] &&
          (delete this.observers[e], this.observerCount -= 1, 0 ===
            this.observerCount && void 0 !== this.onNoObservers &&
            this.onNoObservers(this))
      }, e.prototype.forEachObserver = function(e) {
        if (!this.finalized)
          for (var t = 0; t < this.observers.length; t++) this.sendOne(
            t, e)
      }, e.prototype.sendOne = function(e, t) {
        var n = this;
        this.task.then(function() {
          if (void 0 !== n.observers && void 0 !== n.observers[e])
            try {
              t(n.observers[e])
            } catch (r) {
              "undefined" !== typeof console && console.error &&
                console.error(r)
            }
        })
      }, e.prototype.close = function(e) {
        var t = this;
        this.finalized || (this.finalized = !0, void 0 !== e && (this
          .finalError = e), this.task.then(function() {
          t.observers = void 0, t.onNoObservers = void 0
        }))
      }, e
    }();

    function S() {}

    function T(e, t, n) {
      var r = "";
      switch (t) {
        case 1:
          r = n ? "first" : "First";
          break;
        case 2:
          r = n ? "second" : "Second";
          break;
        case 3:
          r = n ? "third" : "Third";
          break;
        case 4:
          r = n ? "fourth" : "Fourth";
          break;
        default:
          throw new Error(
            "errorPrefix called with argumentNumber > 4.  Need to update it?"
          )
      }
      var i = e + " failed: ";
      return i += r + " argument "
    }
    t.assert = o, t.assertionError = a, t.base64 = u, t.base64Decode = l,
      t.base64Encode = function(e) {
        var t = s(e);
        return u.encodeByteArray(t, !0)
      }, t.CONSTANTS = i, t.deepCopy = function(e) {
        return c(void 0, e)
      }, t.deepExtend = c, t.patchProperty = function(e, t, n) {
        e[t] = n
      }, t.Deferred = f, t.getUA = p, t.isMobileCordova = function() {
        return "undefined" !== typeof window && !!(window.cordova ||
            window.phonegap || window.PhoneGap) &&
          /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(p())
      }, t.isNodeSdk = function() {
        return !0 === i.NODE_CLIENT || !0 === i.NODE_ADMIN
      }, t.isReactNative = function() {
        return "object" === typeof navigator && "ReactNative" ===
          navigator.product
      }, t.ErrorFactory = v, t.FirebaseError = y, t.patchCapture =
      function(e) {
        var t = d;
        return d = e, t
      }, t.jsonEval = m, t.stringify = function(e) {
        return JSON.stringify(e)
      }, t.decode = g, t.isAdmin = function(e) {
        var t = g(e).claims;
        return "object" === typeof t && !0 === t.admin
      }, t.issuedAtTime = function(e) {
        var t = g(e).claims;
        return "object" === typeof t && t.hasOwnProperty("iat") ? t.iat :
          null
      }, t.isValidFormat = function(e) {
        var t = g(e).claims;
        return !!t && "object" === typeof t && t.hasOwnProperty("iat")
      }, t.isValidTimestamp = function(e) {
        var t, n, r = g(e).claims,
          i = Math.floor((new Date).getTime() / 1e3);
        return "object" === typeof r && (r.hasOwnProperty("nbf") ? t = r.nbf :
            r.hasOwnProperty("iat") && (t = r.iat), n = r.hasOwnProperty(
              "exp") ? r.exp : t + 86400), i && t && n && i >= t && i <=
          n
      }, t.clone = function(e) {
        return b({}, e)
      }, t.contains = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
      }, t.every = function(e, t) {
        for (var n in e)
          if (Object.prototype.hasOwnProperty.call(e, n) && !t(n, e[n]))
            return !1;
        return !0
      }, t.extend = b, t.findKey = w, t.findValue = function(e, t, n) {
        var r = w(e, t, n);
        return r && e[r]
      }, t.forEach = _, t.getAnyKey = function(e) {
        for (var t in e) return t
      }, t.getCount = function(e) {
        var t = 0;
        for (var n in e) t++;
        return t
      }, t.getValues = function(e) {
        var t = [],
          n = 0;
        for (var r in e) t[n++] = e[r];
        return t
      }, t.isEmpty = function(e) {
        for (var t in e) return !1;
        return !0
      }, t.isNonNullObject = function(e) {
        return "object" === typeof e && null !== e
      }, t.map = function(e, t, n) {
        var r = {};
        for (var i in e) r[i] = t.call(n, e[i], i, e);
        return r
      }, t.safeGet = function(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
      }, t.querystring = function(e) {
        var t = [];
        return _(e, function(e, n) {
          Array.isArray(n) ? n.forEach(function(n) {
            t.push(encodeURIComponent(e) + "=" +
              encodeURIComponent(n))
          }) : t.push(encodeURIComponent(e) + "=" +
            encodeURIComponent(n))
        }), t.length ? "&" + t.join("&") : ""
      }, t.querystringDecode = function(e) {
        var t = {};
        return e.replace(/^\?/, "").split("&").forEach(function(e) {
          if (e) {
            var n = e.split("=");
            t[n[0]] = n[1]
          }
        }), t
      }, t.Sha1 = E, t.async = function(e, t) {
        return function() {
          for (var n = [], r = 0; r < arguments.length; r++) n[r] =
            arguments[r];
          Promise.resolve(!0).then(function() {
            e.apply(void 0, n)
          }).catch(function(e) {
            t && t(e)
          })
        }
      }, t.createSubscribe = function(e, t) {
        var n = new C(e, t);
        return n.subscribe.bind(n)
      }, t.errorPrefix = T, t.validateArgCount = function(e, t, n, r) {
        var i;
        if (r < t ? i = "at least " + t : r > n && (i = 0 === n ? "none" :
            "no more than " + n), i) throw new Error(e +
          " failed: Was called with " + r + (1 === r ? " argument." :
            " arguments.") + " Expects " + i + ".")
      }, t.validateCallback = function(e, t, n, r) {
        if ((!r || n) && "function" !== typeof n) throw new Error(T(e, t,
          r) + "must be a valid function.")
      }, t.validateContextObject = function(e, t, n, r) {
        if ((!r || n) && ("object" !== typeof n || null === n)) throw new Error(
          T(e, t, r) + "must be a valid context object.")
      }, t.validateNamespace = function(e, t, n, r) {
        if ((!r || n) && "string" !== typeof n) throw new Error(T(e, t, r) +
          "must be a valid firebase namespace.")
      }, t.stringLength = function(e) {
        for (var t = 0, n = 0; n < e.length; n++) {
          var r = e.charCodeAt(n);
          r < 128 ? t++ : r < 2048 ? t += 2 : r >= 55296 && r <= 56319 ?
            (t += 4, n++) : t += 3
        }
        return t
      }, t.stringToByteArray = function(e) {
        for (var t = [], n = 0, r = 0; r < e.length; r++) {
          var i = e.charCodeAt(r);
          if (i >= 55296 && i <= 56319) {
            var a = i - 55296;
            o(++r < e.length, "Surrogate pair missing trail surrogate."),
              i = 65536 + (a << 10) + (e.charCodeAt(r) - 56320)
          }
          i < 128 ? t[n++] = i : i < 2048 ? (t[n++] = i >> 6 | 192, t[n++] =
            63 & i | 128) : i < 65536 ? (t[n++] = i >> 12 | 224, t[n++] =
            i >> 6 & 63 | 128, t[n++] = 63 & i | 128) : (t[n++] = i >>
            18 | 240, t[n++] = i >> 12 & 63 | 128, t[n++] = i >> 6 & 63 |
            128, t[n++] = 63 & i | 128)
        }
        return t
      }
  }, function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, "__extends", function() {
      return i
    }), n.d(t, "__assign", function() {
      return o
    }), n.d(t, "__rest", function() {
      return a
    }), n.d(t, "__decorate", function() {
      return s
    }), n.d(t, "__param", function() {
      return u
    }), n.d(t, "__metadata", function() {
      return l
    }), n.d(t, "__awaiter", function() {
      return c
    }), n.d(t, "__generator", function() {
      return f
    }), n.d(t, "__exportStar", function() {
      return p
    }), n.d(t, "__values", function() {
      return h
    }), n.d(t, "__read", function() {
      return d
    }), n.d(t, "__spread", function() {
      return y
    }), n.d(t, "__await", function() {
      return v
    }), n.d(t, "__asyncGenerator", function() {
      return m
    }), n.d(t, "__asyncDelegator", function() {
      return g
    }), n.d(t, "__asyncValues", function() {
      return _
    }), n.d(t, "__makeTemplateObject", function() {
      return b
    }), n.d(t, "__importStar", function() {
      return w
    }), n.d(t, "__importDefault", function() {
      return E
    });
    var r = Object.setPrototypeOf || {
      __proto__: []
    }
    instanceof Array && function(e, t) {
      e.__proto__ = t
    } || function(e, t) {
      for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
    };

    function i(e, t) {
      function n() {
        this.constructor = e
      }
      r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype =
        t.prototype, new n)
    }
    var o = Object.assign || function(e) {
      for (var t, n = 1, r = arguments.length; n < r; n++)
        for (var i in t = arguments[n]) Object.prototype.hasOwnProperty
          .call(t, i) && (e[i] = t[i]);
      return e
    };

    function a(e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(
        r) < 0 && (n[r] = e[r]);
      if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
        var i = 0;
        for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(
          r[i]) < 0 && (n[r[i]] = e[r[i]])
      }
      return n
    }

    function s(e, t, n, r) {
      var i, o = arguments.length,
        a = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(
          t, n) : r;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
        a = Reflect.decorate(e, t, n, r);
      else
        for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (o < 3 ?
          i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
      return o > 3 && a && Object.defineProperty(t, n, a), a
    }

    function u(e, t) {
      return function(n, r) {
        t(n, r, e)
      }
    }

    function l(e, t) {
      if ("object" === typeof Reflect && "function" === typeof Reflect.metadata)
        return Reflect.metadata(e, t)
    }

    function c(e, t, n, r) {
      return new(n || (n = Promise))(function(i, o) {
        function a(e) {
          try {
            u(r.next(e))
          } catch (t) {
            o(t)
          }
        }

        function s(e) {
          try {
            u(r.throw(e))
          } catch (t) {
            o(t)
          }
        }

        function u(e) {
          e.done ? i(e.value) : new n(function(t) {
            t(e.value)
          }).then(a, s)
        }
        u((r = r.apply(e, t || [])).next())
      })
    }

    function f(e, t) {
      var n, r, i, o, a = {
        label: 0,
        sent: function() {
          if (1 & i[0]) throw i[1];
          return i[1]
        },
        trys: [],
        ops: []
      };
      return o = {
        next: s(0),
        throw: s(1),
        return: s(2)
      }, "function" === typeof Symbol && (o[Symbol.iterator] = function() {
        return this
      }), o;

      function s(o) {
        return function(s) {
          return function(o) {
            if (n) throw new TypeError(
              "Generator is already executing.");
            for (; a;) try {
              if (n = 1, r && (i = r[2 & o[0] ? "return" : o[0] ?
                  "throw" : "next"]) && !(i = i.call(r, o[1])).done)
                return i;
              switch (r = 0, i && (o = [0, i.value]), o[0]) {
                case 0:
                case 1:
                  i = o;
                  break;
                case 4:
                  return a.label++, {
                    value: o[1],
                    done: !1
                  };
                case 5:
                  a.label++, r = o[1], o = [0];
                  continue;
                case 7:
                  o = a.ops.pop(), a.trys.pop();
                  continue;
                default:
                  if (!(i = (i = a.trys).length > 0 && i[i.length -
                      1]) && (6 === o[0] || 2 === o[0])) {
                    a = 0;
                    continue
                  }
                  if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[
                      3])) {
                    a.label = o[1];
                    break
                  }
                  if (6 === o[0] && a.label < i[1]) {
                    a.label = i[1], i = o;
                    break
                  }
                  if (i && a.label < i[2]) {
                    a.label = i[2], a.ops.push(o);
                    break
                  }
                  i[2] && a.ops.pop(), a.trys.pop();
                  continue
              }
              o = t.call(e, a)
            } catch (s) {
              o = [6, s], r = 0
            } finally {
              n = i = 0
            }
            if (5 & o[0]) throw o[1];
            return {
              value: o[0] ? o[1] : void 0,
              done: !0
            }
          }([o, s])
        }
      }
    }

    function p(e, t) {
      for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n])
    }

    function h(e) {
      var t = "function" === typeof Symbol && e[Symbol.iterator],
        n = 0;
      return t ? t.call(e) : {
        next: function() {
          return e && n >= e.length && (e = void 0), {
            value: e && e[n++],
            done: !e
          }
        }
      }
    }

    function d(e, t) {
      var n = "function" === typeof Symbol && e[Symbol.iterator];
      if (!n) return e;
      var r, i, o = n.call(e),
        a = [];
      try {
        for (;
          (void 0 === t || t-- > 0) && !(r = o.next()).done;) a.push(r.value)
      } catch (s) {
        i = {
          error: s
        }
      } finally {
        try {
          r && !r.done && (n = o.return) && n.call(o)
        } finally {
          if (i) throw i.error
        }
      }
      return a
    }

    function y() {
      for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(d(
        arguments[t]));
      return e
    }

    function v(e) {
      return this instanceof v ? (this.v = e, this) : new v(e)
    }

    function m(e, t, n) {
      if (!Symbol.asyncIterator) throw new TypeError(
        "Symbol.asyncIterator is not defined.");
      var r, i = n.apply(e, t || []),
        o = [];
      return r = {}, a("next"), a("throw"), a("return"), r[Symbol.asyncIterator] =
        function() {
          return this
        }, r;

      function a(e) {
        i[e] && (r[e] = function(t) {
          return new Promise(function(n, r) {
            o.push([e, t, n, r]) > 1 || s(e, t)
          })
        })
      }

      function s(e, t) {
        try {
          (n = i[e](t)).value instanceof v ? Promise.resolve(n.value.v).then(
            u, l) : c(o[0][2], n)
        } catch (r) {
          c(o[0][3], r)
        }
        var n
      }

      function u(e) {
        s("next", e)
      }

      function l(e) {
        s("throw", e)
      }

      function c(e, t) {
        e(t), o.shift(), o.length && s(o[0][0], o[0][1])
      }
    }

    function g(e) {
      var t, n;
      return t = {}, r("next"), r("throw", function(e) {
        throw e
      }), r("return"), t[Symbol.iterator] = function() {
        return this
      }, t;

      function r(r, i) {
        e[r] && (t[r] = function(t) {
          return (n = !n) ? {
            value: v(e[r](t)),
            done: "return" === r
          } : i ? i(t) : t
        })
      }
    }

    function _(e) {
      if (!Symbol.asyncIterator) throw new TypeError(
        "Symbol.asyncIterator is not defined.");
      var t = e[Symbol.asyncIterator];
      return t ? t.call(e) : h(e)
    }

    function b(e, t) {
      return Object.defineProperty ? Object.defineProperty(e, "raw", {
        value: t
      }) : e.raw = t, e
    }

    function w(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t.default = e, t
    }

    function E(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
  }, , function(e, t, n) {
    "use strict";
    var r = n(49),
      i = "function" === typeof Symbol && Symbol.for,
      o = i ? Symbol.for("react.element") : 60103,
      a = i ? Symbol.for("react.portal") : 60106,
      s = i ? Symbol.for("react.fragment") : 60107,
      u = i ? Symbol.for("react.strict_mode") : 60108,
      l = i ? Symbol.for("react.profiler") : 60114,
      c = i ? Symbol.for("react.provider") : 60109,
      f = i ? Symbol.for("react.context") : 60110,
      p = i ? Symbol.for("react.concurrent_mode") : 60111,
      h = i ? Symbol.for("react.forward_ref") : 60112,
      d = i ? Symbol.for("react.suspense") : 60113,
      y = i ? Symbol.for("react.memo") : 60115,
      v = i ? Symbol.for("react.lazy") : 60116,
      m = "function" === typeof Symbol && Symbol.iterator;

    function g(e) {
      for (var t = arguments.length - 1, n =
          "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r =
          0; r < t; r++) n += "&args[]=" + encodeURIComponent(arguments[r +
        1]);
      ! function(e, t, n, r, i, o, a, s) {
        if (!e) {
          if (e = void 0, void 0 === t) e = Error(
            "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
          );
          else {
            var u = [n, r, i, o, a, s],
              l = 0;
            (e = Error(t.replace(/%s/g, function() {
              return u[l++]
            }))).name = "Invariant Violation"
          }
          throw e.framesToPop = 1, e
        }
      }(!1, "Minified React error #" + e +
        "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",
        n)
    }
    var _ = {
        isMounted: function() {
          return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
      },
      b = {};

    function w(e, t, n) {
      this.props = e, this.context = t, this.refs = b, this.updater = n ||
        _
    }

    function E() {}

    function C(e, t, n) {
      this.props = e, this.context = t, this.refs = b, this.updater = n ||
        _
    }
    w.prototype.isReactComponent = {}, w.prototype.setState = function(e,
      t) {
      "object" !== typeof e && "function" !== typeof e && null != e &&
        g("85"), this.updater.enqueueSetState(this, e, t, "setState")
    }, w.prototype.forceUpdate = function(e) {
      this.updater.enqueueForceUpdate(this, e, "forceUpdate")
    }, E.prototype = w.prototype;
    var S = C.prototype = new E;
    S.constructor = C, r(S, w.prototype), S.isPureReactComponent = !0;
    var T = {
        current: null
      },
      x = {
        current: null
      },
      k = Object.prototype.hasOwnProperty,
      P = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      };

    function O(e, t, n) {
      var r = void 0,
        i = {},
        a = null,
        s = null;
      if (null != t)
        for (r in void 0 !== t.ref && (s = t.ref), void 0 !== t.key && (a =
            "" + t.key), t) k.call(t, r) && !P.hasOwnProperty(r) && (i[r] =
          t[r]);
      var u = arguments.length - 2;
      if (1 === u) i.children = n;
      else if (1 < u) {
        for (var l = Array(u), c = 0; c < u; c++) l[c] = arguments[c + 2];
        i.children = l
      }
      if (e && e.defaultProps)
        for (r in u = e.defaultProps) void 0 === i[r] && (i[r] = u[r]);
      return {
        $$typeof: o,
        type: e,
        key: a,
        ref: s,
        props: i,
        _owner: x.current
      }
    }

    function N(e) {
      return "object" === typeof e && null !== e && e.$$typeof === o
    }
    var I = /\/+/g,
      R = [];

    function A(e, t, n, r) {
      if (R.length) {
        var i = R.pop();
        return i.result = e, i.keyPrefix = t, i.func = n, i.context = r,
          i.count = 0, i
      }
      return {
        result: e,
        keyPrefix: t,
        func: n,
        context: r,
        count: 0
      }
    }

    function D(e) {
      e.result = null, e.keyPrefix = null, e.func = null, e.context =
        null, e.count = 0, 10 > R.length && R.push(e)
    }

    function F(e, t, n) {
      return null == e ? 0 : function e(t, n, r, i) {
        var s = typeof t;
        "undefined" !== s && "boolean" !== s || (t = null);
        var u = !1;
        if (null === t) u = !0;
        else switch (s) {
          case "string":
          case "number":
            u = !0;
            break;
          case "object":
            switch (t.$$typeof) {
              case o:
              case a:
                u = !0
            }
        }
        if (u) return r(i, t, "" === n ? "." + L(t, 0) : n), 1;
        if (u = 0, n = "" === n ? "." : n + ":", Array.isArray(t))
          for (var l = 0; l < t.length; l++) {
            var c = n + L(s = t[l], l);
            u += e(s, c, r, i)
          } else if (c = null === t || "object" !== typeof t ? null :
            "function" === typeof(c = m && t[m] || t["@@iterator"]) ? c :
            null, "function" === typeof c)
            for (t = c.call(t), l = 0; !(s = t.next()).done;) u += e(s =
              s.value, c = n + L(s, l++), r, i);
          else "object" === s && g("31", "[object Object]" === (r = "" +
              t) ? "object with keys {" + Object.keys(t).join(", ") +
            "}" : r, "");
        return u
      }(e, "", t, n)
    }

    function L(e, t) {
      return "object" === typeof e && null !== e && null != e.key ?
        function(e) {
          var t = {
            "=": "=0",
            ":": "=2"
          };
          return "$" + ("" + e).replace(/[=:]/g, function(e) {
            return t[e]
          })
        }(e.key) : t.toString(36)
    }

    function M(e, t) {
      e.func.call(e.context, t, e.count++)
    }

    function j(e, t, n) {
      var r = e.result,
        i = e.keyPrefix;
      e = e.func.call(e.context, t, e.count++), Array.isArray(e) ? U(e, r,
        n,
        function(e) {
          return e
        }) : null != e && (N(e) && (e = function(e, t) {
        return {
          $$typeof: o,
          type: e.type,
          key: t,
          ref: e.ref,
          props: e.props,
          _owner: e._owner
        }
      }(e, i + (!e.key || t && t.key === e.key ? "" : ("" + e.key).replace(
        I, "$&/") + "/") + n)), r.push(e))
    }

    function U(e, t, n, r, i) {
      var o = "";
      null != n && (o = ("" + n).replace(I, "$&/") + "/"), F(e, j, t = A(
        t, o, r, i)), D(t)
    }

    function W() {
      var e = T.current;
      return null === e && g("307"), e
    }
    var V = {
        Children: {
          map: function(e, t, n) {
            if (null == e) return e;
            var r = [];
            return U(e, r, null, t, n), r
          },
          forEach: function(e, t, n) {
            if (null == e) return e;
            F(e, M, t = A(null, null, t, n)), D(t)
          },
          count: function(e) {
            return F(e, function() {
              return null
            }, null)
          },
          toArray: function(e) {
            var t = [];
            return U(e, t, null, function(e) {
              return e
            }), t
          },
          only: function(e) {
            return N(e) || g("143"), e
          }
        },
        createRef: function() {
          return {
            current: null
          }
        },
        Component: w,
        PureComponent: C,
        createContext: function(e, t) {
          return void 0 === t && (t = null), (e = {
            $$typeof: f,
            _calculateChangedBits: t,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null
          }).Provider = {
            $$typeof: c,
            _context: e
          }, e.Consumer = e
        },
        forwardRef: function(e) {
          return {
            $$typeof: h,
            render: e
          }
        },
        lazy: function(e) {
          return {
            $$typeof: v,
            _ctor: e,
            _status: -1,
            _result: null
          }
        },
        memo: function(e, t) {
          return {
            $$typeof: y,
            type: e,
            compare: void 0 === t ? null : t
          }
        },
        useCallback: function(e, t) {
          return W().useCallback(e, t)
        },
        useContext: function(e, t) {
          return W().useContext(e, t)
        },
        useEffect: function(e, t) {
          return W().useEffect(e, t)
        },
        useImperativeHandle: function(e, t, n) {
          return W().useImperativeHandle(e, t, n)
        },
        useDebugValue: function() {},
        useLayoutEffect: function(e, t) {
          return W().useLayoutEffect(e, t)
        },
        useMemo: function(e, t) {
          return W().useMemo(e, t)
        },
        useReducer: function(e, t, n) {
          return W().useReducer(e, t, n)
        },
        useRef: function(e) {
          return W().useRef(e)
        },
        useState: function(e) {
          return W().useState(e)
        },
        Fragment: s,
        StrictMode: u,
        Suspense: d,
        createElement: O,
        cloneElement: function(e, t, n) {
          (null === e || void 0 === e) && g("267", e);
          var i = void 0,
            a = r({}, e.props),
            s = e.key,
            u = e.ref,
            l = e._owner;
          if (null != t) {
            void 0 !== t.ref && (u = t.ref, l = x.current), void 0 !==
              t.key && (s = "" + t.key);
            var c = void 0;
            for (i in e.type && e.type.defaultProps && (c = e.type.defaultProps),
              t) k.call(t, i) && !P.hasOwnProperty(i) && (a[i] = void 0 ===
              t[i] && void 0 !== c ? c[i] : t[i])
          }
          if (1 === (i = arguments.length - 2)) a.children = n;
          else if (1 < i) {
            c = Array(i);
            for (var f = 0; f < i; f++) c[f] = arguments[f + 2];
            a.children = c
          }
          return {
            $$typeof: o,
            type: e.type,
            key: s,
            ref: u,
            props: a,
            _owner: l
          }
        },
        createFactory: function(e) {
          var t = O.bind(null, e);
          return t.type = e, t
        },
        isValidElement: N,
        version: "16.8.1",
        unstable_ConcurrentMode: p,
        unstable_Profiler: l,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
          ReactCurrentDispatcher: T,
          ReactCurrentOwner: x,
          assign: r
        }
      },
      B = {
        default: V
      },
      q = B && V || B;
    e.exports = q.default || q
  }, function(e, t, n) {
    "use strict";
    var r = n(0),
      i = n(49),
      o = n(65);

    function a(e) {
      for (var t = arguments.length - 1, n =
          "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r =
          0; r < t; r++) n += "&args[]=" + encodeURIComponent(arguments[r +
        1]);
      ! function(e, t, n, r, i, o, a, s) {
        if (!e) {
          if (e = void 0, void 0 === t) e = Error(
            "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
          );
          else {
            var u = [n, r, i, o, a, s],
              l = 0;
            (e = Error(t.replace(/%s/g, function() {
              return u[l++]
            }))).name = "Invariant Violation"
          }
          throw e.framesToPop = 1, e
        }
      }(!1, "Minified React error #" + e +
        "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",
        n)
    }
    r || a("227");
    var s = !1,
      u = null,
      l = !1,
      c = null,
      f = {
        onError: function(e) {
          s = !0, u = e
        }
      };

    function p(e, t, n, r, i, o, a, l, c) {
      s = !1, u = null,
        function(e, t, n, r, i, o, a, s, u) {
          var l = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, l)
          } catch (c) {
            this.onError(c)
          }
        }.apply(f, arguments)
    }
    var h = null,
      d = {};

    function y() {
      if (h)
        for (var e in d) {
          var t = d[e],
            n = h.indexOf(e);
          if (-1 < n || a("96", e), !m[n])
            for (var r in t.extractEvents || a("97", e), m[n] = t, n = t.eventTypes) {
              var i = void 0,
                o = n[r],
                s = t,
                u = r;
              g.hasOwnProperty(u) && a("99", u), g[u] = o;
              var l = o.phasedRegistrationNames;
              if (l) {
                for (i in l) l.hasOwnProperty(i) && v(l[i], s, u);
                i = !0
              } else o.registrationName ? (v(o.registrationName, s, u), i = !
                0) : i = !1;
              i || a("98", r, e)
            }
        }
    }

    function v(e, t, n) {
      _[e] && a("100", e), _[e] = t, b[e] = t.eventTypes[n].dependencies
    }
    var m = [],
      g = {},
      _ = {},
      b = {},
      w = null,
      E = null,
      C = null;

    function S(e, t, n) {
      var r = e.type || "unknown-event";
      e.currentTarget = C(n),
        function(e, t, n, r, i, o, f, h, d) {
          if (p.apply(this, arguments), s) {
            if (s) {
              var y = u;
              s = !1, u = null
            } else a("198"), y = void 0;
            l || (l = !0, c = y)
          }
        }(r, t, void 0, e), e.currentTarget = null
    }

    function T(e, t) {
      return null == t && a("30"), null == e ? t : Array.isArray(e) ?
        Array.isArray(t) ? (e.push.apply(e, t), e) : (e.push(t), e) :
        Array.isArray(t) ? [e].concat(t) : [e, t]
    }

    function x(e, t, n) {
      Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e)
    }
    var k = null;

    function P(e) {
      if (e) {
        var t = e._dispatchListeners,
          n = e._dispatchInstances;
        if (Array.isArray(t))
          for (var r = 0; r < t.length && !e.isPropagationStopped(); r++)
            S(e, t[r], n[r]);
        else t && S(e, t, n);
        e._dispatchListeners = null, e._dispatchInstances = null, e.isPersistent() ||
          e.constructor.release(e)
      }
    }
    var O = {
      injectEventPluginOrder: function(e) {
        h && a("101"), h = Array.prototype.slice.call(e), y()
      },
      injectEventPluginsByName: function(e) {
        var t, n = !1;
        for (t in e)
          if (e.hasOwnProperty(t)) {
            var r = e[t];
            d.hasOwnProperty(t) && d[t] === r || (d[t] && a("102", t),
              d[t] = r, n = !0)
          }
        n && y()
      }
    };

    function N(e, t) {
      var n = e.stateNode;
      if (!n) return null;
      var r = w(n);
      if (!r) return null;
      n = r[t];
      e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
          (r = !r.disabled) || (r = !("button" === (e = e.type) ||
            "input" === e || "select" === e || "textarea" === e)), e = !
            r;
          break e;
        default:
          e = !1
      }
      return e ? null : (n && "function" !== typeof n && a("231", t,
        typeof n), n)
    }

    function I(e) {
      if (null !== e && (k = T(k, e)), e = k, k = null, e && (x(e, P), k &&
          a("95"), l)) throw e = c, l = !1, c = null, e
    }
    var R = Math.random().toString(36).slice(2),
      A = "__reactInternalInstance$" + R,
      D = "__reactEventHandlers$" + R;

    function F(e) {
      if (e[A]) return e[A];
      for (; !e[A];) {
        if (!e.parentNode) return null;
        e = e.parentNode
      }
      return 5 === (e = e[A]).tag || 6 === e.tag ? e : null
    }

    function L(e) {
      return !(e = e[A]) || 5 !== e.tag && 6 !== e.tag ? null : e
    }

    function M(e) {
      if (5 === e.tag || 6 === e.tag) return e.stateNode;
      a("33")
    }

    function j(e) {
      return e[D] || null
    }

    function U(e) {
      do {
        e = e.return
      } while (e && 5 !== e.tag);
      return e || null
    }

    function W(e, t, n) {
      (t = N(e, n.dispatchConfig.phasedRegistrationNames[t])) && (n._dispatchListeners =
        T(n._dispatchListeners, t), n._dispatchInstances = T(n._dispatchInstances,
          e))
    }

    function V(e) {
      if (e && e.dispatchConfig.phasedRegistrationNames) {
        for (var t = e._targetInst, n = []; t;) n.push(t), t = U(t);
        for (t = n.length; 0 < t--;) W(n[t], "captured", e);
        for (t = 0; t < n.length; t++) W(n[t], "bubbled", e)
      }
    }

    function B(e, t, n) {
      e && n && n.dispatchConfig.registrationName && (t = N(e, n.dispatchConfig
        .registrationName)) && (n._dispatchListeners = T(n._dispatchListeners,
        t), n._dispatchInstances = T(n._dispatchInstances, e))
    }

    function q(e) {
      e && e.dispatchConfig.registrationName && B(e._targetInst, null, e)
    }

    function z(e) {
      x(e, V)
    }
    var Q = !("undefined" === typeof window || !window.document || !
      window.document.createElement);

    function H(e, t) {
      var n = {};
      return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] =
        "webkit" + t, n["Moz" + e] = "moz" + t, n
    }
    var K = {
        animationend: H("Animation", "AnimationEnd"),
        animationiteration: H("Animation", "AnimationIteration"),
        animationstart: H("Animation", "AnimationStart"),
        transitionend: H("Transition", "TransitionEnd")
      },
      G = {},
      $ = {};

    function Y(e) {
      if (G[e]) return G[e];
      if (!K[e]) return e;
      var t, n = K[e];
      for (t in n)
        if (n.hasOwnProperty(t) && t in $) return G[e] = n[t];
      return e
    }
    Q && ($ = document.createElement("div").style, "AnimationEvent" in
      window || (delete K.animationend.animation, delete K.animationiteration
        .animation, delete K.animationstart.animation),
      "TransitionEvent" in window || delete K.transitionend.transition);
    var X = Y("animationend"),
      J = Y("animationiteration"),
      Z = Y("animationstart"),
      ee = Y("transitionend"),
      te =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting"
      .split(" "),
      ne = null,
      re = null,
      ie = null;

    function oe() {
      if (ie) return ie;
      var e, t, n = re,
        r = n.length,
        i = "value" in ne ? ne.value : ne.textContent,
        o = i.length;
      for (e = 0; e < r && n[e] === i[e]; e++);
      var a = r - e;
      for (t = 1; t <= a && n[r - t] === i[o - t]; t++);
      return ie = i.slice(e, 1 < t ? 1 - t : void 0)
    }

    function ae() {
      return !0
    }

    function se() {
      return !1
    }

    function ue(e, t, n, r) {
      for (var i in this.dispatchConfig = e, this._targetInst = t, this.nativeEvent =
          n, e = this.constructor.Interface) e.hasOwnProperty(i) && ((t =
          e[i]) ? this[i] = t(n) : "target" === i ? this.target = r :
        this[i] = n[i]);
      return this.isDefaultPrevented = (null != n.defaultPrevented ? n.defaultPrevented :
          !1 === n.returnValue) ? ae : se, this.isPropagationStopped = se,
        this
    }

    function le(e, t, n, r) {
      if (this.eventPool.length) {
        var i = this.eventPool.pop();
        return this.call(i, e, t, n, r), i
      }
      return new this(e, t, n, r)
    }

    function ce(e) {
      e instanceof this || a("279"), e.destructor(), 10 > this.eventPool.length &&
        this.eventPool.push(e)
    }

    function fe(e) {
      e.eventPool = [], e.getPooled = le, e.release = ce
    }
    i(ue.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var e = this.nativeEvent;
        e && (e.preventDefault ? e.preventDefault() : "unknown" !==
          typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented =
          ae)
      },
      stopPropagation: function() {
        var e = this.nativeEvent;
        e && (e.stopPropagation ? e.stopPropagation() : "unknown" !==
          typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped =
          ae)
      },
      persist: function() {
        this.isPersistent = ae
      },
      isPersistent: se,
      destructor: function() {
        var e, t = this.constructor.Interface;
        for (e in t) this[e] = null;
        this.nativeEvent = this._targetInst = this.dispatchConfig =
          null, this.isPropagationStopped = this.isDefaultPrevented =
          se, this._dispatchInstances = this._dispatchListeners =
          null
      }
    }), ue.Interface = {
      type: null,
      target: null,
      currentTarget: function() {
        return null
      },
      eventPhase: null,
      bubbles: null,
      cancelable: null,
      timeStamp: function(e) {
        return e.timeStamp || Date.now()
      },
      defaultPrevented: null,
      isTrusted: null
    }, ue.extend = function(e) {
      function t() {}

      function n() {
        return r.apply(this, arguments)
      }
      var r = this;
      t.prototype = r.prototype;
      var o = new t;
      return i(o, n.prototype), n.prototype = o, n.prototype.constructor =
        n, n.Interface = i({}, r.Interface, e), n.extend = r.extend, fe(
          n), n
    }, fe(ue);
    var pe = ue.extend({
        data: null
      }),
      he = ue.extend({
        data: null
      }),
      de = [9, 13, 27, 32],
      ye = Q && "CompositionEvent" in window,
      ve = null;
    Q && "documentMode" in document && (ve = document.documentMode);
    var me = Q && "TextEvent" in window && !ve,
      ge = Q && (!ye || ve && 8 < ve && 11 >= ve),
      _e = String.fromCharCode(32),
      be = {
        beforeInput: {
          phasedRegistrationNames: {
            bubbled: "onBeforeInput",
            captured: "onBeforeInputCapture"
          },
          dependencies: ["compositionend", "keypress", "textInput",
            "paste"
          ]
        },
        compositionEnd: {
          phasedRegistrationNames: {
            bubbled: "onCompositionEnd",
            captured: "onCompositionEndCapture"
          },
          dependencies: "blur compositionend keydown keypress keyup mousedown"
            .split(" ")
        },
        compositionStart: {
          phasedRegistrationNames: {
            bubbled: "onCompositionStart",
            captured: "onCompositionStartCapture"
          },
          dependencies: "blur compositionstart keydown keypress keyup mousedown"
            .split(" ")
        },
        compositionUpdate: {
          phasedRegistrationNames: {
            bubbled: "onCompositionUpdate",
            captured: "onCompositionUpdateCapture"
          },
          dependencies: "blur compositionupdate keydown keypress keyup mousedown"
            .split(" ")
        }
      },
      we = !1;

    function Ee(e, t) {
      switch (e) {
        case "keyup":
          return -1 !== de.indexOf(t.keyCode);
        case "keydown":
          return 229 !== t.keyCode;
        case "keypress":
        case "mousedown":
        case "blur":
          return !0;
        default:
          return !1
      }
    }

    function Ce(e) {
      return "object" === typeof(e = e.detail) && "data" in e ? e.data :
        null
    }
    var Se = !1;
    var Te = {
        eventTypes: be,
        extractEvents: function(e, t, n, r) {
          var i = void 0,
            o = void 0;
          if (ye) e: {
            switch (e) {
              case "compositionstart":
                i = be.compositionStart;
                break e;
              case "compositionend":
                i = be.compositionEnd;
                break e;
              case "compositionupdate":
                i = be.compositionUpdate;
                break e
            }
            i = void 0
          } else Se ? Ee(e, n) && (i = be.compositionEnd) : "keydown" ===
            e && 229 === n.keyCode && (i = be.compositionStart);
          return i ? (ge && "ko" !== n.locale && (Se || i !== be.compositionStart ?
                i === be.compositionEnd && Se && (o = oe()) : (re =
                  "value" in (ne = r) ? ne.value : ne.textContent, Se = !
                  0)), i = pe.getPooled(i, t, n, r), o ? i.data = o :
              null !== (o = Ce(n)) && (i.data = o), z(i), o = i) : o =
            null, (e = me ? function(e, t) {
              switch (e) {
                case "compositionend":
                  return Ce(t);
                case "keypress":
                  return 32 !== t.which ? null : (we = !0, _e);
                case "textInput":
                  return (e = t.data) === _e && we ? null : e;
                default:
                  return null
              }
            }(e, n) : function(e, t) {
              if (Se) return "compositionend" === e || !ye && Ee(e, t) ?
                (e = oe(), ie = re = ne = null, Se = !1, e) : null;
              switch (e) {
                case "paste":
                  return null;
                case "keypress":
                  if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey &&
                    t.altKey) {
                    if (t.char && 1 < t.char.length) return t.char;
                    if (t.which) return String.fromCharCode(t.which)
                  }
                  return null;
                case "compositionend":
                  return ge && "ko" !== t.locale ? null : t.data;
                default:
                  return null
              }
            }(e, n)) ? ((t = he.getPooled(be.beforeInput, t, n, r)).data =
              e, z(t)) : t = null, null === o ? t : null === t ? o : [o,
              t
            ]
        }
      },
      xe = null,
      ke = null,
      Pe = null;

    function Oe(e) {
      if (e = E(e)) {
        "function" !== typeof xe && a("280");
        var t = w(e.stateNode);
        xe(e.stateNode, e.type, t)
      }
    }

    function Ne(e) {
      ke ? Pe ? Pe.push(e) : Pe = [e] : ke = e
    }

    function Ie() {
      if (ke) {
        var e = ke,
          t = Pe;
        if (Pe = ke = null, Oe(e), t)
          for (e = 0; e < t.length; e++) Oe(t[e])
      }
    }

    function Re(e, t) {
      return e(t)
    }

    function Ae(e, t, n) {
      return e(t, n)
    }

    function De() {}
    var Fe = !1;

    function Le(e, t) {
      if (Fe) return e(t);
      Fe = !0;
      try {
        return Re(e, t)
      } finally {
        Fe = !1, (null !== ke || null !== Pe) && (De(), Ie())
      }
    }
    var Me = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };

    function je(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return "input" === t ? !!Me[e.type] : "textarea" === t
    }

    function Ue(e) {
      return (e = e.target || e.srcElement || window).correspondingUseElement &&
        (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode :
        e
    }

    function We(e) {
      if (!Q) return !1;
      var t = (e = "on" + e) in document;
      return t || ((t = document.createElement("div")).setAttribute(e,
        "return;"), t = "function" === typeof t[e]), t
    }

    function Ve(e) {
      var t = e.type;
      return (e = e.nodeName) && "input" === e.toLowerCase() && (
        "checkbox" === t || "radio" === t)
    }

    function Be(e) {
      e._valueTracker || (e._valueTracker = function(e) {
        var t = Ve(e) ? "checked" : "value",
          n = Object.getOwnPropertyDescriptor(e.constructor.prototype,
            t),
          r = "" + e[t];
        if (!e.hasOwnProperty(t) && "undefined" !== typeof n &&
          "function" === typeof n.get && "function" === typeof n.set) {
          var i = n.get,
            o = n.set;
          return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
              return i.call(this)
            },
            set: function(e) {
              r = "" + e, o.call(this, e)
            }
          }), Object.defineProperty(e, t, {
            enumerable: n.enumerable
          }), {
            getValue: function() {
              return r
            },
            setValue: function(e) {
              r = "" + e
            },
            stopTracking: function() {
              e._valueTracker = null, delete e[t]
            }
          }
        }
      }(e))
    }

    function qe(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var n = t.getValue(),
        r = "";
      return e && (r = Ve(e) ? e.checked ? "true" : "false" : e.value), (
        e = r) !== n && (t.setValue(e), !0)
    }
    var ze = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    ze.hasOwnProperty("ReactCurrentDispatcher") || (ze.ReactCurrentDispatcher = {
      current: null
    });
    var Qe = /^(.*)[\\\/]/,
      He = "function" === typeof Symbol && Symbol.for,
      Ke = He ? Symbol.for("react.element") : 60103,
      Ge = He ? Symbol.for("react.portal") : 60106,
      $e = He ? Symbol.for("react.fragment") : 60107,
      Ye = He ? Symbol.for("react.strict_mode") : 60108,
      Xe = He ? Symbol.for("react.profiler") : 60114,
      Je = He ? Symbol.for("react.provider") : 60109,
      Ze = He ? Symbol.for("react.context") : 60110,
      et = He ? Symbol.for("react.concurrent_mode") : 60111,
      tt = He ? Symbol.for("react.forward_ref") : 60112,
      nt = He ? Symbol.for("react.suspense") : 60113,
      rt = He ? Symbol.for("react.memo") : 60115,
      it = He ? Symbol.for("react.lazy") : 60116,
      ot = "function" === typeof Symbol && Symbol.iterator;

    function at(e) {
      return null === e || "object" !== typeof e ? null : "function" ===
        typeof(e = ot && e[ot] || e["@@iterator"]) ? e : null
    }

    function st(e) {
      if (null == e) return null;
      if ("function" === typeof e) return e.displayName || e.name || null;
      if ("string" === typeof e) return e;
      switch (e) {
        case et:
          return "ConcurrentMode";
        case $e:
          return "Fragment";
        case Ge:
          return "Portal";
        case Xe:
          return "Profiler";
        case Ye:
          return "StrictMode";
        case nt:
          return "Suspense"
      }
      if ("object" === typeof e) switch (e.$$typeof) {
        case Ze:
          return "Context.Consumer";
        case Je:
          return "Context.Provider";
        case tt:
          var t = e.render;
          return t = t.displayName || t.name || "", e.displayName || (
            "" !== t ? "ForwardRef(" + t + ")" : "ForwardRef");
        case rt:
          return st(e.type);
        case it:
          if (e = 1 === e._status ? e._result : null) return st(e)
      }
      return null
    }

    function ut(e) {
      var t = "";
      do {
        e: switch (e.tag) {
          case 3:
          case 4:
          case 6:
          case 7:
          case 10:
          case 9:
            var n = "";
            break e;
          default:
            var r = e._debugOwner,
              i = e._debugSource,
              o = st(e.type);
            n = null, r && (n = st(r.type)), r = o, o = "", i ? o =
              " (at " + i.fileName.replace(Qe, "") + ":" + i.lineNumber +
              ")" : n && (o = " (created by " + n + ")"), n =
              "\n    in " + (r || "Unknown") + o
        }
        t += n,
        e = e.return
      } while (e);
      return t
    }
    var lt =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
      ct = Object.prototype.hasOwnProperty,
      ft = {},
      pt = {};

    function ht(e, t, n, r, i) {
      this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName =
        r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName =
        e, this.type = t
    }
    var dt = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ").forEach(function(e) {
        dt[e] = new ht(e, 0, !1, e, null)
      }), [
        ["acceptCharset", "accept-charset"],
        ["className", "class"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"]
      ].forEach(function(e) {
        var t = e[0];
        dt[t] = new ht(t, 1, !1, e[1], null)
      }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(
        function(e) {
          dt[e] = new ht(e, 2, !1, e.toLowerCase(), null)
        }), ["autoReverse", "externalResourcesRequired", "focusable",
        "preserveAlpha"
      ].forEach(function(e) {
        dt[e] = new ht(e, 2, !1, e, null)
      }),
      "allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ").forEach(function(e) {
        dt[e] = new ht(e, 3, !1, e.toLowerCase(), null)
      }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
        dt[e] = new ht(e, 3, !0, e, null)
      }), ["capture", "download"].forEach(function(e) {
        dt[e] = new ht(e, 4, !1, e, null)
      }), ["cols", "rows", "size", "span"].forEach(function(e) {
        dt[e] = new ht(e, 6, !1, e, null)
      }), ["rowSpan", "start"].forEach(function(e) {
        dt[e] = new ht(e, 5, !1, e.toLowerCase(), null)
      });
    var yt = /[\-:]([a-z])/g;

    function vt(e) {
      return e[1].toUpperCase()
    }

    function mt(e, t, n, r) {
      var i = dt.hasOwnProperty(t) ? dt[t] : null;
      (null !== i ? 0 === i.type : !r && (2 < t.length && ("o" === t[0] ||
        "O" === t[0]) && ("n" === t[1] || "N" === t[1]))) || (function(e,
          t, n, r) {
          if (null === t || "undefined" === typeof t || function(e, t, n,
              r) {
              if (null !== n && 0 === n.type) return !1;
              switch (typeof t) {
                case "function":
                case "symbol":
                  return !0;
                case "boolean":
                  return !r && (null !== n ? !n.acceptsBooleans : "data-" !==
                    (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                default:
                  return !1
              }
            }(e, t, n, r)) return !0;
          if (r) return !1;
          if (null !== n) switch (n.type) {
            case 3:
              return !t;
            case 4:
              return !1 === t;
            case 5:
              return isNaN(t);
            case 6:
              return isNaN(t) || 1 > t
          }
          return !1
        }(t, n, i, r) && (n = null), r || null === i ? function(e) {
          return !!ct.call(pt, e) || !ct.call(ft, e) && (lt.test(e) ? pt[
            e] = !0 : (ft[e] = !0, !1))
        }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" +
          n)) : i.mustUseProperty ? e[i.propertyName] = null === n ? 3 !==
        i.type && "" : n : (t = i.attributeName, r = i.attributeNamespace,
          null === n ? e.removeAttribute(t) : (n = 3 === (i = i.type) ||
            4 === i && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t,
              n) : e.setAttribute(t, n))))
    }

    function gt(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "object":
        case "string":
        case "undefined":
          return e;
        default:
          return ""
      }
    }

    function _t(e, t) {
      var n = t.checked;
      return i({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: null != n ? n : e._wrapperState.initialChecked
      })
    }

    function bt(e, t) {
      var n = null == t.defaultValue ? "" : t.defaultValue,
        r = null != t.checked ? t.checked : t.defaultChecked;
      n = gt(null != t.value ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: "checkbox" === t.type || "radio" === t.type ? null !=
          t.checked : null != t.value
      }
    }

    function wt(e, t) {
      null != (t = t.checked) && mt(e, "checked", t, !1)
    }

    function Et(e, t) {
      wt(e, t);
      var n = gt(t.value),
        r = t.type;
      if (null != n) "number" === r ? (0 === n && "" === e.value || e.value !=
        n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" +
        n);
      else if ("submit" === r || "reset" === r) return void e.removeAttribute(
        "value");
      t.hasOwnProperty("value") ? St(e, t.type, n) : t.hasOwnProperty(
          "defaultValue") && St(e, t.type, gt(t.defaultValue)), null == t
        .checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
    }

    function Ct(e, t, n) {
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!("submit" !== r && "reset" !== r || void 0 !== t.value &&
            null !== t.value)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value =
          t), e.defaultValue = t
      }
      "" !== (n = e.name) && (e.name = ""), e.defaultChecked = !e.defaultChecked,
        e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n &&
        (e.name = n)
    }

    function St(e, t, n) {
      "number" === t && e.ownerDocument.activeElement === e || (null == n ?
        e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !==
        "" + n && (e.defaultValue = "" + n))
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ").forEach(function(e) {
        var t = e.replace(yt, vt);
        dt[t] = new ht(t, 1, !1, e, null)
      }),
      "xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type"
      .split(" ").forEach(function(e) {
        var t = e.replace(yt, vt);
        dt[t] = new ht(t, 1, !1, e, "http://www.w3.org/1999/xlink")
      }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
        var t = e.replace(yt, vt);
        dt[t] = new ht(t, 1, !1, e,
          "http://www.w3.org/XML/1998/namespace")
      }), dt.tabIndex = new ht("tabIndex", 1, !1, "tabindex", null);
    var Tt = {
      change: {
        phasedRegistrationNames: {
          bubbled: "onChange",
          captured: "onChangeCapture"
        },
        dependencies: "blur change click focus input keydown keyup selectionchange"
          .split(" ")
      }
    };

    function xt(e, t, n) {
      return (e = ue.getPooled(Tt.change, e, t, n)).type = "change", Ne(n),
        z(e), e
    }
    var kt = null,
      Pt = null;

    function Ot(e) {
      I(e)
    }

    function Nt(e) {
      if (qe(M(e))) return e
    }

    function It(e, t) {
      if ("change" === e) return t
    }
    var Rt = !1;

    function At() {
      kt && (kt.detachEvent("onpropertychange", Dt), Pt = kt = null)
    }

    function Dt(e) {
      "value" === e.propertyName && Nt(Pt) && Le(Ot, e = xt(Pt, e, Ue(e)))
    }

    function Ft(e, t, n) {
      "focus" === e ? (At(), Pt = n, (kt = t).attachEvent(
        "onpropertychange", Dt)) : "blur" === e && At()
    }

    function Lt(e) {
      if ("selectionchange" === e || "keyup" === e || "keydown" === e)
        return Nt(Pt)
    }

    function Mt(e, t) {
      if ("click" === e) return Nt(t)
    }

    function jt(e, t) {
      if ("input" === e || "change" === e) return Nt(t)
    }
    Q && (Rt = We("input") && (!document.documentMode || 9 < document.documentMode));
    var Ut = {
        eventTypes: Tt,
        _isInputEventSupported: Rt,
        extractEvents: function(e, t, n, r) {
          var i = t ? M(t) : window,
            o = void 0,
            a = void 0,
            s = i.nodeName && i.nodeName.toLowerCase();
          if ("select" === s || "input" === s && "file" === i.type ? o =
            It : je(i) ? Rt ? o = jt : (o = Lt, a = Ft) : (s = i.nodeName) &&
            "input" === s.toLowerCase() && ("checkbox" === i.type ||
              "radio" === i.type) && (o = Mt), o && (o = o(e, t)))
            return xt(o, n, r);
          a && a(e, i, t), "blur" === e && (e = i._wrapperState) && e.controlled &&
            "number" === i.type && St(i, "number", i.value)
        }
      },
      Wt = ue.extend({
        view: null,
        detail: null
      }),
      Vt = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
      };

    function Bt(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : !!(e = Vt[e]) &&
        !!t[e]
    }

    function qt() {
      return Bt
    }
    var zt = 0,
      Qt = 0,
      Ht = !1,
      Kt = !1,
      Gt = Wt.extend({
        screenX: null,
        screenY: null,
        clientX: null,
        clientY: null,
        pageX: null,
        pageY: null,
        ctrlKey: null,
        shiftKey: null,
        altKey: null,
        metaKey: null,
        getModifierState: qt,
        button: null,
        buttons: null,
        relatedTarget: function(e) {
          return e.relatedTarget || (e.fromElement === e.srcElement ?
            e.toElement : e.fromElement)
        },
        movementX: function(e) {
          if ("movementX" in e) return e.movementX;
          var t = zt;
          return zt = e.screenX, Ht ? "mousemove" === e.type ? e.screenX -
            t : 0 : (Ht = !0, 0)
        },
        movementY: function(e) {
          if ("movementY" in e) return e.movementY;
          var t = Qt;
          return Qt = e.screenY, Kt ? "mousemove" === e.type ? e.screenY -
            t : 0 : (Kt = !0, 0)
        }
      }),
      $t = Gt.extend({
        pointerId: null,
        width: null,
        height: null,
        pressure: null,
        tangentialPressure: null,
        tiltX: null,
        tiltY: null,
        twist: null,
        pointerType: null,
        isPrimary: null
      }),
      Yt = {
        mouseEnter: {
          registrationName: "onMouseEnter",
          dependencies: ["mouseout", "mouseover"]
        },
        mouseLeave: {
          registrationName: "onMouseLeave",
          dependencies: ["mouseout", "mouseover"]
        },
        pointerEnter: {
          registrationName: "onPointerEnter",
          dependencies: ["pointerout", "pointerover"]
        },
        pointerLeave: {
          registrationName: "onPointerLeave",
          dependencies: ["pointerout", "pointerover"]
        }
      },
      Xt = {
        eventTypes: Yt,
        extractEvents: function(e, t, n, r) {
          var i = "mouseover" === e || "pointerover" === e,
            o = "mouseout" === e || "pointerout" === e;
          if (i && (n.relatedTarget || n.fromElement) || !o && !i)
            return null;
          if (i = r.window === r ? r : (i = r.ownerDocument) ? i.defaultView ||
            i.parentWindow : window, o ? (o = t, t = (t = n.relatedTarget ||
              n.toElement) ? F(t) : null) : o = null, o === t) return
            null;
          var a = void 0,
            s = void 0,
            u = void 0,
            l = void 0;
          "mouseout" === e || "mouseover" === e ? (a = Gt, s = Yt.mouseLeave,
              u = Yt.mouseEnter, l = "mouse") : "pointerout" !== e &&
            "pointerover" !== e || (a = $t, s = Yt.pointerLeave, u = Yt
              .pointerEnter, l = "pointer");
          var c = null == o ? i : M(o);
          if (i = null == t ? i : M(t), (e = a.getPooled(s, o, n, r)).type =
            l + "leave", e.target = c, e.relatedTarget = i, (n = a.getPooled(
              u, t, n, r)).type = l + "enter", n.target = i, n.relatedTarget =
            c, r = t, o && r) e: {
            for (i = r, l = 0, a = t = o; a; a = U(a)) l++;
            for (a = 0, u = i; u; u = U(u)) a++;
            for (; 0 < l - a;) t = U(t),
              l--;
            for (; 0 < a - l;) i = U(i),
              a--;
            for (; l--;) {
              if (t === i || t === i.alternate) break e;
              t = U(t), i = U(i)
            }
            t = null
          } else t = null;
          for (i = t, t = []; o && o !== i && (null === (l = o.alternate) ||
              l !== i);) t.push(o), o = U(o);
          for (o = []; r && r !== i && (null === (l = r.alternate) || l !==
              i);) o.push(r), r = U(r);
          for (r = 0; r < t.length; r++) B(t[r], "bubbled", e);
          for (r = o.length; 0 < r--;) B(o[r], "captured", n);
          return [e, n]
        }
      };

    function Jt(e, t) {
      return e === t && (0 !== e || 1 / e === 1 / t) || e !== e && t !==
        t
    }
    var Zt = Object.prototype.hasOwnProperty;

    function en(e, t) {
      if (Jt(e, t)) return !0;
      if ("object" !== typeof e || null === e || "object" !== typeof t ||
        null === t) return !1;
      var n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (r = 0; r < n.length; r++)
        if (!Zt.call(t, n[r]) || !Jt(e[n[r]], t[n[r]])) return !1;
      return !0
    }

    function tn(e) {
      var t = e;
      if (e.alternate)
        for (; t.return;) t = t.return;
      else {
        if (0 !== (2 & t.effectTag)) return 1;
        for (; t.return;)
          if (0 !== (2 & (t = t.return).effectTag)) return 1
      }
      return 3 === t.tag ? 2 : 3
    }

    function nn(e) {
      2 !== tn(e) && a("188")
    }

    function rn(e) {
      if (!(e = function(e) {
          var t = e.alternate;
          if (!t) return 3 === (t = tn(e)) && a("188"), 1 === t ? null :
            e;
          for (var n = e, r = t;;) {
            var i = n.return,
              o = i ? i.alternate : null;
            if (!i || !o) break;
            if (i.child === o.child) {
              for (var s = i.child; s;) {
                if (s === n) return nn(i), e;
                if (s === r) return nn(i), t;
                s = s.sibling
              }
              a("188")
            }
            if (n.return !== r.return) n = i, r = o;
            else {
              s = !1;
              for (var u = i.child; u;) {
                if (u === n) {
                  s = !0, n = i, r = o;
                  break
                }
                if (u === r) {
                  s = !0, r = i, n = o;
                  break
                }
                u = u.sibling
              }
              if (!s) {
                for (u = o.child; u;) {
                  if (u === n) {
                    s = !0, n = o, r = i;
                    break
                  }
                  if (u === r) {
                    s = !0, r = o, n = i;
                    break
                  }
                  u = u.sibling
                }
                s || a("189")
              }
            }
            n.alternate !== r && a("190")
          }
          return 3 !== n.tag && a("188"), n.stateNode.current === n ? e :
            t
        }(e))) return null;
      for (var t = e;;) {
        if (5 === t.tag || 6 === t.tag) return t;
        if (t.child) t.child.return = t, t = t.child;
        else {
          if (t === e) break;
          for (; !t.sibling;) {
            if (!t.return || t.return === e) return null;
            t = t.return
          }
          t.sibling.return = t.return, t = t.sibling
        }
      }
      return null
    }
    var on = ue.extend({
        animationName: null,
        elapsedTime: null,
        pseudoElement: null
      }),
      an = ue.extend({
        clipboardData: function(e) {
          return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
      }),
      sn = Wt.extend({
        relatedTarget: null
      });

    function un(e) {
      var t = e.keyCode;
      return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e =
        13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
    }
    var ln = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
      },
      cn = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
      },
      fn = Wt.extend({
        key: function(e) {
          if (e.key) {
            var t = ln[e.key] || e.key;
            if ("Unidentified" !== t) return t
          }
          return "keypress" === e.type ? 13 === (e = un(e)) ? "Enter" :
            String.fromCharCode(e) : "keydown" === e.type || "keyup" ===
            e.type ? cn[e.keyCode] || "Unidentified" : ""
        },
        location: null,
        ctrlKey: null,
        shiftKey: null,
        altKey: null,
        metaKey: null,
        repeat: null,
        locale: null,
        getModifierState: qt,
        charCode: function(e) {
          return "keypress" === e.type ? un(e) : 0
        },
        keyCode: function(e) {
          return "keydown" === e.type || "keyup" === e.type ? e.keyCode :
            0
        },
        which: function(e) {
          return "keypress" === e.type ? un(e) : "keydown" === e.type ||
            "keyup" === e.type ? e.keyCode : 0
        }
      }),
      pn = Gt.extend({
        dataTransfer: null
      }),
      hn = Wt.extend({
        touches: null,
        targetTouches: null,
        changedTouches: null,
        altKey: null,
        metaKey: null,
        ctrlKey: null,
        shiftKey: null,
        getModifierState: qt
      }),
      dn = ue.extend({
        propertyName: null,
        elapsedTime: null,
        pseudoElement: null
      }),
      yn = Gt.extend({
        deltaX: function(e) {
          return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX :
            0
        },
        deltaY: function(e) {
          return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY :
            "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: null,
        deltaMode: null
      }),
      vn = [
        ["abort", "abort"],
        [X, "animationEnd"],
        [J, "animationIteration"],
        [Z, "animationStart"],
        ["canplay", "canPlay"],
        ["canplaythrough", "canPlayThrough"],
        ["drag", "drag"],
        ["dragenter", "dragEnter"],
        ["dragexit", "dragExit"],
        ["dragleave", "dragLeave"],
        ["dragover", "dragOver"],
        ["durationchange", "durationChange"],
        ["emptied", "emptied"],
        ["encrypted", "encrypted"],
        ["ended", "ended"],
        ["error", "error"],
        ["gotpointercapture", "gotPointerCapture"],
        ["load", "load"],
        ["loadeddata", "loadedData"],
        ["loadedmetadata", "loadedMetadata"],
        ["loadstart", "loadStart"],
        ["lostpointercapture", "lostPointerCapture"],
        ["mousemove", "mouseMove"],
        ["mouseout", "mouseOut"],
        ["mouseover", "mouseOver"],
        ["playing", "playing"],
        ["pointermove", "pointerMove"],
        ["pointerout", "pointerOut"],
        ["pointerover", "pointerOver"],
        ["progress", "progress"],
        ["scroll", "scroll"],
        ["seeking", "seeking"],
        ["stalled", "stalled"],
        ["suspend", "suspend"],
        ["timeupdate", "timeUpdate"],
        ["toggle", "toggle"],
        ["touchmove", "touchMove"],
        [ee, "transitionEnd"],
        ["waiting", "waiting"],
        ["wheel", "wheel"]
      ],
      mn = {},
      gn = {};

    function _n(e, t) {
      var n = e[0],
        r = "on" + ((e = e[1])[0].toUpperCase() + e.slice(1));
      t = {
        phasedRegistrationNames: {
          bubbled: r,
          captured: r + "Capture"
        },
        dependencies: [n],
        isInteractive: t
      }, mn[e] = t, gn[n] = t
    }[
      ["blur", "blur"],
      ["cancel", "cancel"],
      ["click", "click"],
      ["close", "close"],
      ["contextmenu", "contextMenu"],
      ["copy", "copy"],
      ["cut", "cut"],
      ["auxclick", "auxClick"],
      ["dblclick", "doubleClick"],
      ["dragend", "dragEnd"],
      ["dragstart", "dragStart"],
      ["drop", "drop"],
      ["focus", "focus"],
      ["input", "input"],
      ["invalid", "invalid"],
      ["keydown", "keyDown"],
      ["keypress", "keyPress"],
      ["keyup", "keyUp"],
      ["mousedown", "mouseDown"],
      ["mouseup", "mouseUp"],
      ["paste", "paste"],
      ["pause", "pause"],
      ["play", "play"],
      ["pointercancel", "pointerCancel"],
      ["pointerdown", "pointerDown"],
      ["pointerup", "pointerUp"],
      ["ratechange", "rateChange"],
      ["reset", "reset"],
      ["seeked", "seeked"],
      ["submit", "submit"],
      ["touchcancel", "touchCancel"],
      ["touchend", "touchEnd"],
      ["touchstart", "touchStart"],
      ["volumechange", "volumeChange"]
    ].forEach(function(e) {
      _n(e, !0)
    }), vn.forEach(function(e) {
      _n(e, !1)
    });
    var bn = {
        eventTypes: mn,
        isInteractiveTopLevelEventType: function(e) {
          return void 0 !== (e = gn[e]) && !0 === e.isInteractive
        },
        extractEvents: function(e, t, n, r) {
          var i = gn[e];
          if (!i) return null;
          switch (e) {
            case "keypress":
              if (0 === un(n)) return null;
            case "keydown":
            case "keyup":
              e = fn;
              break;
            case "blur":
            case "focus":
              e = sn;
              break;
            case "click":
              if (2 === n.button) return null;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              e = Gt;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              e = pn;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              e = hn;
              break;
            case X:
            case J:
            case Z:
              e = on;
              break;
            case ee:
              e = dn;
              break;
            case "scroll":
              e = Wt;
              break;
            case "wheel":
              e = yn;
              break;
            case "copy":
            case "cut":
            case "paste":
              e = an;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              e = $t;
              break;
            default:
              e = ue
          }
          return z(t = e.getPooled(i, t, n, r)), t
        }
      },
      wn = bn.isInteractiveTopLevelEventType,
      En = [];

    function Cn(e) {
      var t = e.targetInst,
        n = t;
      do {
        if (!n) {
          e.ancestors.push(n);
          break
        }
        var r;
        for (r = n; r.return;) r = r.return;
        if (!(r = 3 !== r.tag ? null : r.stateNode.containerInfo)) break;
        e.ancestors.push(n), n = F(r)
      } while (n);
      for (n = 0; n < e.ancestors.length; n++) {
        t = e.ancestors[n];
        var i = Ue(e.nativeEvent);
        r = e.topLevelType;
        for (var o = e.nativeEvent, a = null, s = 0; s < m.length; s++) {
          var u = m[s];
          u && (u = u.extractEvents(r, t, o, i)) && (a = T(a, u))
        }
        I(a)
      }
    }
    var Sn = !0;

    function Tn(e, t) {
      if (!t) return null;
      var n = (wn(e) ? kn : Pn).bind(null, e);
      t.addEventListener(e, n, !1)
    }

    function xn(e, t) {
      if (!t) return null;
      var n = (wn(e) ? kn : Pn).bind(null, e);
      t.addEventListener(e, n, !0)
    }

    function kn(e, t) {
      Ae(Pn, e, t)
    }

    function Pn(e, t) {
      if (Sn) {
        var n = Ue(t);
        if (null === (n = F(n)) || "number" !== typeof n.tag || 2 === tn(
            n) || (n = null), En.length) {
          var r = En.pop();
          r.topLevelType = e, r.nativeEvent = t, r.targetInst = n, e = r
        } else e = {
          topLevelType: e,
          nativeEvent: t,
          targetInst: n,
          ancestors: []
        };
        try {
          Le(Cn, e)
        } finally {
          e.topLevelType = null, e.nativeEvent = null, e.targetInst =
            null, e.ancestors.length = 0, 10 > En.length && En.push(e)
        }
      }
    }
    var On = {},
      Nn = 0,
      In = "_reactListenersID" + ("" + Math.random()).slice(2);

    function Rn(e) {
      return Object.prototype.hasOwnProperty.call(e, In) || (e[In] = Nn++,
        On[e[In]] = {}), On[e[In]]
    }

    function An(e) {
      if ("undefined" === typeof(e = e || ("undefined" !== typeof document ?
          document : void 0))) return null;
      try {
        return e.activeElement || e.body
      } catch (t) {
        return e.body
      }
    }

    function Dn(e) {
      for (; e && e.firstChild;) e = e.firstChild;
      return e
    }

    function Fn(e, t) {
      var n, r = Dn(e);
      for (e = 0; r;) {
        if (3 === r.nodeType) {
          if (n = e + r.textContent.length, e <= t && n >= t) return {
            node: r,
            offset: t - e
          };
          e = n
        }
        e: {
          for (; r;) {
            if (r.nextSibling) {
              r = r.nextSibling;
              break e
            }
            r = r.parentNode
          }
          r = void 0
        }
        r = Dn(r)
      }
    }

    function Ln() {
      for (var e = window, t = An(); t instanceof e.HTMLIFrameElement;) {
        try {
          e = t.contentDocument.defaultView
        } catch (n) {
          break
        }
        t = An(e.document)
      }
      return t
    }

    function Mn(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && ("input" === t && ("text" === e.type || "search" === e.type ||
        "tel" === e.type || "url" === e.type || "password" === e.type
      ) || "textarea" === t || "true" === e.contentEditable)
    }
    var jn = Q && "documentMode" in document && 11 >= document.documentMode,
      Un = {
        select: {
          phasedRegistrationNames: {
            bubbled: "onSelect",
            captured: "onSelectCapture"
          },
          dependencies: "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange"
            .split(" ")
        }
      },
      Wn = null,
      Vn = null,
      Bn = null,
      qn = !1;

    function zn(e, t) {
      var n = t.window === t ? t.document : 9 === t.nodeType ? t : t.ownerDocument;
      return qn || null == Wn || Wn !== An(n) ? null : ("selectionStart" in
        (n = Wn) && Mn(n) ? n = {
          start: n.selectionStart,
          end: n.selectionEnd
        } : n = {
          anchorNode: (n = (n.ownerDocument && n.ownerDocument.defaultView ||
            window).getSelection()).anchorNode,
          anchorOffset: n.anchorOffset,
          focusNode: n.focusNode,
          focusOffset: n.focusOffset
        }, Bn && en(Bn, n) ? null : (Bn = n, (e = ue.getPooled(Un.select,
          Vn, e, t)).type = "select", e.target = Wn, z(e), e))
    }
    var Qn = {
      eventTypes: Un,
      extractEvents: function(e, t, n, r) {
        var i, o = r.window === r ? r.document : 9 === r.nodeType ? r :
          r.ownerDocument;
        if (!(i = !o)) {
          e: {
            o = Rn(o),
              i = b.onSelect;
            for (var a = 0; a < i.length; a++) {
              var s = i[a];
              if (!o.hasOwnProperty(s) || !o[s]) {
                o = !1;
                break e
              }
            }
            o = !0
          }
          i = !o
        }
        if (i) return null;
        switch (o = t ? M(t) : window, e) {
          case "focus":
            (je(o) || "true" === o.contentEditable) && (Wn = o, Vn =
              t, Bn = null);
            break;
          case "blur":
            Bn = Vn = Wn = null;
            break;
          case "mousedown":
            qn = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            return qn = !1, zn(n, r);
          case "selectionchange":
            if (jn) break;
          case "keydown":
          case "keyup":
            return zn(n, r)
        }
        return null
      }
    };

    function Hn(e, t) {
      return e = i({
        children: void 0
      }, t), (t = function(e) {
        var t = "";
        return r.Children.forEach(e, function(e) {
          null != e && (t += e)
        }), t
      }(t.children)) && (e.children = t), e
    }

    function Kn(e, t, n, r) {
      if (e = e.options, t) {
        t = {};
        for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value),
          e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !
            0)
      } else {
        for (n = "" + gt(n), t = null, i = 0; i < e.length; i++) {
          if (e[i].value === n) return e[i].selected = !0, void(r && (e[i]
            .defaultSelected = !0));
          null !== t || e[i].disabled || (t = e[i])
        }
        null !== t && (t.selected = !0)
      }
    }

    function Gn(e, t) {
      return null != t.dangerouslySetInnerHTML && a("91"), i({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
      })
    }

    function $n(e, t) {
      var n = t.value;
      null == n && (n = t.defaultValue, null != (t = t.children) && (null !=
        n && a("92"), Array.isArray(t) && (1 >= t.length || a("93"),
          t = t[0]), n = t), null == n && (n = "")), e._wrapperState = {
        initialValue: gt(n)
      }
    }

    function Yn(e, t) {
      var n = gt(t.value),
        r = gt(t.defaultValue);
      null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue &&
        e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue =
        "" + r)
    }

    function Xn(e) {
      var t = e.textContent;
      t === e._wrapperState.initialValue && (e.value = t)
    }
    O.injectEventPluginOrder(
      "ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin"
      .split(" ")), w = j, E = L, C = M, O.injectEventPluginsByName({
      SimpleEventPlugin: bn,
      EnterLeaveEventPlugin: Xt,
      ChangeEventPlugin: Ut,
      SelectEventPlugin: Qn,
      BeforeInputEventPlugin: Te
    });
    var Jn = {
      html: "http://www.w3.org/1999/xhtml",
      mathml: "http://www.w3.org/1998/Math/MathML",
      svg: "http://www.w3.org/2000/svg"
    };

    function Zn(e) {
      switch (e) {
        case "svg":
          return "http://www.w3.org/2000/svg";
        case "math":
          return "http://www.w3.org/1998/Math/MathML";
        default:
          return "http://www.w3.org/1999/xhtml"
      }
    }

    function er(e, t) {
      return null == e || "http://www.w3.org/1999/xhtml" === e ? Zn(t) :
        "http://www.w3.org/2000/svg" === e && "foreignObject" === t ?
        "http://www.w3.org/1999/xhtml" : e
    }
    var tr, nr = void 0,
      rr = (tr = function(e, t) {
          if (e.namespaceURI !== Jn.svg || "innerHTML" in e) e.innerHTML =
            t;
          else {
            for ((nr = nr || document.createElement("div")).innerHTML =
              "<svg>" + t + "</svg>", t = nr.firstChild; e.firstChild;) e
              .removeChild(e.firstChild);
            for (; t.firstChild;) e.appendChild(t.firstChild)
          }
        }, "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ?
        function(e, t, n, r) {
          MSApp.execUnsafeLocalFunction(function() {
            return tr(e, t)
          })
        } : tr);

    function ir(e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && 3 === n.nodeType) return void(n.nodeValue =
          t)
      }
      e.textContent = t
    }
    var or = {
        animationIterationCount: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
      },
      ar = ["Webkit", "ms", "Moz", "O"];

    function sr(e, t, n) {
      return null == t || "boolean" === typeof t || "" === t ? "" : n ||
        "number" !== typeof t || 0 === t || or.hasOwnProperty(e) && or[e] ?
        ("" + t).trim() : t + "px"
    }

    function ur(e, t) {
      for (var n in e = e.style, t)
        if (t.hasOwnProperty(n)) {
          var r = 0 === n.indexOf("--"),
            i = sr(n, t[n], r);
          "float" === n && (n = "cssFloat"), r ? e.setProperty(n, i) : e[
            n] = i
        }
    }
    Object.keys(or).forEach(function(e) {
      ar.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), or[t] =
          or[e]
      })
    });
    var lr = i({
      menuitem: !0
    }, {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
    });

    function cr(e, t) {
      t && (lr[e] && (null != t.children || null != t.dangerouslySetInnerHTML) &&
        a("137", e, ""), null != t.dangerouslySetInnerHTML && (null !=
          t.children && a("60"), "object" === typeof t.dangerouslySetInnerHTML &&
          "__html" in t.dangerouslySetInnerHTML || a("61")), null != t.style &&
        "object" !== typeof t.style && a("62", ""))
    }

    function fr(e, t) {
      if (-1 === e.indexOf("-")) return "string" === typeof t.is;
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0
      }
    }

    function pr(e, t) {
      var n = Rn(e = 9 === e.nodeType || 11 === e.nodeType ? e : e.ownerDocument);
      t = b[t];
      for (var r = 0; r < t.length; r++) {
        var i = t[r];
        if (!n.hasOwnProperty(i) || !n[i]) {
          switch (i) {
            case "scroll":
              xn("scroll", e);
              break;
            case "focus":
            case "blur":
              xn("focus", e), xn("blur", e), n.blur = !0, n.focus = !0;
              break;
            case "cancel":
            case "close":
              We(i) && xn(i, e);
              break;
            case "invalid":
            case "submit":
            case "reset":
              break;
            default:
              -1 === te.indexOf(i) && Tn(i, e)
          }
          n[i] = !0
        }
      }
    }

    function hr() {}
    var dr = null,
      yr = null;

    function vr(e, t) {
      switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!t.autoFocus
      }
      return !1
    }

    function mr(e, t) {
      return "textarea" === e || "option" === e || "noscript" === e ||
        "string" === typeof t.children || "number" === typeof t.children ||
        "object" === typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML &&
        null != t.dangerouslySetInnerHTML.__html
    }
    var gr = "function" === typeof setTimeout ? setTimeout : void 0,
      _r = "function" === typeof clearTimeout ? clearTimeout : void 0,
      br = o.unstable_scheduleCallback,
      wr = o.unstable_cancelCallback;

    function Er(e) {
      for (e = e.nextSibling; e && 1 !== e.nodeType && 3 !== e.nodeType;)
        e = e.nextSibling;
      return e
    }

    function Cr(e) {
      for (e = e.firstChild; e && 1 !== e.nodeType && 3 !== e.nodeType;) e =
        e.nextSibling;
      return e
    }
    new Set;
    var Sr = [],
      Tr = -1;

    function xr(e) {
      0 > Tr || (e.current = Sr[Tr], Sr[Tr] = null, Tr--)
    }

    function kr(e, t) {
      Sr[++Tr] = e.current, e.current = t
    }
    var Pr = {},
      Or = {
        current: Pr
      },
      Nr = {
        current: !1
      },
      Ir = Pr;

    function Rr(e, t) {
      var n = e.type.contextTypes;
      if (!n) return Pr;
      var r = e.stateNode;
      if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return
        r.__reactInternalMemoizedMaskedChildContext;
      var i, o = {};
      for (i in n) o[i] = t[i];
      return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
        t, e.__reactInternalMemoizedMaskedChildContext = o), o
    }

    function Ar(e) {
      return null !== (e = e.childContextTypes) && void 0 !== e
    }

    function Dr(e) {
      xr(Nr), xr(Or)
    }

    function Fr(e) {
      xr(Nr), xr(Or)
    }

    function Lr(e, t, n) {
      Or.current !== Pr && a("168"), kr(Or, t), kr(Nr, n)
    }

    function Mr(e, t, n) {
      var r = e.stateNode;
      if (e = t.childContextTypes, "function" !== typeof r.getChildContext)
        return n;
      for (var o in r = r.getChildContext()) o in e || a("108", st(t) ||
        "Unknown", o);
      return i({}, n, r)
    }

    function jr(e) {
      var t = e.stateNode;
      return t = t && t.__reactInternalMemoizedMergedChildContext || Pr,
        Ir = Or.current, kr(Or, t), kr(Nr, Nr.current), !0
    }

    function Ur(e, t, n) {
      var r = e.stateNode;
      r || a("169"), n ? (t = Mr(e, t, Ir), r.__reactInternalMemoizedMergedChildContext =
        t, xr(Nr), xr(Or), kr(Or, t)) : xr(Nr), kr(Nr, n)
    }
    var Wr = null,
      Vr = null;

    function Br(e) {
      return function(t) {
        try {
          return e(t)
        } catch (n) {}
      }
    }

    function qr(e, t, n, r) {
      this.tag = e, this.key = n, this.sibling = this.child = this.return =
        this.stateNode = this.type = this.elementType = null, this.index =
        0, this.ref = null, this.pendingProps = t, this.contextDependencies =
        this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = r, this.effectTag = 0, this.lastEffect = this.firstEffect =
        this.nextEffect = null, this.childExpirationTime = this.expirationTime =
        0, this.alternate = null
    }

    function zr(e, t, n, r) {
      return new qr(e, t, n, r)
    }

    function Qr(e) {
      return !(!(e = e.prototype) || !e.isReactComponent)
    }

    function Hr(e, t) {
      var n = e.alternate;
      return null === n ? ((n = zr(e.tag, t, e.key, e.mode)).elementType =
          e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate =
          e, e.alternate = n) : (n.pendingProps = t, n.effectTag = 0, n.nextEffect =
          null, n.firstEffect = null, n.lastEffect = null), n.childExpirationTime =
        e.childExpirationTime, n.expirationTime = e.expirationTime, n.child =
        e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState,
        n.updateQueue = e.updateQueue, n.contextDependencies = e.contextDependencies,
        n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
    }

    function Kr(e, t, n, r, i, o) {
      var s = 2;
      if (r = e, "function" === typeof e) Qr(e) && (s = 1);
      else if ("string" === typeof e) s = 5;
      else e: switch (e) {
        case $e:
          return Gr(n.children, i, o, t);
        case et:
          return $r(n, 3 | i, o, t);
        case Ye:
          return $r(n, 2 | i, o, t);
        case Xe:
          return (e = zr(12, n, t, 4 | i)).elementType = Xe, e.type =
            Xe, e.expirationTime = o, e;
        case nt:
          return (e = zr(13, n, t, i)).elementType = nt, e.type = nt, e
            .expirationTime = o, e;
        default:
          if ("object" === typeof e && null !== e) switch (e.$$typeof) {
            case Je:
              s = 10;
              break e;
            case Ze:
              s = 9;
              break e;
            case tt:
              s = 11;
              break e;
            case rt:
              s = 14;
              break e;
            case it:
              s = 16, r = null;
              break e
          }
          a("130", null == e ? e : typeof e, "")
      }
      return (t = zr(s, n, t, i)).elementType = e, t.type = r, t.expirationTime =
        o, t
    }

    function Gr(e, t, n, r) {
      return (e = zr(7, e, r, t)).expirationTime = n, e
    }

    function $r(e, t, n, r) {
      return e = zr(8, e, r, t), t = 0 === (1 & t) ? Ye : et, e.elementType =
        t, e.type = t, e.expirationTime = n, e
    }

    function Yr(e, t, n) {
      return (e = zr(6, e, null, t)).expirationTime = n, e
    }

    function Xr(e, t, n) {
      return (t = zr(4, null !== e.children ? e.children : [], e.key, t))
        .expirationTime = n, t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation
        }, t
    }

    function Jr(e, t) {
      e.didError = !1;
      var n = e.earliestPendingTime;
      0 === n ? e.earliestPendingTime = e.latestPendingTime = t : n < t ?
        e.earliestPendingTime = t : e.latestPendingTime > t && (e.latestPendingTime =
          t), ti(t, e)
    }

    function Zr(e, t) {
      e.didError = !1, e.latestPingedTime >= t && (e.latestPingedTime = 0);
      var n = e.earliestPendingTime,
        r = e.latestPendingTime;
      n === t ? e.earliestPendingTime = r === t ? e.latestPendingTime = 0 :
        r : r === t && (e.latestPendingTime = n), n = e.earliestSuspendedTime,
        r = e.latestSuspendedTime, 0 === n ? e.earliestSuspendedTime = e.latestSuspendedTime =
        t : n < t ? e.earliestSuspendedTime = t : r > t && (e.latestSuspendedTime =
          t), ti(t, e)
    }

    function ei(e, t) {
      var n = e.earliestPendingTime;
      return n > t && (t = n), (e = e.earliestSuspendedTime) > t && (t =
        e), t
    }

    function ti(e, t) {
      var n = t.earliestSuspendedTime,
        r = t.latestSuspendedTime,
        i = t.earliestPendingTime,
        o = t.latestPingedTime;
      0 === (i = 0 !== i ? i : o) && (0 === e || r < e) && (i = r), 0 !==
        (e = i) && n > e && (e = n), t.nextExpirationTimeToWorkOn = i, t.expirationTime =
        e
    }

    function ni(e, t) {
      if (e && e.defaultProps)
        for (var n in t = i({}, t), e = e.defaultProps) void 0 === t[n] &&
          (t[n] = e[n]);
      return t
    }
    var ri = (new r.Component).refs;

    function ii(e, t, n, r) {
      n = null === (n = n(r, t = e.memoizedState)) || void 0 === n ? t :
        i({}, t, n), e.memoizedState = n, null !== (r = e.updateQueue) &&
        0 === e.expirationTime && (r.baseState = n)
    }
    var oi = {
      isMounted: function(e) {
        return !!(e = e._reactInternalFiber) && 2 === tn(e)
      },
      enqueueSetState: function(e, t, n) {
        e = e._reactInternalFiber;
        var r = _s(),
          i = $o(r = Qa(r, e));
        i.payload = t, void 0 !== n && null !== n && (i.callback = n),
          Wa(), Xo(e, i), Ga(e, r)
      },
      enqueueReplaceState: function(e, t, n) {
        e = e._reactInternalFiber;
        var r = _s(),
          i = $o(r = Qa(r, e));
        i.tag = qo, i.payload = t, void 0 !== n && null !== n && (i.callback =
          n), Wa(), Xo(e, i), Ga(e, r)
      },
      enqueueForceUpdate: function(e, t) {
        e = e._reactInternalFiber;
        var n = _s(),
          r = $o(n = Qa(n, e));
        r.tag = zo, void 0 !== t && null !== t && (r.callback = t),
          Wa(), Xo(e, r), Ga(e, n)
      }
    };

    function ai(e, t, n, r, i, o, a) {
      return "function" === typeof(e = e.stateNode).shouldComponentUpdate ?
        e.shouldComponentUpdate(r, o, a) : !t.prototype || !t.prototype.isPureReactComponent ||
        (!en(n, r) || !en(i, o))
    }

    function si(e, t, n) {
      var r = !1,
        i = Pr,
        o = t.contextType;
      return "object" === typeof o && null !== o ? o = Vo(o) : (i = Ar(t) ?
          Ir : Or.current, o = (r = null !== (r = t.contextTypes) && void 0 !==
            r) ? Rr(e, i) : Pr), t = new t(n, o), e.memoizedState = null !==
        t.state && void 0 !== t.state ? t.state : null, t.updater = oi, e
        .stateNode = t, t._reactInternalFiber = e, r && ((e = e.stateNode)
          .__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext =
          o), t
    }

    function ui(e, t, n, r) {
      e = t.state, "function" === typeof t.componentWillReceiveProps && t
        .componentWillReceiveProps(n, r), "function" === typeof t.UNSAFE_componentWillReceiveProps &&
        t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && oi.enqueueReplaceState(
          t, t.state, null)
    }

    function li(e, t, n, r) {
      var i = e.stateNode;
      i.props = n, i.state = e.memoizedState, i.refs = ri;
      var o = t.contextType;
      "object" === typeof o && null !== o ? i.context = Vo(o) : (o = Ar(t) ?
          Ir : Or.current, i.context = Rr(e, o)), null !== (o = e.updateQueue) &&
        (ta(e, o, n, i, r), i.state = e.memoizedState), "function" ===
        typeof(o = t.getDerivedStateFromProps) && (ii(e, t, o, n), i.state =
          e.memoizedState), "function" === typeof t.getDerivedStateFromProps ||
        "function" === typeof i.getSnapshotBeforeUpdate || "function" !==
        typeof i.UNSAFE_componentWillMount && "function" !== typeof i.componentWillMount ||
        (t = i.state, "function" === typeof i.componentWillMount && i.componentWillMount(),
          "function" === typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount(),
          t !== i.state && oi.enqueueReplaceState(i, i.state, null), null !==
          (o = e.updateQueue) && (ta(e, o, n, i, r), i.state = e.memoizedState)
        ), "function" === typeof i.componentDidMount && (e.effectTag |= 4)
    }
    var ci = Array.isArray;

    function fi(e, t, n) {
      if (null !== (e = n.ref) && "function" !== typeof e && "object" !==
        typeof e) {
        if (n._owner) {
          n = n._owner;
          var r = void 0;
          n && (1 !== n.tag && a("309"), r = n.stateNode), r || a("147",
            e);
          var i = "" + e;
          return null !== t && null !== t.ref && "function" === typeof t.ref &&
            t.ref._stringRef === i ? t.ref : ((t = function(e) {
              var t = r.refs;
              t === ri && (t = r.refs = {}), null === e ? delete t[i] :
                t[i] = e
            })._stringRef = i, t)
        }
        "string" !== typeof e && a("284"), n._owner || a("290", e)
      }
      return e
    }

    function pi(e, t) {
      "textarea" !== e.type && a("31", "[object Object]" === Object.prototype
        .toString.call(t) ? "object with keys {" + Object.keys(t).join(
          ", ") + "}" : t, "")
    }

    function hi(e) {
      function t(t, n) {
        if (e) {
          var r = t.lastEffect;
          null !== r ? (r.nextEffect = n, t.lastEffect = n) : t.firstEffect =
            t.lastEffect = n, n.nextEffect = null, n.effectTag = 8
        }
      }

      function n(n, r) {
        if (!e) return null;
        for (; null !== r;) t(n, r), r = r.sibling;
        return null
      }

      function r(e, t) {
        for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) :
          e.set(t.index, t), t = t.sibling;
        return e
      }

      function i(e, t, n) {
        return (e = Hr(e, t)).index = 0, e.sibling = null, e
      }

      function o(t, n, r) {
        return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) <
          n ? (t.effectTag = 2, n) : r : (t.effectTag = 2, n) : n
      }

      function s(t) {
        return e && null === t.alternate && (t.effectTag = 2), t
      }

      function u(e, t, n, r) {
        return null === t || 6 !== t.tag ? ((t = Yr(n, e.mode, r)).return =
          e, t) : ((t = i(t, n)).return = e, t)
      }

      function l(e, t, n, r) {
        return null !== t && t.elementType === n.type ? ((r = i(t, n.props))
          .ref = fi(e, t, n), r.return = e, r) : ((r = Kr(n.type, n.key,
            n.props, null, e.mode, r)).ref = fi(e, t, n), r.return = e,
          r)
      }

      function c(e, t, n, r) {
        return null === t || 4 !== t.tag || t.stateNode.containerInfo !==
          n.containerInfo || t.stateNode.implementation !== n.implementation ?
          ((t = Xr(n, e.mode, r)).return = e, t) : ((t = i(t, n.children || []))
            .return = e, t)
      }

      function f(e, t, n, r, o) {
        return null === t || 7 !== t.tag ? ((t = Gr(n, e.mode, r, o)).return =
          e, t) : ((t = i(t, n)).return = e, t)
      }

      function p(e, t, n) {
        if ("string" === typeof t || "number" === typeof t) return (t =
          Yr("" + t, e.mode, n)).return = e, t;
        if ("object" === typeof t && null !== t) {
          switch (t.$$typeof) {
            case Ke:
              return (n = Kr(t.type, t.key, t.props, null, e.mode, n)).ref =
                fi(e, null, t), n.return = e, n;
            case Ge:
              return (t = Xr(t, e.mode, n)).return = e, t
          }
          if (ci(t) || at(t)) return (t = Gr(t, e.mode, n, null)).return =
            e, t;
          pi(e, t)
        }
        return null
      }

      function h(e, t, n, r) {
        var i = null !== t ? t.key : null;
        if ("string" === typeof n || "number" === typeof n) return null !==
          i ? null : u(e, t, "" + n, r);
        if ("object" === typeof n && null !== n) {
          switch (n.$$typeof) {
            case Ke:
              return n.key === i ? n.type === $e ? f(e, t, n.props.children,
                r, i) : l(e, t, n, r) : null;
            case Ge:
              return n.key === i ? c(e, t, n, r) : null
          }
          if (ci(n) || at(n)) return null !== i ? null : f(e, t, n, r,
            null);
          pi(e, n)
        }
        return null
      }

      function d(e, t, n, r, i) {
        if ("string" === typeof r || "number" === typeof r) return u(t, e =
          e.get(n) || null, "" + r, i);
        if ("object" === typeof r && null !== r) {
          switch (r.$$typeof) {
            case Ke:
              return e = e.get(null === r.key ? n : r.key) || null, r.type ===
                $e ? f(t, e, r.props.children, i, r.key) : l(t, e, r, i);
            case Ge:
              return c(t, e = e.get(null === r.key ? n : r.key) || null,
                r, i)
          }
          if (ci(r) || at(r)) return f(t, e = e.get(n) || null, r, i,
            null);
          pi(t, r)
        }
        return null
      }

      function y(i, a, s, u) {
        for (var l = null, c = null, f = a, y = a = 0, v = null; null !==
          f && y < s.length; y++) {
          f.index > y ? (v = f, f = null) : v = f.sibling;
          var m = h(i, f, s[y], u);
          if (null === m) {
            null === f && (f = v);
            break
          }
          e && f && null === m.alternate && t(i, f), a = o(m, a, y), null ===
            c ? l = m : c.sibling = m, c = m, f = v
        }
        if (y === s.length) return n(i, f), l;
        if (null === f) {
          for (; y < s.length; y++)(f = p(i, s[y], u)) && (a = o(f, a, y),
            null === c ? l = f : c.sibling = f, c = f);
          return l
        }
        for (f = r(i, f); y < s.length; y++)(v = d(f, i, y, s[y], u)) &&
          (e && null !== v.alternate && f.delete(null === v.key ? y : v.key),
            a = o(v, a, y), null === c ? l = v : c.sibling = v, c = v);
        return e && f.forEach(function(e) {
          return t(i, e)
        }), l
      }

      function v(i, s, u, l) {
        var c = at(u);
        "function" !== typeof c && a("150"), null == (u = c.call(u)) && a(
          "151");
        for (var f = c = null, y = s, v = s = 0, m = null, g = u.next(); null !==
          y && !g.done; v++, g = u.next()) {
          y.index > v ? (m = y, y = null) : m = y.sibling;
          var _ = h(i, y, g.value, l);
          if (null === _) {
            y || (y = m);
            break
          }
          e && y && null === _.alternate && t(i, y), s = o(_, s, v), null ===
            f ? c = _ : f.sibling = _, f = _, y = m
        }
        if (g.done) return n(i, y), c;
        if (null === y) {
          for (; !g.done; v++, g = u.next()) null !== (g = p(i, g.value,
            l)) && (s = o(g, s, v), null === f ? c = g : f.sibling = g,
            f = g);
          return c
        }
        for (y = r(i, y); !g.done; v++, g = u.next()) null !== (g = d(y,
          i, v, g.value, l)) && (e && null !== g.alternate && y.delete(
            null === g.key ? v : g.key), s = o(g, s, v), null === f ? c =
          g : f.sibling = g, f = g);
        return e && y.forEach(function(e) {
          return t(i, e)
        }), c
      }
      return function(e, r, o, u) {
        var l = "object" === typeof o && null !== o && o.type === $e &&
          null === o.key;
        l && (o = o.props.children);
        var c = "object" === typeof o && null !== o;
        if (c) switch (o.$$typeof) {
          case Ke:
            e: {
              for (c = o.key, l = r; null !== l;) {
                if (l.key === c) {
                  if (7 === l.tag ? o.type === $e : l.elementType ===
                    o.type) {
                    n(e, l.sibling), (r = i(l, o.type === $e ? o.props
                        .children : o.props)).ref = fi(e, l, o), r.return =
                      e, e = r;
                    break e
                  }
                  n(e, l);
                  break
                }
                t(e, l), l = l.sibling
              }
              o.type === $e ? ((r = Gr(o.props.children, e.mode, u,
                o.key)).return = e, e = r) : ((u = Kr(o.type, o.key,
                  o.props, null, e.mode, u)).ref = fi(e, r, o), u
                .return = e, e = u)
            }
            return s(e);
          case Ge:
            e: {
              for (l = o.key; null !== r;) {
                if (r.key === l) {
                  if (4 === r.tag && r.stateNode.containerInfo ===
                    o.containerInfo && r.stateNode.implementation ===
                    o.implementation) {
                    n(e, r.sibling), (r = i(r, o.children || [])).return =
                      e, e = r;
                    break e
                  }
                  n(e, r);
                  break
                }
                t(e, r), r = r.sibling
              }(r = Xr(o, e.mode, u)).return = e,
                e = r
            }
            return s(e)
        }
        if ("string" === typeof o || "number" === typeof o) return o =
          "" + o, null !== r && 6 === r.tag ? (n(e, r.sibling), (r =
            i(r, o)).return = e, e = r) : (n(e, r), (r = Yr(o, e.mode,
            u)).return = e, e = r), s(e);
        if (ci(o)) return y(e, r, o, u);
        if (at(o)) return v(e, r, o, u);
        if (c && pi(e, o), "undefined" === typeof o && !l) switch (e.tag) {
          case 1:
          case 0:
            a("152", (u = e.type).displayName || u.name ||
              "Component")
        }
        return n(e, r)
      }
    }
    var di = hi(!0),
      yi = hi(!1),
      vi = {},
      mi = {
        current: vi
      },
      gi = {
        current: vi
      },
      _i = {
        current: vi
      };

    function bi(e) {
      return e === vi && a("174"), e
    }

    function wi(e, t) {
      kr(_i, t), kr(gi, e), kr(mi, vi);
      var n = t.nodeType;
      switch (n) {
        case 9:
        case 11:
          t = (t = t.documentElement) ? t.namespaceURI : er(null, "");
          break;
        default:
          t = er(t = (n = 8 === n ? t.parentNode : t).namespaceURI ||
            null, n = n.tagName)
      }
      xr(mi), kr(mi, t)
    }

    function Ei(e) {
      xr(mi), xr(gi), xr(_i)
    }

    function Ci(e) {
      bi(_i.current);
      var t = bi(mi.current),
        n = er(t, e.type);
      t !== n && (kr(gi, e), kr(mi, n))
    }

    function Si(e) {
      gi.current === e && (xr(mi), xr(gi))
    }
    var Ti = 0,
      xi = 2,
      ki = 4,
      Pi = 8,
      Oi = 16,
      Ni = 32,
      Ii = 64,
      Ri = 128,
      Ai = ze.ReactCurrentDispatcher,
      Di = 0,
      Fi = null,
      Li = null,
      Mi = null,
      ji = null,
      Ui = null,
      Wi = null,
      Vi = 0,
      Bi = null,
      qi = 0,
      zi = !1,
      Qi = null,
      Hi = 0;

    function Ki() {
      a("307")
    }

    function Gi(e, t) {
      if (null === t) return !1;
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!Jt(e[n], t[n])) return !1;
      return !0
    }

    function $i(e, t, n, r, i, o) {
      if (Di = o, Fi = t, Mi = null !== e ? e.memoizedState : null, Ai.current =
        null === Mi ? uo : lo, t = n(r, i), zi) {
        do {
          zi = !1, Hi += 1, Mi = null !== e ? e.memoizedState : null, Wi =
            ji, Bi = Ui = Li = null, Ai.current = lo, t = n(r, i)
        } while (zi);
        Qi = null, Hi = 0
      }
      return Ai.current = so, (e = Fi).memoizedState = ji, e.expirationTime =
        Vi, e.updateQueue = Bi, e.effectTag |= qi, e = null !== Li &&
        null !== Li.next, Di = 0, Wi = Ui = ji = Mi = Li = Fi = null, Vi =
        0, Bi = null, qi = 0, e && a("300"), t
    }

    function Yi() {
      Ai.current = so, Di = 0, Wi = Ui = ji = Mi = Li = Fi = null, Vi = 0,
        Bi = null, qi = 0, zi = !1, Qi = null, Hi = 0
    }

    function Xi() {
      var e = {
        memoizedState: null,
        baseState: null,
        queue: null,
        baseUpdate: null,
        next: null
      };
      return null === Ui ? ji = Ui = e : Ui = Ui.next = e, Ui
    }

    function Ji() {
      if (null !== Wi) Wi = (Ui = Wi).next, Mi = null !== (Li = Mi) ? Li.next :
        null;
      else {
        null === Mi && a("310");
        var e = {
          memoizedState: (Li = Mi).memoizedState,
          baseState: Li.baseState,
          queue: Li.queue,
          baseUpdate: Li.baseUpdate,
          next: null
        };
        Ui = null === Ui ? ji = e : Ui.next = e, Mi = Li.next
      }
      return Ui
    }

    function Zi(e, t) {
      return "function" === typeof t ? t(e) : t
    }

    function eo(e) {
      var t = Ji(),
        n = t.queue;
      if (null === n && a("311"), 0 < Hi) {
        var r = n.dispatch;
        if (null !== Qi) {
          var i = Qi.get(n);
          if (void 0 !== i) {
            Qi.delete(n);
            var o = t.memoizedState;
            do {
              o = e(o, i.action), i = i.next
            } while (null !== i);
            return Jt(o, t.memoizedState) || (wo = !0), t.memoizedState =
              o, t.baseUpdate === n.last && (t.baseState = o), [o, r]
          }
        }
        return [t.memoizedState, r]
      }
      r = n.last;
      var s = t.baseUpdate;
      if (o = t.baseState, null !== s ? (null !== r && (r.next = null), r =
          s.next) : r = null !== r ? r.next : null, null !== r) {
        var u = i = null,
          l = r,
          c = !1;
        do {
          var f = l.expirationTime;
          f < Di ? (c || (c = !0, u = s, i = o), f > Vi && (Vi = f)) : o =
            l.eagerReducer === e ? l.eagerState : e(o, l.action), s = l,
            l = l.next
        } while (null !== l && l !== r);
        c || (u = s, i = o), Jt(o, t.memoizedState) || (wo = !0), t.memoizedState =
          o, t.baseUpdate = u, t.baseState = i, n.eagerReducer = e, n.eagerState =
          o
      }
      return [t.memoizedState, n.dispatch]
    }

    function to(e, t, n, r) {
      return e = {
          tag: e,
          create: t,
          destroy: n,
          deps: r,
          next: null
        }, null === Bi ? (Bi = {
          lastEffect: null
        }).lastEffect = e.next = e : null === (t = Bi.lastEffect) ? Bi.lastEffect =
        e.next = e : (n = t.next, t.next = e, e.next = n, Bi.lastEffect =
          e), e
    }

    function no(e, t, n, r) {
      var i = Xi();
      qi |= e, i.memoizedState = to(t, n, void 0, void 0 === r ? null : r)
    }

    function ro(e, t, n, r) {
      var i = Ji();
      r = void 0 === r ? null : r;
      var o = void 0;
      if (null !== Li) {
        var a = Li.memoizedState;
        if (o = a.destroy, null !== r && Gi(r, a.deps)) return void to(Ti,
          n, o, r)
      }
      qi |= e, i.memoizedState = to(t, n, o, r)
    }

    function io(e, t) {
      return "function" === typeof t ? (e = e(), t(e), function() {
        t(null)
      }) : null !== t && void 0 !== t ? (e = e(), t.current = e,
        function() {
          t.current = null
        }) : void 0
    }

    function oo() {}

    function ao(e, t, n) {
      25 > Hi || a("301");
      var r = e.alternate;
      if (e === Fi || null !== r && r === Fi)
        if (zi = !0, e = {
            expirationTime: Di,
            action: n,
            eagerReducer: null,
            eagerState: null,
            next: null
          }, null === Qi && (Qi = new Map), void 0 === (n = Qi.get(t))) Qi
          .set(t, e);
        else {
          for (t = n; null !== t.next;) t = t.next;
          t.next = e
        } else {
        Wa();
        var i = _s(),
          o = {
            expirationTime: i = Qa(i, e),
            action: n,
            eagerReducer: null,
            eagerState: null,
            next: null
          },
          s = t.last;
        if (null === s) o.next = o;
        else {
          var u = s.next;
          null !== u && (o.next = u), s.next = o
        }
        if (t.last = o, 0 === e.expirationTime && (null === r || 0 === r.expirationTime) &&
          null !== (r = t.eagerReducer)) try {
          var l = t.eagerState,
            c = r(l, n);
          if (o.eagerReducer = r, o.eagerState = c, Jt(c, l)) return
        } catch (f) {}
        Ga(e, i)
      }
    }
    var so = {
        readContext: Vo,
        useCallback: Ki,
        useContext: Ki,
        useEffect: Ki,
        useImperativeHandle: Ki,
        useLayoutEffect: Ki,
        useMemo: Ki,
        useReducer: Ki,
        useRef: Ki,
        useState: Ki,
        useDebugValue: Ki
      },
      uo = {
        readContext: Vo,
        useCallback: function(e, t) {
          return Xi().memoizedState = [e, void 0 === t ? null : t], e
        },
        useContext: Vo,
        useEffect: function(e, t) {
          return no(516, Ri | Ii, e, t)
        },
        useImperativeHandle: function(e, t, n) {
          return n = null !== n && void 0 !== n ? n.concat([e]) : [e],
            no(4, ki | Ni, io.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
          return no(4, ki | Ni, e, t)
        },
        useMemo: function(e, t) {
          var n = Xi();
          return t = void 0 === t ? null : t, e = e(), n.memoizedState = [
            e, t
          ], e
        },
        useReducer: function(e, t, n) {
          var r = Xi();
          return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState =
            t, e = (e = r.queue = {
              last: null,
              dispatch: null,
              eagerReducer: e,
              eagerState: t
            }).dispatch = ao.bind(null, Fi, e), [r.memoizedState, e]
        },
        useRef: function(e) {
          return e = {
            current: e
          }, Xi().memoizedState = e
        },
        useState: function(e) {
          var t = Xi();
          return "function" === typeof e && (e = e()), t.memoizedState =
            t.baseState = e, e = (e = t.queue = {
              last: null,
              dispatch: null,
              eagerReducer: Zi,
              eagerState: e
            }).dispatch = ao.bind(null, Fi, e), [t.memoizedState, e]
        },
        useDebugValue: oo
      },
      lo = {
        readContext: Vo,
        useCallback: function(e, t) {
          var n = Ji();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && Gi(t, r[1]) ? r[0] : (n.memoizedState = [
            e, t
          ], e)
        },
        useContext: Vo,
        useEffect: function(e, t) {
          return ro(516, Ri | Ii, e, t)
        },
        useImperativeHandle: function(e, t, n) {
          return n = null !== n && void 0 !== n ? n.concat([e]) : [e],
            ro(4, ki | Ni, io.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
          return ro(4, ki | Ni, e, t)
        },
        useMemo: function(e, t) {
          var n = Ji();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && Gi(t, r[1]) ? r[0] : (e =
            e(), n.memoizedState = [e, t], e)
        },
        useReducer: eo,
        useRef: function() {
          return Ji().memoizedState
        },
        useState: function(e) {
          return eo(Zi)
        },
        useDebugValue: oo
      },
      co = null,
      fo = null,
      po = !1;

    function ho(e, t) {
      var n = zr(5, null, null, 0);
      n.elementType = "DELETED", n.type = "DELETED", n.stateNode = t, n.return =
        e, n.effectTag = 8, null !== e.lastEffect ? (e.lastEffect.nextEffect =
          n, e.lastEffect = n) : e.firstEffect = e.lastEffect = n
    }

    function yo(e, t) {
      switch (e.tag) {
        case 5:
          var n = e.type;
          return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName
            .toLowerCase() ? null : t) && (e.stateNode = t, !0);
        case 6:
          return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ?
            null : t) && (e.stateNode = t, !0);
        default:
          return !1
      }
    }

    function vo(e) {
      if (po) {
        var t = fo;
        if (t) {
          var n = t;
          if (!yo(e, t)) {
            if (!(t = Er(n)) || !yo(e, t)) return e.effectTag |= 2, po = !
              1, void(co = e);
            ho(co, n)
          }
          co = e, fo = Cr(t)
        } else e.effectTag |= 2, po = !1, co = e
      }
    }

    function mo(e) {
      for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag;) e = e
        .return;
      co = e
    }

    function go(e) {
      if (e !== co) return !1;
      if (!po) return mo(e), po = !0, !1;
      var t = e.type;
      if (5 !== e.tag || "head" !== t && "body" !== t && !mr(t, e.memoizedProps))
        for (t = fo; t;) ho(e, t), t = Er(t);
      return mo(e), fo = co ? Er(e.stateNode) : null, !0
    }

    function _o() {
      fo = co = null, po = !1
    }
    var bo = ze.ReactCurrentOwner,
      wo = !1;

    function Eo(e, t, n, r) {
      t.child = null === e ? yi(t, null, n, r) : di(t, e.child, n, r)
    }

    function Co(e, t, n, r, i) {
      n = n.render;
      var o = t.ref;
      return Wo(t, i), r = $i(e, t, n, r, o, i), null === e || wo ? (t.effectTag |=
        1, Eo(e, t, r, i), t.child) : (t.updateQueue = e.updateQueue, t
        .effectTag &= -517, e.expirationTime <= i && (e.expirationTime =
          0), Ro(e, t, i))
    }

    function So(e, t, n, r, i, o) {
      if (null === e) {
        var a = n.type;
        return "function" !== typeof a || Qr(a) || void 0 !== a.defaultProps ||
          null !== n.compare || void 0 !== n.defaultProps ? ((e = Kr(n.type,
              null, r, null, t.mode, o)).ref = t.ref, e.return = t, t.child =
            e) : (t.tag = 15, t.type = a, To(e, t, a, r, i, o))
      }
      return a = e.child, i < o && (i = a.memoizedProps, (n = null !== (n =
          n.compare) ? n : en)(i, r) && e.ref === t.ref) ? Ro(e, t, o) :
        (t.effectTag |= 1, (e = Hr(a, r)).ref = t.ref, e.return = t, t.child =
          e)
    }

    function To(e, t, n, r, i, o) {
      return null !== e && en(e.memoizedProps, r) && e.ref === t.ref && (
        wo = !1, i < o) ? Ro(e, t, o) : ko(e, t, n, r, o)
    }

    function xo(e, t) {
      var n = t.ref;
      (null === e && null !== n || null !== e && e.ref !== n) && (t.effectTag |=
        128)
    }

    function ko(e, t, n, r, i) {
      var o = Ar(n) ? Ir : Or.current;
      return o = Rr(t, o), Wo(t, i), n = $i(e, t, n, r, o, i), null === e ||
        wo ? (t.effectTag |= 1, Eo(e, t, n, i), t.child) : (t.updateQueue =
          e.updateQueue, t.effectTag &= -517, e.expirationTime <= i && (e
            .expirationTime = 0), Ro(e, t, i))
    }

    function Po(e, t, n, r, i) {
      if (Ar(n)) {
        var o = !0;
        jr(t)
      } else o = !1;
      if (Wo(t, i), null === t.stateNode) null !== e && (e.alternate =
        null, t.alternate = null, t.effectTag |= 2), si(t, n, r), li(t,
        n, r, i), r = !0;
      else if (null === e) {
        var a = t.stateNode,
          s = t.memoizedProps;
        a.props = s;
        var u = a.context,
          l = n.contextType;
        "object" === typeof l && null !== l ? l = Vo(l) : l = Rr(t, l =
          Ar(n) ? Ir : Or.current);
        var c = n.getDerivedStateFromProps,
          f = "function" === typeof c || "function" === typeof a.getSnapshotBeforeUpdate;
        f || "function" !== typeof a.UNSAFE_componentWillReceiveProps &&
          "function" !== typeof a.componentWillReceiveProps || (s !== r ||
            u !== l) && ui(t, a, r, l), Ho = !1;
        var p = t.memoizedState;
        u = a.state = p;
        var h = t.updateQueue;
        null !== h && (ta(t, h, r, a, i), u = t.memoizedState), s !== r ||
          p !== u || Nr.current || Ho ? ("function" === typeof c && (ii(t,
              n, c, r), u = t.memoizedState), (s = Ho || ai(t, n, s, r, p,
              u, l)) ? (f || "function" !== typeof a.UNSAFE_componentWillMount &&
              "function" !== typeof a.componentWillMount || ("function" ===
                typeof a.componentWillMount && a.componentWillMount(),
                "function" === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount()
              ), "function" === typeof a.componentDidMount && (t.effectTag |=
                4)) : ("function" === typeof a.componentDidMount && (t.effectTag |=
              4), t.memoizedProps = r, t.memoizedState = u), a.props = r,
            a.state = u, a.context = l, r = s) : ("function" === typeof a
            .componentDidMount && (t.effectTag |= 4), r = !1)
      } else a = t.stateNode, s = t.memoizedProps, a.props = t.type === t
        .elementType ? s : ni(t.type, s), u = a.context, "object" ===
        typeof(l = n.contextType) && null !== l ? l = Vo(l) : l = Rr(t, l =
          Ar(n) ? Ir : Or.current), (f = "function" === typeof(c = n.getDerivedStateFromProps) ||
          "function" === typeof a.getSnapshotBeforeUpdate) || "function" !==
        typeof a.UNSAFE_componentWillReceiveProps && "function" !==
        typeof a.componentWillReceiveProps || (s !== r || u !== l) && ui(
          t, a, r, l), Ho = !1, u = t.memoizedState, p = a.state = u,
        null !== (h = t.updateQueue) && (ta(t, h, r, a, i), p = t.memoizedState),
        s !== r || u !== p || Nr.current || Ho ? ("function" === typeof c &&
          (ii(t, n, c, r), p = t.memoizedState), (c = Ho || ai(t, n, s, r,
            u, p, l)) ? (f || "function" !== typeof a.UNSAFE_componentWillUpdate &&
            "function" !== typeof a.componentWillUpdate || ("function" ===
              typeof a.componentWillUpdate && a.componentWillUpdate(r, p,
                l), "function" === typeof a.UNSAFE_componentWillUpdate &&
              a.UNSAFE_componentWillUpdate(r, p, l)), "function" ===
            typeof a.componentDidUpdate && (t.effectTag |= 4), "function" ===
            typeof a.getSnapshotBeforeUpdate && (t.effectTag |= 256)) : (
            "function" !== typeof a.componentDidUpdate || s === e.memoizedProps &&
            u === e.memoizedState || (t.effectTag |= 4), "function" !==
            typeof a.getSnapshotBeforeUpdate || s === e.memoizedProps &&
            u === e.memoizedState || (t.effectTag |= 256), t.memoizedProps =
            r, t.memoizedState = p), a.props = r, a.state = p, a.context =
          l, r = c) : ("function" !== typeof a.componentDidUpdate || s ===
          e.memoizedProps && u === e.memoizedState || (t.effectTag |= 4),
          "function" !== typeof a.getSnapshotBeforeUpdate || s === e.memoizedProps &&
          u === e.memoizedState || (t.effectTag |= 256), r = !1);
      return Oo(e, t, n, r, o, i)
    }

    function Oo(e, t, n, r, i, o) {
      xo(e, t);
      var a = 0 !== (64 & t.effectTag);
      if (!r && !a) return i && Ur(t, n, !1), Ro(e, t, o);
      r = t.stateNode, bo.current = t;
      var s = a && "function" !== typeof n.getDerivedStateFromError ?
        null : r.render();
      return t.effectTag |= 1, null !== e && a ? (t.child = di(t, e.child,
          null, o), t.child = di(t, null, s, o)) : Eo(e, t, s, o), t.memoizedState =
        r.state, i && Ur(t, n, !0), t.child
    }

    function No(e) {
      var t = e.stateNode;
      t.pendingContext ? Lr(0, t.pendingContext, t.pendingContext !== t.context) :
        t.context && Lr(0, t.context, !1), wi(e, t.containerInfo)
    }

    function Io(e, t, n) {
      var r = t.mode,
        i = t.pendingProps,
        o = t.memoizedState;
      if (0 === (64 & t.effectTag)) {
        o = null;
        var a = !1
      } else o = {
        timedOutAt: null !== o ? o.timedOutAt : 0
      }, a = !0, t.effectTag &= -65;
      if (null === e)
        if (a) {
          var s = i.fallback;
          e = Gr(null, r, 0, null), 0 === (1 & t.mode) && (e.child = null !==
            t.memoizedState ? t.child.child : t.child), r = Gr(s, r, n,
            null), e.sibling = r, (n = e).return = r.return = t
        } else n = r = yi(t, null, i.children, n);
      else null !== e.memoizedState ? (s = (r = e.child).sibling, a ? (n =
          i.fallback, i = Hr(r, r.pendingProps), 0 === (1 & t.mode) &&
          ((a = null !== t.memoizedState ? t.child.child : t.child) !==
            r.child && (i.child = a)), r = i.sibling = Hr(s, n, s.expirationTime),
          n = i, i.childExpirationTime = 0, n.return = r.return = t) :
        n = r = di(t, r.child, i.children, n)) : (s = e.child, a ? (a =
          i.fallback, (i = Gr(null, r, 0, null)).child = s, 0 === (1 &
            t.mode) && (i.child = null !== t.memoizedState ? t.child.child :
            t.child), (r = i.sibling = Gr(a, r, n, null)).effectTag |=
          2, n = i, i.childExpirationTime = 0, n.return = r.return = t) :
        r = n = di(t, s, i.children, n)), t.stateNode = e.stateNode;
      return t.memoizedState = o, t.child = n, r
    }

    function Ro(e, t, n) {
      if (null !== e && (t.contextDependencies = e.contextDependencies),
        t.childExpirationTime < n) return null;
      if (null !== e && t.child !== e.child && a("153"), null !== t.child) {
        for (n = Hr(e = t.child, e.pendingProps, e.expirationTime), t.child =
          n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling =
          Hr(e, e.pendingProps, e.expirationTime)).return = t;
        n.sibling = null
      }
      return t.child
    }

    function Ao(e, t, n) {
      var r = t.expirationTime;
      if (null !== e) {
        if (e.memoizedProps !== t.pendingProps || Nr.current) wo = !0;
        else if (r < n) {
          switch (wo = !1, t.tag) {
            case 3:
              No(t), _o();
              break;
            case 5:
              Ci(t);
              break;
            case 1:
              Ar(t.type) && jr(t);
              break;
            case 4:
              wi(t, t.stateNode.containerInfo);
              break;
            case 10:
              jo(t, t.memoizedProps.value);
              break;
            case 13:
              if (null !== t.memoizedState) return 0 !== (r = t.child.childExpirationTime) &&
                r >= n ? Io(e, t, n) : null !== (t = Ro(e, t, n)) ? t.sibling :
                null
          }
          return Ro(e, t, n)
        }
      } else wo = !1;
      switch (t.expirationTime = 0, t.tag) {
        case 2:
          r = t.elementType, null !== e && (e.alternate = null, t.alternate =
            null, t.effectTag |= 2), e = t.pendingProps;
          var i = Rr(t, Or.current);
          if (Wo(t, n), i = $i(null, t, r, e, i, n), t.effectTag |= 1,
            "object" === typeof i && null !== i && "function" === typeof i
            .render && void 0 === i.$$typeof) {
            if (t.tag = 1, Yi(), Ar(r)) {
              var o = !0;
              jr(t)
            } else o = !1;
            t.memoizedState = null !== i.state && void 0 !== i.state ? i.state :
              null;
            var s = r.getDerivedStateFromProps;
            "function" === typeof s && ii(t, r, s, e), i.updater = oi, t.stateNode =
              i, i._reactInternalFiber = t, li(t, r, e, n), t = Oo(null,
                t, r, !0, o, n)
          } else t.tag = 0, Eo(null, t, i, n), t = t.child;
          return t;
        case 16:
          switch (i = t.elementType, null !== e && (e.alternate = null, t
              .alternate = null, t.effectTag |= 2), o = t.pendingProps, e =
            function(e) {
              var t = e._result;
              switch (e._status) {
                case 1:
                  return t;
                case 2:
                case 0:
                  throw t;
                default:
                  switch (e._status = 0, (t = (t = e._ctor)()).then(
                    function(t) {
                      0 === e._status && (t = t.default, e._status = 1,
                        e._result = t)
                    },
                    function(t) {
                      0 === e._status && (e._status = 2, e._result = t)
                    }), e._status) {
                    case 1:
                      return e._result;
                    case 2:
                      throw e._result
                  }
                  throw e._result = t, t
              }
            }(i), t.type = e, i = t.tag = function(e) {
              if ("function" === typeof e) return Qr(e) ? 1 : 0;
              if (void 0 !== e && null !== e) {
                if ((e = e.$$typeof) === tt) return 11;
                if (e === rt) return 14
              }
              return 2
            }(e), o = ni(e, o), s = void 0, i) {
            case 0:
              s = ko(null, t, e, o, n);
              break;
            case 1:
              s = Po(null, t, e, o, n);
              break;
            case 11:
              s = Co(null, t, e, o, n);
              break;
            case 14:
              s = So(null, t, e, ni(e.type, o), r, n);
              break;
            default:
              a("306", e, "")
          }
          return s;
        case 0:
          return r = t.type, i = t.pendingProps, ko(e, t, r, i = t.elementType ===
            r ? i : ni(r, i), n);
        case 1:
          return r = t.type, i = t.pendingProps, Po(e, t, r, i = t.elementType ===
            r ? i : ni(r, i), n);
        case 3:
          return No(t), null === (r = t.updateQueue) && a("282"), i =
            null !== (i = t.memoizedState) ? i.element : null, ta(t, r, t
              .pendingProps, null, n), (r = t.memoizedState.element) ===
            i ? (_o(), t = Ro(e, t, n)) : (i = t.stateNode, (i = (null ===
                e || null === e.child) && i.hydrate) && (fo = Cr(t.stateNode
                .containerInfo), co = t, i = po = !0), i ? (t.effectTag |=
                2, t.child = yi(t, null, r, n)) : (Eo(e, t, r, n), _o()),
              t = t.child), t;
        case 5:
          return Ci(t), null === e && vo(t), r = t.type, i = t.pendingProps,
            o = null !== e ? e.memoizedProps : null, s = i.children, mr(r,
              i) ? s = null : null !== o && mr(r, o) && (t.effectTag |=
              16), xo(e, t), 1 !== n && 1 & t.mode && i.hidden ? (t.expirationTime =
              t.childExpirationTime = 1, t = null) : (Eo(e, t, s, n), t =
              t.child), t;
        case 6:
          return null === e && vo(t), null;
        case 13:
          return Io(e, t, n);
        case 4:
          return wi(t, t.stateNode.containerInfo), r = t.pendingProps,
            null === e ? t.child = di(t, null, r, n) : Eo(e, t, r, n), t.child;
        case 11:
          return r = t.type, i = t.pendingProps, Co(e, t, r, i = t.elementType ===
            r ? i : ni(r, i), n);
        case 7:
          return Eo(e, t, t.pendingProps, n), t.child;
        case 8:
        case 12:
          return Eo(e, t, t.pendingProps.children, n), t.child;
        case 10:
          e: {
            if (r = t.type._context, i = t.pendingProps, s = t.memoizedProps,
              jo(t, o = i.value), null !== s) {
              var u = s.value;
              if (0 === (o = Jt(u, o) ? 0 : 0 | ("function" === typeof r
                  ._calculateChangedBits ? r._calculateChangedBits(u,
                    o) : 1073741823))) {
                if (s.children === i.children && !Nr.current) {
                  t = Ro(e, t, n);
                  break e
                }
              } else
                for (null !== (u = t.child) && (u.return = t); null !==
                  u;) {
                  var l = u.contextDependencies;
                  if (null !== l) {
                    s = u.child;
                    for (var c = l.first; null !== c;) {
                      if (c.context === r && 0 !== (c.observedBits & o)) {
                        1 === u.tag && ((c = $o(n)).tag = zo, Xo(u, c)),
                          u.expirationTime < n && (u.expirationTime = n),
                          null !== (c = u.alternate) && c.expirationTime <
                          n && (c.expirationTime = n);
                        for (var f = u.return; null !== f;) {
                          if (c = f.alternate, f.childExpirationTime <
                            n) f.childExpirationTime = n, null !== c &&
                            c.childExpirationTime < n && (c.childExpirationTime =
                              n);
                          else {
                            if (!(null !== c && c.childExpirationTime <
                                n)) break;
                            c.childExpirationTime = n
                          }
                          f = f.return
                        }
                        l.expirationTime < n && (l.expirationTime = n);
                        break
                      }
                      c = c.next
                    }
                  } else s = 10 === u.tag && u.type === t.type ? null :
                    u.child;
                  if (null !== s) s.return = u;
                  else
                    for (s = u; null !== s;) {
                      if (s === t) {
                        s = null;
                        break
                      }
                      if (null !== (u = s.sibling)) {
                        u.return = s.return, s = u;
                        break
                      }
                      s = s.return
                    }
                  u = s
                }
            }
            Eo(e, t, i.children, n),
              t = t.child
          }
          return t;
        case 9:
          return i = t.type, r = (o = t.pendingProps).children, Wo(t, n),
            r = r(i = Vo(i, o.unstable_observedBits)), t.effectTag |= 1,
            Eo(e, t, r, n), t.child;
        case 14:
          return o = ni(i = t.type, t.pendingProps), So(e, t, i, o = ni(i
            .type, o), r, n);
        case 15:
          return To(e, t, t.type, t.pendingProps, r, n);
        case 17:
          return r = t.type, i = t.pendingProps, i = t.elementType === r ?
            i : ni(r, i), null !== e && (e.alternate = null, t.alternate =
              null, t.effectTag |= 2), t.tag = 1, Ar(r) ? (e = !0, jr(t)) :
            e = !1, Wo(t, n), si(t, r, i), li(t, r, i, n), Oo(null, t, r, !
              0, e, n);
        default:
          a("156")
      }
    }
    var Do = {
        current: null
      },
      Fo = null,
      Lo = null,
      Mo = null;

    function jo(e, t) {
      var n = e.type._context;
      kr(Do, n._currentValue), n._currentValue = t
    }

    function Uo(e) {
      var t = Do.current;
      xr(Do), e.type._context._currentValue = t
    }

    function Wo(e, t) {
      Fo = e, Mo = Lo = null;
      var n = e.contextDependencies;
      null !== n && n.expirationTime >= t && (wo = !0), e.contextDependencies =
        null
    }

    function Vo(e, t) {
      return Mo !== e && !1 !== t && 0 !== t && ("number" === typeof t &&
        1073741823 !== t || (Mo = e, t = 1073741823), t = {
          context: e,
          observedBits: t,
          next: null
        }, null === Lo ? (null === Fo && a("308"), Lo = t, Fo.contextDependencies = {
          first: t,
          expirationTime: 0
        }) : Lo = Lo.next = t), e._currentValue
    }
    var Bo = 0,
      qo = 1,
      zo = 2,
      Qo = 3,
      Ho = !1;

    function Ko(e) {
      return {
        baseState: e,
        firstUpdate: null,
        lastUpdate: null,
        firstCapturedUpdate: null,
        lastCapturedUpdate: null,
        firstEffect: null,
        lastEffect: null,
        firstCapturedEffect: null,
        lastCapturedEffect: null
      }
    }

    function Go(e) {
      return {
        baseState: e.baseState,
        firstUpdate: e.firstUpdate,
        lastUpdate: e.lastUpdate,
        firstCapturedUpdate: null,
        lastCapturedUpdate: null,
        firstEffect: null,
        lastEffect: null,
        firstCapturedEffect: null,
        lastCapturedEffect: null
      }
    }

    function $o(e) {
      return {
        expirationTime: e,
        tag: Bo,
        payload: null,
        callback: null,
        next: null,
        nextEffect: null
      }
    }

    function Yo(e, t) {
      null === e.lastUpdate ? e.firstUpdate = e.lastUpdate = t : (e.lastUpdate
        .next = t, e.lastUpdate = t)
    }

    function Xo(e, t) {
      var n = e.alternate;
      if (null === n) {
        var r = e.updateQueue,
          i = null;
        null === r && (r = e.updateQueue = Ko(e.memoizedState))
      } else r = e.updateQueue, i = n.updateQueue, null === r ? null ===
        i ? (r = e.updateQueue = Ko(e.memoizedState), i = n.updateQueue =
          Ko(n.memoizedState)) : r = e.updateQueue = Go(i) : null === i &&
        (i = n.updateQueue = Go(r));
      null === i || r === i ? Yo(r, t) : null === r.lastUpdate || null ===
        i.lastUpdate ? (Yo(r, t), Yo(i, t)) : (Yo(r, t), i.lastUpdate = t)
    }

    function Jo(e, t) {
      var n = e.updateQueue;
      null === (n = null === n ? e.updateQueue = Ko(e.memoizedState) : Zo(
          e, n)).lastCapturedUpdate ? n.firstCapturedUpdate = n.lastCapturedUpdate =
        t : (n.lastCapturedUpdate.next = t, n.lastCapturedUpdate = t)
    }

    function Zo(e, t) {
      var n = e.alternate;
      return null !== n && t === n.updateQueue && (t = e.updateQueue = Go(
        t)), t
    }

    function ea(e, t, n, r, o, a) {
      switch (n.tag) {
        case qo:
          return "function" === typeof(e = n.payload) ? e.call(a, r, o) :
            e;
        case Qo:
          e.effectTag = -2049 & e.effectTag | 64;
        case Bo:
          if (null === (o = "function" === typeof(e = n.payload) ? e.call(
              a, r, o) : e) || void 0 === o) break;
          return i({}, r, o);
        case zo:
          Ho = !0
      }
      return r
    }

    function ta(e, t, n, r, i) {
      Ho = !1;
      for (var o = (t = Zo(e, t)).baseState, a = null, s = 0, u = t.firstUpdate,
          l = o; null !== u;) {
        var c = u.expirationTime;
        c < i ? (null === a && (a = u, o = l), s < c && (s = c)) : (l =
          ea(e, 0, u, l, n, r), null !== u.callback && (e.effectTag |=
            32, u.nextEffect = null, null === t.lastEffect ? t.firstEffect =
            t.lastEffect = u : (t.lastEffect.nextEffect = u, t.lastEffect =
              u))), u = u.next
      }
      for (c = null, u = t.firstCapturedUpdate; null !== u;) {
        var f = u.expirationTime;
        f < i ? (null === c && (c = u, null === a && (o = l)), s < f && (
          s = f)) : (l = ea(e, 0, u, l, n, r), null !== u.callback && (
          e.effectTag |= 32, u.nextEffect = null, null === t.lastCapturedEffect ?
          t.firstCapturedEffect = t.lastCapturedEffect = u : (t.lastCapturedEffect
            .nextEffect = u, t.lastCapturedEffect = u))), u = u.next
      }
      null === a && (t.lastUpdate = null), null === c ? t.lastCapturedUpdate =
        null : e.effectTag |= 32, null === a && null === c && (o = l), t.baseState =
        o, t.firstUpdate = a, t.firstCapturedUpdate = c, e.expirationTime =
        s, e.memoizedState = l
    }

    function na(e, t, n) {
      null !== t.firstCapturedUpdate && (null !== t.lastUpdate && (t.lastUpdate
        .next = t.firstCapturedUpdate, t.lastUpdate = t.lastCapturedUpdate
      ), t.firstCapturedUpdate = t.lastCapturedUpdate = null), ra(t.firstEffect,
        n), t.firstEffect = t.lastEffect = null, ra(t.firstCapturedEffect,
        n), t.firstCapturedEffect = t.lastCapturedEffect = null
    }

    function ra(e, t) {
      for (; null !== e;) {
        var n = e.callback;
        if (null !== n) {
          e.callback = null;
          var r = t;
          "function" !== typeof n && a("191", n), n.call(r)
        }
        e = e.nextEffect
      }
    }

    function ia(e, t) {
      return {
        value: e,
        source: t,
        stack: ut(t)
      }
    }

    function oa(e) {
      e.effectTag |= 4
    }
    var aa = void 0,
      sa = void 0,
      ua = void 0,
      la = void 0;
    aa = function(e, t) {
      for (var n = t.child; null !== n;) {
        if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
        else if (4 !== n.tag && null !== n.child) {
          n.child.return = n, n = n.child;
          continue
        }
        if (n === t) break;
        for (; null === n.sibling;) {
          if (null === n.return || n.return === t) return;
          n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
      }
    }, sa = function() {}, ua = function(e, t, n, r, o) {
      var a = e.memoizedProps;
      if (a !== r) {
        var s = t.stateNode;
        switch (bi(mi.current), e = null, n) {
          case "input":
            a = _t(s, a), r = _t(s, r), e = [];
            break;
          case "option":
            a = Hn(s, a), r = Hn(s, r), e = [];
            break;
          case "select":
            a = i({}, a, {
              value: void 0
            }), r = i({}, r, {
              value: void 0
            }), e = [];
            break;
          case "textarea":
            a = Gn(s, a), r = Gn(s, r), e = [];
            break;
          default:
            "function" !== typeof a.onClick && "function" === typeof r.onClick &&
              (s.onclick = hr)
        }
        cr(n, r), s = n = void 0;
        var u = null;
        for (n in a)
          if (!r.hasOwnProperty(n) && a.hasOwnProperty(n) && null != a[
              n])
            if ("style" === n) {
              var l = a[n];
              for (s in l) l.hasOwnProperty(s) && (u || (u = {}), u[s] =
                "")
            } else "dangerouslySetInnerHTML" !== n && "children" !== n &&
              "suppressContentEditableWarning" !== n &&
              "suppressHydrationWarning" !== n && "autoFocus" !== n &&
              (_.hasOwnProperty(n) ? e || (e = []) : (e = e || []).push(
                n, null));
        for (n in r) {
          var c = r[n];
          if (l = null != a ? a[n] : void 0, r.hasOwnProperty(n) && c !==
            l && (null != c || null != l))
            if ("style" === n)
              if (l) {
                for (s in l) !l.hasOwnProperty(s) || c && c.hasOwnProperty(
                  s) || (u || (u = {}), u[s] = "");
                for (s in c) c.hasOwnProperty(s) && l[s] !== c[s] && (u ||
                  (u = {}), u[s] = c[s])
              } else u || (e || (e = []), e.push(n, u)), u = c;
          else "dangerouslySetInnerHTML" === n ? (c = c ? c.__html :
              void 0, l = l ? l.__html : void 0, null != c && l !== c &&
              (e = e || []).push(n, "" + c)) : "children" === n ? l ===
            c || "string" !== typeof c && "number" !== typeof c || (e =
              e || []).push(n, "" + c) :
            "suppressContentEditableWarning" !== n &&
            "suppressHydrationWarning" !== n && (_.hasOwnProperty(n) ?
              (null != c && pr(o, n), e || l === c || (e = [])) : (e =
                e || []).push(n, c))
        }
        u && (e = e || []).push("style", u), o = e, (t.updateQueue = o) &&
          oa(t)
      }
    }, la = function(e, t, n, r) {
      n !== r && oa(t)
    };
    var ca = "function" === typeof WeakSet ? WeakSet : Set;

    function fa(e, t) {
      var n = t.source,
        r = t.stack;
      null === r && null !== n && (r = ut(n)), null !== n && st(n.type),
        t = t.value, null !== e && 1 === e.tag && st(e.type);
      try {
        console.error(t)
      } catch (i) {
        setTimeout(function() {
          throw i
        })
      }
    }

    function pa(e) {
      var t = e.ref;
      if (null !== t)
        if ("function" === typeof t) try {
          t(null)
        } catch (n) {
          za(e, n)
        } else t.current = null
    }

    function ha(e, t, n) {
      if (null !== (n = null !== (n = n.updateQueue) ? n.lastEffect :
          null)) {
        var r = n = n.next;
        do {
          if ((r.tag & e) !== Ti) {
            var i = r.destroy;
            r.destroy = void 0, void 0 !== i && i()
          }(r.tag & t) !== Ti && (i = r.create, r.destroy = i()), r = r.next
        } while (r !== n)
      }
    }

    function da(e) {
      switch ("function" === typeof Vr && Vr(e), e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          var t = e.updateQueue;
          if (null !== t && null !== (t = t.lastEffect)) {
            var n = t = t.next;
            do {
              var r = n.destroy;
              if (void 0 !== r) {
                var i = e;
                try {
                  r()
                } catch (o) {
                  za(i, o)
                }
              }
              n = n.next
            } while (n !== t)
          }
          break;
        case 1:
          if (pa(e), "function" === typeof(t = e.stateNode).componentWillUnmount)
            try {
              t.props = e.memoizedProps, t.state = e.memoizedState, t.componentWillUnmount()
            } catch (o) {
              za(e, o)
            }
          break;
        case 5:
          pa(e);
          break;
        case 4:
          ma(e)
      }
    }

    function ya(e) {
      return 5 === e.tag || 3 === e.tag || 4 === e.tag
    }

    function va(e) {
      e: {
        for (var t = e.return; null !== t;) {
          if (ya(t)) {
            var n = t;
            break e
          }
          t = t.return
        }
        a("160"),
          n = void 0
      }
      var r = t = void 0;
      switch (n.tag) {
        case 5:
          t = n.stateNode, r = !1;
          break;
        case 3:
        case 4:
          t = n.stateNode.containerInfo, r = !0;
          break;
        default:
          a("161")
      }
      16 & n.effectTag && (ir(t, ""), n.effectTag &= -17);e: t: for (n =
        e;;) {
        for (; null === n.sibling;) {
          if (null === n.return || ya(n.return)) {
            n = null;
            break e
          }
          n = n.return
        }
        for (n.sibling.return = n.return, n = n.sibling; 5 !== n.tag &&
          6 !== n.tag;) {
          if (2 & n.effectTag) continue t;
          if (null === n.child || 4 === n.tag) continue t;
          n.child.return = n, n = n.child
        }
        if (!(2 & n.effectTag)) {
          n = n.stateNode;
          break e
        }
      }
      for (var i = e;;) {
        if (5 === i.tag || 6 === i.tag)
          if (n)
            if (r) {
              var o = t,
                s = i.stateNode,
                u = n;
              8 === o.nodeType ? o.parentNode.insertBefore(s, u) : o.insertBefore(
                s, u)
            } else t.insertBefore(i.stateNode, n);
        else r ? (s = t, u = i.stateNode, 8 === s.nodeType ? (o = s.parentNode)
          .insertBefore(u, s) : (o = s).appendChild(u), null !== (s = s
            ._reactRootContainer) && void 0 !== s || null !== o.onclick ||
          (o.onclick = hr)) : t.appendChild(i.stateNode);
        else if (4 !== i.tag && null !== i.child) {
          i.child.return = i, i = i.child;
          continue
        }
        if (i === e) break;
        for (; null === i.sibling;) {
          if (null === i.return || i.return === e) return;
          i = i.return
        }
        i.sibling.return = i.return, i = i.sibling
      }
    }

    function ma(e) {
      for (var t = e, n = !1, r = void 0, i = void 0;;) {
        if (!n) {
          n = t.return;
          e: for (;;) {
            switch (null === n && a("160"), n.tag) {
              case 5:
                r = n.stateNode, i = !1;
                break e;
              case 3:
              case 4:
                r = n.stateNode.containerInfo, i = !0;
                break e
            }
            n = n.return
          }
          n = !0
        }
        if (5 === t.tag || 6 === t.tag) {
          e: for (var o = t, s = o;;)
            if (da(s), null !== s.child && 4 !== s.tag) s.child.return =
              s, s = s.child;
            else {
              if (s === o) break;
              for (; null === s.sibling;) {
                if (null === s.return || s.return === o) break e;
                s = s.return
              }
              s.sibling.return = s.return, s = s.sibling
            }i ? (o = r, s = t.stateNode, 8 === o.nodeType ? o.parentNode
            .removeChild(s) : o.removeChild(s)) : r.removeChild(t.stateNode)
        } else if (4 === t.tag ? (r = t.stateNode.containerInfo, i = !0) :
          da(t), null !== t.child) {
          t.child.return = t, t = t.child;
          continue
        }
        if (t === e) break;
        for (; null === t.sibling;) {
          if (null === t.return || t.return === e) return;
          4 === (t = t.return).tag && (n = !1)
        }
        t.sibling.return = t.return, t = t.sibling
      }
    }

    function ga(e, t) {
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ha(ki, Pi, t);
          break;
        case 1:
          break;
        case 5:
          var n = t.stateNode;
          if (null != n) {
            var r = t.memoizedProps;
            e = null !== e ? e.memoizedProps : r;
            var i = t.type,
              o = t.updateQueue;
            t.updateQueue = null, null !== o && function(e, t, n, r, i) {
              e[D] = i, "input" === n && "radio" === i.type && null !=
                i.name && wt(e, i), fr(n, r), r = fr(n, i);
              for (var o = 0; o < t.length; o += 2) {
                var a = t[o],
                  s = t[o + 1];
                "style" === a ? ur(e, s) : "dangerouslySetInnerHTML" ===
                  a ? rr(e, s) : "children" === a ? ir(e, s) : mt(e, a,
                    s, r)
              }
              switch (n) {
                case "input":
                  Et(e, i);
                  break;
                case "textarea":
                  Yn(e, i);
                  break;
                case "select":
                  t = e._wrapperState.wasMultiple, e._wrapperState.wasMultiple = !
                    !i.multiple, null != (n = i.value) ? Kn(e, !!i.multiple,
                      n, !1) : t !== !!i.multiple && (null != i.defaultValue ?
                      Kn(e, !!i.multiple, i.defaultValue, !0) : Kn(e, !
                        !i.multiple, i.multiple ? [] : "", !1))
              }
            }(n, o, i, e, r)
          }
          break;
        case 6:
          null === t.stateNode && a("162"), t.stateNode.nodeValue = t.memoizedProps;
          break;
        case 3:
        case 12:
          break;
        case 13:
          if (n = t.memoizedState, r = void 0, e = t, null === n ? r = !1 :
            (r = !0, e = t.child, 0 === n.timedOutAt && (n.timedOutAt =
              _s())), null !== e && function(e, t) {
              for (var n = e;;) {
                if (5 === n.tag) {
                  var r = n.stateNode;
                  if (t) r.style.display = "none";
                  else {
                    r = n.stateNode;
                    var i = n.memoizedProps.style;
                    i = void 0 !== i && null !== i && i.hasOwnProperty(
                        "display") ? i.display : null, r.style.display =
                      sr("display", i)
                  }
                } else if (6 === n.tag) n.stateNode.nodeValue = t ? "" :
                  n.memoizedProps;
                else {
                  if (13 === n.tag && null !== n.memoizedState) {
                    (r = n.child.sibling).return = n, n = r;
                    continue
                  }
                  if (null !== n.child) {
                    n.child.return = n, n = n.child;
                    continue
                  }
                }
                if (n === e) break;
                for (; null === n.sibling;) {
                  if (null === n.return || n.return === e) return;
                  n = n.return
                }
                n.sibling.return = n.return, n = n.sibling
              }
            }(e, r), null !== (n = t.updateQueue)) {
            t.updateQueue = null;
            var s = t.stateNode;
            null === s && (s = t.stateNode = new ca), n.forEach(function(
              e) {
              var n = function(e, t) {
                var n = e.stateNode;
                null !== n && n.delete(t), t = Qa(t = _s(), e),
                  null !== (e = Ka(e, t)) && (Jr(e, t), 0 !== (t =
                    e.expirationTime) && bs(e, t))
              }.bind(null, t, e);
              s.has(e) || (s.add(e), e.then(n, n))
            })
          }
          break;
        case 17:
          break;
        default:
          a("163")
      }
    }
    var _a = "function" === typeof WeakMap ? WeakMap : Map;

    function ba(e, t, n) {
      (n = $o(n)).tag = Qo, n.payload = {
        element: null
      };
      var r = t.value;
      return n.callback = function() {
        Os(r), fa(e, t)
      }, n
    }

    function wa(e, t, n) {
      (n = $o(n)).tag = Qo;
      var r = e.type.getDerivedStateFromError;
      if ("function" === typeof r) {
        var i = t.value;
        n.payload = function() {
          return r(i)
        }
      }
      var o = e.stateNode;
      return null !== o && "function" === typeof o.componentDidCatch && (
        n.callback = function() {
          "function" !== typeof r && (null === ja ? ja = new Set([this]) :
            ja.add(this));
          var n = t.value,
            i = t.stack;
          fa(e, t), this.componentDidCatch(n, {
            componentStack: null !== i ? i : ""
          })
        }), n
    }

    function Ea(e) {
      switch (e.tag) {
        case 1:
          Ar(e.type) && Dr();
          var t = e.effectTag;
          return 2048 & t ? (e.effectTag = -2049 & t | 64, e) : null;
        case 3:
          return Ei(), Fr(), 0 !== (64 & (t = e.effectTag)) && a("285"),
            e.effectTag = -2049 & t | 64, e;
        case 5:
          return Si(e), null;
        case 13:
          return 2048 & (t = e.effectTag) ? (e.effectTag = -2049 & t | 64,
            e) : null;
        case 4:
          return Ei(), null;
        case 10:
          return Uo(e), null;
        default:
          return null
      }
    }
    var Ca = ze.ReactCurrentDispatcher,
      Sa = ze.ReactCurrentOwner,
      Ta = 1073741822,
      xa = 0,
      ka = !1,
      Pa = null,
      Oa = null,
      Na = 0,
      Ia = -1,
      Ra = !1,
      Aa = null,
      Da = !1,
      Fa = null,
      La = null,
      Ma = null,
      ja = null;

    function Ua() {
      if (null !== Pa)
        for (var e = Pa.return; null !== e;) {
          var t = e;
          switch (t.tag) {
            case 1:
              var n = t.type.childContextTypes;
              null !== n && void 0 !== n && Dr();
              break;
            case 3:
              Ei(), Fr();
              break;
            case 5:
              Si(t);
              break;
            case 4:
              Ei();
              break;
            case 10:
              Uo(t)
          }
          e = e.return
        }
      Oa = null, Na = 0, Ia = -1, Ra = !1, Pa = null
    }

    function Wa() {
      null !== La && wr(La), null !== Ma && Ma()
    }

    function Va(e) {
      for (;;) {
        var t = e.alternate,
          n = e.return,
          r = e.sibling;
        if (0 === (1024 & e.effectTag)) {
          Pa = e;
          e: {
            var o = t,
              s = Na,
              u = (t = e).pendingProps;
            switch (t.tag) {
              case 2:
              case 16:
                break;
              case 15:
              case 0:
                break;
              case 1:
                Ar(t.type) && Dr();
                break;
              case 3:
                Ei(), Fr(), (u = t.stateNode).pendingContext && (u.context =
                    u.pendingContext, u.pendingContext = null), null !==
                  o && null !== o.child || (go(t), t.effectTag &= -3),
                  sa(t);
                break;
              case 5:
                Si(t);
                var l = bi(_i.current);
                if (s = t.type, null !== o && null != t.stateNode) ua(o,
                  t, s, u, l), o.ref !== t.ref && (t.effectTag |= 128);
                else if (u) {
                  var c = bi(mi.current);
                  if (go(t)) {
                    o = (u = t).stateNode;
                    var f = u.type,
                      p = u.memoizedProps,
                      h = l;
                    switch (o[A] = u, o[D] = p, s = void 0, l = f) {
                      case "iframe":
                      case "object":
                        Tn("load", o);
                        break;
                      case "video":
                      case "audio":
                        for (f = 0; f < te.length; f++) Tn(te[f], o);
                        break;
                      case "source":
                        Tn("error", o);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Tn("error", o), Tn("load", o);
                        break;
                      case "form":
                        Tn("reset", o), Tn("submit", o);
                        break;
                      case "details":
                        Tn("toggle", o);
                        break;
                      case "input":
                        bt(o, p), Tn("invalid", o), pr(h, "onChange");
                        break;
                      case "select":
                        o._wrapperState = {
                          wasMultiple: !!p.multiple
                        }, Tn("invalid", o), pr(h, "onChange");
                        break;
                      case "textarea":
                        $n(o, p), Tn("invalid", o), pr(h, "onChange")
                    }
                    for (s in cr(l, p), f = null, p) p.hasOwnProperty(s) &&
                      (c = p[s], "children" === s ? "string" === typeof c ?
                        o.textContent !== c && (f = ["children", c]) :
                        "number" === typeof c && o.textContent !== "" +
                        c && (f = ["children", "" + c]) : _.hasOwnProperty(
                          s) && null != c && pr(h, s));
                    switch (l) {
                      case "input":
                        Be(o), Ct(o, p, !0);
                        break;
                      case "textarea":
                        Be(o), Xn(o);
                        break;
                      case "select":
                      case "option":
                        break;
                      default:
                        "function" === typeof p.onClick && (o.onclick =
                          hr)
                    }
                    s = f, u.updateQueue = s, (u = null !== s) && oa(t)
                  } else {
                    p = t, o = s, h = u, f = 9 === l.nodeType ? l : l.ownerDocument,
                      c === Jn.html && (c = Zn(o)), c === Jn.html ?
                      "script" === o ? ((o = f.createElement("div")).innerHTML =
                        "<script><\/script>", f = o.removeChild(o.firstChild)
                      ) : "string" === typeof h.is ? f = f.createElement(
                        o, {
                          is: h.is
                        }) : (f = f.createElement(o), "select" === o &&
                        h.multiple && (f.multiple = !0)) : f = f.createElementNS(
                        c, o), (o = f)[A] = p, o[D] = u, aa(o, t, !1, !
                        1), h = o;
                    var d = l,
                      y = fr(f = s, p = u);
                    switch (f) {
                      case "iframe":
                      case "object":
                        Tn("load", h), l = p;
                        break;
                      case "video":
                      case "audio":
                        for (l = 0; l < te.length; l++) Tn(te[l], h);
                        l = p;
                        break;
                      case "source":
                        Tn("error", h), l = p;
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Tn("error", h), Tn("load", h), l = p;
                        break;
                      case "form":
                        Tn("reset", h), Tn("submit", h), l = p;
                        break;
                      case "details":
                        Tn("toggle", h), l = p;
                        break;
                      case "input":
                        bt(h, p), l = _t(h, p), Tn("invalid", h), pr(d,
                          "onChange");
                        break;
                      case "option":
                        l = Hn(h, p);
                        break;
                      case "select":
                        h._wrapperState = {
                          wasMultiple: !!p.multiple
                        }, l = i({}, p, {
                          value: void 0
                        }), Tn("invalid", h), pr(d, "onChange");
                        break;
                      case "textarea":
                        $n(h, p), l = Gn(h, p), Tn("invalid", h), pr(d,
                          "onChange");
                        break;
                      default:
                        l = p
                    }
                    cr(f, l), c = void 0;
                    var v = f,
                      m = h,
                      g = l;
                    for (c in g)
                      if (g.hasOwnProperty(c)) {
                        var b = g[c];
                        "style" === c ? ur(m, b) :
                          "dangerouslySetInnerHTML" === c ? null != (b =
                            b ? b.__html : void 0) && rr(m, b) :
                          "children" === c ? "string" === typeof b ? (
                            "textarea" !== v || "" !== b) && ir(m, b) :
                          "number" === typeof b && ir(m, "" + b) :
                          "suppressContentEditableWarning" !== c &&
                          "suppressHydrationWarning" !== c &&
                          "autoFocus" !== c && (_.hasOwnProperty(c) ?
                            null != b && pr(d, c) : null != b && mt(m,
                              c, b, y))
                      }
                    switch (f) {
                      case "input":
                        Be(h), Ct(h, p, !1);
                        break;
                      case "textarea":
                        Be(h), Xn(h);
                        break;
                      case "option":
                        null != p.value && h.setAttribute("value", "" +
                          gt(p.value));
                        break;
                      case "select":
                        (l = h).multiple = !!p.multiple, null != (h = p
                            .value) ? Kn(l, !!p.multiple, h, !1) : null !=
                          p.defaultValue && Kn(l, !!p.multiple, p.defaultValue, !
                            0);
                        break;
                      default:
                        "function" === typeof l.onClick && (h.onclick =
                          hr)
                    }(u = vr(s, u)) && oa(t), t.stateNode = o
                  }
                  null !== t.ref && (t.effectTag |= 128)
                } else null === t.stateNode && a("166");
                break;
              case 6:
                o && null != t.stateNode ? la(o, t, o.memoizedProps, u) :
                  ("string" !== typeof u && (null === t.stateNode && a(
                      "166")), o = bi(_i.current), bi(mi.current), go(t) ?
                    (s = (u = t).stateNode, o = u.memoizedProps, s[A] =
                      u, (u = s.nodeValue !== o) && oa(t)) : (s = t, (u =
                      (9 === o.nodeType ? o : o.ownerDocument).createTextNode(
                        u))[A] = t, s.stateNode = u));
                break;
              case 11:
                break;
              case 13:
                if (u = t.memoizedState, 0 !== (64 & t.effectTag)) {
                  t.expirationTime = s, Pa = t;
                  break e
                }
                u = null !== u, s = null !== o && null !== o.memoizedState,
                  null !== o && !u && s && (null !== (o = o.child.sibling) &&
                    (null !== (l = t.firstEffect) ? (t.firstEffect = o,
                      o.nextEffect = l) : (t.firstEffect = t.lastEffect =
                      o, o.nextEffect = null), o.effectTag = 8)), (u ||
                    s) && (t.effectTag |= 4);
                break;
              case 7:
              case 8:
              case 12:
                break;
              case 4:
                Ei(), sa(t);
                break;
              case 10:
                Uo(t);
                break;
              case 9:
              case 14:
                break;
              case 17:
                Ar(t.type) && Dr();
                break;
              default:
                a("156")
            }
            Pa = null
          }
          if (t = e, 1 === Na || 1 !== t.childExpirationTime) {
            for (u = 0, s = t.child; null !== s;)(o = s.expirationTime) >
              u && (u = o), (l = s.childExpirationTime) > u && (u = l), s =
              s.sibling;
            t.childExpirationTime = u
          }
          if (null !== Pa) return Pa;
          null !== n && 0 === (1024 & n.effectTag) && (null === n.firstEffect &&
            (n.firstEffect = e.firstEffect), null !== e.lastEffect && (
              null !== n.lastEffect && (n.lastEffect.nextEffect = e.firstEffect),
              n.lastEffect = e.lastEffect), 1 < e.effectTag && (null !==
              n.lastEffect ? n.lastEffect.nextEffect = e : n.firstEffect =
              e, n.lastEffect = e))
        } else {
          if (null !== (e = Ea(e))) return e.effectTag &= 1023, e;
          null !== n && (n.firstEffect = n.lastEffect = null, n.effectTag |=
            1024)
        }
        if (null !== r) return r;
        if (null === n) break;
        e = n
      }
      return null
    }

    function Ba(e) {
      var t = Ao(e.alternate, e, Na);
      return e.memoizedProps = e.pendingProps, null === t && (t = Va(e)),
        Sa.current = null, t
    }

    function qa(e, t) {
      ka && a("243"), Wa(), ka = !0;
      var n = Ca.current;
      Ca.current = so;
      var r = e.nextExpirationTimeToWorkOn;
      r === Na && e === Oa && null !== Pa || (Ua(), Na = r, Pa = Hr((Oa =
        e).current, null), e.pendingCommitExpirationTime = 0);
      for (var i = !1;;) {
        try {
          if (t)
            for (; null !== Pa && !Cs();) Pa = Ba(Pa);
          else
            for (; null !== Pa;) Pa = Ba(Pa)
        } catch (v) {
          if (Mo = Lo = Fo = null, Yi(), null === Pa) i = !0, Os(v);
          else {
            null === Pa && a("271");
            var o = Pa,
              s = o.return;
            if (null !== s) {
              e: {
                var u = e,
                  l = s,
                  c = o,
                  f = v;
                if (s = Na, c.effectTag |= 1024, c.firstEffect = c.lastEffect =
                  null, null !== f && "object" === typeof f && "function" ===
                  typeof f.then) {
                  var p = f;
                  f = l;
                  var h = -1,
                    d = -1;
                  do {
                    if (13 === f.tag) {
                      var y = f.alternate;
                      if (null !== y && null !== (y = y.memoizedState)) {
                        d = 10 * (1073741822 - y.timedOutAt);
                        break
                      }
                      "number" === typeof(y = f.pendingProps.maxDuration) &&
                      (0 >= y ? h = 0 : (-1 === h || y < h) && (h = y))
                    }
                    f = f.return
                  } while (null !== f);
                  f = l;
                  do {
                    if ((y = 13 === f.tag) && (y = void 0 !== f.memoizedProps
                        .fallback && null === f.memoizedState), y) {
                      if (null === (l = f.updateQueue) ? ((l = new Set).add(
                          p), f.updateQueue = l) : l.add(p), 0 === (1 & f
                          .mode)) {
                        f.effectTag |= 64, c.effectTag &= -1957, 1 === c.tag &&
                          (null === c.alternate ? c.tag = 17 : ((s = $o(
                            1073741823)).tag = zo, Xo(c, s))), c.expirationTime =
                          1073741823;
                        break e
                      }
                      null === (c = u.pingCache) ? (c = u.pingCache = new _a,
                          l = new Set, c.set(p, l)) : void 0 === (l = c.get(
                          p)) && (l = new Set, c.set(p, l)), l.has(s) ||
                        (l.add(s), c = Ha.bind(null, u, p, s), p.then(c,
                          c)), -1 === h ? u = 1073741823 : (-1 === d && (
                            d = 10 * (1073741822 - ei(u, s)) - 5e3), u =
                          d + h), 0 <= u && Ia < u && (Ia = u), f.effectTag |=
                        2048, f.expirationTime = s;
                      break e
                    }
                    f = f.return
                  } while (null !== f);
                  f = Error((st(c.type) || "A React component") +
                    " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." +
                    ut(c))
                }
                Ra = !0,
                  f = ia(f, c),
                  u = l;
                do {
                  switch (u.tag) {
                    case 3:
                      u.effectTag |= 2048, u.expirationTime = s, Jo(u, s =
                        ba(u, f, s));
                      break e;
                    case 1:
                      if (p = f, h = u.type, d = u.stateNode, 0 === (64 &
                          u.effectTag) && ("function" === typeof h.getDerivedStateFromError ||
                          null !== d && "function" === typeof d.componentDidCatch &&
                          (null === ja || !ja.has(d)))) {
                        u.effectTag |= 2048, u.expirationTime = s, Jo(u,
                          s = wa(u, p, s));
                        break e
                      }
                  }
                  u = u.return
                } while (null !== u)
              }
              Pa = Va(o);
              continue
            }
            i = !0, Os(v)
          }
        }
        break
      }
      if (ka = !1, Ca.current = n, Mo = Lo = Fo = null, Yi(), i) Oa =
        null, e.finishedWork = null;
      else if (null !== Pa) e.finishedWork = null;
      else {
        if (null === (n = e.current.alternate) && a("281"), Oa = null, Ra) {
          if (i = e.latestPendingTime, o = e.latestSuspendedTime, s = e.latestPingedTime,
            0 !== i && i < r || 0 !== o && o < r || 0 !== s && s < r)
            return Zr(e, r), void gs(e, n, r, e.expirationTime, -1);
          if (!e.didError && t) return e.didError = !0, r = e.nextExpirationTimeToWorkOn =
            r, t = e.expirationTime = 1073741823, void gs(e, n, r, t, -
              1)
        }
        t && -1 !== Ia ? (Zr(e, r), (t = 10 * (1073741822 - ei(e, r))) <
          Ia && (Ia = t), t = 10 * (1073741822 - _s()), t = Ia - t, gs(
            e, n, r, e.expirationTime, 0 > t ? 0 : t)) : (e.pendingCommitExpirationTime =
          r, e.finishedWork = n)
      }
    }

    function za(e, t) {
      for (var n = e.return; null !== n;) {
        switch (n.tag) {
          case 1:
            var r = n.stateNode;
            if ("function" === typeof n.type.getDerivedStateFromError ||
              "function" === typeof r.componentDidCatch && (null === ja ||
                !ja.has(r))) return Xo(n, e = wa(n, e = ia(t, e),
              1073741823)), void Ga(n, 1073741823);
            break;
          case 3:
            return Xo(n, e = ba(n, e = ia(t, e), 1073741823)), void Ga(n,
              1073741823)
        }
        n = n.return
      }
      3 === e.tag && (Xo(e, n = ba(e, n = ia(t, e), 1073741823)), Ga(e,
        1073741823))
    }

    function Qa(e, t) {
      return 0 !== xa ? e = xa : ka ? e = Da ? 1073741823 : Na : 1 & t.mode ?
        (e = us ? 1073741822 - 10 * (1 + ((1073741822 - e + 15) / 10 | 0)) :
          1073741822 - 25 * (1 + ((1073741822 - e + 500) / 25 | 0)), null !==
          Oa && e === Na && --e) : e = 1073741823, us && (0 === rs || e <
          rs) && (rs = e), e
    }

    function Ha(e, t, n) {
      var r = e.pingCache;
      null !== r && r.delete(t), null !== Oa && Na === n ? Oa = null : (t =
        e.earliestSuspendedTime, r = e.latestSuspendedTime, 0 !== t &&
        n <= t && n >= r && (e.didError = !1, (0 === (t = e.latestPingedTime) ||
            t > n) && (e.latestPingedTime = n), ti(n, e), 0 !== (n = e.expirationTime) &&
          bs(e, n)))
    }

    function Ka(e, t) {
      e.expirationTime < t && (e.expirationTime = t);
      var n = e.alternate;
      null !== n && n.expirationTime < t && (n.expirationTime = t);
      var r = e.return,
        i = null;
      if (null === r && 3 === e.tag) i = e.stateNode;
      else
        for (; null !== r;) {
          if (n = r.alternate, r.childExpirationTime < t && (r.childExpirationTime =
              t), null !== n && n.childExpirationTime < t && (n.childExpirationTime =
              t), null === r.return && 3 === r.tag) {
            i = r.stateNode;
            break
          }
          r = r.return
        }
      return i
    }

    function Ga(e, t) {
      null !== (e = Ka(e, t)) && (!ka && 0 !== Na && t > Na && Ua(), Jr(e,
          t), ka && !Da && Oa === e || bs(e, e.expirationTime), ds > hs &&
        (ds = 0, a("185")))
    }

    function $a(e, t, n, r, i) {
      var o = xa;
      xa = 1073741823;
      try {
        return e(t, n, r, i)
      } finally {
        xa = o
      }
    }
    var Ya = null,
      Xa = null,
      Ja = 0,
      Za = void 0,
      es = !1,
      ts = null,
      ns = 0,
      rs = 0,
      is = !1,
      os = null,
      as = !1,
      ss = !1,
      us = !1,
      ls = null,
      cs = o.unstable_now(),
      fs = 1073741822 - (cs / 10 | 0),
      ps = fs,
      hs = 50,
      ds = 0,
      ys = null;

    function vs() {
      fs = 1073741822 - ((o.unstable_now() - cs) / 10 | 0)
    }

    function ms(e, t) {
      if (0 !== Ja) {
        if (t < Ja) return;
        null !== Za && o.unstable_cancelCallback(Za)
      }
      Ja = t, e = o.unstable_now() - cs, Za = o.unstable_scheduleCallback(
        Ss, {
          timeout: 10 * (1073741822 - t) - e
        })
    }

    function gs(e, t, n, r, i) {
      e.expirationTime = r, 0 !== i || Cs() ? 0 < i && (e.timeoutHandle =
        gr(function(e, t, n) {
          e.pendingCommitExpirationTime = n, e.finishedWork = t, vs(),
            ps = fs, xs(e, n)
        }.bind(null, e, t, n), i)) : (e.pendingCommitExpirationTime = n,
        e.finishedWork = t)
    }

    function _s() {
      return es ? ps : (ws(), 0 !== ns && 1 !== ns || (vs(), ps = fs), ps)
    }

    function bs(e, t) {
      null === e.nextScheduledRoot ? (e.expirationTime = t, null === Xa ?
        (Ya = Xa = e, e.nextScheduledRoot = e) : (Xa = Xa.nextScheduledRoot =
          e).nextScheduledRoot = Ya) : t > e.expirationTime && (e.expirationTime =
        t), es || (as ? ss && (ts = e, ns = 1073741823, ks(e,
        1073741823, !1)) : 1073741823 === t ? Ts(1073741823, !1) : ms(
        e, t))
    }

    function ws() {
      var e = 0,
        t = null;
      if (null !== Xa)
        for (var n = Xa, r = Ya; null !== r;) {
          var i = r.expirationTime;
          if (0 === i) {
            if ((null === n || null === Xa) && a("244"), r === r.nextScheduledRoot) {
              Ya = Xa = r.nextScheduledRoot = null;
              break
            }
            if (r === Ya) Ya = i = r.nextScheduledRoot, Xa.nextScheduledRoot =
              i, r.nextScheduledRoot = null;
            else {
              if (r === Xa) {
                (Xa = n).nextScheduledRoot = Ya, r.nextScheduledRoot =
                  null;
                break
              }
              n.nextScheduledRoot = r.nextScheduledRoot, r.nextScheduledRoot =
                null
            }
            r = n.nextScheduledRoot
          } else {
            if (i > e && (e = i, t = r), r === Xa) break;
            if (1073741823 === e) break;
            n = r, r = r.nextScheduledRoot
          }
        }
      ts = t, ns = e
    }
    var Es = !1;

    function Cs() {
      return !!Es || !!o.unstable_shouldYield() && (Es = !0)
    }

    function Ss() {
      try {
        if (!Cs() && null !== Ya) {
          vs();
          var e = Ya;
          do {
            var t = e.expirationTime;
            0 !== t && fs <= t && (e.nextExpirationTimeToWorkOn = fs), e =
              e.nextScheduledRoot
          } while (e !== Ya)
        }
        Ts(0, !0)
      } finally {
        Es = !1
      }
    }

    function Ts(e, t) {
      if (ws(), t)
        for (vs(), ps = fs; null !== ts && 0 !== ns && e <= ns && !(Es &&
            fs > ns);) ks(ts, ns, fs > ns), ws(), vs(), ps = fs;
      else
        for (; null !== ts && 0 !== ns && e <= ns;) ks(ts, ns, !1), ws();
      if (t && (Ja = 0, Za = null), 0 !== ns && ms(ts, ns), ds = 0, ys =
        null, null !== ls)
        for (e = ls, ls = null, t = 0; t < e.length; t++) {
          var n = e[t];
          try {
            n._onComplete()
          } catch (r) {
            is || (is = !0, os = r)
          }
        }
      if (is) throw e = os, os = null, is = !1, e
    }

    function xs(e, t) {
      es && a("253"), ts = e, ns = t, ks(e, t, !1), Ts(1073741823, !1)
    }

    function ks(e, t, n) {
      if (es && a("245"), es = !0, n) {
        var r = e.finishedWork;
        null !== r ? Ps(e, r, t) : (e.finishedWork = null, -1 !== (r = e.timeoutHandle) &&
          (e.timeoutHandle = -1, _r(r)), qa(e, n), null !== (r = e.finishedWork) &&
          (Cs() ? e.finishedWork = r : Ps(e, r, t)))
      } else null !== (r = e.finishedWork) ? Ps(e, r, t) : (e.finishedWork =
        null, -1 !== (r = e.timeoutHandle) && (e.timeoutHandle = -1, _r(
          r)), qa(e, n), null !== (r = e.finishedWork) && Ps(e, r, t));
      es = !1
    }

    function Ps(e, t, n) {
      var r = e.firstBatch;
      if (null !== r && r._expirationTime >= n && (null === ls ? ls = [r] :
          ls.push(r), r._defer)) return e.finishedWork = t, void(e.expirationTime =
        0);
      e.finishedWork = null, e === ys ? ds++ : (ys = e, ds = 0), Da = ka = !
        0, e.current === t && a("177"), 0 === (n = e.pendingCommitExpirationTime) &&
        a("261"), e.pendingCommitExpirationTime = 0, r = t.expirationTime;
      var i = t.childExpirationTime;
      if (r = i > r ? i : r, e.didError = !1, 0 === r ? (e.earliestPendingTime =
          0, e.latestPendingTime = 0, e.earliestSuspendedTime = 0, e.latestSuspendedTime =
          0, e.latestPingedTime = 0) : (r < e.latestPingedTime && (e.latestPingedTime =
            0), 0 !== (i = e.latestPendingTime) && (i > r ? e.earliestPendingTime =
            e.latestPendingTime = 0 : e.earliestPendingTime > r && (e.earliestPendingTime =
              e.latestPendingTime)), 0 === (i = e.earliestSuspendedTime) ?
          Jr(e, r) : r < e.latestSuspendedTime ? (e.earliestSuspendedTime =
            0, e.latestSuspendedTime = 0, e.latestPingedTime = 0, Jr(e, r)
          ) : r > i && Jr(e, r)), ti(0, e), Sa.current = null, 1 < t.effectTag ?
        null !== t.lastEffect ? (t.lastEffect.nextEffect = t, r = t.firstEffect) :
        r = t : r = t.firstEffect, dr = Sn, Mn(i = Ln())) {
        if ("selectionStart" in i) var o = {
          start: i.selectionStart,
          end: i.selectionEnd
        };
        else e: {
          var s = (o = (o = i.ownerDocument) && o.defaultView || window)
            .getSelection && o.getSelection();
          if (s && 0 !== s.rangeCount) {
            o = s.anchorNode;
            var u = s.anchorOffset,
              l = s.focusNode;
            s = s.focusOffset;
            try {
              o.nodeType, l.nodeType
            } catch (M) {
              o = null;
              break e
            }
            var c = 0,
              f = -1,
              p = -1,
              h = 0,
              d = 0,
              y = i,
              v = null;
            t: for (;;) {
              for (var m; y !== o || 0 !== u && 3 !== y.nodeType || (
                  f = c + u), y !== l || 0 !== s && 3 !== y.nodeType ||
                (p = c + s), 3 === y.nodeType && (c += y.nodeValue.length),
                null !== (m = y.firstChild);) v = y, y = m;
              for (;;) {
                if (y === i) break t;
                if (v === o && ++h === u && (f = c), v === l && ++d ===
                  s && (p = c), null !== (m = y.nextSibling)) break;
                v = (y = v).parentNode
              }
              y = m
            }
            o = -1 === f || -1 === p ? null : {
              start: f,
              end: p
            }
          } else o = null
        }
        o = o || {
          start: 0,
          end: 0
        }
      } else o = null;
      for (yr = {
          focusedElem: i,
          selectionRange: o
        }, Sn = !1, Aa = r; null !== Aa;) {
        i = !1, o = void 0;
        try {
          for (; null !== Aa;) {
            if (256 & Aa.effectTag) e: {
              var g = Aa.alternate;
              switch ((u = Aa).tag) {
                case 0:
                case 11:
                case 15:
                  ha(xi, Ti, u);
                  break e;
                case 1:
                  if (256 & u.effectTag && null !== g) {
                    var _ = g.memoizedProps,
                      b = g.memoizedState,
                      w = u.stateNode,
                      E = w.getSnapshotBeforeUpdate(u.elementType === u
                        .type ? _ : ni(u.type, _), b);
                    w.__reactInternalSnapshotBeforeUpdate = E
                  }
                  break e;
                case 3:
                case 5:
                case 6:
                case 4:
                case 17:
                  break e;
                default:
                  a("163")
              }
            }
            Aa = Aa.nextEffect
          }
        } catch (M) {
          i = !0, o = M
        }
        i && (null === Aa && a("178"), za(Aa, o), null !== Aa && (Aa = Aa
          .nextEffect))
      }
      for (Aa = r; null !== Aa;) {
        g = !1, _ = void 0;
        try {
          for (; null !== Aa;) {
            var C = Aa.effectTag;
            if (16 & C && ir(Aa.stateNode, ""), 128 & C) {
              var S = Aa.alternate;
              if (null !== S) {
                var T = S.ref;
                null !== T && ("function" === typeof T ? T(null) : T.current =
                  null)
              }
            }
            switch (14 & C) {
              case 2:
                va(Aa), Aa.effectTag &= -3;
                break;
              case 6:
                va(Aa), Aa.effectTag &= -3, ga(Aa.alternate, Aa);
                break;
              case 4:
                ga(Aa.alternate, Aa);
                break;
              case 8:
                ma(b = Aa), b.return = null, b.child = null, b.memoizedState =
                  null, b.updateQueue = null;
                var x = b.alternate;
                null !== x && (x.return = null, x.child = null, x.memoizedState =
                  null, x.updateQueue = null)
            }
            Aa = Aa.nextEffect
          }
        } catch (M) {
          g = !0, _ = M
        }
        g && (null === Aa && a("178"), za(Aa, _), null !== Aa && (Aa = Aa
          .nextEffect))
      }
      if (T = yr, S = Ln(), C = T.focusedElem, g = T.selectionRange, S !==
        C && C && C.ownerDocument && function e(t, n) {
          return !(!t || !n) && (t === n || (!t || 3 !== t.nodeType) && (
            n && 3 === n.nodeType ? e(t, n.parentNode) : "contains" in
            t ? t.contains(n) : !!t.compareDocumentPosition && !!(16 &
              t.compareDocumentPosition(n))))
        }(C.ownerDocument.documentElement, C)) {
        null !== g && Mn(C) && (S = g.start, void 0 === (T = g.end) && (T =
          S), "selectionStart" in C ? (C.selectionStart = S, C.selectionEnd =
          Math.min(T, C.value.length)) : (T = (S = C.ownerDocument ||
          document) && S.defaultView || window).getSelection && (T =
          T.getSelection(), _ = C.textContent.length, x = Math.min(g.start,
            _), g = void 0 === g.end ? x : Math.min(g.end, _), !T.extend &&
          x > g && (_ = g, g = x, x = _), _ = Fn(C, x), b = Fn(C, g),
          _ && b && (1 !== T.rangeCount || T.anchorNode !== _.node ||
            T.anchorOffset !== _.offset || T.focusNode !== b.node ||
            T.focusOffset !== b.offset) && ((S = S.createRange()).setStart(
            _.node, _.offset), T.removeAllRanges(), x > g ? (T.addRange(
            S), T.extend(b.node, b.offset)) : (S.setEnd(b.node, b.offset),
            T.addRange(S))))), S = [];
        for (T = C; T = T.parentNode;) 1 === T.nodeType && S.push({
          element: T,
          left: T.scrollLeft,
          top: T.scrollTop
        });
        for ("function" === typeof C.focus && C.focus(), C = 0; C < S.length; C++)
          (T = S[C]).element.scrollLeft = T.left, T.element.scrollTop = T
          .top
      }
      for (yr = null, Sn = !!dr, dr = null, e.current = t, Aa = r; null !==
        Aa;) {
        C = !1, S = void 0;
        try {
          for (T = e, x = n; null !== Aa;) {
            var k = Aa.effectTag;
            if (36 & k) {
              var P = Aa.alternate;
              switch (_ = x, (g = Aa).tag) {
                case 0:
                case 11:
                case 15:
                  ha(Oi, Ni, g);
                  break;
                case 1:
                  var O = g.stateNode;
                  if (4 & g.effectTag)
                    if (null === P) O.componentDidMount();
                    else {
                      var N = g.elementType === g.type ? P.memoizedProps :
                        ni(g.type, P.memoizedProps);
                      O.componentDidUpdate(N, P.memoizedState, O.__reactInternalSnapshotBeforeUpdate)
                    }
                  var I = g.updateQueue;
                  null !== I && na(0, I, O);
                  break;
                case 3:
                  var R = g.updateQueue;
                  if (null !== R) {
                    if (b = null, null !== g.child) switch (g.child.tag) {
                      case 5:
                        b = g.child.stateNode;
                        break;
                      case 1:
                        b = g.child.stateNode
                    }
                    na(0, R, b)
                  }
                  break;
                case 5:
                  var A = g.stateNode;
                  null === P && 4 & g.effectTag && vr(g.type, g.memoizedProps) &&
                    A.focus();
                  break;
                case 6:
                case 4:
                case 12:
                case 13:
                case 17:
                  break;
                default:
                  a("163")
              }
            }
            if (128 & k) {
              var D = Aa.ref;
              if (null !== D) {
                var F = Aa.stateNode;
                switch (Aa.tag) {
                  case 5:
                    var L = F;
                    break;
                  default:
                    L = F
                }
                "function" === typeof D ? D(L) : D.current = L
              }
            }
            512 & k && (Fa = T), Aa = Aa.nextEffect
          }
        } catch (M) {
          C = !0, S = M
        }
        C && (null === Aa && a("178"), za(Aa, S), null !== Aa && (Aa = Aa
          .nextEffect))
      }
      null !== r && null !== Fa && (k = function(e, t) {
          Ma = La = Fa = null;
          var n = es;
          es = !0;
          do {
            if (512 & t.effectTag) {
              var r = !1,
                i = void 0;
              try {
                var o = t;
                ha(Ri, Ti, o), ha(Ti, Ii, o)
              } catch (s) {
                r = !0, i = s
              }
              r && za(t, i)
            }
            t = t.nextEffect
          } while (null !== t);
          es = n, 0 !== (n = e.expirationTime) && bs(e, n)
        }.bind(null, e, r), La = br(k), Ma = k), ka = Da = !1, "function" ===
        typeof Wr && Wr(t.stateNode), k = t.expirationTime, 0 === (t = (t =
          t.childExpirationTime) > k ? t : k) && (ja = null), e.expirationTime =
        t, e.finishedWork = null
    }

    function Os(e) {
      null === ts && a("246"), ts.expirationTime = 0, is || (is = !0, os =
        e)
    }

    function Ns(e, t) {
      var n = as;
      as = !0;
      try {
        return e(t)
      } finally {
        (as = n) || es || Ts(1073741823, !1)
      }
    }

    function Is(e, t) {
      if (as && !ss) {
        ss = !0;
        try {
          return e(t)
        } finally {
          ss = !1
        }
      }
      return e(t)
    }

    function Rs(e, t, n) {
      if (us) return e(t, n);
      as || es || 0 === rs || (Ts(rs, !1), rs = 0);
      var r = us,
        i = as;
      as = us = !0;
      try {
        return e(t, n)
      } finally {
        us = r, (as = i) || es || Ts(1073741823, !1)
      }
    }

    function As(e, t, n, r, i) {
      var o = t.current;
      e: if (n) {
          t: {
            2 === tn(n = n._reactInternalFiber) && 1 === n.tag || a("170");
            var s = n;
            do {
              switch (s.tag) {
                case 3:
                  s = s.stateNode.context;
                  break t;
                case 1:
                  if (Ar(s.type)) {
                    s = s.stateNode.__reactInternalMemoizedMergedChildContext;
                    break t
                  }
              }
              s = s.return
            } while (null !== s);
            a("171"),
              s = void 0
          }
          if (1 === n.tag) {
            var u = n.type;
            if (Ar(u)) {
              n = Mr(n, u, s);
              break e
            }
          }
          n = s
        } else n = Pr;
      return null === t.context ? t.context = n : t.pendingContext = n, t =
        i, (i = $o(r)).payload = {
          element: e
        }, null !== (t = void 0 === t ? null : t) && (i.callback = t), Wa(),
        Xo(o, i), Ga(o, r), r
    }

    function Ds(e, t, n, r) {
      var i = t.current;
      return As(e, t, n, i = Qa(_s(), i), r)
    }

    function Fs(e) {
      if (!(e = e.current).child) return null;
      switch (e.child.tag) {
        case 5:
        default:
          return e.child.stateNode
      }
    }

    function Ls(e) {
      var t = 1073741822 - 25 * (1 + ((1073741822 - _s() + 500) / 25 | 0));
      t >= Ta && (t = Ta - 1), this._expirationTime = Ta = t, this._root =
        e, this._callbacks = this._next = null, this._hasChildren = this._didComplete = !
        1, this._children = null, this._defer = !0
    }

    function Ms() {
      this._callbacks = null, this._didCommit = !1, this._onCommit = this
        ._onCommit.bind(this)
    }

    function js(e, t, n) {
      e = {
        current: t = zr(3, null, null, t ? 3 : 0),
        containerInfo: e,
        pendingChildren: null,
        pingCache: null,
        earliestPendingTime: 0,
        latestPendingTime: 0,
        earliestSuspendedTime: 0,
        latestSuspendedTime: 0,
        latestPingedTime: 0,
        didError: !1,
        pendingCommitExpirationTime: 0,
        finishedWork: null,
        timeoutHandle: -1,
        context: null,
        pendingContext: null,
        hydrate: n,
        nextExpirationTimeToWorkOn: 0,
        expirationTime: 0,
        firstBatch: null,
        nextScheduledRoot: null
      }, this._internalRoot = t.stateNode = e
    }

    function Us(e) {
      return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType &&
        (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue)
      )
    }

    function Ws(e, t, n, r, i) {
      var o = n._reactRootContainer;
      if (o) {
        if ("function" === typeof i) {
          var a = i;
          i = function() {
            var e = Fs(o._internalRoot);
            a.call(e)
          }
        }
        null != e ? o.legacy_renderSubtreeIntoContainer(e, t, i) : o.render(
          t, i)
      } else {
        if (o = n._reactRootContainer = function(e, t) {
            if (t || (t = !(!(t = e ? 9 === e.nodeType ? e.documentElement :
                e.firstChild : null) || 1 !== t.nodeType || !t.hasAttribute(
                "data-reactroot"))), !t)
              for (var n; n = e.lastChild;) e.removeChild(n);
            return new js(e, !1, t)
          }(n, r), "function" === typeof i) {
          var s = i;
          i = function() {
            var e = Fs(o._internalRoot);
            s.call(e)
          }
        }
        Is(function() {
          null != e ? o.legacy_renderSubtreeIntoContainer(e, t, i) :
            o.render(t, i)
        })
      }
      return Fs(o._internalRoot)
    }

    function Vs(e, t) {
      var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[
        2] : null;
      return Us(t) || a("200"),
        function(e, t, n) {
          var r = 3 < arguments.length && void 0 !== arguments[3] ?
            arguments[3] : null;
          return {
            $$typeof: Ge,
            key: null == r ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n
          }
        }(e, t, null, n)
    }
    xe = function(e, t, n) {
      switch (t) {
        case "input":
          if (Et(e, n), t = n.name, "radio" === n.type && null != t) {
            for (n = e; n.parentNode;) n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify(
                "" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var i = j(r);
                i || a("90"), qe(r), Et(r, i)
              }
            }
          }
          break;
        case "textarea":
          Yn(e, n);
          break;
        case "select":
          null != (t = n.value) && Kn(e, !!n.multiple, t, !1)
      }
    }, Ls.prototype.render = function(e) {
      this._defer || a("250"), this._hasChildren = !0, this._children =
        e;
      var t = this._root._internalRoot,
        n = this._expirationTime,
        r = new Ms;
      return As(e, t, null, n, r._onCommit), r
    }, Ls.prototype.then = function(e) {
      if (this._didComplete) e();
      else {
        var t = this._callbacks;
        null === t && (t = this._callbacks = []), t.push(e)
      }
    }, Ls.prototype.commit = function() {
      var e = this._root._internalRoot,
        t = e.firstBatch;
      if (this._defer && null !== t || a("251"), this._hasChildren) {
        var n = this._expirationTime;
        if (t !== this) {
          this._hasChildren && (n = this._expirationTime = t._expirationTime,
            this.render(this._children));
          for (var r = null, i = t; i !== this;) r = i, i = i._next;
          null === r && a("251"), r._next = i._next, this._next = t, e.firstBatch =
            this
        }
        this._defer = !1, xs(e, n), t = this._next, this._next = null,
          null !== (t = e.firstBatch = t) && t._hasChildren && t.render(
            t._children)
      } else this._next = null, this._defer = !1
    }, Ls.prototype._onComplete = function() {
      if (!this._didComplete) {
        this._didComplete = !0;
        var e = this._callbacks;
        if (null !== e)
          for (var t = 0; t < e.length; t++)(0, e[t])()
      }
    }, Ms.prototype.then = function(e) {
      if (this._didCommit) e();
      else {
        var t = this._callbacks;
        null === t && (t = this._callbacks = []), t.push(e)
      }
    }, Ms.prototype._onCommit = function() {
      if (!this._didCommit) {
        this._didCommit = !0;
        var e = this._callbacks;
        if (null !== e)
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            "function" !== typeof n && a("191", n), n()
          }
      }
    }, js.prototype.render = function(e, t) {
      var n = this._internalRoot,
        r = new Ms;
      return null !== (t = void 0 === t ? null : t) && r.then(t), Ds(e,
        n, null, r._onCommit), r
    }, js.prototype.unmount = function(e) {
      var t = this._internalRoot,
        n = new Ms;
      return null !== (e = void 0 === e ? null : e) && n.then(e), Ds(
        null, t, null, n._onCommit), n
    }, js.prototype.legacy_renderSubtreeIntoContainer = function(e, t,
      n) {
      var r = this._internalRoot,
        i = new Ms;
      return null !== (n = void 0 === n ? null : n) && i.then(n), Ds(t,
        r, e, i._onCommit), i
    }, js.prototype.createBatch = function() {
      var e = new Ls(this),
        t = e._expirationTime,
        n = this._internalRoot,
        r = n.firstBatch;
      if (null === r) n.firstBatch = e, e._next = null;
      else {
        for (n = null; null !== r && r._expirationTime >= t;) n = r, r =
          r._next;
        e._next = r, null !== n && (n._next = e)
      }
      return e
    }, Re = Ns, Ae = Rs, De = function() {
      es || 0 === rs || (Ts(rs, !1), rs = 0)
    };
    var Bs = {
      createPortal: Vs,
      findDOMNode: function(e) {
        if (null == e) return null;
        if (1 === e.nodeType) return e;
        var t = e._reactInternalFiber;
        return void 0 === t && ("function" === typeof e.render ? a(
          "188") : a("268", Object.keys(e))), e = null === (e = rn(
          t)) ? null : e.stateNode
      },
      hydrate: function(e, t, n) {
        return Us(t) || a("200"), Ws(null, e, t, !0, n)
      },
      render: function(e, t, n) {
        return Us(t) || a("200"), Ws(null, e, t, !1, n)
      },
      unstable_renderSubtreeIntoContainer: function(e, t, n, r) {
        return Us(n) || a("200"), (null == e || void 0 === e._reactInternalFiber) &&
          a("38"), Ws(e, t, n, !1, r)
      },
      unmountComponentAtNode: function(e) {
        return Us(e) || a("40"), !!e._reactRootContainer && (Is(
          function() {
            Ws(null, null, e, !1, function() {
              e._reactRootContainer = null
            })
          }), !0)
      },
      unstable_createPortal: function() {
        return Vs.apply(void 0, arguments)
      },
      unstable_batchedUpdates: Ns,
      unstable_interactiveUpdates: Rs,
      flushSync: function(e, t) {
        es && a("187");
        var n = as;
        as = !0;
        try {
          return $a(e, t)
        } finally {
          as = n, Ts(1073741823, !1)
        }
      },
      unstable_createRoot: function(e, t) {
        return Us(e) || a("299", "unstable_createRoot"), new js(e, !0,
          null != t && !0 === t.hydrate)
      },
      unstable_flushControlled: function(e) {
        var t = as;
        as = !0;
        try {
          $a(e)
        } finally {
          (as = t) || es || Ts(1073741823, !1)
        }
      },
      __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
        Events: [L, M, j, O.injectEventPluginsByName, g, z, function(e) {
          x(e, q)
        }, Ne, Ie, Pn, I]
      }
    };
    ! function(e) {
      var t = e.findFiberByHostInstance;
      (function(e) {
        if ("undefined" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)
          return !1;
        var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (t.isDisabled || !t.supportsFiber) return !0;
        try {
          var n = t.inject(e);
          Wr = Br(function(e) {
            return t.onCommitFiberRoot(n, e)
          }), Vr = Br(function(e) {
            return t.onCommitFiberUnmount(n, e)
          })
        } catch (r) {}
      })(i({}, e, {
        overrideProps: null,
        currentDispatcherRef: ze.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
          return null === (e = rn(e)) ? null : e.stateNode
        },
        findFiberByHostInstance: function(e) {
          return t ? t(e) : null
        }
      }))
    }({
      findFiberByHostInstance: F,
      bundleType: 0,
      version: "16.8.1",
      rendererPackageName: "react-dom"
    });
    var qs = {
        default: Bs
      },
      zs = qs && Bs || qs;
    e.exports = zs.default || zs
  }, function(e, t, n) {
    "use strict";
    e.exports = n(66)
  }, function(e, t, n) {
    "use strict";
    (function(e) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = null,
        r = !1,
        i = 3,
        o = -1,
        a = -1,
        s = !1,
        u = !1;

      function l() {
        if (!s) {
          var e = n.expirationTime;
          u ? C() : u = !0, E(p, e)
        }
      }

      function c() {
        var e = n,
          t = n.next;
        if (n === t) n = null;
        else {
          var r = n.previous;
          n = r.next = t, t.previous = r
        }
        e.next = e.previous = null, r = e.callback, t = e.expirationTime,
          e = e.priorityLevel;
        var o = i,
          s = a;
        i = e, a = t;
        try {
          var u = r()
        } finally {
          i = o, a = s
        }
        if ("function" === typeof u)
          if (u = {
              callback: u,
              priorityLevel: e,
              expirationTime: t,
              next: null,
              previous: null
            }, null === n) n = u.next = u.previous = u;
          else {
            r = null, e = n;
            do {
              if (e.expirationTime >= t) {
                r = e;
                break
              }
              e = e.next
            } while (e !== n);
            null === r ? r = n : r === n && (n = u, l()), (t = r.previous)
              .next = r.previous = u, u.next = r, u.previous = t
          }
      }

      function f() {
        if (-1 === o && null !== n && 1 === n.priorityLevel) {
          s = !0;
          try {
            do {
              c()
            } while (null !== n && 1 === n.priorityLevel)
          } finally {
            s = !1, null !== n ? l() : u = !1
          }
        }
      }

      function p(e) {
        s = !0;
        var i = r;
        r = e;
        try {
          if (e)
            for (; null !== n;) {
              var o = t.unstable_now();
              if (!(n.expirationTime <= o)) break;
              do {
                c()
              } while (null !== n && n.expirationTime <= o)
            } else if (null !== n)
              do {
                c()
              } while (null !== n && !S())
        } finally {
          s = !1, r = i, null !== n ? l() : u = !1, f()
        }
      }
      var h, d, y = Date,
        v = "function" === typeof setTimeout ? setTimeout : void 0,
        m = "function" === typeof clearTimeout ? clearTimeout : void 0,
        g = "function" === typeof requestAnimationFrame ?
        requestAnimationFrame : void 0,
        _ = "function" === typeof cancelAnimationFrame ?
        cancelAnimationFrame : void 0;

      function b(e) {
        h = g(function(t) {
          m(d), e(t)
        }), d = v(function() {
          _(h), e(t.unstable_now())
        }, 100)
      }
      if ("object" === typeof performance && "function" === typeof performance
        .now) {
        var w = performance;
        t.unstable_now = function() {
          return w.now()
        }
      } else t.unstable_now = function() {
        return y.now()
      };
      var E, C, S, T = null;
      if ("undefined" !== typeof window ? T = window : "undefined" !==
        typeof e && (T = e), T && T._schedMock) {
        var x = T._schedMock;
        E = x[0], C = x[1], S = x[2], t.unstable_now = x[3]
      } else if ("undefined" === typeof window || "function" !== typeof MessageChannel) {
        var k = null,
          P = function(e) {
            if (null !== k) try {
              k(e)
            } finally {
              k = null
            }
          };
        E = function(e) {
          null !== k ? setTimeout(E, 0, e) : (k = e, setTimeout(P, 0, !
            1))
        }, C = function() {
          k = null
        }, S = function() {
          return !1
        }
      } else {
        "undefined" !== typeof console && ("function" !== typeof g &&
          console.error(
            "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"
          ), "function" !== typeof _ && console.error(
            "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"
          ));
        var O = null,
          N = !1,
          I = -1,
          R = !1,
          A = !1,
          D = 0,
          F = 33,
          L = 33;
        S = function() {
          return D <= t.unstable_now()
        };
        var M = new MessageChannel,
          j = M.port2;
        M.port1.onmessage = function() {
          N = !1;
          var e = O,
            n = I;
          O = null, I = -1;
          var r = t.unstable_now(),
            i = !1;
          if (0 >= D - r) {
            if (!(-1 !== n && n <= r)) return R || (R = !0, b(U)), O =
              e, void(I = n);
            i = !0
          }
          if (null !== e) {
            A = !0;
            try {
              e(i)
            } finally {
              A = !1
            }
          }
        };
        var U = function e(t) {
          if (null !== O) {
            b(e);
            var n = t - D + L;
            n < L && F < L ? (8 > n && (n = 8), L = n < F ? F : n) :
              F = n, D = t + L, N || (N = !0, j.postMessage(void 0))
          } else R = !1
        };
        E = function(e, t) {
          O = e, I = t, A || 0 > t ? j.postMessage(void 0) : R || (R = !
            0, b(U))
        }, C = function() {
          O = null, N = !1, I = -1
        }
      }
      t.unstable_ImmediatePriority = 1, t.unstable_UserBlockingPriority =
        2, t.unstable_NormalPriority = 3, t.unstable_IdlePriority = 5,
        t.unstable_LowPriority = 4, t.unstable_runWithPriority =
        function(e, n) {
          switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              break;
            default:
              e = 3
          }
          var r = i,
            a = o;
          i = e, o = t.unstable_now();
          try {
            return n()
          } finally {
            i = r, o = a, f()
          }
        }, t.unstable_scheduleCallback = function(e, r) {
          var a = -1 !== o ? o : t.unstable_now();
          if ("object" === typeof r && null !== r && "number" ===
            typeof r.timeout) r = a + r.timeout;
          else switch (i) {
            case 1:
              r = a + -1;
              break;
            case 2:
              r = a + 250;
              break;
            case 5:
              r = a + 1073741823;
              break;
            case 4:
              r = a + 1e4;
              break;
            default:
              r = a + 5e3
          }
          if (e = {
              callback: e,
              priorityLevel: i,
              expirationTime: r,
              next: null,
              previous: null
            }, null === n) n = e.next = e.previous = e, l();
          else {
            a = null;
            var s = n;
            do {
              if (s.expirationTime > r) {
                a = s;
                break
              }
              s = s.next
            } while (s !== n);
            null === a ? a = n : a === n && (n = e, l()), (r = a.previous)
              .next = a.previous = e, e.next = a, e.previous = r
          }
          return e
        }, t.unstable_cancelCallback = function(e) {
          var t = e.next;
          if (null !== t) {
            if (t === e) n = null;
            else {
              e === n && (n = t);
              var r = e.previous;
              r.next = t, t.previous = r
            }
            e.next = e.previous = null
          }
        }, t.unstable_wrapCallback = function(e) {
          var n = i;
          return function() {
            var r = i,
              a = o;
            i = n, o = t.unstable_now();
            try {
              return e.apply(this, arguments)
            } finally {
              i = r, o = a, f()
            }
          }
        }, t.unstable_getCurrentPriorityLevel = function() {
          return i
        }, t.unstable_shouldYield = function() {
          return !r && (null !== n && n.expirationTime < a || S())
        }, t.unstable_continueExecution = function() {
          null !== n && l()
        }, t.unstable_pauseExecution = function() {}, t.unstable_getFirstCallbackNode =
        function() {
          return n
        }
    }).call(this, n(21))
  }, , , function(e, t, n) {
    "use strict"
  }, function(e, t, n) {
    "use strict";
    n.r(t);
    n(71), n(72), n(75), n(80), n(82), n(87), n(92), n(95), n(107)
  }, function(e, t) {
    ! function(e) {
      "use strict";
      if (!e.fetch) {
        var t = {
          searchParams: "URLSearchParams" in e,
          iterable: "Symbol" in e && "iterator" in Symbol,
          blob: "FileReader" in e && "Blob" in e && function() {
            try {
              return new Blob, !0
            } catch (e) {
              return !1
            }
          }(),
          formData: "FormData" in e,
          arrayBuffer: "ArrayBuffer" in e
        };
        if (t.arrayBuffer) var n = ["[object Int8Array]",
            "[object Uint8Array]", "[object Uint8ClampedArray]",
            "[object Int16Array]", "[object Uint16Array]",
            "[object Int32Array]", "[object Uint32Array]",
            "[object Float32Array]", "[object Float64Array]"
          ],
          r = function(e) {
            return e && DataView.prototype.isPrototypeOf(e)
          },
          i = ArrayBuffer.isView || function(e) {
            return e && n.indexOf(Object.prototype.toString.call(e)) >
              -1
          };
        c.prototype.append = function(e, t) {
          e = s(e), t = u(t);
          var n = this.map[e];
          this.map[e] = n ? n + "," + t : t
        }, c.prototype.delete = function(e) {
          delete this.map[s(e)]
        }, c.prototype.get = function(e) {
          return e = s(e), this.has(e) ? this.map[e] : null
        }, c.prototype.has = function(e) {
          return this.map.hasOwnProperty(s(e))
        }, c.prototype.set = function(e, t) {
          this.map[s(e)] = u(t)
        }, c.prototype.forEach = function(e, t) {
          for (var n in this.map) this.map.hasOwnProperty(n) && e.call(
            t, this.map[n], n, this)
        }, c.prototype.keys = function() {
          var e = [];
          return this.forEach(function(t, n) {
            e.push(n)
          }), l(e)
        }, c.prototype.values = function() {
          var e = [];
          return this.forEach(function(t) {
            e.push(t)
          }), l(e)
        }, c.prototype.entries = function() {
          var e = [];
          return this.forEach(function(t, n) {
            e.push([n, t])
          }), l(e)
        }, t.iterable && (c.prototype[Symbol.iterator] = c.prototype.entries);
        var o = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
        v.prototype.clone = function() {
            return new v(this, {
              body: this._bodyInit
            })
          }, y.call(v.prototype), y.call(_.prototype), _.prototype.clone =
          function() {
            return new _(this._bodyInit, {
              status: this.status,
              statusText: this.statusText,
              headers: new c(this.headers),
              url: this.url
            })
          }, _.error = function() {
            var e = new _(null, {
              status: 0,
              statusText: ""
            });
            return e.type = "error", e
          };
        var a = [301, 302, 303, 307, 308];
        _.redirect = function(e, t) {
            if (-1 === a.indexOf(t)) throw new RangeError(
              "Invalid status code");
            return new _(null, {
              status: t,
              headers: {
                location: e
              }
            })
          }, e.Headers = c, e.Request = v, e.Response = _, e.fetch =
          function(e, n) {
            return new Promise(function(r, i) {
              var o = new v(e, n),
                a = new XMLHttpRequest;
              a.onload = function() {
                  var e = {
                    status: a.status,
                    statusText: a.statusText,
                    headers: g(a.getAllResponseHeaders() || "")
                  };
                  e.url = "responseURL" in a ? a.responseURL : e.headers
                    .get("X-Request-URL");
                  var t = "response" in a ? a.response : a.responseText;
                  r(new _(t, e))
                }, a.onerror = function() {
                  i(new TypeError("Network request failed"))
                }, a.ontimeout = function() {
                  i(new TypeError("Network request failed"))
                }, a.open(o.method, o.url, !0), "include" === o.credentials ?
                a.withCredentials = !0 : "omit" === o.credentials &&
                (a.withCredentials = !1), "responseType" in a && t.blob &&
                (a.responseType = "blob"), o.headers.forEach(function(
                  e, t) {
                  a.setRequestHeader(t, e)
                }), a.send("undefined" === typeof o._bodyInit ? null :
                  o._bodyInit)
            })
          }, e.fetch.polyfill = !0
      }

      function s(e) {
        if ("string" !== typeof e && (e = String(e)),
          /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e)) throw new TypeError(
          "Invalid character in header field name");
        return e.toLowerCase()
      }

      function u(e) {
        return "string" !== typeof e && (e = String(e)), e
      }

      function l(e) {
        var n = {
          next: function() {
            var t = e.shift();
            return {
              done: void 0 === t,
              value: t
            }
          }
        };
        return t.iterable && (n[Symbol.iterator] = function() {
          return n
        }), n
      }

      function c(e) {
        this.map = {}, e instanceof c ? e.forEach(function(e, t) {
          this.append(t, e)
        }, this) : Array.isArray(e) ? e.forEach(function(e) {
          this.append(e[0], e[1])
        }, this) : e && Object.getOwnPropertyNames(e).forEach(function(
          t) {
          this.append(t, e[t])
        }, this)
      }

      function f(e) {
        if (e.bodyUsed) return Promise.reject(new TypeError(
          "Already read"));
        e.bodyUsed = !0
      }

      function p(e) {
        return new Promise(function(t, n) {
          e.onload = function() {
            t(e.result)
          }, e.onerror = function() {
            n(e.error)
          }
        })
      }

      function h(e) {
        var t = new FileReader,
          n = p(t);
        return t.readAsArrayBuffer(e), n
      }

      function d(e) {
        if (e.slice) return e.slice(0);
        var t = new Uint8Array(e.byteLength);
        return t.set(new Uint8Array(e)), t.buffer
      }

      function y() {
        return this.bodyUsed = !1, this._initBody = function(e) {
          if (this._bodyInit = e, e)
            if ("string" === typeof e) this._bodyText = e;
            else if (t.blob && Blob.prototype.isPrototypeOf(e)) this._bodyBlob =
            e;
          else if (t.formData && FormData.prototype.isPrototypeOf(e))
            this._bodyFormData = e;
          else if (t.searchParams && URLSearchParams.prototype.isPrototypeOf(
              e)) this._bodyText = e.toString();
          else if (t.arrayBuffer && t.blob && r(e)) this._bodyArrayBuffer =
            d(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer]);
          else {
            if (!t.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(
                e) && !i(e)) throw new Error(
              "unsupported BodyInit type");
            this._bodyArrayBuffer = d(e)
          } else this._bodyText = "";
          this.headers.get("content-type") || ("string" === typeof e ?
            this.headers.set("content-type",
              "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob
            .type ? this.headers.set("content-type", this._bodyBlob.type) :
            t.searchParams && URLSearchParams.prototype.isPrototypeOf(
              e) && this.headers.set("content-type",
              "application/x-www-form-urlencoded;charset=UTF-8"))
        }, t.blob && (this.blob = function() {
          var e = f(this);
          if (e) return e;
          if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
          if (this._bodyArrayBuffer) return Promise.resolve(new Blob(
            [this._bodyArrayBuffer]));
          if (this._bodyFormData) throw new Error(
            "could not read FormData body as blob");
          return Promise.resolve(new Blob([this._bodyText]))
        }, this.arrayBuffer = function() {
          return this._bodyArrayBuffer ? f(this) || Promise.resolve(
            this._bodyArrayBuffer) : this.blob().then(h)
        }), this.text = function() {
          var e = f(this);
          if (e) return e;
          if (this._bodyBlob) return function(e) {
            var t = new FileReader,
              n = p(t);
            return t.readAsText(e), n
          }(this._bodyBlob);
          if (this._bodyArrayBuffer) return Promise.resolve(function(e) {
            for (var t = new Uint8Array(e), n = new Array(t.length),
                r = 0; r < t.length; r++) n[r] = String.fromCharCode(
              t[r]);
            return n.join("")
          }(this._bodyArrayBuffer));
          if (this._bodyFormData) throw new Error(
            "could not read FormData body as text");
          return Promise.resolve(this._bodyText)
        }, t.formData && (this.formData = function() {
          return this.text().then(m)
        }), this.json = function() {
          return this.text().then(JSON.parse)
        }, this
      }

      function v(e, t) {
        var n = (t = t || {}).body;
        if (e instanceof v) {
          if (e.bodyUsed) throw new TypeError("Already read");
          this.url = e.url, this.credentials = e.credentials, t.headers ||
            (this.headers = new c(e.headers)), this.method = e.method,
            this.mode = e.mode, n || null == e._bodyInit || (n = e._bodyInit,
              e.bodyUsed = !0)
        } else this.url = String(e);
        if (this.credentials = t.credentials || this.credentials ||
          "omit", !t.headers && this.headers || (this.headers = new c(t.headers)),
          this.method = function(e) {
            var t = e.toUpperCase();
            return o.indexOf(t) > -1 ? t : e
          }(t.method || this.method || "GET"), this.mode = t.mode || this
          .mode || null, this.referrer = null, ("GET" === this.method ||
            "HEAD" === this.method) && n) throw new TypeError(
          "Body not allowed for GET or HEAD requests");
        this._initBody(n)
      }

      function m(e) {
        var t = new FormData;
        return e.trim().split("&").forEach(function(e) {
          if (e) {
            var n = e.split("="),
              r = n.shift().replace(/\+/g, " "),
              i = n.join("=").replace(/\+/g, " ");
            t.append(decodeURIComponent(r), decodeURIComponent(i))
          }
        }), t
      }

      function g(e) {
        var t = new c;
        return e.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(
          function(e) {
            var n = e.split(":"),
              r = n.shift().trim();
            if (r) {
              var i = n.join(":").trim();
              t.append(r, i)
            }
          }), t
      }

      function _(e, t) {
        t || (t = {}), this.type = "default", this.status = void 0 === t.status ?
          200 : t.status, this.ok = this.status >= 200 && this.status <
          300, this.statusText = "statusText" in t ? t.statusText : "OK",
          this.headers = new c(t.headers), this.url = t.url || "", this._initBody(
            e)
      }
    }("undefined" !== typeof self ? self : this)
  }, function(e, t, n) {
    "use strict";
    (function(e, t) {
      var n = setTimeout;

      function r() {}

      function i(e) {
        if (!(this instanceof i)) throw new TypeError(
          "Promises must be constructed via new");
        if ("function" !== typeof e) throw new TypeError(
          "not a function");
        this._state = 0, this._handled = !1, this._value = void 0, this
          ._deferreds = [], c(e, this)
      }

      function o(e, t) {
        for (; 3 === e._state;) e = e._value;
        0 !== e._state ? (e._handled = !0, i._immediateFn(function() {
          var n = 1 === e._state ? t.onFulfilled : t.onRejected;
          if (null !== n) {
            var r;
            try {
              r = n(e._value)
            } catch (i) {
              return void s(t.promise, i)
            }
            a(t.promise, r)
          } else(1 === e._state ? a : s)(t.promise, e._value)
        })) : e._deferreds.push(t)
      }

      function a(e, t) {
        try {
          if (t === e) throw new TypeError(
            "A promise cannot be resolved with itself.");
          if (t && ("object" === typeof t || "function" === typeof t)) {
            var n = t.then;
            if (t instanceof i) return e._state = 3, e._value = t, void u(
              e);
            if ("function" === typeof n) return void c((r = n, o = t,
              function() {
                r.apply(o, arguments)
              }), e)
          }
          e._state = 1, e._value = t, u(e)
        } catch (a) {
          s(e, a)
        }
        var r, o
      }

      function s(e, t) {
        e._state = 2, e._value = t, u(e)
      }

      function u(e) {
        2 === e._state && 0 === e._deferreds.length && i._immediateFn(
          function() {
            e._handled || i._unhandledRejectionFn(e._value)
          });
        for (var t = 0, n = e._deferreds.length; t < n; t++) o(e, e._deferreds[
          t]);
        e._deferreds = null
      }

      function l(e, t, n) {
        this.onFulfilled = "function" === typeof e ? e : null, this.onRejected =
          "function" === typeof t ? t : null, this.promise = n
      }

      function c(e, t) {
        var n = !1;
        try {
          e(function(e) {
            n || (n = !0, a(t, e))
          }, function(e) {
            n || (n = !0, s(t, e))
          })
        } catch (r) {
          if (n) return;
          n = !0, s(t, r)
        }
      }
      i.prototype.catch = function(e) {
        return this.then(null, e)
      }, i.prototype.then = function(e, t) {
        var n = new this.constructor(r);
        return o(this, new l(e, t, n)), n
      }, i.prototype.finally = function(e) {
        var t = this.constructor;
        return this.then(function(n) {
          return t.resolve(e()).then(function() {
            return n
          })
        }, function(n) {
          return t.resolve(e()).then(function() {
            return t.reject(n)
          })
        })
      }, i.all = function(e) {
        return new i(function(t, n) {
          if (!e || "undefined" === typeof e.length) throw new TypeError(
            "Promise.all accepts an array");
          var r = Array.prototype.slice.call(e);
          if (0 === r.length) return t([]);
          var i = r.length;

          function o(e, a) {
            try {
              if (a && ("object" === typeof a || "function" ===
                  typeof a)) {
                var s = a.then;
                if ("function" === typeof s) return void s.call(a,
                  function(t) {
                    o(e, t)
                  }, n)
              }
              r[e] = a, 0 === --i && t(r)
            } catch (u) {
              n(u)
            }
          }
          for (var a = 0; a < r.length; a++) o(a, r[a])
        })
      }, i.resolve = function(e) {
        return e && "object" === typeof e && e.constructor === i ? e :
          new i(function(t) {
            t(e)
          })
      }, i.reject = function(e) {
        return new i(function(t, n) {
          n(e)
        })
      }, i.race = function(e) {
        return new i(function(t, n) {
          for (var r = 0, i = e.length; r < i; r++) e[r].then(t,
            n)
        })
      }, i._immediateFn = "function" === typeof e && function(t) {
        e(t)
      } || function(e) {
        n(e, 0)
      }, i._unhandledRejectionFn = function(e) {
        "undefined" !== typeof console && console && console.warn(
          "Possible Unhandled Promise Rejection:", e)
      };
      var f = function() {
        if ("undefined" !== typeof self) return self;
        if ("undefined" !== typeof window) return window;
        if ("undefined" !== typeof t) return t;
        throw new Error("unable to locate global object")
      }();
      f.Promise || (f.Promise = i)
    }).call(this, n(73).setImmediate, n(21))
  }, function(e, t, n) {
    (function(e) {
      var r = "undefined" !== typeof e && e || "undefined" !== typeof self &&
        self || window,
        i = Function.prototype.apply;

      function o(e, t) {
        this._id = e, this._clearFn = t
      }
      t.setTimeout = function() {
          return new o(i.call(setTimeout, r, arguments), clearTimeout)
        }, t.setInterval = function() {
          return new o(i.call(setInterval, r, arguments), clearInterval)
        }, t.clearTimeout = t.clearInterval = function(e) {
          e && e.close()
        }, o.prototype.unref = o.prototype.ref = function() {}, o.prototype
        .close = function() {
          this._clearFn.call(r, this._id)
        }, t.enroll = function(e, t) {
          clearTimeout(e._idleTimeoutId), e._idleTimeout = t
        }, t.unenroll = function(e) {
          clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
        }, t._unrefActive = t.active = function(e) {
          clearTimeout(e._idleTimeoutId);
          var t = e._idleTimeout;
          t >= 0 && (e._idleTimeoutId = setTimeout(function() {
            e._onTimeout && e._onTimeout()
          }, t))
        }, n(74), t.setImmediate = "undefined" !== typeof self && self.setImmediate ||
        "undefined" !== typeof e && e.setImmediate || this && this.setImmediate,
        t.clearImmediate = "undefined" !== typeof self && self.clearImmediate ||
        "undefined" !== typeof e && e.clearImmediate || this && this.clearImmediate
    }).call(this, n(21))
  }, function(e, t, n) {
    (function(e, t) {
      ! function(e, n) {
        "use strict";
        if (!e.setImmediate) {
          var r, i = 1,
            o = {},
            a = !1,
            s = e.document,
            u = Object.getPrototypeOf && Object.getPrototypeOf(e);
          u = u && u.setTimeout ? u : e, "[object process]" === {}.toString
            .call(e.process) ? r = function(e) {
              t.nextTick(function() {
                c(e)
              })
            } : function() {
              if (e.postMessage && !e.importScripts) {
                var t = !0,
                  n = e.onmessage;
                return e.onmessage = function() {
                  t = !1
                }, e.postMessage("", "*"), e.onmessage = n, t
              }
            }() ? function() {
              var t = "setImmediate$" + Math.random() + "$",
                n = function(n) {
                  n.source === e && "string" === typeof n.data && 0 ===
                    n.data.indexOf(t) && c(+n.data.slice(t.length))
                };
              e.addEventListener ? e.addEventListener("message", n, !1) :
                e.attachEvent("onmessage", n), r = function(n) {
                  e.postMessage(t + n, "*")
                }
            }() : e.MessageChannel ? function() {
              var e = new MessageChannel;
              e.port1.onmessage = function(e) {
                c(e.data)
              }, r = function(t) {
                e.port2.postMessage(t)
              }
            }() : s && "onreadystatechange" in s.createElement("script") ?
            function() {
              var e = s.documentElement;
              r = function(t) {
                var n = s.createElement("script");
                n.onreadystatechange = function() {
                  c(t), n.onreadystatechange = null, e.removeChild(
                    n), n = null
                }, e.appendChild(n)
              }
            }() : r = function(e) {
              setTimeout(c, 0, e)
            }, u.setImmediate = function(e) {
              "function" !== typeof e && (e = new Function("" + e));
              for (var t = new Array(arguments.length - 1), n = 0; n <
                t.length; n++) t[n] = arguments[n + 1];
              var a = {
                callback: e,
                args: t
              };
              return o[i] = a, r(i), i++
            }, u.clearImmediate = l
        }

        function l(e) {
          delete o[e]
        }

        function c(e) {
          if (a) setTimeout(c, 0, e);
          else {
            var t = o[e];
            if (t) {
              a = !0;
              try {
                ! function(e) {
                  var t = e.callback,
                    r = e.args;
                  switch (r.length) {
                    case 0:
                      t();
                      break;
                    case 1:
                      t(r[0]);
                      break;
                    case 2:
                      t(r[0], r[1]);
                      break;
                    case 3:
                      t(r[0], r[1], r[2]);
                      break;
                    default:
                      t.apply(n, r)
                  }
                }(t)
              } finally {
                l(e), a = !1
              }
            }
          }
        }
      }("undefined" === typeof self ? "undefined" === typeof e ? this :
        e : self)
    }).call(this, n(21), n(34))
  }, function(e, t, n) {
    n(76), e.exports = n(11).Array.find
  }, function(e, t, n) {
    "use strict";
    var r = n(12),
      i = n(53)(5),
      o = !0;
    "find" in [] && Array(1).find(function() {
      o = !1
    }), r(r.P + r.F * o, "Array", {
      find: function(e) {
        return i(this, e, arguments.length > 1 ? arguments[1] :
          void 0)
      }
    }), n(40)("find")
  }, function(e, t) {
    e.exports = function(e) {
      if ("function" != typeof e) throw TypeError(e +
        " is not a function!");
      return e
    }
  }, function(e, t, n) {
    var r = n(79);
    e.exports = function(e, t) {
      return new(r(e))(t)
    }
  }, function(e, t, n) {
    var r = n(14),
      i = n(54),
      o = n(9)("species");
    e.exports = function(e) {
      var t;
      return i(e) && ("function" != typeof(t = e.constructor) || t !==
        Array && !i(t.prototype) || (t = void 0), r(t) && null === (t =
          t[o]) && (t = void 0)), void 0 === t ? Array : t
    }
  }, function(e, t, n) {
    n(81), e.exports = n(11).Array.findIndex
  }, function(e, t, n) {
    "use strict";
    var r = n(12),
      i = n(53)(6),
      o = "findIndex",
      a = !0;
    o in [] && Array(1)[o](function() {
      a = !1
    }), r(r.P + r.F * a, "Array", {
      findIndex: function(e) {
        return i(this, e, arguments.length > 1 ? arguments[1] :
          void 0)
      }
    }), n(40)(o)
  }, function(e, t, n) {
    n(83), e.exports = n(11).Object.assign
  }, function(e, t, n) {
    var r = n(12);
    r(r.S + r.F, "Object", {
      assign: n(84)
    })
  }, function(e, t, n) {
    "use strict";
    var r = n(26),
      i = n(43),
      o = n(32),
      a = n(37),
      s = n(36),
      u = Object.assign;
    e.exports = !u || n(22)(function() {
      var e = {},
        t = {},
        n = Symbol(),
        r = "abcdefghijklmnopqrst";
      return e[n] = 7, r.split("").forEach(function(e) {
        t[e] = e
      }), 7 != u({}, e)[n] || Object.keys(u({}, t)).join("") != r
    }) ? function(e, t) {
      for (var n = a(e), u = arguments.length, l = 1, c = i.f, f = o.f; u >
        l;)
        for (var p, h = s(arguments[l++]), d = c ? r(h).concat(c(h)) :
            r(h), y = d.length, v = 0; y > v;) f.call(h, p = d[v++]) &&
          (n[p] = h[p]);
      return n
    } : u
  }, function(e, t, n) {
    var r = n(19),
      i = n(38),
      o = n(86);
    e.exports = function(e) {
      return function(t, n, a) {
        var s, u = r(t),
          l = i(u.length),
          c = o(a, l);
        if (e && n != n) {
          for (; l > c;)
            if ((s = u[c++]) != s) return !0
        } else
          for (; l > c; c++)
            if ((e || c in u) && u[c] === n) return e || c || 0;
        return !e && -1
      }
    }
  }, function(e, t, n) {
    var r = n(31),
      i = Math.max,
      o = Math.min;
    e.exports = function(e, t) {
      return (e = r(e)) < 0 ? i(e + t, 0) : o(e, t)
    }
  }, function(e, t, n) {
    n(88), e.exports = n(11).String.startsWith
  }, function(e, t, n) {
    "use strict";
    var r = n(12),
      i = n(38),
      o = n(89),
      a = "".startsWith;
    r(r.P + r.F * n(91)("startsWith"), "String", {
      startsWith: function(e) {
        var t = o(this, e, "startsWith"),
          n = i(Math.min(arguments.length > 1 ? arguments[1] : void 0,
            t.length)),
          r = String(e);
        return a ? a.call(t, r, n) : t.slice(n, n + r.length) === r
      }
    })
  }, function(e, t, n) {
    var r = n(90),
      i = n(25);
    e.exports = function(e, t, n) {
      if (r(t)) throw TypeError("String#" + n +
        " doesn't accept regex!");
      return String(i(e))
    }
  }, function(e, t, n) {
    var r = n(14),
      i = n(30),
      o = n(9)("match");
    e.exports = function(e) {
      var t;
      return r(e) && (void 0 !== (t = e[o]) ? !!t : "RegExp" == i(e))
    }
  }, function(e, t, n) {
    var r = n(9)("match");
    e.exports = function(e) {
      var t = /./;
      try {
        "/./" [e](t)
      } catch (n) {
        try {
          return t[r] = !1, !"/./" [e](t)
        } catch (i) {}
      }
      return !0
    }
  }, function(e, t, n) {
    n(93), e.exports = n(11).String.repeat
  }, function(e, t, n) {
    var r = n(12);
    r(r.P, "String", {
      repeat: n(94)
    })
  }, function(e, t, n) {
    "use strict";
    var r = n(31),
      i = n(25);
    e.exports = function(e) {
      var t = String(i(this)),
        n = "",
        o = r(e);
      if (o < 0 || o == 1 / 0) throw RangeError(
        "Count can't be negative");
      for (; o > 0;
        (o >>>= 1) && (t += t)) 1 & o && (n += t);
      return n
    }
  }, function(e, t, n) {
    n(96), n(103), n(105), n(106), e.exports = n(11).Symbol
  }, function(e, t, n) {
    "use strict";
    var r = n(10),
      i = n(15),
      o = n(18),
      a = n(12),
      s = n(23),
      u = n(97).KEY,
      l = n(22),
      c = n(39),
      f = n(44),
      p = n(24),
      h = n(9),
      d = n(45),
      y = n(46),
      v = n(98),
      m = n(54),
      g = n(28),
      _ = n(14),
      b = n(19),
      w = n(35),
      E = n(29),
      C = n(56),
      S = n(101),
      T = n(102),
      x = n(17),
      k = n(26),
      P = T.f,
      O = x.f,
      N = S.f,
      I = r.Symbol,
      R = r.JSON,
      A = R && R.stringify,
      D = h("_hidden"),
      F = h("toPrimitive"),
      L = {}.propertyIsEnumerable,
      M = c("symbol-registry"),
      j = c("symbols"),
      U = c("op-symbols"),
      W = Object.prototype,
      V = "function" == typeof I,
      B = r.QObject,
      q = !B || !B.prototype || !B.prototype.findChild,
      z = o && l(function() {
        return 7 != C(O({}, "a", {
          get: function() {
            return O(this, "a", {
              value: 7
            }).a
          }
        })).a
      }) ? function(e, t, n) {
        var r = P(W, t);
        r && delete W[t], O(e, t, n), r && e !== W && O(W, t, r)
      } : O,
      Q = function(e) {
        var t = j[e] = C(I.prototype);
        return t._k = e, t
      },
      H = V && "symbol" == typeof I.iterator ? function(e) {
        return "symbol" == typeof e
      } : function(e) {
        return e instanceof I
      },
      K = function(e, t, n) {
        return e === W && K(U, t, n), g(e), t = w(t, !0), g(n), i(j, t) ?
          (n.enumerable ? (i(e, D) && e[D][t] && (e[D][t] = !1), n = C(n, {
            enumerable: E(0, !1)
          })) : (i(e, D) || O(e, D, E(1, {})), e[D][t] = !0), z(e, t, n)) :
          O(e, t, n)
      },
      G = function(e, t) {
        g(e);
        for (var n, r = v(t = b(t)), i = 0, o = r.length; o > i;) K(e, n =
          r[i++], t[n]);
        return e
      },
      $ = function(e) {
        var t = L.call(this, e = w(e, !0));
        return !(this === W && i(j, e) && !i(U, e)) && (!(t || !i(this, e) ||
          !i(j, e) || i(this, D) && this[D][e]) || t)
      },
      Y = function(e, t) {
        if (e = b(e), t = w(t, !0), e !== W || !i(j, t) || i(U, t)) {
          var n = P(e, t);
          return !n || !i(j, t) || i(e, D) && e[D][t] || (n.enumerable = !
            0), n
        }
      },
      X = function(e) {
        for (var t, n = N(b(e)), r = [], o = 0; n.length > o;) i(j, t = n[
          o++]) || t == D || t == u || r.push(t);
        return r
      },
      J = function(e) {
        for (var t, n = e === W, r = N(n ? U : b(e)), o = [], a = 0; r.length >
          a;) !i(j, t = r[a++]) || n && !i(W, t) || o.push(j[t]);
        return o
      };
    V || (s((I = function() {
        if (this instanceof I) throw TypeError(
          "Symbol is not a constructor!");
        var e = p(arguments.length > 0 ? arguments[0] : void 0);
        return o && q && z(W, e, {
          configurable: !0,
          set: function t(n) {
            this === W && t.call(U, n), i(this, D) && i(this[
              D], e) && (this[D][e] = !1), z(this, e, E(1,
              n))
          }
        }), Q(e)
      }).prototype, "toString", function() {
        return this._k
      }), T.f = Y, x.f = K, n(57).f = S.f = X, n(32).f = $, n(43).f = J,
      o && !n(47) && s(W, "propertyIsEnumerable", $, !0), d.f =
      function(e) {
        return Q(h(e))
      }), a(a.G + a.W + a.F * !V, {
      Symbol: I
    });
    for (var Z =
        "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables"
        .split(","), ee = 0; Z.length > ee;) h(Z[ee++]);
    for (var te = k(h.store), ne = 0; te.length > ne;) y(te[ne++]);
    a(a.S + a.F * !V, "Symbol", {
      for: function(e) {
        return i(M, e += "") ? M[e] : M[e] = I(e)
      },
      keyFor: function(e) {
        if (!H(e)) throw TypeError(e + " is not a symbol!");
        for (var t in M)
          if (M[t] === e) return t
      },
      useSetter: function() {
        q = !0
      },
      useSimple: function() {
        q = !1
      }
    }), a(a.S + a.F * !V, "Object", {
      create: function(e, t) {
        return void 0 === t ? C(e) : G(C(e), t)
      },
      defineProperty: K,
      defineProperties: G,
      getOwnPropertyDescriptor: Y,
      getOwnPropertyNames: X,
      getOwnPropertySymbols: J
    }), R && a(a.S + a.F * (!V || l(function() {
      var e = I();
      return "[null]" != A([e]) || "{}" != A({
        a: e
      }) || "{}" != A(Object(e))
    })), "JSON", {
      stringify: function(e) {
        for (var t, n, r = [e], i = 1; arguments.length > i;) r.push(
          arguments[i++]);
        if (n = t = r[1], (_(t) || void 0 !== e) && !H(e)) return m(
          t) || (t = function(e, t) {
          if ("function" == typeof n && (t = n.call(this, e,
              t)), !H(t)) return t
        }), r[1] = t, A.apply(R, r)
      }
    }), I.prototype[F] || n(13)(I.prototype, F, I.prototype.valueOf), f(
      I, "Symbol"), f(Math, "Math", !0), f(r.JSON, "JSON", !0)
  }, function(e, t, n) {
    var r = n(24)("meta"),
      i = n(14),
      o = n(15),
      a = n(17).f,
      s = 0,
      u = Object.isExtensible || function() {
        return !0
      },
      l = !n(22)(function() {
        return u(Object.preventExtensions({}))
      }),
      c = function(e) {
        a(e, r, {
          value: {
            i: "O" + ++s,
            w: {}
          }
        })
      },
      f = e.exports = {
        KEY: r,
        NEED: !1,
        fastKey: function(e, t) {
          if (!i(e)) return "symbol" == typeof e ? e : ("string" ==
            typeof e ? "S" : "P") + e;
          if (!o(e, r)) {
            if (!u(e)) return "F";
            if (!t) return "E";
            c(e)
          }
          return e[r].i
        },
        getWeak: function(e, t) {
          if (!o(e, r)) {
            if (!u(e)) return !0;
            if (!t) return !1;
            c(e)
          }
          return e[r].w
        },
        onFreeze: function(e) {
          return l && f.NEED && u(e) && !o(e, r) && c(e), e
        }
      }
  }, function(e, t, n) {
    var r = n(26),
      i = n(43),
      o = n(32);
    e.exports = function(e) {
      var t = r(e),
        n = i.f;
      if (n)
        for (var a, s = n(e), u = o.f, l = 0; s.length > l;) u.call(e,
          a = s[l++]) && t.push(a);
      return t
    }
  }, function(e, t, n) {
    var r = n(17),
      i = n(28),
      o = n(26);
    e.exports = n(18) ? Object.defineProperties : function(e, t) {
      i(e);
      for (var n, a = o(t), s = a.length, u = 0; s > u;) r.f(e, n = a[u++],
        t[n]);
      return e
    }
  }, function(e, t, n) {
    var r = n(10).document;
    e.exports = r && r.documentElement
  }, function(e, t, n) {
    var r = n(19),
      i = n(57).f,
      o = {}.toString,
      a = "object" == typeof window && window && Object.getOwnPropertyNames ?
      Object.getOwnPropertyNames(window) : [];
    e.exports.f = function(e) {
      return a && "[object Window]" == o.call(e) ? function(e) {
        try {
          return i(e)
        } catch (t) {
          return a.slice()
        }
      }(e) : i(r(e))
    }
  }, function(e, t, n) {
    var r = n(32),
      i = n(29),
      o = n(19),
      a = n(35),
      s = n(15),
      u = n(50),
      l = Object.getOwnPropertyDescriptor;
    t.f = n(18) ? l : function(e, t) {
      if (e = o(e), t = a(t, !0), u) try {
        return l(e, t)
      } catch (n) {}
      if (s(e, t)) return i(!r.f.call(e, t), e[t])
    }
  }, function(e, t, n) {
    "use strict";
    var r = n(104),
      i = {};
    i[n(9)("toStringTag")] = "z", i + "" != "[object z]" && n(23)(Object.prototype,
      "toString",
      function() {
        return "[object " + r(this) + "]"
      }, !0)
  }, function(e, t, n) {
    var r = n(30),
      i = n(9)("toStringTag"),
      o = "Arguments" == r(function() {
        return arguments
      }());
    e.exports = function(e) {
      var t, n, a;
      return void 0 === e ? "Undefined" : null === e ? "Null" :
        "string" == typeof(n = function(e, t) {
          try {
            return e[t]
          } catch (n) {}
        }(t = Object(e), i)) ? n : o ? r(t) : "Object" == (a = r(t)) &&
        "function" == typeof t.callee ? "Arguments" : a
    }
  }, function(e, t, n) {
    n(46)("asyncIterator")
  }, function(e, t, n) {
    n(46)("observable")
  }, function(e, t, n) {
    n(108), n(112), e.exports = n(45).f("iterator")
  }, function(e, t, n) {
    "use strict";
    var r = n(109)(!0);
    n(58)(String, "String", function(e) {
      this._t = String(e), this._i = 0
    }, function() {
      var e, t = this._t,
        n = this._i;
      return n >= t.length ? {
        value: void 0,
        done: !0
      } : (e = r(t, n), this._i += e.length, {
        value: e,
        done: !1
      })
    })
  }, function(e, t, n) {
    var r = n(31),
      i = n(25);
    e.exports = function(e) {
      return function(t, n) {
        var o, a, s = String(i(t)),
          u = r(n),
          l = s.length;
        return u < 0 || u >= l ? e ? "" : void 0 : (o = s.charCodeAt(
            u)) < 55296 || o > 56319 || u + 1 === l || (a = s.charCodeAt(
            u + 1)) < 56320 || a > 57343 ? e ? s.charAt(u) : o : e ?
          s.slice(u, u + 2) : a - 56320 + (o - 55296 << 10) + 65536
      }
    }
  }, function(e, t, n) {
    "use strict";
    var r = n(56),
      i = n(29),
      o = n(44),
      a = {};
    n(13)(a, n(9)("iterator"), function() {
      return this
    }), e.exports = function(e, t, n) {
      e.prototype = r(a, {
        next: i(1, n)
      }), o(e, t + " Iterator")
    }
  }, function(e, t, n) {
    var r = n(15),
      i = n(37),
      o = n(41)("IE_PROTO"),
      a = Object.prototype;
    e.exports = Object.getPrototypeOf || function(e) {
      return e = i(e), r(e, o) ? e[o] : "function" == typeof e.constructor &&
        e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ?
        a : null
    }
  }, function(e, t, n) {
    for (var r = n(113), i = n(26), o = n(23), a = n(10), s = n(13), u =
        n(48), l = n(9), c = l("iterator"), f = l("toStringTag"), p = u.Array,
        h = {
          CSSRuleList: !0,
          CSSStyleDeclaration: !1,
          CSSValueList: !1,
          ClientRectList: !1,
          DOMRectList: !1,
          DOMStringList: !1,
          DOMTokenList: !0,
          DataTransferItemList: !1,
          FileList: !1,
          HTMLAllCollection: !1,
          HTMLCollection: !1,
          HTMLFormElement: !1,
          HTMLSelectElement: !1,
          MediaList: !0,
          MimeTypeArray: !1,
          NamedNodeMap: !1,
          NodeList: !0,
          PaintRequestList: !1,
          Plugin: !1,
          PluginArray: !1,
          SVGLengthList: !1,
          SVGNumberList: !1,
          SVGPathSegList: !1,
          SVGPointList: !1,
          SVGStringList: !1,
          SVGTransformList: !1,
          SourceBufferList: !1,
          StyleSheetList: !0,
          TextTrackCueList: !1,
          TextTrackList: !1,
          TouchList: !1
        }, d = i(h), y = 0; y < d.length; y++) {
      var v, m = d[y],
        g = h[m],
        _ = a[m],
        b = _ && _.prototype;
      if (b && (b[c] || s(b, c, p), b[f] || s(b, f, m), u[m] = p, g))
        for (v in r) b[v] || o(b, v, r[v], !0)
    }
  }, function(e, t, n) {
    "use strict";
    var r = n(40),
      i = n(114),
      o = n(48),
      a = n(19);
    e.exports = n(58)(Array, "Array", function(e, t) {
      this._t = a(e), this._i = 0, this._k = t
    }, function() {
      var e = this._t,
        t = this._k,
        n = this._i++;
      return !e || n >= e.length ? (this._t = void 0, i(1)) : i(0,
        "keys" == t ? n : "values" == t ? e[n] : [n, e[n]])
    }, "values"), o.Arguments = o.Array, r("keys"), r("values"), r(
      "entries")
  }, function(e, t) {
    e.exports = function(e, t) {
      return {
        value: t,
        done: !!e
      }
    }
  }, function(e, t, n) {
    "use strict";
    n(116)
  }, function(e, t, n) {
    "use strict";
    (function(r) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var i, o = n(60),
        a = n(117),
        s = n(61),
        u = (i = n(59)) && "object" === typeof i && "default" in i ? i.default :
        i,
        l = function() {
          function e(e) {
            this.domStorage_ = e, this.prefix_ = "firebase:"
          }
          return e.prototype.set = function(e, t) {
            null == t ? this.domStorage_.removeItem(this.prefixedName_(
              e)) : this.domStorage_.setItem(this.prefixedName_(e),
              o.stringify(t))
          }, e.prototype.get = function(e) {
            var t = this.domStorage_.getItem(this.prefixedName_(e));
            return null == t ? null : o.jsonEval(t)
          }, e.prototype.remove = function(e) {
            this.domStorage_.removeItem(this.prefixedName_(e))
          }, e.prototype.prefixedName_ = function(e) {
            return this.prefix_ + e
          }, e.prototype.toString = function() {
            return this.domStorage_.toString()
          }, e
        }(),
        c = function() {
          function e() {
            this.cache_ = {}, this.isInMemoryStorage = !0
          }
          return e.prototype.set = function(e, t) {
            null == t ? delete this.cache_[e] : this.cache_[e] = t
          }, e.prototype.get = function(e) {
            return o.contains(this.cache_, e) ? this.cache_[e] : null
          }, e.prototype.remove = function(e) {
            delete this.cache_[e]
          }, e
        }(),
        f = function(e) {
          try {
            if ("undefined" !== typeof window && "undefined" !== typeof window[
                e]) {
              var t = window[e];
              return t.setItem("firebase:sentinel", "cache"), t.removeItem(
                "firebase:sentinel"), new l(t)
            }
          } catch (n) {}
          return new c
        },
        p = f("localStorage"),
        h = f("sessionStorage"),
        d = new a.Logger("@firebase/database"),
        y = function() {
          var e = 1;
          return function() {
            return e++
          }
        }(),
        v = function(e) {
          var t = o.stringToByteArray(e),
            n = new o.Sha1;
          n.update(t);
          var r = n.digest();
          return o.base64.encodeByteArray(r)
        },
        m = function e() {
          for (var t = [], n = 0; n < arguments.length; n++) t[n] =
            arguments[n];
          for (var r = "", i = 0; i < t.length; i++) Array.isArray(t[i]) ||
            t[i] && "object" === typeof t[i] && "number" === typeof t[i]
            .length ? r += e.apply(null, t[i]) : "object" === typeof t[
              i] ? r += o.stringify(t[i]) : r += t[i], r += " ";
          return r
        },
        g = null,
        _ = !0,
        b = function(e, t) {
          o.assert(!t || !0 === e || !1 === e,
              "Can't turn on custom loggers persistently."), !0 === e ?
            (d.logLevel = a.LogLevel.VERBOSE, g = d.log.bind(d), t && h
              .set("logging_enabled", !0)) : "function" === typeof e ?
            g = e : (g = null, h.remove("logging_enabled"))
        },
        w = function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] =
            arguments[t];
          if (!0 === _ && (_ = !1, null === g && !0 === h.get(
              "logging_enabled") && b(!0)), g) {
            var n = m.apply(null, e);
            g(n)
          }
        },
        E = function(e) {
          return function() {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] =
              arguments[n];
            w.apply(void 0, [e].concat(t))
          }
        },
        C = function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] =
            arguments[t];
          var n = "FIREBASE INTERNAL ERROR: " + m.apply(void 0, e);
          d.error(n)
        },
        S = function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] =
            arguments[t];
          var n = "FIREBASE FATAL ERROR: " + m.apply(void 0, e);
          throw d.error(n), new Error(n)
        },
        T = function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] =
            arguments[t];
          var n = "FIREBASE WARNING: " + m.apply(void 0, e);
          d.warn(n)
        },
        x = function(e) {
          return "number" === typeof e && (e != e || e == Number.POSITIVE_INFINITY ||
            e == Number.NEGATIVE_INFINITY)
        },
        k = "[MIN_NAME]",
        P = "[MAX_NAME]",
        O = function(e, t) {
          if (e === t) return 0;
          if (e === k || t === P) return -1;
          if (t === k || e === P) return 1;
          var n = M(e),
            r = M(t);
          return null !== n ? null !== r ? n - r == 0 ? e.length - t.length :
            n - r : -1 : null !== r ? 1 : e < t ? -1 : 1
        },
        N = function(e, t) {
          return e === t ? 0 : e < t ? -1 : 1
        },
        I = function(e, t) {
          if (t && e in t) return t[e];
          throw new Error("Missing required key (" + e +
            ") in object: " + o.stringify(t))
        },
        R = function e(t) {
          if ("object" !== typeof t || null === t) return o.stringify(t);
          var n = [];
          for (var r in t) n.push(r);
          n.sort();
          for (var i = "{", a = 0; a < n.length; a++) 0 !== a && (i +=
            ","), i += o.stringify(n[a]), i += ":", i += e(t[n[a]]);
          return i += "}"
        },
        A = function(e, t) {
          var n = e.length;
          if (n <= t) return [e];
          for (var r = [], i = 0; i < n; i += t) i + t > n ? r.push(e.substring(
            i, n)) : r.push(e.substring(i, i + t));
          return r
        },
        D = function(e, t) {
          if (Array.isArray(e))
            for (var n = 0; n < e.length; ++n) t(n, e[n]);
          else o.forEach(e, function(e, n) {
            return t(n, e)
          })
        },
        F = function(e) {
          o.assert(!x(e), "Invalid JSON number");
          var t, n, r, i, a, s, u;
          for (0 === e ? (n = 0, r = 0, t = 1 / e === -1 / 0 ? 1 : 0) :
            (t = e < 0, (e = Math.abs(e)) >= Math.pow(2, -1022) ? (n =
              (i = Math.min(Math.floor(Math.log(e) / Math.LN2), 1023)) +
              1023, r = Math.round(e * Math.pow(2, 52 - i) - Math.pow(
                2, 52))) : (n = 0, r = Math.round(e / Math.pow(2, -
              1074)))), s = [], a = 52; a; a -= 1) s.push(r % 2 ? 1 : 0),
            r = Math.floor(r / 2);
          for (a = 11; a; a -= 1) s.push(n % 2 ? 1 : 0), n = Math.floor(
            n / 2);
          s.push(t ? 1 : 0), s.reverse(), u = s.join("");
          var l = "";
          for (a = 0; a < 64; a += 8) {
            var c = parseInt(u.substr(a, 8), 2).toString(16);
            1 === c.length && (c = "0" + c), l += c
          }
          return l.toLowerCase()
        },
        L = new RegExp("^-?\\d{1,10}$"),
        M = function(e) {
          if (L.test(e)) {
            var t = Number(e);
            if (t >= -2147483648 && t <= 2147483647) return t
          }
          return null
        },
        j = function(e) {
          try {
            e()
          } catch (t) {
            setTimeout(function() {
              var e = t.stack || "";
              throw T("Exception was thrown by user callback.", e),
                t
            }, Math.floor(0))
          }
        },
        U = function() {
          return ("object" === typeof window && window.navigator &&
            window.navigator.userAgent || "").search(
            /googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i
          ) >= 0
        },
        W = function(e, t) {
          var n = setTimeout(e, t);
          return "object" === typeof n && n.unref && n.unref(), n
        },
        V = function() {
          function e(e, t) {
            if (void 0 === t) {
              this.pieces_ = e.split("/");
              for (var n = 0, r = 0; r < this.pieces_.length; r++) this
                .pieces_[r].length > 0 && (this.pieces_[n] = this.pieces_[
                  r], n++);
              this.pieces_.length = n, this.pieceNum_ = 0
            } else this.pieces_ = e, this.pieceNum_ = t
          }
          return Object.defineProperty(e, "Empty", {
            get: function() {
              return new e("")
            },
            enumerable: !0,
            configurable: !0
          }), e.prototype.getFront = function() {
            return this.pieceNum_ >= this.pieces_.length ? null :
              this.pieces_[this.pieceNum_]
          }, e.prototype.getLength = function() {
            return this.pieces_.length - this.pieceNum_
          }, e.prototype.popFront = function() {
            var t = this.pieceNum_;
            return t < this.pieces_.length && t++, new e(this.pieces_,
              t)
          }, e.prototype.getBack = function() {
            return this.pieceNum_ < this.pieces_.length ? this.pieces_[
              this.pieces_.length - 1] : null
          }, e.prototype.toString = function() {
            for (var e = "", t = this.pieceNum_; t < this.pieces_.length; t++)
              "" !== this.pieces_[t] && (e += "/" + this.pieces_[t]);
            return e || "/"
          }, e.prototype.toUrlEncodedString = function() {
            for (var e = "", t = this.pieceNum_; t < this.pieces_.length; t++)
              "" !== this.pieces_[t] && (e += "/" +
                encodeURIComponent(String(this.pieces_[t])));
            return e || "/"
          }, e.prototype.slice = function(e) {
            return void 0 === e && (e = 0), this.pieces_.slice(this.pieceNum_ +
              e)
          }, e.prototype.parent = function() {
            if (this.pieceNum_ >= this.pieces_.length) return null;
            for (var t = [], n = this.pieceNum_; n < this.pieces_.length -
              1; n++) t.push(this.pieces_[n]);
            return new e(t, 0)
          }, e.prototype.child = function(t) {
            for (var n = [], r = this.pieceNum_; r < this.pieces_.length; r++)
              n.push(this.pieces_[r]);
            if (t instanceof e)
              for (r = t.pieceNum_; r < t.pieces_.length; r++) n.push(
                t.pieces_[r]);
            else {
              var i = t.split("/");
              for (r = 0; r < i.length; r++) i[r].length > 0 && n.push(
                i[r])
            }
            return new e(n, 0)
          }, e.prototype.isEmpty = function() {
            return this.pieceNum_ >= this.pieces_.length
          }, e.relativePath = function(t, n) {
            var r = t.getFront(),
              i = n.getFront();
            if (null === r) return n;
            if (r === i) return e.relativePath(t.popFront(), n.popFront());
            throw new Error("INTERNAL ERROR: innerPath (" + n +
              ") is not within outerPath (" + t + ")")
          }, e.comparePaths = function(e, t) {
            for (var n = e.slice(), r = t.slice(), i = 0; i < n.length &&
              i < r.length; i++) {
              var o = O(n[i], r[i]);
              if (0 !== o) return o
            }
            return n.length === r.length ? 0 : n.length < r.length ?
              -1 : 1
          }, e.prototype.equals = function(e) {
            if (this.getLength() !== e.getLength()) return !1;
            for (var t = this.pieceNum_, n = e.pieceNum_; t <= this.pieces_
              .length; t++, n++)
              if (this.pieces_[t] !== e.pieces_[n]) return !1;
            return !0
          }, e.prototype.contains = function(e) {
            var t = this.pieceNum_,
              n = e.pieceNum_;
            if (this.getLength() > e.getLength()) return !1;
            for (; t < this.pieces_.length;) {
              if (this.pieces_[t] !== e.pieces_[n]) return !1;
              ++t, ++n
            }
            return !0
          }, e
        }(),
        B = function() {
          function e(e, t) {
            this.errorPrefix_ = t, this.parts_ = e.slice(), this.byteLength_ =
              Math.max(1, this.parts_.length);
            for (var n = 0; n < this.parts_.length; n++) this.byteLength_ +=
              o.stringLength(this.parts_[n]);
            this.checkValid_()
          }
          return Object.defineProperty(e, "MAX_PATH_DEPTH", {
            get: function() {
              return 32
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e, "MAX_PATH_LENGTH_BYTES", {
            get: function() {
              return 768
            },
            enumerable: !0,
            configurable: !0
          }), e.prototype.push = function(e) {
            this.parts_.length > 0 && (this.byteLength_ += 1), this.parts_
              .push(e), this.byteLength_ += o.stringLength(e), this.checkValid_()
          }, e.prototype.pop = function() {
            var e = this.parts_.pop();
            this.byteLength_ -= o.stringLength(e), this.parts_.length >
              0 && (this.byteLength_ -= 1)
          }, e.prototype.checkValid_ = function() {
            if (this.byteLength_ > e.MAX_PATH_LENGTH_BYTES) throw new Error(
              this.errorPrefix_ + "has a key path longer than " + e
              .MAX_PATH_LENGTH_BYTES + " bytes (" + this.byteLength_ +
              ").");
            if (this.parts_.length > e.MAX_PATH_DEPTH) throw new Error(
              this.errorPrefix_ +
              "path specified exceeds the maximum depth that can be written (" +
              e.MAX_PATH_DEPTH + ") or object contains a cycle " +
              this.toErrorString())
          }, e.prototype.toErrorString = function() {
            return 0 == this.parts_.length ? "" : "in property '" +
              this.parts_.join(".") + "'"
          }, e
        }(),
        q = "long_polling",
        z = function() {
          function e(e, t, n, r, i) {
            void 0 === i && (i = ""), this.secure = t, this.namespace =
              n, this.webSocketOnly = r, this.persistenceKey = i, this.host =
              e.toLowerCase(), this.domain = this.host.substr(this.host
                .indexOf(".") + 1), this.internalHost = p.get("host:" +
                e) || this.host
          }
          return e.prototype.needsQueryParam = function() {
            return this.host !== this.internalHost || this.isCustomHost()
          }, e.prototype.isCacheableHost = function() {
            return "s-" === this.internalHost.substr(0, 2)
          }, e.prototype.isDemoHost = function() {
            return "firebaseio-demo.com" === this.domain
          }, e.prototype.isCustomHost = function() {
            return "firebaseio.com" !== this.domain &&
              "firebaseio-demo.com" !== this.domain
          }, e.prototype.updateHost = function(e) {
            e !== this.internalHost && (this.internalHost = e, this.isCacheableHost() &&
              p.set("host:" + this.host, this.internalHost))
          }, e.prototype.connectionURL = function(e, t) {
            var n;
            if (o.assert("string" === typeof e,
                "typeof type must == string"), o.assert("object" ===
                typeof t, "typeof params must == object"),
              "websocket" === e) n = (this.secure ? "wss://" :
              "ws://") + this.internalHost + "/.ws?";
            else {
              if (e !== q) throw new Error(
                "Unknown connection type: " + e);
              n = (this.secure ? "https://" : "http://") + this.internalHost +
                "/.lp?"
            }
            this.needsQueryParam() && (t.ns = this.namespace);
            var r = [];
            return o.forEach(t, function(e, t) {
              r.push(e + "=" + t)
            }), n + r.join("&")
          }, e.prototype.toString = function() {
            var e = this.toURLString();
            return this.persistenceKey && (e += "<" + this.persistenceKey +
              ">"), e
          }, e.prototype.toURLString = function() {
            return (this.secure ? "https://" : "http://") + this.host
          }, e
        }();
      var Q, H, K = function(e) {
          var t = G(e),
            n = t.subdomain;
          "firebase" === t.domain && S(t.host +
              " is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"
            ), n && "undefined" != n || "localhost" === t.domain || S(
              "Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"
            ), t.secure || "undefined" !== typeof window && window.location &&
            window.location.protocol && -1 !== window.location.protocol
            .indexOf("https:") && T(
              "Insecure Firebase access from a secure page. Please use https in calls to new Firebase()."
            );
          var r = "ws" === t.scheme || "wss" === t.scheme;
          return {
            repoInfo: new z(t.host, t.secure, n, r),
            path: new V(t.pathString)
          }
        },
        G = function(e) {
          var t = "",
            n = "",
            r = "",
            i = "",
            o = !0,
            a = "https",
            s = 443;
          if ("string" === typeof e) {
            var u = e.indexOf("//");
            u >= 0 && (a = e.substring(0, u - 1), e = e.substring(u + 2));
            var l = e.indexOf("/"); - 1 === l && (l = e.length);
            var c = e.indexOf("?"); - 1 === c && (c = e.length), t = e.substring(
              0, Math.min(l, c)), l < c && (i = function(e) {
              for (var t = "", n = e.split("/"), r = 0; r < n.length; r++)
                if (n[r].length > 0) {
                  var i = n[r];
                  try {
                    i = decodeURIComponent(i.replace(/\+/g, " "))
                  } catch (o) {}
                  t += "/" + i
                }
              return t
            }(e.substring(l, c)));
            var f = function(e) {
              var t = {};
              "?" === e.charAt(0) && (e = e.substring(1));
              for (var n = 0, r = e.split("&"); n < r.length; n++) {
                var i = r[n];
                if (0 !== i.length) {
                  var o = i.split("=");
                  2 === o.length ? t[decodeURIComponent(o[0])] =
                    decodeURIComponent(o[1]) : T(
                      "Invalid query segment '" + i + "' in query '" +
                      e + "'")
                }
              }
              return t
            }(e.substring(Math.min(e.length, c)));
            (u = t.indexOf(":")) >= 0 ? (o = "https" === a || "wss" ===
              a, s = parseInt(t.substring(u + 1), 10)) : u = e.length;
            var p = t.split(".");
            3 === p.length ? (n = p[1], r = p[0].toLowerCase()) : 2 ===
              p.length ? n = p[0] : "localhost" === p[0].slice(0, u).toLowerCase() &&
              (n = "localhost"), "" === r && "ns" in f && (r = f.ns)
          }
          return {
            host: t,
            port: s,
            domain: n,
            subdomain: r,
            secure: o,
            scheme: a,
            pathString: i
          }
        },
        $ = /[\[\].#$\/\u0000-\u001F\u007F]/,
        Y = /[\[\].#$\u0000-\u001F\u007F]/,
        X = function(e) {
          return "string" === typeof e && 0 !== e.length && !$.test(e)
        },
        J = function(e) {
          return "string" === typeof e && 0 !== e.length && !Y.test(e)
        },
        Z = function(e) {
          return null === e || "string" === typeof e || "number" ===
            typeof e && !x(e) || e && "object" === typeof e && o.contains(
              e, ".sv")
        },
        ee = function(e, t, n, r, i) {
          i && void 0 === n || te(o.errorPrefix(e, t, i), n, r)
        },
        te = function e(t, n, r) {
          var i = r instanceof V ? new B(r, t) : r;
          if (void 0 === n) throw new Error(t + "contains undefined " +
            i.toErrorString());
          if ("function" === typeof n) throw new Error(t +
            "contains a function " + i.toErrorString() +
            " with contents = " + n.toString());
          if (x(n)) throw new Error(t + "contains " + n.toString() +
            " " + i.toErrorString());
          if ("string" === typeof n && n.length > 10485760 / 3 && o.stringLength(
              n) > 10485760) throw new Error(t +
            "contains a string greater than 10485760 utf8 bytes " + i
            .toErrorString() + " ('" + n.substring(0, 50) + "...')");
          if (n && "object" === typeof n) {
            var a = !1,
              s = !1;
            if (o.forEach(n, function(n, r) {
                if (".value" === n) a = !0;
                else if (".priority" !== n && ".sv" !== n && (s = !0, !
                    X(n))) throw new Error(t +
                  " contains an invalid key (" + n + ") " + i.toErrorString() +
                  '.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"'
                );
                i.push(n), e(t, r, i), i.pop()
              }), a && s) throw new Error(t +
              ' contains ".value" child ' + i.toErrorString() +
              " in addition to actual children.")
          }
        },
        ne = function(e, t, n, r, i) {
          if (!i || void 0 !== n) {
            var a = o.errorPrefix(e, t, i);
            if (!n || "object" !== typeof n || Array.isArray(n)) throw new Error(
              a +
              " must be an object containing the children to replace."
            );
            var s = [];
            o.forEach(n, function(e, t) {
                var n = new V(e);
                if (te(a, t, r.child(n)), ".priority" === n.getBack() &&
                  !Z(t)) throw new Error(a +
                  "contains an invalid value for '" + n.toString() +
                  "', which must be a valid Firebase priority (a string, finite number, server value, or null)."
                );
                s.push(n)
              }),
              function(e, t) {
                var n, r;
                for (n = 0; n < t.length; n++)
                  for (var i = (r = t[n]).slice(), o = 0; o < i.length; o++)
                    if (".priority" === i[o] && o === i.length - 1);
                    else if (!X(i[o])) throw new Error(e +
                  "contains an invalid key (" + i[o] + ") in path " +
                  r.toString() +
                  '. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"'
                );
                t.sort(V.comparePaths);
                var a = null;
                for (n = 0; n < t.length; n++) {
                  if (r = t[n], null !== a && a.contains(r)) throw new Error(
                    e + "contains a path " + a.toString() +
                    " that is ancestor of another path " + r.toString()
                  );
                  a = r
                }
              }(a, s)
          }
        },
        re = function(e, t, n, r) {
          if (!r || void 0 !== n) {
            if (x(n)) throw new Error(o.errorPrefix(e, t, r) + "is " +
              n.toString() +
              ", but must be a valid Firebase priority (a string, finite number, server value, or null)."
            );
            if (!Z(n)) throw new Error(o.errorPrefix(e, t, r) +
              "must be a valid Firebase priority (a string, finite number, server value, or null)."
            )
          }
        },
        ie = function(e, t, n, r) {
          if (!r || void 0 !== n) switch (n) {
            case "value":
            case "child_added":
            case "child_removed":
            case "child_changed":
            case "child_moved":
              break;
            default:
              throw new Error(o.errorPrefix(e, t, r) +
                'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".'
              )
          }
        },
        oe = function(e, t, n, r) {
          if ((!r || void 0 !== n) && !X(n)) throw new Error(o.errorPrefix(
              e, t, r) + 'was an invalid key = "' + n +
            '".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").'
          )
        },
        ae = function(e, t, n, r) {
          if ((!r || void 0 !== n) && !J(n)) throw new Error(o.errorPrefix(
              e, t, r) + 'was an invalid path = "' + n +
            '". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"'
          )
        },
        se = function(e, t) {
          if (".info" === t.getFront()) throw new Error(e +
            " failed = Can't modify data under /.info/")
        },
        ue = function(e, t, n) {
          var r = n.path.toString();
          if ("string" !== typeof n.repoInfo.host || 0 === n.repoInfo.host
            .length || !X(n.repoInfo.namespace) && "localhost" !== n.repoInfo
            .host.split(":")[0] || 0 !== r.length && ! function(e) {
              return e && (e = e.replace(/^\/*\.info(\/|$)/, "/")), J(e)
            }(r)) throw new Error(o.errorPrefix(e, t, !1) +
            'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".'
          )
        },
        le = function() {
          function e(e, t) {
            this.repo_ = e, this.path_ = t
          }
          return e.prototype.cancel = function(e) {
            o.validateArgCount("OnDisconnect.cancel", 0, 1, arguments
              .length), o.validateCallback("OnDisconnect.cancel", 1,
              e, !0);
            var t = new o.Deferred;
            return this.repo_.onDisconnectCancel(this.path_, t.wrapCallback(
              e)), t.promise
          }, e.prototype.remove = function(e) {
            o.validateArgCount("OnDisconnect.remove", 0, 1, arguments
              .length), se("OnDisconnect.remove", this.path_), o.validateCallback(
              "OnDisconnect.remove", 1, e, !0);
            var t = new o.Deferred;
            return this.repo_.onDisconnectSet(this.path_, null, t.wrapCallback(
              e)), t.promise
          }, e.prototype.set = function(e, t) {
            o.validateArgCount("OnDisconnect.set", 1, 2, arguments.length),
              se("OnDisconnect.set", this.path_), ee(
                "OnDisconnect.set", 1, e, this.path_, !1), o.validateCallback(
                "OnDisconnect.set", 2, t, !0);
            var n = new o.Deferred;
            return this.repo_.onDisconnectSet(this.path_, e, n.wrapCallback(
              t)), n.promise
          }, e.prototype.setWithPriority = function(e, t, n) {
            o.validateArgCount("OnDisconnect.setWithPriority", 2, 3,
              arguments.length), se("OnDisconnect.setWithPriority",
              this.path_), ee("OnDisconnect.setWithPriority", 1, e,
              this.path_, !1), re("OnDisconnect.setWithPriority", 2,
              t, !1), o.validateCallback(
              "OnDisconnect.setWithPriority", 3, n, !0);
            var r = new o.Deferred;
            return this.repo_.onDisconnectSetWithPriority(this.path_,
              e, t, r.wrapCallback(n)), r.promise
          }, e.prototype.update = function(e, t) {
            if (o.validateArgCount("OnDisconnect.update", 1, 2,
                arguments.length), se("OnDisconnect.update", this.path_),
              Array.isArray(e)) {
              for (var n = {}, r = 0; r < e.length; ++r) n["" + r] =
                e[r];
              e = n, T(
                "Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children."
              )
            }
            ne("OnDisconnect.update", 1, e, this.path_, !1), o.validateCallback(
              "OnDisconnect.update", 2, t, !0);
            var i = new o.Deferred;
            return this.repo_.onDisconnectUpdate(this.path_, e, i.wrapCallback(
              t)), i.promise
          }, e
        }(),
        ce = function() {
          function e(e, t) {
            this.committed = e, this.snapshot = t
          }
          return e.prototype.toJSON = function() {
            return o.validateArgCount("TransactionResult.toJSON", 0,
              1, arguments.length), {
              committed: this.committed,
              snapshot: this.snapshot.toJSON()
            }
          }, e
        }(),
        fe = function() {
          var e =
            "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",
            t = 0,
            n = [];
          return function(r) {
            var i, a = r === t;
            t = r;
            var s = new Array(8);
            for (i = 7; i >= 0; i--) s[i] = e.charAt(r % 64), r =
              Math.floor(r / 64);
            o.assert(0 === r, "Cannot push at time == 0");
            var u = s.join("");
            if (a) {
              for (i = 11; i >= 0 && 63 === n[i]; i--) n[i] = 0;
              n[i]++
            } else
              for (i = 0; i < 12; i++) n[i] = Math.floor(64 * Math.random());
            for (i = 0; i < 12; i++) u += e.charAt(n[i]);
            return o.assert(20 === u.length,
              "nextPushId: Length should be 20."), u
          }
        }(),
        pe = function() {
          function e(e, t) {
            this.name = e, this.node = t
          }
          return e.Wrap = function(t, n) {
            return new e(t, n)
          }, e
        }(),
        he = function() {
          function e() {}
          return e.prototype.getCompare = function() {
            return this.compare.bind(this)
          }, e.prototype.indexedValueChanged = function(e, t) {
            var n = new pe(k, e),
              r = new pe(k, t);
            return 0 !== this.compare(n, r)
          }, e.prototype.minPost = function() {
            return pe.MIN
          }, e
        }(),
        de = function(e) {
          function t() {
            return null !== e && e.apply(this, arguments) || this
          }
          return s.__extends(t, e), Object.defineProperty(t,
            "__EMPTY_NODE", {
              get: function() {
                return Q
              },
              set: function(e) {
                Q = e
              },
              enumerable: !0,
              configurable: !0
            }), t.prototype.compare = function(e, t) {
            return O(e.name, t.name)
          }, t.prototype.isDefinedOn = function(e) {
            throw o.assertionError(
              "KeyIndex.isDefinedOn not expected to be called.")
          }, t.prototype.indexedValueChanged = function(e, t) {
            return !1
          }, t.prototype.minPost = function() {
            return pe.MIN
          }, t.prototype.maxPost = function() {
            return new pe(P, Q)
          }, t.prototype.makePost = function(e, t) {
            return o.assert("string" === typeof e,
              "KeyIndex indexValue must always be a string."), new pe(
              e, Q)
          }, t.prototype.toString = function() {
            return ".key"
          }, t
        }(he),
        ye = new de;
      var ve, me, ge, _e = function(e) {
          return "number" === typeof e ? "number:" + F(e) : "string:" +
            e
        },
        be = function(e) {
          if (e.isLeafNode()) {
            var t = e.val();
            o.assert("string" === typeof t || "number" === typeof t ||
              "object" === typeof t && o.contains(t, ".sv"),
              "Priority must be a string or number.")
          } else o.assert(e === H || e.isEmpty(),
            "priority of unexpected type.");
          o.assert(e === H || e.getPriority().isEmpty(),
            "Priority nodes can't have a priority of their own.")
        },
        we = function() {
          function e(t, n) {
            void 0 === n && (n = e.__childrenNodeConstructor.EMPTY_NODE),
              this.value_ = t, this.priorityNode_ = n, this.lazyHash_ =
              null, o.assert(void 0 !== this.value_ && null !== this.value_,
                "LeafNode shouldn't be created with null/undefined value."
              ), be(this.priorityNode_)
          }
          return Object.defineProperty(e, "__childrenNodeConstructor", {
            get: function() {
              return ve
            },
            set: function(e) {
              ve = e
            },
            enumerable: !0,
            configurable: !0
          }), e.prototype.isLeafNode = function() {
            return !0
          }, e.prototype.getPriority = function() {
            return this.priorityNode_
          }, e.prototype.updatePriority = function(t) {
            return new e(this.value_, t)
          }, e.prototype.getImmediateChild = function(t) {
            return ".priority" === t ? this.priorityNode_ : e.__childrenNodeConstructor
              .EMPTY_NODE
          }, e.prototype.getChild = function(t) {
            return t.isEmpty() ? this : ".priority" === t.getFront() ?
              this.priorityNode_ : e.__childrenNodeConstructor.EMPTY_NODE
          }, e.prototype.hasChild = function() {
            return !1
          }, e.prototype.getPredecessorChildName = function(e, t) {
            return null
          }, e.prototype.updateImmediateChild = function(t, n) {
            return ".priority" === t ? this.updatePriority(n) : n.isEmpty() &&
              ".priority" !== t ? this : e.__childrenNodeConstructor.EMPTY_NODE
              .updateImmediateChild(t, n).updatePriority(this.priorityNode_)
          }, e.prototype.updateChild = function(t, n) {
            var r = t.getFront();
            return null === r ? n : n.isEmpty() && ".priority" !== r ?
              this : (o.assert(".priority" !== r || 1 === t.getLength(),
                  ".priority must be the last token in a path"), this
                .updateImmediateChild(r, e.__childrenNodeConstructor.EMPTY_NODE
                  .updateChild(t.popFront(), n)))
          }, e.prototype.isEmpty = function() {
            return !1
          }, e.prototype.numChildren = function() {
            return 0
          }, e.prototype.forEachChild = function(e, t) {
            return !1
          }, e.prototype.val = function(e) {
            return e && !this.getPriority().isEmpty() ? {
              ".value": this.getValue(),
              ".priority": this.getPriority().val()
            } : this.getValue()
          }, e.prototype.hash = function() {
            if (null === this.lazyHash_) {
              var e = "";
              this.priorityNode_.isEmpty() || (e += "priority:" + _e(
                this.priorityNode_.val()) + ":");
              var t = typeof this.value_;
              e += t + ":", e += "number" === t ? F(this.value_) :
                this.value_, this.lazyHash_ = v(e)
            }
            return this.lazyHash_
          }, e.prototype.getValue = function() {
            return this.value_
          }, e.prototype.compareTo = function(t) {
            return t === e.__childrenNodeConstructor.EMPTY_NODE ? 1 :
              t instanceof e.__childrenNodeConstructor ? -1 : (o.assert(
                t.isLeafNode(), "Unknown node type"), this.compareToLeafNode_(
                t))
          }, e.prototype.compareToLeafNode_ = function(t) {
            var n = typeof t.value_,
              r = typeof this.value_,
              i = e.VALUE_TYPE_ORDER.indexOf(n),
              a = e.VALUE_TYPE_ORDER.indexOf(r);
            return o.assert(i >= 0, "Unknown leaf type: " + n), o.assert(
                a >= 0, "Unknown leaf type: " + r), i === a ?
              "object" === r ? 0 : this.value_ < t.value_ ? -1 : this
              .value_ === t.value_ ? 0 : 1 : a - i
          }, e.prototype.withIndex = function() {
            return this
          }, e.prototype.isIndexed = function() {
            return !0
          }, e.prototype.equals = function(e) {
            if (e === this) return !0;
            if (e.isLeafNode()) {
              var t = e;
              return this.value_ === t.value_ && this.priorityNode_.equals(
                t.priorityNode_)
            }
            return !1
          }, e.VALUE_TYPE_ORDER = ["object", "boolean", "number",
            "string"
          ], e
        }();
      var Ee, Ce, Se = new(function(e) {
          function t() {
            return null !== e && e.apply(this, arguments) || this
          }
          return s.__extends(t, e), t.prototype.compare = function(e,
            t) {
            var n = e.node.getPriority(),
              r = t.node.getPriority(),
              i = n.compareTo(r);
            return 0 === i ? O(e.name, t.name) : i
          }, t.prototype.isDefinedOn = function(e) {
            return !e.getPriority().isEmpty()
          }, t.prototype.indexedValueChanged = function(e, t) {
            return !e.getPriority().equals(t.getPriority())
          }, t.prototype.minPost = function() {
            return pe.MIN
          }, t.prototype.maxPost = function() {
            return new pe(P, new we("[PRIORITY-POST]", ge))
          }, t.prototype.makePost = function(e, t) {
            var n = me(e);
            return new pe(t, new we("[PRIORITY-POST]", n))
          }, t.prototype.toString = function() {
            return ".priority"
          }, t
        }(he)),
        Te = function() {
          function e(e, t, n, r, i) {
            void 0 === i && (i = null), this.isReverse_ = r, this.resultGenerator_ =
              i, this.nodeStack_ = [];
            for (var o = 1; !e.isEmpty();)
              if (e = e, o = t ? n(e.key, t) : 1, r && (o *= -1), o < 0)
                e = this.isReverse_ ? e.left : e.right;
              else {
                if (0 === o) {
                  this.nodeStack_.push(e);
                  break
                }
                this.nodeStack_.push(e), e = this.isReverse_ ? e.right :
                  e.left
              }
          }
          return e.prototype.getNext = function() {
            if (0 === this.nodeStack_.length) return null;
            var e, t = this.nodeStack_.pop();
            if (e = this.resultGenerator_ ? this.resultGenerator_(t.key,
                t.value) : {
                key: t.key,
                value: t.value
              }, this.isReverse_)
              for (t = t.left; !t.isEmpty();) this.nodeStack_.push(t),
                t = t.right;
            else
              for (t = t.right; !t.isEmpty();) this.nodeStack_.push(t),
                t = t.left;
            return e
          }, e.prototype.hasNext = function() {
            return this.nodeStack_.length > 0
          }, e.prototype.peek = function() {
            if (0 === this.nodeStack_.length) return null;
            var e = this.nodeStack_[this.nodeStack_.length - 1];
            return this.resultGenerator_ ? this.resultGenerator_(e.key,
              e.value) : {
              key: e.key,
              value: e.value
            }
          }, e
        }(),
        xe = function() {
          function e(t, n, r, i, o) {
            this.key = t, this.value = n, this.color = null != r ? r :
              e.RED, this.left = null != i ? i : Pe.EMPTY_NODE, this.right =
              null != o ? o : Pe.EMPTY_NODE
          }
          return e.prototype.copy = function(t, n, r, i, o) {
            return new e(null != t ? t : this.key, null != n ? n :
              this.value, null != r ? r : this.color, null != i ? i :
              this.left, null != o ? o : this.right)
          }, e.prototype.count = function() {
            return this.left.count() + 1 + this.right.count()
          }, e.prototype.isEmpty = function() {
            return !1
          }, e.prototype.inorderTraversal = function(e) {
            return this.left.inorderTraversal(e) || e(this.key, this.value) ||
              this.right.inorderTraversal(e)
          }, e.prototype.reverseTraversal = function(e) {
            return this.right.reverseTraversal(e) || e(this.key, this
              .value) || this.left.reverseTraversal(e)
          }, e.prototype.min_ = function() {
            return this.left.isEmpty() ? this : this.left.min_()
          }, e.prototype.minKey = function() {
            return this.min_().key
          }, e.prototype.maxKey = function() {
            return this.right.isEmpty() ? this.key : this.right.maxKey()
          }, e.prototype.insert = function(e, t, n) {
            var r, i;
            return (i = (r = n(e, (i = this).key)) < 0 ? i.copy(null,
                null, null, i.left.insert(e, t, n), null) : 0 === r ?
              i.copy(null, t, null, null, null) : i.copy(null, null,
                null, null, i.right.insert(e, t, n))).fixUp_()
          }, e.prototype.removeMin_ = function() {
            if (this.left.isEmpty()) return Pe.EMPTY_NODE;
            var e = this;
            return e.left.isRed_() || e.left.left.isRed_() || (e = e.moveRedLeft_()), (
              e = e.copy(null, null, null, e.left.removeMin_(),
                null)).fixUp_()
          }, e.prototype.remove = function(e, t) {
            var n, r;
            if (t(e, (n = this).key) < 0) n.left.isEmpty() || n.left.isRed_() ||
              n.left.left.isRed_() || (n = n.moveRedLeft_()), n = n.copy(
                null, null, null, n.left.remove(e, t), null);
            else {
              if (n.left.isRed_() && (n = n.rotateRight_()), n.right.isEmpty() ||
                n.right.isRed_() || n.right.left.isRed_() || (n = n.moveRedRight_()),
                0 === t(e, n.key)) {
                if (n.right.isEmpty()) return Pe.EMPTY_NODE;
                r = n.right.min_(), n = n.copy(r.key, r.value, null,
                  null, n.right.removeMin_())
              }
              n = n.copy(null, null, null, null, n.right.remove(e, t))
            }
            return n.fixUp_()
          }, e.prototype.isRed_ = function() {
            return this.color
          }, e.prototype.fixUp_ = function() {
            var e = this;
            return e.right.isRed_() && !e.left.isRed_() && (e = e.rotateLeft_()),
              e.left.isRed_() && e.left.left.isRed_() && (e = e.rotateRight_()),
              e.left.isRed_() && e.right.isRed_() && (e = e.colorFlip_()),
              e
          }, e.prototype.moveRedLeft_ = function() {
            var e = this.colorFlip_();
            return e.right.left.isRed_() && (e = (e = (e = e.copy(
                null, null, null, null, e.right.rotateRight_())).rotateLeft_())
              .colorFlip_()), e
          }, e.prototype.moveRedRight_ = function() {
            var e = this.colorFlip_();
            return e.left.left.isRed_() && (e = (e = e.rotateRight_())
              .colorFlip_()), e
          }, e.prototype.rotateLeft_ = function() {
            var t = this.copy(null, null, e.RED, null, this.right.left);
            return this.right.copy(null, null, this.color, t, null)
          }, e.prototype.rotateRight_ = function() {
            var t = this.copy(null, null, e.RED, this.left.right,
              null);
            return this.left.copy(null, null, this.color, null, t)
          }, e.prototype.colorFlip_ = function() {
            var e = this.left.copy(null, null, !this.left.color, null,
                null),
              t = this.right.copy(null, null, !this.right.color, null,
                null);
            return this.copy(null, null, !this.color, e, t)
          }, e.prototype.checkMaxDepth_ = function() {
            var e = this.check_();
            return Math.pow(2, e) <= this.count() + 1
          }, e.prototype.check_ = function() {
            var e;
            if (this.isRed_() && this.left.isRed_()) throw new Error(
              "Red node has red child(" + this.key + "," + this.value +
              ")");
            if (this.right.isRed_()) throw new Error(
              "Right child of (" + this.key + "," + this.value +
              ") is red");
            if ((e = this.left.check_()) !== this.right.check_())
              throw new Error("Black depths differ");
            return e + (this.isRed_() ? 0 : 1)
          }, e.RED = !0, e.BLACK = !1, e
        }(),
        ke = function() {
          function e() {}
          return e.prototype.copy = function(e, t, n, r, i) {
            return this
          }, e.prototype.insert = function(e, t, n) {
            return new xe(e, t, null)
          }, e.prototype.remove = function(e, t) {
            return this
          }, e.prototype.count = function() {
            return 0
          }, e.prototype.isEmpty = function() {
            return !0
          }, e.prototype.inorderTraversal = function(e) {
            return !1
          }, e.prototype.reverseTraversal = function(e) {
            return !1
          }, e.prototype.minKey = function() {
            return null
          }, e.prototype.maxKey = function() {
            return null
          }, e.prototype.check_ = function() {
            return 0
          }, e.prototype.isRed_ = function() {
            return !1
          }, e
        }(),
        Pe = function() {
          function e(t, n) {
            void 0 === n && (n = e.EMPTY_NODE), this.comparator_ = t,
              this.root_ = n
          }
          return e.prototype.insert = function(t, n) {
            return new e(this.comparator_, this.root_.insert(t, n,
              this.comparator_).copy(null, null, xe.BLACK, null,
              null))
          }, e.prototype.remove = function(t) {
            return new e(this.comparator_, this.root_.remove(t, this.comparator_)
              .copy(null, null, xe.BLACK, null, null))
          }, e.prototype.get = function(e) {
            for (var t, n = this.root_; !n.isEmpty();) {
              if (0 === (t = this.comparator_(e, n.key))) return n.value;
              t < 0 ? n = n.left : t > 0 && (n = n.right)
            }
            return null
          }, e.prototype.getPredecessorKey = function(e) {
            for (var t, n = this.root_, r = null; !n.isEmpty();) {
              if (0 === (t = this.comparator_(e, n.key))) {
                if (n.left.isEmpty()) return r ? r.key : null;
                for (n = n.left; !n.right.isEmpty();) n = n.right;
                return n.key
              }
              t < 0 ? n = n.left : t > 0 && (r = n, n = n.right)
            }
            throw new Error(
              "Attempted to find predecessor key for a nonexistent key.  What gives?"
            )
          }, e.prototype.isEmpty = function() {
            return this.root_.isEmpty()
          }, e.prototype.count = function() {
            return this.root_.count()
          }, e.prototype.minKey = function() {
            return this.root_.minKey()
          }, e.prototype.maxKey = function() {
            return this.root_.maxKey()
          }, e.prototype.inorderTraversal = function(e) {
            return this.root_.inorderTraversal(e)
          }, e.prototype.reverseTraversal = function(e) {
            return this.root_.reverseTraversal(e)
          }, e.prototype.getIterator = function(e) {
            return new Te(this.root_, null, this.comparator_, !1, e)
          }, e.prototype.getIteratorFrom = function(e, t) {
            return new Te(this.root_, e, this.comparator_, !1, t)
          }, e.prototype.getReverseIteratorFrom = function(e, t) {
            return new Te(this.root_, e, this.comparator_, !0, t)
          }, e.prototype.getReverseIterator = function(e) {
            return new Te(this.root_, null, this.comparator_, !0, e)
          }, e.EMPTY_NODE = new ke, e
        }(),
        Oe = Math.log(2),
        Ne = function() {
          function e(e) {
            var t;
            this.count = (t = e + 1, parseInt(Math.log(t) / Oe, 10)),
              this.current_ = this.count - 1;
            var n, r = (n = this.count, parseInt(Array(n + 1).join("1"),
              2));
            this.bits_ = e + 1 & r
          }
          return e.prototype.nextBitIsOne = function() {
            var e = !(this.bits_ & 1 << this.current_);
            return this.current_--, e
          }, e
        }(),
        Ie = function(e, t, n, r) {
          e.sort(t);
          var i = function(t) {
            for (var r = null, i = null, o = e.length, a = function(t,
                r) {
                var i = o - t,
                  a = o;
                o -= t;
                var u = function t(r, i) {
                    var o, a, s = i - r;
                    if (0 == s) return null;
                    if (1 == s) return o = e[r], a = n ? n(o) : o,
                      new xe(a, o.node, xe.BLACK, null, null);
                    var u = parseInt(s / 2, 10) + r,
                      l = t(r, u),
                      c = t(u + 1, i);
                    return o = e[u], a = n ? n(o) : o, new xe(a, o.node,
                      xe.BLACK, l, c)
                  }(i + 1, a),
                  l = e[i],
                  c = n ? n(l) : l;
                s(new xe(c, l.node, r, null, u))
              }, s = function(e) {
                r ? (r.left = e, r = e) : (i = e, r = e)
              }, u = 0; u < t.count; ++u) {
              var l = t.nextBitIsOne(),
                c = Math.pow(2, t.count - (u + 1));
              l ? a(c, xe.BLACK) : (a(c, xe.BLACK), a(c, xe.RED))
            }
            return i
          }(new Ne(e.length));
          return new Pe(r || t, i)
        },
        Re = {},
        Ae = function() {
          function e(e, t) {
            this.indexes_ = e, this.indexSet_ = t
          }
          return Object.defineProperty(e, "Default", {
            get: function() {
              return o.assert(Re && Se,
                  "ChildrenNode.ts has not been loaded"), Ee = Ee ||
                new e({
                  ".priority": Re
                }, {
                  ".priority": Se
                })
            },
            enumerable: !0,
            configurable: !0
          }), e.prototype.get = function(e) {
            var t = o.safeGet(this.indexes_, e);
            if (!t) throw new Error("No index defined for " + e);
            return t === Re ? null : t
          }, e.prototype.hasIndex = function(e) {
            return o.contains(this.indexSet_, e.toString())
          }, e.prototype.addIndex = function(t, n) {
            o.assert(t !== ye,
              "KeyIndex always exists and isn't meant to be added to the IndexMap."
            );
            for (var r, i = [], a = !1, s = n.getIterator(pe.Wrap), u =
                s.getNext(); u;) a = a || t.isDefinedOn(u.node), i.push(
              u), u = s.getNext();
            r = a ? Ie(i, t.getCompare()) : Re;
            var l = t.toString(),
              c = o.clone(this.indexSet_);
            c[l] = t;
            var f = o.clone(this.indexes_);
            return f[l] = r, new e(f, c)
          }, e.prototype.addToIndexes = function(t, n) {
            var r = this;
            return new e(o.map(this.indexes_, function(e, i) {
              var a = o.safeGet(r.indexSet_, i);
              if (o.assert(a,
                  "Missing index implementation for " + i), e ===
                Re) {
                if (a.isDefinedOn(t.node)) {
                  for (var s = [], u = n.getIterator(pe.Wrap),
                      l = u.getNext(); l;) l.name != t.name &&
                    s.push(l), l = u.getNext();
                  return s.push(t), Ie(s, a.getCompare())
                }
                return Re
              }
              var c = n.get(t.name),
                f = e;
              return c && (f = f.remove(new pe(t.name, c))), f.insert(
                t, t.node)
            }), this.indexSet_)
          }, e.prototype.removeFromIndexes = function(t, n) {
            return new e(o.map(this.indexes_, function(e) {
              if (e === Re) return e;
              var r = n.get(t.name);
              return r ? e.remove(new pe(t.name, r)) : e
            }), this.indexSet_)
          }, e
        }();

      function De(e, t) {
        return O(e.name, t.name)
      }

      function Fe(e, t) {
        return O(e, t)
      }
      var Le = function() {
          function e(e, t, n) {
            this.children_ = e, this.priorityNode_ = t, this.indexMap_ =
              n, this.lazyHash_ = null, this.priorityNode_ && be(this.priorityNode_),
              this.children_.isEmpty() && o.assert(!this.priorityNode_ ||
                this.priorityNode_.isEmpty(),
                "An empty node cannot have a priority")
          }
          return Object.defineProperty(e, "EMPTY_NODE", {
            get: function() {
              return Ce || (Ce = new e(new Pe(Fe), null, Ae.Default))
            },
            enumerable: !0,
            configurable: !0
          }), e.prototype.isLeafNode = function() {
            return !1
          }, e.prototype.getPriority = function() {
            return this.priorityNode_ || Ce
          }, e.prototype.updatePriority = function(t) {
            return this.children_.isEmpty() ? this : new e(this.children_,
              t, this.indexMap_)
          }, e.prototype.getImmediateChild = function(e) {
            if (".priority" === e) return this.getPriority();
            var t = this.children_.get(e);
            return null === t ? Ce : t
          }, e.prototype.getChild = function(e) {
            var t = e.getFront();
            return null === t ? this : this.getImmediateChild(t).getChild(
              e.popFront())
          }, e.prototype.hasChild = function(e) {
            return null !== this.children_.get(e)
          }, e.prototype.updateImmediateChild = function(t, n) {
            if (o.assert(n,
                "We should always be passing snapshot nodes"),
              ".priority" === t) return this.updatePriority(n);
            var r, i = new pe(t, n),
              a = void 0,
              s = void 0;
            return n.isEmpty() ? (a = this.children_.remove(t), s =
                this.indexMap_.removeFromIndexes(i, this.children_)) :
              (a = this.children_.insert(t, n), s = this.indexMap_.addToIndexes(
                i, this.children_)), r = a.isEmpty() ? Ce : this.priorityNode_,
              new e(a, r, s)
          }, e.prototype.updateChild = function(e, t) {
            var n = e.getFront();
            if (null === n) return t;
            o.assert(".priority" !== e.getFront() || 1 === e.getLength(),
              ".priority must be the last token in a path");
            var r = this.getImmediateChild(n).updateChild(e.popFront(),
              t);
            return this.updateImmediateChild(n, r)
          }, e.prototype.isEmpty = function() {
            return this.children_.isEmpty()
          }, e.prototype.numChildren = function() {
            return this.children_.count()
          }, e.prototype.val = function(t) {
            if (this.isEmpty()) return null;
            var n = {},
              r = 0,
              i = 0,
              o = !0;
            if (this.forEachChild(Se, function(a, s) {
                n[a] = s.val(t), r++, o && e.INTEGER_REGEXP_.test(a) ?
                  i = Math.max(i, Number(a)) : o = !1
              }), !t && o && i < 2 * r) {
              var a = [];
              for (var s in n) a[s] = n[s];
              return a
            }
            return t && !this.getPriority().isEmpty() && (n[
              ".priority"] = this.getPriority().val()), n
          }, e.prototype.hash = function() {
            if (null === this.lazyHash_) {
              var e = "";
              this.getPriority().isEmpty() || (e += "priority:" + _e(
                this.getPriority().val()) + ":"), this.forEachChild(
                Se,
                function(t, n) {
                  var r = n.hash();
                  "" !== r && (e += ":" + t + ":" + r)
                }), this.lazyHash_ = "" === e ? "" : v(e)
            }
            return this.lazyHash_
          }, e.prototype.getPredecessorChildName = function(e, t, n) {
            var r = this.resolveIndex_(n);
            if (r) {
              var i = r.getPredecessorKey(new pe(e, t));
              return i ? i.name : null
            }
            return this.children_.getPredecessorKey(e)
          }, e.prototype.getFirstChildName = function(e) {
            var t = this.resolveIndex_(e);
            if (t) {
              var n = t.minKey();
              return n && n.name
            }
            return this.children_.minKey()
          }, e.prototype.getFirstChild = function(e) {
            var t = this.getFirstChildName(e);
            return t ? new pe(t, this.children_.get(t)) : null
          }, e.prototype.getLastChildName = function(e) {
            var t = this.resolveIndex_(e);
            if (t) {
              var n = t.maxKey();
              return n && n.name
            }
            return this.children_.maxKey()
          }, e.prototype.getLastChild = function(e) {
            var t = this.getLastChildName(e);
            return t ? new pe(t, this.children_.get(t)) : null
          }, e.prototype.forEachChild = function(e, t) {
            var n = this.resolveIndex_(e);
            return n ? n.inorderTraversal(function(e) {
              return t(e.name, e.node)
            }) : this.children_.inorderTraversal(t)
          }, e.prototype.getIterator = function(e) {
            return this.getIteratorFrom(e.minPost(), e)
          }, e.prototype.getIteratorFrom = function(e, t) {
            var n = this.resolveIndex_(t);
            if (n) return n.getIteratorFrom(e, function(e) {
              return e
            });
            for (var r = this.children_.getIteratorFrom(e.name, pe.Wrap),
                i = r.peek(); null != i && t.compare(i, e) < 0;) r.getNext(),
              i = r.peek();
            return r
          }, e.prototype.getReverseIterator = function(e) {
            return this.getReverseIteratorFrom(e.maxPost(), e)
          }, e.prototype.getReverseIteratorFrom = function(e, t) {
            var n = this.resolveIndex_(t);
            if (n) return n.getReverseIteratorFrom(e, function(e) {
              return e
            });
            for (var r = this.children_.getReverseIteratorFrom(e.name,
                pe.Wrap), i = r.peek(); null != i && t.compare(i, e) >
              0;) r.getNext(), i = r.peek();
            return r
          }, e.prototype.compareTo = function(e) {
            return this.isEmpty() ? e.isEmpty() ? 0 : -1 : e.isLeafNode() ||
              e.isEmpty() ? 1 : e === Me ? -1 : 0
          }, e.prototype.withIndex = function(t) {
            if (t === ye || this.indexMap_.hasIndex(t)) return this;
            var n = this.indexMap_.addIndex(t, this.children_);
            return new e(this.children_, this.priorityNode_, n)
          }, e.prototype.isIndexed = function(e) {
            return e === ye || this.indexMap_.hasIndex(e)
          }, e.prototype.equals = function(e) {
            if (e === this) return !0;
            if (e.isLeafNode()) return !1;
            var t = e;
            if (this.getPriority().equals(t.getPriority())) {
              if (this.children_.count() === t.children_.count()) {
                for (var n = this.getIterator(Se), r = t.getIterator(
                    Se), i = n.getNext(), o = r.getNext(); i && o;) {
                  if (i.name !== o.name || !i.node.equals(o.node))
                    return !1;
                  i = n.getNext(), o = r.getNext()
                }
                return null === i && null === o
              }
              return !1
            }
            return !1
          }, e.prototype.resolveIndex_ = function(e) {
            return e === ye ? null : this.indexMap_.get(e.toString())
          }, e.INTEGER_REGEXP_ = /^(0|[1-9]\d*)$/, e
        }(),
        Me = new(function(e) {
          function t() {
            return e.call(this, new Pe(Fe), Le.EMPTY_NODE, Ae.Default) ||
              this
          }
          return s.__extends(t, e), t.prototype.compareTo = function(
            e) {
            return e === this ? 0 : 1
          }, t.prototype.equals = function(e) {
            return e === this
          }, t.prototype.getPriority = function() {
            return this
          }, t.prototype.getImmediateChild = function(e) {
            return Le.EMPTY_NODE
          }, t.prototype.isEmpty = function() {
            return !1
          }, t
        }(Le));
      Object.defineProperties(pe, {
          MIN: {
            value: new pe(k, Le.EMPTY_NODE)
          },
          MAX: {
            value: new pe(P, Me)
          }
        }), de.__EMPTY_NODE = Le.EMPTY_NODE, we.__childrenNodeConstructor =
        Le, H = Me,
        function(e) {
          ge = e
        }(Me);
      var je = !0;

      function Ue(e, t) {
        if (void 0 === t && (t = null), null === e) return Le.EMPTY_NODE;
        if ("object" === typeof e && ".priority" in e && (t = e[
            ".priority"]), o.assert(null === t || "string" === typeof t ||
            "number" === typeof t || "object" === typeof t && ".sv" in
            t, "Invalid priority type found: " + typeof t), "object" ===
          typeof e && ".value" in e && null !== e[".value"] && (e = e[
            ".value"]), "object" !== typeof e || ".sv" in e) return new we(
          e, Ue(t));
        if (e instanceof Array || !je) {
          var n = Le.EMPTY_NODE,
            r = e;
          return o.forEach(r, function(e, t) {
            if (o.contains(r, e) && "." !== e.substring(0, 1)) {
              var i = Ue(t);
              !i.isLeafNode() && i.isEmpty() || (n = n.updateImmediateChild(
                e, i))
            }
          }), n.updatePriority(Ue(t))
        }
        var i = [],
          a = !1,
          s = e;
        if (o.forEach(s, function(e, t) {
            if ("string" !== typeof e || "." !== e.substring(0, 1)) {
              var n = Ue(s[e]);
              n.isEmpty() || (a = a || !n.getPriority().isEmpty(), i.push(
                new pe(e, n)))
            }
          }), 0 == i.length) return Le.EMPTY_NODE;
        var u = Ie(i, De, function(e) {
          return e.name
        }, Fe);
        if (a) {
          var l = Ie(i, Se.getCompare());
          return new Le(u, Ue(t), new Ae({
            ".priority": l
          }, {
            ".priority": Se
          }))
        }
        return new Le(u, Ue(t), Ae.Default)
      }! function(e) {
        me = e
      }(Ue);
      var We, Ve, Be = new(function(e) {
          function t() {
            return null !== e && e.apply(this, arguments) || this
          }
          return s.__extends(t, e), t.prototype.compare = function(e,
            t) {
            var n = e.node.compareTo(t.node);
            return 0 === n ? O(e.name, t.name) : n
          }, t.prototype.isDefinedOn = function(e) {
            return !0
          }, t.prototype.indexedValueChanged = function(e, t) {
            return !e.equals(t)
          }, t.prototype.minPost = function() {
            return pe.MIN
          }, t.prototype.maxPost = function() {
            return pe.MAX
          }, t.prototype.makePost = function(e, t) {
            var n = Ue(e);
            return new pe(t, n)
          }, t.prototype.toString = function() {
            return ".value"
          }, t
        }(he)),
        qe = function(e) {
          function t(t) {
            var n = e.call(this) || this;
            return n.indexPath_ = t, o.assert(!t.isEmpty() &&
              ".priority" !== t.getFront(),
              "Can't create PathIndex with empty path or .priority key"
            ), n
          }
          return s.__extends(t, e), t.prototype.extractChild = function(
            e) {
            return e.getChild(this.indexPath_)
          }, t.prototype.isDefinedOn = function(e) {
            return !e.getChild(this.indexPath_).isEmpty()
          }, t.prototype.compare = function(e, t) {
            var n = this.extractChild(e.node),
              r = this.extractChild(t.node),
              i = n.compareTo(r);
            return 0 === i ? O(e.name, t.name) : i
          }, t.prototype.makePost = function(e, t) {
            var n = Ue(e),
              r = Le.EMPTY_NODE.updateChild(this.indexPath_, n);
            return new pe(t, r)
          }, t.prototype.maxPost = function() {
            var e = Le.EMPTY_NODE.updateChild(this.indexPath_, Me);
            return new pe(P, e)
          }, t.prototype.toString = function() {
            return this.indexPath_.slice().join("/")
          }, t
        }(he),
        ze = function() {
          function e(e, t, n) {
            this.node_ = e, this.ref_ = t, this.index_ = n
          }
          return e.prototype.val = function() {
            return o.validateArgCount("DataSnapshot.val", 0, 0,
              arguments.length), this.node_.val()
          }, e.prototype.exportVal = function() {
            return o.validateArgCount("DataSnapshot.exportVal", 0, 0,
              arguments.length), this.node_.val(!0)
          }, e.prototype.toJSON = function() {
            return o.validateArgCount("DataSnapshot.toJSON", 0, 1,
              arguments.length), this.exportVal()
          }, e.prototype.exists = function() {
            return o.validateArgCount("DataSnapshot.exists", 0, 0,
              arguments.length), !this.node_.isEmpty()
          }, e.prototype.child = function(t) {
            o.validateArgCount("DataSnapshot.child", 0, 1, arguments.length),
              t = String(t), ae("DataSnapshot.child", 1, t, !1);
            var n = new V(t),
              r = this.ref_.child(n);
            return new e(this.node_.getChild(n), r, Se)
          }, e.prototype.hasChild = function(e) {
            o.validateArgCount("DataSnapshot.hasChild", 1, 1,
              arguments.length), ae("DataSnapshot.hasChild", 1, e, !
              1);
            var t = new V(e);
            return !this.node_.getChild(t).isEmpty()
          }, e.prototype.getPriority = function() {
            return o.validateArgCount("DataSnapshot.getPriority", 0,
              0, arguments.length), this.node_.getPriority().val()
          }, e.prototype.forEach = function(t) {
            var n = this;
            return o.validateArgCount("DataSnapshot.forEach", 1, 1,
                arguments.length), o.validateCallback(
                "DataSnapshot.forEach", 1, t, !1), !this.node_.isLeafNode() &&
              !!this.node_.forEachChild(this.index_, function(r, i) {
                return t(new e(i, n.ref_.child(r), Se))
              })
          }, e.prototype.hasChildren = function() {
            return o.validateArgCount("DataSnapshot.hasChildren", 0,
                0, arguments.length), !this.node_.isLeafNode() && !
              this.node_.isEmpty()
          }, Object.defineProperty(e.prototype, "key", {
            get: function() {
              return this.ref_.getKey()
            },
            enumerable: !0,
            configurable: !0
          }), e.prototype.numChildren = function() {
            return o.validateArgCount("DataSnapshot.numChildren", 0,
              0, arguments.length), this.node_.numChildren()
          }, e.prototype.getRef = function() {
            return o.validateArgCount("DataSnapshot.ref", 0, 0,
              arguments.length), this.ref_
          }, Object.defineProperty(e.prototype, "ref", {
            get: function() {
              return this.getRef()
            },
            enumerable: !0,
            configurable: !0
          }), e
        }(),
        Qe = function() {
          function e(e, t, n, r) {
            this.eventType = e, this.eventRegistration = t, this.snapshot =
              n, this.prevName = r
          }
          return e.prototype.getPath = function() {
            var e = this.snapshot.getRef();
            return "value" === this.eventType ? e.path : e.getParent()
              .path
          }, e.prototype.getEventType = function() {
            return this.eventType
          }, e.prototype.getEventRunner = function() {
            return this.eventRegistration.getEventRunner(this)
          }, e.prototype.toString = function() {
            return this.getPath().toString() + ":" + this.eventType +
              ":" + o.stringify(this.snapshot.exportVal())
          }, e
        }(),
        He = function() {
          function e(e, t, n) {
            this.eventRegistration = e, this.error = t, this.path = n
          }
          return e.prototype.getPath = function() {
            return this.path
          }, e.prototype.getEventType = function() {
            return "cancel"
          }, e.prototype.getEventRunner = function() {
            return this.eventRegistration.getEventRunner(this)
          }, e.prototype.toString = function() {
            return this.path.toString() + ":cancel"
          }, e
        }(),
        Ke = function() {
          function e(e, t, n) {
            this.callback_ = e, this.cancelCallback_ = t, this.context_ =
              n
          }
          return e.prototype.respondsTo = function(e) {
            return "value" === e
          }, e.prototype.createEvent = function(e, t) {
            var n = t.getQueryParams().getIndex();
            return new Qe("value", this, new ze(e.snapshotNode, t.getRef(),
              n))
          }, e.prototype.getEventRunner = function(e) {
            var t = this.context_;
            if ("cancel" === e.getEventType()) {
              o.assert(this.cancelCallback_,
                "Raising a cancel event on a listener with no cancel callback"
              );
              var n = this.cancelCallback_;
              return function() {
                n.call(t, e.error)
              }
            }
            var r = this.callback_;
            return function() {
              r.call(t, e.snapshot)
            }
          }, e.prototype.createCancelEvent = function(e, t) {
            return this.cancelCallback_ ? new He(this, e, t) : null
          }, e.prototype.matches = function(t) {
            return t instanceof e && (!t.callback_ || !this.callback_ ||
              t.callback_ === this.callback_ && t.context_ === this
              .context_)
          }, e.prototype.hasAnyCallback = function() {
            return null !== this.callback_
          }, e
        }(),
        Ge = function() {
          function e(e, t, n) {
            this.callbacks_ = e, this.cancelCallback_ = t, this.context_ =
              n
          }
          return e.prototype.respondsTo = function(e) {
            var t = "children_added" === e ? "child_added" : e;
            return t = "children_removed" === t ? "child_removed" : t,
              o.contains(this.callbacks_, t)
          }, e.prototype.createCancelEvent = function(e, t) {
            return this.cancelCallback_ ? new He(this, e, t) : null
          }, e.prototype.createEvent = function(e, t) {
            o.assert(null != e.childName,
              "Child events should have a childName.");
            var n = t.getRef().child(e.childName),
              r = t.getQueryParams().getIndex();
            return new Qe(e.type, this, new ze(e.snapshotNode, n, r),
              e.prevName)
          }, e.prototype.getEventRunner = function(e) {
            var t = this.context_;
            if ("cancel" === e.getEventType()) {
              o.assert(this.cancelCallback_,
                "Raising a cancel event on a listener with no cancel callback"
              );
              var n = this.cancelCallback_;
              return function() {
                n.call(t, e.error)
              }
            }
            var r = this.callbacks_[e.eventType];
            return function() {
              r.call(t, e.snapshot, e.prevName)
            }
          }, e.prototype.matches = function(t) {
            if (t instanceof e) {
              if (!this.callbacks_ || !t.callbacks_) return !0;
              if (this.context_ === t.context_) {
                var n = o.getCount(t.callbacks_);
                if (n === o.getCount(this.callbacks_)) {
                  if (1 === n) {
                    var r = o.getAnyKey(t.callbacks_),
                      i = o.getAnyKey(this.callbacks_);
                    return i === r && (!t.callbacks_[r] || !this.callbacks_[
                      i] || t.callbacks_[r] === this.callbacks_[i])
                  }
                  return o.every(this.callbacks_, function(e, n) {
                    return t.callbacks_[e] === n
                  })
                }
              }
            }
            return !1
          }, e.prototype.hasAnyCallback = function() {
            return null !== this.callbacks_
          }, e
        }(),
        $e = function() {
          function e(e, t, n, r) {
            this.repo = e, this.path = t, this.queryParams_ = n, this.orderByCalled_ =
              r
          }
          return Object.defineProperty(e, "__referenceConstructor", {
            get: function() {
              return o.assert(We,
                "Reference.ts has not been loaded"), We
            },
            set: function(e) {
              We = e
            },
            enumerable: !0,
            configurable: !0
          }), e.validateQueryEndpoints_ = function(e) {
            var t = null,
              n = null;
            if (e.hasStart() && (t = e.getIndexStartValue()), e.hasEnd() &&
              (n = e.getIndexEndValue()), e.getIndex() === ye) {
              var r =
                "Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",
                i =
                "Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.";
              if (e.hasStart()) {
                if (e.getIndexStartName() != k) throw new Error(r);
                if ("string" !== typeof t) throw new Error(i)
              }
              if (e.hasEnd()) {
                if (e.getIndexEndName() != P) throw new Error(r);
                if ("string" !== typeof n) throw new Error(i)
              }
            } else if (e.getIndex() === Se) {
              if (null != t && !Z(t) || null != n && !Z(n)) throw new Error(
                "Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string)."
              )
            } else if (o.assert(e.getIndex() instanceof qe || e.getIndex() ===
                Be, "unknown index type."), null != t && "object" ===
              typeof t || null != n && "object" === typeof n) throw new Error(
              "Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object."
            )
          }, e.validateLimit_ = function(e) {
            if (e.hasStart() && e.hasEnd() && e.hasLimit() && !e.hasAnchoredLimit())
              throw new Error(
                "Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead."
              )
          }, e.prototype.validateNoPreviousOrderByCall_ = function(e) {
            if (!0 === this.orderByCalled_) throw new Error(e +
              ": You can't combine multiple orderBy calls.")
          }, e.prototype.getQueryParams = function() {
            return this.queryParams_
          }, e.prototype.getRef = function() {
            return o.validateArgCount("Query.ref", 0, 0, arguments.length),
              new e.__referenceConstructor(this.repo, this.path)
          }, e.prototype.on = function(t, n, r, i) {
            o.validateArgCount("Query.on", 2, 4, arguments.length),
              ie("Query.on", 1, t, !1), o.validateCallback("Query.on",
                2, n, !1);
            var a = e.getCancelAndContextArgs_("Query.on", r, i);
            if ("value" === t) this.onValueEvent(n, a.cancel, a.context);
            else {
              var s = {};
              s[t] = n, this.onChildEvent(s, a.cancel, a.context)
            }
            return n
          }, e.prototype.onValueEvent = function(e, t, n) {
            var r = new Ke(e, t || null, n || null);
            this.repo.addEventCallbackForQuery(this, r)
          }, e.prototype.onChildEvent = function(e, t, n) {
            var r = new Ge(e, t, n);
            this.repo.addEventCallbackForQuery(this, r)
          }, e.prototype.off = function(e, t, n) {
            o.validateArgCount("Query.off", 0, 3, arguments.length),
              ie("Query.off", 1, e, !0), o.validateCallback(
                "Query.off", 2, t, !0), o.validateContextObject(
                "Query.off", 3, n, !0);
            var r = null,
              i = null;
            "value" === e ? r = new Ke(t || null, null, n || null) :
              e && (t && ((i = {})[e] = t), r = new Ge(i, null, n ||
                null));
            this.repo.removeEventCallbackForQuery(this, r)
          }, e.prototype.once = function(t, n, r, i) {
            var a = this;
            o.validateArgCount("Query.once", 1, 4, arguments.length),
              ie("Query.once", 1, t, !1), o.validateCallback(
                "Query.once", 2, n, !0);
            var s = e.getCancelAndContextArgs_("Query.once", r, i),
              u = !0,
              l = new o.Deferred;
            l.promise.catch(function() {});
            var c = function e(r) {
              u && (u = !1, a.off(t, e), n && n.bind(s.context)(r),
                l.resolve(r))
            };
            return this.on(t, c, function(e) {
              a.off(t, c), s.cancel && s.cancel.bind(s.context)(e),
                l.reject(e)
            }), l.promise
          }, e.prototype.limitToFirst = function(t) {
            if (o.validateArgCount("Query.limitToFirst", 1, 1,
                arguments.length), "number" !== typeof t || Math.floor(
                t) !== t || t <= 0) throw new Error(
              "Query.limitToFirst: First argument must be a positive integer."
            );
            if (this.queryParams_.hasLimit()) throw new Error(
              "Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast)."
            );
            return new e(this.repo, this.path, this.queryParams_.limitToFirst(
              t), this.orderByCalled_)
          }, e.prototype.limitToLast = function(t) {
            if (o.validateArgCount("Query.limitToLast", 1, 1,
                arguments.length), "number" !== typeof t || Math.floor(
                t) !== t || t <= 0) throw new Error(
              "Query.limitToLast: First argument must be a positive integer."
            );
            if (this.queryParams_.hasLimit()) throw new Error(
              "Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast)."
            );
            return new e(this.repo, this.path, this.queryParams_.limitToLast(
              t), this.orderByCalled_)
          }, e.prototype.orderByChild = function(t) {
            if (o.validateArgCount("Query.orderByChild", 1, 1,
                arguments.length), "$key" === t) throw new Error(
              'Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.'
            );
            if ("$priority" === t) throw new Error(
              'Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.'
            );
            if ("$value" === t) throw new Error(
              'Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.'
            );
            ae("Query.orderByChild", 1, t, !1), this.validateNoPreviousOrderByCall_(
              "Query.orderByChild");
            var n = new V(t);
            if (n.isEmpty()) throw new Error(
              "Query.orderByChild: cannot pass in empty path.  Use Query.orderByValue() instead."
            );
            var r = new qe(n),
              i = this.queryParams_.orderBy(r);
            return e.validateQueryEndpoints_(i), new e(this.repo,
              this.path, i, !0)
          }, e.prototype.orderByKey = function() {
            o.validateArgCount("Query.orderByKey", 0, 0, arguments.length),
              this.validateNoPreviousOrderByCall_("Query.orderByKey");
            var t = this.queryParams_.orderBy(ye);
            return e.validateQueryEndpoints_(t), new e(this.repo,
              this.path, t, !0)
          }, e.prototype.orderByPriority = function() {
            o.validateArgCount("Query.orderByPriority", 0, 0,
              arguments.length), this.validateNoPreviousOrderByCall_(
              "Query.orderByPriority");
            var t = this.queryParams_.orderBy(Se);
            return e.validateQueryEndpoints_(t), new e(this.repo,
              this.path, t, !0)
          }, e.prototype.orderByValue = function() {
            o.validateArgCount("Query.orderByValue", 0, 0, arguments.length),
              this.validateNoPreviousOrderByCall_(
                "Query.orderByValue");
            var t = this.queryParams_.orderBy(Be);
            return e.validateQueryEndpoints_(t), new e(this.repo,
              this.path, t, !0)
          }, e.prototype.startAt = function(t, n) {
            void 0 === t && (t = null), o.validateArgCount(
              "Query.startAt", 0, 2, arguments.length), ee(
              "Query.startAt", 1, t, this.path, !0), oe(
              "Query.startAt", 2, n, !0);
            var r = this.queryParams_.startAt(t, n);
            if (e.validateLimit_(r), e.validateQueryEndpoints_(r),
              this.queryParams_.hasStart()) throw new Error(
              "Query.startAt: Starting point was already set (by another call to startAt or equalTo)."
            );
            return void 0 === t && (t = null, n = null), new e(this.repo,
              this.path, r, this.orderByCalled_)
          }, e.prototype.endAt = function(t, n) {
            void 0 === t && (t = null), o.validateArgCount(
              "Query.endAt", 0, 2, arguments.length), ee(
              "Query.endAt", 1, t, this.path, !0), oe("Query.endAt",
              2, n, !0);
            var r = this.queryParams_.endAt(t, n);
            if (e.validateLimit_(r), e.validateQueryEndpoints_(r),
              this.queryParams_.hasEnd()) throw new Error(
              "Query.endAt: Ending point was already set (by another call to endAt or equalTo)."
            );
            return new e(this.repo, this.path, r, this.orderByCalled_)
          }, e.prototype.equalTo = function(e, t) {
            if (o.validateArgCount("Query.equalTo", 1, 2, arguments.length),
              ee("Query.equalTo", 1, e, this.path, !1), oe(
                "Query.equalTo", 2, t, !0), this.queryParams_.hasStart()
            ) throw new Error(
              "Query.equalTo: Starting point was already set (by another call to startAt or equalTo)."
            );
            if (this.queryParams_.hasEnd()) throw new Error(
              "Query.equalTo: Ending point was already set (by another call to endAt or equalTo)."
            );
            return this.startAt(e, t).endAt(e, t)
          }, e.prototype.toString = function() {
            return o.validateArgCount("Query.toString", 0, 0,
              arguments.length), this.repo.toString() + this.path.toUrlEncodedString()
          }, e.prototype.toJSON = function() {
            return o.validateArgCount("Query.toJSON", 0, 1, arguments
              .length), this.toString()
          }, e.prototype.queryObject = function() {
            return this.queryParams_.getQueryObject()
          }, e.prototype.queryIdentifier = function() {
            var e = this.queryObject(),
              t = R(e);
            return "{}" === t ? "default" : t
          }, e.prototype.isEqual = function(t) {
            if (o.validateArgCount("Query.isEqual", 1, 1, arguments.length), !
              (t instanceof e)) {
              throw new Error(
                "Query.isEqual failed: First argument must be an instance of firebase.database.Query."
              )
            }
            var n = this.repo === t.repo,
              r = this.path.equals(t.path),
              i = this.queryIdentifier() === t.queryIdentifier();
            return n && r && i
          }, e.getCancelAndContextArgs_ = function(e, t, n) {
            var r = {
              cancel: null,
              context: null
            };
            if (t && n) r.cancel = t, o.validateCallback(e, 3, r.cancel, !
              0), r.context = n, o.validateContextObject(e, 4, r.context, !
              0);
            else if (t)
              if ("object" === typeof t && null !== t) r.context = t;
              else {
                if ("function" !== typeof t) throw new Error(o.errorPrefix(
                    e, 3, !0) +
                  " must either be a cancel callback or a context object."
                );
                r.cancel = t
              }
            return r
          }, Object.defineProperty(e.prototype, "ref", {
            get: function() {
              return this.getRef()
            },
            enumerable: !0,
            configurable: !0
          }), e
        }(),
        Ye = function() {
          function e() {
            this.set = {}
          }
          return e.prototype.add = function(e, t) {
            this.set[e] = null === t || t
          }, e.prototype.contains = function(e) {
            return o.contains(this.set, e)
          }, e.prototype.get = function(e) {
            return this.contains(e) ? this.set[e] : void 0
          }, e.prototype.remove = function(e) {
            delete this.set[e]
          }, e.prototype.clear = function() {
            this.set = {}
          }, e.prototype.isEmpty = function() {
            return o.isEmpty(this.set)
          }, e.prototype.count = function() {
            return o.getCount(this.set)
          }, e.prototype.each = function(e) {
            o.forEach(this.set, function(t, n) {
              return e(t, n)
            })
          }, e.prototype.keys = function() {
            var e = [];
            return o.forEach(this.set, function(t) {
              e.push(t)
            }), e
          }, e
        }(),
        Xe = function() {
          function e() {
            this.value_ = null, this.children_ = null
          }
          return e.prototype.find = function(e) {
            if (null != this.value_) return this.value_.getChild(e);
            if (e.isEmpty() || null == this.children_) return null;
            var t = e.getFront();
            return e = e.popFront(), this.children_.contains(t) ?
              this.children_.get(t).find(e) : null
          }, e.prototype.remember = function(t, n) {
            if (t.isEmpty()) this.value_ = n, this.children_ = null;
            else if (null !== this.value_) this.value_ = this.value_.updateChild(
              t, n);
            else {
              null == this.children_ && (this.children_ = new Ye);
              var r = t.getFront();
              this.children_.contains(r) || this.children_.add(r, new e);
              var i = this.children_.get(r);
              t = t.popFront(), i.remember(t, n)
            }
          }, e.prototype.forget = function(e) {
            if (e.isEmpty()) return this.value_ = null, this.children_ =
              null, !0;
            if (null !== this.value_) {
              if (this.value_.isLeafNode()) return !1;
              var t = this.value_;
              this.value_ = null;
              var n = this;
              return t.forEachChild(Se, function(e, t) {
                n.remember(new V(e), t)
              }), this.forget(e)
            }
            if (null !== this.children_) {
              var r = e.getFront();
              if (e = e.popFront(), this.children_.contains(r)) this.children_
                .get(r).forget(e) && this.children_.remove(r);
              return !!this.children_.isEmpty() && (this.children_ =
                null, !0)
            }
            return !0
          }, e.prototype.forEachTree = function(e, t) {
            null !== this.value_ ? t(e, this.value_) : this.forEachChild(
              function(n, r) {
                var i = new V(e.toString() + "/" + n);
                r.forEachTree(i, t)
              })
          }, e.prototype.forEachChild = function(e) {
            null !== this.children_ && this.children_.each(function(t,
              n) {
              e(t, n)
            })
          }, e
        }(),
        Je = function(e, t) {
          return e && "object" === typeof e ? (o.assert(".sv" in e,
              "Unexpected leaf node or priority contents"), t[e[".sv"]]) :
            e
        },
        Ze = function e(t, n) {
          var r, i = t.getPriority().val(),
            o = Je(i, n);
          if (t.isLeafNode()) {
            var a = t,
              s = Je(a.getValue(), n);
            return s !== a.getValue() || o !== a.getPriority().val() ?
              new we(s, Ue(o)) : t
          }
          var u = t;
          return r = u, o !== u.getPriority().val() && (r = r.updatePriority(
            new we(o))), u.forEachChild(Se, function(t, i) {
            var o = e(i, n);
            o !== i && (r = r.updateImmediateChild(t, o))
          }), r
        };
      ! function(e) {
        e[e.OVERWRITE = 0] = "OVERWRITE", e[e.MERGE = 1] = "MERGE", e[e
          .ACK_USER_WRITE = 2] = "ACK_USER_WRITE", e[e.LISTEN_COMPLETE =
          3] = "LISTEN_COMPLETE"
      }(Ve || (Ve = {}));
      var et, tt, nt = function() {
          function e(e, t, n, r) {
            this.fromUser = e, this.fromServer = t, this.queryId = n,
              this.tagged = r, o.assert(!r || t,
                "Tagged queries must be from server.")
          }
          return e.User = new e(!0, !1, null, !1), e.Server = new e(!1, !
            0, null, !1), e.forServerTaggedQuery = function(t) {
            return new e(!1, !0, t, !0)
          }, e
        }(),
        rt = function() {
          function e(e, t, n) {
            this.path = e, this.affectedTree = t, this.revert = n, this
              .type = Ve.ACK_USER_WRITE, this.source = nt.User
          }
          return e.prototype.operationForChild = function(t) {
            if (this.path.isEmpty()) {
              if (null != this.affectedTree.value) return o.assert(
                this.affectedTree.children.isEmpty(),
                "affectedTree should not have overlapping affected paths."
              ), this;
              var n = this.affectedTree.subtree(new V(t));
              return new e(V.Empty, n, this.revert)
            }
            return o.assert(this.path.getFront() === t,
              "operationForChild called for unrelated child."), new e(
              this.path.popFront(), this.affectedTree, this.revert)
          }, e
        }(),
        it = function() {
          return et || (et = new Pe(N)), et
        },
        ot = function() {
          function e(e, t) {
            void 0 === t && (t = it()), this.value = e, this.children =
              t
          }
          return e.fromObject = function(t) {
            var n = e.Empty;
            return o.forEach(t, function(e, t) {
              n = n.set(new V(e), t)
            }), n
          }, e.prototype.isEmpty = function() {
            return null === this.value && this.children.isEmpty()
          }, e.prototype.findRootMostMatchingPathAndValue = function(
            e, t) {
            if (null != this.value && t(this.value)) return {
              path: V.Empty,
              value: this.value
            };
            if (e.isEmpty()) return null;
            var n = e.getFront(),
              r = this.children.get(n);
            if (null !== r) {
              var i = r.findRootMostMatchingPathAndValue(e.popFront(),
                t);
              return null != i ? {
                path: new V(n).child(i.path),
                value: i.value
              } : null
            }
            return null
          }, e.prototype.findRootMostValueAndPath = function(e) {
            return this.findRootMostMatchingPathAndValue(e, function() {
              return !0
            })
          }, e.prototype.subtree = function(t) {
            if (t.isEmpty()) return this;
            var n = t.getFront(),
              r = this.children.get(n);
            return null !== r ? r.subtree(t.popFront()) : e.Empty
          }, e.prototype.set = function(t, n) {
            if (t.isEmpty()) return new e(n, this.children);
            var r = t.getFront(),
              i = (this.children.get(r) || e.Empty).set(t.popFront(),
                n),
              o = this.children.insert(r, i);
            return new e(this.value, o)
          }, e.prototype.remove = function(t) {
            if (t.isEmpty()) return this.children.isEmpty() ? e.Empty :
              new e(null, this.children);
            var n = t.getFront(),
              r = this.children.get(n);
            if (r) {
              var i = r.remove(t.popFront()),
                o = void 0;
              return o = i.isEmpty() ? this.children.remove(n) : this
                .children.insert(n, i), null === this.value && o.isEmpty() ?
                e.Empty : new e(this.value, o)
            }
            return this
          }, e.prototype.get = function(e) {
            if (e.isEmpty()) return this.value;
            var t = e.getFront(),
              n = this.children.get(t);
            return n ? n.get(e.popFront()) : null
          }, e.prototype.setTree = function(t, n) {
            if (t.isEmpty()) return n;
            var r = t.getFront(),
              i = (this.children.get(r) || e.Empty).setTree(t.popFront(),
                n),
              o = void 0;
            return o = i.isEmpty() ? this.children.remove(r) : this.children
              .insert(r, i), new e(this.value, o)
          }, e.prototype.fold = function(e) {
            return this.fold_(V.Empty, e)
          }, e.prototype.fold_ = function(e, t) {
            var n = {};
            return this.children.inorderTraversal(function(r, i) {
              n[r] = i.fold_(e.child(r), t)
            }), t(e, this.value, n)
          }, e.prototype.findOnPath = function(e, t) {
            return this.findOnPath_(e, V.Empty, t)
          }, e.prototype.findOnPath_ = function(e, t, n) {
            var r = !!this.value && n(t, this.value);
            if (r) return r;
            if (e.isEmpty()) return null;
            var i = e.getFront(),
              o = this.children.get(i);
            return o ? o.findOnPath_(e.popFront(), t.child(i), n) :
              null
          }, e.prototype.foreachOnPath = function(e, t) {
            return this.foreachOnPath_(e, V.Empty, t)
          }, e.prototype.foreachOnPath_ = function(t, n, r) {
            if (t.isEmpty()) return this;
            this.value && r(n, this.value);
            var i = t.getFront(),
              o = this.children.get(i);
            return o ? o.foreachOnPath_(t.popFront(), n.child(i), r) :
              e.Empty
          }, e.prototype.foreach = function(e) {
            this.foreach_(V.Empty, e)
          }, e.prototype.foreach_ = function(e, t) {
            this.children.inorderTraversal(function(n, r) {
              r.foreach_(e.child(n), t)
            }), this.value && t(e, this.value)
          }, e.prototype.foreachChild = function(e) {
            this.children.inorderTraversal(function(t, n) {
              n.value && e(t, n.value)
            })
          }, e.Empty = new e(null), e
        }(),
        at = function() {
          function e(e, t) {
            this.source = e, this.path = t, this.type = Ve.LISTEN_COMPLETE
          }
          return e.prototype.operationForChild = function(t) {
            return this.path.isEmpty() ? new e(this.source, V.Empty) :
              new e(this.source, this.path.popFront())
          }, e
        }(),
        st = function() {
          function e(e, t, n) {
            this.source = e, this.path = t, this.snap = n, this.type =
              Ve.OVERWRITE
          }
          return e.prototype.operationForChild = function(t) {
            return this.path.isEmpty() ? new e(this.source, V.Empty,
              this.snap.getImmediateChild(t)) : new e(this.source,
              this.path.popFront(), this.snap)
          }, e
        }(),
        ut = function() {
          function e(e, t, n) {
            this.source = e, this.path = t, this.children = n, this.type =
              Ve.MERGE
          }
          return e.prototype.operationForChild = function(t) {
            if (this.path.isEmpty()) {
              var n = this.children.subtree(new V(t));
              return n.isEmpty() ? null : n.value ? new st(this.source,
                V.Empty, n.value) : new e(this.source, V.Empty, n)
            }
            return o.assert(this.path.getFront() === t,
              "Can't get a merge for a child not on the path of the operation"
            ), new e(this.source, this.path.popFront(), this.children)
          }, e.prototype.toString = function() {
            return "Operation(" + this.path + ": " + this.source.toString() +
              " merge: " + this.children.toString() + ")"
          }, e
        }(),
        lt = function() {
          function e(e, t, n) {
            this.node_ = e, this.fullyInitialized_ = t, this.filtered_ =
              n
          }
          return e.prototype.isFullyInitialized = function() {
            return this.fullyInitialized_
          }, e.prototype.isFiltered = function() {
            return this.filtered_
          }, e.prototype.isCompleteForPath = function(e) {
            if (e.isEmpty()) return this.isFullyInitialized() && !
              this.filtered_;
            var t = e.getFront();
            return this.isCompleteForChild(t)
          }, e.prototype.isCompleteForChild = function(e) {
            return this.isFullyInitialized() && !this.filtered_ ||
              this.node_.hasChild(e)
          }, e.prototype.getNode = function() {
            return this.node_
          }, e
        }(),
        ct = function() {
          function e(e, t) {
            this.eventCache_ = e, this.serverCache_ = t
          }
          return e.prototype.updateEventSnap = function(t, n, r) {
            return new e(new lt(t, n, r), this.serverCache_)
          }, e.prototype.updateServerSnap = function(t, n, r) {
            return new e(this.eventCache_, new lt(t, n, r))
          }, e.prototype.getEventCache = function() {
            return this.eventCache_
          }, e.prototype.getCompleteEventSnap = function() {
            return this.eventCache_.isFullyInitialized() ? this.eventCache_
              .getNode() : null
          }, e.prototype.getServerCache = function() {
            return this.serverCache_
          }, e.prototype.getCompleteServerSnap = function() {
            return this.serverCache_.isFullyInitialized() ? this.serverCache_
              .getNode() : null
          }, e.Empty = new e(new lt(Le.EMPTY_NODE, !1, !1), new lt(Le
            .EMPTY_NODE, !1, !1)), e
        }(),
        ft = function() {
          function e(e, t, n, r, i) {
            this.type = e, this.snapshotNode = t, this.childName = n,
              this.oldSnap = r, this.prevName = i
          }
          return e.valueChange = function(t) {
              return new e(e.VALUE, t)
            }, e.childAddedChange = function(t, n) {
              return new e(e.CHILD_ADDED, n, t)
            }, e.childRemovedChange = function(t, n) {
              return new e(e.CHILD_REMOVED, n, t)
            }, e.childChangedChange = function(t, n, r) {
              return new e(e.CHILD_CHANGED, n, t, r)
            }, e.childMovedChange = function(t, n) {
              return new e(e.CHILD_MOVED, n, t)
            }, e.CHILD_ADDED = "child_added", e.CHILD_REMOVED =
            "child_removed", e.CHILD_CHANGED = "child_changed", e.CHILD_MOVED =
            "child_moved", e.VALUE = "value", e
        }(),
        pt = function() {
          function e(e) {
            this.index_ = e
          }
          return e.prototype.updateChild = function(e, t, n, r, i, a) {
            o.assert(e.isIndexed(this.index_),
              "A node must be indexed if only a child is updated");
            var s = e.getImmediateChild(t);
            return s.getChild(r).equals(n.getChild(r)) && s.isEmpty() ==
              n.isEmpty() ? e : (null != a && (n.isEmpty() ? e.hasChild(
                t) ? a.trackChildChange(ft.childRemovedChange(t,
                s)) : o.assert(e.isLeafNode(),
                "A child remove without an old child only makes sense on a leaf node"
              ) : s.isEmpty() ? a.trackChildChange(ft.childAddedChange(
                t, n)) : a.trackChildChange(ft.childChangedChange(
                t, n, s))), e.isLeafNode() && n.isEmpty() ? e : e.updateImmediateChild(
                t, n).withIndex(this.index_))
          }, e.prototype.updateFullNode = function(e, t, n) {
            return null != n && (e.isLeafNode() || e.forEachChild(Se,
              function(e, r) {
                t.hasChild(e) || n.trackChildChange(ft.childRemovedChange(
                  e, r))
              }), t.isLeafNode() || t.forEachChild(Se, function(t,
              r) {
              if (e.hasChild(t)) {
                var i = e.getImmediateChild(t);
                i.equals(r) || n.trackChildChange(ft.childChangedChange(
                  t, r, i))
              } else n.trackChildChange(ft.childAddedChange(t,
                r))
            })), t.withIndex(this.index_)
          }, e.prototype.updatePriority = function(e, t) {
            return e.isEmpty() ? Le.EMPTY_NODE : e.updatePriority(t)
          }, e.prototype.filtersNodes = function() {
            return !1
          }, e.prototype.getIndexedFilter = function() {
            return this
          }, e.prototype.getIndex = function() {
            return this.index_
          }, e
        }(),
        ht = function() {
          function e() {
            this.changeMap_ = {}
          }
          return e.prototype.trackChildChange = function(e) {
            var t = e.type,
              n = e.childName;
            o.assert(t == ft.CHILD_ADDED || t == ft.CHILD_CHANGED ||
              t == ft.CHILD_REMOVED,
              "Only child changes supported for tracking"), o.assert(
              ".priority" !== n,
              "Only non-priority child changes can be tracked.");
            var r = o.safeGet(this.changeMap_, n);
            if (r) {
              var i = r.type;
              if (t == ft.CHILD_ADDED && i == ft.CHILD_REMOVED) this.changeMap_[
                n] = ft.childChangedChange(n, e.snapshotNode, r.snapshotNode);
              else if (t == ft.CHILD_REMOVED && i == ft.CHILD_ADDED)
                delete this.changeMap_[n];
              else if (t == ft.CHILD_REMOVED && i == ft.CHILD_CHANGED)
                this.changeMap_[n] = ft.childRemovedChange(n, r.oldSnap);
              else if (t == ft.CHILD_CHANGED && i == ft.CHILD_ADDED)
                this.changeMap_[n] = ft.childAddedChange(n, e.snapshotNode);
              else {
                if (t != ft.CHILD_CHANGED || i != ft.CHILD_CHANGED)
                  throw o.assertionError(
                    "Illegal combination of changes: " + e +
                    " occurred after " + r);
                this.changeMap_[n] = ft.childChangedChange(n, e.snapshotNode,
                  r.oldSnap)
              }
            } else this.changeMap_[n] = e
          }, e.prototype.getChanges = function() {
            return o.getValues(this.changeMap_)
          }, e
        }(),
        dt = new(function() {
          function e() {}
          return e.prototype.getCompleteChild = function(e) {
            return null
          }, e.prototype.getChildAfterChild = function(e, t, n) {
            return null
          }, e
        }()),
        yt = function() {
          function e(e, t, n) {
            void 0 === n && (n = null), this.writes_ = e, this.viewCache_ =
              t, this.optCompleteServerCache_ = n
          }
          return e.prototype.getCompleteChild = function(e) {
            var t = this.viewCache_.getEventCache();
            if (t.isCompleteForChild(e)) return t.getNode().getImmediateChild(
              e);
            var n = null != this.optCompleteServerCache_ ? new lt(
                this.optCompleteServerCache_, !0, !1) : this.viewCache_
              .getServerCache();
            return this.writes_.calcCompleteChild(e, n)
          }, e.prototype.getChildAfterChild = function(e, t, n) {
            var r = null != this.optCompleteServerCache_ ? this.optCompleteServerCache_ :
              this.viewCache_.getCompleteServerSnap(),
              i = this.writes_.calcIndexedSlice(r, t, 1, n, e);
            return 0 === i.length ? null : i[0]
          }, e
        }(),
        vt = function() {
          return function(e, t) {
            this.viewCache = e, this.changes = t
          }
        }(),
        mt = function() {
          function e(e) {
            this.filter_ = e
          }
          return e.prototype.assertIndexed = function(e) {
              o.assert(e.getEventCache().getNode().isIndexed(this.filter_
                .getIndex()), "Event snap not indexed"), o.assert(e.getServerCache()
                .getNode().isIndexed(this.filter_.getIndex()),
                "Server snap not indexed")
            }, e.prototype.applyOperation = function(t, n, r, i) {
              var a, s, u = new ht;
              if (n.type === Ve.OVERWRITE) {
                var l = n;
                l.source.fromUser ? a = this.applyUserOverwrite_(t, l.path,
                  l.snap, r, i, u) : (o.assert(l.source.fromServer,
                    "Unknown source."), s = l.source.tagged || t.getServerCache()
                  .isFiltered() && !l.path.isEmpty(), a = this.applyServerOverwrite_(
                    t, l.path, l.snap, r, i, s, u))
              } else if (n.type === Ve.MERGE) {
                var c = n;
                c.source.fromUser ? a = this.applyUserMerge_(t, c.path,
                  c.children, r, i, u) : (o.assert(c.source.fromServer,
                    "Unknown source."), s = c.source.tagged || t.getServerCache()
                  .isFiltered(), a = this.applyServerMerge_(t, c.path,
                    c.children, r, i, s, u))
              } else if (n.type === Ve.ACK_USER_WRITE) {
                var f = n;
                a = f.revert ? this.revertUserWrite_(t, f.path, r, i, u) :
                  this.ackUserWrite_(t, f.path, f.affectedTree, r, i, u)
              } else {
                if (n.type !== Ve.LISTEN_COMPLETE) throw o.assertionError(
                  "Unknown operation type: " + n.type);
                a = this.listenComplete_(t, n.path, r, u)
              }
              var p = u.getChanges();
              return e.maybeAddValueEvent_(t, a, p), new vt(a, p)
            }, e.maybeAddValueEvent_ = function(e, t, n) {
              var r = t.getEventCache();
              if (r.isFullyInitialized()) {
                var i = r.getNode().isLeafNode() || r.getNode().isEmpty(),
                  o = e.getCompleteEventSnap();
                (n.length > 0 || !e.getEventCache().isFullyInitialized() ||
                  i && !r.getNode().equals(o) || !r.getNode().getPriority()
                  .equals(o.getPriority())) && n.push(ft.valueChange(t.getCompleteEventSnap()))
              }
            }, e.prototype.generateEventCacheAfterServerEvent_ =
            function(e, t, n, r, i) {
              var a = e.getEventCache();
              if (null != n.shadowingWrite(t)) return e;
              var s = void 0,
                u = void 0;
              if (t.isEmpty())
                if (o.assert(e.getServerCache().isFullyInitialized(),
                    "If change path is empty, we must have complete server data"
                  ), e.getServerCache().isFiltered()) {
                  var l = e.getCompleteServerSnap(),
                    c = l instanceof Le ? l : Le.EMPTY_NODE,
                    f = n.calcCompleteEventChildren(c);
                  s = this.filter_.updateFullNode(e.getEventCache().getNode(),
                    f, i)
                } else {
                  var p = n.calcCompleteEventCache(e.getCompleteServerSnap());
                  s = this.filter_.updateFullNode(e.getEventCache().getNode(),
                    p, i)
                } else {
                var h = t.getFront();
                if (".priority" == h) {
                  o.assert(1 == t.getLength(),
                    "Can't have a priority with additional path components"
                  );
                  var d = a.getNode();
                  u = e.getServerCache().getNode();
                  var y = n.calcEventCacheAfterServerOverwrite(t, d, u);
                  s = null != y ? this.filter_.updatePriority(d, y) : a
                    .getNode()
                } else {
                  var v = t.popFront(),
                    m = void 0;
                  if (a.isCompleteForChild(h)) {
                    u = e.getServerCache().getNode();
                    var g = n.calcEventCacheAfterServerOverwrite(t, a.getNode(),
                      u);
                    m = null != g ? a.getNode().getImmediateChild(h).updateChild(
                      v, g) : a.getNode().getImmediateChild(h)
                  } else m = n.calcCompleteChild(h, e.getServerCache());
                  s = null != m ? this.filter_.updateChild(a.getNode(),
                    h, m, v, r, i) : a.getNode()
                }
              }
              return e.updateEventSnap(s, a.isFullyInitialized() || t.isEmpty(),
                this.filter_.filtersNodes())
            }, e.prototype.applyServerOverwrite_ = function(e, t, n, r,
              i, o, a) {
              var s, u = e.getServerCache(),
                l = o ? this.filter_ : this.filter_.getIndexedFilter();
              if (t.isEmpty()) s = l.updateFullNode(u.getNode(), n,
                null);
              else if (l.filtersNodes() && !u.isFiltered()) {
                var c = u.getNode().updateChild(t, n);
                s = l.updateFullNode(u.getNode(), c, null)
              } else {
                var f = t.getFront();
                if (!u.isCompleteForPath(t) && t.getLength() > 1) return
                  e;
                var p = t.popFront(),
                  h = u.getNode().getImmediateChild(f).updateChild(p, n);
                s = ".priority" == f ? l.updatePriority(u.getNode(), h) :
                  l.updateChild(u.getNode(), f, h, p, dt, null)
              }
              var d = e.updateServerSnap(s, u.isFullyInitialized() || t
                  .isEmpty(), l.filtersNodes()),
                y = new yt(r, d, i);
              return this.generateEventCacheAfterServerEvent_(d, t, r,
                y, a)
            }, e.prototype.applyUserOverwrite_ = function(e, t, n, r, i,
              o) {
              var a, s, u = e.getEventCache(),
                l = new yt(r, e, i);
              if (t.isEmpty()) s = this.filter_.updateFullNode(e.getEventCache()
                .getNode(), n, o), a = e.updateEventSnap(s, !0, this.filter_
                .filtersNodes());
              else {
                var c = t.getFront();
                if (".priority" === c) s = this.filter_.updatePriority(
                  e.getEventCache().getNode(), n), a = e.updateEventSnap(
                  s, u.isFullyInitialized(), u.isFiltered());
                else {
                  var f = t.popFront(),
                    p = u.getNode().getImmediateChild(c),
                    h = void 0;
                  if (f.isEmpty()) h = n;
                  else {
                    var d = l.getCompleteChild(c);
                    h = null != d ? ".priority" === f.getBack() && d.getChild(
                        f.parent()).isEmpty() ? d : d.updateChild(f, n) :
                      Le.EMPTY_NODE
                  }
                  if (p.equals(h)) a = e;
                  else {
                    var y = this.filter_.updateChild(u.getNode(), c, h,
                      f, l, o);
                    a = e.updateEventSnap(y, u.isFullyInitialized(),
                      this.filter_.filtersNodes())
                  }
                }
              }
              return a
            }, e.cacheHasChild_ = function(e, t) {
              return e.getEventCache().isCompleteForChild(t)
            }, e.prototype.applyUserMerge_ = function(t, n, r, i, o, a) {
              var s = this,
                u = t;
              return r.foreach(function(r, l) {
                var c = n.child(r);
                e.cacheHasChild_(t, c.getFront()) && (u = s.applyUserOverwrite_(
                  u, c, l, i, o, a))
              }), r.foreach(function(r, l) {
                var c = n.child(r);
                e.cacheHasChild_(t, c.getFront()) || (u = s.applyUserOverwrite_(
                  u, c, l, i, o, a))
              }), u
            }, e.prototype.applyMerge_ = function(e, t) {
              return t.foreach(function(t, n) {
                e = e.updateChild(t, n)
              }), e
            }, e.prototype.applyServerMerge_ = function(e, t, n, r, i,
              o, a) {
              var s = this;
              if (e.getServerCache().getNode().isEmpty() && !e.getServerCache()
                .isFullyInitialized()) return e;
              var u, l = e;
              u = t.isEmpty() ? n : ot.Empty.setTree(t, n);
              var c = e.getServerCache().getNode();
              return u.children.inorderTraversal(function(t, n) {
                if (c.hasChild(t)) {
                  var u = e.getServerCache().getNode().getImmediateChild(
                      t),
                    f = s.applyMerge_(u, n);
                  l = s.applyServerOverwrite_(l, new V(t), f, r, i,
                    o, a)
                }
              }), u.children.inorderTraversal(function(t, n) {
                var u = !e.getServerCache().isCompleteForChild(t) &&
                  null == n.value;
                if (!c.hasChild(t) && !u) {
                  var f = e.getServerCache().getNode().getImmediateChild(
                      t),
                    p = s.applyMerge_(f, n);
                  l = s.applyServerOverwrite_(l, new V(t), p, r, i,
                    o, a)
                }
              }), l
            }, e.prototype.ackUserWrite_ = function(e, t, n, r, i, o) {
              if (null != r.shadowingWrite(t)) return e;
              var a = e.getServerCache().isFiltered(),
                s = e.getServerCache();
              if (null != n.value) {
                if (t.isEmpty() && s.isFullyInitialized() || s.isCompleteForPath(
                    t)) return this.applyServerOverwrite_(e, t, s.getNode()
                  .getChild(t), r, i, a, o);
                if (t.isEmpty()) {
                  var u = ot.Empty;
                  return s.getNode().forEachChild(ye, function(e, t) {
                    u = u.set(new V(e), t)
                  }), this.applyServerMerge_(e, t, u, r, i, a, o)
                }
                return e
              }
              var l = ot.Empty;
              return n.foreach(function(e, n) {
                var r = t.child(e);
                s.isCompleteForPath(r) && (l = l.set(e, s.getNode()
                  .getChild(r)))
              }), this.applyServerMerge_(e, t, l, r, i, a, o)
            }, e.prototype.listenComplete_ = function(e, t, n, r) {
              var i = e.getServerCache(),
                o = e.updateServerSnap(i.getNode(), i.isFullyInitialized() ||
                  t.isEmpty(), i.isFiltered());
              return this.generateEventCacheAfterServerEvent_(o, t, n,
                dt, r)
            }, e.prototype.revertUserWrite_ = function(e, t, n, r, i) {
              var a;
              if (null != n.shadowingWrite(t)) return e;
              var s = new yt(n, e, r),
                u = e.getEventCache().getNode(),
                l = void 0;
              if (t.isEmpty() || ".priority" === t.getFront()) {
                var c = void 0;
                if (e.getServerCache().isFullyInitialized()) c = n.calcCompleteEventCache(
                  e.getCompleteServerSnap());
                else {
                  var f = e.getServerCache().getNode();
                  o.assert(f instanceof Le,
                      "serverChildren would be complete if leaf node"),
                    c = n.calcCompleteEventChildren(f)
                }
                c = c, l = this.filter_.updateFullNode(u, c, i)
              } else {
                var p = t.getFront(),
                  h = n.calcCompleteChild(p, e.getServerCache());
                null == h && e.getServerCache().isCompleteForChild(p) &&
                  (h = u.getImmediateChild(p)), (l = null != h ? this.filter_
                    .updateChild(u, p, h, t.popFront(), s, i) : e.getEventCache()
                    .getNode().hasChild(p) ? this.filter_.updateChild(u,
                      p, Le.EMPTY_NODE, t.popFront(), s, i) : u).isEmpty() &&
                  e.getServerCache().isFullyInitialized() && (a = n.calcCompleteEventCache(
                    e.getCompleteServerSnap())).isLeafNode() && (l =
                    this.filter_.updateFullNode(l, a, i))
              }
              return a = e.getServerCache().isFullyInitialized() ||
                null != n.shadowingWrite(V.Empty), e.updateEventSnap(l,
                  a, this.filter_.filtersNodes())
            }, e
        }(),
        gt = function() {
          function e(e) {
            this.query_ = e, this.index_ = this.query_.getQueryParams()
              .getIndex()
          }
          return e.prototype.generateEventsForChanges = function(e, t,
            n) {
            var r = this,
              i = [],
              o = [];
            return e.forEach(function(e) {
              e.type === ft.CHILD_CHANGED && r.index_.indexedValueChanged(
                e.oldSnap, e.snapshotNode) && o.push(ft.childMovedChange(
                e.childName, e.snapshotNode))
            }), this.generateEventsForType_(i, ft.CHILD_REMOVED, e,
              n, t), this.generateEventsForType_(i, ft.CHILD_ADDED,
              e, n, t), this.generateEventsForType_(i, ft.CHILD_MOVED,
              o, n, t), this.generateEventsForType_(i, ft.CHILD_CHANGED,
              e, n, t), this.generateEventsForType_(i, ft.VALUE, e,
              n, t), i
          }, e.prototype.generateEventsForType_ = function(e, t, n, r,
            i) {
            var o = this,
              a = n.filter(function(e) {
                return e.type === t
              });
            a.sort(this.compareChanges_.bind(this)), a.forEach(
              function(t) {
                var n = o.materializeSingleChange_(t, i);
                r.forEach(function(r) {
                  r.respondsTo(t.type) && e.push(r.createEvent(
                    n, o.query_))
                })
              })
          }, e.prototype.materializeSingleChange_ = function(e, t) {
            return "value" === e.type || "child_removed" === e.type ?
              e : (e.prevName = t.getPredecessorChildName(e.childName,
                e.snapshotNode, this.index_), e)
          }, e.prototype.compareChanges_ = function(e, t) {
            if (null == e.childName || null == t.childName) throw o.assertionError(
              "Should only compare child_ events.");
            var n = new pe(e.childName, e.snapshotNode),
              r = new pe(t.childName, t.snapshotNode);
            return this.index_.compare(n, r)
          }, e
        }(),
        _t = function() {
          function e(e, t) {
            this.query_ = e, this.eventRegistrations_ = [];
            var n = this.query_.getQueryParams(),
              r = new pt(n.getIndex()),
              i = n.getNodeFilter();
            this.processor_ = new mt(i);
            var o = t.getServerCache(),
              a = t.getEventCache(),
              s = r.updateFullNode(Le.EMPTY_NODE, o.getNode(), null),
              u = i.updateFullNode(Le.EMPTY_NODE, a.getNode(), null),
              l = new lt(s, o.isFullyInitialized(), r.filtersNodes()),
              c = new lt(u, a.isFullyInitialized(), i.filtersNodes());
            this.viewCache_ = new ct(c, l), this.eventGenerator_ = new gt(
              this.query_)
          }
          return e.prototype.getQuery = function() {
            return this.query_
          }, e.prototype.getServerCache = function() {
            return this.viewCache_.getServerCache().getNode()
          }, e.prototype.getCompleteServerCache = function(e) {
            var t = this.viewCache_.getCompleteServerSnap();
            return t && (this.query_.getQueryParams().loadsAllData() ||
              !e.isEmpty() && !t.getImmediateChild(e.getFront()).isEmpty()
            ) ? t.getChild(e) : null
          }, e.prototype.isEmpty = function() {
            return 0 === this.eventRegistrations_.length
          }, e.prototype.addEventRegistration = function(e) {
            this.eventRegistrations_.push(e)
          }, e.prototype.removeEventRegistration = function(e, t) {
            var n = [];
            if (t) {
              o.assert(null == e,
                "A cancel should cancel all event registrations.");
              var r = this.query_.path;
              this.eventRegistrations_.forEach(function(e) {
                t = t;
                var i = e.createCancelEvent(t, r);
                i && n.push(i)
              })
            }
            if (e) {
              for (var i = [], a = 0; a < this.eventRegistrations_.length; ++
                a) {
                var s = this.eventRegistrations_[a];
                if (s.matches(e)) {
                  if (e.hasAnyCallback()) {
                    i = i.concat(this.eventRegistrations_.slice(a + 1));
                    break
                  }
                } else i.push(s)
              }
              this.eventRegistrations_ = i
            } else this.eventRegistrations_ = [];
            return n
          }, e.prototype.applyOperation = function(e, t, n) {
            e.type === Ve.MERGE && null !== e.source.queryId && (o.assert(
              this.viewCache_.getCompleteServerSnap(),
              "We should always have a full cache before handling merges"
            ), o.assert(this.viewCache_.getCompleteEventSnap(),
              "Missing event cache, even though we have a server cache"
            ));
            var r = this.viewCache_,
              i = this.processor_.applyOperation(r, e, t, n);
            return this.processor_.assertIndexed(i.viewCache), o.assert(
              i.viewCache.getServerCache().isFullyInitialized() ||
              !r.getServerCache().isFullyInitialized(),
              "Once a server snap is complete, it should never go back"
            ), this.viewCache_ = i.viewCache, this.generateEventsForChanges_(
              i.changes, i.viewCache.getEventCache().getNode(),
              null)
          }, e.prototype.getInitialEvents = function(e) {
            var t = this.viewCache_.getEventCache(),
              n = [];
            t.getNode().isLeafNode() || t.getNode().forEachChild(Se,
              function(e, t) {
                n.push(ft.childAddedChange(e, t))
              });
            return t.isFullyInitialized() && n.push(ft.valueChange(t.getNode())),
              this.generateEventsForChanges_(n, t.getNode(), e)
          }, e.prototype.generateEventsForChanges_ = function(e, t, n) {
            var r = n ? [n] : this.eventRegistrations_;
            return this.eventGenerator_.generateEventsForChanges(e, t,
              r)
          }, e
        }(),
        bt = function() {
          function e() {
            this.views_ = {}
          }
          return Object.defineProperty(e, "__referenceConstructor", {
            get: function() {
              return o.assert(tt,
                "Reference.ts has not been loaded"), tt
            },
            set: function(e) {
              o.assert(!tt,
                "__referenceConstructor has already been defined"
              ), tt = e
            },
            enumerable: !0,
            configurable: !0
          }), e.prototype.isEmpty = function() {
            return o.isEmpty(this.views_)
          }, e.prototype.applyOperation = function(e, t, n) {
            var r = e.source.queryId;
            if (null !== r) {
              var i = o.safeGet(this.views_, r);
              return o.assert(null != i,
                "SyncTree gave us an op for an invalid query."), i.applyOperation(
                e, t, n)
            }
            var a = [];
            return o.forEach(this.views_, function(r, i) {
              a = a.concat(i.applyOperation(e, t, n))
            }), a
          }, e.prototype.addEventRegistration = function(e, t, n, r,
            i) {
            var a = e.queryIdentifier(),
              s = o.safeGet(this.views_, a);
            if (!s) {
              var u = n.calcCompleteEventCache(i ? r : null),
                l = !1;
              u ? l = !0 : r instanceof Le ? (u = n.calcCompleteEventChildren(
                r), l = !1) : (u = Le.EMPTY_NODE, l = !1);
              var c = new ct(new lt(u, l, !1), new lt(r, i, !1));
              s = new _t(e, c), this.views_[a] = s
            }
            return s.addEventRegistration(t), s.getInitialEvents(t)
          }, e.prototype.removeEventRegistration = function(t, n, r) {
            var i = t.queryIdentifier(),
              a = [],
              s = [],
              u = this.hasCompleteView();
            if ("default" === i) {
              var l = this;
              o.forEach(this.views_, function(e, t) {
                s = s.concat(t.removeEventRegistration(n, r)), t.isEmpty() &&
                  (delete l.views_[e], t.getQuery().getQueryParams()
                    .loadsAllData() || a.push(t.getQuery()))
              })
            } else {
              var c = o.safeGet(this.views_, i);
              c && (s = s.concat(c.removeEventRegistration(n, r)), c.isEmpty() &&
                (delete this.views_[i], c.getQuery().getQueryParams()
                  .loadsAllData() || a.push(c.getQuery())))
            }
            return u && !this.hasCompleteView() && a.push(new e.__referenceConstructor(
              t.repo, t.path)), {
              removed: a,
              events: s
            }
          }, e.prototype.getQueryViews = function() {
            var e = this;
            return Object.keys(this.views_).map(function(t) {
              return e.views_[t]
            }).filter(function(e) {
              return !e.getQuery().getQueryParams().loadsAllData()
            })
          }, e.prototype.getCompleteServerCache = function(e) {
            var t = null;
            return o.forEach(this.views_, function(n, r) {
              t = t || r.getCompleteServerCache(e)
            }), t
          }, e.prototype.viewForQuery = function(e) {
            if (e.getQueryParams().loadsAllData()) return this.getCompleteView();
            var t = e.queryIdentifier();
            return o.safeGet(this.views_, t)
          }, e.prototype.viewExistsForQuery = function(e) {
            return null != this.viewForQuery(e)
          }, e.prototype.hasCompleteView = function() {
            return null != this.getCompleteView()
          }, e.prototype.getCompleteView = function() {
            return o.findValue(this.views_, function(e) {
              return e.getQuery().getQueryParams().loadsAllData()
            }) || null
          }, e
        }(),
        wt = function() {
          function e(e) {
            this.writeTree_ = e
          }
          return e.prototype.addWrite = function(t, n) {
              if (t.isEmpty()) return new e(new ot(n));
              var r = this.writeTree_.findRootMostValueAndPath(t);
              if (null != r) {
                var i = r.path,
                  o = r.value,
                  a = V.relativePath(i, t);
                return o = o.updateChild(a, n), new e(this.writeTree_.set(
                  i, o))
              }
              var s = new ot(n);
              return new e(this.writeTree_.setTree(t, s))
            }, e.prototype.addWrites = function(e, t) {
              var n = this;
              return o.forEach(t, function(t, r) {
                n = n.addWrite(e.child(t), r)
              }), n
            }, e.prototype.removeWrite = function(t) {
              return t.isEmpty() ? e.Empty : new e(this.writeTree_.setTree(
                t, ot.Empty))
            }, e.prototype.hasCompleteWrite = function(e) {
              return null != this.getCompleteNode(e)
            }, e.prototype.getCompleteNode = function(e) {
              var t = this.writeTree_.findRootMostValueAndPath(e);
              return null != t ? this.writeTree_.get(t.path).getChild(V
                .relativePath(t.path, e)) : null
            }, e.prototype.getCompleteChildren = function() {
              var e = [],
                t = this.writeTree_.value;
              return null != t ? t.isLeafNode() || t.forEachChild(Se,
                function(t, n) {
                  e.push(new pe(t, n))
                }) : this.writeTree_.children.inorderTraversal(
                function(t, n) {
                  null != n.value && e.push(new pe(t, n.value))
                }), e
            }, e.prototype.childCompoundWrite = function(t) {
              if (t.isEmpty()) return this;
              var n = this.getCompleteNode(t);
              return new e(null != n ? new ot(n) : this.writeTree_.subtree(
                t))
            }, e.prototype.isEmpty = function() {
              return this.writeTree_.isEmpty()
            }, e.prototype.apply = function(t) {
              return e.applySubtreeWrite_(V.Empty, this.writeTree_, t)
            }, e.Empty = new e(new ot(null)), e.applySubtreeWrite_ =
            function(t, n, r) {
              if (null != n.value) return r.updateChild(t, n.value);
              var i = null;
              return n.children.inorderTraversal(function(n, a) {
                ".priority" === n ? (o.assert(null !== a.value,
                    "Priority writes must always be leaf nodes"),
                  i = a.value) : r = e.applySubtreeWrite_(t.child(
                  n), a, r)
              }), r.getChild(t).isEmpty() || null === i || (r = r.updateChild(
                t.child(".priority"), i)), r
            }, e
        }(),
        Et = function() {
          function e() {
            this.visibleWrites_ = wt.Empty, this.allWrites_ = [], this.lastWriteId_ = -
              1
          }
          return e.prototype.childWrites = function(e) {
              return new Ct(e, this)
            }, e.prototype.addOverwrite = function(e, t, n, r) {
              o.assert(n > this.lastWriteId_,
                  "Stacking an older write on top of newer ones"), void 0 ===
                r && (r = !0), this.allWrites_.push({
                  path: e,
                  snap: t,
                  writeId: n,
                  visible: r
                }), r && (this.visibleWrites_ = this.visibleWrites_.addWrite(
                  e, t)), this.lastWriteId_ = n
            }, e.prototype.addMerge = function(e, t, n) {
              o.assert(n > this.lastWriteId_,
                  "Stacking an older merge on top of newer ones"), this
                .allWrites_.push({
                  path: e,
                  children: t,
                  writeId: n,
                  visible: !0
                }), this.visibleWrites_ = this.visibleWrites_.addWrites(
                  e, t), this.lastWriteId_ = n
            }, e.prototype.getWrite = function(e) {
              for (var t = 0; t < this.allWrites_.length; t++) {
                var n = this.allWrites_[t];
                if (n.writeId === e) return n
              }
              return null
            }, e.prototype.removeWrite = function(e) {
              var t = this,
                n = this.allWrites_.findIndex(function(t) {
                  return t.writeId === e
                });
              o.assert(n >= 0,
                "removeWrite called with nonexistent writeId.");
              var r = this.allWrites_[n];
              this.allWrites_.splice(n, 1);
              for (var i = r.visible, a = !1, s = this.allWrites_.length -
                  1; i && s >= 0;) {
                var u = this.allWrites_[s];
                u.visible && (s >= n && this.recordContainsPath_(u, r.path) ?
                  i = !1 : r.path.contains(u.path) && (a = !0)), s--
              }
              if (i) {
                if (a) return this.resetTree_(), !0;
                if (r.snap) this.visibleWrites_ = this.visibleWrites_.removeWrite(
                  r.path);
                else {
                  var l = r.children;
                  o.forEach(l, function(e) {
                    t.visibleWrites_ = t.visibleWrites_.removeWrite(
                      r.path.child(e))
                  })
                }
                return !0
              }
              return !1
            }, e.prototype.getCompleteWriteData = function(e) {
              return this.visibleWrites_.getCompleteNode(e)
            }, e.prototype.calcCompleteEventCache = function(t, n, r, i) {
              if (r || i) {
                var o = this.visibleWrites_.childCompoundWrite(t);
                if (!i && o.isEmpty()) return n;
                if (i || null != n || o.hasCompleteWrite(V.Empty)) {
                  var a = e.layerTree_(this.allWrites_, function(e) {
                    return (e.visible || i) && (!r || !~r.indexOf(e
                      .writeId)) && (e.path.contains(t) || t.contains(
                      e.path))
                  }, t);
                  l = n || Le.EMPTY_NODE;
                  return a.apply(l)
                }
                return null
              }
              var s = this.visibleWrites_.getCompleteNode(t);
              if (null != s) return s;
              var u = this.visibleWrites_.childCompoundWrite(t);
              if (u.isEmpty()) return n;
              if (null != n || u.hasCompleteWrite(V.Empty)) {
                var l = n || Le.EMPTY_NODE;
                return u.apply(l)
              }
              return null
            }, e.prototype.calcCompleteEventChildren = function(e, t) {
              var n = Le.EMPTY_NODE,
                r = this.visibleWrites_.getCompleteNode(e);
              if (r) return r.isLeafNode() || r.forEachChild(Se,
                function(e, t) {
                  n = n.updateImmediateChild(e, t)
                }), n;
              if (t) {
                var i = this.visibleWrites_.childCompoundWrite(e);
                return t.forEachChild(Se, function(e, t) {
                  var r = i.childCompoundWrite(new V(e)).apply(t);
                  n = n.updateImmediateChild(e, r)
                }), i.getCompleteChildren().forEach(function(e) {
                  n = n.updateImmediateChild(e.name, e.node)
                }), n
              }
              return this.visibleWrites_.childCompoundWrite(e).getCompleteChildren()
                .forEach(function(e) {
                  n = n.updateImmediateChild(e.name, e.node)
                }), n
            }, e.prototype.calcEventCacheAfterServerOverwrite =
            function(e, t, n, r) {
              o.assert(n || r,
                "Either existingEventSnap or existingServerSnap must exist"
              );
              var i = e.child(t);
              if (this.visibleWrites_.hasCompleteWrite(i)) return null;
              var a = this.visibleWrites_.childCompoundWrite(i);
              return a.isEmpty() ? r.getChild(t) : a.apply(r.getChild(t))
            }, e.prototype.calcCompleteChild = function(e, t, n) {
              var r = e.child(t),
                i = this.visibleWrites_.getCompleteNode(r);
              return null != i ? i : n.isCompleteForChild(t) ? this.visibleWrites_
                .childCompoundWrite(r).apply(n.getNode().getImmediateChild(
                  t)) : null
            }, e.prototype.shadowingWrite = function(e) {
              return this.visibleWrites_.getCompleteNode(e)
            }, e.prototype.calcIndexedSlice = function(e, t, n, r, i, o) {
              var a, s = this.visibleWrites_.childCompoundWrite(e),
                u = s.getCompleteNode(V.Empty);
              if (null != u) a = u;
              else {
                if (null == t) return [];
                a = s.apply(t)
              }
              if ((a = a.withIndex(o)).isEmpty() || a.isLeafNode())
                return [];
              for (var l = [], c = o.getCompare(), f = i ? a.getReverseIteratorFrom(
                  n, o) : a.getIteratorFrom(n, o), p = f.getNext(); p &&
                l.length < r;) 0 !== c(p, n) && l.push(p), p = f.getNext();
              return l
            }, e.prototype.recordContainsPath_ = function(e, t) {
              return e.snap ? e.path.contains(t) : !!o.findKey(e.children,
                function(n, r) {
                  return e.path.child(r).contains(t)
                })
            }, e.prototype.resetTree_ = function() {
              this.visibleWrites_ = e.layerTree_(this.allWrites_, e.DefaultFilter_,
                  V.Empty), this.allWrites_.length > 0 ? this.lastWriteId_ =
                this.allWrites_[this.allWrites_.length - 1].writeId :
                this.lastWriteId_ = -1
            }, e.DefaultFilter_ = function(e) {
              return e.visible
            }, e.layerTree_ = function(e, t, n) {
              for (var r = wt.Empty, i = 0; i < e.length; ++i) {
                var a = e[i];
                if (t(a)) {
                  var s = a.path,
                    u = void 0;
                  if (a.snap) n.contains(s) ? (u = V.relativePath(n, s),
                    r = r.addWrite(u, a.snap)) : s.contains(n) && (u =
                    V.relativePath(s, n), r = r.addWrite(V.Empty, a.snap
                      .getChild(u)));
                  else {
                    if (!a.children) throw o.assertionError(
                      "WriteRecord should have .snap or .children");
                    if (n.contains(s)) u = V.relativePath(n, s), r = r.addWrites(
                      u, a.children);
                    else if (s.contains(n))
                      if ((u = V.relativePath(s, n)).isEmpty()) r = r.addWrites(
                        V.Empty, a.children);
                      else {
                        var l = o.safeGet(a.children, u.getFront());
                        if (l) {
                          var c = l.getChild(u.popFront());
                          r = r.addWrite(V.Empty, c)
                        }
                      }
                  }
                }
              }
              return r
            }, e
        }(),
        Ct = function() {
          function e(e, t) {
            this.treePath_ = e, this.writeTree_ = t
          }
          return e.prototype.calcCompleteEventCache = function(e, t, n) {
              return this.writeTree_.calcCompleteEventCache(this.treePath_,
                e, t, n)
            }, e.prototype.calcCompleteEventChildren = function(e) {
              return this.writeTree_.calcCompleteEventChildren(this.treePath_,
                e)
            }, e.prototype.calcEventCacheAfterServerOverwrite =
            function(e, t, n) {
              return this.writeTree_.calcEventCacheAfterServerOverwrite(
                this.treePath_, e, t, n)
            }, e.prototype.shadowingWrite = function(e) {
              return this.writeTree_.shadowingWrite(this.treePath_.child(
                e))
            }, e.prototype.calcIndexedSlice = function(e, t, n, r, i) {
              return this.writeTree_.calcIndexedSlice(this.treePath_, e,
                t, n, r, i)
            }, e.prototype.calcCompleteChild = function(e, t) {
              return this.writeTree_.calcCompleteChild(this.treePath_,
                e, t)
            }, e.prototype.child = function(t) {
              return new e(this.treePath_.child(t), this.writeTree_)
            }, e
        }(),
        St = function() {
          function e(e) {
            this.listenProvider_ = e, this.syncPointTree_ = ot.Empty,
              this.pendingWriteTree_ = new Et, this.tagToQueryMap_ = {},
              this.queryToTagMap_ = {}
          }
          return e.prototype.applyUserOverwrite = function(e, t, n, r) {
            return this.pendingWriteTree_.addOverwrite(e, t, n, r), r ?
              this.applyOperationToSyncPoints_(new st(nt.User, e, t)) : []
          }, e.prototype.applyUserMerge = function(e, t, n) {
            this.pendingWriteTree_.addMerge(e, t, n);
            var r = ot.fromObject(t);
            return this.applyOperationToSyncPoints_(new ut(nt.User, e,
              r))
          }, e.prototype.ackUserWrite = function(e, t) {
            void 0 === t && (t = !1);
            var n = this.pendingWriteTree_.getWrite(e);
            if (this.pendingWriteTree_.removeWrite(e)) {
              var r = ot.Empty;
              return null != n.snap ? r = r.set(V.Empty, !0) : o.forEach(
                n.children,
                function(e, t) {
                  r = r.set(new V(e), t)
                }), this.applyOperationToSyncPoints_(new rt(n.path,
                r, t))
            }
            return []
          }, e.prototype.applyServerOverwrite = function(e, t) {
            return this.applyOperationToSyncPoints_(new st(nt.Server,
              e, t))
          }, e.prototype.applyServerMerge = function(e, t) {
            var n = ot.fromObject(t);
            return this.applyOperationToSyncPoints_(new ut(nt.Server,
              e, n))
          }, e.prototype.applyListenComplete = function(e) {
            return this.applyOperationToSyncPoints_(new at(nt.Server,
              e))
          }, e.prototype.applyTaggedQueryOverwrite = function(t, n, r) {
            var i = this.queryKeyForTag_(r);
            if (null != i) {
              var o = e.parseQueryKey_(i),
                a = o.path,
                s = o.queryId,
                u = V.relativePath(a, t),
                l = new st(nt.forServerTaggedQuery(s), u, n);
              return this.applyTaggedOperation_(a, l)
            }
            return []
          }, e.prototype.applyTaggedQueryMerge = function(t, n, r) {
            var i = this.queryKeyForTag_(r);
            if (i) {
              var o = e.parseQueryKey_(i),
                a = o.path,
                s = o.queryId,
                u = V.relativePath(a, t),
                l = ot.fromObject(n),
                c = new ut(nt.forServerTaggedQuery(s), u, l);
              return this.applyTaggedOperation_(a, c)
            }
            return []
          }, e.prototype.applyTaggedListenComplete = function(t, n) {
            var r = this.queryKeyForTag_(n);
            if (r) {
              var i = e.parseQueryKey_(r),
                o = i.path,
                a = i.queryId,
                s = V.relativePath(o, t),
                u = new at(nt.forServerTaggedQuery(a), s);
              return this.applyTaggedOperation_(o, u)
            }
            return []
          }, e.prototype.addEventRegistration = function(t, n) {
            var r = t.path,
              i = null,
              a = !1;
            this.syncPointTree_.foreachOnPath(r, function(e, t) {
              var n = V.relativePath(e, r);
              i = i || t.getCompleteServerCache(n), a = a || t.hasCompleteView()
            });
            var s, u = this.syncPointTree_.get(r);
            (u ? (a = a || u.hasCompleteView(), i = i || u.getCompleteServerCache(
              V.Empty)) : (u = new bt, this.syncPointTree_ = this.syncPointTree_
              .set(r, u)), null != i) ? s = !0: (s = !1, i = Le.EMPTY_NODE,
              this.syncPointTree_.subtree(r).foreachChild(function(
                e, t) {
                var n = t.getCompleteServerCache(V.Empty);
                n && (i = i.updateImmediateChild(e, n))
              }));
            var l = u.viewExistsForQuery(t);
            if (!l && !t.getQueryParams().loadsAllData()) {
              var c = e.makeQueryKey_(t);
              o.assert(!(c in this.queryToTagMap_),
                "View does not exist, but we have a tag");
              var f = e.getNextQueryTag_();
              this.queryToTagMap_[c] = f, this.tagToQueryMap_["_" + f] =
                c
            }
            var p = this.pendingWriteTree_.childWrites(r),
              h = u.addEventRegistration(t, n, p, i, s);
            if (!l && !a) {
              var d = u.viewForQuery(t);
              h = h.concat(this.setupListener_(t, d))
            }
            return h
          }, e.prototype.removeEventRegistration = function(t, n, r) {
            var i = this,
              o = t.path,
              a = this.syncPointTree_.get(o),
              s = [];
            if (a && ("default" === t.queryIdentifier() || a.viewExistsForQuery(
                t))) {
              var u = a.removeEventRegistration(t, n, r);
              a.isEmpty() && (this.syncPointTree_ = this.syncPointTree_
                .remove(o));
              var l = u.removed;
              s = u.events;
              var c = -1 !== l.findIndex(function(e) {
                  return e.getQueryParams().loadsAllData()
                }),
                f = this.syncPointTree_.findOnPath(o, function(e, t) {
                  return t.hasCompleteView()
                });
              if (c && !f) {
                var p = this.syncPointTree_.subtree(o);
                if (!p.isEmpty())
                  for (var h = this.collectDistinctViewsForSubTree_(p),
                      d = 0; d < h.length; ++d) {
                    var y = h[d],
                      v = y.getQuery(),
                      m = this.createListenerForView_(y);
                    this.listenProvider_.startListening(e.queryForListening_(
                      v), this.tagForQuery_(v), m.hashFn, m.onComplete)
                  }
              }
              if (!f && l.length > 0 && !r)
                if (c) {
                  this.listenProvider_.stopListening(e.queryForListening_(
                    t), null)
                } else l.forEach(function(t) {
                  var n = i.queryToTagMap_[e.makeQueryKey_(t)];
                  i.listenProvider_.stopListening(e.queryForListening_(
                    t), n)
                });
              this.removeTags_(l)
            }
            return s
          }, e.prototype.calcCompleteEventCache = function(e, t) {
            var n = this.pendingWriteTree_,
              r = this.syncPointTree_.findOnPath(e, function(t, n) {
                var r = V.relativePath(t, e),
                  i = n.getCompleteServerCache(r);
                if (i) return i
              });
            return n.calcCompleteEventCache(e, r, t, !0)
          }, e.prototype.collectDistinctViewsForSubTree_ = function(e) {
            return e.fold(function(e, t, n) {
              if (t && t.hasCompleteView()) return [t.getCompleteView()];
              var r = [];
              return t && (r = t.getQueryViews()), o.forEach(n,
                function(e, t) {
                  r = r.concat(t)
                }), r
            })
          }, e.prototype.removeTags_ = function(t) {
            for (var n = 0; n < t.length; ++n) {
              var r = t[n];
              if (!r.getQueryParams().loadsAllData()) {
                var i = e.makeQueryKey_(r),
                  o = this.queryToTagMap_[i];
                delete this.queryToTagMap_[i], delete this.tagToQueryMap_[
                  "_" + o]
              }
            }
          }, e.queryForListening_ = function(e) {
            return e.getQueryParams().loadsAllData() && !e.getQueryParams()
              .isDefault() ? e.getRef() : e
          }, e.prototype.setupListener_ = function(t, n) {
            var r = t.path,
              i = this.tagForQuery_(t),
              a = this.createListenerForView_(n),
              s = this.listenProvider_.startListening(e.queryForListening_(
                t), i, a.hashFn, a.onComplete),
              u = this.syncPointTree_.subtree(r);
            if (i) o.assert(!u.value.hasCompleteView(),
              "If we're adding a query, it shouldn't be shadowed");
            else
              for (var l = u.fold(function(e, t, n) {
                  if (!e.isEmpty() && t && t.hasCompleteView())
                    return [t.getCompleteView().getQuery()];
                  var r = [];
                  return t && (r = r.concat(t.getQueryViews().map(
                    function(e) {
                      return e.getQuery()
                    }))), o.forEach(n, function(e, t) {
                    r = r.concat(t)
                  }), r
                }), c = 0; c < l.length; ++c) {
                var f = l[c];
                this.listenProvider_.stopListening(e.queryForListening_(
                  f), this.tagForQuery_(f))
              }
            return s
          }, e.prototype.createListenerForView_ = function(e) {
            var t = this,
              n = e.getQuery(),
              r = this.tagForQuery_(n);
            return {
              hashFn: function() {
                return (e.getServerCache() || Le.EMPTY_NODE).hash()
              },
              onComplete: function(e) {
                if ("ok" === e) return r ? t.applyTaggedListenComplete(
                  n.path, r) : t.applyListenComplete(n.path);
                var i = function(e, t) {
                  var n = "Unknown Error";
                  "too_big" === e ? n =
                    "The data requested exceeds the maximum size that can be accessed with a single request." :
                    "permission_denied" == e ? n =
                    "Client doesn't have permission to access the desired data." :
                    "unavailable" == e && (n =
                      "The service is unavailable");
                  var r = new Error(e + " at " + t.path.toString() +
                    ": " + n);
                  return r.code = e.toUpperCase(), r
                }(e, n);
                return t.removeEventRegistration(n, null, i)
              }
            }
          }, e.makeQueryKey_ = function(e) {
            return e.path.toString() + "$" + e.queryIdentifier()
          }, e.parseQueryKey_ = function(e) {
            var t = e.indexOf("$");
            return o.assert(-1 !== t && t < e.length - 1,
              "Bad queryKey."), {
              queryId: e.substr(t + 1),
              path: new V(e.substr(0, t))
            }
          }, e.prototype.queryKeyForTag_ = function(e) {
            return this.tagToQueryMap_["_" + e]
          }, e.prototype.tagForQuery_ = function(t) {
            var n = e.makeQueryKey_(t);
            return o.safeGet(this.queryToTagMap_, n)
          }, e.getNextQueryTag_ = function() {
            return e.nextQueryTag_++
          }, e.prototype.applyTaggedOperation_ = function(e, t) {
            var n = this.syncPointTree_.get(e);
            o.assert(n,
              "Missing sync point for query tag that we're tracking"
            );
            var r = this.pendingWriteTree_.childWrites(e);
            return n.applyOperation(t, r, null)
          }, e.prototype.applyOperationToSyncPoints_ = function(e) {
            return this.applyOperationHelper_(e, this.syncPointTree_,
              null, this.pendingWriteTree_.childWrites(V.Empty))
          }, e.prototype.applyOperationHelper_ = function(e, t, n, r) {
            if (e.path.isEmpty()) return this.applyOperationDescendantsHelper_(
              e, t, n, r);
            var i = t.get(V.Empty);
            null == n && null != i && (n = i.getCompleteServerCache(V
              .Empty));
            var o = [],
              a = e.path.getFront(),
              s = e.operationForChild(a),
              u = t.children.get(a);
            if (u && s) {
              var l = n ? n.getImmediateChild(a) : null,
                c = r.child(a);
              o = o.concat(this.applyOperationHelper_(s, u, l, c))
            }
            return i && (o = o.concat(i.applyOperation(e, r, n))), o
          }, e.prototype.applyOperationDescendantsHelper_ = function(
            e, t, n, r) {
            var i = this,
              o = t.get(V.Empty);
            null == n && null != o && (n = o.getCompleteServerCache(V
              .Empty));
            var a = [];
            return t.children.inorderTraversal(function(t, o) {
              var s = n ? n.getImmediateChild(t) : null,
                u = r.child(t),
                l = e.operationForChild(t);
              l && (a = a.concat(i.applyOperationDescendantsHelper_(
                l, o, s, u)))
            }), o && (a = a.concat(o.applyOperation(e, r, n))), a
          }, e.nextQueryTag_ = 1, e
        }(),
        Tt = function() {
          function e() {
            this.rootNode_ = Le.EMPTY_NODE
          }
          return e.prototype.getNode = function(e) {
            return this.rootNode_.getChild(e)
          }, e.prototype.updateSnapshot = function(e, t) {
            this.rootNode_ = this.rootNode_.updateChild(e, t)
          }, e
        }(),
        xt = function() {
          function e(e) {
            this.app_ = e
          }
          return e.prototype.getToken = function(e) {
            return this.app_.INTERNAL.getToken(e).then(null, function(
              e) {
              return e && "auth/token-not-initialized" === e.code ?
                (w(
                  "Got auth/token-not-initialized error.  Treating as null token."
                ), null) : Promise.reject(e)
            })
          }, e.prototype.addTokenChangeListener = function(e) {
            this.app_.INTERNAL.addAuthTokenListener(e)
          }, e.prototype.removeTokenChangeListener = function(e) {
            this.app_.INTERNAL.removeAuthTokenListener(e)
          }, e.prototype.notifyForInvalidToken = function() {
            var e =
              'Provided authentication credentials for the app named "' +
              this.app_.name +
              '" are invalid. This usually indicates your app was not initialized correctly. ';
            "credential" in this.app_.options ? e +=
              'Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.' :
              "serviceAccount" in this.app_.options ? e +=
              'Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.' :
              e +=
              'Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',
              T(e)
          }, e
        }(),
        kt = function() {
          function e() {
            this.counters_ = {}
          }
          return e.prototype.incrementCounter = function(e, t) {
            void 0 === t && (t = 1), o.contains(this.counters_, e) ||
              (this.counters_[e] = 0), this.counters_[e] += t
          }, e.prototype.get = function() {
            return o.deepCopy(this.counters_)
          }, e
        }(),
        Pt = function() {
          function e() {}
          return e.getCollection = function(e) {
            var t = e.toString();
            return this.collections_[t] || (this.collections_[t] =
              new kt), this.collections_[t]
          }, e.getOrCreateReporter = function(e, t) {
            var n = e.toString();
            return this.reporters_[n] || (this.reporters_[n] = t()),
              this.reporters_[n]
          }, e.collections_ = {}, e.reporters_ = {}, e
        }(),
        Ot = function() {
          function e(e) {
            this.collection_ = e, this.last_ = null
          }
          return e.prototype.get = function() {
            var e = this.collection_.get(),
              t = o.clone(e);
            return this.last_ && o.forEach(this.last_, function(e, n) {
              t[e] = t[e] - n
            }), this.last_ = e, t
          }, e
        }(),
        Nt = 1e4,
        It = 3e4,
        Rt = function() {
          function e(e, t) {
            this.server_ = t, this.statsToReport_ = {}, this.statsListener_ =
              new Ot(e);
            var n = Nt + (It - Nt) * Math.random();
            W(this.reportStats_.bind(this), Math.floor(n))
          }
          return e.prototype.includeStat = function(e) {
            this.statsToReport_[e] = !0
          }, e.prototype.reportStats_ = function() {
            var e = this,
              t = this.statsListener_.get(),
              n = {},
              r = !1;
            o.forEach(t, function(t, i) {
              i > 0 && o.contains(e.statsToReport_, t) && (n[t] =
                i, r = !0)
            }), r && this.server_.reportStats(n), W(this.reportStats_
              .bind(this), Math.floor(2 * Math.random() * 3e5))
          }, e
        }(),
        At = function() {
          function e() {
            this.eventLists_ = [], this.recursionDepth_ = 0
          }
          return e.prototype.queueEvents = function(e) {
              for (var t = null, n = 0; n < e.length; n++) {
                var r = e[n],
                  i = r.getPath();
                null === t || i.equals(t.getPath()) || (this.eventLists_
                    .push(t), t = null), null === t && (t = new Dt(i)),
                  t.add(r)
              }
              t && this.eventLists_.push(t)
            }, e.prototype.raiseEventsAtPath = function(e, t) {
              this.queueEvents(t), this.raiseQueuedEventsMatchingPredicate_(
                function(t) {
                  return t.equals(e)
                })
            }, e.prototype.raiseEventsForChangedPath = function(e, t) {
              this.queueEvents(t), this.raiseQueuedEventsMatchingPredicate_(
                function(t) {
                  return t.contains(e) || e.contains(t)
                })
            }, e.prototype.raiseQueuedEventsMatchingPredicate_ =
            function(e) {
              this.recursionDepth_++;
              for (var t = !0, n = 0; n < this.eventLists_.length; n++) {
                var r = this.eventLists_[n];
                if (r) e(r.getPath()) ? (this.eventLists_[n].raise(),
                  this.eventLists_[n] = null) : t = !1
              }
              t && (this.eventLists_ = []), this.recursionDepth_--
            }, e
        }(),
        Dt = function() {
          function e(e) {
            this.path_ = e, this.events_ = []
          }
          return e.prototype.add = function(e) {
            this.events_.push(e)
          }, e.prototype.raise = function() {
            for (var e = 0; e < this.events_.length; e++) {
              var t = this.events_[e];
              if (null !== t) {
                this.events_[e] = null;
                var n = t.getEventRunner();
                g && w("event: " + t.toString()), j(n)
              }
            }
          }, e.prototype.getPath = function() {
            return this.path_
          }, e
        }(),
        Ft = function() {
          function e(e) {
            this.allowedEvents_ = e, this.listeners_ = {}, o.assert(
              Array.isArray(e) && e.length > 0,
              "Requires a non-empty array")
          }
          return e.prototype.trigger = function(e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n -
              1] = arguments[n];
            if (Array.isArray(this.listeners_[e]))
              for (var r = this.listeners_[e].slice(), i = 0; i < r.length; i++)
                r[i].callback.apply(r[i].context, t)
          }, e.prototype.on = function(e, t, n) {
            this.validateEventType_(e), this.listeners_[e] = this.listeners_[
              e] || [], this.listeners_[e].push({
              callback: t,
              context: n
            });
            var r = this.getInitialEvent(e);
            r && t.apply(n, r)
          }, e.prototype.off = function(e, t, n) {
            this.validateEventType_(e);
            for (var r = this.listeners_[e] || [], i = 0; i < r.length; i++)
              if (r[i].callback === t && (!n || n === r[i].context))
                return void r.splice(i, 1)
          }, e.prototype.validateEventType_ = function(e) {
            o.assert(this.allowedEvents_.find(function(t) {
              return t === e
            }), "Unknown event: " + e)
          }, e
        }(),
        Lt = function(e) {
          function t() {
            var t, n, r = e.call(this, ["visible"]) || this;
            return "undefined" !== typeof document && "undefined" !==
              typeof document.addEventListener && ("undefined" !==
                typeof document.hidden ? (n = "visibilitychange", t =
                  "hidden") : "undefined" !== typeof document.mozHidden ?
                (n = "mozvisibilitychange", t = "mozHidden") :
                "undefined" !== typeof document.msHidden ? (n =
                  "msvisibilitychange", t = "msHidden") : "undefined" !==
                typeof document.webkitHidden && (n =
                  "webkitvisibilitychange", t = "webkitHidden")), r.visible_ = !
              0, n && document.addEventListener(n, function() {
                var e = !document[t];
                e !== r.visible_ && (r.visible_ = e, r.trigger(
                  "visible", e))
              }, !1), r
          }
          return s.__extends(t, e), t.getInstance = function() {
            return new t
          }, t.prototype.getInitialEvent = function(e) {
            return o.assert("visible" === e, "Unknown event type: " +
              e), [this.visible_]
          }, t
        }(Ft),
        Mt = function(e) {
          function t() {
            var t = e.call(this, ["online"]) || this;
            return t.online_ = !0, "undefined" === typeof window ||
              "undefined" === typeof window.addEventListener || o.isMobileCordova() ||
              (window.addEventListener("online", function() {
                t.online_ || (t.online_ = !0, t.trigger("online", !
                  0))
              }, !1), window.addEventListener("offline", function() {
                t.online_ && (t.online_ = !1, t.trigger("online", !
                  1))
              }, !1)), t
          }
          return s.__extends(t, e), t.getInstance = function() {
            return new t
          }, t.prototype.getInitialEvent = function(e) {
            return o.assert("online" === e, "Unknown event type: " +
              e), [this.online_]
          }, t.prototype.currentlyOnline = function() {
            return this.online_
          }, t
        }(Ft),
        jt = function() {
          function e(e) {
            this.onMessage_ = e, this.pendingResponses = [], this.currentResponseNum =
              0, this.closeAfterResponse = -1, this.onClose = null
          }
          return e.prototype.closeAfter = function(e, t) {
            this.closeAfterResponse = e, this.onClose = t, this.closeAfterResponse <
              this.currentResponseNum && (this.onClose(), this.onClose =
                null)
          }, e.prototype.handleResponse = function(e, t) {
            var n = this;
            this.pendingResponses[e] = t;
            for (var r = function() {
                var e = i.pendingResponses[i.currentResponseNum];
                delete i.pendingResponses[i.currentResponseNum];
                for (var t = function(t) {
                    e[t] && j(function() {
                      n.onMessage_(e[t])
                    })
                  }, r = 0; r < e.length; ++r) t(r);
                if (i.currentResponseNum === i.closeAfterResponse)
                  return i.onClose && (i.onClose(), i.onClose =
                    null), "break";
                i.currentResponseNum++
              }, i = this; this.pendingResponses[this.currentResponseNum];) {
              if ("break" === r()) break
            }
          }, e
        }(),
        Ut = "pLPCommand",
        Wt = "pRTLPCB",
        Vt = function() {
          function e(e, t, n, r) {
            this.connId = e, this.repoInfo = t, this.transportSessionId =
              n, this.lastSessionId = r, this.bytesSent = 0, this.bytesReceived =
              0, this.everConnected_ = !1, this.log_ = E(e), this.stats_ =
              Pt.getCollection(t), this.urlFn = function(e) {
                return t.connectionURL(q, e)
              }
          }
          return e.prototype.open = function(e, t) {
              var n = this;
              this.curSegmentNum = 0, this.onDisconnect_ = t, this.myPacketOrderer =
                new jt(e), this.isClosed_ = !1, this.connectTimeoutTimer_ =
                setTimeout(function() {
                  n.log_("Timed out trying to connect."), n.onClosed_(),
                    n.connectTimeoutTimer_ = null
                }, Math.floor(3e4)),
                function(e) {
                  if (o.isNodeSdk() || "complete" === document.readyState)
                    e();
                  else {
                    var t = !1,
                      n = function n() {
                        document.body ? t || (t = !0, e()) : setTimeout(
                          n, Math.floor(10))
                      };
                    document.addEventListener ? (document.addEventListener(
                      "DOMContentLoaded", n, !1), window.addEventListener(
                      "load", n, !1)) : document.attachEvent && (
                      document.attachEvent("onreadystatechange",
                        function() {
                          "complete" === document.readyState && n()
                        }), window.attachEvent("onload", n))
                  }
                }(function() {
                  if (!n.isClosed_) {
                    n.scriptTagHolder = new Bt(function() {
                      for (var e = [], t = 0; t < arguments.length; t++)
                        e[t] = arguments[t];
                      var r = e[0],
                        i = e[1],
                        o = e[2];
                      if (n.incrementIncomingBytes_(e), n.scriptTagHolder)
                        if (n.connectTimeoutTimer_ && (
                            clearTimeout(n.connectTimeoutTimer_),
                            n.connectTimeoutTimer_ = null), n.everConnected_ = !
                          0, "start" == r) n.id = i, n.password =
                          o;
                        else {
                          if ("close" !== r) throw new Error(
                            "Unrecognized command received: " +
                            r);
                          i ? (n.scriptTagHolder.sendNewPolls = !
                            1, n.myPacketOrderer.closeAfter(i,
                              function() {
                                n.onClosed_()
                              })) : n.onClosed_()
                        }
                    }, function() {
                      for (var e = [], t = 0; t < arguments.length; t++)
                        e[t] = arguments[t];
                      var r = e[0],
                        i = e[1];
                      n.incrementIncomingBytes_(e), n.myPacketOrderer
                        .handleResponse(r, i)
                    }, function() {
                      n.onClosed_()
                    }, n.urlFn);
                    var e = {
                      start: "t"
                    };
                    e.ser = Math.floor(1e8 * Math.random()), n.scriptTagHolder
                      .uniqueCallbackIdentifier && (e.cb = n.scriptTagHolder
                        .uniqueCallbackIdentifier), e.v = "5", n.transportSessionId &&
                      (e.s = n.transportSessionId), n.lastSessionId &&
                      (e.ls = n.lastSessionId), !o.isNodeSdk() &&
                      "undefined" !== typeof location && location.href &&
                      -1 !== location.href.indexOf("firebaseio.com") &&
                      (e.r = "f");
                    var t = n.urlFn(e);
                    n.log_("Connecting via long-poll to " + t), n.scriptTagHolder
                      .addTag(t, function() {})
                  }
                })
            }, e.prototype.start = function() {
              this.scriptTagHolder.startLongPoll(this.id, this.password),
                this.addDisconnectPingFrame(this.id, this.password)
            }, e.forceAllow = function() {
              e.forceAllow_ = !0
            }, e.forceDisallow = function() {
              e.forceDisallow_ = !0
            }, e.isAvailable = function() {
              return e.forceAllow_ || !e.forceDisallow_ && "undefined" !==
                typeof document && null != document.createElement && !(
                  "object" === typeof window && window.chrome && window
                  .chrome.extension && !/^chrome/.test(window.location.href)
                ) && !("object" === typeof Windows && "object" ===
                  typeof Windows.UI) && !o.isNodeSdk()
            }, e.prototype.markConnectionHealthy = function() {}, e.prototype
            .shutdown_ = function() {
              this.isClosed_ = !0, this.scriptTagHolder && (this.scriptTagHolder
                  .close(), this.scriptTagHolder = null), this.myDisconnFrame &&
                (document.body.removeChild(this.myDisconnFrame), this.myDisconnFrame =
                  null), this.connectTimeoutTimer_ && (clearTimeout(
                    this.connectTimeoutTimer_), this.connectTimeoutTimer_ =
                  null)
            }, e.prototype.onClosed_ = function() {
              this.isClosed_ || (this.log_("Longpoll is closing itself"),
                this.shutdown_(), this.onDisconnect_ && (this.onDisconnect_(
                  this.everConnected_), this.onDisconnect_ = null))
            }, e.prototype.close = function() {
              this.isClosed_ || (this.log_("Longpoll is being closed."),
                this.shutdown_())
            }, e.prototype.send = function(e) {
              var t = o.stringify(e);
              this.bytesSent += t.length, this.stats_.incrementCounter(
                "bytes_sent", t.length);
              for (var n = o.base64Encode(t), r = A(n, 1840), i = 0; i <
                r.length; i++) this.scriptTagHolder.enqueueSegment(this
                .curSegmentNum, r.length, r[i]), this.curSegmentNum++
            }, e.prototype.addDisconnectPingFrame = function(e, t) {
              if (!o.isNodeSdk()) {
                this.myDisconnFrame = document.createElement("iframe");
                var n = {
                  dframe: "t"
                };
                n.id = e, n.pw = t, this.myDisconnFrame.src = this.urlFn(
                    n), this.myDisconnFrame.style.display = "none",
                  document.body.appendChild(this.myDisconnFrame)
              }
            }, e.prototype.incrementIncomingBytes_ = function(e) {
              var t = o.stringify(e).length;
              this.bytesReceived += t, this.stats_.incrementCounter(
                "bytes_received", t)
            }, e
        }(),
        Bt = function() {
          function e(t, n, r, i) {
            if (this.onDisconnect = r, this.urlFn = i, this.outstandingRequests =
              new Ye, this.pendingSegs = [], this.currentSerial = Math.floor(
                1e8 * Math.random()), this.sendNewPolls = !0, o.isNodeSdk()
            ) this.commandCB = t, this.onMessageCB = n;
            else {
              this.uniqueCallbackIdentifier = y(), window[Ut + this.uniqueCallbackIdentifier] =
                t, window[Wt + this.uniqueCallbackIdentifier] = n, this
                .myIFrame = e.createIFrame_();
              var a = "";
              if (this.myIFrame.src && "javascript:" === this.myIFrame.src
                .substr(0, "javascript:".length)) a =
                '<script>document.domain="' + document.domain +
                '";<\/script>';
              var s = "<html><body>" + a + "</body></html>";
              try {
                this.myIFrame.doc.open(), this.myIFrame.doc.write(s),
                  this.myIFrame.doc.close()
              } catch (u) {
                w("frame writing exception"), u.stack && w(u.stack), w(
                  u)
              }
            }
          }
          return e.createIFrame_ = function() {
            var e = document.createElement("iframe");
            if (e.style.display = "none", !document.body) throw "Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
            document.body.appendChild(e);
            try {
              e.contentWindow.document || w(
                "No IE domain setting required")
            } catch (n) {
              var t = document.domain;
              e.src =
                "javascript:void((function(){document.open();document.domain='" +
                t + "';document.close();})())"
            }
            return e.contentDocument ? e.doc = e.contentDocument : e.contentWindow ?
              e.doc = e.contentWindow.document : e.document && (e.doc =
                e.document), e
          }, e.prototype.close = function() {
            var t = this;
            if (this.alive = !1, this.myIFrame && (this.myIFrame.doc.body
                .innerHTML = "", setTimeout(function() {
                  null !== t.myIFrame && (document.body.removeChild(
                    t.myIFrame), t.myIFrame = null)
                }, Math.floor(0))), o.isNodeSdk() && this.myID) {
              var n = {
                disconn: "t"
              };
              n.id = this.myID, n.pw = this.myPW;
              var r = this.urlFn(n);
              e.nodeRestRequest(r)
            }
            var i = this.onDisconnect;
            i && (this.onDisconnect = null, i())
          }, e.prototype.startLongPoll = function(e, t) {
            for (this.myID = e, this.myPW = t, this.alive = !0; this.newRequest_();)
            ;
          }, e.prototype.newRequest_ = function() {
            if (this.alive && this.sendNewPolls && this.outstandingRequests
              .count() < (this.pendingSegs.length > 0 ? 2 : 1)) {
              this.currentSerial++;
              var e = {};
              e.id = this.myID, e.pw = this.myPW, e.ser = this.currentSerial;
              for (var t = this.urlFn(e), n = "", r = 0; this.pendingSegs
                .length > 0;) {
                if (!(this.pendingSegs[0].d.length + 30 + n.length <=
                    1870)) break;
                var i = this.pendingSegs.shift();
                n = n + "&seg" + r + "=" + i.seg + "&ts" + r + "=" +
                  i.ts + "&d" + r + "=" + i.d, r++
              }
              return t += n, this.addLongPollTag_(t, this.currentSerial), !
                0
            }
            return !1
          }, e.prototype.enqueueSegment = function(e, t, n) {
            this.pendingSegs.push({
              seg: e,
              ts: t,
              d: n
            }), this.alive && this.newRequest_()
          }, e.prototype.addLongPollTag_ = function(e, t) {
            var n = this;
            this.outstandingRequests.add(t, 1);
            var r = function() {
                n.outstandingRequests.remove(t), n.newRequest_()
              },
              i = setTimeout(r, Math.floor(25e3));
            this.addTag(e, function() {
              clearTimeout(i), r()
            })
          }, e.prototype.addTag = function(e, t) {
            var n = this;
            o.isNodeSdk() ? this.doNodeLongPoll(e, t) : setTimeout(
              function() {
                try {
                  if (!n.sendNewPolls) return;
                  var r = n.myIFrame.doc.createElement("script");
                  r.type = "text/javascript", r.async = !0, r.src =
                    e, r.onload = r.onreadystatechange = function() {
                      var e = r.readyState;
                      e && "loaded" !== e && "complete" !== e || (r
                        .onload = r.onreadystatechange = null, r.parentNode &&
                        r.parentNode.removeChild(r), t())
                    }, r.onerror = function() {
                      w("Long-poll script failed to load: " + e), n
                        .sendNewPolls = !1, n.close()
                    }, n.myIFrame.doc.body.appendChild(r)
                } catch (i) {}
              }, Math.floor(1))
          }, e
        }(),
        qt = null;
      "undefined" !== typeof MozWebSocket ? qt = MozWebSocket :
        "undefined" !== typeof WebSocket && (qt = WebSocket);
      var zt = function() {
          function e(t, n, r, i) {
            this.connId = t, this.keepaliveTimer = null, this.frames =
              null, this.totalFrames = 0, this.bytesSent = 0, this.bytesReceived =
              0, this.log_ = E(this.connId), this.stats_ = Pt.getCollection(
                n), this.connURL = e.connectionURL_(n, r, i)
          }
          return e.connectionURL_ = function(e, t, n) {
              var r = {
                v: "5"
              };
              return !o.isNodeSdk() && "undefined" !== typeof location &&
                location.href && -1 !== location.href.indexOf(
                  "firebaseio.com") && (r.r = "f"), t && (r.s = t), n &&
                (r.ls = n), e.connectionURL("websocket", r)
            }, e.prototype.open = function(e, t) {
              var n = this;
              this.onDisconnect = t, this.onMessage = e, this.log_(
                  "Websocket connecting to " + this.connURL), this.everConnected_ = !
                1, p.set("previous_websocket_failure", !0);
              try {
                if (o.isNodeSdk()) {
                  var i = o.CONSTANTS.NODE_ADMIN ? "AdminNode" : "Node",
                    a = {
                      headers: {
                        "User-Agent": "Firebase/5/" + u.SDK_VERSION +
                          "/" + r.platform + "/" + i
                      }
                    },
                    s = Object({
                      NODE_ENV: "production",
                      PUBLIC_URL: ""
                    }),
                    l = 0 == this.connURL.indexOf("wss://") ? s.HTTPS_PROXY ||
                    s.https_proxy : s.HTTP_PROXY || s.http_proxy;
                  l && (a.proxy = {
                    origin: l
                  }), this.mySock = new qt(this.connURL, [], a)
                } else this.mySock = new qt(this.connURL)
              } catch (f) {
                this.log_("Error instantiating WebSocket.");
                var c = f.message || f.data;
                return c && this.log_(c), void this.onClosed_()
              }
              this.mySock.onopen = function() {
                n.log_("Websocket connected."), n.everConnected_ = !0
              }, this.mySock.onclose = function() {
                n.log_("Websocket connection was disconnected."), n.mySock =
                  null, n.onClosed_()
              }, this.mySock.onmessage = function(e) {
                n.handleIncomingFrame(e)
              }, this.mySock.onerror = function(e) {
                n.log_("WebSocket error.  Closing connection.");
                var t = e.message || e.data;
                t && n.log_(t), n.onClosed_()
              }
            }, e.prototype.start = function() {}, e.forceDisallow =
            function() {
              e.forceDisallow_ = !0
            }, e.isAvailable = function() {
              var t = !1;
              if ("undefined" !== typeof navigator && navigator.userAgent) {
                var n = navigator.userAgent.match(
                  /Android ([0-9]{0,}\.[0-9]{0,})/);
                n && n.length > 1 && parseFloat(n[1]) < 4.4 && (t = !0)
              }
              return !t && null !== qt && !e.forceDisallow_
            }, e.previouslyFailed = function() {
              return p.isInMemoryStorage || !0 === p.get(
                "previous_websocket_failure")
            }, e.prototype.markConnectionHealthy = function() {
              p.remove("previous_websocket_failure")
            }, e.prototype.appendFrame_ = function(e) {
              if (this.frames.push(e), this.frames.length == this.totalFrames) {
                var t = this.frames.join("");
                this.frames = null;
                var n = o.jsonEval(t);
                this.onMessage(n)
              }
            }, e.prototype.handleNewFrameCount_ = function(e) {
              this.totalFrames = e, this.frames = []
            }, e.prototype.extractFrameCount_ = function(e) {
              if (o.assert(null === this.frames,
                  "We already have a frame buffer"), e.length <= 6) {
                var t = Number(e);
                if (!isNaN(t)) return this.handleNewFrameCount_(t),
                  null
              }
              return this.handleNewFrameCount_(1), e
            }, e.prototype.handleIncomingFrame = function(e) {
              if (null !== this.mySock) {
                var t = e.data;
                if (this.bytesReceived += t.length, this.stats_.incrementCounter(
                    "bytes_received", t.length), this.resetKeepAlive(),
                  null !== this.frames) this.appendFrame_(t);
                else {
                  var n = this.extractFrameCount_(t);
                  null !== n && this.appendFrame_(n)
                }
              }
            }, e.prototype.send = function(e) {
              this.resetKeepAlive();
              var t = o.stringify(e);
              this.bytesSent += t.length, this.stats_.incrementCounter(
                "bytes_sent", t.length);
              var n = A(t, 16384);
              n.length > 1 && this.sendString_(String(n.length));
              for (var r = 0; r < n.length; r++) this.sendString_(n[r])
            }, e.prototype.shutdown_ = function() {
              this.isClosed_ = !0, this.keepaliveTimer && (
                clearInterval(this.keepaliveTimer), this.keepaliveTimer =
                null), this.mySock && (this.mySock.close(), this.mySock =
                null)
            }, e.prototype.onClosed_ = function() {
              this.isClosed_ || (this.log_(
                  "WebSocket is closing itself"), this.shutdown_(),
                this.onDisconnect && (this.onDisconnect(this.everConnected_),
                  this.onDisconnect = null))
            }, e.prototype.close = function() {
              this.isClosed_ || (this.log_("WebSocket is being closed"),
                this.shutdown_())
            }, e.prototype.resetKeepAlive = function() {
              var e = this;
              clearInterval(this.keepaliveTimer), this.keepaliveTimer =
                setInterval(function() {
                  e.mySock && e.sendString_("0"), e.resetKeepAlive()
                }, Math.floor(45e3))
            }, e.prototype.sendString_ = function(e) {
              try {
                this.mySock.send(e)
              } catch (t) {
                this.log_("Exception thrown from WebSocket.send():", t.message ||
                  t.data, "Closing connection."), setTimeout(this.onClosed_
                  .bind(this), 0)
              }
            }, e.responsesRequiredToBeHealthy = 2, e.healthyTimeout =
            3e4, e
        }(),
        Qt = function() {
          function e(e) {
            this.initTransports_(e)
          }
          return Object.defineProperty(e, "ALL_TRANSPORTS", {
            get: function() {
              return [Vt, zt]
            },
            enumerable: !0,
            configurable: !0
          }), e.prototype.initTransports_ = function(t) {
            var n = zt && zt.isAvailable(),
              r = n && !zt.previouslyFailed();
            if (t.webSocketOnly && (n || T(
                "wss:// URL used, but browser isn't known to support websockets.  Trying anyway."
              ), r = !0), r) this.transports_ = [zt];
            else {
              var i = this.transports_ = [];
              D(e.ALL_TRANSPORTS, function(e, t) {
                t && t.isAvailable() && i.push(t)
              })
            }
          }, e.prototype.initialTransport = function() {
            if (this.transports_.length > 0) return this.transports_[
              0];
            throw new Error("No transports available")
          }, e.prototype.upgradeTransport = function() {
            return this.transports_.length > 1 ? this.transports_[1] :
              null
          }, e
        }(),
        Ht = function() {
          function e(e, t, n, r, i, o, a) {
            this.id = e, this.repoInfo_ = t, this.onMessage_ = n, this.onReady_ =
              r, this.onDisconnect_ = i, this.onKill_ = o, this.lastSessionId =
              a, this.connectionCount = 0, this.pendingDataMessages = [],
              this.state_ = 0, this.log_ = E("c:" + this.id + ":"),
              this.transportManager_ = new Qt(t), this.log_(
                "Connection created"), this.start_()
          }
          return e.prototype.start_ = function() {
            var e = this,
              t = this.transportManager_.initialTransport();
            this.conn_ = new t(this.nextTransportId_(), this.repoInfo_,
                void 0, this.lastSessionId), this.primaryResponsesRequired_ =
              t.responsesRequiredToBeHealthy || 0;
            var n = this.connReceiver_(this.conn_),
              r = this.disconnReceiver_(this.conn_);
            this.tx_ = this.conn_, this.rx_ = this.conn_, this.secondaryConn_ =
              null, this.isHealthy_ = !1, setTimeout(function() {
                e.conn_ && e.conn_.open(n, r)
              }, Math.floor(0));
            var i = t.healthyTimeout || 0;
            i > 0 && (this.healthyTimeout_ = W(function() {
              e.healthyTimeout_ = null, e.isHealthy_ || (e.conn_ &&
                e.conn_.bytesReceived > 102400 ? (e.log_(
                    "Connection exceeded healthy timeout but has received " +
                    e.conn_.bytesReceived +
                    " bytes.  Marking connection healthy."),
                  e.isHealthy_ = !0, e.conn_.markConnectionHealthy()
                ) : e.conn_ && e.conn_.bytesSent > 10240 ? e.log_(
                  "Connection exceeded healthy timeout but has sent " +
                  e.conn_.bytesSent +
                  " bytes.  Leaving connection alive.") : (e.log_(
                  "Closing unhealthy connection after timeout."
                ), e.close()))
            }, Math.floor(i)))
          }, e.prototype.nextTransportId_ = function() {
            return "c:" + this.id + ":" + this.connectionCount++
          }, e.prototype.disconnReceiver_ = function(e) {
            var t = this;
            return function(n) {
              e === t.conn_ ? t.onConnectionLost_(n) : e === t.secondaryConn_ ?
                (t.log_("Secondary connection lost."), t.onSecondaryConnectionLost_()) :
                t.log_("closing an old connection")
            }
          }, e.prototype.connReceiver_ = function(e) {
            var t = this;
            return function(n) {
              2 != t.state_ && (e === t.rx_ ? t.onPrimaryMessageReceived_(
                n) : e === t.secondaryConn_ ? t.onSecondaryMessageReceived_(
                n) : t.log_("message on old connection"))
            }
          }, e.prototype.sendRequest = function(e) {
            var t = {
              t: "d",
              d: e
            };
            this.sendData_(t)
          }, e.prototype.tryCleanupConnection = function() {
            this.tx_ === this.secondaryConn_ && this.rx_ === this.secondaryConn_ &&
              (this.log_("cleaning up and promoting a connection: " +
                  this.secondaryConn_.connId), this.conn_ = this.secondaryConn_,
                this.secondaryConn_ = null)
          }, e.prototype.onSecondaryControl_ = function(e) {
            if ("t" in e) {
              var t = e.t;
              "a" === t ? this.upgradeIfSecondaryHealthy_() : "r" ===
                t ? (this.log_("Got a reset on secondary, closing it"),
                  this.secondaryConn_.close(), this.tx_ !== this.secondaryConn_ &&
                  this.rx_ !== this.secondaryConn_ || this.close()) :
                "o" === t && (this.log_("got pong on secondary."),
                  this.secondaryResponsesRequired_--, this.upgradeIfSecondaryHealthy_()
                )
            }
          }, e.prototype.onSecondaryMessageReceived_ = function(e) {
            var t = I("t", e),
              n = I("d", e);
            if ("c" == t) this.onSecondaryControl_(n);
            else {
              if ("d" != t) throw new Error(
                "Unknown protocol layer: " + t);
              this.pendingDataMessages.push(n)
            }
          }, e.prototype.upgradeIfSecondaryHealthy_ = function() {
            this.secondaryResponsesRequired_ <= 0 ? (this.log_(
                "Secondary connection is healthy."), this.isHealthy_ = !
              0, this.secondaryConn_.markConnectionHealthy(), this.proceedWithUpgrade_()
            ) : (this.log_("sending ping on secondary."), this.secondaryConn_
              .send({
                t: "c",
                d: {
                  t: "p",
                  d: {}
                }
              }))
          }, e.prototype.proceedWithUpgrade_ = function() {
            this.secondaryConn_.start(), this.log_(
                "sending client ack on secondary"), this.secondaryConn_
              .send({
                t: "c",
                d: {
                  t: "a",
                  d: {}
                }
              }), this.log_("Ending transmission on primary"), this.conn_
              .send({
                t: "c",
                d: {
                  t: "n",
                  d: {}
                }
              }), this.tx_ = this.secondaryConn_, this.tryCleanupConnection()
          }, e.prototype.onPrimaryMessageReceived_ = function(e) {
            var t = I("t", e),
              n = I("d", e);
            "c" == t ? this.onControl_(n) : "d" == t && this.onDataMessage_(
              n)
          }, e.prototype.onDataMessage_ = function(e) {
            this.onPrimaryResponse_(), this.onMessage_(e)
          }, e.prototype.onPrimaryResponse_ = function() {
            this.isHealthy_ || (this.primaryResponsesRequired_--,
              this.primaryResponsesRequired_ <= 0 && (this.log_(
                  "Primary connection is healthy."), this.isHealthy_ = !
                0, this.conn_.markConnectionHealthy()))
          }, e.prototype.onControl_ = function(e) {
            var t = I("t", e);
            if ("d" in e) {
              var n = e.d;
              if ("h" === t) this.onHandshake_(n);
              else if ("n" === t) {
                this.log_("recvd end transmission on primary"), this.rx_ =
                  this.secondaryConn_;
                for (var r = 0; r < this.pendingDataMessages.length; ++
                  r) this.onDataMessage_(this.pendingDataMessages[r]);
                this.pendingDataMessages = [], this.tryCleanupConnection()
              } else "s" === t ? this.onConnectionShutdown_(n) : "r" ===
                t ? this.onReset_(n) : "e" === t ? C("Server Error: " +
                  n) : "o" === t ? (this.log_("got pong on primary."),
                  this.onPrimaryResponse_(), this.sendPingOnPrimaryIfNecessary_()
                ) : C("Unknown control packet command: " + t)
            }
          }, e.prototype.onHandshake_ = function(e) {
            var t = e.ts,
              n = e.v,
              r = e.h;
            this.sessionId = e.s, this.repoInfo_.updateHost(r), 0 ==
              this.state_ && (this.conn_.start(), this.onConnectionEstablished_(
                this.conn_, t), "5" !== n && T(
                "Protocol version mismatch detected"), this.tryStartUpgrade_())
          }, e.prototype.tryStartUpgrade_ = function() {
            var e = this.transportManager_.upgradeTransport();
            e && this.startUpgrade_(e)
          }, e.prototype.startUpgrade_ = function(e) {
            var t = this;
            this.secondaryConn_ = new e(this.nextTransportId_(), this
                .repoInfo_, this.sessionId), this.secondaryResponsesRequired_ =
              e.responsesRequiredToBeHealthy || 0;
            var n = this.connReceiver_(this.secondaryConn_),
              r = this.disconnReceiver_(this.secondaryConn_);
            this.secondaryConn_.open(n, r), W(function() {
              t.secondaryConn_ && (t.log_(
                  "Timed out trying to upgrade."), t.secondaryConn_
                .close())
            }, Math.floor(6e4))
          }, e.prototype.onReset_ = function(e) {
            this.log_("Reset packet received.  New host: " + e), this
              .repoInfo_.updateHost(e), 1 === this.state_ ? this.close() :
              (this.closeConnections_(), this.start_())
          }, e.prototype.onConnectionEstablished_ = function(e, t) {
            var n = this;
            this.log_("Realtime connection established."), this.conn_ =
              e, this.state_ = 1, this.onReady_ && (this.onReady_(t,
                this.sessionId), this.onReady_ = null), 0 === this.primaryResponsesRequired_ ?
              (this.log_("Primary connection is healthy."), this.isHealthy_ = !
                0) : W(function() {
                n.sendPingOnPrimaryIfNecessary_()
              }, Math.floor(5e3))
          }, e.prototype.sendPingOnPrimaryIfNecessary_ = function() {
            this.isHealthy_ || 1 !== this.state_ || (this.log_(
              "sending ping on primary."), this.sendData_({
              t: "c",
              d: {
                t: "p",
                d: {}
              }
            }))
          }, e.prototype.onSecondaryConnectionLost_ = function() {
            var e = this.secondaryConn_;
            this.secondaryConn_ = null, this.tx_ !== e && this.rx_ !==
              e || this.close()
          }, e.prototype.onConnectionLost_ = function(e) {
            this.conn_ = null, e || 0 !== this.state_ ? 1 === this.state_ &&
              this.log_("Realtime connection lost.") : (this.log_(
                  "Realtime connection failed."), this.repoInfo_.isCacheableHost() &&
                (p.remove("host:" + this.repoInfo_.host), this.repoInfo_
                  .internalHost = this.repoInfo_.host)), this.close()
          }, e.prototype.onConnectionShutdown_ = function(e) {
            this.log_(
              "Connection shutdown command received. Shutting down..."
            ), this.onKill_ && (this.onKill_(e), this.onKill_ =
              null), this.onDisconnect_ = null, this.close()
          }, e.prototype.sendData_ = function(e) {
            if (1 !== this.state_) throw "Connection is not connected";
            this.tx_.send(e)
          }, e.prototype.close = function() {
            2 !== this.state_ && (this.log_(
                "Closing realtime connection."), this.state_ = 2,
              this.closeConnections_(), this.onDisconnect_ && (this
                .onDisconnect_(), this.onDisconnect_ = null))
          }, e.prototype.closeConnections_ = function() {
            this.log_("Shutting down all connections"), this.conn_ &&
              (this.conn_.close(), this.conn_ = null), this.secondaryConn_ &&
              (this.secondaryConn_.close(), this.secondaryConn_ =
                null), this.healthyTimeout_ && (clearTimeout(this.healthyTimeout_),
                this.healthyTimeout_ = null)
          }, e
        }(),
        Kt = function() {
          function e() {}
          return e.prototype.put = function(e, t, n, r) {}, e.prototype
            .merge = function(e, t, n, r) {}, e.prototype.refreshAuthToken =
            function(e) {}, e.prototype.onDisconnectPut = function(e, t,
              n) {}, e.prototype.onDisconnectMerge = function(e, t, n) {},
            e.prototype.onDisconnectCancel = function(e, t) {}, e.prototype
            .reportStats = function(e) {}, e
        }(),
        Gt = 1e3,
        $t = 3e5,
        Yt = function(e) {
          function t(n, r, i, a, s, u) {
            var l = e.call(this) || this;
            if (l.repoInfo_ = n, l.onDataUpdate_ = r, l.onConnectStatus_ =
              i, l.onServerInfoUpdate_ = a, l.authTokenProvider_ = s, l
              .authOverride_ = u, l.id = t.nextPersistentConnectionId_++,
              l.log_ = E("p:" + l.id + ":"), l.interruptReasons_ = {},
              l.listens_ = {}, l.outstandingPuts_ = [], l.outstandingPutCount_ =
              0, l.onDisconnectRequestQueue_ = [], l.connected_ = !1, l
              .reconnectDelay_ = Gt, l.maxReconnectDelay_ = $t, l.securityDebugCallback_ =
              null, l.lastSessionId = null, l.establishConnectionTimer_ =
              null, l.visible_ = !1, l.requestCBHash_ = {}, l.requestNumber_ =
              0, l.realtime_ = null, l.authToken_ = null, l.forceTokenRefresh_ = !
              1, l.invalidAuthTokenCount_ = 0, l.firstConnection_ = !0,
              l.lastConnectionAttemptTime_ = null, l.lastConnectionEstablishedTime_ =
              null, u && !o.isNodeSdk()) throw new Error(
              "Auth override specified in options, but not supported on non Node.js platforms"
            );
            return l.scheduleConnect_(0), Lt.getInstance().on("visible",
                l.onVisible_, l), -1 === n.host.indexOf("fblocal") &&
              Mt.getInstance().on("online", l.onOnline_, l), l
          }
          return s.__extends(t, e), t.prototype.sendRequest = function(
              e, t, n) {
              var r = ++this.requestNumber_,
                i = {
                  r: r,
                  a: e,
                  b: t
                };
              this.log_(o.stringify(i)), o.assert(this.connected_,
                "sendRequest call when we're not connected not allowed."
              ), this.realtime_.sendRequest(i), n && (this.requestCBHash_[
                r] = n)
            }, t.prototype.listen = function(e, t, n, r) {
              var i = e.queryIdentifier(),
                a = e.path.toString();
              this.log_("Listen called for " + a + " " + i), this.listens_[
                  a] = this.listens_[a] || {}, o.assert(e.getQueryParams()
                  .isDefault() || !e.getQueryParams().loadsAllData(),
                  "listen() called for non-default but complete query"),
                o.assert(!this.listens_[a][i],
                  "listen() called twice for same path/queryId.");
              var s = {
                onComplete: r,
                hashFn: t,
                query: e,
                tag: n
              };
              this.listens_[a][i] = s, this.connected_ && this.sendListen_(
                s)
            }, t.prototype.sendListen_ = function(e) {
              var n = this,
                r = e.query,
                i = r.path.toString(),
                o = r.queryIdentifier();
              this.log_("Listen on " + i + " for " + o);
              var a = {
                p: i
              };
              e.tag && (a.q = r.queryObject(), a.t = e.tag), a.h = e.hashFn(),
                this.sendRequest("q", a, function(a) {
                  var s = a.d,
                    u = a.s;
                  t.warnOnListenWarnings_(s, r), (n.listens_[i] && n.listens_[
                    i][o]) === e && (n.log_("listen response", a),
                    "ok" !== u && n.removeListen_(i, o), e.onComplete &&
                    e.onComplete(u, s))
                })
            }, t.warnOnListenWarnings_ = function(e, t) {
              if (e && "object" === typeof e && o.contains(e, "w")) {
                var n = o.safeGet(e, "w");
                if (Array.isArray(n) && ~n.indexOf("no_index")) {
                  var r = '".indexOn": "' + t.getQueryParams().getIndex()
                    .toString() + '"',
                    i = t.path.toString();
                  T(
                    "Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding " +
                    r + " at " + i +
                    " to your security rules for better performance."
                  )
                }
              }
            }, t.prototype.refreshAuthToken = function(e) {
              this.authToken_ = e, this.log_("Auth token refreshed"),
                this.authToken_ ? this.tryAuth() : this.connected_ &&
                this.sendRequest("unauth", {}, function() {}), this.reduceReconnectDelayIfAdminCredential_(
                  e)
            }, t.prototype.reduceReconnectDelayIfAdminCredential_ =
            function(e) {
              (e && 40 === e.length || o.isAdmin(e)) && (this.log_(
                "Admin auth credential detected.  Reducing max reconnect time."
              ), this.maxReconnectDelay_ = 3e4)
            }, t.prototype.tryAuth = function() {
              var e = this;
              if (this.connected_ && this.authToken_) {
                var t = this.authToken_,
                  n = o.isValidFormat(t) ? "auth" : "gauth",
                  r = {
                    cred: t
                  };
                null === this.authOverride_ ? r.noauth = !0 : "object" ===
                  typeof this.authOverride_ && (r.authvar = this.authOverride_),
                  this.sendRequest(n, r, function(n) {
                    var r = n.s,
                      i = n.d || "error";
                    e.authToken_ === t && ("ok" === r ? e.invalidAuthTokenCount_ =
                      0 : e.onAuthRevoked_(r, i))
                  })
              }
            }, t.prototype.unlisten = function(e, t) {
              var n = e.path.toString(),
                r = e.queryIdentifier();
              this.log_("Unlisten called for " + n + " " + r), o.assert(
                e.getQueryParams().isDefault() || !e.getQueryParams()
                .loadsAllData(),
                "unlisten() called for non-default but complete query"
              ), this.removeListen_(n, r) && this.connected_ && this.sendUnlisten_(
                n, r, e.queryObject(), t)
            }, t.prototype.sendUnlisten_ = function(e, t, n, r) {
              this.log_("Unlisten on " + e + " for " + t);
              var i = {
                p: e
              };
              r && (i.q = n, i.t = r), this.sendRequest("n", i)
            }, t.prototype.onDisconnectPut = function(e, t, n) {
              this.connected_ ? this.sendOnDisconnect_("o", e, t, n) :
                this.onDisconnectRequestQueue_.push({
                  pathString: e,
                  action: "o",
                  data: t,
                  onComplete: n
                })
            }, t.prototype.onDisconnectMerge = function(e, t, n) {
              this.connected_ ? this.sendOnDisconnect_("om", e, t, n) :
                this.onDisconnectRequestQueue_.push({
                  pathString: e,
                  action: "om",
                  data: t,
                  onComplete: n
                })
            }, t.prototype.onDisconnectCancel = function(e, t) {
              this.connected_ ? this.sendOnDisconnect_("oc", e, null, t) :
                this.onDisconnectRequestQueue_.push({
                  pathString: e,
                  action: "oc",
                  data: null,
                  onComplete: t
                })
            }, t.prototype.sendOnDisconnect_ = function(e, t, n, r) {
              var i = {
                p: t,
                d: n
              };
              this.log_("onDisconnect " + e, i), this.sendRequest(e, i,
                function(e) {
                  r && setTimeout(function() {
                    r(e.s, e.d)
                  }, Math.floor(0))
                })
            }, t.prototype.put = function(e, t, n, r) {
              this.putInternal("p", e, t, n, r)
            }, t.prototype.merge = function(e, t, n, r) {
              this.putInternal("m", e, t, n, r)
            }, t.prototype.putInternal = function(e, t, n, r, i) {
              var o = {
                p: t,
                d: n
              };
              void 0 !== i && (o.h = i), this.outstandingPuts_.push({
                action: e,
                request: o,
                onComplete: r
              }), this.outstandingPutCount_++;
              var a = this.outstandingPuts_.length - 1;
              this.connected_ ? this.sendPut_(a) : this.log_(
                "Buffering put: " + t)
            }, t.prototype.sendPut_ = function(e) {
              var t = this,
                n = this.outstandingPuts_[e].action,
                r = this.outstandingPuts_[e].request,
                i = this.outstandingPuts_[e].onComplete;
              this.outstandingPuts_[e].queued = this.connected_, this.sendRequest(
                n, r,
                function(r) {
                  t.log_(n + " response", r), delete t.outstandingPuts_[
                      e], t.outstandingPutCount_--, 0 === t.outstandingPutCount_ &&
                    (t.outstandingPuts_ = []), i && i(r.s, r.d)
                })
            }, t.prototype.reportStats = function(e) {
              var t = this;
              if (this.connected_) {
                var n = {
                  c: e
                };
                this.log_("reportStats", n), this.sendRequest("s", n,
                  function(e) {
                    if ("ok" !== e.s) {
                      var n = e.d;
                      t.log_("reportStats", "Error sending stats: " +
                        n)
                    }
                  })
              }
            }, t.prototype.onDataMessage_ = function(e) {
              if ("r" in e) {
                this.log_("from server: " + o.stringify(e));
                var t = e.r,
                  n = this.requestCBHash_[t];
                n && (delete this.requestCBHash_[t], n(e.b))
              } else {
                if ("error" in e) throw "A server-side error has occurred: " +
                  e.error;
                "a" in e && this.onDataPush_(e.a, e.b)
              }
            }, t.prototype.onDataPush_ = function(e, t) {
              this.log_("handleServerMessage", e, t), "d" === e ? this.onDataUpdate_(
                  t.p, t.d, !1, t.t) : "m" === e ? this.onDataUpdate_(t
                  .p, t.d, !0, t.t) : "c" === e ? this.onListenRevoked_(
                  t.p, t.q) : "ac" === e ? this.onAuthRevoked_(t.s, t.d) :
                "sd" === e ? this.onSecurityDebugPacket_(t) : C(
                  "Unrecognized action received from server: " + o.stringify(
                    e) + "\nAre you using the latest client?")
            }, t.prototype.onReady_ = function(e, t) {
              this.log_("connection ready"), this.connected_ = !0, this
                .lastConnectionEstablishedTime_ = (new Date).getTime(),
                this.handleTimestamp_(e), this.lastSessionId = t, this.firstConnection_ &&
                this.sendConnectStats_(), this.restoreState_(), this.firstConnection_ = !
                1, this.onConnectStatus_(!0)
            }, t.prototype.scheduleConnect_ = function(e) {
              var t = this;
              o.assert(!this.realtime_,
                  "Scheduling a connect when we're already connected/ing?"
                ), this.establishConnectionTimer_ && clearTimeout(this.establishConnectionTimer_),
                this.establishConnectionTimer_ = setTimeout(function() {
                  t.establishConnectionTimer_ = null, t.establishConnection_()
                }, Math.floor(e))
            }, t.prototype.onVisible_ = function(e) {
              e && !this.visible_ && this.reconnectDelay_ === this.maxReconnectDelay_ &&
                (this.log_("Window became visible.  Reducing delay."),
                  this.reconnectDelay_ = Gt, this.realtime_ || this.scheduleConnect_(
                    0)), this.visible_ = e
            }, t.prototype.onOnline_ = function(e) {
              e ? (this.log_("Browser went online."), this.reconnectDelay_ =
                Gt, this.realtime_ || this.scheduleConnect_(0)) : (
                this.log_(
                  "Browser went offline.  Killing connection."), this
                .realtime_ && this.realtime_.close())
            }, t.prototype.onRealtimeDisconnect_ = function() {
              if (this.log_("data client disconnected"), this.connected_ = !
                1, this.realtime_ = null, this.cancelSentTransactions_(),
                this.requestCBHash_ = {}, this.shouldReconnect_()) {
                if (this.visible_) {
                  if (this.lastConnectionEstablishedTime_) {
                    (new Date).getTime() - this.lastConnectionEstablishedTime_ >
                      3e4 && (this.reconnectDelay_ = Gt), this.lastConnectionEstablishedTime_ =
                      null
                  }
                } else this.log_(
                    "Window isn't visible.  Delaying reconnect."), this
                  .reconnectDelay_ = this.maxReconnectDelay_, this.lastConnectionAttemptTime_ =
                  (new Date).getTime();
                var e = (new Date).getTime() - this.lastConnectionAttemptTime_,
                  t = Math.max(0, this.reconnectDelay_ - e);
                t = Math.random() * t, this.log_(
                  "Trying to reconnect in " + t + "ms"), this.scheduleConnect_(
                  t), this.reconnectDelay_ = Math.min(this.maxReconnectDelay_,
                  1.3 * this.reconnectDelay_)
              }
              this.onConnectStatus_(!1)
            }, t.prototype.establishConnection_ = function() {
              if (this.shouldReconnect_()) {
                this.log_("Making a connection attempt"), this.lastConnectionAttemptTime_ =
                  (new Date).getTime(), this.lastConnectionEstablishedTime_ =
                  null;
                var e = this.onDataMessage_.bind(this),
                  n = this.onReady_.bind(this),
                  r = this.onRealtimeDisconnect_.bind(this),
                  i = this.id + ":" + t.nextConnectionId_++,
                  a = this,
                  s = this.lastSessionId,
                  u = !1,
                  l = null,
                  c = function() {
                    l ? l.close() : (u = !0, r())
                  };
                this.realtime_ = {
                  close: c,
                  sendRequest: function(e) {
                    o.assert(l,
                      "sendRequest call when we're not connected not allowed."
                    ), l.sendRequest(e)
                  }
                };
                var f = this.forceTokenRefresh_;
                this.forceTokenRefresh_ = !1, this.authTokenProvider_.getToken(
                  f).then(function(t) {
                  u ? w("getToken() completed but was canceled") :
                    (w("getToken() completed. Creating connection."),
                      a.authToken_ = t && t.accessToken, l = new Ht(
                        i, a.repoInfo_, e, n, r,
                        function(e) {
                          T(e + " (" + a.repoInfo_.toString() + ")"),
                            a.interrupt("server_kill")
                        }, s))
                }).then(null, function(e) {
                  a.log_("Failed to get token: " + e), u || (o.CONSTANTS
                    .NODE_ADMIN && T(e), c())
                })
              }
            }, t.prototype.interrupt = function(e) {
              w("Interrupting connection for reason: " + e), this.interruptReasons_[
                e] = !0, this.realtime_ ? this.realtime_.close() : (
                this.establishConnectionTimer_ && (clearTimeout(this.establishConnectionTimer_),
                  this.establishConnectionTimer_ = null), this.connected_ &&
                this.onRealtimeDisconnect_())
            }, t.prototype.resume = function(e) {
              w("Resuming connection for reason: " + e), delete this.interruptReasons_[
                e], o.isEmpty(this.interruptReasons_) && (this.reconnectDelay_ =
                Gt, this.realtime_ || this.scheduleConnect_(0))
            }, t.prototype.handleTimestamp_ = function(e) {
              var t = e - (new Date).getTime();
              this.onServerInfoUpdate_({
                serverTimeOffset: t
              })
            }, t.prototype.cancelSentTransactions_ = function() {
              for (var e = 0; e < this.outstandingPuts_.length; e++) {
                var t = this.outstandingPuts_[e];
                t && "h" in t.request && t.queued && (t.onComplete && t
                  .onComplete("disconnect"), delete this.outstandingPuts_[
                    e], this.outstandingPutCount_--)
              }
              0 === this.outstandingPutCount_ && (this.outstandingPuts_ = [])
            }, t.prototype.onListenRevoked_ = function(e, t) {
              var n;
              n = t ? t.map(function(e) {
                return R(e)
              }).join("$") : "default";
              var r = this.removeListen_(e, n);
              r && r.onComplete && r.onComplete("permission_denied")
            }, t.prototype.removeListen_ = function(e, t) {
              var n, r = new V(e).toString();
              return void 0 !== this.listens_[r] ? (n = this.listens_[r]
                  [t], delete this.listens_[r][t], 0 === o.getCount(
                    this.listens_[r]) && delete this.listens_[r]) : n =
                void 0, n
            }, t.prototype.onAuthRevoked_ = function(e, t) {
              w("Auth token revoked: " + e + "/" + t), this.authToken_ =
                null, this.forceTokenRefresh_ = !0, this.realtime_.close(),
                "invalid_token" !== e && "permission_denied" !== e || (
                  this.invalidAuthTokenCount_++, this.invalidAuthTokenCount_ >=
                  3 && (this.reconnectDelay_ = 3e4, this.authTokenProvider_
                    .notifyForInvalidToken()))
            }, t.prototype.onSecurityDebugPacket_ = function(e) {
              this.securityDebugCallback_ ? this.securityDebugCallback_(
                e) : "msg" in e && console.log("FIREBASE: " + e.msg.replace(
                "\n", "\nFIREBASE: "))
            }, t.prototype.restoreState_ = function() {
              var e = this;
              this.tryAuth(), o.forEach(this.listens_, function(t, n) {
                o.forEach(n, function(t, n) {
                  e.sendListen_(n)
                })
              });
              for (var t = 0; t < this.outstandingPuts_.length; t++)
                this.outstandingPuts_[t] && this.sendPut_(t);
              for (; this.onDisconnectRequestQueue_.length;) {
                var n = this.onDisconnectRequestQueue_.shift();
                this.sendOnDisconnect_(n.action, n.pathString, n.data,
                  n.onComplete)
              }
            }, t.prototype.sendConnectStats_ = function() {
              var e = {},
                t = "js";
              o.CONSTANTS.NODE_ADMIN ? t = "admin_node" : o.CONSTANTS.NODE_CLIENT &&
                (t = "node"), e["sdk." + t + "." + u.SDK_VERSION.replace(
                  /\./g, "-")] = 1, o.isMobileCordova() ? e[
                  "framework.cordova"] = 1 : o.isReactNative() && (e[
                  "framework.reactnative"] = 1), this.reportStats(e)
            }, t.prototype.shouldReconnect_ = function() {
              var e = Mt.getInstance().currentlyOnline();
              return o.isEmpty(this.interruptReasons_) && e
            }, t.nextPersistentConnectionId_ = 0, t.nextConnectionId_ =
            0, t
        }(Kt),
        Xt = function(e) {
          function t(t, n, r) {
            var i = e.call(this) || this;
            return i.repoInfo_ = t, i.onDataUpdate_ = n, i.authTokenProvider_ =
              r, i.log_ = E("p:rest:"), i.listens_ = {}, i
          }
          return s.__extends(t, e), t.prototype.reportStats = function(
              e) {
              throw new Error("Method not implemented.")
            }, t.getListenId_ = function(e, t) {
              return void 0 !== t ? "tag$" + t : (o.assert(e.getQueryParams()
                  .isDefault(),
                  "should have a tag if it's not a default query."),
                e.path.toString())
            }, t.prototype.listen = function(e, n, r, i) {
              var a = this,
                s = e.path.toString();
              this.log_("Listen called for " + s + " " + e.queryIdentifier());
              var u = t.getListenId_(e, r),
                l = {};
              this.listens_[u] = l;
              var c = e.getQueryParams().toRestQueryStringParameters();
              this.restRequest_(s + ".json", c, function(e, t) {
                var n = t;
                (404 === e && (n = null, e = null), null === e && a
                  .onDataUpdate_(s, n, !1, r), o.safeGet(a.listens_,
                    u) === l) && i(e ? 401 == e ?
                  "permission_denied" : "rest_error:" + e : "ok",
                  null)
              })
            }, t.prototype.unlisten = function(e, n) {
              var r = t.getListenId_(e, n);
              delete this.listens_[r]
            }, t.prototype.refreshAuthToken = function(e) {}, t.prototype
            .restRequest_ = function(e, t, n) {
              var r = this;
              void 0 === t && (t = {}), t.format = "export", this.authTokenProvider_
                .getToken(!1).then(function(i) {
                  var a = i && i.accessToken;
                  a && (t.auth = a);
                  var s = (r.repoInfo_.secure ? "https://" :
                      "http://") + r.repoInfo_.host + e + "?ns=" + r.repoInfo_
                    .namespace + o.querystring(t);
                  r.log_("Sending REST request for " + s);
                  var u = new XMLHttpRequest;
                  u.onreadystatechange = function() {
                    if (n && 4 === u.readyState) {
                      r.log_("REST Response for " + s +
                        " received. status:", u.status,
                        "response:", u.responseText);
                      var e = null;
                      if (u.status >= 200 && u.status < 300) {
                        try {
                          e = o.jsonEval(u.responseText)
                        } catch (t) {
                          T("Failed to parse JSON response for " +
                            s + ": " + u.responseText)
                        }
                        n(null, e)
                      } else 401 !== u.status && 404 !== u.status &&
                        T("Got unsuccessful REST response for " + s +
                          " Status: " + u.status), n(u.status);
                      n = null
                    }
                  }, u.open("GET", s, !0), u.send()
                })
            }, t
        }(Kt),
        Jt = function() {
          function e(e, t, n) {
            var r = this;
            this.repoInfo_ = e, this.app = n, this.dataUpdateCount = 0,
              this.statsListener_ = null, this.eventQueue_ = new At,
              this.nextWriteId_ = 1, this.interceptServerDataCallback_ =
              null, this.onDisconnect_ = new Xe, this.persistentConnection_ =
              null;
            var i = new xt(n);
            if (this.stats_ = Pt.getCollection(e), t || U()) this.server_ =
              new Xt(this.repoInfo_, this.onDataUpdate_.bind(this), i),
              setTimeout(this.onConnectStatus_.bind(this, !0), 0);
            else {
              var a = n.options.databaseAuthVariableOverride;
              if ("undefined" !== typeof a && null !== a) {
                if ("object" !== typeof a) throw new Error(
                  "Only objects are supported for option databaseAuthVariableOverride"
                );
                try {
                  o.stringify(a)
                } catch (s) {
                  throw new Error("Invalid authOverride provided: " + s)
                }
              }
              this.persistentConnection_ = new Yt(this.repoInfo_, this.onDataUpdate_
                .bind(this), this.onConnectStatus_.bind(this), this.onServerInfoUpdate_
                .bind(this), i, a), this.server_ = this.persistentConnection_
            }
            i.addTokenChangeListener(function(e) {
                r.server_.refreshAuthToken(e)
              }), this.statsReporter_ = Pt.getOrCreateReporter(e,
                function() {
                  return new Rt(r.stats_, r.server_)
                }), this.transactions_init_(), this.infoData_ = new Tt,
              this.infoSyncTree_ = new St({
                startListening: function(e, t, n, i) {
                  var o = [],
                    a = r.infoData_.getNode(e.path);
                  return a.isEmpty() || (o = r.infoSyncTree_.applyServerOverwrite(
                    e.path, a), setTimeout(function() {
                    i("ok")
                  }, 0)), o
                },
                stopListening: function() {}
              }), this.updateInfo_("connected", !1), this.serverSyncTree_ =
              new St({
                startListening: function(e, t, n, i) {
                  return r.server_.listen(e, n, t, function(t, n) {
                    var o = i(t, n);
                    r.eventQueue_.raiseEventsForChangedPath(e.path,
                      o)
                  }), []
                },
                stopListening: function(e, t) {
                  r.server_.unlisten(e, t)
                }
              })
          }
          return e.prototype.toString = function() {
            return (this.repoInfo_.secure ? "https://" : "http://") +
              this.repoInfo_.host
          }, e.prototype.name = function() {
            return this.repoInfo_.namespace
          }, e.prototype.serverTime = function() {
            var e = this.infoData_.getNode(new V(
              ".info/serverTimeOffset")).val() || 0;
            return (new Date).getTime() + e
          }, e.prototype.generateServerValues = function() {
            return (e = (e = {
                timestamp: this.serverTime()
              }) || {}).timestamp = e.timestamp || (new Date).getTime(),
              e;
            var e
          }, e.prototype.onDataUpdate_ = function(e, t, n, r) {
            this.dataUpdateCount++;
            var i = new V(e);
            t = this.interceptServerDataCallback_ ? this.interceptServerDataCallback_(
              e, t) : t;
            var a = [];
            if (r)
              if (n) {
                var s = o.map(t, function(e) {
                  return Ue(e)
                });
                a = this.serverSyncTree_.applyTaggedQueryMerge(i, s,
                  r)
              } else {
                var u = Ue(t);
                a = this.serverSyncTree_.applyTaggedQueryOverwrite(i,
                  u, r)
              } else if (n) {
              var l = o.map(t, function(e) {
                return Ue(e)
              });
              a = this.serverSyncTree_.applyServerMerge(i, l)
            } else {
              var c = Ue(t);
              a = this.serverSyncTree_.applyServerOverwrite(i, c)
            }
            var f = i;
            a.length > 0 && (f = this.rerunTransactions_(i)), this.eventQueue_
              .raiseEventsForChangedPath(f, a)
          }, e.prototype.interceptServerData_ = function(e) {
            this.interceptServerDataCallback_ = e
          }, e.prototype.onConnectStatus_ = function(e) {
            this.updateInfo_("connected", e), !1 === e && this.runOnDisconnectEvents_()
          }, e.prototype.onServerInfoUpdate_ = function(e) {
            var t = this;
            D(e, function(e, n) {
              t.updateInfo_(n, e)
            })
          }, e.prototype.updateInfo_ = function(e, t) {
            var n = new V("/.info/" + e),
              r = Ue(t);
            this.infoData_.updateSnapshot(n, r);
            var i = this.infoSyncTree_.applyServerOverwrite(n, r);
            this.eventQueue_.raiseEventsForChangedPath(n, i)
          }, e.prototype.getNextWriteId_ = function() {
            return this.nextWriteId_++
          }, e.prototype.setWithPriority = function(e, t, n, r) {
            var i = this;
            this.log_("set", {
              path: e.toString(),
              value: t,
              priority: n
            });
            var o = this.generateServerValues(),
              a = Ue(t, n),
              s = Ze(a, o),
              u = this.getNextWriteId_(),
              l = this.serverSyncTree_.applyUserOverwrite(e, s, u, !0);
            this.eventQueue_.queueEvents(l), this.server_.put(e.toString(),
              a.val(!0),
              function(t, n) {
                var o = "ok" === t;
                o || T("set at " + e + " failed: " + t);
                var a = i.serverSyncTree_.ackUserWrite(u, !o);
                i.eventQueue_.raiseEventsForChangedPath(e, a), i.callOnCompleteCallback(
                  r, t, n)
              });
            var c = this.abortTransactions_(e);
            this.rerunTransactions_(c), this.eventQueue_.raiseEventsForChangedPath(
              c, [])
          }, e.prototype.update = function(e, t, n) {
            var r = this;
            this.log_("update", {
              path: e.toString(),
              value: t
            });
            var i = !0,
              a = this.generateServerValues(),
              s = {};
            if (o.forEach(t, function(e, t) {
                i = !1;
                var n = Ue(t);
                s[e] = Ze(n, a)
              }), i) w(
              "update() called with empty data.  Don't do anything."
            ), this.callOnCompleteCallback(n, "ok");
            else {
              var u = this.getNextWriteId_(),
                l = this.serverSyncTree_.applyUserMerge(e, s, u);
              this.eventQueue_.queueEvents(l), this.server_.merge(e.toString(),
                t,
                function(t, i) {
                  var o = "ok" === t;
                  o || T("update at " + e + " failed: " + t);
                  var a = r.serverSyncTree_.ackUserWrite(u, !o),
                    s = a.length > 0 ? r.rerunTransactions_(e) : e;
                  r.eventQueue_.raiseEventsForChangedPath(s, a), r.callOnCompleteCallback(
                    n, t, i)
                }), o.forEach(t, function(t) {
                var n = r.abortTransactions_(e.child(t));
                r.rerunTransactions_(n)
              }), this.eventQueue_.raiseEventsForChangedPath(e, [])
            }
          }, e.prototype.runOnDisconnectEvents_ = function() {
            var e = this;
            this.log_("onDisconnectEvents");
            var t = this.generateServerValues(),
              n = function(e, t) {
                var n = new Xe;
                return e.forEachTree(new V(""), function(e, r) {
                  n.remember(e, Ze(r, t))
                }), n
              }(this.onDisconnect_, t),
              r = [];
            n.forEachTree(V.Empty, function(t, n) {
              r = r.concat(e.serverSyncTree_.applyServerOverwrite(
                t, n));
              var i = e.abortTransactions_(t);
              e.rerunTransactions_(i)
            }), this.onDisconnect_ = new Xe, this.eventQueue_.raiseEventsForChangedPath(
              V.Empty, r)
          }, e.prototype.onDisconnectCancel = function(e, t) {
            var n = this;
            this.server_.onDisconnectCancel(e.toString(), function(r,
              i) {
              "ok" === r && n.onDisconnect_.forget(e), n.callOnCompleteCallback(
                t, r, i)
            })
          }, e.prototype.onDisconnectSet = function(e, t, n) {
            var r = this,
              i = Ue(t);
            this.server_.onDisconnectPut(e.toString(), i.val(!0),
              function(t, o) {
                "ok" === t && r.onDisconnect_.remember(e, i), r.callOnCompleteCallback(
                  n, t, o)
              })
          }, e.prototype.onDisconnectSetWithPriority = function(e, t,
            n, r) {
            var i = this,
              o = Ue(t, n);
            this.server_.onDisconnectPut(e.toString(), o.val(!0),
              function(t, n) {
                "ok" === t && i.onDisconnect_.remember(e, o), i.callOnCompleteCallback(
                  r, t, n)
              })
          }, e.prototype.onDisconnectUpdate = function(e, t, n) {
            var r = this;
            if (o.isEmpty(t)) return w(
              "onDisconnect().update() called with empty data.  Don't do anything."
            ), void this.callOnCompleteCallback(n, "ok");
            this.server_.onDisconnectMerge(e.toString(), t, function(
              i, a) {
              "ok" === i && o.forEach(t, function(t, n) {
                var i = Ue(n);
                r.onDisconnect_.remember(e.child(t), i)
              }), r.callOnCompleteCallback(n, i, a)
            })
          }, e.prototype.addEventCallbackForQuery = function(e, t) {
            var n;
            n = ".info" === e.path.getFront() ? this.infoSyncTree_.addEventRegistration(
              e, t) : this.serverSyncTree_.addEventRegistration(e,
              t), this.eventQueue_.raiseEventsAtPath(e.path, n)
          }, e.prototype.removeEventCallbackForQuery = function(e, t) {
            var n;
            n = ".info" === e.path.getFront() ? this.infoSyncTree_.removeEventRegistration(
              e, t) : this.serverSyncTree_.removeEventRegistration(
              e, t), this.eventQueue_.raiseEventsAtPath(e.path, n)
          }, e.prototype.interrupt = function() {
            this.persistentConnection_ && this.persistentConnection_.interrupt(
              "repo_interrupt")
          }, e.prototype.resume = function() {
            this.persistentConnection_ && this.persistentConnection_.resume(
              "repo_interrupt")
          }, e.prototype.stats = function(e) {
            if (void 0 === e && (e = !1), "undefined" !== typeof console) {
              var t;
              e ? (this.statsListener_ || (this.statsListener_ = new Ot(
                  this.stats_)), t = this.statsListener_.get()) : t =
                this.stats_.get();
              var n = Object.keys(t).reduce(function(e, t) {
                return Math.max(t.length, e)
              }, 0);
              o.forEach(t, function(e, t) {
                for (var r = e.length; r < n + 2; r++) e += " ";
                console.log(e + t)
              })
            }
          }, e.prototype.statsIncrementCounter = function(e) {
            this.stats_.incrementCounter(e), this.statsReporter_.includeStat(
              e)
          }, e.prototype.log_ = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] =
              arguments[t];
            var n = "";
            this.persistentConnection_ && (n = this.persistentConnection_
              .id + ":"), w.apply(void 0, [n].concat(e))
          }, e.prototype.callOnCompleteCallback = function(e, t, n) {
            e && j(function() {
              if ("ok" == t) e(null);
              else {
                var r = (t || "error").toUpperCase(),
                  i = r;
                n && (i += ": " + n);
                var o = new Error(i);
                o.code = r, e(o)
              }
            })
          }, Object.defineProperty(e.prototype, "database", {
            get: function() {
              return this.__database || (this.__database = new ln(
                this))
            },
            enumerable: !0,
            configurable: !0
          }), e
        }(),
        Zt = function() {
          function e(t) {
            this.indexedFilter_ = new pt(t.getIndex()), this.index_ = t
              .getIndex(), this.startPost_ = e.getStartPost_(t), this.endPost_ =
              e.getEndPost_(t)
          }
          return e.prototype.getStartPost = function() {
            return this.startPost_
          }, e.prototype.getEndPost = function() {
            return this.endPost_
          }, e.prototype.matches = function(e) {
            return this.index_.compare(this.getStartPost(), e) <= 0 &&
              this.index_.compare(e, this.getEndPost()) <= 0
          }, e.prototype.updateChild = function(e, t, n, r, i, o) {
            return this.matches(new pe(t, n)) || (n = Le.EMPTY_NODE),
              this.indexedFilter_.updateChild(e, t, n, r, i, o)
          }, e.prototype.updateFullNode = function(e, t, n) {
            t.isLeafNode() && (t = Le.EMPTY_NODE);
            var r = t.withIndex(this.index_);
            r = r.updatePriority(Le.EMPTY_NODE);
            var i = this;
            return t.forEachChild(Se, function(e, t) {
              i.matches(new pe(e, t)) || (r = r.updateImmediateChild(
                e, Le.EMPTY_NODE))
            }), this.indexedFilter_.updateFullNode(e, r, n)
          }, e.prototype.updatePriority = function(e, t) {
            return e
          }, e.prototype.filtersNodes = function() {
            return !0
          }, e.prototype.getIndexedFilter = function() {
            return this.indexedFilter_
          }, e.prototype.getIndex = function() {
            return this.index_
          }, e.getStartPost_ = function(e) {
            if (e.hasStart()) {
              var t = e.getIndexStartName();
              return e.getIndex().makePost(e.getIndexStartValue(), t)
            }
            return e.getIndex().minPost()
          }, e.getEndPost_ = function(e) {
            if (e.hasEnd()) {
              var t = e.getIndexEndName();
              return e.getIndex().makePost(e.getIndexEndValue(), t)
            }
            return e.getIndex().maxPost()
          }, e
        }(),
        en = function() {
          function e(e) {
            this.rangedFilter_ = new Zt(e), this.index_ = e.getIndex(),
              this.limit_ = e.getLimit(), this.reverse_ = !e.isViewFromLeft()
          }
          return e.prototype.updateChild = function(e, t, n, r, i, o) {
            return this.rangedFilter_.matches(new pe(t, n)) || (n =
                Le.EMPTY_NODE), e.getImmediateChild(t).equals(n) ? e :
              e.numChildren() < this.limit_ ? this.rangedFilter_.getIndexedFilter()
              .updateChild(e, t, n, r, i, o) : this.fullLimitUpdateChild_(
                e, t, n, i, o)
          }, e.prototype.updateFullNode = function(e, t, n) {
            var r;
            if (t.isLeafNode() || t.isEmpty()) r = Le.EMPTY_NODE.withIndex(
              this.index_);
            else if (2 * this.limit_ < t.numChildren() && t.isIndexed(
                this.index_)) {
              r = Le.EMPTY_NODE.withIndex(this.index_);
              var i = void 0;
              i = this.reverse_ ? t.getReverseIteratorFrom(this.rangedFilter_
                .getEndPost(), this.index_) : t.getIteratorFrom(
                this.rangedFilter_.getStartPost(), this.index_);
              for (var o = 0; i.hasNext() && o < this.limit_;) {
                var a = i.getNext();
                if (!(this.reverse_ ? this.index_.compare(this.rangedFilter_
                    .getStartPost(), a) <= 0 : this.index_.compare(
                    a, this.rangedFilter_.getEndPost()) <= 0)) break;
                r = r.updateImmediateChild(a.name, a.node), o++
              }
            } else {
              r = (r = t.withIndex(this.index_)).updatePriority(Le.EMPTY_NODE);
              var s = void 0,
                u = void 0,
                l = void 0;
              i = void 0;
              if (this.reverse_) {
                i = r.getReverseIterator(this.index_), s = this.rangedFilter_
                  .getEndPost(), u = this.rangedFilter_.getStartPost();
                var c = this.index_.getCompare();
                l = function(e, t) {
                  return c(t, e)
                }
              } else i = r.getIterator(this.index_), s = this.rangedFilter_
                .getStartPost(), u = this.rangedFilter_.getEndPost(),
                l = this.index_.getCompare();
              o = 0;
              for (var f = !1; i.hasNext();) {
                a = i.getNext();
                !f && l(s, a) <= 0 && (f = !0), f && o < this.limit_ &&
                  l(a, u) <= 0 ? o++ : r = r.updateImmediateChild(a.name,
                    Le.EMPTY_NODE)
              }
            }
            return this.rangedFilter_.getIndexedFilter().updateFullNode(
              e, r, n)
          }, e.prototype.updatePriority = function(e, t) {
            return e
          }, e.prototype.filtersNodes = function() {
            return !0
          }, e.prototype.getIndexedFilter = function() {
            return this.rangedFilter_.getIndexedFilter()
          }, e.prototype.getIndex = function() {
            return this.index_
          }, e.prototype.fullLimitUpdateChild_ = function(e, t, n, r,
            i) {
            var a;
            if (this.reverse_) {
              var s = this.index_.getCompare();
              a = function(e, t) {
                return s(t, e)
              }
            } else a = this.index_.getCompare();
            var u = e;
            o.assert(u.numChildren() == this.limit_, "");
            var l = new pe(t, n),
              c = this.reverse_ ? u.getFirstChild(this.index_) : u.getLastChild(
                this.index_),
              f = this.rangedFilter_.matches(l);
            if (u.hasChild(t)) {
              for (var p = u.getImmediateChild(t), h = r.getChildAfterChild(
                  this.index_, c, this.reverse_); null != h && (h.name ==
                  t || u.hasChild(h.name));) h = r.getChildAfterChild(
                this.index_, h, this.reverse_);
              var d = null == h ? 1 : a(h, l);
              if (f && !n.isEmpty() && d >= 0) return null != i && i.trackChildChange(
                ft.childChangedChange(t, n, p)), u.updateImmediateChild(
                t, n);
              null != i && i.trackChildChange(ft.childRemovedChange(t,
                p));
              var y = u.updateImmediateChild(t, Le.EMPTY_NODE);
              return null != h && this.rangedFilter_.matches(h) ? (
                null != i && i.trackChildChange(ft.childAddedChange(
                  h.name, h.node)), y.updateImmediateChild(h.name,
                  h.node)) : y
            }
            return n.isEmpty() ? e : f && a(c, l) >= 0 ? (null != i &&
                (i.trackChildChange(ft.childRemovedChange(c.name, c.node)),
                  i.trackChildChange(ft.childAddedChange(t, n))), u.updateImmediateChild(
                  t, n).updateImmediateChild(c.name, Le.EMPTY_NODE)) :
              e
          }, e
        }(),
        tn = function() {
          function e() {
            this.limitSet_ = !1, this.startSet_ = !1, this.startNameSet_ = !
              1, this.endSet_ = !1, this.endNameSet_ = !1, this.limit_ =
              0, this.viewFrom_ = "", this.indexStartValue_ = null,
              this.indexStartName_ = "", this.indexEndValue_ = null,
              this.indexEndName_ = "", this.index_ = Se
          }
          return e.prototype.hasStart = function() {
            return this.startSet_
          }, e.prototype.isViewFromLeft = function() {
            return "" === this.viewFrom_ ? this.startSet_ : this.viewFrom_ ===
              e.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_LEFT
          }, e.prototype.getIndexStartValue = function() {
            return o.assert(this.startSet_,
              "Only valid if start has been set"), this.indexStartValue_
          }, e.prototype.getIndexStartName = function() {
            return o.assert(this.startSet_,
                "Only valid if start has been set"), this.startNameSet_ ?
              this.indexStartName_ : k
          }, e.prototype.hasEnd = function() {
            return this.endSet_
          }, e.prototype.getIndexEndValue = function() {
            return o.assert(this.endSet_,
              "Only valid if end has been set"), this.indexEndValue_
          }, e.prototype.getIndexEndName = function() {
            return o.assert(this.endSet_,
                "Only valid if end has been set"), this.endNameSet_ ?
              this.indexEndName_ : P
          }, e.prototype.hasLimit = function() {
            return this.limitSet_
          }, e.prototype.hasAnchoredLimit = function() {
            return this.limitSet_ && "" !== this.viewFrom_
          }, e.prototype.getLimit = function() {
            return o.assert(this.limitSet_,
              "Only valid if limit has been set"), this.limit_
          }, e.prototype.getIndex = function() {
            return this.index_
          }, e.prototype.copy_ = function() {
            var t = new e;
            return t.limitSet_ = this.limitSet_, t.limit_ = this.limit_,
              t.startSet_ = this.startSet_, t.indexStartValue_ = this
              .indexStartValue_, t.startNameSet_ = this.startNameSet_,
              t.indexStartName_ = this.indexStartName_, t.endSet_ =
              this.endSet_, t.indexEndValue_ = this.indexEndValue_, t
              .endNameSet_ = this.endNameSet_, t.indexEndName_ = this
              .indexEndName_, t.index_ = this.index_, t.viewFrom_ =
              this.viewFrom_, t
          }, e.prototype.limit = function(e) {
            var t = this.copy_();
            return t.limitSet_ = !0, t.limit_ = e, t.viewFrom_ = "",
              t
          }, e.prototype.limitToFirst = function(t) {
            var n = this.copy_();
            return n.limitSet_ = !0, n.limit_ = t, n.viewFrom_ = e.WIRE_PROTOCOL_CONSTANTS_
              .VIEW_FROM_LEFT, n
          }, e.prototype.limitToLast = function(t) {
            var n = this.copy_();
            return n.limitSet_ = !0, n.limit_ = t, n.viewFrom_ = e.WIRE_PROTOCOL_CONSTANTS_
              .VIEW_FROM_RIGHT, n
          }, e.prototype.startAt = function(e, t) {
            var n = this.copy_();
            return n.startSet_ = !0, void 0 === e && (e = null), n.indexStartValue_ =
              e, null != t ? (n.startNameSet_ = !0, n.indexStartName_ =
                t) : (n.startNameSet_ = !1, n.indexStartName_ = ""),
              n
          }, e.prototype.endAt = function(e, t) {
            var n = this.copy_();
            return n.endSet_ = !0, void 0 === e && (e = null), n.indexEndValue_ =
              e, void 0 !== t ? (n.endNameSet_ = !0, n.indexEndName_ =
                t) : (n.endNameSet_ = !1, n.indexEndName_ = ""), n
          }, e.prototype.orderBy = function(e) {
            var t = this.copy_();
            return t.index_ = e, t
          }, e.prototype.getQueryObject = function() {
            var t = e.WIRE_PROTOCOL_CONSTANTS_,
              n = {};
            if (this.startSet_ && (n[t.INDEX_START_VALUE] = this.indexStartValue_,
                this.startNameSet_ && (n[t.INDEX_START_NAME] = this.indexStartName_)
              ), this.endSet_ && (n[t.INDEX_END_VALUE] = this.indexEndValue_,
                this.endNameSet_ && (n[t.INDEX_END_NAME] = this.indexEndName_)
              ), this.limitSet_) {
              n[t.LIMIT] = this.limit_;
              var r = this.viewFrom_;
              "" === r && (r = this.isViewFromLeft() ? t.VIEW_FROM_LEFT :
                t.VIEW_FROM_RIGHT), n[t.VIEW_FROM] = r
            }
            return this.index_ !== Se && (n[t.INDEX] = this.index_.toString()),
              n
          }, e.prototype.loadsAllData = function() {
            return !(this.startSet_ || this.endSet_ || this.limitSet_)
          }, e.prototype.isDefault = function() {
            return this.loadsAllData() && this.index_ == Se
          }, e.prototype.getNodeFilter = function() {
            return this.loadsAllData() ? new pt(this.getIndex()) :
              this.hasLimit() ? new en(this) : new Zt(this)
          }, e.prototype.toRestQueryStringParameters = function() {
            var t, n = e.REST_QUERY_CONSTANTS_,
              r = {};
            return this.isDefault() ? r : (this.index_ === Se ? t = n
              .PRIORITY_INDEX : this.index_ === Be ? t = n.VALUE_INDEX :
              this.index_ === ye ? t = n.KEY_INDEX : (o.assert(this
                .index_ instanceof qe, "Unrecognized index type!"
              ), t = this.index_.toString()), r[n.ORDER_BY] = o.stringify(
                t), this.startSet_ && (r[n.START_AT] = o.stringify(
                this.indexStartValue_), this.startNameSet_ && (r[
                n.START_AT] += "," + o.stringify(this.indexStartName_))),
              this.endSet_ && (r[n.END_AT] = o.stringify(this.indexEndValue_),
                this.endNameSet_ && (r[n.END_AT] += "," + o.stringify(
                  this.indexEndName_))), this.limitSet_ && (this.isViewFromLeft() ?
                r[n.LIMIT_TO_FIRST] = this.limit_ : r[n.LIMIT_TO_LAST] =
                this.limit_), r)
          }, e.WIRE_PROTOCOL_CONSTANTS_ = {
            INDEX_START_VALUE: "sp",
            INDEX_START_NAME: "sn",
            INDEX_END_VALUE: "ep",
            INDEX_END_NAME: "en",
            LIMIT: "l",
            VIEW_FROM: "vf",
            VIEW_FROM_LEFT: "l",
            VIEW_FROM_RIGHT: "r",
            INDEX: "i"
          }, e.REST_QUERY_CONSTANTS_ = {
            ORDER_BY: "orderBy",
            PRIORITY_INDEX: "$priority",
            VALUE_INDEX: "$value",
            KEY_INDEX: "$key",
            START_AT: "startAt",
            END_AT: "endAt",
            LIMIT_TO_FIRST: "limitToFirst",
            LIMIT_TO_LAST: "limitToLast"
          }, e.DEFAULT = new e, e
        }(),
        nn = function(e) {
          function t(t, n) {
            if (!(t instanceof Jt)) throw new Error(
              "new Reference() no longer supported - use app.database()."
            );
            return e.call(this, t, n, tn.DEFAULT, !1) || this
          }
          return s.__extends(t, e), t.prototype.getKey = function() {
            return o.validateArgCount("Reference.key", 0, 0,
                arguments.length), this.path.isEmpty() ? null : this.path
              .getBack()
          }, t.prototype.child = function(e) {
            return o.validateArgCount("Reference.child", 1, 1,
              arguments.length), "number" === typeof e ? e = String(
              e) : e instanceof V || (null === this.path.getFront() ?
              function(e, t, n, r) {
                n && (n = n.replace(/^\/*\.info(\/|$)/, "/")), ae(e,
                  t, n, r)
              }("Reference.child", 1, e, !1) : ae("Reference.child",
                1, e, !1)), new t(this.repo, this.path.child(e))
          }, t.prototype.getParent = function() {
            o.validateArgCount("Reference.parent", 0, 0, arguments.length);
            var e = this.path.parent();
            return null === e ? null : new t(this.repo, e)
          }, t.prototype.getRoot = function() {
            o.validateArgCount("Reference.root", 0, 0, arguments.length);
            for (var e = this; null !== e.getParent();) e = e.getParent();
            return e
          }, t.prototype.databaseProp = function() {
            return this.repo.database
          }, t.prototype.set = function(e, t) {
            o.validateArgCount("Reference.set", 1, 2, arguments.length),
              se("Reference.set", this.path), ee("Reference.set", 1,
                e, this.path, !1), o.validateCallback("Reference.set",
                2, t, !0);
            var n = new o.Deferred;
            return this.repo.setWithPriority(this.path, e, null, n.wrapCallback(
              t)), n.promise
          }, t.prototype.update = function(e, t) {
            if (o.validateArgCount("Reference.update", 1, 2,
                arguments.length), se("Reference.update", this.path),
              Array.isArray(e)) {
              for (var n = {}, r = 0; r < e.length; ++r) n["" + r] =
                e[r];
              e = n, T(
                "Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children."
              )
            }
            ne("Reference.update", 1, e, this.path, !1), o.validateCallback(
              "Reference.update", 2, t, !0);
            var i = new o.Deferred;
            return this.repo.update(this.path, e, i.wrapCallback(t)),
              i.promise
          }, t.prototype.setWithPriority = function(e, t, n) {
            if (o.validateArgCount("Reference.setWithPriority", 2, 3,
                arguments.length), se("Reference.setWithPriority",
                this.path), ee("Reference.setWithPriority", 1, e,
                this.path, !1), re("Reference.setWithPriority", 2, t, !
                1), o.validateCallback("Reference.setWithPriority", 3,
                n, !0), ".length" === this.getKey() || ".keys" ===
              this.getKey()) throw "Reference.setWithPriority failed: " +
              this.getKey() + " is a read-only object.";
            var r = new o.Deferred;
            return this.repo.setWithPriority(this.path, e, t, r.wrapCallback(
              n)), r.promise
          }, t.prototype.remove = function(e) {
            return o.validateArgCount("Reference.remove", 0, 1,
                arguments.length), se("Reference.remove", this.path),
              o.validateCallback("Reference.remove", 1, e, !0), this.set(
                null, e)
          }, t.prototype.transaction = function(e, t, n) {
            if (o.validateArgCount("Reference.transaction", 1, 3,
                arguments.length), se("Reference.transaction", this.path),
              o.validateCallback("Reference.transaction", 1, e, !1),
              o.validateCallback("Reference.transaction", 2, t, !0),
              function(e, t, n, r) {
                if ((!r || void 0 !== n) && "boolean" !== typeof n)
                  throw new Error(o.errorPrefix(e, t, r) +
                    "must be a boolean.")
              }("Reference.transaction", 3, n, !0), ".length" ===
              this.getKey() || ".keys" === this.getKey()) throw "Reference.transaction failed: " +
              this.getKey() + " is a read-only object.";
            void 0 === n && (n = !0);
            var r = new o.Deferred;
            "function" === typeof t && r.promise.catch(function() {});
            return this.repo.startTransaction(this.path, e, function(
              e, n, i) {
              e ? r.reject(e) : r.resolve(new ce(n, i)),
                "function" === typeof t && t(e, n, i)
            }, n), r.promise
          }, t.prototype.setPriority = function(e, t) {
            o.validateArgCount("Reference.setPriority", 1, 2,
                arguments.length), se("Reference.setPriority", this.path),
              re("Reference.setPriority", 1, e, !1), o.validateCallback(
                "Reference.setPriority", 2, t, !0);
            var n = new o.Deferred;
            return this.repo.setWithPriority(this.path.child(
              ".priority"), e, null, n.wrapCallback(t)), n.promise
          }, t.prototype.push = function(e, t) {
            o.validateArgCount("Reference.push", 0, 2, arguments.length),
              se("Reference.push", this.path), ee("Reference.push", 1,
                e, this.path, !0), o.validateCallback(
                "Reference.push", 2, t, !0);
            var n, r = this.repo.serverTime(),
              i = fe(r),
              a = this.child(i),
              s = this.child(i);
            return n = null != e ? a.set(e, t).then(function() {
                return s
              }) : Promise.resolve(s), a.then = n.then.bind(n), a.catch =
              n.then.bind(n, void 0), "function" === typeof t && n.catch(
                function() {}), a
          }, t.prototype.onDisconnect = function() {
            return se("Reference.onDisconnect", this.path), new le(
              this.repo, this.path)
          }, Object.defineProperty(t.prototype, "database", {
            get: function() {
              return this.databaseProp()
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "key", {
            get: function() {
              return this.getKey()
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "parent", {
            get: function() {
              return this.getParent()
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "root", {
            get: function() {
              return this.getRoot()
            },
            enumerable: !0,
            configurable: !0
          }), t
        }($e);
      $e.__referenceConstructor = nn, bt.__referenceConstructor = nn;
      var rn, on = function() {
          return function() {
            this.children = {}, this.childCount = 0, this.value =
              null
          }
        }(),
        an = function() {
          function e(e, t, n) {
            void 0 === e && (e = ""), void 0 === t && (t = null), void 0 ===
              n && (n = new on), this.name_ = e, this.parent_ = t, this
              .node_ = n
          }
          return e.prototype.subTree = function(t) {
              for (var n, r = t instanceof V ? t : new V(t), i = this; null !==
                (n = r.getFront());) {
                i = new e(n, i, o.safeGet(i.node_.children, n) || new on),
                  r = r.popFront()
              }
              return i
            }, e.prototype.getValue = function() {
              return this.node_.value
            }, e.prototype.setValue = function(e) {
              o.assert("undefined" !== typeof e,
                  "Cannot set value to undefined"), this.node_.value =
                e, this.updateParents_()
            }, e.prototype.clear = function() {
              this.node_.value = null, this.node_.children = {}, this.node_
                .childCount = 0, this.updateParents_()
            }, e.prototype.hasChildren = function() {
              return this.node_.childCount > 0
            }, e.prototype.isEmpty = function() {
              return null === this.getValue() && !this.hasChildren()
            }, e.prototype.forEachChild = function(t) {
              var n = this;
              o.forEach(this.node_.children, function(r, i) {
                t(new e(r, n, i))
              })
            }, e.prototype.forEachDescendant = function(e, t, n) {
              t && !n && e(this), this.forEachChild(function(t) {
                t.forEachDescendant(e, !0, n)
              }), t && n && e(this)
            }, e.prototype.forEachAncestor = function(e, t) {
              for (var n = t ? this : this.parent(); null !== n;) {
                if (e(n)) return !0;
                n = n.parent()
              }
              return !1
            }, e.prototype.forEachImmediateDescendantWithValue =
            function(e) {
              this.forEachChild(function(t) {
                null !== t.getValue() ? e(t) : t.forEachImmediateDescendantWithValue(
                  e)
              })
            }, e.prototype.path = function() {
              return new V(null === this.parent_ ? this.name_ : this.parent_
                .path() + "/" + this.name_)
            }, e.prototype.name = function() {
              return this.name_
            }, e.prototype.parent = function() {
              return this.parent_
            }, e.prototype.updateParents_ = function() {
              null !== this.parent_ && this.parent_.updateChild_(this.name_,
                this)
            }, e.prototype.updateChild_ = function(e, t) {
              var n = t.isEmpty(),
                r = o.contains(this.node_.children, e);
              n && r ? (delete this.node_.children[e], this.node_.childCount--,
                this.updateParents_()) : n || r || (this.node_.children[
                e] = t.node_, this.node_.childCount++, this.updateParents_())
            }, e
        }();
      ! function(e) {
        e[e.RUN = 0] = "RUN", e[e.SENT = 1] = "SENT", e[e.COMPLETED = 2] =
          "COMPLETED", e[e.SENT_NEEDS_ABORT = 3] = "SENT_NEEDS_ABORT",
          e[e.NEEDS_ABORT = 4] = "NEEDS_ABORT"
      }(rn || (rn = {})), Jt.MAX_TRANSACTION_RETRIES_ = 25, Jt.prototype
        .transactions_init_ = function() {
          this.transactionQueueTree_ = new an
        }, Jt.prototype.startTransaction = function(e, t, n, r) {
          this.log_("transaction on " + e);
          var i = function() {},
            a = new nn(this, e);
          a.on("value", i);
          var s = {
              path: e,
              update: t,
              onComplete: n,
              status: null,
              order: y(),
              applyLocally: r,
              retryCount: 0,
              unwatcher: function() {
                a.off("value", i)
              },
              abortReason: null,
              currentWriteId: null,
              currentInputSnapshot: null,
              currentOutputSnapshotRaw: null,
              currentOutputSnapshotResolved: null
            },
            u = this.getLatestState_(e);
          s.currentInputSnapshot = u;
          var l = s.update(u.val());
          if (void 0 === l) {
            if (s.unwatcher(), s.currentOutputSnapshotRaw = null, s.currentOutputSnapshotResolved =
              null, s.onComplete) {
              var c = new ze(s.currentInputSnapshot, new nn(this, s.path),
                Se);
              s.onComplete(null, !1, c)
            }
          } else {
            te("transaction failed: Data returned ", l, s.path), s.status =
              rn.RUN;
            var f = this.transactionQueueTree_.subTree(e),
              p = f.getValue() || [];
            p.push(s), f.setValue(p);
            var h = void 0;
            if ("object" === typeof l && null !== l && o.contains(l,
                ".priority")) h = o.safeGet(l, ".priority"), o.assert(Z(
                h),
              "Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null."
            );
            else h = (this.serverSyncTree_.calcCompleteEventCache(e) ||
              Le.EMPTY_NODE).getPriority().val();
            h = h;
            var d = this.generateServerValues(),
              v = Ue(l, h),
              m = Ze(v, d);
            s.currentOutputSnapshotRaw = v, s.currentOutputSnapshotResolved =
              m, s.currentWriteId = this.getNextWriteId_();
            var g = this.serverSyncTree_.applyUserOverwrite(e, m, s.currentWriteId,
              s.applyLocally);
            this.eventQueue_.raiseEventsForChangedPath(e, g), this.sendReadyTransactions_()
          }
        }, Jt.prototype.getLatestState_ = function(e, t) {
          return this.serverSyncTree_.calcCompleteEventCache(e, t) ||
            Le.EMPTY_NODE
        }, Jt.prototype.sendReadyTransactions_ = function(e) {
          var t = this;
          if (void 0 === e && (e = this.transactionQueueTree_), e ||
            this.pruneCompletedTransactionsBelowNode_(e), null !== e.getValue()
          ) {
            var n = this.buildTransactionQueue_(e);
            o.assert(n.length > 0,
              "Sending zero length transaction queue"), n.every(
              function(e) {
                return e.status === rn.RUN
              }) && this.sendTransactionQueue_(e.path(), n)
          } else e.hasChildren() && e.forEachChild(function(e) {
            t.sendReadyTransactions_(e)
          })
        }, Jt.prototype.sendTransactionQueue_ = function(e, t) {
          for (var n = this, r = t.map(function(e) {
                return e.currentWriteId
              }), i = this.getLatestState_(e, r), a = i, s = i.hash(),
              u = 0; u < t.length; u++) {
            var l = t[u];
            o.assert(l.status === rn.RUN,
              "tryToSendTransactionQueue_: items in queue should all be run."
            ), l.status = rn.SENT, l.retryCount++;
            var c = V.relativePath(e, l.path);
            a = a.updateChild(c, l.currentOutputSnapshotRaw)
          }
          var f = a.val(!0),
            p = e;
          this.server_.put(p.toString(), f, function(r) {
            n.log_("transaction put response", {
              path: p.toString(),
              status: r
            });
            var i = [];
            if ("ok" === r) {
              for (var o = [], a = 0; a < t.length; a++) {
                if (t[a].status = rn.COMPLETED, i = i.concat(n.serverSyncTree_
                    .ackUserWrite(t[a].currentWriteId)), t[a].onComplete) {
                  var s = t[a].currentOutputSnapshotResolved,
                    u = new nn(n, t[a].path),
                    l = new ze(s, u, Se);
                  o.push(t[a].onComplete.bind(null, null, !0, l))
                }
                t[a].unwatcher()
              }
              n.pruneCompletedTransactionsBelowNode_(n.transactionQueueTree_
                  .subTree(e)), n.sendReadyTransactions_(), n.eventQueue_
                .raiseEventsForChangedPath(e, i);
              for (a = 0; a < o.length; a++) j(o[a])
            } else {
              if ("datastale" === r)
                for (a = 0; a < t.length; a++) t[a].status === rn.SENT_NEEDS_ABORT ?
                  t[a].status = rn.NEEDS_ABORT : t[a].status = rn.RUN;
              else {
                T("transaction at " + p.toString() + " failed: " +
                  r);
                for (a = 0; a < t.length; a++) t[a].status = rn.NEEDS_ABORT,
                  t[a].abortReason = r
              }
              n.rerunTransactions_(e)
            }
          }, s)
        }, Jt.prototype.rerunTransactions_ = function(e) {
          var t = this.getAncestorTransactionNode_(e),
            n = t.path(),
            r = this.buildTransactionQueue_(t);
          return this.rerunTransactionQueue_(r, n), n
        }, Jt.prototype.rerunTransactionQueue_ = function(e, t) {
          if (0 !== e.length) {
            for (var n, r = [], i = [], a = e.filter(function(e) {
                return e.status === rn.RUN
              }).map(function(e) {
                return e.currentWriteId
              }), s = 0; s < e.length; s++) {
              var u = e[s],
                l = V.relativePath(t, u.path),
                c = !1,
                f = void 0;
              if (o.assert(null !== l,
                  "rerunTransactionsUnderNode_: relativePath should not be null."
                ), u.status === rn.NEEDS_ABORT) c = !0, f = u.abortReason,
                i = i.concat(this.serverSyncTree_.ackUserWrite(u.currentWriteId, !
                  0));
              else if (u.status === rn.RUN)
                if (u.retryCount >= Jt.MAX_TRANSACTION_RETRIES_) c = !0,
                  f = "maxretry", i = i.concat(this.serverSyncTree_.ackUserWrite(
                    u.currentWriteId, !0));
                else {
                  var p = this.getLatestState_(u.path, a);
                  u.currentInputSnapshot = p;
                  var h = e[s].update(p.val());
                  if (void 0 !== h) {
                    te("transaction failed: Data returned ", h, u.path);
                    var d = Ue(h);
                    "object" === typeof h && null != h && o.contains(h,
                      ".priority") || (d = d.updatePriority(p.getPriority()));
                    var y = u.currentWriteId,
                      v = this.generateServerValues(),
                      m = Ze(d, v);
                    u.currentOutputSnapshotRaw = d, u.currentOutputSnapshotResolved =
                      m, u.currentWriteId = this.getNextWriteId_(), a.splice(
                        a.indexOf(y), 1), i = (i = i.concat(this.serverSyncTree_
                        .applyUserOverwrite(u.path, m, u.currentWriteId,
                          u.applyLocally))).concat(this.serverSyncTree_
                        .ackUserWrite(y, !0))
                  } else c = !0, f = "nodata", i = i.concat(this.serverSyncTree_
                    .ackUserWrite(u.currentWriteId, !0))
                }
              if (this.eventQueue_.raiseEventsForChangedPath(t, i), i = [],
                c && (e[s].status = rn.COMPLETED, n = e[s].unwatcher,
                  setTimeout(n, Math.floor(0)), e[s].onComplete))
                if ("nodata" === f) {
                  var g = new nn(this, e[s].path),
                    _ = e[s].currentInputSnapshot,
                    b = new ze(_, g, Se);
                  r.push(e[s].onComplete.bind(null, null, !1, b))
                } else r.push(e[s].onComplete.bind(null, new Error(f), !
                  1, null))
            }
            this.pruneCompletedTransactionsBelowNode_(this.transactionQueueTree_);
            for (s = 0; s < r.length; s++) j(r[s]);
            this.sendReadyTransactions_()
          }
        }, Jt.prototype.getAncestorTransactionNode_ = function(e) {
          for (var t, n = this.transactionQueueTree_; null !== (t = e.getFront()) &&
            null === n.getValue();) n = n.subTree(t), e = e.popFront();
          return n
        }, Jt.prototype.buildTransactionQueue_ = function(e) {
          var t = [];
          return this.aggregateTransactionQueuesForNode_(e, t), t.sort(
            function(e, t) {
              return e.order - t.order
            }), t
        }, Jt.prototype.aggregateTransactionQueuesForNode_ = function(e,
          t) {
          var n = this,
            r = e.getValue();
          if (null !== r)
            for (var i = 0; i < r.length; i++) t.push(r[i]);
          e.forEachChild(function(e) {
            n.aggregateTransactionQueuesForNode_(e, t)
          })
        }, Jt.prototype.pruneCompletedTransactionsBelowNode_ = function(
          e) {
          var t = this,
            n = e.getValue();
          if (n) {
            for (var r = 0, i = 0; i < n.length; i++) n[i].status !==
              rn.COMPLETED && (n[r] = n[i], r++);
            n.length = r, e.setValue(n.length > 0 ? n : null)
          }
          e.forEachChild(function(e) {
            t.pruneCompletedTransactionsBelowNode_(e)
          })
        }, Jt.prototype.abortTransactions_ = function(e) {
          var t = this,
            n = this.getAncestorTransactionNode_(e).path(),
            r = this.transactionQueueTree_.subTree(e);
          return r.forEachAncestor(function(e) {
            t.abortTransactionsOnNode_(e)
          }), this.abortTransactionsOnNode_(r), r.forEachDescendant(
            function(e) {
              t.abortTransactionsOnNode_(e)
            }), n
        }, Jt.prototype.abortTransactionsOnNode_ = function(e) {
          var t = e.getValue();
          if (null !== t) {
            for (var n = [], r = [], i = -1, a = 0; a < t.length; a++)
              if (t[a].status === rn.SENT_NEEDS_ABORT);
              else if (t[a].status === rn.SENT) o.assert(i === a - 1,
                "All SENT items should be at beginning of queue."), i =
              a, t[a].status = rn.SENT_NEEDS_ABORT, t[a].abortReason =
              "set";
            else if (o.assert(t[a].status === rn.RUN,
                "Unexpected transaction status in abort"), t[a].unwatcher(),
              r = r.concat(this.serverSyncTree_.ackUserWrite(t[a].currentWriteId, !
                0)), t[a].onComplete) {
              n.push(t[a].onComplete.bind(null, new Error("set"), !1,
                null))
            } - 1 === i ? e.setValue(null) : t.length = i + 1, this.eventQueue_
              .raiseEventsForChangedPath(e.path(), r);
            for (a = 0; a < n.length; a++) j(n[a])
          }
        };
      var sn, un = function() {
          function e() {
            this.repos_ = {}, this.useRestClient_ = !1
          }
          return e.getInstance = function() {
            return sn || (sn = new e), sn
          }, e.prototype.interrupt = function() {
            for (var e in this.repos_)
              for (var t in this.repos_[e]) this.repos_[e][t].interrupt()
          }, e.prototype.resume = function() {
            for (var e in this.repos_)
              for (var t in this.repos_[e]) this.repos_[e][t].resume()
          }, e.prototype.databaseFromApp = function(e, t) {
            var n = t || e.options.databaseURL;
            void 0 === n && S(
              "Can't determine Firebase Database URL.  Be sure to include databaseURL option when calling firebase.initializeApp()."
            );
            var r = K(n),
              i = r.repoInfo;
            return ue("Invalid Firebase Database URL", 1, r), r.path.isEmpty() ||
              S(
                "Database URL must point to the root of a Firebase Database (not including a child path)."
              ), this.createRepo(i, e).database
          }, e.prototype.deleteRepo = function(e) {
            var t = o.safeGet(this.repos_, e.app.name);
            t && o.safeGet(t, e.repoInfo_.toURLString()) === e || S(
              "Database " + e.app.name + "(" + e.repoInfo_ +
              ") has already been deleted."), e.interrupt(), delete t[
              e.repoInfo_.toURLString()]
          }, e.prototype.createRepo = function(e, t) {
            var n = o.safeGet(this.repos_, t.name);
            n || (n = {}, this.repos_[t.name] = n);
            var r = o.safeGet(n, e.toURLString());
            return r && S(
                "Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."
              ), r = new Jt(e, this.useRestClient_, t), n[e.toURLString()] =
              r, r
          }, e.prototype.forceRestClient = function(e) {
            this.useRestClient_ = e
          }, e
        }(),
        ln = function() {
          function e(e) {
            this.repo_ = e, e instanceof Jt || S(
              "Don't call new Database() directly - please use firebase.database()."
            ), this.root_ = new nn(e, V.Empty), this.INTERNAL = new cn(
              this)
          }
          return Object.defineProperty(e.prototype, "app", {
            get: function() {
              return this.repo_.app
            },
            enumerable: !0,
            configurable: !0
          }), e.prototype.ref = function(e) {
            return this.checkDeleted_("ref"), o.validateArgCount(
                "database.ref", 0, 1, arguments.length), e instanceof nn ?
              this.refFromURL(e.toString()) : void 0 !== e ? this.root_
              .child(e) : this.root_
          }, e.prototype.refFromURL = function(e) {
            var t = "database.refFromURL";
            this.checkDeleted_(t), o.validateArgCount(t, 1, 1,
              arguments.length);
            var n = K(e);
            ue(t, 1, n);
            var r = n.repoInfo;
            return r.host !== this.repo_.repoInfo_.host && S(t +
              ": Host name does not match the current database: (found " +
              r.host + " but expected " + this.repo_.repoInfo_.host +
              ")"), this.ref(n.path.toString())
          }, e.prototype.checkDeleted_ = function(e) {
            null === this.repo_ && S("Cannot call " + e +
              " on a deleted database.")
          }, e.prototype.goOffline = function() {
            o.validateArgCount("database.goOffline", 0, 0, arguments.length),
              this.checkDeleted_("goOffline"), this.repo_.interrupt()
          }, e.prototype.goOnline = function() {
            o.validateArgCount("database.goOnline", 0, 0, arguments.length),
              this.checkDeleted_("goOnline"), this.repo_.resume()
          }, e.ServerValue = {
            TIMESTAMP: {
              ".sv": "timestamp"
            }
          }, e
        }(),
        cn = function() {
          function e(e) {
            this.database = e
          }
          return e.prototype.delete = function() {
            return s.__awaiter(this, void 0, void 0, function() {
              return s.__generator(this, function(e) {
                return this.database.checkDeleted_("delete"),
                  un.getInstance().deleteRepo(this.database.repo_),
                  this.database.repo_ = null, this.database.root_ =
                  null, this.database.INTERNAL = null, this.database =
                  null, [2]
              })
            })
          }, e
        }(),
        fn = Object.freeze({
          forceLongPolling: function() {
            zt.forceDisallow(), Vt.forceAllow()
          },
          forceWebSockets: function() {
            Vt.forceDisallow()
          },
          isWebSocketsAvailable: function() {
            return zt.isAvailable()
          },
          setSecurityDebugCallback: function(e, t) {
            e.repo.persistentConnection_.securityDebugCallback_ = t
          },
          stats: function(e, t) {
            e.repo.stats(t)
          },
          statsIncrementCounter: function(e, t) {
            e.repo.statsIncrementCounter(t)
          },
          dataUpdateCount: function(e) {
            return e.repo.dataUpdateCount
          },
          interceptServerData: function(e, t) {
            return e.repo.interceptServerData_(t)
          }
        }),
        pn = Yt;
      Yt.prototype.simpleListen = function(e, t) {
        this.sendRequest("q", {
          p: e
        }, t)
      }, Yt.prototype.echo = function(e, t) {
        this.sendRequest("echo", {
          d: e
        }, t)
      };
      var hn = Ht,
        dn = z,
        yn = Object.freeze({
          DataConnection: pn,
          RealTimeConnection: hn,
          hijackHash: function(e) {
            var t = Yt.prototype.put;
            return Yt.prototype.put = function(n, r, i, o) {
                void 0 !== o && (o = e()), t.call(this, n, r, i, o)
              },
              function() {
                Yt.prototype.put = t
              }
          },
          ConnectionTarget: dn,
          queryIdentifier: function(e) {
            return e.queryIdentifier()
          },
          listens: function(e) {
            return e.repo.persistentConnection_.listens_
          },
          forceRestClient: function(e) {
            un.getInstance().forceRestClient(e)
          }
        }),
        vn = ln.ServerValue;

      function mn(t) {
        var n = t.INTERNAL.registerService("database", function(e, t, n) {
          return un.getInstance().databaseFromApp(e, n)
        }, {
          Reference: nn,
          Query: $e,
          Database: ln,
          enableLogging: b,
          INTERNAL: fn,
          ServerValue: vn,
          TEST_ACCESS: yn
        }, null, !0);
        o.isNodeSdk() && (e.exports = n)
      }
      mn(u), t.registerDatabase = mn, t.Database = ln, t.Query = $e, t.Reference =
        nn, t.enableLogging = b, t.ServerValue = vn, t.DataSnapshot =
        ze, t.OnDisconnect = le
    }).call(this, n(34))
  }, function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, "setLogLevel", function() {
      return u
    }), n.d(t, "Logger", function() {
      return s
    }), n.d(t, "LogLevel", function() {
      return r
    });
    var r, i = [];
    ! function(e) {
      e[e.DEBUG = 0] = "DEBUG", e[e.VERBOSE = 1] = "VERBOSE", e[e.INFO =
          2] = "INFO", e[e.WARN = 3] = "WARN", e[e.ERROR = 4] = "ERROR",
        e[e.SILENT = 5] = "SILENT"
    }(r || (r = {}));
    var o = r.INFO,
      a = function(e, t) {
        for (var n = [], i = 2; i < arguments.length; i++) n[i - 2] =
          arguments[i];
        if (!(t < e.logLevel)) {
          var o = (new Date).toISOString();
          switch (t) {
            case r.DEBUG:
            case r.VERBOSE:
              console.log.apply(console, ["[" + o + "]  " + e.name + ":"]
                .concat(n));
              break;
            case r.INFO:
              console.info.apply(console, ["[" + o + "]  " + e.name + ":"]
                .concat(n));
              break;
            case r.WARN:
              console.warn.apply(console, ["[" + o + "]  " + e.name + ":"]
                .concat(n));
              break;
            case r.ERROR:
              console.error.apply(console, ["[" + o + "]  " + e.name +
                ":"
              ].concat(n));
              break;
            default:
              throw new Error(
                "Attempted to log a message with an invalid logType (value: " +
                t + ")")
          }
        }
      },
      s = function() {
        function e(e) {
          this.name = e, this._logLevel = o, this._logHandler = a, i.push(
            this)
        }
        return Object.defineProperty(e.prototype, "logLevel", {
          get: function() {
            return this._logLevel
          },
          set: function(e) {
            if (!(e in r)) throw new TypeError(
              "Invalid value assigned to `logLevel`");
            this._logLevel = e
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "logHandler", {
          get: function() {
            return this._logHandler
          },
          set: function(e) {
            if ("function" !== typeof e) throw new TypeError(
              "Value assigned to `logHandler` must be a function"
            );
            this._logHandler = e
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.debug = function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] =
            arguments[t];
          this._logHandler.apply(this, [this, r.DEBUG].concat(e))
        }, e.prototype.log = function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] =
            arguments[t];
          this._logHandler.apply(this, [this, r.VERBOSE].concat(e))
        }, e.prototype.info = function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] =
            arguments[t];
          this._logHandler.apply(this, [this, r.INFO].concat(e))
        }, e.prototype.warn = function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] =
            arguments[t];
          this._logHandler.apply(this, [this, r.WARN].concat(e))
        }, e.prototype.error = function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] =
            arguments[t];
          this._logHandler.apply(this, [this, r.ERROR].concat(e))
        }, e
      }();

    function u(e) {
      i.forEach(function(t) {
        t.logLevel = e
      })
    }
  }]
]);
//# sourceMappingURL=2.40fd67de.chunk.js.map
