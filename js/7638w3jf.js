/*!
 * jquery.inputmask.bundle.js
 * https://github.com/RobinHerbots/jquery.inputmask
 * Copyright (c) 2010 - 2016 Robin Herbots
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 * Version: 3.3.4-60
 */
! function(a) {
    function b(c, d) {
        return this instanceof b ? (a.isPlainObject(c) ? d = c : (d = d || {}, d.alias = c), this.el = void 0, this.opts = a.extend(!0, {}, this.defaults, d), this.noMasksCache = d && void 0 !== d.definitions, this.userOptions = d || {}, this.events = {}, this.dataAttribute = "data-inputmask", void e(this.opts.alias, d, this.opts)) : new b(c, d)
    }

    function c(a) {
        var b = document.createElement("input"),
            c = "on" + a,
            d = c in b;
        return d || (b.setAttribute(c, "return;"), d = "function" == typeof b[c]), b = null, d
    }

    function d(b, c) {
        var d = b.getAttribute("type"),
            e = "INPUT" === b.tagName && a.inArray(d, c.supportsInputType) !== -1 || b.isContentEditable || "TEXTAREA" === b.tagName;
        if (!e && "INPUT" === b.tagName) {
            var f = document.createElement("input");
            f.setAttribute("type", d), e = "text" === f.type, f = null
        }
        return e
    }

    function e(b, c, d) {
        var f = d.aliases[b];
        return f ? (f.alias && e(f.alias, void 0, d), a.extend(!0, d, f), a.extend(!0, d, c), !0) : (null === d.mask && (d.mask = b), !1)
    }

    function f(b, c, d, f) {
        function g(a, c) {
            c = void 0 !== c ? c : b.getAttribute(f + "-" + a), null !== c && ("string" == typeof c && (0 === a.indexOf("on") ? c = window[c] : "false" === c ? c = !1 : "true" === c && (c = !0)), d[a] = c)
        }
        var h, i, j, k, l = b.getAttribute(f);
        if (l && "" !== l && (l = l.replace(new RegExp("'", "g"), '"'), i = JSON.parse("{" + l + "}")), i) {
            j = void 0;
            for (k in i)
                if ("alias" === k.toLowerCase()) {
                    j = i[k];
                    break
                }
        }
        g("alias", j), d.alias && e(d.alias, d, c);
        for (h in c) {
            if (i) {
                j = void 0;
                for (k in i)
                    if (k.toLowerCase() === h.toLowerCase()) {
                        j = i[k];
                        break
                    }
            }
            g(h, j)
        }
        return a.extend(!0, c, d), c
    }

    function g(c, d) {
        function e(c, e, f) {
            if (null !== c && "" !== c) {
                if (1 === c.length && f.greedy === !1 && 0 !== f.repeat && (f.placeholder = ""), f.repeat > 0 || "*" === f.repeat || "+" === f.repeat) {
                    var g = "*" === f.repeat ? 0 : "+" === f.repeat ? 1 : f.repeat;
                    c = f.groupmarker.start + c + f.groupmarker.end + f.quantifiermarker.start + g + "," + f.repeat + f.quantifiermarker.end
                }
                var h;
                return void 0 === b.prototype.masksCache[c] || d === !0 ? (h = {
                    mask: c,
                    maskToken: b.analyseMask(c, f),
                    validPositions: {},
                    _buffer: void 0,
                    buffer: void 0,
                    tests: {},
                    metadata: e,
                    maskLength: void 0
                }, d !== !0 && (b.prototype.masksCache[f.numericInput ? c.split("").reverse().join("") : c] = h, h = a.extend(!0, {}, b.prototype.masksCache[f.numericInput ? c.split("").reverse().join("") : c]))) : h = a.extend(!0, {}, b.prototype.masksCache[f.numericInput ? c.split("").reverse().join("") : c]), h
            }
        }
        var f;
        if (a.isFunction(c.mask) && (c.mask = c.mask(c)), a.isArray(c.mask)) {
            if (c.mask.length > 1) {
                c.keepStatic = null === c.keepStatic || c.keepStatic;
                var g = "(";
                return a.each(c.numericInput ? c.mask.reverse() : c.mask, function(b, c) {
                    g.length > 1 && (g += ")|("), g += void 0 === c.mask || a.isFunction(c.mask) ? c : c.mask
                }), g += ")", e(g, c.mask, c)
            }
            c.mask = c.mask.pop()
        }
        return c.mask && (f = void 0 === c.mask.mask || a.isFunction(c.mask.mask) ? e(c.mask, c.mask, c) : e(c.mask.mask, c.mask, c)), f
    }

    function h(e, f, g) {
        function i(a, b, c) {
            b = b || 0;
            var d, e, f, h = [],
                i = 0,
                j = p();
            ja = void 0 !== ha ? ha.maxLength : void 0, ja === -1 && (ja = void 0);
            do a === !0 && n().validPositions[i] ? (f = n().validPositions[i], e = f.match, d = f.locator.slice(), h.push(c === !0 ? f.input : I(i, e))) : (f = s(i, d, i - 1), e = f.match, d = f.locator.slice(), (g.jitMasking === !1 || i < j || Number.isFinite(g.jitMasking) && g.jitMasking > i) && h.push(I(i, e))), i++; while ((void 0 === ja || i < ja) && (null !== e.fn || "" !== e.def) || b > i);
            return "" === h[h.length - 1] && h.pop(), n().maskLength = i + 1, h
        }

        function n() {
            return f
        }

        function o(a) {
            var b = n();
            b.buffer = void 0, a !== !0 && (b._buffer = void 0, b.validPositions = {}, b.p = 0)
        }

        function p(a, b, c) {
            var d = -1,
                e = -1,
                f = c || n().validPositions;
            void 0 === a && (a = -1);
            for (var g in f) {
                var h = parseInt(g);
                f[h] && (b || null !== f[h].match.fn) && (h <= a && (d = h), h >= a && (e = h))
            }
            return d !== -1 && a - d > 1 || e < a ? d : e
        }

        function q(b, c, d, e) {
            function f(a) {
                var b = n().validPositions[a];
                if (void 0 !== b && null === b.match.fn) {
                    var c = n().validPositions[a - 1],
                        d = n().validPositions[a + 1];
                    return void 0 !== c && void 0 !== d
                }
                return !1
            }
            var h, i = b,
                j = a.extend(!0, {}, n().validPositions),
                k = !1;
            for (n().p = b, h = c - 1; h >= i; h--) void 0 !== n().validPositions[h] && (d === !0 || !f(h) && g.canClearPosition(n(), h, p(), e, g) !== !1) && delete n().validPositions[h];
            for (o(!0), h = i + 1; h <= p();) {
                for (; void 0 !== n().validPositions[i];) i++;
                var l = n().validPositions[i];
                if (h < i && (h = i + 1), void 0 === n().validPositions[h] && D(h) || void 0 !== l) h++;
                else {
                    var m = s(h);
                    k === !1 && j[i] && j[i].match.def === m.match.def ? (n().validPositions[i] = a.extend(!0, {}, j[i]), n().validPositions[i].input = m.input, delete n().validPositions[h], h++) : u(i, m.match.def) ? C(i, m.input || I(h), !0) !== !1 && (delete n().validPositions[h], h++, k = !0) : D(h) || (h++, i--), i++
                }
            }
            o(!0)
        }

        function r(a, b) {
            for (var c, d = a, e = p(), f = n().validPositions[e] || w(0)[0], h = void 0 !== f.alternation ? f.locator[f.alternation].toString().split(",") : [], i = 0; i < d.length && (c = d[i], !(c.match && (g.greedy && c.match.optionalQuantifier !== !0 || (c.match.optionality === !1 || c.match.newBlockMarker === !1) && c.match.optionalQuantifier !== !0) && (void 0 === f.alternation || f.alternation !== c.alternation || void 0 !== c.locator[f.alternation] && B(c.locator[f.alternation].toString().split(","), h))) || b === !0 && (null !== c.match.fn || /[0-9a-bA-Z]/.test(c.match.def))); i++);
            return c
        }

        function s(a, b, c) {
            return n().validPositions[a] || r(w(a, b ? b.slice() : b, c))
        }

        function t(a) {
            return n().validPositions[a] ? n().validPositions[a] : w(a)[0]
        }

        function u(a, b) {
            for (var c = !1, d = w(a), e = 0; e < d.length; e++)
                if (d[e].match && d[e].match.def === b) {
                    c = !0;
                    break
                } return c
        }

        function v(b, c) {
            var d, e;
            return (n().tests[b] || n().validPositions[b]) && a.each(n().tests[b] || [n().validPositions[b]], function(a, b) {
                var f = b.alternation ? b.locator[b.alternation].toString().indexOf(c) : -1;
                (void 0 === e || f < e) && f !== -1 && (d = b, e = f)
            }), d
        }

        function w(b, c, d) {
            function e(c, d, f, h) {
                function j(f, h, l) {
                    function q(b, c) {
                        var d = 0 === a.inArray(b, c.matches);
                        return d || a.each(c.matches, function(a, e) {
                            if (e.isQuantifier === !0 && (d = q(b, c.matches[a - 1]))) return !1
                        }), d
                    }

                    function r(a, b) {
                        var c = v(a, b);
                        return c ? c.locator.slice(c.alternation + 1) : void 0
                    }

                    function s(a, c) {
                        return null === a.match.fn && null !== c.match.fn && c.match.fn.test(a.match.def, n(), b, !1, g, !1)
                    }
                    if (k > 1e4) throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + n().mask;
                    if (k === b && void 0 === f.matches) return m.push({
                        match: f,
                        locator: h.reverse(),
                        cd: p
                    }), !0;
                    if (void 0 !== f.matches) {
                        if (f.isGroup && l !== f) {
                            if (f = j(c.matches[a.inArray(f, c.matches) + 1], h)) return !0
                        } else if (f.isOptional) {
                            var t = f;
                            if (f = e(f, d, h, l)) {
                                if (i = m[m.length - 1].match, !q(i, t)) return !0;
                                o = !0, k = b
                            }
                        } else if (f.isAlternator) {
                            var u, w = f,
                                x = [],
                                y = m.slice(),
                                z = h.length,
                                A = d.length > 0 ? d.shift() : -1;
                            if (A === -1 || "string" == typeof A) {
                                var B, C = k,
                                    D = d.slice(),
                                    E = [];
                                if ("string" == typeof A) E = A.split(",");
                                else
                                    for (B = 0; B < w.matches.length; B++) E.push(B);
                                for (var F = 0; F < E.length; F++) {
                                    if (B = parseInt(E[F]), m = [], d = r(k, B) || D.slice(), f = j(w.matches[B] || c.matches[B], [B].concat(h), l) || f, f !== !0 && void 0 !== f && E[E.length - 1] < w.matches.length) {
                                        var G = a.inArray(f, c.matches) + 1;
                                        c.matches.length > G && (f = j(c.matches[G], [G].concat(h.slice(1, h.length)), l), f && (E.push(G.toString()), a.each(m, function(a, b) {
                                            b.alternation = h.length - 1
                                        })))
                                    }
                                    u = m.slice(), k = C, m = [];
                                    for (var H = 0; H < u.length; H++) {
                                        var I = u[H],
                                            J = !1;
                                        I.alternation = I.alternation || z;
                                        for (var K = 0; K < x.length; K++) {
                                            var L = x[K];
                                            if (("string" != typeof A || a.inArray(I.locator[I.alternation].toString(), E) !== -1) && (I.match.def === L.match.def || s(I, L))) {
                                                J = I.match.nativeDef === L.match.nativeDef, L.locator[I.alternation].toString().indexOf(I.locator[I.alternation]) === -1 && (L.locator[I.alternation] = L.locator[I.alternation] + "," + I.locator[I.alternation], L.alternation = I.alternation, null == I.match.fn && (L.na = L.na || I.locator[I.alternation].toString(), L.na.indexOf(I.locator[I.alternation]) === -1 && (L.na = L.na + "," + I.locator[I.alternation])));
                                                break
                                            }
                                        }
                                        J || x.push(I)
                                    }
                                }
                                "string" == typeof A && (x = a.map(x, function(b, c) {
                                    if (isFinite(c)) {
                                        var d, e = b.alternation,
                                            f = b.locator[e].toString().split(",");
                                        b.locator[e] = void 0, b.alternation = void 0;
                                        for (var g = 0; g < f.length; g++) d = a.inArray(f[g], E) !== -1, d && (void 0 !== b.locator[e] ? (b.locator[e] += ",", b.locator[e] += f[g]) : b.locator[e] = parseInt(f[g]), b.alternation = e);
                                        if (void 0 !== b.locator[e]) return b
                                    }
                                })), m = y.concat(x), k = b, o = m.length > 0, d = D.slice()
                            } else f = j(w.matches[A] || c.matches[A], [A].concat(h), l);
                            if (f) return !0
                        } else if (f.isQuantifier && l !== c.matches[a.inArray(f, c.matches) - 1])
                            for (var M = f, N = d.length > 0 ? d.shift() : 0; N < (isNaN(M.quantifier.max) ? N + 1 : M.quantifier.max) && k <= b; N++) {
                                var O = c.matches[a.inArray(M, c.matches) - 1];
                                if (f = j(O, [N].concat(h), O)) {
                                    if (i = m[m.length - 1].match, i.optionalQuantifier = N > M.quantifier.min - 1, q(i, O)) {
                                        if (N > M.quantifier.min - 1) {
                                            o = !0, k = b;
                                            break
                                        }
                                        return !0
                                    }
                                    return !0
                                }
                            } else if (f = e(f, d, h, l)) return !0
                    } else k++
                }
                for (var l = d.length > 0 ? d.shift() : 0; l < c.matches.length; l++)
                    if (c.matches[l].isQuantifier !== !0) {
                        var q = j(c.matches[l], [l].concat(f), h);
                        if (q && k === b) return q;
                        if (k > b) break
                    }
            }

            function f(b) {
                var c = [];
                return a.isArray(b) || (b = [b]), b.length > 0 && (void 0 === b[0].alternation ? (c = r(b.slice()).locator.slice(), 0 === c.length && (c = b[0].locator.slice())) : a.each(b, function(a, b) {
                    if ("" !== b.def)
                        if (0 === c.length) c = b.locator.slice();
                        else
                            for (var d = 0; d < c.length; d++) b.locator[d] && c[d].toString().indexOf(b.locator[d]) === -1 && (c[d] += "," + b.locator[d])
                })), c
            }

            function h(a) {
                return g.keepStatic && b > 0 && a.length > 1 + ("" === a[a.length - 1].match.def ? 1 : 0) && a[0].match.optionality !== !0 && a[0].match.optionalQuantifier !== !0 && null === a[0].match.fn && !/[0-9a-bA-Z]/.test(a[0].match.def) ? [r(a)] : a
            }
            var i, j = n().maskToken,
                k = c ? d : 0,
                l = c ? c.slice() : [0],
                m = [],
                o = !1,
                p = c ? c.join("") : "";
            if (b > -1) {
                if (void 0 === c) {
                    for (var q, s = b - 1; void 0 === (q = n().validPositions[s] || n().tests[s]) && s > -1;) s--;
                    void 0 !== q && s > -1 && (l = f(q), p = l.join(""), k = s)
                }
                if (n().tests[b] && n().tests[b][0].cd === p) return h(n().tests[b]);
                for (var t = l.shift(); t < j.length; t++) {
                    var u = e(j[t], l, [t]);
                    if (u && k === b || k > b) break
                }
            }
            return (0 === m.length || o) && m.push({
                match: {
                    fn: null,
                    cardinality: 0,
                    optionality: !0,
                    casing: null,
                    def: "",
                    placeholder: ""
                },
                locator: [],
                cd: p
            }), void 0 !== c && n().tests[b] ? h(a.extend(!0, [], m)) : (n().tests[b] = a.extend(!0, [], m), h(n().tests[b]))
        }

        function x() {
            return void 0 === n()._buffer && (n()._buffer = i(!1, 1), void 0 === n().buffer && n()._buffer.slice()), n()._buffer
        }

        function y(a) {
            return void 0 !== n().buffer && a !== !0 || (n().buffer = i(!0, p(), !0)), n().buffer
        }

        function z(a, b, c) {
            var d;
            if (a === !0) o(), a = 0, b = c.length;
            else
                for (d = a; d < b; d++) delete n().validPositions[d];
            for (d = a; d < b; d++) o(!0), c[d] !== g.skipOptionalPartCharacter && C(d, c[d], !0, !0)
        }

        function A(a, c, d) {
            switch (g.casing || c.casing) {
                case "upper":
                    a = a.toUpperCase();
                    break;
                case "lower":
                    a = a.toLowerCase();
                    break;
                case "title":
                    var e = n().validPositions[d - 1];
                    a = 0 === d || e && e.input === String.fromCharCode(b.keyCode.SPACE) ? a.toUpperCase() : a.toLowerCase()
            }
            return a
        }

        function B(b, c) {
            for (var d = g.greedy ? c : c.slice(0, 1), e = !1, f = 0; f < b.length; f++)
                if (a.inArray(b[f], d) !== -1) {
                    e = !0;
                    break
                } return e
        }

        function C(c, d, e, f, h) {
            function i(a) {
                var b = ma ? a.begin - a.end > 1 || a.begin - a.end === 1 && g.insertMode : a.end - a.begin > 1 || a.end - a.begin === 1 && g.insertMode;
                return b && 0 === a.begin && a.end === n().maskLength ? "full" : b
            }

            function j(b, d, e) {
                var h = !1;
                return a.each(w(b), function(j, k) {
                    for (var l = k.match, r = d ? 1 : 0, s = "", t = l.cardinality; t > r; t--) s += G(b - (t - 1));
                    if (d && (s += d), y(!0), h = null != l.fn ? l.fn.test(s, n(), b, e, g, i(c)) : (d === l.def || d === g.skipOptionalPartCharacter) && "" !== l.def && {
                            c: l.placeholder || l.def,
                            pos: b
                        }, h !== !1) {
                        var u = void 0 !== h.c ? h.c : d;
                        u = u === g.skipOptionalPartCharacter && null === l.fn ? l.placeholder || l.def : u;
                        var v = b,
                            w = y();
                        if (void 0 !== h.remove && (a.isArray(h.remove) || (h.remove = [h.remove]), a.each(h.remove.sort(function(a, b) {
                                return b - a
                            }), function(a, b) {
                                q(b, b + 1, !0)
                            })), void 0 !== h.insert && (a.isArray(h.insert) || (h.insert = [h.insert]), a.each(h.insert.sort(function(a, b) {
                                return a - b
                            }), function(a, b) {
                                C(b.pos, b.c, !0, f)
                            })), h.refreshFromBuffer) {
                            var x = h.refreshFromBuffer;
                            if (e = !0, z(x === !0 ? x : x.start, x.end, w), void 0 === h.pos && void 0 === h.c) return h.pos = p(), !1;
                            if (v = void 0 !== h.pos ? h.pos : b, v !== b) return h = a.extend(h, C(v, u, !0, f)), !1
                        } else if (h !== !0 && void 0 !== h.pos && h.pos !== b && (v = h.pos, z(b, v, y().slice()), v !== b)) return h = a.extend(h, C(v, u, !0)), !1;
                        return (h === !0 || void 0 !== h.pos || void 0 !== h.c) && (j > 0 && o(!0), m(v, a.extend({}, k, {
                            input: A(u, l, v)
                        }), f, i(c)) || (h = !1), !1)
                    }
                }), h
            }

            function k(b, c, d) {
                var e, h, i, j, k, l, m, q, r = a.extend(!0, {}, n().validPositions),
                    s = !1,
                    t = p();
                for (j = n().validPositions[t]; t >= 0; t--)
                    if (i = n().validPositions[t], i && void 0 !== i.alternation) {
                        if (e = t, h = n().validPositions[e].alternation, j.locator[i.alternation] !== i.locator[i.alternation]) break;
                        j = i
                    } if (void 0 !== h) {
                    q = parseInt(e);
                    var u = void 0 !== j.locator[j.alternation || h] ? j.locator[j.alternation || h] : m[0];
                    u.length > 0 && (u = u.split(",")[0]);
                    var v = n().validPositions[q],
                        x = n().validPositions[q - 1];
                    a.each(w(q, x ? x.locator : void 0, q - 1), function(e, i) {
                        m = i.locator[h] ? i.locator[h].toString().split(",") : [];
                        for (var j = 0; j < m.length; j++) {
                            var t = [],
                                w = 0,
                                x = 0,
                                y = !1;
                            if (u < m[j] && (void 0 === i.na || a.inArray(m[j], i.na.split(",")) === -1)) {
                                n().validPositions[q] = a.extend(!0, {}, i);
                                var z = n().validPositions[q].locator;
                                for (n().validPositions[q].locator[h] = parseInt(m[j]), null == i.match.fn ? (v.input !== i.match.def && (y = !0, v.generatedInput !== !0 && t.push(v.input)), x++, n().validPositions[q].generatedInput = !/[0-9a-bA-Z]/.test(i.match.def), n().validPositions[q].input = i.match.def) : n().validPositions[q].input = v.input, k = q + 1; k < p(void 0, !0) + 1; k++) l = n().validPositions[k], l && l.generatedInput !== !0 && /[0-9a-bA-Z]/.test(l.input) ? t.push(l.input) : k < b && w++, delete n().validPositions[k];
                                for (y && t[0] === i.match.def && t.shift(), o(!0), s = !0; t.length > 0;) {
                                    var A = t.shift();
                                    if (A !== g.skipOptionalPartCharacter && !(s = C(p(void 0, !0) + 1, A, !1, f, !0))) break
                                }
                                if (s) {
                                    n().validPositions[q].locator = z;
                                    var B = p(b) + 1;
                                    for (k = q + 1; k < p() + 1; k++) l = n().validPositions[k], (void 0 === l || null == l.match.fn) && k < b + (x - w) && x++;
                                    b += x - w, s = C(b > B ? B : b, c, d, f, !0)
                                }
                                if (s) return !1;
                                o(), n().validPositions = a.extend(!0, {}, r)
                            }
                        }
                    })
                }
                return s
            }

            function l(b, c) {
                var d = n().validPositions[c];
                if (d)
                    for (var e = d.locator, f = e.length, g = b; g < c; g++)
                        if (void 0 === n().validPositions[g] && !D(g, !0)) {
                            var h = w(g),
                                i = h[0],
                                j = -1;
                            a.each(h, function(a, b) {
                                for (var c = 0; c < f && (void 0 !== b.locator[c] && B(b.locator[c].toString().split(","), e[c].toString().split(","))); c++) j < c && (j = c, i = b)
                            }), m(g, a.extend({}, i, {
                                input: i.match.placeholder || i.match.def
                            }), !0)
                        }
            }

            function m(b, c, d, e) {
                if (e || g.insertMode && void 0 !== n().validPositions[b] && void 0 === d) {
                    var f, h = a.extend(!0, {}, n().validPositions),
                        i = p(void 0, !0);
                    for (f = b; f <= i; f++) delete n().validPositions[f];
                    n().validPositions[b] = a.extend(!0, {}, c);
                    var j, k = !0,
                        l = n().validPositions,
                        m = !1,
                        q = n().maskLength;
                    for (f = j = b; f <= i; f++) {
                        var r = h[f];
                        if (void 0 !== r)
                            for (var s = j; s < n().maskLength && (null == r.match.fn && l[f] && (l[f].match.optionalQuantifier === !0 || l[f].match.optionality === !0) || null != r.match.fn);) {
                                if (s++, m === !1 && h[s] && h[s].match.def === r.match.def) n().validPositions[s] = a.extend(!0, {}, h[s]), n().validPositions[s].input = r.input, t(s), j = s, k = !0;
                                else if (u(s, r.match.def)) {
                                    var v = C(s, r.input, !0, !0);
                                    k = v !== !1, j = v.caret || v.insert ? p() : s, m = !0
                                } else k = r.generatedInput === !0;
                                if (n().maskLength < q && (n().maskLength = q), k) break
                            }
                        if (!k) break
                    }
                    if (!k) return n().validPositions = a.extend(!0, {}, h), o(!0), !1
                } else n().validPositions[b] = a.extend(!0, {}, c);
                return o(!0), !0
            }

            function t(b) {
                for (var c = b - 1; c > -1 && !n().validPositions[c]; c--);
                var d, e;
                for (c++; c < b; c++) void 0 === n().validPositions[c] && (g.jitMasking === !1 || g.jitMasking > c) && (e = w(c, s(c - 1).locator, c - 1).slice(), "" === e[e.length - 1].match.def && e.pop(), d = r(e), d && (d.match.def === g.radixPointDefinitionSymbol || !D(c, !0) || a.inArray(g.radixPoint, y()) < c && d.match.fn && d.match.fn.test(I(c), n(), c, !1, g)) && (x = j(c, d.match.placeholder || (null == d.match.fn ? d.match.def : "" !== I(c) ? I(c) : y()[c]), !0), x !== !1 && (n().validPositions[x.pos || c].generatedInput = !0)))
            }
            e = e === !0;
            var v = c;
            void 0 !== c.begin && (v = ma && !i(c) ? c.end : c.begin);
            var x = !1,
                F = a.extend(!0, {}, n().validPositions);
            if (t(v), i(c) && (Q(void 0, b.keyCode.DELETE, c), v = n().p), v < n().maskLength && (x = j(v, d, e), (!e || f === !0) && x === !1)) {
                var H = n().validPositions[v];
                if (!H || null !== H.match.fn || H.match.def !== d && d !== g.skipOptionalPartCharacter) {
                    if ((g.insertMode || void 0 === n().validPositions[E(v)]) && !D(v, !0)) {
                        var J = w(v).slice();
                        "" === J[J.length - 1].match.def && J.pop();
                        var K = r(J, !0);
                        K && null === K.match.fn && (K = K.match.placeholder || K.match.def, j(v, K, e), n().validPositions[v].generatedInput = !0);
                        for (var L = v + 1, M = E(v); L <= M; L++)
                            if (x = j(L, d, e), x !== !1) {
                                l(v, void 0 !== x.pos ? x.pos : L), v = L;
                                break
                            }
                    }
                } else x = {
                    caret: E(v)
                }
            }
            return x === !1 && g.keepStatic && !e && h !== !0 && (x = k(v, d, e)), x === !0 && (x = {
                pos: v
            }), a.isFunction(g.postValidation) && x !== !1 && !e && f !== !0 && (x = !!g.postValidation(y(!0), x, g) && x), void 0 === x.pos && (x.pos = v), x === !1 && (o(!0), n().validPositions = a.extend(!0, {}, F)), x
        }

        function D(a, b) {
            var c;
            if (b ? (c = s(a).match, "" === c.def && (c = t(a).match)) : c = t(a).match, null != c.fn) return c.fn;
            if (b !== !0 && a > -1) {
                var d = w(a);
                return d.length > 1 + ("" === d[d.length - 1].match.def ? 1 : 0)
            }
            return !1
        }

        function E(a, b) {
            var c = n().maskLength;
            if (a >= c) return c;
            for (var d = a; ++d < c && (b === !0 && (t(d).match.newBlockMarker !== !0 || !D(d)) || b !== !0 && !D(d)););
            return d
        }

        function F(a, b) {
            var c, d = a;
            if (d <= 0) return 0;
            for (; --d > 0 && (b === !0 && t(d).match.newBlockMarker !== !0 || b !== !0 && !D(d) && (c = w(d), c.length < 2 || 2 === c.length && "" === c[1].match.def)););
            return d
        }

        function G(a) {
            return void 0 === n().validPositions[a] ? I(a) : n().validPositions[a].input
        }

        function H(b, c, d, e, f) {
            if (e && a.isFunction(g.onBeforeWrite)) {
                var h = g.onBeforeWrite(e, c, d, g);
                if (h) {
                    if (h.refreshFromBuffer) {
                        var i = h.refreshFromBuffer;
                        z(i === !0 ? i : i.start, i.end, h.buffer || c), c = y(!0)
                    }
                    void 0 !== d && (d = void 0 !== h.caret ? h.caret : d)
                }
            }
            b.inputmask._valueSet(c.join("")), void 0 === d || void 0 !== e && "blur" === e.type ? ea(b, c, d) : L(b, d), f === !0 && (oa = !0, a(b).trigger("input"))
        }

        function I(a, b) {
            if (b = b || t(a).match, void 0 !== b.placeholder) return b.placeholder;
            if (null === b.fn) {
                if (a > -1 && void 0 === n().validPositions[a]) {
                    var c, d = w(a),
                        e = [];
                    if (d.length > 1 + ("" === d[d.length - 1].match.def ? 1 : 0))
                        for (var f = 0; f < d.length; f++)
                            if (d[f].match.optionality !== !0 && d[f].match.optionalQuantifier !== !0 && (null === d[f].match.fn || void 0 === c || d[f].match.fn.test(c.match.def, n(), a, !0, g) !== !1) && (e.push(d[f]), null === d[f].match.fn && (c = d[f]), e.length > 1 && /[0-9a-bA-Z]/.test(e[0].match.def))) return g.placeholder.charAt(a % g.placeholder.length)
                }
                return b.def
            }
            return g.placeholder.charAt(a % g.placeholder.length)
        }

        function J(c, d, e, f, h, i) {
            function j() {
                var a = !1,
                    b = x().slice(m, E(m)).join("").indexOf(l);
                if (b !== -1 && !D(m)) {
                    a = !0;
                    for (var c = x().slice(m, m + b), d = 0; d < c.length; d++)
                        if (" " !== c[d]) {
                            a = !1;
                            break
                        }
                }
                return a
            }
            var k = f.slice(),
                l = "",
                m = 0,
                q = void 0;
            if (o(), n().p = E(-1), !e)
                if (g.autoUnmask !== !0) {
                    var r = x().slice(0, E(-1)).join(""),
                        t = k.join("").match(new RegExp("^" + b.escapeRegex(r), "g"));
                    t && t.length > 0 && (k.splice(0, t.length * r.length), m = E(m))
                } else m = E(m);
            if (a.each(k, function(b, d) {
                    if (void 0 !== d) {
                        var f = new a.Event("keypress");
                        f.which = d.charCodeAt(0), l += d;
                        var h = p(void 0, !0),
                            i = n().validPositions[h],
                            k = s(h + 1, i ? i.locator.slice() : void 0, h);
                        if (!j() || e || g.autoUnmask) {
                            var r = e ? b : null == k.match.fn && k.match.optionality && h + 1 < n().p ? h + 1 : n().p;
                            q = S.call(c, f, !0, !1, e, r), m = r + 1, l = ""
                        } else q = S.call(c, f, !0, !1, !0, h + 1);
                        if (!e && a.isFunction(g.onBeforeWrite) && (q = g.onBeforeWrite(f, y(), q.forwardPosition, g), q && q.refreshFromBuffer)) {
                            var t = q.refreshFromBuffer;
                            z(t === !0 ? t : t.start, t.end, q.buffer), o(!0), q.caret && (n().p = q.caret)
                        }
                    }
                }), d) {
                var u = void 0,
                    v = p();
                document.activeElement === c && (h || q) && (u = L(c).begin, h && q === !1 && (u = E(p(u))), q && i !== !0 && (u < v + 1 || v === -1) && (u = g.numericInput && void 0 === q.caret ? F(q.forwardPosition) : q.forwardPosition)), H(c, y(), u, h || new a.Event("checkval"))
            }
        }

        function K(b) {
            if (b && void 0 === b.inputmask) return b.value;
            var c = [],
                d = n().validPositions;
            for (var e in d) d[e].match && null != d[e].match.fn && c.push(d[e].input);
            var f = 0 === c.length ? "" : (ma ? c.reverse() : c).join("");
            if (a.isFunction(g.onUnMask)) {
                var h = (ma ? y().slice().reverse() : y()).join("");
                f = g.onUnMask(h, f, g) || f
            }
            return f
        }

        function L(a, b, c, d) {
            function e(a) {
                if (d !== !0 && ma && "number" == typeof a && (!g.greedy || "" !== g.placeholder)) {
                    var b = y().join("").length;
                    a = b - a
                }
                return a
            }
            var f;
            if ("number" != typeof b) return a.setSelectionRange ? (b = a.selectionStart, c = a.selectionEnd) : window.getSelection ? (f = window.getSelection().getRangeAt(0), f.commonAncestorContainer.parentNode !== a && f.commonAncestorContainer !== a || (b = f.startOffset, c = f.endOffset)) : document.selection && document.selection.createRange && (f = document.selection.createRange(), b = 0 - f.duplicate().moveStart("character", -a.inputmask._valueGet().length), c = b + f.text.length), {
                begin: e(b),
                end: e(c)
            };
            b = e(b), c = e(c), c = "number" == typeof c ? c : b;
            var h = parseInt(((a.ownerDocument.defaultView || window).getComputedStyle ? (a.ownerDocument.defaultView || window).getComputedStyle(a, null) : a.currentStyle).fontSize) * c;
            if (a.scrollLeft = h > a.scrollWidth ? h : 0, j || g.insertMode !== !1 || b !== c || c++, a.setSelectionRange) a.selectionStart = b, a.selectionEnd = c;
            else if (window.getSelection) {
                if (f = document.createRange(), void 0 === a.firstChild || null === a.firstChild) {
                    var i = document.createTextNode("");
                    a.appendChild(i)
                }
                f.setStart(a.firstChild, b < a.inputmask._valueGet().length ? b : a.inputmask._valueGet().length), f.setEnd(a.firstChild, c < a.inputmask._valueGet().length ? c : a.inputmask._valueGet().length), f.collapse(!0);
                var k = window.getSelection();
                k.removeAllRanges(), k.addRange(f)
            } else a.createTextRange && (f = a.createTextRange(), f.collapse(!0), f.moveEnd("character", c), f.moveStart("character", b), f.select());
            ea(a, void 0, {
                begin: b,
                end: c
            })
        }

        function M(b) {
            var c, d, e = y(),
                f = e.length,
                g = p(),
                h = {},
                i = n().validPositions[g],
                j = void 0 !== i ? i.locator.slice() : void 0;
            for (c = g + 1; c < e.length; c++) d = s(c, j, c - 1), j = d.locator.slice(), h[c] = a.extend(!0, {}, d);
            var k = i && void 0 !== i.alternation ? i.locator[i.alternation] : void 0;
            for (c = f - 1; c > g && (d = h[c], (d.match.optionality || d.match.optionalQuantifier || k && (k !== h[c].locator[i.alternation] && null != d.match.fn || null === d.match.fn && d.locator[i.alternation] && B(d.locator[i.alternation].toString().split(","), k.toString().split(",")) && "" !== w(c)[0].def)) && e[c] === I(c, d.match)); c--) f--;
            return b ? {
                l: f,
                def: h[f] ? h[f].match : void 0
            } : f
        }

        function N(a) {
            for (var b = M(), c = a.length - 1; c > b && !D(c); c--);
            return a.splice(b, c + 1 - b), a
        }

        function O(b) {
            if (a.isFunction(g.isComplete)) return g.isComplete(b, g);
            if ("*" !== g.repeat) {
                var c = !1,
                    d = M(!0),
                    e = F(d.l);
                if (void 0 === d.def || d.def.newBlockMarker || d.def.optionality || d.def.optionalQuantifier) {
                    c = !0;
                    for (var f = 0; f <= e; f++) {
                        var h = s(f).match;
                        if (null !== h.fn && void 0 === n().validPositions[f] && h.optionality !== !0 && h.optionalQuantifier !== !0 || null === h.fn && b[f] !== I(f, h)) {
                            c = !1;
                            break
                        }
                    }
                }
                return c
            }
        }

        function P(b) {
            function c(b) {
                if (a.valHooks && (void 0 === a.valHooks[b] || a.valHooks[b].inputmaskpatch !== !0)) {
                    var c = a.valHooks[b] && a.valHooks[b].get ? a.valHooks[b].get : function(a) {
                            return a.value
                        },
                        d = a.valHooks[b] && a.valHooks[b].set ? a.valHooks[b].set : function(a, b) {
                            return a.value = b, a
                        };
                    a.valHooks[b] = {
                        get: function(a) {
                            if (a.inputmask) {
                                if (a.inputmask.opts.autoUnmask) return a.inputmask.unmaskedvalue();
                                var b = c(a);
                                return p(void 0, void 0, a.inputmask.maskset.validPositions) !== -1 || g.nullable !== !0 ? b : ""
                            }
                            return c(a)
                        },
                        set: function(b, c) {
                            var e, f = a(b);
                            return e = d(b, c), b.inputmask && f.trigger("setvalue"), e
                        },
                        inputmaskpatch: !0
                    }
                }
            }

            function d() {
                return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : p() !== -1 || g.nullable !== !0 ? document.activeElement === this && g.clearMaskOnLostFocus ? (ma ? N(y().slice()).reverse() : N(y().slice())).join("") : h.call(this) : "" : h.call(this)
            }

            function e(b) {
                i.call(this, b), this.inputmask && a(this).trigger("setvalue")
            }

            function f(b) {
                ra.on(b, "mouseenter", function(b) {
                    var c = a(this),
                        d = this,
                        e = d.inputmask._valueGet();
                    e !== y().join("") && c.trigger("setvalue")
                })
            }
            var h, i;
            if (!b.inputmask.__valueGet) {
                if (g.noValuePatching !== !0) {
                    if (Object.getOwnPropertyDescriptor) {
                        "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" == typeof "test".__proto__ ? function(a) {
                            return a.__proto__
                        } : function(a) {
                            return a.constructor.prototype
                        });
                        var j = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(b), "value") : void 0;
                        j && j.get && j.set ? (h = j.get, i = j.set, Object.defineProperty(b, "value", {
                            get: d,
                            set: e,
                            configurable: !0
                        })) : "INPUT" !== b.tagName && (h = function() {
                            return this.textContent
                        }, i = function(a) {
                            this.textContent = a
                        }, Object.defineProperty(b, "value", {
                            get: d,
                            set: e,
                            configurable: !0
                        }))
                    } else document.__lookupGetter__ && b.__lookupGetter__("value") && (h = b.__lookupGetter__("value"), i = b.__lookupSetter__("value"), b.__defineGetter__("value", d), b.__defineSetter__("value", e));
                    b.inputmask.__valueGet = h, b.inputmask.__valueSet = i
                }
                b.inputmask._valueGet = function(a) {
                    return ma && a !== !0 ? h.call(this.el).split("").reverse().join("") : h.call(this.el)
                }, b.inputmask._valueSet = function(a, b) {
                    i.call(this.el, null === a || void 0 === a ? "" : b !== !0 && ma ? a.split("").reverse().join("") : a)
                }, void 0 === h && (h = function() {
                    return this.value
                }, i = function(a) {
                    this.value = a
                }, c(b.type), f(b))
            }
        }

        function Q(c, d, e, f) {
            function h() {
                if (g.keepStatic) {
                    for (var b = [], d = p(-1, !0), e = a.extend(!0, {}, n().validPositions), f = n().validPositions[d]; d >= 0; d--) {
                        var h = n().validPositions[d];
                        if (h) {
                            if (h.generatedInput !== !0 && /[0-9a-bA-Z]/.test(h.input) && b.push(h.input), delete n().validPositions[d], void 0 !== h.alternation && h.locator[h.alternation] !== f.locator[h.alternation]) break;
                            f = h
                        }
                    }
                    if (d > -1)
                        for (n().p = E(p(-1, !0)); b.length > 0;) {
                            var i = new a.Event("keypress");
                            i.which = b.pop().charCodeAt(0), S.call(c, i, !0, !1, !1, n().p)
                        } else n().validPositions = a.extend(!0, {}, e)
                }
            }
            if ((g.numericInput || ma) && (d === b.keyCode.BACKSPACE ? d = b.keyCode.DELETE : d === b.keyCode.DELETE && (d = b.keyCode.BACKSPACE), ma)) {
                var i = e.end;
                e.end = e.begin, e.begin = i
            }
            d === b.keyCode.BACKSPACE && (e.end - e.begin < 1 || g.insertMode === !1) ? (e.begin = F(e.begin), void 0 === n().validPositions[e.begin] || n().validPositions[e.begin].input !== g.groupSeparator && n().validPositions[e.begin].input !== g.radixPoint || e.begin--) : d === b.keyCode.DELETE && e.begin === e.end && (e.end = D(e.end, !0) ? e.end + 1 : E(e.end) + 1, void 0 === n().validPositions[e.begin] || n().validPositions[e.begin].input !== g.groupSeparator && n().validPositions[e.begin].input !== g.radixPoint || e.end++), q(e.begin, e.end, !1, f), f !== !0 && h();
            var j = p(e.begin, !0);
            j < e.begin ? n().p = E(j) : f !== !0 && (n().p = e.begin)
        }

        function R(d) {
            var e = this,
                f = a(e),
                h = d.keyCode,
                i = L(e);
            if (h === b.keyCode.BACKSPACE || h === b.keyCode.DELETE || l && h === b.keyCode.BACKSPACE_SAFARI || d.ctrlKey && h === b.keyCode.X && !c("cut")) d.preventDefault(), Q(e, h, i), H(e, y(!0), n().p, d, e.inputmask._valueGet() !== y().join("")), e.inputmask._valueGet() === x().join("") ? f.trigger("cleared") : O(y()) === !0 && f.trigger("complete"), g.showTooltip && (e.title = g.tooltip || n().mask);
            else if (h === b.keyCode.END || h === b.keyCode.PAGE_DOWN) {
                d.preventDefault();
                var j = E(p());
                g.insertMode || j !== n().maskLength || d.shiftKey || j--, L(e, d.shiftKey ? i.begin : j, j, !0)
            } else h === b.keyCode.HOME && !d.shiftKey || h === b.keyCode.PAGE_UP ? (d.preventDefault(), L(e, 0, d.shiftKey ? i.begin : 0, !0)) : (g.undoOnEscape && h === b.keyCode.ESCAPE || 90 === h && d.ctrlKey) && d.altKey !== !0 ? (J(e, !0, !1, ga.split("")), f.trigger("click")) : h !== b.keyCode.INSERT || d.shiftKey || d.ctrlKey ? g.tabThrough === !0 && h === b.keyCode.TAB ? (d.shiftKey === !0 ? (null === t(i.begin).match.fn && (i.begin = E(i.begin)), i.end = F(i.begin, !0), i.begin = F(i.end, !0)) : (i.begin = E(i.begin, !0), i.end = E(i.begin, !0), i.end < n().maskLength && i.end--), i.begin < n().maskLength && (d.preventDefault(), L(e, i.begin, i.end))) : d.shiftKey || (g.insertMode === !1 ? h === b.keyCode.RIGHT ? setTimeout(function() {
                var a = L(e);
                L(e, a.begin)
            }, 0) : h === b.keyCode.LEFT && setTimeout(function() {
                var a = L(e);
                L(e, ma ? a.begin + 1 : a.begin - 1)
            }, 0) : setTimeout(function() {
                ea(e)
            }, 0)) : (g.insertMode = !g.insertMode, L(e, g.insertMode || i.begin !== n().maskLength ? i.begin : i.begin - 1));
            g.onKeyDown.call(this, d, y(), L(e).begin, g), pa = a.inArray(h, g.ignorables) !== -1
        }

        function S(c, d, e, f, h) {
            var i = this,
                j = a(i),
                k = c.which || c.charCode || c.keyCode;
            if (!(d === !0 || c.ctrlKey && c.altKey) && (c.ctrlKey || c.metaKey || pa)) return k === b.keyCode.ENTER && ga !== y().join("") && (ga = y().join(""), setTimeout(function() {
                j.trigger("change")
            }, 0)), !0;
            if (k) {
                46 === k && c.shiftKey === !1 && "," === g.radixPoint && (k = 44);
                var l, m = d ? {
                        begin: h,
                        end: h
                    } : L(i),
                    p = String.fromCharCode(k);
                n().writeOutBuffer = !0;
                var q = C(m, p, f);
                if (q !== !1 && (o(!0), l = void 0 !== q.caret ? q.caret : d ? q.pos + 1 : E(q.pos), n().p = l), e !== !1) {
                    var r = this;
                    if (setTimeout(function() {
                            g.onKeyValidation.call(r, k, q, g)
                        }, 0), n().writeOutBuffer && q !== !1) {
                        var s = y();
                        H(i, s, g.numericInput && void 0 === q.caret ? F(l) : l, c, d !== !0), d !== !0 && setTimeout(function() {
                            O(s) === !0 && j.trigger("complete")
                        }, 0)
                    }
                }
                if (g.showTooltip && (i.title = g.tooltip || n().mask), c.preventDefault(), d) return q.forwardPosition = l, q
            }
        }

        function T(b) {
            var c, d = this,
                e = b.originalEvent || b,
                f = a(d),
                h = d.inputmask._valueGet(!0),
                i = L(d);
            ma && (c = i.end, i.end = i.begin, i.begin = c);
            var j = h.substr(0, i.begin),
                k = h.substr(i.end, h.length);
            if (j === (ma ? x().reverse() : x()).slice(0, i.begin).join("") && (j = ""), k === (ma ? x().reverse() : x()).slice(i.end).join("") && (k = ""), ma && (c = j, j = k, k = c), window.clipboardData && window.clipboardData.getData) h = j + window.clipboardData.getData("Text") + k;
            else {
                if (!e.clipboardData || !e.clipboardData.getData) return !0;
                h = j + e.clipboardData.getData("text/plain") + k
            }
            var l = h;
            if (a.isFunction(g.onBeforePaste)) {
                if (l = g.onBeforePaste(h, g), l === !1) return b.preventDefault();
                l || (l = h)
            }
            return J(d, !1, !1, ma ? l.split("").reverse() : l.toString().split("")), H(d, y(), E(p()), b, ga !== y().join("")), O(y()) === !0 && f.trigger("complete"), b.preventDefault()
        }

        function U(c) {
            var d = this,
                e = d.inputmask._valueGet();
            if (y().join("") !== e) {
                var f = L(d);
                if (e = e.replace(new RegExp("(" + b.escapeRegex(x().join("")) + ")*"), ""), k) {
                    var g = e.replace(y().join(""), "");
                    if (1 === g.length) {
                        var h = new a.Event("keypress");
                        return h.which = g.charCodeAt(0), S.call(d, h, !0, !0, !1, n().validPositions[f.begin - 1] ? f.begin : f.begin - 1), !1
                    }
                }
                if (f.begin > e.length && (L(d, e.length), f = L(d)), y().length - e.length !== 1 || e.charAt(f.begin) === y()[f.begin] || e.charAt(f.begin + 1) === y()[f.begin] || D(f.begin)) {
                    for (var i = p() + 1, j = x().join(""); null === e.match(b.escapeRegex(j) + "$");) j = j.slice(1);
                    e = e.replace(j, ""), e = e.split(""), J(d, !0, !1, e, c, f.begin < i), O(y()) === !0 && a(d).trigger("complete")
                } else c.keyCode = b.keyCode.BACKSPACE, R.call(d, c);
                c.preventDefault()
            }
        }

        function V(b) {
            var c = this,
                d = c.inputmask._valueGet();
            J(c, !0, !1, (a.isFunction(g.onBeforeMask) ? g.onBeforeMask(d, g) || d : d).split("")), ga = y().join(""), (g.clearMaskOnLostFocus || g.clearIncomplete) && c.inputmask._valueGet() === x().join("") && c.inputmask._valueSet("")
        }

        function W(a) {
            var b = this,
                c = b.inputmask._valueGet();
            g.showMaskOnFocus && (!g.showMaskOnHover || g.showMaskOnHover && "" === c) && (b.inputmask._valueGet() !== y().join("") ? H(b, y(), E(p())) : qa === !1 && L(b, E(p()))), g.positionCaretOnTab === !0 && setTimeout(function() {
                Y.apply(this, [a])
            }, 0), ga = y().join("")
        }

        function X(a) {
            var b = this;
            if (qa = !1, g.clearMaskOnLostFocus && document.activeElement !== b) {
                var c = y().slice(),
                    d = b.inputmask._valueGet();
                d !== b.getAttribute("placeholder") && "" !== d && (p() === -1 && d === x().join("") ? c = [] : N(c), H(b, c))
            }
        }

        function Y(b) {
            function c(b) {
                if ("" !== g.radixPoint) {
                    var c = n().validPositions;
                    if (void 0 === c[b] || c[b].input === I(b)) {
                        if (b < E(-1)) return !0;
                        var d = a.inArray(g.radixPoint, y());
                        if (d !== -1) {
                            for (var e in c)
                                if (d < e && c[e].input !== I(e)) return !1;
                            return !0
                        }
                    }
                }
                return !1
            }
            var d = this;
            setTimeout(function() {
                if (document.activeElement === d) {
                    var b = L(d);
                    if (b.begin === b.end) switch (g.positionCaretOnClick) {
                        case "none":
                            break;
                        case "radixFocus":
                            if (c(b.begin)) {
                                var e = a.inArray(g.radixPoint, y().join(""));
                                L(d, g.numericInput ? E(e) : e);
                                break
                            }
                            default:
                                var f = b.begin,
                                    h = p(f, !0),
                                    i = E(h);
                                if (f < i) L(d, D(f) || D(f - 1) ? f : E(f));
                                else {
                                    var j = I(i);
                                    ("" !== j && y()[i] !== j && t(i).match.optionalQuantifier !== !0 || !D(i, !0) && t(i).match.def === j) && (i = E(i)), L(d, i)
                                }
                    }
                }
            }, 0)
        }

        function Z(a) {
            var b = this;
            setTimeout(function() {
                L(b, 0, E(p()))
            }, 0)
        }

        function $(c) {
            var d = this,
                e = a(d),
                f = L(d),
                h = c.originalEvent || c,
                i = window.clipboardData || h.clipboardData,
                j = ma ? y().slice(f.end, f.begin) : y().slice(f.begin, f.end);
            i.setData("text", ma ? j.reverse().join("") : j.join("")), document.execCommand && document.execCommand("copy"), Q(d, b.keyCode.DELETE, f), H(d, y(), n().p, c, ga !== y().join("")), d.inputmask._valueGet() === x().join("") && e.trigger("cleared"), g.showTooltip && (d.title = g.tooltip || n().mask)
        }

        function _(b) {
            var c = a(this),
                d = this;
            if (d.inputmask) {
                var e = d.inputmask._valueGet(),
                    f = y().slice();
                ga !== f.join("") && setTimeout(function() {
                    c.trigger("change"), ga = f.join("")
                }, 0), "" !== e && (g.clearMaskOnLostFocus && (p() === -1 && e === x().join("") ? f = [] : N(f)), O(f) === !1 && (setTimeout(function() {
                    c.trigger("incomplete")
                }, 0), g.clearIncomplete && (o(), f = g.clearMaskOnLostFocus ? [] : x().slice())), H(d, f, void 0, b))
            }
        }

        function aa(a) {
            var b = this;
            qa = !0, document.activeElement !== b && g.showMaskOnHover && b.inputmask._valueGet() !== y().join("") && H(b, y())
        }

        function ba(a) {
            ga !== y().join("") && ia.trigger("change"), g.clearMaskOnLostFocus && p() === -1 && ha.inputmask._valueGet && ha.inputmask._valueGet() === x().join("") && ha.inputmask._valueSet(""), g.removeMaskOnSubmit && (ha.inputmask._valueSet(ha.inputmask.unmaskedvalue(), !0), setTimeout(function() {
                H(ha, y())
            }, 0))
        }

        function ca(a) {
            setTimeout(function() {
                ia.trigger("setvalue")
            }, 0)
        }

        function da(b) {
            function c(a) {
                var c, d = document.createElement("span");
                for (var e in f) isNaN(e) && e.indexOf("font") !== -1 && (d.style[e] = f[e]);
                d.style.textTransform = f.textTransform, d.style.letterSpacing = f.letterSpacing,
                    d.style.position = "absolute", d.style.height = "auto", d.style.width = "auto", d.style.visibility = "hidden", d.style.whiteSpace = "nowrap", document.body.appendChild(d);
                var g, h = b.inputmask._valueGet(),
                    i = 0;
                for (c = 0, g = h.length; c <= g; c++) {
                    if (d.innerHTML += h.charAt(c) || "_", d.offsetWidth >= a) {
                        var j = a - i,
                            k = d.offsetWidth - a;
                        d.innerHTML = h.charAt(c), j -= d.offsetWidth / 3, c = j < k ? c - 1 : c;
                        break
                    }
                    i = d.offsetWidth
                }
                return document.body.removeChild(d), c
            }

            function d() {
                ka.style.position = "absolute", ka.style.top = e.top + "px", ka.style.left = e.left + "px", ka.style.width = parseInt(b.offsetWidth) - parseInt(f.paddingLeft) - parseInt(f.paddingRight) - parseInt(f.borderLeftWidth) - parseInt(f.borderRightWidth) + "px", ka.style.height = parseInt(b.offsetHeight) - parseInt(f.paddingTop) - parseInt(f.paddingBottom) - parseInt(f.borderTopWidth) - parseInt(f.borderBottomWidth) + "px", ka.style.lineHeight = ka.style.height, ka.style.zIndex = isNaN(f.zIndex) ? -1 : f.zIndex - 1, ka.style.webkitAppearance = "textfield", ka.style.mozAppearance = "textfield", ka.style.Appearance = "textfield"
            }
            var e = a(b).position(),
                f = (b.ownerDocument.defaultView || window).getComputedStyle(b, null);
            b.parentNode;
            ka = document.createElement("div"), document.body.appendChild(ka);
            for (var g in f) isNaN(g) && "cssText" !== g && g.indexOf("webkit") == -1 && (ka.style[g] = f[g]);
            b.style.backgroundColor = "transparent", b.style.color = "transparent", b.style.webkitAppearance = "caret", b.style.mozAppearance = "caret", b.style.Appearance = "caret", d(), a(window).on("resize", function(c) {
                e = a(b).position(), f = (b.ownerDocument.defaultView || window).getComputedStyle(b, null), d()
            }), a(b).on("click", function(a) {
                return L(b, c(a.clientX)), Y.call(this, [a])
            })
        }

        function ea(a, b, c) {
            function d() {
                f || null !== i.fn && void 0 !== j.input ? f && null !== i.fn && void 0 !== j.input && (f = !1, e += "</span>") : (f = !0, e += "<span class='im-static''>")
            }
            if (void 0 !== ka) {
                b = b || y(), void 0 === c ? c = L(a) : void 0 === c.begin && (c = {
                    begin: c,
                    end: c
                });
                var e = "",
                    f = !1;
                if ("" != b) {
                    var h, i, j, k = 0,
                        l = p();
                    do k === c.begin && document.activeElement === a && (e += "<span class='im-caret' style='border-right-width: 1px;border-right-style: solid;'></span>"), n().validPositions[k] ? (j = n().validPositions[k], i = j.match, h = j.locator.slice(), d(), e += j.input) : (j = s(k, h, k - 1), i = j.match, h = j.locator.slice(), (g.jitMasking === !1 || k < l || Number.isFinite(g.jitMasking) && g.jitMasking > k) && (d(), e += I(k, i))), k++; while ((void 0 === ja || k < ja) && (null !== i.fn || "" !== i.def) || l > k)
                }
                ka.innerHTML = e
            }
        }

        function fa(b) {
            if (d(b, g) && (ha = b, ia = a(ha), g.showTooltip && (ha.title = g.tooltip || n().mask), ("rtl" === ha.dir || g.rightAlign) && (ha.style.textAlign = "right"), ("rtl" === ha.dir || g.numericInput) && (ha.dir = "ltr", ha.removeAttribute("dir"), ha.inputmask.isRTL = !0, ma = !0), g.colorMask === !0 && da(ha), m && (ha.hasOwnProperty("inputmode") && (ha.inputmode = g.inputmode, ha.setAttribute("inputmode", g.inputmode)), "rtfm" === g.androidHack && (g.colorMask !== !0 && da(ha), ha.type = "password")), ra.off(ha), P(ha), ra.on(ha, "submit", ba), ra.on(ha, "reset", ca), ra.on(ha, "mouseenter", aa), ra.on(ha, "blur", _), ra.on(ha, "focus", W), ra.on(ha, "mouseleave", X), g.colorMask !== !0 && ra.on(ha, "click", Y), ra.on(ha, "dblclick", Z), ra.on(ha, "paste", T), ra.on(ha, "dragdrop", T), ra.on(ha, "drop", T), ra.on(ha, "cut", $), ra.on(ha, "complete", g.oncomplete), ra.on(ha, "incomplete", g.onincomplete), ra.on(ha, "cleared", g.oncleared), g.inputEventOnly !== !0 && (ra.on(ha, "keydown", R), ra.on(ha, "keypress", S)), ra.on(ha, "compositionstart", a.noop), ra.on(ha, "compositionupdate", a.noop), ra.on(ha, "compositionend", a.noop), ra.on(ha, "keyup", a.noop), ra.on(ha, "input", U), ra.on(ha, "setvalue", V), x(), "" !== ha.inputmask._valueGet() || g.clearMaskOnLostFocus === !1 || document.activeElement === ha)) {
                var c = a.isFunction(g.onBeforeMask) ? g.onBeforeMask(ha.inputmask._valueGet(), g) || ha.inputmask._valueGet() : ha.inputmask._valueGet();
                J(ha, !0, !1, c.split(""));
                var e = y().slice();
                ga = e.join(""), O(e) === !1 && g.clearIncomplete && o(), g.clearMaskOnLostFocus && document.activeElement !== ha && (p() === -1 ? e = [] : N(e)), H(ha, e), document.activeElement === ha && L(ha, E(p()))
            }
        }
        var ga, ha, ia, ja, ka, la, ma = !1,
            na = !1,
            oa = !1,
            pa = !1,
            qa = !1,
            ra = {
                on: function(c, d, e) {
                    var f = function(c) {
                        if (void 0 === this.inputmask && "FORM" !== this.nodeName) {
                            var d = a.data(this, "_inputmask_opts");
                            d ? new b(d).mask(this) : ra.off(this)
                        } else {
                            if ("setvalue" === c.type || !(this.disabled || this.readOnly && !("keydown" === c.type && c.ctrlKey && 67 === c.keyCode || g.tabThrough === !1 && c.keyCode === b.keyCode.TAB))) {
                                switch (c.type) {
                                    case "input":
                                        if (oa === !0) return oa = !1, c.preventDefault();
                                        break;
                                    case "keydown":
                                        na = !1, oa = !1;
                                        break;
                                    case "keypress":
                                        if (na === !0) return c.preventDefault();
                                        na = !0;
                                        break;
                                    case "click":
                                        if (k || l) {
                                            var f = this,
                                                h = arguments;
                                            return setTimeout(function() {
                                                e.apply(f, h)
                                            }, 0), !1
                                        }
                                }
                                var i = e.apply(this, arguments);
                                return i === !1 && (c.preventDefault(), c.stopPropagation()), i
                            }
                            c.preventDefault()
                        }
                    };
                    c.inputmask.events[d] = c.inputmask.events[d] || [], c.inputmask.events[d].push(f), a.inArray(d, ["submit", "reset"]) !== -1 ? null != c.form && a(c.form).on(d, f) : a(c).on(d, f)
                },
                off: function(b, c) {
                    if (b.inputmask && b.inputmask.events) {
                        var d;
                        c ? (d = [], d[c] = b.inputmask.events[c]) : d = b.inputmask.events, a.each(d, function(c, d) {
                            for (; d.length > 0;) {
                                var e = d.pop();
                                a.inArray(c, ["submit", "reset"]) !== -1 ? null != b.form && a(b.form).off(c, e) : a(b).off(c, e)
                            }
                            delete b.inputmask.events[c]
                        })
                    }
                }
            };
        if (void 0 !== e) switch (e.action) {
            case "isComplete":
                return ha = e.el, O(y());
            case "unmaskedvalue":
                return ha = e.el, void 0 !== ha && void 0 !== ha.inputmask ? (f = ha.inputmask.maskset, g = ha.inputmask.opts, ma = ha.inputmask.isRTL) : (la = e.value, g.numericInput && (ma = !0), la = (a.isFunction(g.onBeforeMask) ? g.onBeforeMask(la, g) || la : la).split(""), J(void 0, !1, !1, ma ? la.reverse() : la), a.isFunction(g.onBeforeWrite) && g.onBeforeWrite(void 0, y(), 0, g)), K(ha);
            case "mask":
                ha = e.el, f = ha.inputmask.maskset, g = ha.inputmask.opts, ma = ha.inputmask.isRTL, fa(ha);
                break;
            case "format":
                return g.numericInput && (ma = !0), la = (a.isFunction(g.onBeforeMask) ? g.onBeforeMask(e.value, g) || e.value : e.value).split(""), J(void 0, !1, !1, ma ? la.reverse() : la), a.isFunction(g.onBeforeWrite) && g.onBeforeWrite(void 0, y(), 0, g), e.metadata ? {
                    value: ma ? y().slice().reverse().join("") : y().join(""),
                    metadata: h({
                        action: "getmetadata"
                    }, f, g)
                } : ma ? y().slice().reverse().join("") : y().join("");
            case "isValid":
                g.numericInput && (ma = !0), e.value ? (la = e.value.split(""), J(void 0, !1, !0, ma ? la.reverse() : la)) : e.value = y().join("");
                for (var sa = y(), ta = M(), ua = sa.length - 1; ua > ta && !D(ua); ua--);
                return sa.splice(ta, ua + 1 - ta), O(sa) && e.value === y().join("");
            case "getemptymask":
                return x().join("");
            case "remove":
                ha = e.el, ia = a(ha), f = ha.inputmask.maskset, g = ha.inputmask.opts, ha.inputmask._valueSet(K(ha)), ra.off(ha);
                var va;
                Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? (va = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(ha), "value"), va && ha.inputmask.__valueGet && Object.defineProperty(ha, "value", {
                    get: ha.inputmask.__valueGet,
                    set: ha.inputmask.__valueSet,
                    configurable: !0
                })) : document.__lookupGetter__ && ha.__lookupGetter__("value") && ha.inputmask.__valueGet && (ha.__defineGetter__("value", ha.inputmask.__valueGet), ha.__defineSetter__("value", ha.inputmask.__valueSet)), ha.inputmask = void 0;
                break;
            case "getmetadata":
                if (a.isArray(f.metadata)) {
                    for (var wa, xa = p(void 0, !0), ya = xa; ya >= 0; ya--)
                        if (n().validPositions[ya] && void 0 !== n().validPositions[ya].alternation) {
                            wa = n().validPositions[ya].alternation;
                            break
                        } return void 0 !== wa ? f.metadata[n().validPositions[ya].locator[wa]] : []
                }
                return f.metadata
        }
    }
    b.prototype = {
        defaults: {
            placeholder: "_",
            optionalmarker: {
                start: "[",
                end: "]"
            },
            quantifiermarker: {
                start: "{",
                end: "}"
            },
            groupmarker: {
                start: "(",
                end: ")"
            },
            alternatormarker: "|",
            escapeChar: "\\",
            mask: null,
            oncomplete: a.noop,
            onincomplete: a.noop,
            oncleared: a.noop,
            repeat: 0,
            greedy: !0,
            autoUnmask: !1,
            removeMaskOnSubmit: !1,
            clearMaskOnLostFocus: !0,
            insertMode: !0,
            clearIncomplete: !1,
            aliases: {},
            alias: null,
            onKeyDown: a.noop,
            onBeforeMask: null,
            onBeforePaste: function(b, c) {
                return a.isFunction(c.onBeforeMask) ? c.onBeforeMask(b, c) : b
            },
            onBeforeWrite: null,
            onUnMask: null,
            showMaskOnFocus: !0,
            showMaskOnHover: !0,
            onKeyValidation: a.noop,
            skipOptionalPartCharacter: " ",
            showTooltip: !1,
            tooltip: void 0,
            numericInput: !1,
            rightAlign: !1,
            undoOnEscape: !0,
            radixPoint: "",
            radixPointDefinitionSymbol: void 0,
            groupSeparator: "",
            keepStatic: null,
            positionCaretOnTab: !0,
            tabThrough: !1,
            supportsInputType: ["text", "tel", "password"],
            definitions: {
                9: {
                    validator: "[0-9]",
                    cardinality: 1,
                    definitionSymbol: "*"
                },
                a: {
                    validator: "[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
                    cardinality: 1,
                    definitionSymbol: "*"
                },
                "*": {
                    validator: "[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
                    cardinality: 1
                }
            },
            ignorables: [8, 9, 13, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123],
            isComplete: null,
            canClearPosition: a.noop,
            postValidation: null,
            staticDefinitionSymbol: void 0,
            jitMasking: !1,
            nullable: !0,
            inputEventOnly: !1,
            noValuePatching: !1,
            positionCaretOnClick: "lvp",
            casing: null,
            inputmode: "verbatim",
            colorMask: !1,
            androidHack: !1
        },
        masksCache: {},
        mask: function(c) {
            var d = this;
            return "string" == typeof c && (c = document.getElementById(c) || document.querySelectorAll(c)), c = c.nodeName ? [c] : c, a.each(c, function(c, e) {
                var i = a.extend(!0, {}, d.opts);
                f(e, i, a.extend(!0, {}, d.userOptions), d.dataAttribute);
                var j = g(i, d.noMasksCache);
                void 0 !== j && (void 0 !== e.inputmask && e.inputmask.remove(), e.inputmask = new b, e.inputmask.opts = i, e.inputmask.noMasksCache = d.noMasksCache, e.inputmask.userOptions = a.extend(!0, {}, d.userOptions), e.inputmask.el = e, e.inputmask.maskset = j, e.inputmask.isRTL = !1, a.data(e, "_inputmask_opts", i), h({
                    action: "mask",
                    el: e
                }))
            }), c && c[0] ? c[0].inputmask || this : this
        },
        option: function(b, c) {
            return "string" == typeof b ? this.opts[b] : "object" == typeof b ? (a.extend(this.userOptions, b), this.el && c !== !0 && this.mask(this.el), this) : void 0
        },
        unmaskedvalue: function(a) {
            return h({
                action: "unmaskedvalue",
                el: this.el,
                value: a
            }, this.el && this.el.inputmask ? this.el.inputmask.maskset : g(this.opts, this.noMasksCache), this.opts)
        },
        remove: function() {
            if (this.el) return h({
                action: "remove",
                el: this.el
            }), this.el.inputmask = void 0, this.el
        },
        getemptymask: function() {
            return h({
                action: "getemptymask"
            }, this.maskset || g(this.opts, this.noMasksCache), this.opts)
        },
        hasMaskedValue: function() {
            return !this.opts.autoUnmask
        },
        isComplete: function() {
            return h({
                action: "isComplete",
                el: this.el
            }, this.maskset || g(this.opts, this.noMasksCache), this.opts)
        },
        getmetadata: function() {
            return h({
                action: "getmetadata"
            }, this.maskset || g(this.opts, this.noMasksCache), this.opts)
        },
        isValid: function(a) {
            return h({
                action: "isValid",
                value: a
            }, this.maskset || g(this.opts, this.noMasksCache), this.opts)
        },
        format: function(a, b) {
            return h({
                action: "format",
                value: a,
                metadata: b
            }, this.maskset || g(this.opts, this.noMasksCache), this.opts)
        }
    }, b.extendDefaults = function(c) {
        a.extend(!0, b.prototype.defaults, c)
    }, b.extendDefinitions = function(c) {
        a.extend(!0, b.prototype.defaults.definitions, c)
    }, b.extendAliases = function(c) {
        a.extend(!0, b.prototype.defaults.aliases, c)
    }, b.format = function(a, c, d) {
        return b(c).format(a, d)
    }, b.unmask = function(a, c) {
        return b(c).unmaskedvalue(a)
    }, b.isValid = function(a, c) {
        return b(c).isValid(a)
    }, b.remove = function(b) {
        a.each(b, function(a, b) {
            b.inputmask && b.inputmask.remove()
        })
    }, b.escapeRegex = function(a) {
        var b = ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^"];
        return a.replace(new RegExp("(\\" + b.join("|\\") + ")", "gim"), "\\$1")
    }, b.keyCode = {
        ALT: 18,
        BACKSPACE: 8,
        BACKSPACE_SAFARI: 127,
        CAPS_LOCK: 20,
        COMMA: 188,
        COMMAND: 91,
        COMMAND_LEFT: 91,
        COMMAND_RIGHT: 93,
        CONTROL: 17,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        INSERT: 45,
        LEFT: 37,
        MENU: 93,
        NUMPAD_ADD: 107,
        NUMPAD_DECIMAL: 110,
        NUMPAD_DIVIDE: 111,
        NUMPAD_ENTER: 108,
        NUMPAD_MULTIPLY: 106,
        NUMPAD_SUBTRACT: 109,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SHIFT: 16,
        SPACE: 32,
        TAB: 9,
        UP: 38,
        WINDOWS: 91,
        X: 88
    }, b.analyseMask = function(b, c) {
        function d(a, b, c, d) {
            this.matches = [], this.isGroup = a || !1, this.isOptional = b || !1, this.isQuantifier = c || !1, this.isAlternator = d || !1, this.quantifier = {
                min: 1,
                max: 1
            }
        }

        function e(b, d, e) {
            var f = c.definitions[d];
            e = void 0 !== e ? e : b.matches.length;
            var g = b.matches[e - 1];
            if (f && !r) {
                f.placeholder = a.isFunction(f.placeholder) ? f.placeholder(c) : f.placeholder;
                for (var h = f.prevalidator, i = h ? h.length : 0, j = 1; j < f.cardinality; j++) {
                    var k = i >= j ? h[j - 1] : [],
                        l = k.validator,
                        m = k.cardinality;
                    b.matches.splice(e++, 0, {
                        fn: l ? "string" == typeof l ? new RegExp(l) : new function() {
                            this.test = l
                        } : new RegExp("."),
                        cardinality: m ? m : 1,
                        optionality: b.isOptional,
                        newBlockMarker: void 0 === g || g.def !== (f.definitionSymbol || d),
                        casing: f.casing,
                        def: f.definitionSymbol || d,
                        placeholder: f.placeholder,
                        nativeDef: d
                    }), g = b.matches[e - 1]
                }
                b.matches.splice(e++, 0, {
                    fn: f.validator ? "string" == typeof f.validator ? new RegExp(f.validator) : new function() {
                        this.test = f.validator
                    } : new RegExp("."),
                    cardinality: f.cardinality,
                    optionality: b.isOptional,
                    newBlockMarker: void 0 === g || g.def !== (f.definitionSymbol || d),
                    casing: f.casing,
                    def: f.definitionSymbol || d,
                    placeholder: f.placeholder,
                    nativeDef: d
                })
            } else b.matches.splice(e++, 0, {
                fn: null,
                cardinality: 0,
                optionality: b.isOptional,
                newBlockMarker: void 0 === g || g.def !== d,
                casing: null,
                def: c.staticDefinitionSymbol || d,
                placeholder: void 0 !== c.staticDefinitionSymbol ? d : void 0,
                nativeDef: d
            }), r = !1
        }

        function f(a, b) {
            a.isGroup && (a.isGroup = !1, e(a, c.groupmarker.start, 0), b !== !0 && e(a, c.groupmarker.end))
        }

        function g(a, b, c, d) {
            b.matches.length > 0 && (void 0 === d || d) && (c = b.matches[b.matches.length - 1], f(c)), e(b, a)
        }

        function h() {
            if (t.length > 0) {
                if (m = t[t.length - 1], g(k, m, o, !m.isAlternator), m.isAlternator) {
                    n = t.pop();
                    for (var a = 0; a < n.matches.length; a++) n.matches[a].isGroup = !1;
                    t.length > 0 ? (m = t[t.length - 1], m.matches.push(n)) : s.matches.push(n)
                }
            } else g(k, s, o)
        }

        function i(a) {
            function b(a) {
                return a === c.optionalmarker.start ? a = c.optionalmarker.end : a === c.optionalmarker.end ? a = c.optionalmarker.start : a === c.groupmarker.start ? a = c.groupmarker.end : a === c.groupmarker.end && (a = c.groupmarker.start), a
            }
            a.matches = a.matches.reverse();
            for (var d in a.matches) {
                var e = parseInt(d);
                if (a.matches[d].isQuantifier && a.matches[e + 1] && a.matches[e + 1].isGroup) {
                    var f = a.matches[d];
                    a.matches.splice(d, 1), a.matches.splice(e + 1, 0, f)
                }
                void 0 !== a.matches[d].matches ? a.matches[d] = i(a.matches[d]) : a.matches[d] = b(a.matches[d])
            }
            return a
        }
        for (var j, k, l, m, n, o, p, q = /(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g, r = !1, s = new d, t = [], u = []; j = q.exec(b);)
            if (k = j[0], r) h();
            else switch (k.charAt(0)) {
                case c.escapeChar:
                    r = !0;
                    break;
                case c.optionalmarker.end:
                case c.groupmarker.end:
                    if (l = t.pop(), void 0 !== l)
                        if (t.length > 0) {
                            if (m = t[t.length - 1], m.matches.push(l), m.isAlternator) {
                                n = t.pop();
                                for (var v = 0; v < n.matches.length; v++) n.matches[v].isGroup = !1;
                                t.length > 0 ? (m = t[t.length - 1], m.matches.push(n)) : s.matches.push(n)
                            }
                        } else s.matches.push(l);
                    else h();
                    break;
                case c.optionalmarker.start:
                    t.push(new d((!1), (!0)));
                    break;
                case c.groupmarker.start:
                    t.push(new d((!0)));
                    break;
                case c.quantifiermarker.start:
                    var w = new d((!1), (!1), (!0));
                    k = k.replace(/[{}]/g, "");
                    var x = k.split(","),
                        y = isNaN(x[0]) ? x[0] : parseInt(x[0]),
                        z = 1 === x.length ? y : isNaN(x[1]) ? x[1] : parseInt(x[1]);
                    if ("*" !== z && "+" !== z || (y = "*" === z ? 0 : 1), w.quantifier = {
                            min: y,
                            max: z
                        }, t.length > 0) {
                        var A = t[t.length - 1].matches;
                        j = A.pop(), j.isGroup || (p = new d((!0)), p.matches.push(j), j = p), A.push(j), A.push(w)
                    } else j = s.matches.pop(), j.isGroup || (p = new d((!0)), p.matches.push(j), j = p), s.matches.push(j), s.matches.push(w);
                    break;
                case c.alternatormarker:
                    t.length > 0 ? (m = t[t.length - 1], o = m.matches.pop()) : o = s.matches.pop(), o.isAlternator ? t.push(o) : (n = new d((!1), (!1), (!1), (!0)), n.matches.push(o), t.push(n));
                    break;
                default:
                    h()
            }
        for (; t.length > 0;) l = t.pop(), f(l, !0), s.matches.push(l);
        return s.matches.length > 0 && (o = s.matches[s.matches.length - 1], f(o), u.push(s)), c.numericInput && i(u[0]), u
    };
    var i = navigator.userAgent,
        j = /mobile/i.test(i),
        k = /iemobile/i.test(i),
        l = /iphone/i.test(i) && !k,
        m = /android/i.test(i) && !k;
    return window.Inputmask = b, b
}(jQuery),
function(a, b) {
    return void 0 === a.fn.inputmask && (a.fn.inputmask = function(c, d) {
        var e, f = this[0];
        if (void 0 === d && (d = {}), "string" == typeof c) switch (c) {
            case "unmaskedvalue":
                return f && f.inputmask ? f.inputmask.unmaskedvalue() : a(f).val();
            case "remove":
                return this.each(function() {
                    this.inputmask && this.inputmask.remove()
                });
            case "getemptymask":
                return f && f.inputmask ? f.inputmask.getemptymask() : "";
            case "hasMaskedValue":
                return !(!f || !f.inputmask) && f.inputmask.hasMaskedValue();
            case "isComplete":
                return !f || !f.inputmask || f.inputmask.isComplete();
            case "getmetadata":
                return f && f.inputmask ? f.inputmask.getmetadata() : void 0;
            case "setvalue":
                a(f).val(d), f && void 0 === f.inputmask && a(f).triggerHandler("setvalue");
                break;
            case "option":
                if ("string" != typeof d) return this.each(function() {
                    if (void 0 !== this.inputmask) return this.inputmask.option(d)
                });
                if (f && void 0 !== f.inputmask) return f.inputmask.option(d);
                break;
            default:
                return d.alias = c, e = new b(d), this.each(function() {
                    e.mask(this)
                })
        } else {
            if ("object" == typeof c) return e = new b(c), void 0 === c.mask && void 0 === c.alias ? this.each(function() {
                return void 0 !== this.inputmask ? this.inputmask.option(c) : void e.mask(this)
            }) : this.each(function() {
                e.mask(this)
            });
            if (void 0 === c) return this.each(function() {
                e = new b(d), e.mask(this)
            })
        }
    }), a.fn.inputmask
}(jQuery, Inputmask),
function(a, b) {
    return b.extendDefinitions({
        h: {
            validator: "[01][0-9]|2[0-3]",
            cardinality: 2,
            prevalidator: [{
                validator: "[0-2]",
                cardinality: 1
            }]
        },
        s: {
            validator: "[0-5][0-9]",
            cardinality: 2,
            prevalidator: [{
                validator: "[0-5]",
                cardinality: 1
            }]
        },
        d: {
            validator: "0[1-9]|[12][0-9]|3[01]",
            cardinality: 2,
            prevalidator: [{
                validator: "[0-3]",
                cardinality: 1
            }]
        },
        m: {
            validator: "0[1-9]|1[012]",
            cardinality: 2,
            prevalidator: [{
                validator: "[01]",
                cardinality: 1
            }]
        },
        y: {
            validator: "(19|20)\\d{2}",
            cardinality: 4,
            prevalidator: [{
                validator: "[12]",
                cardinality: 1
            }, {
                validator: "(19|20)",
                cardinality: 2
            }, {
                validator: "(19|20)\\d",
                cardinality: 3
            }]
        }
    }), b.extendAliases({
        "dd/mm/yyyy": {
            mask: "1/2/y",
            placeholder: "dd/mm/yyyy",
            regex: {
                val1pre: new RegExp("[0-3]"),
                val1: new RegExp("0[1-9]|[12][0-9]|3[01]"),
                val2pre: function(a) {
                    var c = b.escapeRegex.call(this, a);
                    return new RegExp("((0[1-9]|[12][0-9]|3[01])" + c + "[01])")
                },
                val2: function(a) {
                    var c = b.escapeRegex.call(this, a);
                    return new RegExp("((0[1-9]|[12][0-9])" + c + "(0[1-9]|1[012]))|(30" + c + "(0[13-9]|1[012]))|(31" + c + "(0[13578]|1[02]))")
                }
            },
            leapday: "29/02/",
            separator: "/",
            yearrange: {
                minyear: 1900,
                maxyear: 2099
            },
            isInYearRange: function(a, b, c) {
                if (isNaN(a)) return !1;
                var d = parseInt(a.concat(b.toString().slice(a.length))),
                    e = parseInt(a.concat(c.toString().slice(a.length)));
                return !isNaN(d) && (b <= d && d <= c) || !isNaN(e) && (b <= e && e <= c)
            },
            determinebaseyear: function(a, b, c) {
                var d = (new Date).getFullYear();
                if (a > d) return a;
                if (b < d) {
                    for (var e = b.toString().slice(0, 2), f = b.toString().slice(2, 4); b < e + c;) e--;
                    var g = e + f;
                    return a > g ? a : g
                }
                if (a <= d && d <= b) {
                    for (var h = d.toString().slice(0, 2); b < h + c;) h--;
                    var i = h + c;
                    return i < a ? a : i
                }
                return d
            },
            onKeyDown: function(c, d, e, f) {
                var g = a(this);
                if (c.ctrlKey && c.keyCode === b.keyCode.RIGHT) {
                    var h = new Date;
                    g.val(h.getDate().toString() + (h.getMonth() + 1).toString() + h.getFullYear().toString()), g.trigger("setvalue")
                }
            },
            getFrontValue: function(a, b, c) {
                for (var d = 0, e = 0, f = 0; f < a.length && "2" !== a.charAt(f); f++) {
                    var g = c.definitions[a.charAt(f)];
                    g ? (d += e, e = g.cardinality) : e++
                }
                return b.join("").substr(d, e)
            },
            definitions: {
                1: {
                    validator: function(a, b, c, d, e) {
                        var f = e.regex.val1.test(a);
                        return d || f || a.charAt(1) !== e.separator && "-./".indexOf(a.charAt(1)) === -1 || !(f = e.regex.val1.test("0" + a.charAt(0))) ? f : (b.buffer[c - 1] = "0", {
                            refreshFromBuffer: {
                                start: c - 1,
                                end: c
                            },
                            pos: c,
                            c: a.charAt(0)
                        })
                    },
                    cardinality: 2,
                    prevalidator: [{
                        validator: function(a, b, c, d, e) {
                            var f = a;
                            isNaN(b.buffer[c + 1]) || (f += b.buffer[c + 1]);
                            var g = 1 === f.length ? e.regex.val1pre.test(f) : e.regex.val1.test(f);
                            if (!d && !g) {
                                if (g = e.regex.val1.test(a + "0")) return b.buffer[c] = a, b.buffer[++c] = "0", {
                                    pos: c,
                                    c: "0"
                                };
                                if (g = e.regex.val1.test("0" + a)) return b.buffer[c] = "0", c++, {
                                    pos: c
                                }
                            }
                            return g
                        },
                        cardinality: 1
                    }]
                },
                2: {
                    validator: function(a, b, c, d, e) {
                        var f = e.getFrontValue(b.mask, b.buffer, e);
                        f.indexOf(e.placeholder[0]) !== -1 && (f = "01" + e.separator);
                        var g = e.regex.val2(e.separator).test(f + a);
                        if (!d && !g && (a.charAt(1) === e.separator || "-./".indexOf(a.charAt(1)) !== -1) && (g = e.regex.val2(e.separator).test(f + "0" + a.charAt(0)))) return b.buffer[c - 1] = "0", {
                            refreshFromBuffer: {
                                start: c - 1,
                                end: c
                            },
                            pos: c,
                            c: a.charAt(0)
                        };
                        if (e.mask.indexOf("2") === e.mask.length - 1 && g) {
                            var h = b.buffer.join("").substr(4, 4) + a;
                            if (h !== e.leapday) return !0;
                            var i = parseInt(b.buffer.join("").substr(0, 4), 10);
                            return i % 4 === 0 && (i % 100 !== 0 || i % 400 === 0)
                        }
                        return g
                    },
                    cardinality: 2,
                    prevalidator: [{
                        validator: function(a, b, c, d, e) {
                            isNaN(b.buffer[c + 1]) || (a += b.buffer[c + 1]);
                            var f = e.getFrontValue(b.mask, b.buffer, e);
                            f.indexOf(e.placeholder[0]) !== -1 && (f = "01" + e.separator);
                            var g = 1 === a.length ? e.regex.val2pre(e.separator).test(f + a) : e.regex.val2(e.separator).test(f + a);
                            return d || g || !(g = e.regex.val2(e.separator).test(f + "0" + a)) ? g : (b.buffer[c] = "0", c++, {
                                pos: c
                            })
                        },
                        cardinality: 1
                    }]
                },
                y: {
                    validator: function(a, b, c, d, e) {
                        if (e.isInYearRange(a, e.yearrange.minyear, e.yearrange.maxyear)) {
                            var f = b.buffer.join("").substr(0, 6);
                            if (f !== e.leapday) return !0;
                            var g = parseInt(a, 10);
                            return g % 4 === 0 && (g % 100 !== 0 || g % 400 === 0)
                        }
                        return !1
                    },
                    cardinality: 4,
                    prevalidator: [{
                        validator: function(a, b, c, d, e) {
                            var f = e.isInYearRange(a, e.yearrange.minyear, e.yearrange.maxyear);
                            if (!d && !f) {
                                var g = e.determinebaseyear(e.yearrange.minyear, e.yearrange.maxyear, a + "0").toString().slice(0, 1);
                                if (f = e.isInYearRange(g + a, e.yearrange.minyear, e.yearrange.maxyear)) return b.buffer[c++] = g.charAt(0), {
                                    pos: c
                                };
                                if (g = e.determinebaseyear(e.yearrange.minyear, e.yearrange.maxyear, a + "0").toString().slice(0, 2), f = e.isInYearRange(g + a, e.yearrange.minyear, e.yearrange.maxyear)) return b.buffer[c++] = g.charAt(0), b.buffer[c++] = g.charAt(1), {
                                    pos: c
                                }
                            }
                            return f
                        },
                        cardinality: 1
                    }, {
                        validator: function(a, b, c, d, e) {
                            var f = e.isInYearRange(a, e.yearrange.minyear, e.yearrange.maxyear);
                            if (!d && !f) {
                                var g = e.determinebaseyear(e.yearrange.minyear, e.yearrange.maxyear, a).toString().slice(0, 2);
                                if (f = e.isInYearRange(a[0] + g[1] + a[1], e.yearrange.minyear, e.yearrange.maxyear)) return b.buffer[c++] = g.charAt(1), {
                                    pos: c
                                };
                                if (g = e.determinebaseyear(e.yearrange.minyear, e.yearrange.maxyear, a).toString().slice(0, 2), e.isInYearRange(g + a, e.yearrange.minyear, e.yearrange.maxyear)) {
                                    var h = b.buffer.join("").substr(0, 6);
                                    if (h !== e.leapday) f = !0;
                                    else {
                                        var i = parseInt(a, 10);
                                        f = i % 4 === 0 && (i % 100 !== 0 || i % 400 === 0)
                                    }
                                } else f = !1;
                                if (f) return b.buffer[c - 1] = g.charAt(0), b.buffer[c++] = g.charAt(1), b.buffer[c++] = a.charAt(0), {
                                    refreshFromBuffer: {
                                        start: c - 3,
                                        end: c
                                    },
                                    pos: c
                                }
                            }
                            return f
                        },
                        cardinality: 2
                    }, {
                        validator: function(a, b, c, d, e) {
                            return e.isInYearRange(a, e.yearrange.minyear, e.yearrange.maxyear)
                        },
                        cardinality: 3
                    }]
                }
            },
            insertMode: !1,
            autoUnmask: !1
        },
        "mm/dd/yyyy": {
            placeholder: "mm/dd/yyyy",
            alias: "dd/mm/yyyy",
            regex: {
                val2pre: function(a) {
                    var c = b.escapeRegex.call(this, a);
                    return new RegExp("((0[13-9]|1[012])" + c + "[0-3])|(02" + c + "[0-2])")
                },
                val2: function(a) {
                    var c = b.escapeRegex.call(this, a);
                    return new RegExp("((0[1-9]|1[012])" + c + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + c + "30)|((0[13578]|1[02])" + c + "31)")
                },
                val1pre: new RegExp("[01]"),
                val1: new RegExp("0[1-9]|1[012]")
            },
            leapday: "02/29/",
            onKeyDown: function(c, d, e, f) {
                var g = a(this);
                if (c.ctrlKey && c.keyCode === b.keyCode.RIGHT) {
                    var h = new Date;
                    g.val((h.getMonth() + 1).toString() + h.getDate().toString() + h.getFullYear().toString()), g.trigger("setvalue")
                }
            }
        },
        "yyyy/mm/dd": {
            mask: "y/1/2",
            placeholder: "yyyy/mm/dd",
            alias: "mm/dd/yyyy",
            leapday: "/02/29",
            onKeyDown: function(c, d, e, f) {
                var g = a(this);
                if (c.ctrlKey && c.keyCode === b.keyCode.RIGHT) {
                    var h = new Date;
                    g.val(h.getFullYear().toString() + (h.getMonth() + 1).toString() + h.getDate().toString()), g.trigger("setvalue")
                }
            }
        },
        "dd.mm.yyyy": {
            mask: "1.2.y",
            placeholder: "dd.mm.yyyy",
            leapday: "29.02.",
            separator: ".",
            alias: "dd/mm/yyyy"
        },
        "dd-mm-yyyy": {
            mask: "1-2-y",
            placeholder: "dd-mm-yyyy",
            leapday: "29-02-",
            separator: "-",
            alias: "dd/mm/yyyy"
        },
        "mm.dd.yyyy": {
            mask: "1.2.y",
            placeholder: "mm.dd.yyyy",
            leapday: "02.29.",
            separator: ".",
            alias: "mm/dd/yyyy"
        },
        "mm-dd-yyyy": {
            mask: "1-2-y",
            placeholder: "mm-dd-yyyy",
            leapday: "02-29-",
            separator: "-",
            alias: "mm/dd/yyyy"
        },
        "yyyy.mm.dd": {
            mask: "y.1.2",
            placeholder: "yyyy.mm.dd",
            leapday: ".02.29",
            separator: ".",
            alias: "yyyy/mm/dd"
        },
        "yyyy-mm-dd": {
            mask: "y-1-2",
            placeholder: "yyyy-mm-dd",
            leapday: "-02-29",
            separator: "-",
            alias: "yyyy/mm/dd"
        },
        datetime: {
            mask: "1/2/y h:s",
            placeholder: "dd/mm/yyyy hh:mm",
            alias: "dd/mm/yyyy",
            regex: {
                hrspre: new RegExp("[012]"),
                hrs24: new RegExp("2[0-4]|1[3-9]"),
                hrs: new RegExp("[01][0-9]|2[0-4]"),
                ampm: new RegExp("^[a|p|A|P][m|M]"),
                mspre: new RegExp("[0-5]"),
                ms: new RegExp("[0-5][0-9]")
            },
            timeseparator: ":",
            hourFormat: "24",
            definitions: {
                h: {
                    validator: function(a, b, c, d, e) {
                        if ("24" === e.hourFormat && 24 === parseInt(a, 10)) return b.buffer[c - 1] = "0", b.buffer[c] = "0", {
                            refreshFromBuffer: {
                                start: c - 1,
                                end: c
                            },
                            c: "0"
                        };
                        var f = e.regex.hrs.test(a);
                        if (!d && !f && (a.charAt(1) === e.timeseparator || "-.:".indexOf(a.charAt(1)) !== -1) && (f = e.regex.hrs.test("0" + a.charAt(0)))) return b.buffer[c - 1] = "0", b.buffer[c] = a.charAt(0), c++, {
                            refreshFromBuffer: {
                                start: c - 2,
                                end: c
                            },
                            pos: c,
                            c: e.timeseparator
                        };
                        if (f && "24" !== e.hourFormat && e.regex.hrs24.test(a)) {
                            var g = parseInt(a, 10);
                            return 24 === g ? (b.buffer[c + 5] = "a", b.buffer[c + 6] = "m") : (b.buffer[c + 5] = "p", b.buffer[c + 6] = "m"), g -= 12, g < 10 ? (b.buffer[c] = g.toString(), b.buffer[c - 1] = "0") : (b.buffer[c] = g.toString().charAt(1), b.buffer[c - 1] = g.toString().charAt(0)), {
                                refreshFromBuffer: {
                                    start: c - 1,
                                    end: c + 6
                                },
                                c: b.buffer[c]
                            }
                        }
                        return f
                    },
                    cardinality: 2,
                    prevalidator: [{
                        validator: function(a, b, c, d, e) {
                            var f = e.regex.hrspre.test(a);
                            return d || f || !(f = e.regex.hrs.test("0" + a)) ? f : (b.buffer[c] = "0", c++, {
                                pos: c
                            })
                        },
                        cardinality: 1
                    }]
                },
                s: {
                    validator: "[0-5][0-9]",
                    cardinality: 2,
                    prevalidator: [{
                        validator: function(a, b, c, d, e) {
                            var f = e.regex.mspre.test(a);
                            return d || f || !(f = e.regex.ms.test("0" + a)) ? f : (b.buffer[c] = "0", c++, {
                                pos: c
                            })
                        },
                        cardinality: 1
                    }]
                },
                t: {
                    validator: function(a, b, c, d, e) {
                        return e.regex.ampm.test(a + "m")
                    },
                    casing: "lower",
                    cardinality: 1
                }
            },
            insertMode: !1,
            autoUnmask: !1
        },
        datetime12: {
            mask: "1/2/y h:s t\\m",
            placeholder: "dd/mm/yyyy hh:mm xm",
            alias: "datetime",
            hourFormat: "12"
        },
        "mm/dd/yyyy hh:mm xm": {
            mask: "1/2/y h:s t\\m",
            placeholder: "mm/dd/yyyy hh:mm xm",
            alias: "datetime12",
            regex: {
                val2pre: function(a) {
                    var c = b.escapeRegex.call(this, a);
                    return new RegExp("((0[13-9]|1[012])" + c + "[0-3])|(02" + c + "[0-2])")
                },
                val2: function(a) {
                    var c = b.escapeRegex.call(this, a);
                    return new RegExp("((0[1-9]|1[012])" + c + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + c + "30)|((0[13578]|1[02])" + c + "31)")
                },
                val1pre: new RegExp("[01]"),
                val1: new RegExp("0[1-9]|1[012]")
            },
            leapday: "02/29/",
            onKeyDown: function(c, d, e, f) {
                var g = a(this);
                if (c.ctrlKey && c.keyCode === b.keyCode.RIGHT) {
                    var h = new Date;
                    g.val((h.getMonth() + 1).toString() + h.getDate().toString() + h.getFullYear().toString()), g.trigger("setvalue")
                }
            }
        },
        "hh:mm t": {
            mask: "h:s t\\m",
            placeholder: "hh:mm xm",
            alias: "datetime",
            hourFormat: "12"
        },
        "h:s t": {
            mask: "h:s t\\m",
            placeholder: "hh:mm xm",
            alias: "datetime",
            hourFormat: "12"
        },
        "hh:mm:ss": {
            mask: "h:s:s",
            placeholder: "hh:mm:ss",
            alias: "datetime",
            autoUnmask: !1
        },
        "hh:mm": {
            mask: "h:s",
            placeholder: "hh:mm",
            alias: "datetime",
            autoUnmask: !1
        },
        date: {
            alias: "dd/mm/yyyy"
        },
        "mm/yyyy": {
            mask: "1/y",
            placeholder: "mm/yyyy",
            leapday: "donotuse",
            separator: "/",
            alias: "mm/dd/yyyy"
        },
        shamsi: {
            regex: {
                val2pre: function(a) {
                    var c = b.escapeRegex.call(this, a);
                    return new RegExp("((0[1-9]|1[012])" + c + "[0-3])")
                },
                val2: function(a) {
                    var c = b.escapeRegex.call(this, a);
                    return new RegExp("((0[1-9]|1[012])" + c + "(0[1-9]|[12][0-9]))|((0[1-9]|1[012])" + c + "30)|((0[1-6])" + c + "31)")
                },
                val1pre: new RegExp("[01]"),
                val1: new RegExp("0[1-9]|1[012]")
            },
            yearrange: {
                minyear: 1300,
                maxyear: 1499
            },
            mask: "y/1/2",
            leapday: "/12/30",
            placeholder: "yyyy/mm/dd",
            alias: "mm/dd/yyyy",
            clearIncomplete: !0
        }
    }), b
}(jQuery, Inputmask),
function(a, b) {
    return b.extendDefinitions({
        A: {
            validator: "[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
            cardinality: 1,
            casing: "upper"
        },
        "&": {
            validator: "[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
            cardinality: 1,
            casing: "upper"
        },
        "#": {
            validator: "[0-9A-Fa-f]",
            cardinality: 1,
            casing: "upper"
        }
    }), b.extendAliases({
        url: {
            definitions: {
                i: {
                    validator: ".",
                    cardinality: 1
                }
            },
            mask: "(\\http://)|(\\http\\s://)|(ftp://)|(ftp\\s://)i{+}",
            insertMode: !1,
            autoUnmask: !1,
            inputmode: "url"
        },
        ip: {
            mask: "i[i[i]].i[i[i]].i[i[i]].i[i[i]]",
            definitions: {
                i: {
                    validator: function(a, b, c, d, e) {
                        return c - 1 > -1 && "." !== b.buffer[c - 1] ? (a = b.buffer[c - 1] + a, a = c - 2 > -1 && "." !== b.buffer[c - 2] ? b.buffer[c - 2] + a : "0" + a) : a = "00" + a, new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(a)
                    },
                    cardinality: 1
                }
            },
            onUnMask: function(a, b, c) {
                return a
            },
            inputmode: "numeric"
        },
        email: {
            mask: "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",
            greedy: !1,
            onBeforePaste: function(a, b) {
                return a = a.toLowerCase(), a.replace("mailto:", "")
            },
            definitions: {
                "*": {
                    validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]",
                    cardinality: 1,
                    casing: "lower"
                },
                "-": {
                    validator: "[0-9A-Za-z-]",
                    cardinality: 1,
                    casing: "lower"
                }
            },
            onUnMask: function(a, b, c) {
                return a
            },
            inputmode: "email"
        },
        mac: {
            mask: "##:##:##:##:##:##"
        },
        vin: {
            mask: "V{13}9{4}",
            definitions: {
                V: {
                    validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
                    cardinality: 1,
                    casing: "upper"
                }
            },
            clearIncomplete: !0,
            autoUnmask: !0
        }
    }), b
}(jQuery, Inputmask),
function(a, b) {
    return b.extendAliases({
        numeric: {
            mask: function(a) {
                function c(b) {
                    for (var c = "", d = 0; d < b.length; d++) c += a.definitions[b.charAt(d)] || a.optionalmarker.start === b.charAt(d) || a.optionalmarker.end === b.charAt(d) || a.quantifiermarker.start === b.charAt(d) || a.quantifiermarker.end === b.charAt(d) || a.groupmarker.start === b.charAt(d) || a.groupmarker.end === b.charAt(d) || a.alternatormarker === b.charAt(d) ? "\\" + b.charAt(d) : b.charAt(d);
                    return c
                }
                if (0 !== a.repeat && isNaN(a.integerDigits) && (a.integerDigits = a.repeat), a.repeat = 0, a.groupSeparator === a.radixPoint && ("." === a.radixPoint ? a.groupSeparator = "," : "," === a.radixPoint ? a.groupSeparator = "." : a.groupSeparator = ""), " " === a.groupSeparator && (a.skipOptionalPartCharacter = void 0), a.autoGroup = a.autoGroup && "" !== a.groupSeparator, a.autoGroup && ("string" == typeof a.groupSize && isFinite(a.groupSize) && (a.groupSize = parseInt(a.groupSize)), isFinite(a.integerDigits))) {
                    var d = Math.floor(a.integerDigits / a.groupSize),
                        e = a.integerDigits % a.groupSize;
                    a.integerDigits = parseInt(a.integerDigits) + (0 === e ? d - 1 : d), a.integerDigits < 1 && (a.integerDigits = "*")
                }
                a.placeholder.length > 1 && (a.placeholder = a.placeholder.charAt(0)), "radixFocus" === a.positionCaretOnClick && "" === a.placeholder && a.integerOptional === !1 && (a.positionCaretOnClick = "lvp"), a.definitions[";"] = a.definitions["~"], a.definitions[";"].definitionSymbol = "~", a.numericInput === !0 && (a.positionCaretOnClick = "radixFocus" === a.positionCaretOnClick ? "lvp" : a.positionCaretOnClick, a.digitsOptional = !1, isNaN(a.digits) && (a.digits = 2), a.decimalProtect = !1);
                var f = "[+]";
                if (f += c(a.prefix), f += a.integerOptional === !0 ? "~{1," + a.integerDigits + "}" : "~{" + a.integerDigits + "}", void 0 !== a.digits) {
                    a.decimalProtect && (a.radixPointDefinitionSymbol = ":");
                    var g = a.digits.toString().split(",");
                    isFinite(g[0] && g[1] && isFinite(g[1])) ? f += (a.decimalProtect ? ":" : a.radixPoint) + ";{" + a.digits + "}" : (isNaN(a.digits) || parseInt(a.digits) > 0) && (f += a.digitsOptional ? "[" + (a.decimalProtect ? ":" : a.radixPoint) + ";{1," + a.digits + "}]" : (a.decimalProtect ? ":" : a.radixPoint) + ";{" + a.digits + "}")
                }
                return f += c(a.suffix), f += "[-]", a.greedy = !1, null !== a.min && (a.min = a.min.toString().replace(new RegExp(b.escapeRegex(a.groupSeparator), "g"), ""), "," === a.radixPoint && (a.min = a.min.replace(a.radixPoint, "."))), null !== a.max && (a.max = a.max.toString().replace(new RegExp(b.escapeRegex(a.groupSeparator), "g"), ""), "," === a.radixPoint && (a.max = a.max.replace(a.radixPoint, "."))), f
            },
            placeholder: "",
            greedy: !1,
            digits: "*",
            digitsOptional: !0,
            radixPoint: ".",
            positionCaretOnClick: "radixFocus",
            groupSize: 3,
            groupSeparator: "",
            autoGroup: !1,
            allowPlus: !0,
            allowMinus: !0,
            negationSymbol: {
                front: "-",
                back: ""
            },
            integerDigits: "+",
            integerOptional: !0,
            prefix: "",
            suffix: "",
            rightAlign: !0,
            decimalProtect: !0,
            min: null,
            max: null,
            step: 1,
            insertMode: !0,
            autoUnmask: !1,
            unmaskAsNumber: !1,
            inputmode: "numeric",
            postFormat: function(c, d, e) {
                e.numericInput === !0 && (c = c.reverse(), isFinite(d) && (d = c.join("").length - d - 1));
                var f, g;
                d = d >= c.length ? c.length - 1 : d < 0 ? 0 : d;
                var h = c[d],
                    i = c.slice();
                h === e.groupSeparator && (i.splice(d--, 1), h = i[d]);
                var j = i.join("").match(new RegExp("^" + b.escapeRegex(e.negationSymbol.front)));
                j = null !== j && 1 === j.length, d > (j ? e.negationSymbol.front.length : 0) + e.prefix.length && d < i.length - e.suffix.length && (i[d] = "!");
                var k = i.join(""),
                    l = i.join();
                if (j && (k = k.replace(new RegExp("^" + b.escapeRegex(e.negationSymbol.front)), ""), k = k.replace(new RegExp(b.escapeRegex(e.negationSymbol.back) + "$"), "")), k = k.replace(new RegExp(b.escapeRegex(e.suffix) + "$"), ""), k = k.replace(new RegExp("^" + b.escapeRegex(e.prefix)), ""), k.length > 0 && e.autoGroup || k.indexOf(e.groupSeparator) !== -1) {
                    var m = b.escapeRegex(e.groupSeparator);
                    k = k.replace(new RegExp(m, "g"), "");
                    var n = k.split(h === e.radixPoint ? "!" : e.radixPoint);
                    if (k = "" === e.radixPoint ? k : n[0], h !== e.negationSymbol.front && (k = k.replace("!", "?")), k.length > e.groupSize)
                        for (var o = new RegExp("([-+]?[\\d?]+)([\\d?]{" + e.groupSize + "})"); o.test(k) && "" !== e.groupSeparator;) k = k.replace(o, "$1" + e.groupSeparator + "$2"), k = k.replace(e.groupSeparator + e.groupSeparator, e.groupSeparator);
                    k = k.replace("?", "!"), "" !== e.radixPoint && n.length > 1 && (k += (h === e.radixPoint ? "!" : e.radixPoint) + n[1]);
                }
                k = e.prefix + k + e.suffix, j && (k = e.negationSymbol.front + k + e.negationSymbol.back);
                var p = l !== k.split("").join(),
                    q = a.inArray("!", k);
                if (q === -1 && (q = d), p) {
                    for (c.length = k.length, f = 0, g = k.length; f < g; f++) c[f] = k.charAt(f);
                    c[q] = h
                }
                return q = e.numericInput && isFinite(d) ? c.join("").length - q - 1 : q, e.numericInput && (c = c.reverse(), a.inArray(e.radixPoint, c) < q && c.join("").length - e.suffix.length !== q && (q -= 1)), {
                    pos: q,
                    refreshFromBuffer: p,
                    buffer: c,
                    isNegative: j
                }
            },
            onBeforeWrite: function(c, d, e, f) {
                var g;
                if (c && ("blur" === c.type || "checkval" === c.type || "keydown" === c.type)) {
                    var h = f.numericInput ? d.slice().reverse().join("") : d.join(""),
                        i = h.replace(f.prefix, "");
                    i = i.replace(f.suffix, ""), i = i.replace(new RegExp(b.escapeRegex(f.groupSeparator), "g"), ""), "," === f.radixPoint && (i = i.replace(f.radixPoint, "."));
                    var j = i.match(new RegExp("[-" + b.escapeRegex(f.negationSymbol.front) + "]", "g"));
                    if (j = null !== j && 1 === j.length, i = i.replace(new RegExp("[-" + b.escapeRegex(f.negationSymbol.front) + "]", "g"), ""), i = i.replace(new RegExp(b.escapeRegex(f.negationSymbol.back) + "$"), ""), isNaN(f.placeholder) && (i = i.replace(new RegExp(b.escapeRegex(f.placeholder), "g"), "")), i = i === f.negationSymbol.front ? i + "0" : i, "" !== i && isFinite(i)) {
                        var k = parseFloat(i),
                            l = j ? k * -1 : k;
                        if (null !== f.min && isFinite(f.min) && l < parseFloat(f.min) ? (k = Math.abs(f.min), j = f.min < 0, h = void 0) : null !== f.max && isFinite(f.max) && l > parseFloat(f.max) && (k = Math.abs(f.max), j = f.max < 0, h = void 0), i = k.toString().replace(".", f.radixPoint).split(""), isFinite(f.digits)) {
                            var m = a.inArray(f.radixPoint, i),
                                n = a.inArray(f.radixPoint, h);
                            m === -1 && (i.push(f.radixPoint), m = i.length - 1);
                            for (var o = 1; o <= f.digits; o++) f.digitsOptional || void 0 !== i[m + o] && i[m + o] !== f.placeholder.charAt(0) ? n !== -1 && void 0 !== h[n + o] && (i[m + o] = i[m + o] || h[n + o]) : i[m + o] = "0";
                            i[i.length - 1] === f.radixPoint && delete i[i.length - 1]
                        }
                        if (k.toString() !== i && k.toString() + "." !== i || j) return i = (f.prefix + i.join("")).split(""), !j || 0 === k && "blur" === c.type || (i.unshift(f.negationSymbol.front), i.push(f.negationSymbol.back)), f.numericInput && (i = i.reverse()), g = f.postFormat(i, f.numericInput ? e : e - 1, f), g.buffer && (g.refreshFromBuffer = g.buffer.join("") !== d.join("")), g
                    }
                }
                if (f.autoGroup) return g = f.postFormat(d, f.numericInput ? e : e - 1, f), g.caret = e < (g.isNegative ? f.negationSymbol.front.length : 0) + f.prefix.length || e > g.buffer.length - (g.isNegative ? f.negationSymbol.back.length : 0) ? g.pos : g.pos + 1, g
            },
            regex: {
                integerPart: function(a) {
                    return new RegExp("[" + b.escapeRegex(a.negationSymbol.front) + "+]?\\d+")
                },
                integerNPart: function(a) {
                    return new RegExp("[\\d" + b.escapeRegex(a.groupSeparator) + b.escapeRegex(a.placeholder.charAt(0)) + "]+")
                }
            },
            signHandler: function(a, b, c, d, e) {
                if (!d && e.allowMinus && "-" === a || e.allowPlus && "+" === a) {
                    var f = b.buffer.join("").match(e.regex.integerPart(e));
                    if (f && f[0].length > 0) return b.buffer[f.index] === ("-" === a ? "+" : e.negationSymbol.front) ? "-" === a ? "" !== e.negationSymbol.back ? {
                        pos: 0,
                        c: e.negationSymbol.front,
                        remove: 0,
                        caret: c,
                        insert: {
                            pos: b.buffer.length - 1,
                            c: e.negationSymbol.back
                        }
                    } : {
                        pos: 0,
                        c: e.negationSymbol.front,
                        remove: 0,
                        caret: c
                    } : "" !== e.negationSymbol.back ? {
                        pos: 0,
                        c: "+",
                        remove: [0, b.buffer.length - 1],
                        caret: c
                    } : {
                        pos: 0,
                        c: "+",
                        remove: 0,
                        caret: c
                    } : b.buffer[0] === ("-" === a ? e.negationSymbol.front : "+") ? "-" === a && "" !== e.negationSymbol.back ? {
                        remove: [0, b.buffer.length - 1],
                        caret: c - 1
                    } : {
                        remove: 0,
                        caret: c - 1
                    } : "-" === a ? "" !== e.negationSymbol.back ? {
                        pos: 0,
                        c: e.negationSymbol.front,
                        caret: c + 1,
                        insert: {
                            pos: b.buffer.length,
                            c: e.negationSymbol.back
                        }
                    } : {
                        pos: 0,
                        c: e.negationSymbol.front,
                        caret: c + 1
                    } : {
                        pos: 0,
                        c: a,
                        caret: c + 1
                    }
                }
                return !1
            },
            radixHandler: function(b, c, d, e, f) {
                if (!e && f.numericInput !== !0 && b === f.radixPoint && void 0 !== f.digits && (isNaN(f.digits) || parseInt(f.digits) > 0)) {
                    var g = a.inArray(f.radixPoint, c.buffer),
                        h = c.buffer.join("").match(f.regex.integerPart(f));
                    if (g !== -1 && c.validPositions[g]) return c.validPositions[g - 1] ? {
                        caret: g + 1
                    } : {
                        pos: h.index,
                        c: h[0],
                        caret: g + 1
                    };
                    if (!h || "0" === h[0] && h.index + 1 !== d) return c.buffer[h ? h.index : d] = "0", {
                        pos: (h ? h.index : d) + 1,
                        c: f.radixPoint
                    }
                }
                return !1
            },
            leadingZeroHandler: function(b, c, d, e, f, g) {
                if (!e) {
                    var h = c.buffer.slice("");
                    if (h.splice(0, f.prefix.length), h.splice(h.length - f.suffix.length, f.suffix.length), f.numericInput === !0) {
                        var h = h.reverse(),
                            i = h[0];
                        if ("0" === i && void 0 === c.validPositions[d - 1]) return {
                            pos: d,
                            remove: h.length - 1
                        }
                    } else {
                        d -= f.prefix.length;
                        var j = a.inArray(f.radixPoint, h),
                            k = h.slice(0, j !== -1 ? j : void 0).join("").match(f.regex.integerNPart(f));
                        if (k && (j === -1 || d <= j)) {
                            var l = j === -1 ? 0 : parseInt(h.slice(j + 1).join(""));
                            if (0 === k[0].indexOf("" !== f.placeholder ? f.placeholder.charAt(0) : "0") && (k.index + 1 === d || g !== !0 && 0 === l)) return c.buffer.splice(k.index + f.prefix.length, 1), {
                                pos: k.index + f.prefix.length,
                                remove: k.index + f.prefix.length
                            };
                            if ("0" === b && d <= k.index && k[0] !== f.groupSeparator) return !1
                        }
                    }
                }
                return !0
            },
            definitions: {
                "~": {
                    validator: function(c, d, e, f, g, h) {
                        var i = g.signHandler(c, d, e, f, g);
                        if (!i && (i = g.radixHandler(c, d, e, f, g), !i && (i = f ? new RegExp("[0-9" + b.escapeRegex(g.groupSeparator) + "]").test(c) : new RegExp("[0-9]").test(c), i === !0 && (i = g.leadingZeroHandler(c, d, e, f, g, h), i === !0)))) {
                            var j = a.inArray(g.radixPoint, d.buffer);
                            i = j !== -1 && (g.digitsOptional === !1 || d.validPositions[e]) && g.numericInput !== !0 && e > j && !f ? {
                                pos: e,
                                remove: e
                            } : {
                                pos: e
                            }
                        }
                        return i
                    },
                    cardinality: 1
                },
                "+": {
                    validator: function(a, b, c, d, e) {
                        var f = e.signHandler(a, b, c, d, e);
                        return !f && (d && e.allowMinus && a === e.negationSymbol.front || e.allowMinus && "-" === a || e.allowPlus && "+" === a) && (f = !(!d && "-" === a) || ("" !== e.negationSymbol.back ? {
                            pos: c,
                            c: "-" === a ? e.negationSymbol.front : "+",
                            caret: c + 1,
                            insert: {
                                pos: b.buffer.length,
                                c: e.negationSymbol.back
                            }
                        } : {
                            pos: c,
                            c: "-" === a ? e.negationSymbol.front : "+",
                            caret: c + 1
                        })), f
                    },
                    cardinality: 1,
                    placeholder: ""
                },
                "-": {
                    validator: function(a, b, c, d, e) {
                        var f = e.signHandler(a, b, c, d, e);
                        return !f && d && e.allowMinus && a === e.negationSymbol.back && (f = !0), f
                    },
                    cardinality: 1,
                    placeholder: ""
                },
                ":": {
                    validator: function(a, c, d, e, f) {
                        var g = f.signHandler(a, c, d, e, f);
                        if (!g) {
                            var h = "[" + b.escapeRegex(f.radixPoint) + "]";
                            g = new RegExp(h).test(a), g && c.validPositions[d] && c.validPositions[d].match.placeholder === f.radixPoint && (g = {
                                caret: d + 1
                            })
                        }
                        return g
                    },
                    cardinality: 1,
                    placeholder: function(a) {
                        return a.radixPoint
                    }
                }
            },
            onUnMask: function(a, c, d) {
                if ("" === c && d.nullable === !0) return c;
                var e = a.replace(d.prefix, "");
                return e = e.replace(d.suffix, ""), e = e.replace(new RegExp(b.escapeRegex(d.groupSeparator), "g"), ""), d.unmaskAsNumber ? ("" !== d.radixPoint && e.indexOf(d.radixPoint) !== -1 && (e = e.replace(b.escapeRegex.call(this, d.radixPoint), ".")), Number(e)) : e
            },
            isComplete: function(a, c) {
                var d = a.join(""),
                    e = a.slice();
                if (c.postFormat(e, 0, c), e.join("") !== d) return !1;
                var f = d.replace(c.prefix, "");
                return f = f.replace(c.suffix, ""), f = f.replace(new RegExp(b.escapeRegex(c.groupSeparator), "g"), ""), "," === c.radixPoint && (f = f.replace(b.escapeRegex(c.radixPoint), ".")), isFinite(f)
            },
            onBeforeMask: function(a, c) {
                if (c.numericInput === !0 && (a = a.split("").reverse().join("")), "" !== c.radixPoint && isFinite(a)) a = a.toString().replace(".", c.radixPoint);
                else {
                    var d = a.match(/,/g),
                        e = a.match(/\./g);
                    e && d ? e.length > d.length ? (a = a.replace(/\./g, ""), a = a.replace(",", c.radixPoint)) : d.length > e.length ? (a = a.replace(/,/g, ""), a = a.replace(".", c.radixPoint)) : a = a.indexOf(".") < a.indexOf(",") ? a.replace(/\./g, "") : a = a.replace(/,/g, "") : a = a.replace(new RegExp(b.escapeRegex(c.groupSeparator), "g"), "")
                }
                if (0 === c.digits && (a.indexOf(".") !== -1 ? a = a.substring(0, a.indexOf(".")) : a.indexOf(",") !== -1 && (a = a.substring(0, a.indexOf(",")))), "" !== c.radixPoint && isFinite(c.digits) && a.indexOf(c.radixPoint) !== -1) {
                    var f = a.split(c.radixPoint),
                        g = f[1].match(new RegExp("\\d*"))[0];
                    if (parseInt(c.digits) < g.toString().length) {
                        var h = Math.pow(10, parseInt(c.digits));
                        a = a.replace(b.escapeRegex(c.radixPoint), "."), a = Math.round(parseFloat(a) * h) / h, a = a.toString().replace(".", c.radixPoint)
                    }
                }
                return c.numericInput === !0 && (a = a.split("").reverse().join("")), a.toString()
            },
            canClearPosition: function(a, b, c, d, e) {
                var f = a.validPositions[b].input,
                    g = f !== e.radixPoint || null !== a.validPositions[b].match.fn && e.decimalProtect === !1 || isFinite(f) || b === c || f === e.groupSeparator || f === e.negationSymbol.front || f === e.negationSymbol.back;
                return g
            },
            onKeyDown: function(c, d, e, f) {
                var g = a(this);
                if (c.ctrlKey) switch (c.keyCode) {
                    case b.keyCode.UP:
                        g.val(parseFloat(this.inputmask.unmaskedvalue()) + parseInt(f.step)), g.trigger("setvalue");
                        break;
                    case b.keyCode.DOWN:
                        g.val(parseFloat(this.inputmask.unmaskedvalue()) - parseInt(f.step)), g.trigger("setvalue")
                }
            }
        },
        currency: {
            prefix: "$ ",
            groupSeparator: ",",
            alias: "numeric",
            placeholder: "0",
            autoGroup: !0,
            digits: 2,
            digitsOptional: !1,
            clearMaskOnLostFocus: !1
        },
        decimal: {
            alias: "numeric"
        },
        integer: {
            alias: "numeric",
            digits: 0,
            radixPoint: ""
        },
        percentage: {
            alias: "numeric",
            digits: 2,
            radixPoint: ".",
            placeholder: "0",
            autoGroup: !1,
            min: 0,
            max: 100,
            suffix: " %",
            allowPlus: !1,
            allowMinus: !1
        }
    }), b
}(jQuery, Inputmask),
function(a, b) {
    return b.extendAliases({
        abstractphone: {
            countrycode: "",
            phoneCodes: [],
            mask: function(a) {
                a.definitions = {
                    "#": a.definitions[9]
                };
                var b = a.phoneCodes.sort(function(a, b) {
                    var c = (a.mask || a).replace(/#/g, "9").replace(/[\)]/, "9").replace(/[\+\(\)#-]/g, ""),
                        d = (b.mask || b).replace(/#/g, "9").replace(/[\)]/, "9").replace(/[\+\(\)#-]/g, ""),
                        e = (a.mask || a).split("#")[0],
                        f = (b.mask || b).split("#")[0];
                    return 0 === f.indexOf(e) ? -1 : 0 === e.indexOf(f) ? 1 : c.localeCompare(d)
                });
                return b
            },
            keepStatic: !0,
            onBeforeMask: function(a, b) {
                var c = a.replace(/^0{1,2}/, "").replace(/[\s]/g, "");
                return (c.indexOf(b.countrycode) > 1 || c.indexOf(b.countrycode) === -1) && (c = "+" + b.countrycode + c), c
            },
            onUnMask: function(a, b, c) {
                return b
            },
            inputmode: "tel"
        }
    }), b
}(jQuery, Inputmask),
function(a, b) {
    return b.extendAliases({
        Regex: {
            mask: "r",
            greedy: !1,
            repeat: "*",
            regex: null,
            regexTokens: null,
            tokenizer: /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,
            quantifierFilter: /[0-9]+[^,]/,
            isComplete: function(a, b) {
                return new RegExp(b.regex).test(a.join(""))
            },
            definitions: {
                r: {
                    validator: function(b, c, d, e, f) {
                        function g(a, b) {
                            this.matches = [], this.isGroup = a || !1, this.isQuantifier = b || !1, this.quantifier = {
                                min: 1,
                                max: 1
                            }, this.repeaterPart = void 0
                        }

                        function h() {
                            var a, b, c = new g,
                                d = [];
                            for (f.regexTokens = []; a = f.tokenizer.exec(f.regex);) switch (b = a[0], b.charAt(0)) {
                                case "(":
                                    d.push(new g((!0)));
                                    break;
                                case ")":
                                    k = d.pop(), d.length > 0 ? d[d.length - 1].matches.push(k) : c.matches.push(k);
                                    break;
                                case "{":
                                case "+":
                                case "*":
                                    var e = new g((!1), (!0));
                                    b = b.replace(/[{}]/g, "");
                                    var h = b.split(","),
                                        i = isNaN(h[0]) ? h[0] : parseInt(h[0]),
                                        j = 1 === h.length ? i : isNaN(h[1]) ? h[1] : parseInt(h[1]);
                                    if (e.quantifier = {
                                            min: i,
                                            max: j
                                        }, d.length > 0) {
                                        var l = d[d.length - 1].matches;
                                        a = l.pop(), a.isGroup || (k = new g((!0)), k.matches.push(a), a = k), l.push(a), l.push(e)
                                    } else a = c.matches.pop(), a.isGroup || (k = new g((!0)), k.matches.push(a), a = k), c.matches.push(a), c.matches.push(e);
                                    break;
                                default:
                                    d.length > 0 ? d[d.length - 1].matches.push(b) : c.matches.push(b)
                            }
                            c.matches.length > 0 && f.regexTokens.push(c)
                        }

                        function i(b, c) {
                            var d = !1;
                            c && (m += "(", o++);
                            for (var e = 0; e < b.matches.length; e++) {
                                var f = b.matches[e];
                                if (f.isGroup === !0) d = i(f, !0);
                                else if (f.isQuantifier === !0) {
                                    var g = a.inArray(f, b.matches),
                                        h = b.matches[g - 1],
                                        k = m;
                                    if (isNaN(f.quantifier.max)) {
                                        for (; f.repeaterPart && f.repeaterPart !== m && f.repeaterPart.length > m.length && !(d = i(h, !0)););
                                        d = d || i(h, !0), d && (f.repeaterPart = m), m = k + f.quantifier.max
                                    } else {
                                        for (var l = 0, n = f.quantifier.max - 1; l < n && !(d = i(h, !0)); l++);
                                        m = k + "{" + f.quantifier.min + "," + f.quantifier.max + "}"
                                    }
                                } else if (void 0 !== f.matches)
                                    for (var p = 0; p < f.length && !(d = i(f[p], c)); p++);
                                else {
                                    var q;
                                    if ("[" == f.charAt(0)) {
                                        q = m, q += f;
                                        for (var r = 0; r < o; r++) q += ")";
                                        var s = new RegExp("^(" + q + ")$");
                                        d = s.test(j)
                                    } else
                                        for (var t = 0, u = f.length; t < u; t++)
                                            if ("\\" !== f.charAt(t)) {
                                                q = m, q += f.substr(0, t + 1), q = q.replace(/\|$/, "");
                                                for (var r = 0; r < o; r++) q += ")";
                                                var s = new RegExp("^(" + q + ")$");
                                                if (d = s.test(j)) break
                                            } m += f
                                }
                                if (d) break
                            }
                            return c && (m += ")", o--), d
                        }
                        var j, k, l = c.buffer.slice(),
                            m = "",
                            n = !1,
                            o = 0;
                        null === f.regexTokens && h(), l.splice(d, 0, b), j = l.join("");
                        for (var p = 0; p < f.regexTokens.length; p++) {
                            var q = f.regexTokens[p];
                            if (n = i(q, q.isGroup)) break
                        }
                        return n
                    },
                    cardinality: 1
                }
            }
        }
    }), b
}(jQuery, Inputmask);