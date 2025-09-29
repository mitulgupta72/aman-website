"use strict";
(globalThis.webpackChunkv2 = globalThis.webpackChunkv2 || []).push([
    [7369], {
        21818: (x, n, d) => {
            d.d(n, {
                Tf: () => y,
                mq: () => c,
                uf: () => l,
                jK: () => u
            });
            var e = d(77242);
            class o {
                constructor() {
                    this.state = {
                        locale: "",
                        direction: "",
                        country: ""
                    }
                }
                static getInstance() {
                    return o.instance || (o.instance = new o), o.instance
                }
                static resetInstance() {
                    o.instance = void 0
                }
                getState() {
                    return Object.assign({}, this.state)
                }
                setState(x) {
                    this.state = Object.assign(Object.assign({}, this.state), x)
                }
                resetState() {
                    this.state = {
                        locale: "",
                        direction: "",
                        country: ""
                    }
                }
            }
            var r = o.getInstance();
            const i = (x = {}) => {
                const n = ((x = {}) => {
                        let n = (null == x ? void 0 : x.locale) || r.getState().locale;
                        if (n) return n;
                        if ("undefined" == typeof navigator) return "en-IN";
                        if (window.Intl && "object" == typeof window.Intl && (window.navigator.languages || window.navigator.language)) return (window.navigator.languages || [window.navigator.language])[0];
                        return "en-IN"
                    })(x),
                    d = (null == x ? void 0 : x.intlOptions) ? Object.assign({}, x.intlOptions) : {};
                if (((null == x ? void 0 : x.currency) || d.currency) && (d.style = "currency", d.currency = x.currency || d.currency), !n) throw new Error(`The provided locale value is invalid. The received value was: ${n}. Please ensure you pass a correct locale string for proper formatting.`);
                return new Intl.NumberFormat(n || void 0, d)
            };
            var a = {
                AFN: {
                    name: "Afghani",
                    minor_unit: "2",
                    symbol: "؋"
                },
                EUR: {
                    name: "Euro",
                    minor_unit: "2",
                    symbol: "€"
                },
                ALL: {
                    name: "Lek",
                    minor_unit: "2",
                    symbol: "L"
                },
                DZD: {
                    name: "Algerian Dinar",
                    minor_unit: "2",
                    symbol: "د.ج"
                },
                USD: {
                    name: "US Dollar",
                    minor_unit: "2",
                    symbol: "$"
                },
                AOA: {
                    name: "Kwanza",
                    minor_unit: "2",
                    symbol: "Kz"
                },
                XCD: {
                    name: "East Caribbean Dollar",
                    minor_unit: "2",
                    symbol: "EC$"
                },
                ARS: {
                    name: "Argentine Peso",
                    minor_unit: "2",
                    symbol: "ARS"
                },
                AMD: {
                    name: "Armenian Dram",
                    minor_unit: "2",
                    symbol: "֏"
                },
                AWG: {
                    name: "Aruban Florin",
                    minor_unit: "2",
                    symbol: "Aƒ"
                },
                AUD: {
                    name: "Australian Dollar",
                    minor_unit: "2",
                    symbol: "A$"
                },
                AZN: {
                    name: "Azerbaijan Manat",
                    minor_unit: "2",
                    symbol: "₼"
                },
                BSD: {
                    name: "Bahamian Dollar",
                    minor_unit: "2",
                    symbol: "BSD"
                },
                BHD: {
                    name: "Bahraini Dinar",
                    minor_unit: "3",
                    symbol: ".د.ب"
                },
                BDT: {
                    name: "Taka",
                    minor_unit: "2",
                    symbol: "৳"
                },
                BBD: {
                    name: "Barbados Dollar",
                    minor_unit: "2",
                    symbol: "Bds$"
                },
                BYN: {
                    name: "Belarusian Ruble",
                    minor_unit: "2",
                    symbol: "Rbl"
                },
                BZD: {
                    name: "Belize Dollar",
                    minor_unit: "2",
                    symbol: "BZ$"
                },
                XOF: {
                    name: "CFA Franc BCEAO",
                    minor_unit: "0",
                    symbol: "CFA"
                },
                BMD: {
                    name: "Bermudian Dollar",
                    minor_unit: "2",
                    symbol: "BD$"
                },
                INR: {
                    name: "Indian Rupee",
                    minor_unit: "2",
                    symbol: "₹"
                },
                BTN: {
                    name: "Ngultrum",
                    minor_unit: "2",
                    symbol: "Nu."
                },
                BOB: {
                    name: "Boliviano",
                    minor_unit: "2",
                    symbol: "Bs."
                },
                BOV: {
                    name: "Mvdol",
                    minor_unit: "2",
                    symbol: "Bs"
                },
                BAM: {
                    name: "Convertible Mark",
                    minor_unit: "2",
                    symbol: "KM"
                },
                BWP: {
                    name: "Pula",
                    minor_unit: "2",
                    symbol: "P"
                },
                NOK: {
                    name: "Norwegian Krone",
                    minor_unit: "2",
                    symbol: "kr"
                },
                BRL: {
                    name: "Brazilian Real",
                    minor_unit: "2",
                    symbol: "R$"
                },
                BND: {
                    name: "Brunei Dollar",
                    minor_unit: "2",
                    symbol: "B$"
                },
                BGN: {
                    name: "Bulgarian Lev",
                    minor_unit: "2",
                    symbol: "лв."
                },
                BIF: {
                    name: "Burundi Franc",
                    minor_unit: "0",
                    symbol: "FBu"
                },
                CVE: {
                    name: "Cabo Verde Escudo",
                    minor_unit: "2",
                    symbol: "CVE"
                },
                KHR: {
                    name: "Riel",
                    minor_unit: "2",
                    symbol: "៛"
                },
                XAF: {
                    name: "CFA Franc BEAC",
                    minor_unit: "0",
                    symbol: "FCFA"
                },
                CAD: {
                    name: "Canadian Dollar",
                    minor_unit: "2",
                    symbol: "CA$"
                },
                KYD: {
                    name: "Cayman Islands Dollar",
                    minor_unit: "2",
                    symbol: "CI$"
                },
                CLP: {
                    name: "Chilean Peso",
                    minor_unit: "0",
                    symbol: "CLP"
                },
                CLF: {
                    name: "Unidad de Fomento",
                    minor_unit: "4",
                    symbol: "UF"
                },
                CNY: {
                    name: "Yuan Renminbi",
                    minor_unit: "2",
                    symbol: "CN¥"
                },
                COP: {
                    name: "Colombian Peso",
                    minor_unit: "2",
                    symbol: "COL$"
                },
                COU: {
                    name: "Unidad de Valor Real",
                    minor_unit: "2",
                    symbol: "UVR"
                },
                KMF: {
                    name: "Comorian Franc",
                    minor_unit: "0",
                    symbol: "CF"
                },
                CDF: {
                    name: "Congolese Franc",
                    minor_unit: "2",
                    symbol: "FC"
                },
                NZD: {
                    name: "New Zealand Dollar",
                    minor_unit: "2",
                    symbol: "NZ$"
                },
                CRC: {
                    name: "Costa Rican Colon",
                    minor_unit: "2",
                    symbol: "₡"
                },
                HRK: {
                    name: "Kuna",
                    minor_unit: "2",
                    symbol: "kn"
                },
                CUP: {
                    name: "Cuban Peso",
                    minor_unit: "2",
                    symbol: "$MN"
                },
                CUC: {
                    name: "Peso Convertible",
                    minor_unit: "2",
                    symbol: "CUC$"
                },
                ANG: {
                    name: "Netherlands Antillean Guilder",
                    minor_unit: "2",
                    symbol: "ƒ"
                },
                CZK: {
                    name: "Czech Koruna",
                    minor_unit: "2",
                    symbol: "Kč"
                },
                DKK: {
                    name: "Danish Krone",
                    minor_unit: "2",
                    symbol: "kr"
                },
                DJF: {
                    name: "Djibouti Franc",
                    minor_unit: "0",
                    symbol: "Fdj"
                },
                DOP: {
                    name: "Dominican Peso",
                    minor_unit: "2",
                    symbol: "RD$"
                },
                EGP: {
                    name: "Egyptian Pound",
                    minor_unit: "2",
                    symbol: "E£"
                },
                SVC: {
                    name: "El Salvador Colon",
                    minor_unit: "2",
                    symbol: "₡"
                },
                ERN: {
                    name: "Nakfa",
                    minor_unit: "2",
                    symbol: "Nfk"
                },
                SZL: {
                    name: "Lilangeni",
                    minor_unit: "2",
                    symbol: "E"
                },
                ETB: {
                    name: "Ethiopian Birr",
                    minor_unit: "2",
                    symbol: "Br"
                },
                FKP: {
                    name: "Falkland Islands Pound",
                    minor_unit: "2",
                    symbol: "FK£"
                },
                FJD: {
                    name: "Fiji Dollar",
                    minor_unit: "2",
                    symbol: "FJ$"
                },
                XPF: {
                    name: "CFP Franc",
                    minor_unit: "0",
                    symbol: "F"
                },
                GMD: {
                    name: "Dalasi",
                    minor_unit: "2",
                    symbol: "D"
                },
                GEL: {
                    name: "Lari",
                    minor_unit: "2",
                    symbol: "₾"
                },
                GHS: {
                    name: "Ghana Cedi",
                    minor_unit: "2",
                    symbol: "GH₵"
                },
                GIP: {
                    name: "Gibraltar Pound",
                    minor_unit: "2",
                    symbol: "£"
                },
                GTQ: {
                    name: "Quetzal",
                    minor_unit: "2",
                    symbol: "Q"
                },
                GBP: {
                    name: "Pound Sterling",
                    minor_unit: "2",
                    symbol: "£"
                },
                GNF: {
                    name: "Guinean Franc",
                    minor_unit: "0",
                    symbol: "FG"
                },
                GYD: {
                    name: "Guyana Dollar",
                    minor_unit: "2",
                    symbol: "GY$"
                },
                HTG: {
                    name: "Gourde",
                    minor_unit: "2",
                    symbol: "G"
                },
                HNL: {
                    name: "Lempira",
                    minor_unit: "2",
                    symbol: "L"
                },
                HKD: {
                    name: "Hong Kong Dollar",
                    minor_unit: "2",
                    symbol: "HK$"
                },
                HUF: {
                    name: "Forint",
                    minor_unit: "2",
                    symbol: "Ft"
                },
                ISK: {
                    name: "Iceland Krona",
                    minor_unit: "0",
                    symbol: "kr"
                },
                IDR: {
                    name: "Rupiah",
                    minor_unit: "2",
                    symbol: "Rp"
                },
                IRR: {
                    name: "Iranian Rial",
                    minor_unit: "2",
                    symbol: "﷼"
                },
                IQD: {
                    name: "Iraqi Dinar",
                    minor_unit: "3",
                    symbol: "ع.د"
                },
                ILS: {
                    name: "New Israeli Sheqel",
                    minor_unit: "2",
                    symbol: "₪"
                },
                JMD: {
                    name: "Jamaican Dollar",
                    minor_unit: "2",
                    symbol: "J$"
                },
                JPY: {
                    name: "Yen",
                    minor_unit: "0",
                    symbol: "¥"
                },
                JOD: {
                    name: "Jordanian Dinar",
                    minor_unit: "3",
                    symbol: "JD"
                },
                KZT: {
                    name: "Tenge",
                    minor_unit: "2",
                    symbol: "₸"
                },
                KES: {
                    name: "Kenyan Shilling",
                    minor_unit: "2",
                    symbol: "KSh"
                },
                KPW: {
                    name: "North Korean Won",
                    minor_unit: "2",
                    symbol: "₩"
                },
                KRW: {
                    name: "Won",
                    minor_unit: "0",
                    symbol: "₩"
                },
                KWD: {
                    name: "Kuwaiti Dinar",
                    minor_unit: "3",
                    symbol: "د.ك"
                },
                KGS: {
                    name: "Som",
                    minor_unit: "2",
                    symbol: "сом"
                },
                LAK: {
                    name: "Kip",
                    minor_unit: "2",
                    symbol: "₭"
                },
                LBP: {
                    name: "Lebanese Pound",
                    minor_unit: "2",
                    symbol: "L£"
                },
                LSL: {
                    name: "Loti",
                    minor_unit: "2",
                    symbol: "M"
                },
                ZAR: {
                    name: "South African Rand",
                    minor_unit: "2",
                    symbol: "R"
                },
                LRD: {
                    name: "Liberian Dollar",
                    minor_unit: "2",
                    symbol: "L$"
                },
                LYD: {
                    name: "Libyan Dinar",
                    minor_unit: "3",
                    symbol: "LD"
                },
                CHF: {
                    name: "Swiss Franc",
                    minor_unit: "2",
                    symbol: "CHF"
                },
                MOP: {
                    name: "Pataca",
                    minor_unit: "2",
                    symbol: "MOP$"
                },
                MKD: {
                    name: "Denar",
                    minor_unit: "2",
                    symbol: "ден"
                },
                MGA: {
                    name: "Malagasy Ariary",
                    minor_unit: "2",
                    symbol: "Ar"
                },
                MWK: {
                    name: "Malawi Kwacha",
                    minor_unit: "2",
                    symbol: "MK"
                },
                MYR: {
                    name: "Malaysian Ringgit",
                    minor_unit: "2",
                    symbol: "RM"
                },
                MVR: {
                    name: "Rufiyaa",
                    minor_unit: "2",
                    symbol: "Rf"
                },
                MRU: {
                    name: "Ouguiya",
                    minor_unit: "2",
                    symbol: "UM"
                },
                MUR: {
                    name: "Mauritian Rupee",
                    minor_unit: "2",
                    symbol: "₨"
                },
                MXN: {
                    name: "Mexican Peso",
                    minor_unit: "2",
                    symbol: "Mex$"
                },
                MXV: {
                    name: "Mexican Unidad de Inversion (UDI)",
                    minor_unit: "2",
                    symbol: "UDI"
                },
                MDL: {
                    name: "Moldovan Leu",
                    minor_unit: "2",
                    symbol: "L"
                },
                MNT: {
                    name: "Tugrik",
                    minor_unit: "2",
                    symbol: "₮"
                },
                MAD: {
                    name: "Moroccan Dirham",
                    minor_unit: "2",
                    symbol: "DH"
                },
                MZN: {
                    name: "Mozambique Metical",
                    minor_unit: "2",
                    symbol: "MT"
                },
                MMK: {
                    name: "Kyat",
                    minor_unit: "2",
                    symbol: "Ks"
                },
                NAD: {
                    name: "Namibia Dollar",
                    minor_unit: "2",
                    symbol: "N$"
                },
                NPR: {
                    name: "Nepalese Rupee",
                    minor_unit: "2",
                    symbol: "₨"
                },
                NIO: {
                    name: "Cordoba Oro",
                    minor_unit: "2",
                    symbol: "C$"
                },
                NGN: {
                    name: "Naira",
                    minor_unit: "2",
                    symbol: "₦"
                },
                OMR: {
                    name: "Rial Omani",
                    minor_unit: "3",
                    symbol: "ر.ع."
                },
                PKR: {
                    name: "Pakistan Rupee",
                    minor_unit: "2",
                    symbol: "₨"
                },
                PAB: {
                    name: "Balboa",
                    minor_unit: "2",
                    symbol: "B/."
                },
                PGK: {
                    name: "Kina",
                    minor_unit: "2",
                    symbol: "K"
                },
                PYG: {
                    name: "Guarani",
                    minor_unit: "0",
                    symbol: "₲"
                },
                PEN: {
                    name: "Sol",
                    minor_unit: "2",
                    symbol: "S/"
                },
                PHP: {
                    name: "Philippine Peso",
                    minor_unit: "2",
                    symbol: "₱"
                },
                PLN: {
                    name: "Zloty",
                    minor_unit: "2",
                    symbol: "zł"
                },
                QAR: {
                    name: "Qatari Rial",
                    minor_unit: "2",
                    symbol: "ر.ق"
                },
                RON: {
                    name: "Romanian Leu",
                    minor_unit: "2",
                    symbol: "lei"
                },
                RUB: {
                    name: "Russian Ruble",
                    minor_unit: "2",
                    symbol: "₽"
                },
                RWF: {
                    name: "Rwandan Franc",
                    minor_unit: "0",
                    symbol: "FRw"
                },
                SHP: {
                    name: "Saint Helena Pound",
                    minor_unit: "2",
                    symbol: "£"
                },
                WST: {
                    name: "Tala",
                    minor_unit: "2",
                    symbol: "WS$"
                },
                STN: {
                    name: "Dobra",
                    minor_unit: "2",
                    symbol: "Db"
                },
                SAR: {
                    name: "Saudi Riyal",
                    minor_unit: "2",
                    symbol: "ر.س"
                },
                RSD: {
                    name: "Serbian Dinar",
                    minor_unit: "2",
                    symbol: "дин."
                },
                SCR: {
                    name: "Seychelles Rupee",
                    minor_unit: "2",
                    symbol: "₨"
                },
                SLL: {
                    name: "Leone",
                    minor_unit: "2",
                    symbol: "Le"
                },
                SGD: {
                    name: "Singapore Dollar",
                    minor_unit: "2",
                    symbol: "S$"
                },
                SBD: {
                    name: "Solomon Islands Dollar",
                    minor_unit: "2",
                    symbol: "SI$"
                },
                SOS: {
                    name: "Somali Shilling",
                    minor_unit: "2",
                    symbol: "S"
                },
                SSP: {
                    name: "South Sudanese Pound",
                    minor_unit: "2",
                    symbol: "SS£"
                },
                LKR: {
                    name: "Sri Lanka Rupee",
                    minor_unit: "2",
                    symbol: "₨"
                },
                SDG: {
                    name: "Sudanese Pound",
                    minor_unit: "2",
                    symbol: "£"
                },
                SRD: {
                    name: "Surinam Dollar",
                    minor_unit: "2",
                    symbol: "SRD"
                },
                SEK: {
                    name: "Swedish Krona",
                    minor_unit: "2",
                    symbol: "kr"
                },
                CHE: {
                    name: "WIR Euro",
                    minor_unit: "2",
                    symbol: "CHE"
                },
                CHW: {
                    name: "WIR Franc",
                    minor_unit: "2",
                    symbol: "CHW"
                },
                SYP: {
                    name: "Syrian Pound",
                    minor_unit: "2",
                    symbol: "£"
                },
                TWD: {
                    name: "New Taiwan Dollar",
                    minor_unit: "2",
                    symbol: "NT$"
                },
                TJS: {
                    name: "Somoni",
                    minor_unit: "2",
                    symbol: "ЅМ"
                },
                TZS: {
                    name: "Tanzanian Shilling",
                    minor_unit: "2",
                    symbol: "Sh"
                },
                THB: {
                    name: "Baht",
                    minor_unit: "2",
                    symbol: "฿"
                },
                TOP: {
                    name: "Pa’anga",
                    minor_unit: "2",
                    symbol: "T$"
                },
                TTD: {
                    name: "Trinidad and Tobago Dollar",
                    minor_unit: "2",
                    symbol: "TT$"
                },
                TND: {
                    name: "Tunisian Dinar",
                    minor_unit: "3",
                    symbol: "DT"
                },
                TRY: {
                    name: "Turkish Lira",
                    minor_unit: "2",
                    symbol: "₺"
                },
                TMT: {
                    name: "Turkmenistan New Manat",
                    minor_unit: "2",
                    symbol: "T"
                },
                UGX: {
                    name: "Uganda Shilling",
                    minor_unit: "0",
                    symbol: "USh"
                },
                UAH: {
                    name: "Hryvnia",
                    minor_unit: "2",
                    symbol: "₴"
                },
                AED: {
                    name: "UAE Dirham",
                    minor_unit: "2",
                    symbol: "د.إ"
                },
                UYI: {
                    name: "Uruguay Peso en Unidades Indexadas (URUIURUI)",
                    minor_unit: "2",
                    symbol: "$U"
                },
                UYU: {
                    name: "Peso Uruguayo",
                    minor_unit: "0",
                    symbol: "$U"
                },
                UYW: {
                    name: "Unidad Previsional",
                    minor_unit: "4",
                    symbol: "UR"
                },
                UZS: {
                    name: "Uzbekistan Sum",
                    minor_unit: "2",
                    symbol: "so‘m"
                },
                VUV: {
                    name: "Vatu",
                    minor_unit: "0",
                    symbol: "VT"
                },
                VES: {
                    name: "Bolívar Soberano",
                    minor_unit: "2",
                    symbol: "Bs.S."
                },
                VED: {
                    name: "Bolívar Soberano",
                    minor_unit: "2",
                    symbol: "Bs.S."
                },
                VND: {
                    name: "Dong",
                    minor_unit: "0",
                    symbol: "₫"
                },
                YER: {
                    name: "Yemeni Rial",
                    minor_unit: "2",
                    symbol: "﷼"
                },
                ZMW: {
                    name: "Zambian Kwacha",
                    minor_unit: "2",
                    symbol: "ZK"
                },
                ZWL: {
                    name: "Zimbabwe Dollar",
                    minor_unit: "2",
                    symbol: "Z$"
                }
            };
            const t = ["nan", "infinity", "percent", "integer", "group", "decimal", "fraction", "plusSign", "minusSign", "percentSign", "currency", "code", "symbol", "name", "compact", "exponentInteger", "exponentMinusSign", "exponentSeparator", "unit"],
                m = {
                    SGD: {
                        $: a.SGD.symbol
                    },
                    XCD: {
                        $: a.XCD.symbol
                    },
                    ARS: {
                        $: a.ARS.symbol
                    },
                    AUD: {
                        $: a.AUD.symbol
                    },
                    BSD: {
                        $: a.BSD.symbol
                    },
                    BBD: {
                        $: a.BBD.symbol
                    },
                    BMD: {
                        $: a.BMD.symbol
                    },
                    CVE: {
                        $: a.CVE.symbol
                    },
                    CAD: {
                        $: a.CAD.symbol
                    },
                    KYD: {
                        $: a.KYD.symbol
                    },
                    CLP: {
                        $: a.CLP.symbol
                    },
                    COP: {
                        $: a.COP.symbol
                    },
                    NZD: {
                        $: a.NZD.symbol
                    },
                    CUP: {
                        $: a.CUP.symbol
                    },
                    SVC: {
                        $: a.SVC.symbol
                    },
                    FJD: {
                        $: a.FJD.symbol
                    },
                    GYD: {
                        $: a.GYD.symbol
                    },
                    HKD: {
                        $: a.HKD.symbol
                    },
                    JMD: {
                        $: a.JMD.symbol
                    },
                    LRD: {
                        $: a.LRD.symbol
                    },
                    MOP: {
                        $: a.MOP.symbol
                    },
                    MXN: {
                        $: a.MXN.symbol
                    },
                    NAD: {
                        $: a.NAD.symbol
                    },
                    SBD: {
                        $: a.SBD.symbol
                    },
                    SRD: {
                        $: a.SRD.symbol
                    },
                    ZWL: {
                        $: a.ZWL.symbol
                    },
                    LSL: {
                        L: a.LSL.symbol
                    },
                    AWG: {
                        "Afl.": a.AWG.symbol
                    },
                    BYN: {
                        Br: a.BYN.symbol
                    },
                    XAF: {
                        FCFA: a.XAF.symbol
                    },
                    CNY: {
                        "¥": a.CNY.symbol
                    },
                    EGP: {
                        "£": a.EGP.symbol
                    },
                    FKP: {
                        "£": a.FKP.symbol
                    },
                    LBP: {
                        "£": a.LBP.symbol
                    },
                    SSP: {
                        "£": a.SSP.symbol
                    },
                    WST: {
                        T: a.WST.symbol
                    }
                },
                s = (x, n) => {
                    for (let d = 0; d < x.length; d++) {
                        const e = x[d];
                        if ("currency" === e.type && n in m) {
                            const o = m[n];
                            if (e.value in o) {
                                x[d].value = o[e.value];
                                break
                            }
                        }
                    }
                    return x
                };
            var l = (0, e.w)(((x, n = {}) => {
                if (!Number(x) && 0 !== Number(x)) throw new Error(`Parameter 'amount' is not a valid number. The received value was: ${x} of type ${typeof x}. Please ensure you pass a valid number.`);
                try {
                    let d = i(n).formatToParts(Number(x));
                    const e = (null == n ? void 0 : n.intlOptions) ? Object.assign({}, n.intlOptions) : {},
                        o = (null == n ? void 0 : n.currency) || e.currency;
                    return d = s(d, o), d.map((x => x.value)).join("")
                } catch (x) {
                    throw x instanceof Error ? new Error(`An error occurred while formatting the number: ${x.message}`) : new Error(`An unknown error occurred. Error details: ${x}`)
                }
            }));
            (0, e.w)((() => a));
            var u = (0, e.w)((x => {
                var n;
                if (x in a) return null === (n = a[x]) || void 0 === n ? void 0 : n.symbol;
                throw new Error(`The provided currency code is invalid. The received value was: ${String(x)}. Please ensure you pass a valid currency code. Check valid currency codes here: https://github.com/razorpay/i18nify/blob/master/i18nify-data/currency/data.json`)
            }));
            (0, e.w)(((x, n = {}) => {
                if (!Number(x) && 0 !== Number(x)) throw new Error(`Parameter 'amount' is not a valid number. The received value was: ${x} of type ${typeof x}. Please ensure you pass a valid number.`);
                try {
                    let d = i(n).formatToParts(Number(x));
                    const e = {},
                        o = (null == n ? void 0 : n.intlOptions) ? Object.assign({}, n.intlOptions) : {},
                        r = (null == n ? void 0 : n.currency) || o.currency;
                    return d = s(d, r), d.forEach((x => {
                        "group" === x.type ? e.integer = (e.integer || "") + x.value : -1 != t.findIndex((n => n === x.type)) && (e[x.type] = (e[x.type] || "") + x.value)
                    })), Object.assign(Object.assign({}, e), {
                        isPrefixSymbol: d.findIndex((x => "currency" === x.type)) < d.findIndex((x => "integer" === x.type)),
                        rawParts: d
                    })
                } catch (x) {
                    throw x instanceof Error ? new Error(`An error occurred while formatting the number: ${x.message}`) : new Error(`An unknown error occurred. Error details: ${x}`)
                }
            }));
            var y = (0, e.w)(((x, n) => {
                const d = a[n.currency];
                if (!n.currency || !d) throw new Error(`The provided currency code is either empty or not supported. The received value was ${""===n.currency?"an empty string":`: ${String(n.currency)}`}. Please ensure you pass a valid currency code. Check valid currency codes here: https://github.com/razorpay/i18nify/blob/master/i18nify-data/currency/data.json`);
                return x / (Math.pow(10, Number(d.minor_unit)) || 100)
            }));
            var c = (0, e.w)(((x, n) => {
                const d = a[n.currency];
                if (!n.currency || !d) throw new Error(`The provided currency code is either empty or not supported. The received value was ${""===n.currency?"an empty string":`: ${String(n.currency)}`}. Please ensure you pass a valid currency code. Check valid currency codes here: https://github.com/razorpay/i18nify/blob/master/i18nify-data/currency/data.json`);
                const e = Math.pow(10, Number(d.minor_unit)) || 100;
                return parseFloat((x * e).toFixed(0))
            }))
        },
        77242: (x, n, d) => {
            d.d(n, {
                w: () => o
            });
            class e extends Error {
                constructor(x) {
                    super(x), this.name = "i18nify Error", this.timestamp = new Date
                }
            }
            const o = x => function(...n) {
                try {
                    return x.call(this, ...n)
                } catch (x) {
                    throw new e(x)
                }
            }
        },
        43124: (x, n, d) => {
            d.r(n), d.d(n, {
                MaskingStyle: () => c,
                formatPhoneNumber: () => l,
                getDialCodeByCountryCode: () => b,
                getDialCodes: () => y,
                getMaskedPhoneNumber: () => S,
                isValidPhoneNumber: () => m,
                parsePhoneNumber: () => u
            });
            var e = d(77242),
                o = {
                    AF: "[2-7]\\d{8}",
                    AX: "2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}",
                    AL: "(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}",
                    DZ: "(?:[1-4]|[5-79]\\d|80)\\d{7}",
                    AS: "(?:[58]\\d\\d|684|900)\\d{7}",
                    AD: "(?:1|6\\d)\\d{7}|[135-9]\\d{5}",
                    AO: "[29]\\d{8}",
                    AI: "(?:264|[58]\\d\\d|900)\\d{7}",
                    AQ: "",
                    AG: "(?:268|[58]\\d\\d|900)\\d{7}",
                    AR: "(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}",
                    AM: "(?:[1-489]\\d|55|60|77)\\d{6}",
                    AW: "(?:[25-79]\\d\\d|800)\\d{4}",
                    AU: "1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}",
                    AT: "1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}",
                    AZ: "365\\d{6}|(?:[124579]\\d|60|88)\\d{7}",
                    BS: "(?:242|[58]\\d\\d|900)\\d{7}",
                    BH: "[136-9]\\d{7}",
                    BD: "[1-469]\\d{9}|8[0-79]\\d{7,8}|[2-79]\\d{8}|[2-9]\\d{7}|[3-9]\\d{6}|[57-9]\\d{5}",
                    BB: "(?:246|[58]\\d\\d|900)\\d{7}",
                    BY: "(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}",
                    BE: "4\\d{8}|[1-9]\\d{7}",
                    BZ: "(?:0800\\d|[2-8])\\d{6}",
                    BJ: "[24-689]\\d{7}",
                    BM: "(?:441|[58]\\d\\d|900)\\d{7}",
                    BT: "[17]\\d{7}|[2-8]\\d{6}",
                    BO: "(?:[2-467]\\d\\d|8001)\\d{5}",
                    BQ: "(?:[34]1|7\\d)\\d{5}",
                    BA: "6\\d{8}|(?:[35689]\\d|49|70)\\d{6}",
                    BW: "(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}",
                    BV: "",
                    BR: "(?:[1-46-9]\\d\\d|5(?:[0-46-9]\\d|5[0-46-9]))\\d{8}|[1-9]\\d{9}|[3589]\\d{8}|[34]\\d{7}",
                    IO: "3\\d{6}",
                    BN: "[2-578]\\d{6}",
                    BG: "00800\\d{7}|[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}",
                    BF: "[025-7]\\d{7}",
                    BI: "(?:[267]\\d|31)\\d{6}",
                    CV: "(?:[2-59]\\d\\d|800)\\d{4}",
                    KH: "1\\d{9}|[1-9]\\d{7,8}",
                    CM: "[26]\\d{8}|88\\d{6,7}",
                    CA: "(?:[2-8]\\d|90)\\d{8}|3\\d{6}",
                    KY: "(?:345|[58]\\d\\d|900)\\d{7}",
                    CF: "(?:[27]\\d{3}|8776)\\d{4}",
                    TD: "(?:22|[69]\\d|77)\\d{6}",
                    CL: "12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}",
                    CN: "1[127]\\d{8,9}|2\\d{9}(?:\\d{2})?|[12]\\d{6,7}|86\\d{6}|(?:1[03-689]\\d|6)\\d{7,9}|(?:[3-579]\\d|8[0-57-9])\\d{6,9}",
                    CX: "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}",
                    CC: "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}",
                    CO: "(?:60\\d\\d|9101)\\d{6}|(?:1\\d|3)\\d{9}",
                    KM: "[3478]\\d{6}",
                    CD: "[189]\\d{8}|[1-68]\\d{6}",
                    CG: "222\\d{6}|(?:0\\d|80)\\d{7}",
                    CK: "[2-578]\\d{4}",
                    CR: "(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}",
                    CI: "[02]\\d{9}",
                    HR: "(?:[24-69]\\d|3[0-79])\\d{7}|80\\d{5,7}|[1-79]\\d{7}|6\\d{5,6}",
                    CU: "(?:[2-7]|8\\d\\d)\\d{7}|[2-47]\\d{6}|[34]\\d{5}",
                    CW: "(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}",
                    CY: "(?:[279]\\d|[58]0)\\d{6}",
                    CZ: "(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}",
                    DK: "[2-9]\\d{7}",
                    DJ: "(?:2\\d|77)\\d{6}",
                    DM: "^(?:(?!767)\\d{7}|767\\d{7})$",
                    DO: "(?:[58]\\d\\d|900)\\d{7}",
                    EC: "1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}",
                    EG: "[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}",
                    SV: "[267]\\d{7}|(?:80\\d|900)\\d{4}(?:\\d{4})?",
                    GQ: "222\\d{6}|(?:3\\d|55|[89]0)\\d{7}",
                    ER: "[178]\\d{6}",
                    EE: "8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}",
                    SZ: "0800\\d{4}|(?:[237]\\d|900)\\d{6}",
                    ET: "(?:11|[2-579]\\d)\\d{7}",
                    FK: "[2-7]\\d{4}",
                    FO: "[2-9]\\d{5}",
                    FJ: "45\\d{5}|(?:0800\\d|[235-9])\\d{6}",
                    FI: "[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}",
                    FR: "[1-9]\\d{8}",
                    GF: "[56]94\\d{6}|(?:80|9\\d)\\d{7}",
                    PF: "4\\d{5}(?:\\d{2})?|8\\d{7,8}",
                    TF: "",
                    GA: "(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}",
                    GM: "[2-9]\\d{6}",
                    GE: "(?:[3-57]\\d\\d|800)\\d{6}",
                    DE: "[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:2[024-9]|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[015]\\d|2[13]|31|[46][1-8])\\d{1,9}",
                    GH: "(?:[235]\\d{3}|800)\\d{5}",
                    GI: "(?:[25]\\d|60)\\d{6}",
                    GR: "5005000\\d{3}|8\\d{9,11}|(?:[269]\\d|70)\\d{8}",
                    GL: "(?:19|[2-689]\\d|70)\\d{4}",
                    GD: "(?:473|[58]\\d\\d|900)\\d{7}",
                    GP: "590\\d{6}|(?:69|80|9\\d)\\d{7}",
                    GU: "(?:[58]\\d\\d|671|900)\\d{7}",
                    GT: "80\\d{6}|(?:1\\d{3}|[2-7])\\d{7}",
                    GG: "(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?",
                    GN: "722\\d{6}|(?:3|6\\d)\\d{7}",
                    GW: "[49]\\d{8}|4\\d{6}",
                    GY: "(?:[2-8]\\d{3}|9008)\\d{3}",
                    HT: "(?:[2-489]\\d|55)\\d{6}",
                    HM: "",
                    VA: "0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}",
                    HN: "8\\d{10}|[237-9]\\d{7}",
                    HK: "8[0-46-9]\\d{6,7}|9\\d{4,7}|(?:[2-7]|9\\d{3})\\d{7}",
                    HU: "[235-7]\\d{8}|[1-9]\\d{7}",
                    IS: "(?:38\\d|[4-9])\\d{6}",
                    IN: "^(?:(?:\\+|0{0,2})91\\s*[-]?\\s*|[0]?)?[6789]\\d{9}$",
                    ID: "(?:(?:00[1-9]|8\\d)\\d{4}|[1-36])\\d{6}|00\\d{10}|[1-9]\\d{8,10}|[2-9]\\d{7}",
                    IR: "[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}",
                    IQ: "(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}",
                    IE: "(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}",
                    IM: "1624\\d{6}|(?:[3578]\\d|90)\\d{8}",
                    IL: "1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}",
                    IT: "0\\d{5,10}|1\\d{8,10}|3(?:[0-8]\\d{7,10}|9\\d{7,8})|(?:43|55|70)\\d{8}|8\\d{5}(?:\\d{2,4})?",
                    JM: "(?:[58]\\d\\d|658|900)\\d{7}",
                    JP: "00[1-9]\\d{6,14}|[257-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}",
                    JE: "1534\\d{6}|(?:[3578]\\d|90)\\d{8}",
                    JO: "(?:(?:[2689]|7\\d)\\d|32|53)\\d{6}",
                    KZ: "(?:33622|8\\d{8})\\d{5}|[78]\\d{9}",
                    KE: "(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}",
                    KI: "(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}",
                    KP: "85\\d{6}|(?:19\\d|[2-7])\\d{7}",
                    KR: "00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}",
                    KW: "18\\d{5}|(?:[2569]\\d|41)\\d{6}",
                    KG: "8\\d{9}|[235-9]\\d{8}",
                    LA: "[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}",
                    LV: "(?:[268]\\d|90)\\d{6}",
                    LB: "[27-9]\\d{7}|[13-9]\\d{6}",
                    LS: "(?:[256]\\d\\d|800)\\d{5}",
                    LR: "(?:[245]\\d|33|77|88)\\d{7}|(?:2\\d|[4-6])\\d{6}",
                    LY: "[2-9]\\d{8}",
                    LI: "[68]\\d{8}|(?:[2378]\\d|90)\\d{5}",
                    LT: "(?:[3469]\\d|52|[78]0)\\d{6}",
                    LU: "35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}",
                    MO: "0800\\d{3}|(?:28|[68]\\d)\\d{6}",
                    MG: "[23]\\d{8}",
                    MW: "(?:[1289]\\d|31|77)\\d{7}|1\\d{6}",
                    MY: "1\\d{8,9}|(?:3\\d|[4-9])\\d{7}",
                    MV: "(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}",
                    ML: "[24-9]\\d{7}",
                    MT: "3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}",
                    MH: "329\\d{4}|(?:[256]\\d|45)\\d{5}",
                    MQ: "596\\d{6}|(?:69|80|9\\d)\\d{7}",
                    MR: "(?:[2-4]\\d\\d|800)\\d{5}",
                    MU: "(?:[57]|8\\d\\d)\\d{7}|[2-468]\\d{6}",
                    YT: "(?:80|9\\d)\\d{7}|(?:26|63)9\\d{6}",
                    MX: "[2-9]\\d{9}",
                    FM: "(?:[39]\\d\\d|820)\\d{4}",
                    MD: "(?:[235-7]\\d|[89]0)\\d{6}",
                    MC: "(?:[3489]|6\\d)\\d{7}",
                    MN: "[12]\\d{7,9}|[5-9]\\d{7}",
                    ME: "(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}",
                    MS: "(?:[58]\\d\\d|664|900)\\d{7}",
                    MA: "[5-8]\\d{8}",
                    MZ: "(?:2|8\\d)\\d{7}",
                    MM: "1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}",
                    NA: "[68]\\d{7,8}",
                    NR: "(?:444|(?:55|8\\d)\\d|666)\\d{4}",
                    NP: "(?:1\\d|9)\\d{9}|[1-9]\\d{7}",
                    NL: "(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|8\\d{6,9}|9\\d{6,10}|1\\d{4,5}",
                    NC: "(?:050|[2-57-9]\\d\\d)\\d{3}",
                    NZ: "[1289]\\d{9}|50\\d{5}(?:\\d{2,3})?|[27-9]\\d{7,8}|(?:[34]\\d|6[0-35-9])\\d{6}|8\\d{4,6}",
                    NI: "(?:1800|[25-8]\\d{3})\\d{4}",
                    NE: "[027-9]\\d{7}",
                    NG: "2[0-24-9]\\d{8}|[78]\\d{10,13}|[7-9]\\d{9}|[1-9]\\d{7}|[124-7]\\d{6}",
                    NU: "(?:[4-7]|888\\d)\\d{3}",
                    NF: "[13]\\d{5}",
                    MK: "[2-578]\\d{7}",
                    MP: "[58]\\d{9}|(?:67|90)0\\d{7}",
                    NO: "(?:0|[2-9]\\d{3})\\d{4}",
                    OM: "(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}",
                    PK: "122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}",
                    PW: "(?:[24-8]\\d\\d|345|900)\\d{4}",
                    PS: "[2489]2\\d{6}|(?:1\\d|5)\\d{8}",
                    PA: "(?:00800|8\\d{3})\\d{6}|[68]\\d{7}|[1-57-9]\\d{6}",
                    PG: "(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}",
                    PY: "59\\d{4,6}|9\\d{5,10}|(?:[2-46-8]\\d|5[0-8])\\d{4,7}",
                    PE: "(?:[14-8]|9\\d)\\d{7}",
                    PH: "(?:[2-7]|9\\d)\\d{8}|2\\d{5}|(?:1800|8)\\d{7,9}",
                    PN: "",
                    PL: "(?:6|8\\d\\d)\\d{7}|[1-9]\\d{6}(?:\\d{2})?|[26]\\d{5}",
                    PT: "1693\\d{5}|(?:[26-9]\\d|30)\\d{7}",
                    PR: "(?:[589]\\d\\d|787)\\d{7}",
                    QA: "800\\d{4}|(?:2|800)\\d{6}|(?:0080|[3-7])\\d{7}",
                    RE: "(?:26|[689]\\d)\\d{7}",
                    RO: "(?:[236-8]\\d|90)\\d{7}|[23]\\d{5}",
                    RU: "8\\d{13}|[347-9]\\d{9}",
                    RW: "(?:06|[27]\\d\\d|[89]00)\\d{6}",
                    BL: "590\\d{6}|(?:69|80|9\\d)\\d{7}",
                    SH: "(?:[256]\\d|8)\\d{3}",
                    KN: "(?:[58]\\d\\d|900)\\d{7}",
                    LC: "(?:[58]\\d\\d|758|900)\\d{7}",
                    MF: "590\\d{6}|(?:69|80|9\\d)\\d{7}",
                    PM: "[45]\\d{5}|(?:708|80\\d)\\d{6}",
                    VC: "(?:[58]\\d\\d|784|900)\\d{7}",
                    WS: "(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}",
                    SM: "(?:0549|[5-7]\\d)\\d{6}",
                    ST: "(?:22|9\\d)\\d{5}",
                    SA: "92\\d{7}|(?:[15]|8\\d)\\d{8}",
                    SN: "(?:[378]\\d|93)\\d{7}",
                    RS: "38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}",
                    SC: "800\\d{4}|(?:[249]\\d|64)\\d{5}",
                    SL: "(?:[237-9]\\d|66)\\d{6}",
                    SG: "(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}",
                    SX: "7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}",
                    SK: "[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}",
                    SI: "[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}",
                    SB: "[6-9]\\d{6}|[1-6]\\d{4}",
                    SO: "[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}",
                    ZA: "[1-79]\\d{8}|8\\d{4,9}",
                    GS: "",
                    SS: "[19]\\d{8}",
                    ES: "[5-9]\\d{8}",
                    LK: "[1-9]\\d{8}",
                    SD: "[19]\\d{8}",
                    SR: "(?:[2-5]|68|[78]\\d)\\d{5}",
                    SJ: "0\\d{4}|(?:[489]\\d|79)\\d{6}",
                    SE: "(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}",
                    CH: "8\\d{11}|[2-9]\\d{8}",
                    SY: "[1-39]\\d{8}|[1-5]\\d{7}",
                    TW: "[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}",
                    TJ: "[0-57-9]\\d{8}",
                    TZ: "(?:[25-8]\\d|41|90)\\d{7}",
                    TH: "(?:001800|[2-57]|[689]\\d)\\d{7}|1\\d{7,9}",
                    TL: "7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}",
                    TG: "[279]\\d{7}",
                    TK: "[2-47]\\d{3,6}",
                    TO: "(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}",
                    TT: "(?:[58]\\d\\d|900)\\d{7}",
                    TN: "[2-57-9]\\d{7}",
                    TR: "4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}",
                    TM: "(?:[1-6]\\d|71)\\d{6}",
                    TC: "(?:[58]\\d\\d|649|900)\\d{7}",
                    TV: "(?:2|7\\d\\d|90)\\d{4}",
                    UG: "800\\d{6}|(?:[29]0|[347]\\d)\\d{7}",
                    UA: "[89]\\d{9}|[3-9]\\d{8}",
                    AE: "(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}",
                    GB: "[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}",
                    UM: "",
                    US: "[2-9]\\d{9}|3\\d{6}",
                    UY: "0004\\d{2,9}|[1249]\\d{7}|(?:[49]\\d|80)\\d{5}",
                    UZ: "(?:20|33|[5-79]\\d|88)\\d{7}",
                    VU: "[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}",
                    VE: "[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}",
                    VN: "[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}",
                    VG: "(?:284|[58]\\d\\d|900)\\d{7}",
                    VI: "[58]\\d{9}|(?:34|90)0\\d{7}",
                    WF: "(?:40|72)\\d{4}|8\\d{5}(?:\\d{3})?",
                    EH: "[5-8]\\d{8}",
                    YE: "(?:1|7\\d)\\d{7}|[1-7]\\d{6}",
                    ZM: "800\\d{6}|(?:21|63|[79]\\d)\\d{7}",
                    ZW: "2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}",
                    XK: "2\\d{7,8}|3\\d{7,11}|(?:4\\d\\d|[89]00)\\d{5}",
                    FW: "^\\+590\\s\\d{2}\\s\\d{2}\\s\\d{2}\\s\\d{2}$",
                    "YT-UNF": "^(?:\\+262)?\\d{9}$",
                    "BQ-BO": "",
                    "BQ-SA": "",
                    "BQ-SE": "",
                    "GB-ENG": "",
                    "GB-NIR": "",
                    "GB-SCT": "",
                    "GB-UKM": "",
                    "GB-WLS": ""
                },
                r = {
                    1: ["US", "AG", "AI", "AS", "BB", "BM", "BS", "CA", "DM", "DO", "GD", "GU", "JM", "KN", "KY", "LC", "MP", "MS", "PR", "TC", "TT", "TF", "VC", "VG", "SX", "VI", "UM"],
                    7: ["RU", "KZ"],
                    20: ["EG"],
                    27: ["ZA"],
                    30: ["GR"],
                    31: ["NL"],
                    32: ["BE"],
                    33: ["FR"],
                    34: ["ES"],
                    36: ["HU"],
                    39: ["IT", "VA"],
                    40: ["RO"],
                    41: ["CH"],
                    43: ["AT"],
                    44: ["GB", "GB-ENG", "GB-NIR", "GB-SCT", "GB-UKM", "GB-WLS", "GG", "IM", "JE"],
                    45: ["DK"],
                    46: ["SE"],
                    47: ["NO", "BV", "SJ"],
                    48: ["PL"],
                    49: ["DE"],
                    51: ["PE"],
                    52: ["MX"],
                    53: ["CU"],
                    54: ["AR"],
                    55: ["BR"],
                    56: ["CL"],
                    57: ["CO"],
                    58: ["VE"],
                    60: ["MY"],
                    61: ["AU", "CX", "CC"],
                    62: ["ID"],
                    63: ["PH"],
                    64: ["NZ", "PN"],
                    65: ["SG"],
                    66: ["TH"],
                    81: ["JP"],
                    82: ["KR"],
                    84: ["VN"],
                    86: ["CN"],
                    90: ["TR"],
                    91: ["IN"],
                    92: ["PK"],
                    93: ["AF"],
                    94: ["LK"],
                    95: ["MM"],
                    98: ["IR"],
                    211: ["SS"],
                    212: ["MA", "EH"],
                    213: ["DZ"],
                    216: ["TN"],
                    218: ["LY"],
                    220: ["GM"],
                    221: ["SN"],
                    222: ["MR"],
                    223: ["ML"],
                    224: ["GN"],
                    225: ["CI"],
                    226: ["BF"],
                    227: ["NE"],
                    228: ["TG"],
                    229: ["BJ"],
                    230: ["MU"],
                    231: ["LR"],
                    232: ["SL"],
                    233: ["GH"],
                    234: ["NG"],
                    235: ["TD"],
                    236: ["CF"],
                    237: ["CM"],
                    238: ["CV"],
                    239: ["ST"],
                    240: ["GQ"],
                    241: ["GA"],
                    242: ["CG"],
                    243: ["CD"],
                    244: ["AO"],
                    245: ["GW"],
                    246: ["IO"],
                    248: ["SC"],
                    249: ["SD"],
                    250: ["RW"],
                    251: ["ET"],
                    252: ["SO"],
                    253: ["DJ"],
                    254: ["KE"],
                    255: ["TZ"],
                    256: ["UG"],
                    257: ["BI"],
                    258: ["MZ"],
                    260: ["ZM"],
                    261: ["MG"],
                    262: ["RE", "YT", "YT-UNF"],
                    263: ["ZW"],
                    264: ["NA"],
                    265: ["MW"],
                    266: ["LS"],
                    267: ["BW"],
                    268: ["SZ"],
                    269: ["KM"],
                    290: ["SH"],
                    291: ["ER"],
                    297: ["AW"],
                    298: ["FO"],
                    299: ["GL"],
                    350: ["GI"],
                    351: ["PT"],
                    352: ["LU"],
                    353: ["IE"],
                    354: ["IS"],
                    355: ["AL"],
                    356: ["MT"],
                    357: ["CY"],
                    358: ["FI", "AX"],
                    359: ["BG"],
                    370: ["LT"],
                    371: ["LV"],
                    372: ["EE"],
                    373: ["MD"],
                    374: ["AM"],
                    375: ["BY"],
                    376: ["AD"],
                    377: ["MC"],
                    378: ["SM"],
                    380: ["UA"],
                    381: ["RS"],
                    382: ["ME"],
                    383: ["XK"],
                    385: ["HR"],
                    386: ["SI"],
                    387: ["BA"],
                    389: ["MK"],
                    420: ["CZ"],
                    421: ["SK"],
                    423: ["LI"],
                    500: ["FK", "GS"],
                    501: ["BZ"],
                    502: ["GT"],
                    503: ["SV"],
                    504: ["HN"],
                    505: ["NI"],
                    506: ["CR"],
                    507: ["PA"],
                    508: ["PM"],
                    509: ["HT"],
                    590: ["MF", "FW", "GP", "BL"],
                    591: ["BO"],
                    592: ["GY"],
                    593: ["EC"],
                    594: ["GF"],
                    595: ["PY"],
                    596: ["MQ"],
                    597: ["SR"],
                    598: ["UY"],
                    599: ["CW", "BQ", "BQ-BO", "BQ-SA", "BQ-SE"],
                    670: ["TL"],
                    672: ["AQ", "NF"],
                    673: ["BN"],
                    674: ["NR"],
                    675: ["PG"],
                    676: ["TO"],
                    677: ["SB"],
                    678: ["VU"],
                    679: ["FJ"],
                    680: ["PW"],
                    681: ["WF"],
                    682: ["CK"],
                    683: ["NU"],
                    685: ["WS"],
                    686: ["KI"],
                    687: ["NC"],
                    688: ["TV"],
                    689: ["PF"],
                    690: ["TK"],
                    691: ["FM"],
                    692: ["MH"],
                    850: ["KP"],
                    852: ["HK"],
                    853: ["MO"],
                    855: ["KH"],
                    856: ["LA"],
                    880: ["BD"],
                    886: ["TW"],
                    960: ["MV"],
                    961: ["LB"],
                    962: ["JO"],
                    963: ["SY"],
                    964: ["IQ"],
                    965: ["KW"],
                    966: ["SA"],
                    967: ["YE"],
                    968: ["OM"],
                    970: ["PS"],
                    971: ["AE"],
                    972: ["IL"],
                    973: ["BH"],
                    974: ["QA"],
                    975: ["BT"],
                    976: ["MN"],
                    977: ["NP"],
                    992: ["TJ"],
                    993: ["TM"],
                    994: ["AZ"],
                    995: ["GE"],
                    996: ["KG"],
                    998: ["UZ"],
                    "00672": ["HM"]
                };
            const i = x => {
                    const n = o;
                    if ("+" === x.toString().charAt(0)) {
                        const d = x.toString().replace(/\D/g, ""),
                            e = [],
                            o = r;
                        for (const x in o) d.startsWith(x) && e.push(...o[x].map((n => ({
                            countryCode: n,
                            dialCode: `+${x}`
                        }))));
                        return e.find((d => {
                            const e = String(x).replace(d.dialCode, ""),
                                o = n[d.countryCode];
                            if (o && t(e, o)) return d
                        })) || {
                            countryCode: "",
                            dialCode: ""
                        }
                    }
                    return {
                        countryCode: "",
                        dialCode: ""
                    }
                },
                a = x => {
                    const n = x.replace(/[^0-9+]|(?!A)\+/g, "");
                    return "+" === x[0] ? `+${n}` : n
                },
                t = (x, n) => (x = x || "", new RegExp("^(?:" + n + ")$").test(x));
            var m = (0, e.w)(((x, n) => {
                    if (!x) return !1;
                    const d = a(x.toString());
                    if (!d) return !1;
                    const e = o,
                        r = i(d);
                    if ((n = n && n in e ? n : r.countryCode) in e) {
                        const x = (x => {
                            const n = a(String(x)),
                                {
                                    dialCode: d
                                } = i(n);
                            return String(n).replace(d, "")
                        })(d);
                        return t(x, e[n])
                    }
                    return !1
                })),
                s = {
                    AF: "xx xxx xxxx",
                    AX: "xxx xxx",
                    AL: "xxx xx xxxx",
                    DZ: "xxxx-xxxx-xxx",
                    AS: "xxx-xxxx",
                    AD: "xxx xxx",
                    AO: "xx xxx xxxx",
                    AI: "xxx-xxxx",
                    AQ: "",
                    AG: "xxx-xxxx",
                    AR: "xxxx-xxxx",
                    AM: "xx xx xx xx",
                    AW: "xxx-xxxx",
                    AU: "xxx xxx xxx",
                    AT: "xxx xxxxxxxx",
                    AZ: "xx xxx xx xx",
                    BS: "xxx-xxxx",
                    BH: "xxxx xxxx",
                    BD: "xxxx-xxxxxx",
                    BB: "xxx-xxxx",
                    BY: "xx xxx-xx-xx",
                    BE: "xxx xx xx xx",
                    BZ: "xxx-xxxx",
                    BJ: "xx xx xx xx",
                    BM: "xxx-xxxx",
                    BT: "x xxx xxx",
                    BO: "xxxx-xxxx",
                    BQ: "xxx xxxx",
                    BA: "xx xxx-xxxx",
                    BW: "xx xxxx xxxx",
                    BV: "",
                    BR: "xx xxxx-xxxx",
                    IO: "xxx xxxx",
                    BN: "xxxx-xxxx",
                    BG: "xx xxx xxxx",
                    BF: "xx xx xx xx",
                    BI: "xx xx xx xx",
                    CV: "xxx xxxx",
                    KH: "xxx-xxx-xxx",
                    CM: "xx xx xx xx",
                    CA: "xxx-xxx-xxxx",
                    KY: "xxx-xxxx",
                    CF: "xx xx xx xx",
                    TD: "xx xx xx xx",
                    CL: "x xxxx xxxx",
                    CN: "xxxx-xxxxxxx",
                    CX: "xxx xxxx xxxx",
                    CC: "xxx xxxx xxxx",
                    CO: "xxxx-xxxxxxx",
                    KM: "xx xx xx xx",
                    CD: "xx xxx xxxx",
                    CG: "xx xx xx xx",
                    CK: "xx xxx",
                    CR: "xxxx-xxxx",
                    CI: "xx xx xx xx",
                    HR: "xxx xxx xxxx",
                    CU: "xxxx-xxxx",
                    CW: "xxx xxxx",
                    CY: "xx xxxxxx",
                    CZ: "xxx xxx xxx",
                    DK: "xx xx xx xx",
                    DJ: "xx xx xx xx",
                    DM: "xxx-xxxx",
                    DO: "xxx-xxxxxxx",
                    EC: "xx xxx xxxx",
                    EG: "xx xxx xxxx",
                    SV: "xxxx-xxxx",
                    GQ: "xx xxx xxxx",
                    ER: "x xxx xxxx",
                    EE: "xxx xxxx",
                    SZ: "xxx xx xxxx",
                    ET: "xx xxx xxxx",
                    FK: "xxxxx",
                    FO: "xxx xxx",
                    FJ: "xxxx xxxx",
                    FI: "xx xxx xxxx",
                    FR: "xx xx xx xx xx",
                    GF: "xxx xx xx xx",
                    PF: "xx xx xx xx",
                    TF: "",
                    GA: "xx xx xx xx",
                    GM: "xxxx-xxxx",
                    GE: "xxx xxx xxx",
                    DE: "xxx xxxxxxxx",
                    GH: "xxx xxx xxxx",
                    GI: "xxxx xxxx",
                    GR: "xx xxx xxxx",
                    GL: "xx xx xx",
                    GD: "xxx-xxxx",
                    GP: "xxx xx xx xx",
                    GU: "xxx-xxxx",
                    GT: "xxxx-xxxx",
                    GG: "xxxx xxxx",
                    GN: "xx xx xx xx",
                    GW: "xx xx xx xx",
                    GY: "xxx-xxxx",
                    HT: "xxx-xxxx",
                    HM: "",
                    VA: "xxx xxxx xxxx",
                    HN: "xxxx-xxxx",
                    HK: "xxxx xxxx",
                    HU: "xxx xxx xxxx",
                    IS: "xxx xxxx",
                    IN: "xxxx xxxxxx",
                    ID: "xxxx-xxxx-xxxx",
                    IR: "xx xxxx xxxx",
                    IQ: "xx xxx xxxx",
                    IE: "xx xxx xxxx",
                    IM: "xxxx xxxx",
                    IL: "xxxx-xxx-xxx",
                    IT: "xxx xxxx xxxx",
                    JM: "xxx-xxxx",
                    JP: "xx xxxx xxxx",
                    JE: "xxxx xxxx",
                    JO: "xx xxxx xxxx",
                    KZ: "xxx-xxx-xx-xx",
                    KE: "xxx xxxxxx",
                    KI: "xx xxx",
                    KP: "xx xxx xxxx",
                    KR: "xx xxxx xxxx",
                    KW: "xxx xx xxxx",
                    KG: "xxx-xx-xx-xx",
                    LA: "xxx xx xxxx",
                    LV: "xxxx xxxx",
                    LB: "xx xxx xxx",
                    LS: "xxx xx xxxx",
                    LR: "xxx-xxx-xxxx",
                    LY: "xx xxxxx xxxx",
                    LI: "xxx xx xx",
                    LT: "xxx xxxxx",
                    LU: "xxx xx xxx",
                    MO: "xxxx xxxx",
                    MG: "xx xx xx xx xx",
                    MW: "xx xxxx xxxx",
                    MY: "xx xxxxx xx",
                    MV: "xxxxxx",
                    ML: "xx xx xx xx",
                    MT: "xx xx xx xx",
                    MH: "xxx xxxx",
                    MQ: "xxx xx xx xx",
                    MR: "xx xx xx xx",
                    MU: "xx xxxx xxxx",
                    YT: "xxx xx xx xx",
                    MX: "xxx-xxx-xxxx",
                    FM: "xxx xxxx",
                    MD: "xx xxxxxx",
                    MC: "xx xx xx xx",
                    MN: "xxx-xx-xxxx",
                    ME: "xx xxxxxx",
                    MS: "xxx-xxxx",
                    MA: "xxxx-xxxxxx",
                    MZ: "xx xxxxxxx",
                    MM: "xx xxxxxx",
                    NA: "xx xxxx xxxx",
                    NR: "xxx xxxx",
                    NP: "xxxx-xxxxxxx",
                    NL: "xxx-xxxxxxx",
                    NC: "xx xx xx",
                    NZ: "xxx-xxxxxxx",
                    NI: "xxxx-xxxx",
                    NE: "xx xx xx xx",
                    NG: "xxx xxx xxxx",
                    NU: "xxxx",
                    NF: "x xxxx",
                    MK: "xx xx xx xx",
                    MP: "xxx-xxxx",
                    NO: "xxxx xxxx",
                    OM: "xxxx-xxxx",
                    PK: "xxx-xxxxxxx",
                    PW: "xxx xxxx",
                    PS: "xxxx-xxxxxxx",
                    PA: "xxx-xxxx",
                    PG: "xxx-xxxxxx",
                    PY: "xxx-xxxxxx",
                    PE: "xxx-xxx-xxx",
                    PH: "xxx-xxxx",
                    PN: "",
                    PL: "xxx xxx xxx",
                    PT: "xxx xxx xxx",
                    PR: "xxx-xxx-xxxx",
                    QA: "xxxx xxxx",
                    RE: "xxx xx xx xx",
                    RO: "xxx xxx xxxx",
                    RU: "xxx xxx-xx-xx",
                    RW: "xxx xxxxxx",
                    BL: "xxx xx xx xx",
                    SH: "xxxx",
                    KN: "xxx-xxxx",
                    LC: "xxx-xxxx",
                    MF: "xxx xx xx xx",
                    PM: "xxx xxxx",
                    VC: "xxx-xxxx",
                    WS: "xx xxxxx",
                    SM: "xxxxx xxxxx",
                    ST: "xx xxx xx",
                    SA: "xxx-xxxxxxx",
                    SN: "xx xxx xx xx",
                    RS: "xxx xxxxx",
                    SC: "xx xxxxx",
                    SL: "xxx-xxxxxx",
                    SG: "xxxx xxxx",
                    SX: "xxx-xxxx",
                    SK: "xxx xxx xxx",
                    SI: "xx xxxxxx",
                    SB: "xxxxx",
                    SO: "xxx xxxxxxx",
                    ZA: "xxx-xxx-xxxx",
                    GS: "",
                    SS: "xxx xxxx xxx",
                    ES: "xxx xxx xxx",
                    LK: "xx xxx xxxx",
                    SD: "xx xxx xxxx",
                    SR: "xxx-xxxx",
                    SJ: "xxx xx xxx",
                    SE: "xxx-xxx xx xx",
                    CH: "xxx xxx xxx",
                    SY: "xx xxxx xxxx",
                    TW: "xxxx-xxxxxx",
                    TJ: "xxx xx xx xx",
                    TZ: "xxx xxx xxxx",
                    TH: "xxx-xxxxxxx",
                    TL: "xxx-xxxxxxx",
                    TG: "xx xx xx xx",
                    TK: "xxxx",
                    TO: "xxxxx",
                    TT: "xxx-xxxx",
                    TN: "xx xxxxxx",
                    TR: "xxx xxx xx xx",
                    TM: "x xxx xxx",
                    TC: "xxx-xxxx",
                    TV: "xxxxx",
                    UG: "xxx xxxxxxx",
                    UA: "xx xxx xx xx",
                    AE: "xx xxx xxxx",
                    GB: "xxxx xxx xxx",
                    UM: "",
                    US: "xxx-xxx-xxxx",
                    UY: "xxx-xxxxx",
                    UZ: "xxx-xxx-xx-xx",
                    VU: "xx xxxxx",
                    VE: "xxxx-xxx-xxxx",
                    VN: "xxxx-xxxxxxx",
                    VG: "xxx-xxxx",
                    VI: "xxx-xxxx",
                    WF: "xx xxxx",
                    EH: "xx xx xx xx",
                    YE: "xxxx-xxxx",
                    ZM: "xxx-xxxxxxx",
                    ZW: "xx xxx xxxx",
                    XK: "xxx xxx xxx",
                    FW: "xxx xx xx xx",
                    "YT-UNF": "xxx xx xx xx",
                    "BQ-BO": "",
                    "BQ-SA": "",
                    "BQ-SE": "",
                    "GB-ENG": "",
                    "GB-NIR": "",
                    "GB-SCT": "",
                    "GB-UKM": "",
                    "GB-WLS": ""
                };
            var l = (0, e.w)(((x, n) => {
                if (!x) throw new Error(`Parameter 'phoneNumber' is invalid! The received value was: ${x}. Please ensure you provide a valid phone number.`);
                x = x.toString(), x = a(x);
                const d = s[n = n && n in s ? n : i(x).countryCode];
                if (!d) return x;
                let e = 0;
                for (let x = 0; x < d.length; x++) "x" === d[x] && e++;
                const o = x.length - e,
                    r = x.slice(o),
                    t = [];
                let m = 0;
                for (let x = 0; x < d.length; x++) {
                    const n = d[x];
                    "x" === n ? m < r.length && (t.push(r[m]), m++) : t.push(n)
                }
                const l = t.join("");
                return (x.slice(0, o) + " " + l).trim()
            }));
            var u = (0, e.w)(((x, n) => {
                if (!x) throw new Error(`Parameter 'phoneNumber' is invalid! The received value was: ${x}. Please ensure you provide a valid phone number.`);
                x = x.toString(), x = a(x);
                const d = i(x),
                    e = s,
                    o = n && n in e ? n : d.countryCode,
                    r = d.dialCode,
                    t = l(x, o),
                    m = e[o];
                if (!m) return {
                    countryCode: o,
                    dialCode: r,
                    formattedPhoneNumber: x,
                    formatTemplate: "",
                    phoneNumber: x
                };
                let u = 0;
                for (let x = 0; x < m.length; x++) "x" === m[x] && u++;
                const y = x.length - u,
                    c = e[o];
                return {
                    phoneNumber: x.slice(y),
                    countryCode: o,
                    dialCode: r,
                    formattedPhoneNumber: m ? t : x,
                    formatTemplate: c || ""
                }
            }));
            var y = (0, e.w)((() => {
                const x = {};
                for (const [n, d] of Object.entries(r)) d.forEach((d => {
                    x[d] = `+${Number(n)}`
                }));
                return x
            }));
            var c, b = (0, e.w)((x => {
                const n = y();
                if (x in n) return n[x];
                throw new Error(`The provided country code is invalid. The received value was: ${x}. Please ensure you pass a valid country code. Check valid country codes here: https://github.com/razorpay/i18nify/blob/master/i18nify-data/country/metadata/data.json`)
            }));
            ! function(x) {
                x.Full = "full", x.Prefix = "prefix", x.Suffix = "suffix", x.Alternate = "alternate"
            }(c || (c = {}));
            var S = (0, e.w)((({
                countryCode: x,
                withDialCode: n = !0,
                phoneNumber: d,
                maskingOptions: e = {}
            }) => {
                const {
                    maskingStyle: o = c.Full,
                    maskedDigitsCount: r = 0,
                    maskingChar: t = "x"
                } = e;
                if (!x && !d) throw new Error("Either 'countryCode' or 'phoneNumber' is mandatory. Please provide a valid 'countryCode' or 'phoneNumber'. Check valid country codes here: https://github.com/razorpay/i18nify/blob/master/i18nify-data/country/metadata/data.json");
                let m, l;
                if (d) {
                    let n = d;
                    n = n.toString(), n = a(n);
                    const e = i(n),
                        t = x || e.countryCode;
                    try {
                        l = b(t)
                    } catch (x) {
                        l = e.dialCode
                    }
                    const u = "+" === n[0] ? n.slice(l.toString().length) : n,
                        y = s[t] || d.replace(/\d/g, "x");
                    switch (o) {
                        case c.Alternate:
                            m = (x => String(x).trim().split("").reduce(((x, n) => (/\d/.test(n) && (x.numericCount % 2 != 0 ? x.result.push("x") : x.result.push(n), x.numericCount++), x)), {
                                result: [],
                                numericCount: 0
                            }).result.join(""))(u);
                            break;
                        case c.Prefix:
                            m = ((x, n, d) => {
                                const e = x.split("");
                                let o = n.length - 1,
                                    r = 0;
                                for (let x = e.length - 1; x >= 0 && r < d; x--) "x" === e[x] && o >= 0 && (e[x] = n[o--], r++);
                                return e.join("")
                            })(y, String(u), u.length - r);
                            break;
                        case c.Suffix:
                            m = ((x, n, d) => {
                                const e = x.split("");
                                let o = 0,
                                    r = 0;
                                for (let x = 0; x < e.length && r < d; x++) "x" === e[x] && o < n.length && (e[x] = n[o++], r++);
                                return e.join("")
                            })(y, String(u), u.length - r);
                            break;
                        default:
                            m = y
                    }
                } else {
                    if (m = s[x], !m) throw new Error(`Parameter 'countryCode' is invalid. The received value was: ${x}. Check valid country codes here: https://github.com/razorpay/i18nify/blob/master/i18nify-data/country/metadata/data.json`);
                    l = b(x)
                }
                return n ? `${l} ${m.replace(/x/g,t)}`.trim() : m.trim().replace(/x/g, t)
            }))
        },
        73654: (x, n, d) => {
            d.d(n, {
                GE: () => e.yRu,
                Jd: () => o,
                XS: () => i,
                _e: () => r,
                gr: () => a
            });
            var e = d(64248);

            function o(x) {
                return x * x * x
            }

            function r(x) {
                const n = x - 1;
                return n * n * n + 1
            }

            function i(x) {
                return 1 === x ? x : 1 - Math.pow(2, -10 * x)
            }

            function a(x) {
                return x * x * x * x * x
            }
        },
        2412: (x, n, d) => {
            d.d(n, {
                H3: () => e.H3E,
                Ky: () => e.KyG,
                ev: () => e.evW,
                ez: () => e.ezL,
                fw: () => e.fwp,
                gx: () => e.gx3,
                v: () => e.vax,
                x: () => e.xa3
            });
            var e = d(64248)
        },
        12486: () => {
            "undefined" != typeof window && (window.__svelte || (window.__svelte = {
                v: new Set
            })).v.add("4")
        },
        92408: (x, n, d) => {
            d.d(n, {
                PX: () => r,
                U2: () => e.$XI,
                fZ: () => i,
                nK: () => a
            });
            var e = d(64248);
            const o = [];

            function r(x, n) {
                return {
                    subscribe: i(x, n).subscribe
                }
            }

            function i(x) {
                let n, d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.ZTd;
                const r = new Set;

                function i(d) {
                    if ((0, e.N8)(x, d) && (x = d, n)) {
                        const n = !o.length;
                        for (const n of r) n[1](), o.push(n, x);
                        if (n) {
                            for (let x = 0; x < o.length; x += 2) o[x][0](o[x + 1]);
                            o.length = 0
                        }
                    }
                }

                function a(n) {
                    i(n(x))
                }
                return {
                    set: i,
                    update: a,
                    subscribe: function(o) {
                        const t = [o, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.ZTd];
                        return r.add(t), 1 === r.size && (n = d(i, a) || e.ZTd), o(x), () => {
                            r.delete(t), 0 === r.size && n && (n(), n = null)
                        }
                    }
                }
            }

            function a(x, n, d) {
                const o = !Array.isArray(x),
                    i = o ? [x] : x;
                if (!i.every(Boolean)) throw new Error("derived() expects stores as input, got a falsy value");
                const a = n.length < 2;
                return r(d, ((x, d) => {
                    let r = !1;
                    const t = [];
                    let m = 0,
                        s = e.ZTd;
                    const l = () => {
                            if (m) return;
                            s();
                            const r = n(o ? t[0] : t, x, d);
                            a ? x(r) : s = (0, e.sBU)(r) ? r : e.ZTd
                        },
                        u = i.map(((x, n) => (0, e.LdU)(x, (x => {
                            t[n] = x, m &= ~(1 << n), r && l()
                        }), (() => {
                            m |= 1 << n
                        }))));
                    return r = !0, l(),
                        function() {
                            (0, e.j7q)(u), s(), r = !1
                        }
                }))
            }
        },
        57264: (x, n, d) => {
            d.d(n, {
                JD: () => a,
                U1: () => r,
                Zw: () => i,
                bA: () => t
            });
            var e = d(73654),
                o = d(64248);

            function r(x) {
                let {
                    delay: n = 0,
                    duration: d = 400,
                    easing: o = e.GE
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const r = +getComputedStyle(x).opacity;
                return {
                    delay: n,
                    duration: d,
                    easing: o,
                    css: x => "opacity: " + x * r
                }
            }

            function i(x) {
                let {
                    delay: n = 0,
                    duration: d = 400,
                    easing: r = e._e,
                    x: i = 0,
                    y: a = 0,
                    opacity: t = 0
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const m = getComputedStyle(x),
                    s = +m.opacity,
                    l = "none" === m.transform ? "" : m.transform,
                    u = s * (1 - t),
                    [y, c] = (0, o.SsK)(i),
                    [b, S] = (0, o.SsK)(a);
                return {
                    delay: n,
                    duration: d,
                    easing: r,
                    css: (x, n) => `\n\t\t\ttransform: ${l} translate(${(1-x)*y}${c}, ${(1-x)*b}${S});\n\t\t\topacity: ${s-u*n}`
                }
            }

            function a(x) {
                let {
                    delay: n = 0,
                    duration: d = 400,
                    easing: o = e._e,
                    axis: r = "y"
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const i = getComputedStyle(x),
                    a = +i.opacity,
                    t = "y" === r ? "height" : "width",
                    m = parseFloat(i[t]),
                    s = "y" === r ? ["top", "bottom"] : ["left", "right"],
                    l = s.map((x => `${x[0].toUpperCase()}${x.slice(1)}`)),
                    u = parseFloat(i[`padding${l[0]}`]),
                    y = parseFloat(i[`padding${l[1]}`]),
                    c = parseFloat(i[`margin${l[0]}`]),
                    b = parseFloat(i[`margin${l[1]}`]),
                    S = parseFloat(i[`border${l[0]}Width`]),
                    C = parseFloat(i[`border${l[1]}Width`]);
                return {
                    delay: n,
                    duration: d,
                    easing: o,
                    css: x => `overflow: hidden;opacity: ${Math.min(20*x,1)*a};${t}: ${x*m}px;padding-${s[0]}: ${x*u}px;padding-${s[1]}: ${x*y}px;margin-${s[0]}: ${x*c}px;margin-${s[1]}: ${x*b}px;border-${s[0]}-width: ${x*S}px;border-${s[1]}-width: ${x*C}px;`
                }
            }

            function t(x) {
                let {
                    delay: n = 0,
                    duration: d = 400,
                    easing: o = e._e,
                    start: r = 0,
                    opacity: i = 0
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const a = getComputedStyle(x),
                    t = +a.opacity,
                    m = "none" === a.transform ? "" : a.transform,
                    s = 1 - r,
                    l = t * (1 - i);
                return {
                    delay: n,
                    duration: d,
                    easing: o,
                    css: (x, n) => `\n\t\t\ttransform: ${m} scale(${1-s*n});\n\t\t\topacity: ${t-l*n}\n\t\t`
                }
            }
        }
    }
]);