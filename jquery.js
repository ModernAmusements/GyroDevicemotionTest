/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */ ! function(r, o) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = r.document ? o(r, !0) : function(r) {
        if (!r.document) throw new Error("jQuery requires a window with a document");
        return o(r)
    } : o(r)
}("undefined" != typeof window ? window : this, (function(r, o) {
    "use strict";
    var f = [],
        d = Object.getPrototypeOf,
        g = f.slice,
        v = f.flat ? function(r) {
            return f.flat.call(r)
        } : function(r) {
            return f.concat.apply([], r)
        },
        y = f.push,
        C = f.indexOf,
        E = {},
        k = E.toString,
        N = E.hasOwnProperty,
        j = N.toString,
        q = j.call(Object),
        L = {},
        m = function(r) {
            return "function" == typeof r && "number" != typeof r.nodeType
        },
        x = function(r) {
            return null != r && r === r.window
        },
        H = r.document,
        F = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function b(r, o, f) {
        var d, g, v = (f = f || H).createElement("script");
        if (v.text = r, o)
            for (d in F)(g = o[d] || o.getAttribute && o.getAttribute(d)) && v.setAttribute(d, g);
        f.head.appendChild(v).parentNode.removeChild(v)
    }

    function w(r) {
        return null == r ? r + "" : "object" == typeof r || "function" == typeof r ? E[k.call(r)] || "object" : typeof r
    }
    var W = "3.5.1",
        S = function(r, o) {
            return new S.fn.init(r, o)
        };

    function p(r) {
        var o = !!r && "length" in r && r.length,
            f = w(r);
        return !m(r) && !x(r) && ("array" === f || 0 === o || "number" == typeof o && 0 < o && o - 1 in r)
    }
    S.fn = S.prototype = {
        jquery: W,
        constructor: S,
        length: 0,
        toArray: function() {
            return g.call(this)
        },
        get: function(r) {
            return null == r ? g.call(this) : r < 0 ? this[r + this.length] : this[r]
        },
        pushStack: function(r) {
            var o = S.merge(this.constructor(), r);
            return o.prevObject = this, o
        },
        each: function(r) {
            return S.each(this, r)
        },
        map: function(r) {
            return this.pushStack(S.map(this, (function(o, f) {
                return r.call(o, f, o)
            })))
        },
        slice: function() {
            return this.pushStack(g.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(S.grep(this, (function(r, o) {
                return (o + 1) % 2
            })))
        },
        odd: function() {
            return this.pushStack(S.grep(this, (function(r, o) {
                return o % 2
            })))
        },
        eq: function(r) {
            var o = this.length,
                f = +r + (r < 0 ? o : 0);
            return this.pushStack(0 <= f && f < o ? [this[f]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: y,
        sort: f.sort,
        splice: f.splice
    }, S.extend = S.fn.extend = function() {
        var r, o, f, d, g, v, y = arguments[0] || {},
            C = 1,
            E = arguments.length,
            k = !1;
        for ("boolean" == typeof y && (k = y, y = arguments[C] || {}, C++), "object" == typeof y || m(y) || (y = {}), C === E && (y = this, C--); C < E; C++)
            if (null != (r = arguments[C]))
                for (o in r) d = r[o], "__proto__" !== o && y !== d && (k && d && (S.isPlainObject(d) || (g = Array.isArray(d))) ? (f = y[o], v = g && !Array.isArray(f) ? [] : g || S.isPlainObject(f) ? f : {}, g = !1, y[o] = S.extend(k, v, d)) : void 0 !== d && (y[o] = d));
        return y
    }, S.extend({
        expando: "jQuery" + (W + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(r) {
            throw new Error(r)
        },
        noop: function() {},
        isPlainObject: function(r) {
            var o, f;
            return !(!r || "[object Object]" !== k.call(r) || (o = d(r)) && ("function" != typeof(f = N.call(o, "constructor") && o.constructor) || j.call(f) !== q))
        },
        isEmptyObject: function(r) {
            var o;
            for (o in r) return !1;
            return !0
        },
        globalEval: function(r, o, f) {
            b(r, {
                nonce: o && o.nonce
            }, f)
        },
        each: function(r, o) {
            var f, d = 0;
            if (p(r))
                for (f = r.length; d < f && !1 !== o.call(r[d], d, r[d]); d++);
            else
                for (d in r)
                    if (!1 === o.call(r[d], d, r[d])) break;
            return r
        },
        makeArray: function(r, o) {
            var f = o || [];
            return null != r && (p(Object(r)) ? S.merge(f, "string" == typeof r ? [r] : r) : y.call(f, r)), f
        },
        inArray: function(r, o, f) {
            return null == o ? -1 : C.call(o, r, f)
        },
        merge: function(r, o) {
            for (var f = +o.length, d = 0, g = r.length; d < f; d++) r[g++] = o[d];
            return r.length = g, r
        },
        grep: function(r, o, f) {
            for (var d = [], g = 0, v = r.length, y = !f; g < v; g++) !o(r[g], g) !== y && d.push(r[g]);
            return d
        },
        map: function(r, o, f) {
            var d, g, y = 0,
                C = [];
            if (p(r))
                for (d = r.length; y < d; y++) null != (g = o(r[y], y, f)) && C.push(g);
            else
                for (y in r) null != (g = o(r[y], y, f)) && C.push(g);
            return v(C)
        },
        guid: 1,
        support: L
    }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = f[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(r, o) {
        E["[object " + o + "]"] = o.toLowerCase()
    }));
    var _ = function(r) {
        var o, f, d, g, v, y, C, E, k, N, j, q, L, H, F, W, _, z, Y, J = "sizzle" + 1 * new Date,
            K = r.document,
            Q = 0,
            ee = 0,
            te = ue(),
            re = ue(),
            De = ue(),
            Ne = ue(),
            D = function(r, o) {
                return r === o && (j = !0), 0
            },
            je = {}.hasOwnProperty,
            Me = [],
            Fe = Me.pop,
            _e = Me.push,
            ze = Me.push,
            Ue = Me.slice,
            P = function(r, o) {
                for (var f = 0, d = r.length; f < d; f++)
                    if (r[f] === o) return f;
                return -1
            },
            Ge = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            Ve = "[\\x20\\t\\r\\n\\f]",
            Ye = "(?:\\\\[\\da-fA-F]{1,6}" + Ve + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            Qe = "\\[" + Ve + "*(" + Ye + ")(?:" + Ve + "*([*^$|!~]?=)" + Ve + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + Ye + "))|)" + Ve + "*\\]",
            tt = ":(" + Ye + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + Qe + ")*)|.*)\\)|)",
            nt = new RegExp(Ve + "+", "g"),
            rt = new RegExp("^" + Ve + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Ve + "+$", "g"),
            it = new RegExp("^" + Ve + "*," + Ve + "*"),
            ot = new RegExp("^" + Ve + "*([>+~]|" + Ve + ")" + Ve + "*"),
            at = new RegExp(Ve + "|>"),
            pt = new RegExp(tt),
            dt = new RegExp("^" + Ye + "$"),
            ht = {
                ID: new RegExp("^#(" + Ye + ")"),
                CLASS: new RegExp("^\\.(" + Ye + ")"),
                TAG: new RegExp("^(" + Ye + "|[*])"),
                ATTR: new RegExp("^" + Qe),
                PSEUDO: new RegExp("^" + tt),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + Ve + "*(even|odd|(([+-]|)(\\d*)n|)" + Ve + "*(?:([+-]|)" + Ve + "*(\\d+)|))" + Ve + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + Ge + ")$", "i"),
                needsContext: new RegExp("^" + Ve + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + Ve + "*((?:-\\d)?\\d*)" + Ve + "*\\)|)(?=[^-]|$)", "i")
            },
            gt = /HTML$/i,
            xt = /^(?:input|select|textarea|button)$/i,
            bt = /^h\d$/i,
            Tt = /^[^{]+\{\s*\[native \w/,
            Ct = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            Et = /[+~]/,
            At = new RegExp("\\\\[\\da-fA-F]{1,6}" + Ve + "?|\\\\([^\\r\\n\\f])", "g"),
            ne = function(r, o) {
                var f = "0x" + r.slice(1) - 65536;
                return o || (f < 0 ? String.fromCharCode(f + 65536) : String.fromCharCode(f >> 10 | 55296, 1023 & f | 56320))
            },
            St = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function(r, o) {
                return o ? "\0" === r ? "�" : r.slice(0, -1) + "\\" + r.charCodeAt(r.length - 1).toString(16) + " " : "\\" + r
            },
            oe = function() {
                q()
            },
            kt = be((function(r) {
                return !0 === r.disabled && "fieldset" === r.nodeName.toLowerCase()
            }), {
                dir: "parentNode",
                next: "legend"
            });
        try {
            ze.apply(Me = Ue.call(K.childNodes), K.childNodes), Me[K.childNodes.length].nodeType
        } catch (o) {
            ze = {
                apply: Me.length ? function(r, o) {
                    _e.apply(r, Ue.call(o))
                } : function(r, o) {
                    for (var f = r.length, d = 0; r[f++] = o[d++];);
                    r.length = f - 1
                }
            }
        }

        function se(r, o, d, g) {
            var v, C, k, N, j, H, _, z = o && o.ownerDocument,
                K = o ? o.nodeType : 9;
            if (d = d || [], "string" != typeof r || !r || 1 !== K && 9 !== K && 11 !== K) return d;
            if (!g && (q(o), o = o || L, F)) {
                if (11 !== K && (j = Ct.exec(r)))
                    if (v = j[1]) {
                        if (9 === K) {
                            if (!(k = o.getElementById(v))) return d;
                            if (k.id === v) return d.push(k), d
                        } else if (z && (k = z.getElementById(v)) && Y(o, k) && k.id === v) return d.push(k), d
                    } else {
                        if (j[2]) return ze.apply(d, o.getElementsByTagName(r)), d;
                        if ((v = j[3]) && f.getElementsByClassName && o.getElementsByClassName) return ze.apply(d, o.getElementsByClassName(v)), d
                    }
                if (f.qsa && !Ne[r + " "] && (!W || !W.test(r)) && (1 !== K || "object" !== o.nodeName.toLowerCase())) {
                    if (_ = r, z = o, 1 === K && (at.test(r) || ot.test(r))) {
                        for ((z = Et.test(r) && ye(o.parentNode) || o) === o && f.scope || ((N = o.getAttribute("id")) ? N = N.replace(St, ie) : o.setAttribute("id", N = J)), C = (H = y(r)).length; C--;) H[C] = (N ? "#" + N : ":scope") + " " + xe(H[C]);
                        _ = H.join(",")
                    }
                    try {
                        return ze.apply(d, z.querySelectorAll(_)), d
                    } catch (o) {
                        Ne(r, !0)
                    } finally {
                        N === J && o.removeAttribute("id")
                    }
                }
            }
            return E(r.replace(rt, "$1"), o, d, g)
        }

        function ue() {
            var r = [];
            return function e(o, f) {
                return r.push(o + " ") > d.cacheLength && delete e[r.shift()], e[o + " "] = f
            }
        }

        function le(r) {
            return r[J] = !0, r
        }

        function ce(r) {
            var o = L.createElement("fieldset");
            try {
                return !!r(o)
            } catch (r) {
                return !1
            } finally {
                o.parentNode && o.parentNode.removeChild(o), o = null
            }
        }

        function fe(r, o) {
            for (var f = r.split("|"), g = f.length; g--;) d.attrHandle[f[g]] = o
        }

        function pe(r, o) {
            var f = o && r,
                d = f && 1 === r.nodeType && 1 === o.nodeType && r.sourceIndex - o.sourceIndex;
            if (d) return d;
            if (f)
                for (; f = f.nextSibling;)
                    if (f === o) return -1;
            return r ? 1 : -1
        }

        function de(r) {
            return function(o) {
                return "input" === o.nodeName.toLowerCase() && o.type === r
            }
        }

        function he(r) {
            return function(o) {
                var f = o.nodeName.toLowerCase();
                return ("input" === f || "button" === f) && o.type === r
            }
        }

        function ge(r) {
            return function(o) {
                return "form" in o ? o.parentNode && !1 === o.disabled ? "label" in o ? "label" in o.parentNode ? o.parentNode.disabled === r : o.disabled === r : o.isDisabled === r || o.isDisabled !== !r && kt(o) === r : o.disabled === r : "label" in o && o.disabled === r
            }
        }

        function ve(r) {
            return le((function(o) {
                return o = +o, le((function(f, d) {
                    for (var g, v = r([], f.length, o), y = v.length; y--;) f[g = v[y]] && (f[g] = !(d[g] = f[g]))
                }))
            }))
        }

        function ye(r) {
            return r && void 0 !== r.getElementsByTagName && r
        }
        for (o in f = se.support = {}, v = se.isXML = function(r) {
                var o = r.namespaceURI,
                    f = (r.ownerDocument || r).documentElement;
                return !gt.test(o || f && f.nodeName || "HTML")
            }, q = se.setDocument = function(r) {
                var o, g, y = r ? r.ownerDocument || r : K;
                return y != L && 9 === y.nodeType && y.documentElement && (H = (L = y).documentElement, F = !v(L), K != L && (g = L.defaultView) && g.top !== g && (g.addEventListener ? g.addEventListener("unload", oe, !1) : g.attachEvent && g.attachEvent("onunload", oe)), f.scope = ce((function(r) {
                    return H.appendChild(r).appendChild(L.createElement("div")), void 0 !== r.querySelectorAll && !r.querySelectorAll(":scope fieldset div").length
                })), f.attributes = ce((function(r) {
                    return r.className = "i", !r.getAttribute("className")
                })), f.getElementsByTagName = ce((function(r) {
                    return r.appendChild(L.createComment("")), !r.getElementsByTagName("*").length
                })), f.getElementsByClassName = Tt.test(L.getElementsByClassName), f.getById = ce((function(r) {
                    return H.appendChild(r).id = J, !L.getElementsByName || !L.getElementsByName(J).length
                })), f.getById ? (d.filter.ID = function(r) {
                    var o = r.replace(At, ne);
                    return function(r) {
                        return r.getAttribute("id") === o
                    }
                }, d.find.ID = function(r, o) {
                    if (void 0 !== o.getElementById && F) {
                        var f = o.getElementById(r);
                        return f ? [f] : []
                    }
                }) : (d.filter.ID = function(r) {
                    var o = r.replace(At, ne);
                    return function(r) {
                        var f = void 0 !== r.getAttributeNode && r.getAttributeNode("id");
                        return f && f.value === o
                    }
                }, d.find.ID = function(r, o) {
                    if (void 0 !== o.getElementById && F) {
                        var f, d, g, v = o.getElementById(r);
                        if (v) {
                            if ((f = v.getAttributeNode("id")) && f.value === r) return [v];
                            for (g = o.getElementsByName(r), d = 0; v = g[d++];)
                                if ((f = v.getAttributeNode("id")) && f.value === r) return [v]
                        }
                        return []
                    }
                }), d.find.TAG = f.getElementsByTagName ? function(r, o) {
                    return void 0 !== o.getElementsByTagName ? o.getElementsByTagName(r) : f.qsa ? o.querySelectorAll(r) : void 0
                } : function(r, o) {
                    var f, d = [],
                        g = 0,
                        v = o.getElementsByTagName(r);
                    if ("*" === r) {
                        for (; f = v[g++];) 1 === f.nodeType && d.push(f);
                        return d
                    }
                    return v
                }, d.find.CLASS = f.getElementsByClassName && function(r, o) {
                    if (void 0 !== o.getElementsByClassName && F) return o.getElementsByClassName(r)
                }, _ = [], W = [], (f.qsa = Tt.test(L.querySelectorAll)) && (ce((function(r) {
                    var o;
                    H.appendChild(r).innerHTML = "<a id='" + J + "'></a><select id='" + J + "-\r\\' msallowcapture=''><option selected=''></option></select>", r.querySelectorAll("[msallowcapture^='']").length && W.push("[*^$]=" + Ve + "*(?:''|\"\")"), r.querySelectorAll("[selected]").length || W.push("\\[" + Ve + "*(?:value|" + Ge + ")"), r.querySelectorAll("[id~=" + J + "-]").length || W.push("~="), (o = L.createElement("input")).setAttribute("name", ""), r.appendChild(o), r.querySelectorAll("[name='']").length || W.push("\\[" + Ve + "*name" + Ve + "*=" + Ve + "*(?:''|\"\")"), r.querySelectorAll(":checked").length || W.push(":checked"), r.querySelectorAll("a#" + J + "+*").length || W.push(".#.+[+~]"), r.querySelectorAll("\\\f"), W.push("[\\r\\n\\f]")
                })), ce((function(r) {
                    r.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var o = L.createElement("input");
                    o.setAttribute("type", "hidden"), r.appendChild(o).setAttribute("name", "D"), r.querySelectorAll("[name=d]").length && W.push("name" + Ve + "*[*^$|!~]?="), 2 !== r.querySelectorAll(":enabled").length && W.push(":enabled", ":disabled"), H.appendChild(r).disabled = !0, 2 !== r.querySelectorAll(":disabled").length && W.push(":enabled", ":disabled"), r.querySelectorAll("*,:x"), W.push(",.*:")
                }))), (f.matchesSelector = Tt.test(z = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && ce((function(r) {
                    f.disconnectedMatch = z.call(r, "*"), z.call(r, "[s!='']:x"), _.push("!=", tt)
                })), W = W.length && new RegExp(W.join("|")), _ = _.length && new RegExp(_.join("|")), o = Tt.test(H.compareDocumentPosition), Y = o || Tt.test(H.contains) ? function(r, o) {
                    var f = 9 === r.nodeType ? r.documentElement : r,
                        d = o && o.parentNode;
                    return r === d || !(!d || 1 !== d.nodeType || !(f.contains ? f.contains(d) : r.compareDocumentPosition && 16 & r.compareDocumentPosition(d)))
                } : function(r, o) {
                    if (o)
                        for (; o = o.parentNode;)
                            if (o === r) return !0;
                    return !1
                }, D = o ? function(r, o) {
                    if (r === o) return j = !0, 0;
                    var d = !r.compareDocumentPosition - !o.compareDocumentPosition;
                    return d || (1 & (d = (r.ownerDocument || r) == (o.ownerDocument || o) ? r.compareDocumentPosition(o) : 1) || !f.sortDetached && o.compareDocumentPosition(r) === d ? r == L || r.ownerDocument == K && Y(K, r) ? -1 : o == L || o.ownerDocument == K && Y(K, o) ? 1 : N ? P(N, r) - P(N, o) : 0 : 4 & d ? -1 : 1)
                } : function(r, o) {
                    if (r === o) return j = !0, 0;
                    var f, d = 0,
                        g = r.parentNode,
                        v = o.parentNode,
                        y = [r],
                        C = [o];
                    if (!g || !v) return r == L ? -1 : o == L ? 1 : g ? -1 : v ? 1 : N ? P(N, r) - P(N, o) : 0;
                    if (g === v) return pe(r, o);
                    for (f = r; f = f.parentNode;) y.unshift(f);
                    for (f = o; f = f.parentNode;) C.unshift(f);
                    for (; y[d] === C[d];) d++;
                    return d ? pe(y[d], C[d]) : y[d] == K ? -1 : C[d] == K ? 1 : 0
                }), L
            }, se.matches = function(r, o) {
                return se(r, null, null, o)
            }, se.matchesSelector = function(r, o) {
                if (q(r), f.matchesSelector && F && !Ne[o + " "] && (!_ || !_.test(o)) && (!W || !W.test(o))) try {
                    var d = z.call(r, o);
                    if (d || f.disconnectedMatch || r.document && 11 !== r.document.nodeType) return d
                } catch (r) {
                    Ne(o, !0)
                }
                return 0 < se(o, L, null, [r]).length
            }, se.contains = function(r, o) {
                return (r.ownerDocument || r) != L && q(r), Y(r, o)
            }, se.attr = function(r, o) {
                (r.ownerDocument || r) != L && q(r);
                var g = d.attrHandle[o.toLowerCase()],
                    v = g && je.call(d.attrHandle, o.toLowerCase()) ? g(r, o, !F) : void 0;
                return void 0 !== v ? v : f.attributes || !F ? r.getAttribute(o) : (v = r.getAttributeNode(o)) && v.specified ? v.value : null
            }, se.escape = function(r) {
                return (r + "").replace(St, ie)
            }, se.error = function(r) {
                throw new Error("Syntax error, unrecognized expression: " + r)
            }, se.uniqueSort = function(r) {
                var o, d = [],
                    g = 0,
                    v = 0;
                if (j = !f.detectDuplicates, N = !f.sortStable && r.slice(0), r.sort(D), j) {
                    for (; o = r[v++];) o === r[v] && (g = d.push(v));
                    for (; g--;) r.splice(d[g], 1)
                }
                return N = null, r
            }, g = se.getText = function(r) {
                var o, f = "",
                    d = 0,
                    v = r.nodeType;
                if (v) {
                    if (1 === v || 9 === v || 11 === v) {
                        if ("string" == typeof r.textContent) return r.textContent;
                        for (r = r.firstChild; r; r = r.nextSibling) f += g(r)
                    } else if (3 === v || 4 === v) return r.nodeValue
                } else
                    for (; o = r[d++];) f += g(o);
                return f
            }, (d = se.selectors = {
                cacheLength: 50,
                createPseudo: le,
                match: ht,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(r) {
                        return r[1] = r[1].replace(At, ne), r[3] = (r[3] || r[4] || r[5] || "").replace(At, ne), "~=" === r[2] && (r[3] = " " + r[3] + " "), r.slice(0, 4)
                    },
                    CHILD: function(r) {
                        return r[1] = r[1].toLowerCase(), "nth" === r[1].slice(0, 3) ? (r[3] || se.error(r[0]), r[4] = +(r[4] ? r[5] + (r[6] || 1) : 2 * ("even" === r[3] || "odd" === r[3])), r[5] = +(r[7] + r[8] || "odd" === r[3])) : r[3] && se.error(r[0]), r
                    },
                    PSEUDO: function(r) {
                        var o, f = !r[6] && r[2];
                        return ht.CHILD.test(r[0]) ? null : (r[3] ? r[2] = r[4] || r[5] || "" : f && pt.test(f) && (o = y(f, !0)) && (o = f.indexOf(")", f.length - o) - f.length) && (r[0] = r[0].slice(0, o), r[2] = f.slice(0, o)), r.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(r) {
                        var o = r.replace(At, ne).toLowerCase();
                        return "*" === r ? function() {
                            return !0
                        } : function(r) {
                            return r.nodeName && r.nodeName.toLowerCase() === o
                        }
                    },
                    CLASS: function(r) {
                        var o = te[r + " "];
                        return o || (o = new RegExp("(^|" + Ve + ")" + r + "(" + Ve + "|$)")) && te(r, (function(r) {
                            return o.test("string" == typeof r.className && r.className || void 0 !== r.getAttribute && r.getAttribute("class") || "")
                        }))
                    },
                    ATTR: function(r, o, f) {
                        return function(d) {
                            var g = se.attr(d, r);
                            return null == g ? "!=" === o : !o || (g += "", "=" === o ? g === f : "!=" === o ? g !== f : "^=" === o ? f && 0 === g.indexOf(f) : "*=" === o ? f && -1 < g.indexOf(f) : "$=" === o ? f && g.slice(-f.length) === f : "~=" === o ? -1 < (" " + g.replace(nt, " ") + " ").indexOf(f) : "|=" === o && (g === f || g.slice(0, f.length + 1) === f + "-"))
                        }
                    },
                    CHILD: function(r, o, f, d, g) {
                        var v = "nth" !== r.slice(0, 3),
                            y = "last" !== r.slice(-4),
                            C = "of-type" === o;
                        return 1 === d && 0 === g ? function(r) {
                            return !!r.parentNode
                        } : function(o, f, E) {
                            var k, N, j, q, L, H, F = v !== y ? "nextSibling" : "previousSibling",
                                W = o.parentNode,
                                _ = C && o.nodeName.toLowerCase(),
                                z = !E && !C,
                                Y = !1;
                            if (W) {
                                if (v) {
                                    for (; F;) {
                                        for (q = o; q = q[F];)
                                            if (C ? q.nodeName.toLowerCase() === _ : 1 === q.nodeType) return !1;
                                        H = F = "only" === r && !H && "nextSibling"
                                    }
                                    return !0
                                }
                                if (H = [y ? W.firstChild : W.lastChild], y && z) {
                                    for (Y = (L = (k = (N = (j = (q = W)[J] || (q[J] = {}))[q.uniqueID] || (j[q.uniqueID] = {}))[r] || [])[0] === Q && k[1]) && k[2], q = L && W.childNodes[L]; q = ++L && q && q[F] || (Y = L = 0) || H.pop();)
                                        if (1 === q.nodeType && ++Y && q === o) {
                                            N[r] = [Q, L, Y];
                                            break
                                        }
                                } else if (z && (Y = L = (k = (N = (j = (q = o)[J] || (q[J] = {}))[q.uniqueID] || (j[q.uniqueID] = {}))[r] || [])[0] === Q && k[1]), !1 === Y)
                                    for (;
                                        (q = ++L && q && q[F] || (Y = L = 0) || H.pop()) && ((C ? q.nodeName.toLowerCase() !== _ : 1 !== q.nodeType) || !++Y || (z && ((N = (j = q[J] || (q[J] = {}))[q.uniqueID] || (j[q.uniqueID] = {}))[r] = [Q, Y]), q !== o)););
                                return (Y -= g) === d || Y % d == 0 && 0 <= Y / d
                            }
                        }
                    },
                    PSEUDO: function(r, o) {
                        var f, g = d.pseudos[r] || d.setFilters[r.toLowerCase()] || se.error("unsupported pseudo: " + r);
                        return g[J] ? g(o) : 1 < g.length ? (f = [r, r, "", o], d.setFilters.hasOwnProperty(r.toLowerCase()) ? le((function(r, f) {
                            for (var d, v = g(r, o), y = v.length; y--;) r[d = P(r, v[y])] = !(f[d] = v[y])
                        })) : function(r) {
                            return g(r, 0, f)
                        }) : g
                    }
                },
                pseudos: {
                    not: le((function(r) {
                        var o = [],
                            f = [],
                            d = C(r.replace(rt, "$1"));
                        return d[J] ? le((function(r, o, f, g) {
                            for (var v, y = d(r, null, g, []), C = r.length; C--;)(v = y[C]) && (r[C] = !(o[C] = v))
                        })) : function(r, g, v) {
                            return o[0] = r, d(o, null, v, f), o[0] = null, !f.pop()
                        }
                    })),
                    has: le((function(r) {
                        return function(o) {
                            return 0 < se(r, o).length
                        }
                    })),
                    contains: le((function(r) {
                        return r = r.replace(At, ne),
                            function(o) {
                                return -1 < (o.textContent || g(o)).indexOf(r)
                            }
                    })),
                    lang: le((function(r) {
                        return dt.test(r || "") || se.error("unsupported lang: " + r), r = r.replace(At, ne).toLowerCase(),
                            function(o) {
                                var f;
                                do {
                                    if (f = F ? o.lang : o.getAttribute("xml:lang") || o.getAttribute("lang")) return (f = f.toLowerCase()) === r || 0 === f.indexOf(r + "-")
                                } while ((o = o.parentNode) && 1 === o.nodeType);
                                return !1
                            }
                    })),
                    target: function(o) {
                        var f = r.location && r.location.hash;
                        return f && f.slice(1) === o.id
                    },
                    root: function(r) {
                        return r === H
                    },
                    focus: function(r) {
                        return r === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(r.type || r.href || ~r.tabIndex)
                    },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function(r) {
                        var o = r.nodeName.toLowerCase();
                        return "input" === o && !!r.checked || "option" === o && !!r.selected
                    },
                    selected: function(r) {
                        return r.parentNode && r.parentNode.selectedIndex, !0 === r.selected
                    },
                    empty: function(r) {
                        for (r = r.firstChild; r; r = r.nextSibling)
                            if (r.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(r) {
                        return !d.pseudos.empty(r)
                    },
                    header: function(r) {
                        return bt.test(r.nodeName)
                    },
                    input: function(r) {
                        return xt.test(r.nodeName)
                    },
                    button: function(r) {
                        var o = r.nodeName.toLowerCase();
                        return "input" === o && "button" === r.type || "button" === o
                    },
                    text: function(r) {
                        var o;
                        return "input" === r.nodeName.toLowerCase() && "text" === r.type && (null == (o = r.getAttribute("type")) || "text" === o.toLowerCase())
                    },
                    first: ve((function() {
                        return [0]
                    })),
                    last: ve((function(r, o) {
                        return [o - 1]
                    })),
                    eq: ve((function(r, o, f) {
                        return [f < 0 ? f + o : f]
                    })),
                    even: ve((function(r, o) {
                        for (var f = 0; f < o; f += 2) r.push(f);
                        return r
                    })),
                    odd: ve((function(r, o) {
                        for (var f = 1; f < o; f += 2) r.push(f);
                        return r
                    })),
                    lt: ve((function(r, o, f) {
                        for (var d = f < 0 ? f + o : o < f ? o : f; 0 <= --d;) r.push(d);
                        return r
                    })),
                    gt: ve((function(r, o, f) {
                        for (var d = f < 0 ? f + o : f; ++d < o;) r.push(d);
                        return r
                    }))
                }
            }).pseudos.nth = d.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) d.pseudos[o] = de(o);
        for (o in {
                submit: !0,
                reset: !0
            }) d.pseudos[o] = he(o);

        function me() {}

        function xe(r) {
            for (var o = 0, f = r.length, d = ""; o < f; o++) d += r[o].value;
            return d
        }

        function be(r, o, f) {
            var d = o.dir,
                g = o.next,
                v = g || d,
                y = f && "parentNode" === v,
                C = ee++;
            return o.first ? function(o, f, g) {
                for (; o = o[d];)
                    if (1 === o.nodeType || y) return r(o, f, g);
                return !1
            } : function(o, f, E) {
                var k, N, j, q = [Q, C];
                if (E) {
                    for (; o = o[d];)
                        if ((1 === o.nodeType || y) && r(o, f, E)) return !0
                } else
                    for (; o = o[d];)
                        if (1 === o.nodeType || y)
                            if (N = (j = o[J] || (o[J] = {}))[o.uniqueID] || (j[o.uniqueID] = {}), g && g === o.nodeName.toLowerCase()) o = o[d] || o;
                            else {
                                if ((k = N[v]) && k[0] === Q && k[1] === C) return q[2] = k[2];
                                if ((N[v] = q)[2] = r(o, f, E)) return !0
                            } return !1
            }
        }

        function we(r) {
            return 1 < r.length ? function(o, f, d) {
                for (var g = r.length; g--;)
                    if (!r[g](o, f, d)) return !1;
                return !0
            } : r[0]
        }

        function Te(r, o, f, d, g) {
            for (var v, y = [], C = 0, E = r.length, k = null != o; C < E; C++)(v = r[C]) && (f && !f(v, d, g) || (y.push(v), k && o.push(C)));
            return y
        }

        function Ce(r, o, f, d, g, v) {
            return d && !d[J] && (d = Ce(d)), g && !g[J] && (g = Ce(g, v)), le((function(v, y, C, E) {
                var k, N, j, q = [],
                    L = [],
                    H = y.length,
                    F = v || function(r, o, f) {
                        for (var d = 0, g = o.length; d < g; d++) se(r, o[d], f);
                        return f
                    }(o || "*", C.nodeType ? [C] : C, []),
                    W = !r || !v && o ? F : Te(F, q, r, C, E),
                    _ = f ? g || (v ? r : H || d) ? [] : y : W;
                if (f && f(W, _, C, E), d)
                    for (k = Te(_, L), d(k, [], C, E), N = k.length; N--;)(j = k[N]) && (_[L[N]] = !(W[L[N]] = j));
                if (v) {
                    if (g || r) {
                        if (g) {
                            for (k = [], N = _.length; N--;)(j = _[N]) && k.push(W[N] = j);
                            g(null, _ = [], k, E)
                        }
                        for (N = _.length; N--;)(j = _[N]) && -1 < (k = g ? P(v, j) : q[N]) && (v[k] = !(y[k] = j))
                    }
                } else _ = Te(_ === y ? _.splice(H, _.length) : _), g ? g(null, y, _, E) : ze.apply(y, _)
            }))
        }

        function Ee(r) {
            for (var o, f, g, v = r.length, y = d.relative[r[0].type], C = y || d.relative[" "], E = y ? 1 : 0, N = be((function(r) {
                    return r === o
                }), C, !0), j = be((function(r) {
                    return -1 < P(o, r)
                }), C, !0), q = [function(r, f, d) {
                    var g = !y && (d || f !== k) || ((o = f).nodeType ? N(r, f, d) : j(r, f, d));
                    return o = null, g
                }]; E < v; E++)
                if (f = d.relative[r[E].type]) q = [be(we(q), f)];
                else {
                    if ((f = d.filter[r[E].type].apply(null, r[E].matches))[J]) {
                        for (g = ++E; g < v && !d.relative[r[g].type]; g++);
                        return Ce(1 < E && we(q), 1 < E && xe(r.slice(0, E - 1).concat({
                            value: " " === r[E - 2].type ? "*" : ""
                        })).replace(rt, "$1"), f, E < g && Ee(r.slice(E, g)), g < v && Ee(r = r.slice(g)), g < v && xe(r))
                    }
                    q.push(f)
                }
            return we(q)
        }
        return me.prototype = d.filters = d.pseudos, d.setFilters = new me, y = se.tokenize = function(r, o) {
            var f, g, v, y, C, E, k, N = re[r + " "];
            if (N) return o ? 0 : N.slice(0);
            for (C = r, E = [], k = d.preFilter; C;) {
                for (y in f && !(g = it.exec(C)) || (g && (C = C.slice(g[0].length) || C), E.push(v = [])), f = !1, (g = ot.exec(C)) && (f = g.shift(), v.push({
                        value: f,
                        type: g[0].replace(rt, " ")
                    }), C = C.slice(f.length)), d.filter) !(g = ht[y].exec(C)) || k[y] && !(g = k[y](g)) || (f = g.shift(), v.push({
                    value: f,
                    type: y,
                    matches: g
                }), C = C.slice(f.length));
                if (!f) break
            }
            return o ? C.length : C ? se.error(r) : re(r, E).slice(0)
        }, C = se.compile = function(r, o) {
            var f, g, v, C, E, N, j = [],
                H = [],
                W = De[r + " "];
            if (!W) {
                for (o || (o = y(r)), f = o.length; f--;)(W = Ee(o[f]))[J] ? j.push(W) : H.push(W);
                (W = De(r, (g = H, C = 0 < (v = j).length, E = 0 < g.length, N = function(r, o, f, y, N) {
                    var j, H, W, _ = 0,
                        z = "0",
                        Y = r && [],
                        J = [],
                        K = k,
                        ee = r || E && d.find.TAG("*", N),
                        te = Q += null == K ? 1 : Math.random() || .1,
                        re = ee.length;
                    for (N && (k = o == L || o || N); z !== re && null != (j = ee[z]); z++) {
                        if (E && j) {
                            for (H = 0, o || j.ownerDocument == L || (q(j), f = !F); W = g[H++];)
                                if (W(j, o || L, f)) {
                                    y.push(j);
                                    break
                                }
                            N && (Q = te)
                        }
                        C && ((j = !W && j) && _--, r && Y.push(j))
                    }
                    if (_ += z, C && z !== _) {
                        for (H = 0; W = v[H++];) W(Y, J, o, f);
                        if (r) {
                            if (0 < _)
                                for (; z--;) Y[z] || J[z] || (J[z] = Fe.call(y));
                            J = Te(J)
                        }
                        ze.apply(y, J), N && !r && 0 < J.length && 1 < _ + v.length && se.uniqueSort(y)
                    }
                    return N && (Q = te, k = K), Y
                }, C ? le(N) : N))).selector = r
            }
            return W
        }, E = se.select = function(r, o, f, g) {
            var v, E, k, N, j, q = "function" == typeof r && r,
                L = !g && y(r = q.selector || r);
            if (f = f || [], 1 === L.length) {
                if (2 < (E = L[0] = L[0].slice(0)).length && "ID" === (k = E[0]).type && 9 === o.nodeType && F && d.relative[E[1].type]) {
                    if (!(o = (d.find.ID(k.matches[0].replace(At, ne), o) || [])[0])) return f;
                    q && (o = o.parentNode), r = r.slice(E.shift().value.length)
                }
                for (v = ht.needsContext.test(r) ? 0 : E.length; v-- && (k = E[v], !d.relative[N = k.type]);)
                    if ((j = d.find[N]) && (g = j(k.matches[0].replace(At, ne), Et.test(E[0].type) && ye(o.parentNode) || o))) {
                        if (E.splice(v, 1), !(r = g.length && xe(E))) return ze.apply(f, g), f;
                        break
                    }
            }
            return (q || C(r, L))(g, o, !F, f, !o || Et.test(r) && ye(o.parentNode) || o), f
        }, f.sortStable = J.split("").sort(D).join("") === J, f.detectDuplicates = !!j, q(), f.sortDetached = ce((function(r) {
            return 1 & r.compareDocumentPosition(L.createElement("fieldset"))
        })), ce((function(r) {
            return r.innerHTML = "<a href='#'></a>", "#" === r.firstChild.getAttribute("href")
        })) || fe("type|href|height|width", (function(r, o, f) {
            if (!f) return r.getAttribute(o, "type" === o.toLowerCase() ? 1 : 2)
        })), f.attributes && ce((function(r) {
            return r.innerHTML = "<input/>", r.firstChild.setAttribute("value", ""), "" === r.firstChild.getAttribute("value")
        })) || fe("value", (function(r, o, f) {
            if (!f && "input" === r.nodeName.toLowerCase()) return r.defaultValue
        })), ce((function(r) {
            return null == r.getAttribute("disabled")
        })) || fe(Ge, (function(r, o, f) {
            var d;
            if (!f) return !0 === r[o] ? o.toLowerCase() : (d = r.getAttributeNode(o)) && d.specified ? d.value : null
        })), se
    }(r);
    S.find = _, S.expr = _.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = _.uniqueSort, S.text = _.getText, S.isXMLDoc = _.isXML, S.contains = _.contains, S.escapeSelector = _.escape;
    var h = function(r, o, f) {
            for (var d = [], g = void 0 !== f;
                (r = r[o]) && 9 !== r.nodeType;)
                if (1 === r.nodeType) {
                    if (g && S(r).is(f)) break;
                    d.push(r)
                }
            return d
        },
        T = function(r, o) {
            for (var f = []; r; r = r.nextSibling) 1 === r.nodeType && r !== o && f.push(r);
            return f
        },
        z = S.expr.match.needsContext;

    function A(r, o) {
        return r.nodeName && r.nodeName.toLowerCase() === o.toLowerCase()
    }
    var Y = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function D(r, o, f) {
        return m(o) ? S.grep(r, (function(r, d) {
            return !!o.call(r, d, r) !== f
        })) : o.nodeType ? S.grep(r, (function(r) {
            return r === o !== f
        })) : "string" != typeof o ? S.grep(r, (function(r) {
            return -1 < C.call(o, r) !== f
        })) : S.filter(o, r, f)
    }
    S.filter = function(r, o, f) {
        var d = o[0];
        return f && (r = ":not(" + r + ")"), 1 === o.length && 1 === d.nodeType ? S.find.matchesSelector(d, r) ? [d] : [] : S.find.matches(r, S.grep(o, (function(r) {
            return 1 === r.nodeType
        })))
    }, S.fn.extend({
        find: function(r) {
            var o, f, d = this.length,
                g = this;
            if ("string" != typeof r) return this.pushStack(S(r).filter((function() {
                for (o = 0; o < d; o++)
                    if (S.contains(g[o], this)) return !0
            })));
            for (f = this.pushStack([]), o = 0; o < d; o++) S.find(r, g[o], f);
            return 1 < d ? S.uniqueSort(f) : f
        },
        filter: function(r) {
            return this.pushStack(D(this, r || [], !1))
        },
        not: function(r) {
            return this.pushStack(D(this, r || [], !0))
        },
        is: function(r) {
            return !!D(this, "string" == typeof r && z.test(r) ? S(r) : r || [], !1).length
        }
    });
    var J, K = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (S.fn.init = function(r, o, f) {
        var d, g;
        if (!r) return this;
        if (f = f || J, "string" == typeof r) {
            if (!(d = "<" === r[0] && ">" === r[r.length - 1] && 3 <= r.length ? [null, r, null] : K.exec(r)) || !d[1] && o) return !o || o.jquery ? (o || f).find(r) : this.constructor(o).find(r);
            if (d[1]) {
                if (o = o instanceof S ? o[0] : o, S.merge(this, S.parseHTML(d[1], o && o.nodeType ? o.ownerDocument || o : H, !0)), Y.test(d[1]) && S.isPlainObject(o))
                    for (d in o) m(this[d]) ? this[d](o[d]) : this.attr(d, o[d]);
                return this
            }
            return (g = H.getElementById(d[2])) && (this[0] = g, this.length = 1), this
        }
        return r.nodeType ? (this[0] = r, this.length = 1, this) : m(r) ? void 0 !== f.ready ? f.ready(r) : r(S) : S.makeArray(r, this)
    }).prototype = S.fn, J = S(H);
    var Q = /^(?:parents|prev(?:Until|All))/,
        ee = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function O(r, o) {
        for (;
            (r = r[o]) && 1 !== r.nodeType;);
        return r
    }
    S.fn.extend({
        has: function(r) {
            var o = S(r, this),
                f = o.length;
            return this.filter((function() {
                for (var r = 0; r < f; r++)
                    if (S.contains(this, o[r])) return !0
            }))
        },
        closest: function(r, o) {
            var f, d = 0,
                g = this.length,
                v = [],
                y = "string" != typeof r && S(r);
            if (!z.test(r))
                for (; d < g; d++)
                    for (f = this[d]; f && f !== o; f = f.parentNode)
                        if (f.nodeType < 11 && (y ? -1 < y.index(f) : 1 === f.nodeType && S.find.matchesSelector(f, r))) {
                            v.push(f);
                            break
                        }
            return this.pushStack(1 < v.length ? S.uniqueSort(v) : v)
        },
        index: function(r) {
            return r ? "string" == typeof r ? C.call(S(r), this[0]) : C.call(this, r.jquery ? r[0] : r) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(r, o) {
            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(r, o))))
        },
        addBack: function(r) {
            return this.add(null == r ? this.prevObject : this.prevObject.filter(r))
        }
    }), S.each({
        parent: function(r) {
            var o = r.parentNode;
            return o && 11 !== o.nodeType ? o : null
        },
        parents: function(r) {
            return h(r, "parentNode")
        },
        parentsUntil: function(r, o, f) {
            return h(r, "parentNode", f)
        },
        next: function(r) {
            return O(r, "nextSibling")
        },
        prev: function(r) {
            return O(r, "previousSibling")
        },
        nextAll: function(r) {
            return h(r, "nextSibling")
        },
        prevAll: function(r) {
            return h(r, "previousSibling")
        },
        nextUntil: function(r, o, f) {
            return h(r, "nextSibling", f)
        },
        prevUntil: function(r, o, f) {
            return h(r, "previousSibling", f)
        },
        siblings: function(r) {
            return T((r.parentNode || {}).firstChild, r)
        },
        children: function(r) {
            return T(r.firstChild)
        },
        contents: function(r) {
            return null != r.contentDocument && d(r.contentDocument) ? r.contentDocument : (A(r, "template") && (r = r.content || r), S.merge([], r.childNodes))
        }
    }, (function(r, o) {
        S.fn[r] = function(f, d) {
            var g = S.map(this, o, f);
            return "Until" !== r.slice(-5) && (d = f), d && "string" == typeof d && (g = S.filter(d, g)), 1 < this.length && (ee[r] || S.uniqueSort(g), Q.test(r) && g.reverse()), this.pushStack(g)
        }
    }));
    var te = /[^\x20\t\r\n\f]+/g;

    function R(r) {
        return r
    }

    function M(r) {
        throw r
    }

    function I(r, o, f, d) {
        var g;
        try {
            r && m(g = r.promise) ? g.call(r).done(o).fail(f) : r && m(g = r.then) ? g.call(r, o, f) : o.apply(void 0, [r].slice(d))
        } catch (r) {
            f.apply(void 0, [r])
        }
    }
    S.Callbacks = function(r) {
        var o, f;
        r = "string" == typeof r ? (o = r, f = {}, S.each(o.match(te) || [], (function(r, o) {
            f[o] = !0
        })), f) : S.extend({}, r);
        var d, g, v, y, C = [],
            E = [],
            k = -1,
            c = function() {
                for (y = y || r.once, v = d = !0; E.length; k = -1)
                    for (g = E.shift(); ++k < C.length;) !1 === C[k].apply(g[0], g[1]) && r.stopOnFalse && (k = C.length, g = !1);
                r.memory || (g = !1), d = !1, y && (C = g ? [] : "")
            },
            N = {
                add: function() {
                    return C && (g && !d && (k = C.length - 1, E.push(g)), function n(o) {
                        S.each(o, (function(o, f) {
                            m(f) ? r.unique && N.has(f) || C.push(f) : f && f.length && "string" !== w(f) && n(f)
                        }))
                    }(arguments), g && !d && c()), this
                },
                remove: function() {
                    return S.each(arguments, (function(r, o) {
                        for (var f; - 1 < (f = S.inArray(o, C, f));) C.splice(f, 1), f <= k && k--
                    })), this
                },
                has: function(r) {
                    return r ? -1 < S.inArray(r, C) : 0 < C.length
                },
                empty: function() {
                    return C && (C = []), this
                },
                disable: function() {
                    return y = E = [], C = g = "", this
                },
                disabled: function() {
                    return !C
                },
                lock: function() {
                    return y = E = [], g || d || (C = g = ""), this
                },
                locked: function() {
                    return !!y
                },
                fireWith: function(r, o) {
                    return y || (o = [r, (o = o || []).slice ? o.slice() : o], E.push(o), d || c()), this
                },
                fire: function() {
                    return N.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!v
                }
            };
        return N
    }, S.extend({
        Deferred: function(o) {
            var f = [
                    ["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2],
                    ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]
                ],
                d = "pending",
                g = {
                    state: function() {
                        return d
                    },
                    always: function() {
                        return v.done(arguments).fail(arguments), this
                    },
                    catch: function(r) {
                        return g.then(null, r)
                    },
                    pipe: function() {
                        var r = arguments;
                        return S.Deferred((function(o) {
                            S.each(f, (function(f, d) {
                                var g = m(r[d[4]]) && r[d[4]];
                                v[d[1]]((function() {
                                    var r = g && g.apply(this, arguments);
                                    r && m(r.promise) ? r.promise().progress(o.notify).done(o.resolve).fail(o.reject) : o[d[0] + "With"](this, g ? [r] : arguments)
                                }))
                            })), r = null
                        })).promise()
                    },
                    then: function(o, d, g) {
                        var v = 0;

                        function l(o, f, d, g) {
                            return function() {
                                var y = this,
                                    C = arguments,
                                    e = function() {
                                        var r, E;
                                        if (!(o < v)) {
                                            if ((r = d.apply(y, C)) === f.promise()) throw new TypeError("Thenable self-resolution");
                                            E = r && ("object" == typeof r || "function" == typeof r) && r.then, m(E) ? g ? E.call(r, l(v, f, R, g), l(v, f, M, g)) : (v++, E.call(r, l(v, f, R, g), l(v, f, M, g), l(v, f, R, f.notifyWith))) : (d !== R && (y = void 0, C = [r]), (g || f.resolveWith)(y, C))
                                        }
                                    },
                                    E = g ? e : function() {
                                        try {
                                            e()
                                        } catch (r) {
                                            S.Deferred.exceptionHook && S.Deferred.exceptionHook(r, E.stackTrace), v <= o + 1 && (d !== M && (y = void 0, C = [r]), f.rejectWith(y, C))
                                        }
                                    };
                                o ? E() : (S.Deferred.getStackHook && (E.stackTrace = S.Deferred.getStackHook()), r.setTimeout(E))
                            }
                        }
                        return S.Deferred((function(r) {
                            f[0][3].add(l(0, r, m(g) ? g : R, r.notifyWith)), f[1][3].add(l(0, r, m(o) ? o : R)), f[2][3].add(l(0, r, m(d) ? d : M))
                        })).promise()
                    },
                    promise: function(r) {
                        return null != r ? S.extend(r, g) : g
                    }
                },
                v = {};
            return S.each(f, (function(r, o) {
                var y = o[2],
                    C = o[5];
                g[o[1]] = y.add, C && y.add((function() {
                    d = C
                }), f[3 - r][2].disable, f[3 - r][3].disable, f[0][2].lock, f[0][3].lock), y.add(o[3].fire), v[o[0]] = function() {
                    return v[o[0] + "With"](this === v ? void 0 : this, arguments), this
                }, v[o[0] + "With"] = y.fireWith
            })), g.promise(v), o && o.call(v, v), v
        },
        when: function(r) {
            var o = arguments.length,
                f = o,
                d = Array(f),
                v = g.call(arguments),
                y = S.Deferred(),
                a = function(r) {
                    return function(f) {
                        d[r] = this, v[r] = 1 < arguments.length ? g.call(arguments) : f, --o || y.resolveWith(d, v)
                    }
                };
            if (o <= 1 && (I(r, y.done(a(f)).resolve, y.reject, !o), "pending" === y.state() || m(v[f] && v[f].then))) return y.then();
            for (; f--;) I(v[f], a(f), y.reject);
            return y.promise()
        }
    });
    var re = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    S.Deferred.exceptionHook = function(o, f) {
        r.console && r.console.warn && o && re.test(o.name) && r.console.warn("jQuery.Deferred exception: " + o.message, o.stack, f)
    }, S.readyException = function(o) {
        r.setTimeout((function() {
            throw o
        }))
    };
    var De = S.Deferred();

    function B() {
        H.removeEventListener("DOMContentLoaded", B), r.removeEventListener("load", B), S.ready()
    }
    S.fn.ready = function(r) {
        return De.then(r).catch((function(r) {
            S.readyException(r)
        })), this
    }, S.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(r) {
            (!0 === r ? --S.readyWait : S.isReady) || (S.isReady = !0) !== r && 0 < --S.readyWait || De.resolveWith(H, [S])
        }
    }), S.ready.then = De.then, "complete" === H.readyState || "loading" !== H.readyState && !H.documentElement.doScroll ? r.setTimeout(S.ready) : (H.addEventListener("DOMContentLoaded", B), r.addEventListener("load", B));
    var $ = function(r, o, f, d, g, v, y) {
            var C = 0,
                E = r.length,
                k = null == f;
            if ("object" === w(f))
                for (C in g = !0, f) $(r, o, C, f[C], !0, v, y);
            else if (void 0 !== d && (g = !0, m(d) || (y = !0), k && (y ? (o.call(r, d), o = null) : (k = o, o = function(r, o, f) {
                    return k.call(S(r), f)
                })), o))
                for (; C < E; C++) o(r[C], f, y ? d : d.call(r[C], C, o(r[C], f)));
            return g ? r : k ? o.call(r) : E ? o(r[0], f) : v
        },
        Ne = /^-ms-/,
        je = /-([a-z])/g;

    function U(r, o) {
        return o.toUpperCase()
    }

    function X(r) {
        return r.replace(Ne, "ms-").replace(je, U)
    }
    var V = function(r) {
        return 1 === r.nodeType || 9 === r.nodeType || !+r.nodeType
    };

    function G() {
        this.expando = S.expando + G.uid++
    }
    G.uid = 1, G.prototype = {
        cache: function(r) {
            var o = r[this.expando];
            return o || (o = {}, V(r) && (r.nodeType ? r[this.expando] = o : Object.defineProperty(r, this.expando, {
                value: o,
                configurable: !0
            }))), o
        },
        set: function(r, o, f) {
            var d, g = this.cache(r);
            if ("string" == typeof o) g[X(o)] = f;
            else
                for (d in o) g[X(d)] = o[d];
            return g
        },
        get: function(r, o) {
            return void 0 === o ? this.cache(r) : r[this.expando] && r[this.expando][X(o)]
        },
        access: function(r, o, f) {
            return void 0 === o || o && "string" == typeof o && void 0 === f ? this.get(r, o) : (this.set(r, o, f), void 0 !== f ? f : o)
        },
        remove: function(r, o) {
            var f, d = r[this.expando];
            if (void 0 !== d) {
                if (void 0 !== o) {
                    f = (o = Array.isArray(o) ? o.map(X) : (o = X(o)) in d ? [o] : o.match(te) || []).length;
                    for (; f--;) delete d[o[f]]
                }(void 0 === o || S.isEmptyObject(d)) && (r.nodeType ? r[this.expando] = void 0 : delete r[this.expando])
            }
        },
        hasData: function(r) {
            var o = r[this.expando];
            return void 0 !== o && !S.isEmptyObject(o)
        }
    };
    var Me = new G,
        Fe = new G,
        _e = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ze = /[A-Z]/g;

    function Z(r, o, f) {
        var d, g;
        if (void 0 === f && 1 === r.nodeType)
            if (d = "data-" + o.replace(ze, "-$&").toLowerCase(), "string" == typeof(f = r.getAttribute(d))) {
                try {
                    f = "true" === (g = f) || "false" !== g && ("null" === g ? null : g === +g + "" ? +g : _e.test(g) ? JSON.parse(g) : g)
                } catch (r) {}
                Fe.set(r, o, f)
            } else f = void 0;
        return f
    }
    S.extend({
        hasData: function(r) {
            return Fe.hasData(r) || Me.hasData(r)
        },
        data: function(r, o, f) {
            return Fe.access(r, o, f)
        },
        removeData: function(r, o) {
            Fe.remove(r, o)
        },
        _data: function(r, o, f) {
            return Me.access(r, o, f)
        },
        _removeData: function(r, o) {
            Me.remove(r, o)
        }
    }), S.fn.extend({
        data: function(r, o) {
            var f, d, g, v = this[0],
                y = v && v.attributes;
            if (void 0 === r) {
                if (this.length && (g = Fe.get(v), 1 === v.nodeType && !Me.get(v, "hasDataAttrs"))) {
                    for (f = y.length; f--;) y[f] && 0 === (d = y[f].name).indexOf("data-") && (d = X(d.slice(5)), Z(v, d, g[d]));
                    Me.set(v, "hasDataAttrs", !0)
                }
                return g
            }
            return "object" == typeof r ? this.each((function() {
                Fe.set(this, r)
            })) : $(this, (function(o) {
                var f;
                if (v && void 0 === o) return void 0 !== (f = Fe.get(v, r)) || void 0 !== (f = Z(v, r)) ? f : void 0;
                this.each((function() {
                    Fe.set(this, r, o)
                }))
            }), null, o, 1 < arguments.length, null, !0)
        },
        removeData: function(r) {
            return this.each((function() {
                Fe.remove(this, r)
            }))
        }
    }), S.extend({
        queue: function(r, o, f) {
            var d;
            if (r) return o = (o || "fx") + "queue", d = Me.get(r, o), f && (!d || Array.isArray(f) ? d = Me.access(r, o, S.makeArray(f)) : d.push(f)), d || []
        },
        dequeue: function(r, o) {
            o = o || "fx";
            var f = S.queue(r, o),
                d = f.length,
                g = f.shift(),
                v = S._queueHooks(r, o);
            "inprogress" === g && (g = f.shift(), d--), g && ("fx" === o && f.unshift("inprogress"), delete v.stop, g.call(r, (function() {
                S.dequeue(r, o)
            }), v)), !d && v && v.empty.fire()
        },
        _queueHooks: function(r, o) {
            var f = o + "queueHooks";
            return Me.get(r, f) || Me.access(r, f, {
                empty: S.Callbacks("once memory").add((function() {
                    Me.remove(r, [o + "queue", f])
                }))
            })
        }
    }), S.fn.extend({
        queue: function(r, o) {
            var f = 2;
            return "string" != typeof r && (o = r, r = "fx", f--), arguments.length < f ? S.queue(this[0], r) : void 0 === o ? this : this.each((function() {
                var f = S.queue(this, r, o);
                S._queueHooks(this, r), "fx" === r && "inprogress" !== f[0] && S.dequeue(this, r)
            }))
        },
        dequeue: function(r) {
            return this.each((function() {
                S.dequeue(this, r)
            }))
        },
        clearQueue: function(r) {
            return this.queue(r || "fx", [])
        },
        promise: function(r, o) {
            var f, d = 1,
                g = S.Deferred(),
                v = this,
                y = this.length,
                s = function() {
                    --d || g.resolveWith(v, [v])
                };
            for ("string" != typeof r && (o = r, r = void 0), r = r || "fx"; y--;)(f = Me.get(v[y], r + "queueHooks")) && f.empty && (d++, f.empty.add(s));
            return s(), g.promise(o)
        }
    });
    var Ue = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ge = new RegExp("^(?:([+-])=|)(" + Ue + ")([a-z%]*)$", "i"),
        Ve = ["Top", "Right", "Bottom", "Left"],
        Ye = H.documentElement,
        ie = function(r) {
            return S.contains(r.ownerDocument, r)
        },
        Qe = {
            composed: !0
        };
    Ye.getRootNode && (ie = function(r) {
        return S.contains(r.ownerDocument, r) || r.getRootNode(Qe) === r.ownerDocument
    });
    var ae = function(r, o) {
        return "none" === (r = o || r).style.display || "" === r.style.display && ie(r) && "none" === S.css(r, "display")
    };

    function se(r, o, f, d) {
        var g, v, y = 20,
            C = d ? function() {
                return d.cur()
            } : function() {
                return S.css(r, o, "")
            },
            E = C(),
            k = f && f[3] || (S.cssNumber[o] ? "" : "px"),
            N = r.nodeType && (S.cssNumber[o] || "px" !== k && +E) && Ge.exec(S.css(r, o));
        if (N && N[3] !== k) {
            for (E /= 2, k = k || N[3], N = +E || 1; y--;) S.style(r, o, N + k), (1 - v) * (1 - (v = C() / E || .5)) <= 0 && (y = 0), N /= v;
            N *= 2, S.style(r, o, N + k), f = f || []
        }
        return f && (N = +N || +E || 0, g = f[1] ? N + (f[1] + 1) * f[2] : +f[2], d && (d.unit = k, d.start = N, d.end = g)), g
    }
    var tt = {};

    function le(r, o) {
        for (var f, d, g, v, y, C, E, k = [], N = 0, j = r.length; N < j; N++)(d = r[N]).style && (f = d.style.display, o ? ("none" === f && (k[N] = Me.get(d, "display") || null, k[N] || (d.style.display = "")), "" === d.style.display && ae(d) && (k[N] = (E = y = v = void 0, y = (g = d).ownerDocument, C = g.nodeName, (E = tt[C]) || (v = y.body.appendChild(y.createElement(C)), E = S.css(v, "display"), v.parentNode.removeChild(v), "none" === E && (E = "block"), tt[C] = E)))) : "none" !== f && (k[N] = "none", Me.set(d, "display", f)));
        for (N = 0; N < j; N++) null != k[N] && (r[N].style.display = k[N]);
        return r
    }
    S.fn.extend({
        show: function() {
            return le(this, !0)
        },
        hide: function() {
            return le(this)
        },
        toggle: function(r) {
            return "boolean" == typeof r ? r ? this.show() : this.hide() : this.each((function() {
                ae(this) ? S(this).show() : S(this).hide()
            }))
        }
    });
    var nt, rt, it = /^(?:checkbox|radio)$/i,
        ot = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        at = /^$|^module$|\/(?:java|ecma)script/i;
    nt = H.createDocumentFragment().appendChild(H.createElement("div")), (rt = H.createElement("input")).setAttribute("type", "radio"), rt.setAttribute("checked", "checked"), rt.setAttribute("name", "t"), nt.appendChild(rt), L.checkClone = nt.cloneNode(!0).cloneNode(!0).lastChild.checked, nt.innerHTML = "<textarea>x</textarea>", L.noCloneChecked = !!nt.cloneNode(!0).lastChild.defaultValue, nt.innerHTML = "<option></option>", L.option = !!nt.lastChild;
    var pt = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function ve(r, o) {
        var f;
        return f = void 0 !== r.getElementsByTagName ? r.getElementsByTagName(o || "*") : void 0 !== r.querySelectorAll ? r.querySelectorAll(o || "*") : [], void 0 === o || o && A(r, o) ? S.merge([r], f) : f
    }

    function ye(r, o) {
        for (var f = 0, d = r.length; f < d; f++) Me.set(r[f], "globalEval", !o || Me.get(o[f], "globalEval"))
    }
    pt.tbody = pt.tfoot = pt.colgroup = pt.caption = pt.thead, pt.th = pt.td, L.option || (pt.optgroup = pt.option = [1, "<select multiple='multiple'>", "</select>"]);
    var dt = /<|&#?\w+;/;

    function xe(r, o, f, d, g) {
        for (var v, y, C, E, k, N, j = o.createDocumentFragment(), q = [], L = 0, H = r.length; L < H; L++)
            if ((v = r[L]) || 0 === v)
                if ("object" === w(v)) S.merge(q, v.nodeType ? [v] : v);
                else if (dt.test(v)) {
            for (y = y || j.appendChild(o.createElement("div")), C = (ot.exec(v) || ["", ""])[1].toLowerCase(), E = pt[C] || pt._default, y.innerHTML = E[1] + S.htmlPrefilter(v) + E[2], N = E[0]; N--;) y = y.lastChild;
            S.merge(q, y.childNodes), (y = j.firstChild).textContent = ""
        } else q.push(o.createTextNode(v));
        for (j.textContent = "", L = 0; v = q[L++];)
            if (d && -1 < S.inArray(v, d)) g && g.push(v);
            else if (k = ie(v), y = ve(j.appendChild(v), "script"), k && ye(y), f)
            for (N = 0; v = y[N++];) at.test(v.type || "") && f.push(v);
        return j
    }
    var ht = /^key/,
        gt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        xt = /^([^.]*)(?:\.(.+)|)/;

    function Ce() {
        return !0
    }

    function Ee() {
        return !1
    }

    function Se(r, o) {
        return r === function() {
            try {
                return H.activeElement
            } catch (r) {}
        }() == ("focus" === o)
    }

    function ke(r, o, f, d, g, v) {
        var y, C;
        if ("object" == typeof o) {
            for (C in "string" != typeof f && (d = d || f, f = void 0), o) ke(r, C, f, d, o[C], v);
            return r
        }
        if (null == d && null == g ? (g = f, d = f = void 0) : null == g && ("string" == typeof f ? (g = d, d = void 0) : (g = d, d = f, f = void 0)), !1 === g) g = Ee;
        else if (!g) return r;
        return 1 === v && (y = g, (g = function(r) {
            return S().off(r), y.apply(this, arguments)
        }).guid = y.guid || (y.guid = S.guid++)), r.each((function() {
            S.event.add(this, o, g, d, f)
        }))
    }

    function Ae(r, o, f) {
        f ? (Me.set(r, o, !1), S.event.add(r, o, {
            namespace: !1,
            handler: function(r) {
                var d, v, y = Me.get(this, o);
                if (1 & r.isTrigger && this[o]) {
                    if (y.length)(S.event.special[o] || {}).delegateType && r.stopPropagation();
                    else if (y = g.call(arguments), Me.set(this, o, y), d = f(this, o), this[o](), y !== (v = Me.get(this, o)) || d ? Me.set(this, o, !1) : v = {}, y !== v) return r.stopImmediatePropagation(), r.preventDefault(), v.value
                } else y.length && (Me.set(this, o, {
                    value: S.event.trigger(S.extend(y[0], S.Event.prototype), y.slice(1), this)
                }), r.stopImmediatePropagation())
            }
        })) : void 0 === Me.get(r, o) && S.event.add(r, o, Ce)
    }
    S.event = {
        global: {},
        add: function(r, o, f, d, g) {
            var v, y, C, E, k, N, j, q, L, H, F, W = Me.get(r);
            if (V(r))
                for (f.handler && (f = (v = f).handler, g = v.selector), g && S.find.matchesSelector(Ye, g), f.guid || (f.guid = S.guid++), (E = W.events) || (E = W.events = Object.create(null)), (y = W.handle) || (y = W.handle = function(o) {
                        return void 0 !== S && S.event.triggered !== o.type ? S.event.dispatch.apply(r, arguments) : void 0
                    }), k = (o = (o || "").match(te) || [""]).length; k--;) L = F = (C = xt.exec(o[k]) || [])[1], H = (C[2] || "").split(".").sort(), L && (j = S.event.special[L] || {}, L = (g ? j.delegateType : j.bindType) || L, j = S.event.special[L] || {}, N = S.extend({
                    type: L,
                    origType: F,
                    data: d,
                    handler: f,
                    guid: f.guid,
                    selector: g,
                    needsContext: g && S.expr.match.needsContext.test(g),
                    namespace: H.join(".")
                }, v), (q = E[L]) || ((q = E[L] = []).delegateCount = 0, j.setup && !1 !== j.setup.call(r, d, H, y) || r.addEventListener && r.addEventListener(L, y)), j.add && (j.add.call(r, N), N.handler.guid || (N.handler.guid = f.guid)), g ? q.splice(q.delegateCount++, 0, N) : q.push(N), S.event.global[L] = !0)
        },
        remove: function(r, o, f, d, g) {
            var v, y, C, E, k, N, j, q, L, H, F, W = Me.hasData(r) && Me.get(r);
            if (W && (E = W.events)) {
                for (k = (o = (o || "").match(te) || [""]).length; k--;)
                    if (L = F = (C = xt.exec(o[k]) || [])[1], H = (C[2] || "").split(".").sort(), L) {
                        for (j = S.event.special[L] || {}, q = E[L = (d ? j.delegateType : j.bindType) || L] || [], C = C[2] && new RegExp("(^|\\.)" + H.join("\\.(?:.*\\.|)") + "(\\.|$)"), y = v = q.length; v--;) N = q[v], !g && F !== N.origType || f && f.guid !== N.guid || C && !C.test(N.namespace) || d && d !== N.selector && ("**" !== d || !N.selector) || (q.splice(v, 1), N.selector && q.delegateCount--, j.remove && j.remove.call(r, N));
                        y && !q.length && (j.teardown && !1 !== j.teardown.call(r, H, W.handle) || S.removeEvent(r, L, W.handle), delete E[L])
                    } else
                        for (L in E) S.event.remove(r, L + o[k], f, d, !0);
                S.isEmptyObject(E) && Me.remove(r, "handle events")
            }
        },
        dispatch: function(r) {
            var o, f, d, g, v, y, C = new Array(arguments.length),
                E = S.event.fix(r),
                k = (Me.get(this, "events") || Object.create(null))[E.type] || [],
                N = S.event.special[E.type] || {};
            for (C[0] = E, o = 1; o < arguments.length; o++) C[o] = arguments[o];
            if (E.delegateTarget = this, !N.preDispatch || !1 !== N.preDispatch.call(this, E)) {
                for (y = S.event.handlers.call(this, E, k), o = 0;
                    (g = y[o++]) && !E.isPropagationStopped();)
                    for (E.currentTarget = g.elem, f = 0;
                        (v = g.handlers[f++]) && !E.isImmediatePropagationStopped();) E.rnamespace && !1 !== v.namespace && !E.rnamespace.test(v.namespace) || (E.handleObj = v, E.data = v.data, void 0 !== (d = ((S.event.special[v.origType] || {}).handle || v.handler).apply(g.elem, C)) && !1 === (E.result = d) && (E.preventDefault(), E.stopPropagation()));
                return N.postDispatch && N.postDispatch.call(this, E), E.result
            }
        },
        handlers: function(r, o) {
            var f, d, g, v, y, C = [],
                E = o.delegateCount,
                k = r.target;
            if (E && k.nodeType && !("click" === r.type && 1 <= r.button))
                for (; k !== this; k = k.parentNode || this)
                    if (1 === k.nodeType && ("click" !== r.type || !0 !== k.disabled)) {
                        for (v = [], y = {}, f = 0; f < E; f++) void 0 === y[g = (d = o[f]).selector + " "] && (y[g] = d.needsContext ? -1 < S(g, this).index(k) : S.find(g, this, null, [k]).length), y[g] && v.push(d);
                        v.length && C.push({
                            elem: k,
                            handlers: v
                        })
                    }
            return k = this, E < o.length && C.push({
                elem: k,
                handlers: o.slice(E)
            }), C
        },
        addProp: function(r, o) {
            Object.defineProperty(S.Event.prototype, r, {
                enumerable: !0,
                configurable: !0,
                get: m(o) ? function() {
                    if (this.originalEvent) return o(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[r]
                },
                set: function(o) {
                    Object.defineProperty(this, r, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: o
                    })
                }
            })
        },
        fix: function(r) {
            return r[S.expando] ? r : new S.Event(r)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(r) {
                    var o = this || r;
                    return it.test(o.type) && o.click && A(o, "input") && Ae(o, "click", Ce), !1
                },
                trigger: function(r) {
                    var o = this || r;
                    return it.test(o.type) && o.click && A(o, "input") && Ae(o, "click"), !0
                },
                _default: function(r) {
                    var o = r.target;
                    return it.test(o.type) && o.click && A(o, "input") && Me.get(o, "click") || A(o, "a")
                }
            },
            beforeunload: {
                postDispatch: function(r) {
                    void 0 !== r.result && r.originalEvent && (r.originalEvent.returnValue = r.result)
                }
            }
        }
    }, S.removeEvent = function(r, o, f) {
        r.removeEventListener && r.removeEventListener(o, f)
    }, S.Event = function(r, o) {
        if (!(this instanceof S.Event)) return new S.Event(r, o);
        r && r.type ? (this.originalEvent = r, this.type = r.type, this.isDefaultPrevented = r.defaultPrevented || void 0 === r.defaultPrevented && !1 === r.returnValue ? Ce : Ee, this.target = r.target && 3 === r.target.nodeType ? r.target.parentNode : r.target, this.currentTarget = r.currentTarget, this.relatedTarget = r.relatedTarget) : this.type = r, o && S.extend(this, o), this.timeStamp = r && r.timeStamp || Date.now(), this[S.expando] = !0
    }, S.Event.prototype = {
        constructor: S.Event,
        isDefaultPrevented: Ee,
        isPropagationStopped: Ee,
        isImmediatePropagationStopped: Ee,
        isSimulated: !1,
        preventDefault: function() {
            var r = this.originalEvent;
            this.isDefaultPrevented = Ce, r && !this.isSimulated && r.preventDefault()
        },
        stopPropagation: function() {
            var r = this.originalEvent;
            this.isPropagationStopped = Ce, r && !this.isSimulated && r.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var r = this.originalEvent;
            this.isImmediatePropagationStopped = Ce, r && !this.isSimulated && r.stopImmediatePropagation(), this.stopPropagation()
        }
    }, S.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(r) {
            var o = r.button;
            return null == r.which && ht.test(r.type) ? null != r.charCode ? r.charCode : r.keyCode : !r.which && void 0 !== o && gt.test(r.type) ? 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0 : r.which
        }
    }, S.event.addProp), S.each({
        focus: "focusin",
        blur: "focusout"
    }, (function(r, o) {
        S.event.special[r] = {
            setup: function() {
                return Ae(this, r, Se), !1
            },
            trigger: function() {
                return Ae(this, r), !0
            },
            delegateType: o
        }
    })), S.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, (function(r, o) {
        S.event.special[r] = {
            delegateType: o,
            bindType: o,
            handle: function(r) {
                var f, d = r.relatedTarget,
                    g = r.handleObj;
                return d && (d === this || S.contains(this, d)) || (r.type = g.origType, f = g.handler.apply(this, arguments), r.type = o), f
            }
        }
    })), S.fn.extend({
        on: function(r, o, f, d) {
            return ke(this, r, o, f, d)
        },
        one: function(r, o, f, d) {
            return ke(this, r, o, f, d, 1)
        },
        off: function(r, o, f) {
            var d, g;
            if (r && r.preventDefault && r.handleObj) return d = r.handleObj, S(r.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof r) {
                for (g in r) this.off(g, o, r[g]);
                return this
            }
            return !1 !== o && "function" != typeof o || (f = o, o = void 0), !1 === f && (f = Ee), this.each((function() {
                S.event.remove(this, r, f, o)
            }))
        }
    });
    var bt = /<script|<style|<link/i,
        Tt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ct = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function qe(r, o) {
        return A(r, "table") && A(11 !== o.nodeType ? o : o.firstChild, "tr") && S(r).children("tbody")[0] || r
    }

    function Le(r) {
        return r.type = (null !== r.getAttribute("type")) + "/" + r.type, r
    }

    function He(r) {
        return "true/" === (r.type || "").slice(0, 5) ? r.type = r.type.slice(5) : r.removeAttribute("type"), r
    }

    function Oe(r, o) {
        var f, d, g, v, y, C;
        if (1 === o.nodeType) {
            if (Me.hasData(r) && (C = Me.get(r).events))
                for (g in Me.remove(o, "handle events"), C)
                    for (f = 0, d = C[g].length; f < d; f++) S.event.add(o, g, C[g][f]);
            Fe.hasData(r) && (v = Fe.access(r), y = S.extend({}, v), Fe.set(o, y))
        }
    }

    function Pe(r, o, f, d) {
        o = v(o);
        var g, y, C, E, k, N, j = 0,
            q = r.length,
            H = q - 1,
            F = o[0],
            W = m(F);
        if (W || 1 < q && "string" == typeof F && !L.checkClone && Tt.test(F)) return r.each((function(g) {
            var v = r.eq(g);
            W && (o[0] = F.call(this, g, v.html())), Pe(v, o, f, d)
        }));
        if (q && (y = (g = xe(o, r[0].ownerDocument, !1, r, d)).firstChild, 1 === g.childNodes.length && (g = y), y || d)) {
            for (E = (C = S.map(ve(g, "script"), Le)).length; j < q; j++) k = g, j !== H && (k = S.clone(k, !0, !0), E && S.merge(C, ve(k, "script"))), f.call(r[j], k, j);
            if (E)
                for (N = C[C.length - 1].ownerDocument, S.map(C, He), j = 0; j < E; j++) k = C[j], at.test(k.type || "") && !Me.access(k, "globalEval") && S.contains(N, k) && (k.src && "module" !== (k.type || "").toLowerCase() ? S._evalUrl && !k.noModule && S._evalUrl(k.src, {
                    nonce: k.nonce || k.getAttribute("nonce")
                }, N) : b(k.textContent.replace(Ct, ""), k, N))
        }
        return r
    }

    function Re(r, o, f) {
        for (var d, g = o ? S.filter(o, r) : r, v = 0; null != (d = g[v]); v++) f || 1 !== d.nodeType || S.cleanData(ve(d)), d.parentNode && (f && ie(d) && ye(ve(d, "script")), d.parentNode.removeChild(d));
        return r
    }
    S.extend({
        htmlPrefilter: function(r) {
            return r
        },
        clone: function(r, o, f) {
            var d, g, v, y, C, E, k, N = r.cloneNode(!0),
                j = ie(r);
            if (!(L.noCloneChecked || 1 !== r.nodeType && 11 !== r.nodeType || S.isXMLDoc(r)))
                for (y = ve(N), d = 0, g = (v = ve(r)).length; d < g; d++) C = v[d], "input" === (k = (E = y[d]).nodeName.toLowerCase()) && it.test(C.type) ? E.checked = C.checked : "input" !== k && "textarea" !== k || (E.defaultValue = C.defaultValue);
            if (o)
                if (f)
                    for (v = v || ve(r), y = y || ve(N), d = 0, g = v.length; d < g; d++) Oe(v[d], y[d]);
                else Oe(r, N);
            return 0 < (y = ve(N, "script")).length && ye(y, !j && ve(r, "script")), N
        },
        cleanData: function(r) {
            for (var o, f, d, g = S.event.special, v = 0; void 0 !== (f = r[v]); v++)
                if (V(f)) {
                    if (o = f[Me.expando]) {
                        if (o.events)
                            for (d in o.events) g[d] ? S.event.remove(f, d) : S.removeEvent(f, d, o.handle);
                        f[Me.expando] = void 0
                    }
                    f[Fe.expando] && (f[Fe.expando] = void 0)
                }
        }
    }), S.fn.extend({
        detach: function(r) {
            return Re(this, r, !0)
        },
        remove: function(r) {
            return Re(this, r)
        },
        text: function(r) {
            return $(this, (function(r) {
                return void 0 === r ? S.text(this) : this.empty().each((function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = r)
                }))
            }), null, r, arguments.length)
        },
        append: function() {
            return Pe(this, arguments, (function(r) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || qe(this, r).appendChild(r)
            }))
        },
        prepend: function() {
            return Pe(this, arguments, (function(r) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var o = qe(this, r);
                    o.insertBefore(r, o.firstChild)
                }
            }))
        },
        before: function() {
            return Pe(this, arguments, (function(r) {
                this.parentNode && this.parentNode.insertBefore(r, this)
            }))
        },
        after: function() {
            return Pe(this, arguments, (function(r) {
                this.parentNode && this.parentNode.insertBefore(r, this.nextSibling)
            }))
        },
        empty: function() {
            for (var r, o = 0; null != (r = this[o]); o++) 1 === r.nodeType && (S.cleanData(ve(r, !1)), r.textContent = "");
            return this
        },
        clone: function(r, o) {
            return r = null != r && r, o = null == o ? r : o, this.map((function() {
                return S.clone(this, r, o)
            }))
        },
        html: function(r) {
            return $(this, (function(r) {
                var o = this[0] || {},
                    f = 0,
                    d = this.length;
                if (void 0 === r && 1 === o.nodeType) return o.innerHTML;
                if ("string" == typeof r && !bt.test(r) && !pt[(ot.exec(r) || ["", ""])[1].toLowerCase()]) {
                    r = S.htmlPrefilter(r);
                    try {
                        for (; f < d; f++) 1 === (o = this[f] || {}).nodeType && (S.cleanData(ve(o, !1)), o.innerHTML = r);
                        o = 0
                    } catch (r) {}
                }
                o && this.empty().append(r)
            }), null, r, arguments.length)
        },
        replaceWith: function() {
            var r = [];
            return Pe(this, arguments, (function(o) {
                var f = this.parentNode;
                S.inArray(this, r) < 0 && (S.cleanData(ve(this)), f && f.replaceChild(o, this))
            }), r)
        }
    }), S.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, (function(r, o) {
        S.fn[r] = function(r) {
            for (var f, d = [], g = S(r), v = g.length - 1, C = 0; C <= v; C++) f = C === v ? this : this.clone(!0), S(g[C])[o](f), y.apply(d, f.get());
            return this.pushStack(d)
        }
    }));
    var Et = new RegExp("^(" + Ue + ")(?!px)[a-z%]+$", "i"),
        Ie = function(o) {
            var f = o.ownerDocument.defaultView;
            return f && f.opener || (f = r), f.getComputedStyle(o)
        },
        We = function(r, o, f) {
            var d, g, v = {};
            for (g in o) v[g] = r.style[g], r.style[g] = o[g];
            for (g in d = f.call(r), o) r.style[g] = v[g];
            return d
        },
        At = new RegExp(Ve.join("|"), "i");

    function Be(r, o, f) {
        var d, g, v, y, C = r.style;
        return (f = f || Ie(r)) && ("" !== (y = f.getPropertyValue(o) || f[o]) || ie(r) || (y = S.style(r, o)), !L.pixelBoxStyles() && Et.test(y) && At.test(o) && (d = C.width, g = C.minWidth, v = C.maxWidth, C.minWidth = C.maxWidth = C.width = y, y = f.width, C.width = d, C.minWidth = g, C.maxWidth = v)), void 0 !== y ? y + "" : y
    }

    function $e(r, o) {
        return {
            get: function() {
                if (!r()) return (this.get = o).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function e() {
            if (E) {
                C.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", E.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", Ye.appendChild(C).appendChild(E);
                var v = r.getComputedStyle(E);
                o = "1%" !== v.top, y = 12 === t(v.marginLeft), E.style.right = "60%", g = 36 === t(v.right), f = 36 === t(v.width), E.style.position = "absolute", d = 12 === t(E.offsetWidth / 3), Ye.removeChild(C), E = null
            }
        }

        function t(r) {
            return Math.round(parseFloat(r))
        }
        var o, f, d, g, v, y, C = H.createElement("div"),
            E = H.createElement("div");
        E.style && (E.style.backgroundClip = "content-box", E.cloneNode(!0).style.backgroundClip = "", L.clearCloneStyle = "content-box" === E.style.backgroundClip, S.extend(L, {
            boxSizingReliable: function() {
                return e(), f
            },
            pixelBoxStyles: function() {
                return e(), g
            },
            pixelPosition: function() {
                return e(), o
            },
            reliableMarginLeft: function() {
                return e(), y
            },
            scrollboxSize: function() {
                return e(), d
            },
            reliableTrDimensions: function() {
                var o, f, d, g;
                return null == v && (o = H.createElement("table"), f = H.createElement("tr"), d = H.createElement("div"), o.style.cssText = "position:absolute;left:-11111px", f.style.height = "1px", d.style.height = "9px", Ye.appendChild(o).appendChild(f).appendChild(d), g = r.getComputedStyle(f), v = 3 < parseInt(g.height), Ye.removeChild(o)), v
            }
        }))
    }();
    var St = ["Webkit", "Moz", "ms"],
        kt = H.createElement("div").style,
        Nt = {};

    function Xe(r) {
        return S.cssProps[r] || Nt[r] || (r in kt ? r : Nt[r] = function(r) {
            for (var o = r[0].toUpperCase() + r.slice(1), f = St.length; f--;)
                if ((r = St[f] + o) in kt) return r
        }(r) || r)
    }
    var jt = /^(none|table(?!-c[ea]).+)/,
        qt = /^--/,
        Lt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ht = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function Je(r, o, f) {
        var d = Ge.exec(o);
        return d ? Math.max(0, d[2] - (f || 0)) + (d[3] || "px") : o
    }

    function Ke(r, o, f, d, g, v) {
        var y = "width" === o ? 1 : 0,
            C = 0,
            E = 0;
        if (f === (d ? "border" : "content")) return 0;
        for (; y < 4; y += 2) "margin" === f && (E += S.css(r, f + Ve[y], !0, g)), d ? ("content" === f && (E -= S.css(r, "padding" + Ve[y], !0, g)), "margin" !== f && (E -= S.css(r, "border" + Ve[y] + "Width", !0, g))) : (E += S.css(r, "padding" + Ve[y], !0, g), "padding" !== f ? E += S.css(r, "border" + Ve[y] + "Width", !0, g) : C += S.css(r, "border" + Ve[y] + "Width", !0, g));
        return !d && 0 <= v && (E += Math.max(0, Math.ceil(r["offset" + o[0].toUpperCase() + o.slice(1)] - v - E - C - .5)) || 0), E
    }

    function Ze(r, o, f) {
        var d = Ie(r),
            g = (!L.boxSizingReliable() || f) && "border-box" === S.css(r, "boxSizing", !1, d),
            v = g,
            y = Be(r, o, d),
            C = "offset" + o[0].toUpperCase() + o.slice(1);
        if (Et.test(y)) {
            if (!f) return y;
            y = "auto"
        }
        return (!L.boxSizingReliable() && g || !L.reliableTrDimensions() && A(r, "tr") || "auto" === y || !parseFloat(y) && "inline" === S.css(r, "display", !1, d)) && r.getClientRects().length && (g = "border-box" === S.css(r, "boxSizing", !1, d), (v = C in r) && (y = r[C])), (y = parseFloat(y) || 0) + Ke(r, o, f || (g ? "border" : "content"), v, d, y) + "px"
    }

    function et(r, o, f, d, g) {
        return new et.prototype.init(r, o, f, d, g)
    }
    S.extend({
        cssHooks: {
            opacity: {
                get: function(r, o) {
                    if (o) {
                        var f = Be(r, "opacity");
                        return "" === f ? "1" : f
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(r, o, f, d) {
            if (r && 3 !== r.nodeType && 8 !== r.nodeType && r.style) {
                var g, v, y, C = X(o),
                    E = qt.test(o),
                    k = r.style;
                if (E || (o = Xe(C)), y = S.cssHooks[o] || S.cssHooks[C], void 0 === f) return y && "get" in y && void 0 !== (g = y.get(r, !1, d)) ? g : k[o];
                "string" == (v = typeof f) && (g = Ge.exec(f)) && g[1] && (f = se(r, o, g), v = "number"), null != f && f == f && ("number" !== v || E || (f += g && g[3] || (S.cssNumber[C] ? "" : "px")), L.clearCloneStyle || "" !== f || 0 !== o.indexOf("background") || (k[o] = "inherit"), y && "set" in y && void 0 === (f = y.set(r, f, d)) || (E ? k.setProperty(o, f) : k[o] = f))
            }
        },
        css: function(r, o, f, d) {
            var g, v, y, C = X(o);
            return qt.test(o) || (o = Xe(C)), (y = S.cssHooks[o] || S.cssHooks[C]) && "get" in y && (g = y.get(r, !0, f)), void 0 === g && (g = Be(r, o, d)), "normal" === g && o in Ht && (g = Ht[o]), "" === f || f ? (v = parseFloat(g), !0 === f || isFinite(v) ? v || 0 : g) : g
        }
    }), S.each(["height", "width"], (function(r, o) {
        S.cssHooks[o] = {
            get: function(r, f, d) {
                if (f) return !jt.test(S.css(r, "display")) || r.getClientRects().length && r.getBoundingClientRect().width ? Ze(r, o, d) : We(r, Lt, (function() {
                    return Ze(r, o, d)
                }))
            },
            set: function(r, f, d) {
                var g, v = Ie(r),
                    y = !L.scrollboxSize() && "absolute" === v.position,
                    C = (y || d) && "border-box" === S.css(r, "boxSizing", !1, v),
                    E = d ? Ke(r, o, d, C, v) : 0;
                return C && y && (E -= Math.ceil(r["offset" + o[0].toUpperCase() + o.slice(1)] - parseFloat(v[o]) - Ke(r, o, "border", !1, v) - .5)), E && (g = Ge.exec(f)) && "px" !== (g[3] || "px") && (r.style[o] = f, f = S.css(r, o)), Je(0, f, E)
            }
        }
    })), S.cssHooks.marginLeft = $e(L.reliableMarginLeft, (function(r, o) {
        if (o) return (parseFloat(Be(r, "marginLeft")) || r.getBoundingClientRect().left - We(r, {
            marginLeft: 0
        }, (function() {
            return r.getBoundingClientRect().left
        }))) + "px"
    })), S.each({
        margin: "",
        padding: "",
        border: "Width"
    }, (function(r, o) {
        S.cssHooks[r + o] = {
            expand: function(f) {
                for (var d = 0, g = {}, v = "string" == typeof f ? f.split(" ") : [f]; d < 4; d++) g[r + Ve[d] + o] = v[d] || v[d - 2] || v[0];
                return g
            }
        }, "margin" !== r && (S.cssHooks[r + o].set = Je)
    })), S.fn.extend({
        css: function(r, o) {
            return $(this, (function(r, o, f) {
                var d, g, v = {},
                    y = 0;
                if (Array.isArray(o)) {
                    for (d = Ie(r), g = o.length; y < g; y++) v[o[y]] = S.css(r, o[y], !1, d);
                    return v
                }
                return void 0 !== f ? S.style(r, o, f) : S.css(r, o)
            }), r, o, 1 < arguments.length)
        }
    }), ((S.Tween = et).prototype = {
        constructor: et,
        init: function(r, o, f, d, g, v) {
            this.elem = r, this.prop = f, this.easing = g || S.easing._default, this.options = o, this.start = this.now = this.cur(), this.end = d, this.unit = v || (S.cssNumber[f] ? "" : "px")
        },
        cur: function() {
            var r = et.propHooks[this.prop];
            return r && r.get ? r.get(this) : et.propHooks._default.get(this)
        },
        run: function(r) {
            var o, f = et.propHooks[this.prop];
            return this.options.duration ? this.pos = o = S.easing[this.easing](r, this.options.duration * r, 0, 1, this.options.duration) : this.pos = o = r, this.now = (this.end - this.start) * o + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), f && f.set ? f.set(this) : et.propHooks._default.set(this), this
        }
    }).init.prototype = et.prototype, (et.propHooks = {
        _default: {
            get: function(r) {
                var o;
                return 1 !== r.elem.nodeType || null != r.elem[r.prop] && null == r.elem.style[r.prop] ? r.elem[r.prop] : (o = S.css(r.elem, r.prop, "")) && "auto" !== o ? o : 0
            },
            set: function(r) {
                S.fx.step[r.prop] ? S.fx.step[r.prop](r) : 1 !== r.elem.nodeType || !S.cssHooks[r.prop] && null == r.elem.style[Xe(r.prop)] ? r.elem[r.prop] = r.now : S.style(r.elem, r.prop, r.now + r.unit)
            }
        }
    }).scrollTop = et.propHooks.scrollLeft = {
        set: function(r) {
            r.elem.nodeType && r.elem.parentNode && (r.elem[r.prop] = r.now)
        }
    }, S.easing = {
        linear: function(r) {
            return r
        },
        swing: function(r) {
            return .5 - Math.cos(r * Math.PI) / 2
        },
        _default: "swing"
    }, S.fx = et.prototype.init, S.fx.step = {};
    var Ot, Pt, Rt, Mt, It = /^(?:toggle|show|hide)$/,
        Wt = /queueHooks$/;

    function st() {
        Pt && (!1 === H.hidden && r.requestAnimationFrame ? r.requestAnimationFrame(st) : r.setTimeout(st, S.fx.interval), S.fx.tick())
    }

    function ut() {
        return r.setTimeout((function() {
            Ot = void 0
        })), Ot = Date.now()
    }

    function lt(r, o) {
        var f, d = 0,
            g = {
                height: r
            };
        for (o = o ? 1 : 0; d < 4; d += 2 - o) g["margin" + (f = Ve[d])] = g["padding" + f] = r;
        return o && (g.opacity = g.width = r), g
    }

    function ct(r, o, f) {
        for (var d, g = (ft.tweeners[o] || []).concat(ft.tweeners["*"]), v = 0, y = g.length; v < y; v++)
            if (d = g[v].call(f, o, r)) return d
    }

    function ft(r, o, f) {
        var d, g, v = 0,
            y = ft.prefilters.length,
            C = S.Deferred().always((function() {
                delete u.elem
            })),
            u = function() {
                if (g) return !1;
                for (var o = Ot || ut(), f = Math.max(0, E.startTime + E.duration - o), d = 1 - (f / E.duration || 0), v = 0, y = E.tweens.length; v < y; v++) E.tweens[v].run(d);
                return C.notifyWith(r, [E, d, f]), d < 1 && y ? f : (y || C.notifyWith(r, [E, 1, 0]), C.resolveWith(r, [E]), !1)
            },
            E = C.promise({
                elem: r,
                props: S.extend({}, o),
                opts: S.extend(!0, {
                    specialEasing: {},
                    easing: S.easing._default
                }, f),
                originalProperties: o,
                originalOptions: f,
                startTime: Ot || ut(),
                duration: f.duration,
                tweens: [],
                createTween: function(o, f) {
                    var d = S.Tween(r, E.opts, o, f, E.opts.specialEasing[o] || E.opts.easing);
                    return E.tweens.push(d), d
                },
                stop: function(o) {
                    var f = 0,
                        d = o ? E.tweens.length : 0;
                    if (g) return this;
                    for (g = !0; f < d; f++) E.tweens[f].run(1);
                    return o ? (C.notifyWith(r, [E, 1, 0]), C.resolveWith(r, [E, o])) : C.rejectWith(r, [E, o]), this
                }
            }),
            k = E.props;
        for (function(r, o) {
                var f, d, g, v, y;
                for (f in r)
                    if (g = o[d = X(f)], v = r[f], Array.isArray(v) && (g = v[1], v = r[f] = v[0]), f !== d && (r[d] = v, delete r[f]), (y = S.cssHooks[d]) && "expand" in y)
                        for (f in v = y.expand(v), delete r[d], v) f in r || (r[f] = v[f], o[f] = g);
                    else o[d] = g
            }(k, E.opts.specialEasing); v < y; v++)
            if (d = ft.prefilters[v].call(E, r, k, E.opts)) return m(d.stop) && (S._queueHooks(E.elem, E.opts.queue).stop = d.stop.bind(d)), d;
        return S.map(k, ct, E), m(E.opts.start) && E.opts.start.call(r, E), E.progress(E.opts.progress).done(E.opts.done, E.opts.complete).fail(E.opts.fail).always(E.opts.always), S.fx.timer(S.extend(u, {
            elem: r,
            anim: E,
            queue: E.opts.queue
        })), E
    }
    S.Animation = S.extend(ft, {
        tweeners: {
            "*": [function(r, o) {
                var f = this.createTween(r, o);
                return se(f.elem, r, Ge.exec(o), f), f
            }]
        },
        tweener: function(r, o) {
            m(r) ? (o = r, r = ["*"]) : r = r.match(te);
            for (var f, d = 0, g = r.length; d < g; d++) f = r[d], ft.tweeners[f] = ft.tweeners[f] || [], ft.tweeners[f].unshift(o)
        },
        prefilters: [function(r, o, f) {
            var d, g, v, y, C, E, k, N, j = "width" in o || "height" in o,
                q = this,
                L = {},
                H = r.style,
                F = r.nodeType && ae(r),
                W = Me.get(r, "fxshow");
            for (d in f.queue || (null == (y = S._queueHooks(r, "fx")).unqueued && (y.unqueued = 0, C = y.empty.fire, y.empty.fire = function() {
                    y.unqueued || C()
                }), y.unqueued++, q.always((function() {
                    q.always((function() {
                        y.unqueued--, S.queue(r, "fx").length || y.empty.fire()
                    }))
                }))), o)
                if (g = o[d], It.test(g)) {
                    if (delete o[d], v = v || "toggle" === g, g === (F ? "hide" : "show")) {
                        if ("show" !== g || !W || void 0 === W[d]) continue;
                        F = !0
                    }
                    L[d] = W && W[d] || S.style(r, d)
                }
            if ((E = !S.isEmptyObject(o)) || !S.isEmptyObject(L))
                for (d in j && 1 === r.nodeType && (f.overflow = [H.overflow, H.overflowX, H.overflowY], null == (k = W && W.display) && (k = Me.get(r, "display")), "none" === (N = S.css(r, "display")) && (k ? N = k : (le([r], !0), k = r.style.display || k, N = S.css(r, "display"), le([r]))), ("inline" === N || "inline-block" === N && null != k) && "none" === S.css(r, "float") && (E || (q.done((function() {
                        H.display = k
                    })), null == k && (N = H.display, k = "none" === N ? "" : N)), H.display = "inline-block")), f.overflow && (H.overflow = "hidden", q.always((function() {
                        H.overflow = f.overflow[0], H.overflowX = f.overflow[1], H.overflowY = f.overflow[2]
                    }))), E = !1, L) E || (W ? "hidden" in W && (F = W.hidden) : W = Me.access(r, "fxshow", {
                    display: k
                }), v && (W.hidden = !F), F && le([r], !0), q.done((function() {
                    for (d in F || le([r]), Me.remove(r, "fxshow"), L) S.style(r, d, L[d])
                }))), E = ct(F ? W[d] : 0, d, q), d in W || (W[d] = E.start, F && (E.end = E.start, E.start = 0))
        }],
        prefilter: function(r, o) {
            o ? ft.prefilters.unshift(r) : ft.prefilters.push(r)
        }
    }), S.speed = function(r, o, f) {
        var d = r && "object" == typeof r ? S.extend({}, r) : {
            complete: f || !f && o || m(r) && r,
            duration: r,
            easing: f && o || o && !m(o) && o
        };
        return S.fx.off ? d.duration = 0 : "number" != typeof d.duration && (d.duration in S.fx.speeds ? d.duration = S.fx.speeds[d.duration] : d.duration = S.fx.speeds._default), null != d.queue && !0 !== d.queue || (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            m(d.old) && d.old.call(this), d.queue && S.dequeue(this, d.queue)
        }, d
    }, S.fn.extend({
        fadeTo: function(r, o, f, d) {
            return this.filter(ae).css("opacity", 0).show().end().animate({
                opacity: o
            }, r, f, d)
        },
        animate: function(r, o, f, d) {
            var g = S.isEmptyObject(r),
                v = S.speed(o, f, d),
                a = function() {
                    var o = ft(this, S.extend({}, r), v);
                    (g || Me.get(this, "finish")) && o.stop(!0)
                };
            return a.finish = a, g || !1 === v.queue ? this.each(a) : this.queue(v.queue, a)
        },
        stop: function(r, o, f) {
            var a = function(r) {
                var o = r.stop;
                delete r.stop, o(f)
            };
            return "string" != typeof r && (f = o, o = r, r = void 0), o && this.queue(r || "fx", []), this.each((function() {
                var o = !0,
                    d = null != r && r + "queueHooks",
                    g = S.timers,
                    v = Me.get(this);
                if (d) v[d] && v[d].stop && a(v[d]);
                else
                    for (d in v) v[d] && v[d].stop && Wt.test(d) && a(v[d]);
                for (d = g.length; d--;) g[d].elem !== this || null != r && g[d].queue !== r || (g[d].anim.stop(f), o = !1, g.splice(d, 1));
                !o && f || S.dequeue(this, r)
            }))
        },
        finish: function(r) {
            return !1 !== r && (r = r || "fx"), this.each((function() {
                var o, f = Me.get(this),
                    d = f[r + "queue"],
                    g = f[r + "queueHooks"],
                    v = S.timers,
                    y = d ? d.length : 0;
                for (f.finish = !0, S.queue(this, r, []), g && g.stop && g.stop.call(this, !0), o = v.length; o--;) v[o].elem === this && v[o].queue === r && (v[o].anim.stop(!0), v.splice(o, 1));
                for (o = 0; o < y; o++) d[o] && d[o].finish && d[o].finish.call(this);
                delete f.finish
            }))
        }
    }), S.each(["toggle", "show", "hide"], (function(r, o) {
        var f = S.fn[o];
        S.fn[o] = function(r, d, g) {
            return null == r || "boolean" == typeof r ? f.apply(this, arguments) : this.animate(lt(o, !0), r, d, g)
        }
    })), S.each({
        slideDown: lt("show"),
        slideUp: lt("hide"),
        slideToggle: lt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, (function(r, o) {
        S.fn[r] = function(r, f, d) {
            return this.animate(o, r, f, d)
        }
    })), S.timers = [], S.fx.tick = function() {
        var r, o = 0,
            f = S.timers;
        for (Ot = Date.now(); o < f.length; o++)(r = f[o])() || f[o] !== r || f.splice(o--, 1);
        f.length || S.fx.stop(), Ot = void 0
    }, S.fx.timer = function(r) {
        S.timers.push(r), S.fx.start()
    }, S.fx.interval = 13, S.fx.start = function() {
        Pt || (Pt = !0, st())
    }, S.fx.stop = function() {
        Pt = null
    }, S.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, S.fn.delay = function(o, f) {
        return o = S.fx && S.fx.speeds[o] || o, f = f || "fx", this.queue(f, (function(f, d) {
            var g = r.setTimeout(f, o);
            d.stop = function() {
                r.clearTimeout(g)
            }
        }))
    }, Rt = H.createElement("input"), Mt = H.createElement("select").appendChild(H.createElement("option")), Rt.type = "checkbox", L.checkOn = "" !== Rt.value, L.optSelected = Mt.selected, (Rt = H.createElement("input")).value = "t", Rt.type = "radio", L.radioValue = "t" === Rt.value;
    var Xt, _t = S.expr.attrHandle;
    S.fn.extend({
        attr: function(r, o) {
            return $(this, S.attr, r, o, 1 < arguments.length)
        },
        removeAttr: function(r) {
            return this.each((function() {
                S.removeAttr(this, r)
            }))
        }
    }), S.extend({
        attr: function(r, o, f) {
            var d, g, v = r.nodeType;
            if (3 !== v && 8 !== v && 2 !== v) return void 0 === r.getAttribute ? S.prop(r, o, f) : (1 === v && S.isXMLDoc(r) || (g = S.attrHooks[o.toLowerCase()] || (S.expr.match.bool.test(o) ? Xt : void 0)), void 0 !== f ? null === f ? void S.removeAttr(r, o) : g && "set" in g && void 0 !== (d = g.set(r, f, o)) ? d : (r.setAttribute(o, f + ""), f) : g && "get" in g && null !== (d = g.get(r, o)) ? d : null == (d = S.find.attr(r, o)) ? void 0 : d)
        },
        attrHooks: {
            type: {
                set: function(r, o) {
                    if (!L.radioValue && "radio" === o && A(r, "input")) {
                        var f = r.value;
                        return r.setAttribute("type", o), f && (r.value = f), o
                    }
                }
            }
        },
        removeAttr: function(r, o) {
            var f, d = 0,
                g = o && o.match(te);
            if (g && 1 === r.nodeType)
                for (; f = g[d++];) r.removeAttribute(f)
        }
    }), Xt = {
        set: function(r, o, f) {
            return !1 === o ? S.removeAttr(r, f) : r.setAttribute(f, f), f
        }
    }, S.each(S.expr.match.bool.source.match(/\w+/g), (function(r, o) {
        var f = _t[o] || S.find.attr;
        _t[o] = function(r, o, d) {
            var g, v, y = o.toLowerCase();
            return d || (v = _t[y], _t[y] = g, g = null != f(r, o, d) ? y : null, _t[y] = v), g
        }
    }));
    var zt = /^(?:input|select|textarea|button)$/i,
        Ut = /^(?:a|area)$/i;

    function vt(r) {
        return (r.match(te) || []).join(" ")
    }

    function yt(r) {
        return r.getAttribute && r.getAttribute("class") || ""
    }

    function mt(r) {
        return Array.isArray(r) ? r : "string" == typeof r && r.match(te) || []
    }
    S.fn.extend({
        prop: function(r, o) {
            return $(this, S.prop, r, o, 1 < arguments.length)
        },
        removeProp: function(r) {
            return this.each((function() {
                delete this[S.propFix[r] || r]
            }))
        }
    }), S.extend({
        prop: function(r, o, f) {
            var d, g, v = r.nodeType;
            if (3 !== v && 8 !== v && 2 !== v) return 1 === v && S.isXMLDoc(r) || (o = S.propFix[o] || o, g = S.propHooks[o]), void 0 !== f ? g && "set" in g && void 0 !== (d = g.set(r, f, o)) ? d : r[o] = f : g && "get" in g && null !== (d = g.get(r, o)) ? d : r[o]
        },
        propHooks: {
            tabIndex: {
                get: function(r) {
                    var o = S.find.attr(r, "tabindex");
                    return o ? parseInt(o, 10) : zt.test(r.nodeName) || Ut.test(r.nodeName) && r.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), L.optSelected || (S.propHooks.selected = {
        get: function(r) {
            var o = r.parentNode;
            return o && o.parentNode && o.parentNode.selectedIndex, null
        },
        set: function(r) {
            var o = r.parentNode;
            o && (o.selectedIndex, o.parentNode && o.parentNode.selectedIndex)
        }
    }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
        S.propFix[this.toLowerCase()] = this
    })), S.fn.extend({
        addClass: function(r) {
            var o, f, d, g, v, y, C, E = 0;
            if (m(r)) return this.each((function(o) {
                S(this).addClass(r.call(this, o, yt(this)))
            }));
            if ((o = mt(r)).length)
                for (; f = this[E++];)
                    if (g = yt(f), d = 1 === f.nodeType && " " + vt(g) + " ") {
                        for (y = 0; v = o[y++];) d.indexOf(" " + v + " ") < 0 && (d += v + " ");
                        g !== (C = vt(d)) && f.setAttribute("class", C)
                    }
            return this
        },
        removeClass: function(r) {
            var o, f, d, g, v, y, C, E = 0;
            if (m(r)) return this.each((function(o) {
                S(this).removeClass(r.call(this, o, yt(this)))
            }));
            if (!arguments.length) return this.attr("class", "");
            if ((o = mt(r)).length)
                for (; f = this[E++];)
                    if (g = yt(f), d = 1 === f.nodeType && " " + vt(g) + " ") {
                        for (y = 0; v = o[y++];)
                            for (; - 1 < d.indexOf(" " + v + " ");) d = d.replace(" " + v + " ", " ");
                        g !== (C = vt(d)) && f.setAttribute("class", C)
                    }
            return this
        },
        toggleClass: function(r, o) {
            var f = typeof r,
                d = "string" === f || Array.isArray(r);
            return "boolean" == typeof o && d ? o ? this.addClass(r) : this.removeClass(r) : m(r) ? this.each((function(f) {
                S(this).toggleClass(r.call(this, f, yt(this), o), o)
            })) : this.each((function() {
                var o, g, v, y;
                if (d)
                    for (g = 0, v = S(this), y = mt(r); o = y[g++];) v.hasClass(o) ? v.removeClass(o) : v.addClass(o);
                else void 0 !== r && "boolean" !== f || ((o = yt(this)) && Me.set(this, "__className__", o), this.setAttribute && this.setAttribute("class", o || !1 === r ? "" : Me.get(this, "__className__") || ""))
            }))
        },
        hasClass: function(r) {
            var o, f, d = 0;
            for (o = " " + r + " "; f = this[d++];)
                if (1 === f.nodeType && -1 < (" " + vt(yt(f)) + " ").indexOf(o)) return !0;
            return !1
        }
    });
    var Gt = /\r/g;
    S.fn.extend({
        val: function(r) {
            var o, f, d, g = this[0];
            return arguments.length ? (d = m(r), this.each((function(f) {
                var g;
                1 === this.nodeType && (null == (g = d ? r.call(this, f, S(this).val()) : r) ? g = "" : "number" == typeof g ? g += "" : Array.isArray(g) && (g = S.map(g, (function(r) {
                    return null == r ? "" : r + ""
                }))), (o = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in o && void 0 !== o.set(this, g, "value") || (this.value = g))
            }))) : g ? (o = S.valHooks[g.type] || S.valHooks[g.nodeName.toLowerCase()]) && "get" in o && void 0 !== (f = o.get(g, "value")) ? f : "string" == typeof(f = g.value) ? f.replace(Gt, "") : null == f ? "" : f : void 0
        }
    }), S.extend({
        valHooks: {
            option: {
                get: function(r) {
                    var o = S.find.attr(r, "value");
                    return null != o ? o : vt(S.text(r))
                }
            },
            select: {
                get: function(r) {
                    var o, f, d, g = r.options,
                        v = r.selectedIndex,
                        y = "select-one" === r.type,
                        C = y ? null : [],
                        E = y ? v + 1 : g.length;
                    for (d = v < 0 ? E : y ? v : 0; d < E; d++)
                        if (((f = g[d]).selected || d === v) && !f.disabled && (!f.parentNode.disabled || !A(f.parentNode, "optgroup"))) {
                            if (o = S(f).val(), y) return o;
                            C.push(o)
                        }
                    return C
                },
                set: function(r, o) {
                    for (var f, d, g = r.options, v = S.makeArray(o), y = g.length; y--;)((d = g[y]).selected = -1 < S.inArray(S.valHooks.option.get(d), v)) && (f = !0);
                    return f || (r.selectedIndex = -1), v
                }
            }
        }
    }), S.each(["radio", "checkbox"], (function() {
        S.valHooks[this] = {
            set: function(r, o) {
                if (Array.isArray(o)) return r.checked = -1 < S.inArray(S(r).val(), o)
            }
        }, L.checkOn || (S.valHooks[this].get = function(r) {
            return null === r.getAttribute("value") ? "on" : r.value
        })
    })), L.focusin = "onfocusin" in r;
    var Vt = /^(?:focusinfocus|focusoutblur)$/,
        wt = function(r) {
            r.stopPropagation()
        };
    S.extend(S.event, {
        trigger: function(o, f, d, g) {
            var v, y, C, E, k, j, q, L, F = [d || H],
                W = N.call(o, "type") ? o.type : o,
                _ = N.call(o, "namespace") ? o.namespace.split(".") : [];
            if (y = L = C = d = d || H, 3 !== d.nodeType && 8 !== d.nodeType && !Vt.test(W + S.event.triggered) && (-1 < W.indexOf(".") && (W = (_ = W.split(".")).shift(), _.sort()), k = W.indexOf(":") < 0 && "on" + W, (o = o[S.expando] ? o : new S.Event(W, "object" == typeof o && o)).isTrigger = g ? 2 : 3, o.namespace = _.join("."), o.rnamespace = o.namespace ? new RegExp("(^|\\.)" + _.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, o.result = void 0, o.target || (o.target = d), f = null == f ? [o] : S.makeArray(f, [o]), q = S.event.special[W] || {}, g || !q.trigger || !1 !== q.trigger.apply(d, f))) {
                if (!g && !q.noBubble && !x(d)) {
                    for (E = q.delegateType || W, Vt.test(E + W) || (y = y.parentNode); y; y = y.parentNode) F.push(y), C = y;
                    C === (d.ownerDocument || H) && F.push(C.defaultView || C.parentWindow || r)
                }
                for (v = 0;
                    (y = F[v++]) && !o.isPropagationStopped();) L = y, o.type = 1 < v ? E : q.bindType || W, (j = (Me.get(y, "events") || Object.create(null))[o.type] && Me.get(y, "handle")) && j.apply(y, f), (j = k && y[k]) && j.apply && V(y) && (o.result = j.apply(y, f), !1 === o.result && o.preventDefault());
                return o.type = W, g || o.isDefaultPrevented() || q._default && !1 !== q._default.apply(F.pop(), f) || !V(d) || k && m(d[W]) && !x(d) && ((C = d[k]) && (d[k] = null), S.event.triggered = W, o.isPropagationStopped() && L.addEventListener(W, wt), d[W](), o.isPropagationStopped() && L.removeEventListener(W, wt), S.event.triggered = void 0, C && (d[k] = C)), o.result
            }
        },
        simulate: function(r, o, f) {
            var d = S.extend(new S.Event, f, {
                type: r,
                isSimulated: !0
            });
            S.event.trigger(d, null, o)
        }
    }), S.fn.extend({
        trigger: function(r, o) {
            return this.each((function() {
                S.event.trigger(r, o, this)
            }))
        },
        triggerHandler: function(r, o) {
            var f = this[0];
            if (f) return S.event.trigger(r, o, f, !0)
        }
    }), L.focusin || S.each({
        focus: "focusin",
        blur: "focusout"
    }, (function(r, o) {
        var i = function(r) {
            S.event.simulate(o, r.target, S.event.fix(r))
        };
        S.event.special[o] = {
            setup: function() {
                var f = this.ownerDocument || this.document || this,
                    d = Me.access(f, o);
                d || f.addEventListener(r, i, !0), Me.access(f, o, (d || 0) + 1)
            },
            teardown: function() {
                var f = this.ownerDocument || this.document || this,
                    d = Me.access(f, o) - 1;
                d ? Me.access(f, o, d) : (f.removeEventListener(r, i, !0), Me.remove(f, o))
            }
        }
    }));
    var Yt = r.location,
        Jt = {
            guid: Date.now()
        },
        Kt = /\?/;
    S.parseXML = function(o) {
        var f;
        if (!o || "string" != typeof o) return null;
        try {
            f = (new r.DOMParser).parseFromString(o, "text/xml")
        } catch (o) {
            f = void 0
        }
        return f && !f.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + o), f
    };
    var Qt = /\[\]$/,
        Zt = /\r?\n/g,
        en = /^(?:submit|button|image|reset|file)$/i,
        tn = /^(?:input|select|textarea|keygen)/i;

    function Dt(r, o, f, d) {
        var g;
        if (Array.isArray(o)) S.each(o, (function(o, g) {
            f || Qt.test(r) ? d(r, g) : Dt(r + "[" + ("object" == typeof g && null != g ? o : "") + "]", g, f, d)
        }));
        else if (f || "object" !== w(o)) d(r, o);
        else
            for (g in o) Dt(r + "[" + g + "]", o[g], f, d)
    }
    S.param = function(r, o) {
        var f, d = [],
            i = function(r, o) {
                var f = m(o) ? o() : o;
                d[d.length] = encodeURIComponent(r) + "=" + encodeURIComponent(null == f ? "" : f)
            };
        if (null == r) return "";
        if (Array.isArray(r) || r.jquery && !S.isPlainObject(r)) S.each(r, (function() {
            i(this.name, this.value)
        }));
        else
            for (f in r) Dt(f, r[f], o, i);
        return d.join("&")
    }, S.fn.extend({
        serialize: function() {
            return S.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map((function() {
                var r = S.prop(this, "elements");
                return r ? S.makeArray(r) : this
            })).filter((function() {
                var r = this.type;
                return this.name && !S(this).is(":disabled") && tn.test(this.nodeName) && !en.test(r) && (this.checked || !it.test(r))
            })).map((function(r, o) {
                var f = S(this).val();
                return null == f ? null : Array.isArray(f) ? S.map(f, (function(r) {
                    return {
                        name: o.name,
                        value: r.replace(Zt, "\r\n")
                    }
                })) : {
                    name: o.name,
                    value: f.replace(Zt, "\r\n")
                }
            })).get()
        }
    });
    var nn = /%20/g,
        rn = /#.*$/,
        on = /([?&])_=[^&]*/,
        an = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        sn = /^(?:GET|HEAD)$/,
        un = /^\/\//,
        ln = {},
        cn = {},
        fn = "*/".concat("*"),
        pn = H.createElement("a");

    function Ft(r) {
        return function(o, f) {
            "string" != typeof o && (f = o, o = "*");
            var d, g = 0,
                v = o.toLowerCase().match(te) || [];
            if (m(f))
                for (; d = v[g++];) "+" === d[0] ? (d = d.slice(1) || "*", (r[d] = r[d] || []).unshift(f)) : (r[d] = r[d] || []).push(f)
        }
    }

    function Bt(r, o, f, d) {
        var g = {},
            v = r === cn;

        function l(y) {
            var C;
            return g[y] = !0, S.each(r[y] || [], (function(r, y) {
                var E = y(o, f, d);
                return "string" != typeof E || v || g[E] ? v ? !(C = E) : void 0 : (o.dataTypes.unshift(E), l(E), !1)
            })), C
        }
        return l(o.dataTypes[0]) || !g["*"] && l("*")
    }

    function $t(r, o) {
        var f, d, g = S.ajaxSettings.flatOptions || {};
        for (f in o) void 0 !== o[f] && ((g[f] ? r : d || (d = {}))[f] = o[f]);
        return d && S.extend(!0, r, d), r
    }
    pn.href = Yt.href, S.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Yt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Yt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": fn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": S.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(r, o) {
            return o ? $t($t(r, S.ajaxSettings), o) : $t(S.ajaxSettings, r)
        },
        ajaxPrefilter: Ft(ln),
        ajaxTransport: Ft(cn),
        ajax: function(o, f) {
            "object" == typeof o && (f = o, o = void 0), f = f || {};
            var d, g, v, y, C, E, k, N, j, q, L = S.ajaxSetup({}, f),
                F = L.context || L,
                W = L.context && (F.nodeType || F.jquery) ? S(F) : S.event,
                _ = S.Deferred(),
                z = S.Callbacks("once memory"),
                Y = L.statusCode || {},
                J = {},
                K = {},
                Q = "canceled",
                ee = {
                    readyState: 0,
                    getResponseHeader: function(r) {
                        var o;
                        if (k) {
                            if (!y)
                                for (y = {}; o = an.exec(v);) y[o[1].toLowerCase() + " "] = (y[o[1].toLowerCase() + " "] || []).concat(o[2]);
                            o = y[r.toLowerCase() + " "]
                        }
                        return null == o ? null : o.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return k ? v : null
                    },
                    setRequestHeader: function(r, o) {
                        return null == k && (r = K[r.toLowerCase()] = K[r.toLowerCase()] || r, J[r] = o), this
                    },
                    overrideMimeType: function(r) {
                        return null == k && (L.mimeType = r), this
                    },
                    statusCode: function(r) {
                        var o;
                        if (r)
                            if (k) ee.always(r[ee.status]);
                            else
                                for (o in r) Y[o] = [Y[o], r[o]];
                        return this
                    },
                    abort: function(r) {
                        var o = r || Q;
                        return d && d.abort(o), l(0, o), this
                    }
                };
            if (_.promise(ee), L.url = ((o || L.url || Yt.href) + "").replace(un, Yt.protocol + "//"), L.type = f.method || f.type || L.method || L.type, L.dataTypes = (L.dataType || "*").toLowerCase().match(te) || [""], null == L.crossDomain) {
                E = H.createElement("a");
                try {
                    E.href = L.url, E.href = E.href, L.crossDomain = pn.protocol + "//" + pn.host != E.protocol + "//" + E.host
                } catch (o) {
                    L.crossDomain = !0
                }
            }
            if (L.data && L.processData && "string" != typeof L.data && (L.data = S.param(L.data, L.traditional)), Bt(ln, L, f, ee), k) return ee;
            for (j in (N = S.event && L.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), L.type = L.type.toUpperCase(), L.hasContent = !sn.test(L.type), g = L.url.replace(rn, ""), L.hasContent ? L.data && L.processData && 0 === (L.contentType || "").indexOf("application/x-www-form-urlencoded") && (L.data = L.data.replace(nn, "+")) : (q = L.url.slice(g.length), L.data && (L.processData || "string" == typeof L.data) && (g += (Kt.test(g) ? "&" : "?") + L.data, delete L.data), !1 === L.cache && (g = g.replace(on, "$1"), q = (Kt.test(g) ? "&" : "?") + "_=" + Jt.guid++ + q), L.url = g + q), L.ifModified && (S.lastModified[g] && ee.setRequestHeader("If-Modified-Since", S.lastModified[g]), S.etag[g] && ee.setRequestHeader("If-None-Match", S.etag[g])), (L.data && L.hasContent && !1 !== L.contentType || f.contentType) && ee.setRequestHeader("Content-Type", L.contentType), ee.setRequestHeader("Accept", L.dataTypes[0] && L.accepts[L.dataTypes[0]] ? L.accepts[L.dataTypes[0]] + ("*" !== L.dataTypes[0] ? ", " + fn + "; q=0.01" : "") : L.accepts["*"]), L.headers) ee.setRequestHeader(j, L.headers[j]);
            if (L.beforeSend && (!1 === L.beforeSend.call(F, ee, L) || k)) return ee.abort();
            if (Q = "abort", z.add(L.complete), ee.done(L.success), ee.fail(L.error), d = Bt(cn, L, f, ee)) {
                if (ee.readyState = 1, N && W.trigger("ajaxSend", [ee, L]), k) return ee;
                L.async && 0 < L.timeout && (C = r.setTimeout((function() {
                    ee.abort("timeout")
                }), L.timeout));
                try {
                    k = !1, d.send(J, l)
                } catch (o) {
                    if (k) throw o;
                    l(-1, o)
                }
            } else l(-1, "No Transport");

            function l(o, f, y, E) {
                var j, q, H, J, K, Q = f;
                k || (k = !0, C && r.clearTimeout(C), d = void 0, v = E || "", ee.readyState = 0 < o ? 4 : 0, j = 200 <= o && o < 300 || 304 === o, y && (J = function(r, o, f) {
                    for (var d, g, v, y, C = r.contents, E = r.dataTypes;
                        "*" === E[0];) E.shift(), void 0 === d && (d = r.mimeType || o.getResponseHeader("Content-Type"));
                    if (d)
                        for (g in C)
                            if (C[g] && C[g].test(d)) {
                                E.unshift(g);
                                break
                            }
                    if (E[0] in f) v = E[0];
                    else {
                        for (g in f) {
                            if (!E[0] || r.converters[g + " " + E[0]]) {
                                v = g;
                                break
                            }
                            y || (y = g)
                        }
                        v = v || y
                    }
                    if (v) return v !== E[0] && E.unshift(v), f[v]
                }(L, ee, y)), !j && -1 < S.inArray("script", L.dataTypes) && (L.converters["text script"] = function() {}), J = function(r, o, f, d) {
                    var g, v, y, C, E, k = {},
                        N = r.dataTypes.slice();
                    if (N[1])
                        for (y in r.converters) k[y.toLowerCase()] = r.converters[y];
                    for (v = N.shift(); v;)
                        if (r.responseFields[v] && (f[r.responseFields[v]] = o), !E && d && r.dataFilter && (o = r.dataFilter(o, r.dataType)), E = v, v = N.shift())
                            if ("*" === v) v = E;
                            else if ("*" !== E && E !== v) {
                        if (!(y = k[E + " " + v] || k["* " + v]))
                            for (g in k)
                                if ((C = g.split(" "))[1] === v && (y = k[E + " " + C[0]] || k["* " + C[0]])) {
                                    !0 === y ? y = k[g] : !0 !== k[g] && (v = C[0], N.unshift(C[1]));
                                    break
                                }
                        if (!0 !== y)
                            if (y && r.throws) o = y(o);
                            else try {
                                o = y(o)
                            } catch (r) {
                                return {
                                    state: "parsererror",
                                    error: y ? r : "No conversion from " + E + " to " + v
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: o
                    }
                }(L, J, ee, j), j ? (L.ifModified && ((K = ee.getResponseHeader("Last-Modified")) && (S.lastModified[g] = K), (K = ee.getResponseHeader("etag")) && (S.etag[g] = K)), 204 === o || "HEAD" === L.type ? Q = "nocontent" : 304 === o ? Q = "notmodified" : (Q = J.state, q = J.data, j = !(H = J.error))) : (H = Q, !o && Q || (Q = "error", o < 0 && (o = 0))), ee.status = o, ee.statusText = (f || Q) + "", j ? _.resolveWith(F, [q, Q, ee]) : _.rejectWith(F, [ee, Q, H]), ee.statusCode(Y), Y = void 0, N && W.trigger(j ? "ajaxSuccess" : "ajaxError", [ee, L, j ? q : H]), z.fireWith(F, [ee, Q]), N && (W.trigger("ajaxComplete", [ee, L]), --S.active || S.event.trigger("ajaxStop")))
            }
            return ee
        },
        getJSON: function(r, o, f) {
            return S.get(r, o, f, "json")
        },
        getScript: function(r, o) {
            return S.get(r, void 0, o, "script")
        }
    }), S.each(["get", "post"], (function(r, o) {
        S[o] = function(r, f, d, g) {
            return m(f) && (g = g || d, d = f, f = void 0), S.ajax(S.extend({
                url: r,
                type: o,
                dataType: g,
                data: f,
                success: d
            }, S.isPlainObject(r) && r))
        }
    })), S.ajaxPrefilter((function(r) {
        var o;
        for (o in r.headers) "content-type" === o.toLowerCase() && (r.contentType = r.headers[o] || "")
    })), S._evalUrl = function(r, o, f) {
        return S.ajax({
            url: r,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(r) {
                S.globalEval(r, o, f)
            }
        })
    }, S.fn.extend({
        wrapAll: function(r) {
            var o;
            return this[0] && (m(r) && (r = r.call(this[0])), o = S(r, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && o.insertBefore(this[0]), o.map((function() {
                for (var r = this; r.firstElementChild;) r = r.firstElementChild;
                return r
            })).append(this)), this
        },
        wrapInner: function(r) {
            return m(r) ? this.each((function(o) {
                S(this).wrapInner(r.call(this, o))
            })) : this.each((function() {
                var o = S(this),
                    f = o.contents();
                f.length ? f.wrapAll(r) : o.append(r)
            }))
        },
        wrap: function(r) {
            var o = m(r);
            return this.each((function(f) {
                S(this).wrapAll(o ? r.call(this, f) : r)
            }))
        },
        unwrap: function(r) {
            return this.parent(r).not("body").each((function() {
                S(this).replaceWith(this.childNodes)
            })), this
        }
    }), S.expr.pseudos.hidden = function(r) {
        return !S.expr.pseudos.visible(r)
    }, S.expr.pseudos.visible = function(r) {
        return !!(r.offsetWidth || r.offsetHeight || r.getClientRects().length)
    }, S.ajaxSettings.xhr = function() {
        try {
            return new r.XMLHttpRequest
        } catch (r) {}
    };
    var dn = {
            0: 200,
            1223: 204
        },
        hn = S.ajaxSettings.xhr();
    L.cors = !!hn && "withCredentials" in hn, L.ajax = hn = !!hn, S.ajaxTransport((function(o) {
        var f, d;
        if (L.cors || hn && !o.crossDomain) return {
            send: function(g, v) {
                var y, C = o.xhr();
                if (C.open(o.type, o.url, o.async, o.username, o.password), o.xhrFields)
                    for (y in o.xhrFields) C[y] = o.xhrFields[y];
                for (y in o.mimeType && C.overrideMimeType && C.overrideMimeType(o.mimeType), o.crossDomain || g["X-Requested-With"] || (g["X-Requested-With"] = "XMLHttpRequest"), g) C.setRequestHeader(y, g[y]);
                f = function(r) {
                    return function() {
                        f && (f = d = C.onload = C.onerror = C.onabort = C.ontimeout = C.onreadystatechange = null, "abort" === r ? C.abort() : "error" === r ? "number" != typeof C.status ? v(0, "error") : v(C.status, C.statusText) : v(dn[C.status] || C.status, C.statusText, "text" !== (C.responseType || "text") || "string" != typeof C.responseText ? {
                            binary: C.response
                        } : {
                            text: C.responseText
                        }, C.getAllResponseHeaders()))
                    }
                }, C.onload = f(), d = C.onerror = C.ontimeout = f("error"), void 0 !== C.onabort ? C.onabort = d : C.onreadystatechange = function() {
                    4 === C.readyState && r.setTimeout((function() {
                        f && d()
                    }))
                }, f = f("abort");
                try {
                    C.send(o.hasContent && o.data || null)
                } catch (g) {
                    if (f) throw g
                }
            },
            abort: function() {
                f && f()
            }
        }
    })), S.ajaxPrefilter((function(r) {
        r.crossDomain && (r.contents.script = !1)
    })), S.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(r) {
                return S.globalEval(r), r
            }
        }
    }), S.ajaxPrefilter("script", (function(r) {
        void 0 === r.cache && (r.cache = !1), r.crossDomain && (r.type = "GET")
    })), S.ajaxTransport("script", (function(r) {
        var o, f;
        if (r.crossDomain || r.scriptAttrs) return {
            send: function(d, g) {
                o = S("<script>").attr(r.scriptAttrs || {}).prop({
                    charset: r.scriptCharset,
                    src: r.url
                }).on("load error", f = function(r) {
                    o.remove(), f = null, r && g("error" === r.type ? 404 : 200, r.type)
                }), H.head.appendChild(o[0])
            },
            abort: function() {
                f && f()
            }
        }
    }));
    var gn, vn = [],
        yn = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var r = vn.pop() || S.expando + "_" + Jt.guid++;
            return this[r] = !0, r
        }
    }), S.ajaxPrefilter("json jsonp", (function(o, f, d) {
        var g, v, y, C = !1 !== o.jsonp && (yn.test(o.url) ? "url" : "string" == typeof o.data && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && yn.test(o.data) && "data");
        if (C || "jsonp" === o.dataTypes[0]) return g = o.jsonpCallback = m(o.jsonpCallback) ? o.jsonpCallback() : o.jsonpCallback, C ? o[C] = o[C].replace(yn, "$1" + g) : !1 !== o.jsonp && (o.url += (Kt.test(o.url) ? "&" : "?") + o.jsonp + "=" + g), o.converters["script json"] = function() {
            return y || S.error(g + " was not called"), y[0]
        }, o.dataTypes[0] = "json", v = r[g], r[g] = function() {
            y = arguments
        }, d.always((function() {
            void 0 === v ? S(r).removeProp(g) : r[g] = v, o[g] && (o.jsonpCallback = f.jsonpCallback, vn.push(g)), y && m(v) && v(y[0]), y = v = void 0
        })), "script"
    })), L.createHTMLDocument = ((gn = H.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === gn.childNodes.length), S.parseHTML = function(r, o, f) {
        return "string" != typeof r ? [] : ("boolean" == typeof o && (f = o, o = !1), o || (L.createHTMLDocument ? ((d = (o = H.implementation.createHTMLDocument("")).createElement("base")).href = H.location.href, o.head.appendChild(d)) : o = H), v = !f && [], (g = Y.exec(r)) ? [o.createElement(g[1])] : (g = xe([r], o, v), v && v.length && S(v).remove(), S.merge([], g.childNodes)));
        var d, g, v
    }, S.fn.load = function(r, o, f) {
        var d, g, v, y = this,
            C = r.indexOf(" ");
        return -1 < C && (d = vt(r.slice(C)), r = r.slice(0, C)), m(o) ? (f = o, o = void 0) : o && "object" == typeof o && (g = "POST"), 0 < y.length && S.ajax({
            url: r,
            type: g || "GET",
            dataType: "html",
            data: o
        }).done((function(r) {
            v = arguments, y.html(d ? S("<div>").append(S.parseHTML(r)).find(d) : r)
        })).always(f && function(r, o) {
            y.each((function() {
                f.apply(this, v || [r.responseText, o, r])
            }))
        }), this
    }, S.expr.pseudos.animated = function(r) {
        return S.grep(S.timers, (function(o) {
            return r === o.elem
        })).length
    }, S.offset = {
        setOffset: function(r, o, f) {
            var d, g, v, y, C, E, k = S.css(r, "position"),
                N = S(r),
                j = {};
            "static" === k && (r.style.position = "relative"), C = N.offset(), v = S.css(r, "top"), E = S.css(r, "left"), ("absolute" === k || "fixed" === k) && -1 < (v + E).indexOf("auto") ? (y = (d = N.position()).top, g = d.left) : (y = parseFloat(v) || 0, g = parseFloat(E) || 0), m(o) && (o = o.call(r, f, S.extend({}, C))), null != o.top && (j.top = o.top - C.top + y), null != o.left && (j.left = o.left - C.left + g), "using" in o ? o.using.call(r, j) : ("number" == typeof j.top && (j.top += "px"), "number" == typeof j.left && (j.left += "px"), N.css(j))
        }
    }, S.fn.extend({
        offset: function(r) {
            if (arguments.length) return void 0 === r ? this : this.each((function(o) {
                S.offset.setOffset(this, r, o)
            }));
            var o, f, d = this[0];
            return d ? d.getClientRects().length ? (o = d.getBoundingClientRect(), f = d.ownerDocument.defaultView, {
                top: o.top + f.pageYOffset,
                left: o.left + f.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var r, o, f, d = this[0],
                    g = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === S.css(d, "position")) o = d.getBoundingClientRect();
                else {
                    for (o = this.offset(), f = d.ownerDocument, r = d.offsetParent || f.documentElement; r && (r === f.body || r === f.documentElement) && "static" === S.css(r, "position");) r = r.parentNode;
                    r && r !== d && 1 === r.nodeType && ((g = S(r).offset()).top += S.css(r, "borderTopWidth", !0), g.left += S.css(r, "borderLeftWidth", !0))
                }
                return {
                    top: o.top - g.top - S.css(d, "marginTop", !0),
                    left: o.left - g.left - S.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map((function() {
                for (var r = this.offsetParent; r && "static" === S.css(r, "position");) r = r.offsetParent;
                return r || Ye
            }))
        }
    }), S.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, (function(r, o) {
        var f = "pageYOffset" === o;
        S.fn[r] = function(d) {
            return $(this, (function(r, d, g) {
                var v;
                if (x(r) ? v = r : 9 === r.nodeType && (v = r.defaultView), void 0 === g) return v ? v[o] : r[d];
                v ? v.scrollTo(f ? v.pageXOffset : g, f ? g : v.pageYOffset) : r[d] = g
            }), r, d, arguments.length)
        }
    })), S.each(["top", "left"], (function(r, o) {
        S.cssHooks[o] = $e(L.pixelPosition, (function(r, f) {
            if (f) return f = Be(r, o), Et.test(f) ? S(r).position()[o] + "px" : f
        }))
    })), S.each({
        Height: "height",
        Width: "width"
    }, (function(r, o) {
        S.each({
            padding: "inner" + r,
            content: o,
            "": "outer" + r
        }, (function(f, d) {
            S.fn[d] = function(g, v) {
                var y = arguments.length && (f || "boolean" != typeof g),
                    C = f || (!0 === g || !0 === v ? "margin" : "border");
                return $(this, (function(o, f, g) {
                    var v;
                    return x(o) ? 0 === d.indexOf("outer") ? o["inner" + r] : o.document.documentElement["client" + r] : 9 === o.nodeType ? (v = o.documentElement, Math.max(o.body["scroll" + r], v["scroll" + r], o.body["offset" + r], v["offset" + r], v["client" + r])) : void 0 === g ? S.css(o, f, C) : S.style(o, f, g, C)
                }), o, y ? g : void 0, y)
            }
        }))
    })), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(r, o) {
        S.fn[o] = function(r) {
            return this.on(o, r)
        }
    })), S.fn.extend({
        bind: function(r, o, f) {
            return this.on(r, null, o, f)
        },
        unbind: function(r, o) {
            return this.off(r, null, o)
        },
        delegate: function(r, o, f, d) {
            return this.on(o, r, f, d)
        },
        undelegate: function(r, o, f) {
            return 1 === arguments.length ? this.off(r, "**") : this.off(o, r || "**", f)
        },
        hover: function(r, o) {
            return this.mouseenter(r).mouseleave(o || r)
        }
    }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(r, o) {
        S.fn[o] = function(r, f) {
            return 0 < arguments.length ? this.on(o, null, r, f) : this.trigger(o)
        }
    }));
    var mn = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    S.proxy = function(r, o) {
        var f, d, v;
        if ("string" == typeof o && (f = r[o], o = r, r = f), m(r)) return d = g.call(arguments, 2), (v = function() {
            return r.apply(o || this, d.concat(g.call(arguments)))
        }).guid = r.guid = r.guid || S.guid++, v
    }, S.holdReady = function(r) {
        r ? S.readyWait++ : S.ready(!0)
    }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function(r) {
        var o = S.type(r);
        return ("number" === o || "string" === o) && !isNaN(r - parseFloat(r))
    }, S.trim = function(r) {
        return null == r ? "" : (r + "").replace(mn, "")
    }, "function" == typeof define && define.amd && define("jquery", [], (function() {
        return S
    }));
    var xn = r.jQuery,
        bn = r.$;
    return S.noConflict = function(o) {
        return r.$ === S && (r.$ = bn), o && r.jQuery === S && (r.jQuery = xn), S
    }, void 0 === o && (r.jQuery = r.$ = S), S
}));