var __webpack_modules__ = {
        2: (t, e, n) => {
            n.d(e, {
                Component: () => E,
                h: () => b,
                render: () => F
            });
            var r, i, o, a, c, l, u, s, f, p, d, h = {},
                v = [],
                _ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
                m = Array.isArray;

            function g(t, e) {
                for (var n in e) t[n] = e[n];
                return t
            }

            function y(t) {
                t && t.parentNode && t.parentNode.removeChild(t)
            }

            function b(t, e, n) {
                var i, o, a, c = {};
                for (a in e) "key" == a ? i = e[a] : "ref" == a ? o = e[a] : c[a] = e[a];
                if (arguments.length > 2 && (c.children = arguments.length > 3 ? r.call(arguments, 2) : n), "function" == typeof t && null != t.defaultProps)
                    for (a in t.defaultProps) void 0 === c[a] && (c[a] = t.defaultProps[a]);
                return w(t, c, i, o, null)
            }

            function w(t, e, n, r, a) {
                var c = {
                    type: t,
                    props: e,
                    key: n,
                    ref: r,
                    __k: null,
                    __: null,
                    __b: 0,
                    __e: null,
                    __c: null,
                    constructor: void 0,
                    __v: null == a ? ++o : a,
                    __i: -1,
                    __u: 0
                };
                return null == a && null != i.vnode && i.vnode(c), c
            }

            function T(t) {
                return t.children
            }

            function E(t, e) {
                this.props = t, this.context = e
            }

            function S(t, e) {
                if (null == e) return t.__ ? S(t.__, t.__i + 1) : null;
                for (var n; e < t.__k.length; e++)
                    if (null != (n = t.__k[e]) && null != n.__e) return n.__e;
                return "function" == typeof t.type ? S(t) : null
            }

            function O(t) {
                var e, n;
                if (null != (t = t.__) && null != t.__c) {
                    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
                        if (null != (n = t.__k[e]) && null != n.__e) {
                            t.__e = t.__c.base = n.__e;
                            break
                        }
                    return O(t)
                }
            }

            function W(t) {
                (!t.__d && (t.__d = !0) && a.push(t) && !P.__r++ || c != i.debounceRendering) && ((c = i.debounceRendering) || l)(P)
            }

            function P() {
                for (var t, e, n, r, o, c, l, s = 1; a.length;) a.length > s && a.sort(u), t = a.shift(), s = a.length, t.__d && (n = void 0, o = (r = (e = t).__v).__e, c = [], l = [], e.__P && ((n = g({}, r)).__v = r.__v + 1, i.vnode && i.vnode(n), D(e.__P, n, r, e.__n, e.__P.namespaceURI, 32 & r.__u ? [o] : null, c, null == o ? S(r) : o, !!(32 & r.__u), l), n.__v = r.__v, n.__.__k[n.__i] = n, I(c, n, l), n.__e != o && O(n)));
                P.__r = 0
            }

            function k(t, e, n, r, i, o, a, c, l, u, s) {
                var f, p, d, _, m, g, y, b = r && r.__k || v,
                    w = e.length;
                for (l = j(n, e, b, l, w), f = 0; f < w; f++) null != (d = n.__k[f]) && (p = -1 == d.__i ? h : b[d.__i] || h, d.__i = f, g = D(t, d, p, i, o, a, c, l, u, s), _ = d.__e, d.ref && p.ref != d.ref && (p.ref && U(p.ref, null, d), s.push(d.ref, d.__c || _, d)), null == m && null != _ && (m = _), (y = !!(4 & d.__u)) || p.__k === d.__k ? l = L(d, l, t, y) : "function" == typeof d.type && void 0 !== g ? l = g : _ && (l = _.nextSibling), d.__u &= -7);
                return n.__e = m, l
            }

            function j(t, e, n, r, i) {
                var o, a, c, l, u, s = n.length,
                    f = s,
                    p = 0;
                for (t.__k = new Array(i), o = 0; o < i; o++) null != (a = e[o]) && "boolean" != typeof a && "function" != typeof a ? (l = o + p, (a = t.__k[o] = "string" == typeof a || "number" == typeof a || "bigint" == typeof a || a.constructor == String ? w(null, a, null, null, null) : m(a) ? w(T, {
                    children: a
                }, null, null, null) : null == a.constructor && a.__b > 0 ? w(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a).__ = t, a.__b = t.__b + 1, c = null, -1 != (u = a.__i = A(a, n, l, f)) && (f--, (c = n[u]) && (c.__u |= 2)), null == c || null == c.__v ? (-1 == u && (i > s ? p-- : i < s && p++), "function" != typeof a.type && (a.__u |= 4)) : u != l && (u == l - 1 ? p-- : u == l + 1 ? p++ : (u > l ? p-- : p++, a.__u |= 4))) : t.__k[o] = null;
                if (f)
                    for (o = 0; o < s; o++) null != (c = n[o]) && !(2 & c.__u) && (c.__e == r && (r = S(c)), H(c, c));
                return r
            }

            function L(t, e, n, r) {
                var i, o;
                if ("function" == typeof t.type) {
                    for (i = t.__k, o = 0; i && o < i.length; o++) i[o] && (i[o].__ = t, e = L(i[o], e, n, r));
                    return e
                }
                t.__e != e && (r && (e && t.type && !e.parentNode && (e = S(t)), n.insertBefore(t.__e, e || null)), e = t.__e);
                do {
                    e = e && e.nextSibling
                } while (null != e && 8 == e.nodeType);
                return e
            }

            function A(t, e, n, r) {
                var i, o, a, c = t.key,
                    l = t.type,
                    u = e[n],
                    s = null != u && !(2 & u.__u);
                if (null === u && null == t.key || s && c == u.key && l == u.type) return n;
                if (r > (s ? 1 : 0))
                    for (i = n - 1, o = n + 1; i >= 0 || o < e.length;)
                        if (null != (u = e[a = i >= 0 ? i-- : o++]) && !(2 & u.__u) && c == u.key && l == u.type) return a;
                return -1
            }

            function x(t, e, n) {
                "-" == e[0] ? t.setProperty(e, null == n ? "" : n) : t[e] = null == n ? "" : "number" != typeof n || _.test(e) ? n : n + "px"
            }

            function M(t, e, n, r, i) {
                var o, a;
                t: if ("style" == e)
                    if ("string" == typeof n) t.style.cssText = n;
                    else {
                        if ("string" == typeof r && (t.style.cssText = r = ""), r)
                            for (e in r) n && e in n || x(t.style, e, "");
                        if (n)
                            for (e in n) r && n[e] == r[e] || x(t.style, e, n[e])
                    }
                else if ("o" == e[0] && "n" == e[1]) o = e != (e = e.replace(s, "$1")), a = e.toLowerCase(), e = a in t || "onFocusOut" == e || "onFocusIn" == e ? a.slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + o] = n, n ? r ? n.u = r.u : (n.u = f, t.addEventListener(e, o ? d : p, o)) : t.removeEventListener(e, o ? d : p, o);
                else {
                    if ("http://www.w3.org/2000/svg" == i) e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
                    else if ("width" != e && "height" != e && "href" != e && "list" != e && "form" != e && "tabIndex" != e && "download" != e && "rowSpan" != e && "colSpan" != e && "role" != e && "popover" != e && e in t) try {
                        t[e] = null == n ? "" : n;
                        break t
                    } catch (t) {}
                    "function" == typeof n || (null == n || !1 === n && "-" != e[4] ? t.removeAttribute(e) : t.setAttribute(e, "popover" == e && 1 == n ? "" : n))
                }
            }

            function C(t) {
                return function(e) {
                    if (this.l) {
                        var n = this.l[e.type + t];
                        if (null == e.t) e.t = f++;
                        else if (e.t < n.u) return;
                        return n(i.event ? i.event(e) : e)
                    }
                }
            }

            function D(t, e, n, r, o, a, c, l, u, s) {
                var f, p, d, h, v, _, b, w, S, O, W, P, j, L, A, x, M, C = e.type;
                if (null != e.constructor) return null;
                128 & n.__u && (u = !!(32 & n.__u), a = [l = e.__e = n.__e]), (f = i.__b) && f(e);
                t: if ("function" == typeof C) try {
                    if (w = e.props, S = "prototype" in C && C.prototype.render, O = (f = C.contextType) && r[f.__c], W = f ? O ? O.props.value : f.__ : r, n.__c ? b = (p = e.__c = n.__c).__ = p.__E : (S ? e.__c = p = new C(w, W) : (e.__c = p = new E(w, W), p.constructor = C, p.render = V), O && O.sub(p), p.props = w, p.state || (p.state = {}), p.context = W, p.__n = r, d = p.__d = !0, p.__h = [], p._sb = []), S && null == p.__s && (p.__s = p.state), S && null != C.getDerivedStateFromProps && (p.__s == p.state && (p.__s = g({}, p.__s)), g(p.__s, C.getDerivedStateFromProps(w, p.__s))), h = p.props, v = p.state, p.__v = e, d) S && null == C.getDerivedStateFromProps && null != p.componentWillMount && p.componentWillMount(), S && null != p.componentDidMount && p.__h.push(p.componentDidMount);
                    else {
                        if (S && null == C.getDerivedStateFromProps && w !== h && null != p.componentWillReceiveProps && p.componentWillReceiveProps(w, W), !p.__e && null != p.shouldComponentUpdate && !1 === p.shouldComponentUpdate(w, p.__s, W) || e.__v == n.__v) {
                            for (e.__v != n.__v && (p.props = w, p.state = p.__s, p.__d = !1), e.__e = n.__e, e.__k = n.__k, e.__k.some((function(t) {
                                    t && (t.__ = e)
                                })), P = 0; P < p._sb.length; P++) p.__h.push(p._sb[P]);
                            p._sb = [], p.__h.length && c.push(p);
                            break t
                        }
                        null != p.componentWillUpdate && p.componentWillUpdate(w, p.__s, W), S && null != p.componentDidUpdate && p.__h.push((function() {
                            p.componentDidUpdate(h, v, _)
                        }))
                    }
                    if (p.context = W, p.props = w, p.__P = t, p.__e = !1, j = i.__r, L = 0, S) {
                        for (p.state = p.__s, p.__d = !1, j && j(e), f = p.render(p.props, p.state, p.context), A = 0; A < p._sb.length; A++) p.__h.push(p._sb[A]);
                        p._sb = []
                    } else
                        do {
                            p.__d = !1, j && j(e), f = p.render(p.props, p.state, p.context), p.state = p.__s
                        } while (p.__d && ++L < 25);
                    p.state = p.__s, null != p.getChildContext && (r = g(g({}, r), p.getChildContext())), S && !d && null != p.getSnapshotBeforeUpdate && (_ = p.getSnapshotBeforeUpdate(h, v)), x = f, null != f && f.type === T && null == f.key && (x = N(f.props.children)), l = k(t, m(x) ? x : [x], e, n, r, o, a, c, l, u, s), p.base = e.__e, e.__u &= -161, p.__h.length && c.push(p), b && (p.__E = p.__ = null)
                } catch (t) {
                    if (e.__v = null, u || null != a)
                        if (t.then) {
                            for (e.__u |= u ? 160 : 128; l && 8 == l.nodeType && l.nextSibling;) l = l.nextSibling;
                            a[a.indexOf(l)] = null, e.__e = l
                        } else {
                            for (M = a.length; M--;) y(a[M]);
                            B(e)
                        }
                    else e.__e = n.__e, e.__k = n.__k, t.then || B(e);
                    i.__e(t, e, n)
                } else null == a && e.__v == n.__v ? (e.__k = n.__k, e.__e = n.__e) : l = e.__e = R(n.__e, e, n, r, o, a, c, u, s);
                return (f = i.diffed) && f(e), 128 & e.__u ? void 0 : l
            }

            function B(t) {
                t && t.__c && (t.__c.__e = !0), t && t.__k && t.__k.forEach(B)
            }

            function I(t, e, n) {
                for (var r = 0; r < n.length; r++) U(n[r], n[++r], n[++r]);
                i.__c && i.__c(e, t), t.some((function(e) {
                    try {
                        t = e.__h, e.__h = [], t.some((function(t) {
                            t.call(e)
                        }))
                    } catch (t) {
                        i.__e(t, e.__v)
                    }
                }))
            }

            function N(t) {
                return "object" != typeof t || null == t || t.__b && t.__b > 0 ? t : m(t) ? t.map(N) : g({}, t)
            }

            function R(t, e, n, o, a, c, l, u, s) {
                var f, p, d, v, _, g, b, w = n.props,
                    T = e.props,
                    E = e.type;
                if ("svg" == E ? a = "http://www.w3.org/2000/svg" : "math" == E ? a = "http://www.w3.org/1998/Math/MathML" : a || (a = "http://www.w3.org/1999/xhtml"), null != c)
                    for (f = 0; f < c.length; f++)
                        if ((_ = c[f]) && "setAttribute" in _ == !!E && (E ? _.localName == E : 3 == _.nodeType)) {
                            t = _, c[f] = null;
                            break
                        }
                if (null == t) {
                    if (null == E) return document.createTextNode(T);
                    t = document.createElementNS(a, E, T.is && T), u && (i.__m && i.__m(e, c), u = !1), c = null
                }
                if (null == E) w === T || u && t.data == T || (t.data = T);
                else {
                    if (c = c && r.call(t.childNodes), w = n.props || h, !u && null != c)
                        for (w = {}, f = 0; f < t.attributes.length; f++) w[(_ = t.attributes[f]).name] = _.value;
                    for (f in w)
                        if (_ = w[f], "children" == f);
                        else if ("dangerouslySetInnerHTML" == f) d = _;
                    else if (!(f in T)) {
                        if ("value" == f && "defaultValue" in T || "checked" == f && "defaultChecked" in T) continue;
                        M(t, f, null, _, a)
                    }
                    for (f in T) _ = T[f], "children" == f ? v = _ : "dangerouslySetInnerHTML" == f ? p = _ : "value" == f ? g = _ : "checked" == f ? b = _ : u && "function" != typeof _ || w[f] === _ || M(t, f, _, w[f], a);
                    if (p) u || d && (p.__html == d.__html || p.__html == t.innerHTML) || (t.innerHTML = p.__html), e.__k = [];
                    else if (d && (t.innerHTML = ""), k("template" == e.type ? t.content : t, m(v) ? v : [v], e, n, o, "foreignObject" == E ? "http://www.w3.org/1999/xhtml" : a, c, l, c ? c[0] : n.__k && S(n, 0), u, s), null != c)
                        for (f = c.length; f--;) y(c[f]);
                    u || (f = "value", "progress" == E && null == g ? t.removeAttribute("value") : null != g && (g !== t[f] || "progress" == E && !g || "option" == E && g != w[f]) && M(t, f, g, w[f], a), f = "checked", null != b && b != t[f] && M(t, f, b, w[f], a))
                }
                return t
            }

            function U(t, e, n) {
                try {
                    if ("function" == typeof t) {
                        var r = "function" == typeof t.__u;
                        r && t.__u(), r && null == e || (t.__u = t(e))
                    } else t.current = e
                } catch (t) {
                    i.__e(t, n)
                }
            }

            function H(t, e, n) {
                var r, o;
                if (i.unmount && i.unmount(t), (r = t.ref) && (r.current && r.current != t.__e || U(r, null, e)), null != (r = t.__c)) {
                    if (r.componentWillUnmount) try {
                        r.componentWillUnmount()
                    } catch (t) {
                        i.__e(t, e)
                    }
                    r.base = r.__P = null
                }
                if (r = t.__k)
                    for (o = 0; o < r.length; o++) r[o] && H(r[o], e, n || "function" != typeof t.type);
                n || y(t.__e), t.__c = t.__ = t.__e = void 0
            }

            function V(t, e, n) {
                return this.constructor(t, n)
            }

            function F(t, e, n) {
                var o, a, c, l;
                e == document && (e = document.documentElement), i.__ && i.__(t, e), a = (o = "function" == typeof n) ? null : n && n.__k || e.__k, c = [], l = [], D(e, t = (!o && n || e).__k = b(T, null, [t]), a || h, h, e.namespaceURI, !o && n ? [n] : a ? null : e.firstChild ? r.call(e.childNodes) : null, c, !o && n ? n : a ? a.__e : e.firstChild, o, l), I(c, t, l)
            }
            r = v.slice, i = {
                __e: function(t, e, n, r) {
                    for (var i, o, a; e = e.__;)
                        if ((i = e.__c) && !i.__) try {
                            if ((o = i.constructor) && null != o.getDerivedStateFromError && (i.setState(o.getDerivedStateFromError(t)), a = i.__d), null != i.componentDidCatch && (i.componentDidCatch(t, r || {}), a = i.__d), a) return i.__E = i
                        } catch (e) {
                            t = e
                        }
                    throw t
                }
            }, o = 0, E.prototype.setState = function(t, e) {
                var n;
                n = null != this.__s && this.__s != this.state ? this.__s : this.__s = g({}, this.state), "function" == typeof t && (t = t(g({}, n), this.props)), t && g(n, t), null != t && this.__v && (e && this._sb.push(e), W(this))
            }, E.prototype.forceUpdate = function(t) {
                this.__v && (this.__e = !0, t && this.__h.push(t), W(this))
            }, E.prototype.render = T, a = [], l = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, u = function(t, e) {
                return t.__v.__b - e.__v.__b
            }, P.__r = 0, s = /(PointerCapture)$|Capture$/i, f = 0, p = C(!1), d = C(!0)
        },
        3: (t, e, n) => {
            n.d(e, {
                elemBind: () => s,
                elemRemove: () => u,
                elemUnbind: () => f
            });
            var r, i = n(4),
                o = (n(6), n(8), n(9)),
                a = (n(12), n(19), n(20), n(26)),
                c = n(16),
                l = (c.Wistia, (0, o.cachedDetect)()),
                u = function(t) {
                    var e;
                    if ((0, i.isArray)(t) || window.NodeList && t instanceof NodeList)
                        for (var n = 0; n < t.length; n++) u(t[n]);
                    else null == t || 1 !== t.nodeType && 3 !== t.nodeType || !(e = t.parentNode) || (e.removeChild(t), t = null)
                },
                s = function(t, e, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        i = function(r) {
                            (r = r || window.event).pageX || r.pageY || !r.clientX && !r.clientY || (r.pageX = r.clientX + h(), r.pageY = r.clientY + d()), r.preventDefault || (r.preventDefault = function() {
                                r.returnValue = !1
                            }), r.stopPropagation || (r.stopPropagation = function() {
                                r.cancelBubble = !0
                            }), null == r.which && (r.which = null != r.charCode ? r.charCode : r.keyCode), null == r.which && null != r.button && (1 & r.button ? r.which = 1 : 2 & r.button ? r.which = 3 : 4 & r.button ? r.which = 2 : r.which = 0), r.target || r.srcElement && (r.target = r.srcElement), r.target && 3 === r.target.nodeType && (r.target = r.target.parentNode);
                            for (var i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++) o[a - 1] = arguments[a];
                            var c = n.apply(r.target, [r].concat(o));
                            return c === f && f(t, e, n), c
                        };
                    c.Wistia._elemBind = c.Wistia._elemBind || {};
                    var o = p(t, e, n);
                    return c.Wistia._elemBind[o] = i, i.elem = t, i.event = e, t.addEventListener(e, i, r),
                        function() {
                            f(t, e, n, r)
                        }
                },
                f = function(t, e, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    if (null != t && null != t._wistiaElemId && null != n && n._wistiaBindId) {
                        var i = p(t, e, n),
                            o = c.Wistia._elemBind[i];
                        return o && (t.removeEventListener(e, o, r), o.elem = null, o.event = null), delete c.Wistia._elemBind[i]
                    }
                },
                p = function(t, e, n) {
                    return t._wistiaElemId = t._wistiaElemId || (0, a.seqId)("wistia_elem_"), n._wistiaBindId = n._wistiaBindId || (0, a.seqId)("wistia_bind_"), "".concat(t._wistiaElemId, ".").concat(e, ".").concat(n._wistiaBindId)
                },
                d = function(t) {
                    var e = document.body,
                        n = document.documentElement;
                    if (null == t) return n && n.scrollTop || e && e.scrollTop || 0;
                    e && (e.scrollTop = t), n && (n.scrollTop = t)
                },
                h = function(t) {
                    var e = document.body,
                        n = document.documentElement;
                    if (null == t) return n && n.scrollLeft || e && e.scrollLeft || 0;
                    e && (e.scrollLeft = t), n && (n.scrollLeft = t)
                };
            ["auxclick", "click", "contextmenu", "dblclick", "focus", "keydown", "keypress", "keyup", "mousedown", "mouseup", "reset", "submit", "touchend", "touchstart"].forEach((function(t) {
                s(document, t, (function(t) {
                    r = t, Date.now(), setTimeout((function() {
                        r === t && (r = void 0)
                    }), 0)
                }), !l.passiveSupported || {
                    capture: !0,
                    passive: !0
                })
            }))
        },
        4: (t, e, n) => {
            n.d(e, {
                cast: () => v,
                clone: () => u,
                eachLeaf: () => P,
                getDeep: () => s,
                isArray: () => y,
                isEmpty: () => O,
                isObject: () => w,
                merge: () => o,
                setAndPreserveUndefined: () => p,
                setDeep: () => f,
                unsetDeep: () => h
            });
            n(5);
            var r = function(t, e) {
                    if (null == t) throw new TypeError("Cannot convert undefined or null to object");
                    return Object.prototype.hasOwnProperty.call(Object(t), e)
                },
                i = Array.prototype.slice,
                o = function(t) {
                    if (0 == (arguments.length <= 1 ? 0 : arguments.length - 1)) return t;
                    for (var e = 0; e < (arguments.length <= 1 ? 0 : arguments.length - 1); e++) a(t, e + 1 < 1 || arguments.length <= e + 1 ? void 0 : arguments[e + 1]);
                    return t
                },
                a = function(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c,
                        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : l;
                    if (y(e)) {
                        y(t) || (t = []);
                        for (var o = 0; o < e.length; o++) {
                            var u = e[o];
                            null == t[o] && null != u && (y(u) ? t[o] = [] : w(u) && (t[o] = {}));
                            var s = a(t[o], u, n);
                            i(e, o, s) ? delete t[o] : t[o] = s
                        }
                        return n(t)
                    }
                    if (w(e)) {
                        for (var f in e)
                            if (r(e, f) && (r(t, f) || null == t[f])) {
                                var p = e[f];
                                y(p) ? (y(t[f]) || (t[f] = []), a(t[f], p, n), t[f] = n(t[f])) : w(p) ? (w(t[f]) || (t[f] = {}), a(t[f], p, n), t[f] = n(t[f])) : null == t ? (t = {}, i(e, f, p) || (t[f] = n(p))) : i(e, f, p) ? delete t[f] : t[f] = n(p)
                            }
                        return n(t)
                    }
                    return n(e)
                },
                c = function(t) {
                    return t
                },
                l = function(t, e, n) {
                    return null == n
                },
                u = function(t, e) {
                    return y(t) ? a([], t, e) : a({}, t, e)
                },
                s = function(t, e, n) {
                    e = "string" == typeof e ? e.split(".") : i.call(e);
                    for (var o, a = t; null != t && e.length;) {
                        var c = e.shift();
                        void 0 !== t[c] && (w(t[c]) || y(t[c])) || !n || (0 === c ? (t = a[o] = [])[c] = {} : t[c] = {}), a = t, o = c, t = r(t, c) ? t[c] : void 0
                    }
                    return t
                },
                f = function(t, e, n) {
                    return d(t, e, n, !0)
                },
                p = function(t, e, n) {
                    return d(t, e, n, !1)
                },
                d = function(t, e, n) {
                    var r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                        o = (e = "string" == typeof e ? e.split(".") : i.call(e)).pop();
                    null != (t = s(t, e, !0)) && (w(t) || y(t)) && null != o && (r && null == n ? delete t[o] : t[o] = n)
                },
                h = function(t, e) {
                    return f(t, e)
                },
                v = function(t) {
                    return null == t ? t : w(t) || y(t) ? m(t) : _("".concat(t), t)
                },
                _ = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t;
                    return /^-?[1-9]\d*?$/.test(t) ? parseInt(t, 10) : "0" === t || "-0" === t ? 0 : /^-?\d*\.\d+$/.test(t) ? parseFloat(t) : !!/^true$/i.test(t) || !/^false$/i.test(t) && e
                },
                m = function(t) {
                    return a(t, t, (function(t) {
                        return "string" == typeof t ? _(t) : t
                    }), (function() {
                        return !1
                    }))
                },
                g = /^\s*function Array()/,
                y = function(t) {
                    return null != t && t.push && g.test(t.constructor)
                },
                b = /^\s*function Object()/,
                w = function(t) {
                    return null != t && "object" == typeof t && b.test(t.constructor)
                },
                T = /^\s*function RegExp()/,
                E = /^string|number|boolean|function$/i,
                S = function(t) {
                    return null != t && (E.test(typeof t) || function(t) {
                        return null != t && T.test(t.constructor)
                    }(t))
                },
                O = function(t) {
                    return null == t || (!(!y(t) || t.length) || !!w(t) && !Object.keys(t).length)
                },
                W = function(t, e, n, o, a) {
                    if (null == n && (n = []), S(t)) e(t, n, o, a);
                    else if (w(t) || y(t)) {
                        for (var c in e(t, n, o, a), t)
                            if (r(t, c)) {
                                var l = i.call(n);
                                l.push(c), W(t[c], e, l, t, c)
                            }
                    } else e(t, n, o, a)
                },
                P = function(t, e) {
                    W(t, (function(t, n, r, i) {
                        y(t) || w(t) || e(t, n, r, i)
                    }))
                }
        },
        5: (t, e, n) => {
            n.d(e, {
                assign: () => i
            });
            var r = function(t, e) {
                    if (null == t) throw new TypeError("Cannot convert undefined or null to object");
                    return Object.prototype.hasOwnProperty.call(Object(t), e)
                },
                i = function(t) {
                    for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                    if (Object.assign) return Object.assign.apply(Object, [t].concat(n));
                    for (var i = 0; i < n.length; i++) o(t, n[i]);
                    return t
                },
                o = function(t, e) {
                    for (var n in e) r(e, n) && (t[n] = e[n]);
                    return t
                }
        },
        6: (t, e, n) => {
            n(7)
        },
        7: (t, e, n) => {
            n.d(e, {
                poll: () => r
            });
            var r = function(t, e, n, r, i) {
                var o = null,
                    a = (new Date).getTime(),
                    c = function() {
                        (new Date).getTime() - a > r ? "function" == typeof i && i() : t() ? e() : (clearTimeout(o), o = setTimeout(c, n))
                    };
                o = setTimeout(c, 1)
            }
        },
        8: (t, e, n) => {
            n.d(e, {
                pageLoaded: () => r
            });
            var r = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4e3,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document,
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : window;
                if (/loaded|complete/.test(n.readyState)) setTimeout(t, 0);
                else {
                    var i = function() {
                            r.removeEventListener("load", o, !1)
                        },
                        o = function() {
                            clearTimeout(a), i(), t()
                        };
                    r.addEventListener("load", o, !1);
                    var a = setTimeout((function() {
                        i(), t()
                    }), e)
                }
            }
        },
        9: (t, e, n) => {
            n.d(e, {
                cachedDetect: () => R
            });
            var r, i = n(10),
                o = n(11),
                a = navigator.userAgent,
                c = null,
                l = /(webkit)[ /]([^\s]+)/i,
                u = /OPR\/([^\s]+)/i,
                s = /(edge)\/(\d+(?:\.\d+)?)/i,
                f = /(mozilla)(?:.*? rv:([^\s)]+))?/i,
                p = /(android) ([^;]+)/i,
                d = /(iphone)/i,
                h = /(Windows Phone OS (\d+(?:\.\d+)?))/,
                v = /OS (\d+)_(\d+)/i,
                _ = /(firefox)/i,
                m = /Mobile VR/i,
                g = /Version\/([^\s]+)/i,
                y = function() {
                    return (w()[1] || "webkit").toLowerCase()
                },
                b = function() {
                    return w()[2]
                },
                w = function() {
                    var t;
                    return (t = a.match(s)) || (t = a.match(l)) || (t = a.match(u)) ? t : t ? (null != document.documentMode && (t[2] = document.documentMode), t) : (t = a.match(f)) || []
                },
                T = function() {
                    var t = a.match(p);
                    return null != t && {
                        version: t[2]
                    }
                },
                E = function() {
                    return d.test(a)
                },
                S = function() {
                    return L() > 0 || T() || W()
                },
                O = function() {
                    try {
                        var t = matchMedia("(hover:hover)");
                        if ("not all" !== t.media) return t.matches
                    } catch (t) {}
                    return !S()
                },
                W = function() {
                    return /Macintosh/i.test(navigator.userAgent) && navigator.maxTouchPoints && navigator.maxTouchPoints > 1
                },
                P = function() {
                    return l.test(a) && !/chrome/i.test(a) && !W() && !E()
                },
                k = function() {
                    return !(!/Chrome/.test(a) || !/Google Inc/.test(navigator.vendor)) && {
                        version: j()
                    }
                },
                j = function() {
                    var t = a.match(/\bChrome\/([^\s]+)/);
                    return t && t[1]
                },
                L = function() {
                    var t = a.match(v),
                        e = a.match(g);
                    return null != t ? parseFloat("".concat(t[1], ".").concat(t[2])) : null != e && e[1] && W() ? parseFloat(e[1]) : 0
                },
                A = function() {
                    return s.test(a)
                },
                x = function() {
                    return _.test(a)
                },
                M = function() {
                    var t = document.createElement("video"),
                        e = !1;
                    try {
                        if (t.canPlayType) {
                            var n = 'video/mp4; codecs="avc1.42E01E';
                            (e = {}).h264 = !!t.canPlayType("".concat(n, '"')) || !!t.canPlayType("".concat(n, ', mp4a.40.2"')), e.webm = !!t.canPlayType('video/webm; codecs="vp9, vorbis"'), e.nativeHls = !!t.canPlayType("application/vnd.apple.mpegURL")
                        }
                    } catch (t) {
                        e = {
                            ogg: !1,
                            h264: !1,
                            webm: !1,
                            nativeHls: !1
                        }
                    }
                    return e
                },
                C = function() {
                    try {
                        return "localStorage" in i.root && null != i.root.localStorage
                    } catch (t) {
                        return !1
                    }
                },
                D = ["WebKit", "Moz", "O", "Ms", ""],
                B = function() {
                    for (var t = 0; t < D.length; t++) {
                        var e = "".concat(D[t], "MutationObserver");
                        if (i.root[e]) return e
                    }
                    return null
                },
                I = function() {
                    if (null != r) return r;
                    try {
                        var t = Object.defineProperty({}, "passive", {
                            get: function() {
                                r = !0
                            }
                        });
                        window.addEventListener("test", null, t)
                    } catch (t) {
                        r = !1
                    }
                    return r
                },
                N = function() {
                    var t = k(),
                        e = x(),
                        n = A(),
                        r = u.test(a),
                        i = t && b() >= 32,
                        o = t && b() >= 75 && T(),
                        c = e && b() >= 65,
                        l = e && b() >= 67 && T(),
                        s = n && b() >= 18,
                        f = r && b() >= 19;
                    return i || o || c || l || s || f
                },
                R = function() {
                    return c || (c = U())
                },
                U = function() {
                    var t, e, n, r, c, l, u, s, f, p, d, v, _, g = {
                        browser: {
                            version: b()
                        },
                        edge: A(),
                        firefox: x(),
                        gearvr: m.test(a),
                        hdr: !(null === (v = (_ = window).matchMedia) || void 0 === v || !v.call(_, "(dynamic-range: high)").matches) || !!(screen.colorDepth && screen.colorDepth >= 30),
                        hdrCodecs: {
                            hevc: null !== (n = null === (r = window.MediaSource) || void 0 === r || null === (c = r.isTypeSupported) || void 0 === c ? void 0 : c.call(r, 'video/mp4; codecs="hvc1.2.4.L153.B0"')) && void 0 !== n && n,
                            av1: null !== (l = null === (u = window.MediaSource) || void 0 === u || null === (s = u.isTypeSupported) || void 0 === s ? void 0 : s.call(u, 'video/mp4; codecs="av01.0.08M.10.0.110.09.16.09"')) && void 0 !== l && l,
                            vp92: null !== (f = null === (p = window.MediaSource) || void 0 === p || null === (d = p.isTypeSupported) || void 0 === d ? void 0 : d.call(p, 'video/mp4; codecs="vp09.02.10.10.01.09.16.09"')) && void 0 !== f && f
                        },
                        android: T(),
                        oldandroid: T() && parseFloat(T().version) < 4.1,
                        iphone: E(),
                        ipad: W(),
                        safari: P(),
                        chrome: k(),
                        winphone: {
                            version: h.test(a)[2]
                        },
                        ios: {
                            version: L()
                        },
                        windows: /win/i.test(navigator.platform),
                        mac: /mac/i.test(navigator.platform),
                        retina: null != i.root.devicePixelRatio && i.root.devicePixelRatio > 1,
                        hoverIsNatural: O(),
                        touchScreen: S(),
                        video: M(),
                        managedMediaSource: "ManagedMediaSource" in window && "function" == typeof(null === (e = window.ManagedMediaSource) || void 0 === e ? void 0 : e.isTypeSupported),
                        mediaSource: i.root.MediaSource && i.root.MediaSource.isTypeSupported("".concat('video/mp4; codecs="avc1.42E01E', ', mp4a.40.2"')),
                        nativeHls: (E() || W() || P()) && M().nativeHls,
                        localstorage: C(),
                        fullscreenEnabled: document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled || document.msFullscreenEnabled,
                        vulcanV2Support: (t = /webkit|mozilla|edge/.test(y()), !!(E() || W() || T()) || Boolean(t && M().h264 && Object.defineProperties)),
                        mutationObserver: B(),
                        callingPlayRequiresEventContext: L() > 0 || T() || P(),
                        passiveSupported: I(),
                        webp: N(),
                        performanceMeasure: (0, o.hasPerformanceMeasureSupport)()
                    };
                    return g.browser[y()] = !0, g
                }
        },
        10: (t, e, n) => {
            var r;
            n.d(e, {
                root: () => i
            });
            try {
                (r = self).self !== r && void 0 !== r.self && "undefined" != typeof window && (r = window)
            } catch (t) {
                r = "undefined" != typeof globalThis ? globalThis : window
            }
            var i = r
        },
        11: (t, e, n) => {
            n.d(e, {
                hasPerformanceMeasureSupport: () => r
            });
            var r = function() {
                var t = window.performance;
                return Boolean(t) && Boolean(t.measure)
            }
        },
        12: (t, e, n) => {
            n.d(e, {
                wlog: () => _
            });
            var r = n(13),
                i = n(16);

            function o(t) {
                return function(t) {
                    if (Array.isArray(t)) return a(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return a(t, e);
                        var n = {}.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(t, e) : void 0
                    }
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function a(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            var c = {
                    ERROR: 0,
                    WARNING: 1,
                    NOTICE: 2,
                    INFO: 3,
                    DEBUG: 4,
                    error: 0,
                    warning: 1,
                    notice: 2,
                    info: 3,
                    debug: 4
                },
                l = function() {},
                u = function(t) {
                    var e = this;
                    null == t && (t = {});
                    return e.error = function() {
                        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return e.log(0, n)
                    }, e.warn = function() {
                        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return e.log(1, n)
                    }, e.notice = function() {
                        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return e.log(1, n)
                    }, e.info = function() {
                        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return e.log(3, n)
                    }, e.debug = function() {
                        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return e.log(4, n)
                    }, e.ctx = t, e.ctx.initializedAt || e.reset(), e
                },
                s = u.prototype;
            s.reset = function() {
                this.ctx.level = 0, this.ctx.grep = null, this.ctx.grepv = null, this.ctx.first1000LogLines = [], this.ctx.last1000LogLines = [], this.ctx.initializedAt = (new Date).getTime()
            }, s.setLevel = function(t) {
                var e = this.logFunc(3);
                null != c[t] ? (this.ctx.level = c[t], e('Log level set to "'.concat(t, '" (').concat(c[t], ")"))) : e('Unknown log level "'.concat(t, '"'))
            }, s.setGrep = function(t) {
                this.ctx.grep = t
            }, s.setGrepv = function(t) {
                this.ctx.grepv = t
            }, s.first1000LogLines = function() {
                return this.ctx.first1000LogLines
            }, s.last1000LogLines = function() {
                return this.ctx.last1000LogLines
            }, s.matchedGrep = function(t) {
                var e = !1;
                if (this.ctx.grep || this.ctx.grepv) {
                    for (var n = [], r = 0; r < t.length; r++) try {
                        var i = t[r];
                        n.push(i.toString && i.toString())
                    } catch (t) {
                        n.push("")
                    }
                    var o = n.join(" "),
                        a = !this.ctx.grep || o.match(this.ctx.grep),
                        c = !this.ctx.grepv || !o.match(this.ctx.grepv);
                    e = a && c
                } else e = !0;
                return e
            }, s.now = function() {
                return "undefined" != typeof performance && "function" == typeof performance.now ? performance.now().toFixed(3) : Date.now ? Date.now() - this.ctx.initializedAt : (new Date).getTime() - this.ctx.initializedAt
            }, s.messagesToLogLine = function(t, e, n) {
                var r, i = [t, e];
                i = i.concat(n);
                try {
                    (r = i.join(" ") || "").length > 200 && (r = r.slice(0, 200))
                } catch (t) {
                    r = "could not serialize"
                }
                return r
            }, s.persistLine = function(t) {
                this.ctx.first1000LogLines.length < 1e3 ? this.ctx.first1000LogLines.push(t) : (this.ctx.last1000LogLines.length >= 1e3 && this.ctx.last1000LogLines.shift(), this.ctx.last1000LogLines.push(t))
            }, s.log = function(t, e) {
                var n, i = t <= this.ctx.level,
                    a = t < 4,
                    c = (i || a) && this.matchedGrep(e);
                if (0 === t && (0, r.globalTrigger)("problem", {
                        type: "error-logged",
                        data: {
                            messages: e
                        }
                    }), c && (i || a) && (n = this.now()), a && c) {
                    var l = this.messagesToLogLine(t, n, e);
                    this.persistLine(l)
                }
                if (i && c) {
                    var u, s = this.logFunc(t);
                    1 === e.length && (u = e[0]) instanceof Error ? (s(u.message), u.stack && s(u.stack)) : s.apply(void 0, o(e))
                }
            };
            var f = function() {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    console.error.apply(console, e)
                },
                p = function() {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    console.warn.apply(console, e)
                },
                d = function() {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    console.info.apply(console, e)
                },
                h = function() {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    console.debug.apply(console, e)
                },
                v = function(t) {
                    console.log.apply(console, t)
                };
            s.logFunc = function(t) {
                return null == t && (t = this.level), console ? (0 === t ? e = f : 1 === t ? e = p : 3 === t ? e = d : 4 === t && (e = h), e || (e = v), "function" != typeof e && (this.noConsoleLog = !0, e = l), e) : l;
                var e
            }, s.maybePrefix = function(t, e) {
                if (t) {
                    if ("function" == typeof t) try {
                        t = t()
                    } catch (e) {
                        t = 'prefix err "'.concat(e.message, '"')
                    }
                    return t instanceof Array ? t.concat(e) : [t].concat(e)
                }
                return e
            }, s.getPrefixedFunctions = function(t) {
                var e = this;
                return {
                    log: function() {
                        for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return e.log(0, e.maybePrefix(t, r))
                    },
                    error: function() {
                        for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return e.log(0, e.maybePrefix(t, r))
                    },
                    warn: function() {
                        for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return e.log(1, e.maybePrefix(t, r))
                    },
                    notice: function() {
                        for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return e.log(1, e.maybePrefix(t, r))
                    },
                    info: function() {
                        for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return e.log(3, e.maybePrefix(t, r))
                    },
                    debug: function() {
                        for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return e.log(4, e.maybePrefix(t, r))
                    }
                }
            }, i.Wistia && null == i.Wistia.wlogCtx && (i.Wistia.wlogCtx = {});
            var _ = new u(i.Wistia.wlogCtx)
        },
        13: (t, e, n) => {
            n.d(e, {
                globalTrigger: () => o
            });
            var r = n(14),
                i = n(16);
            (0, r.makeWbindable)(i.Wistia);
            i.Wistia.bind.bind(i.Wistia), i.Wistia.on.bind(i.Wistia), i.Wistia.off.bind(i.Wistia), i.Wistia.rebind.bind(i.Wistia);
            var o = i.Wistia.trigger.bind(i.Wistia);
            i.Wistia.unbind.bind(i.Wistia)
        },
        14: (t, e, n) => {
            n.d(e, {
                makeWbindable: () => a
            });
            var r = n(15),
                i = n(16),
                o = n(17);
            i.Wistia.bindable || (i.Wistia.EventShepherdManager || (i.Wistia.EventShepherdManager = {}), i.Wistia.bindable = {
                bind: function(t, e) {
                    if ("crosstime" === t && this.crossTime) return this.crossTime.addBinding(arguments[1], arguments[2]), this;
                    if ("betweentimes" === t && this.betweenTimes) return this.betweenTimes.addBinding(arguments[1], arguments[2], arguments[3]), this;
                    var n = this.embedElement || this.container;
                    if (Object.keys(o.convertedEventNames).includes(t) && n) {
                        var a = c(n);
                        return void 0 === i.Wistia.EventShepherdManager[a] && (i.Wistia.EventShepherdManager[a] = new o.EventShepherd), i.Wistia.EventShepherdManager[a].addListener(t, n, e), this
                    }
                    if (e) return r.bind.call(this, t, e), this;
                    i.Wistia.warn && i.Wistia.warn(this.constructor.name, "bind", "falsey value passed in as callback:", e)
                },
                unbind: function(t, e) {
                    if ("crosstime" === t && this.crossTime) return e ? this.crossTime.removeBinding(arguments[1], arguments[2]) : this.crossTime.removeAllBindings(), this;
                    if ("betweentimes" === t && this.betweenTimes) return e ? this.betweenTimes.removeBinding(arguments[1], arguments[2], arguments[3]) : this.betweenTimes.removeAllBindings(), this;
                    var n = this.embedElement || this.container;
                    if (Object.keys(o.convertedEventNames).includes(t) && n) {
                        var a = c(n);
                        return void 0 === i.Wistia.EventShepherdManager[a] || i.Wistia.EventShepherdManager[a].removeListener(t, n, e), this
                    }
                    return e ? r.unbind.call(this, t, e) : this._bindings && (this._bindings[t] = []), this._bindings && this._bindings[t] && !this._bindings[t].length && (this._bindings[t] = null, delete this._bindings[t]), this
                },
                on: function(t, e) {
                    var n = arguments,
                        a = this;
                    if ("crosstime" === t && this.crossTime) return this.crossTime.addBinding(arguments[1], arguments[2]),
                        function() {
                            a.crossTime.removeBinding(n[1], n[2])
                        };
                    if ("betweentimes" === t && this.betweenTimes) return this.betweenTimes.addBinding(arguments[1], arguments[2], arguments[3]),
                        function() {
                            a.betweenTimes.removeBinding(n[1], n[2], n[3])
                        };
                    var l = this.embedElement || this.container;
                    if (Object.keys(o.convertedEventNames).includes(t) && l) {
                        var u = c(l);
                        return void 0 === i.Wistia.EventShepherdManager[u] && (i.Wistia.EventShepherdManager[u] = new o.EventShepherd(l)), i.Wistia.EventShepherdManager[u].addListener(t, l, e),
                            function() {
                                i.Wistia.EventShepherdManager[u].removeListener(t, l, e)
                            }
                    }
                    return r.bind.call(this, t, e)
                },
                off: function(t, e) {
                    if ("crosstime" === t && this.crossTime) return this.crossTime.removeBinding(arguments[1], arguments[2]);
                    if ("betweentimes" === t && this.betweenTimes) return this.betweenTimes.removeBinding(arguments[1], arguments[2], arguments[3]);
                    var n = this.embedElement || this.container;
                    if (Object.keys(o.convertedEventNames).includes(t) && n) {
                        var a = c(n);
                        return void 0 === i.Wistia.EventShepherdManager[a] ? function() {} : i.Wistia.EventShepherdManager[a].removeListener(t, n, e)
                    }
                    return r.unbind.call(this, t, e)
                },
                rebind: function(t, e) {
                    return this.unbind(t, e), this.bind(t, e), this
                },
                trigger: function(t) {
                    for (var e, n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) i[o - 1] = arguments[o];
                    return (e = r.trigger).call.apply(e, [this, t].concat(i)), this
                },
                bindNamed: function() {
                    return r.bindNamed.apply(this, arguments)
                },
                unbindNamed: function() {
                    return r.unbindNamed.apply(this, arguments)
                },
                unbindAllInNamespace: function() {
                    return r.unbindAllInNamespace.apply(this, arguments)
                }
            });
            var a = function(t) {
                    for (var e in i.Wistia.bindable) {
                        var n = i.Wistia.bindable[e];
                        t[e] || (t[e] = n)
                    }
                },
                c = function(t) {
                    return null != t && t.mediaId ? t.mediaId : null != t && t.id ? t.id : void 0
                }
        },
        15: (t, e, n) => {
            n.d(e, {
                bind: () => u,
                bindNamed: () => v,
                trigger: () => p,
                unbind: () => s,
                unbindAllInNamespace: () => m,
                unbindNamed: () => _
            });
            var r = n(16),
                i = function(t, e) {
                    if (null == t) throw new TypeError("Cannot convert undefined or null to object");
                    return Object.prototype.hasOwnProperty.call(Object(t), e)
                };

            function o(t) {
                return function(t) {
                    if (Array.isArray(t)) return a(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return a(t, e);
                        var n = {}.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(t, e) : void 0
                    }
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function a(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            var c, l = Array.prototype.slice,
                u = function(t, e) {
                    var n = this;
                    return n._bindings || (n._bindings = {}), n._bindings[t] || (n._bindings[t] = []), n._bindings[t].push(e),
                        function() {
                            n.unbind(t, e)
                        }
                },
                s = function(t, e) {
                    if (!this._bindings) return this;
                    if (!this._bindings[t]) return this;
                    for (var n = [], r = 0; r < this._bindings[t].length; r++) {
                        var i = this._bindings[t][r];
                        i !== e && n.push(i)
                    }
                    this._bindings[t] = n
                },
                f = function(t, e) {
                    return this.unbind(t, e), this.bind(t, e), {
                        event: t,
                        fn: e
                    }
                },
                p = function(t) {
                    for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                    return this._bindings && null != this._bindings.all && d.apply(this, ["all", t].concat(n)), d.apply(this, [t].concat(n))
                },
                d = function(t) {
                    if (!this._bindings) return this;
                    if (!this._bindings[t]) return this;
                    for (var e, n = l.call(arguments, 1), i = o(this._bindings[t]), a = 0; a < i.length; a++) {
                        var c = i[a];
                        try {
                            c.apply(this, n) === this.unbind && (null == e && (e = []), e.push({
                                event: t,
                                fn: c
                            }))
                        } catch (t) {
                            if (this._throwTriggerErrors) throw t;
                            r.Wistia.error && r.Wistia.error(t)
                        }
                    }
                    if (e)
                        for (var u = 0; u < e.length; u++) {
                            var s = e[u];
                            this.unbind(s.event, s.fn)
                        }
                    return this
                },
                h = function(t, e) {
                    null == t._namedBindings && (t._namedBindings = {}), null == t._namedBindings[e] && (t._namedBindings[e] = {})
                },
                v = function(t, e, n, r) {
                    return this.unbindNamed(t, e),
                        function(t, e, n, r, i) {
                            h(t, e), t._namedBindings[e][n] = {
                                event: r,
                                fn: i
                            }
                        }(this, t, e, n, r), this.bind(n, r),
                        function() {
                            this.unbindNamed(t, e)
                        }
                },
                _ = function(t, e) {
                    h(this, t);
                    var n = function(t, e, n) {
                        return h(t, e), t._namedBindings[e][n]
                    }(this, t, e);
                    if (n) {
                        var r = n.event,
                            i = n.fn;
                        this.unbind(r, i)
                    }
                    var o = this._namedBindings;
                    return delete o[t][e], g(o[t]) && delete o[t], this
                },
                m = function(t) {
                    var e = this._namedBindings && this._namedBindings[t];
                    if (null == e) return this;
                    for (var n in e) i(e, n) && this.unbindNamed(t, n)
                },
                g = function(t) {
                    for (var e in t)
                        if (i(t, e)) return !1;
                    return !0
                };
            (c = function() {}.prototype).bind = u, c.unbind = s, c.on = u, c.off = s, c.rebind = f, c.trigger = p, c.bindNamed = v, c.unbindNamed = _, c.unbindAllInNamespace = m
        },
        16: (t, e, n) => {
            n.d(e, {
                Wistia: () => R
            });
            var r, i, o, a, c, l, u, s, f, p, d, h, v, _, m, g, y, b, w, T, E, S, O, W, P, k, j, L, A, x, M, C, D, B, I, N = n(10);
            null !== (r = N.root.Wistia) && void 0 !== r || (N.root.Wistia = {}), null !== (o = (i = N.root.Wistia)._destructors) && void 0 !== o || (i._destructors = {}), null !== (c = (a = N.root.Wistia)._initializers) && void 0 !== c || (a._initializers = {}), null !== (u = (l = N.root.Wistia)._remoteData) && void 0 !== u || (l._remoteData = new Map), null !== (f = (s = N.root.Wistia).api) && void 0 !== f || (s.api = function() {
                return console.error("Accessed Wistia.api() before it was initialized"), null
            }), null !== (d = (p = N.root.Wistia).defineControl) && void 0 !== d || (p.defineControl = function() {
                return console.error("Accessed Wistia.defineControl() before it was initialized"), null
            }), null !== (v = (h = N.root.Wistia).EventShepherdManager) && void 0 !== v || (h.EventShepherdManager = {}), null !== (m = (_ = N.root.Wistia).mixin) && void 0 !== m || (_.mixin = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                Object.keys(e).forEach((function(n) {
                    (function(t, e) {
                        if (null == t) throw new TypeError("Cannot convert undefined or null to object");
                        return Object.prototype.hasOwnProperty.call(Object(t), e)
                    })(e, n) && (t[n] = e[n])
                }))
            }), null !== (y = (g = N.root.Wistia).playlistMethods) && void 0 !== y || (g.playlistMethods = new Map), null !== (w = (b = N.root.Wistia).PublicApi) && void 0 !== w || (b.PublicApi = null), null !== (E = (T = N.root.Wistia).uncacheMedia) && void 0 !== E || (T.uncacheMedia = function() {
                return console.error("Accessed Wistia.uncacheMedia() before it was initialized"), null
            }), null !== (O = (S = N.root.Wistia).VisitorKey) && void 0 !== O || (S.VisitorKey = null), null !== (P = (W = N.root.Wistia).visitorKey) && void 0 !== P || (W.visitorKey = null), null !== (j = (k = N.root.Wistia).wistia) && void 0 !== j || (k.wistia = void 0), null !== (A = (L = N.root.Wistia)._liveStreamEventDataPromises) && void 0 !== A || (L._liveStreamEventDataPromises = {}), null !== (M = (x = N.root.Wistia)._mediaDataPromises) && void 0 !== M || (x._mediaDataPromises = {}), null !== (D = (C = N.root.Wistia)._liveStreamPollingPromises) && void 0 !== D || (C._liveStreamPollingPromises = {}), null !== (I = (B = N.root.Wistia).first) && void 0 !== I || (B.first = function() {
                var t;
                return null !== (t = N.root.Wistia.api()) && void 0 !== t ? t : document.querySelector("wistia-player")
            });
            var R = N.root.Wistia
        },
        17: (t, e, n) => {
            function r(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, i(r.key), r)
                }
            }

            function i(t) {
                var e = function(t, e) {
                    if ("object" != typeof t || !t) return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != typeof r) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == typeof e ? e : e + ""
            }
            n.d(e, {
                EventShepherd: () => c,
                convertedEventNames: () => o
            });
            var o = {
                    mutechange: n(18).MUTE_CHANGE_EVENT
                },
                a = {
                    mutechange: function(t) {
                        return t.isMuted
                    }
                },
                c = function() {
                    return t = function t() {
                        var e, n, r;
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), e = this, r = {}, (n = i(n = "convertedEventsMap")) in e ? Object.defineProperty(e, n, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[n] = r
                    }, (e = [{
                        key: "addListener",
                        value: function(t, e, n) {
                            var r, i, c, l = null !== (r = o[t]) && void 0 !== r ? r : t;
                            null !== (c = (i = this.convertedEventsMap)[l]) && void 0 !== c || (i[l] = []);
                            var u = function(e) {
                                if (a[t]) {
                                    var r = a[t](e.detail);
                                    n(r)
                                } else n()
                            };
                            this.convertedEventsMap[l].push({
                                givenCallback: n,
                                eventListenerCallback: u
                            }), e.addEventListener(l, u)
                        }
                    }, {
                        key: "removeAllListeners",
                        value: function(t) {
                            var e = this;
                            Object.keys(this.convertedEventsMap).forEach((function(n) {
                                var r;
                                null === (r = e.convertedEventsMap[n]) || void 0 === r || r.forEach((function(e) {
                                    t.removeEventListener(n, e.eventListenerCallback)
                                })), e.convertedEventsMap[n] = []
                            }))
                        }
                    }, {
                        key: "removeListener",
                        value: function(t, e, n) {
                            var r, i = this,
                                a = null !== (r = o[t]) && void 0 !== r ? r : t,
                                c = [];
                            n ? (e.removeEventListener(a, n), this.convertedEventsMap[a] && (this.convertedEventsMap[a].forEach((function(t, r) {
                                t.givenCallback === n && (c.push(r), e.removeEventListener(a, t.eventListenerCallback))
                            })), c.forEach((function(t) {
                                i.convertedEventsMap[a] && i.convertedEventsMap[a].splice(t, 1)
                            })))) : this.convertedEventsMap[a] = []
                        }
                    }]) && r(t.prototype, e), n && r(t, n), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), t;
                    var t, e, n
                }()
        },
        18: (t, e, n) => {
            n.d(e, {
                MUTE_CHANGE_EVENT: () => r
            });
            var r = "mute-change"
        },
        19: (t, e, n) => {
            var r;
            n.d(e, {
                elemOffset: () => o
            });
            var i = function() {
                    if (null != r) return r;
                    var t = document.createElement("div");
                    return t.style.paddingLeft = t.style.width = "1px", document.body.appendChild(t), r = 2 === t.offsetWidth, document.body.removeChild(t), r
                },
                o = function(t) {
                    var e, n, r = document.body,
                        o = document.defaultView,
                        c = document.documentElement,
                        l = t.getBoundingClientRect(),
                        u = c.clientTop || r.clientTop || 0,
                        s = c.clientLeft || r.clientLeft || 0;
                    e = o && null != o.pageYOffset ? o.pageYOffset : i() && c && null != c.scrollTop ? c.scrollTop : r.scrollTop, n = o && null != o.pageXOffset ? o.pageXOffset : i() && c && null != c.scrollLeft ? c.scrollLeft : r.scrollLeft;
                    var f = a(t);
                    return {
                        height: l.height * f,
                        top: l.top * f + e - u,
                        left: l.left * f + n - s,
                        width: l.width * f,
                        zoom: f
                    }
                },
                a = function(t) {
                    return t && t !== document.documentElement ? a(t.parentElement) * (getComputedStyle(t).zoom || 1) : 1
                }
        },
        20: (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
            __webpack_require__.d(__webpack_exports__, {
                execScriptTags: () => execScriptTags,
                getScriptTags: () => getScriptTags,
                removeScriptTags: () => removeScriptTags
            });
            var utilities_script_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21),
                getScriptTags = function(t) {
                    return t.match(/<script.*?src[^>]*>\s*<\/script>|<script.*?>[\s\S]+?<\/script>/gi) || []
                },
                scriptTagsToRunScriptsInput = function scriptTagsToRunScriptsInput(scriptTags) {
                    if (!scriptTags) return [];
                    scriptTags instanceof Array || (scriptTags = getScriptTags(scriptTags));
                    for (var hashes = [], _loop = function _loop() {
                            var scriptTag = scriptTags[i],
                                hash = {},
                                matches = scriptTag.match(/<script.*?>/i);
                            if (matches && (matches = matches[0].match(/src="([^"]+)"/i), matches && (hash.src = matches[1], hash.async = /async/i.test(scriptTag.replace(hash.src, "")))), !matches && (matches = scriptTag.match(/<script>([\s\S]+?)<\/script>/i), matches)) {
                                var src = matches[1];
                                hash.fn = function() {
                                    return eval(src)
                                }
                            }
                            hashes.push(hash)
                        }, i = 0; i < scriptTags.length; i++) _loop();
                    return hashes
                },
                execScriptTags = function(t, e) {
                    if (!t) return null;
                    var n = scriptTagsToRunScriptsInput(t);
                    return (0, utilities_script_utils_js__WEBPACK_IMPORTED_MODULE_0__.runScripts)(n).then(e)
                },
                removeScriptTags = function(t) {
                    return t.replace(/<script.*?src[^>]*>\s*<\/script>|<script>[\s\S]+?<\/script>/g, "")
                }
        },
        21: (t, e, n) => {
            n.d(e, {
                runScripts: () => s
            });
            var r = n(12),
                i = n(4),
                o = n(22);

            function a(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function c(t, e, n) {
                return (e = function(t) {
                    var e = function(t, e) {
                        if ("object" != typeof t || !t) return t;
                        var n = t[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var r = n.call(t, e || "default");
                            if ("object" != typeof r) return r;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(t, "string");
                    return "symbol" == typeof e ? e : e + ""
                }(e)) in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var l = function(t) {
                    for (var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = document.getElementsByTagName("script"), r = 0; r < n.length; r++) {
                        var i = n[r],
                            o = i.getAttribute("src") || "";
                        if (e.ignoreQueryParams) {
                            var a = o.split("?");
                            o = a[0]
                        }
                        if (!e.scriptRegex && e.ignoreProtocol && (o = o.replace(/^https?:/, ""), t = t.replace(/^https?:/, "")), e.scriptRegex && e.scriptRegex.test(o)) return i;
                        if (e.testStartsWith && 0 === o.indexOf(t)) return i;
                        if (o === t) return i
                    }
                    return null
                },
                u = function(t) {
                    var e, n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 8e3,
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return null == r && (r = 8e3), null == i && (i = {}), new Promise((function(a) {
                        !0 === i.once && (e = l(t)) && (n = !0), i.once && n ? e.readyState && !/loaded|complete/.test(e.readyState) || setTimeout((function() {
                            a()
                        }), 1) : (0, o.runScript)(t, r).then(a).catch((function(t) {
                            a(t), setTimeout((function() {
                                console.error(t)
                            }), 1)
                        }))
                    }))
                },
                s = function() {
                    for (var t, e = arguments.length, n = new Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                    t = n[0] instanceof Array ? n[0] : n, t = f(t);
                    var o = [],
                        l = [],
                        s = [];
                    return t.forEach((function(t) {
                        var e = function(t) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var n = null != arguments[e] ? arguments[e] : {};
                                    e % 2 ? a(Object(n), !0).forEach((function(e) {
                                        c(t, e, n[e])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(e) {
                                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                                    }))
                                }
                                return t
                            }({}, t),
                            n = new Promise((function(t) {
                                e.resolve = t
                            }));
                        e.promise = n, s.push(e.promise), t.async ? o.push(e) : l.push(e)
                    })), l.reduce((function(t, e) {
                        if (e.fn) try {
                            e.fn()
                        } catch (t) {
                            r.wlog.error(t)
                        } finally {
                            e.resolve()
                        } else e.src && u(e.src, null, e).then(e.resolve);
                        return t.then(e.promise)
                    }), Promise.resolve()), setTimeout((function() {
                        o.forEach((function(t) {
                            if (t.fn) try {
                                t.fn()
                            } catch (t) {
                                r.wlog.error(t)
                            } finally {
                                t.resolve()
                            } else t.src && u(t.src, null, t).then(t.resolve)
                        }))
                    }), 1), Promise.all(s)
                },
                f = function(t) {
                    for (var e = [], n = 0; n < t.length; n++) {
                        var r = t[n];
                        "string" == typeof r ? e.push({
                            src: r,
                            async: !1
                        }) : (0, i.isObject)(r) ? e.push(r) : e.push({
                            fn: r,
                            async: !1
                        })
                    }
                    return e
                }
        },
        22: (t, e, n) => {
            n.d(e, {
                runScript: () => i
            });
            var r = n(23),
                i = function(t, e) {
                    var n = r.TAGGED_VERSION;
                    return new Promise((function(r, i) {
                        var o;
                        null == e && (e = 8e3), (o = document.createElement("script")).src = t, o.async = !0, o.type = "text/javascript", /https?:\/\/fast\.wistia\./.test(o.src) && "" !== n && n.length > 0 && (o.src = "".concat(o.src, "@").concat(n));
                        var a = null,
                            c = !1,
                            l = function() {
                                o.onerror = o.onreadystatechange = o.onload = null, clearTimeout(a), clearTimeout(s), a = setTimeout((function() {
                                    o && o.parentNode && o.parentNode.removeChild(o)
                                }), 500)
                            },
                            u = function() {
                                var t = o.readyState;
                                c || t && !/loaded|complete/.test(t) || (c = !0, setTimeout((function() {
                                    r(), l()
                                }), 1))
                            },
                            s = setTimeout((function() {
                                c = !0, l(), i(new Error("timeout"))
                            }), e);
                        o.onerror = function(t) {
                            c = !0, l(), i(t)
                        }, o.onreadystatechange = u, o.onload = u, (document.body || document.head).appendChild(o)
                    }))
                }
        },
        23: (t, e, n) => {
            n.d(e, {
                TAGGED_VERSION: () => c,
                metricsHost: () => f
            });
            var r = n(10),
                i = n(24),
                o = n(25),
                a = ((0, o.appHostname)("app"), (0, o.appHostname)("fast-protected"), (0, o.appHostname)("fast")),
                c = "",
                l = ("undefined" != typeof window && r.root === window && r.root.location && r.root.location.protocol, function() {
                    var t = (0, o.getCloudDevHostname)("fast");
                    return t || null
                }),
                u = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
                    if (t) return t;
                    var e = l();
                    return e || a
                },
                s = function() {
                    var t = l();
                    if (t) return t;
                    return "fast.".concat("wistia.net")
                },
                f = (function() {
                    for (var t = document.getElementsByTagName("script"), e = 0; e < t.length; e++) {
                        var n = t[e];
                        if (n.src) {
                            var r = new i.Url(n.src),
                                o = /\/assets\/external\/E-v1?\.js$/.test(r.rawPath),
                                a = r.host === u() || r.host === s() || "fast-canary.wistia.net" === r.host,
                                c = "https:" === location.protocol && "https:" === r.protocol,
                                l = "" === r.protocol || null == r.protocol,
                                f = c || l || "http:" === location.protocol,
                                p = !n.readyState || /loaded|complete/.test(n.readyState);
                            if (o && a && f && p) return r
                        }
                    }
                    new i.Url("".concat((0, i.proto)(), "//").concat(s(), "/E-v1.js"))
                }(), function() {
                    return "pipedream.".concat("wistia.com")
                }),
                p = [].concat(["wistia.net", "wistia.com"], ["wistia.mx", "wistia.dev", "wistia.tech", "wistia.am", "wistia.se", "wistia.io", "wistia.st"]);
            new RegExp("(".concat(p.map((function(t) {
                return "\\.".concat(t.replace(".", "\\."))
            })).join("|"), ")$"))
        },
        24: (t, e, n) => {
            n.d(e, {
                Url: () => s,
                proto: () => o
            });
            var r = n(4),
                i = n(12),
                o = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : location.href;
                    return /^http:\/\//.test(t) ? "http:" : "https:"
                },
                a = function(t) {
                    if (null == t) return t;
                    var e;
                    try {
                        e = decodeURIComponent(t)
                    } catch (n) {
                        setTimeout((function() {
                            i.wlog.notice(n)
                        }), 50), e = t
                    }
                    return e
                },
                c = function(t) {
                    for (var e = t[0], n = 1; n < t.length; n++) e += "[".concat(t[n], "]");
                    return e
                },
                l = function(t) {
                    return t.match(/([\w\-_]+)/g)
                },
                u = ["protocol", "host", "port", "params", "path"],
                s = function(t) {
                    var e = this;
                    e.params = {}, e.path = [], e.host = "", "object" == typeof t ? e.fromOptions(t) : t && e.fromRaw(t)
                },
                f = s.prototype;
            f.fromOptions = function(t) {
                for (var e = 0; e < u.length; e++) {
                    var n = u[e];
                    null != t[n] && (this[n] = t[n])
                }
                return this
            }, f.fromRaw = function(t) {
                var e;
                return this.rawUrl = t, (e = t.match(/^((?:https?:)|(?:file:)|(?:ftp:))?\/\//)) && (this.protocol = e[1] || void 0), (e = t.match(/\/\/([^:?#/]*)/)) && (this.host = e[1] || void 0), (e = t.match(/\/\/.*?(\/[^?#$]+)/) || t.match(/(^\/[^/][^?#$]+)/)) && this.setPath(e[1]), (e = t.match(/:(\d+)/)) && (this.port = parseInt(e[1], 10)), (e = t.match(/\?([^#]+)/)) && (this.rawParams = e[1], this.params = function(t) {
                    var e = {};
                    if (!t) return e;
                    for (var n = t.split("&"), o = function() {
                            var t = n[c].split("="),
                                o = t[0],
                                u = t[1];
                            try {
                                o = l(decodeURIComponent(o)) || ""
                            } catch (t) {
                                setTimeout((function() {
                                    i.wlog.notice(t)
                                }), 50), o = ""
                            }(0, r.cast)(o);
                            var s = (0, r.getDeep)(e, o);
                            if (null != s)
                                if ((0, r.isArray)(s)) s.push(a(u));
                                else {
                                    var f = [s];
                                    f.push(a(u)), (0, r.setAndPreserveUndefined)(e, o, f)
                                }
                            else(0, r.setAndPreserveUndefined)(e, o, a(u))
                        }, c = 0; c < n.length; c++) o();
                    return e
                }(this.rawParams)), (e = t.match(/#(.*)$/)) && (this.anchor = e[1]), this
            }, f.clone = function() {
                return new s({
                    protocol: this.protocol,
                    host: this.host,
                    port: this.port,
                    path: (0, r.clone)(this.path),
                    params: (0, r.clone)(this.params),
                    anchor: this.anchor
                })
            }, f.ext = function(t) {
                if (null != t) {
                    var e = this.ext(),
                        n = this.path.length - 1,
                        r = new RegExp("\\.".concat(e), "g");
                    return e && (this.path[n] = "".concat(this.path[n].replace(r, ""))), this.path[n] = "".concat(this.path[n], ".").concat(t)
                }
                var i = this.path[this.path.length - 1].match(/\.(.*)$/);
                return null != i && i[1] || null
            }, f.isRelative = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location,
                    e = this.protocol,
                    n = this.host;
                return !(null != e && "" !== e && e !== t.protocol || n && n !== t.hostname)
            }, f.toString = function() {
                return this.isRelative() ? this.relative() : this.absolute()
            }, f.absolute = function() {
                var t = "";
                null != this.protocol && (t = this.protocol);
                var e = "";
                return null != this.port && (e = ":".concat(this.port)), "".concat(t, "//").concat(this.host || location.host).concat(e).concat(this.relative())
            }, f.relative = function() {
                var t, e = "";
                this.path.length > 0 && ("string" == typeof(t = this.path) && (t = t.split("/")), e = null == t ? "" : "/".concat(t.join("/")), this._hasTrailingSlash && (e += "/"));
                var n, i, o = "?".concat((n = this.params, i = [], (0, r.eachLeaf)(n, (function(t, e) {
                    null != t ? i.push("".concat(encodeURIComponent(c(e)), "=").concat(encodeURIComponent(t))) : i.push(encodeURIComponent(c(e)))
                })), i.join("&")));
                return 1 === o.length && (o = ""), "".concat(e).concat(o).concat(this.relativeAnchor())
            }, f.authority = function() {
                var t = null != this.port ? ":".concat(this.port) : "";
                return "".concat(this.host).concat(t)
            }, f.relativeProtocol = function() {
                var t = "";
                return null != this.port && (t = ":".concat(this.port)), "//".concat(this.host).concat(t).concat(this.relative())
            }, f.relativeAnchor = function() {
                var t = "";
                return null != this.anchor && (t = "#".concat(this.anchor)), "".concat(t)
            }, f.setPath = function(t) {
                this.rawPath = t, this._hasTrailingSlash = /\/$/.test(this.rawPath), this.path = function(t) {
                    var e = [];
                    if (null == t) return e;
                    for (var n = t.split(/\/+/), r = 0; r < n.length; r++) {
                        var i = n[r];
                        null != i && "" !== i && e.push(i)
                    }
                    return e
                }(this.rawPath)
            }, s.create = function(t) {
                return new s(t)
            };
            s.create;
            s.parse = function(t) {
                return new s(t)
            };
            s.parse
        },
        25: (t, e, n) => {
            n.d(e, {
                appHostname: () => i,
                getCloudDevHostname: () => o
            });
            var r = /([a-z0-9-]+)-cde-([a-z0-9-]+)\.([a-z0-9-]+)\.wistia\.io/i,
                i = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "app",
                        e = o(t);
                    return e || "".concat(t, ".").concat("wistia.com")
                },
                o = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "app";
                    if ("undefined" != typeof window && window.location) {
                        var e = window.location.hostname,
                            n = r.exec(e);
                        if (n) return "".concat(t, "-cde-").concat(n[2], ".").concat(n[3], ".wistia.io")
                    }
                    return null
                }
        },
        26: (t, e, n) => {
            n.d(e, {
                seqId: () => i
            });
            var r = n(16),
                i = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "wistia_",
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        n = r.Wistia._sequenceVal || 1,
                        i = "".concat(t).concat(n).concat(e);
                    return r.Wistia._sequenceVal = n + 1, i
                }
        },
        30: (t, e, n) => {
            function r(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function i(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? r(Object(n), !0).forEach((function(e) {
                        o(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function o(t, e, n) {
                return (e = function(t) {
                    var e = function(t, e) {
                        if ("object" != typeof t || !t) return t;
                        var n = t[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var r = n.call(t, e || "default");
                            if ("object" != typeof r) return r;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(t, "string");
                    return "symbol" == typeof e ? e : e + ""
                }(e)) in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            n.d(e, {
                standardSvgAttrs: () => a
            });
            var a = function(t) {
                var e = t.width,
                    n = void 0 === e ? 40 : e,
                    r = t.height,
                    o = void 0 === r ? 34 : r,
                    a = t.styleOverride,
                    c = void 0 === a ? {} : a,
                    l = t.ariaHidden,
                    u = void 0 !== l && l,
                    s = t.fillColor,
                    f = void 0 === s ? "#ffffff" : s;
                return {
                    x: "0px",
                    y: "0px",
                    viewBox: "0 0 ".concat(n, " ").concat(o),
                    "enable-background": "new 0 0 ".concat(n, " ").concat(o),
                    "aria-hidden": "".concat(!!u),
                    style: i({
                        fill: f,
                        height: "100%",
                        left: 0,
                        strokeWidth: 0,
                        top: 0,
                        width: "100%"
                    }, c)
                }
            }
        },
        38: (t, e, n) => {
            n.d(e, {
                isVisitorTrackingEnabled: () => f
            });
            var r = n(13),
                i = n(39),
                o = n(41),
                a = n(16);

            function c(t) {
                return function(t) {
                    if (Array.isArray(t)) return l(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return l(t, e);
                        var n = {}.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? l(t, e) : void 0
                    }
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function l(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            var u;
            a.Wistia._visitorTrackingDomain || (a.Wistia._visitorTrackingDomain = location.hostname || ""), a.Wistia._visitorTracking || (null != (u = (0, i.getWistiaLocalStorage)().visitorTrackingEnabled) && ((0, i.updateWistiaLocalStorage)((function(t) {
                return delete t.visitorTrackingEnabled
            })), a.Wistia._visitorTracking = {}, a.Wistia._visitorTracking[a.Wistia._visitorTrackingDomain] = {
                isEnabled: u,
                updatedAt: Date.now()
            }, (0, i.updateWistiaLocalStorage)((function(t) {
                return t.visitorTracking = a.Wistia._visitorTracking
            }))), a.Wistia._visitorTracking = (0, i.getWistiaLocalStorage)().visitorTracking || {});
            a.Wistia.consent = function(t) {
                return null == t ? f() : s(t)
            };
            var s = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.Wistia._visitorTrackingDomain;
                    "default" === t ? delete a.Wistia._visitorTracking[e] : a.Wistia._visitorTracking[e] = {
                        isEnabled: "true" === "".concat(t),
                        updatedAt: Date.now()
                    }, (0, i.updateWistiaLocalStorage)((function(t) {
                        return t.visitorTracking = a.Wistia._visitorTracking
                    })), (0, r.globalTrigger)("visitortrackingchange", t), c(document.getElementsByTagName("wistia-player")).forEach((function(e) {
                        e.dispatchEvent(new CustomEvent("visitor-tracking-change", {
                            detail: {
                                isTrackingEnabled: t
                            }
                        }))
                    }))
                },
                f = function() {
                    if ("boolean" == typeof a.Wistia._visitorTracking) return a.Wistia._visitorTracking;
                    if (a.Wistia._visitorTracking) {
                        var t = function() {
                            if (a.Wistia._visitorTrackingDomain)
                                for (var t = a.Wistia._visitorTrackingDomain.split("."); t.length > 0;) {
                                    var e = a.Wistia._visitorTracking[t.join(".")],
                                        n = e && e.isEnabled;
                                    if (null != n) return n;
                                    t.shift()
                                }
                        }();
                        if (null != t) return Boolean(t)
                    }
                    var e = (0, o.getAllApiHandles)();
                    if (a.Wistia.channel && a.Wistia.channel.all) try {
                        e.push.apply(e, c(a.Wistia.channel.all()))
                    } catch (t) {}
                    return !e.some((function(t) {
                        return !0 === (t._mediaData || t._galleryData || {}).privacyMode
                    }))
                }
        },
        39: (t, e, n) => {
            n.d(e, {
                getWistiaLocalStorage: () => a,
                updateWistiaLocalStorage: () => c
            });
            var r = n(40),
                i = n(16),
                o = "wistia",
                a = function() {
                    return (0, r.getLocalStorage)(o)
                },
                c = function(t) {
                    return i.Wistia._localStorage = (0, r.updateLocalStorage)(o, t), i.Wistia._localStorage
                }
        },
        40: (t, e, n) => {
            n.d(e, {
                getLocalStorage: () => l,
                removeLocalStorage: () => u,
                setLocalStorage: () => s,
                updateLocalStorage: () => f
            });
            var r = n(16),
                i = function(t) {
                    setTimeout((function() {
                        throw t
                    }), 0)
                },
                o = "_namespacedLocalStorage",
                a = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "wistia-test-localstorage";
                    if (null != r.Wistia._localStorageWorks) return r.Wistia._localStorageWorks;
                    try {
                        var e = localStorage.getItem(t);
                        localStorage.removeItem(t), localStorage.setItem(t, e), localStorage.removeItem(t), r.Wistia._localStorageWorks = !0
                    } catch (t) {
                        r.Wistia._localStorageWorks = !1
                    }
                    return r.Wistia._localStorageWorks
                },
                c = function() {
                    return null == r.Wistia[o] && (r.Wistia[o] = {}), r.Wistia[o]
                },
                l = function(t) {
                    if (!a()) return c()[t] || {};
                    if (localStorage[t]) try {
                        return "null" === localStorage[t] ? {} : JSON.parse(localStorage[t])
                    } catch (t) {
                        i(t)
                    }
                    return {}
                },
                u = function(t) {
                    if (a()) try {
                        localStorage.removeItem(t)
                    } catch (t) {
                        i(t)
                    } else c()[t] = {}
                },
                s = function(t, e) {
                    if (!a()) return null != e && "object" == typeof e && (c()[t] = e), e;
                    try {
                        c()[t] = e, localStorage[t] = JSON.stringify(e)
                    } catch (t) {
                        i(t)
                    }
                    return e
                },
                f = function(t, e) {
                    var n = l(t);
                    try {
                        e(n)
                    } catch (t) {
                        i(t)
                    }
                    return s(t, n)
                }
        },
        41: (t, e, n) => {
            n.d(e, {
                getAllApiHandles: () => i
            });
            n(42), n(12);
            var r = n(43);
            n(44);
            var i = function() {
                return (void 0 === (0, r.wData)("video") ? [] : Object.values((0, r.wData)("video"))).concat(void 0 === (0, r.wData)("iframe_api") ? [] : Object.values((0, r.wData)("iframe_api")))
            }
        },
        42: (t, e, n) => {
            n.d(e, {
                getAllApiEmbedElements: () => r
            });
            var r = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "wistia_embed",
                    e = document.querySelectorAll("div.".concat(t, ",span.").concat(t, ",iframe.").concat(t));
                return Array.from(e).map((function(t) {
                    var e;
                    return "WISTIA-PLAYER" === (null === (e = t.lastChild) || void 0 === e ? void 0 : e.nodeName) ? t.lastChild : t
                }))
            }
        },
        43: (t, e, n) => {
            n.d(e, {
                wData: () => o
            });
            var r = n(4),
                i = n(16),
                o = function(t, e) {
                    return (0, r.isArray)(t) || (t = t.split(".")), null != e && (0, r.setDeep)(i.Wistia, ["_data"].concat(t), e), (0, r.getDeep)(i.Wistia, ["_data"].concat(t))
                }
        },
        44: (t, e, n) => {
            n.d(e, {
                ensureString: () => r
            });
            var r = function(t) {
                return null == t ? "" : t.toString()
            }
        },
        71: (t, e, n) => {
            n.d(e, {
                destroyControl: () => c
            });
            n(5);
            var r = n(9),
                i = (n(72), n(3)),
                o = n(2),
                a = (n(26), n(73), function(t, e) {
                    if (null == t) throw new TypeError("Cannot convert undefined or null to object");
                    return Object.prototype.hasOwnProperty.call(Object(t), e)
                }),
                c = ((0, r.cachedDetect)(), function(t) {
                    t._destroyed = !0,
                        function(t) {
                            t.unbinds instanceof Array && (t.unbinds.forEach((function(t) {
                                try {
                                    "function" == typeof t && t()
                                } catch (t) {
                                    setTimeout((function() {
                                        throw t
                                    }), 1)
                                }
                            })), t.unbinds = null)
                        }(t),
                        function(t) {
                            t.eventListeners instanceof Map && (t.eventListeners.forEach((function(e, n) {
                                try {
                                    "function" == typeof e && t.embedElement.removeEventListener(n, e)
                                } catch (t) {
                                    setTimeout((function() {
                                        throw t
                                    }), 1)
                                }
                            })), t.eventListeners.clear())
                        }(t), l(t), s(t), f(t)
                }),
                l = function(t) {
                    t.rootElem && (0, i.elemRemove)(Array.prototype.slice.call(t.rootElem.childNodes))
                },
                u = function(t) {
                    var e = t[0],
                        n = t[1];
                    e && n && (0, o.render)((0, o.h)("nothing", null), e)
                },
                s = function(t) {
                    var e = t.reactMounts;
                    if (e)
                        if (e instanceof Array) u(e);
                        else
                            for (var n in e) a(e, n) && e[n] && u(e[n])
                },
                f = function(t) {
                    for (var e in t) a(t, e) && ("_" !== (n = e)[0] || "_" !== n[1]) && "mounted" !== e && (t[e] = null);
                    var n;
                    t.__prevProps = null, t._destroyed = !0
                }
        },
        72: (t, e, n) => {
            n.d(e, {
                clearTimeouts: () => a,
                doTimeout: () => o
            });
            var r = n(4),
                i = n(16);
            i.Wistia;
            null == i.Wistia._timeouts && (i.Wistia._timeouts = {});
            var o = function(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                    (0, r.isArray)(t) && (t = t.join("."));
                    var o = l(t);
                    if (a(t, o), e) {
                        var c = i.Wistia._timeouts[o];
                        null == c && (c = i.Wistia._timeouts[o] = {});
                        var u = setTimeout((function() {
                            delete c[t], e()
                        }), n);
                        return c[t] = u, u
                    }
                    return i.Wistia._timeouts[o][t]
                },
                a = function(t) {
                    var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if ((0, r.isArray)(t) && (t = t.join(".")), "__global__" === (n = n || l(t)) && (e = i.Wistia._timeouts[t]))
                        for (var o in e) {
                            var a = e[o];
                            clearTimeout(a), delete e[o]
                        }
                    if (e = i.Wistia._timeouts[n])
                        for (var u in e) {
                            var s = e[u];
                            !u.indexOf || 0 !== u.indexOf(t) || u.length !== t.length && "." !== u.charAt(t.length) || (clearTimeout(s), delete e[u])
                        }
                    i.Wistia.blockSweepTimeouts || (i.Wistia.blockSweepTimeouts = !0, setTimeout(c, 0), setTimeout((function() {
                        i.Wistia.blockSweepTimeouts = !1
                    }), 5e3))
                },
                c = function() {
                    for (var t in i.Wistia._timeouts) {
                        var e = i.Wistia._timeouts[t];
                        (0, r.isEmpty)(e) && delete i.Wistia._timeouts[t]
                    }
                },
                l = function(t) {
                    var e = t.indexOf(".");
                    return e > 0 ? t.substring(0, e) : "__global__"
                }
        },
        73: (t, e, n) => {
            n.d(e, {
                defineControl: () => o,
                getControlDefinitions: () => a
            });
            var r = n(74),
                i = n(16);
            null == i.Wistia._controlDefinitions && (i.Wistia._controlDefinitions = {});
            var o = function(t) {
                    null != t.handle ? null == i.Wistia._controlDefinitions[t.handle] && (i.Wistia._controlDefinitions[t.handle] = t, i.Wistia.trigger && i.Wistia.trigger("controldefined", t)) : console.error("Please specify a handle property for control", t)
                },
                a = function() {
                    return i.Wistia._controlDefinitions || {}
                };
            i.Wistia.defineControl = function(t) {
                (0, r.countMetric)("player/custom-control-definition", 1, {
                    name: t.handle,
                    location: location.origin + location.pathname
                }), o(t)
            }
        },
        74: (t, e, n) => {
            n.d(e, {
                countMetric: () => u
            });
            var r = n(5),
                i = n(8),
                o = n(38),
                a = n(23),
                c = n(16);
            null == c.Wistia._simpleMetricsCache && (c.Wistia._simpleMetricsCache = {}), null == c.Wistia._simpleMetricsDebounceInterval && (c.Wistia._simpleMetricsDebounceInterval = 500);
            var l = c.Wistia._simpleMetricsCache,
                u = function(t) {
                    return f("count", t, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {})
                },
                s = function() {
                    if ((0, o.isVisitorTrackingEnabled)()) {
                        for (var t = "https://".concat((0, a.metricsHost)(), "/mput?topic=metrics"), e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                        return fetch(t, {
                            method: "POST",
                            mode: "cors",
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded"
                            },
                            body: n.join("\n")
                        }).then((function(t) {
                            t.ok || console.error(t)
                        })).catch((function(t) {
                            console.error(t)
                        }))
                    }
                },
                f = function(t, e, n) {
                    var a, u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    if ((0, o.isVisitorTrackingEnabled)()) try {
                        null == l.toMput && (l.toMput = []);
                        var f = (0, r.assign)({
                                type: t,
                                key: e,
                                value: null != n ? n : null
                            }, u),
                            p = JSON.stringify(f, (a = new WeakSet, function(t, e) {
                                if ("object" == typeof e && null !== e) {
                                    if (a.has(e)) return "[Circular]";
                                    a.add(e)
                                }
                                return e
                            }));
                        l.toMput.push(p), clearTimeout(c.Wistia._msendTimeout), c.Wistia._msendTimeout = setTimeout((function() {
                            (0, i.pageLoaded)((function() {
                                s.apply(undefined, l.toMput), l.toMput = []
                            }))
                        }), c.Wistia._simpleMetricsDebounceInterval)
                    } catch (t) {
                        console.error(t.message), console.error(t.stack)
                    }
                }
        },
        197: (t, e, n) => {
            n.d(e, {
                Control: () => u
            });
            var r = n(71);

            function i(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, o(r.key), r)
                }
            }

            function o(t) {
                var e = function(t, e) {
                    if ("object" != typeof t || !t) return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != typeof r) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == typeof e ? e : e + ""
            }

            function a(t, e, n) {
                (function(t, e) {
                    if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
                })(t, e), e.set(t, n)
            }

            function c(t, e, n) {
                if ("function" == typeof t ? t === e : t.has(e)) return arguments.length < 3 ? e : n;
                throw new TypeError("Private element is not present on this object")
            }
            var l = new WeakMap,
                u = function() {
                    return t = function t(e) {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), a(this, l, void 0), this.video = e, this.embedElement = e.container, this.unbinds = [], this.eventListeners = new Map, this.reactMounts = {}, this.isWistiaPlayer = "WISTIA-PLAYER" === this.embedElement.tagName, this.impl = e, this.isWistiaPlayer ? this.api = this.embedElement : this.api = e.publicApi, this.props = {}
                    }, (e = [{
                        key: "disabledButton",
                        get: function() {
                            return e = this, (t = l).get(c(t, e));
                            var t, e
                        },
                        set: function(t) {
                            var e, n, r;
                            n = this, r = t, (e = l).set(c(e, n), r)
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            (0, r.destroyControl)(this)
                        }
                    }, {
                        key: "mount",
                        value: function(t) {
                            this.rootElem = t
                        }
                    }]) && i(t.prototype, e), n && i(t, n), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), t;
                    var t, e, n
                }()
        },
        1014: (t, e, n) => {
            var r = n(2),
                i = n(73),
                o = n(1015),
                a = n(1016);

            function c(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, p(r.key), r)
                }
            }

            function l(t, e, n) {
                return e = s(e),
                    function(t, e) {
                        if (e && ("object" == typeof e || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, u() ? Reflect.construct(e, n || [], s(t).constructor) : e.apply(t, n))
            }

            function u() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (t) {}
                return (u = function() {
                    return !!t
                })()
            }

            function s(t) {
                return s = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, s(t)
            }

            function f(t, e) {
                return f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, f(t, e)
            }

            function p(t) {
                var e = function(t, e) {
                    if ("object" != typeof t || !t) return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != typeof r) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == typeof e ? e : e + ""
            }
            var d = function(t) {
                function e(t) {
                    var n, i, c, u;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), n = l(this, e, [t]), i = n, u = function() {
                        n.buttonElem && ((0, r.render)(n.isEllipsisVisible() ? (0, r.h)(a.default, null) : (0, r.h)(o.default, null), n.buttonElem), n.reactMounts.button = [n.buttonElem])
                    }, (c = p(c = "renderButton")) in i ? Object.defineProperty(i, c, {
                        value: u,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : i[c] = u, n.video = t, n.largestButtonWidth = e.largestButtonWidth, n.unbinds.push(t.on("widthchange", n.renderButton)), n
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e && f(t, e)
                }(e, t), n = e, (i = [{
                    key: "mountButton",
                    value: function(t) {
                        this.buttonElem = t, this.setButtonLabel("Wistia Logo -- Learn More"), this.renderButton()
                    }
                }, {
                    key: "onControlPropsUpdated",
                    value: function() {
                        this._destroyed || this.renderButton()
                    }
                }, {
                    key: "isActuallyLink",
                    value: function() {
                        return !0
                    }
                }, {
                    key: "linkAttrs",
                    value: function() {
                        return {
                            href: "https://wistia.com/?utm_type=player&utm_campaign=wistia-branding&utm_medium=referral&utm_source=wistia&about=".concat(this.video._mediaData.accountKey.match(/\d+/)[0]),
                            ariaLabel: "Learn more about Wistia's products",
                            target: "_blank"
                        }
                    }
                }, {
                    key: "onClickButton",
                    value: function() {
                        window.open(this.linkAttrs().href, this.linkAttrs().target)
                    }
                }, {
                    key: "isEllipsisVisible",
                    value: function() {
                        var t, e, n, r = (null === (t = this.video._impl.ui) || void 0 === t ? void 0 : t.getControlsByType("control-bar-right")) || [],
                            i = (null === (e = this.video._impl.ui) || void 0 === e ? void 0 : e.getControlsByType("playbar")) || [],
                            o = r.length > 0 && i.length > 0 && this.video._impl.ui && !this.video._impl.ui.shouldShowMoreDefaultValue();
                        return (null === (n = this.video._impl.ui) || void 0 === n ? void 0 : n.getControlsByType("ellipsis").length) > 0 || o
                    }
                }, {
                    key: "wistiaLogoButtonWidth",
                    value: function() {
                        return this.isEllipsisVisible() ? 40 : this.largestButtonWidth
                    }
                }]) && c(n.prototype, i), u && c(n, u), Object.defineProperty(n, "prototype", {
                    writable: !1
                }), n;
                var n, i, u
            }(n(197).Control);
            d.handle = "wistiaLogo", d.type = "wistia-logo", d.sortValue = 2e3, d.largestButtonWidth = 120, d.shouldMount = function(t) {
                return t.plugin.wistiaLogo
            }, (0, i.defineControl)(d)
        },
        1015: (t, e, n) => {
            n.d(e, {
                default: () => p
            });
            var r = n(2),
                i = n(30);

            function o() {
                return o = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n)({}).hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }, o.apply(null, arguments)
            }

            function a(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, c(r.key), r)
                }
            }

            function c(t) {
                var e = function(t, e) {
                    if ("object" != typeof t || !t) return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != typeof r) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == typeof e ? e : e + ""
            }

            function l(t, e, n) {
                return e = s(e),
                    function(t, e) {
                        if (e && ("object" == typeof e || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, u() ? Reflect.construct(e, n || [], s(t).constructor) : e.apply(t, n))
            }

            function u() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (t) {}
                return (u = function() {
                    return !!t
                })()
            }

            function s(t) {
                return s = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, s(t)
            }

            function f(t, e) {
                return f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, f(t, e)
            }
            const p = function(t) {
                function e() {
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), l(this, e, arguments)
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e && f(t, e)
                }(e, t), n = e, (c = [{
                    key: "shouldComponentUpdate",
                    value: function() {
                        return !1
                    }
                }, {
                    key: "render",
                    value: function() {
                        return (0, r.h)("svg", o({}, (0, i.standardSvgAttrs)({
                            width: 103,
                            height: 34,
                            ariaHidden: !0
                        }), {
                            fill: "none"
                        }), (0, r.h)("path", {
                            fill: "#fff",
                            d: "M21.642 19.358h-2.406c-.76 0-1.485.196-1.985.77l-3.167 3.642c2.306.12 4.722.12 6.418.12 8.648 0 10.024-5.212 10.079-7.823-.79.94-3.027 3.287-8.944 3.287l.005.005Zm7.853-8.383c-.04.446-.285 2.266-5.457 2.266-4.206 0-5.902 0-10.049-.08l3.107 3.572c.605.695 1.475.965 2.395.98 1.026.015 2.441.03 2.666.03 5.817 0 8.293-2.711 8.293-4.642 0-.97-.325-1.655-.95-2.12l-.005-.005ZM45.19 13.056h3.092v7.308c0 .825-.17 1.51-.505 2.066-.33.55-.78.96-1.346 1.225-.56.265-1.185.4-1.885.4s-1.316-.135-1.886-.4a3.123 3.123 0 0 1-1.346-1.215 2.277 2.277 0 0 1-.1-.19c-.03.065-.065.125-.1.19-.33.545-.78.95-1.345 1.215-.56.265-1.186.4-1.886.4s-1.315-.13-1.86-.385a3.008 3.008 0 0 1-1.3-1.225c-.326-.55-.491-1.246-.496-2.076l-.075-7.308h3.091v6.748c0 .475.11.81.335 1.01.23.2.515.3.85.3.336 0 .64-.1.88-.3.25-.2.376-.535.376-1.01V13.06h3.066v6.748c0 .475.12.81.365 1.01.25.2.55.3.895.3.346 0 .63-.1.85-.3.22-.2.336-.535.336-1.01V13.06l-.005-.005Zm7.514-3.921a1.891 1.891 0 0 0-.86-.195c-.316 0-.606.065-.871.195-.26.13-.465.31-.625.55a1.49 1.49 0 0 0-.225.815c0 .48.16.866.485 1.15.33.28.74.42 1.235.42.315 0 .605-.06.86-.184.266-.13.476-.31.626-.55.15-.236.225-.516.225-.84 0-.326-.075-.58-.225-.816-.15-.235-.36-.42-.626-.55v.005Zm-2.411 14.67h3.09V13.186h-3.09v10.62Zm10.198-4.942a5.58 5.58 0 0 0-.58-.69c-.2-.195-.42-.4-.655-.625-.2-.185-.35-.35-.45-.495a.825.825 0 0 1-.15-.46c0-.286.155-.49.465-.61.31-.13.705-.196 1.195-.196.145 0 .3.005.475.02l-.29-2.816a5.143 5.143 0 0 0-.86-.065c-.765 0-1.485.1-2.15.3-.661.195-1.206.525-1.636 1-.43.476-.646 1.106-.646 1.891 0 .56.105 1.05.31 1.47.216.426.5.821.86 1.196.196.185.386.375.581.57.21.196.36.36.45.506.095.135.14.29.14.46 0 .285-.16.5-.485.645-.315.145-.765.215-1.355.215-.22 0-.4-.015-.54-.045l.4 2.861c.23.045.5.065.82.065.875 0 1.66-.12 2.356-.365.705-.245 1.26-.62 1.68-1.13.416-.516.625-1.156.625-1.926 0-.35-.05-.675-.15-.98-.1-.31-.235-.576-.4-.806l-.01.01Zm5.607 1.946c-.215-.215-.325-.55-.325-1v-3.912h2.241v-2.71h-2.24V10.51l-3.092.89v9.384c0 1.105.225 1.926.68 2.47.46.536 1.146.806 2.056.806.45 0 .885-.03 1.3-.095.416-.065.77-.165 1.066-.3l.55-2.666c-.345.085-.755.13-1.235.13-.45 0-.786-.105-1-.32Zm3.852 2.996h3.09V13.186h-3.09v10.62Zm2.41-14.67a1.891 1.891 0 0 0-.86-.195c-.315 0-.605.065-.87.195-.26.13-.465.31-.625.55a1.49 1.49 0 0 0-.225.815c0 .48.16.866.485 1.15.33.28.74.42 1.235.42.315 0 .606-.06.86-.184.266-.13.476-.31.626-.55.15-.236.225-.516.225-.84 0-.326-.075-.58-.225-.816-.15-.235-.36-.42-.625-.55v.005Zm13.65 4.051v10.62h-3.09v-1.747c-.316.51-.706.936-1.176 1.276-.665.48-1.45.72-2.346.72-.895 0-1.685-.235-2.366-.71-.675-.48-1.2-1.14-1.57-1.976-.375-.845-.56-1.805-.56-2.88 0-1.076.185-2.021.56-2.862.375-.845.895-1.505 1.57-1.976.68-.48 1.47-.72 2.366-.72.895 0 1.68.245 2.346.73.465.336.855.756 1.175 1.266V13.19h3.091v-.005Zm-3.29 6.623c.214-.386.325-.826.325-1.32 0-.496-.11-.936-.326-1.321a2.307 2.307 0 0 0-.86-.906 2.29 2.29 0 0 0-1.205-.335c-.44 0-.84.11-1.206.335a2.34 2.34 0 0 0-.86.916 2.653 2.653 0 0 0-.325 1.31c0 .485.11.93.325 1.32.215.386.5.69.86.916.365.215.765.32 1.206.32.44 0 .84-.105 1.205-.32a2.3 2.3 0 0 0 .86-.915Z"
                        }))
                    }
                }]) && a(n.prototype, c), u && a(n, u), Object.defineProperty(n, "prototype", {
                    writable: !1
                }), n;
                var n, c, u
            }(r.Component)
        },
        1016: (t, e, n) => {
            n.d(e, {
                default: () => p
            });
            var r = n(2),
                i = n(30);

            function o() {
                return o = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n)({}).hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }, o.apply(null, arguments)
            }

            function a(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, c(r.key), r)
                }
            }

            function c(t) {
                var e = function(t, e) {
                    if ("object" != typeof t || !t) return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != typeof r) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == typeof e ? e : e + ""
            }

            function l(t, e, n) {
                return e = s(e),
                    function(t, e) {
                        if (e && ("object" == typeof e || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, u() ? Reflect.construct(e, n || [], s(t).constructor) : e.apply(t, n))
            }

            function u() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (t) {}
                return (u = function() {
                    return !!t
                })()
            }

            function s(t) {
                return s = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, s(t)
            }

            function f(t, e) {
                return f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, f(t, e)
            }
            const p = function(t) {
                function e() {
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), l(this, e, arguments)
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e && f(t, e)
                }(e, t), n = e, (c = [{
                    key: "shouldComponentUpdate",
                    value: function() {
                        return !1
                    }
                }, {
                    key: "render",
                    value: function() {
                        return (0, r.h)("svg", o({}, (0, i.standardSvgAttrs)({
                            width: 40,
                            height: 50,
                            ariaHidden: !0
                        }), {
                            fill: "none"
                        }), (0, r.h)("path", {
                            transform: "translate(2, 10)",
                            d: "M16.09 17.1h-5.2c-1.58 0-3.08.68-4.11 1.87L.21 26.53c4.78.25 9.78.25 13.3.25 18.31 0 20.89-11.27 20.89-16.55-1.59 1.93-6.06 6.87-18.32 6.87ZM32.14 0c-.08.92-.59 4.69-11.31 4.69-8.72 0-12.24 0-20.83-.17l6.44 7.4a6.657 6.657 0 0 0 4.96 2.3c2.13.03 5.05.06 5.53.06 11.01 0 17.19-5.05 17.19-9.89 0-2.01-.67-3.44-1.97-4.4Z",
                            style: "fill:#fff;stroke-width:0"
                        }))
                    }
                }]) && a(n.prototype, c), u && a(n, u), Object.defineProperty(n, "prototype", {
                    writable: !1
                }), n;
                var n, c, u
            }(r.Component)
        },
        1017: (t, e, n) => {
            var r = n(16);

            function i(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, s(r.key), r)
                }
            }

            function o(t, e, n) {
                return e = l(e),
                    function(t, e) {
                        if (e && ("object" == typeof e || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, a() ? Reflect.construct(e, n || [], l(t).constructor) : e.apply(t, n))
            }

            function a() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (t) {}
                return (a = function() {
                    return !!t
                })()
            }

            function c() {
                return c = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t, e, n) {
                    var r = function(t, e) {
                        for (; !{}.hasOwnProperty.call(t, e) && null !== (t = l(t)););
                        return t
                    }(t, e);
                    if (r) {
                        var i = Object.getOwnPropertyDescriptor(r, e);
                        return i.get ? i.get.call(arguments.length < 3 ? t : n) : i.value
                    }
                }, c.apply(null, arguments)
            }

            function l(t) {
                return l = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, l(t)
            }

            function u(t, e) {
                return u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, u(t, e)
            }

            function s(t) {
                var e = function(t, e) {
                    if ("object" != typeof t || !t) return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != typeof r) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == typeof e ? e : e + ""
            }
            var f = function(t) {
                function e(t, n) {
                    var r, i, a, c;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), r = o(this, e, [t, n]), i = r, c = function() {
                        var t, e = r.video;
                        t = e._impl.ui && e._impl.ui.spaceForPlaybar ? e._impl.ui.spaceForPlaybar() : 0, r.isHidden && (t -= r.widthWhenHidden), e._impl.ui && t < 0 ? (r.isHidden = !0, e.controls.wistiaLogo && (r.widthWhenHidden = e.controls.wistiaLogo.props.width), e.setControlEnabled("wistiaLogo", !1)) : (r.isHidden = !1, e.setControlEnabled("wistiaLogo", !0))
                    }, (a = s(a = "hideIfNoRoom")) in i ? Object.defineProperty(i, a, {
                        value: c,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : i[a] = c, r.pluginName = "wistiaLogo", r.video = t, r.options = n, r._origImpl = t._impl, t.setControlEnabled("wistiaLogo", !0), t.embedded(r.hideIfNoRoom), t.bind("widthchange", r.hideIfNoRoom), r
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e && u(t, e)
                }(e, t), n = e, r = [{
                    key: "remove",
                    value: function() {
                        var t, n, r, i, o;
                        this.video.setControlEnabled("wistiaLogo", !1), (t = e, n = "remove", r = this, o = c(l(1 & (i = 3) ? t.prototype : t), n, r), 2 & i && "function" == typeof o ? function(t) {
                            return o.apply(r, t)
                        } : o)([])
                    }
                }], r && i(n.prototype, r), a && i(n, a), Object.defineProperty(n, "prototype", {
                    writable: !1
                }), n;
                var n, r, a
            }(r.Wistia.Plugin.Base);
            r.Wistia.plugin("wistiaLogo", (function(t, e) {
                return new f(t, e)
            }))
        }
    },
    __webpack_module_cache__ = {};

function __webpack_require__(t) {
    var e = __webpack_module_cache__[t];
    if (void 0 !== e) return e.exports;
    var n = __webpack_module_cache__[t] = {
        exports: {}
    };
    return __webpack_modules__[t](n, n.exports, __webpack_require__), n.exports
}
__webpack_require__.d = (t, e) => {
    for (var n in e) __webpack_require__.o(e, n) && !__webpack_require__.o(t, n) && Object.defineProperty(t, n, {
        enumerable: !0,
        get: e[n]
    })
}, __webpack_require__.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e);
var __webpack_exports__ = {};
__webpack_require__(1014), __webpack_require__(1017);
//# debugId=a4bfe90d-79a9-4a3d-996e-8a38009ac89b
//# sourceMappingURL=wistiaLogo.js.map