"use strict";
(globalThis.webpackChunkv2 = globalThis.webpackChunkv2 || []).push([
    [5524, 3824], {
        76128: (t, n, e) => {
            e.r(n), e.d(n, {
                EVENTS: () => c,
                logEvent: () => i,
                logMeta: () => d,
                logRender: () => s
            });
            var r = e(2412),
                a = e(76177),
                o = e(55257);
            const c = a.F,
                i = o.Kz,
                d = o.ZQ;

            function s(t, n, e, i) {
                if (!t) return {};
                const d = {
                    name: t,
                    detail: n,
                    class: i,
                    parent: (0, r.fw)(a.$),
                    events: [],
                    eventTypes: null == e ? void 0 : e.split(",")
                };
                return (0, r.v)(a.$, d), (0, r.H3)((() => ((0, o.j8)(d, c.MOUNT), () => {
                    (0, o.j8)(d, c.DESTROY)
                }))), {
                    logClick: u(c.CLICK, d),
                    logChange: u(c.CHANGE, d),
                    logValidate: u(c.VALIDATE, d),
                    logSubmit: u(c.SUBMIT, d),
                    logEvent: u(c.CUSTOM, d),
                    logError: u(c.ERROR, d)
                }
            }

            function u(t, n) {
                const e = {
                    name: n.name,
                    class: n.class,
                    parent: n.parent,
                    eventTypes: n.eventTypes,
                    trackDetail: n.detail
                };
                return function(n) {
                    e.detail = n, (0, o.j8)(e, t)
                }
            }
        },
        96731: (t, n, e) => {
            e.d(n, {
                $w: () => d,
                HY: () => u,
                du: () => s,
                et: () => c,
                qh: () => i
            });
            var r = e(57924),
                a = e(76884),
                o = e(5664);
            const c = [],
                i = (0, r.LO)(c),
                d = t => n => {
                    var e, d;
                    null === (e = document.activeElement) || void 0 === e || null === (d = e.blur) || void 0 === d || d.call(e);
                    const [u, l] = (0, o.Wq)(), m = (0, a.mv)(n.props || {}), [f, p] = (0, r.MT)(), h = { ...n,
                        index: c.length,
                        id: (0, r.NA)(),
                        container: t,
                        props: m,
                        promise: u,
                        getState: f,
                        setState: p,
                        pop: () => {
                            const t = c.indexOf(h);
                            t >= 0 && s(t)
                        },
                        popAfter: () => {
                            const t = c.indexOf(h);
                            t >= 0 && s(t + 1)
                        },
                        close: () => {
                            const t = c.indexOf(h);
                            t >= 0 && function(t) {
                                if (t >= 0 && t < c.length) {
                                    var n;
                                    null === (n = c.splice(t, 1)[0]) || void 0 === n || n.resolve(), i.discharge()
                                }
                            }(t)
                        },
                        resolve: t => {
                            l(t), h.pop()
                        }
                    };
                    return m.stackElement = h, c.push(h), i.discharge(), h
                };

            function s(t) {
                c.splice(t).forEach((t => t.resolve())), i.discharge()
            }

            function u() {
                s(-1)
            }
        },
        40352: (t, n, e) => {
            function r(t) {
                return t[t.length - 1]
            }
            e.d(n, {
                Z: () => r
            })
        },
        94102: (t, n, e) => {
            let r, a;

            function o() {
                return r
            }

            function c(t) {
                r = t
            }

            function i(t) {
                "recommended" === t && (t = "p13n"), a = t
            }
            e.d(n, {
                I2: () => c,
                LO: () => r,
                Tc: () => o,
                zc: () => i,
                zf: () => a
            })
        },
        2104: (t, n, e) => {
            e.d(n, {
                Ak: () => B,
                As: () => b,
                C6: () => a,
                Dd: () => N,
                EY: () => T,
                Ec: () => j,
                GJ: () => _,
                MX: () => C,
                Nz: () => k,
                T_: () => E,
                U: () => f,
                YT: () => m,
                Yx: () => v,
                c6: () => u,
                cn: () => p,
                fz: () => g,
                hP: () => y,
                jG: () => l,
                nO: () => o,
                nZ: () => s,
                t1: () => S,
                wL: () => h,
                wY: () => q
            });
            var r = e(38033);
            const a = () => (0, r.Bn)("methods.data.details.app", {}),
                o = () => (0, r.Bn)("methods.data.details.card.enabled"),
                c = () => (0, r.Bn)("methods.data.details.card.card_type.credit"),
                i = () => (0, r.Bn)("methods.data.details.card.card_type.debit"),
                d = () => (0, r.Bn)("methods.data.details.card.card_type.prepaid"),
                s = () => (0, r.Bn)("methods.data.details.card.card_networks", {}),
                u = () => (0, r.Bn)("methods.data.details.addon_methods.affordability.cardless_emi"),
                l = () => (0, r.Bn)("methods.data.details.addon_methods.affordability.paylater"),
                m = () => (0, r.Bn)("methods.data.details.enabled.cod"),
                f = () => (0, r.Bn)("methods.data.details.emi.debit_emi_providers"),
                p = () => (0, r.Bn)("methods.data.details.emi.enabled"),
                h = () => (0, r.Bn)("methods.data.details.emi.emi_options"),
                _ = () => (0, r.Bn)("methods.data.details.i18n.fpx"),
                v = () => (0, r.Bn)("methods.data.details.i18n.duitnow_pay"),
                y = () => (0, r.Bn)("methods.data.details.enabled.nach"),
                k = () => (0, r.Bn)("methods.data.details.enabled.offline"),
                B = () => (0, r.Bn)("methods.data.details.addon_methods.intl_bank_transfer"),
                g = () => (0, r.Bn)("methods.data.details.enabled.bank_transfer"),
                b = () => (0, r.Bn)("methods.data.details.recurring"),
                S = () => (0, r.Bn)("methods.data.details.addon_methods.sodexo"),
                E = () => (0, r.Bn)("methods.data.details.upi.enabled"),
                T = () => (0, r.Bn)("methods.data.details.upi.upi_config"),
                w = () => (0, r.Bn)("methods.data.details.upi.upi_intent"),
                C = () => (0, r.Bn)("methods.data.details.wallet"),
                q = () => (0, r.Bn)("methods.data.details.i18n.paynow");

            function N() {
                const t = E(),
                    n = (0, r.Bn)("methods.data.details.upi.upi_type") || {
                        collect: Number(t),
                        intent: Number(t)
                    };
                return {
                    collect: t && (null == n ? void 0 : n.collect),
                    intent: t && (null == n ? void 0 : n.intent) && Boolean(w())
                }
            }

            function j() {
                return {
                    credit: Boolean(c()),
                    debit: Boolean(i()),
                    prepaid: Boolean(d())
                }
            }
        },
        61788: (t, n, e) => {
            e.d(n, {
                C6: () => i.C6,
                k3: () => F,
                nZ: () => i.nZ,
                Ec: () => i.Ec,
                c6: () => i.c6,
                f1: () => A,
                D5: () => W,
                C4: () => s,
                N0: () => Z,
                U: () => i.U,
                O9: () => f,
                xL: () => R,
                $J: () => E,
                wL: () => i.wL,
                C2: () => a.C2,
                mY: () => H,
                BY: () => S,
                Ak: () => i.Ak,
                d5: () => k,
                KV: () => tt,
                Q5: () => O,
                qz: () => X,
                Tu: () => w,
                L9: () => V,
                $K: () => x,
                K6: () => C,
                mr: () => Q,
                lf: () => b,
                Rg: () => U,
                uR: () => _,
                m_: () => I,
                co: () => v,
                qo: () => y,
                jG: () => i.jG,
                aq: () => T,
                hn: () => it,
                As: () => i.As,
                ni: () => m,
                vt: () => p,
                Qi: () => h,
                pI: () => B,
                bs: () => g,
                HG: () => K,
                T_: () => i.T_,
                EY: () => i.EY,
                Dd: () => i.Dd,
                MX: () => i.MX,
                U6: () => a.U6,
                iC: () => et,
                cm: () => at,
                AL: () => N,
                Ki: () => d,
                K7: () => q,
                Fg: () => nt,
                MP: () => u,
                jN: () => a.jN,
                S9: () => ct,
                Tj: () => J,
                Ig: () => j,
                ZE: () => P,
                VX: () => D,
                $: () => z,
                n_: () => L,
                AN: () => l,
                DM: () => G,
                J0: () => dt,
                sA: () => M,
                q9: () => rt,
                zb: () => ot,
                ht: () => Y,
                Mx: () => $
            });
            var r = e(38033),
                a = e(32867),
                o = e(76884);
            const c = {
                blocks: {
                    hdfcvas: {
                        name: "Pay using HDFC Bank",
                        instruments: [{
                            method: "netbanking",
                            banks: ["HDFC"]
                        }, {
                            method: "netbanking",
                            banks: ["HDFC_C"]
                        }, {
                            method: "card",
                            issuers: ["HDFC"],
                            types: ["credit"]
                        }, {
                            method: "card",
                            issuers: ["HDFC"],
                            types: ["debit"]
                        }, {
                            method: "wallet",
                            wallets: ["payzapp"]
                        }, {
                            method: "emi",
                            issuers: ["HDFC"]
                        }]
                    }
                },
                sequence: ["block.hdfcvas"]
            };
            var i = e(2104);

            function d() {
                return (0, r.Bn)("merchant.data.properties.fee_bearer", !1)
            }

            function s() {
                return (0, r.Bn)("order.data.convenience_fee_config", null)
            }

            function u() {
                return Boolean(s())
            }

            function l() {
                return (0, r.Bn)("order.data.partial_payment") || !1
            }

            function m() {
                return (0, r.Rl)("config.restrictions", null) || (0, r.Bn)("methods.data.config.restrictions", null) || (0, r.Bn)("checkout_configuration.data.checkout_config.restrictions", {}) || {}
            }

            function f() {
                let t = j() ? c : (0, r.Rl)("config.display", null) || (0, r.Bn)("methods.data.config.display", null) || (0, r.Bn)("checkout_configuration.data.checkout_config.display", {}) || {};
                try {
                    const n = m();
                    return (0, o.Qr)(t) && !(0, o.Qr)(n) && (t = {
                        blocks: {
                            restrict: {
                                instruments: n.allow
                            }
                        },
                        sequence: ["block.restrict"],
                        preferences: {
                            show_default_blocks: !1
                        }
                    }), t
                } catch (n) {
                    return t || {}
                }
            }

            function p() {
                return (0, r.Bn)("customer.data.contact") || ""
            }

            function h() {
                return (0, r.Bn)("customer.data.email") || ""
            }

            function _() {
                return (0, r.Bn)("merchant.data.properties.optional") || []
            }

            function v() {
                return (0, r.Bn)("order.data")
            }

            function y() {
                return (0, r.Bn)("order.data.currency")
            }

            function k() {
                return (0, r.Bn)("invoice.data")
            }

            function B() {
                return (0, r.Bn)("subscription.data")
            }

            function g() {
                return (0, r.Bn)("subscription.data.currency")
            }

            function b() {
                var t;
                const n = null === (t = v()) || void 0 === t ? void 0 : t.bank,
                    e = (0, r.Bn)("methods.data.details.netbanking", {});
                return n ? e[n] ? {
                    [n]: e[n]
                } : {} : e
            }

            function S() {
                var t;
                const n = null === (t = v()) || void 0 === t ? void 0 : t.bank,
                    e = (0, r.Bn)("methods.data.details.i18n.fpx", {});
                return n ? e[n] ? {
                    [n]: e[n]
                } : {} : e
            }

            function E() {
                var t;
                const n = null === (t = v()) || void 0 === t ? void 0 : t.bank,
                    e = (0, r.Bn)("methods.data.details.i18n.duitnow_pay", {});
                return n ? e[n] ? {
                    [n]: e[n]
                } : {} : e
            }

            function T() {
                return (0, r.Bn)("order.data.amount_due") ? ? (0, r.Bn)("order.data.amount") ? ? (0, r.Bn)("invoice.data.amount") ? ? (0, r.Bn)("subscription.data.amount")
            }

            function w() {
                return (0, r.Bn)("merchant.data.metadata.currency") || "INR"
            }

            function C() {
                return (0, r.Bn)("merchant.data.analytics.order_count")
            }

            function q() {
                return (0, a.U6)("dcc")
            }

            function N() {
                return (0, a.jN)("checkout_v2_vas") || (0, a.U6)("show_checkout_v2") && !(0, a.tS)("checkout_v2_vas") || !1
            }

            function j() {
                return (0, a.U6)("hdfc_checkout_2")
            }

            function z() {
                return (0, a.U6)("raas")
            }

            function M() {
                return (0, r.Bn)("merchant.data.properties.rtb")
            }

            function O() {
                return (0, r.Bn)("merchant.data.metadata.brand_name", "")
            }

            function x() {
                return (0, r.Bn)("merchant.data.metadata.name", "")
            }

            function I() {
                return (0, r.Bn)("merchant.data.options")
            }

            function A() {
                return (0, r.Bn)("merchant.data.metadata.checkout_logo_url")
            }

            function L() {
                return (0, r.Bn)("merchant.data.properties.razorpay_org")
            }

            function U() {
                return l() ? [] : (0, r.Bn)("offers.data.items", [])
            }

            function H() {
                return (0, r.Bn)("offers.data.force_offer")
            }

            function R() {
                return (0, r.Bn)("downtime.data.items", [])
            }

            function Y() {
                return (0, a.U6)("redirect_to_earlysalary")
            }

            function D() {
                return "live" === (0, r.Bn)("merchant.data.options.mode")
            }

            function $() {
                return "test" === (0, r.Bn)("merchant.data.options.mode")
            }

            function K() {
                return (0, r.Bn)("truecaller.data.request_id")
            }

            function J() {
                return (0, r.Bn)("customer.data.global", !0)
            }

            function V() {
                return (0, r.Bn)("merchant.data.metadata.key") || (0, r.Rl)("key")
            }

            function Z() {
                return (0, r.Bn)("prefill_data") || {}
            }

            function F() {
                const t = (0, r.Bn)("buyer_protection"),
                    n = (0, r.Bn)("headers.rtb_fingerprint_id");
                return t && n ? { ...t,
                    rtb_fingerprint_id: n
                } : {}
            }

            function X() {
                return (0, r.Bn)("merchant.data.metadata.country") || "IN"
            }

            function P() {
                return (0, r.Bn)("merchant.data.properties.lending")
            }

            function Q() {
                return (0, r.Bn)("merchant.data.properties.merchant_policy", {})
            }

            function G() {
                return (0, r.Rl)("payout")
            }

            function W() {
                return (0, r.Bn)("checkout_signature", "")
            }
            const tt = (t, n) => (0, r.Bn)(`merchant.data.one_cc.configs.${t}`, n);

            function nt() {
                return q() && (0, a.U6)("show_custom_dcc_disclosures", !1)
            }

            function et() {
                return (0, a.U6)("hide_rzpbrand_on_checkout", !1) && nt()
            }

            function rt() {
                return (0, a.jN)("razorpay_club_checkout")
            }

            function at() {
                return (0, a.jN)("bank_transfer_customer_details_ramp")
            }

            function ot() {
                return !1
            }

            function ct() {
                return (0, a.jN)("checkout_festivities") && (0, r.Rl)("festivities.enabled", !0) && (0, r.Bn)("checkout_configuration.data.checkout_style_config.festivities_enabled", !0)
            }

            function it() {
                return (0, r.Bn)("prefill_data.contact")
            }

            function dt() {
                return (0, a.jN)("razorpay_club_v2")
            }
        },
        55621: (t, n, e) => {
            e.d(n, {
                $8: () => h,
                HY: () => a.HY,
                Nb: () => m,
                _Q: () => p,
                k9: () => _,
                lV: () => l,
                pw: () => v,
                rM: () => f,
                u4: () => u
            });
            var r = e(57924),
                a = e(96731),
                o = e(5664),
                c = e(15304),
                i = e(58771),
                d = e(94102);
            const s = (0, r.NA)(),
                u = (0, r.NA)(),
                l = (0, r.nK)(a.qh, (t => t.filter((t => t.container === s)))),
                m = (0, r.nK)(a.qh, (t => t.filter((t => t.container === u)))),
                f = (0, r.nK)(m, (t => t.length)),
                p = (0, a.$w)(s),
                h = (0, a.$w)(u);
            async function _(t) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if ((0, o.tI)(t)) try {
                    t = await t
                } catch (t) {
                    (0, i.handleChunkFailureError)(t, "pushScreen")
                }
                return t && t.component ? (function(t) {
                    try {
                        t.magicInitScreen && (0, d.I2)("magic"), t.quickbuyInitScreen && (0, d.I2)("quickbuy")
                    } catch (t) {}
                }(t), p({
                    name: t.name,
                    component: t.component,
                    breadcrumbHighlight: t.breadcrumbHighlight,
                    props: n
                })) : {
                    promise: Promise.resolve()
                }
            }
            async function v(t) {
                var n, e;
                if ((0, o.tI)(t) && (t = await t), t) return _(t).catch((() => {})),
                    function(t) {
                        !(0, c.K)() && t.magicInitScreen && (0, c.J)()
                    }(t), v(null === (n = t) || void 0 === n || null === (e = n.next) || void 0 === e ? void 0 : e.call(n));
                performance.mark("stack-population-end")
            }
        },
        83425: (t, n, e) => {
            e.d(n, {
                KS: () => r,
                TS: () => a
            });
            const r = {
                    "v2-entry.js": "v2-entry.js",
                    "v2-entry.modern.js": "v2-entry.modern.js",
                    "v1-preferences": "v1/preferences?",
                    "v2-preferences": "v2/preferences?",
                    "v2-entry-app": "v2-entry-app-",
                    "v2-entry-loader": "v2-entry-loader-",
                    "keyless-auth-api": "v1/checkout/keyless_auth?"
                },
                a = {
                    "v2-offers": "v2-entry-offers",
                    "validate-offers": "validate/checkout/offers"
                }
        },
        70685: (t, n, e) => {
            e.d(n, {
                qi: () => s,
                Ok: () => d,
                tJ: () => c,
                $l: () => i,
                Eo: () => u
            });
            var r = e(76884),
                a = e(83425),
                o = e(77629);

            function c(t) {
                return Object.keys(t).map((n => {
                    const e = function(t) {
                        try {
                            const n = performance.getEntriesByType("resource").find((n => n.name.includes(t)));
                            return n ? {
                                startTime: n.startTime,
                                duration: n.duration,
                                responseEnd: n.responseEnd,
                                transferSize: n.transferSize,
                                encodedBodySize: n.encodedBodySize,
                                decodedBodySize: n.decodedBodySize,
                                connectStart: n.connectStart,
                                connectEnd: n.connectEnd,
                                domainLookupStart: n.domainLookupStart,
                                domainLookupEnd: n.domainLookupEnd,
                                redirectStart: n.redirectStart,
                                redirectEnd: n.redirectEnd,
                                secureConnectionStart: n.secureConnectionStart,
                                nextHopProtocol: n.nextHopProtocol,
                                ttfb: n.responseStart - n.requestStart,
                                tcp_handshake: n.connectEnd - n.connectStart,
                                dns_lookup: n.domainLookupEnd - n.domainLookupStart,
                                redirection_time: n.redirectEnd - n.redirectStart,
                                request_time: n.responseStart - n.requestStart,
                                tls_negotiation: n.requestStart - n.secureConnectionStart,
                                fetch_time: n.responseEnd - n.fetchStart,
                                stalled_time: n.requestStart - n.connectStart,
                                queue_time: n.connectStart - n.startTime,
                                content_download_time: n.responseEnd - n.responseStart
                            } : {}
                        } catch (t) {
                            return {}
                        }
                    }(t[n]);
                    return !(0, r.Qr)(e) && {
                        [n]: e
                    }
                })).filter((t => t)).reduce(((t, n) => t = { ...t,
                    ...n
                }), {})
            }

            function i() {
                return c(a.KS)
            }

            function d() {
                const t = (0, o.gi)(),
                    n = (0, o.bO)();
                return t && n ? {
                    tti: n - t,
                    open_timestamp: t,
                    tti_timestamp: n
                } : null
            }

            function s() {
                return performance.getEntries().filter((t => "mark" === t.entryType)).reduce(((t, n) => (t[n.name] = n.startTime, t)), {})
            }

            function u() {
                try {
                    return performance.getEntriesByType("resource").filter((t => ["script", "link", "css", "xmlhttprequest"].includes(t.initiatorType) && t.name.indexOf("/payment/status") < 0 && t.name.indexOf("w.clarity.ms/collect") < 0 && t.name.indexOf("lumberjack.razorpay.com") < 0)).reduce(((t, n) => {
                        let e = n.name;
                        return e = "xmlhttprequest" !== n.initiatorType ? e.split("/").pop() : e.split("?")[0], t.push({
                            n: e,
                            s: Math.round(n.startTime),
                            d: Math.round(n.duration),
                            i: n.initiatorType
                        }), t
                    }), [])
                } catch (t) {
                    return []
                }
            }
        },
        15304: (t, n, e) => {
            e.d(n, {
                J: () => s,
                K: () => d
            });
            var r = e(70685),
                a = e(76128),
                o = e(76884),
                c = e(77629),
                i = e(53824);

            function d() {
                try {
                    return [...performance.getEntries()].filter((t => "mark" === t.entryType && "checkout-interactive" === t.name)).length
                } catch (t) {
                    return !0
                }
            }

            function s() {
                d() || (performance.mark("checkout-interactive"), (0, c.yx)(Date.now()), setTimeout(u, 1e4))
            }

            function u() {
                const t = (0, r.Ok)();
                (0, o.s$)(t) && ((0, a.logEvent)("checkout_tti", { ...t,
                    timeline: (0, r.qi)()
                }), (0, i.trackMetrics)("tti", null == t ? void 0 : t.tti), (0, a.logEvent)("checkout_assets_loading", {
                    timeline: (0, r.Eo)()
                }))
            }
        },
        20146: (t, n, e) => {
            e.d(n, {
                Vm: () => m,
                b5: () => p,
                u_: () => f
            });
            var r = e(69693),
                a = e(17885),
                o = e(76884),
                c = e(83415),
                i = e(81215),
                d = e(56514),
                s = e(30204);
            const u = function(t) {
                    if (!t) return "no-src";
                    try {
                        const n = t.getAttribute("src") || "no-src";
                        return "no-src" === n ? n : n.split("/").slice(-1)[0]
                    } catch (t) {
                        return "error"
                    }
                }(document.currentScript),
                l = () => ({
                    library: (0, c.av)(),
                    library_src: u,
                    current_script_src: u,
                    platform: (0, c.Xf)(),
                    env: "",
                    is_magic_script: (0, c.co)()
                });

            function m() {
                const t = {
                        checkout_id: (0, a.sq)(),
                        "device.id": (0, r.Zw)() ? ? ""
                    },
                    n = l();
                ["device", "env", "integration", "library", "library_src", "current_script_src", "is_magic_script", "os_version", "os", "platform_version", "platform"].forEach((e => {
                    (0, o.RI)(n, e) && (t[e] = n[e])
                })), t.library = (0, c.av)();
                const e = (0, d.qE)(),
                    i = (0, d.dP)();
                return e && (t.referer = e), i && (t.package_name = i), { ...t,
                    ...(0, c.sw)() || {}
                }
            }

            function f() {
                return "sg" === (0, c.ur)() ? "https://lumberjack-metrics-sg.razorpay.com/v1/frontend-metrics" : "https://lumberjack-metrics.razorpay.com/v1/frontend-metrics"
            }

            function p() {
                return (0, s.M)() ? (0, c.av)() : (0, i.X)() ? "magic" : "checkout"
            }
        },
        87664: (t, n, e) => {
            e.d(n, {
                X: () => o
            });
            var r = e(83415),
                a = e(61867);

            function o() {
                let t = "";
                const n = (0, r.kk)(),
                    e = (0, a.Ij)();
                return t = a.vp && !n ? `${e}-webview` : `${e}-${n?"sdk":"web"}`, t
            }
        },
        53824: (t, n, e) => {
            e.r(n), e.d(n, {
                trackMetrics: () => l
            });
            var r = e(61867),
                a = e(83415),
                o = e(76884),
                c = e(14488),
                i = e(20146),
                d = e(87664),
                s = e(61788);

            function u() {
                try {
                    if ("connection" in navigator) {
                        const {
                            effectiveType: t
                        } = navigator.connection;
                        return t
                    }
                } catch (t) {
                    return ""
                }
            }

            function l(t, n, e) {
                if (!a.kL || !(0, s.VX)() || r.Q0) return !1;
                const l = {
                        metrics: [{
                            name: "metrics.track",
                            labels: [{
                                app: (0, i.b5)(),
                                route: e,
                                env: (0, a.dC)(),
                                platform: (0, d.X)(),
                                metric: t,
                                value: n,
                                connectionType: u()
                            }]
                        }]
                    },
                    m = {
                        url: (0, i.u_)(),
                        data: {
                            key: "ZmY5N2M0YzVkN2JiYzkyMWM1ZmVmYWJk",
                            data: encodeURIComponent(btoa(unescape(encodeURIComponent(JSON.stringify(l)))))
                        }
                    };
                try {
                    return (0, o.m2)(navigator, "sendBeacon") ? navigator.sendBeacon(m.url, JSON.stringify(m.data)) : (0, c.ZP)({ ...m,
                        method: "post"
                    }), !0
                } catch (t) {}
            }
        }
    }
]);