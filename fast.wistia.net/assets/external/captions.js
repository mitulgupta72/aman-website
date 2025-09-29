var __webpack_modules__ = {
        2: (t, e, n) => {
            n.d(e, {
                Component: () => C,
                Fragment: () => O,
                cloneElement: () => q,
                createContext: () => $,
                createElement: () => w,
                createRef: () => T,
                h: () => w,
                hydrate: () => Y,
                options: () => i,
                render: () => z,
                toChildArray: () => M
            });
            var r, i, o, a, s, c, u, l, f, p, h, d, v = {},
                g = [],
                y = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
                m = Array.isArray;

            function b(t, e) {
                for (var n in e) t[n] = e[n];
                return t
            }

            function _(t) {
                t && t.parentNode && t.parentNode.removeChild(t)
            }

            function w(t, e, n) {
                var i, o, a, s = {};
                for (a in e) "key" == a ? i = e[a] : "ref" == a ? o = e[a] : s[a] = e[a];
                if (arguments.length > 2 && (s.children = arguments.length > 3 ? r.call(arguments, 2) : n), "function" == typeof t && null != t.defaultProps)
                    for (a in t.defaultProps) void 0 === s[a] && (s[a] = t.defaultProps[a]);
                return S(t, s, i, o, null)
            }

            function S(t, e, n, r, a) {
                var s = {
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
                return null == a && null != i.vnode && i.vnode(s), s
            }

            function T() {
                return {
                    current: null
                }
            }

            function O(t) {
                return t.children
            }

            function C(t, e) {
                this.props = t, this.context = e
            }

            function E(t, e) {
                if (null == e) return t.__ ? E(t.__, t.__i + 1) : null;
                for (var n; e < t.__k.length; e++)
                    if (null != (n = t.__k[e]) && null != n.__e) return n.__e;
                return "function" == typeof t.type ? E(t) : null
            }

            function P(t) {
                var e, n;
                if (null != (t = t.__) && null != t.__c) {
                    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
                        if (null != (n = t.__k[e]) && null != n.__e) {
                            t.__e = t.__c.base = n.__e;
                            break
                        }
                    return P(t)
                }
            }

            function k(t) {
                (!t.__d && (t.__d = !0) && a.push(t) && !x.__r++ || s != i.debounceRendering) && ((s = i.debounceRendering) || c)(x)
            }

            function x() {
                for (var t, e, n, r, o, s, c, l = 1; a.length;) a.length > l && a.sort(u), t = a.shift(), l = a.length, t.__d && (n = void 0, o = (r = (e = t).__v).__e, s = [], c = [], e.__P && ((n = b({}, r)).__v = r.__v + 1, i.vnode && i.vnode(n), N(e.__P, n, r, e.__n, e.__P.namespaceURI, 32 & r.__u ? [o] : null, s, null == o ? E(r) : o, !!(32 & r.__u), c), n.__v = r.__v, n.__.__k[n.__i] = n, W(s, n, c), n.__e != o && P(n)));
                x.__r = 0
            }

            function A(t, e, n, r, i, o, a, s, c, u, l) {
                var f, p, h, d, y, m, b, _ = r && r.__k || g,
                    w = e.length;
                for (c = j(n, e, _, c, w), f = 0; f < w; f++) null != (h = n.__k[f]) && (p = -1 == h.__i ? v : _[h.__i] || v, h.__i = f, m = N(t, h, p, i, o, a, s, c, u, l), d = h.__e, h.ref && p.ref != h.ref && (p.ref && V(p.ref, null, h), l.push(h.ref, h.__c || d, h)), null == y && null != d && (y = d), (b = !!(4 & h.__u)) || p.__k === h.__k ? c = L(h, c, t, b) : "function" == typeof h.type && void 0 !== m ? c = m : d && (c = d.nextSibling), h.__u &= -7);
                return n.__e = y, c
            }

            function j(t, e, n, r, i) {
                var o, a, s, c, u, l = n.length,
                    f = l,
                    p = 0;
                for (t.__k = new Array(i), o = 0; o < i; o++) null != (a = e[o]) && "boolean" != typeof a && "function" != typeof a ? (c = o + p, (a = t.__k[o] = "string" == typeof a || "number" == typeof a || "bigint" == typeof a || a.constructor == String ? S(null, a, null, null, null) : m(a) ? S(O, {
                    children: a
                }, null, null, null) : null == a.constructor && a.__b > 0 ? S(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a).__ = t, a.__b = t.__b + 1, s = null, -1 != (u = a.__i = I(a, n, c, f)) && (f--, (s = n[u]) && (s.__u |= 2)), null == s || null == s.__v ? (-1 == u && (i > l ? p-- : i < l && p++), "function" != typeof a.type && (a.__u |= 4)) : u != c && (u == c - 1 ? p-- : u == c + 1 ? p++ : (u > c ? p-- : p++, a.__u |= 4))) : t.__k[o] = null;
                if (f)
                    for (o = 0; o < l; o++) null != (s = n[o]) && !(2 & s.__u) && (s.__e == r && (r = E(s)), G(s, s));
                return r
            }

            function L(t, e, n, r) {
                var i, o;
                if ("function" == typeof t.type) {
                    for (i = t.__k, o = 0; i && o < i.length; o++) i[o] && (i[o].__ = t, e = L(i[o], e, n, r));
                    return e
                }
                t.__e != e && (r && (e && t.type && !e.parentNode && (e = E(t)), n.insertBefore(t.__e, e || null)), e = t.__e);
                do {
                    e = e && e.nextSibling
                } while (null != e && 8 == e.nodeType);
                return e
            }

            function M(t, e) {
                return e = e || [], null == t || "boolean" == typeof t || (m(t) ? t.some((function(t) {
                    M(t, e)
                })) : e.push(t)), e
            }

            function I(t, e, n, r) {
                var i, o, a, s = t.key,
                    c = t.type,
                    u = e[n],
                    l = null != u && !(2 & u.__u);
                if (null === u && null == t.key || l && s == u.key && c == u.type) return n;
                if (r > (l ? 1 : 0))
                    for (i = n - 1, o = n + 1; i >= 0 || o < e.length;)
                        if (null != (u = e[a = i >= 0 ? i-- : o++]) && !(2 & u.__u) && s == u.key && c == u.type) return a;
                return -1
            }

            function R(t, e, n) {
                "-" == e[0] ? t.setProperty(e, null == n ? "" : n) : t[e] = null == n ? "" : "number" != typeof n || y.test(e) ? n : n + "px"
            }

            function F(t, e, n, r, i) {
                var o, a;
                t: if ("style" == e)
                    if ("string" == typeof n) t.style.cssText = n;
                    else {
                        if ("string" == typeof r && (t.style.cssText = r = ""), r)
                            for (e in r) n && e in n || R(t.style, e, "");
                        if (n)
                            for (e in n) r && n[e] == r[e] || R(t.style, e, n[e])
                    }
                else if ("o" == e[0] && "n" == e[1]) o = e != (e = e.replace(l, "$1")), a = e.toLowerCase(), e = a in t || "onFocusOut" == e || "onFocusIn" == e ? a.slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + o] = n, n ? r ? n.u = r.u : (n.u = f, t.addEventListener(e, o ? h : p, o)) : t.removeEventListener(e, o ? h : p, o);
                else {
                    if ("http://www.w3.org/2000/svg" == i) e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
                    else if ("width" != e && "height" != e && "href" != e && "list" != e && "form" != e && "tabIndex" != e && "download" != e && "rowSpan" != e && "colSpan" != e && "role" != e && "popover" != e && e in t) try {
                        t[e] = null == n ? "" : n;
                        break t
                    } catch (t) {}
                    "function" == typeof n || (null == n || !1 === n && "-" != e[4] ? t.removeAttribute(e) : t.setAttribute(e, "popover" == e && 1 == n ? "" : n))
                }
            }

            function D(t) {
                return function(e) {
                    if (this.l) {
                        var n = this.l[e.type + t];
                        if (null == e.t) e.t = f++;
                        else if (e.t < n.u) return;
                        return n(i.event ? i.event(e) : e)
                    }
                }
            }

            function N(t, e, n, r, o, a, s, c, u, l) {
                var f, p, h, d, v, g, y, w, S, T, E, P, k, x, j, L, M, I = e.type;
                if (null != e.constructor) return null;
                128 & n.__u && (u = !!(32 & n.__u), a = [c = e.__e = n.__e]), (f = i.__b) && f(e);
                t: if ("function" == typeof I) try {
                    if (w = e.props, S = "prototype" in I && I.prototype.render, T = (f = I.contextType) && r[f.__c], E = f ? T ? T.props.value : f.__ : r, n.__c ? y = (p = e.__c = n.__c).__ = p.__E : (S ? e.__c = p = new I(w, E) : (e.__c = p = new C(w, E), p.constructor = I, p.render = K), T && T.sub(p), p.props = w, p.state || (p.state = {}), p.context = E, p.__n = r, h = p.__d = !0, p.__h = [], p._sb = []), S && null == p.__s && (p.__s = p.state), S && null != I.getDerivedStateFromProps && (p.__s == p.state && (p.__s = b({}, p.__s)), b(p.__s, I.getDerivedStateFromProps(w, p.__s))), d = p.props, v = p.state, p.__v = e, h) S && null == I.getDerivedStateFromProps && null != p.componentWillMount && p.componentWillMount(), S && null != p.componentDidMount && p.__h.push(p.componentDidMount);
                    else {
                        if (S && null == I.getDerivedStateFromProps && w !== d && null != p.componentWillReceiveProps && p.componentWillReceiveProps(w, E), !p.__e && null != p.shouldComponentUpdate && !1 === p.shouldComponentUpdate(w, p.__s, E) || e.__v == n.__v) {
                            for (e.__v != n.__v && (p.props = w, p.state = p.__s, p.__d = !1), e.__e = n.__e, e.__k = n.__k, e.__k.some((function(t) {
                                    t && (t.__ = e)
                                })), P = 0; P < p._sb.length; P++) p.__h.push(p._sb[P]);
                            p._sb = [], p.__h.length && s.push(p);
                            break t
                        }
                        null != p.componentWillUpdate && p.componentWillUpdate(w, p.__s, E), S && null != p.componentDidUpdate && p.__h.push((function() {
                            p.componentDidUpdate(d, v, g)
                        }))
                    }
                    if (p.context = E, p.props = w, p.__P = t, p.__e = !1, k = i.__r, x = 0, S) {
                        for (p.state = p.__s, p.__d = !1, k && k(e), f = p.render(p.props, p.state, p.context), j = 0; j < p._sb.length; j++) p.__h.push(p._sb[j]);
                        p._sb = []
                    } else
                        do {
                            p.__d = !1, k && k(e), f = p.render(p.props, p.state, p.context), p.state = p.__s
                        } while (p.__d && ++x < 25);
                    p.state = p.__s, null != p.getChildContext && (r = b(b({}, r), p.getChildContext())), S && !h && null != p.getSnapshotBeforeUpdate && (g = p.getSnapshotBeforeUpdate(d, v)), L = f, null != f && f.type === O && null == f.key && (L = B(f.props.children)), c = A(t, m(L) ? L : [L], e, n, r, o, a, s, c, u, l), p.base = e.__e, e.__u &= -161, p.__h.length && s.push(p), y && (p.__E = p.__ = null)
                } catch (t) {
                    if (e.__v = null, u || null != a)
                        if (t.then) {
                            for (e.__u |= u ? 160 : 128; c && 8 == c.nodeType && c.nextSibling;) c = c.nextSibling;
                            a[a.indexOf(c)] = null, e.__e = c
                        } else {
                            for (M = a.length; M--;) _(a[M]);
                            H(e)
                        }
                    else e.__e = n.__e, e.__k = n.__k, t.then || H(e);
                    i.__e(t, e, n)
                } else null == a && e.__v == n.__v ? (e.__k = n.__k, e.__e = n.__e) : c = e.__e = U(n.__e, e, n, r, o, a, s, u, l);
                return (f = i.diffed) && f(e), 128 & e.__u ? void 0 : c
            }

            function H(t) {
                t && t.__c && (t.__c.__e = !0), t && t.__k && t.__k.forEach(H)
            }

            function W(t, e, n) {
                for (var r = 0; r < n.length; r++) V(n[r], n[++r], n[++r]);
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

            function B(t) {
                return "object" != typeof t || null == t || t.__b && t.__b > 0 ? t : m(t) ? t.map(B) : b({}, t)
            }

            function U(t, e, n, o, a, s, c, u, l) {
                var f, p, h, d, g, y, b, w = n.props,
                    S = e.props,
                    T = e.type;
                if ("svg" == T ? a = "http://www.w3.org/2000/svg" : "math" == T ? a = "http://www.w3.org/1998/Math/MathML" : a || (a = "http://www.w3.org/1999/xhtml"), null != s)
                    for (f = 0; f < s.length; f++)
                        if ((g = s[f]) && "setAttribute" in g == !!T && (T ? g.localName == T : 3 == g.nodeType)) {
                            t = g, s[f] = null;
                            break
                        }
                if (null == t) {
                    if (null == T) return document.createTextNode(S);
                    t = document.createElementNS(a, T, S.is && S), u && (i.__m && i.__m(e, s), u = !1), s = null
                }
                if (null == T) w === S || u && t.data == S || (t.data = S);
                else {
                    if (s = s && r.call(t.childNodes), w = n.props || v, !u && null != s)
                        for (w = {}, f = 0; f < t.attributes.length; f++) w[(g = t.attributes[f]).name] = g.value;
                    for (f in w)
                        if (g = w[f], "children" == f);
                        else if ("dangerouslySetInnerHTML" == f) h = g;
                    else if (!(f in S)) {
                        if ("value" == f && "defaultValue" in S || "checked" == f && "defaultChecked" in S) continue;
                        F(t, f, null, g, a)
                    }
                    for (f in S) g = S[f], "children" == f ? d = g : "dangerouslySetInnerHTML" == f ? p = g : "value" == f ? y = g : "checked" == f ? b = g : u && "function" != typeof g || w[f] === g || F(t, f, g, w[f], a);
                    if (p) u || h && (p.__html == h.__html || p.__html == t.innerHTML) || (t.innerHTML = p.__html), e.__k = [];
                    else if (h && (t.innerHTML = ""), A("template" == e.type ? t.content : t, m(d) ? d : [d], e, n, o, "foreignObject" == T ? "http://www.w3.org/1999/xhtml" : a, s, c, s ? s[0] : n.__k && E(n, 0), u, l), null != s)
                        for (f = s.length; f--;) _(s[f]);
                    u || (f = "value", "progress" == T && null == y ? t.removeAttribute("value") : null != y && (y !== t[f] || "progress" == T && !y || "option" == T && y != w[f]) && F(t, f, y, w[f], a), f = "checked", null != b && b != t[f] && F(t, f, b, w[f], a))
                }
                return t
            }

            function V(t, e, n) {
                try {
                    if ("function" == typeof t) {
                        var r = "function" == typeof t.__u;
                        r && t.__u(), r && null == e || (t.__u = t(e))
                    } else t.current = e
                } catch (t) {
                    i.__e(t, n)
                }
            }

            function G(t, e, n) {
                var r, o;
                if (i.unmount && i.unmount(t), (r = t.ref) && (r.current && r.current != t.__e || V(r, null, e)), null != (r = t.__c)) {
                    if (r.componentWillUnmount) try {
                        r.componentWillUnmount()
                    } catch (t) {
                        i.__e(t, e)
                    }
                    r.base = r.__P = null
                }
                if (r = t.__k)
                    for (o = 0; o < r.length; o++) r[o] && G(r[o], e, n || "function" != typeof t.type);
                n || _(t.__e), t.__c = t.__ = t.__e = void 0
            }

            function K(t, e, n) {
                return this.constructor(t, n)
            }

            function z(t, e, n) {
                var o, a, s, c;
                e == document && (e = document.documentElement), i.__ && i.__(t, e), a = (o = "function" == typeof n) ? null : n && n.__k || e.__k, s = [], c = [], N(e, t = (!o && n || e).__k = w(O, null, [t]), a || v, v, e.namespaceURI, !o && n ? [n] : a ? null : e.firstChild ? r.call(e.childNodes) : null, s, !o && n ? n : a ? a.__e : e.firstChild, o, c), W(s, t, c)
            }

            function Y(t, e) {
                z(t, e, Y)
            }

            function q(t, e, n) {
                var i, o, a, s, c = b({}, t.props);
                for (a in t.type && t.type.defaultProps && (s = t.type.defaultProps), e) "key" == a ? i = e[a] : "ref" == a ? o = e[a] : c[a] = void 0 === e[a] && null != s ? s[a] : e[a];
                return arguments.length > 2 && (c.children = arguments.length > 3 ? r.call(arguments, 2) : n), S(t.type, c, i || t.key, o || t.ref, null)
            }

            function $(t) {
                function e(t) {
                    var n, r;
                    return this.getChildContext || (n = new Set, (r = {})[e.__c] = this, this.getChildContext = function() {
                        return r
                    }, this.componentWillUnmount = function() {
                        n = null
                    }, this.shouldComponentUpdate = function(t) {
                        this.props.value != t.value && n.forEach((function(t) {
                            t.__e = !0, k(t)
                        }))
                    }, this.sub = function(t) {
                        n.add(t);
                        var e = t.componentWillUnmount;
                        t.componentWillUnmount = function() {
                            n && n.delete(t), e && e.call(t)
                        }
                    }), t.children
                }
                return e.__c = "__cC" + d++, e.__ = t, e.Provider = e.__l = (e.Consumer = function(t, e) {
                    return t.children(e)
                }).contextType = e, e
            }
            r = g.slice, i = {
                __e: function(t, e, n, r) {
                    for (var i, o, a; e = e.__;)
                        if ((i = e.__c) && !i.__) try {
                            if ((o = i.constructor) && null != o.getDerivedStateFromError && (i.setState(o.getDerivedStateFromError(t)), a = i.__d), null != i.componentDidCatch && (i.componentDidCatch(t, r || {}), a = i.__d), a) return i.__E = i
                        } catch (e) {
                            t = e
                        }
                    throw t
                }
            }, o = 0, C.prototype.setState = function(t, e) {
                var n;
                n = null != this.__s && this.__s != this.state ? this.__s : this.__s = b({}, this.state), "function" == typeof t && (t = t(b({}, n), this.props)), t && b(n, t), null != t && this.__v && (e && this._sb.push(e), k(this))
            }, C.prototype.forceUpdate = function(t) {
                this.__v && (this.__e = !0, t && this.__h.push(t), k(this))
            }, C.prototype.render = O, a = [], c = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, u = function(t, e) {
                return t.__v.__b - e.__v.__b
            }, x.__r = 0, l = /(PointerCapture)$|Capture$/i, f = 0, p = D(!1), h = D(!0), d = 0
        },
        3: (t, e, n) => {
            n.d(e, {
                addInlineCss: () => p,
                elemAnimate: () => C,
                elemAppend: () => d,
                elemBind: () => E,
                elemFromObject: () => h,
                elemHeight: () => S,
                elemIsInside: () => O,
                elemOffset: () => s.elemOffset,
                elemRemove: () => v,
                elemStyle: () => g,
                elemUnbind: () => P,
                elemWidth: () => w
            });
            var r, i = n(4),
                o = (n(6), n(8), n(9)),
                a = n(12),
                s = n(19),
                c = (n(20), n(26)),
                u = n(16),
                l = function(t, e) {
                    if (null == t) throw new TypeError("Cannot convert undefined or null to object");
                    return Object.prototype.hasOwnProperty.call(Object(t), e)
                },
                f = (u.Wistia, (0, o.cachedDetect)()),
                p = function(t, e) {
                    var n = t || document.body || document.head,
                        r = document.createElement("style");
                    return r.id = (0, c.seqId)("wistia_", "_style"), r.setAttribute("type", "text/css"), r.className = "wistia_injected_style", n.appendChild(r, n.nextSibling), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e)), r
                },
                h = function(t) {
                    if ((0, i.isArray)(t)) {
                        for (var e = [], n = 0; n < t.length; n++) e.push(h(t[n]));
                        return e
                    }
                    var r = t.tagName || "div",
                        o = t.childNodes || [];
                    (0, i.isArray)(o) || (o = [o]);
                    var a = document.createElement(r);
                    for (var s in t)
                        if (l(t, s)) {
                            var c = t[s];
                            if ("childNodes" !== s && "tagName" !== s && "ref" !== s) {
                                var u = s.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
                                if ("style" === s)
                                    if ((0, i.isObject)(c))
                                        for (var f in c) a.style[f] = c[f];
                                    else
                                        for (var p = c.split(";"), v = 0; v < p.length; v++) {
                                            var g = p[v].split(/\s*:\s*/),
                                                y = g[0],
                                                m = g[1];
                                            y && m && (a.style[y] = m)
                                        } else if ("events" === s)
                                            for (var b in c) {
                                                var _ = c[b];
                                                E(a, b, _)
                                            } else "className" === s || "class" === s ? a.className = c : "innerHTML" === s ? a.innerHTML = c : "innerText" === s ? a.innerText = c : null != c && "function" == typeof c.toString && a.setAttribute(u, c.toString())
                            }
                        }
                    for (var w = 0; w < o.length; w++) {
                        var S = o[w];
                        if ((0, i.isObject)(S)) {
                            var T = h(S);
                            d(a, T)
                        } else {
                            var O = document.createTextNode(S.toString());
                            d(a, O)
                        }
                    }
                    return "function" == typeof t.ref && t.ref(a), a
                },
                d = function(t, e) {
                    if ((0, i.isArray)(e))
                        for (var n = 0; n < e.length; n++) d(t, e[n]);
                    else t.tagName.includes("-") ? t.shadowRoot.appendChild(e, {
                        wistiaGridCaller: !0
                    }) : t.appendChild(e, {
                        wistiaGridCaller: !0
                    })
                },
                v = function(t) {
                    var e;
                    if ((0, i.isArray)(t) || window.NodeList && t instanceof NodeList)
                        for (var n = 0; n < t.length; n++) v(t[n]);
                    else null == t || 1 !== t.nodeType && 3 !== t.nodeType || !(e = t.parentNode) || (e.removeChild(t), t = null)
                },
                g = function(t) {
                    for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                    if ((0, i.isArray)(t) || window.NodeList && t instanceof NodeList) {
                        for (var o = [], s = 0; s < t.length; s++) {
                            var c = t[s];
                            1 === c.nodeType && o.push(g.apply(void 0, [c].concat(n)))
                        }
                        return o
                    }
                    if (2 === n.length) {
                        var u = n[0],
                            l = n[1];
                        t.style[u] = l
                    } else if (1 === n.length)
                        if ("string" == typeof n[0]) {
                            var f = n[0];
                            try {
                                return t.currentStyle ? t.currentStyle[f] : window.getComputedStyle ? window.getComputedStyle(t, null).getPropertyValue(f) : null
                            } catch (t) {
                                a.wlog.notice(t)
                            }
                        } else {
                            var p = b(n[0]);
                            for (var h in p) {
                                var d = p[h];
                                t.style[h] = d
                            }
                        }
                    else a.wlog.apply(void 0, ["Unexpected args", t].concat(n))
                },
                y = {
                    borderImage: !0,
                    mixBlendMode: !0,
                    transform: !0,
                    transition: !0,
                    transitionDuration: !0
                },
                m = ["webkit", "moz", "o", "ms"],
                b = function(t) {
                    if (f.chrome) return t;
                    var e = {};
                    for (var n in t) {
                        var r = t[n];
                        if (e[n] = r, y[n])
                            for (var i = m, o = 0; o < i.length; o++) {
                                var a = i[o] + n.charAt(0).toUpperCase() + n.slice(1);
                                n[a] || (e[a] = r)
                            }
                    }
                    return e
                },
                _ = function(t, e) {
                    if (!window.getComputedStyle) return null;
                    var n = window.getComputedStyle(t, null);
                    return null == n ? null : null != e ? n[e] : n
                },
                w = function(t) {
                    if (t === window) return window.innerWidth ? window.innerWidth : document.documentElement ? document.documentElement.offsetWidth : document.body.offsetWidth;
                    if (t === document) {
                        var e = document.body,
                            n = document.documentElement;
                        return Math.max(e.scrollWidth, e.offsetWidth, n.clientWidth, n.scrollWidth, n.offsetWidth)
                    }
                    var r;
                    return (r = _(t, "width")) && null != r ? parseFloat(r) : t.currentStyle ? t.offsetWidth : -1
                },
                S = function(t) {
                    if (t === window) return window.innerHeight ? window.innerHeight : document.documentElement ? document.documentElement.offsetHeight : document.body.offsetHeight;
                    if (t === document) {
                        var e = document.body,
                            n = document.documentElement;
                        return Math.max(e.scrollHeight, e.offsetHeight, n.clientHeight, n.scrollHeight, n.offsetHeight)
                    }
                    var r;
                    return (r = _(t, "height")) && null != r ? parseFloat(r) : t.currentStyle ? t.offsetHeight : -1
                },
                T = function(t) {
                    for (var e = t, n = []; e = e.parentNode;) n.push(e);
                    return n
                },
                O = function(t, e) {
                    return t === e || function(t, e) {
                        for (var n = T(t), r = 0; r < n.length; r++)
                            if (n[r] === e) return !0;
                        return !1
                    }(t, e)
                },
                C = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    n = (0, i.merge)({
                        time: 400,
                        easing: "ease"
                    }, n);
                    var r = function(t, e, n) {
                        var r = [];
                        for (var i in t) r.push("".concat(i, " ").concat(e, "ms ").concat(n));
                        return r.join(",")
                    }(e, n.time, n.easing);
                    g(t, {
                        transition: r
                    }), j((function() {
                        g(t, e), setTimeout((function() {
                            g(t, {
                                transition: ""
                            }), "function" == typeof n.callback && n.callback()
                        }), n.time)
                    }))
                },
                E = function(t, e, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        i = function(r) {
                            (r = r || window.event).pageX || r.pageY || !r.clientX && !r.clientY || (r.pageX = r.clientX + A(), r.pageY = r.clientY + x()), r.preventDefault || (r.preventDefault = function() {
                                r.returnValue = !1
                            }), r.stopPropagation || (r.stopPropagation = function() {
                                r.cancelBubble = !0
                            }), null == r.which && (r.which = null != r.charCode ? r.charCode : r.keyCode), null == r.which && null != r.button && (1 & r.button ? r.which = 1 : 2 & r.button ? r.which = 3 : 4 & r.button ? r.which = 2 : r.which = 0), r.target || r.srcElement && (r.target = r.srcElement), r.target && 3 === r.target.nodeType && (r.target = r.target.parentNode);
                            for (var i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++) o[a - 1] = arguments[a];
                            var s = n.apply(r.target, [r].concat(o));
                            return s === P && P(t, e, n), s
                        };
                    u.Wistia._elemBind = u.Wistia._elemBind || {};
                    var o = k(t, e, n);
                    return u.Wistia._elemBind[o] = i, i.elem = t, i.event = e, t.addEventListener(e, i, r),
                        function() {
                            P(t, e, n, r)
                        }
                },
                P = function(t, e, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    if (null != t && null != t._wistiaElemId && null != n && n._wistiaBindId) {
                        var i = k(t, e, n),
                            o = u.Wistia._elemBind[i];
                        return o && (t.removeEventListener(e, o, r), o.elem = null, o.event = null), delete u.Wistia._elemBind[i]
                    }
                },
                k = function(t, e, n) {
                    return t._wistiaElemId = t._wistiaElemId || (0, c.seqId)("wistia_elem_"), n._wistiaBindId = n._wistiaBindId || (0, c.seqId)("wistia_bind_"), "".concat(t._wistiaElemId, ".").concat(e, ".").concat(n._wistiaBindId)
                },
                x = function(t) {
                    var e = document.body,
                        n = document.documentElement;
                    if (null == t) return n && n.scrollTop || e && e.scrollTop || 0;
                    e && (e.scrollTop = t), n && (n.scrollTop = t)
                },
                A = function(t) {
                    var e = document.body,
                        n = document.documentElement;
                    if (null == t) return n && n.scrollLeft || e && e.scrollLeft || 0;
                    e && (e.scrollLeft = t), n && (n.scrollLeft = t)
                },
                j = function(t) {
                    return (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(t) {
                        return setTimeout(t, 1e3 / 60)
                    })(t)
                };
            ["auxclick", "click", "contextmenu", "dblclick", "focus", "keydown", "keypress", "keyup", "mousedown", "mouseup", "reset", "submit", "touchend", "touchstart"].forEach((function(t) {
                E(document, t, (function(t) {
                    r = t, Date.now(), setTimeout((function() {
                        r === t && (r = void 0)
                    }), 0)
                }), !f.passiveSupported || {
                    capture: !0,
                    passive: !0
                })
            }))
        },
        4: (t, e, n) => {
            n.d(e, {
                cast: () => v,
                clone: () => u,
                eachLeaf: () => x,
                equalsDeep: () => P,
                getDeep: () => l,
                isArray: () => b,
                isEmpty: () => C,
                isObject: () => w,
                merge: () => o,
                setAndPreserveUndefined: () => p,
                setDeep: () => f,
                unsetDeep: () => d
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
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s,
                        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : c;
                    if (b(e)) {
                        b(t) || (t = []);
                        for (var o = 0; o < e.length; o++) {
                            var u = e[o];
                            null == t[o] && null != u && (b(u) ? t[o] = [] : w(u) && (t[o] = {}));
                            var l = a(t[o], u, n);
                            i(e, o, l) ? delete t[o] : t[o] = l
                        }
                        return n(t)
                    }
                    if (w(e)) {
                        for (var f in e)
                            if (r(e, f) && (r(t, f) || null == t[f])) {
                                var p = e[f];
                                b(p) ? (b(t[f]) || (t[f] = []), a(t[f], p, n), t[f] = n(t[f])) : w(p) ? (w(t[f]) || (t[f] = {}), a(t[f], p, n), t[f] = n(t[f])) : null == t ? (t = {}, i(e, f, p) || (t[f] = n(p))) : i(e, f, p) ? delete t[f] : t[f] = n(p)
                            }
                        return n(t)
                    }
                    return n(e)
                },
                s = function(t) {
                    return t
                },
                c = function(t, e, n) {
                    return null == n
                },
                u = function(t, e) {
                    return b(t) ? a([], t, e) : a({}, t, e)
                },
                l = function(t, e, n) {
                    e = "string" == typeof e ? e.split(".") : i.call(e);
                    for (var o, a = t; null != t && e.length;) {
                        var s = e.shift();
                        void 0 !== t[s] && (w(t[s]) || b(t[s])) || !n || (0 === s ? (t = a[o] = [])[s] = {} : t[s] = {}), a = t, o = s, t = r(t, s) ? t[s] : void 0
                    }
                    return t
                },
                f = function(t, e, n) {
                    return h(t, e, n, !0)
                },
                p = function(t, e, n) {
                    return h(t, e, n, !1)
                },
                h = function(t, e, n) {
                    var r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                        o = (e = "string" == typeof e ? e.split(".") : i.call(e)).pop();
                    null != (t = l(t, e, !0)) && (w(t) || b(t)) && null != o && (r && null == n ? delete t[o] : t[o] = n)
                },
                d = function(t, e) {
                    return f(t, e)
                },
                v = function(t) {
                    return null == t ? t : w(t) || b(t) ? y(t) : g("".concat(t), t)
                },
                g = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t;
                    return /^-?[1-9]\d*?$/.test(t) ? parseInt(t, 10) : "0" === t || "-0" === t ? 0 : /^-?\d*\.\d+$/.test(t) ? parseFloat(t) : !!/^true$/i.test(t) || !/^false$/i.test(t) && e
                },
                y = function(t) {
                    return a(t, t, (function(t) {
                        return "string" == typeof t ? g(t) : t
                    }), (function() {
                        return !1
                    }))
                },
                m = /^\s*function Array()/,
                b = function(t) {
                    return null != t && t.push && m.test(t.constructor)
                },
                _ = /^\s*function Object()/,
                w = function(t) {
                    return null != t && "object" == typeof t && _.test(t.constructor)
                },
                S = /^\s*function RegExp()/,
                T = /^string|number|boolean|function$/i,
                O = function(t) {
                    return null != t && (T.test(typeof t) || function(t) {
                        return null != t && S.test(t.constructor)
                    }(t))
                },
                C = function(t) {
                    return null == t || (!(!b(t) || t.length) || !!w(t) && !Object.keys(t).length)
                },
                E = function(t, e) {
                    if (t === e) return !0;
                    if (null != t && null == e || null == t && null != e) return !1;
                    var n = !0;
                    return x(t, (function(t, r) {
                        t !== l(e, r) && (n = !1)
                    })), n
                },
                P = function(t, e) {
                    return E(t, e) && E(e, t)
                },
                k = function(t, e, n, o, a) {
                    if (null == n && (n = []), O(t)) e(t, n, o, a);
                    else if (w(t) || b(t)) {
                        for (var s in e(t, n, o, a), t)
                            if (r(t, s)) {
                                var c = i.call(n);
                                c.push(s), k(t[s], e, c, t, s)
                            }
                    } else e(t, n, o, a)
                },
                x = function(t, e) {
                    k(t, (function(t, n, r, i) {
                        b(t) || w(t) || e(t, n, r, i)
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
                    s = function() {
                        (new Date).getTime() - a > r ? "function" == typeof i && i() : t() ? e() : (clearTimeout(o), o = setTimeout(s, n))
                    };
                o = setTimeout(s, 1)
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
                cachedDetect: () => H,
                detectIsMobile: () => B
            });
            var r, i = n(10),
                o = n(11),
                a = navigator.userAgent,
                s = null,
                c = /(webkit)[ /]([^\s]+)/i,
                u = /OPR\/([^\s]+)/i,
                l = /(edge)\/(\d+(?:\.\d+)?)/i,
                f = /(mozilla)(?:.*? rv:([^\s)]+))?/i,
                p = /(android) ([^;]+)/i,
                h = /(iphone)/i,
                d = /(Windows Phone OS (\d+(?:\.\d+)?))/,
                v = /OS (\d+)_(\d+)/i,
                g = /(firefox)/i,
                y = /Mobile VR/i,
                m = /Version\/([^\s]+)/i,
                b = function() {
                    return (w()[1] || "webkit").toLowerCase()
                },
                _ = function() {
                    return w()[2]
                },
                w = function() {
                    var t;
                    return (t = a.match(l)) || (t = a.match(c)) || (t = a.match(u)) ? t : t ? (null != document.documentMode && (t[2] = document.documentMode), t) : (t = a.match(f)) || []
                },
                S = function() {
                    var t = a.match(p);
                    return null != t && {
                        version: t[2]
                    }
                },
                T = function() {
                    return h.test(a)
                },
                O = function() {
                    return A() > 0 || S() || E()
                },
                C = function() {
                    try {
                        var t = matchMedia("(hover:hover)");
                        if ("not all" !== t.media) return t.matches
                    } catch (t) {}
                    return !O()
                },
                E = function() {
                    return /Macintosh/i.test(navigator.userAgent) && navigator.maxTouchPoints && navigator.maxTouchPoints > 1
                },
                P = function() {
                    return c.test(a) && !/chrome/i.test(a) && !E() && !T()
                },
                k = function() {
                    return !(!/Chrome/.test(a) || !/Google Inc/.test(navigator.vendor)) && {
                        version: x()
                    }
                },
                x = function() {
                    var t = a.match(/\bChrome\/([^\s]+)/);
                    return t && t[1]
                },
                A = function() {
                    var t = a.match(v),
                        e = a.match(m);
                    return null != t ? parseFloat("".concat(t[1], ".").concat(t[2])) : null != e && e[1] && E() ? parseFloat(e[1]) : 0
                },
                j = function() {
                    return l.test(a)
                },
                L = function() {
                    return g.test(a)
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
                I = function() {
                    try {
                        return "localStorage" in i.root && null != i.root.localStorage
                    } catch (t) {
                        return !1
                    }
                },
                R = ["WebKit", "Moz", "O", "Ms", ""],
                F = function() {
                    for (var t = 0; t < R.length; t++) {
                        var e = "".concat(R[t], "MutationObserver");
                        if (i.root[e]) return e
                    }
                    return null
                },
                D = function() {
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
                        e = L(),
                        n = j(),
                        r = u.test(a),
                        i = t && _() >= 32,
                        o = t && _() >= 75 && S(),
                        s = e && _() >= 65,
                        c = e && _() >= 67 && S(),
                        l = n && _() >= 18,
                        f = r && _() >= 19;
                    return i || o || s || c || l || f
                },
                H = function() {
                    return s || (s = W())
                },
                W = function() {
                    var t, e, n, r, s, c, u, l, f, p, h, v, g, m = {
                        browser: {
                            version: _()
                        },
                        edge: j(),
                        firefox: L(),
                        gearvr: y.test(a),
                        hdr: !(null === (v = (g = window).matchMedia) || void 0 === v || !v.call(g, "(dynamic-range: high)").matches) || !!(screen.colorDepth && screen.colorDepth >= 30),
                        hdrCodecs: {
                            hevc: null !== (n = null === (r = window.MediaSource) || void 0 === r || null === (s = r.isTypeSupported) || void 0 === s ? void 0 : s.call(r, 'video/mp4; codecs="hvc1.2.4.L153.B0"')) && void 0 !== n && n,
                            av1: null !== (c = null === (u = window.MediaSource) || void 0 === u || null === (l = u.isTypeSupported) || void 0 === l ? void 0 : l.call(u, 'video/mp4; codecs="av01.0.08M.10.0.110.09.16.09"')) && void 0 !== c && c,
                            vp92: null !== (f = null === (p = window.MediaSource) || void 0 === p || null === (h = p.isTypeSupported) || void 0 === h ? void 0 : h.call(p, 'video/mp4; codecs="vp09.02.10.10.01.09.16.09"')) && void 0 !== f && f
                        },
                        android: S(),
                        oldandroid: S() && parseFloat(S().version) < 4.1,
                        iphone: T(),
                        ipad: E(),
                        safari: P(),
                        chrome: k(),
                        winphone: {
                            version: d.test(a)[2]
                        },
                        ios: {
                            version: A()
                        },
                        windows: /win/i.test(navigator.platform),
                        mac: /mac/i.test(navigator.platform),
                        retina: null != i.root.devicePixelRatio && i.root.devicePixelRatio > 1,
                        hoverIsNatural: C(),
                        touchScreen: O(),
                        video: M(),
                        managedMediaSource: "ManagedMediaSource" in window && "function" == typeof(null === (e = window.ManagedMediaSource) || void 0 === e ? void 0 : e.isTypeSupported),
                        mediaSource: i.root.MediaSource && i.root.MediaSource.isTypeSupported("".concat('video/mp4; codecs="avc1.42E01E', ', mp4a.40.2"')),
                        nativeHls: (T() || E() || P()) && M().nativeHls,
                        localstorage: I(),
                        fullscreenEnabled: document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled || document.msFullscreenEnabled,
                        vulcanV2Support: (t = /webkit|mozilla|edge/.test(b()), !!(T() || E() || S()) || Boolean(t && M().h264 && Object.defineProperties)),
                        mutationObserver: F(),
                        callingPlayRequiresEventContext: A() > 0 || S() || P(),
                        passiveSupported: D(),
                        webp: N(),
                        performanceMeasure: (0, o.hasPerformanceMeasureSupport)()
                    };
                    return m.browser[b()] = !0, m
                },
                B = function() {
                    var t = S(),
                        e = E(),
                        n = T();
                    return t || e || n
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
                wlog: () => g
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
            var s = {
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
                c = function() {},
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
                l = u.prototype;
            l.reset = function() {
                this.ctx.level = 0, this.ctx.grep = null, this.ctx.grepv = null, this.ctx.first1000LogLines = [], this.ctx.last1000LogLines = [], this.ctx.initializedAt = (new Date).getTime()
            }, l.setLevel = function(t) {
                var e = this.logFunc(3);
                null != s[t] ? (this.ctx.level = s[t], e('Log level set to "'.concat(t, '" (').concat(s[t], ")"))) : e('Unknown log level "'.concat(t, '"'))
            }, l.setGrep = function(t) {
                this.ctx.grep = t
            }, l.setGrepv = function(t) {
                this.ctx.grepv = t
            }, l.first1000LogLines = function() {
                return this.ctx.first1000LogLines
            }, l.last1000LogLines = function() {
                return this.ctx.last1000LogLines
            }, l.matchedGrep = function(t) {
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
                        s = !this.ctx.grepv || !o.match(this.ctx.grepv);
                    e = a && s
                } else e = !0;
                return e
            }, l.now = function() {
                return "undefined" != typeof performance && "function" == typeof performance.now ? performance.now().toFixed(3) : Date.now ? Date.now() - this.ctx.initializedAt : (new Date).getTime() - this.ctx.initializedAt
            }, l.messagesToLogLine = function(t, e, n) {
                var r, i = [t, e];
                i = i.concat(n);
                try {
                    (r = i.join(" ") || "").length > 200 && (r = r.slice(0, 200))
                } catch (t) {
                    r = "could not serialize"
                }
                return r
            }, l.persistLine = function(t) {
                this.ctx.first1000LogLines.length < 1e3 ? this.ctx.first1000LogLines.push(t) : (this.ctx.last1000LogLines.length >= 1e3 && this.ctx.last1000LogLines.shift(), this.ctx.last1000LogLines.push(t))
            }, l.log = function(t, e) {
                var n, i = t <= this.ctx.level,
                    a = t < 4,
                    s = (i || a) && this.matchedGrep(e);
                if (0 === t && (0, r.globalTrigger)("problem", {
                        type: "error-logged",
                        data: {
                            messages: e
                        }
                    }), s && (i || a) && (n = this.now()), a && s) {
                    var c = this.messagesToLogLine(t, n, e);
                    this.persistLine(c)
                }
                if (i && s) {
                    var u, l = this.logFunc(t);
                    1 === e.length && (u = e[0]) instanceof Error ? (l(u.message), u.stack && l(u.stack)) : l.apply(void 0, o(e))
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
                h = function() {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    console.info.apply(console, e)
                },
                d = function() {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    console.debug.apply(console, e)
                },
                v = function(t) {
                    console.log.apply(console, t)
                };
            l.logFunc = function(t) {
                return null == t && (t = this.level), console ? (0 === t ? e = f : 1 === t ? e = p : 3 === t ? e = h : 4 === t && (e = d), e || (e = v), "function" != typeof e && (this.noConsoleLog = !0, e = c), e) : c;
                var e
            }, l.maybePrefix = function(t, e) {
                if (t) {
                    if ("function" == typeof t) try {
                        t = t()
                    } catch (e) {
                        t = 'prefix err "'.concat(e.message, '"')
                    }
                    return t instanceof Array ? t.concat(e) : [t].concat(e)
                }
                return e
            }, l.getPrefixedFunctions = function(t) {
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
            var g = new u(i.Wistia.wlogCtx)
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
                        var a = s(n);
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
                        var a = s(n);
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
                    var c = this.embedElement || this.container;
                    if (Object.keys(o.convertedEventNames).includes(t) && c) {
                        var u = s(c);
                        return void 0 === i.Wistia.EventShepherdManager[u] && (i.Wistia.EventShepherdManager[u] = new o.EventShepherd(c)), i.Wistia.EventShepherdManager[u].addListener(t, c, e),
                            function() {
                                i.Wistia.EventShepherdManager[u].removeListener(t, c, e)
                            }
                    }
                    return r.bind.call(this, t, e)
                },
                off: function(t, e) {
                    if ("crosstime" === t && this.crossTime) return this.crossTime.removeBinding(arguments[1], arguments[2]);
                    if ("betweentimes" === t && this.betweenTimes) return this.betweenTimes.removeBinding(arguments[1], arguments[2], arguments[3]);
                    var n = this.embedElement || this.container;
                    if (Object.keys(o.convertedEventNames).includes(t) && n) {
                        var a = s(n);
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
                s = function(t) {
                    return null != t && t.mediaId ? t.mediaId : null != t && t.id ? t.id : void 0
                }
        },
        15: (t, e, n) => {
            n.d(e, {
                bind: () => c,
                bindNamed: () => d,
                bindify: () => m,
                trigger: () => f,
                unbind: () => u,
                unbindAllInNamespace: () => g,
                unbindNamed: () => v
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
            var s = Array.prototype.slice,
                c = function(t, e) {
                    var n = this;
                    return n._bindings || (n._bindings = {}), n._bindings[t] || (n._bindings[t] = []), n._bindings[t].push(e),
                        function() {
                            n.unbind(t, e)
                        }
                },
                u = function(t, e) {
                    if (!this._bindings) return this;
                    if (!this._bindings[t]) return this;
                    for (var n = [], r = 0; r < this._bindings[t].length; r++) {
                        var i = this._bindings[t][r];
                        i !== e && n.push(i)
                    }
                    this._bindings[t] = n
                },
                l = function(t, e) {
                    return this.unbind(t, e), this.bind(t, e), {
                        event: t,
                        fn: e
                    }
                },
                f = function(t) {
                    for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                    return this._bindings && null != this._bindings.all && p.apply(this, ["all", t].concat(n)), p.apply(this, [t].concat(n))
                },
                p = function(t) {
                    if (!this._bindings) return this;
                    if (!this._bindings[t]) return this;
                    for (var e, n = s.call(arguments, 1), i = o(this._bindings[t]), a = 0; a < i.length; a++) {
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
                            var l = e[u];
                            this.unbind(l.event, l.fn)
                        }
                    return this
                },
                h = function(t, e) {
                    null == t._namedBindings && (t._namedBindings = {}), null == t._namedBindings[e] && (t._namedBindings[e] = {})
                },
                d = function(t, e, n, r) {
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
                v = function(t, e) {
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
                    return delete o[t][e], y(o[t]) && delete o[t], this
                },
                g = function(t) {
                    var e = this._namedBindings && this._namedBindings[t];
                    if (null == e) return this;
                    for (var n in e) i(e, n) && this.unbindNamed(t, n)
                },
                y = function(t) {
                    for (var e in t)
                        if (i(t, e)) return !1;
                    return !0
                },
                m = function(t) {
                    return t.bind = c, t.unbind = u, t.on = c, t.off = u, t.rebind = l, t.trigger = f, t.bindNamed = d, t.unbindNamed = v, t.unbindAllInNamespace = g, t
                };
            m(function() {}.prototype)
        },
        16: (t, e, n) => {
            n.d(e, {
                Wistia: () => H
            });
            var r, i, o, a, s, c, u, l, f, p, h, d, v, g, y, m, b, _, w, S, T, O, C, E, P, k, x, A, j, L, M, I, R, F, D, N = n(10);
            null !== (r = N.root.Wistia) && void 0 !== r || (N.root.Wistia = {}), null !== (o = (i = N.root.Wistia)._destructors) && void 0 !== o || (i._destructors = {}), null !== (s = (a = N.root.Wistia)._initializers) && void 0 !== s || (a._initializers = {}), null !== (u = (c = N.root.Wistia)._remoteData) && void 0 !== u || (c._remoteData = new Map), null !== (f = (l = N.root.Wistia).api) && void 0 !== f || (l.api = function() {
                return console.error("Accessed Wistia.api() before it was initialized"), null
            }), null !== (h = (p = N.root.Wistia).defineControl) && void 0 !== h || (p.defineControl = function() {
                return console.error("Accessed Wistia.defineControl() before it was initialized"), null
            }), null !== (v = (d = N.root.Wistia).EventShepherdManager) && void 0 !== v || (d.EventShepherdManager = {}), null !== (y = (g = N.root.Wistia).mixin) && void 0 !== y || (g.mixin = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                Object.keys(e).forEach((function(n) {
                    (function(t, e) {
                        if (null == t) throw new TypeError("Cannot convert undefined or null to object");
                        return Object.prototype.hasOwnProperty.call(Object(t), e)
                    })(e, n) && (t[n] = e[n])
                }))
            }), null !== (b = (m = N.root.Wistia).playlistMethods) && void 0 !== b || (m.playlistMethods = new Map), null !== (w = (_ = N.root.Wistia).PublicApi) && void 0 !== w || (_.PublicApi = null), null !== (T = (S = N.root.Wistia).uncacheMedia) && void 0 !== T || (S.uncacheMedia = function() {
                return console.error("Accessed Wistia.uncacheMedia() before it was initialized"), null
            }), null !== (C = (O = N.root.Wistia).VisitorKey) && void 0 !== C || (O.VisitorKey = null), null !== (P = (E = N.root.Wistia).visitorKey) && void 0 !== P || (E.visitorKey = null), null !== (x = (k = N.root.Wistia).wistia) && void 0 !== x || (k.wistia = void 0), null !== (j = (A = N.root.Wistia)._liveStreamEventDataPromises) && void 0 !== j || (A._liveStreamEventDataPromises = {}), null !== (M = (L = N.root.Wistia)._mediaDataPromises) && void 0 !== M || (L._mediaDataPromises = {}), null !== (R = (I = N.root.Wistia)._liveStreamPollingPromises) && void 0 !== R || (I._liveStreamPollingPromises = {}), null !== (D = (F = N.root.Wistia).first) && void 0 !== D || (F.first = function() {
                var t;
                return null !== (t = N.root.Wistia.api()) && void 0 !== t ? t : document.querySelector("wistia-player")
            });
            var H = N.root.Wistia
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
                EventShepherd: () => s,
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
                s = function() {
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
                            var r, i, s, c = null !== (r = o[t]) && void 0 !== r ? r : t;
                            null !== (s = (i = this.convertedEventsMap)[c]) && void 0 !== s || (i[c] = []);
                            var u = function(e) {
                                if (a[t]) {
                                    var r = a[t](e.detail);
                                    n(r)
                                } else n()
                            };
                            this.convertedEventsMap[c].push({
                                givenCallback: n,
                                eventListenerCallback: u
                            }), e.addEventListener(c, u)
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
                                s = [];
                            n ? (e.removeEventListener(a, n), this.convertedEventsMap[a] && (this.convertedEventsMap[a].forEach((function(t, r) {
                                t.givenCallback === n && (s.push(r), e.removeEventListener(a, t.eventListenerCallback))
                            })), s.forEach((function(t) {
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
                        s = document.documentElement,
                        c = t.getBoundingClientRect(),
                        u = s.clientTop || r.clientTop || 0,
                        l = s.clientLeft || r.clientLeft || 0;
                    e = o && null != o.pageYOffset ? o.pageYOffset : i() && s && null != s.scrollTop ? s.scrollTop : r.scrollTop, n = o && null != o.pageXOffset ? o.pageXOffset : i() && s && null != s.scrollLeft ? s.scrollLeft : r.scrollLeft;
                    var f = a(t);
                    return {
                        height: c.height * f,
                        top: c.top * f + e - u,
                        left: c.left * f + n - l,
                        width: c.width * f,
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
                runScripts: () => l
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

            function s(t, e, n) {
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
            var c = function(t) {
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
                        !0 === i.once && (e = c(t)) && (n = !0), i.once && n ? e.readyState && !/loaded|complete/.test(e.readyState) || setTimeout((function() {
                            a()
                        }), 1) : (0, o.runScript)(t, r).then(a).catch((function(t) {
                            a(t), setTimeout((function() {
                                console.error(t)
                            }), 1)
                        }))
                    }))
                },
                l = function() {
                    for (var t, e = arguments.length, n = new Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                    t = n[0] instanceof Array ? n[0] : n, t = f(t);
                    var o = [],
                        c = [],
                        l = [];
                    return t.forEach((function(t) {
                        var e = function(t) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var n = null != arguments[e] ? arguments[e] : {};
                                    e % 2 ? a(Object(n), !0).forEach((function(e) {
                                        s(t, e, n[e])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(e) {
                                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                                    }))
                                }
                                return t
                            }({}, t),
                            n = new Promise((function(t) {
                                e.resolve = t
                            }));
                        e.promise = n, l.push(e.promise), t.async ? o.push(e) : c.push(e)
                    })), c.reduce((function(t, e) {
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
                    }), 1), Promise.all(l)
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
                            s = !1,
                            c = function() {
                                o.onerror = o.onreadystatechange = o.onload = null, clearTimeout(a), clearTimeout(l), a = setTimeout((function() {
                                    o && o.parentNode && o.parentNode.removeChild(o)
                                }), 500)
                            },
                            u = function() {
                                var t = o.readyState;
                                s || t && !/loaded|complete/.test(t) || (s = !0, setTimeout((function() {
                                    r(), c()
                                }), 1))
                            },
                            l = setTimeout((function() {
                                s = !0, c(), i(new Error("timeout"))
                            }), e);
                        o.onerror = function(t) {
                            s = !0, c(), i(t)
                        }, o.onreadystatechange = u, o.onload = u, (document.body || document.head).appendChild(o)
                    }))
                }
        },
        23: (t, e, n) => {
            n.d(e, {
                CURRENT_SHA: () => c,
                TAGGED_VERSION: () => s,
                cdnFastWistiaNetHost: () => f,
                eV1HostWithPort: () => d,
                eV1Protocol: () => v,
                mediaDataHost: () => g,
                metricsHost: () => y
            });
            var r = n(10),
                i = n(24),
                o = n(25),
                a = ((0, o.appHostname)("app"), (0, o.appHostname)("fast-protected"), (0, o.appHostname)("fast")),
                s = "",
                c = "ad736cf5a6bd659fb07845957385f4d8d6dda1e8",
                u = ("undefined" != typeof window && r.root === window && r.root.location && r.root.location.protocol, function() {
                    var t = (0, o.getCloudDevHostname)("fast");
                    return t || null
                }),
                l = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
                    if (t) return t;
                    var e = u();
                    return e || a
                },
                f = function() {
                    var t = u();
                    if (t) return t;
                    return "fast.".concat("wistia.net")
                },
                p = function() {
                    for (var t = document.getElementsByTagName("script"), e = 0; e < t.length; e++) {
                        var n = t[e];
                        if (n.src) {
                            var r = new i.Url(n.src),
                                o = /\/assets\/external\/E-v1?\.js$/.test(r.rawPath),
                                a = r.host === l() || r.host === f() || "fast-canary.wistia.net" === r.host,
                                s = "https:" === location.protocol && "https:" === r.protocol,
                                c = "" === r.protocol || null == r.protocol,
                                u = s || c || "http:" === location.protocol,
                                p = !n.readyState || /loaded|complete/.test(n.readyState);
                            if (o && a && u && p) return r
                        }
                    }
                    return new i.Url("".concat((0, i.proto)(), "//").concat(f(), "/E-v1.js"))
                }(),
                h = function() {
                    return p.host
                },
                d = function() {
                    return p.port ? "".concat(h(), ":").concat(p.port) : h()
                },
                v = function() {
                    return p.protocol
                },
                g = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return t.embedHost ? _(t.embedHost) : d()
                },
                y = function() {
                    return "pipedream.".concat("wistia.com")
                },
                m = [].concat(["wistia.net", "wistia.com"], ["wistia.mx", "wistia.dev", "wistia.tech", "wistia.am", "wistia.se", "wistia.io", "wistia.st"]),
                b = new RegExp("(".concat(m.map((function(t) {
                    return "\\.".concat(t.replace(".", "\\."))
                })).join("|"), ")$")),
                _ = function(t) {
                    return t && b.test(t) ? t : d()
                }
        },
        24: (t, e, n) => {
            n.d(e, {
                Url: () => l,
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
                s = function(t) {
                    for (var e = t[0], n = 1; n < t.length; n++) e += "[".concat(t[n], "]");
                    return e
                },
                c = function(t) {
                    return t.match(/([\w\-_]+)/g)
                },
                u = ["protocol", "host", "port", "params", "path"],
                l = function(t) {
                    var e = this;
                    e.params = {}, e.path = [], e.host = "", "object" == typeof t ? e.fromOptions(t) : t && e.fromRaw(t)
                },
                f = l.prototype;
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
                            var t = n[s].split("="),
                                o = t[0],
                                u = t[1];
                            try {
                                o = c(decodeURIComponent(o)) || ""
                            } catch (t) {
                                setTimeout((function() {
                                    i.wlog.notice(t)
                                }), 50), o = ""
                            }(0, r.cast)(o);
                            var l = (0, r.getDeep)(e, o);
                            if (null != l)
                                if ((0, r.isArray)(l)) l.push(a(u));
                                else {
                                    var f = [l];
                                    f.push(a(u)), (0, r.setAndPreserveUndefined)(e, o, f)
                                }
                            else(0, r.setAndPreserveUndefined)(e, o, a(u))
                        }, s = 0; s < n.length; s++) o();
                    return e
                }(this.rawParams)), (e = t.match(/#(.*)$/)) && (this.anchor = e[1]), this
            }, f.clone = function() {
                return new l({
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
                    null != t ? i.push("".concat(encodeURIComponent(s(e)), "=").concat(encodeURIComponent(t))) : i.push(encodeURIComponent(s(e)))
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
            }, l.create = function(t) {
                return new l(t)
            };
            l.create;
            l.parse = function(t) {
                return new l(t)
            };
            l.parse
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
        28: (t, e, n) => {
            n.d(e, {
                interFontFamily: () => r
            });
            var r = "WistiaPlayerInter, Helvetica, Sans-Serif"
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
                    s = void 0 === a ? {} : a,
                    c = t.ariaHidden,
                    u = void 0 !== c && c,
                    l = t.fillColor,
                    f = void 0 === l ? "#ffffff" : l;
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
                    }, s)
                }
            }
        },
        34: (t, e, n) => {
            n.d(e, {
                Color: () => p
            });
            var r = n(35);

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
            var a = /^#?([0-9a-f]{3,4}|[0-9a-f]{6,8})$/i,
                s = /^rgba?\((\d{1,3}(?:\.\d+)?%?),\s*(\d{1,3}(?:\.\d+)?%?),\s*(\d{1,3}(?:\.\d+)?%?)(?:,\s*([01]?\.?\d*))?\)$/,
                c = /^\d+(\.\d+)*%$/,
                u = /([0-9a-f])/gi,
                l = function(t) {
                    return c.test(t) ? 2.55 * parseFloat(t) : t
                },
                f = function(t, e, n) {
                    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
                },
                p = function() {
                    function t(e) {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), e instanceof t ? (this.r = e.r, this.g = e.g, this.b = e.b, this.a = e.a) : e ? this.parse(e) : (this.r = this.g = this.b = 0, this.a = 1)
                    }
                    return e = t, (n = [{
                        key: "parse",
                        value: function(t) {
                            var e;
                            if (Array.isArray(t)) this.r = t[0], this.g = t[1], this.b = t[2], this.a = null !== (e = t[3]) && void 0 !== e ? e : 1;
                            else if (a.test(t)) {
                                var n = (t = String(t)).replace(/^#/, "");
                                3 !== n.length && 4 !== n.length || (n = n.replace(u, "$1$1")), this.r = parseInt(n.substr(0, 2), 16), this.g = parseInt(n.substr(2, 2), 16), this.b = parseInt(n.substr(4, 2), 16), 8 === n.length ? this.a = parseInt(n.substr(6, 2), 16) / 255 : this.a = 1
                            } else if (s.test(t)) {
                                var r = (t = String(t)).match(s);
                                this.r = parseFloat(l(r[1])), this.g = parseFloat(l(r[2])), this.b = parseFloat(l(r[3])), r[4] ? this.a = parseFloat(r[4]) : this.a = 1
                            }
                            return this
                        }
                    }, {
                        key: "clone",
                        value: function() {
                            return new t(this)
                        }
                    }, {
                        key: "_hslFromRgb",
                        value: function() {
                            var t = (0, r.rgbToHsl)([this.r, this.g, this.b]),
                                e = t.hue,
                                n = t.saturation,
                                i = t.lightness;
                            return this._h = e, this._s = n, this._l = i, this
                        }
                    }, {
                        key: "_rgbFromHsl",
                        value: function() {
                            var t = this._h / 360,
                                e = this._s / 100,
                                n = this._l / 100,
                                r = n < .5 ? n * (1 + e) : n + e - n * e,
                                i = 2 * n - r;
                            return this.r = 255 * f(i, r, t + 1 / 3), this.g = 255 * f(i, r, t), this.b = 255 * f(i, r, t - 1 / 3), this
                        }
                    }, {
                        key: "blendChannel",
                        value: function(t, e, n, r) {
                            return r ? (this[t] = Math.sqrt(Math.pow(this[t], 2) * (1 - n) + Math.pow(e, 2) * n), this) : (this[t] = n * e + (1 - n) * this[t], this)
                        }
                    }, {
                        key: "blend",
                        value: function(e, n, r) {
                            return e = new t(e), this.blendChannel("r", e.r, n, r), this.blendChannel("g", e.g, n, r), this.blendChannel("b", e.b, n, r), this
                        }
                    }, {
                        key: "getContrastRatio",
                        value: function(e) {
                            return Number.parseFloat((0, r.getContrast)(this.toHexWithHash(), new t(e).toHexWithHash()).toFixed(1))
                        }
                    }, {
                        key: "hasAccessibleContrast",
                        value: function(t, e) {
                            return this.getContrastRatio(t) >= r.colorContrastRatiosByShape[e]
                        }
                    }, {
                        key: "hue",
                        value: function() {
                            return this._hslFromRgb(), this._h
                        }
                    }, {
                        key: "lightenChannel",
                        value: function(t, e) {
                            return this[t] += e, this[t] < 0 ? this[t] = 0 : this[t] > 255 && (this[t] = 255), this
                        }
                    }, {
                        key: "lighten",
                        value: function(t) {
                            return this.looksLikePercent(t) ? this.lightness(this.lightness() + parseFloat(t)) : (this.lightenChannel("r", t), this.lightenChannel("g", t), this.lightenChannel("b", t)), this
                        }
                    }, {
                        key: "darken",
                        value: function(t) {
                            return "string" == typeof t ? this.lighten("-".concat(t)) : this.lighten(-t)
                        }
                    }, {
                        key: "looksLikePercent",
                        value: function(t) {
                            return /^-?\d+(\.\d+)?%$/.test(t)
                        }
                    }, {
                        key: "lightness",
                        value: function(t) {
                            return this._hslFromRgb(), null != t ? (this._l = Math.max(0, Math.min(100, t)), this._rgbFromHsl(), this) : this._l
                        }
                    }, {
                        key: "saturation",
                        value: function(t) {
                            return this._hslFromRgb(), null != t ? (this._s = Math.max(0, Math.min(100, t)), this._rgbFromHsl(), this) : this._s
                        }
                    }, {
                        key: "setHue",
                        value: function(t) {
                            if (this._hslFromRgb(), null != t) return this._h = Math.max(0, Math.min(360, t)), this._rgbFromHsl(), this
                        }
                    }, {
                        key: "shade",
                        value: function(t, e) {
                            return this.blend("#000000", t, e)
                        }
                    }, {
                        key: "grayLevel",
                        value: function() {
                            return (.299 * this.r + .587 * this.g + .114 * this.b) / 255
                        }
                    }, {
                        key: "tint",
                        value: function(t, e) {
                            return this.blend("#ffffff", t, e)
                        }
                    }, {
                        key: "whiteLevel",
                        value: function() {
                            return Math.min(Math.min(this.r, this.g), this.b)
                        }
                    }, {
                        key: "getRelativeLuminance",
                        value: function() {
                            var t = function(t) {
                                    var e = .003921569 * t;
                                    return e <= .03928 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)
                                },
                                e = t(this.r),
                                n = t(this.g),
                                r = t(this.b);
                            return Math.min(.2126 * e + .7152 * n + .0722 * r, 1)
                        }
                    }, {
                        key: "isDark",
                        value: function(t) {
                            return t ? this.getRelativeLuminance() < .15 : this.grayLevel() <= .4
                        }
                    }, {
                        key: "isLight",
                        value: function(t) {
                            return t ? this.getRelativeLuminance() >= .8 : this.grayLevel() > .4
                        }
                    }, {
                        key: "isGrayscale",
                        value: function() {
                            return this.r === this.g && this.g === this.b
                        }
                    }, {
                        key: "distanceFrom",
                        value: function(t) {
                            return Math.sqrt(Math.pow(this.r - t.r, 2) + Math.pow(this.g - t.g, 2) + Math.pow(this.b - t.b, 2))
                        }
                    }, {
                        key: "channelDominance",
                        value: function() {
                            var t = this;
                            return ["r", "g", "b"].sort((function(e, n) {
                                return t[n] - t[e]
                            }))
                        }
                    }, {
                        key: "alpha",
                        value: function(t) {
                            return null != t ? (this.a = t, this) : this.a
                        }
                    }, {
                        key: "red",
                        value: function(t) {
                            return null != t ? (this.r = t, this) : this.r
                        }
                    }, {
                        key: "green",
                        value: function(t) {
                            return null != t ? (this.g = t, this) : this.g
                        }
                    }, {
                        key: "blue",
                        value: function(t) {
                            return null != t ? (this.b = t, this) : this.b
                        }
                    }, {
                        key: "toHex",
                        value: function() {
                            var t = Math.round(this.r).toString(16),
                                e = Math.round(this.g).toString(16),
                                n = Math.round(this.b).toString(16);
                            return 1 === t.length && (t = "0".concat(t)), 1 === e.length && (e = "0".concat(e)), 1 === n.length && (n = "0".concat(n)), "".concat(t).concat(e).concat(n)
                        }
                    }, {
                        key: "toHexWithAlpha",
                        value: function() {
                            var t = Math.round(255 * this.a).toString(16);
                            return 1 === t.length && (t = "0".concat(t)), "".concat(t).concat(this.toHex())
                        }
                    }, {
                        key: "toHexWithHash",
                        value: function() {
                            return "#".concat(this.toHex())
                        }
                    }, {
                        key: "toRgb",
                        value: function() {
                            return "rgb(".concat(Math.round(this.r), ",").concat(Math.round(this.g), ",").concat(Math.round(this.b), ")")
                        }
                    }, {
                        key: "toRgba",
                        value: function() {
                            return "rgba(".concat(Math.round(this.r), ",").concat(Math.round(this.g), ",").concat(Math.round(this.b), ",").concat(this.a, ")")
                        }
                    }, {
                        key: "toRgbaOrHex",
                        value: function() {
                            return this.toRgba()
                        }
                    }, {
                        key: "toPercent",
                        value: function() {
                            return "rgba(".concat(this.r / 255 * 100, "%,").concat(this.g / 255 * 100, "%,").concat(this.b / 255 * 100, "%,").concat(this.a, ")")
                        }
                    }, {
                        key: "toIeGradient",
                        value: function() {
                            return "progid:DXImageTransform.Microsoft.gradient(startColorStr='#".concat(this.toHexWithAlpha(), "', endColorStr='#").concat(this.toHexWithAlpha(), "')")
                        }
                    }, {
                        key: "toString",
                        value: function() {
                            return this.toPercent()
                        }
                    }]) && i(e.prototype, n), o && i(e, o), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), e;
                    var e, n, o
                }()
        },
        35: (t, e, n) => {
            n.d(e, {
                colorContrastRatiosByShape: () => o,
                getContrast: () => s,
                rgbToHsl: () => a
            });
            var r = n(36),
                i = n(34);
            n(37);
            var o = {
                    nonText: 3,
                    largeText: 3,
                    paragraphText: 4.5,
                    smallText: 5.5,
                    backgroundColorWhereNonTextHitAreaContentsHaveProperContrast: 2
                },
                a = function(t) {
                    var e = t;
                    if (t instanceof i.Color) {
                        if ((0, r.isNil)(t.r) || (0, r.isNil)(t.g) || (0, r.isNil)(t.b)) throw new Error("Color does not contain required RGB values");
                        e = [t.r, t.g, t.b]
                    } else if ("string" == typeof t) {
                        var n = new i.Color(t);
                        if ((0, r.isNil)(n.r) || (0, r.isNil)(n.g) || (0, r.isNil)(n.b)) throw new Error("Color does not contain required RGB values");
                        e = [n.r, n.g, n.b]
                    }
                    var o = e[0] / 255,
                        a = e[1] / 255,
                        s = e[2] / 255,
                        c = Math.max(o, a, s),
                        u = Math.min(o, a, s),
                        l = 0,
                        f = 0,
                        p = (c + u) / 2;
                    c === u && (l = 0, f = 0);
                    var h = c - u;
                    return 0 === h ? {
                        hue: l,
                        saturation: f,
                        lightness: 100 * o
                    } : (l = c === o ? (a - s) / h + (a < s ? 6 : 0) : c === a ? (s - o) / h + 2 : (o - a) / h + 4, {
                        hue: 360 * (l /= 6),
                        saturation: 100 * (f = p > .5 ? h / (2 - c - u) : h / (c + u)),
                        lightness: 100 * p
                    })
                },
                s = function(t, e) {
                    var n = new i.Color(t),
                        r = new i.Color(e),
                        o = n.getRelativeLuminance(),
                        a = r.getRelativeLuminance(),
                        s = o > a ? (o + .05) / (a + .05) : (a + .05) / (o + .05);
                    return Number.parseFloat(s.toFixed(1))
                }
        },
        36: (t, e, n) => {
            n.d(e, {
                isEmptyRecord: () => l,
                isNil: () => o,
                isNonEmptyRecord: () => f,
                isNonEmptyString: () => c,
                isNotNil: () => a
            });
            Number.NaN;
            var r = t => null === t,
                i = t => void 0 === t,
                o = t => r(t) || i(t),
                a = t => !o(t),
                s = t => "string" == typeof t,
                c = t => s(t) && !(t => s(t) && "" === t)(t),
                u = t => a(t) && "object" == typeof t && !(t instanceof Array),
                l = t => u(t) && 0 === Object.keys(t).length,
                f = t => u(t) && Object.keys(t).length > 0
        },
        37: (t, e, n) => {
            n.d(e, {
                reportError: () => a
            });
            var r = n(36),
                i = n(38),
                o = n(16),
                a = (n(25), n(23), function(t, e, n) {
                    try {
                        if (!o.Wistia.isSentryInitialized) return;
                        var a = "mediaPlayback" === t ? .001 : 1;
                        false;
                        var s = !1,
                            c = (0, r.isNil)(window.crypto) ? window.msCrypto : window.crypto;
                        if (void 0 !== c) s = c.getRandomValues(new Uint32Array(1))[0] / 4294967296 < a;
                        else s = Math.random() < a;
                        s ? (0, i.isVisitorTrackingEnabled)() && (o.Wistia._sentryScope.clear(), o.Wistia._sentryScope.setTag("pillar", "publish"), o.Wistia._sentryScope.setTag("product", t), o.Wistia._sentryScope.setTag("url", window.location.href), (0, r.isNonEmptyRecord)(n) && o.Wistia._sentryScope.setTags(n), o.Wistia._sentryScope.captureException(e)) : console.error(e)
                    } catch (t) {
                        console.error(t)
                    }
                })
        },
        38: (t, e, n) => {
            n.d(e, {
                isVisitorTrackingEnabled: () => f
            });
            var r = n(13),
                i = n(39),
                o = n(41),
                a = n(16);

            function s(t) {
                return function(t) {
                    if (Array.isArray(t)) return c(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return c(t, e);
                        var n = {}.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? c(t, e) : void 0
                    }
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function c(t, e) {
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
                return null == t ? f() : l(t)
            };
            var l = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.Wistia._visitorTrackingDomain;
                    "default" === t ? delete a.Wistia._visitorTracking[e] : a.Wistia._visitorTracking[e] = {
                        isEnabled: "true" === "".concat(t),
                        updatedAt: Date.now()
                    }, (0, i.updateWistiaLocalStorage)((function(t) {
                        return t.visitorTracking = a.Wistia._visitorTracking
                    })), (0, r.globalTrigger)("visitortrackingchange", t), s(document.getElementsByTagName("wistia-player")).forEach((function(e) {
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
                        e.push.apply(e, s(a.Wistia.channel.all()))
                    } catch (t) {}
                    return !e.some((function(t) {
                        return !0 === (t._mediaData || t._galleryData || {}).privacyMode
                    }))
                }
        },
        39: (t, e, n) => {
            n.d(e, {
                getWistiaLocalStorage: () => a,
                updateWistiaLocalStorage: () => s
            });
            var r = n(40),
                i = n(16),
                o = "wistia",
                a = function() {
                    return (0, r.getLocalStorage)(o)
                },
                s = function(t) {
                    return i.Wistia._localStorage = (0, r.updateLocalStorage)(o, t), i.Wistia._localStorage
                }
        },
        40: (t, e, n) => {
            n.d(e, {
                getLocalStorage: () => c,
                removeLocalStorage: () => u,
                setLocalStorage: () => l,
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
                s = function() {
                    return null == r.Wistia[o] && (r.Wistia[o] = {}), r.Wistia[o]
                },
                c = function(t) {
                    if (!a()) return s()[t] || {};
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
                    } else s()[t] = {}
                },
                l = function(t, e) {
                    if (!a()) return null != e && "object" == typeof e && (s()[t] = e), e;
                    try {
                        s()[t] = e, localStorage[t] = JSON.stringify(e)
                    } catch (t) {
                        i(t)
                    }
                    return e
                },
                f = function(t, e) {
                    var n = c(t);
                    try {
                        e(n)
                    } catch (t) {
                        i(t)
                    }
                    return l(t, n)
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
        45: (t, e, n) => {
            n.d(e, {
                isMouseDown: () => l,
                isMouseDownRecently: () => f
            });
            var r = n(3),
                i = n(9),
                o = n(16),
                a = (0, i.cachedDetect)();
            if (null == o.Wistia._isMouseDown) {
                o.Wistia._isMouseDown = !1;
                var s = function(t) {
                        o.Wistia._isMouseDown = !0, o.Wistia._lastMouseDownAt = Date.now(), setTimeout((function() {
                            t.defaultPrevented && (o.Wistia._isMouseDown = !1)
                        }), 0)
                    },
                    c = function() {
                        o.Wistia._lastMouseUpAt = Date.now(), setTimeout((function() {
                            o.Wistia._isMouseDown = !1
                        }), 0)
                    };
                a.touchScreen ? ((0, r.elemBind)(document, "touchstart", s, !0), (0, r.elemBind)(document, "touchend", (function() {
                    o.Wistia._lastMouseUpAt = Date.now(), setTimeout((function() {
                        o.Wistia._isMouseDown = !1
                    }), 0)
                }), !0)) : ((0, r.elemBind)(document, "mousedown", s, !0), (0, r.elemBind)(document, "mouseup", c, !0));
                var u = a.windows ? c : s;
                (0, r.elemBind)(document, "contextmenu", u, !0)
            }
            var l = function() {
                    return null != o.Wistia._mouseDownForceReturnVal ? o.Wistia._mouseDownForceReturnVal : o.Wistia._isMouseDown
                },
                f = function() {
                    return null != o.Wistia._mouseDownForceReturnVal ? o.Wistia._mouseDownForceReturnVal : (t = 500, Math.max(o.Wistia._lastMouseDownAt || 0, (o.Wistia._lastMouseUpAt || 0) - 1) > Date.now() - t);
                    var t
                }
        },
        46: (t, e, n) => {
            n.d(e, {
                defineTranslations: () => p,
                getTranslation: () => v,
                getTranslations: () => g
            });
            var r = n(4),
                i = (n(47), n(16)),
                o = i.Wistia.languages = i.Wistia.languages || {},
                a = i.Wistia.translations = i.Wistia.translations || {};
            i.Wistia._translationPromises || (i.Wistia._translationPromises = {});
            var s, c = ["ar", "de", "es", "en-US", "fr", "it", "ja", "ko", "pt", "ru", "zh-CN"],
                u = {
                    ara: "ar",
                    ger: "de",
                    spa: "es",
                    eng: "en-US",
                    fre: "fr",
                    ita: "it",
                    jpn: "ja",
                    kor: "ko",
                    por: "pt",
                    rus: "ru",
                    chi: "zh-CN"
                },
                l = function(t) {
                    if (null == t) return "en-US";
                    if (t = u[t] || t, !c.includes(t)) {
                        var e = m((function() {
                            return [t]
                        }))[0];
                        e && (t = e)
                    }
                    return ("en" === t || /^en-/.test(t)) && (t = "en-US"), ("zh" === t || /^zh-/.test(t)) && (t = "zh-CN"), t
                },
                f = function(t, e, n) {
                    o[t] = {
                        code: t,
                        text: d(e)
                    }, n && p(t, n)
                },
                p = function(t, e) {
                    if (null == o[t]) throw new Error("Must define a language with code ".concat(t, " before defining its translations."));
                    var n = a[t];
                    n ? (0, r.merge)(n, e) : a[t] = (0, r.clone)(e)
                },
                h = i.Wistia.cachedDecodings = i.Wistia.cachedDecodings || {},
                d = function(t) {
                    return s || (s = document.createElement("textarea")), null != h[t] ? h[t] : (s.innerHTML = t, h[t] = s.value, s.value)
                },
                v = function(t, e) {
                    var n;
                    return t = l(t), n = a[t] && a[t][e] ? a[t][e] : a["en-US"][e], d(function(t) {
                        return null == t ? "?" : t
                    }(n))
                },
                g = function(t) {
                    var e = {};
                    return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).forEach((function(n) {
                        e[n] = v(t, n)
                    })), e
                },
                y = function() {
                    return navigator.languages || navigator.language ? i.Wistia.languagePreference = navigator.languages || [navigator.language] : i.Wistia.languagePreference = ["en-US"], i.Wistia.languagePreference
                },
                m = (Promise.resolve({
                    code: "en-US",
                    translations: a["en-US"]
                }), function() {
                    return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y)().reduce((function(t, e) {
                        var n = -1 !== c.indexOf(e),
                            r = e.split("-")[0],
                            i = -1 !== c.indexOf(r);
                        return n ? t.push(e) : i && t.push(r), t
                    }), [])
                });
            f("en-US", "English"), p("en-US", {
                PLAY: "Play",
                PLAY_BUTTON_LIVE_NOT_STARTED: "Livestream has not started",
                PLAY_BUTTON_TITLE_WHEN_NOT_PLAYING: "Play Video",
                PLAY_BUTTON_TITLE_WHEN_PLAYING: "Pause",
                REWATCH: "Rewatch",
                SKIP: "Skip"
            })
        },
        47: (t, e, n) => {
            n.d(e, {
                dynamicImport: () => s
            });
            var r = n(23);

            function i() {
                var t, e, n = "function" == typeof Symbol ? Symbol : {},
                    r = n.iterator || "@@iterator",
                    a = n.toStringTag || "@@toStringTag";

                function s(n, r, i, a) {
                    var s = r && r.prototype instanceof u ? r : u,
                        l = Object.create(s.prototype);
                    return o(l, "_invoke", function(n, r, i) {
                        var o, a, s, u = 0,
                            l = i || [],
                            f = !1,
                            p = {
                                p: 0,
                                n: 0,
                                v: t,
                                a: h,
                                f: h.bind(t, 4),
                                d: function(e, n) {
                                    return o = e, a = 0, s = t, p.n = n, c
                                }
                            };

                        function h(n, r) {
                            for (a = n, s = r, e = 0; !f && u && !i && e < l.length; e++) {
                                var i, o = l[e],
                                    h = p.p,
                                    d = o[2];
                                n > 3 ? (i = d === r) && (s = o[(a = o[4]) ? 5 : (a = 3, 3)], o[4] = o[5] = t) : o[0] <= h && ((i = n < 2 && h < o[1]) ? (a = 0, p.v = r, p.n = o[1]) : h < d && (i = n < 3 || o[0] > r || r > d) && (o[4] = n, o[5] = r, p.n = d, a = 0))
                            }
                            if (i || n > 1) return c;
                            throw f = !0, r
                        }
                        return function(i, l, d) {
                            if (u > 1) throw TypeError("Generator is already running");
                            for (f && 1 === l && h(l, d), a = l, s = d;
                                (e = a < 2 ? t : s) || !f;) {
                                o || (a ? a < 3 ? (a > 1 && (p.n = -1), h(a, s)) : p.n = s : p.v = s);
                                try {
                                    if (u = 2, o) {
                                        if (a || (i = "next"), e = o[i]) {
                                            if (!(e = e.call(o, s))) throw TypeError("iterator result is not an object");
                                            if (!e.done) return e;
                                            s = e.value, a < 2 && (a = 0)
                                        } else 1 === a && (e = o.return) && e.call(o), a < 2 && (s = TypeError("The iterator does not provide a '" + i + "' method"), a = 1);
                                        o = t
                                    } else if ((e = (f = p.n < 0) ? s : n.call(r, p)) !== c) break
                                } catch (e) {
                                    o = t, a = 1, s = e
                                } finally {
                                    u = 1
                                }
                            }
                            return {
                                value: e,
                                done: f
                            }
                        }
                    }(n, i, a), !0), l
                }
                var c = {};

                function u() {}

                function l() {}

                function f() {}
                e = Object.getPrototypeOf;
                var p = [][r] ? e(e([][r]())) : (o(e = {}, r, (function() {
                        return this
                    })), e),
                    h = f.prototype = u.prototype = Object.create(p);

                function d(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, f) : (t.__proto__ = f, o(t, a, "GeneratorFunction")), t.prototype = Object.create(h), t
                }
                return l.prototype = f, o(h, "constructor", f), o(f, "constructor", l), l.displayName = "GeneratorFunction", o(f, a, "GeneratorFunction"), o(h), o(h, a, "Generator"), o(h, r, (function() {
                    return this
                })), o(h, "toString", (function() {
                    return "[object Generator]"
                })), (i = function() {
                    return {
                        w: s,
                        m: d
                    }
                })()
            }

            function o(t, e, n, r) {
                var i = Object.defineProperty;
                try {
                    i({}, "", {})
                } catch (t) {
                    i = 0
                }
                o = function(t, e, n, r) {
                    if (e) i ? i(t, e, {
                        value: n,
                        enumerable: !r,
                        configurable: !r,
                        writable: !r
                    }) : t[e] = n;
                    else {
                        var a = function(e, n) {
                            o(t, e, (function(t) {
                                return this._invoke(e, n, t)
                            }))
                        };
                        a("next", 0), a("throw", 1), a("return", 2)
                    }
                }, o(t, e, n, r)
            }

            function a(t, e, n, r, i, o, a) {
                try {
                    var s = t[o](a),
                        c = s.value
                } catch (t) {
                    return void n(t)
                }
                s.done ? e(c) : Promise.resolve(c).then(r, i)
            }
            var s = function() {
                var t, e = (t = i().m((function t(e) {
                    var n, o, a, s, c = arguments;
                    return i().w((function(t) {
                        for (;;) switch (t.n) {
                            case 0:
                                if (a = null !== (n = (o = c.length > 1 && void 0 !== c[1] ? c[1] : {}).host) && void 0 !== n ? n : (0, r.eV1HostWithPort)(), !("" !== (s = r.TAGGED_VERSION) && s.length > 0 && !0 !== o.mediaData)) {
                                    t.n = 1;
                                    break
                                }
                                return t.a(2,
                                    import ("".concat((0, r.eV1Protocol)(), "//").concat(a, "/").concat(e, "@").concat(s)));
                            case 1:
                                return t.a(2,
                                    import ("".concat((0, r.eV1Protocol)(), "//").concat(a, "/").concat(e)))
                        }
                    }), t)
                })), function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = t.apply(e, n);

                        function s(t) {
                            a(o, r, i, s, c, "next", t)
                        }

                        function c(t) {
                            a(o, r, i, s, c, "throw", t)
                        }
                        s(void 0)
                    }))
                });
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
        },
        68: (t, e, n) => {
            n.d(e, {
                CustomEventsWrapper: () => v
            });
            var r = n(2),
                i = n(9),
                o = n(69);

            function a() {
                return a = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n)({}).hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }, a.apply(null, arguments)
            }

            function s(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, h(r.key), r)
                }
            }

            function c(t, e, n) {
                return e = l(e),
                    function(t, e) {
                        if (e && ("object" == typeof e || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, u() ? Reflect.construct(e, n || [], l(t).constructor) : e.apply(t, n))
            }

            function u() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (t) {}
                return (u = function() {
                    return !!t
                })()
            }

            function l(t) {
                return l = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, l(t)
            }

            function f(t, e) {
                return f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, f(t, e)
            }

            function p(t, e, n) {
                return (e = h(e)) in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function h(t) {
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
            var d = (0, i.cachedDetect)(),
                v = function(t) {
                    function e() {
                        var t;
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, e);
                        for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return p(t = c(this, e, [].concat(r)), "onSwipe", (function(e, n) {
                            var r = t.props.onSwipe;
                            r && r(e, n)
                        })), p(t, "onPinch", (function(e, n) {
                            var r = t.props.onPinch;
                            r && r(e, n)
                        })), p(t, "onLongPress", (function(e, n) {
                            var r = t.props.onLongPress;
                            r && r(e, n)
                        })), p(t, "onCustomTouchMove", (function(e, n) {
                            var r = t.props.onCustomTouchMove;
                            r && r(e, n)
                        })), t
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
                        key: "render",
                        value: function() {
                            var t = this.props.tagName || "div";
                            return (0, r.h)(t, a({}, this.props, {
                                ref: this.props.elemRef
                            }), this.props.children)
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            this._savedBase = this.base, this.setupBindings()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            this.base !== this._savedBase && (this._savedBase = this.base, this.destroyBindings(), this.setupBindings())
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.destroyBindings()
                        }
                    }, {
                        key: "setupBindings",
                        value: function() {
                            if (this.unbinds = [], d.touchScreen) {
                                var t = this.touchEvents = new o.default(this.base);
                                t.on("swipe", this.onSwipe), t.on("pinch", this.onPinch), t.on("longpress", this.onLongPress), t.on("touchmove", this.onCustomTouchMove)
                            }
                        }
                    }, {
                        key: "destroyBindings",
                        value: function() {
                            this.touchEvents && (this.touchEvents.destroy(), this.touchEvents = null), this.unbinds && (this.unbinds.map((function(t) {
                                return t()
                            })), this.unbinds = null)
                        }
                    }]) && s(n.prototype, i), u && s(n, u), Object.defineProperty(n, "prototype", {
                        writable: !1
                    }), n;
                    var n, i, u
                }(r.Component)
        },
        69: (t, e, n) => {
            n.d(e, {
                default: () => l
            });
            var r = n(15),
                i = n(3);

            function o(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, s(r.key), r)
                }
            }

            function a(t, e, n) {
                return (e = s(e)) in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
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
            var c = (0, n(9).cachedDetect)(),
                u = function() {
                    return t = function t(e) {
                        var n = this;
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), a(this, "onTouchStart", (function(t) {
                            n.rootWidth = (0, i.elemWidth)(n.rootElem), n.rootHeight = (0, i.elemHeight)(n.rootElem), n.rootOffset = (0, i.elemOffset)(n.rootElem), n.resetTouchContext(), t.touches[0] && (n.xDown = t.touches[0].clientX, n.yDown = t.touches[0].clientY), n.updatePinch(t), 2 == t.touches.length && n.touchesAreInsideRootElem() && t.preventDefault(), n.startedAt = Date.now(), (0, i.elemBind)(document, "touchmove", n.onTouchMoveDocument, {
                                passive: !1
                            }), (0, i.elemBind)(document, "touchend", n.onTouchEndDocument), (0, i.elemBind)(n.rootElem, "touchmove", n.onTouchMove, {
                                passive: !1
                            }), (0, i.elemBind)(n.rootElem, "touchend", n.onTouchEnd);
                            var e = n.getTouchContext(t);
                            n.trigger("touchstart", t, e), n.maybeTriggerMoreSpecificEvent(t, e)
                        })), a(this, "onTouchMove", (function(t) {
                            t._handledByTouchMove = !0;
                            var e = t.touches[0].clientX,
                                r = t.touches[0].clientY;
                            n.xDiff = n.xDown - e, n.yDiff = n.yDown - r, n.updatePinch(t), n.isPinch || (Math.sqrt(n.xDiff * n.xDiff + n.yDiff * n.yDiff) > 25 || Date.now() - n.startedAt > 300) && (n.isSwipe = !0);
                            var i = n.getTouchContext(t);
                            n.trigger("touchmove", t, i), n.maybeTriggerMoreSpecificEvent(t, i)
                        })), a(this, "onTouchMoveDocument", (function(t) {
                            t._handledByTouchMove || n.onTouchMove(t)
                        })), a(this, "onTouchEnd", (function(t) {
                            t._handledByTouchEnd = !0;
                            var e = n.getTouchContext(t);
                            n.trigger("touchend", t, e), n.maybeTriggerMoreSpecificEvent(t, e), setTimeout((function() {
                                n.resetTouchContext(), n.unbindTouchEndAndTouchMove()
                            }), 0)
                        })), a(this, "onTouchEndDocument", (function(t) {
                            t._handledByTouchEnd || n.onTouchEnd(t)
                        })), this.rootElem = e, this.xDown = this.yDown = null, this.xDiff = this.yDiff = 0, this.isSwipe = !1, this.isPinch = !1, this.startedAt = null, this.initialPinchDistance = null, this.touch1 = this.touch2 = null, this.pinchDistance = 0, this.pinchScale = 0, (0, i.elemBind)(e, "touchstart", this.onTouchStart, !!c.passiveSupported && {
                            passive: !1
                        })
                    }, e = [{
                        key: "updatePinch",
                        value: function(t) {
                            var e = this.rootOffset;
                            return 2 === t.touches.length ? (this.touch1 = {
                                left: t.touches[0].pageX - e.left,
                                top: t.touches[0].pageY - e.top
                            }, this.touch2 = {
                                left: t.touches[1].pageX - e.left,
                                top: t.touches[1].pageY - e.top
                            }, this.pinchDistance = Math.sqrt(Math.pow(this.touch1.left - this.touch2.left, 2), Math.pow(this.touch1.top - this.touch2.top, 2)), null == this.initialPinchDistance && (this.initialPinchDistance = this.pinchDistance), this.pinchScale = this.pinchDistance / this.initialPinchDistance, this.pinchDelta = this.pinchDistance - this.initialPinchDistance, this.isPinch = !0, this.pinchScale) : 0
                        }
                    }, {
                        key: "getTouchContext",
                        value: function(t) {
                            var e = this.rootOffset,
                                n = Date.now() - this.startedAt,
                                r = Object(t.touches[0]);
                            return {
                                xOffset: r.pageX - e.left,
                                yOffset: r.pageY - e.top,
                                xDelta: this.xDiff,
                                yDelta: this.yDiff,
                                absXDelta: Math.abs(this.xDiff),
                                absYDelta: Math.abs(this.yDiff),
                                delta: Math.sqrt(this.xDiff * this.xDiff + this.yDiff * this.yDiff),
                                startedAt: this.startedAt,
                                isSwipe: !this.isPinch && this.isSwipe,
                                isTap: n < 1e3 && !this.isPinch && !this.isSwipe,
                                isLongPress: n >= 1e3 && !this.isPinch && !this.isSwipe,
                                isPinch: this.isPinch,
                                timeDelta: n,
                                pinchScale: this.pinchScale,
                                pinchDistance: this.pinchDistance
                            }
                        }
                    }, {
                        key: "touchIsInsideRootElem",
                        value: function(t) {
                            return t.left >= 0 && t.left < this.rootWidth && t.top >= 0 && t.top < this.rootHeight
                        }
                    }, {
                        key: "touchesAreInsideRootElem",
                        value: function() {
                            return this.touchIsInsideRootElem(this.touch1) && this.touchIsInsideRootElem(this.touch2)
                        }
                    }, {
                        key: "resetTouchContext",
                        value: function() {
                            this.xDown = this.yDown = null, this.xDiff = this.yDiff = 0, this.isSwipe = !1, this.isPinch = !1, this.startedAt = null, this.pinchDelta = 0, this.pinchDistance = 0, this.initialPinchDistance = null, this.touch1 = this.touch2 = null
                        }
                    }, {
                        key: "maybeTriggerMoreSpecificEvent",
                        value: function(t, e) {
                            e.isLongPress ? this.trigger("longpress", t, e) : e.isTap ? this.trigger("tap", t, e) : e.isSwipe ? this.trigger("swipe", t, e) : e.isPinch && this.trigger("pinch", t, e)
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            (0, i.elemUnbind)(this.rootElem, "touchstart", this.onTouchStart), this.unbindTouchEndAndTouchMove(), this.rootElem = null
                        }
                    }, {
                        key: "unbindTouchEndAndTouchMove",
                        value: function() {
                            (0, i.elemUnbind)(document, "touchmove", this.onTouchMoveDocument), (0, i.elemUnbind)(document, "touchend", this.onTouchEndDocument), (0, i.elemUnbind)(this.rootElem, "touchmove", this.onTouchMove), (0, i.elemUnbind)(this.rootElem, "touchend", this.onTouchEnd)
                        }
                    }], e && o(t.prototype, e), n && o(t, n), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), t;
                    var t, e, n
                }();
            (0, r.bindify)(u.prototype);
            const l = u
        },
        71: (t, e, n) => {
            n.d(e, {
                destroyControl: () => s
            });
            n(5);
            var r = n(9),
                i = (n(72), n(3)),
                o = n(2),
                a = (n(26), n(73), function(t, e) {
                    if (null == t) throw new TypeError("Cannot convert undefined or null to object");
                    return Object.prototype.hasOwnProperty.call(Object(t), e)
                }),
                s = ((0, r.cachedDetect)(), function(t) {
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
                        }(t), c(t), l(t), f(t)
                }),
                c = function(t) {
                    t.rootElem && (0, i.elemRemove)(Array.prototype.slice.call(t.rootElem.childNodes))
                },
                u = function(t) {
                    var e = t[0],
                        n = t[1];
                    e && n && (0, o.render)((0, o.h)("nothing", null), e)
                },
                l = function(t) {
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
                    var o = c(t);
                    if (a(t, o), e) {
                        var s = i.Wistia._timeouts[o];
                        null == s && (s = i.Wistia._timeouts[o] = {});
                        var u = setTimeout((function() {
                            delete s[t], e()
                        }), n);
                        return s[t] = u, u
                    }
                    return i.Wistia._timeouts[o][t]
                },
                a = function(t) {
                    var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if ((0, r.isArray)(t) && (t = t.join(".")), "__global__" === (n = n || c(t)) && (e = i.Wistia._timeouts[t]))
                        for (var o in e) {
                            var a = e[o];
                            clearTimeout(a), delete e[o]
                        }
                    if (e = i.Wistia._timeouts[n])
                        for (var u in e) {
                            var l = e[u];
                            !u.indexOf || 0 !== u.indexOf(t) || u.length !== t.length && "." !== u.charAt(t.length) || (clearTimeout(l), delete e[u])
                        }
                    i.Wistia.blockSweepTimeouts || (i.Wistia.blockSweepTimeouts = !0, setTimeout(s, 0), setTimeout((function() {
                        i.Wistia.blockSweepTimeouts = !1
                    }), 5e3))
                },
                s = function() {
                    for (var t in i.Wistia._timeouts) {
                        var e = i.Wistia._timeouts[t];
                        (0, r.isEmpty)(e) && delete i.Wistia._timeouts[t]
                    }
                },
                c = function(t) {
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
                s = n(16);
            null == s.Wistia._simpleMetricsCache && (s.Wistia._simpleMetricsCache = {}), null == s.Wistia._simpleMetricsDebounceInterval && (s.Wistia._simpleMetricsDebounceInterval = 500);
            var c = s.Wistia._simpleMetricsCache,
                u = function(t) {
                    return f("count", t, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {})
                },
                l = function() {
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
                        null == c.toMput && (c.toMput = []);
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
                        c.toMput.push(p), clearTimeout(s.Wistia._msendTimeout), s.Wistia._msendTimeout = setTimeout((function() {
                            (0, i.pageLoaded)((function() {
                                l.apply(undefined, c.toMput), c.toMput = []
                            }))
                        }), s.Wistia._simpleMetricsDebounceInterval)
                    } catch (t) {
                        console.error(t.message), console.error(t.stack)
                    }
                }
        },
        95: (t, e, n) => {
            function r(t, e) {
                var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!n) {
                    if (Array.isArray(t) || (n = function(t, e) {
                            if (t) {
                                if ("string" == typeof t) return i(t, e);
                                var n = {}.toString.call(t).slice(8, -1);
                                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(t, e) : void 0
                            }
                        }(t)) || e && t && "number" == typeof t.length) {
                        n && (t = n);
                        var r = 0,
                            o = function() {};
                        return {
                            s: o,
                            n: function() {
                                return r >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[r++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: o
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var a, s = !0,
                    c = !1;
                return {
                    s: function() {
                        n = n.call(t)
                    },
                    n: function() {
                        var t = n.next();
                        return s = t.done, t
                    },
                    e: function(t) {
                        c = !0, a = t
                    },
                    f: function() {
                        try {
                            s || null == n.return || n.return()
                        } finally {
                            if (c) throw a
                        }
                    }
                }
            }

            function i(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            n.d(e, {
                getPreferredAvailableLanguageIndex: () => s
            });
            var o = function(t) {
                    return t.split("-")[0]
                },
                a = function() {
                    var t;
                    return null === (t = (new Error).stack) || void 0 === t ? void 0 : t.split("\n").slice(2).join("\n")
                },
                s = function(t, e) {
                    t.some((function(t) {
                        return "string" != typeof t
                    })) && (console.error("availableLanguages has non-string values", t, a()), t = t.filter((function(t) {
                        return "string" == typeof t
                    }))), e.some((function(t) {
                        return "string" != typeof t
                    })) && (console.error("preferredLanguages has non-string values", e, a()), e = e.filter((function(t) {
                        return "string" == typeof t
                    })));
                    var n, i = r(e);
                    try {
                        var s, c = function() {
                            var e = n.value;
                            if (t.includes(e)) return {
                                v: t.indexOf(e)
                            };
                            var r = o(e);
                            return t.some((function(t) {
                                return o(t) === r
                            })) ? {
                                v: t.findIndex((function(t) {
                                    return o(t) === r
                                }))
                            } : void 0
                        };
                        for (i.s(); !(n = i.n()).done;)
                            if (s = c()) return s.v
                    } catch (t) {
                        i.e(t)
                    } finally {
                        i.f()
                    }
                    return -1
                }
        },
        96: (t, e, n) => {
            n.d(e, {
                getViewerPreference: () => o,
                setViewerPreference: () => a
            });
            var r = n(40),
                i = function() {
                    return "wistia-viewer-preferences"
                },
                o = function(t) {
                    var e = (0, r.getLocalStorage)(i());
                    return e ? e[t] : null
                },
                a = function(t, e) {
                    (0, r.updateLocalStorage)(i(), (function(n) {
                        n.plugin && delete n.plugin, n[t] = e
                    }))
                }
        },
        140: (t, e, n) => {
            n.d(e, {
                captionsPromises: () => f,
                fetchCaptions: () => d,
                getCaptionsForLanguage: () => g,
                getPreferredCaptionsIndex: () => p,
                shouldShowNativeCaptions: () => v
            });
            var r, i = n(16),
                o = n(23),
                a = n(12),
                s = n(141),
                c = n(95);

            function u(t) {
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
            null !== (r = i.Wistia.captionsPromises) && void 0 !== r || (i.Wistia.captionsPromises = {});
            var f = i.Wistia.captionsPromises;
            i.Wistia.uncacheCaptions = function(t, e) {
                if (t && e) {
                    var n = h(t, e);
                    delete i.Wistia.captionsPromises[n]
                } else t ? Object.keys(i.Wistia.captionsPromises).forEach((function(e) {
                    e.startsWith(t) && delete i.Wistia.captionsPromises[e]
                })) : Object.keys(i.Wistia.captionsPromises).forEach((function(t) {
                    delete i.Wistia.captionsPromises[t]
                }))
            };
            var p = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (null == t || null == t.availableTranscripts) return -1;
                    var n = [];
                    e.language && n.push(e.language);
                    var r = (0, s.getCaptionViewerPreferences)();
                    null != r.iso6392Language && n.push(r.iso6392Language);
                    var i = n.filter((function(t, e) {
                            return n.indexOf(t) === e
                        })),
                        o = (0, c.getPreferredAvailableLanguageIndex)(t.availableTranscripts.map((function(t) {
                            var e;
                            return null !== (e = t.iso6392LanguageCode) && void 0 !== e ? e : t.iso639_2_language_code
                        })), i);
                    return -1 === o && (o = (0, c.getPreferredAvailableLanguageIndex)(t.availableTranscripts.map((function(t) {
                        var e;
                        return null !== (e = t.ietfLanguageTag) && void 0 !== e ? e : t.ietf_language_tag
                    })), i)), -1 === o && (o = (0, c.getPreferredAvailableLanguageIndex)(t.availableTranscripts.map((function(t) {
                        var e;
                        return null !== (e = t.iso6392LanguageCode) && void 0 !== e ? e : t.iso639_2_language_code
                    })), [].concat(u(navigator.languages), ["en"]))), o
                },
                h = function(t, e) {
                    return "".concat(t).concat(e ? "-".concat(e) : "")
                },
                d = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = t.hashedId(),
                        r = h(n, e.language);
                    return i.Wistia.captionsPromises[r] ? i.Wistia.captionsPromises[r] : i.Wistia.captionsPromises[r] = new Promise((function(r) {
                        var i = "".concat((0, o.eV1Protocol)(), "//").concat((0, o.mediaDataHost)(t._opts)),
                            s = new window.URL("".concat(i, "/embed/captions/").concat(n, ".json"));
                        e.language && s.searchParams.append("language", e.language), a.wlog.info(s, e), fetch(s).then((function(t) {
                            return t.json()
                        })).then((function(t) {
                            null != t && null == t.error || (t = {
                                captions: []
                            }), r(t)
                        }))
                    }))
                },
                v = function(t) {
                    return t._inNativeMode() || t._impl.behaviors.fullscreen && t._impl.behaviors.fullscreen.inNativeFullscreen()
                },
                g = function(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        if (r.language === t) return r
                    }
                    return null
                }
        },
        141: (t, e, n) => {
            n.d(e, {
                getCaptionSettings: () => f,
                getCaptionViewerPreferences: () => l,
                updateCaptionViewerPreferences: () => p
            });
            var r = n(142),
                i = n(143),
                o = n(96);

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

            function s(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? a(Object(n), !0).forEach((function(e) {
                        c(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
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
            var u = "captionsViewerPreferences",
                l = function() {
                    var t, e = (0, o.getViewerPreference)(u);
                    return "object" != typeof(t = e) || null == t ? {} : e
                },
                f = function() {
                    var t = l();
                    return (0, i.isCaptionsSettings)(t) ? t : s({}, r.DEFAULT_CAPTION_SETTINGS)
                },
                p = function(t) {
                    (0, o.setViewerPreference)(u, s(s({}, l()), t))
                }
        },
        142: (t, e, n) => {
            n.d(e, {
                BASE_COLORS: () => c,
                CAPTIONS_FONT_FAMILY_MAP: () => i,
                DEFAULT_CAPTION_SETTINGS: () => u,
                FONT_SIZES: () => o,
                NARROW_WIDTH_THRESHOLD_PX: () => f,
                NON_ZERO_OPACITY_PERCENTAGES: () => s,
                OPACITY_PERCENTAGES: () => a,
                SETTINGS_MENU_PADDING_X_PX: () => l
            });
            var r = n(28),
                i = new Map([
                    ["Monospace serif", '"Courier New", Courier, "Nimbus Mono L", "Cutive Mono", monospace'],
                    ["Monospace sans-serif", '"Deja Vu Sans Mono", "Lucida Console", Monaco, Consolas, "PT Mono", monospace'],
                    ["Proportional serif", '"Times New Roman", Times, Georgia, Cambria, "PT Serif Caption", serif'],
                    ["Proportional sans-serif", r.interFontFamily],
                    ["Casual", '"Comic Sans MS", Impact, Handlee, fantasy'],
                    ["Cursive", '"Monotype Corsiva", "URW Chancery L", "Apple Chancery", "Dancing Script", cursive'],
                    ["Small caps", r.interFontFamily]
                ]),
                o = [100, 120, 140, 160],
                a = [100, 75, 50, 25, 0],
                s = a.filter((function(t) {
                    return 0 !== t
                })),
                c = [{
                    ariaLabel: "Black",
                    hex: "#000000"
                }, {
                    ariaLabel: "Yellow",
                    hex: "#FFF200"
                }, {
                    ariaLabel: "Green",
                    hex: "#00F024"
                }, {
                    ariaLabel: "Cyan",
                    hex: "#00EAFF"
                }, {
                    ariaLabel: "Blue",
                    hex: "#001AFF"
                }, {
                    ariaLabel: "Magenta",
                    hex: "#FF00AA"
                }, {
                    ariaLabel: "Red",
                    hex: "#FF0000"
                }, {
                    ariaLabel: "White",
                    hex: "#FFFFFF"
                }],
                u = {
                    fontSize: o[0],
                    fontOpacityPercentage: a[0],
                    backgroundOpacityPercentage: a[1],
                    windowOpacityPercentage: a[a.length - 1],
                    fontColor: c[c.length - 1].hex,
                    backgroundColor: c[0].hex,
                    windowColor: c[0].hex,
                    fontFamily: "Proportional sans-serif",
                    characterEdgeStyle: "None"
                },
                l = 16,
                f = 340
        },
        143: (t, e, n) => {
            n.d(e, {
                isCaptionColorHex: () => a,
                isCaptionFontSize: () => i,
                isCaptionOpacityPercentage: () => o,
                isCaptionsSettings: () => s
            });
            var r = n(142),
                i = function(t) {
                    return r.FONT_SIZES.some((function(e) {
                        return e === t
                    }))
                },
                o = function(t) {
                    return r.OPACITY_PERCENTAGES.some((function(e) {
                        return e === t
                    }))
                },
                a = function(t) {
                    return r.BASE_COLORS.some((function(e) {
                        return e.hex === t
                    }))
                },
                s = function(t) {
                    if ("object" != typeof t || null === t) return !1;
                    var e = t;
                    return a(e.backgroundColor) && o(e.backgroundOpacityPercentage) && a(e.fontColor) && i(e.fontSize) && o(e.fontOpacityPercentage) && a(e.windowColor) && o(e.windowOpacityPercentage)
                }
        },
        175: (t, e, n) => {
            function r(t) {
                return function(t) {
                    if (Array.isArray(t)) return i(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return i(t, e);
                        var n = {}.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(t, e) : void 0
                    }
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function i(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function o(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, a(r.key), r)
                }
            }

            function a(t) {
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
                Interpolation: () => s
            });
            var s = function() {
                return t = function t() {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var e = arguments.length <= 0 ? void 0 : arguments[0],
                        n = e.seedRange,
                        r = e.seedFunction,
                        i = e.seedStart,
                        o = e.outputStart,
                        a = null != o ? o : 0,
                        s = e.outputEnd,
                        c = null != s ? s : 1,
                        u = e.easing,
                        l = null != u ? u : t.linear;
                    if (null == n) throw new Error("Must provide seedRange argument");
                    if (null != r && "function" != typeof r) throw new Error("Given seed is not a function");
                    if ("function" != typeof l) throw new Error("Invalid easing function given: ".concat(this.easing));
                    this._seedRange = n, this._seedFunction = r || function() {
                        return (new Date).getTime()
                    }, this._outputStart = a, this._outputEnd = c, this._easing = l, this._seedStart = (null == i ? void 0 : i()) || this.seed()
                }, n = [{
                    key: "linear",
                    value: function(t, e, n, r) {
                        return t * e / (n || 1) + r
                    }
                }, {
                    key: "easeInOut",
                    value: function(t, e, n, r) {
                        return (e /= (n || 1) / 2) < 1 ? t / 2 * e * e + r : -t / 2 * ((e -= 1) * (e - 2) - 1) + r
                    }
                }], (e = [{
                    key: "seed",
                    value: function() {
                        return this.seedFunction()()
                    }
                }, {
                    key: "seedStart",
                    value: function() {
                        return this._seedStart
                    }
                }, {
                    key: "seedRange",
                    value: function() {
                        return this._valOrFn(this._seedRange)
                    }
                }, {
                    key: "seedFunction",
                    value: function() {
                        return this._seedFunction
                    }
                }, {
                    key: "outputStart",
                    value: function() {
                        return this._valOrFn(this._outputStart)
                    }
                }, {
                    key: "outputEnd",
                    value: function() {
                        return this._valOrFn(this._outputEnd)
                    }
                }, {
                    key: "easing",
                    value: function() {
                        return this._valOrFn(this._easing)
                    }
                }, {
                    key: "value",
                    value: function() {
                        return this._easing.apply(this, r(Array.from(this.easingArgs() || [])))
                    }
                }, {
                    key: "atEnd",
                    value: function() {
                        return 1 === this.ratio()
                    }
                }, {
                    key: "atStart",
                    value: function() {
                        return 0 === this.ratio()
                    }
                }, {
                    key: "easingArgs",
                    value: function() {
                        return [this.c(), this.t(), this.d(), this.b()]
                    }
                }, {
                    key: "seedDelta",
                    value: function() {
                        return this.seedRange() > 0 ? Math.min(this.seedRange(), this.seed() - this.seedStart()) : this.seedRange() < 0 ? Math.max(this.seedRange(), this.seed() - this.seedStart()) : 0
                    }
                }, {
                    key: "ratio",
                    value: function() {
                        var t = this.seedRange();
                        return 0 === t ? 1 : Math.max(0, Math.min(1, this.seedDelta() / t))
                    }
                }, {
                    key: "c",
                    value: function() {
                        return this.outputEnd() - this.outputStart()
                    }
                }, {
                    key: "t",
                    value: function() {
                        return this.seedDelta()
                    }
                }, {
                    key: "d",
                    value: function() {
                        return this.seedRange()
                    }
                }, {
                    key: "b",
                    value: function() {
                        return this.outputStart()
                    }
                }, {
                    key: "_valOrFn",
                    value: function(t) {
                        return "function" == typeof t ? t() : t
                    }
                }]) && o(t.prototype, e), n && o(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t;
                var t, e, n
            }()
        },
        194: (t, e, n) => {
            n.d(e, {
                default: () => p
            });
            var r = n(2),
                i = n(195);

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
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, s(r.key), r)
                }
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

            function c(t, e, n) {
                return e = l(e),
                    function(t, e) {
                        if (e && ("object" == typeof e || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, u() ? Reflect.construct(e, n || [], l(t).constructor) : e.apply(t, n))
            }

            function u() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (t) {}
                return (u = function() {
                    return !!t
                })()
            }

            function l(t) {
                return l = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, l(t)
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
                    }(this, e), c(this, e, arguments)
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
                }(e, t), n = e, (s = [{
                    key: "render",
                    value: function() {
                        var t = this.props.tagName || "div";
                        return (0, r.h)(t, o({}, this.props, {
                            ref: this.props.elemRef,
                            style: i.visuallyHiddenElementStyles
                        }), this.props.children)
                    }
                }]) && a(n.prototype, s), u && a(n, u), Object.defineProperty(n, "prototype", {
                    writable: !1
                }), n;
                var n, s, u
            }(r.Component)
        },
        195: (t, e, n) => {
            n.d(e, {
                visuallyHiddenElementStyles: () => r
            });
            var r = {
                clip: "rect(1px, 1px, 1px, 1px)",
                height: "1px",
                overflow: "hidden",
                position: "absolute",
                whiteSpace: "nowrap",
                width: "1px"
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

            function s(t, e, n) {
                if ("function" == typeof t ? t === e : t.has(e)) return arguments.length < 3 ? e : n;
                throw new TypeError("Private element is not present on this object")
            }
            var c = new WeakMap,
                u = function() {
                    return t = function t(e) {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), a(this, c, void 0), this.video = e, this.embedElement = e.container, this.unbinds = [], this.eventListeners = new Map, this.reactMounts = {}, this.isWistiaPlayer = "WISTIA-PLAYER" === this.embedElement.tagName, this.impl = e, this.isWistiaPlayer ? this.api = this.embedElement : this.api = e.publicApi, this.props = {}
                    }, (e = [{
                        key: "disabledButton",
                        get: function() {
                            return e = this, (t = c).get(s(t, e));
                            var t, e
                        },
                        set: function(t) {
                            var e, n, r;
                            n = this, r = t, (e = c).set(s(e, n), r)
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
        204: (t, e, n) => {
            n.d(e, {
                controlMultiplierBasedOnVideo: () => l
            });
            n(3), n(72);
            var r = n(9),
                i = n(4);

            function o(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, i, o, a, s = [],
                            c = !0,
                            u = !1;
                        try {
                            if (o = (n = n.call(t)).next, 0 === e) {
                                if (Object(n) !== n) return;
                                c = !1
                            } else
                                for (; !(c = (r = o.call(n)).done) && (s.push(r.value), s.length !== e); c = !0);
                        } catch (t) {
                            u = !0, i = t
                        } finally {
                            try {
                                if (!c && null != n.return && (a = n.return(), Object(a) !== a)) return
                            } finally {
                                if (u) throw i
                            }
                        }
                        return s
                    }
                }(t, e) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return a(t, e);
                        var n = {}.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(t, e) : void 0
                    }
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function a(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            var s = (0, r.cachedDetect)(),
                c = function() {
                    var t = document.querySelector("meta[name=viewport]"),
                        e = t && t.getAttribute("content"),
                        n = {};
                    e && e.split(/[\s,]+/).forEach((function(t) {
                        var e = t.split("=");
                        2 === e.length && (n[e[0]] = (0, i.cast)(e[1]))
                    }));
                    return n
                },
                u = function(t) {
                    if (!(s.iphone || s.ipad || s.android)) return [640, 960];
                    if (null != t && t.isAudio()) return [500, 960];
                    var e, n = c();
                    if (n.width) {
                        e = "number" == typeof n.width ? 0 + n.width : screen.width || window.innerWidth;
                        var r = Math.max(n["minimum-scale"] || 0, Math.min(n["maximum-scale"] || 10, n["initial-scale"] || 1));
                        r < 1 && (e /= r)
                    } else e = window.innerWidth;
                    return [e, 2 * e / 3]
                },
                l = function(t, e) {
                    var n = t.videoWidth(),
                        r = t.videoHeight();
                    if (n / r < 1) {
                        var i = o(function(t) {
                                if (!(s.iphone || s.ipad || s.android)) return [340, 860];
                                if (null != t && t.isAudio()) return [500, 960];
                                var e, n = c();
                                if (n.height) {
                                    e = "number" == typeof n.height ? 0 + n.height : screen.height || window.innerHeight;
                                    var r = Math.max(n["minimum-scale"] || 0, Math.min(n["maximum-scale"] || 10, n["initial-scale"] || 1));
                                    r < 1 && (e /= r)
                                } else e = window.innerWidth;
                                return [e, 2 * e / 1.3]
                            }(t), 2),
                            a = i[0],
                            l = i[1];
                        if (r <= a) return r / a;
                        if (r > l) return r / l
                    } else {
                        var f = o(e || u(t), 2),
                            p = f[0],
                            h = f[1];
                        if (n <= p) return n / p;
                        if (n > h) return n / h
                    }
                    return 1
                }
        },
        206: (t, e, n) => {
            n.d(e, {
                useCallback: () => C,
                useContext: () => E,
                useDebugValue: () => P,
                useEffect: () => _,
                useId: () => k,
                useImperativeHandle: () => T,
                useLayoutEffect: () => w,
                useMemo: () => O,
                useReducer: () => b,
                useRef: () => S,
                useState: () => m
            });
            var r, i, o, a, s = n(2),
                c = 0,
                u = [],
                l = s.options,
                f = l.__b,
                p = l.__r,
                h = l.diffed,
                d = l.__c,
                v = l.unmount,
                g = l.__;

            function y(t, e) {
                l.__h && l.__h(i, t, c || e), c = 0;
                var n = i.__H || (i.__H = {
                    __: [],
                    __h: []
                });
                return t >= n.__.length && n.__.push({}), n.__[t]
            }

            function m(t) {
                return c = 1, b(R, t)
            }

            function b(t, e, n) {
                var o = y(r++, 2);
                if (o.t = t, !o.__c && (o.__ = [n ? n(e) : R(void 0, e), function(t) {
                        var e = o.__N ? o.__N[0] : o.__[0],
                            n = o.t(e, t);
                        e !== n && (o.__N = [n, o.__[1]], o.__c.setState({}))
                    }], o.__c = i, !i.__f)) {
                    var a = function(t, e, n) {
                        if (!o.__c.__H) return !0;
                        var r = o.__c.__H.__.filter((function(t) {
                            return !!t.__c
                        }));
                        if (r.every((function(t) {
                                return !t.__N
                            }))) return !s || s.call(this, t, e, n);
                        var i = o.__c.props !== t;
                        return r.forEach((function(t) {
                            if (t.__N) {
                                var e = t.__[0];
                                t.__ = t.__N, t.__N = void 0, e !== t.__[0] && (i = !0)
                            }
                        })), s && s.call(this, t, e, n) || i
                    };
                    i.__f = !0;
                    var s = i.shouldComponentUpdate,
                        c = i.componentWillUpdate;
                    i.componentWillUpdate = function(t, e, n) {
                        if (this.__e) {
                            var r = s;
                            s = void 0, a(t, e, n), s = r
                        }
                        c && c.call(this, t, e, n)
                    }, i.shouldComponentUpdate = a
                }
                return o.__N || o.__
            }

            function _(t, e) {
                var n = y(r++, 3);
                !l.__s && I(n.__H, e) && (n.__ = t, n.u = e, i.__H.__h.push(n))
            }

            function w(t, e) {
                var n = y(r++, 4);
                !l.__s && I(n.__H, e) && (n.__ = t, n.u = e, i.__h.push(n))
            }

            function S(t) {
                return c = 5, O((function() {
                    return {
                        current: t
                    }
                }), [])
            }

            function T(t, e, n) {
                c = 6, w((function() {
                    if ("function" == typeof t) {
                        var n = t(e());
                        return function() {
                            t(null), n && "function" == typeof n && n()
                        }
                    }
                    if (t) return t.current = e(),
                        function() {
                            return t.current = null
                        }
                }), null == n ? n : n.concat(t))
            }

            function O(t, e) {
                var n = y(r++, 7);
                return I(n.__H, e) && (n.__ = t(), n.__H = e, n.__h = t), n.__
            }

            function C(t, e) {
                return c = 8, O((function() {
                    return t
                }), e)
            }

            function E(t) {
                var e = i.context[t.__c],
                    n = y(r++, 9);
                return n.c = t, e ? (null == n.__ && (n.__ = !0, e.sub(i)), e.props.value) : t.__
            }

            function P(t, e) {
                l.useDebugValue && l.useDebugValue(e ? e(t) : t)
            }

            function k() {
                var t = y(r++, 11);
                if (!t.__) {
                    for (var e = i.__v; null !== e && !e.__m && null !== e.__;) e = e.__;
                    var n = e.__m || (e.__m = [0, 0]);
                    t.__ = "P" + n[0] + "-" + n[1]++
                }
                return t.__
            }

            function x() {
                for (var t; t = u.shift();)
                    if (t.__P && t.__H) try {
                        t.__H.__h.forEach(L), t.__H.__h.forEach(M), t.__H.__h = []
                    } catch (e) {
                        t.__H.__h = [], l.__e(e, t.__v)
                    }
            }
            l.__b = function(t) {
                i = null, f && f(t)
            }, l.__ = function(t, e) {
                t && e.__k && e.__k.__m && (t.__m = e.__k.__m), g && g(t, e)
            }, l.__r = function(t) {
                p && p(t), r = 0;
                var e = (i = t.__c).__H;
                e && (o === i ? (e.__h = [], i.__h = [], e.__.forEach((function(t) {
                    t.__N && (t.__ = t.__N), t.u = t.__N = void 0
                }))) : (e.__h.forEach(L), e.__h.forEach(M), e.__h = [], r = 0)), o = i
            }, l.diffed = function(t) {
                h && h(t);
                var e = t.__c;
                e && e.__H && (e.__H.__h.length && (1 !== u.push(e) && a === l.requestAnimationFrame || ((a = l.requestAnimationFrame) || j)(x)), e.__H.__.forEach((function(t) {
                    t.u && (t.__H = t.u), t.u = void 0
                }))), o = i = null
            }, l.__c = function(t, e) {
                e.some((function(t) {
                    try {
                        t.__h.forEach(L), t.__h = t.__h.filter((function(t) {
                            return !t.__ || M(t)
                        }))
                    } catch (n) {
                        e.some((function(t) {
                            t.__h && (t.__h = [])
                        })), e = [], l.__e(n, t.__v)
                    }
                })), d && d(t, e)
            }, l.unmount = function(t) {
                v && v(t);
                var e, n = t.__c;
                n && n.__H && (n.__H.__.forEach((function(t) {
                    try {
                        L(t)
                    } catch (t) {
                        e = t
                    }
                })), n.__H = void 0, e && l.__e(e, n.__v))
            };
            var A = "function" == typeof requestAnimationFrame;

            function j(t) {
                var e, n = function() {
                        clearTimeout(r), A && cancelAnimationFrame(e), setTimeout(t)
                    },
                    r = setTimeout(n, 35);
                A && (e = requestAnimationFrame(n))
            }

            function L(t) {
                var e = i,
                    n = t.__c;
                "function" == typeof n && (t.__c = void 0, n()), i = e
            }

            function M(t) {
                var e = i;
                t.__c = t.__(), i = e
            }

            function I(t, e) {
                return !t || t.length !== e.length || e.some((function(e, n) {
                    return e !== t[n]
                }))
            }

            function R(t, e) {
                return "function" == typeof e ? e(t) : e
            }
        },
        259: (t, e, n) => {
            n.d(e, {
                BASE_CONTROL_BAR_HEIGHT_PX: () => r,
                DEFAULT_BUTTON_HEIGHT_PX: () => i,
                DEFAULT_BUTTON_MARGIN_RIGHT_PX: () => s,
                DEFAULT_BUTTON_WIDTH_PX: () => o,
                DEFAULT_DIALOG_MENU_ITEM_FONT_SIZE_PX: () => a,
                DEFAULT_MENU_ITEM_HEIGHT_PX: () => c
            });
            var r = 34,
                i = r,
                o = 40,
                a = 14,
                s = 10,
                c = 40
        },
        263: (t, e, n) => {
            n.d(e, {
                getFontFamilyForFontOptionLabel: () => o
            });
            var r = n(142),
                i = n(28),
                o = function(t) {
                    var e;
                    return null !== (e = r.CAPTIONS_FONT_FAMILY_MAP.get(t)) && void 0 !== e ? e : i.interFontFamily
                }
        },
        265: (t, e, n) => {
            n.d(e, {
                getFontVariantForFontOptionLabel: () => r
            });
            var r = function(t) {
                return "Small caps" === t ? "small-caps" : "normal"
            }
        },
        330: (t, e, n) => {
            n.d(e, {
                getLoadedSelfHostedGoogleFonts: () => o,
                loadSelfHostedGoogleFont: () => a
            });
            n(36);
            var r = ["Arsenal", "Barlow Condensed", "Catamaran", "Chivo", "Corben", "Dancing Script", "Fira Mono", "Inconsolata", "Inter", "Lato", "Libre Franklin", "Lora", "Merriweather", "Montserrat", "Nunito", "Open Sans", "Oswald", "PT Serif", "Playfair Display", "Poppins", "Roboto", "Slabo 13px", "Source Sans Pro", "Source Serif Pro", "Work Sans", "Zilla Slab"],
                i = "https://fast.wistia.com/fonts/google_fonts/",
                o = function() {
                    var t = document.querySelectorAll('link[rel="stylesheet"][href^="'.concat(i, '"]'));
                    return 0 === t.length ? [] : Array.from(t).reduce((function(t, e) {
                        var n = new URL(e.href).pathname.split("/")[3];
                        return t.includes(n) || t.push(n), t
                    }), [])
                },
                a = function(t) {
                    if (r.includes(t)) {
                        var e = encodeURIComponent(t).replaceAll("%20", "_");
                        if (!o().includes(e)) {
                            var n = document.createElement("link");
                            n.rel = "stylesheet", n.href = "".concat(i).concat(e, "/").concat(e, ".css"), document.head.appendChild(n)
                        }
                    }
                }
        },
        457: (t, e, n) => {
            n.d(e, {
                forwardRef: () => g
            });
            var r = n(2),
                i = n(206);

            function o(t, e) {
                for (var n in e) t[n] = e[n];
                return t
            }

            function a(t, e) {
                for (var n in t)
                    if ("__source" !== n && !(n in e)) return !0;
                for (var r in e)
                    if ("__source" !== r && t[r] !== e[r]) return !0;
                return !1
            }

            function s(t, e) {
                var n = e(),
                    r = (0, i.useState)({
                        t: {
                            __: n,
                            u: e
                        }
                    }),
                    o = r[0].t,
                    a = r[1];
                return (0, i.useLayoutEffect)((function() {
                    o.__ = n, o.u = e, c(o) && a({
                        t: o
                    })
                }), [t, n, e]), (0, i.useEffect)((function() {
                    return c(o) && a({
                        t: o
                    }), t((function() {
                        c(o) && a({
                            t: o
                        })
                    }))
                }), [t]), n
            }

            function c(t) {
                var e, n, r = t.u,
                    i = t.__;
                try {
                    var o = r();
                    return !((e = i) === (n = o) && (0 !== e || 1 / e == 1 / n) || e != e && n != n)
                } catch (t) {
                    return !0
                }
            }

            function u(t) {
                t()
            }

            function l(t) {
                return t
            }

            function f() {
                return [!1, u]
            }
            var p = i.useLayoutEffect;

            function h(t, e) {
                this.props = t, this.context = e
            }(h.prototype = new r.Component).isPureReactComponent = !0, h.prototype.shouldComponentUpdate = function(t, e) {
                return a(this.props, t) || a(this.state, e)
            };
            var d = r.options.__b;
            r.options.__b = function(t) {
                t.type && t.type.__f && t.ref && (t.props.ref = t.ref, t.ref = null), d && d(t)
            };
            var v = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;

            function g(t) {
                function e(e) {
                    var n = o({}, e);
                    return delete n.ref, t(n, e.ref || null)
                }
                return e.$$typeof = v, e.render = t, e.prototype.isReactComponent = e.__f = !0, e.displayName = "ForwardRef(" + (t.displayName || t.name) + ")", e
            }
            var y = function(t, e) {
                    return null == t ? null : (0, r.toChildArray)((0, r.toChildArray)(t).map(e))
                },
                m = (r.toChildArray, r.options.__e);
            r.options.__e = function(t, e, n, r) {
                if (t.then)
                    for (var i, o = e; o = o.__;)
                        if ((i = o.__c) && i.__c) return null == e.__e && (e.__e = n.__e, e.__k = n.__k), i.__c(t, e);
                m(t, e, n, r)
            };
            var b = r.options.unmount;

            function _(t, e, n) {
                return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach((function(t) {
                    "function" == typeof t.__c && t.__c()
                })), t.__c.__H = null), null != (t = o({}, t)).__c && (t.__c.__P === n && (t.__c.__P = e), t.__c.__e = !0, t.__c = null), t.__k = t.__k && t.__k.map((function(t) {
                    return _(t, e, n)
                }))), t
            }

            function w(t, e, n) {
                return t && n && (t.__v = null, t.__k = t.__k && t.__k.map((function(t) {
                    return w(t, e, n)
                })), t.__c && t.__c.__P === e && (t.__e && n.appendChild(t.__e), t.__c.__e = !0, t.__c.__P = n)), t
            }

            function S() {
                this.__u = 0, this.o = null, this.__b = null
            }

            function T(t) {
                var e = t.__.__c;
                return e && e.__a && e.__a(t)
            }

            function O() {
                this.i = null, this.l = null
            }
            r.options.unmount = function(t) {
                var e = t.__c;
                e && e.__R && e.__R(), e && 32 & t.__u && (t.type = null), b && b(t)
            }, (S.prototype = new r.Component).__c = function(t, e) {
                var n = e.__c,
                    r = this;
                null == r.o && (r.o = []), r.o.push(n);
                var i = T(r.__v),
                    o = !1,
                    a = function() {
                        o || (o = !0, n.__R = null, i ? i(s) : s())
                    };
                n.__R = a;
                var s = function() {
                    if (!--r.__u) {
                        if (r.state.__a) {
                            var t = r.state.__a;
                            r.__v.__k[0] = w(t, t.__c.__P, t.__c.__O)
                        }
                        var e;
                        for (r.setState({
                                __a: r.__b = null
                            }); e = r.o.pop();) e.forceUpdate()
                    }
                };
                r.__u++ || 32 & e.__u || r.setState({
                    __a: r.__b = r.__v.__k[0]
                }), t.then(a, a)
            }, S.prototype.componentWillUnmount = function() {
                this.o = []
            }, S.prototype.render = function(t, e) {
                if (this.__b) {
                    if (this.__v.__k) {
                        var n = document.createElement("div"),
                            i = this.__v.__k[0].__c;
                        this.__v.__k[0] = _(this.__b, n, i.__O = i.__P)
                    }
                    this.__b = null
                }
                var o = e.__a && (0, r.createElement)(r.Fragment, null, t.fallback);
                return o && (o.__u &= -33), [(0, r.createElement)(r.Fragment, null, e.__a ? null : t.children), o]
            };
            var C = function(t, e, n) {
                if (++n[1] === n[0] && t.l.delete(e), t.props.revealOrder && ("t" !== t.props.revealOrder[0] || !t.l.size))
                    for (n = t.i; n;) {
                        for (; n.length > 3;) n.pop()();
                        if (n[1] < n[0]) break;
                        t.i = n = n[2]
                    }
            };
            (O.prototype = new r.Component).__a = function(t) {
                var e = this,
                    n = T(e.__v),
                    r = e.l.get(t);
                return r[0]++,
                    function(i) {
                        var o = function() {
                            e.props.revealOrder ? (r.push(i), C(e, t, r)) : i()
                        };
                        n ? n(o) : o()
                    }
            }, O.prototype.render = function(t) {
                this.i = null, this.l = new Map;
                var e = (0, r.toChildArray)(t.children);
                t.revealOrder && "b" === t.revealOrder[0] && e.reverse();
                for (var n = e.length; n--;) this.l.set(e[n], this.i = [1, 0, this.i]);
                return t.children
            }, O.prototype.componentDidUpdate = O.prototype.componentDidMount = function() {
                var t = this;
                this.l.forEach((function(e, n) {
                    C(t, n, e)
                }))
            };
            var E = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
                P = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
                k = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
                x = /[A-Z0-9]/g,
                A = "undefined" != typeof document,
                j = function(t) {
                    return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(t)
                };
            r.Component.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach((function(t) {
                Object.defineProperty(r.Component.prototype, t, {
                    configurable: !0,
                    get: function() {
                        return this["UNSAFE_" + t]
                    },
                    set: function(e) {
                        Object.defineProperty(this, t, {
                            configurable: !0,
                            writable: !0,
                            value: e
                        })
                    }
                })
            }));
            var L = r.options.event;

            function M() {}

            function I() {
                return this.cancelBubble
            }

            function R() {
                return this.defaultPrevented
            }
            r.options.event = function(t) {
                return L && (t = L(t)), t.persist = M, t.isPropagationStopped = I, t.isDefaultPrevented = R, t.nativeEvent = t
            };
            var F, D = {
                    enumerable: !1,
                    configurable: !0,
                    get: function() {
                        return this.class
                    }
                },
                N = r.options.vnode;
            r.options.vnode = function(t) {
                "string" == typeof t.type && function(t) {
                    var e = t.props,
                        n = t.type,
                        i = {},
                        o = -1 === n.indexOf("-");
                    for (var a in e) {
                        var s = e[a];
                        if (!("value" === a && "defaultValue" in e && null == s || A && "children" === a && "noscript" === n || "class" === a || "className" === a)) {
                            var c = a.toLowerCase();
                            "defaultValue" === a && "value" in e && null == e.value ? a = "value" : "download" === a && !0 === s ? s = "" : "translate" === c && "no" === s ? s = !1 : "o" === c[0] && "n" === c[1] ? "ondoubleclick" === c ? a = "ondblclick" : "onchange" !== c || "input" !== n && "textarea" !== n || j(e.type) ? "onfocus" === c ? a = "onfocusin" : "onblur" === c ? a = "onfocusout" : k.test(a) && (a = c) : c = a = "oninput" : o && P.test(a) ? a = a.replace(x, "-$&").toLowerCase() : null === s && (s = void 0), "oninput" === c && i[a = c] && (a = "oninputCapture"), i[a] = s
                        }
                    }
                    "select" == n && i.multiple && Array.isArray(i.value) && (i.value = (0, r.toChildArray)(e.children).forEach((function(t) {
                        t.props.selected = -1 != i.value.indexOf(t.props.value)
                    }))), "select" == n && null != i.defaultValue && (i.value = (0, r.toChildArray)(e.children).forEach((function(t) {
                        t.props.selected = i.multiple ? -1 != i.defaultValue.indexOf(t.props.value) : i.defaultValue == t.props.value
                    }))), e.class && !e.className ? (i.class = e.class, Object.defineProperty(i, "className", D)) : (e.className && !e.class || e.class && e.className) && (i.class = i.className = e.className), t.props = i
                }(t), t.$$typeof = E, N && N(t)
            };
            var H = r.options.__r;
            r.options.__r = function(t) {
                H && H(t), F = t.__c
            };
            var W = r.options.diffed;
            r.options.diffed = function(t) {
                W && W(t);
                var e = t.props,
                    n = t.__e;
                null != n && "textarea" === t.type && "value" in e && e.value !== n.value && (n.value = null == e.value ? "" : e.value), F = null
            };
            i.useCallback, i.useContext, i.useDebugValue, i.useEffect, i.useId, i.useImperativeHandle, i.useLayoutEffect, i.useMemo, i.useReducer, i.useRef, i.useState;
            r.Fragment, i.useState, i.useId, i.useReducer, i.useEffect, i.useLayoutEffect, i.useRef, i.useImperativeHandle, i.useMemo, i.useCallback, i.useContext, i.useDebugValue, r.createElement, r.createContext, r.createRef, r.Fragment, r.Component
        },
        463: (t, e, n) => {
            var r = n(2),
                i = n(36),
                o = n(9),
                a = n(3),
                s = n(47),
                c = n(197),
                u = n(464),
                l = n(465),
                f = n(73),
                p = n(46),
                h = n(140),
                d = n(45),
                v = n(141),
                g = n(4),
                y = n(16),
                m = n(95);

            function b(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function _() {
                return _ = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n)({}).hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }, _.apply(null, arguments)
            }

            function w(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, P(r.key), r)
                }
            }

            function S(t, e, n) {
                return e = O(e),
                    function(t, e) {
                        if (e && ("object" == typeof e || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, T() ? Reflect.construct(e, n || [], O(t).constructor) : e.apply(t, n))
            }

            function T() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (t) {}
                return (T = function() {
                    return !!t
                })()
            }

            function O(t) {
                return O = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, O(t)
            }

            function C(t, e) {
                return C = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, C(t, e)
            }

            function E(t, e, n) {
                return (e = P(e)) in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function P(t) {
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
            var k = (0, o.cachedDetect)();
            (0, p.defineTranslations)("en-US", {
                CAPTIONS_HIDE_MENU: "Hide captions menu",
                CAPTIONS_OFF: "Off",
                CAPTIONS_SHOW_MENU: "Show captions menu"
            });
            var x = "_off_",
                A = ["playerLanguage", "scale", "controlBarBorderRadius", "videoWidth"],
                j = function(t) {
                    function e(t) {
                        var n;
                        return function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), E(n = S(this, e, [t]), "onCaptionSettingsChange", (function(t, e) {
                            n.video.embedElement.dispatchEvent(new CustomEvent("captionssettingschange", {
                                detail: t
                            })), y.Wistia.Metrics.videoCount(n.video, "player/captions-settings-change", 1, {
                                allSettings: t,
                                changedSettings: e
                            })
                        })), E(n, "setAriaLiveText", (function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                            n.video.setAriaLiveText(t)
                        })), E(n, "toggleTranscript", (function() {
                            n.video.whenControlMounted("transcript").then((function(t) {
                                t._isVisible ? t.close() : t.open()
                            }))
                        })), n.video = t, n.options = t.plugin.captions.options, n._menuKey = 0, n._isTranscriptOpen = !1, n.fetchCaptions().then((function() {
                            var t, e = (0, v.getCaptionViewerPreferences)();
                            if (n.options.onByDefault && (0, i.isEmptyRecord)(e)) n.video.captionsEnabled(!0);
                            else {
                                var r = e.onByViewerPreference,
                                    o = e.iso6392Language;
                                if (!1 !== r)(r && (null !== (t = n.video.captionsLanguages()) && void 0 !== t ? t : []).some((function(t) {
                                    return t.iso6392LanguageCode === o
                                })) || n.options.onByDefault) && n.video.captionsEnabled(!0);
                                else n.video.captionsEnabled(!1)
                            }
                        })), n.unbinds = [], n.onTranscriptControlVisibilityChange = function(t) {
                            n._isTranscriptOpen = t.detail.isVisible, n.renderDialog()
                        }, n.video.embedElement.addEventListener("transcript-control-visibility-change", n.onTranscriptControlVisibilityChange), n.unbinds.push((function() {
                            n.video.embedElement.removeEventListener("transcript-control-visibility-change", n.onTranscriptControlVisibilityChange)
                        })), n.onCaptionsChange = function() {
                            n.renderDialog(), n.renderButton(), n.logSelectionInStats(), n.setCustomizeEmbedOptionsForCurrentLanguage()
                        }, n.video.embedElement.addEventListener("captions-change", n.onCaptionsChange), n.unbinds.push((function() {
                            n.video.embedElement.removeEventListener("captions-change", n.onCaptionsChange)
                        })), n.video.whenVideoElementInDom().then((function(t) {
                            n.unbinds.push((0, a.elemBind)(t.textTracks, "change", (function() {
                                (0, h.shouldShowNativeCaptions)(n.video) && n.matchMenuToSelectedTextTrack()
                            })))
                        })), n
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
                        }), e && C(t, e)
                    }(e, t), n = e, o = [{
                        key: "mountButton",
                        value: function(t) {
                            this.buttonRoot = t, this.renderButton()
                        }
                    }, {
                        key: "mountDialog",
                        value: function(t) {
                            var e = this;
                            this.dialogRoot = t;
                            var n = Promise.all([(0, s.dynamicImport)("assets/external/interFontFace.js"), this.fetchCaptions()]).then((function() {
                                e.renderDialog()
                            }));
                            return this.loading(new Promise((function(t) {
                                n.then(t)
                            }))), n
                        }
                    }, {
                        key: "renderButton",
                        value: function() {
                            this.video._inNativeMode() || this.buttonRoot && (this.updateButtonLabel(), (0, r.render)((0, r.h)(u.RoundedAudioDescriptionButton, null), this.buttonRoot), this.reactMounts.button = [this.buttonRoot])
                        }
                    }, {
                        key: "controlDialogOpened",
                        value: function() {
                            this.updateButtonLabel()
                        }
                    }, {
                        key: "controlDialogClosed",
                        value: function() {
                            this._menuKey += 1, this.renderDialog(), this.updateButtonLabel(), this.setAriaLiveText("")
                        }
                    }, {
                        key: "updateButtonLabel",
                        value: function() {
                            this.dialog && (this.dialog.isOpen() ? this.setButtonLabel(this.translate("HIDE_MENU")) : this.setButtonLabel(this.translate("SHOW_MENU")))
                        }
                    }, {
                        key: "renderDialog",
                        value: function() {
                            this.captionsResp && this.dialogRoot && ((0, r.render)((0, r.h)(l.CaptionsMenu, _({}, this.props, {
                                key: this._menuKey,
                                items: this.menuItems(),
                                scale: this.props.scale,
                                isPlaybarEnabled: this.video.isControlEnabled("playbar"),
                                isTranscriptEnabled: this.isTranscriptEnabled(),
                                isTranscriptOpen: this._isTranscriptOpen,
                                setAriaLiveText: this.setAriaLiveText,
                                toggleTranscript: this.toggleTranscript,
                                onCaptionsSettingsUpdated: this.onCaptionSettingsChange
                            })), this.dialogRoot), this.reactMounts.menu = [this.dialogRoot])
                        }
                    }, {
                        key: "shouldRenderDialog",
                        value: function(t) {
                            var e = this;
                            return this.dialog && this.dialog.isOpen() && A.some((function(n) {
                                return !(0, g.equalsDeep)(t[n], e.props[n])
                            }))
                        }
                    }, {
                        key: "onControlPropsUpdated",
                        value: function(t) {
                            this.shouldRenderDialog(t) && this.renderDialog(), t.playerLanguage && this.props.playerLanguage.code !== t.playerLanguage.code && this.updateButtonLabel()
                        }
                    }, {
                        key: "translate",
                        value: function(t) {
                            return (0, p.getTranslation)(this.props.playerLanguage.code, "CAPTIONS_".concat(t))
                        }
                    }, {
                        key: "isTranscriptEnabled",
                        value: function() {
                            return !1 !== this.options.transcript
                        }
                    }, {
                        key: "tearDownDialogIfClickedRecently",
                        value: function() {
                            var t = this;
                            (0, d.isMouseDownRecently)() && setTimeout((function() {
                                t.dialog.close(), t.buttonRoot.parentElement.focus()
                            }), 300)
                        }
                    }, {
                        key: "clearCaptionsViewerPreferenceLanguage",
                        value: function() {
                            (0, v.updateCaptionViewerPreferences)({
                                language: void 0,
                                iso6392Language: void 0
                            })
                        }
                    }, {
                        key: "menuItems",
                        value: function() {
                            var t = this;
                            return [{
                                bcp47LanguageTag: this.props.playerLanguage.code,
                                text: this.translate("OFF"),
                                isSelected: !this.video.captionsEnabled(),
                                onClick: function() {
                                    t.isTranscriptEnabled() && t.video.whenControlMounted("transcript").then((function(t) {
                                        return t.close()
                                    })), t.turnOff(), t.tearDownDialogIfClickedRecently()
                                }
                            }].concat(this.captionsResp.captions.map((function(e) {
                                var n = !t.captionsResp.captions.some((function(t) {
                                    return t.native_name !== e.native_name && t.generic_name === e.generic_name
                                }));
                                return {
                                    bcp47LanguageTag: e.bcp47LanguageTag,
                                    text: n ? e.generic_native_name : e.native_name,
                                    isSelected: t.video.captionsEnabled() && t.video.captionsLanguage().ietfLanguageTag === e.language,
                                    onClick: function() {
                                        e.language === x ? t.video.captionsEnabled(!1) : (t.video.captionsLanguage(e.language), t.video.captionsEnabled(!0)), t.tearDownDialogIfClickedRecently()
                                    }
                                }
                            })).sort((function(e, n) {
                                return e.text === t.translate("OFF") ? -1 : n.text === t.translate("OFF") ? 1 : e.text.localeCompare(n.text)
                            })))
                        }
                    }, {
                        key: "getCaptions",
                        value: function() {
                            return this.captionsResp && this.captionsResp.captions ? this.captionsResp.captions : []
                        }
                    }, {
                        key: "getPreferredLanguage",
                        value: function() {
                            var t = (0, h.getPreferredCaptionsIndex)(this.video._mediaData, this.getPreferredLanguageOptions());
                            return t >= 0 ? this.video._mediaData.availableTranscripts[t] : null
                        }
                    }, {
                        key: "getPreferredLanguageOptions",
                        value: function() {
                            return function(t) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var n = null != arguments[e] ? arguments[e] : {};
                                    e % 2 ? b(Object(n), !0).forEach((function(e) {
                                        E(t, e, n[e])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : b(Object(n)).forEach((function(e) {
                                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                                    }))
                                }
                                return t
                            }({
                                language: this.video.embedOptions().language
                            }, this.options)
                        }
                    }, {
                        key: "turnOff",
                        value: function() {
                            this.video.captionsEnabled(!1)
                        }
                    }, {
                        key: "findMatchingLanguage",
                        value: function(t) {
                            var e = [t],
                                n = (0, m.getPreferredAvailableLanguageIndex)(this.captionsResp.captions.map((function(t) {
                                    return t.language
                                })), e);
                            return -1 === n ? null : this.captionsResp.captions[n]
                        }
                    }, {
                        key: "logSelectionInStats",
                        value: function() {
                            if (this.captionsResp) {
                                var t = (0, h.getCaptionsForLanguage)(this.selectedLanguage, this.captionsResp.captions);
                                t && "_preview_" !== t.language ? (this._lastStatsData = {
                                    caption_key: t.key,
                                    language: t.language,
                                    time: this.video.time(),
                                    enabled: t.language !== x
                                }, this.video._tracker.logCaptionSelection(this._lastStatsData)) : this._lastStatsData && (this._lastStatsData.enabled = !1, this._lastStatsData.time = this.video.time(), this.video._tracker.logCaptionSelection(this._lastStatsData))
                            }
                        }
                    }, {
                        key: "fetchCaptions",
                        value: function() {
                            var t = this;
                            return this._destroyed ? new Promise((function() {})) : (0, h.fetchCaptions)(this.video, this.getPreferredLanguageOptions()).then((function(e) {
                                return t.captionsResp = e, e
                            }))
                        }
                    }, {
                        key: "matchMenuToSelectedTextTrack",
                        value: function() {
                            if ((!k.edge || this.video._inNativeMode()) && !(this._lastMatchedMenuAt && Date.now() - this._lastMatchedMenuAt < 500)) {
                                this._lastMatchedMenuAt = Date.now();
                                for (var t = this.video.getMediaElement(), e = this.video.captionsLanguage().ietfLanguageTag, n = null, r = 0; r < t.textTracks.length; r++) {
                                    var i = t.textTracks[r];
                                    "showing" === i.mode && "captions" === i.kind && (n = i.language)
                                }
                                null == n ? this.video.captionsEnabled(!1) : e !== n && this.video.captionsLanguage(n)
                            }
                        }
                    }, {
                        key: "setCustomizeEmbedOptionsForCurrentLanguage",
                        value: function() {
                            var t, e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.video.captionsLanguage().ietfLanguageTag,
                                r = null === (t = this.video._mediaData.translatedMediaData) || void 0 === t || null === (e = t.find((function(t) {
                                    return t.ietfLanguageTag === n
                                }))) || void 0 === e ? void 0 : e.embedOptions;
                            this.video.setCustomizeEmbedOptions(r)
                        }
                    }], o && w(n.prototype, o), c && w(n, c), Object.defineProperty(n, "prototype", {
                        writable: !1
                    }), n;
                    var n, o, c
                }(c.Control);
            j.handle = "captionsButton", j.type = "control-bar-right", j.sortValue = 50, j.shouldMount = function(t) {
                var e, n, r = t.plugin.captions;
                return null != r && !1 === t.isLiveMedia() && (null != r.captions ? r.captions.length > 0 : (null !== (e = null === (n = t._mediaData.availableTranscripts) || void 0 === n ? void 0 : n.length) && void 0 !== e ? e : 0) > 0)
            }, (0, f.defineControl)(j)
        },
        464: (t, e, n) => {
            n.d(e, {
                RoundedAudioDescriptionButton: () => o
            });
            var r = n(2),
                i = n(30),
                o = function() {
                    var t = (0, i.standardSvgAttrs)({
                        width: 40,
                        height: 34,
                        ariaHidden: !0,
                        styleOverride: {
                            fill: "none"
                        }
                    });
                    return (0, r.h)("svg", t, (0, r.h)("path", {
                        d: "M18.4 18.7C17.9 19.4 17.3 19.9 16.3 19.9C15 19.9 13.9 18.8 13.9 17.1C13.9 15.5 14.9 14.3 16.3 14.3C17.3 14.3 17.9 14.8 18.3 15.5",
                        stroke: "white",
                        "stroke-width": "1.8",
                        "stroke-linecap": "round"
                    }), (0, r.h)("path", {
                        d: "M25.8 18.7C25.3 19.4 24.7 19.9 23.7 19.9C22.4 19.9 21.3 18.8 21.3 17.1C21.3 15.5 22.3 14.3 23.7 14.3C24.7 14.3 25.3 14.8 25.7 15.5",
                        stroke: "white",
                        "stroke-width": "1.8",
                        "stroke-linecap": "round"
                    }), (0, r.h)("path", {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M31 21.9811C31 23.5912 29.6 25 28 25H12C10.4 25 9 23.5912 9 21.9811V12.0189C9 10.4088 10.4 9 12 9H28C29.6 9 31 10.4088 31 12.0189V21.9811Z",
                        stroke: "white",
                        "stroke-width": "2",
                        "stroke-linecap": "round"
                    }))
                }
        },
        465: (t, e, n) => {
            n.d(e, {
                CaptionsMenu: () => p
            });
            var r = n(2),
                i = n(466),
                o = n(472),
                a = n(475),
                s = n(194),
                c = n(486),
                u = n(487),
                l = n(259),
                f = n(142),
                p = function(t) {
                    var e = t.isTranscriptEnabled,
                        n = t.isTranscriptOpen,
                        p = t.isPlaybarEnabled,
                        h = t.items,
                        d = t.controlBarBorderRadius,
                        v = t.scale,
                        g = t.playerLanguage,
                        y = t.toggleTranscript,
                        m = t.onCaptionsSettingsUpdated,
                        b = t.videoWidth,
                        _ = t.setAriaLiveText,
                        w = b < f.NARROW_WIDTH_THRESHOLD_PX;
                    return (0, r.h)(a.MenuRoot, {
                        scale: v,
                        controlBarBorderRadius: d,
                        playerLanguage: g
                    }, (0, r.h)("div", {
                        class: "w-captions-menu w-css-reset w-css-reset-tree",
                        "data-testid": "captions-menu"
                    }, (0, r.h)(a.Menu, null, e && p && (0, r.h)(c.TranscriptItem, {
                        isTranscriptOpen: n,
                        playerLanguage: g,
                        toggleTranscript: y,
                        controlBarBorderRadius: d,
                        scale: v
                    }), (0, r.h)("fieldset", {
                        style: {
                            border: 0,
                            padding: 0,
                            margin: 0
                        }
                    }, (0, r.h)(s.default, {
                        tagName: "legend"
                    }, "Captions Menu"), h.map((function(t, e) {
                        return (0, r.h)(u.CaptionsItem, {
                            controlBarBorderRadius: d,
                            scale: v,
                            item: t,
                            index: e
                        })
                    }))), (0, r.h)(a.MenuTrigger, {
                        menuKey: "captionsSettings",
                        shouldHaveRoundedBottomCorners: !0
                    }, (0, r.h)("div", {
                        style: {
                            height: "".concat(l.DEFAULT_MENU_ITEM_HEIGHT_PX * v, "px"),
                            display: "flex",
                            alignItems: "center",
                            lineHeight: "".concat(l.DEFAULT_BUTTON_HEIGHT_PX * v, "px")
                        }
                    }, (0, r.h)(o.CaptionsSettingsIcon, {
                        scale: v
                    }), "Captions settings"))), (0, r.h)(i.CaptionsSettingsMenu, {
                        onCaptionsSettingsUpdated: m,
                        isNarrow: w,
                        setAriaLiveText: _
                    })))
                }
        },
        466: (t, e, n) => {
            n.d(e, {
                CaptionsSettingsMenu: () => S
            });
            var r = n(2),
                i = n(36),
                o = n(467),
                a = n(468),
                s = n(471),
                c = n(472),
                u = n(473),
                l = n(474),
                f = n(475),
                p = n(470),
                h = n(480),
                d = n(484),
                v = n(143),
                g = n(485),
                y = n(142),
                m = n(46);

            function b() {
                return b = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n)({}).hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }, b.apply(null, arguments)
            }(0, m.defineTranslations)("en-US", {
                CAPTIONS_BACK_TO_CAPTIONS_MENU: "Back to captions menu",
                CAPTIONS_CAPTIONS_SETTINGS_RESET_DEFAULTS: "Captions settings reset to defaults",
                CAPTIONS_CHARACTER_EDGE_STYLE: "Character edge style",
                CAPTIONS_CHARACTER_EDGE_STYLE_CLOSE: "Close character edge style menu",
                CAPTIONS_CHARACTER_EDGE_STYLE_OPEN: "Open character edge style menu",
                CAPTIONS_FONT_FAMILY: "Font family",
                CAPTIONS_FONT_FAMILY_CLOSE: "Close font family menu",
                CAPTIONS_FONT_FAMILY_OPEN: "Open font family menu"
            });
            var _ = function(t) {
                    var e = t.menuKey,
                        n = t.scale,
                        o = t.children,
                        a = t.ariaLabel;
                    return (0, r.h)(f.MenuTrigger, b({
                        menuKey: e
                    }, (0, i.isNotNil)(a) ? {
                        ariaLabel: a
                    } : {}), (0, r.h)("div", {
                        style: {
                            display: "flex",
                            justifyContent: "space-between",
                            width: "100%",
                            fontSize: "".concat(12 * n, "px"),
                            position: "relative",
                            paddingLeft: "".concat(y.SETTINGS_MENU_PADDING_X_PX * n, "px")
                        }
                    }, o, (0, r.h)("div", {
                        style: {
                            position: "absolute",
                            right: 0,
                            top: "50%",
                            transform: "translateY(-50%)"
                        }
                    }, (0, r.h)(s.MenuForwardIcon, {
                        scale: n
                    }))))
                },
                w = function(t) {
                    var e = t.children,
                        n = (0, p.useMenuRootContext)().uiContext.scale;
                    return (0, r.h)("div", {
                        style: {
                            padding: "0 ".concat(y.SETTINGS_MENU_PADDING_X_PX * n, "px")
                        }
                    }, e)
                },
                S = function(t) {
                    var e = t.onCaptionsSettingsUpdated,
                        n = t.isNarrow,
                        i = t.setAriaLiveText,
                        s = (0, p.useMenuRootContext)().uiContext,
                        b = s.scale,
                        S = s.playerLanguage,
                        T = (0, o.useCaptionsSettingsFromLocalStorage)({
                            onCaptionsSettingsUpdated: e
                        }),
                        O = T.captionsSettings,
                        C = T.setCaptionsSettings,
                        E = (0, m.getTranslations)("string" == typeof S ? S : S.code, ["CAPTIONS_BACK_TO_CAPTIONS_MENU", "CAPTIONS_CAPTIONS_SETTINGS_RESET_DEFAULTS", "CAPTIONS_CHARACTER_EDGE_STYLE", "CAPTIONS_CHARACTER_EDGE_STYLE_CLOSE", "CAPTIONS_CHARACTER_EDGE_STYLE_OPEN", "CAPTIONS_FONT_FAMILY", "CAPTIONS_FONT_FAMILY_CLOSE", "CAPTIONS_FONT_FAMILY_OPEN"]),
                        P = E.CAPTIONS_BACK_TO_CAPTIONS_MENU,
                        k = E.CAPTIONS_CAPTIONS_SETTINGS_RESET_DEFAULTS,
                        x = E.CAPTIONS_CHARACTER_EDGE_STYLE,
                        A = E.CAPTIONS_CHARACTER_EDGE_STYLE_CLOSE,
                        j = E.CAPTIONS_CHARACTER_EDGE_STYLE_OPEN,
                        L = E.CAPTIONS_FONT_FAMILY,
                        M = E.CAPTIONS_FONT_FAMILY_CLOSE,
                        I = E.CAPTIONS_FONT_FAMILY_OPEN,
                        R = Object.keys(y.DEFAULT_CAPTION_SETTINGS).some((function(t) {
                            return y.DEFAULT_CAPTION_SETTINGS[t] !== O[t]
                        }));
                    return R && i(""), (0, r.h)(r.Fragment, null, (0, r.h)(f.Menu, {
                        menuKey: "captionsSettings",
                        label: "Captions settings",
                        ariaLabel: P
                    }, (0, r.h)(u.CaptionsSettingsMenuSection, {
                        title: "Font size"
                    }, (0, r.h)(w, null, (0, r.h)(h.RadioGroup, {
                        shouldWrap: n,
                        ariaLabel: "Font size",
                        scale: b
                    }, y.FONT_SIZES.map((function(t) {
                        return (0, r.h)(h.RadioPill, {
                            key: t,
                            name: "font-size",
                            label: "".concat(t, "%"),
                            value: t.toString(),
                            scale: b,
                            checked: O.fontSize === t,
                            onChange: function(t) {
                                if (t.target instanceof HTMLInputElement) {
                                    var e = Number(t.target.value);
                                    (0, v.isCaptionFontSize)(e) && C({
                                        fontSize: e
                                    })
                                }
                            }
                        })
                    }))))), (0, r.h)(u.CaptionsSettingsMenuSection, {
                        title: L,
                        style: {
                            gap: "4px"
                        }
                    }, (0, r.h)(_, {
                        ariaLabel: I,
                        menuKey: "font-family",
                        scale: b
                    }, (0, r.h)("span", {
                        style: (0, g.getFontStyleForCaptions)(O.fontFamily)
                    }, O.fontFamily))), (0, r.h)(u.CaptionsSettingsMenuSection, {
                        title: "Font color"
                    }, (0, r.h)(w, null, (0, r.h)(h.RadioGroup, {
                        shouldWrap: n,
                        ariaLabel: "Font color",
                        scale: b
                    }, y.BASE_COLORS.map((function(t) {
                        return (0, r.h)(h.RadioColorSwatch, {
                            key: t.hex,
                            scale: b,
                            name: "Font color",
                            ariaLabel: t.ariaLabel,
                            value: t.hex,
                            checked: O.fontColor === t.hex,
                            onChange: function(t) {
                                if (t.target instanceof HTMLInputElement) {
                                    var e = t.target.value;
                                    (0, v.isCaptionColorHex)(e) && C({
                                        fontColor: e
                                    })
                                }
                            }
                        })
                    }))))), (0, r.h)(u.CaptionsSettingsMenuSection, {
                        title: "Font opacity"
                    }, (0, r.h)(w, null, (0, r.h)(h.RadioGroup, {
                        shouldWrap: n,
                        ariaLabel: "Font opacity",
                        scale: b
                    }, y.NON_ZERO_OPACITY_PERCENTAGES.map((function(t) {
                        return (0, r.h)(h.RadioPill, {
                            key: t,
                            name: "font-opacity",
                            label: "".concat(t, "%"),
                            value: t.toString(),
                            checked: O.fontOpacityPercentage === t,
                            scale: b,
                            onChange: function(t) {
                                if (t.target instanceof HTMLInputElement) {
                                    var e = Number(t.target.value);
                                    (0, v.isCaptionOpacityPercentage)(e) && C({
                                        fontOpacityPercentage: e
                                    })
                                }
                            }
                        })
                    }))))), (0, r.h)(u.CaptionsSettingsMenuSection, {
                        title: x,
                        style: {
                            gap: "4px"
                        }
                    }, (0, r.h)(_, {
                        ariaLabel: j,
                        menuKey: "character-edge-styles",
                        scale: b
                    }, O.characterEdgeStyle)), (0, r.h)(u.CaptionsSettingsMenuSection, {
                        title: "Background color"
                    }, (0, r.h)(w, null, (0, r.h)(h.RadioGroup, {
                        shouldWrap: n,
                        ariaLabel: "Background color",
                        scale: b
                    }, y.BASE_COLORS.map((function(t) {
                        return (0, r.h)(h.RadioColorSwatch, {
                            key: t.hex,
                            scale: b,
                            name: "Background color",
                            ariaLabel: t.ariaLabel,
                            value: t.hex,
                            checked: O.backgroundColor === t.hex,
                            onChange: function(t) {
                                if (t.target instanceof HTMLInputElement) {
                                    var e = t.target.value;
                                    (0, v.isCaptionColorHex)(e) && C({
                                        backgroundColor: e
                                    })
                                }
                            }
                        })
                    }))))), (0, r.h)(u.CaptionsSettingsMenuSection, {
                        title: "Background opacity"
                    }, (0, r.h)(w, null, (0, r.h)(h.RadioGroup, {
                        shouldWrap: n,
                        ariaLabel: "Background opacity",
                        scale: b
                    }, y.OPACITY_PERCENTAGES.map((function(t) {
                        return (0, r.h)(h.RadioPill, {
                            key: t,
                            name: "background-opacity",
                            label: "".concat(t, "%"),
                            value: t.toString(),
                            scale: b,
                            checked: O.backgroundOpacityPercentage === t,
                            onChange: function(t) {
                                if (t.target instanceof HTMLInputElement) {
                                    var e = Number(t.target.value);
                                    (0, v.isCaptionOpacityPercentage)(e) && C({
                                        backgroundOpacityPercentage: e
                                    })
                                }
                            }
                        })
                    }))))), (0, r.h)(u.CaptionsSettingsMenuSection, {
                        title: "Window color"
                    }, (0, r.h)(w, null, (0, r.h)(h.RadioGroup, {
                        shouldWrap: n,
                        ariaLabel: "Window color",
                        scale: b
                    }, y.BASE_COLORS.map((function(t) {
                        return (0, r.h)(h.RadioColorSwatch, {
                            key: t.hex,
                            scale: b,
                            name: "Window color",
                            ariaLabel: t.ariaLabel,
                            value: t.hex,
                            checked: O.windowColor === t.hex,
                            onChange: function(t) {
                                if (t.target instanceof HTMLInputElement) {
                                    var e = t.target.value;
                                    (0, v.isCaptionColorHex)(e) && C({
                                        windowColor: e
                                    })
                                }
                            }
                        })
                    }))))), (0, r.h)(u.CaptionsSettingsMenuSection, {
                        title: "Window opacity"
                    }, (0, r.h)(w, null, (0, r.h)(h.RadioGroup, {
                        shouldWrap: n,
                        ariaLabel: "Window opacity",
                        scale: b
                    }, y.OPACITY_PERCENTAGES.map((function(t) {
                        return (0, r.h)(h.RadioPill, {
                            key: t,
                            name: "window-opacity",
                            label: "".concat(t, "%"),
                            value: t.toString(),
                            scale: b,
                            checked: O.windowOpacityPercentage === t,
                            onChange: function(t) {
                                if (t.target instanceof HTMLInputElement) {
                                    var e = Number(t.target.value);
                                    (0, v.isCaptionOpacityPercentage)(e) && C({
                                        windowOpacityPercentage: e
                                    })
                                }
                            }
                        })
                    }))))), (0, r.h)(l.MenuItemButton, {
                        ariaDisabled: !R,
                        onClick: function() {
                            i(k), C(y.DEFAULT_CAPTION_SETTINGS)
                        },
                        shouldHaveRoundedBottomCorners: !0,
                        tabIndex: R ? 0 : -1
                    }, (0, r.h)(c.CaptionsSettingsIcon, {
                        scale: b
                    }), "Reset to defaults")), (0, r.h)(f.Menu, {
                        menuKey: "font-family",
                        label: L,
                        ariaLabel: M
                    }, (0, r.h)(d.FontFamilyRadioGroup, {
                        legendText: L,
                        selectedFontOptionLabel: O.fontFamily,
                        setSelectedFontOptionLabel: function(t) {
                            C({
                                fontFamily: t
                            })
                        }
                    })), (0, r.h)(f.Menu, {
                        menuKey: "character-edge-styles",
                        label: "Character edge style",
                        ariaLabel: A
                    }, (0, r.h)(a.CharacterEdgeStyleRadioGroup, {
                        legendText: x,
                        selectedEdgeStyleOption: O.characterEdgeStyle,
                        setSelectedEdgeStyleOption: function(t) {
                            C({
                                characterEdgeStyle: t
                            })
                        }
                    })))
                }
        },
        467: (t, e, n) => {
            n.d(e, {
                useCaptionsSettingsFromLocalStorage: () => l
            });
            var r = n(206),
                i = n(141);

            function o(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function a(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? o(Object(n), !0).forEach((function(e) {
                        s(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function s(t, e, n) {
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

            function c(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, i, o, a, s = [],
                            c = !0,
                            u = !1;
                        try {
                            if (o = (n = n.call(t)).next, 0 === e) {
                                if (Object(n) !== n) return;
                                c = !1
                            } else
                                for (; !(c = (r = o.call(n)).done) && (s.push(r.value), s.length !== e); c = !0);
                        } catch (t) {
                            u = !0, i = t
                        } finally {
                            try {
                                if (!c && null != n.return && (a = n.return(), Object(a) !== a)) return
                            } finally {
                                if (u) throw i
                            }
                        }
                        return s
                    }
                }(t, e) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return u(t, e);
                        var n = {}.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(t, e) : void 0
                    }
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function u(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            var l = function(t) {
                var e = t.onCaptionsSettingsUpdated,
                    n = c((0, r.useState)((0, i.getCaptionSettings)()), 2),
                    o = n[0],
                    s = n[1];
                return {
                    captionsSettings: o,
                    setCaptionsSettings: function(t) {
                        var n = a(a({}, o), t);
                        s(n), (0, i.updateCaptionViewerPreferences)(n), null == e || e(n, t)
                    }
                }
            }
        },
        468: (t, e, n) => {
            n.d(e, {
                CharacterEdgeStyleRadioGroup: () => c
            });
            var r = n(2),
                i = n(469),
                o = n(194),
                a = n(28),
                s = ["None", "Depressed", "Drop shadow", "Outline", "Raised"],
                c = function(t) {
                    var e = t.legendText,
                        n = t.selectedEdgeStyleOption,
                        c = t.setSelectedEdgeStyleOption;
                    return (0, r.h)(r.Fragment, null, (0, r.h)("fieldset", {
                        style: {
                            border: 0,
                            padding: 0
                        }
                    }, (0, r.h)(o.default, {
                        tagName: "legend"
                    }, e), s.map((function(t, e) {
                        return (0, r.h)(i.RadioItem, {
                            key: t,
                            name: "fontFamily",
                            value: t,
                            checked: t === n,
                            onChange: function() {
                                return c(t)
                            },
                            shouldHaveRoundedBottomCorners: e === s.length - 1
                        }, (0, r.h)("span", {
                            style: {
                                fontFamily: a.interFontFamily
                            }
                        }, t))
                    }))))
                }
        },
        469: (t, e, n) => {
            n.d(e, {
                RadioItem: () => d
            });
            var r = n(2),
                i = n(206),
                o = n(195),
                a = n(45),
                s = n(30),
                c = n(470),
                u = n(259);

            function l(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, i, o, a, s = [],
                            c = !0,
                            u = !1;
                        try {
                            if (o = (n = n.call(t)).next, 0 === e) {
                                if (Object(n) !== n) return;
                                c = !1
                            } else
                                for (; !(c = (r = o.call(n)).done) && (s.push(r.value), s.length !== e); c = !0);
                        } catch (t) {
                            u = !0, i = t
                        } finally {
                            try {
                                if (!c && null != n.return && (a = n.return(), Object(a) !== a)) return
                            } finally {
                                if (u) throw i
                            }
                        }
                        return s
                    }
                }(t, e) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return f(t, e);
                        var n = {}.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? f(t, e) : void 0
                    }
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function f(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function p() {
                return p = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n)({}).hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }, p.apply(null, arguments)
            }
            var h = function(t) {
                    var e = t.visible,
                        n = (0, c.useMenuRootContext)().uiContext.scale,
                        i = {
                            height: "".concat(u.DEFAULT_BUTTON_HEIGHT_PX * n, "px"),
                            verticalAlign: "middle",
                            width: "".concat(u.DEFAULT_BUTTON_WIDTH_PX * n, "px"),
                            visibility: e ? "visible" : "hidden"
                        };
                    return (0, r.h)("svg", p({}, (0, s.standardSvgAttrs)({
                        width: 40,
                        height: 34,
                        styleOverride: i,
                        ariaHidden: !0
                    }), {
                        class: "w-checkmark"
                    }), (0, r.h)("polyline", {
                        fill: "none",
                        stroke: "#ffffff",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-miterlimit": "10",
                        points: "17,17 20,20 25,14 "
                    }))
                },
                d = function(t) {
                    var e = t.value,
                        n = t.onChange,
                        s = t.name,
                        f = t.checked,
                        p = t.children,
                        d = t.shouldHaveRoundedBottomCorners,
                        v = void 0 !== d && d,
                        g = (0, c.useMenuRootContext)().uiContext,
                        y = g.scale,
                        m = g.controlBarBorderRadius,
                        b = l((0, i.useState)(!1), 2),
                        _ = b[0],
                        w = b[1],
                        S = l((0, i.useState)(!1), 2),
                        T = S[0],
                        O = S[1];
                    return (0, r.h)("div", {
                        onMouseEnter: function() {
                            return O(!0)
                        },
                        onMouseLeave: function() {
                            return O(!1)
                        },
                        onFocus: function() {
                            (0, a.isMouseDownRecently)() || w(!0)
                        },
                        onBlur: function() {
                            return w(!1)
                        },
                        style: {
                            cursor: "pointer",
                            outline: "none",
                            backgroundColor: T ? "rgba(0,0,0,.3)" : "",
                            boxShadow: _ ? "inset 0 0 0 2px #fff" : "",
                            fontSize: u.DEFAULT_DIALOG_MENU_ITEM_FONT_SIZE_PX * y,
                            borderBottomLeftRadius: v ? "".concat(m, "px") : "0",
                            borderBottomRightRadius: v ? "".concat(m, "px") : "0"
                        }
                    }, (0, r.h)("input", {
                        type: "radio",
                        name: s,
                        onChange: n,
                        id: e,
                        style: o.visuallyHiddenElementStyles,
                        value: e,
                        checked: f
                    }), (0, r.h)("label", {
                        htmlFor: e
                    }, (0, r.h)(h, {
                        visible: f
                    }), p))
                }
        },
        470: (t, e, n) => {
            n.d(e, {
                MenuRoot: () => d,
                useMenuRootContext: () => v
            });
            var r = n(2),
                i = n(206);

            function o(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, i, o, a, s = [],
                            c = !0,
                            u = !1;
                        try {
                            if (o = (n = n.call(t)).next, 0 === e) {
                                if (Object(n) !== n) return;
                                c = !1
                            } else
                                for (; !(c = (r = o.call(n)).done) && (s.push(r.value), s.length !== e); c = !0);
                        } catch (t) {
                            u = !0, i = t
                        } finally {
                            try {
                                if (!c && null != n.return && (a = n.return(), Object(a) !== a)) return
                            } finally {
                                if (u) throw i
                            }
                        }
                        return s
                    }
                }(t, e) || l(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

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

            function s(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? a(Object(n), !0).forEach((function(e) {
                        c(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
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

            function u(t) {
                return function(t) {
                    if (Array.isArray(t)) return f(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || l(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function l(t, e) {
                if (t) {
                    if ("string" == typeof t) return f(t, e);
                    var n = {}.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? f(t, e) : void 0
                }
            }

            function f(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            var p = (0, r.createContext)(null),
                h = function(t, e) {
                    var n = t.menuStack[t.menuStack.length - 1];
                    switch (e.type) {
                        case "OPEN_SUBMENU":
                            return {
                                menuStack: [].concat(u(t.menuStack), [e.menuKey]),
                                prevMenuKey: n,
                                navigationDirection: "away-from-root"
                            };
                        case "GO_BACK":
                            return {
                                menuStack: t.menuStack.slice(0, -1),
                                prevMenuKey: n,
                                navigationDirection: "towards-root"
                            };
                        case "GO_TO_ROOT":
                            return {
                                menuStack: ["root"],
                                prevMenuKey: n,
                                navigationDirection: "towards-root"
                            };
                        case "NAVIGATION_END":
                            return s(s({}, t), {}, {
                                navigationDirection: "none"
                            });
                        default:
                            return t
                    }
                },
                d = function(t) {
                    var e = t.children,
                        n = t.controlBarBorderRadius,
                        a = t.scale,
                        s = t.playerLanguage,
                        c = o((0, i.useReducer)(h, {
                            menuStack: ["root"],
                            prevMenuKey: null,
                            navigationDirection: "none"
                        }), 2),
                        u = c[0],
                        l = c[1],
                        f = u.navigationDirection,
                        d = u.prevMenuKey,
                        v = u.menuStack,
                        g = (0, i.useMemo)((function() {
                            var t;
                            return null !== (t = v[v.length - 1]) && void 0 !== t ? t : "root"
                        }), [v]),
                        y = (0, i.useMemo)((function() {
                            return {
                                goBack: function() {
                                    return l({
                                        type: "GO_BACK"
                                    })
                                },
                                goToRoot: function() {
                                    return l({
                                        type: "GO_TO_ROOT"
                                    })
                                },
                                openMenu: function(t) {
                                    return l({
                                        menuKey: t,
                                        type: "OPEN_SUBMENU"
                                    })
                                },
                                currentMenuKey: g,
                                uiContext: {
                                    scale: a,
                                    controlBarBorderRadius: n,
                                    playerLanguage: s
                                },
                                navigationDirection: f,
                                prevMenuKey: d
                            }
                        }), [g, a, n, f, d]);
                    return (0, r.h)(p.Provider, {
                        value: y
                    }, e)
                },
                v = function() {
                    var t = (0, i.useContext)(p);
                    if (null === t) throw new Error("useMenuRootContext must be used within a MenuRoot");
                    return t
                }
        },
        471: (t, e, n) => {
            n.d(e, {
                MenuForwardIcon: () => a
            });
            var r = n(2),
                i = n(30),
                o = n(259),
                a = function(t) {
                    var e = t.scale,
                        n = (0, i.standardSvgAttrs)({
                            width: 40,
                            height: 34,
                            styleOverride: {
                                height: "".concat(o.BASE_CONTROL_BAR_HEIGHT_PX * e, "px"),
                                verticalAlign: "middle",
                                visibility: "visible",
                                width: "".concat(o.DEFAULT_BUTTON_WIDTH_PX * e, "px"),
                                transform: "rotate(180deg)"
                            },
                            ariaHidden: !0
                        });
                    return (0, r.h)("svg", n, (0, r.h)("path", {
                        d: "M21.6889 22.0889C21.5438 22.0889 21.3988 22.0337 21.2884 21.9227L16.5662 17.2004C16.3448 16.9791 16.3448 16.6202 16.5662 16.3988L21.2884 11.6773C21.5098 11.456 21.8687 11.456 22.0901 11.6773C22.3115 11.8987 22.3115 12.2576 22.0901 12.479L17.7683 16.8008L22.0901 21.1225C22.3115 21.3439 22.3115 21.7028 22.0901 21.9242C21.9798 22.0345 21.8347 22.0904 21.6896 22.0904L21.6889 22.0889Z",
                        fill: "white"
                    }))
                }
        },
        472: (t, e, n) => {
            n.d(e, {
                CaptionsSettingsIcon: () => a
            });
            var r = n(2),
                i = n(30),
                o = n(259),
                a = function(t) {
                    var e = t.scale,
                        n = (0, i.standardSvgAttrs)({
                            width: 40,
                            height: 34,
                            styleOverride: {
                                height: "".concat(o.BASE_CONTROL_BAR_HEIGHT_PX * e, "px"),
                                verticalAlign: "middle",
                                visibility: "visible",
                                width: "".concat(o.DEFAULT_BUTTON_WIDTH_PX * e, "px")
                            },
                            ariaHidden: !0
                        });
                    return (0, r.h)("svg", n, (0, r.h)("path", {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M26.4 15.4H28.3C28.7 15.4 29 15.7 29 16.1V16.7C29 17.1 28.7 17.4 28.3 17.4H26.4C26 17.4 25.6 17.7 25.5 18.1L25.1 19.2C25 19.5 25 20 25.3 20.3L26.6 21.6C26.9 21.9 26.9 22.3 26.6 22.6L26.2 23C25.9 23.3 25.5 23.3 25.2 23L23.9 21.7C23.6 21.5 23.1 21.4 22.8 21.6L21.7 22.1C21.3 22.2 21 22.6 21 23V24.7C21 25.1 20.7 25.4 20.3 25.4H19.7C19.3 25.4 19 25.1 19 24.7V23C19 22.6 18.7 22.2 18.3 22.1L17.1 21.6C16.8 21.5 16.3 21.5 16 21.8L14.8 23C14.5 23.3 14.1 23.3 13.8 23L13.4 22.6C13.1 22.3 13.1 21.9 13.4 21.6L14.6 20.4C14.8 20.1 14.9 19.6 14.7 19.3L14.2 18.1C14.1 17.7 13.7 17.4 13.3 17.4H11.7C11.3 17.4 11 17.1 11 16.7V16.1C11 15.7 11.3 15.4 11.7 15.4H13.3C13.7 15.4 14.1 15.1 14.2 14.7L14.7 13.5C14.9 13.2 14.9 12.7 14.6 12.4L13.4 11.2C13.1 10.9 13.1 10.5 13.4 10.2L13.8 9.8C14.1 9.5 14.5 9.5 14.8 9.8L16 11C16.3 11.3 16.8 11.4 17.1 11.2L18.3 10.7C18.7 10.6 19 10.2 19 9.8V8.1C19 7.7 19.3 7.4 19.7 7.4H20.3C20.7 7.4 21 7.7 21 8.1V9.8C21 10.2 21.3 10.6 21.7 10.7L22.8 11.2C23.1 11.4 23.6 11.4 23.9 11.1L25.2 9.8C25.5 9.5 25.9 9.5 26.2 9.8L26.6 10.2C26.9 10.5 26.9 10.9 26.6 11.2L25.3 12.5C25 12.8 24.9 13.3 25.1 13.6L25.5 14.7C25.6 15.1 26 15.4 26.4 15.4ZM19.9 20.4C22 20.4 23.8 18.7 23.8 16.5C23.8 14.3 22.1 12.6 19.9 12.6C17.7 12.6 16 14.4 16 16.5C16 18.6 17.7 20.4 19.9 20.4Z",
                        fill: "white"
                    }))
                }
        },
        473: (t, e, n) => {
            n.d(e, {
                CaptionsSettingsMenuSection: () => f
            });
            var r = n(2),
                i = n(259),
                o = n(470),
                a = n(142),
                s = n(28);

            function c(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function u(t, e, n) {
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
                    var e = t.title,
                        n = (0, o.useMenuRootContext)().uiContext.scale,
                        c = {
                            fontFamily: s.interFontFamily,
                            fontSize: i.DEFAULT_DIALOG_MENU_ITEM_FONT_SIZE_PX * n,
                            lineHeight: "".concat(18 * n, "px"),
                            padding: "0 ".concat(a.SETTINGS_MENU_PADDING_X_PX * n, "px")
                        };
                    return (0, r.h)("label", {
                        style: c
                    }, e)
                },
                f = function(t) {
                    var e = t.children,
                        n = t.title,
                        i = t.style,
                        a = void 0 === i ? {} : i,
                        s = (0, o.useMenuRootContext)().uiContext.scale,
                        f = function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? c(Object(n), !0).forEach((function(e) {
                                    u(t, e, n[e])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                                }))
                            }
                            return t
                        }({
                            display: "flex",
                            flexDirection: "column",
                            gap: "".concat(8 * s, "px"),
                            padding: "".concat(8 * s, "px 0")
                        }, a);
                    return (0, r.h)("div", {
                        style: f
                    }, (0, r.h)(l, {
                        title: n
                    }), e)
                }
        },
        474: (t, e, n) => {
            n.d(e, {
                MenuItemButton: () => v
            });
            var r = n(2),
                i = n(206),
                o = n(457),
                a = n(36),
                s = n(470),
                c = n(259),
                u = n(68),
                l = n(45),
                f = n(28);

            function p() {
                return p = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n)({}).hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }, p.apply(null, arguments)
            }

            function h(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, i, o, a, s = [],
                            c = !0,
                            u = !1;
                        try {
                            if (o = (n = n.call(t)).next, 0 === e) {
                                if (Object(n) !== n) return;
                                c = !1
                            } else
                                for (; !(c = (r = o.call(n)).done) && (s.push(r.value), s.length !== e); c = !0);
                        } catch (t) {
                            u = !0, i = t
                        } finally {
                            try {
                                if (!c && null != n.return && (a = n.return(), Object(a) !== a)) return
                            } finally {
                                if (u) throw i
                            }
                        }
                        return s
                    }
                }(t, e) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return d(t, e);
                        var n = {}.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? d(t, e) : void 0
                    }
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function d(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            var v = (0, o.forwardRef)((function(t, e) {
                var n = t.children,
                    o = t.onClick,
                    d = t.shouldHaveRoundedBottomCorners,
                    v = void 0 !== d && d,
                    g = t.shouldHaveRoundedTopCorners,
                    y = void 0 !== g && g,
                    m = t.ariaLabel,
                    b = t.ariaDisabled,
                    _ = t.tabIndex,
                    w = (0, s.useMenuRootContext)().uiContext,
                    S = w.scale,
                    T = w.controlBarBorderRadius,
                    O = h((0, i.useState)(!1), 2),
                    C = O[0],
                    E = O[1],
                    P = h((0, i.useState)(!1), 2),
                    k = P[0],
                    x = P[1],
                    A = {
                        alignItems: "center",
                        background: C ? "rgba(0,0,0,.3)" : "",
                        borderBottomLeftRadius: v ? "".concat(T, "px") : "0",
                        borderBottomRightRadius: v ? "".concat(T, "px") : "0",
                        borderTopLeftRadius: y ? "".concat(T, "px") : "0",
                        borderTopRightRadius: y ? "".concat(T, "px") : "0",
                        boxShadow: k ? "0 0 0 2px #fff inset" : "none",
                        cursor: "pointer",
                        display: "flex",
                        fontFamily: f.interFontFamily,
                        fontSize: c.DEFAULT_DIALOG_MENU_ITEM_FONT_SIZE_PX * S,
                        marginRight: "".concat(c.DEFAULT_BUTTON_MARGIN_RIGHT_PX * S, "px"),
                        textAlign: "left",
                        width: "100%"
                    };
                return (0, r.h)(u.CustomEventsWrapper, p({
                    elemRef: e,
                    class: "w-css-reset-button-important w-vulcan-v2-button",
                    tagName: "button",
                    onClick: o,
                    onFocusIn: function() {
                        (0, l.isMouseDownRecently)() || x(!0)
                    },
                    onFocusOut: function() {
                        x(!1)
                    },
                    onMouseEnter: function() {
                        return E(!0)
                    },
                    onMouseLeave: function() {
                        return E(!1)
                    },
                    style: A,
                    tabIndex: -1 === _ ? -1 : null != _ ? _ : 0
                }, (0, a.isNotNil)(m) ? {
                    ariaLabel: m
                } : {}, (0, a.isNotNil)(b) ? {
                    "aria-disabled": b
                } : {}), n)
            }))
        },
        475: (t, e, n) => {
            n.d(e, {
                Menu: () => r.Menu,
                MenuRoot: () => o.MenuRoot,
                MenuTrigger: () => i.MenuTrigger
            });
            var r = n(476),
                i = n(479),
                o = n(470)
        },
        476: (t, e, n) => {
            n.d(e, {
                Menu: () => f
            });
            var r = n(2),
                i = n(206),
                o = n(36),
                a = n(470),
                s = n(474),
                c = n(477),
                u = n(478);

            function l() {
                return l = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n)({}).hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }, l.apply(null, arguments)
            }
            var f = function(t) {
                var e = t.ariaLabel,
                    n = t.children,
                    f = t.label,
                    p = t.menuKey,
                    h = void 0 === p ? "root" : p,
                    d = (0, i.useRef)(null),
                    v = (0, a.useMenuRootContext)(),
                    g = v.currentMenuKey,
                    y = v.goBack,
                    m = v.uiContext.scale,
                    b = v.navigationDirection,
                    _ = (0, i.useMemo)((function() {
                        return h === g
                    }), [g, h]),
                    w = (0, i.useMemo)((function() {
                        return "root" !== h
                    }), [h]);
                return (0, i.useEffect)((function() {
                    var t = d.current;
                    t && "away-from-root" === b && (0, u.focusFirstFocusableElement)(t)
                }), [_, b]), _ ? (0, r.h)("div", {
                    class: "w-css-reset w-css-reset-tree",
                    ref: d
                }, w && (0, r.h)(s.MenuItemButton, l({
                    onClick: y,
                    shouldHaveRoundedTopCorners: !0
                }, (0, o.isNotNil)(e) ? {
                    ariaLabel: e
                } : {}), (0, r.h)(c.MenuBackIcon, {
                    scale: m
                }), null != f ? f : "Go back"), n) : null
            }
        },
        477: (t, e, n) => {
            n.d(e, {
                MenuBackIcon: () => a
            });
            var r = n(2),
                i = n(30),
                o = n(259),
                a = function(t) {
                    var e = t.scale,
                        n = (0, i.standardSvgAttrs)({
                            width: 40,
                            height: 34,
                            styleOverride: {
                                height: "".concat(o.BASE_CONTROL_BAR_HEIGHT_PX * e, "px"),
                                verticalAlign: "middle",
                                visibility: "visible",
                                width: "".concat(o.DEFAULT_BUTTON_WIDTH_PX * e, "px")
                            },
                            ariaHidden: !0
                        });
                    return (0, r.h)("svg", n, (0, r.h)("path", {
                        d: "M21.6889 22.0889C21.5438 22.0889 21.3988 22.0337 21.2884 21.9227L16.5662 17.2004C16.3448 16.9791 16.3448 16.6202 16.5662 16.3988L21.2884 11.6773C21.5098 11.456 21.8687 11.456 22.0901 11.6773C22.3115 11.8987 22.3115 12.2576 22.0901 12.479L17.7683 16.8008L22.0901 21.1225C22.3115 21.3439 22.3115 21.7028 22.0901 21.9242C21.9798 22.0345 21.8347 22.0904 21.6896 22.0904L21.6889 22.0889Z",
                        fill: "white"
                    }))
                }
        },
        478: (t, e, n) => {
            n.d(e, {
                focusFirstFocusableElement: () => o
            });
            var r = function(t) {
                    return "INPUT" === t.tagName
                },
                i = function(t) {
                    for (var e = [], n = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, {
                            acceptNode: function(t) {
                                if (!(t instanceof HTMLElement)) return NodeFilter.FILTER_SKIP;
                                var e, n = r(t) && "hidden" === t.type;
                                return (r(e = t) || "BUTTON" === e.tagName) && t.disabled || t.hidden || n ? NodeFilter.FILTER_SKIP : t.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                            }
                        }); n.nextNode();) e.push(n.currentNode);
                    return e
                },
                o = function(t) {
                    var e;
                    null === (e = i(t)[0]) || void 0 === e || e.focus({
                        preventScroll: !0
                    })
                }
        },
        479: (t, e, n) => {
            n.d(e, {
                MenuTrigger: () => l
            });
            var r = n(2),
                i = n(206),
                o = n(474),
                a = n(470),
                s = n(74),
                c = n(9);

            function u() {
                return u = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n)({}).hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }, u.apply(null, arguments)
            }
            var l = function(t) {
                var e = (0, a.useMenuRootContext)(),
                    n = e.openMenu,
                    l = e.navigationDirection,
                    f = e.prevMenuKey,
                    p = (0, i.useRef)(null);
                return (0, i.useEffect)((function() {
                    var e = p.current;
                    e && "towards-root" === l && f === t.menuKey && e.focus({
                        preventScroll: !0
                    })
                }), [l, f, t.menuKey]), (0, r.h)(o.MenuItemButton, u({
                    ref: p
                }, t, {
                    onClick: function() {
                        var e = Boolean((0, c.detectIsMobile)());
                        (0, s.countMetric)("player/control-button-click", 1, {
                            control: t.menuKey,
                            desktop: !e,
                            mobile: e
                        }), n(t.menuKey)
                    }
                }))
            }
        },
        480: (t, e, n) => {
            n.d(e, {
                RadioColorSwatch: () => o.RadioColorSwatch,
                RadioGroup: () => r.RadioGroup,
                RadioPill: () => i.RadioPill
            });
            var r = n(481),
                i = n(482),
                o = n(483)
        },
        481: (t, e, n) => {
            n.d(e, {
                RadioGroup: () => i
            });
            var r = n(2),
                i = function(t) {
                    var e = t.children,
                        n = t.ariaLabel,
                        i = t.scale,
                        o = t.shouldWrap,
                        a = {
                            display: "flex",
                            gap: "".concat(8 * i, "px"),
                            alignItems: "center",
                            flexWrap: o ? "wrap" : "nowrap",
                            justifyContent: "start"
                        };
                    return (0, r.h)("div", {
                        role: "radiogroup",
                        "aria-label": n,
                        style: a
                    }, e)
                }
        },
        482: (t, e, n) => {
            n.d(e, {
                RadioPill: () => l
            });
            var r = n(2),
                i = n(206),
                o = n(195),
                a = n(26),
                s = n(45);

            function c(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, i, o, a, s = [],
                            c = !0,
                            u = !1;
                        try {
                            if (o = (n = n.call(t)).next, 0 === e) {
                                if (Object(n) !== n) return;
                                c = !1
                            } else
                                for (; !(c = (r = o.call(n)).done) && (s.push(r.value), s.length !== e); c = !0);
                        } catch (t) {
                            u = !0, i = t
                        } finally {
                            try {
                                if (!c && null != n.return && (a = n.return(), Object(a) !== a)) return
                            } finally {
                                if (u) throw i
                            }
                        }
                        return s
                    }
                }(t, e) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return u(t, e);
                        var n = {}.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(t, e) : void 0
                    }
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function u(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            var l = function(t) {
                var e = t.value,
                    n = t.label,
                    u = t.onChange,
                    l = t.name,
                    f = t.checked,
                    p = t.scale,
                    h = c((0, i.useState)(!1), 2),
                    d = h[0],
                    v = h[1],
                    g = {
                        appearance: "none",
                        borderRadius: 99999,
                        padding: "".concat(2 * p, "px ").concat(10 * p, "px"),
                        fontSize: "".concat(12 * p, "px"),
                        cursor: "pointer",
                        border: "1px solid #82828A",
                        lineHeight: "".concat(16 * p, "px"),
                        backgroundColor: f ? "white" : "transparent",
                        color: f ? "#242528" : "#fff",
                        outline: "none",
                        boxShadow: d ? "0 0 0 2px #fff" : "none",
                        flex: "0 0 auto"
                    },
                    y = (0, a.seqId)("w-radio-".concat(e, "-"));
                return (0, r.h)("div", {
                    style: {
                        display: "flex",
                        alignItems: "center"
                    }
                }, (0, r.h)("input", {
                    type: "radio",
                    name: l,
                    onChange: u,
                    id: y,
                    style: o.visuallyHiddenElementStyles,
                    value: e,
                    checked: f,
                    onFocus: function() {
                        (0, s.isMouseDownRecently)() || v(!0)
                    },
                    onBlur: function() {
                        v(!1)
                    }
                }), (0, r.h)("label", {
                    htmlFor: y,
                    style: g
                }, n))
            }
        },
        483: (t, e, n) => {
            n.d(e, {
                RadioColorSwatch: () => l
            });
            var r = n(2),
                i = n(206),
                o = n(195),
                a = n(26),
                s = n(45);

            function c(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, i, o, a, s = [],
                            c = !0,
                            u = !1;
                        try {
                            if (o = (n = n.call(t)).next, 0 === e) {
                                if (Object(n) !== n) return;
                                c = !1
                            } else
                                for (; !(c = (r = o.call(n)).done) && (s.push(r.value), s.length !== e); c = !0);
                        } catch (t) {
                            u = !0, i = t
                        } finally {
                            try {
                                if (!c && null != n.return && (a = n.return(), Object(a) !== a)) return
                            } finally {
                                if (u) throw i
                            }
                        }
                        return s
                    }
                }(t, e) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return u(t, e);
                        var n = {}.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(t, e) : void 0
                    }
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function u(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            var l = function(t) {
                var e = t.value,
                    n = t.onChange,
                    u = t.name,
                    l = t.checked,
                    f = t.ariaLabel,
                    p = t.scale,
                    h = c((0, i.useState)(!1), 2),
                    d = h[0],
                    v = h[1],
                    g = (0, a.seqId)("w-radio-".concat(e, "-")),
                    y = {
                        appearance: "none",
                        borderRadius: "50%",
                        width: "".concat(24 * p, "px"),
                        height: "".concat(24 * p, "px"),
                        cursor: "pointer",
                        border: "none",
                        backgroundColor: e
                    },
                    m = {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                        boxShadow: l ? "0 0 0 2px #fff" : "",
                        padding: "2px",
                        transform: d ? "scale(1.2)" : "",
                        transition: "transform 150ms ease"
                    };
                return (0, r.h)("div", {
                    style: {
                        flex: "0 0 auto"
                    }
                }, (0, r.h)("input", {
                    type: "radio",
                    name: u,
                    onChange: n,
                    id: g,
                    value: e,
                    checked: l,
                    style: o.visuallyHiddenElementStyles,
                    onFocus: function() {
                        (0, s.isMouseDownRecently)() || v(!0)
                    },
                    onBlur: function() {
                        v(!1)
                    }
                }), (0, r.h)("div", {
                    style: m
                }, (0, r.h)("label", {
                    htmlFor: g,
                    style: y,
                    "aria-label": f
                })))
            }
        },
        484: (t, e, n) => {
            n.d(e, {
                FontFamilyRadioGroup: () => l
            });
            var r = n(2),
                i = n(469),
                o = n(142),
                a = n(485),
                s = n(194);

            function c(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, i, o, a, s = [],
                            c = !0,
                            u = !1;
                        try {
                            if (o = (n = n.call(t)).next, 0 === e) {
                                if (Object(n) !== n) return;
                                c = !1
                            } else
                                for (; !(c = (r = o.call(n)).done) && (s.push(r.value), s.length !== e); c = !0);
                        } catch (t) {
                            u = !0, i = t
                        } finally {
                            try {
                                if (!c && null != n.return && (a = n.return(), Object(a) !== a)) return
                            } finally {
                                if (u) throw i
                            }
                        }
                        return s
                    }
                }(t, e) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return u(t, e);
                        var n = {}.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(t, e) : void 0
                    }
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function u(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            var l = function(t) {
                var e = t.legendText,
                    n = t.selectedFontOptionLabel,
                    u = t.setSelectedFontOptionLabel;
                return (0, r.h)(r.Fragment, null, (0, r.h)("fieldset", {
                    style: {
                        border: 0,
                        padding: 0
                    }
                }, (0, r.h)(s.default, {
                    tagName: "legend"
                }, e), Array.from(o.CAPTIONS_FONT_FAMILY_MAP).map((function(t, e) {
                    var s = c(t, 1)[0];
                    return (0, r.h)(i.RadioItem, {
                        key: s,
                        name: "fontFamily",
                        value: s,
                        checked: s === n,
                        onChange: function() {
                            return u(s)
                        },
                        shouldHaveRoundedBottomCorners: e === o.CAPTIONS_FONT_FAMILY_MAP.size - 1
                    }, (0, r.h)("span", {
                        style: (0, a.getFontStyleForCaptions)(s)
                    }, s))
                }))))
            }
        },
        485: (t, e, n) => {
            n.d(e, {
                getFontStyleForCaptions: () => o
            });
            var r = n(265),
                i = n(263),
                o = function(t) {
                    return {
                        fontFamily: (0, i.getFontFamilyForFontOptionLabel)(t),
                        fontVariant: (0, r.getFontVariantForFontOptionLabel)(t)
                    }
                }
        },
        486: (t, e, n) => {
            n.d(e, {
                TranscriptItem: () => y
            });
            var r = n(2),
                i = n(28),
                o = n(30),
                a = n(45),
                s = n(46),
                c = n(68);

            function u() {
                return u = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n)({}).hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }, u.apply(null, arguments)
            }

            function l(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, g(r.key), r)
                }
            }

            function f(t, e, n) {
                return e = h(e),
                    function(t, e) {
                        if (e && ("object" == typeof e || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, p() ? Reflect.construct(e, n || [], h(t).constructor) : e.apply(t, n))
            }

            function p() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (t) {}
                return (p = function() {
                    return !!t
                })()
            }

            function h(t) {
                return h = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, h(t)
            }

            function d(t, e) {
                return d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, d(t, e)
            }

            function v(t, e, n) {
                return (e = g(e)) in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function g(t) {
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
            }(0, s.defineTranslations)("en-US", {
                CAPTIONS_READ_TRANSCRIPT: "Search Video",
                CAPTIONS_OPEN_TRANSCRIPT: "Open Transcript Viewer",
                CAPTIONS_CLOSE_TRANSCRIPT: "Close Transcript Viewer"
            });
            var y = function(t) {
                    function e() {
                        var t;
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, e);
                        for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return v(t = f(this, e, [].concat(r)), "onFocus", (function() {
                            (0, a.isMouseDownRecently)() || t.setState({
                                isKeyboardFocused: !0
                            })
                        })), v(t, "onBlur", (function() {
                            t.state.isKeyboardFocused && t.setState({
                                isKeyboardFocused: !1
                            })
                        })), v(t, "onMouseEnter", (function() {
                            t.setState({
                                isHovering: !0
                            })
                        })), v(t, "onMouseLeave", (function() {
                            t.setState({
                                isHovering: !1
                            })
                        })), t
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
                        }), e && d(t, e)
                    }(e, t), n = e, (p = [{
                        key: "render",
                        value: function() {
                            return (0, r.h)(c.CustomEventsWrapper, {
                                "aria-label": this.props.isTranscriptOpen ? this.translate("CLOSE_TRANSCRIPT") : this.translate("OPEN_TRANSCRIPT"),
                                class: "w-css-reset-button-important w-vulcan-v2-button w-transcript-item",
                                tagName: "button",
                                onClick: this.props.toggleTranscript,
                                onfocusin: this.onFocus,
                                onfocusout: this.onBlur,
                                onMouseEnter: this.onMouseEnter,
                                onMouseLeave: this.onMouseLeave,
                                style: this.menuItemStyle()
                            }, (0, r.h)("svg", u({}, (0, o.standardSvgAttrs)({
                                width: 40,
                                height: 34,
                                styleOverride: this.transcriptStyle(),
                                ariaHidden: !0
                            }), {
                                class: "w-checkmark"
                            }), (0, r.h)("g", {
                                fill: "none",
                                stroke: "#ffffff",
                                "stroke-width": "1.5",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-miterlimit": "10"
                            }, (0, r.h)("line", {
                                x1: "17",
                                x2: "27",
                                y1: "12",
                                y2: "12"
                            }), (0, r.h)("line", {
                                x1: "17",
                                x2: "30",
                                y1: "17",
                                y2: "17"
                            }), (0, r.h)("line", {
                                x1: "17",
                                x2: "25",
                                y1: "22",
                                y2: "22"
                            }))), this.translate("READ_TRANSCRIPT"))
                        }
                    }, {
                        key: "transcriptStyle",
                        value: function() {
                            return {
                                height: _(this),
                                verticalAlign: "middle",
                                visibility: "visible",
                                width: m(this)
                            }
                        }
                    }, {
                        key: "menuItemStyle",
                        value: function() {
                            return {
                                background: this.state.isHovering ? "rgba(0,0,0,.3)" : "",
                                boxShadow: this.state.isKeyboardFocused ? "0 0 0 2px #fff inset" : "none",
                                borderTopLeftRadius: "".concat(this.props.controlBarBorderRadius, "px"),
                                borderTopRightRadius: "".concat(this.props.controlBarBorderRadius, "px"),
                                cursor: "pointer",
                                display: "block",
                                fontFamily: i.interFontFamily,
                                fontSize: b(this),
                                lineHeight: _(this),
                                marginRight: "".concat(10 * this.props.scale, "px"),
                                textAlign: "left",
                                width: "100%"
                            }
                        }
                    }, {
                        key: "translate",
                        value: function(t) {
                            return (0, s.getTranslation)(this.props.playerLanguage.code, "CAPTIONS_".concat(t))
                        }
                    }]) && l(n.prototype, p), h && l(n, h), Object.defineProperty(n, "prototype", {
                        writable: !1
                    }), n;
                    var n, p, h
                }(r.Component),
                m = function(t) {
                    return "".concat(function(t) {
                        return 40 * t.props.scale
                    }(t), "px")
                },
                b = function(t) {
                    return 14 * t.props.scale
                },
                _ = function(t) {
                    return "".concat(w(t), "px")
                },
                w = function(t) {
                    return 34 * t.props.scale
                }
        },
        487: (t, e, n) => {
            n.d(e, {
                CaptionsItem: () => y
            });
            var r = n(2),
                i = n(28),
                o = n(45),
                a = n(26),
                s = n(30),
                c = n(194);

            function u() {
                return u = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n)({}).hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }, u.apply(null, arguments)
            }

            function l(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, g(r.key), r)
                }
            }

            function f(t, e, n) {
                return e = h(e),
                    function(t, e) {
                        if (e && ("object" == typeof e || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, p() ? Reflect.construct(e, n || [], h(t).constructor) : e.apply(t, n))
            }

            function p() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (t) {}
                return (p = function() {
                    return !!t
                })()
            }

            function h(t) {
                return h = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, h(t)
            }

            function d(t, e) {
                return d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, d(t, e)
            }

            function v(t, e, n) {
                return (e = g(e)) in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function g(t) {
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
            var y = function(t) {
                    function e() {
                        var t;
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, e);
                        for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return v(t = f(this, e, [].concat(r)), "onBlur", (function() {
                            t.state.isKeyboardFocused && t.setState({
                                isKeyboardFocused: !1
                            })
                        })), v(t, "onClick", (function() {
                            t.props.item.onClick()
                        })), v(t, "onFocus", (function() {
                            (0, o.isMouseDown)() || t.setState({
                                isKeyboardFocused: !0
                            })
                        })), v(t, "onMouseEnter", (function() {
                            t.setState({
                                isHovering: !0
                            })
                        })), v(t, "onMouseLeave", (function() {
                            t.setState({
                                isHovering: !1
                            })
                        })), t
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
                        }), e && d(t, e)
                    }(e, t), n = e, (p = [{
                        key: "render",
                        value: function() {
                            var t = this.props.item,
                                e = (0, a.seqId)("w-captions-".concat(t.text, "-"));
                            return (0, r.h)("div", {
                                style: this.menuItemStyle(),
                                onMouseEnter: this.onMouseEnter,
                                onMouseLeave: this.onMouseLeave
                            }, (0, r.h)(c.default, {
                                checked: Boolean(t.isSelected),
                                id: e,
                                name: "Captions Menu",
                                onFocus: this.onFocus,
                                onClick: this.onClick,
                                onBlur: this.onBlur,
                                tagName: "input",
                                type: "radio",
                                value: t.text
                            }), (0, r.h)("label", {
                                class: "w-css-reset",
                                for: e,
                                "data-handle": "captions-menu-item-".concat(this.props.index),
                                lang: t.bcp47LanguageTag
                            }, (0, r.h)("svg", u({}, (0, s.standardSvgAttrs)({
                                width: 40,
                                height: 34,
                                styleOverride: this.checkStyle(),
                                ariaHidden: !0
                            }), {
                                class: "w-checkmark"
                            }), (0, r.h)("polyline", {
                                fill: "none",
                                stroke: "#ffffff",
                                "stroke-width": "2",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-miterlimit": "10",
                                points: "17,17 20,20 25,14 "
                            })), t.text))
                        }
                    }, {
                        key: "checkStyle",
                        value: function() {
                            return {
                                height: b(this),
                                verticalAlign: "middle",
                                visibility: this.props.item.isSelected ? "visible" : "hidden",
                                width: m(this)
                            }
                        }
                    }, {
                        key: "menuItemStyle",
                        value: function() {
                            return {
                                background: this.state.isHovering ? "rgba(0,0,0,.3)" : "",
                                boxShadow: this.state.isKeyboardFocused ? "0 0 0 2px #fff inset" : "none",
                                borderBottomLeftRadius: 0,
                                borderBottomRightRadius: 0,
                                display: "block",
                                fontFamily: i.interFontFamily,
                                fontSize: _(this),
                                lineHeight: b(this),
                                marginRight: "".concat(10 * this.props.scale, "px"),
                                textAlign: "left",
                                width: "100%"
                            }
                        }
                    }]) && l(n.prototype, p), h && l(n, h), Object.defineProperty(n, "prototype", {
                        writable: !1
                    }), n;
                    var n, p, h
                }(r.Component),
                m = function(t) {
                    return "".concat(function(t) {
                        return 40 * t.props.scale
                    }(t), "px")
                },
                b = function(t) {
                    return "".concat(function(t) {
                        return 34 * t.props.scale
                    }(t), "px")
                },
                _ = function(t) {
                    return 14 * t.props.scale
                }
        },
        488: (t, e, n) => {
            var r = n(204),
                i = n(23),
                o = n(24),
                a = n(26),
                s = n(2),
                c = n(3),
                u = n(9),
                l = n(73),
                f = n(47),
                p = n(140),
                h = n(489),
                d = n(197);

            function v() {
                var t, e, n = "function" == typeof Symbol ? Symbol : {},
                    r = n.iterator || "@@iterator",
                    i = n.toStringTag || "@@toStringTag";

                function o(n, r, i, o) {
                    var c = r && r.prototype instanceof s ? r : s,
                        u = Object.create(c.prototype);
                    return g(u, "_invoke", function(n, r, i) {
                        var o, s, c, u = 0,
                            l = i || [],
                            f = !1,
                            p = {
                                p: 0,
                                n: 0,
                                v: t,
                                a: h,
                                f: h.bind(t, 4),
                                d: function(e, n) {
                                    return o = e, s = 0, c = t, p.n = n, a
                                }
                            };

                        function h(n, r) {
                            for (s = n, c = r, e = 0; !f && u && !i && e < l.length; e++) {
                                var i, o = l[e],
                                    h = p.p,
                                    d = o[2];
                                n > 3 ? (i = d === r) && (c = o[(s = o[4]) ? 5 : (s = 3, 3)], o[4] = o[5] = t) : o[0] <= h && ((i = n < 2 && h < o[1]) ? (s = 0, p.v = r, p.n = o[1]) : h < d && (i = n < 3 || o[0] > r || r > d) && (o[4] = n, o[5] = r, p.n = d, s = 0))
                            }
                            if (i || n > 1) return a;
                            throw f = !0, r
                        }
                        return function(i, l, d) {
                            if (u > 1) throw TypeError("Generator is already running");
                            for (f && 1 === l && h(l, d), s = l, c = d;
                                (e = s < 2 ? t : c) || !f;) {
                                o || (s ? s < 3 ? (s > 1 && (p.n = -1), h(s, c)) : p.n = c : p.v = c);
                                try {
                                    if (u = 2, o) {
                                        if (s || (i = "next"), e = o[i]) {
                                            if (!(e = e.call(o, c))) throw TypeError("iterator result is not an object");
                                            if (!e.done) return e;
                                            c = e.value, s < 2 && (s = 0)
                                        } else 1 === s && (e = o.return) && e.call(o), s < 2 && (c = TypeError("The iterator does not provide a '" + i + "' method"), s = 1);
                                        o = t
                                    } else if ((e = (f = p.n < 0) ? c : n.call(r, p)) !== a) break
                                } catch (e) {
                                    o = t, s = 1, c = e
                                } finally {
                                    u = 1
                                }
                            }
                            return {
                                value: e,
                                done: f
                            }
                        }
                    }(n, i, o), !0), u
                }
                var a = {};

                function s() {}

                function c() {}

                function u() {}
                e = Object.getPrototypeOf;
                var l = [][r] ? e(e([][r]())) : (g(e = {}, r, (function() {
                        return this
                    })), e),
                    f = u.prototype = s.prototype = Object.create(l);

                function p(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, u) : (t.__proto__ = u, g(t, i, "GeneratorFunction")), t.prototype = Object.create(f), t
                }
                return c.prototype = u, g(f, "constructor", u), g(u, "constructor", c), c.displayName = "GeneratorFunction", g(u, i, "GeneratorFunction"), g(f), g(f, i, "Generator"), g(f, r, (function() {
                    return this
                })), g(f, "toString", (function() {
                    return "[object Generator]"
                })), (v = function() {
                    return {
                        w: o,
                        m: p
                    }
                })()
            }

            function g(t, e, n, r) {
                var i = Object.defineProperty;
                try {
                    i({}, "", {})
                } catch (t) {
                    i = 0
                }
                g = function(t, e, n, r) {
                    if (e) i ? i(t, e, {
                        value: n,
                        enumerable: !r,
                        configurable: !r,
                        writable: !r
                    }) : t[e] = n;
                    else {
                        var o = function(e, n) {
                            g(t, e, (function(t) {
                                return this._invoke(e, n, t)
                            }))
                        };
                        o("next", 0), o("throw", 1), o("return", 2)
                    }
                }, g(t, e, n, r)
            }

            function y(t, e, n, r, i, o, a) {
                try {
                    var s = t[o](a),
                        c = s.value
                } catch (t) {
                    return void n(t)
                }
                s.done ? e(c) : Promise.resolve(c).then(r, i)
            }

            function m(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = t.apply(e, n);

                        function a(t) {
                            y(o, r, i, a, s, "next", t)
                        }

                        function s(t) {
                            y(o, r, i, a, s, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }

            function b() {
                return b = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n)({}).hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }, b.apply(null, arguments)
            }

            function _(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, x(r.key), r)
                }
            }

            function w(t, e, n) {
                return e = O(e),
                    function(t, e) {
                        if (e && ("object" == typeof e || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, S() ? Reflect.construct(e, n || [], O(t).constructor) : e.apply(t, n))
            }

            function S() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (t) {}
                return (S = function() {
                    return !!t
                })()
            }

            function T() {
                return T = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t, e, n) {
                    var r = function(t, e) {
                        for (; !{}.hasOwnProperty.call(t, e) && null !== (t = O(t)););
                        return t
                    }(t, e);
                    if (r) {
                        var i = Object.getOwnPropertyDescriptor(r, e);
                        return i.get ? i.get.call(arguments.length < 3 ? t : n) : i.value
                    }
                }, T.apply(null, arguments)
            }

            function O(t) {
                return O = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, O(t)
            }

            function C(t, e) {
                return C = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, C(t, e)
            }

            function E(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function P(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? E(Object(n), !0).forEach((function(e) {
                        k(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : E(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function k(t, e, n) {
                return (e = x(e)) in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function x(t) {
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

            function A(t) {
                return function(t) {
                    if (Array.isArray(t)) return j(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return j(t, e);
                        var n = {}.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? j(t, e) : void 0
                    }
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function j(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            var L = (0, u.cachedDetect)(),
                M = function(t, e) {
                    var n;
                    if (!e || null == t) return t;
                    var r = ((null === (n = e.currentTrack()) || void 0 === n ? void 0 : n.cues) || []).map((function(t) {
                            return {
                                start: t.triggerStart,
                                end: t.triggerEnd,
                                text: t.text.split("\n"),
                                extendedAudioDescription: !0
                            }
                        })),
                        i = t.hash.lines.filter((function(t) {
                            return !t.extendedAudioDescription
                        })),
                        o = [].concat(A(i), A(r)).sort((function(t, e) {
                            return t.start - e.start || t.end - e.end
                        }));
                    return P(P({}, t), {}, {
                        hash: P(P({}, t.hash), {}, {
                            lines: o
                        })
                    })
                },
                I = function(t) {
                    function e(t) {
                        var n;
                        return function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), k(n = w(this, e, [t]), "setActiveLineForTime", (function(t) {
                            if (n.captions && n.video.captionsEnabled()) {
                                var e, r, i = n.captions.hash.lines.filter((function(e) {
                                        return e.start <= t && t < e.end
                                    })),
                                    o = i[0];
                                if (null !== (e = n.video.controls.extendedAudioDescriptionButton) && void 0 !== e && e.isEnabled() && null !== (r = n.video.controls.extendedAudioDescriptionButton) && void 0 !== r && r.isAudioPlaying()) {
                                    var a = i.find((function(t) {
                                        return t.extendedAudioDescription
                                    }));
                                    a && (o = a)
                                } else {
                                    o = i.find((function(t) {
                                        return !t.extendedAudioDescription
                                    }))
                                }
                                if (o) return n.setActiveLine(o.text, n.captions.right_to_left), void n.renderCaptions()
                            }
                            n.setNoActiveLine(), n.renderCaptions()
                        })), (0, f.dynamicImport)("assets/external/interFontFace.js"), n.options = t.plugin.captions.options, n._wistiaCaptionsId = (0, a.seqId)("wistia_", "_captions"), n._userScale = n.options.subtitlesScale || 1, n.unbinds = [t.on("timechange", n.setActiveLineForTime), t.on("extendedaudiodescriptionplay", (function() {
                            n.setActiveLineForTime(n.video.time())
                        })), t.on("extendedaudiodescriptionstop", (function() {
                            n.setActiveLineForTime(n.video.time())
                        })), t.on("enterfullscreen", (function() {
                            n.hideOrShowNativeCaptions()
                        })), t.on("cancelfullscreen", (function() {
                            n.hideOrShowNativeCaptions()
                        })), t.on("beforereplace", (function() {
                            n.removeTextTracks()
                        })), t.on("extendedaudiodescriptionchange", (function() {
                            var t, e;
                            n.captions = M(n.captions, n.video.controls.extendedAudioDescriptionButton), n.resetTextTracks();
                            var r = "playing" === n.video.state(),
                                i = n.video.time();
                            null === (t = (e = n.video._impl.engine).loadSource) || void 0 === t || t.call(e), n.video.time(i), r && n.video.play(), n.setActiveLineForTime(n.video.time()), n.renderCaptions()
                        }))], n.onCaptionsChange = function() {
                            n.updateAfterCaptionsChange(n.video.captionsLanguage().ietfLanguageTag)
                        }, n.video.embedElement.addEventListener("captions-change", n.onCaptionsChange), n.unbinds.push((function() {
                            n.video.embedElement.removeEventListener("captions-change", n.onCaptionsChange)
                        })), n.video.whenControlMounted("captionsButton").then((function() {
                            n.updateAfterCaptionsChange(n.video.captionsLanguage().ietfLanguageTag, {
                                initial: !0
                            })
                        })), n
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
                        }), e && C(t, e)
                    }(e, t), n = e, u = [{
                        key: "destroy",
                        value: function() {
                            var t, n, r, i, o;
                            (0, c.elemRemove)(this.clippedCueStyle), this.clippedCueStyle = null, this.removeTextTracks(), (t = e, n = "destroy", r = this, o = T(O(1 & (i = 3) ? t.prototype : t), n, r), 2 & i && "function" == typeof o ? function(t) {
                                return o.apply(r, t)
                            } : o)([])
                        }
                    }, {
                        key: "mount",
                        value: function(t) {
                            var e = this;
                            this.rootElem = t, this.fetchCaptions().then((function() {
                                e._destroyed || (e.setupTextTracks(), e.setActiveLineForTime(e.video.time()), e.renderCaptions())
                            }))
                        }
                    }, {
                        key: "getSelectedCaptions",
                        value: function() {
                            return this.captions
                        }
                    }, {
                        key: "fetchCaptions",
                        value: function() {
                            var t = this;
                            return this._destroyed ? new Promise((function() {})) : (0, p.fetchCaptions)(this.video, this.options).then((function(e) {
                                return t.captionsResp = e, e
                            }))
                        }
                    }, {
                        key: "resetTextTracks",
                        value: function() {
                            this.removeTextTracks(), this._setupTextTracksPromise = null, this.setupTextTracks()
                        }
                    }, {
                        key: "setupTextTracks",
                        value: function() {
                            var t = this;
                            if (this._setupTextTracksPromise) return this._setupTextTracksPromise;
                            if (L.edge && !this.video._inNativeMode()) return this._setupTextTracksPromise = new Promise((function() {}));
                            var e = this.video;
                            return this._setupTextTracksPromise = new Promise((function(n) {
                                t.fetchCaptions();
                                var r = function() {
                                    t.fetchCaptions().then((function(r) {
                                        t.removeTextTracks(), e.whenVideoElementInDom().then((function(a) {
                                            if (!t._destroyed) {
                                                if (e.engine) {
                                                    var s = r.captions.map((function(n) {
                                                        n._wistiaCaptionsId = t._wistiaCaptionsId;
                                                        var r = "".concat((0, o.proto)(), "//").concat((0, i.cdnFastWistiaNetHost)(), "/embed/captions/").concat(e.hashedId(), ".vtt?language=").concat(n.language);
                                                        return n.src = r, n
                                                    })).filter((function(t) {
                                                        return "_preview_" !== t.language
                                                    }));
                                                    e.engine.addTextTracks(s)
                                                }
                                                t.hideOrShowNativeCaptions(), n()
                                            }
                                        }))
                                    }))
                                };
                                "beforeplay" === e.state() && (L.safari || L.ios.version) ? e.bind("play", (function() {
                                    return r(), e.unbind
                                })) : r()
                            }))
                        }
                    }, {
                        key: "removeTextTracks",
                        value: function() {
                            this.video.engine && this.video.engine.removeTextTracks(this._wistiaCaptionsId)
                        }
                    }, {
                        key: "renderCaptions",
                        value: function() {
                            "beforeplay" === this.video.state() || this.video._inNativeMode() || (this.activeLine && !this._captionsHidden ? (0, s.render)((0, s.h)(h.default, b({}, this.props, this.activeLine, {
                                scale: this.scale(),
                                isInFullscreen: this.video.inFullscreen(),
                                isPlaybarEnabled: this.video.isControlEnabled("playbar"),
                                isTranscriptEnabled: this.isTranscriptEnabled()
                            })), this.rootElem) : (0, s.render)((0, s.h)("nothing", null), this.rootElem), this.reactMounts.captions = [this.rootElem])
                        }
                    }, {
                        key: "isTranscriptEnabled",
                        value: function() {
                            return !1 !== this.options.transcript
                        }
                    }, {
                        key: "onControlPropsUpdated",
                        value: function(t) {
                            t.videoWidth === this.props.videoWidth && t.controlsAreVisible === this.props.controlsAreVisible && t.controlBarHeight === this.props.controlBarHeight && t.captionsBackgroundColor === this.props.captionsBackgroundColor && t.captionsTextSize === this.props.captionsTextSize && t.captionsTextColor === this.props.captionsTextColor && t.captionsTextShadow === this.props.captionsTextShadow && t.captionsFontFamily === this.props.captionsFontFamily && t.captionsFontVariant === this.props.captionsFontVariant && t.captionsBorderRadius === this.props.captionsBorderRadius && t.captionsWindowColor === this.props.captionsWindowColor && t.captionsWindowOpacityPercentage === this.props.captionsWindowOpacityPercentage && t.captionsTextOpacityPercentage === this.props.captionsTextOpacityPercentage && t.captionsBackgroundOpacityPercentage === this.props.captionsBackgroundOpacityPercentage && t.scale === this.props.scale || this.renderCaptions()
                        }
                    }, {
                        key: "setActiveLine",
                        value: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            this.activeLine = {
                                text: t,
                                rtl: e
                            }
                        }
                    }, {
                        key: "setNoActiveLine",
                        value: function() {
                            this.activeLine = null
                        }
                    }, {
                        key: "remapCaptionsTimingsToMatchVideoLanguage",
                        value: function() {
                            var t = this;
                            if (null != this.captions && this.captions.media_hashed_id !== this.video.hashedId() && this.video.mediaLanguage().isLocalization) {
                                var e = this.video.mediaLanguages().find((function(t) {
                                        return t.sourceLanguage
                                    })),
                                    n = this.video.mediaLanguage().ietfLanguageTag,
                                    r = this.captions.hash.lines.map((function(r) {
                                        var i = t.remapTime(e.ietfLanguageTag, n, r.start),
                                            o = t.remapTime(e.ietfLanguageTag, n, r.end);
                                        return P(P({}, r), {}, {
                                            start: i,
                                            end: o
                                        })
                                    }));
                                this.captions = P(P({}, this.captions), {}, {
                                    hash: P(P({}, this.captions.hash), {}, {
                                        lines: r
                                    })
                                })
                            }
                        }
                    }, {
                        key: "setLanguage",
                        value: function(t) {
                            this.video.captionsLanguage(t)
                        }
                    }, {
                        key: "isEnabled",
                        value: function() {
                            return Boolean(this._isEnabled)
                        }
                    }, {
                        key: "updateAfterCaptionsChange",
                        value: function(t) {
                            var e = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            if (this._isEnabled = this.video.captionsEnabled(), !this.video.captionsEnabled()) return this.setNoActiveLine(), void this.renderCaptions();
                            this.fetchCaptions().then(m(v().m((function r() {
                                var i;
                                return v().w((function(r) {
                                    for (;;) switch (r.n) {
                                        case 0:
                                            return i = (0, p.getCaptionsForLanguage)(t, e.captionsResp.captions), e.captions = M(i, e.video.controls.extendedAudioDescriptionButton), r.n = 1, e.video.getRemapTime();
                                        case 1:
                                            e.remapTime = r.v, e.remapCaptionsTimingsToMatchVideoLanguage(), e.setActiveLineForTime(e.video.time()), e.renderCaptions(), !1 !== n.track && e.showCorrespondingTrack(i), !1 !== n.initial && e.video.trigger("captionslanguagechange", t);
                                        case 2:
                                            return r.a(2)
                                    }
                                }), r)
                            }))))
                        }
                    }, {
                        key: "turnOff",
                        value: function() {
                            this.video.captionsEnabled(!1)
                        }
                    }, {
                        key: "showCorrespondingTrack",
                        value: function(t) {
                            var e = this;
                            L.edge && !this.video._inNativeMode() || this.setupTextTracks().then((function() {
                                for (var n = e.video.getMediaElement(), r = 0; r < n.textTracks.length; r++) {
                                    var i = n.textTracks[r];
                                    "captions" === i.kind && (t && i.language === t.language ? i.mode = "showing" : i.mode = "disabled")
                                }
                            }))
                        }
                    }, {
                        key: "hideOrShowNativeCaptions",
                        value: function() {
                            (0, p.shouldShowNativeCaptions)(this.video) ? this.allowShowingNativeCaptions(): this.disallowShowingNativeCaptions()
                        }
                    }, {
                        key: "allowShowingNativeCaptions",
                        value: function() {
                            this.clippedCueStyle && ((0, c.elemRemove)(this.clippedCueStyle), this.clippedCueStyle = null), this.hideCustomCaptions()
                        }
                    }, {
                        key: "disallowShowingNativeCaptions",
                        value: function() {
                            if (this.clippedCueStyle) return this.clippedCueStyle;
                            var t = "WISTIA-PLAYER" === this.embedElement.tagName && !0 !== this.video._attrs.wistiaPopover ? this.embedElement.shadowRoot : document.head;
                            this.clippedCueStyle = (0, c.addInlineCss)(t, "\n      #".concat(this.video.chrome.id, " ::cue {\n        visibility: hidden;\n      }\n      #").concat(this.video.chrome.id, " ::-webkit-media-text-track-container {\n        visibility: hidden;\n      }\n      #").concat(this.video.chrome.id, " ::-webkit-media-text-track-background {\n        visibility: hidden;\n      }\n      #").concat(this.video.chrome.id, " ::-webkit-media-text-track-display {\n        visibility: hidden;\n      }\n    ")), this.showCustomCaptions()
                        }
                    }, {
                        key: "hideCustomCaptions",
                        value: function() {
                            this._captionsHidden = !0, this.renderCaptions()
                        }
                    }, {
                        key: "showCustomCaptions",
                        value: function() {
                            this._captionsHidden = !1, this.renderCaptions()
                        }
                    }, {
                        key: "setUserScale",
                        value: function(t) {
                            this._userScale = t, this.renderCaptions()
                        }
                    }, {
                        key: "getUserScale",
                        value: function() {
                            return this._userScale
                        }
                    }, {
                        key: "scale",
                        value: function() {
                            return this._userScale * Math.min(2, Math.max(.6, (0, r.controlMultiplierBasedOnVideo)(this.video, [640, 850])))
                        }
                    }], u && _(n.prototype, u), l && _(n, l), Object.defineProperty(n, "prototype", {
                        writable: !1
                    }), n;
                    var n, u, l
                }(d.Control);
            I.handle = "captions", I.type = "above-control-bar", I.shouldMount = function(t) {
                return t.plugin.captions && !1 === t.isLiveMedia()
            }, (0, l.defineControl)(I)
        },
        489: (t, e, n) => {
            n.d(e, {
                default: () => h
            });
            var r = n(2),
                i = n(34),
                o = n(330);

            function a(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, s(r.key), r)
                }
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

            function c(t, e, n) {
                return e = l(e),
                    function(t, e) {
                        if (e && ("object" == typeof e || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, u() ? Reflect.construct(e, n || [], l(t).constructor) : e.apply(t, n))
            }

            function u() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (t) {}
                return (u = function() {
                    return !!t
                })()
            }

            function l(t) {
                return l = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, l(t)
            }

            function f(t, e) {
                return f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, f(t, e)
            }
            var p = function(t) {
                function e(t) {
                    var n;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), n = c(this, e, [t]), (0, o.getLoadedSelfHostedGoogleFonts)().includes(t.captionsFontFamily) || (0, o.loadSelfHostedGoogleFont)(t.captionsFontFamily), n
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
                }(e, t), n = e, (s = [{
                    key: "componentDidUpdate",
                    value: function(t) {
                        var e = (0, o.getLoadedSelfHostedGoogleFonts)();
                        this.props.captionsFontFamily == t.captionsFontFamily || e.includes(this.props.captionsFontFamily) || (0, o.loadSelfHostedGoogleFont)(this.props.captionsFontFamily)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this,
                            e = this.props.text.map((function(e, n) {
                                return t.renderLine(e, n)
                            }));
                        return (0, r.h)("div", {
                            class: "w-captions w-css-reset w-css-reset-tree w-vulcan-v2-button",
                            style: this.rootContainerStyle()
                        }, (0, r.h)("div", {
                            class: "w-captions-window",
                            style: this.groupStyle()
                        }, e))
                    }
                }, {
                    key: "renderLine",
                    value: function(t, e) {
                        var n = {
                                isFirst: 0 === e,
                                isLast: e === this.props.text.length - 1
                            },
                            i = this.props.rtl ? "rtl" : "ltr";
                        return (0, r.h)("p", {
                            class: "w-captions-line",
                            style: this.lineStyle()
                        }, (0, r.h)("div", {
                            style: {
                                display: "inline-block",
                                transition: "all 200ms ease",
                                verticalAlign: "bottom"
                            },
                            class: "w-css-reset"
                        }, (0, r.h)("span", {
                            dir: i,
                            style: this.spanStyle(n),
                            dangerouslySetInnerHTML: {
                                __html: t
                            }
                        })))
                    }
                }, {
                    key: "rootContainerStyle",
                    value: function() {
                        var t = this.props,
                            e = 18 * t.scale,
                            n = t.controlsAreVisible ? 0 : -t.controlBarHeight;
                        return {
                            bottom: "".concat(n + e, "px"),
                            left: 0,
                            pointerEvents: "none",
                            position: "absolute",
                            textAlign: "center",
                            width: "100%",
                            transition: "all 100ms ease"
                        }
                    }
                }, {
                    key: "groupStyle",
                    value: function() {
                        var t = this.props,
                            e = t.captionsWindowColor,
                            n = t.captionsWindowOpacityPercentage;
                        return {
                            backgroundColor: new i.Color(e).alpha(n),
                            display: "inline-block",
                            position: "relative",
                            margin: "auto",
                            maxWidth: "80%",
                            outline: "none",
                            cursor: "pointer"
                        }
                    }
                }, {
                    key: "lineStyle",
                    value: function() {
                        return {
                            lineHeight: "1em",
                            margin: 0,
                            padding: 0
                        }
                    }
                }, {
                    key: "spanStyle",
                    value: function() {
                        var t = this.props,
                            e = t.scale,
                            n = t.captionsBackgroundOpacityPercentage,
                            r = t.captionsBackgroundColor,
                            o = t.captionsBorderRadius,
                            a = t.captionsTextColor,
                            s = t.captionsTextOpacityPercentage,
                            c = t.captionsTextSize,
                            u = t.captionsFontFamily,
                            l = t.captionsFontVariant,
                            f = t.captionsTextShadow,
                            p = new i.Color(r).alpha(n),
                            h = new i.Color(a).alpha(s);
                        return {
                            background: p,
                            borderRadius: "".concat(o, "px"),
                            color: h,
                            display: "block",
                            fontFamily: u,
                            fontSize: "".concat(c * e, "px"),
                            fontVariant: l,
                            textShadow: f,
                            lineHeight: "1em",
                            overflow: "hidden",
                            padding: ".25em .6em",
                            textOverflow: "ellipsis",
                            webkitFontSmoothing: "antialiased",
                            width: "100%",
                            transition: "all 200ms ease-in-out"
                        }
                    }
                }]) && a(n.prototype, s), u && a(n, u), Object.defineProperty(n, "prototype", {
                    writable: !1
                }), n;
                var n, s, u
            }(r.Component);
            p.defaultProps = {
                captionsBorderRadius: 0,
                captionsBackgroundColor: "#000",
                captionsTextColor: "#fff",
                captionsTextSize: 18,
                captionsTextOpacityPercentage: 1,
                captionsFontVariant: "normal",
                captionsTextShadow: "none",
                captionsFontFamily: "Inter",
                captionsBackgroundOpacityPercentage: .75,
                captionsWindowColor: "#000",
                captionsWindowOpacityPercentage: 0
            };
            const h = p
        },
        490: (t, e, n) => {
            var r = n(2),
                i = n(3),
                o = n(47),
                a = n(73),
                s = n(16),
                c = n(197),
                u = n(491),
                l = n(140);

            function f(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function p(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? f(Object(n), !0).forEach((function(e) {
                        m(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function h(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, b(r.key), r)
                }
            }

            function d(t, e, n) {
                return e = g(e),
                    function(t, e) {
                        if (e && ("object" == typeof e || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, v() ? Reflect.construct(e, n || [], g(t).constructor) : e.apply(t, n))
            }

            function v() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (t) {}
                return (v = function() {
                    return !!t
                })()
            }

            function g(t) {
                return g = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, g(t)
            }

            function y(t, e) {
                return y = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, y(t, e)
            }

            function m(t, e, n) {
                return (e = b(e)) in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function b(t) {
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
            var _ = function(t) {
                function e(t) {
                    var n, i, o;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), m(o = d(this, e, [t]), "close", (function() {
                        o._isVisible = !1, o.animateOut().then((function() {
                            o.video.embedElement.dispatchEvent(new CustomEvent("transcript-control-visibility-change", {
                                detail: {
                                    isVisible: !1
                                }
                            })), o.video.controls.captions.showCustomCaptions(), (0, r.render)((0, r.h)("nothing", null), o.rootElem), o.reactMounts = [o.rootElem]
                        }))
                    })), m(o, "seekTranscript", (function(t) {
                        o.video.time(t)
                    })), m(o, "metricsVideoCount", (function(t) {
                        s.Wistia.Metrics.videoCount(o.video._impl, "player/".concat(t))
                    })), m(o, "onClickCloseTranscript", (function() {
                        o.close(), o.video.controls.captionsButton.buttonElement.focus()
                    })), m(o, "onSearchHitCounterChange", (function(t) {
                        var e = t.activeHitIndex,
                            n = t.totalHits;
                        o.video.behaviors.ui.setAriaLiveText("".concat(e, " of ").concat(n, " results."))
                    })), o.video = t, o.options = null !== (n = null === (i = t.plugin.captions) || void 0 === i ? void 0 : i.options) && void 0 !== n ? n : {}, o._isVisible = !1, o._turnstileClosed = !1, o.unbinds = [], o.unbinds.push(o.video.on("captionschange", (function(t) {
                        o.setSelectedLanguage(t)
                    })), o.video.on("timechange", (function() {
                        o._isVisible && o.renderTranscript()
                    })), o.video.on("turnstileclose", (function() {
                        o._turnstileClosed = !0, o._isVisible && o.renderTranscript()
                    })), o.video.on("extendedaudiodescriptionchange", (function() {
                        o._isVisible && o.rerenderTranscript()
                    })), o.video.on("extendedaudiodescriptioninit", (function() {
                        o._isVisible && o.rerenderTranscript()
                    }))), o
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
                    }), e && y(t, e)
                }(e, t), n = e, (a = [{
                    key: "mount",
                    value: function(t) {
                        var e = this;
                        this.fetchCaptions().then((function() {
                            var n = (0, i.elemFromObject)({
                                style: {
                                    position: "absolute"
                                },
                                class: "w-css-reset"
                            });
                            (0, i.elemAppend)(t, n), e.rootElem = n
                        }))
                    }
                }, {
                    key: "open",
                    value: function() {
                        "beforeplay" === this.video.state() && this.video.setControlEnabled("bigPlayButton", !1), this.video.controls.captions.hideCustomCaptions(), this._isVisible = !0, this.video.embedElement.dispatchEvent(new CustomEvent("transcript-control-visibility-change", {
                            detail: {
                                isVisible: !0
                            }
                        })), this.renderTranscript(), this.animateIn()
                    }
                }, {
                    key: "onControlPropsUpdated",
                    value: function(t) {
                        var e = this;
                        this._isVisible && (this.props.controlsAreVisible !== t.controlsAreVisible && this.fetchCaptions().then((function() {
                            e.renderTranscript()
                        })), this.props.videoWidth !== t.videoWidth && this.fetchCaptions().then((function() {
                            e.renderTranscript()
                        })), this.props.videoHeight !== t.videoHeight && this.fetchCaptions().then((function() {
                            e.renderTranscript()
                        })))
                    }
                }, {
                    key: "fetchCaptions",
                    value: function() {
                        var t = this;
                        return (0, l.fetchCaptions)(this.video, this.options).then((function(e) {
                            return t.captionsResp = e, e
                        }))
                    }
                }, {
                    key: "setSelectedLanguage",
                    value: function(t) {
                        this.selectedLanguage = t.language, this.rootElem && this._isVisible && ("_off_" === t.language ? this.close() : this.renderTranscript())
                    }
                }, {
                    key: "renderTranscript",
                    value: function() {
                        var t, e = this;
                        this.video.controls.captions.hideCustomCaptions();
                        var n, i = (0, l.getPreferredCaptionsIndex)(this.video._mediaData, null === (t = this.video.embedOptions().plugin) || void 0 === t ? void 0 : t["captions-v1"]);
                        return i >= 0 && (n = this.captionsResp.captions[i].language), new Promise((function(t) {
                            (0, o.dynamicImport)("assets/external/interFontFace.js").then((function() {
                                (0, r.render)((0, r.h)(u.default, {
                                    closeTranscript: e.onClickCloseTranscript,
                                    controlBarHeight: e.props.controlBarHeight,
                                    controlsAreVisible: e.props.controlsAreVisible,
                                    preferredLanguage: n,
                                    playerLanguage: e.video.playerLanguage(),
                                    scale: e.props.scale,
                                    seekTranscript: e.seekTranscript,
                                    selectedLanguage: e.selectedLanguage || e.captionsResp.preferred_languages[0],
                                    srtCaptions: e.getSrtCaptions(),
                                    metricsVideoCount: e.metricsVideoCount,
                                    turnstileClosed: e._turnstileClosed,
                                    turnstileEmail: e.video.email(),
                                    turnstilePlugin: e.video.plugin["requireEmail-v1"],
                                    videoDuration: e.video.duration(),
                                    videoHeight: e.video.videoHeight(),
                                    videoTime: e.video.time(),
                                    videoWidth: e.video.videoWidth(),
                                    onSearchHitCounterChange: e.onSearchHitCounterChange
                                }), e.rootElem), e.reactMounts = [e.rootElem], t()
                            }))
                        }))
                    }
                }, {
                    key: "rerenderTranscript",
                    value: function() {
                        return (0, r.render)((0, r.h)("nothing", null), this.rootElem), this.renderTranscript()
                    }
                }, {
                    key: "getSrtCaptions",
                    value: function() {
                        var t;
                        return null !== (t = this.video.controls.extendedAudioDescriptionButton) && void 0 !== t && t.isEnabled() ? this.captionsResp.captions : (this.captionsWithoutExtendedAudioDescription || (this.captionsWithoutExtendedAudioDescription = {}, this.captionsWithoutExtendedAudioDescription.captions = this.captionsResp.captions.map((function(t) {
                            var e = t.hash.lines.filter((function(t) {
                                return !t.extendedAudioDescription
                            }));
                            return p(p({}, t), {}, {
                                hash: p(p({}, t.hash), {}, {
                                    lines: e
                                })
                            })
                        }))), this.captionsWithoutExtendedAudioDescription.captions)
                    }
                }, {
                    key: "animateIn",
                    value: function() {
                        var t = this;
                        return new Promise((function(e) {
                            (0, i.elemStyle)(t.rootElem, {
                                opacity: 0,
                                height: "100%",
                                width: "100%"
                            }), setTimeout((function() {
                                (0, i.elemAnimate)(t.rootElem, {
                                    opacity: 1
                                }, {
                                    time: 200,
                                    callback: e
                                })
                            }), 0)
                        }))
                    }
                }, {
                    key: "animateOut",
                    value: function() {
                        var t = this;
                        return new Promise((function(e) {
                            (0, i.elemStyle)(t.rootElem, {
                                opacity: 1
                            }), setTimeout((function() {
                                (0, i.elemAnimate)(t.rootElem, {
                                    opacity: 0
                                }, {
                                    time: 200,
                                    callback: function() {
                                        (0, i.elemStyle)(t.rootElem, {
                                            height: 0,
                                            width: 0
                                        }), e()
                                    }
                                })
                            }), 0)
                        }))
                    }
                }]) && h(n.prototype, a), c && h(n, c), Object.defineProperty(n, "prototype", {
                    writable: !1
                }), n;
                var n, a, c
            }(c.Control);
            _.handle = "transcript", _.type = "above-control-bar", _.sortValue = 600, _.shouldMount = function(t) {
                var e = t.embedOptions().plugin && t.embedOptions().plugin["captions-v1"] && !1 === t.embedOptions().plugin["captions-v1"].transcript;
                return !e && (t.plugin.captions && t.plugin.captions.options && !1 === t.isLiveMedia() && !e)
            }, (0, a.defineControl)(_)
        },
        491: (t, e, n) => {
            n.d(e, {
                default: () => m
            });
            var r = n(2),
                i = n(28),
                o = n(45),
                a = n(492),
                s = n(494),
                c = n(495),
                u = n(259);

            function l(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, g(r.key), r)
                }
            }

            function f(t, e, n) {
                return e = h(e),
                    function(t, e) {
                        if (e && ("object" == typeof e || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, p() ? Reflect.construct(e, n || [], h(t).constructor) : e.apply(t, n))
            }

            function p() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (t) {}
                return (p = function() {
                    return !!t
                })()
            }

            function h(t) {
                return h = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, h(t)
            }

            function d(t, e) {
                return d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, d(t, e)
            }

            function v(t, e, n) {
                return (e = g(e)) in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function g(t) {
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
            var y = 20;
            const m = function(t) {
                function e(t) {
                    var n;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), v(n = f(this, e, [t]), "setRefs", (function(t) {
                        n.sectionRefs = t
                    })), v(n, "resetFirstHitIndex", (function() {
                        n.setState({
                            activeSearchHitIndex: void 0
                        })
                    })), v(n, "setCloseFocus", (function() {
                        (0, o.isMouseDown)() || n.setState({
                            closeFocus: !0
                        })
                    })), v(n, "setCloseBlur", (function() {
                        n.setState({
                            closeFocus: !1
                        })
                    })), v(n, "setClearSearchFocus", (function() {
                        (0, o.isMouseDown)() || n.setState({
                            clearSearchFocus: !0
                        })
                    })), v(n, "setClearSearchBlur", (function() {
                        n.setState({
                            clearSearchFocus: !1
                        })
                    })), v(n, "updateSearchValue", (function(t) {
                        n.setState({
                            searchKey: t.target.value
                        })
                    })), v(n, "inputKeyDown", (function(t) {
                        var e = n.state,
                            r = e.hitCounter,
                            i = e.activeSearchHitIndex,
                            o = e.hitAndMissIndices,
                            a = e.searchKey,
                            s = 40 === t.which ? 0 : i + 1,
                            c = o.indexOf(!0, s),
                            u = o.indexOf(!0);
                        u = -1 === u ? 0 : u;
                        var l, f = r;
                        switch (-1 === c ? (l = u, f = a ? 1 : 0) : (l = c, f += 1), t.which) {
                            case 40:
                                n.setState({
                                    activeSearchHitIndex: l,
                                    hitCounter: a ? 1 : 0
                                }), setTimeout((function() {
                                    requestAnimationFrame((function() {
                                        n.sectionRefs[l].focus()
                                    }))
                                }), 20);
                                break;
                            case 13:
                                n.setState({
                                    activeSearchHitIndex: l,
                                    hitCounter: f
                                })
                        }
                    })), v(n, "inputOnFocus", (function() {
                        n.setState({
                            inputHasFocus: !0
                        })
                    })), v(n, "inputOnBlur", (function() {
                        n.setState({
                            inputHasFocus: !1
                        })
                    })), v(n, "focusInput", (function(t) {
                        n.inputElem.focus(), n.setState({
                            activeSearchHitIndex: t
                        })
                    })), v(n, "updateHitCounter", (function(t) {
                        var e = n.state.hitCounter,
                            r = t ? e + 1 : e - 1;
                        n.state.searchKey && n.setState({
                            hitCounter: r
                        })
                    })), v(n, "onMouseMove", (function() {
                        !1 === n.state.recentlyMoused && n.setState({
                            recentlyMoused: !0
                        }), n.isMousingTimeout && clearTimeout(n.isMousingTimeout), n.isMousingTimeout = setTimeout((function() {
                            n.setState({
                                recentlyMoused: !1
                            })
                        }), 7e3)
                    })), v(n, "onKeyUp", (function(t) {
                        27 !== t.which || t.escapeHandled || (t.escapeHandled = !0, n.props.closeTranscript())
                    })), n.state = {
                        captions: n.formatCaptions(),
                        clearSearchFocus: !1,
                        closeFocus: !1,
                        hitAndMissIndices: [],
                        hitCounter: 0,
                        inputHasFocus: !1,
                        isContainerHover: null,
                        recentlyMoused: !1,
                        searchKey: "",
                        totalHits: 0,
                        turnstile: {}
                    }, n.isMousingTimeout = null, n.searchTimeout = null, n.setTurnstileOptions(), n
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
                    }), e && d(t, e)
                }(e, t), n = e, (p = [{
                    key: "componentDidMount",
                    value: function() {
                        this.setState({
                            hitAndMissIndices: this.initialHitAndMissIndices()
                        }), this.props.metricsVideoCount("interactiveCaptions-open"), this.inputElem.focus()
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.props.metricsVideoCount("interactiveCaptions-close")
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(t, e) {
                        this.state.searchKey !== e.searchKey && this.debounceSearch(), this.props.selectedLanguage !== t.selectedLanguage && (this.setState({
                            captions: this.formatCaptions()
                        }), this.setState({
                            hitAndMissIndices: this.initialHitAndMissIndices()
                        })), (this.props.turnstileClosed !== t.turnstileClosed || this.props.turnstileEmail !== t.turnstileEmail || void 0 !== this.props.turnstilePlugin && void 0 === t.turnstilePlugin) && this.setTurnstileOptions(), e.hitCounter === this.state.hitCounter && e.totalHits === this.state.totalHits || this.props.onSearchHitCounterChange({
                            activeHitIndex: this.state.hitCounter,
                            totalHits: this.state.totalHits
                        })
                    }
                }, {
                    key: "initialHitAndMissIndices",
                    value: function() {
                        var t = this.state.captions.length;
                        return Array.apply(null, Array(t)).map((function() {
                            return !1
                        }))
                    }
                }, {
                    key: "setTurnstileOptions",
                    value: function() {
                        var t = this.props.turnstilePlugin;
                        t ? this.setState({
                            turnstile: {
                                enabled: !0,
                                time: t.options.time,
                                hasClosed: this.props.turnstileClosed || Boolean(this.props.turnstileEmail) || !1
                            }
                        }) : this.setState({
                            turnstile: {
                                enabled: !1,
                                time: void 0,
                                hasClosed: void 0
                            }
                        })
                    }
                }, {
                    key: "debounceSearch",
                    value: function() {
                        var t = this;
                        clearTimeout(this.searchTimeout), this.searchTimeout = setTimeout((function() {
                            t.doSearch()
                        }), 350)
                    }
                }, {
                    key: "doSearch",
                    value: function() {
                        var t, e = this.state,
                            n = e.searchKey,
                            r = e.captions,
                            i = n.replaceAll("&", "&amp;"),
                            o = new RegExp(i, "ig"),
                            a = 0;
                        if (r && n) {
                            var s = r.map((function(e, n) {
                                    var r = o.test(e.text);
                                    return void 0 === t && r && (t = n), r && (a += 1), r
                                })),
                                c = t ? 1 : 0;
                            this.setState({
                                hitAndMissIndices: s,
                                activeSearchHitIndex: t,
                                hitCounter: c,
                                totalHits: a
                            }), this.props.metricsVideoCount("interactiveCaptions-search")
                        } else this.setState({
                            hitAndMissIndices: this.initialHitAndMissIndices(),
                            totalHits: a,
                            hitCounter: 0,
                            activeSearchHitIndex: t
                        })
                    }
                }, {
                    key: "getCaptionsForLanguage",
                    value: function() {
                        var t = this.props,
                            e = t.srtCaptions,
                            n = t.selectedLanguage,
                            r = t.preferredLanguage,
                            i = n && "_off_" !== n ? n : r;
                        return e.filter((function(t) {
                            return t.language === i
                        }))[0]
                    }
                }, {
                    key: "formatCaptions",
                    value: function() {
                        var t = this.getCaptionsForLanguage(),
                            e = null == t ? void 0 : t.hash.lines.map((function(t) {
                                return t.text.map((function(e) {
                                    return {
                                        start: t.start,
                                        end: t.end,
                                        text: e
                                    }
                                }))
                            }));
                        return [].concat.apply([], e)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t, e = this,
                            n = (this.props.scale, this.state),
                            i = n.captions,
                            o = n.hitCounter,
                            u = n.totalHits,
                            l = null !== (t = this.getCaptionsForLanguage()) && void 0 !== t && t.right_to_left ? "rtl" : "ltr";
                        return (0, r.h)("div", {
                            class: "w-css-reset w-css-reset-tree",
                            onKeyUp: this.onKeyUp,
                            onMouseMove: this.onMouseMove,
                            style: this.rootStyles()
                        }, (0, r.h)("div", {
                            dir: l,
                            style: this.searchAndCloseContainerStyles()
                        }, (0, r.h)("div", {
                            style: {
                                position: "absolute",
                                width: "50%",
                                left: 0,
                                right: 0,
                                top: "50%",
                                transform: "translateY(-50%)",
                                margin: "auto"
                            }
                        }, (0, r.h)("div", {
                            style: this.searchIconStyles()
                        }, (0, r.h)(c.SearchIcon, {
                            color: this.state.inputHasFocus || this.state.searchKey ? "#505050" : "#FFF"
                        })), (0, r.h)("style", {
                            dangerouslySetInnerHTML: {
                                __html: "\n                .w-interactive-captions--search-input::placeholder {\n                  color: ".concat(this.state.inputHasFocus || this.state.searchKey ? "#505050" : "#FFF", ";\n                  opacity: 1;\n                }\n                .w-interactive-captions--search-input::-webkit-search-cancel-button {\n                  display: none;\n                }\n              ")
                            }
                        }), (0, r.h)("input", {
                            "aria-label": "Search Captions",
                            class: "w-interactive-captions--search-input",
                            onBlur: this.inputOnBlur,
                            onInput: this.updateSearchValue,
                            onFocus: this.inputOnFocus,
                            onKeyDown: this.inputKeyDown,
                            placeholder: "Search",
                            style: this.searchInputStyles(),
                            type: "search",
                            value: this.state.searchKey,
                            ref: function(t) {
                                return e.inputElem = t
                            }
                        }), (0, r.h)("button", {
                            style: this.stylesForClearSearchButton(),
                            class: "w-vulcan-v2-button w-css-reset",
                            onClick: function() {
                                e.setState({
                                    searchKey: ""
                                }), e.inputElem.focus()
                            },
                            onFocus: this.setClearSearchFocus,
                            onBlur: this.setClearSearchBlur,
                            tabIndex: 0,
                            "aria-label": "Clear search input"
                        }, (0, r.h)(s.CloseIcon, {
                            color: "#000"
                        })), (0, r.h)("div", {
                            style: this.hitCountStyle()
                        }, o, " / ", u)), (0, r.h)("div", {
                            style: {
                                position: "absolute",
                                right: "5%",
                                top: "50%",
                                transform: "translateY(-50%)",
                                display: "inline-block"
                            }
                        }, (0, r.h)("button", {
                            style: this.closeButtonStyles(),
                            class: "w-vulcan-v2-button w-css-reset",
                            onClick: this.props.closeTranscript,
                            onFocus: this.setCloseFocus,
                            onBlur: this.setCloseBlur,
                            tabIndex: 0,
                            "aria-label": "Close Interactive Captions"
                        }, (0, r.h)(s.CloseIcon, {
                            color: "#FFF"
                        })))), (0, r.h)(a.default, {
                            activeSearchHitIndex: this.state.activeSearchHitIndex,
                            allRefs: this.sectionRefs,
                            captions: i,
                            closeTranscript: this.props.closeTranscript,
                            controlsAreVisible: this.props.controlsAreVisible,
                            controlBarHeight: this.calculateSearchHeight(),
                            focusInput: this.focusInput,
                            hitAndMissIndices: this.state.hitAndMissIndices,
                            recentlyMoused: this.state.recentlyMoused,
                            scale: this.props.scale,
                            setRefs: this.setRefs,
                            searchKey: this.state.searchKey,
                            seekTranscript: this.props.seekTranscript,
                            turnstile: this.state.turnstile,
                            updateHitCounter: this.updateHitCounter,
                            videoDuration: this.props.videoDuration,
                            videoHeight: this.props.videoHeight,
                            videoTime: this.props.videoTime,
                            dir: l
                        }))
                    }
                }, {
                    key: "rootStyles",
                    value: function() {
                        return {
                            backgroundColor: "rgba(0,0,0,.65)",
                            clip: "rect(0,0,0,0)",
                            color: "#fff",
                            height: "calc(100% + ".concat(this.props.controlBarHeight, "px)")
                        }
                    }
                }, {
                    key: "calculateSearchHeight",
                    value: function() {
                        return this.props.controlBarHeight ? this.props.controlBarHeight : u.BASE_CONTROL_BAR_HEIGHT_PX * this.props.scale
                    }
                }, {
                    key: "searchAndCloseContainerStyles",
                    value: function() {
                        return {
                            position: "relative",
                            height: "".concat(2 * this.calculateSearchHeight(), "px"),
                            minHeight: "".concat(2 * this.calculateSearchHeight(), "px")
                        }
                    }
                }, {
                    key: "searchIconStyles",
                    value: function() {
                        var t = this.props.scale,
                            e = "".concat(16 * t, "px");
                        return {
                            position: "absolute",
                            display: "inline-block",
                            top: "".concat(y * t, "px"),
                            transform: "translateY(-50%)",
                            left: e,
                            transition: "all 300ms ease",
                            width: "".concat(y * t, "px")
                        }
                    }
                }, {
                    key: "closeButtonStyles",
                    value: function() {
                        var t = this.props.scale;
                        return {
                            boxShadow: this.state.closeFocus ? "0 0 0 2px #fff inset" : "none",
                            borderWidth: "1px",
                            borderRadius: "0%",
                            cursor: "pointer",
                            padding: "2px",
                            height: "".concat(22.5 * t, "px"),
                            width: "".concat(22.5 * t, "px"),
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }
                    }
                }, {
                    key: "hitCountStyle",
                    value: function() {
                        var t, e = this.props.scale,
                            n = this.state.searchKey,
                            r = {
                                position: "absolute",
                                transform: "translateY(-50%)",
                                color: "#000",
                                top: "50%",
                                fontSize: "".concat(10 * e, "px"),
                                fontWeight: 600,
                                fontFamily: i.interFontFamily,
                                opacity: n ? 1 : 0,
                                transition: "all 300ms ease"
                            };
                        return (null === (t = this.getCaptionsForLanguage()) || void 0 === t ? void 0 : t.right_to_left) ? r.left = "".concat(48 * e + 45, "px") : r.right = "".concat(48 * e, "px"), r
                    }
                }, {
                    key: "stylesForClearSearchButton",
                    value: function() {
                        var t = this.props.scale,
                            e = this.state.searchKey;
                        return {
                            boxShadow: this.state.clearSearchFocus ? "0 0 0 2px #000 inset" : "none",
                            cursor: "pointer",
                            display: "flex",
                            opacity: e ? 1 : 0,
                            outline: "none",
                            padding: "2px",
                            pointerEvents: e ? "auto" : "none",
                            position: "absolute",
                            right: "".concat(16 * t, "px"),
                            top: "50%",
                            transform: "translateY(-50%)",
                            transition: "all 300ms ease",
                            width: "".concat(15 * t, "px")
                        }
                    }
                }, {
                    key: "searchInputStyles",
                    value: function() {
                        var t = this.props.scale,
                            e = this.state,
                            n = e.inputHasFocus,
                            r = e.searchKey,
                            o = Boolean(n || r),
                            a = o ? "white" : "transparent",
                            s = 8 * t;
                        return {
                            "-webkit-appearance": "none",
                            padding: "".concat(s, "px ").concat(85 * t, "px ").concat(s, "px ").concat(45 * t, "px"),
                            fontSize: "".concat(17 * t, "px"),
                            display: "block",
                            fontFamily: i.interFontFamily,
                            transition: "all 300ms ease",
                            color: o ? "#505050" : "white",
                            backgroundColor: a,
                            border: "1px solid white",
                            width: "100%",
                            margin: 0,
                            outline: "none",
                            boxSizing: "border-box"
                        }
                    }
                }]) && l(n.prototype, p), h && l(n, h), Object.defineProperty(n, "prototype", {
                    writable: !1
                }), n;
                var n, p, h
            }(r.Component)
        },
        492: (t, e, n) => {
            n.d(e, {
                default: () => m
            });
            var r = n(175),
                i = n(2),
                o = n(28),
                a = n(3),
                s = n(45),
                c = n(26),
                u = n(493);

            function l(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, g(r.key), r)
                }
            }

            function f(t, e, n) {
                return e = h(e),
                    function(t, e) {
                        if (e && ("object" == typeof e || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, p() ? Reflect.construct(e, n || [], h(t).constructor) : e.apply(t, n))
            }

            function p() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (t) {}
                return (p = function() {
                    return !!t
                })()
            }

            function h(t) {
                return h = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, h(t)
            }

            function d(t, e) {
                return d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, d(t, e)
            }

            function v(t, e, n) {
                return (e = g(e)) in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function g(t) {
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
            var y = 20;
            const m = function(t) {
                function e(t) {
                    var n;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), v(n = f(this, e, [t]), "focusNextOrPrevious", (function(t) {
                        n.setState({
                            scrollToIndex: t,
                            focusIndex: t
                        }), setTimeout((function() {
                            requestAnimationFrame((function() {
                                n.props.allRefs[t].focus()
                            }))
                        }), 20)
                    })), v(n, "handleScroll", (function(t) {
                        n.setState({
                            scrollTop: t.target.scrollTop
                        })
                    })), v(n, "onKeyDown", (function(t) {
                        if ((38 === t.which || 40 === t.which) && !t.wistiaPlayerHandled) {
                            t.preventDefault(), t.wistiaPlayerHandled = !0;
                            var e = n.props.hitAndMissIndices.indexOf(!0),
                                r = -1 !== e ? e : 0;
                            n.setState({
                                scrollToIndex: r,
                                focusIndex: r
                            }), setTimeout((function() {
                                requestAnimationFrame((function() {
                                    n.props.allRefs[r].focus()
                                }))
                            }), 20)
                        }
                    })), v(n, "onWheel", (function() {
                        !1 === n.state.recentlyScrolled && n.setState({
                            recentlyScrolled: !0
                        }), n.scrollingTimeout && clearTimeout(n.scrollingTimeout), n.scrollingTimeout = setTimeout((function() {
                            n.setState({
                                recentlyScrolled: !1
                            })
                        }), 7e3)
                    })), v(n, "setSectionBlur", (function() {
                        n.setState({
                            sectionFocus: !1
                        })
                    })), v(n, "setSectionFocus", (function() {
                        (0, s.isMouseDown)() || n.setState({
                            sectionFocus: !0
                        })
                    })), v(n, "setFocusIndex", (function(t) {
                        n.setState({
                            focusIndex: t
                        })
                    })), v(n, "setSectionRef", (function(t, e) {
                        n.savedRefs[e] = t
                    })), v(n, "renderRowAtIndex", (function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return n.renderLine(n.props.captions[t], t, e)
                    })), n.state = {
                        sectionFocus: !1,
                        availableHeight: 0,
                        scrollTop: 0,
                        scrollToIndex: void 0,
                        prevScrollToIndex: void 0,
                        recentlyScrolled: !1
                    }, n.savedRefs = {}, n.scrollingTimeout = null, n.containerId = (0, c.seqId)("w-interactive-transcript-"), n
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
                    }), e && d(t, e)
                }(e, t), n = e, (p = [{
                    key: "componentDidMount",
                    value: function() {
                        var t = this.props.captions;
                        if (this.props.setRefs && this.props.setRefs(this.savedRefs), this.setState({
                                availableHeight: this.calculateAvailableHeight()
                            }), this.props.videoTime > 0)
                            for (var e = 0; e < t.length; e++)
                                if (this.isWithinTime(t[e])) {
                                    this.setState({
                                        scrollToIndex: e
                                    });
                                    break
                                }
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(t, e) {
                        var n = this.props.captions;
                        if (this.props.setRefs && this.props.setRefs(this.savedRefs), this.props.controlsAreVisible === t.controlsAreVisible && this.props.videoHeight === t.videoHeight || this.setState({
                                availableHeight: this.calculateAvailableHeight()
                            }), this.props.activeSearchHitIndex !== t.activeSearchHitIndex && this.setState({
                                scrollToIndex: this.props.activeSearchHitIndex,
                                prevScrollToIndex: t.activeSearchHitIndex
                            }), this.state.scrollToIndex !== e.scrollToIndex && this.setState({
                                prevScrollToIndex: this.state.scrollToIndex
                            }), this.props.videoTime !== t.videoTime && !1 === this.props.recentlyMoused && !1 === this.state.recentlyScrolled)
                            for (var r = 0; r < n.length; r++)
                                if (this.isWithinTime(n[r])) {
                                    this.props.allRefs[r - 1] && null !== this.props.allRefs[r - 1].offsetParent ? this.startScrollAnimation(r) : this.setState({
                                        scrollToIndex: r
                                    });
                                    break
                                }
                        this.props.controlsAreVisible && !t.controlsAreVisible && this.isAtBottomOfCaptions() && this.scrollToBottom()
                    }
                }, {
                    key: "animate",
                    value: function() {
                        var t = this;
                        this.scollInterpolation && !this.scollInterpolation.atEnd() ? this.scrollingAnimation = requestAnimationFrame((function() {
                            t.transcriptText.scrollTop = t.scollInterpolation.value(), t.scollInterpolation.atEnd() || t.animate()
                        })) : cancelAnimationFrame(this.scrollingAnimation)
                    }
                }, {
                    key: "calculateAvailableHeight",
                    value: function() {
                        var t = this.props,
                            e = t.controlsAreVisible,
                            n = t.controlBarHeight;
                        return t.videoHeight - (2 * n + (e ? n : 0))
                    }
                }, {
                    key: "focusMaintainer",
                    value: function(t, e) {
                        this.state.focusIndex && (0, a.elemIsInside)(document.activeElement, this.transcriptTextRoot) && (this.state.focusIndex < t || this.state.focusIndex >= e ? this.props.allRefs.focusHelper && this.props.allRefs.focusHelper.focus({
                            preventScroll: !0
                        }) : this.state.focusIndex > t && this.state.focusIndex < e && this.props.allRefs[this.state.focusIndex].focus())
                    }
                }, {
                    key: "calculateNumberOfRowsToRender",
                    value: function() {
                        var t = this.props,
                            e = t.captions,
                            n = t.turnstile;
                        if (n.enabled && !1 === n.hasClosed && "end" !== n.time) {
                            for (var r = 0, i = e.length - 1, o = Math.floor((r + i) / 2); e[o].start > n.time && o - 1 < i;) n.time > e[o].start ? r = o - 1 : i = o + 1, o = Math.floor((r + i) / 2);
                            return e[o].start <= n.time ? o + 1 : 1
                        }
                        return e.length
                    }
                }, {
                    key: "getNeighboringIndices",
                    value: function(t) {
                        var e = t,
                            n = t,
                            r = this.props.hitAndMissIndices;
                        if (!this.props.searchKey) return [t - 1, t === r.length - 1 ? -1 : t + 1];
                        for (;
                            (e -= 1) >= 0 && !r[e];);
                        for (;
                            (n += 1) < r.length && !r[n];);
                        return [e, n === r.length ? -1 : n]
                    }
                }, {
                    key: "isAtBottomOfCaptions",
                    value: function() {
                        var t = this.transcriptText;
                        return t.scrollTop + 5 >= t.scrollHeight - t.offsetHeight
                    }
                }, {
                    key: "isWithinTime",
                    value: function(t) {
                        var e = this.props.videoTime,
                            n = t.start,
                            r = t.end;
                        return e >= n && e < r
                    }
                }, {
                    key: "scrollToBottom",
                    value: function() {
                        var t = this.props.captions.length - 1;
                        this.startScrollAnimation(t)
                    }
                }, {
                    key: "sectionContainerStyles",
                    value: function() {
                        return {
                            height: "100%",
                            overflowY: "scroll",
                            boxShadow: this.state.sectionFocus ? "0 0 0 2px #fff inset" : "none",
                            outline: "none"
                        }
                    }
                }, {
                    key: "startScrollAnimation",
                    value: function(t) {
                        var e = t * y * 1.5 * this.props.scale,
                            n = Math.max(0, e),
                            i = this.transcriptText.scrollTop;
                        cancelAnimationFrame(this.scrollingAnimation), this.scollInterpolation = new r.Interpolation({
                            seedRange: 300,
                            outputStart: i,
                            outputEnd: n
                        }), this.animate()
                    }
                }, {
                    key: "turnstileText",
                    value: function() {
                        var t = this.props.scale;
                        return {
                            display: "block",
                            fontWeight: "500",
                            fontSize: "".concat(16 * t, "px"),
                            lineHeight: "".concat(30 * t, "px"),
                            fontFamily: o.interFontFamily,
                            textAlign: "center",
                            textStyle: "italic"
                        }
                    }
                }, {
                    key: "renderLine",
                    value: function(t, e, n) {
                        var r = t.start,
                            o = t.end,
                            a = this.isWithinTime({
                                start: r,
                                end: o
                            }),
                            s = this.getNeighboringIndices(e);
                        return (0, i.h)("div", {
                            key: e,
                            style: {
                                boxShadow: a && !n.focusHelper ? "2px 0 0 0 #fff inset" : "none",
                                boxSizing: "border-box"
                            },
                            dir: this.props.dir,
                            "aria-rowindex": e + 1,
                            role: !n.focusHelper && "row"
                        }, (0, i.h)(u.default, {
                            containerId: this.containerId,
                            dir: this.props.dir,
                            line: t,
                            focusHelper: n.focusHelper || !1,
                            focusInput: this.props.focusInput,
                            focusNeighbors: s,
                            focusNextOrPrevious: this.focusNextOrPrevious,
                            index: e,
                            isActive: a,
                            isHovered: !1,
                            key: e,
                            scale: this.props.scale,
                            searchKey: this.props.searchKey,
                            seek: this.props.seekTranscript,
                            setSectionRef: this.setSectionRef,
                            setFocusIndex: this.setFocusIndex,
                            updateHitCounter: this.props.updateHitCounter
                        }))
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t, e = this,
                            n = this.props,
                            r = n.scale,
                            o = n.turnstile,
                            a = n.videoDuration,
                            s = this.calculateNumberOfRowsToRender(),
                            c = 30 * r,
                            u = c * s;
                        t = "end" === o.time || a - 5 <= o.time;
                        var l = this.state,
                            f = l.availableHeight,
                            p = l.scrollTop,
                            h = Math.floor(p / c);
                        this.state.prevScrollToIndex !== this.state.scrollToIndex && this.transcriptText && void 0 !== this.state.scrollToIndex && (h = this.state.scrollToIndex, this.transcriptText.scrollTop = h * c);
                        var d = h + Math.ceil(f / c);
                        d > s && (d = s);
                        for (var v = [], g = h; g < d;) v.push(this.renderRowAtIndex(g, {})), g += 1;
                        this.focusMaintainer(h, d);
                        var y = {
                            height: u,
                            paddingTop: "".concat(h * c, "px")
                        };
                        "rtl" === this.props.dir ? (y.marginRight = "".concat(25, "%"), y.textAlign = "right") : (y.marginLeft = "".concat(29, "%"), y.textAlign = "left", y.width = "".concat(60, "%"));
                        var m = this.props.captions.length > 0;
                        return (0, i.h)("div", {
                            style: {
                                height: "".concat(f, "px")
                            },
                            ref: function(t) {
                                return e.transcriptTextRoot = t
                            }
                        }, (0, i.h)("div", {
                            key: "focusHelper",
                            style: {
                                height: 0
                            }
                        }, m && this.renderRowAtIndex(this.state.focusIndex || 0, {
                            focusHelper: !0
                        })), (0, i.h)("div", {
                            "aria-label": "Use the arrow keys to move between the different caption lines. Click each line to seek the video to that line",
                            id: this.containerId,
                            onBlur: this.setSectionBlur,
                            onFocus: this.setSectionFocus,
                            onKeyDown: this.onKeyDown,
                            onScroll: this.handleScroll,
                            onWheel: this.onWheel,
                            ref: function(t) {
                                return e.transcriptText = t
                            },
                            style: this.sectionContainerStyles(),
                            tabIndex: 0
                        }, (0, i.h)("div", {
                            style: y,
                            role: "grid",
                            "aria-rowcount": s
                        }, (0, i.h)("div", {
                            role: "rowgroup"
                        }, v)), o.enabled && !1 === o.hasClosed && !t && (0, i.h)("span", {
                            style: this.turnstileText()
                        }, "-- You must enter your email to access the rest of the video. --")))
                    }
                }]) && l(n.prototype, p), h && l(n, h), Object.defineProperty(n, "prototype", {
                    writable: !1
                }), n;
                var n, p, h
            }(i.Component)
        },
        493: (t, e, n) => {
            n.d(e, {
                default: () => v
            });
            var r = n(2),
                i = n(28),
                o = n(45);

            function a(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, i, o, a, s = [],
                            c = !0,
                            u = !1;
                        try {
                            if (o = (n = n.call(t)).next, 0 === e) {
                                if (Object(n) !== n) return;
                                c = !1
                            } else
                                for (; !(c = (r = o.call(n)).done) && (s.push(r.value), s.length !== e); c = !0);
                        } catch (t) {
                            u = !0, i = t
                        } finally {
                            try {
                                if (!c && null != n.return && (a = n.return(), Object(a) !== a)) return
                            } finally {
                                if (u) throw i
                            }
                        }
                        return s
                    }
                }(t, e) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return s(t, e);
                        var n = {}.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? s(t, e) : void 0
                    }
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function s(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function c(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, d(r.key), r)
                }
            }

            function u(t, e, n) {
                return e = f(e),
                    function(t, e) {
                        if (e && ("object" == typeof e || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, l() ? Reflect.construct(e, n || [], f(t).constructor) : e.apply(t, n))
            }

            function l() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (t) {}
                return (l = function() {
                    return !!t
                })()
            }

            function f(t) {
                return f = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, f(t)
            }

            function p(t, e) {
                return p = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, p(t, e)
            }

            function h(t, e, n) {
                return (e = d(e)) in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function d(t) {
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
            const v = function(t) {
                function e(t) {
                    var n;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), h(n = u(this, e, [t]), "clickLine", (function(t) {
                        var e = n.props,
                            r = e.seek,
                            i = e.line;
                        t.preventDefault(), r(i.start + .001)
                    })), h(n, "onMouseEnter", (function() {
                        !0 !== n.state.isHovered && n.setState({
                            isHovered: !0
                        })
                    })), h(n, "onMouseLeave", (function() {
                        !1 !== n.state.isHovered && n.setState({
                            isHovered: !1
                        })
                    })), h(n, "onFocus", (function() {
                        (0, o.isMouseDown)() || (n.props.setFocusIndex(n.props.index), n.setState({
                            isKeyboardFocused: !0
                        }))
                    })), h(n, "unsetKeyboardFocus", (function() {
                        n.setState({
                            isKeyboardFocused: !1
                        })
                    })), h(n, "onKeyDown", (function(t) {
                        var e = a(n.props.focusNeighbors, 2),
                            r = e[0],
                            i = e[1];
                        switch (t.which) {
                            case 40:
                                t.preventDefault(), t.wistiaPlayerHandled = !0, -1 !== i && (n.unsetKeyboardFocus(), n.props.focusNextOrPrevious(i), n.props.updateHitCounter(!0));
                                break;
                            case 38:
                                t.preventDefault(), t.wistiaPlayerHandled = !0, n.unsetKeyboardFocus(), -1 !== r ? (n.props.focusNextOrPrevious(r), n.props.updateHitCounter(!1)) : n.props.focusInput(n.props.index)
                        }
                    })), h(n, "onKeyUp", (function(t) {
                        27 === t.which && (n.props.focusInput(n.props.index), t.escapeHandled = !0)
                    })), n.state = {
                        isHovered: !1,
                        isKeyboardFocused: !1
                    }, n
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
                    }), e && p(t, e)
                }(e, t), n = e, (s = [{
                    key: "componentDidMount",
                    value: function() {
                        if (this.el) {
                            var t = this.props.focusHelper ? "focusHelper" : this.props.index;
                            this.props.setSectionRef(this.el, t)
                        }
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function() {
                        if (this.el) {
                            var t = this.props.focusHelper ? "focusHelper" : this.props.index;
                            this.props.setSectionRef(this.el, t)
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this,
                            e = this.props,
                            n = e.searchKey,
                            i = e.line,
                            o = e.isActive,
                            a = e.scale,
                            s = n.replaceAll("&", "&amp;"),
                            c = new RegExp(s, "ig"),
                            u = this.props.focusHelper ? "div" : "button",
                            l = i.text;
                        return "" !== n && c.test(i.text) && (l = i.text.replace(c, (function(t) {
                            return "<mark>".concat(t, "</mark>")
                        }))), (0, r.h)("div", {
                            role: !this.props.focusHelper && "gridcell"
                        }, (0, r.h)(u, {
                            "aria-describedby": this.props.focusHelper ? "" : this.props.containerId,
                            onBlur: this.unsetKeyboardFocus,
                            onClick: this.clickLine,
                            onFocus: this.onFocus,
                            onKeyDown: this.onKeyDown,
                            onKeyUp: this.onKeyUp,
                            onMouseLeave: this.onMouseLeave,
                            onMouseEnter: this.onMouseEnter,
                            ref: function(e) {
                                return t.el = e
                            },
                            style: this.lineStyles(o),
                            tabIndex: -1
                        }, !1 === this.props.focusHelper && (0, r.h)("span", {
                            dangerouslySetInnerHTML: {
                                __html: l
                            },
                            style: {
                                backgroundColor: this.state.isHovered ? "black" : "transparent",
                                boxShadow: this.state.isKeyboardFocused ? "0 0 0 2px #fff inset" : "none",
                                cursor: "pointer",
                                padding: "".concat(3.4 * a, "px ").concat(8 * a, "px"),
                                textAlign: "rtl" === this.props.dir ? "right" : "left"
                            }
                        })))
                    }
                }, {
                    key: "lineStyles",
                    value: function(t) {
                        var e = this.props.scale;
                        return {
                            display: "inline-flex",
                            minHeight: this.props.focusHelper ? "0" : "".concat(30 * e, "px"),
                            fontFamily: i.interFontFamily,
                            fontSize: "".concat(17 * e, "px"),
                            fontWeight: t ? "700" : "500",
                            lineHeight: this.props.focusHelper ? "0" : "".concat(26 * e, "px"),
                            outline: "none",
                            marginLeft: "".concat(20 / 3.3 * e, "px")
                        }
                    }
                }]) && c(n.prototype, s), l && c(n, l), Object.defineProperty(n, "prototype", {
                    writable: !1
                }), n;
                var n, s, l
            }(r.Component)
        },
        494: (t, e, n) => {
            n.d(e, {
                CloseIcon: () => o
            });
            var r = n(2),
                i = n(30),
                o = function(t) {
                    var e = t.color;
                    return (0, r.h)("svg", (0, i.standardSvgAttrs)({
                        width: 24,
                        height: 24,
                        ariaHidden: !0
                    }), (0, r.h)("g", {
                        stroke: "none",
                        strokeWidth: "1",
                        fill: "".concat(e) || "#fff",
                        fillRule: "evenodd"
                    }, (0, r.h)("path", {
                        d: "M18.643128,20.7643515 C19.228878,21.3502515 20.178678,21.3502515 20.764428,20.7643515 C21.350178,20.1786015 21.350178,19.2288015 20.764428,18.6430515 L14.121378,12.0000015 L20.764428,5.3569065 C21.350178,4.7711115 21.350178,3.8213715 20.764428,3.2355765 C20.178678,2.6497965 19.228878,2.6497965 18.643128,3.2355765 L12.000018,9.8786715 L5.356893,3.2355465 C4.771098,2.6497515 3.821358,2.6497515 3.235563,3.2355465 C2.649783,3.8213265 2.649783,4.7710815 3.235563,5.3568615 L9.878703,12.0000015 L3.235578,18.6430515 C2.649783,19.2289515 2.649783,20.1786015 3.235578,20.7645015 C3.821358,21.3502515 4.771113,21.3502515 5.356893,20.7645015 L12.000018,14.1213165 L18.643128,20.7643515 Z"
                    })))
                }
        },
        495: (t, e, n) => {
            n.d(e, {
                SearchIcon: () => o
            });
            var r = n(2),
                i = n(30),
                o = function(t) {
                    var e = t.color;
                    return (0, r.h)("svg", (0, i.standardSvgAttrs)({
                        width: 24,
                        height: 24,
                        ariaHidden: !0
                    }), (0, r.h)("g", {
                        stroke: "none",
                        strokeWidth: "1",
                        fill: "".concat(e) || "#fff",
                        fillRule: "evenodd"
                    }, (0, r.h)("path", {
                        d: "M3 10.5C3 6.364 6.364 3 10.5 3S18 6.364 18 10.5 14.636 18 10.5 18 3 14.636 3 10.5m20.562 10.941l-4.661-4.661C20.213 15.027 21 12.858 21 10.5 21 4.701 16.298 0 10.5 0 4.7 0 0 4.701 0 10.5 0 16.298 4.7 21 10.5 21c2.358 0 4.527-.787 6.28-2.098l4.661 4.66c.292.291.677.438 1.06.438.386 0 .77-.147 1.061-.438.584-.584.584-1.539 0-2.121"
                    })))
                }
        },
        496: (t, e, n) => {
            var r = n(4),
                i = n(12),
                o = n(16),
                a = n(140),
                s = n(141);

            function c(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, i, o, a, s = [],
                            c = !0,
                            u = !1;
                        try {
                            if (o = (n = n.call(t)).next, 0 === e) {
                                if (Object(n) !== n) return;
                                c = !1
                            } else
                                for (; !(c = (r = o.call(n)).done) && (s.push(r.value), s.length !== e); c = !0);
                        } catch (t) {
                            u = !0, i = t
                        } finally {
                            try {
                                if (!c && null != n.return && (a = n.return(), Object(a) !== a)) return
                            } finally {
                                if (u) throw i
                            }
                        }
                        return s
                    }
                }(t, e) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return u(t, e);
                        var n = {}.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(t, e) : void 0
                    }
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function u(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function l(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function f(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? l(Object(n), !0).forEach((function(e) {
                        p(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function p(t, e, n) {
                return (e = d(e)) in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function h(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, d(r.key), r)
                }
            }

            function d(t) {
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

            function v(t, e, n) {
                return e = m(e),
                    function(t, e) {
                        if (e && ("object" == typeof e || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, g() ? Reflect.construct(e, n || [], m(t).constructor) : e.apply(t, n))
            }

            function g() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (t) {}
                return (g = function() {
                    return !!t
                })()
            }

            function y() {
                return y = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t, e, n) {
                    var r = function(t, e) {
                        for (; !{}.hasOwnProperty.call(t, e) && null !== (t = m(t)););
                        return t
                    }(t, e);
                    if (r) {
                        var i = Object.getOwnPropertyDescriptor(r, e);
                        return i.get ? i.get.call(arguments.length < 3 ? t : n) : i.value
                    }
                }, y.apply(null, arguments)
            }

            function m(t) {
                return m = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, m(t)
            }

            function b(t, e) {
                return b = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, b(t, e)
            }
            var _ = function(t) {
                function e(t, n) {
                    var r;
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), r = v(this, e, [t, n]);
                    var i = (0, s.getCaptionViewerPreferences)();
                    r.video = t, r.options = f(f({}, n), i), r.captions = null;
                    var o = r.options.language ? {
                        language: r.options.language
                    } : {};
                    return r.fetched = (0, a.fetchCaptions)(t, o).then((function(t) {
                        r.captions = t.captions
                    })), r.isEnabled = !1 !== n.on, r.unbinds = [], r.unbinds.push(r.video.on("plugininitialized", (function(t) {
                        "captions" === t && (r.isEnabled ? (r.enable(), r.options.onByDefault ? r.turnOn() : !1 !== r.options.autoEnableForSilentAutoPlay && ("playing" === r.video.state() && r.video.inSilentPlaybackMode() && r.turnOn(), r.video.on("play", (function() {
                            return (r.video.inSilentPlaybackMode() || r.options.onByViewerPreferences) && r.turnOn(), r.video.unbind
                        })), r.video.on("silentplaybackmodechange", (function(t) {
                            return t && r.turnOn(), r.video.unbind
                        })))) : r.disable())
                    }))), r
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
                    }), e && b(t, e)
                }(e, t), n = e, o = [{
                    key: "customizePreview",
                    value: function(t) {
                        var e = this;
                        if (t.anyChanged(["plugin[captions]", "ephemeral[captions]"])) return new Promise((function(n) {
                            var i = t.currentValue("plugin[captions]") || {
                                on: !1
                            };
                            t.changed("ephemeral[captions][captionsArray]") && e.clearCache(), e.allMountedAndFetched().then((function() {
                                e.video.requestControls("customizePreview-captions", 4e3);
                                var t = (0, r.getDeep)(e.video, "controls.captionsButton.dialog");
                                null == t || t.open(), setTimeout((function() {
                                    var t = (0, r.getDeep)(e.video, "controls.captionsButton.dialog");
                                    null == t || t.close()
                                }), 4e3), e.captions.length ? i.onByDefault ? e.turnOn() : e.turnOff() : (e.insertCaptions([{
                                    start: 0,
                                    end: 5,
                                    text: ["These captions are only an example."]
                                }, {
                                    start: 5,
                                    end: 10,
                                    text: ["When you get real captions,", "they'll be automatically enabled."]
                                }, {
                                    start: 10,
                                    end: 15,
                                    text: ["Go ahead: upload an SRT or VTT file,", "or order a transcript!"]
                                }]), e.turnOn()), n()
                            }))
                        }))
                    }
                }, {
                    key: "captionsOptionsChanged",
                    value: function(t) {
                        return t.some((function(t) {
                            return 0 === t.indexOf("plugin[captions-v1]") || 0 === t.indexOf("ephemeral[captions]")
                        }))
                    }
                }, {
                    key: "captionsArrayChanged",
                    value: function(t) {
                        return t.some((function(t) {
                            return 0 === t.indexOf("ephemeral[captions][captionsArray]")
                        }))
                    }
                }, {
                    key: "enable",
                    value: function() {
                        this.video.setControlEnabled("captions", !0), this.video.setControlEnabled("captionsButton", !0), this.video.addPlugin("captions-v1", {
                            legacy: !0
                        })
                    }
                }, {
                    key: "disable",
                    value: function() {
                        this.video.setControlEnabled("captions", !1), this.video.setControlEnabled("captionsButton", !1), this.video.removePlugin("captions-v1")
                    }
                }, {
                    key: "allMountedAndFetched",
                    value: function() {
                        var t = [this.video.whenControlMounted("captionsButton"), this.video.whenControlMounted("captions")];
                        return Promise.all(t).then((function(t) {
                            var e = c(t, 2),
                                n = e[0],
                                r = e[1];
                            return Promise.all([n.fetchCaptions(), r.fetchCaptions()])
                        }))
                    }
                }, {
                    key: "turnOn",
                    value: function() {
                        this.video.captionsEnabled(!0)
                    }
                }, {
                    key: "remove",
                    value: function() {
                        var t, n, r, o, a;
                        this.unbinds.forEach((function(t) {
                            "function" == typeof t ? t() : i.wlog.warn("trying to unbind a non-function", t)
                        })), this.disable(), delete this.video.plugin.captions, delete this.video.plugin["captions-v1"], (t = e, n = "remove", r = this, a = y(m(1 & (o = 3) ? t.prototype : t), n, r), 2 & o && "function" == typeof a ? function(t) {
                            return a.apply(r, t)
                        } : a)([])
                    }
                }, {
                    key: "turnOff",
                    value: function() {
                        this.video.captionsEnabled(!1)
                    }
                }, {
                    key: "show",
                    value: function() {
                        this.video.setControlEnabled("captions", !0)
                    }
                }, {
                    key: "hide",
                    value: function() {
                        this.video.setControlEnabled("captions", !1)
                    }
                }, {
                    key: "setSubtitlesScale",
                    value: function(t) {
                        var e = this;
                        this.video.whenControlMounted("captions").then((function() {
                            e.video.controls.captions.setUserScale(t)
                        }))
                    }
                }, {
                    key: "getSubtitlesScale",
                    value: function() {
                        return this.video.controls.captions ? this.video.controls.captions.getUserScale() : 1
                    }
                }, {
                    key: "saveOriginalHash",
                    value: function(t) {
                        if (this.captions && (this.originalHashByLanguage || (this.originalHashByLanguage = {}), !this.originalHashByLanguage[t])) {
                            var e = this.captions.find((function(e) {
                                return e.language === t
                            }));
                            e && (this.originalHashByLanguage[t] = e.hash)
                        }
                    }
                }, {
                    key: "restoreOriginalHash",
                    value: function(t) {
                        var e;
                        if (this.captions) {
                            if (this.originalHashByLanguage || (this.originalHashByLanguage = {}), this.originalHashByLanguage[t]) {
                                var n = this.captions.find((function(e) {
                                    return e.language === t
                                }));
                                n && (n.hash = this.originalHashByLanguage[t]), delete this.originalHashByLanguage[t]
                            }
                            null === (e = this.video.controls.captions) || void 0 === e || e.setActiveLineForTime(this.video.time())
                        }
                    }
                }, {
                    key: "restoreOriginalCaptions",
                    value: function() {
                        var t = this;
                        Object.keys(this.originalHashByLanguage || {}).forEach((function(e) {
                            t.restoreOriginalHash(e)
                        }))
                    }
                }, {
                    key: "setCaptionsHash",
                    value: function(t, e) {
                        var n;
                        this.captions && (this.captions.forEach((function(n) {
                            n.language === t && (n.hash = e)
                        })), null === (n = this.video.controls.captions) || void 0 === n || n.setActiveLineForTime(this.video.time()))
                    }
                }, {
                    key: "refreshDataFromServer",
                    value: function() {
                        var t = this;
                        return new Promise((function(e) {
                            if (t.clearCache(), t.video.isControlEnabled("captions") || t.video.isControlEnabled("captionsButton")) {
                                t.video.setControlEnabled("captions", !1), t.video.setControlEnabled("captionsButton", !1);
                                var n = t.video.on("controldisabled", (function(r) {
                                    "captions" !== r && "captionsButton" !== r || (n(), t.video.setControlEnabled("captions", !0), t.video.setControlEnabled("captionsButton", !0), t.video.whenControlMounted("captions").then((function(n) {
                                        n.setActiveLineForTime(t.video.time()), e()
                                    })))
                                }))
                            }
                        }))
                    }
                }, {
                    key: "insertCaptions",
                    value: function(t) {
                        var e = {
                                english_name: "English",
                                hash: {
                                    lines: t
                                },
                                language: "_preview_",
                                native_name: "English",
                                right_to_left: !1
                            },
                            n = {
                                captions: [e],
                                preferred_languages: []
                            };
                        this.video.controls.captions.captionsResp = n, this.video.controls.captionsButton.captionsResp = n, this.video.controls.transcript.captionsResp = n, this.captions = [e], a.captionsPromises[this.video.hashedId()] = Promise.resolve(n)
                    }
                }, {
                    key: "clearCache",
                    value: function() {
                        var t = this;
                        this.captions = null, delete a.captionsPromises[this.video.hashedId()], this.fetched = (0, a.fetchCaptions)(this.video, this.options).then((function(e) {
                            t.captions = e.captions
                        }))
                    }
                }, {
                    key: "setLanguage",
                    value: function(t) {
                        this.video.captionsLanguage(t)
                    }
                }, {
                    key: "turnOnByDefaultForAllMediaInCarousel",
                    value: function() {
                        this.options.isForCarousel = !0, this.options.onByDefault = !0, this.turnOn()
                    }
                }, {
                    key: "turnOffByDefaultForAllMediaInCarousel",
                    value: function() {
                        this.options.isForCarousel = !0, this.options.onByDefault = !1, this.turnOff()
                    }
                }], o && h(n.prototype, o), u && h(n, u), Object.defineProperty(n, "prototype", {
                    writable: !1
                }), n;
                var n, o, u
            }(o.Wistia.Plugin.Base);
            o.Wistia.plugin("captions", (function(t, e) {
                if (!t.isLiveMedia()) return new _(t, e)
            })), o.Wistia.plugin("captions-v1", (function(t, e) {
                return t.isLiveMedia() ? {} : {
                    turnOn: function() {
                        t.plugin.captions.turnOn()
                    },
                    turnOff: function() {
                        t.plugin.captions.turnOff()
                    }
                }
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
__webpack_require__(463), __webpack_require__(488), __webpack_require__(490), __webpack_require__(496);
//# debugId=fef11541-62fe-4e17-80e7-c21dc9e7ec4a
//# sourceMappingURL=captions.js.map