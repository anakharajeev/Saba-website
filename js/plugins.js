;
window.Modernizr = function (a, b, c) {
		function x(a) {
			j.cssText = a
		}

		function y(a, b) {
			return x(prefixes.join(a + ";") + (b || ""))
		}

		function z(a, b) {
			return typeof a === b
		}

		function A(a, b) {
			return !!~("" + a).indexOf(b)
		}

		function B(a, b) {
			for (var d in a) {
				var e = a[d];
				if (!A(e, "-") && j[e] !== c) return b == "pfx" ? e : !0
			}
			return !1
		}

		function C(a, b, d) {
			for (var e in a) {
				var f = b[a[e]];
				if (f !== c) return d === !1 ? a[e] : z(f, "function") ? f.bind(d || b) : f
			}
			return !1
		}

		function D(a, b, c) {
			var d = a.charAt(0).toUpperCase() + a.slice(1),
				e = (a + " " + n.join(d + " ") + d).split(" ");
			return z(b, "string") || z(b, "undefined") ? B(e, b) : (e = (a + " " + o.join(d + " ") + d).split(" "), C(e, b, c))
		}
		var d = "2.6.2",
			e = {},
			f = !0,
			g = b.documentElement,
			h = "modernizr",
			i = b.createElement(h),
			j = i.style,
			k, l = {}.toString,
			m = "Webkit Moz O ms",
			n = m.split(" "),
			o = m.toLowerCase().split(" "),
			p = {},
			q = {},
			r = {},
			s = [],
			t = s.slice,
			u, v = {}.hasOwnProperty,
			w;
		!z(v, "undefined") && !z(v.call, "undefined") ? w = function (a, b) {
			return v.call(a, b)
		} : w = function (a, b) {
			return b in a && z(a.constructor.prototype[b], "undefined")
		}, Function.prototype.bind || (Function.prototype.bind = function (b) {
			var c = this;
			if (typeof c != "function") throw new TypeError;
			var d = t.call(arguments, 1),
				e = function () {
					if (this instanceof e) {
						var a = function () {};
						a.prototype = c.prototype;
						var f = new a,
							g = c.apply(f, d.concat(t.call(arguments)));
						return Object(g) === g ? g : f
					}
					return c.apply(b, d.concat(t.call(arguments)))
				};
			return e
		}), p.csstransitions = function () {
			return D("transition")
		};
		for (var E in p) w(p, E) && (u = E.toLowerCase(), e[u] = p[E](), s.push((e[u] ? "" : "no-") + u));
		return e.addTest = function (a, b) {
				if (typeof a == "object")
					for (var d in a) w(a, d) && e.addTest(d, a[d]);
				else {
					a = a.toLowerCase();
					if (e[a] !== c) return e;
					b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
				}
				return e
			}, x(""), i = k = null,
			function (a, b) {
				function k(a, b) {
					var c = a.createElement("p"),
						d = a.getElementsByTagName("head")[0] || a.documentElement;
					return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
				}

				function l() {
					var a = r.elements;
					return typeof a == "string" ? a.split(" ") : a
				}

				function m(a) {
					var b = i[a[g]];
					return b || (b = {}, h++, a[g] = h, i[h] = b), b
				}

				function n(a, c, f) {
					c || (c = b);
					if (j) return c.createElement(a);
					f || (f = m(c));
					var g;
					return f.cache[a] ? g = f.cache[a].cloneNode() : e.test(a) ? g = (f.cache[a] = f.createElem(a)).cloneNode() : g = f.createElem(a), g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g
				}

				function o(a, c) {
					a || (a = b);
					if (j) return a.createDocumentFragment();
					c = c || m(a);
					var d = c.frag.cloneNode(),
						e = 0,
						f = l(),
						g = f.length;
					for (; e < g; e++) d.createElement(f[e]);
					return d
				}

				function p(a, b) {
					b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function (c) {
						return r.shivMethods ? n(c, a, b) : b.createElem(c)
					}, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + l().join().replace(/\w+/g, function (a) {
						return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
					}) + ");return n}")(r, b.frag)
				}

				function q(a) {
					a || (a = b);
					var c = m(a);
					return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!k(a, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), j || p(a, c), a
				}
				var c = a.html5 || {},
					d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
					e = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
					f, g = "_html5shiv",
					h = 0,
					i = {},
					j;
				(function () {
					try {
						var a = b.createElement("a");
						a.innerHTML = "<xyz></xyz>", f = "hidden" in a, j = a.childNodes.length == 1 || function () {
							b.createElement("a");
							var a = b.createDocumentFragment();
							return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
						}()
					} catch (c) {
						f = !0, j = !0
					}
				})();
				var r = {
					elements: c.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
					shivCSS: c.shivCSS !== !1,
					supportsUnknownElements: j,
					shivMethods: c.shivMethods !== !1,
					type: "default",
					shivDocument: q,
					createElement: n,
					createDocumentFragment: o
				};
				a.html5 = r, q(b)
			}(this, b), e._version = d, e._domPrefixes = o, e._cssomPrefixes = n, e.testProp = function (a) {
				return B([a])
			}, e.testAllProps = D, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + s.join(" ") : ""), e
	}(this, this.document),
	function (a, b, c) {
		function d(a) {
			return "[object Function]" == o.call(a)
		}

		function e(a) {
			return "string" == typeof a
		}

		function f() {}

		function g(a) {
			return !a || "loaded" == a || "complete" == a || "uninitialized" == a
		}

		function h() {
			var a = p.shift();
			q = 1, a ? a.t ? m(function () {
				("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
			}, 0) : (a(), h()) : q = 0
		}

		function i(a, c, d, e, f, i, j) {
			function k(b) {
				if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
					"img" != a && m(function () {
						t.removeChild(l)
					}, 50);
					for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload()
				}
			}
			var j = j || B.errorTimeout,
				l = b.createElement(a),
				o = 0,
				r = 0,
				u = {
					t: d,
					s: c,
					e: f,
					a: i,
					x: j
				};
			1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function () {
				k.call(this, r)
			}, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
		}

		function j(a, b, c, d, f) {
			return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
		}

		function k() {
			var a = B;
			return a.loader = {
				load: j,
				i: 0
			}, a
		}
		var l = b.documentElement,
			m = a.setTimeout,
			n = b.getElementsByTagName("script")[0],
			o = {}.toString,
			p = [],
			q = 0,
			r = "MozAppearance" in l.style,
			s = r && !!b.createRange().compareNode,
			t = s ? l : n.parentNode,
			l = a.opera && "[object Opera]" == o.call(a.opera),
			l = !!b.attachEvent && !l,
			u = r ? "object" : l ? "script" : "img",
			v = l ? "script" : u,
			w = Array.isArray || function (a) {
				return "[object Array]" == o.call(a)
			},
			x = [],
			y = {},
			z = {
				timeout: function (a, b) {
					return b.length && (a.timeout = b[0]), a
				}
			},
			A, B;
		B = function (a) {
			function b(a) {
				var a = a.split("!"),
					b = x.length,
					c = a.pop(),
					d = a.length,
					c = {
						url: c,
						origUrl: c,
						prefixes: a
					},
					e, f, g;
				for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
				for (f = 0; f < b; f++) c = x[f](c);
				return c
			}

			function g(a, e, f, g, h) {
				var i = b(a),
					j = i.autoCallback;
				i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function () {
					k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
				})))
			}

			function h(a, b) {
				function c(a, c) {
					if (a) {
						if (e(a)) c || (j = function () {
							var a = [].slice.call(arguments);
							k.apply(this, a), l()
						}), g(a, j, b, 0, h);
						else if (Object(a) === a)
							for (n in m = function () {
									var b = 0,
										c;
									for (c in a) a.hasOwnProperty(c) && b++;
									return b
								}(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function () {
								var a = [].slice.call(arguments);
								k.apply(this, a), l()
							} : j[n] = function (a) {
								return function () {
									var b = [].slice.call(arguments);
									a && a.apply(this, b), l()
								}
							}(k[n])), g(a[n], j, b, n, h))
					} else !c && l()
				}
				var h = !!a.test,
					i = a.load || a.both,
					j = a.callback || f,
					k = j,
					l = a.complete || f,
					m, n;
				c(h ? a.yep : a.nope, !!i), i && c(i)
			}
			var i, j, l = this.yepnope.loader;
			if (e(a)) g(a, 0, l, 0);
			else if (w(a))
				for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
			else Object(a) === a && h(a, l)
		}, B.addPrefix = function (a, b) {
			z[a] = b
		}, B.addFilter = function (a) {
			x.push(a)
		}, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function () {
			b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
		}, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function (a, c, d, e, i, j) {
			var k = b.createElement("script"),
				l, o, e = e || B.errorTimeout;
			k.src = a;
			for (o in d) k.setAttribute(o, d[o]);
			c = j ? h : c || f, k.onreadystatechange = k.onload = function () {
				!l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
			}, m(function () {
				l || (l = 1, c(1))
			}, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
		}, a.yepnope.injectCss = function (a, c, d, e, g, i) {
			var e = b.createElement("link"),
				j, c = i ? h : c || f;
			e.href = a, e.rel = "stylesheet", e.type = "text/css";
			for (j in d) e.setAttribute(j, d[j]);
			g || (n.parentNode.insertBefore(e, n), m(c, 0))
		}
	}(this, document), Modernizr.load = function () {
		yepnope.apply(window, [].slice.call(arguments, 0))
	};

jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
	def: "easeOutQuad",
	swing: function (e, f, a, h, g) {
		return jQuery.easing[jQuery.easing.def](e, f, a, h, g)
	},
	easeInQuad: function (e, f, a, h, g) {
		return h * (f /= g) * f + a
	},
	easeOutQuad: function (e, f, a, h, g) {
		return -h * (f /= g) * (f - 2) + a
	},
	easeInOutQuad: function (e, f, a, h, g) {
		if ((f /= g / 2) < 1) {
			return h / 2 * f * f + a
		}
		return -h / 2 * ((--f) * (f - 2) - 1) + a
	},
	easeInCubic: function (e, f, a, h, g) {
		return h * (f /= g) * f * f + a
	},
	easeOutCubic: function (e, f, a, h, g) {
		return h * ((f = f / g - 1) * f * f + 1) + a
	},
	easeInOutCubic: function (e, f, a, h, g) {
		if ((f /= g / 2) < 1) {
			return h / 2 * f * f * f + a
		}
		return h / 2 * ((f -= 2) * f * f + 2) + a
	},
	easeInQuart: function (e, f, a, h, g) {
		return h * (f /= g) * f * f * f + a
	},
	easeOutQuart: function (e, f, a, h, g) {
		return -h * ((f = f / g - 1) * f * f * f - 1) + a
	},
	easeInOutQuart: function (e, f, a, h, g) {
		if ((f /= g / 2) < 1) {
			return h / 2 * f * f * f * f + a
		}
		return -h / 2 * ((f -= 2) * f * f * f - 2) + a
	},
	easeInQuint: function (e, f, a, h, g) {
		return h * (f /= g) * f * f * f * f + a
	},
	easeOutQuint: function (e, f, a, h, g) {
		return h * ((f = f / g - 1) * f * f * f * f + 1) + a
	},
	easeInOutQuint: function (e, f, a, h, g) {
		if ((f /= g / 2) < 1) {
			return h / 2 * f * f * f * f * f + a
		}
		return h / 2 * ((f -= 2) * f * f * f * f + 2) + a
	},
	easeInSine: function (e, f, a, h, g) {
		return -h * Math.cos(f / g * (Math.PI / 2)) + h + a
	},
	easeOutSine: function (e, f, a, h, g) {
		return h * Math.sin(f / g * (Math.PI / 2)) + a
	},
	easeInOutSine: function (e, f, a, h, g) {
		return -h / 2 * (Math.cos(Math.PI * f / g) - 1) + a
	},
	easeInExpo: function (e, f, a, h, g) {
		return (f == 0) ? a : h * Math.pow(2, 10 * (f / g - 1)) + a
	},
	easeOutExpo: function (e, f, a, h, g) {
		return (f == g) ? a + h : h * (-Math.pow(2, -10 * f / g) + 1) + a
	},
	easeInOutExpo: function (e, f, a, h, g) {
		if (f == 0) {
			return a
		}
		if (f == g) {
			return a + h
		}
		if ((f /= g / 2) < 1) {
			return h / 2 * Math.pow(2, 10 * (f - 1)) + a
		}
		return h / 2 * (-Math.pow(2, -10 * --f) + 2) + a
	},
	easeInCirc: function (e, f, a, h, g) {
		return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a
	},
	easeOutCirc: function (e, f, a, h, g) {
		return h * Math.sqrt(1 - (f = f / g - 1) * f) + a
	},
	easeInOutCirc: function (e, f, a, h, g) {
		if ((f /= g / 2) < 1) {
			return -h / 2 * (Math.sqrt(1 - f * f) - 1) + a
		}
		return h / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + a
	},
	easeInElastic: function (f, h, e, l, k) {
		var i = 1.70158;
		var j = 0;
		var g = l;
		if (h == 0) {
			return e
		}
		if ((h /= k) == 1) {
			return e + l
		}
		if (!j) {
			j = k * 0.3
		}
		if (g < Math.abs(l)) {
			g = l;
			var i = j / 4
		} else {
			var i = j / (2 * Math.PI) * Math.asin(l / g)
		}
		return -(g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
	},
	easeOutElastic: function (f, h, e, l, k) {
		var i = 1.70158;
		var j = 0;
		var g = l;
		if (h == 0) {
			return e
		}
		if ((h /= k) == 1) {
			return e + l
		}
		if (!j) {
			j = k * 0.3
		}
		if (g < Math.abs(l)) {
			g = l;
			var i = j / 4
		} else {
			var i = j / (2 * Math.PI) * Math.asin(l / g)
		}
		return g * Math.pow(2, -10 * h) * Math.sin((h * k - i) * (2 * Math.PI) / j) + l + e
	},
	easeInOutElastic: function (f, h, e, l, k) {
		var i = 1.70158;
		var j = 0;
		var g = l;
		if (h == 0) {
			return e
		}
		if ((h /= k / 2) == 2) {
			return e + l
		}
		if (!j) {
			j = k * (0.3 * 1.5)
		}
		if (g < Math.abs(l)) {
			g = l;
			var i = j / 4
		} else {
			var i = j / (2 * Math.PI) * Math.asin(l / g)
		}
		if (h < 1) {
			return -0.5 * (g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
		}
		return g * Math.pow(2, -10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j) * 0.5 + l + e
	},
	easeInBack: function (e, f, a, i, h, g) {
		if (g == undefined) {
			g = 1.70158
		}
		return i * (f /= h) * f * ((g + 1) * f - g) + a
	},
	easeOutBack: function (e, f, a, i, h, g) {
		if (g == undefined) {
			g = 1.70158
		}
		return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a
	},
	easeInOutBack: function (e, f, a, i, h, g) {
		if (g == undefined) {
			g = 1.70158
		}
		if ((f /= h / 2) < 1) {
			return i / 2 * (f * f * (((g *= (1.525)) + 1) * f - g)) + a
		}
		return i / 2 * ((f -= 2) * f * (((g *= (1.525)) + 1) * f + g) + 2) + a
	},
	easeInBounce: function (e, f, a, h, g) {
		return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a
	},
	easeOutBounce: function (e, f, a, h, g) {
		if ((f /= g) < (1 / 2.75)) {
			return h * (7.5625 * f * f) + a
		} else {
			if (f < (2 / 2.75)) {
				return h * (7.5625 * (f -= (1.5 / 2.75)) * f + 0.75) + a
			} else {
				if (f < (2.5 / 2.75)) {
					return h * (7.5625 * (f -= (2.25 / 2.75)) * f + 0.9375) + a
				} else {
					return h * (7.5625 * (f -= (2.625 / 2.75)) * f + 0.984375) + a
				}
			}
		}
	},
	easeInOutBounce: function (e, f, a, h, g) {
		if (f < g / 2) {
			return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a
		}
		return jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a
	}
});


! function (e, t) {
	"function" == typeof define && define.amd ? define(["jquery"], function (e) {
		return t(e)
	}) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(e.jQuery)
}(this, function (e) {
	! function () {
		"use strict";
		var t = {
			mode: "lg-slide",
			cssEasing: "ease",
			easing: "linear",
			speed: 600,
			height: "100%",
			width: "100%",
			addClass: "",
			startClass: "lg-start-zoom",
			backdropDuration: 150,
			hideBarsDelay: 6e3,
			useLeft: !1,
			closable: !0,
			loop: !0,
			escKey: !0,
			keyPress: !0,
			controls: !0,
			slideEndAnimatoin: !0,
			hideControlOnEnd: !1,
			mousewheel: !0,
			getCaptionFromTitleOrAlt: !0,
			appendSubHtmlTo: ".lg-sub-html",
			subHtmlSelectorRelative: !1,
			preload: 1,
			showAfterLoad: !0,
			selector: "",
			selectWithin: "",
			nextHtml: "",
			prevHtml: "",
			index: !1,
			iframeMaxWidth: "100%",
			download: !0,
			counter: !0,
			appendCounterTo: ".lg-toolbar",
			swipeThreshold: 50,
			enableSwipe: !0,
			enableDrag: !0,
			dynamic: !1,
			dynamicEl: [],
			galleryId: 1
		};

		function s(s, i) {
			if (this.el = s, this.$el = e(s), this.s = e.extend({}, t, i), this.s.dynamic && "undefined" !== this.s.dynamicEl && this.s.dynamicEl.constructor === Array && !this.s.dynamicEl.length) throw "When using dynamic mode, you must also define dynamicEl as an Array.";
			return this.modules = {}, this.lGalleryOn = !1, this.lgBusy = !1, this.hideBartimeout = !1, this.isTouch = "ontouchstart" in document.documentElement, this.s.slideEndAnimatoin && (this.s.hideControlOnEnd = !1), this.s.dynamic ? this.$items = this.s.dynamicEl : "this" === this.s.selector ? this.$items = this.$el : "" !== this.s.selector ? this.s.selectWithin ? this.$items = e(this.s.selectWithin).find(this.s.selector) : this.$items = this.$el.find(e(this.s.selector)) : this.$items = this.$el.children(), this.$slide = "", this.$outer = "", this.init(), this
		}
		s.prototype.init = function () {
			var t = this;
			t.s.preload > t.$items.length && (t.s.preload = t.$items.length);
			var s = window.location.hash;
			s.indexOf("lg=" + this.s.galleryId) > 0 && (t.index = parseInt(s.split("&slide=")[1], 10), e("body").addClass("lg-from-hash"), e("body").hasClass("lg-on") || (setTimeout(function () {
				t.build(t.index)
			}), e("body").addClass("lg-on"))), t.s.dynamic ? (t.$el.trigger("onBeforeOpen.lg"), t.index = t.s.index || 0, e("body").hasClass("lg-on") || setTimeout(function () {
				t.build(t.index), e("body").addClass("lg-on")
			})) : t.$items.on("click.lgcustom", function (s) {
				try {
					s.preventDefault(), s.preventDefault()
				} catch (e) {
					s.returnValue = !1
				}
				t.$el.trigger("onBeforeOpen.lg"), t.index = t.s.index || t.$items.index(this), e("body").hasClass("lg-on") || (t.build(t.index), e("body").addClass("lg-on"))
			})
		}, s.prototype.build = function (t) {
			var s = this;
			s.structure(), e.each(e.fn.lightGallery.modules, function (t) {
				s.modules[t] = new e.fn.lightGallery.modules[t](s.el)
			}), s.slide(t, !1, !1, !1), s.s.keyPress && s.keyPress(), s.$items.length > 1 ? (s.arrow(), setTimeout(function () {
				s.enableDrag(), s.enableSwipe()
			}, 50), s.s.mousewheel && s.mousewheel()) : s.$slide.on("click.lg", function () {
				s.$el.trigger("onSlideClick.lg")
			}), s.counter(), s.closeGallery(), s.$el.trigger("onAfterOpen.lg"), s.$outer.on("mousemove.lg click.lg touchstart.lg", function () {
				s.$outer.removeClass("lg-hide-items"), clearTimeout(s.hideBartimeout), s.hideBartimeout = setTimeout(function () {
					s.$outer.addClass("lg-hide-items")
				}, s.s.hideBarsDelay)
			}), s.$outer.trigger("mousemove.lg")
		}, s.prototype.structure = function () {
			var t, s = "",
				i = "",
				l = 0,
				o = "",
				n = this;
			for (e("body").append('<div class="lg-backdrop"></div>'), e(".lg-backdrop").css("transition-duration", this.s.backdropDuration + "ms"), l = 0; l < this.$items.length; l++) s += '<div class="lg-item"></div>';
			if (this.s.controls && this.$items.length > 1 && (i = '<div class="lg-actions"><button class="lg-prev lg-icon">' + this.s.prevHtml + '</button><button class="lg-next lg-icon">' + this.s.nextHtml + "</button></div>"), ".lg-sub-html" === this.s.appendSubHtmlTo && (o = '<div class="lg-sub-html"></div>'), t = '<div class="lg-outer ' + this.s.addClass + " " + this.s.startClass + '"><div class="lg" style="width:' + this.s.width + "; height:" + this.s.height + '"><div class="lg-inner">' + s + '</div><div class="lg-toolbar lg-group"><span class="lg-close lg-icon"></span></div>' + i + o + "</div></div>", e("body").append(t), this.$outer = e(".lg-outer"), this.$slide = this.$outer.find(".lg-item"), this.s.useLeft ? (this.$outer.addClass("lg-use-left"), this.s.mode = "lg-slide") : this.$outer.addClass("lg-use-css3"), n.setTop(), e(window).on("resize.lg orientationchange.lg", function () {
					setTimeout(function () {
						n.setTop()
					}, 100)
				}), this.$slide.eq(this.index).addClass("lg-current"), this.doCss() ? this.$outer.addClass("lg-css3") : (this.$outer.addClass("lg-css"), this.s.speed = 0), this.$outer.addClass(this.s.mode), this.s.enableDrag && this.$items.length > 1 && this.$outer.addClass("lg-grab"), this.s.showAfterLoad && this.$outer.addClass("lg-show-after-load"), this.doCss()) {
				var r = this.$outer.find(".lg-inner");
				r.css("transition-timing-function", this.s.cssEasing), r.css("transition-duration", this.s.speed + "ms")
			}
			setTimeout(function () {
				e(".lg-backdrop").addClass("in")
			}), setTimeout(function () {
				n.$outer.addClass("lg-visible")
			}, this.s.backdropDuration), this.s.download && this.$outer.find(".lg-toolbar").append('<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'), this.prevScrollTop = e(window).scrollTop()
		}, s.prototype.setTop = function () {
			if ("100%" !== this.s.height) {
				var t = e(window).height(),
					s = (t - parseInt(this.s.height, 10)) / 2,
					i = this.$outer.find(".lg");
				t >= parseInt(this.s.height, 10) ? i.css("top", s + "px") : i.css("top", "0px")
			}
		}, s.prototype.doCss = function () {
			return !! function () {
				var e = ["transition", "MozTransition", "WebkitTransition", "OTransition", "msTransition", "KhtmlTransition"],
					t = document.documentElement,
					s = 0;
				for (s = 0; s < e.length; s++)
					if (e[s] in t.style) return !0
			}()
		}, s.prototype.isVideo = function (e, t) {
			var s;
			if (s = this.s.dynamic ? this.s.dynamicEl[t].html : this.$items.eq(t).attr("data-html"), !e) return s ? {
				html5: !0
			} : (console.error("lightGallery :- data-src is not pvovided on slide item " + (t + 1) + ". Please make sure the selector property is properly configured."), !1);
			var i = e.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i),
				l = e.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),
				o = e.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),
				n = e.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);
			return i ? {
				youtube: i
			} : l ? {
				vimeo: l
			} : o ? {
				dailymotion: o
			} : n ? {
				vk: n
			} : void 0
		}, s.prototype.counter = function () {
			this.s.counter && e(this.s.appendCounterTo).append('<div id="lg-counter"><span id="lg-counter-current">' + (parseInt(this.index, 10) + 1) + '</span> / <span id="lg-counter-all">' + this.$items.length + "</span></div>")
		}, s.prototype.addHtml = function (t) {
			var s, i, l = null;
			if (this.s.dynamic ? this.s.dynamicEl[t].subHtmlUrl ? s = this.s.dynamicEl[t].subHtmlUrl : l = this.s.dynamicEl[t].subHtml : (i = this.$items.eq(t)).attr("data-sub-html-url") ? s = i.attr("data-sub-html-url") : (l = i.attr("data-sub-html"), this.s.getCaptionFromTitleOrAlt && !l && (l = i.attr("title") || i.find("img").first().attr("alt"))), !s)
				if (null != l) {
					var o = l.substring(0, 1);
					"." !== o && "#" !== o || (l = this.s.subHtmlSelectorRelative && !this.s.dynamic ? i.find(l).html() : e(l).html())
				} else l = "";
			".lg-sub-html" === this.s.appendSubHtmlTo ? s ? this.$outer.find(this.s.appendSubHtmlTo).load(s) : this.$outer.find(this.s.appendSubHtmlTo).html(l) : s ? this.$slide.eq(t).load(s) : this.$slide.eq(t).append(l), null != l && ("" === l ? this.$outer.find(this.s.appendSubHtmlTo).addClass("lg-empty-html") : this.$outer.find(this.s.appendSubHtmlTo).removeClass("lg-empty-html")), this.$el.trigger("onAfterAppendSubHtml.lg", [t])
		}, s.prototype.preload = function (e) {
			var t = 1,
				s = 1;
			for (t = 1; t <= this.s.preload && !(t >= this.$items.length - e); t++) this.loadContent(e + t, !1, 0);
			for (s = 1; s <= this.s.preload && !(e - s < 0); s++) this.loadContent(e - s, !1, 0)
		}, s.prototype.loadContent = function (t, s, i) {
			var l, o, n, r, a, d, g = this,
				h = !1,
				u = function (t) {
					for (var s = [], i = [], l = 0; l < t.length; l++) {
						var n = t[l].split(" ");
						"" === n[0] && n.splice(0, 1), i.push(n[0]), s.push(n[1])
					}
					for (var r = e(window).width(), a = 0; a < s.length; a++)
						if (parseInt(s[a], 10) > r) {
							o = i[a];
							break
						}
				};
			if (g.s.dynamic) {
				if (g.s.dynamicEl[t].poster && (h = !0, n = g.s.dynamicEl[t].poster), d = g.s.dynamicEl[t].html, o = g.s.dynamicEl[t].src, g.s.dynamicEl[t].responsive) u(g.s.dynamicEl[t].responsive.split(","));
				r = g.s.dynamicEl[t].srcset, a = g.s.dynamicEl[t].sizes
			} else {
				if (g.$items.eq(t).attr("data-poster") && (h = !0, n = g.$items.eq(t).attr("data-poster")), d = g.$items.eq(t).attr("data-html"), o = g.$items.eq(t).attr("href") || g.$items.eq(t).attr("data-src"), g.$items.eq(t).attr("data-responsive")) u(g.$items.eq(t).attr("data-responsive").split(","));
				r = g.$items.eq(t).attr("data-srcset"), a = g.$items.eq(t).attr("data-sizes")
			}
			var c = !1;
			g.s.dynamic ? g.s.dynamicEl[t].iframe && (c = !0) : "true" === g.$items.eq(t).attr("data-iframe") && (c = !0);
			var m = g.isVideo(o, t);
			if (!g.$slide.eq(t).hasClass("lg-loaded")) {
				if (c) g.$slide.eq(t).prepend('<div class="lg-video-cont lg-has-iframe" style="max-width:' + g.s.iframeMaxWidth + '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' + o + '"  allowfullscreen="true"></iframe></div></div>');
				else if (h) {
					var p = "";
					p = m && m.youtube ? "lg-has-youtube" : m && m.vimeo ? "lg-has-vimeo" : "lg-has-html5", g.$slide.eq(t).prepend('<div class="lg-video-cont ' + p + ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' + n + '" /></div></div>')
				} else m ? (g.$slide.eq(t).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>'), g.$el.trigger("hasVideo.lg", [t, o, d])) : g.$slide.eq(t).prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" src="' + o + '" /></div>');
				if (g.$el.trigger("onAferAppendSlide.lg", [t]), l = g.$slide.eq(t).find(".lg-object"), a && l.attr("sizes", a), r) {
					l.attr("srcset", r);
					try {
						picturefill({
							elements: [l[0]]
						})
					} catch (e) {
						console.warn("lightGallery :- If you want srcset to be supported for older browser please include picturefil version 2 javascript library in your document.")
					}
				}
				".lg-sub-html" !== this.s.appendSubHtmlTo && g.addHtml(t), g.$slide.eq(t).addClass("lg-loaded")
			}
			g.$slide.eq(t).find(".lg-object").on("load.lg error.lg", function () {
				var s = 0;
				i && !e("body").hasClass("lg-from-hash") && (s = i), setTimeout(function () {
					g.$slide.eq(t).addClass("lg-complete"), g.$el.trigger("onSlideItemLoad.lg", [t, i || 0])
				}, s)
			}), m && m.html5 && !h && g.$slide.eq(t).addClass("lg-complete"), !0 === s && (g.$slide.eq(t).hasClass("lg-complete") ? g.preload(t) : g.$slide.eq(t).find(".lg-object").on("load.lg error.lg", function () {
				g.preload(t)
			}))
		}, s.prototype.slide = function (t, s, i, l) {
			var o = this.$outer.find(".lg-current").index(),
				n = this;
			if (!n.lGalleryOn || o !== t) {
				var r = this.$slide.length,
					a = n.lGalleryOn ? this.s.speed : 0;
				if (!n.lgBusy) {
					var d, g, h;
					if (this.s.download)(d = n.s.dynamic ? !1 !== n.s.dynamicEl[t].downloadUrl && (n.s.dynamicEl[t].downloadUrl || n.s.dynamicEl[t].src) : "false" !== n.$items.eq(t).attr("data-download-url") && (n.$items.eq(t).attr("data-download-url") || n.$items.eq(t).attr("href") || n.$items.eq(t).attr("data-src"))) ? (e("#lg-download").attr("href", d), n.$outer.removeClass("lg-hide-download")) : n.$outer.addClass("lg-hide-download");
					if (this.$el.trigger("onBeforeSlide.lg", [o, t, s, i]), n.lgBusy = !0, clearTimeout(n.hideBartimeout), ".lg-sub-html" === this.s.appendSubHtmlTo && setTimeout(function () {
							n.addHtml(t)
						}, a), this.arrowDisable(t), l || (t < o ? l = "prev" : t > o && (l = "next")), s) this.$slide.removeClass("lg-prev-slide lg-current lg-next-slide"), r > 2 ? (g = t - 1, h = t + 1, 0 === t && o === r - 1 ? (h = 0, g = r - 1) : t === r - 1 && 0 === o && (h = 0, g = r - 1)) : (g = 0, h = 1), "prev" === l ? n.$slide.eq(h).addClass("lg-next-slide") : n.$slide.eq(g).addClass("lg-prev-slide"), n.$slide.eq(t).addClass("lg-current");
					else n.$outer.addClass("lg-no-trans"), this.$slide.removeClass("lg-prev-slide lg-next-slide"), "prev" === l ? (this.$slide.eq(t).addClass("lg-prev-slide"), this.$slide.eq(o).addClass("lg-next-slide")) : (this.$slide.eq(t).addClass("lg-next-slide"), this.$slide.eq(o).addClass("lg-prev-slide")), setTimeout(function () {
						n.$slide.removeClass("lg-current"), n.$slide.eq(t).addClass("lg-current"), n.$outer.removeClass("lg-no-trans")
					}, 50);
					n.lGalleryOn ? (setTimeout(function () {
						n.loadContent(t, !0, 0)
					}, this.s.speed + 50), setTimeout(function () {
						n.lgBusy = !1, n.$el.trigger("onAfterSlide.lg", [o, t, s, i])
					}, this.s.speed)) : (n.loadContent(t, !0, n.s.backdropDuration), n.lgBusy = !1, n.$el.trigger("onAfterSlide.lg", [o, t, s, i])), n.lGalleryOn = !0, this.s.counter && e("#lg-counter-current").text(t + 1)
				}
				n.index = t
			}
		}, s.prototype.goToNextSlide = function (e) {
			var t = this,
				s = t.s.loop;
			e && t.$slide.length < 3 && (s = !1), t.lgBusy || (t.index + 1 < t.$slide.length ? (t.index++, t.$el.trigger("onBeforeNextSlide.lg", [t.index]), t.slide(t.index, e, !1, "next")) : s ? (t.index = 0, t.$el.trigger("onBeforeNextSlide.lg", [t.index]), t.slide(t.index, e, !1, "next")) : t.s.slideEndAnimatoin && !e && (t.$outer.addClass("lg-right-end"), setTimeout(function () {
				t.$outer.removeClass("lg-right-end")
			}, 400)))
		}, s.prototype.goToPrevSlide = function (e) {
			var t = this,
				s = t.s.loop;
			e && t.$slide.length < 3 && (s = !1), t.lgBusy || (t.index > 0 ? (t.index--, t.$el.trigger("onBeforePrevSlide.lg", [t.index, e]), t.slide(t.index, e, !1, "prev")) : s ? (t.index = t.$items.length - 1, t.$el.trigger("onBeforePrevSlide.lg", [t.index, e]), t.slide(t.index, e, !1, "prev")) : t.s.slideEndAnimatoin && !e && (t.$outer.addClass("lg-left-end"), setTimeout(function () {
				t.$outer.removeClass("lg-left-end")
			}, 400)))
		}, s.prototype.keyPress = function () {
			var t = this;
			this.$items.length > 1 && e(window).on("keyup.lg", function (e) {
				t.$items.length > 1 && (37 === e.keyCode && (e.preventDefault(), t.goToPrevSlide()), 39 === e.keyCode && (e.preventDefault(), t.goToNextSlide()))
			}), e(window).on("keydown.lg", function (e) {
				!0 === t.s.escKey && 27 === e.keyCode && (e.preventDefault(), t.$outer.hasClass("lg-thumb-open") ? t.$outer.removeClass("lg-thumb-open") : t.destroy())
			})
		}, s.prototype.arrow = function () {
			var e = this;
			this.$outer.find(".lg-prev").on("click.lg", function () {
				e.goToPrevSlide()
			}), this.$outer.find(".lg-next").on("click.lg", function () {
				e.goToNextSlide()
			})
		}, s.prototype.arrowDisable = function (e) {
			!this.s.loop && this.s.hideControlOnEnd && (e + 1 < this.$slide.length ? this.$outer.find(".lg-next").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-next").attr("disabled", "disabled").addClass("disabled"), e > 0 ? this.$outer.find(".lg-prev").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-prev").attr("disabled", "disabled").addClass("disabled"))
		}, s.prototype.setTranslate = function (e, t, s) {
			this.s.useLeft ? e.css("left", t) : e.css({
				transform: "translate3d(" + t + "px, " + s + "px, 0px)"
			})
		}, s.prototype.touchMove = function (t, s) {
			var i = s - t;
			Math.abs(i) > 15 && (this.$outer.addClass("lg-dragging"), this.setTranslate(this.$slide.eq(this.index), i, 0), this.setTranslate(e(".lg-prev-slide"), -this.$slide.eq(this.index).width() + i, 0), this.setTranslate(e(".lg-next-slide"), this.$slide.eq(this.index).width() + i, 0))
		}, s.prototype.touchEnd = function (e) {
			var t = this;
			"lg-slide" !== t.s.mode && t.$outer.addClass("lg-slide"), this.$slide.not(".lg-current, .lg-prev-slide, .lg-next-slide").css("opacity", "0"), setTimeout(function () {
				t.$outer.removeClass("lg-dragging"), e < 0 && Math.abs(e) > t.s.swipeThreshold ? t.goToNextSlide(!0) : e > 0 && Math.abs(e) > t.s.swipeThreshold ? t.goToPrevSlide(!0) : Math.abs(e) < 5 && t.$el.trigger("onSlideClick.lg"), t.$slide.removeAttr("style")
			}), setTimeout(function () {
				t.$outer.hasClass("lg-dragging") || "lg-slide" === t.s.mode || t.$outer.removeClass("lg-slide")
			}, t.s.speed + 100)
		}, s.prototype.enableSwipe = function () {
			var e = this,
				t = 0,
				s = 0,
				i = !1;
			e.s.enableSwipe && e.doCss() && (e.$slide.on("touchstart.lg", function (s) {
				e.$outer.hasClass("lg-zoomed") || e.lgBusy || (s.preventDefault(), e.manageSwipeClass(), t = s.originalEvent.targetTouches[0].pageX)
			}), e.$slide.on("touchmove.lg", function (l) {
				e.$outer.hasClass("lg-zoomed") || (l.preventDefault(), s = l.originalEvent.targetTouches[0].pageX, e.touchMove(t, s), i = !0)
			}), e.$slide.on("touchend.lg", function () {
				e.$outer.hasClass("lg-zoomed") || (i ? (i = !1, e.touchEnd(s - t)) : e.$el.trigger("onSlideClick.lg"))
			}))
		}, s.prototype.enableDrag = function () {
			var t = this,
				s = 0,
				i = 0,
				l = !1,
				o = !1;
			t.s.enableDrag && t.doCss() && (t.$outer.on("mousedown.lg", function (i) {
				t.$outer.hasClass("lg-zoomed") || t.lgBusy || e(i.target).text() || (i.preventDefault(), t.manageSwipeClass(), s = i.pageX, l = !0, t.$outer.scrollLeft += 1, t.$outer.scrollLeft -= 1, t.$outer.removeClass("lg-grab").addClass("lg-grabbing"), t.$el.trigger("onDragstart.lg"))
			}), e(window).on("mousemove.lg", function (e) {
				l && (o = !0, i = e.pageX, t.touchMove(s, i), t.$el.trigger("onDragmove.lg"))
			}), e(window).on("mouseup.lg", function (n) {
				o ? (o = !1, t.touchEnd(i - s), t.$el.trigger("onDragend.lg")) : (e(n.target).hasClass("lg-object") || e(n.target).hasClass("lg-video-play")) && t.$el.trigger("onSlideClick.lg"), l && (l = !1, t.$outer.removeClass("lg-grabbing").addClass("lg-grab"))
			}))
		}, s.prototype.manageSwipeClass = function () {
			var e = this.index + 1,
				t = this.index - 1;
			this.s.loop && this.$slide.length > 2 && (0 === this.index ? t = this.$slide.length - 1 : this.index === this.$slide.length - 1 && (e = 0)), this.$slide.removeClass("lg-next-slide lg-prev-slide"), t > -1 && this.$slide.eq(t).addClass("lg-prev-slide"), this.$slide.eq(e).addClass("lg-next-slide")
		}, s.prototype.mousewheel = function () {
			var e = this;
			e.$outer.on("mousewheel.lg", function (t) {
				t.deltaY && (t.deltaY > 0 ? e.goToPrevSlide() : e.goToNextSlide(), t.preventDefault())
			})
		}, s.prototype.closeGallery = function () {
			var t = this,
				s = !1;
			this.$outer.find(".lg-close").on("click.lg", function () {
				t.destroy()
			}), t.s.closable && (t.$outer.on("mousedown.lg", function (t) {
				s = !!(e(t.target).is(".lg-outer") || e(t.target).is(".lg-item ") || e(t.target).is(".lg-img-wrap"))
			}), t.$outer.on("mousemove.lg", function () {
				s = !1
			}), t.$outer.on("mouseup.lg", function (i) {
				(e(i.target).is(".lg-outer") || e(i.target).is(".lg-item ") || e(i.target).is(".lg-img-wrap") && s) && (t.$outer.hasClass("lg-dragging") || t.destroy())
			}))
		}, s.prototype.destroy = function (t) {
			var s = this;
			t || (s.$el.trigger("onBeforeClose.lg"), e(window).scrollTop(s.prevScrollTop)), t && (s.s.dynamic || this.$items.off("click.lg click.lgcustom"), e.removeData(s.el, "lightGallery")), this.$el.off(".lg.tm"), e.each(e.fn.lightGallery.modules, function (e) {
				s.modules[e] && s.modules[e].destroy()
			}), this.lGalleryOn = !1, clearTimeout(s.hideBartimeout), this.hideBartimeout = !1, e(window).off(".lg"), e("body").removeClass("lg-on lg-from-hash"), s.$outer && s.$outer.removeClass("lg-visible"), e(".lg-backdrop").removeClass("in"), setTimeout(function () {
				s.$outer && s.$outer.remove(), e(".lg-backdrop").remove(), t || s.$el.trigger("onCloseAfter.lg")
			}, s.s.backdropDuration + 50)
		}, e.fn.lightGallery = function (t) {
			return this.each(function () {
				if (e.data(this, "lightGallery")) try {
					e(this).data("lightGallery").init()
				} catch (e) {
					console.error("lightGallery has not initiated properly")
				} else e.data(this, "lightGallery", new s(this, t))
			})
		}, e.fn.lightGallery.modules = {}
	}()
});

! function (a, b) {
	"function" == typeof define && define.amd ? define(["jquery"], function (a) {
		return b(a)
	}) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery)
}(this, function (a) {
	! function () {
		"use strict";
		var b = function () {
				var a = !1,
					b = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
				return b && parseInt(b[2], 10) < 54 && (a = !0), a
			},
			c = {
				scale: 1,
				zoom: !0,
				actualSize: !0,
				enableZoomAfter: 300,
				useLeftForZoom: b()
			},
			d = function (b) {
				return this.core = a(b).data("lightGallery"), this.core.s = a.extend({}, c, this.core.s), this.core.s.zoom && this.core.doCss() && (this.init(), this.zoomabletimeout = !1, this.pageX = a(window).width() / 2, this.pageY = a(window).height() / 2 + a(window).scrollTop()), this
			};
		d.prototype.init = function () {
			var b = this,
				c = '<span id="lg-zoom-in" class="lg-icon"></span><span id="lg-zoom-out" class="lg-icon"></span>';
			b.core.s.actualSize && (c += '<span id="lg-actual-size" class="lg-icon"></span>'), b.core.s.useLeftForZoom ? b.core.$outer.addClass("lg-use-left-for-zoom") : b.core.$outer.addClass("lg-use-transition-for-zoom"), this.core.$outer.find(".lg-toolbar").append(c), b.core.$el.on("onSlideItemLoad.lg.tm.zoom", function (c, d, e) {
				var f = b.core.s.enableZoomAfter + e;
				a("body").hasClass("lg-from-hash") && e ? f = 0 : a("body").removeClass("lg-from-hash"), b.zoomabletimeout = setTimeout(function () {
					b.core.$slide.eq(d).addClass("lg-zoomable")
				}, f + 30)
			});
			var d = 1,
				e = function (c) {
					var e, f, d = b.core.$outer.find(".lg-current .lg-image"),
						g = (a(window).width() - d.prop("offsetWidth")) / 2,
						h = (a(window).height() - d.prop("offsetHeight")) / 2 + a(window).scrollTop();
					e = b.pageX - g, f = b.pageY - h;
					var i = (c - 1) * e,
						j = (c - 1) * f;
					d.css("transform", "scale3d(" + c + ", " + c + ", 1)").attr("data-scale", c), b.core.s.useLeftForZoom ? d.parent().css({
						left: -i + "px",
						top: -j + "px"
					}).attr("data-x", i).attr("data-y", j) : d.parent().css("transform", "translate3d(-" + i + "px, -" + j + "px, 0)").attr("data-x", i).attr("data-y", j)
				},
				f = function () {
					d > 1 ? b.core.$outer.addClass("lg-zoomed") : b.resetZoom(), d < 1 && (d = 1), e(d)
				},
				g = function (c, e, g, h) {
					var j, i = e.prop("offsetWidth");
					j = b.core.s.dynamic ? b.core.s.dynamicEl[g].width || e[0].naturalWidth || i : b.core.$items.eq(g).attr("data-width") || e[0].naturalWidth || i;
					var k;
					b.core.$outer.hasClass("lg-zoomed") ? d = 1 : j > i && (k = j / i, d = k || 2), h ? (b.pageX = a(window).width() / 2, b.pageY = a(window).height() / 2 + a(window).scrollTop()) : (b.pageX = c.pageX || c.originalEvent.targetTouches[0].pageX, b.pageY = c.pageY || c.originalEvent.targetTouches[0].pageY), f(), setTimeout(function () {
						b.core.$outer.removeClass("lg-grabbing").addClass("lg-grab")
					}, 10)
				},
				h = !1;
			b.core.$el.on("onAferAppendSlide.lg.tm.zoom", function (a, c) {
				var d = b.core.$slide.eq(c).find(".lg-image");
				d.on("dblclick", function (a) {
					g(a, d, c)
				}), d.on("touchstart", function (a) {
					h ? (clearTimeout(h), h = null, g(a, d, c)) : h = setTimeout(function () {
						h = null
					}, 300), a.preventDefault()
				})
			}), a(window).on("resize.lg.zoom scroll.lg.zoom orientationchange.lg.zoom", function () {
				b.pageX = a(window).width() / 2, b.pageY = a(window).height() / 2 + a(window).scrollTop(), e(d)
			}), a("#lg-zoom-out").on("click.lg", function () {
				b.core.$outer.find(".lg-current .lg-image").length && (d -= b.core.s.scale, f())
			}), a("#lg-zoom-in").on("click.lg", function () {
				b.core.$outer.find(".lg-current .lg-image").length && (d += b.core.s.scale, f())
			}), a("#lg-actual-size").on("click.lg", function (a) {
				g(a, b.core.$slide.eq(b.core.index).find(".lg-image"), b.core.index, !0)
			}), b.core.$el.on("onBeforeSlide.lg.tm", function () {
				d = 1, b.resetZoom()
			}), b.core.isTouch || b.zoomDrag(), b.core.isTouch && b.zoomSwipe()
		}, d.prototype.resetZoom = function () {
			this.core.$outer.removeClass("lg-zoomed"), this.core.$slide.find(".lg-img-wrap").removeAttr("style data-x data-y"), this.core.$slide.find(".lg-image").removeAttr("style data-scale"), this.pageX = a(window).width() / 2, this.pageY = a(window).height() / 2 + a(window).scrollTop()
		}, d.prototype.zoomSwipe = function () {
			var a = this,
				b = {},
				c = {},
				d = !1,
				e = !1,
				f = !1;
			a.core.$slide.on("touchstart.lg", function (c) {
				if (a.core.$outer.hasClass("lg-zoomed")) {
					var d = a.core.$slide.eq(a.core.index).find(".lg-object");
					f = d.prop("offsetHeight") * d.attr("data-scale") > a.core.$outer.find(".lg").height(), e = d.prop("offsetWidth") * d.attr("data-scale") > a.core.$outer.find(".lg").width(), (e || f) && (c.preventDefault(), b = {
						x: c.originalEvent.targetTouches[0].pageX,
						y: c.originalEvent.targetTouches[0].pageY
					})
				}
			}), a.core.$slide.on("touchmove.lg", function (g) {
				if (a.core.$outer.hasClass("lg-zoomed")) {
					var i, j, h = a.core.$slide.eq(a.core.index).find(".lg-img-wrap");
					g.preventDefault(), d = !0, c = {
						x: g.originalEvent.targetTouches[0].pageX,
						y: g.originalEvent.targetTouches[0].pageY
					}, a.core.$outer.addClass("lg-zoom-dragging"), j = f ? -Math.abs(h.attr("data-y")) + (c.y - b.y) : -Math.abs(h.attr("data-y")), i = e ? -Math.abs(h.attr("data-x")) + (c.x - b.x) : -Math.abs(h.attr("data-x")), (Math.abs(c.x - b.x) > 15 || Math.abs(c.y - b.y) > 15) && (a.core.s.useLeftForZoom ? h.css({
						left: i + "px",
						top: j + "px"
					}) : h.css("transform", "translate3d(" + i + "px, " + j + "px, 0)"))
				}
			}), a.core.$slide.on("touchend.lg", function () {
				a.core.$outer.hasClass("lg-zoomed") && d && (d = !1, a.core.$outer.removeClass("lg-zoom-dragging"), a.touchendZoom(b, c, e, f))
			})
		}, d.prototype.zoomDrag = function () {
			var b = this,
				c = {},
				d = {},
				e = !1,
				f = !1,
				g = !1,
				h = !1;
			b.core.$slide.on("mousedown.lg.zoom", function (d) {
				var f = b.core.$slide.eq(b.core.index).find(".lg-object");
				h = f.prop("offsetHeight") * f.attr("data-scale") > b.core.$outer.find(".lg").height(), g = f.prop("offsetWidth") * f.attr("data-scale") > b.core.$outer.find(".lg").width(), b.core.$outer.hasClass("lg-zoomed") && a(d.target).hasClass("lg-object") && (g || h) && (d.preventDefault(), c = {
					x: d.pageX,
					y: d.pageY
				}, e = !0, b.core.$outer.scrollLeft += 1, b.core.$outer.scrollLeft -= 1, b.core.$outer.removeClass("lg-grab").addClass("lg-grabbing"))
			}), a(window).on("mousemove.lg.zoom", function (a) {
				if (e) {
					var j, k, i = b.core.$slide.eq(b.core.index).find(".lg-img-wrap");
					f = !0, d = {
						x: a.pageX,
						y: a.pageY
					}, b.core.$outer.addClass("lg-zoom-dragging"), k = h ? -Math.abs(i.attr("data-y")) + (d.y - c.y) : -Math.abs(i.attr("data-y")), j = g ? -Math.abs(i.attr("data-x")) + (d.x - c.x) : -Math.abs(i.attr("data-x")), b.core.s.useLeftForZoom ? i.css({
						left: j + "px",
						top: k + "px"
					}) : i.css("transform", "translate3d(" + j + "px, " + k + "px, 0)")
				}
			}), a(window).on("mouseup.lg.zoom", function (a) {
				e && (e = !1, b.core.$outer.removeClass("lg-zoom-dragging"), !f || c.x === d.x && c.y === d.y || (d = {
					x: a.pageX,
					y: a.pageY
				}, b.touchendZoom(c, d, g, h)), f = !1), b.core.$outer.removeClass("lg-grabbing").addClass("lg-grab")
			})
		}, d.prototype.touchendZoom = function (a, b, c, d) {
			var e = this,
				f = e.core.$slide.eq(e.core.index).find(".lg-img-wrap"),
				g = e.core.$slide.eq(e.core.index).find(".lg-object"),
				h = -Math.abs(f.attr("data-x")) + (b.x - a.x),
				i = -Math.abs(f.attr("data-y")) + (b.y - a.y),
				j = (e.core.$outer.find(".lg").height() - g.prop("offsetHeight")) / 2,
				k = Math.abs(g.prop("offsetHeight") * Math.abs(g.attr("data-scale")) - e.core.$outer.find(".lg").height() + j),
				l = (e.core.$outer.find(".lg").width() - g.prop("offsetWidth")) / 2,
				m = Math.abs(g.prop("offsetWidth") * Math.abs(g.attr("data-scale")) - e.core.$outer.find(".lg").width() + l);
			(Math.abs(b.x - a.x) > 15 || Math.abs(b.y - a.y) > 15) && (d && (i <= -k ? i = -k : i >= -j && (i = -j)), c && (h <= -m ? h = -m : h >= -l && (h = -l)), d ? f.attr("data-y", Math.abs(i)) : i = -Math.abs(f.attr("data-y")), c ? f.attr("data-x", Math.abs(h)) : h = -Math.abs(f.attr("data-x")), e.core.s.useLeftForZoom ? f.css({
				left: h + "px",
				top: i + "px"
			}) : f.css("transform", "translate3d(" + h + "px, " + i + "px, 0)"))
		}, d.prototype.destroy = function () {
			var b = this;
			b.core.$el.off(".lg.zoom"), a(window).off(".lg.zoom"), b.core.$slide.off(".lg.zoom"), b.core.$el.off(".lg.tm.zoom"), b.resetZoom(), clearTimeout(b.zoomabletimeout), b.zoomabletimeout = !1
		}, a.fn.lightGallery.modules.zoom = d
	}()
});

! function (e, o, i, l) {
	"use strict";
	var a = {
			videoMaxWidth: "855px",
			youtubePlayerParams: !1,
			vimeoPlayerParams: !1,
			dailymotionPlayerParams: !1,
			videojs: !1
		},
		s = function (o) {
			return this.core = e(o).data("lightGallery"), this.$el = e(o), this.core.s = e.extend({}, a, this.core.s), this.videoLoaded = !1, this.init(), this
		};
	s.prototype.init = function () {
		var o = this;
		o.core.$el.on("hasVideo.lg.tm", function (e, i, l, a) {
			if (o.core.$slide.eq(i).find(".lg-video").append(o.loadVideo(l, "lg-object", !0, i, a)), a)
				if (o.core.s.videojs) try {
					videojs(o.core.$slide.eq(i).find(".lg-html5").get(0), {}, function () {
						o.videoLoaded || this.play()
					})
				} catch (s) {
					console.error("Make sure you have included videojs")
				} else o.core.$slide.eq(i).find(".lg-html5").get(0).play()
		}), o.core.$el.on("onAferAppendSlide.lg.tm", function (e, i) {
			o.core.$slide.eq(i).find(".lg-video-cont").css("max-width", o.core.s.videoMaxWidth), o.videoLoaded = !0
		});
		var i = function (e) {
			if (e.find(".lg-object").hasClass("lg-has-poster") && e.find(".lg-object").is(":visible"))
				if (e.hasClass("lg-has-video")) {
					var i = e.find(".lg-youtube").get(0),
						l = e.find(".lg-vimeo").get(0),
						a = e.find(".lg-dailymotion").get(0),
						s = e.find(".lg-html5").get(0);
					if (i) i.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
					else if (l) try {
							$f(l).api("play")
						} catch (r) {
							console.error("Make sure you have included froogaloop2 js")
						} else if (a) a.contentWindow.postMessage("play", "*");
						else if (s)
						if (o.core.s.videojs) try {
							videojs(s).play()
						} catch (r) {
							console.error("Make sure you have included videojs")
						} else s.play();
					e.addClass("lg-video-palying")
				} else {
					e.addClass("lg-video-palying lg-has-video");
					var t, d, c = function (i, l) {
						if (e.find(".lg-video").append(o.loadVideo(i, "", !1, o.core.index, l)), l)
							if (o.core.s.videojs) try {
								videojs(o.core.$slide.eq(o.core.index).find(".lg-html5").get(0), {}, function () {
									this.play()
								})
							} catch (a) {
								console.error("Make sure you have included videojs")
							} else o.core.$slide.eq(o.core.index).find(".lg-html5").get(0).play()
					};
					o.core.s.dynamic ? (t = o.core.s.dynamicEl[o.core.index].src, d = o.core.s.dynamicEl[o.core.index].html, c(t, d)) : (t = o.core.$items.eq(o.core.index).attr("href") || o.core.$items.eq(o.core.index).attr("data-src"), d = o.core.$items.eq(o.core.index).attr("data-html"), c(t, d));
					var n = e.find(".lg-object");
					e.find(".lg-video").append(n), e.find(".lg-video-object").hasClass("lg-html5") || (e.removeClass("lg-complete"), e.find(".lg-video-object").on("load.lg error.lg", function () {
						e.addClass("lg-complete")
					}))
				}
		};
		o.core.doCss() && o.core.$items.length > 1 && (o.core.s.enableSwipe && o.core.isTouch || o.core.s.enableDrag && !o.core.isTouch) ? o.core.$el.on("onSlideClick.lg.tm", function () {
			var e = o.core.$slide.eq(o.core.index);
			i(e)
		}) : o.core.$slide.on("click.lg", function () {
			i(e(this))
		}), o.core.$el.on("onBeforeSlide.lg.tm", function (e, i, l) {
			var a = o.core.$slide.eq(i),
				s = a.find(".lg-youtube").get(0),
				r = a.find(".lg-vimeo").get(0),
				t = a.find(".lg-dailymotion").get(0),
				d = a.find(".lg-html5").get(0);
			if (s) s.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
			else if (r) try {
					$f(r).api("pause")
				} catch (c) {
					console.error("Make sure you have included froogaloop2 js")
				} else if (t) t.contentWindow.postMessage("pause", "*");
				else if (d)
				if (o.core.s.videojs) try {
					videojs(d).pause()
				} catch (c) {
					console.error("Make sure you have included videojs")
				} else d.pause();
			var n;
			n = o.core.s.dynamic ? o.core.s.dynamicEl[l].src : o.core.$items.eq(l).attr("href") || o.core.$items.eq(l).attr("data-src");
			var m = o.core.isVideo(n, l) || {};
			(m.youtube || m.vimeo || m.dailymotion) && o.core.$outer.addClass("lg-hide-download")
		}), o.core.$el.on("onAfterSlide.lg.tm", function (e, i) {
			o.core.$slide.eq(i).removeClass("lg-video-palying")
		})
	}, s.prototype.loadVideo = function (o, i, l, a, s) {
		var r = "",
			t = 1,
			d = "",
			c = this.core.isVideo(o, a) || {};
		if (l && (t = this.videoLoaded ? 0 : 1), c.youtube) d = "?wmode=opaque&autoplay=" + t + "&enablejsapi=1", this.core.s.youtubePlayerParams && (d = d + "&" + e.param(this.core.s.youtubePlayerParams)), r = '<iframe class="lg-video-object lg-youtube ' + i + '" width="560" height="315" src="//www.youtube.com/embed/' + c.youtube[1] + d + '" frameborder="0" allowfullscreen></iframe>';
		else if (c.vimeo) d = "?autoplay=" + t + "&api=1", this.core.s.vimeoPlayerParams && (d = d + "&" + e.param(this.core.s.vimeoPlayerParams)), r = '<iframe class="lg-video-object lg-vimeo ' + i + '" width="560" height="315"  src="http://player.vimeo.com/video/' + c.vimeo[1] + d + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
		else if (c.dailymotion) d = "?wmode=opaque&autoplay=" + t + "&api=postMessage", this.core.s.dailymotionPlayerParams && (d = d + "&" + e.param(this.core.s.dailymotionPlayerParams)), r = '<iframe class="lg-video-object lg-dailymotion ' + i + '" width="560" height="315" src="//www.dailymotion.com/embed/video/' + c.dailymotion[1] + d + '" frameborder="0" allowfullscreen></iframe>';
		else if (c.html5) {
			var n = s.substring(0, 1);
			("." === n || "#" === n) && (s = e(s).html()), r = s
		}
		return r
	}, s.prototype.destroy = function () {
		this.videoLoaded = !1
	}, e.fn.lightGallery.modules.video = s
}(jQuery, window, document);

! function (a) {
	function b() {}

	function c(a) {
		function c(b) {
			b.prototype.option || (b.prototype.option = function (b) {
				a.isPlainObject(b) && (this.options = a.extend(!0, this.options, b))
			})
		}

		function e(b, c) {
			a.fn[b] = function (e) {
				if ("string" == typeof e) {
					for (var g = d.call(arguments, 1), h = 0, i = this.length; i > h; h++) {
						var j = this[h],
							k = a.data(j, b);
						if (k)
							if (a.isFunction(k[e]) && "_" !== e.charAt(0)) {
								var l = k[e].apply(k, g);
								if (void 0 !== l) return l
							} else f("no such method '" + e + "' for " + b + " instance");
						else f("cannot call methods on " + b + " prior to initialization; attempted to call '" + e + "'")
					}
					return this
				}
				return this.each(function () {
					var d = a.data(this, b);
					d ? (d.option(e), d._init()) : (d = new c(this, e), a.data(this, b, d))
				})
			}
		}
		if (a) {
			var f = "undefined" == typeof console ? b : function (a) {
				console.error(a)
			};
			return a.bridget = function (a, b) {
				c(b), e(a, b)
			}, a.bridget
		}
	}
	var d = Array.prototype.slice;
	"function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], c) : c("object" == typeof exports ? require("jquery") : a.jQuery)
}(window),
function (a) {
	function b(b) {
		var c = a.event;
		return c.target = c.target || c.srcElement || b, c
	}
	var c = document.documentElement,
		d = function () {};
	c.addEventListener ? d = function (a, b, c) {
		a.addEventListener(b, c, !1)
	} : c.attachEvent && (d = function (a, c, d) {
		a[c + d] = d.handleEvent ? function () {
			var c = b(a);
			d.handleEvent.call(d, c)
		} : function () {
			var c = b(a);
			d.call(a, c)
		}, a.attachEvent("on" + c, a[c + d])
	});
	var e = function () {};
	c.removeEventListener ? e = function (a, b, c) {
		a.removeEventListener(b, c, !1)
	} : c.detachEvent && (e = function (a, b, c) {
		a.detachEvent("on" + b, a[b + c]);
		try {
			delete a[b + c]
		} catch (d) {
			a[b + c] = void 0
		}
	});
	var f = {
		bind: d,
		unbind: e
	};
	"function" == typeof define && define.amd ? define("eventie/eventie", f) : "object" == typeof exports ? module.exports = f : a.eventie = f
}(window),
function () {
	"use strict";

	function a() {}

	function b(a, b) {
		for (var c = a.length; c--;)
			if (a[c].listener === b) return c;
		return -1
	}

	function c(a) {
		return function () {
			return this[a].apply(this, arguments)
		}
	}
	var d = a.prototype,
		e = this,
		f = e.EventEmitter;
	d.getListeners = function (a) {
		var b, c, d = this._getEvents();
		if (a instanceof RegExp) {
			b = {};
			for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c])
		} else b = d[a] || (d[a] = []);
		return b
	}, d.flattenListeners = function (a) {
		var b, c = [];
		for (b = 0; b < a.length; b += 1) c.push(a[b].listener);
		return c
	}, d.getListenersAsObject = function (a) {
		var b, c = this.getListeners(a);
		return c instanceof Array && (b = {}, b[a] = c), b || c
	}, d.addListener = function (a, c) {
		var d, e = this.getListenersAsObject(a),
			f = "object" == typeof c;
		for (d in e) e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c : {
			listener: c,
			once: !1
		});
		return this
	}, d.on = c("addListener"), d.addOnceListener = function (a, b) {
		return this.addListener(a, {
			listener: b,
			once: !0
		})
	}, d.once = c("addOnceListener"), d.defineEvent = function (a) {
		return this.getListeners(a), this
	}, d.defineEvents = function (a) {
		for (var b = 0; b < a.length; b += 1) this.defineEvent(a[b]);
		return this
	}, d.removeListener = function (a, c) {
		var d, e, f = this.getListenersAsObject(a);
		for (e in f) f.hasOwnProperty(e) && (d = b(f[e], c), -1 !== d && f[e].splice(d, 1));
		return this
	}, d.off = c("removeListener"), d.addListeners = function (a, b) {
		return this.manipulateListeners(!1, a, b)
	}, d.removeListeners = function (a, b) {
		return this.manipulateListeners(!0, a, b)
	}, d.manipulateListeners = function (a, b, c) {
		var d, e, f = a ? this.removeListener : this.addListener,
			g = a ? this.removeListeners : this.addListeners;
		if ("object" != typeof b || b instanceof RegExp)
			for (d = c.length; d--;) f.call(this, b, c[d]);
		else
			for (d in b) b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e));
		return this
	}, d.removeEvent = function (a) {
		var b, c = typeof a,
			d = this._getEvents();
		if ("string" === c) delete d[a];
		else if (a instanceof RegExp)
			for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b];
		else delete this._events;
		return this
	}, d.removeAllListeners = c("removeEvent"), d.emitEvent = function (a, b) {
		var c, d, e, f, g = this.getListenersAsObject(a);
		for (e in g)
			if (g.hasOwnProperty(e))
				for (d = g[e].length; d--;) c = g[e][d], c.once === !0 && this.removeListener(a, c.listener), f = c.listener.apply(this, b || []), f === this._getOnceReturnValue() && this.removeListener(a, c.listener);
		return this
	}, d.trigger = c("emitEvent"), d.emit = function (a) {
		var b = Array.prototype.slice.call(arguments, 1);
		return this.emitEvent(a, b)
	}, d.setOnceReturnValue = function (a) {
		return this._onceReturnValue = a, this
	}, d._getOnceReturnValue = function () {
		return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
	}, d._getEvents = function () {
		return this._events || (this._events = {})
	}, a.noConflict = function () {
		return e.EventEmitter = f, a
	}, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
		return a
	}) : "object" == typeof module && module.exports ? module.exports = a : e.EventEmitter = a
}.call(this),
	function (a) {
		function b(a) {
			if (a) {
				if ("string" == typeof d[a]) return a;
				a = a.charAt(0).toUpperCase() + a.slice(1);
				for (var b, e = 0, f = c.length; f > e; e++)
					if (b = c[e] + a, "string" == typeof d[b]) return b
			}
		}
		var c = "Webkit Moz ms Ms O".split(" "),
			d = document.documentElement.style;
		"function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function () {
			return b
		}) : "object" == typeof exports ? module.exports = b : a.getStyleProperty = b
	}(window),
	function (a, b) {
		function c(a) {
			var b = parseFloat(a),
				c = -1 === a.indexOf("%") && !isNaN(b);
			return c && b
		}

		function d() {}

		function e() {
			for (var a = {
					width: 0,
					height: 0,
					innerWidth: 0,
					innerHeight: 0,
					outerWidth: 0,
					outerHeight: 0
				}, b = 0, c = h.length; c > b; b++) {
				var d = h[b];
				a[d] = 0
			}
			return a
		}

		function f(b) {
			function d() {
				if (!m) {
					m = !0;
					var d = a.getComputedStyle;
					if (j = function () {
							var a = d ? function (a) {
								return d(a, null)
							} : function (a) {
								return a.currentStyle
							};
							return function (b) {
								var c = a(b);
								return c || g("Style returned " + c ), c
							}
						}(), k = b("boxSizing")) {
						var e = document.createElement("div");
						e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style[k] = "border-box";
						var f = document.body || document.documentElement;
						f.appendChild(e);
						var h = j(e);
						l = 200 === c(h.width), f.removeChild(e)
					}
				}
			}

			function f(a) {
				if (d(), "string" == typeof a && (a = document.querySelector(a)), a && "object" == typeof a && a.nodeType) {
					var b = j(a);
					if ("none" === b.display) return e();
					var f = {};
					f.width = a.offsetWidth, f.height = a.offsetHeight;
					for (var g = f.isBorderBox = !(!k || !b[k] || "border-box" !== b[k]), m = 0, n = h.length; n > m; m++) {
						var o = h[m],
							p = b[o];
						p = i(a, p);
						var q = parseFloat(p);
						f[o] = isNaN(q) ? 0 : q
					}
					var r = f.paddingLeft + f.paddingRight,
						s = f.paddingTop + f.paddingBottom,
						t = f.marginLeft + f.marginRight,
						u = f.marginTop + f.marginBottom,
						v = f.borderLeftWidth + f.borderRightWidth,
						w = f.borderTopWidth + f.borderBottomWidth,
						x = g && l,
						y = c(b.width);
					y !== !1 && (f.width = y + (x ? 0 : r + v));
					var z = c(b.height);
					return z !== !1 && (f.height = z + (x ? 0 : s + w)), f.innerWidth = f.width - (r + v), f.innerHeight = f.height - (s + w), f.outerWidth = f.width + t, f.outerHeight = f.height + u, f
				}
			}

			function i(b, c) {
				if (a.getComputedStyle || -1 === c.indexOf("%")) return c;
				var d = b.style,
					e = d.left,
					f = b.runtimeStyle,
					g = f && f.left;
				return g && (f.left = b.currentStyle.left), d.left = c, c = d.pixelLeft, d.left = e, g && (f.left = g), c
			}
			var j, k, l, m = !1;
			return f
		}
		var g = "undefined" == typeof console ? d : function (a) {
				console.error(a)
			},
			h = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
		"function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], f) : "object" == typeof exports ? module.exports = f(require("desandro-get-style-property")) : a.getSize = f(a.getStyleProperty)
	}(window),
	function (a) {
		function b(a) {
			"function" == typeof a && (b.isReady ? a() : g.push(a))
		}

		function c(a) {
			var c = "readystatechange" === a.type && "complete" !== f.readyState;
			b.isReady || c || d()
		}

		function d() {
			b.isReady = !0;
			for (var a = 0, c = g.length; c > a; a++) {
				var d = g[a];
				d()
			}
		}

		function e(e) {
			return "complete" === f.readyState ? d() : (e.bind(f, "DOMContentLoaded", c), e.bind(f, "readystatechange", c), e.bind(a, "load", c)), b
		}
		var f = a.document,
			g = [];
		b.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], e) : "object" == typeof exports ? module.exports = e(require("eventie")) : a.docReady = e(a.eventie)
	}(window),
	function (a) {
		"use strict";

		function b(a, b) {
			return a[g](b)
		}

		function c(a) {
			if (!a.parentNode) {
				var b = document.createDocumentFragment();
				b.appendChild(a)
			}
		}

		function d(a, b) {
			c(a);
			for (var d = a.parentNode.querySelectorAll(b), e = 0, f = d.length; f > e; e++)
				if (d[e] === a) return !0;
			return !1
		}

		function e(a, d) {
			return c(a), b(a, d)
		}
		var f, g = function () {
			if (a.matches) return "matches";
			if (a.matchesSelector) return "matchesSelector";
			for (var b = ["webkit", "moz", "ms", "o"], c = 0, d = b.length; d > c; c++) {
				var e = b[c],
					f = e + "MatchesSelector";
				if (a[f]) return f
			}
		}();
		if (g) {
			var h = document.createElement("div"),
				i = b(h, "div");
			f = i ? b : e
		} else f = d;
		"function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function () {
			return f
		}) : "object" == typeof exports ? module.exports = f : window.matchesSelector = f
	}(Element.prototype),
	function (a, b) {
		"use strict";
		"function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function (c, d) {
			return b(a, c, d)
		}) : "object" == typeof exports ? module.exports = b(a, require("doc-ready"), require("desandro-matches-selector")) : a.fizzyUIUtils = b(a, a.docReady, a.matchesSelector)
	}(window, function (a, b, c) {
		var d = {};
		d.extend = function (a, b) {
			for (var c in b) a[c] = b[c];
			return a
		}, d.modulo = function (a, b) {
			return (a % b + b) % b
		};
		var e = Object.prototype.toString;
		d.isArray = function (a) {
			return "[object Array]" == e.call(a)
		}, d.makeArray = function (a) {
			var b = [];
			if (d.isArray(a)) b = a;
			else if (a && "number" == typeof a.length)
				for (var c = 0, e = a.length; e > c; c++) b.push(a[c]);
			else b.push(a);
			return b
		}, d.indexOf = Array.prototype.indexOf ? function (a, b) {
			return a.indexOf(b)
		} : function (a, b) {
			for (var c = 0, d = a.length; d > c; c++)
				if (a[c] === b) return c;
			return -1
		}, d.removeFrom = function (a, b) {
			var c = d.indexOf(a, b); - 1 != c && a.splice(c, 1)
		}, d.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function (a) {
			return a instanceof HTMLElement
		} : function (a) {
			return a && "object" == typeof a && 1 == a.nodeType && "string" == typeof a.nodeName
		}, d.setText = function () {
			function a(a, c) {
				b = b || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText"), a[b] = c
			}
			var b;
			return a
		}(), d.getParent = function (a, b) {
			for (; a != document.body;)
				if (a = a.parentNode, c(a, b)) return a
		}, d.getQueryElement = function (a) {
			return "string" == typeof a ? document.querySelector(a) : a
		}, d.handleEvent = function (a) {
			var b = "on" + a.type;
			this[b] && this[b](a)
		}, d.filterFindElements = function (a, b) {
			a = d.makeArray(a);
			for (var e = [], f = 0, g = a.length; g > f; f++) {
				var h = a[f];
				if (d.isElement(h))
					if (b) {
						c(h, b) && e.push(h);
						for (var i = h.querySelectorAll(b), j = 0, k = i.length; k > j; j++) e.push(i[j])
					} else e.push(h)
			}
			return e
		}, d.debounceMethod = function (a, b, c) {
			var d = a.prototype[b],
				e = b + "Timeout";
			a.prototype[b] = function () {
				var a = this[e];
				a && clearTimeout(a);
				var b = arguments,
					f = this;
				this[e] = setTimeout(function () {
					d.apply(f, b), delete f[e]
				}, c || 100)
			}
		}, d.toDashed = function (a) {
			return a.replace(/(.)([A-Z])/g, function (a, b, c) {
				return b + "-" + c
			}).toLowerCase()
		};
		var f = a.console;
		return d.htmlInit = function (c, e) {
			b(function () {
				for (var b = d.toDashed(e), g = document.querySelectorAll(".js-" + b), h = "data-" + b + "-options", i = 0, j = g.length; j > i; i++) {
					var k, l = g[i],
						m = l.getAttribute(h);
					try {
						k = m && JSON.parse(m)
					} catch (n) {
						f && f.error("Error parsing " + h + " on " + l.nodeName.toLowerCase() + (l.id ? "#" + l.id : "") + ": " + n);
						continue
					}
					var o = new c(l, k),
						p = a.jQuery;
					p && p.data(l, e, o)
				}
			})
		}, d
	}),
	function (a, b) {
		"use strict";
		"function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], function (c, d, e, f) {
			return b(a, c, d, e, f)
		}) : "object" == typeof exports ? module.exports = b(a, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils")) : (a.Outlayer = {}, a.Outlayer.Item = b(a, a.EventEmitter, a.getSize, a.getStyleProperty, a.fizzyUIUtils))
	}(window, function (a, b, c, d, e) {
		"use strict";

		function f(a) {
			for (var b in a) return !1;
			return b = null, !0
		}

		function g(a, b) {
			a && (this.element = a, this.layout = b, this.position = {
				x: 0,
				y: 0
			}, this._create())
		}

		function h(a) {
			return a.replace(/([A-Z])/g, function (a) {
				return "-" + a.toLowerCase()
			})
		}
		var i = a.getComputedStyle,
			j = i ? function (a) {
				return i(a, null)
			} : function (a) {
				return a.currentStyle
			},
			k = d("transition"),
			l = d("transform"),
			m = k && l,
			n = !!d("perspective"),
			o = {
				WebkitTransition: "webkitTransitionEnd",
				MozTransition: "transitionend",
				OTransition: "otransitionend",
				transition: "transitionend"
			} [k],
			p = ["transform", "transition", "transitionDuration", "transitionProperty"],
			q = function () {
				for (var a = {}, b = 0, c = p.length; c > b; b++) {
					var e = p[b],
						f = d(e);
					f && f !== e && (a[e] = f)
				}
				return a
			}();
		e.extend(g.prototype, b.prototype), g.prototype._create = function () {
			this._transn = {
				ingProperties: {},
				clean: {},
				onEnd: {}
			}, this.css({
				position: "absolute"
			})
		}, g.prototype.handleEvent = function (a) {
			var b = "on" + a.type;
			this[b] && this[b](a)
		}, g.prototype.getSize = function () {
			this.size = c(this.element)
		}, g.prototype.css = function (a) {
			var b = this.element.style;
			for (var c in a) {
				var d = q[c] || c;
				b[d] = a[c]
			}
		}, g.prototype.getPosition = function () {
			var a = j(this.element),
				b = this.layout.options,
				c = b.isOriginLeft,
				d = b.isOriginTop,
				e = a[c ? "left" : "right"],
				f = a[d ? "top" : "bottom"],
				g = this.layout.size,
				h = -1 != e.indexOf("%") ? parseFloat(e) / 100 * g.width : parseInt(e, 10),
				i = -1 != f.indexOf("%") ? parseFloat(f) / 100 * g.height : parseInt(f, 10);
			h = isNaN(h) ? 0 : h, i = isNaN(i) ? 0 : i, h -= c ? g.paddingLeft : g.paddingRight, i -= d ? g.paddingTop : g.paddingBottom, this.position.x = h, this.position.y = i
		}, g.prototype.layoutPosition = function () {
			var a = this.layout.size,
				b = this.layout.options,
				c = {},
				d = b.isOriginLeft ? "paddingLeft" : "paddingRight",
				e = b.isOriginLeft ? "left" : "right",
				f = b.isOriginLeft ? "right" : "left",
				g = this.position.x + a[d];
			c[e] = this.getXValue(g), c[f] = "";
			var h = b.isOriginTop ? "paddingTop" : "paddingBottom",
				i = b.isOriginTop ? "top" : "bottom",
				j = b.isOriginTop ? "bottom" : "top",
				k = this.position.y + a[h];
			c[i] = this.getYValue(k), c[j] = "", this.css(c), this.emitEvent("layout", [this])
		}, g.prototype.getXValue = function (a) {
			var b = this.layout.options;
			return b.percentPosition && !b.isHorizontal ? a / this.layout.size.width * 100 + "%" : a + "px"
		}, g.prototype.getYValue = function (a) {
			var b = this.layout.options;
			return b.percentPosition && b.isHorizontal ? a / this.layout.size.height * 100 + "%" : a + "px"
		}, g.prototype._transitionTo = function (a, b) {
			this.getPosition();
			var c = this.position.x,
				d = this.position.y,
				e = parseInt(a, 10),
				f = parseInt(b, 10),
				g = e === this.position.x && f === this.position.y;
			if (this.setPosition(a, b), g && !this.isTransitioning) return void this.layoutPosition();
			var h = a - c,
				i = b - d,
				j = {};
			j.transform = this.getTranslate(h, i), this.transition({
				to: j,
				onTransitionEnd: {
					transform: this.layoutPosition
				},
				isCleaning: !0
			})
		}, g.prototype.getTranslate = function (a, b) {
			var c = this.layout.options;
			return a = c.isOriginLeft ? a : -a, b = c.isOriginTop ? b : -b, n ? "translate3d(" + a + "px, " + b + "px, 0)" : "translate(" + a + "px, " + b + "px)"
		}, g.prototype.goTo = function (a, b) {
			this.setPosition(a, b), this.layoutPosition()
		}, g.prototype.moveTo = m ? g.prototype._transitionTo : g.prototype.goTo, g.prototype.setPosition = function (a, b) {
			this.position.x = parseInt(a, 10), this.position.y = parseInt(b, 10)
		}, g.prototype._nonTransition = function (a) {
			this.css(a.to), a.isCleaning && this._removeStyles(a.to);
			for (var b in a.onTransitionEnd) a.onTransitionEnd[b].call(this)
		}, g.prototype._transition = function (a) {
			if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(a);
			var b = this._transn;
			for (var c in a.onTransitionEnd) b.onEnd[c] = a.onTransitionEnd[c];
			for (c in a.to) b.ingProperties[c] = !0, a.isCleaning && (b.clean[c] = !0);
			if (a.from) {
				this.css(a.from);
				var d = this.element.offsetHeight;
				d = null
			}
			this.enableTransition(a.to), this.css(a.to), this.isTransitioning = !0
		};
		var r = "opacity," + h(q.transform || "transform");
		g.prototype.enableTransition = function () {
			this.isTransitioning || (this.css({
				transitionProperty: r,
				transitionDuration: this.layout.options.transitionDuration
			}), this.element.addEventListener(o, this, !1))
		}, g.prototype.transition = g.prototype[k ? "_transition" : "_nonTransition"], g.prototype.onwebkitTransitionEnd = function (a) {
			this.ontransitionend(a)
		}, g.prototype.onotransitionend = function (a) {
			this.ontransitionend(a)
		};
		var s = {
			"-webkit-transform": "transform",
			"-moz-transform": "transform",
			"-o-transform": "transform"
		};
		g.prototype.ontransitionend = function (a) {
			if (a.target === this.element) {
				var b = this._transn,
					c = s[a.propertyName] || a.propertyName;
				if (delete b.ingProperties[c], f(b.ingProperties) && this.disableTransition(), c in b.clean && (this.element.style[a.propertyName] = "", delete b.clean[c]), c in b.onEnd) {
					var d = b.onEnd[c];
					d.call(this), delete b.onEnd[c]
				}
				this.emitEvent("transitionEnd", [this])
			}
		}, g.prototype.disableTransition = function () {
			this.removeTransitionStyles(), this.element.removeEventListener(o, this, !1), this.isTransitioning = !1
		}, g.prototype._removeStyles = function (a) {
			var b = {};
			for (var c in a) b[c] = "";
			this.css(b)
		};
		var t = {
			transitionProperty: "",
			transitionDuration: ""
		};
		return g.prototype.removeTransitionStyles = function () {
			this.css(t)
		}, g.prototype.removeElem = function () {
			this.element.parentNode.removeChild(this.element), this.css({
				display: ""
			}), this.emitEvent("remove", [this])
		}, g.prototype.remove = function () {
			if (!k || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
			var a = this;
			this.once("transitionEnd", function () {
				a.removeElem()
			}), this.hide()
		}, g.prototype.reveal = function () {
			delete this.isHidden, this.css({
				display: ""
			});
			var a = this.layout.options,
				b = {},
				c = this.getHideRevealTransitionEndProperty("visibleStyle");
			b[c] = this.onRevealTransitionEnd, this.transition({
				from: a.hiddenStyle,
				to: a.visibleStyle,
				isCleaning: !0,
				onTransitionEnd: b
			})
		}, g.prototype.onRevealTransitionEnd = function () {
			this.isHidden || this.emitEvent("reveal")
		}, g.prototype.getHideRevealTransitionEndProperty = function (a) {
			var b = this.layout.options[a];
			if (b.opacity) return "opacity";
			for (var c in b) return c
		}, g.prototype.hide = function () {
			this.isHidden = !0, this.css({
				display: ""
			});
			var a = this.layout.options,
				b = {},
				c = this.getHideRevealTransitionEndProperty("hiddenStyle");
			b[c] = this.onHideTransitionEnd, this.transition({
				from: a.visibleStyle,
				to: a.hiddenStyle,
				isCleaning: !0,
				onTransitionEnd: b
			})
		}, g.prototype.onHideTransitionEnd = function () {
			this.isHidden && (this.css({
				display: "none"
			}), this.emitEvent("hide"))
		}, g.prototype.destroy = function () {
			this.css({
				position: "",
				left: "",
				right: "",
				top: "",
				bottom: "",
				transition: "",
				transform: ""
			})
		}, g
	}),
	function (a, b) {
		"use strict";
		"function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (c, d, e, f, g) {
			return b(a, c, d, e, f, g)
		}) : "object" == typeof exports ? module.exports = b(a, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : a.Outlayer = b(a, a.eventie, a.EventEmitter, a.getSize, a.fizzyUIUtils, a.Outlayer.Item)
	}(window, function (a, b, c, d, e, f) {
		"use strict";

		function g(a, b) {
			var c = e.getQueryElement(a);
			if (!c) return void(h && h.error("Bad element for " + this.constructor.namespace + ": " + (c || a)));
			this.element = c, i && (this.$element = i(this.element)), this.options = e.extend({}, this.constructor.defaults), this.option(b);
			var d = ++k;
			this.element.outlayerGUID = d, l[d] = this, this._create(), this.options.isInitLayout && this.layout()
		}
		var h = a.console,
			i = a.jQuery,
			j = function () {},
			k = 0,
			l = {};
		return g.namespace = "outlayer", g.Item = f, g.defaults = {
			containerStyle: {
				position: "relative"
			},
			isInitLayout: !0,
			isOriginLeft: !0,
			isOriginTop: !0,
			isResizeBound: !0,
			isResizingContainer: !0,
			transitionDuration: "0.4s",
			hiddenStyle: {
				opacity: 0,
				transform: "scale(0.001)"
			},
			visibleStyle: {
				opacity: 1,
				transform: "scale(1)"
			}
		}, e.extend(g.prototype, c.prototype), g.prototype.option = function (a) {
			e.extend(this.options, a)
		}, g.prototype._create = function () {
			this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), e.extend(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
		}, g.prototype.reloadItems = function () {
			this.items = this._itemize(this.element.children)
		}, g.prototype._itemize = function (a) {
			for (var b = this._filterFindItemElements(a), c = this.constructor.Item, d = [], e = 0, f = b.length; f > e; e++) {
				var g = b[e],
					h = new c(g, this);
				d.push(h)
			}
			return d
		}, g.prototype._filterFindItemElements = function (a) {
			return e.filterFindElements(a, this.options.itemSelector)
		}, g.prototype.getItemElements = function () {
			for (var a = [], b = 0, c = this.items.length; c > b; b++) a.push(this.items[b].element);
			return a
		}, g.prototype.layout = function () {
			this._resetLayout(), this._manageStamps();
			var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
			this.layoutItems(this.items, a), this._isLayoutInited = !0
		}, g.prototype._init = g.prototype.layout, g.prototype._resetLayout = function () {
			this.getSize()
		}, g.prototype.getSize = function () {
			this.size = d(this.element)
		}, g.prototype._getMeasurement = function (a, b) {
			var c, f = this.options[a];
			f ? ("string" == typeof f ? c = this.element.querySelector(f) : e.isElement(f) && (c = f), this[a] = c ? d(c)[b] : f) : this[a] = 0
		}, g.prototype.layoutItems = function (a, b) {
			a = this._getItemsForLayout(a), this._layoutItems(a, b), this._postLayout()
		}, g.prototype._getItemsForLayout = function (a) {
			for (var b = [], c = 0, d = a.length; d > c; c++) {
				var e = a[c];
				e.isIgnored || b.push(e)
			}
			return b
		}, g.prototype._layoutItems = function (a, b) {
			if (this._emitCompleteOnItems("layout", a), a && a.length) {
				for (var c = [], d = 0, e = a.length; e > d; d++) {
					var f = a[d],
						g = this._getItemLayoutPosition(f);
					g.item = f, g.isInstant = b || f.isLayoutInstant, c.push(g)
				}
				this._processLayoutQueue(c)
			}
		}, g.prototype._getItemLayoutPosition = function () {
			return {
				x: 0,
				y: 0
			}
		}, g.prototype._processLayoutQueue = function (a) {
			for (var b = 0, c = a.length; c > b; b++) {
				var d = a[b];
				this._positionItem(d.item, d.x, d.y, d.isInstant)
			}
		}, g.prototype._positionItem = function (a, b, c, d) {
			d ? a.goTo(b, c) : a.moveTo(b, c)
		}, g.prototype._postLayout = function () {
			this.resizeContainer()
		}, g.prototype.resizeContainer = function () {
			if (this.options.isResizingContainer) {
				var a = this._getContainerSize();
				a && (this._setContainerMeasure(a.width, !0), this._setContainerMeasure(a.height, !1))
			}
		}, g.prototype._getContainerSize = j, g.prototype._setContainerMeasure = function (a, b) {
			if (void 0 !== a) {
				var c = this.size;
				c.isBorderBox && (a += b ? c.paddingLeft + c.paddingRight + c.borderLeftWidth + c.borderRightWidth : c.paddingBottom + c.paddingTop + c.borderTopWidth + c.borderBottomWidth), a = Math.max(a, 0), this.element.style[b ? "width" : "height"] = a + "px"
			}
		}, g.prototype._emitCompleteOnItems = function (a, b) {
			function c() {
				e.dispatchEvent(a + "Complete", null, [b])
			}

			function d() {
				g++, g === f && c()
			}
			var e = this,
				f = b.length;
			if (!b || !f) return void c();
			for (var g = 0, h = 0, i = b.length; i > h; h++) {
				var j = b[h];
				j.once(a, d)
			}
		}, g.prototype.dispatchEvent = function (a, b, c) {
			var d = b ? [b].concat(c) : c;
			if (this.emitEvent(a, d), i)
				if (this.$element = this.$element || i(this.element), b) {
					var e = i.Event(b);
					e.type = a, this.$element.trigger(e, c)
				} else this.$element.trigger(a, c)
		}, g.prototype.ignore = function (a) {
			var b = this.getItem(a);
			b && (b.isIgnored = !0)
		}, g.prototype.unignore = function (a) {
			var b = this.getItem(a);
			b && delete b.isIgnored
		}, g.prototype.stamp = function (a) {
			if (a = this._find(a)) {
				this.stamps = this.stamps.concat(a);
				for (var b = 0, c = a.length; c > b; b++) {
					var d = a[b];
					this.ignore(d)
				}
			}
		}, g.prototype.unstamp = function (a) {
			if (a = this._find(a))
				for (var b = 0, c = a.length; c > b; b++) {
					var d = a[b];
					e.removeFrom(this.stamps, d), this.unignore(d)
				}
		}, g.prototype._find = function (a) {
			return a ? ("string" == typeof a && (a = this.element.querySelectorAll(a)), a = e.makeArray(a)) : void 0
		}, g.prototype._manageStamps = function () {
			if (this.stamps && this.stamps.length) {
				this._getBoundingRect();
				for (var a = 0, b = this.stamps.length; b > a; a++) {
					var c = this.stamps[a];
					this._manageStamp(c)
				}
			}
		}, g.prototype._getBoundingRect = function () {
			var a = this.element.getBoundingClientRect(),
				b = this.size;
			this._boundingRect = {
				left: a.left + b.paddingLeft + b.borderLeftWidth,
				top: a.top + b.paddingTop + b.borderTopWidth,
				right: a.right - (b.paddingRight + b.borderRightWidth),
				bottom: a.bottom - (b.paddingBottom + b.borderBottomWidth)
			}
		}, g.prototype._manageStamp = j, g.prototype._getElementOffset = function (a) {
			var b = a.getBoundingClientRect(),
				c = this._boundingRect,
				e = d(a),
				f = {
					left: b.left - c.left - e.marginLeft,
					top: b.top - c.top - e.marginTop,
					right: c.right - b.right - e.marginRight,
					bottom: c.bottom - b.bottom - e.marginBottom
				};
			return f
		}, g.prototype.handleEvent = function (a) {
			var b = "on" + a.type;
			this[b] && this[b](a)
		}, g.prototype.bindResize = function () {
			this.isResizeBound || (b.bind(a, "resize", this), this.isResizeBound = !0)
		}, g.prototype.unbindResize = function () {
			this.isResizeBound && b.unbind(a, "resize", this), this.isResizeBound = !1
		}, g.prototype.onresize = function () {
			function a() {
				b.resize(), delete b.resizeTimeout
			}
			this.resizeTimeout && clearTimeout(this.resizeTimeout);
			var b = this;
			this.resizeTimeout = setTimeout(a, 100)
		}, g.prototype.resize = function () {
			this.isResizeBound && this.needsResizeLayout() && this.layout()
		}, g.prototype.needsResizeLayout = function () {
			var a = d(this.element),
				b = this.size && a;
			return b && a.innerWidth !== this.size.innerWidth
		}, g.prototype.addItems = function (a) {
			var b = this._itemize(a);
			return b.length && (this.items = this.items.concat(b)), b
		}, g.prototype.appended = function (a) {
			var b = this.addItems(a);
			b.length && (this.layoutItems(b, !0), this.reveal(b))
		}, g.prototype.prepended = function (a) {
			var b = this._itemize(a);
			if (b.length) {
				var c = this.items.slice(0);
				this.items = b.concat(c), this._resetLayout(), this._manageStamps(), this.layoutItems(b, !0), this.reveal(b), this.layoutItems(c)
			}
		}, g.prototype.reveal = function (a) {
			this._emitCompleteOnItems("reveal", a);
			for (var b = a && a.length, c = 0; b && b > c; c++) {
				var d = a[c];
				d.reveal()
			}
		}, g.prototype.hide = function (a) {
			this._emitCompleteOnItems("hide", a);
			for (var b = a && a.length, c = 0; b && b > c; c++) {
				var d = a[c];
				d.hide()
			}
		}, g.prototype.revealItemElements = function (a) {
			var b = this.getItems(a);
			this.reveal(b)
		}, g.prototype.hideItemElements = function (a) {
			var b = this.getItems(a);
			this.hide(b)
		}, g.prototype.getItem = function (a) {
			for (var b = 0, c = this.items.length; c > b; b++) {
				var d = this.items[b];
				if (d.element === a) return d
			}
		}, g.prototype.getItems = function (a) {
			a = e.makeArray(a);
			for (var b = [], c = 0, d = a.length; d > c; c++) {
				var f = a[c],
					g = this.getItem(f);
				g && b.push(g)
			}
			return b
		}, g.prototype.remove = function (a) {
			var b = this.getItems(a);
			if (this._emitCompleteOnItems("remove", b), b && b.length)
				for (var c = 0, d = b.length; d > c; c++) {
					var f = b[c];
					f.remove(), e.removeFrom(this.items, f)
				}
		}, g.prototype.destroy = function () {
			var a = this.element.style;
			a.height = "", a.position = "", a.width = "";
			for (var b = 0, c = this.items.length; c > b; b++) {
				var d = this.items[b];
				d.destroy()
			}
			this.unbindResize();
			var e = this.element.outlayerGUID;
			delete l[e], delete this.element.outlayerGUID, i && i.removeData(this.element, this.constructor.namespace)
		}, g.data = function (a) {
			a = e.getQueryElement(a);
			var b = a && a.outlayerGUID;
			return b && l[b]
		}, g.create = function (a, b) {
			function c() {
				g.apply(this, arguments)
			}
			return Object.create ? c.prototype = Object.create(g.prototype) : e.extend(c.prototype, g.prototype), c.prototype.constructor = c, c.defaults = e.extend({}, g.defaults), e.extend(c.defaults, b), c.prototype.settings = {}, c.namespace = a, c.data = g.data, c.Item = function () {
				f.apply(this, arguments)
			}, c.Item.prototype = new f, e.htmlInit(c, a), i && i.bridget && i.bridget(a, c), c
		}, g.Item = f, g
	}),
	function (a, b) {
		"use strict";
		"function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], b) : "object" == typeof exports ? module.exports = b(require("outlayer")) : (a.Isotope = a.Isotope || {}, a.Isotope.Item = b(a.Outlayer))
	}(window, function (a) {
		"use strict";

		function b() {
			a.Item.apply(this, arguments)
		}
		b.prototype = new a.Item, b.prototype._create = function () {
			this.id = this.layout.itemGUID++, a.Item.prototype._create.call(this), this.sortData = {}
		}, b.prototype.updateSortData = function () {
			if (!this.isIgnored) {
				this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
				var a = this.layout.options.getSortData,
					b = this.layout._sorters;
				for (var c in a) {
					var d = b[c];
					this.sortData[c] = d(this.element, this)
				}
			}
		};
		var c = b.prototype.destroy;
		return b.prototype.destroy = function () {
			c.apply(this, arguments), this.css({
				display: ""
			})
		}, b
	}),
	function (a, b) {
		"use strict";
		"function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], b) : "object" == typeof exports ? module.exports = b(require("get-size"), require("outlayer")) : (a.Isotope = a.Isotope || {}, a.Isotope.LayoutMode = b(a.getSize, a.Outlayer))
	}(window, function (a, b) {
		"use strict";

		function c(a) {
			this.isotope = a, a && (this.options = a.options[this.namespace], this.element = a.element, this.items = a.filteredItems, this.size = a.size)
		}
		return function () {
			function a(a) {
				return function () {
					return b.prototype[a].apply(this.isotope, arguments)
				}
			}
			for (var d = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], e = 0, f = d.length; f > e; e++) {
				var g = d[e];
				c.prototype[g] = a(g)
			}
		}(), c.prototype.needsVerticalResizeLayout = function () {
			var b = a(this.isotope.element),
				c = this.isotope.size && b;
			return c && b.innerHeight != this.isotope.size.innerHeight
		}, c.prototype._getMeasurement = function () {
			this.isotope._getMeasurement.apply(this, arguments)
		}, c.prototype.getColumnWidth = function () {
			this.getSegmentSize("column", "Width")
		}, c.prototype.getRowHeight = function () {
			this.getSegmentSize("row", "Height")
		}, c.prototype.getSegmentSize = function (a, b) {
			var c = a + b,
				d = "outer" + b;
			if (this._getMeasurement(c, d), !this[c]) {
				var e = this.getFirstItemSize();
				this[c] = e && e[d] || this.isotope.size["inner" + b]
			}
		}, c.prototype.getFirstItemSize = function () {
			var b = this.isotope.filteredItems[0];
			return b && b.element && a(b.element)
		}, c.prototype.layout = function () {
			this.isotope.layout.apply(this.isotope, arguments)
		}, c.prototype.getSize = function () {
			this.isotope.getSize(), this.size = this.isotope.size
		}, c.modes = {}, c.create = function (a, b) {
			function d() {
				c.apply(this, arguments)
			}
			return d.prototype = new c, b && (d.options = b), d.prototype.namespace = a, c.modes[a] = d, d
		}, c
	}),
	function (a, b) {
		"use strict";
		"function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"], b) : "object" == typeof exports ? module.exports = b(require("outlayer"), require("get-size"), require("fizzy-ui-utils")) : a.Masonry = b(a.Outlayer, a.getSize, a.fizzyUIUtils)
	}(window, function (a, b, c) {
		var d = a.create("masonry");
		return d.prototype._resetLayout = function () {
			this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
			var a = this.cols;
			for (this.colYs = []; a--;) this.colYs.push(0);
			this.maxY = 0
		}, d.prototype.measureColumns = function () {
			if (this.getContainerWidth(), !this.columnWidth) {
				var a = this.items[0],
					c = a && a.element;
				this.columnWidth = c && b(c).outerWidth || this.containerWidth
			}
			var d = this.columnWidth += this.gutter,
				e = this.containerWidth + this.gutter,
				f = e / d,
				g = d - e % d,
				h = g && 1 > g ? "round" : "floor";
			f = Math[h](f), this.cols = Math.max(f, 1)
		}, d.prototype.getContainerWidth = function () {
			var a = this.options.isFitWidth ? this.element.parentNode : this.element,
				c = b(a);
			this.containerWidth = c && c.innerWidth
		}, d.prototype._getItemLayoutPosition = function (a) {
			a.getSize();
			var b = a.size.outerWidth % this.columnWidth,
				d = b && 1 > b ? "round" : "ceil",
				e = Math[d](a.size.outerWidth / this.columnWidth);
			e = Math.min(e, this.cols);
			for (var f = this._getColGroup(e), g = Math.min.apply(Math, f), h = c.indexOf(f, g), i = {
					x: this.columnWidth * h,
					y: g
				}, j = g + a.size.outerHeight, k = this.cols + 1 - f.length, l = 0; k > l; l++) this.colYs[h + l] = j;
			return i
		}, d.prototype._getColGroup = function (a) {
			if (2 > a) return this.colYs;
			for (var b = [], c = this.cols + 1 - a, d = 0; c > d; d++) {
				var e = this.colYs.slice(d, d + a);
				b[d] = Math.max.apply(Math, e)
			}
			return b
		}, d.prototype._manageStamp = function (a) {
			var c = b(a),
				d = this._getElementOffset(a),
				e = this.options.isOriginLeft ? d.left : d.right,
				f = e + c.outerWidth,
				g = Math.floor(e / this.columnWidth);
			g = Math.max(0, g);
			var h = Math.floor(f / this.columnWidth);
			h -= f % this.columnWidth ? 0 : 1, h = Math.min(this.cols - 1, h);
			for (var i = (this.options.isOriginTop ? d.top : d.bottom) + c.outerHeight, j = g; h >= j; j++) this.colYs[j] = Math.max(i, this.colYs[j])
		}, d.prototype._getContainerSize = function () {
			this.maxY = Math.max.apply(Math, this.colYs);
			var a = {
				height: this.maxY
			};
			return this.options.isFitWidth && (a.width = this._getContainerFitWidth()), a
		}, d.prototype._getContainerFitWidth = function () {
			for (var a = 0, b = this.cols; --b && 0 === this.colYs[b];) a++;
			return (this.cols - a) * this.columnWidth - this.gutter
		}, d.prototype.needsResizeLayout = function () {
			var a = this.containerWidth;
			return this.getContainerWidth(), a !== this.containerWidth
		}, d
	}),
	function (a, b) {
		"use strict";
		"function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode"), require("masonry-layout")) : b(a.Isotope.LayoutMode, a.Masonry)
	}(window, function (a, b) {
		"use strict";

		function c(a, b) {
			for (var c in b) a[c] = b[c];
			return a
		}
		var d = a.create("masonry"),
			e = d.prototype._getElementOffset,
			f = d.prototype.layout,
			g = d.prototype._getMeasurement;
		c(d.prototype, b.prototype), d.prototype._getElementOffset = e, d.prototype.layout = f, d.prototype._getMeasurement = g;
		var h = d.prototype.measureColumns;
		d.prototype.measureColumns = function () {
			this.items = this.isotope.filteredItems, h.call(this)
		};
		var i = d.prototype._manageStamp;
		return d.prototype._manageStamp = function () {
			this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, i.apply(this, arguments)
		}, d
	}),
	function (a, b) {
		"use strict";
		"function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode")) : b(a.Isotope.LayoutMode)
	}(window, function (a) {
		"use strict";
		var b = a.create("fitRows");
		return b.prototype._resetLayout = function () {
			this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
		}, b.prototype._getItemLayoutPosition = function (a) {
			a.getSize();
			var b = a.size.outerWidth + this.gutter,
				c = this.isotope.size.innerWidth + this.gutter;
			0 !== this.x && b + this.x > c && (this.x = 0, this.y = this.maxY);
			var d = {
				x: this.x,
				y: this.y
			};
			return this.maxY = Math.max(this.maxY, this.y + a.size.outerHeight), this.x += b, d
		}, b.prototype._getContainerSize = function () {
			return {
				height: this.maxY
			}
		}, b
	}),
	function (a, b) {
		"use strict";
		"function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode")) : b(a.Isotope.LayoutMode)
	}(window, function (a) {
		"use strict";
		var b = a.create("vertical", {
			horizontalAlignment: 0
		});
		return b.prototype._resetLayout = function () {
			this.y = 0
		}, b.prototype._getItemLayoutPosition = function (a) {
			a.getSize();
			var b = (this.isotope.size.innerWidth - a.size.outerWidth) * this.options.horizontalAlignment,
				c = this.y;
			return this.y += a.size.outerHeight, {
				x: b,
				y: c
			}
		}, b.prototype._getContainerSize = function () {
			return {
				height: this.y
			}
		}, b
	}),
	function (a, b) {
		"use strict";
		"function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function (c, d, e, f, g, h) {
			return b(a, c, d, e, f, g, h)
		}) : "object" == typeof exports ? module.exports = b(a, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical")) : a.Isotope = b(a, a.Outlayer, a.getSize, a.matchesSelector, a.fizzyUIUtils, a.Isotope.Item, a.Isotope.LayoutMode)
	}(window, function (a, b, c, d, e, f, g) {
		function h(a, b) {
			return function (c, d) {
				for (var e = 0, f = a.length; f > e; e++) {
					var g = a[e],
						h = c.sortData[g],
						i = d.sortData[g];
					if (h > i || i > h) {
						var j = void 0 !== b[g] ? b[g] : b,
							k = j ? 1 : -1;
						return (h > i ? 1 : -1) * k
					}
				}
				return 0
			}
		}
		var i = a.jQuery,
			j = String.prototype.trim ? function (a) {
				return a.trim()
			} : function (a) {
				return a.replace(/^\s+|\s+$/g, "")
			},
			k = document.documentElement,
			l = k.textContent ? function (a) {
				return a.textContent
			} : function (a) {
				return a.innerText
			},
			m = b.create("isotope", {
				layoutMode: "masonry",
				isJQueryFiltering: !0,
				sortAscending: !0
			});
		m.Item = f, m.LayoutMode = g, m.prototype._create = function () {
			this.itemGUID = 0, this._sorters = {}, this._getSorters(), b.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
			for (var a in g.modes) this._initLayoutMode(a)
		}, m.prototype.reloadItems = function () {
			this.itemGUID = 0, b.prototype.reloadItems.call(this)
		}, m.prototype._itemize = function () {
			for (var a = b.prototype._itemize.apply(this, arguments), c = 0, d = a.length; d > c; c++) {
				var e = a[c];
				e.id = this.itemGUID++
			}
			return this._updateItemsSortData(a), a
		}, m.prototype._initLayoutMode = function (a) {
			var b = g.modes[a],
				c = this.options[a] || {};
			this.options[a] = b.options ? e.extend(b.options, c) : c, this.modes[a] = new b(this)
		}, m.prototype.layout = function () {
			return !this._isLayoutInited && this.options.isInitLayout ? void this.arrange() : void this._layout()
		}, m.prototype._layout = function () {
			var a = this._getIsInstant();
			this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, a), this._isLayoutInited = !0
		}, m.prototype.arrange = function (a) {
			function b() {
				d.reveal(c.needReveal), d.hide(c.needHide)
			}
			this.option(a), this._getIsInstant();
			var c = this._filter(this.items);
			this.filteredItems = c.matches;
			var d = this;
			this._bindArrangeComplete(), this._isInstant ? this._noTransition(b) : b(), this._sort(), this._layout()
		}, m.prototype._init = m.prototype.arrange, m.prototype._getIsInstant = function () {
			var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
			return this._isInstant = a, a
		}, m.prototype._bindArrangeComplete = function () {
			function a() {
				b && c && d && e.dispatchEvent("arrangeComplete", null, [e.filteredItems])
			}
			var b, c, d, e = this;
			this.once("layoutComplete", function () {
				b = !0, a()
			}), this.once("hideComplete", function () {
				c = !0, a()
			}), this.once("revealComplete", function () {
				d = !0, a()
			})
		}, m.prototype._filter = function (a) {
			var b = this.options.filter;
			b = b || "*";
			for (var c = [], d = [], e = [], f = this._getFilterTest(b), g = 0, h = a.length; h > g; g++) {
				var i = a[g];
				if (!i.isIgnored) {
					var j = f(i);
					j && c.push(i), j && i.isHidden ? d.push(i) : j || i.isHidden || e.push(i)
				}
			}
			return {
				matches: c,
				needReveal: d,
				needHide: e
			}
		}, m.prototype._getFilterTest = function (a) {
			return i && this.options.isJQueryFiltering ? function (b) {
				return i(b.element).is(a)
			} : "function" == typeof a ? function (b) {
				return a(b.element)
			} : function (b) {
				return d(b.element, a)
			}
		}, m.prototype.updateSortData = function (a) {
			var b;
			a ? (a = e.makeArray(a), b = this.getItems(a)) : b = this.items, this._getSorters(), this._updateItemsSortData(b)
		}, m.prototype._getSorters = function () {
			var a = this.options.getSortData;
			for (var b in a) {
				var c = a[b];
				this._sorters[b] = n(c)
			}
		}, m.prototype._updateItemsSortData = function (a) {
			for (var b = a && a.length, c = 0; b && b > c; c++) {
				var d = a[c];
				d.updateSortData()
			}
		};
		var n = function () {
			function a(a) {
				if ("string" != typeof a) return a;
				var c = j(a).split(" "),
					d = c[0],
					e = d.match(/^\[(.+)\]$/),
					f = e && e[1],
					g = b(f, d),
					h = m.sortDataParsers[c[1]];
				return a = h ? function (a) {
					return a && h(g(a))
				} : function (a) {
					return a && g(a)
				}
			}

			function b(a, b) {
				var c;
				return c = a ? function (b) {
					return b.getAttribute(a)
				} : function (a) {
					var c = a.querySelector(b);
					return c && l(c)
				}
			}
			return a
		}();
		m.sortDataParsers = {
			parseInt: function (a) {
				return parseInt(a, 10)
			},
			parseFloat: function (a) {
				return parseFloat(a)
			}
		}, m.prototype._sort = function () {
			var a = this.options.sortBy;
			if (a) {
				var b = [].concat.apply(a, this.sortHistory),
					c = h(b, this.options.sortAscending);
				this.filteredItems.sort(c), a != this.sortHistory[0] && this.sortHistory.unshift(a)
			}
		}, m.prototype._mode = function () {
			var a = this.options.layoutMode,
				b = this.modes[a];
			if (!b) throw new Error("No layout mode: " + a);
			return b.options = this.options[a], b
		}, m.prototype._resetLayout = function () {
			b.prototype._resetLayout.call(this), this._mode()._resetLayout()
		}, m.prototype._getItemLayoutPosition = function (a) {
			return this._mode()._getItemLayoutPosition(a)
		}, m.prototype._manageStamp = function (a) {
			this._mode()._manageStamp(a)
		}, m.prototype._getContainerSize = function () {
			return this._mode()._getContainerSize()
		}, m.prototype.needsResizeLayout = function () {
			return this._mode().needsResizeLayout()
		}, m.prototype.appended = function (a) {
			var b = this.addItems(a);
			if (b.length) {
				var c = this._filterRevealAdded(b);
				this.filteredItems = this.filteredItems.concat(c)
			}
		}, m.prototype.prepended = function (a) {
			var b = this._itemize(a);
			if (b.length) {
				this._resetLayout(), this._manageStamps();
				var c = this._filterRevealAdded(b);
				this.layoutItems(this.filteredItems), this.filteredItems = c.concat(this.filteredItems), this.items = b.concat(this.items)
			}
		}, m.prototype._filterRevealAdded = function (a) {
			var b = this._filter(a);
			return this.hide(b.needHide), this.reveal(b.matches), this.layoutItems(b.matches, !0), b.matches
		}, m.prototype.insert = function (a) {
			var b = this.addItems(a);
			if (b.length) {
				var c, d, e = b.length;
				for (c = 0; e > c; c++) d = b[c], this.element.appendChild(d.element);
				var f = this._filter(b).matches;
				for (c = 0; e > c; c++) b[c].isLayoutInstant = !0;
				for (this.arrange(), c = 0; e > c; c++) delete b[c].isLayoutInstant;
				this.reveal(f)
			}
		};
		var o = m.prototype.remove;
		return m.prototype.remove = function (a) {
			a = e.makeArray(a);
			var b = this.getItems(a);
			o.call(this, a);
			var c = b && b.length;
			if (c)
				for (var d = 0; c > d; d++) {
					var f = b[d];
					e.removeFrom(this.filteredItems, f)
				}
		}, m.prototype.shuffle = function () {
			for (var a = 0, b = this.items.length; b > a; a++) {
				var c = this.items[a];
				c.sortData.random = Math.random()
			}
			this.options.sortBy = "random", this._sort(), this._layout()
		}, m.prototype._noTransition = function (a) {
			var b = this.options.transitionDuration;
			this.options.transitionDuration = 0;
			var c = a.call(this);
			return this.options.transitionDuration = b, c
		}, m.prototype.getFilteredItemElements = function () {
			for (var a = [], b = 0, c = this.filteredItems.length; c > b; b++) a.push(this.filteredItems[b].element);
			return a
		}, m
	});

(function () {
	function e() {}

	function t(e, t) {
		for (var n = e.length; n--;)
			if (e[n].listener === t) return n;
		return -1
	}

	function n(e) {
		return function () {
			return this[e].apply(this, arguments)
		}
	}
	var i = e.prototype,
		r = this,
		o = r.EventEmitter;
	i.getListeners = function (e) {
		var t, n, i = this._getEvents();
		if ("object" == typeof e) {
			t = {};
			for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n])
		} else t = i[e] || (i[e] = []);
		return t
	}, i.flattenListeners = function (e) {
		var t, n = [];
		for (t = 0; e.length > t; t += 1) n.push(e[t].listener);
		return n
	}, i.getListenersAsObject = function (e) {
		var t, n = this.getListeners(e);
		return n instanceof Array && (t = {}, t[e] = n), t || n
	}, i.addListener = function (e, n) {
		var i, r = this.getListenersAsObject(e),
			o = "object" == typeof n;
		for (i in r) r.hasOwnProperty(i) && -1 === t(r[i], n) && r[i].push(o ? n : {
			listener: n,
			once: !1
		});
		return this
	}, i.on = n("addListener"), i.addOnceListener = function (e, t) {
		return this.addListener(e, {
			listener: t,
			once: !0
		})
	}, i.once = n("addOnceListener"), i.defineEvent = function (e) {
		return this.getListeners(e), this
	}, i.defineEvents = function (e) {
		for (var t = 0; e.length > t; t += 1) this.defineEvent(e[t]);
		return this
	}, i.removeListener = function (e, n) {
		var i, r, o = this.getListenersAsObject(e);
		for (r in o) o.hasOwnProperty(r) && (i = t(o[r], n), -1 !== i && o[r].splice(i, 1));
		return this
	}, i.off = n("removeListener"), i.addListeners = function (e, t) {
		return this.manipulateListeners(!1, e, t)
	}, i.removeListeners = function (e, t) {
		return this.manipulateListeners(!0, e, t)
	}, i.manipulateListeners = function (e, t, n) {
		var i, r, o = e ? this.removeListener : this.addListener,
			s = e ? this.removeListeners : this.addListeners;
		if ("object" != typeof t || t instanceof RegExp)
			for (i = n.length; i--;) o.call(this, t, n[i]);
		else
			for (i in t) t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? o.call(this, i, r) : s.call(this, i, r));
		return this
	}, i.removeEvent = function (e) {
		var t, n = typeof e,
			i = this._getEvents();
		if ("string" === n) delete i[e];
		else if ("object" === n)
			for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t];
		else delete this._events;
		return this
	}, i.removeAllListeners = n("removeEvent"), i.emitEvent = function (e, t) {
		var n, i, r, o, s = this.getListenersAsObject(e);
		for (r in s)
			if (s.hasOwnProperty(r))
				for (i = s[r].length; i--;) n = s[r][i], n.once === !0 && this.removeListener(e, n.listener), o = n.listener.apply(this, t || []), o === this._getOnceReturnValue() && this.removeListener(e, n.listener);
		return this
	}, i.trigger = n("emitEvent"), i.emit = function (e) {
		var t = Array.prototype.slice.call(arguments, 1);
		return this.emitEvent(e, t)
	}, i.setOnceReturnValue = function (e) {
		return this._onceReturnValue = e, this
	}, i._getOnceReturnValue = function () {
		return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
	}, i._getEvents = function () {
		return this._events || (this._events = {})
	}, e.noConflict = function () {
		return r.EventEmitter = o, e
	}, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
		return e
	}) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e
}).call(this),
	function (e) {
		function t(t) {
			var n = e.event;
			return n.target = n.target || n.srcElement || t, n
		}
		var n = document.documentElement,
			i = function () {};
		n.addEventListener ? i = function (e, t, n) {
			e.addEventListener(t, n, !1)
		} : n.attachEvent && (i = function (e, n, i) {
			e[n + i] = i.handleEvent ? function () {
				var n = t(e);
				i.handleEvent.call(i, n)
			} : function () {
				var n = t(e);
				i.call(e, n)
			}, e.attachEvent("on" + n, e[n + i])
		});
		var r = function () {};
		n.removeEventListener ? r = function (e, t, n) {
			e.removeEventListener(t, n, !1)
		} : n.detachEvent && (r = function (e, t, n) {
			e.detachEvent("on" + t, e[t + n]);
			try {
				delete e[t + n]
			} catch (i) {
				e[t + n] = void 0
			}
		});
		var o = {
			bind: i,
			unbind: r
		};
		"function" == typeof define && define.amd ? define("eventie/eventie", o) : e.eventie = o
	}(this),
	function (e, t) {
		"function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function (n, i) {
			return t(e, n, i)
		}) : "object" == typeof exports ? module.exports = t(e, require("wolfy87-eventemitter"), require("eventie")) : e.imagesLoaded = t(e, e.EventEmitter, e.eventie)
	}(window, function (e, t, n) {
		function i(e, t) {
			for (var n in t) e[n] = t[n];
			return e
		}

		function r(e) {
			return "[object Array]" === d.call(e)
		}

		function o(e) {
			var t = [];
			if (r(e)) t = e;
			else if ("number" == typeof e.length)
				for (var n = 0, i = e.length; i > n; n++) t.push(e[n]);
			else t.push(e);
			return t
		}

		function s(e, t, n) {
			if (!(this instanceof s)) return new s(e, t);
			"string" == typeof e && (e = document.querySelectorAll(e)), this.elements = o(e), this.options = i({}, this.options), "function" == typeof t ? n = t : i(this.options, t), n && this.on("always", n), this.getImages(), a && (this.jqDeferred = new a.Deferred);
			var r = this;
			setTimeout(function () {
				r.check()
			})
		}

		function f(e) {
			this.img = e
		}

		function c(e) {
			this.src = e, v[e] = this
		}
		var a = e.jQuery,
			u = e.console,
			h = u !== void 0,
			d = Object.prototype.toString;
		s.prototype = new t, s.prototype.options = {}, s.prototype.getImages = function () {
			this.images = [];
			for (var e = 0, t = this.elements.length; t > e; e++) {
				var n = this.elements[e];
				"IMG" === n.nodeName && this.addImage(n);
				var i = n.nodeType;
				if (i && (1 === i || 9 === i || 11 === i))
					for (var r = n.querySelectorAll("img"), o = 0, s = r.length; s > o; o++) {
						var f = r[o];
						this.addImage(f)
					}
			}
		}, s.prototype.addImage = function (e) {
			var t = new f(e);
			this.images.push(t)
		}, s.prototype.check = function () {
			function e(e, r) {
				return t.options.debug && h && u.log("confirm", e, r), t.progress(e), n++, n === i && t.complete(), !0
			}
			var t = this,
				n = 0,
				i = this.images.length;
			if (this.hasAnyBroken = !1, !i) return this.complete(), void 0;
			for (var r = 0; i > r; r++) {
				var o = this.images[r];
				o.on("confirm", e), o.check()
			}
		}, s.prototype.progress = function (e) {
			this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
			var t = this;
			setTimeout(function () {
				t.emit("progress", t, e), t.jqDeferred && t.jqDeferred.notify && t.jqDeferred.notify(t, e)
			})
		}, s.prototype.complete = function () {
			var e = this.hasAnyBroken ? "fail" : "done";
			this.isComplete = !0;
			var t = this;
			setTimeout(function () {
				if (t.emit(e, t), t.emit("always", t), t.jqDeferred) {
					var n = t.hasAnyBroken ? "reject" : "resolve";
					t.jqDeferred[n](t)
				}
			})
		}, a && (a.fn.imagesLoaded = function (e, t) {
			var n = new s(this, e, t);
			return n.jqDeferred.promise(a(this))
		}), f.prototype = new t, f.prototype.check = function () {
			var e = v[this.img.src] || new c(this.img.src);
			if (e.isConfirmed) return this.confirm(e.isLoaded, "cached was confirmed"), void 0;
			if (this.img.complete && void 0 !== this.img.naturalWidth) return this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), void 0;
			var t = this;
			e.on("confirm", function (e, n) {
				return t.confirm(e.isLoaded, n), !0
			}), e.check()
		}, f.prototype.confirm = function (e, t) {
			this.isLoaded = e, this.emit("confirm", this, t)
		};
		var v = {};
		return c.prototype = new t, c.prototype.check = function () {
			if (!this.isChecked) {
				var e = new Image;
				n.bind(e, "load", this), n.bind(e, "error", this), e.src = this.src, this.isChecked = !0
			}
		}, c.prototype.handleEvent = function (e) {
			var t = "on" + e.type;
			this[t] && this[t](e)
		}, c.prototype.onload = function (e) {
			this.confirm(!0, "onload"), this.unbindProxyEvents(e)
		}, c.prototype.onerror = function (e) {
			this.confirm(!1, "onerror"), this.unbindProxyEvents(e)
		}, c.prototype.confirm = function (e, t) {
			this.isConfirmed = !0, this.isLoaded = e, this.emit("confirm", this, t)
		}, c.prototype.unbindProxyEvents = function (e) {
			n.unbind(e.target, "load", this), n.unbind(e.target, "error", this)
		}, s
	});


! function (a) {
	function b(a) {
		return new RegExp("(^|\\s+)" + a + "(\\s+|$)")
	}

	function c(a, b) {
		var c = d(a, b) ? f : e;
		c(a, b)
	}
	var d, e, f;
	"classList" in document.documentElement ? (d = function (a, b) {
		return a.classList.contains(b)
	}, e = function (a, b) {
		a.classList.add(b)
	}, f = function (a, b) {
		a.classList.remove(b)
	}) : (d = function (a, c) {
		return b(c).test(a.className)
	}, e = function (a, b) {
		d(a, b) || (a.className = a.className + " " + b)
	}, f = function (a, c) {
		a.className = a.className.replace(b(c), " ")
	});
	var g = {
		hasClass: d,
		addClass: e,
		removeClass: f,
		toggleClass: c,
		has: d,
		add: e,
		remove: f,
		toggle: c
	};
	"function" == typeof define && define.amd ? define("classie/classie", g) : "object" == typeof exports ? module.exports = g : a.classie = g
}(window),
function (a, b) {
	"function" == typeof define && define.amd ? define("packery/js/rect", b) : "object" == typeof exports ? module.exports = b() : (a.Packery = a.Packery || {}, a.Packery.Rect = b())
}(window, function () {
	function a(b) {
		for (var c in a.defaults) this[c] = a.defaults[c];
		for (c in b) this[c] = b[c]
	}
	var b = window.Packery = function () {};
	return b.Rect = a, a.defaults = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	}, a.prototype.contains = function (a) {
		var b = a.width || 0,
			c = a.height || 0;
		return this.x <= a.x && this.y <= a.y && this.x + this.width >= a.x + b && this.y + this.height >= a.y + c
	}, a.prototype.overlaps = function (a) {
		var b = this.x + this.width,
			c = this.y + this.height,
			d = a.x + a.width,
			e = a.y + a.height;
		return this.x < d && b > a.x && this.y < e && c > a.y
	}, a.prototype.getMaximalFreeRects = function (b) {
		if (!this.overlaps(b)) return !1;
		var c, d = [],
			e = this.x + this.width,
			f = this.y + this.height,
			g = b.x + b.width,
			h = b.y + b.height;
		return this.y < b.y && (c = new a({
			x: this.x,
			y: this.y,
			width: this.width,
			height: b.y - this.y
		}), d.push(c)), e > g && (c = new a({
			x: g,
			y: this.y,
			width: e - g,
			height: this.height
		}), d.push(c)), f > h && (c = new a({
			x: this.x,
			y: h,
			width: this.width,
			height: f - h
		}), d.push(c)), this.x < b.x && (c = new a({
			x: this.x,
			y: this.y,
			width: b.x - this.x,
			height: this.height
		}), d.push(c)), d
	}, a.prototype.canFit = function (a) {
		return this.width >= a.width && this.height >= a.height
	}, a
}),
function (a, b) {
	if ("function" == typeof define && define.amd) define("packery/js/packer", ["./rect"], b);
	else if ("object" == typeof exports) module.exports = b(require("./rect"));
	else {
		var c = a.Packery = a.Packery || {};
		c.Packer = b(c.Rect)
	}
}(window, function (a) {
	function b(a, b, c) {
		this.width = a || 0, this.height = b || 0, this.sortDirection = c || "downwardLeftToRight", this.reset()
	}
	b.prototype.reset = function () {
		this.spaces = [], this.newSpaces = [];
		var b = new a({
			x: 0,
			y: 0,
			width: this.width,
			height: this.height
		});
		this.spaces.push(b), this.sorter = c[this.sortDirection] || c.downwardLeftToRight
	}, b.prototype.pack = function (a) {
		for (var b = 0, c = this.spaces.length; c > b; b++) {
			var d = this.spaces[b];
			if (d.canFit(a)) {
				this.placeInSpace(a, d);
				break
			}
		}
	}, b.prototype.placeInSpace = function (a, b) {
		a.x = b.x, a.y = b.y, this.placed(a)
	}, b.prototype.placed = function (a) {
		for (var b = [], c = 0, d = this.spaces.length; d > c; c++) {
			var e = this.spaces[c],
				f = e.getMaximalFreeRects(a);
			f ? b.push.apply(b, f) : b.push(e)
		}
		this.spaces = b, this.mergeSortSpaces()
	}, b.prototype.mergeSortSpaces = function () {
		b.mergeRects(this.spaces), this.spaces.sort(this.sorter)
	}, b.prototype.addSpace = function (a) {
		this.spaces.push(a), this.mergeSortSpaces()
	}, b.mergeRects = function (a) {
		for (var b = 0, c = a.length; c > b; b++) {
			var d = a[b];
			if (d) {
				var e = a.slice(0);
				e.splice(b, 1);
				for (var f = 0, g = 0, h = e.length; h > g; g++) {
					var i = e[g],
						j = b > g ? 0 : 1;
					d.contains(i) && (a.splice(g + j - f, 1), f++)
				}
			}
		}
		return a
	};
	var c = {
		downwardLeftToRight: function (a, b) {
			return a.y - b.y || a.x - b.x
		},
		rightwardTopToBottom: function (a, b) {
			return a.x - b.x || a.y - b.y
		}
	};
	return b
}),
function (a, b) {
	"function" == typeof define && define.amd ? define("packery/js/item", ["get-style-property/get-style-property", "outlayer/outlayer", "./rect"], b) : "object" == typeof exports ? module.exports = b(require("desandro-get-style-property"), require("outlayer"), require("./rect")) : a.Packery.Item = b(a.getStyleProperty, a.Outlayer, a.Packery.Rect)
}(window, function (a, b, c) {
	var d = a("transform"),
		e = function () {
			b.Item.apply(this, arguments)
		};
	e.prototype = new b.Item;
	var f = e.prototype._create;
	return e.prototype._create = function () {
		f.call(this), this.rect = new c, this.placeRect = new c
	}, e.prototype.dragStart = function () {
		this.getPosition(), this.removeTransitionStyles(), this.isTransitioning && d && (this.element.style[d] = "none"), this.getSize(), this.isPlacing = !0, this.needsPositioning = !1, this.positionPlaceRect(this.position.x, this.position.y), this.isTransitioning = !1, this.didDrag = !1
	}, e.prototype.dragMove = function (a, b) {
		this.didDrag = !0;
		var c = this.layout.size;
		a -= c.paddingLeft, b -= c.paddingTop, this.positionPlaceRect(a, b)
	}, e.prototype.dragStop = function () {
		this.getPosition();
		var a = this.position.x != this.placeRect.x,
			b = this.position.y != this.placeRect.y;
		this.needsPositioning = a || b, this.didDrag = !1
	}, e.prototype.positionPlaceRect = function (a, b, c) {
		this.placeRect.x = this.getPlaceRectCoord(a, !0), this.placeRect.y = this.getPlaceRectCoord(b, !1, c)
	}, e.prototype.getPlaceRectCoord = function (a, b, c) {
		var d = b ? "Width" : "Height",
			e = this.size["outer" + d],
			f = this.layout[b ? "columnWidth" : "rowHeight"],
			g = this.layout.size["inner" + d];
		b || (g = Math.max(g, this.layout.maxY), this.layout.rowHeight || (g -= this.layout.gutter));
		var h;
		if (f) {
			f += this.layout.gutter, g += b ? this.layout.gutter : 0, a = Math.round(a / f);
			var i;
			i = this.layout.options.isHorizontal ? b ? "ceil" : "floor" : b ? "floor" : "ceil";
			var j = Math[i](g / f);
			j -= Math.ceil(e / f), h = j
		} else h = g - e;
		return a = c ? a : Math.min(a, h), a *= f || 1, Math.max(0, a)
	}, e.prototype.copyPlaceRectPosition = function () {
		this.rect.x = this.placeRect.x, this.rect.y = this.placeRect.y
	}, e.prototype.removeElem = function () {
		this.element.parentNode.removeChild(this.element), this.layout.packer.addSpace(this.rect), this.emitEvent("remove", [this])
	}, e
}),
function (a, b) {
	"function" == typeof define && define.amd ? define("packery/js/packery", ["classie/classie", "get-size/get-size", "outlayer/outlayer", "./rect", "./packer", "./item"], b) : "object" == typeof exports ? module.exports = b(require("desandro-classie"), require("get-size"), require("outlayer"), require("./rect"), require("./packer"), require("./item")) : a.Packery = b(a.classie, a.getSize, a.Outlayer, a.Packery.Rect, a.Packery.Packer, a.Packery.Item)
}(window, function (a, b, c, d, e, f) {
	function g(a, b) {
		return a.position.y - b.position.y || a.position.x - b.position.x
	}

	function h(a, b) {
		return a.position.x - b.position.x || a.position.y - b.position.y
	}
	d.prototype.canFit = function (a) {
		return this.width >= a.width - 1 && this.height >= a.height - 1
	};
	var i = c.create("packery");
	return i.Item = f, i.prototype._create = function () {
		c.prototype._create.call(this), this.packer = new e, this.stamp(this.options.stamped);
		var a = this;
		this.handleDraggabilly = {
			dragStart: function () {
				a.itemDragStart(this.element)
			},
			dragMove: function () {
				a.itemDragMove(this.element, this.position.x, this.position.y)
			},
			dragEnd: function () {
				a.itemDragEnd(this.element)
			}
		}, this.handleUIDraggable = {
			start: function (b) {
				a.itemDragStart(b.currentTarget)
			},
			drag: function (b, c) {
				a.itemDragMove(b.currentTarget, c.position.left, c.position.top)
			},
			stop: function (b) {
				a.itemDragEnd(b.currentTarget)
			}
		}
	}, i.prototype._resetLayout = function () {
		this.getSize(), this._getMeasurements();
		var a = this.packer;
		this.options.isHorizontal ? (a.width = Number.POSITIVE_INFINITY, a.height = this.size.innerHeight + this.gutter, a.sortDirection = "rightwardTopToBottom") : (a.width = this.size.innerWidth + this.gutter, a.height = Number.POSITIVE_INFINITY, a.sortDirection = "downwardLeftToRight"), a.reset(), this.maxY = 0, this.maxX = 0
	}, i.prototype._getMeasurements = function () {
		this._getMeasurement("columnWidth", "width"), this._getMeasurement("rowHeight", "height"), this._getMeasurement("gutter", "width")
	}, i.prototype._getItemLayoutPosition = function (a) {
		return this._packItem(a), a.rect
	}, i.prototype._packItem = function (a) {
		this._setRectSize(a.element, a.rect), this.packer.pack(a.rect), this._setMaxXY(a.rect)
	}, i.prototype._setMaxXY = function (a) {
		this.maxX = Math.max(a.x + a.width, this.maxX), this.maxY = Math.max(a.y + a.height, this.maxY)
	}, i.prototype._setRectSize = function (a, c) {
		var d = b(a),
			e = d.outerWidth,
			f = d.outerHeight;
		(e || f) && (e = this._applyGridGutter(e, this.columnWidth), f = this._applyGridGutter(f, this.rowHeight)), c.width = Math.min(e, this.packer.width), c.height = Math.min(f, this.packer.height)
	}, i.prototype._applyGridGutter = function (a, b) {
		if (!b) return a + this.gutter;
		b += this.gutter;
		var c = a % b,
			d = c && 1 > c ? "round" : "ceil";
		return a = Math[d](a / b) * b
	}, i.prototype._getContainerSize = function () {
		return this.options.isHorizontal ? {
			width: this.maxX - this.gutter
		} : {
			height: this.maxY - this.gutter
		}
	}, i.prototype._manageStamp = function (a) {
		var b, c = this.getItem(a);
		if (c && c.isPlacing) b = c.placeRect;
		else {
			var e = this._getElementOffset(a);
			b = new d({
				x: this.options.isOriginLeft ? e.left : e.right,
				y: this.options.isOriginTop ? e.top : e.bottom
			})
		}
		this._setRectSize(a, b), this.packer.placed(b), this._setMaxXY(b)
	}, i.prototype.sortItemsByPosition = function () {
		var a = this.options.isHorizontal ? h : g;
		this.items.sort(a)
	}, i.prototype.fit = function (a, b, c) {
		var d = this.getItem(a);
		d && (this._getMeasurements(), this.stamp(d.element), d.getSize(), d.isPlacing = !0, b = void 0 === b ? d.rect.x : b, c = void 0 === c ? d.rect.y : c, d.positionPlaceRect(b, c, !0), this._bindFitEvents(d), d.moveTo(d.placeRect.x, d.placeRect.y), this.layout(), this.unstamp(d.element), this.sortItemsByPosition(), d.isPlacing = !1, d.copyPlaceRectPosition())
	}, i.prototype._bindFitEvents = function (a) {
		function b() {
			d++, 2 == d && c.emitEvent("fitComplete", [a])
		}
		var c = this,
			d = 0;
		a.on("layout", function () {
			return b(), !0
		}), this.on("layoutComplete", function () {
			return b(), !0
		})
	}, i.prototype.resize = function () {
		var a = b(this.element),
			c = this.size && a,
			d = this.options.isHorizontal ? "innerHeight" : "innerWidth";
		c && a[d] == this.size[d] || this.layout()
	}, i.prototype.itemDragStart = function (a) {
		this.stamp(a);
		var b = this.getItem(a);
		b && b.dragStart()
	}, i.prototype.itemDragMove = function (a, b, c) {
		function d() {
			f.layout(), delete f.dragTimeout
		}
		var e = this.getItem(a);
		e && e.dragMove(b, c);
		var f = this;
		this.clearDragTimeout(), this.dragTimeout = setTimeout(d, 40)
	}, i.prototype.clearDragTimeout = function () {
		this.dragTimeout && clearTimeout(this.dragTimeout)
	}, i.prototype.itemDragEnd = function (b) {
		var c, d = this.getItem(b);
		if (d && (c = d.didDrag, d.dragStop()), !d || !c && !d.needsPositioning) return void this.unstamp(b);
		a.add(d.element, "is-positioning-post-drag");
		var e = this._getDragEndLayoutComplete(b, d);
		d.needsPositioning ? (d.on("layout", e), d.moveTo(d.placeRect.x, d.placeRect.y)) : d && d.copyPlaceRectPosition(), this.clearDragTimeout(), this.on("layoutComplete", e), this.layout()
	}, i.prototype._getDragEndLayoutComplete = function (b, c) {
		var d = c && c.needsPositioning,
			e = 0,
			f = d ? 2 : 1,
			g = this;
		return function () {
			return e++, e != f ? !0 : (c && (a.remove(c.element, "is-positioning-post-drag"), c.isPlacing = !1, c.copyPlaceRectPosition()), g.unstamp(b), g.sortItemsByPosition(), d && g.emitEvent("dragItemPositioned", [c]), !0)
		}
	}, i.prototype.bindDraggabillyEvents = function (a) {
		a.on("dragStart", this.handleDraggabilly.dragStart), a.on("dragMove", this.handleDraggabilly.dragMove), a.on("dragEnd", this.handleDraggabilly.dragEnd)
	}, i.prototype.bindUIDraggableEvents = function (a) {
		a.on("dragstart", this.handleUIDraggable.start).on("drag", this.handleUIDraggable.drag).on("dragstop", this.handleUIDraggable.stop)
	}, i.Rect = d, i.Packer = e, i
}),
function (a, b) {
	"function" == typeof define && define.amd ? define(["isotope/js/layout-mode", "packery/js/packery", "get-size/get-size"], b) : "object" == typeof exports ? module.exports = b(require("isotope-layout/js/layout-mode"), require("packery"), require("get-size")) : b(a.Isotope.LayoutMode, a.Packery, a.getSize)
}(window, function (a, b, c) {
	function d(a, b) {
		for (var c in b) a[c] = b[c];
		return a
	}
	var e = a.create("packery"),
		f = e.prototype._getElementOffset,
		g = e.prototype._getMeasurement;
	d(e.prototype, b.prototype), e.prototype._getElementOffset = f, e.prototype._getMeasurement = g;
	var h = e.prototype._resetLayout;
	e.prototype._resetLayout = function () {
		this.packer = this.packer || new b.Packer, h.apply(this, arguments)
	};
	var i = e.prototype._getItemLayoutPosition;
	e.prototype._getItemLayoutPosition = function (a) {
		return a.rect = a.rect || new b.Rect, i.call(this, a)
	};
	var j = e.prototype._manageStamp;
	return e.prototype._manageStamp = function () {
		this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, j.apply(this, arguments)
	}, e.prototype.needsResizeLayout = function () {
		var a = c(this.element),
			b = this.size && a,
			d = this.options.isHorizontal ? "innerHeight" : "innerWidth";
		return b && a[d] != this.size[d]
	}, e
});


! function (t, e) {
	var s = e.document;
	t.fn.share = function (i) {
		var r = {
				init: function (i) {
					this.share.settings = t.extend({}, this.share.defaults, i);
					var r = (this.share.settings, this.share.settings.networks),
						o = this.share.settings.theme,
						a = this.share.settings.orientation,
						u = this.share.settings.affix,
						h = this.share.settings.margin,
						l = this.share.settings.title || t(s).attr("title"),
						c = this.share.settings.urlToShare || t(location).attr("href"),
						p = "";
					return t.each(t(s).find('meta[name="description"]'), function (e, s) {
						p = t(s).attr("content")
					}), this.each(function () {
						var s, i = t(this),
							m = i.attr("id"),
							d = encodeURIComponent(c),
							f = l.replace("|", ""),
							g = p.substring(0, 250);
						r.forEach(function (e) {
							s = n.networkDefs[e].url, s = s.replace("|u|", d).replace("|t|", f).replace("|d|", g).replace("|140|", f.substring(0, 130)), t("<a href='" + s + "'   class='pop share-" + o + " share-" + o + "-" + e + "'></a>").appendTo(i)
						}), t("#" + m + ".share-" + o).css("margin", h), "horizontal" != a ? t("#" + m + " a.share-" + o).css("display", "block") : t("#" + m + " a.share-" + o).css("display", "inline-block"), "undefined" != typeof u && (i.addClass("share-affix"), -1 != u.indexOf("right") ? (i.css("left", "auto"), i.css("right", "0px"), -1 != u.indexOf("center") && i.css("top", "40%")) : -1 != u.indexOf("left center") && i.css("top", "40%"), -1 != u.indexOf("bottom") && (i.css("bottom", "0px"), i.css("top", "auto"), -1 != u.indexOf("center") && i.css("left", "40%"))), t(".pop").click(function () {
							return e.open(t(this).attr("href"), "t", "toolbar=0,resizable=1,status=0,width=640,height=528"), !1
						})
					})
				}
			},
			n = {
				networkDefs: {
					facebook: {
						url: "http://www.facebook.com/share.php?u=|u|"
					},
					twitter: {
						url: "https://twitter.com/share?via=in1.com&text=|140|"
					},
					linkedin: {
						url: "http://www.linkedin.com/shareArticle?mini=true&url=|u|&title=|t|&summary=|d|&source=in1.com"
					},
					in1: {
						url: "http://www.in1.com/cast?u=|u|",
						w: "490",
						h: "529"
					},
					tumblr: {
						url: "http://www.tumblr.com/share?v=3&u=|u|"
					},
					digg: {
						url: "http://digg.com/submit?url=|u|&title=|t|"
					},
					googleplus: {
						url: "https://plusone.google.com/_/+1/confirm?hl=en&url=|u|"
					},
					reddit: {
						url: "http://reddit.com/submit?url=|u|"
					},
					pinterest: {
						url: "http://pinterest.com/pin/create/button/?url=|u|&media=&description=|d|"
					},
					posterous: {
						url: "http://posterous.com/share?linkto=|u|&title=|t|"
					},
					stumbleupon: {
						url: "http://www.stumbleupon.com/submit?url=|u|&title=|t|"
					},
					email: {
						url: "mailto:?subject=|t|"
					}
				}
			};
		return r[i] ? r[i].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof i && i ? void t.error('Method "' + i + '" does not exist in social plugin') : r.init.apply(this, arguments)
	}, t.fn.share.defaults = {
		networks: ["in1", "facebook", "twitter", "linkedin"],
		theme: "icon",
		autoShow: !0,
		margin: "3px",
		orientation: "horizontal",
		useIn1: !0
	}, t.fn.share.settings = {}
}(jQuery, window);

"function" != typeof Object.create && (Object.create = function (e) {
		function t() {}
		return t.prototype = e, new t
	}),
	function (e, t, o) {
		var a = function (e) {
				var t = o.createElement("script"),
					a = o.getElementsByTagName("head")[0];
				t.src = location.protocol + "//www.youtube.com/iframe_api", a.appendChild(t), a = null, t = null, n(e)
			},
			n = function (o) {
				"undefined" == typeof YT && "undefined" == typeof t.loadingPlayer ? (t.loadingPlayer = !0, t.dfd = e.Deferred(), t.onYouTubeIframeAPIReady = function () {
					t.onYouTubeIframeAPIReady = null, t.dfd.resolve("John"), o()
				}) : t.dfd.done(function (e) {
					o()
				})
			};
		YTPlayer = {
			player: null,
			defaults: {
				ratio: 16 / 9,
				videoId: "LSmgKRx5pBo",
				mute: !0,
				repeat: !0,
				width: e(t).width(),
				playButtonClass: "YTPlayer-play",
				pauseButtonClass: "YTPlayer-pause",
				muteButtonClass: "YTPlayer-mute",
				volumeUpClass: "YTPlayer-volume-up",
				volumeDownClass: "YTPlayer-volume-down",
				start: 0,
				pauseOnScroll: !1,
				fitToBackground: !0,
				playerVars: {
					modestbranding: 1,
					autoplay: 1,
					controls: 0,
					showinfo: 0,
					wmode: "transparent",
					branding: 0,
					rel: 0,
					autohide: 0,
					origin: t.location.origin
				},
				events: null
			},
			init: function (o, n) {
				var i = this;
				return i.userOptions = n, i.$body = e("body"), i.$node = e(o), i.$window = e(t), i.defaults.events = {
					onReady: function (e) {
						i.onPlayerReady(e), i.options.pauseOnScroll && i.pauseOnScroll(), "function" == typeof i.options.callback && i.options.callback.call(this)
					},
					onStateChange: function (e) {
						1 === e.data ? i.$node.addClass("loaded") : 0 === e.data && i.options.repeat && i.player.seekTo(i.options.start)
					}
				}, i.options = e.extend(!0, {}, i.defaults, i.userOptions), i.ID = (new Date).getTime(), i.holderID = "YTPlayer-ID-" + i.ID, i.options.fitToBackground ? i.createBackgroundVideo() : i.createContainerVideo(), i.$window.on("resize.YTplayer" + i.ID, function () {
					i.resize(i)
				}), a(i.onYouTubeIframeAPIReady.bind(i)), i.resize(i), i
			},
			pauseOnScroll: function () {
				var e = this;
				e.$window.on("scroll.YTplayer" + e.ID, function () {
					var t = e.player.getPlayerState();
					1 === t && e.player.pauseVideo()
				}), e.$window.scrollStopped(function () {
					var t = e.player.getPlayerState();
					2 === t && e.player.playVideo()
				})
			},
			createContainerVideo: function () {
				var t = this,
					o = e('<div id="ytplayer-container' + t.ID + '" >                                    <div id="' + t.holderID + '" class="ytplayer-player"></div>                                     </div>                                     <div id="ytplayer-shield"></div>');
				t.$node.append(o), t.$YTPlayerString = o, o = null
			},
			createBackgroundVideo: function () {
				var t = this,
					o = e('<div id="ytplayer-container' + t.ID + '" class="ytplayer-container background">                                    <div id="' + t.holderID + '" class="ytplayer-player"></div>                                    </div>                                    <div id="ytplayer-shield"></div>');
				t.$node.append(o), t.$YTPlayerString = o, o = null
			},
			resize: function (t) {
				var o = e(".media-container");
				t.options.fitToBackground || (o = t.$node);
				var a, n, i = o.width(),
					r = o.height(),
					l = e("#" + t.holderID);
				i / t.options.ratio < r ? (a = Math.ceil(r * t.options.ratio), l.width(a).height(r).css({
					left: (i - a) / 2,
					top: 0
				})) : (n = Math.ceil(i / t.options.ratio), l.width(i).height(n).css({
					left: 0,
					top: 0
				})), l = null, o = null
			},
			onYouTubeIframeAPIReady: function () {
				var e = this;
				e.player = new t.YT.Player(e.holderID, {
					width: e.options.width,
					height: Math.ceil(e.options.width / e.options.ratio),
					videoId: e.options.videoId,
					playerVars: e.options.playerVars,
					events: e.options.events
				})
			},
			onPlayerReady: function (e) {
				this.options.mute && e.target.mute(), e.target.playVideo()
			},
			getPlayer: function () {
				return this.player
			},
			destroy: function () {
				var o = this;
				o.$node.removeData("yt-init").removeData("ytPlayer").removeClass("loaded"), o.$YTPlayerString.remove(), e(t).off("resize.YTplayer" + o.ID), e(t).off("scroll.YTplayer" + o.ID), o.$body = null, o.$node = null, o.$YTPlayerString = null, o.player.destroy(), o.player = null
			}
		}, e.fn.scrollStopped = function (t) {
			var o = e(this),
				a = this;
			o.scroll(function () {
				o.data("scrollTimeout") && clearTimeout(o.data("scrollTimeout")), o.data("scrollTimeout", setTimeout(t, 250, a))
			})
		}, e.fn.YTPlayer = function (t) {
			return this.each(function () {
				var o = this;
				e(o).data("yt-init", !0);
				var a = Object.create(YTPlayer);
				a.init(o, t), e.data(o, "ytPlayer", a)
			})
		}
	}(jQuery, window, document);

(function (e) {
	"function" === typeof define && define.amd ? define(["jquery"], e) : "undefined" !== typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
})(function (e) {
	function W(a) {
		if (console && console.warn) console.warn("Scrollax: " + a);
		else throw "Scrollax: " + a;
	}

	function ka(a) {
		var g = !!("pageYOffset" in a);
		return {
			width: g ? window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth : a.offsetWidth,
			height: g ? window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight : a.offsetHeight,
			left: a[g ? "pageXOffset" : "scrollLeft"],
			top: a[g ? "pageYOffset" : "scrollTop"]
		}
	}

	function X(a) {
		return (a = a.data("scrollax")) && eval("({" + a + "})") || {}
	}

	function Y(a) {
		var g, c;
		return !!(a && "object" === typeof a && "object" === typeof a.window && a.window == a && a.setTimeout && a.alert && (g = a.document) && "object" === typeof g && (c = g.defaultView || g.parentWindow) && "object" === typeof c && c == a)
	}
	var v = Array.prototype,
		C = v.push,
		Z = v.splice,
		aa = Object.prototype.hasOwnProperty,
		la = /[-+]?\d+(\.\d+)?/g,
		ma = "translateX translateY rotate rotateX rotateY rotateZ skewX skewY scaleX scaleY".split(" "),
		ba = e(window),
		ca = e(document.body),
		da, ea, L, M, N, q = function (a, g, c) {
			function k() {
				O = fa ? ca.find(ga) : P.find(ga);
				x.length = 0;
				r = !!t.horizontal;
				O.each(na);
				d();
				t.performanceTrick && (F = fa ? ca : P);
				u("load");
				return f
			}

			function l() {
				G && (G = clearTimeout(G));
				G = setTimeout(function () {
					f.reload()
				})
			}

			function d() {
				var ha = x.length;
				t.performanceTrick && F && (clearTimeout(ia), Q || (F.addClass("scrollax-performance"), Q = !0), ia = setTimeout(function () {
					F.removeClass("scrollax-performance");
					Q = !1
				}, 100));
				if (ha) {
					H = ka(a);
					for (var c = 0; c < ha; c++) I = x[c],
						y = L(I.element, a), 0 > y[r ? "right" : "bottom"] || y[r ? "left" : "top"] > H[r ? "width" : "height"] || (ja = I.options, R = ja.offset || t.offset || 0, J = y[r ? "right" : "bottom"], z = y[r ? "width" : "height"], A = (z - J + R) / z, 0 > A && (J = y[r ? "left" : "top"], z = H[r ? "width" : "height"], A = -1 + (z - J + R) / z), 1 < A || -1 > A || b(I, A, r));
					u("scroll", H)
				}
			}

			function b(a, b) {
				S = a.parallaxElements;
				var c = S.length;
				if (c)
					for (var f = 0; f < c; f++) {
						T = S[f];
						var g = oa = T.element,
							d = b;
						U = T.properties || (r ? {
							translateX: "100%"
						} : {
							translateY: "100%"
						});
						D = "";
						for (B in U) {
							n = U[B];
							if ("number" === typeof n) n *=
								d;
							else if ("string" === typeof n)
								for (K = n.match(la), m = 0, E = K.length; m < E; m++) n = n.replace(K[m], parseFloat(K[m] * d));
							if (-1 !== e.inArray(B, ma)) D += B + "(" + n + ")";
							else {
								var k = g.style,
									l = B,
									h;
								"opacity" === B ? (h = 0 > d ? 1 + n : 1 - n, h = 0 > h ? 0 : 1 < h ? 1 : h) : h = n;
								k[l] = h
							}
						}
						D && (g.style[da] = ea + D)
					}
			}

			function pa(a) {
				return "undefined" !== typeof a ? "number" !== typeof a && "string" !== typeof a || "" === a || isNaN(a) ? O.index(a) : 0 <= a && a < x.length ? a : -1 : -1
			}

			function u(a, b) {
				if (h[a]) {
					E = h[a].length;
					for (m = V.length = 0; m < E; m++) C.call(V, h[a][m]);
					for (m = 0; m < E; m++) V[m].call(f,
						a, b)
				}
			}

			function p(a, b) {
				for (var c = 0, f = h[a].length; c < f; c++)
					if (h[a][c] === b) return c;
				return -1
			}
			var f = this,
				P = a && e(a).eq(0) || ba,
				w = q.instances,
				v = null;
			a = P[0];
			e.each(w, function (b, c) {
				b && b.frame === a && (v = !0)
			});
			if (!a || v) v ? W("Scrollax: Scrollax has been initialized for this frame!") : W("Scrollax: Frame is not available!");
			else {
				var t = e.extend({}, q.defaults, g),
					x = [],
					O = null,
					ga = t.parentSelector || "[data-scrollax-parent]",
					qa = t.elementsSelector || "[data-scrollax]",
					h = {},
					V = [],
					G, fa = Y(a),
					m, E, F, ia, Q, H, r, R, y, I, ja, A, J, z, S, T, oa, U,
					B, n, D, K;
				f.frame = a;
				f.options = t;
				f.parents = x;
				f.initialized = !1;
				f.reload = k;
				var na = function (a, b) {
					var c = e(b),
						f = X(e(b)),
						d = {};
					d.element = b;
					d.options = f;
					d.parallaxElements = [];
					c.find(qa).each(function (a, b) {
						var c = X(e(b));
						c.element = b;
						C.call(d.parallaxElements, c)
					});
					C.call(x, d)
				};
				f.scroll = d;
				f.getIndex = pa;
				f.one = function (a, b) {
					function c() {
						b.apply(f, arguments);
						f.off(a, c)
					}
					f.on(a, c);
					return f
				};
				f.on = function (a, b) {
					if ("object" === typeof a)
						for (var c in a) {
							if (aa.call(a, c)) f.on(c, a[c])
						} else if ("function" === typeof b) {
							c = a.split(" ");
							for (var d = 0, g = c.length; d < g; d++) h[c[d]] = h[c[d]] || [], -1 === p(c[d], b) && C.call(h[c[d]], b)
						} else if ("array" === typeof b)
						for (c = 0, d = b.length; c < d; c++) f.on(a, b[c]);
					return f
				};
				f.off = function (a, c) {
					if (c instanceof Array)
						for (var b = 0, d = c.length; b < d; b++) f.off(a, c[b]);
					else
						for (var b = a.split(" "), d = 0, g = b.length; d < g; d++)
							if (h[b[d]] = h[b[d]] || [], "undefined" === typeof c) h[b[d]].length = 0;
							else {
								var k = p(b[d], c); - 1 !== k && Z.call(h[b[d]], k, 1)
							} return f
				};
				f.set = function (a, b) {
					e.isPlainObject(a) ? e.extend(t, a) : aa.call(t, a) && (t[a] = b);
					k();
					return f
				};
				f.destroy = function () {
					N(window, "resize", l);
					N(a, "scroll", d);
					e.each(w, function (b, c) {
						b && b.frame === a && Z.call(q.instances, c, 1)
					});
					x.length = 0;
					f.initialized = !1;
					u("destroy");
					return f
				};
				f.init = function () {
					if (!f.initialized) return f.on(c), k(), M(window, "resize", l), M(a, "scroll", d), C.call(q.instances, f), f.initialized = !0, u("initialized"), f
				}
			}
		};
	q.instances = [];
	(function () {
		var a, g, c, k, l, d, b, e;
		L = function (u, p) {
			g = u.ownerDocument || u;
			c = g.documentElement;
			k = Y(p) ? p : g.defaultView || window;
			p = p && p !== g ? p : c;
			l = (k.pageYOffset ||
				c.scrollTop) - c.clientTop;
			d = (k.pageXOffset || c.scrollLeft) - c.clientLeft;
			b = {
				top: 0,
				left: 0
			};
			if (u && u.getBoundingClientRect) {
				var f = {},
					q = u.getBoundingClientRect();
				for (a in q) f[a] = q[a];
				b = f;
				b.width = b.right - b.left;
				b.height = b.bottom - b.top
			} else return null;
			if (p === k) return b;
			b.top += l;
			b.left += d;
			b.right += d;
			b.bottom += l;
			if (p === c) return b;
			e = L(p);
			b.left -= e.left;
			b.right -= e.left;
			b.top -= e.top;
			b.bottom -= e.top;
			return b
		}
	})();
	(function () {
		function a() {
			this.returnValue = !1
		}

		function g() {
			this.cancelBubble = !0
		}
		M = window.addEventListener ?
			function (a, g, e, d) {
				a.addEventListener(g, e, d || !1);
				return e
			} : function (c, e, l) {
				var d = e + l;
				c[d] = c[d] || function () {
					var b = window.event;
					b.target = b.srcElement;
					b.preventDefault = a;
					b.stopPropagation = g;
					l.call(c, b)
				};
				c.attachEvent("on" + e, c[d]);
				return l
			};
		N = window.removeEventListener ? function (a, g, e, d) {
			a.removeEventListener(g, e, d || !1);
			return e
		} : function (a, g, e) {
			var d = g + e;
			a.detachEvent("on" + g, a[d]);
			try {
				delete a[d]
			} catch (b) {
				a[d] = void 0
			}
			return e
		}
	})();
	(function () {
		function a(a) {
			for (var e = 0, d = g.length; e < d; e++) {
				var b = g[e] ? g[e] +
					a.charAt(0).toUpperCase() + a.slice(1) : a;
				if (null != c.style[b]) return b
			}
		}
		var g = ["", "webkit", "moz", "ms", "o"],
			c = document.createElement("div");
		da = a("transform");
		ea = a("perspective") ? "translateZ(0) " : ""
	})();
	q.defaults = {
		horizontal: !1,
		offset: 0,
		parentSelector: null,
		elementsSelector: null,
		performanceTrick: !1
	};
	window.Scrollax = q;
	e.fn.Scrollax = function (a, g) {
		var c, k;
		if (!e.isPlainObject(a)) {
			if ("string" === typeof a || !1 === a) c = !1 === a ? "destroy" : a, k = slice.call(arguments, 1);
			a = {}
		}
		return this.each(function (l, d) {
			var b = e.data(d,
				"scrollax");
			b || c ? b && c && b[c] && b[c].apply(b, k) : e.data(d, "scrollax", (new q(d, a, g)).init())
		})
	};
	e.Scrollax = function (a, e) {
		ba.Scrollax(a, e)
	};
	var v = document.head || document.getElementsByTagName("head")[0],
		w = document.createElement("style");
	w.type = "text/css";
	w.styleSheet ? w.styleSheet.cssText = ".scrollax-performance, .scrollax-performance *, .scrollax-performance *:before, .scrollax-performance *:after { pointer-events: none !important; -webkit-animation-play-state: paused !important; animation-play-state: paused !important; };" :
		w.appendChild(document.createTextNode(".scrollax-performance, .scrollax-performance *, .scrollax-performance *:before, .scrollax-performance *:after { pointer-events: none !important; -webkit-animation-play-state: paused !important; animation-play-state: paused !important; };"));
	v.appendChild(w);
	return q
});
// appear
(function ($) {
	$.fn.appear = function (f, o) {
		var s = $.extend({
			one: true
		}, o);
		return this.each(function () {
			var t = $(this);
			t.appeared = false;
			if (!f) {
				t.trigger('appear', s.data);
				return;
			}
			var w = $(window);
			var c = function () {
				if (!t.is(':visible')) {
					t.appeared = false;
					return;
				}
				var a = w.scrollLeft();
				var b = w.scrollTop();
				var o = t.offset();
				var x = o.left;
				var y = o.top;
				if (y + t.height() >= b && y <= b + w.height() && x + t.width() >= a && x <= a + w.width()) {
					if (!t.appeared) t.trigger('appear', s.data);
				} else {
					t.appeared = false;
				}
			};
			var m = function () {
				t.appeared = true;
				if (s.one) {
					w.unbind('scroll', c);
					var i = $.inArray(c, $.fn.appear.checks);
					if (i >= 0) $.fn.appear.checks.splice(i, 1);
				}
				f.apply(this, arguments);
			};
			if (s.one) t.one('appear', s.data, m);
			else t.bind('appear', s.data, m);
			w.scroll(c);
			$.fn.appear.checks.push(c);
			(c)();
		});
	};
	$.extend($.fn.appear, {
		checks: [],
		timeout: null,
		checkAll: function () {
			var l = $.fn.appear.checks.length;
			if (l > 0)
				while (l--)($.fn.appear.checks[l])();
		},
		run: function () {
			if ($.fn.appear.timeout) clearTimeout($.fn.appear.timeout);
			$.fn.appear.timeout = setTimeout($.fn.appear.checkAll, 20);
		}
	});
	$.each(['append', 'prepend', 'after', 'before', 'attr', 'removeAttr', 'addClass', 'removeClass', 'toggleClass', 'remove', 'css', 'show', 'hide'], function (i, n) {
		var u = $.fn[n];
		if (u) {
			$.fn[n] = function () {
				var r = u.apply(this, arguments);
				$.fn.appear.run();
				return r;
			}
		}
	});
})(jQuery);



// Utility
if (typeof Object.create !== 'function') {
	Object.create = function (obj) {
		function F() {}
		F.prototype = obj;
		return new F()
	}
}(function ($, window, document, undefined) {
	"use strict";
	var SinglePageNav = {
		init: function (options, container) {
			this.options = $.extend({}, $.fn.singlePageNav.defaults, options);
			this.container = container;
			this.$container = $(container);
			this.$links = this.$container.find('a');
			if (this.options.filter !== '') {
				this.$links = this.$links.filter(this.options.filter)
			}
			this.$window = $(window);
			this.$htmlbody = $('html, body');
			this.$links.on('click.singlePageNav', $.proxy(this.handleClick, this));
			this.didScroll = false;
			this.checkPosition();
			this.setTimer()
		},
		handleClick: function (e) {
			var self = this,
				link = e.currentTarget,
				$elem = $(link.hash);
			e.preventDefault();
			if ($elem.length) {
				self.clearTimer();
				if (typeof self.options.beforeStart === 'function') {
					self.options.beforeStart()
				}
				self.setActiveLink(link.hash);
				self.scrollTo($elem, function () {
					if (self.options.updateHash && history.pushState) {
						history.pushState(null, null, link.hash)
					}
					self.setTimer();
					if (typeof self.options.onComplete === 'function') {
						self.options.onComplete()
					}
				})
			}
		},
		scrollTo: function ($elem, callback) {
			var self = this;
			var target = self.getCoords($elem).top;
			var called = false;
			self.$htmlbody.stop().animate({
				scrollTop: target
			}, {
				duration: self.options.speed,
				easing: self.options.easing,
				complete: function () {
					if (typeof callback === 'function' && !called) {
						callback()
					}
					called = true
				}
			})
		},
		setTimer: function () {
			var self = this;
			self.$window.on('scroll.singlePageNav', function () {
				self.didScroll = true
			});
			self.timer = setInterval(function () {
				if (self.didScroll) {
					self.didScroll = false;
					self.checkPosition()
				}
			}, 250)
		},
		clearTimer: function () {
			clearInterval(this.timer);
			this.$window.off('scroll.singlePageNav');
			this.didScroll = false
		},
		checkPosition: function () {
			var scrollPos = this.$window.scrollTop();
			var currentSection = this.getCurrentSection(scrollPos);
			if (currentSection !== null) {
				this.setActiveLink(currentSection)
			}
		},
		getCoords: function ($elem) {
			return {
				top: Math.round($elem.offset().top) - this.options.offset
			}
		},
		setActiveLink: function (href) {
			var $activeLink = this.$container.find("a[href$='" + href + "']");
			if (!$activeLink.hasClass(this.options.currentClass)) {
				this.$links.removeClass(this.options.currentClass);
				$activeLink.addClass(this.options.currentClass);
				if ($(".scroll-nav  a").hasClass("act-link")) $(".scroll-nav  a.act-link").each(function () {
					var a = $(this).data("bgscr"),
						b = $(this).data("bgtex");
					var ua = window.navigator.userAgent;
					var msie = ua.indexOf("MSIE ");
					if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
						$(".bg-title span").html(b)
					}
					setTimeout(function () {}, 700)
				})
			}
		},
		getCurrentSection: function (scrollPos) {
			var i, hash, coords, section;
			for (i = 0; i < this.$links.length; i++) {
				hash = this.$links[i].hash;
				if ($(hash).length) {
					coords = this.getCoords($(hash));
					if (scrollPos >= coords.top - this.options.threshold) {
						section = hash
					}
				}
			}
			return section || ((this.$links.length === 0) ? (null) : (this.$links[0].hash))
		}
	};
	$.fn.singlePageNav = function (options) {
		return this.each(function () {
			var singlePageNav = Object.create(SinglePageNav);
			singlePageNav.init(options, this)
		})
	};
	$.fn.singlePageNav.defaults = {
		offset: 0,
		threshold: 120,
		speed: 400,
		currentClass: 'current',
		easing: 'swing',
		updateHash: false,
		filter: '',
		onComplete: false,
		beforeStart: false
	}
})(jQuery, window, document);
// ScrollToFixed
(function (a) {
	a.isScrollToFixed = function (b) {
		return !!a(b).data("ScrollToFixed")
	};
	a.ScrollToFixed = function (d, i) {
		var l = this;
		l.$el = a(d);
		l.el = d;
		l.$el.data("ScrollToFixed", l);
		var c = false;
		var G = l.$el;
		var H;
		var E;
		var e;
		var y;
		var D = 0;
		var q = 0;
		var j = -1;
		var f = -1;
		var t = null;
		var z;
		var g;

		function u() {
			G.trigger("preUnfixed.ScrollToFixed");
			k();
			G.trigger("unfixed.ScrollToFixed");
			f = -1;
			D = G.offset().top;
			q = G.offset().left;
			if (l.options.offsets) {
				q += (G.offset().left - G.position().left)
			}
			if (j == -1) {
				j = q
			}
			H = G.css("position");
			c = true;
			if (l.options.bottom != -1) {
				G.trigger("preFixed.ScrollToFixed");
				w();
				G.trigger("fixed.ScrollToFixed")
			}
		}

		function n() {
			var I = l.options.limit;
			if (!I) {
				return 0
			}
			if (typeof (I) === "function") {
				return I.apply(G)
			}
			return I
		}

		function p() {
			return H === "fixed"
		}

		function x() {
			return H === "absolute"
		}

		function h() {
			return !(p() || x())
		}

		function w() {
			if (!p()) {
				t.css({
					display: G.css("display"),
					width: G.outerWidth(true),
					height: G.outerHeight(true),
					"float": G.css("float")
				});
				cssOptions = {
					"z-index": l.options.zIndex,
					position: "fixed",
					top: l.options.bottom == -1 ? s() : "",
					bottom: l.options.bottom == -1 ? "" : l.options.bottom,
					"margin-left": "0px"
				};
				if (!l.options.dontSetWidth) {
					cssOptions.width = G.width()
				}
				G.css(cssOptions);
				G.addClass(l.options.baseClassName);
				if (l.options.className) {
					G.addClass(l.options.className)
				}
				H = "fixed"
			}
		}

		function b() {
			var J = n();
			var I = q;
			if (l.options.removeOffsets) {
				I = "";
				J = J - D
			}
			cssOptions = {
				position: "absolute",
				top: J,
				left: I,
				"margin-left": "0px",
				bottom: ""
			};
			if (!l.options.dontSetWidth) {
				cssOptions.width = G.width()
			}
			G.css(cssOptions);
			H = "absolute"
		}

		function k() {
			if (!h()) {
				f = -1;
				t.css("display", "none");
				G.css({
					"z-index": y,
					width: "",
					position: E,
					left: "",
					top: e,
					"margin-left": ""
				});
				G.removeClass("scroll-to-fixed-fixed");
				if (l.options.className) {
					G.removeClass(l.options.className)
				}
				H = null
			}
		}

		function v(I) {
			if (I != f) {
				G.css("left", q - I);
				f = I
			}
		}

		function s() {
			var I = l.options.marginTop;
			if (!I) {
				return 0
			}
			if (typeof (I) === "function") {
				return I.apply(G)
			}
			return I
		}

		function A() {
			if (!a.isScrollToFixed(G)) {
				return
			}
			var K = c;
			if (!c) {
				u()
			} else {
				if (h()) {
					D = G.offset().top;
					q = G.offset().left
				}
			}
			var I = a(window).scrollLeft();
			var L = a(window).scrollTop();
			var J = n();
			if (l.options.minWidth && a(window).width() < l.options.minWidth) {
				if (!h() || !K) {
					o();
					G.trigger("preUnfixed.ScrollToFixed");
					k();
					G.trigger("unfixed.ScrollToFixed")
				}
			} else {
				if (l.options.maxWidth && a(window).width() > l.options.maxWidth) {
					if (!h() || !K) {
						o();
						G.trigger("preUnfixed.ScrollToFixed");
						k();
						G.trigger("unfixed.ScrollToFixed")
					}
				} else {
					if (l.options.bottom == -1) {
						if (J > 0 && L >= J - s()) {
							if (!x() || !K) {
								o();
								G.trigger("preAbsolute.ScrollToFixed");
								b();
								G.trigger("unfixed.ScrollToFixed")
							}
						} else {
							if (L >= D - s()) {
								if (!p() || !K) {
									o();
									G.trigger("preFixed.ScrollToFixed");
									w();
									f = -1;
									G.trigger("fixed.ScrollToFixed")
								}
								v(I)
							} else {
								if (!h() || !K) {
									o();
									G.trigger("preUnfixed.ScrollToFixed");
									k();
									G.trigger("unfixed.ScrollToFixed")
								}
							}
						}
					} else {
						if (J > 0) {
							if (L + a(window).height() - G.outerHeight(true) >= J - (s() || -m())) {
								if (p()) {
									o();
									G.trigger("preUnfixed.ScrollToFixed");
									if (E === "absolute") {
										b()
									} else {
										k()
									}
									G.trigger("unfixed.ScrollToFixed")
								}
							} else {
								if (!p()) {
									o();
									G.trigger("preFixed.ScrollToFixed");
									w()
								}
								v(I);
								G.trigger("fixed.ScrollToFixed")
							}
						} else {
							v(I)
						}
					}
				}
			}
		}

		function m() {
			if (!l.options.bottom) {
				return 0
			}
			return l.options.bottom
		}

		function o() {
			var I = G.css("position");
			if (I == "absolute") {
				G.trigger("postAbsolute.ScrollToFixed")
			} else {
				if (I == "fixed") {
					G.trigger("postFixed.ScrollToFixed")
				} else {
					G.trigger("postUnfixed.ScrollToFixed")
				}
			}
		}
		var C = function (I) {
			if (G.is(":visible")) {
				c = false;
				A()
			}
		};
		var F = function (I) {
			(!!window.requestAnimationFrame) ? requestAnimationFrame(A): A()
		};
		var B = function () {
			var J = document.body;
			if (document.createElement && J && J.appendChild && J.removeChild) {
				var L = document.createElement("div");
				if (!L.getBoundingClientRect) {
					return null
				}
				L.innerHTML = "x";
				L.style.cssText = "position:fixed;top:100px;";
				J.appendChild(L);
				var M = J.style.height,
					N = J.scrollTop;
				J.style.height = "3000px";
				J.scrollTop = 500;
				var I = L.getBoundingClientRect().top;
				J.style.height = M;
				var K = (I === 100);
				J.removeChild(L);
				J.scrollTop = N;
				return K
			}
			return null
		};
		var r = function (I) {
			I = I || window.event;
			if (I.preventDefault) {
				I.preventDefault()
			}
			I.returnValue = false
		};
		l.init = function () {
			l.options = a.extend({}, a.ScrollToFixed.defaultOptions, i);
			y = G.css("z-index");
			l.$el.css("z-index", l.options.zIndex);
			t = a("<div />");
			H = G.css("position");
			E = G.css("position");
			e = G.css("top");
			if (h()) {
				l.$el.after(t)
			}
			a(window).bind("resize.ScrollToFixed", C);
			a(window).bind("scroll.ScrollToFixed", F);
			if ("ontouchmove" in window) {
				a(window).bind("touchmove.ScrollToFixed", A)
			}
			if (l.options.preFixed) {
				G.bind("preFixed.ScrollToFixed", l.options.preFixed)
			}
			if (l.options.postFixed) {
				G.bind("postFixed.ScrollToFixed", l.options.postFixed)
			}
			if (l.options.preUnfixed) {
				G.bind("preUnfixed.ScrollToFixed", l.options.preUnfixed)
			}
			if (l.options.postUnfixed) {
				G.bind("postUnfixed.ScrollToFixed", l.options.postUnfixed)
			}
			if (l.options.preAbsolute) {
				G.bind("preAbsolute.ScrollToFixed", l.options.preAbsolute)
			}
			if (l.options.postAbsolute) {
				G.bind("postAbsolute.ScrollToFixed", l.options.postAbsolute)
			}
			if (l.options.fixed) {
				G.bind("fixed.ScrollToFixed", l.options.fixed)
			}
			if (l.options.unfixed) {
				G.bind("unfixed.ScrollToFixed", l.options.unfixed)
			}
			if (l.options.spacerClass) {
				t.addClass(l.options.spacerClass)
			}
			G.bind("resize.ScrollToFixed", function () {
				t.height(G.height())
			});
			G.bind("scroll.ScrollToFixed", function () {
				G.trigger("preUnfixed.ScrollToFixed");
				k();
				G.trigger("unfixed.ScrollToFixed");
				A()
			});
			G.bind("detach.ScrollToFixed", function (I) {
				r(I);
				G.trigger("preUnfixed.ScrollToFixed");
				k();
				G.trigger("unfixed.ScrollToFixed");
				a(window).unbind("resize.ScrollToFixed", C);
				a(window).unbind("scroll.ScrollToFixed", F);
				G.unbind(".ScrollToFixed");
				t.remove();
				l.$el.removeData("ScrollToFixed")
			});
			C()
		};
		l.init()
	};
	a.ScrollToFixed.defaultOptions = {
		marginTop: 0,
		limit: 0,
		bottom: -1,
		zIndex: 1000,
		baseClassName: "scroll-to-fixed-fixed"
	};
	a.fn.scrollToFixed = function (b) {
		return this.each(function () {
			(new a.ScrollToFixed(this, b))
		})
	}
})(jQuery);
// count
(function ($) {
	$.fn.countTo = function (options) {
		options = options || {};
		return $(this).each(function () {
			var settings = $.extend({}, $.fn.countTo.defaults, {
				from: $(this).data('from'),
				to: $(this).data('num'),
				speed: $(this).data('speed'),
				refreshInterval: $(this).data('refresh-interval'),
				decimals: $(this).data('decimals')
			}, options);
			var loops = Math.ceil(settings.speed / settings.refreshInterval),
				increment = (settings.to - settings.from) / loops;
			var self = this,
				$self = $(this),
				loopCount = 0,
				value = settings.from,
				data = $self.data('countTo') || {};
			$self.data('countTo', data);
			if (data.interval) {
				clearInterval(data.interval)
			}
			data.interval = setInterval(updateTimer, settings.refreshInterval);
			render(value);

			function updateTimer() {
				value += increment;
				loopCount++;
				render(value);
				if (typeof (settings.onUpdate) == 'function') {
					settings.onUpdate.call(self, value)
				}
				if (loopCount >= loops) {
					$self.removeData('countTo');
					clearInterval(data.interval);
					value = settings.to;
					if (typeof (settings.onComplete) == 'function') {
						settings.onComplete.call(self, value)
					}
				}
			}

			function render(value) {
				var formattedValue = settings.formatter.call(self, value, settings);
				$self.text(formattedValue)
			}
		})
	};
	$.fn.countTo.defaults = {
		from: 0,
		to: 0,
		speed: 2500,
		refreshInterval: 100,
		decimals: 0,
		formatter: formatter,
		onUpdate: null,
		onComplete: null
	};

	function formatter(value, settings) {
		return value.toFixed(settings.decimals)
	}
}(jQuery));


(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		define([], factory);
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		factory();
	}
}(this, function () {
	var domNode = '';
	var maxTweets = 20;
	var parseLinks = true;
	var queue = [];
	var inProgress = false;
	var printTime = true;
	var printUser = true;
	var formatterFunction = null;
	var supportsClassName = true;
	var showRts = true;
	var customCallbackFunction = null;
	var showInteractionLinks = true;
	var showImages = false;
	var useEmoji = false;
	var targetBlank = true;
	var lang = 'en';
	var permalinks = true;
	var dataOnly = false;
	var script = null;
	var scriptAdded = false;

	function handleTweets(tweets) {
		if (customCallbackFunction === null) {
			var x = tweets.length;
			var n = 0;
			var element = document.getElementById(domNode);
			var html = '<ul>';
			while (n < x) {
				html += '<li>' + tweets[n] + '</li>';
				n++;
			}
			html += '</ul>';
			element.innerHTML = html;
		} else {
			customCallbackFunction(tweets);
		}
	}

	function strip(data) {
		return data.replace(/<b[^>]*>(.*?)<\/b>/gi, function (a, s) {
			return s;
		}).replace(/class="(?!(tco-hidden|tco-display|tco-ellipsis))+.*?"|data-query-source=".*?"|dir=".*?"|rel=".*?"/gi, '');
	}

	function targetLinksToNewWindow(el) {
		var links = el.getElementsByTagName('a');
		for (var i = links.length - 1; i >= 0; i--) {
			links[i].setAttribute('target', '_blank');
		}
	}

	function getElementsByClassName(node, classname) {
		var a = [];
		var regex = new RegExp('(^| )' + classname + '( |$)');
		var elems = node.getElementsByTagName('*');
		for (var i = 0, j = elems.length; i < j; i++) {
			if (regex.test(elems[i].className)) {
				a.push(elems[i]);
			}
		}
		return a;
	}

	function extractImageUrl(image_data) {
		if (image_data !== undefined && image_data.innerHTML.indexOf('data-image') >= 0) {
			var data_src = image_data.innerHTML.match(/data-image=\"([A-z0-9]+:\/\/[A-z0-9]+\.[A-z0-9]+\.[A-z0-9]+\/[A-z0-9]+\/[A-z0-9\-]+)/i)[1];
			return decodeURIComponent(data_src) + '.jpg';
		}
	}
	var twitterFetcher = {
		fetch: function (config) {
			if (config.maxTweets === undefined) {
				config.maxTweets = 20;
			}
			if (config.enableLinks === undefined) {
				config.enableLinks = true;
			}
			if (config.showUser === undefined) {
				config.showUser = true;
			}
			if (config.showTime === undefined) {
				config.showTime = true;
			}
			if (config.dateFunction === undefined) {
				config.dateFunction = 'default';
			}
			if (config.showRetweet === undefined) {
				config.showRetweet = true;
			}
			if (config.customCallback === undefined) {
				config.customCallback = null;
			}
			if (config.showInteraction === undefined) {
				config.showInteraction = true;
			}
			if (config.showImages === undefined) {
				config.showImages = false;
			}
			if (config.useEmoji === undefined) {
				config.useEmoji = false;
			}
			if (config.linksInNewWindow === undefined) {
				config.linksInNewWindow = true;
			}
			if (config.showPermalinks === undefined) {
				config.showPermalinks = true;
			}
			if (config.dataOnly === undefined) {
				config.dataOnly = false;
			}
			if (inProgress) {
				queue.push(config);
			} else {
				inProgress = true;
				domNode = config.domId;
				maxTweets = config.maxTweets;
				parseLinks = config.enableLinks;
				printUser = config.showUser;
				printTime = config.showTime;
				showRts = config.showRetweet;
				formatterFunction = config.dateFunction;
				customCallbackFunction = config.customCallback;
				showInteractionLinks = config.showInteraction;
				showImages = config.showImages;
				useEmoji = config.useEmoji;
				targetBlank = config.linksInNewWindow;
				permalinks = config.showPermalinks;
				dataOnly = config.dataOnly;
				var head = document.getElementsByTagName('head')[0];
				if (script !== null) {
					head.removeChild(script);
				}
				script = document.createElement('script');
				script.type = 'text/javascript';
				if (config.list !== undefined) {
					script.src = 'https://syndication.twitter.com/timeline/list?' + 'callback=__twttrf.callback&dnt=false&list_slug=' +
						config.list.listSlug + '&screen_name=' + config.list.screenName + '&suppress_response_codes=true&lang=' + (config.lang || lang) + '&rnd=' + Math.random();
				} else if (config.profile !== undefined) {
					script.src = 'https://syndication.twitter.com/timeline/profile?' + 'callback=__twttrf.callback&dnt=false' + '&screen_name=' + config.profile.screenName + '&suppress_response_codes=true&lang=' + (config.lang || lang) + '&rnd=' + Math.random();
				} else if (config.likes !== undefined) {
					script.src = 'https://syndication.twitter.com/timeline/likes?' + 'callback=__twttrf.callback&dnt=false' + '&screen_name=' + config.likes.screenName + '&suppress_response_codes=true&lang=' + (config.lang || lang) + '&rnd=' + Math.random();
				} else {
					script.src = 'https://cdn.syndication.twimg.com/widgets/timelines/' +
						config.id + '?&lang=' + (config.lang || lang) + '&callback=__twttrf.callback&' + 'suppress_response_codes=true&rnd=' + Math.random();
				}
				head.appendChild(script);
			}
		},
		callback: function (data) {
			if (data === undefined || data.body === undefined) {
				inProgress = false;
				if (queue.length > 0) {
					twitterFetcher.fetch(queue[0]);
					queue.splice(0, 1);
				}
				return;
			}
			if (!useEmoji) {
				data.body = data.body.replace(/(<img[^c]*class="Emoji[^>]*>)|(<img[^c]*class="u-block[^>]*>)/g, '');
			}
			if (!showImages) {
				data.body = data.body.replace(/(<img[^c]*class="NaturalImage-image[^>]*>|(<img[^c]*class="CroppedImage-image[^>]*>))/g, '');
			}
			if (!printUser) {
				data.body = data.body.replace(/(<img[^c]*class="Avatar"[^>]*>)/g, '');
			}
			var div = document.createElement('div');
			div.innerHTML = data.body;
			if (typeof (div.getElementsByClassName) === 'undefined') {
				supportsClassName = false;
			}

			function swapDataSrc(element) {
				var avatarImg = '';
				return element;
			}
			var tweets = [];
			var authors = [];
			var times = [];
			var images = [];
			var rts = [];
			var tids = [];
			var permalinksURL = [];
			var x = 0;
			if (supportsClassName) {
				var tmp = div.getElementsByClassName('timeline-Tweet');
				while (x < tmp.length) {
					if (tmp[x].getElementsByClassName('timeline-Tweet-retweetCredit').length > 0) {
						rts.push(true);
					} else {
						rts.push(false);
					}
					if (!rts[x] || rts[x] && showRts) {
						tweets.push(tmp[x].getElementsByClassName('timeline-Tweet-text')[0]);
						tids.push(tmp[x].getAttribute('data-tweet-id'));
						if (printUser) {
							authors.push(swapDataSrc(tmp[x].getElementsByClassName('timeline-Tweet-author')[0]));
						}
						times.push(tmp[x].getElementsByClassName('dt-updated')[0]);
						permalinksURL.push(tmp[x].getElementsByClassName('timeline-Tweet-timestamp')[0]);
						if (tmp[x].getElementsByClassName('timeline-Tweet-media')[0] !== undefined) {
							images.push(tmp[x].getElementsByClassName('timeline-Tweet-media')[0]);
						} else {
							images.push(undefined);
						}
					}
					x++;
				}
			} else {
				var tmp = getElementsByClassName(div, 'timeline-Tweet');
				while (x < tmp.length) {
					if (getElementsByClassName(tmp[x], 'timeline-Tweet-retweetCredit').length > 0) {
						rts.push(true);
					} else {
						rts.push(false);
					}
					if (!rts[x] || rts[x] && showRts) {
						tweets.push(getElementsByClassName(tmp[x], 'timeline-Tweet-text')[0]);
						tids.push(tmp[x].getAttribute('data-tweet-id'));
						if (printUser) {
							authors.push(swapDataSrc(getElementsByClassName(tmp[x], 'timeline-Tweet-author')[0]));
						}
						times.push(getElementsByClassName(tmp[x], 'dt-updated')[0]);
						permalinksURL.push(getElementsByClassName(tmp[x], 'timeline-Tweet-timestamp')[0]);
						if (getElementsByClassName(tmp[x], 'timeline-Tweet-media')[0] !== undefined) {
							images.push(getElementsByClassName(tmp[x], 'timeline-Tweet-media')[0]);
						} else {
							images.push(undefined);
						}
					}
					x++;
				}
			}
			if (tweets.length > maxTweets) {
				tweets.splice(maxTweets, (tweets.length - maxTweets));
				authors.splice(maxTweets, (authors.length - maxTweets));
				times.splice(maxTweets, (times.length - maxTweets));
				rts.splice(maxTweets, (rts.length - maxTweets));
				images.splice(maxTweets, (images.length - maxTweets));
				permalinksURL.splice(maxTweets, (permalinksURL.length - maxTweets));
			}
			var arrayTweets = [];
			var x = tweets.length;
			var n = 0;
			if (dataOnly) {
				while (n < x) {
					arrayTweets.push({
						tweet: tweets[n].innerHTML,
						author: authors[n] ? authors[n].innerHTML : 'Unknown Author',
						author_data: {
							profile_url: authors[n] ? authors[n].querySelector('[data-scribe="element:user_link"]').href : null,
							profile_image: authors[n] ? authors[n].querySelector('[data-scribe="element:avatar"]').getAttribute('data-src-1x') : null,
							profile_image_2x: authors[n] ? authors[n].querySelector('[data-scribe="element:avatar"]').getAttribute('data-src-2x') : null,
							screen_name: authors[n] ? authors[n].querySelector('[data-scribe="element:screen_name"]').title : null,
							name: authors[n] ? authors[n].querySelector('[data-scribe="element:name"]').title : null
						},
						time: times[n].textContent,
						timestamp: times[n].getAttribute('datetime').replace('+0000', 'Z').replace(/([\+\-])(\d\d)(\d\d)/, '$1$2:$3'),
						image: extractImageUrl(images[n]),
						rt: rts[n],
						tid: tids[n],
						permalinkURL: (permalinksURL[n] === undefined) ? '' : permalinksURL[n].href
					});
					n++;
				}
			} else {
				while (n < x) {
					if (typeof (formatterFunction) !== 'string') {
						var datetimeText = times[n].getAttribute('datetime');
						var newDate = new Date(times[n].getAttribute('datetime').replace(/-/g, '/').replace('T', ' ').split('+')[0]);
						var dateString = formatterFunction(newDate, datetimeText);
						times[n].setAttribute('aria-label', dateString);
						if (tweets[n].textContent) {
							if (supportsClassName) {
								times[n].textContent = dateString;
							} else {
								var h = document.createElement('p');
								var t = document.createTextNode(dateString);
								h.appendChild(t);
								h.setAttribute('aria-label', dateString);
								times[n] = h;
							}
						} else {
							times[n].textContent = dateString;
						}
					}
					var op = '';
					if (parseLinks) {
						if (targetBlank) {
							targetLinksToNewWindow(tweets[n]);
							if (printUser) {
								targetLinksToNewWindow(authors[n]);
							}
						}
						if (printUser) {
							op += '<div class="user">' + strip(authors[n].innerHTML) + '</div>';
						}
						op += '<p class="tweet">' + strip(tweets[n].innerHTML) + '</p>';
						if (printTime) {
							if (permalinks) {
								op += '<p class="timePosted"><a href="' + permalinksURL[n] + '">' + times[n].getAttribute('aria-label') + '</a></p>';
							} else {
								op += '<p class="timePosted">' +
									times[n].getAttribute('aria-label') + '</p>';
							}
						}
					} else {
						if (tweets[n].textContent) {
							if (printUser) {
								op += '<p class="user">' + authors[n].textContent + '</p>';
							}
							op += '<p class="tweet">' + tweets[n].textContent + '</p>';
							if (printTime) {
								op += '<p class="timePosted">' + times[n].textContent + '</p>';
							}
						} else {
							if (printUser) {
								op += '<p class="user">' + authors[n].textContent + '</p>';
							}
							op += '<p class="tweet">' + tweets[n].textContent + '</p>';
							if (printTime) {
								op += '<p class="timePosted">' + times[n].textContent + '</p>';
							}
						}
					}
					if (showInteractionLinks) {
						op += '<p class="interact"><a href="https://twitter.com/intent/' + 'tweet?in_reply_to=' + tids[n] + '" class="twitter_reply_icon"' +
							(targetBlank ? ' target="_blank">' : '>') + 'Reply</a><a href="https://twitter.com/intent/retweet?' + 'tweet_id=' + tids[n] + '" class="twitter_retweet_icon"' +
							(targetBlank ? ' target="_blank">' : '>') + 'Retweet</a>' + '<a href="https://twitter.com/intent/favorite?tweet_id=' +
							tids[n] + '" class="twitter_fav_icon"' +
							(targetBlank ? ' target="_blank">' : '>') + 'Favorite</a></p>';
					}
					if (showImages && images[n] !== undefined && extractImageUrl(images[n]) !== undefined) {
						op += '<div class="media">' + '<img src="' + extractImageUrl(images[n]) + '" alt="Image from tweet" />' + '</div>';
					}
					if (showImages) {
						arrayTweets.push(op);
					} else if (!showImages && tweets[n].textContent.length) {
						arrayTweets.push(op);
					}
					n++;
				}
			}
			handleTweets(arrayTweets);
			inProgress = false;
			if (queue.length > 0) {
				twitterFetcher.fetch(queue[0]);
				queue.splice(0, 1);
			}
		}
	};
	window.__twttrf = twitterFetcher;
	window.twitterFetcher = twitterFetcher;
	return twitterFetcher;
}));

(function ($) {
	$.fn.selectbox = function () {
		$(this).each(function () {
			var select = $(this);
			if (select.prev('span.selectbox').length < 1) {
				function doSelect() {
					var option = select.find('option');
					var optionSelected = option.filter(':selected');
					var optionText = option.filter(':first').text();
					if (optionSelected.length) optionText = optionSelected.text();
					var ddlist = '';
					for (i = 0; i < option.length; i++) {
						var selected = '';
						var disabled = ' class="disabled"';
						if (option.eq(i).is(':selected')) selected = ' class="selected sel"';
						if (option.eq(i).is(':disabled')) selected = disabled;
						ddlist += '<li' + selected + '>' + option.eq(i).text() + '</li>';
					}
					var selectbox = $('<span class="selectbox" style="display:inline-block;position:relative">' + '<div class="select" style="float:left;position:relative;z-index:10000"><div class="text">' + optionText + '</div>' + '<b class="trigger"><i class="arrow"></i></b>' + '</div>' + '<div class="dropdown" style="position:absolute;z-index:9999;list-style:none">' + '<ul>' + ddlist + '</ul>' + '</div>' + '</span>');
					select.before(selectbox).css({
						position: 'absolute',
						top: -9999
					});
					var divSelect = selectbox.find('div.select');
					var divText = selectbox.find('div.text');
					var dropdown = selectbox.find('div.dropdown');
					var li = dropdown.find('li');
					var selectHeight = selectbox.outerHeight();
					if (dropdown.css('left') == 'auto') dropdown.css({
						left: 0
					});
					if (dropdown.css('top') == 'auto') dropdown.css({
						top: selectHeight
					});
					var liHeight = li.outerHeight();
					var position = dropdown.css('top');
					dropdown.hide();
					divSelect.click(function () {
						var topOffset = selectbox.offset().top;
						var bottomOffset = $(window).height() - selectHeight - (topOffset - $(window).scrollTop());
						if (bottomOffset < 0 || bottomOffset < liHeight * 6) {
							dropdown.height('auto').css({
								top: 'auto',
								bottom: position
							});
							if (dropdown.outerHeight() > topOffset - $(window).scrollTop() - 20) {
								dropdown.height(Math.floor((topOffset - $(window).scrollTop() - 20) / liHeight) * liHeight);
							}
						} else if (bottomOffset > liHeight * 6) {
							dropdown.height('auto').css({
								bottom: 'auto',
								top: position
							});
							if (dropdown.outerHeight() > bottomOffset - 20) {
								dropdown.height(Math.floor((bottomOffset - 20) / liHeight) * liHeight);
							}
						}
						$('span.selectbox').css({
							zIndex: 1
						}).removeClass('focused');
						selectbox.css({
							zIndex: 2
						});
						if (dropdown.is(':hidden')) {
							$('div.dropdown:visible').hide();
							dropdown.show();
						} else {
							dropdown.hide();
						}
						return false;
					});
					li.hover(function () {
						$(this).siblings().removeClass('selected');
					});
					var selectedText = li.filter('.selected').text();
					li.filter(':not(.disabled)').click(function () {
						var liText = $(this).text();
						if (selectedText != liText) {
							$(this).addClass('selected sel').siblings().removeClass('selected sel');
							option.removeAttr('selected').eq($(this).index()).attr('selected', true);
							selectedText = liText;
							divText.text(liText);
							select.change();
						}
						dropdown.hide();
					});
					dropdown.mouseout(function () {
						dropdown.find('li.sel').addClass('selected');
					});
					select.focus(function () {
						$('span.selectbox').removeClass('focused');
						selectbox.addClass('focused');
					}).keyup(function () {
						divText.text(option.filter(':selected').text());
						li.removeClass('selected sel').eq(option.filter(':selected').index()).addClass('selected sel');
					});
					$(document).on('click', function (e) {
						if (!$(e.target).parents().hasClass('selectbox')) {
							dropdown.hide().find('li.sel').addClass('selected');
							selectbox.removeClass('focused');
						}
					});
				}
				doSelect();
				select.on('refresh', function () {
					select.prev().remove();
					doSelect();
				})
			}
		});
	}
})(jQuery);


(function ($) {
	$.fn.downCount = function (options, callback) {
		var settings = $.extend({
			date: null,
			offset: null
		}, options);
		if (!settings.date) {
			$.error('Date is not defined.')
		}
		if (!Date.parse(settings.date)) {
			$.error('Incorrect date format, it should look like this, 12/24/2012 12:00:00.')
		}
		var container = this;
		var currentDate = function () {
			var date = new Date();
			var utc = date.getTime() + (date.getTimezoneOffset() * 60000);
			var new_date = new Date(utc + (3600000 * settings.offset));
			return new_date
		};

		function countdown() {
			var target_date = new Date(settings.date),
				current_date = currentDate();
			var difference = target_date - current_date;
			if (difference < 0) {
				clearInterval(interval);
				if (callback && typeof callback === 'function') callback();
				return
			}
			var _second = 1000,
				_minute = _second * 60,
				_hour = _minute * 60,
				_day = _hour * 24;
			var days = Math.floor(difference / _day),
				hours = Math.floor((difference % _day) / _hour),
				minutes = Math.floor((difference % _hour) / _minute),
				seconds = Math.floor((difference % _minute) / _second);
			days = (String(days).length >= 2) ? days : '0' + days;
			hours = (String(hours).length >= 2) ? hours : '0' + hours;
			minutes = (String(minutes).length >= 2) ? minutes : '0' + minutes;
			seconds = (String(seconds).length >= 2) ? seconds : '0' + seconds;
			var ref_days = (days === 1) ? 'day' : 'days',
				ref_hours = (hours === 1) ? 'hour' : 'hours',
				ref_minutes = (minutes === 1) ? 'minute' : 'minutes',
				ref_seconds = (seconds === 1) ? 'second' : 'seconds';
			container.find('.days').text(days);
			container.find('.hours').text(hours);
			container.find('.minutes').text(minutes);
			container.find('.seconds').text(seconds);
			container.find('.days_ref').text(ref_days);
			container.find('.hours_ref').text(ref_hours);
			container.find('.minutes_ref').text(ref_minutes);
			container.find('.seconds_ref').text(ref_seconds)
		};
		var interval = setInterval(countdown, 1000)
	}
})(jQuery);


(function ($) {
	var usedIds = [];
	$.fn.menu = function (options) {
		var selector = this.selector;
		var settings = $.extend({
			dataJSON: false,
			backLabel: ''
		}, options);
		return this.each(function () {
			var self = this,
				menu = $(self),
				data;
			if (menu.hasClass('sliding-menu')) {
				return
			}
			var menuWidth = menu.width();
			if (settings.dataJSON) {
				data = processJSON(settings.dataJSON)
			} else {
				data = process(menu)
			}
			menu.empty().addClass('sliding-menu');
			var rootPanel;
			if (settings.dataJSON) {
				$(data).each(function (index, item) {
					var panel = $('<ul></ul>');
					if (item.root) {
						rootPanel = '#' + item.id
					}
					panel.attr('id', item.id);
					panel.addClass('menu-panel');
					panel.width(menuWidth);
					$(item.children).each(function (index, item) {
						var link = $('<a></a>');
						link.attr('class', item.styleClass);
						link.attr('href', item.href);
						link.text(item.label);
						var li = $('<li></li>');
						li.append(link);
						panel.append(li)
					});
					menu.append(panel)
				})
			} else {
				$(data).each(function (index, item) {
					var panel = $(item);
					if (panel.hasClass('menu-panel-root')) {
						rootPanel = '#' + panel.attr('id')
					}
					panel.width(menuWidth);
					menu.append(item)
				})
			}
			rootPanel = $(rootPanel);
			rootPanel.addClass('menu-panel-root');
			var currentPanel = rootPanel;
			menu.height(rootPanel.height());
			var wrapper = $('<div></div>').addClass('sliding-menu-wrapper').width(data.length * menuWidth);
			menu.wrapInner(wrapper);
			wrapper = $('.sliding-menu-wrapper', menu);
			$('a', self).on('click', function (e) {
				var href = $(this).attr('href'),
					label = $(this).text();
				if (wrapper.is(':animated')) {
					e.preventDefault();
					return
				}
				if (href == '#') {
					e.preventDefault()
				} else if (href.indexOf('#menu-panel') == 0) {
					var target = $(href),
						isBack = $(this).hasClass('back'),
						marginLeft = parseInt(wrapper.css('margin-left'));
					if (isBack) {
						if (href == '#menu-panel-back') {
							target = currentPanel.prev()
						}
						wrapper.stop(true, true).animate({
							marginLeft: marginLeft + menuWidth
						}, 'fast')
					} else {
						target.insertAfter(currentPanel);
						if (settings.backLabel === true) {
							$('.back', target).text(label)
						} else {
							$('.back', target).text(settings.backLabel)
						}
						wrapper.stop(true, true).animate({
							marginLeft: marginLeft - menuWidth
						}, 'fast')
					}
					currentPanel = target;
					menu.stop(true, true).animate({
						height: target.height()
					}, 'fast');
					e.preventDefault()
				}
			});
			return this
		});

		function process(data) {
			var ul = $('ul', data),
				panels = [];
			$(ul).each(function (index, item) {
				var panel = $(item),
					handler = panel.prev(),
					id = getNewId();
				if (handler.length == 1) {
					handler.addClass('nav').attr('href', '#menu-panel-' + id)
				}
				panel.attr('id', 'menu-panel-' + id);
				if (index == 0) {
					panel.addClass('menu-panel-root')
				} else {
					panel.addClass('menu-panel');
					var li = $('<li></li>'),
						back = $('<a></a>').addClass('back').attr('href', '#menu-panel-back');
					panel.prepend(back)
				}
				panels.push(item)
			});
			return panels
		}

		function processJSON(data, parent) {
			var root = {
					id: 'menu-panel-' + getNewId(),
					children: [],
					root: (parent ? false : true)
				},
				panels = [];
			if (parent) {
				root.children.push({
					styleClass: 'back',
					href: '#' + parent.id
				})
			}
			$(data).each(function (index, item) {
				root.children.push(item);
				if (item.children) {
					var panel = processJSON(item.children, root);
					item.href = '#' + panel[0].id;
					item.styleClass = 'nav';
					panels = panels.concat(panel)
				}
			});
			return [root].concat(panels)
		}

		function getNewId() {
			var id;
			do {
				id = Math.random().toString(36).substring(3, 8)
			} while (usedIds.indexOf(id) >= 0);
			usedIds.push(id);
			return id
		}
	}
}(jQuery));


! function (t) {
	function n(n, e, i, r) {
		var a = n.text(),
			o = a.split(e),
			c = "";
		o.length && (t(o).each(function (t, n) {
			c += '<span class="' + i + (t + 1) + '" aria-hidden="true">' + n + "</span>" + r
		}), n.attr("aria-label", a).empty().append(c))
	}
	var e = {
		init: function () {
			return this.each(function () {
				n(t(this), "", "char", "")
			})
		},
		words: function () {
			return this.each(function () {
				n(t(this), " ", "word", " ")
			})
		},
		lines: function () {
			return this.each(function () {
				var e = "eefec303079ad17405c889e092e105b0";
				n(t(this).children("br").replaceWith(e).end(), e, "line", "")
			})
		}
	};
	t.fn.lettering = function (n) {
		return n && e[n] ? e[n].apply(this, [].slice.call(arguments, 1)) : "letters" !== n && n ? (t.error("Method " + n + " does not exist on jQuery.lettering"), this) : e.init.apply(this, [].slice.call(arguments, 0))
	}
}(jQuery),
function (t) {
	t.fn.fitText = function (n, e) {
		var i = n || 1,
			r = t.extend({
				minFontSize: Number.NEGATIVE_INFINITY,
				maxFontSize: Number.POSITIVE_INFINITY
			}, e);
		return this.each(function () {
			var n = t(this),
				e = function () {
					n.css("font-size", Math.max(Math.min(n.width() / (10 * i), parseFloat(r.maxFontSize)), parseFloat(r.minFontSize)))
				};
			e(), t(window).on("resize.fittext orientationchange.fittext", e)
		})
	}
}(jQuery);

! function t(e, n, r) {
	function o(l, s) {
		if (!n[l]) {
			if (!e[l]) {
				var a = "function" == typeof require && require;
				if (!s && a) return a(l, !0);
				if (i) return i(l, !0);
				var c = new Error("Cannot find module '" + l + "'");
				throw c.code = "MODULE_NOT_FOUND", c
			}
			var u = n[l] = {
				exports: {}
			};
			e[l][0].call(u.exports, function (t) {
				var n = e[l][1][t];
				return o(n ? n : t)
			}, u, u.exports, t, e, n, r)
		}
		return n[l].exports
	}
	for (var i = "function" == typeof require && require, l = 0; l < r.length; l++) o(r[l]);
	return o
}({
	1: [function (t, e, n) {
		"use strict";

		function r(t) {
			t.fn.perfectScrollbar = function (e) {
				return this.each(function () {
					if ("object" == typeof e || "undefined" == typeof e) {
						var n = e;
						i.get(this) || o.initialize(this, n)
					} else {
						var r = e;
						"update" === r ? o.update(this) : "destroy" === r && o.destroy(this)
					}
					return t(this)
				})
			}
		}
		var o = t("../main"),
			i = t("../plugin/instances");
		if ("function" == typeof define && define.amd) define(["jquery"], r);
		else {
			var l = window.jQuery ? window.jQuery : window.$;
			"undefined" != typeof l && r(l)
		}
		e.exports = r
	}, {
		"../main": 7,
		"../plugin/instances": 18
	}],
	2: [function (t, e, n) {
		"use strict";

		function r(t, e) {
			var n = t.className.split(" ");
			n.indexOf(e) < 0 && n.push(e), t.className = n.join(" ")
		}

		function o(t, e) {
			var n = t.className.split(" "),
				r = n.indexOf(e);
			r >= 0 && n.splice(r, 1), t.className = n.join(" ")
		}
		n.add = function (t, e) {
			t.classList ? t.classList.add(e) : r(t, e)
		}, n.remove = function (t, e) {
			t.classList ? t.classList.remove(e) : o(t, e)
		}, n.list = function (t) {
			return t.classList ? Array.prototype.slice.apply(t.classList) : t.className.split(" ")
		}
	}, {}],
	3: [function (t, e, n) {
		"use strict";

		function r(t, e) {
			return window.getComputedStyle(t)[e]
		}

		function o(t, e, n) {
			return "number" == typeof n && (n = n.toString() + "px"), t.style[e] = n, t
		}

		function i(t, e) {
			for (var n in e) {
				var r = e[n];
				"number" == typeof r && (r = r.toString() + "px"), t.style[n] = r
			}
			return t
		}
		var l = {};
		l.e = function (t, e) {
			var n = document.createElement(t);
			return n.className = e, n
		}, l.appendTo = function (t, e) {
			return e.appendChild(t), t
		}, l.css = function (t, e, n) {
			return "object" == typeof e ? i(t, e) : "undefined" == typeof n ? r(t, e) : o(t, e, n)
		}, l.matches = function (t, e) {
			return "undefined" != typeof t.matches ? t.matches(e) : "undefined" != typeof t.matchesSelector ? t.matchesSelector(e) : "undefined" != typeof t.webkitMatchesSelector ? t.webkitMatchesSelector(e) : "undefined" != typeof t.mozMatchesSelector ? t.mozMatchesSelector(e) : "undefined" != typeof t.msMatchesSelector ? t.msMatchesSelector(e) : void 0
		}, l.remove = function (t) {
			"undefined" != typeof t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t)
		}, l.queryChildren = function (t, e) {
			return Array.prototype.filter.call(t.childNodes, function (t) {
				return l.matches(t, e)
			})
		}, e.exports = l
	}, {}],
	4: [function (t, e, n) {
		"use strict";
		var r = function (t) {
			this.element = t, this.events = {}
		};
		r.prototype.bind = function (t, e) {
			"undefined" == typeof this.events[t] && (this.events[t] = []), this.events[t].push(e), this.element.addEventListener(t, e, !1)
		}, r.prototype.unbind = function (t, e) {
			var n = "undefined" != typeof e;
			this.events[t] = this.events[t].filter(function (r) {
				return n && r !== e ? !0 : (this.element.removeEventListener(t, r, !1), !1)
			}, this)
		}, r.prototype.unbindAll = function () {
			for (var t in this.events) this.unbind(t)
		};
		var o = function () {
			this.eventElements = []
		};
		o.prototype.eventElement = function (t) {
			var e = this.eventElements.filter(function (e) {
				return e.element === t
			})[0];
			return "undefined" == typeof e && (e = new r(t), this.eventElements.push(e)), e
		}, o.prototype.bind = function (t, e, n) {
			this.eventElement(t).bind(e, n)
		}, o.prototype.unbind = function (t, e, n) {
			this.eventElement(t).unbind(e, n)
		}, o.prototype.unbindAll = function () {
			for (var t = 0; t < this.eventElements.length; t++) this.eventElements[t].unbindAll()
		}, o.prototype.once = function (t, e, n) {
			var r = this.eventElement(t),
				o = function (t) {
					r.unbind(e, o), n(t)
				};
			r.bind(e, o)
		}, e.exports = o
	}, {}],
	5: [function (t, e, n) {
		"use strict";
		e.exports = function () {
			function t() {
				return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
			}
			return function () {
				return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
			}
		}()
	}, {}],
	6: [function (t, e, n) {
		"use strict";
		var r = t("./class"),
			o = t("./dom");
		n.toInt = function (t) {
			return parseInt(t, 10) || 0
		}, n.clone = function (t) {
			if (null === t) return null;
			if ("object" == typeof t) {
				var e = {};
				for (var n in t) e[n] = this.clone(t[n]);
				return e
			}
			return t
		}, n.extend = function (t, e) {
			var n = this.clone(t);
			for (var r in e) n[r] = this.clone(e[r]);
			return n
		}, n.isEditable = function (t) {
			return o.matches(t, "input,[contenteditable]") || o.matches(t, "select,[contenteditable]") || o.matches(t, "textarea,[contenteditable]") || o.matches(t, "button,[contenteditable]")
		}, n.removePsClasses = function (t) {
			for (var e = r.list(t), n = 0; n < e.length; n++) {
				var o = e[n];
				0 === o.indexOf("ps-") && r.remove(t, o)
			}
		}, n.outerWidth = function (t) {
			return this.toInt(o.css(t, "width")) + this.toInt(o.css(t, "paddingLeft")) + this.toInt(o.css(t, "paddingRight")) + this.toInt(o.css(t, "borderLeftWidth")) + this.toInt(o.css(t, "borderRightWidth"))
		}, n.startScrolling = function (t, e) {
			r.add(t, "ps-in-scrolling"), "undefined" != typeof e ? r.add(t, "ps-" + e) : (r.add(t, "ps-x"), r.add(t, "ps-y"))
		}, n.stopScrolling = function (t, e) {
			r.remove(t, "ps-in-scrolling"), "undefined" != typeof e ? r.remove(t, "ps-" + e) : (r.remove(t, "ps-x"), r.remove(t, "ps-y"))
		}, n.env = {
			isWebKit: "WebkitAppearance" in document.documentElement.style,
			supportsTouch: "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
			supportsIePointer: null !== window.navigator.msMaxTouchPoints
		}
	}, {
		"./class": 2,
		"./dom": 3
	}],
	7: [function (t, e, n) {
		"use strict";
		var r = t("./plugin/destroy"),
			o = t("./plugin/initialize"),
			i = t("./plugin/update");
		e.exports = {
			initialize: o,
			update: i,
			destroy: r
		}
	}, {
		"./plugin/destroy": 9,
		"./plugin/initialize": 17,
		"./plugin/update": 21
	}],
	8: [function (t, e, n) {
		"use strict";
		e.exports = {
			maxScrollbarLength: null,
			minScrollbarLength: null,
			scrollXMarginOffset: 0,
			scrollYMarginOffset: 0,
			stopPropagationOnClick: !0,
			suppressScrollX: !1,
			suppressScrollY: !1,
			swipePropagation: !0,
			useBothWheelAxes: !1,
			useKeyboard: !0,
			useSelectionScroll: !1,
			wheelPropagation: !1,
			wheelSpeed: 1,
			theme: "default"
		}
	}, {}],
	9: [function (t, e, n) {
		"use strict";
		var r = t("../lib/dom"),
			o = t("../lib/helper"),
			i = t("./instances");
		e.exports = function (t) {
			var e = i.get(t);
			e && (e.event.unbindAll(), r.remove(e.scrollbarX), r.remove(e.scrollbarY), r.remove(e.scrollbarXRail), r.remove(e.scrollbarYRail), o.removePsClasses(t), i.remove(t))
		}
	}, {
		"../lib/dom": 3,
		"../lib/helper": 6,
		"./instances": 18
	}],
	10: [function (t, e, n) {
		"use strict";

		function r(t, e) {
			function n(t) {
				return t.getBoundingClientRect()
			}
			var r = window.Event.prototype.stopPropagation.bind;
			e.settings.stopPropagationOnClick && e.event.bind(e.scrollbarY, "click", r), e.event.bind(e.scrollbarYRail, "click", function (r) {
				var i = o.toInt(e.scrollbarYHeight / 2),
					a = e.railYRatio * (r.pageY - window.pageYOffset - n(e.scrollbarYRail).top - i),
					c = e.railYRatio * (e.railYHeight - e.scrollbarYHeight),
					u = a / c;
				0 > u ? u = 0 : u > 1 && (u = 1), s(t, "top", (e.contentHeight - e.containerHeight) * u), l(t), r.stopPropagation()
			}), e.settings.stopPropagationOnClick && e.event.bind(e.scrollbarX, "click", r), e.event.bind(e.scrollbarXRail, "click", function (r) {
				var i = o.toInt(e.scrollbarXWidth / 2),
					a = e.railXRatio * (r.pageX - window.pageXOffset - n(e.scrollbarXRail).left - i),
					c = e.railXRatio * (e.railXWidth - e.scrollbarXWidth),
					u = a / c;
				0 > u ? u = 0 : u > 1 && (u = 1), s(t, "left", (e.contentWidth - e.containerWidth) * u - e.negativeScrollAdjustment), l(t), r.stopPropagation()
			})
		}
		var o = t("../../lib/helper"),
			i = t("../instances"),
			l = t("../update-geometry"),
			s = t("../update-scroll");
		e.exports = function (t) {
			var e = i.get(t);
			r(t, e)
		}
	}, {
		"../../lib/helper": 6,
		"../instances": 18,
		"../update-geometry": 19,
		"../update-scroll": 20
	}],
	11: [function (t, e, n) {
		"use strict";

		function r(t, e) {
			function n(n) {
				var o = r + n * e.railXRatio,
					i = Math.max(0, e.scrollbarXRail.getBoundingClientRect().left) + e.railXRatio * (e.railXWidth - e.scrollbarXWidth);
				0 > o ? e.scrollbarXLeft = 0 : o > i ? e.scrollbarXLeft = i : e.scrollbarXLeft = o;
				var s = l.toInt(e.scrollbarXLeft * (e.contentWidth - e.containerWidth) / (e.containerWidth - e.railXRatio * e.scrollbarXWidth)) - e.negativeScrollAdjustment;
				c(t, "left", s)
			}
			var r = null,
				o = null,
				s = function (e) {
					n(e.pageX - o), a(t), e.stopPropagation(), e.preventDefault()
				},
				u = function () {
					l.stopScrolling(t, "x"), e.event.unbind(e.ownerDocument, "mousemove", s)
				};
			e.event.bind(e.scrollbarX, "mousedown", function (n) {
				o = n.pageX, r = l.toInt(i.css(e.scrollbarX, "left")) * e.railXRatio, l.startScrolling(t, "x"), e.event.bind(e.ownerDocument, "mousemove", s), e.event.once(e.ownerDocument, "mouseup", u), n.stopPropagation(), n.preventDefault()
			})
		}

		function o(t, e) {
			function n(n) {
				var o = r + n * e.railYRatio,
					i = Math.max(0, e.scrollbarYRail.getBoundingClientRect().top) + e.railYRatio * (e.railYHeight - e.scrollbarYHeight);
				0 > o ? e.scrollbarYTop = 0 : o > i ? e.scrollbarYTop = i : e.scrollbarYTop = o;
				var s = l.toInt(e.scrollbarYTop * (e.contentHeight - e.containerHeight) / (e.containerHeight - e.railYRatio * e.scrollbarYHeight));
				c(t, "top", s)
			}
			var r = null,
				o = null,
				s = function (e) {
					n(e.pageY - o), a(t), e.stopPropagation(), e.preventDefault()
				},
				u = function () {
					l.stopScrolling(t, "y"), e.event.unbind(e.ownerDocument, "mousemove", s)
				};
			e.event.bind(e.scrollbarY, "mousedown", function (n) {
				o = n.pageY, r = l.toInt(i.css(e.scrollbarY, "top")) * e.railYRatio, l.startScrolling(t, "y"), e.event.bind(e.ownerDocument, "mousemove", s), e.event.once(e.ownerDocument, "mouseup", u), n.stopPropagation(), n.preventDefault()
			})
		}
		var i = t("../../lib/dom"),
			l = t("../../lib/helper"),
			s = t("../instances"),
			a = t("../update-geometry"),
			c = t("../update-scroll");
		e.exports = function (t) {
			var e = s.get(t);
			r(t, e), o(t, e)
		}
	}, {
		"../../lib/dom": 3,
		"../../lib/helper": 6,
		"../instances": 18,
		"../update-geometry": 19,
		"../update-scroll": 20
	}],
	12: [function (t, e, n) {
		"use strict";

		function r(t, e) {
			function n(n, r) {
				var o = t.scrollTop;
				if (0 === n) {
					if (!e.scrollbarYActive) return !1;
					if (0 === o && r > 0 || o >= e.contentHeight - e.containerHeight && 0 > r) return !e.settings.wheelPropagation
				}
				var i = t.scrollLeft;
				if (0 === r) {
					if (!e.scrollbarXActive) return !1;
					if (0 === i && 0 > n || i >= e.contentWidth - e.containerWidth && n > 0) return !e.settings.wheelPropagation
				}
				return !0
			}
			var r = !1;
			e.event.bind(t, "mouseenter", function () {
				r = !0
			}), e.event.bind(t, "mouseleave", function () {
				r = !1
			});
			var l = !1;
			e.event.bind(e.ownerDocument, "keydown", function (c) {
				if (!c.isDefaultPrevented || !c.isDefaultPrevented()) {
					var u = i.matches(e.scrollbarX, ":focus") || i.matches(e.scrollbarY, ":focus");
					if (r || u) {
						var d = document.activeElement ? document.activeElement : e.ownerDocument.activeElement;
						if (d) {
							for (; d.shadowRoot;) d = d.shadowRoot.activeElement;
							if (o.isEditable(d)) return
						}
						var p = 0,
							f = 0;
						switch (c.which) {
							case 37:
								p = -30;
								break;
							case 38:
								f = 30;
								break;
							case 39:
								p = 30;
								break;
							case 40:
								f = -30;
								break;
							case 33:
								f = 90;
								break;
							case 32:
								f = c.shiftKey ? 90 : -90;
								break;
							case 34:
								f = -90;
								break;
							case 35:
								f = c.ctrlKey ? -e.contentHeight : -e.containerHeight;
								break;
							case 36:
								f = c.ctrlKey ? t.scrollTop : e.containerHeight;
								break;
							default:
								return
						}
						a(t, "top", t.scrollTop - f), a(t, "left", t.scrollLeft + p), s(t), l = n(p, f), l && c.preventDefault()
					}
				}
			})
		}
		var o = t("../../lib/helper"),
			i = t("../../lib/dom"),
			l = t("../instances"),
			s = t("../update-geometry"),
			a = t("../update-scroll");
		e.exports = function (t) {
			var e = l.get(t);
			r(t, e)
		}
	}, {
		"../../lib/dom": 3,
		"../../lib/helper": 6,
		"../instances": 18,
		"../update-geometry": 19,
		"../update-scroll": 20
	}],
	13: [function (t, e, n) {
		"use strict";

		function r(t, e) {
			function n(n, r) {
				var o = t.scrollTop;
				if (0 === n) {
					if (!e.scrollbarYActive) return !1;
					if (0 === o && r > 0 || o >= e.contentHeight - e.containerHeight && 0 > r) return !e.settings.wheelPropagation
				}
				var i = t.scrollLeft;
				if (0 === r) {
					if (!e.scrollbarXActive) return !1;
					if (0 === i && 0 > n || i >= e.contentWidth - e.containerWidth && n > 0) return !e.settings.wheelPropagation
				}
				return !0
			}

			function r(t) {
				var e = t.deltaX,
					n = -1 * t.deltaY;
				return ("undefined" == typeof e || "undefined" == typeof n) && (e = -1 * t.wheelDeltaX / 6, n = t.wheelDeltaY / 6), t.deltaMode && 1 === t.deltaMode && (e *= 10, n *= 10), e !== e && n !== n && (e = 0, n = t.wheelDelta), [e, n]
			}

			function o(e, n) {
				var r = t.querySelector("textarea:hover");
				if (r) {
					var o = r.scrollHeight - r.clientHeight;
					if (o > 0 && !(0 === r.scrollTop && n > 0 || r.scrollTop === o && 0 > n)) return !0;
					var i = r.scrollLeft - r.clientWidth;
					if (i > 0 && !(0 === r.scrollLeft && 0 > e || r.scrollLeft === i && e > 0)) return !0
				}
				return !1
			}

			function s(s) {
				var c = r(s),
					u = c[0],
					d = c[1];
				o(u, d) || (a = !1, e.settings.useBothWheelAxes ? e.scrollbarYActive && !e.scrollbarXActive ? (d ? l(t, "top", t.scrollTop - d * e.settings.wheelSpeed) : l(t, "top", t.scrollTop + u * e.settings.wheelSpeed), a = !0) : e.scrollbarXActive && !e.scrollbarYActive && (u ? l(t, "left", t.scrollLeft + u * e.settings.wheelSpeed) : l(t, "left", t.scrollLeft - d * e.settings.wheelSpeed), a = !0) : (l(t, "top", t.scrollTop - d * e.settings.wheelSpeed), l(t, "left", t.scrollLeft + u * e.settings.wheelSpeed)), i(t), a = a || n(u, d), a && (s.stopPropagation(), s.preventDefault()))
			}
			var a = !1;
			"undefined" != typeof window.onwheel ? e.event.bind(t, "wheel", s) : "undefined" != typeof window.onmousewheel && e.event.bind(t, "mousewheel", s)
		}
		var o = t("../instances"),
			i = t("../update-geometry"),
			l = t("../update-scroll");
		e.exports = function (t) {
			var e = o.get(t);
			r(t, e)
		}
	}, {
		"../instances": 18,
		"../update-geometry": 19,
		"../update-scroll": 20
	}],
	14: [function (t, e, n) {
		"use strict";

		function r(t, e) {
			e.event.bind(t, "scroll", function () {
				i(t)
			})
		}
		var o = t("../instances"),
			i = t("../update-geometry");
		e.exports = function (t) {
			var e = o.get(t);
			r(t, e)
		}
	}, {
		"../instances": 18,
		"../update-geometry": 19
	}],
	15: [function (t, e, n) {
		"use strict";

		function r(t, e) {
			function n() {
				var t = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : "";
				return 0 === t.toString().length ? null : t.getRangeAt(0).commonAncestorContainer
			}

			function r() {
				c || (c = setInterval(function () {
					return i.get(t) ? (s(t, "top", t.scrollTop + u.top), s(t, "left", t.scrollLeft + u.left), void l(t)) : void clearInterval(c)
				}, 50))
			}

			function a() {
				c && (clearInterval(c), c = null), o.stopScrolling(t)
			}
			var c = null,
				u = {
					top: 0,
					left: 0
				},
				d = !1;
			e.event.bind(e.ownerDocument, "selectionchange", function () {
				t.contains(n()) ? d = !0 : (d = !1, a())
			}), e.event.bind(window, "mouseup", function () {
				d && (d = !1, a())
			}), e.event.bind(window, "mousemove", function (e) {
				if (d) {
					var n = {
							x: e.pageX,
							y: e.pageY
						},
						i = {
							left: t.offsetLeft,
							right: t.offsetLeft + t.offsetWidth,
							top: t.offsetTop,
							bottom: t.offsetTop + t.offsetHeight
						};
					n.x < i.left + 3 ? (u.left = -5, o.startScrolling(t, "x")) : n.x > i.right - 3 ? (u.left = 5, o.startScrolling(t, "x")) : u.left = 0, n.y < i.top + 3 ? (i.top + 3 - n.y < 5 ? u.top = -5 : u.top = -20, o.startScrolling(t, "y")) : n.y > i.bottom - 3 ? (n.y - i.bottom + 3 < 5 ? u.top = 5 : u.top = 20, o.startScrolling(t, "y")) : u.top = 0, 0 === u.top && 0 === u.left ? a() : r()
				}
			})
		}
		var o = t("../../lib/helper"),
			i = t("../instances"),
			l = t("../update-geometry"),
			s = t("../update-scroll");
		e.exports = function (t) {
			var e = i.get(t);
			r(t, e)
		}
	}, {
		"../../lib/helper": 6,
		"../instances": 18,
		"../update-geometry": 19,
		"../update-scroll": 20
	}],
	16: [function (t, e, n) {
		"use strict";

		function r(t, e, n, r) {
			function s(n, r) {
				var o = t.scrollTop,
					i = t.scrollLeft,
					l = Math.abs(n),
					s = Math.abs(r);
				if (s > l) {
					if (0 > r && o === e.contentHeight - e.containerHeight || r > 0 && 0 === o) return !e.settings.swipePropagation
				} else if (l > s && (0 > n && i === e.contentWidth - e.containerWidth || n > 0 && 0 === i)) return !e.settings.swipePropagation;
				return !0
			}

			function a(e, n) {
				l(t, "top", t.scrollTop - n), l(t, "left", t.scrollLeft - e), i(t)
			}

			function c() {
				Y = !0
			}

			function u() {
				Y = !1
			}

			function d(t) {
				return t.targetTouches ? t.targetTouches[0] : t
			}

			function p(t) {
				return t.targetTouches && 1 === t.targetTouches.length ? !0 : t.pointerType && "mouse" !== t.pointerType && t.pointerType !== t.MSPOINTER_TYPE_MOUSE ? !0 : !1
			}

			function f(t) {
				if (p(t)) {
					w = !0;
					var e = d(t);
					v.pageX = e.pageX, v.pageY = e.pageY, g = (new Date).getTime(), null !== y && clearInterval(y), t.stopPropagation()
				}
			}

			function h(t) {
				if (!Y && w && p(t)) {
					var e = d(t),
						n = {
							pageX: e.pageX,
							pageY: e.pageY
						},
						r = n.pageX - v.pageX,
						o = n.pageY - v.pageY;
					a(r, o), v = n;
					var i = (new Date).getTime(),
						l = i - g;
					l > 0 && (m.x = r / l, m.y = o / l, g = i), s(r, o) && (t.stopPropagation(), t.preventDefault())
				}
			}

			function b() {
				!Y && w && (w = !1, clearInterval(y), y = setInterval(function () {
					return o.get(t) ? Math.abs(m.x) < .01 && Math.abs(m.y) < .01 ? void clearInterval(y) : (a(30 * m.x, 30 * m.y), m.x *= .8, void(m.y *= .8)) : void clearInterval(y)
				}, 10))
			}
			var v = {},
				g = 0,
				m = {},
				y = null,
				Y = !1,
				w = !1;
			n && (e.event.bind(window, "touchstart", c), e.event.bind(window, "touchend", u), e.event.bind(t, "touchstart", f), e.event.bind(t, "touchmove", h), e.event.bind(t, "touchend", b)), r && (window.PointerEvent ? (e.event.bind(window, "pointerdown", c), e.event.bind(window, "pointerup", u), e.event.bind(t, "pointerdown", f), e.event.bind(t, "pointermove", h), e.event.bind(t, "pointerup", b)) : window.MSPointerEvent && (e.event.bind(window, "MSPointerDown", c), e.event.bind(window, "MSPointerUp", u), e.event.bind(t, "MSPointerDown", f), e.event.bind(t, "MSPointerMove", h), e.event.bind(t, "MSPointerUp", b)))
		}
		var o = t("../instances"),
			i = t("../update-geometry"),
			l = t("../update-scroll");
		e.exports = function (t, e, n) {
			var i = o.get(t);
			r(t, i, e, n)
		}
	}, {
		"../instances": 18,
		"../update-geometry": 19,
		"../update-scroll": 20
	}],
	17: [function (t, e, n) {
		"use strict";
		var r = t("../lib/class"),
			o = t("../lib/helper"),
			i = t("./instances"),
			l = t("./update-geometry"),
			s = t("./handler/click-rail"),
			a = t("./handler/drag-scrollbar"),
			c = t("./handler/keyboard"),
			u = t("./handler/mouse-wheel"),
			d = t("./handler/native-scroll"),
			p = t("./handler/selection"),
			f = t("./handler/touch");
		e.exports = function (t, e) {
			e = "object" == typeof e ? e : {}, r.add(t, "ps-container");
			var n = i.add(t);
			n.settings = o.extend(n.settings, e), r.add(t, "ps-theme-" + n.settings.theme), s(t), a(t), u(t), d(t), n.settings.useSelectionScroll && p(t), (o.env.supportsTouch || o.env.supportsIePointer) && f(t, o.env.supportsTouch, o.env.supportsIePointer), n.settings.useKeyboard && c(t), l(t)
		}
	}, {
		"../lib/class": 2,
		"../lib/helper": 6,
		"./handler/click-rail": 10,
		"./handler/drag-scrollbar": 11,
		"./handler/keyboard": 12,
		"./handler/mouse-wheel": 13,
		"./handler/native-scroll": 14,
		"./handler/selection": 15,
		"./handler/touch": 16,
		"./instances": 18,
		"./update-geometry": 19
	}],
	18: [function (t, e, n) {
		"use strict";

		function r(t) {
			function e() {
				s.add(t, "ps-focus")
			}

			function n() {
				s.remove(t, "ps-focus")
			}
			var r = this;
			r.settings = p.clone(c), r.containerWidth = null, r.containerHeight = null, r.contentWidth = null, r.contentHeight = null, r.isRtl = "rtl" === a.css(t, "direction"), r.isNegativeScroll = function () {
				var e = t.scrollLeft,
					n = null;
				return t.scrollLeft = -1, n = t.scrollLeft < 0, t.scrollLeft = e, n
			}(), r.negativeScrollAdjustment = r.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, r.event = new u, r.ownerDocument = t.ownerDocument || document, r.scrollbarXRail = a.appendTo(a.e("div", "ps-scrollbar-x-rail"), t), r.scrollbarX = a.appendTo(a.e("div", "ps-scrollbar-x"), r.scrollbarXRail), r.scrollbarX.setAttribute("tabindex", 0), r.event.bind(r.scrollbarX, "focus", e), r.event.bind(r.scrollbarX, "blur", n), r.scrollbarXActive = null, r.scrollbarXWidth = null, r.scrollbarXLeft = null, r.scrollbarXBottom = p.toInt(a.css(r.scrollbarXRail, "bottom")), r.isScrollbarXUsingBottom = r.scrollbarXBottom === r.scrollbarXBottom, r.scrollbarXTop = r.isScrollbarXUsingBottom ? null : p.toInt(a.css(r.scrollbarXRail, "top")), r.railBorderXWidth = p.toInt(a.css(r.scrollbarXRail, "borderLeftWidth")) + p.toInt(a.css(r.scrollbarXRail, "borderRightWidth")), a.css(r.scrollbarXRail, "display", "block"), r.railXMarginWidth = p.toInt(a.css(r.scrollbarXRail, "marginLeft")) + p.toInt(a.css(r.scrollbarXRail, "marginRight")), a.css(r.scrollbarXRail, "display", ""), r.railXWidth = null, r.railXRatio = null, r.scrollbarYRail = a.appendTo(a.e("div", "ps-scrollbar-y-rail"), t), r.scrollbarY = a.appendTo(a.e("div", "ps-scrollbar-y"), r.scrollbarYRail), r.scrollbarY.setAttribute("tabindex", 0), r.event.bind(r.scrollbarY, "focus", e), r.event.bind(r.scrollbarY, "blur", n), r.scrollbarYActive = null, r.scrollbarYHeight = null, r.scrollbarYTop = null, r.scrollbarYRight = p.toInt(a.css(r.scrollbarYRail, "right")), r.isScrollbarYUsingRight = r.scrollbarYRight === r.scrollbarYRight, r.scrollbarYLeft = r.isScrollbarYUsingRight ? null : p.toInt(a.css(r.scrollbarYRail, "left")), r.scrollbarYOuterWidth = r.isRtl ? p.outerWidth(r.scrollbarY) : null, r.railBorderYWidth = p.toInt(a.css(r.scrollbarYRail, "borderTopWidth")) + p.toInt(a.css(r.scrollbarYRail, "borderBottomWidth")), a.css(r.scrollbarYRail, "display", "block"), r.railYMarginHeight = p.toInt(a.css(r.scrollbarYRail, "marginTop")) + p.toInt(a.css(r.scrollbarYRail, "marginBottom")), a.css(r.scrollbarYRail, "display", ""), r.railYHeight = null, r.railYRatio = null
		}

		function o(t) {
			return "undefined" == typeof t.dataset ? t.getAttribute("data-ps-id") : t.dataset.psId
		}

		function i(t, e) {
			"undefined" == typeof t.dataset ? t.setAttribute("data-ps-id", e) : t.dataset.psId = e
		}

		function l(t) {
			"undefined" == typeof t.dataset ? t.removeAttribute("data-ps-id") : delete t.dataset.psId
		}
		var s = t("../lib/class"),
			a = t("../lib/dom"),
			c = t("./default-setting"),
			u = t("../lib/event-manager"),
			d = t("../lib/guid"),
			p = t("../lib/helper"),
			f = {};
		n.add = function (t) {
			var e = d();
			return i(t, e), f[e] = new r(t), f[e]
		}, n.remove = function (t) {
			delete f[o(t)], l(t)
		}, n.get = function (t) {
			return f[o(t)]
		}
	}, {
		"../lib/class": 2,
		"../lib/dom": 3,
		"../lib/event-manager": 4,
		"../lib/guid": 5,
		"../lib/helper": 6,
		"./default-setting": 8
	}],
	19: [function (t, e, n) {
		"use strict";

		function r(t, e) {
			return t.settings.minScrollbarLength && (e = Math.max(e, t.settings.minScrollbarLength)), t.settings.maxScrollbarLength && (e = Math.min(e, t.settings.maxScrollbarLength)), e
		}

		function o(t, e) {
			var n = {
				width: e.railXWidth
			};
			e.isRtl ? n.left = e.negativeScrollAdjustment + t.scrollLeft + e.containerWidth - e.contentWidth : n.left = t.scrollLeft, e.isScrollbarXUsingBottom ? n.bottom = e.scrollbarXBottom - t.scrollTop : n.top = e.scrollbarXTop + t.scrollTop, l.css(e.scrollbarXRail, n);
			var r = {
				top: t.scrollTop,
				height: e.railYHeight
			};
			e.isScrollbarYUsingRight ? e.isRtl ? r.right = e.contentWidth - (e.negativeScrollAdjustment + t.scrollLeft) - e.scrollbarYRight - e.scrollbarYOuterWidth : r.right = e.scrollbarYRight - t.scrollLeft : e.isRtl ? r.left = e.negativeScrollAdjustment + t.scrollLeft + 2 * e.containerWidth - e.contentWidth - e.scrollbarYLeft - e.scrollbarYOuterWidth : r.left = e.scrollbarYLeft + t.scrollLeft, l.css(e.scrollbarYRail, r), l.css(e.scrollbarX, {
				left: e.scrollbarXLeft,
				width: e.scrollbarXWidth - e.railBorderXWidth
			}), l.css(e.scrollbarY, {
				top: e.scrollbarYTop,
				height: e.scrollbarYHeight - e.railBorderYWidth
			})
		}
		var i = t("../lib/class"),
			l = t("../lib/dom"),
			s = t("../lib/helper"),
			a = t("./instances"),
			c = t("./update-scroll");
		e.exports = function (t) {
			var e = a.get(t);
			e.containerWidth = t.clientWidth, e.containerHeight = t.clientHeight, e.contentWidth = t.scrollWidth, e.contentHeight = t.scrollHeight;
			var n;
			t.contains(e.scrollbarXRail) || (n = l.queryChildren(t, ".ps-scrollbar-x-rail"), n.length > 0 && n.forEach(function (t) {
				l.remove(t)
			}), l.appendTo(e.scrollbarXRail, t)), t.contains(e.scrollbarYRail) || (n = l.queryChildren(t, ".ps-scrollbar-y-rail"), n.length > 0 && n.forEach(function (t) {
				l.remove(t)
			}), l.appendTo(e.scrollbarYRail, t)), !e.settings.suppressScrollX && e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth ? (e.scrollbarXActive = !0, e.railXWidth = e.containerWidth - e.railXMarginWidth, e.railXRatio = e.containerWidth / e.railXWidth, e.scrollbarXWidth = r(e, s.toInt(e.railXWidth * e.containerWidth / e.contentWidth)), e.scrollbarXLeft = s.toInt((e.negativeScrollAdjustment + t.scrollLeft) * (e.railXWidth - e.scrollbarXWidth) / (e.contentWidth - e.containerWidth))) : e.scrollbarXActive = !1, !e.settings.suppressScrollY && e.containerHeight + e.settings.scrollYMarginOffset < e.contentHeight ? (e.scrollbarYActive = !0, e.railYHeight = e.containerHeight - e.railYMarginHeight, e.railYRatio = e.containerHeight / e.railYHeight, e.scrollbarYHeight = r(e, s.toInt(e.railYHeight * e.containerHeight / e.contentHeight)), e.scrollbarYTop = s.toInt(t.scrollTop * (e.railYHeight - e.scrollbarYHeight) / (e.contentHeight - e.containerHeight))) : e.scrollbarYActive = !1, e.scrollbarXLeft >= e.railXWidth - e.scrollbarXWidth && (e.scrollbarXLeft = e.railXWidth - e.scrollbarXWidth), e.scrollbarYTop >= e.railYHeight - e.scrollbarYHeight && (e.scrollbarYTop = e.railYHeight - e.scrollbarYHeight), o(t, e), e.scrollbarXActive ? i.add(t, "ps-active-x") : (i.remove(t, "ps-active-x"), e.scrollbarXWidth = 0, e.scrollbarXLeft = 0, c(t, "left", 0)), e.scrollbarYActive ? i.add(t, "ps-active-y") : (i.remove(t, "ps-active-y"), e.scrollbarYHeight = 0, e.scrollbarYTop = 0, c(t, "top", 0))
		}
	}, {
		"../lib/class": 2,
		"../lib/dom": 3,
		"../lib/helper": 6,
		"./instances": 18,
		"./update-scroll": 20
	}],
	20: [function (t, e, n) {
		"use strict";
		var r, o, i = t("./instances"),
			l = document.createEvent("Event"),
			s = document.createEvent("Event"),
			a = document.createEvent("Event"),
			c = document.createEvent("Event"),
			u = document.createEvent("Event"),
			d = document.createEvent("Event"),
			p = document.createEvent("Event"),
			f = document.createEvent("Event"),
			h = document.createEvent("Event"),
			b = document.createEvent("Event");
		l.initEvent("ps-scroll-up", !0, !0), s.initEvent("ps-scroll-down", !0, !0), a.initEvent("ps-scroll-left", !0, !0), c.initEvent("ps-scroll-right", !0, !0), u.initEvent("ps-scroll-y", !0, !0), d.initEvent("ps-scroll-x", !0, !0), p.initEvent("ps-x-reach-start", !0, !0), f.initEvent("ps-x-reach-end", !0, !0), h.initEvent("ps-y-reach-start", !0, !0), b.initEvent("ps-y-reach-end", !0, !0), e.exports = function (t, e, n) {
			if ("undefined" == typeof t) throw "You must provide an element to the update-scroll function";
			if ("undefined" == typeof e) throw "You must provide an axis to the update-scroll function";
			if ("undefined" == typeof n) throw "You must provide a value to the update-scroll function";
			"top" === e && 0 >= n && (t.scrollTop = n = 0, t.dispatchEvent(h)), "left" === e && 0 >= n && (t.scrollLeft = n = 0, t.dispatchEvent(p));
			var v = i.get(t);
			"top" === e && n >= v.contentHeight - v.containerHeight && (t.scrollTop = n = v.contentHeight - v.containerHeight, t.dispatchEvent(b)), "left" === e && n >= v.contentWidth - v.containerWidth && (t.scrollLeft = n = v.contentWidth - v.containerWidth, t.dispatchEvent(f)), r || (r = t.scrollTop), o || (o = t.scrollLeft), "top" === e && r > n && t.dispatchEvent(l), "top" === e && n > r && t.dispatchEvent(s), "left" === e && o > n && t.dispatchEvent(a), "left" === e && n > o && t.dispatchEvent(c), "top" === e && (t.scrollTop = r = n, t.dispatchEvent(u)), "left" === e && (t.scrollLeft = o = n, t.dispatchEvent(d))
		}
	}, {
		"./instances": 18
	}],
	21: [function (t, e, n) {
		"use strict";
		var r = t("../lib/dom"),
			o = t("../lib/helper"),
			i = t("./instances"),
			l = t("./update-geometry"),
			s = t("./update-scroll");
		e.exports = function (t) {
			var e = i.get(t);
			e && (e.negativeScrollAdjustment = e.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, r.css(e.scrollbarXRail, "display", "block"), r.css(e.scrollbarYRail, "display", "block"), e.railXMarginWidth = o.toInt(r.css(e.scrollbarXRail, "marginLeft")) + o.toInt(r.css(e.scrollbarXRail, "marginRight")), e.railYMarginHeight = o.toInt(r.css(e.scrollbarYRail, "marginTop")) + o.toInt(r.css(e.scrollbarYRail, "marginBottom")), r.css(e.scrollbarXRail, "display", "none"), r.css(e.scrollbarYRail, "display", "none"), l(t), s(t, "top", t.scrollTop), s(t, "left", t.scrollLeft), r.css(e.scrollbarXRail, "display", ""), r.css(e.scrollbarYRail, "display", ""))
		}
	}, {
		"../lib/dom": 3,
		"../lib/helper": 6,
		"./instances": 18,
		"./update-geometry": 19,
		"./update-scroll": 20
	}]
}, {}, [1]);


! function (t, e, o) {
	"use strict";
	t.HoverDir = function (e, o) {
		this.$el = t(o), this._init(e)
	}, t.HoverDir.defaults = {
		speed: 300,
		easing: "ease",
		hoverDelay: 0,
		inverse: !1
	}, t.HoverDir.prototype = {
		_init: function (e) {
			this.options = t.extend(!0, {}, t.HoverDir.defaults, e), this.transitionProp = "all " + this.options.speed + "ms " + this.options.easing, this.support = Modernizr.csstransitions, this._loadEvents()
		},
		_loadEvents: function () {
			var e = this;
			this.$el.on("mouseenter.hoverdir, mouseleave.hoverdir", function (o) {
				var i = t(this),
					n = i.find("div.hd-box"),
					s = e._getDir(i, {
						x: o.pageX,
						y: o.pageY
					}),
					r = e._getStyle(s);
				"mouseenter" === o.type ? (n.hide().css(r.from), clearTimeout(e.tmhover), e.tmhover = setTimeout(function () {
					n.show(0, function () {
						var o = t(this);
						e.support && o.css("transition", e.transitionProp), e._applyAnimation(o, r.to, e.options.speed)
					})
				}, e.options.hoverDelay)) : (e.support && n.css("transition", e.transitionProp), clearTimeout(e.tmhover), e._applyAnimation(n, r.from, e.options.speed))
			})
		},
		_getDir: function (t, e) {
			var o = t.width(),
				i = t.height(),
				n = (e.x - t.offset().left - o / 2) * (o > i ? i / o : 1),
				s = (e.y - t.offset().top - i / 2) * (i > o ? o / i : 1),
				r = Math.round((Math.atan2(s, n) * (180 / Math.PI) + 180) / 90 + 3) % 4;
			return r
		},
		_getStyle: function (t) {
			var e, o, i = {
					left: "0px",
					top: "-100%"
				},
				n = {
					left: "0px",
					top: "100%"
				},
				s = {
					left: "-100%",
					top: "0px"
				},
				r = {
					left: "100%",
					top: "0px"
				},
				a = {
					top: "0px"
				},
				p = {
					left: "0px"
				};
			switch (t) {
				case 0:
					e = this.options.inverse ? n : i, o = a;
					break;
				case 1:
					e = this.options.inverse ? s : r, o = p;
					break;
				case 2:
					e = this.options.inverse ? i : n, o = a;
					break;
				case 3:
					e = this.options.inverse ? r : s, o = p
			}
			return {
				from: e,
				to: o
			}
		},
		_applyAnimation: function (e, o, i) {
			t.fn.applyStyle = this.support ? t.fn.css : t.fn.animate, e.stop().applyStyle(o, t.extend(!0, [], {
				duration: i + "ms"
			}))
		}
	};
	var i = function (t) {
		e.console && e.console.error(t)
	};
	t.fn.hoverdir = function (e) {
		var o = t.data(this, "hoverdir");
		if ("string" == typeof e) {
			var n = Array.prototype.slice.call(arguments, 1);
			this.each(function () {
				return o ? t.isFunction(o[e]) && "_" !== e.charAt(0) ? void o[e].apply(o, n) : void i("no such method '" + e + "' for hoverdir instance") : void i("cannot call methods on hoverdir prior to initialization; attempted to call method '" + e + "'")
			})
		} else this.each(function () {
			o ? o._init() : o = t.data(this, "hoverdir", new t.HoverDir(e, this))
		});
		return o
	}
}(jQuery, window);


(function (e, t) {
	if (typeof exports === "object") {
		module.exports = t(require("jquery"))
	} else if (typeof define === "function" && define.amd) {
		define("EasyPieChart", ["jquery"], t)
	} else {
		t(e.jQuery)
	}
})(this, function (e) {
	var t = function (e, t) {
		var n;
		var r = document.createElement("canvas");
		if (typeof G_vmlCanvasManager !== "undefined") {
			G_vmlCanvasManager.initElement(r)
		}
		var i = r.getContext("2d");
		r.width = r.height = t.size;
		e.appendChild(r);
		var s = 1;
		if (window.devicePixelRatio > 1) {
			s = window.devicePixelRatio;
			r.style.width = r.style.height = [t.size, "px"].join("");
			r.width = r.height = t.size * s;
			i.scale(s, s)
		}
		i.translate(t.size / 2, t.size / 2);
		i.rotate((-1 / 2 + t.rotate / 180) * Math.PI);
		var o = (t.size - t.lineWidth) / 2;
		if (t.scaleColor && t.scaleLength) {
			o -= t.scaleLength + 2
		}
		Date.now = Date.now || function () {
			return +(new Date)
		};
		var u = function (e, t, n) {
			n = Math.min(Math.max(0, n || 1), 1);
			i.beginPath();
			i.arc(0, 0, o, 0, Math.PI * 2 * n, false);
			i.strokeStyle = e;
			i.lineWidth = t;
			i.stroke()
		};
		var a = function () {
			var e;
			var n;
			var r = 24;
			i.lineWidth = 1;
			i.fillStyle = t.scaleColor;
			i.save();
			for (var r = 24; r > 0; --r) {
				if (r % 6 === 0) {
					n = t.scaleLength;
					e = 0
				} else {
					n = t.scaleLength * .6;
					e = t.scaleLength - n
				}
				i.fillRect(-t.size / 2 + e, 0, n, 1);
				i.rotate(Math.PI / 12)
			}
			i.restore()
		};
		var f = function () {
			return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (e) {
				window.setTimeout(e, 1e3 / 60)
			}
		}();
		var l = function () {
			t.scaleColor && a();
			t.trackColor && u(t.trackColor, t.lineWidth)
		};
		this.clear = function () {
			i.clearRect(t.size / -2, t.size / -2, t.size, t.size)
		};
		this.draw = function (e) {
			if (!!t.scaleColor || !!t.trackColor) {
				if (i.getImageData && i.putImageData) {
					if (!n) {
						l();
						n = i.getImageData(0, 0, t.size * s, t.size * s)
					} else {
						i.putImageData(n, 0, 0)
					}
				} else {
					this.clear();
					l()
				}
			} else {
				this.clear()
			}
			i.lineCap = t.lineCap;
			var r;
			if (typeof t.barColor === "function") {
				r = t.barColor(e)
			} else {
				r = t.barColor
			}
			if (e > 0) {
				u(r, t.lineWidth, e / 100)
			}
		}.bind(this);
		this.animate = function (e, n) {
			var r = Date.now();
			t.onStart(e, n);
			var i = function () {
				var s = Math.min(Date.now() - r, t.animate);
				var o = t.easing(this, s, e, n - e, t.animate);
				this.draw(o);
				t.onStep(e, n, o);
				if (s >= t.animate) {
					t.onStop(e, n)
				} else {
					f(i)
				}
			}.bind(this);
			f(i)
		}.bind(this)
	};
	var n = function (e, n) {
		var r = {
			barColor: "#F54A4B",
			trackColor: "#ccc",
			scaleColor: "#ccc",
			scaleLength: 0,
			lineCap: "round",
			lineWidth: 10,
			size: 152,
			rotate: 0,
			animate: 4e3,
			easing: function (e, t, n, r, i) {
				t = t / (i / 2);
				if (t < 1) {
					return r / 2 * t * t + n
				}
				return -r / 2 * (--t * (t - 2) - 1) + n
			},
			onStart: function (e, t) {
				return
			},
			onStep: function (e, t, n) {
				return
			},
			onStop: function (e, t) {
				return
			}
		};
		if (typeof t !== "undefined") {
			r.renderer = t
		} else if (typeof SVGRenderer !== "undefined") {
			r.renderer = SVGRenderer
		} else {
			throw new Error("Please load either the SVG- or the CanvasRenderer")
		}
		var i = {};
		var s = 0;
		var o = function () {
			this.el = e;
			this.options = i;
			for (var t in r) {
				if (r.hasOwnProperty(t)) {
					i[t] = n && typeof n[t] !== "undefined" ? n[t] : r[t];
					if (typeof i[t] === "function") {
						i[t] = i[t].bind(this)
					}
				}
			}
			if (typeof i.easing === "string" && typeof jQuery !== "undefined" && jQuery.isFunction(jQuery.easing[i.easing])) {
				i.easing = jQuery.easing[i.easing]
			} else {
				i.easing = r.easing
			}
			this.renderer = new i.renderer(e, i);
			this.renderer.draw(s);
			if (e.dataset && e.dataset.percent) {
				this.update(parseFloat(e.dataset.percent))
			} else if (e.getAttribute && e.getAttribute("data-percent")) {
				this.update(parseFloat(e.getAttribute("data-percent")))
			}
		}.bind(this);
		this.update = function (e) {
			e = parseFloat(e);
			if (i.animate) {
				this.renderer.animate(s, e)
			} else {
				this.renderer.draw(e)
			}
			s = e;
			return this
		}.bind(this);
		o()
	};
	e.fn.easyPieChart = function (t) {
		return this.each(function () {
			if (!e.data(this, "easyPieChart")) {
				e.data(this, "easyPieChart", new n(this, t))
			}
		})
	}
});



! function (e) {
	"use strict";
	var t, n;
	n = {}, e.fn.jParticle = function (n) {
		return this.each(function (i, a) {
			"object" == typeof a.sandbox && e(a).removeJParticle(), a.sandbox = t(a, n)
		}), this
	}, e.fn.removeJParticle = function () {
		return this.each(function (e, t) {
			t.sandbox && (t.sandbox.remove(), delete t.sandbox)
		}), this
	}, e.fn.freezeJParticle = function () {
		return this.each(function (e, t) {
			t.sandbox && t.sandbox.freeze()
		}), this
	}, e.fn.unfreezeJParticle = function () {
		return this.each(function (e, t) {
			t.sandbox && t.sandbox.unfreeze()
		}), this
	}, t = function (t, i) {
		var a, o;
		return a = {}, a.canvas = {}, a.mouse = {}, a.particles = [], a.isAnimated = !1, a.initialize = function (e, t) {
			a.initParams(t), a.initHTML(e), a.initParticles(), a.initEvents(), a.initAnimation()
		}, a.initParams = function (t) {
			t && t.color && (!t.particle || t.particle && !t.particle.color) && (t.particle || (t.particle = {}), t.particle.color = t.color), a.params = e.extend({
				particlesNumber: 100,
				linkDist: 50,
				createLinkDist: 150,
				disableLinks: !1,
				disableMouse: !1,
				background: "black",
				color: "white",
				width: null,
				height: null,
				linksWidth: 1
			}, t)
		}, a.initHTML = function (t) {
			var n;
			n = a.canvas, n.container = e(t), n.element = e("<canvas/>"), n.context = n.element.get(0).getContext("2d"), n.container.append(n.element), n.element.css("display", "block"), n.element.get(0).width = a.params.width ? a.params.width : n.container.width(), n.element.get(0).height = a.params.height ? a.params.height : n.container.height(), n.element.css("background", a.params.background)
		}, a.resize = function (e, t) {
			e && (canvas.element.get(0).width = e), t && (canvas.element.get(0).height = t)
		}, a.initParticles = function () {
			var e, t;
			for (e = 0, t = a.params.particlesNumber; t > e; e += 1) a.particles.push(o(a.canvas.element.get(0), a.params.particle))
		}, a.initEvents = function () {
			a.canvas.element.mouseenter(function () {
				a.mouse.hoverCanvas = !0, a.isAnimated || a.draw()
			}), a.canvas.element.mouseleave(function () {
				a.mouse.hoverCanvas = !1
			}), a.canvas.element.mousemove(function (t) {
				a.mouse = e.extend(a.mouse, n.getMousePosition(t, a.canvas.element[0]))
			})
		}, a.initAnimation = function () {
			window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.ORequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
				setTimeOut(e, 1e3 / 60)
			}, a.isAnimated = !0, a.draw()
		}, a.draw = function () {
			var e, t, n, i, o, r;
			for (e = 0, n = a.particles.length, i = a.canvas, i.context.clearRect(0, 0, i.element.get(0).width, i.element.get(0).height); n > e; e += 1)
				if (o = a.particles[e], a.isAnimated && o.update(), o.draw(), !a.params.disableMouse && a.mouse.hoverCanvas && a.drawLink(o.getPosition("x"), o.getPosition("y"), a.mouse.x, a.mouse.y), !a.params.disableLinks)
					for (t = e + 1; n > t; t += 1) r = a.particles[t], a.drawLink(o.getPosition("x"), o.getPosition("y"), r.getPosition("x"), r.getPosition("y"));
			a.requestID = window.requestAnimFrame(a.draw)
		}, a.drawLink = function (e, t, i, o) {
			var r;
			n.getDistance(e, t, i, o) <= a.params.createLinkDist && (r = a.canvas.context, r.save(), r.beginPath(), r.lineWidth = a.params.linksWidth, r.moveTo(e, t), r.lineTo(i, o), r.globalAlpha = a.getOpacityLink(e, t, i, o), r.strokeStyle = a.params.color, r.lineCap = "round", r.stroke(), r.closePath(), r.restore())
		}, a.getOpacityLink = function (e, t, i, o) {
			var r, s, c, u;
			return r = n.getDistance(e, t, i, o), c = a.params.linkDist, u = a.params.createLinkDist, s = c >= r ? 1 : r > u ? 0 : 1 - 100 * (r - c) / (u - c) / 100
		}, a.freeze = function () {
			a.isAnimated && (a.isAnimated = !1)
		}, a.unfreeze = function () {
			a.isAnimated || (a.isAnimated = !0)
		}, a.remove = function () {
			a.canvas.element.remove()
		}, o = function (t, i) {
			var a;
			return a = {}, a.canvas = {}, a.vector = {}, a.initialize = function (t, n) {
				a.params = e.extend({
					color: "white",
					minSize: 2,
					maxSize: 4,
					speed: 60
				}, n), a.setCanvasContext(t), a.initSize(), a.initPosition(), a.initVectors()
			}, a.initPosition = function () {
				a.x = n.getRandNumber(0 + a.radius, a.canvas.element.width - a.radius), a.y = n.getRandNumber(0 + a.radius, a.canvas.element.height - a.radius)
			}, a.initSize = function () {
				a.size = n.getRandNumber(a.params.minSize, a.params.maxSize), a.radius = a.size / 2
			}, a.initVectors = function () {
				do a.vector.x = n.getRandNumber(-a.params.speed / 60, a.params.speed / 60, !1), a.vector.y = n.getRandNumber(-a.params.speed / 60, a.params.speed / 60, !1); while (0 == a.vector.x || 0 == a.vector.y)
			}, a.setCanvasContext = function (e) {
				var t;
				if (a.canvas.element = e, t = e.getContext("2d"), "object" != typeof t || "object" != typeof t.canvas) throw "Error: Can't set canvas context to Particle because context isn't a CanvasRenderingContext2D object.";
				a.canvas.context = t
			}, a.draw = function () {
				var e = a.canvas.context;
				e.beginPath(), e.arc(a.x, a.y, a.size / 2, 0, 2 * Math.PI), e.fillStyle = a.params.color, e.fill(), e.closePath()
			}, a.update = function () {
				a.x += a.vector.x, a.y += a.vector.y, (0 > a.x - a.radius || a.x + a.radius > a.canvas.element.width) && (a.vector.x = -a.vector.x), (0 > a.y - a.radius || a.y + a.radius > a.canvas.element.height) && (a.vector.y = -a.vector.y)
			}, a.getPosition = function (e) {
				return "string" == typeof e && "x" != e && "y" != e && (e = null), "string" == typeof e ? a[e] : {
					x: a.x,
					y: a.y
				}
			}, a.initialize(t, i), {
				getPosition: a.getPosition,
				update: a.update,
				draw: a.draw
			}
		}, a.initialize(t, i), {
			remove: a.remove,
			freeze: a.freeze,
			unfreeze: a.unfreeze,
			resize: a.resize
		}
	}, n.getRandNumber = function (e, t, n) {
		var i;
		return null == e && (e = 0), null == t && (t = 10), null == n && (n = !0), i = Math.random() * (t - e) + e, n ? Math.round(i) : i
	}, n.getDistance = function (e, t, n, i) {
		return Math.sqrt(Math.pow(n - e, 2) + Math.pow(i - t, 2))
	}, n.getMousePosition = function (t, n) {
		var i;
		return "undefined" == typeof n && (n = e("body")[0]), i = n.getBoundingClientRect(), {
			x: t.clientX - i.left,
			y: t.clientY - i.top
		}
	}
}(jQuery);


(function (e) {
	function t(e) {
		var t = "";
		if (e == "lowerLetter") {
			t = "abcdefghijklmnopqrstuvwxyz0123456789"
		} else if (e == "upperLetter") {
			t = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
		} else if (e == "symbol") {
			t = ",.?/\\(^)![]{}*&^%$#'\""
		}
		var n = t.split("");
		return n[Math.floor(Math.random() * n.length)]
	}
	e.fn.shuffleLetters = function (n) {
		var r = e.extend({
			step: 12,
			fps: 25,
			text: "",
			callback: function () {}
		}, n);
		return this.each(function () {
			var n = e(this),
				i = "";
			if (n.data("animated")) {
				return true
			}
			n.data("animated", true);
			if (r.text) {
				i = r.text.split("")
			} else {
				i = n.text().split("")
			}
			var s = [],
				o = [];
			for (var u = 0; u < i.length; u++) {
				var a = i[u];
				if (a == " ") {
					s[u] = "space";
					continue
				} else if (/[a-z]/.test(a)) {
					s[u] = "lowerLetter"
				} else if (/[A-Z]/.test(a)) {
					s[u] = "upperLetter"
				} else {
					s[u] = "symbol"
				}
				o.push(u)
			}
			n.html("");
			(function f(e) {
				var u, a = o.length,
					l = i.slice(0);
				if (e > a) {
					n.data("animated", false);
					r.callback(n);
					return
				}
				for (u = Math.max(e, 0); u < a; u++) {
					if (u < e + r.step) {
						l[o[u]] = t(s[o[u]])
					} else {
						l[o[u]] = ""
					}
				}
				n.text(l.join(""));
				setTimeout(function () {
					f(e + 1)
				}, 1e3 / r.fps)
			})(-r.step)
		})
	}
})(jQuery);
// slick=============================================
! function (i) {
	"use strict";
	"function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery)
}(function (i) {
	"use strict";
	var e = window.Slick || {};
	(e = function () {
		var e = 0;
		return function (t, o) {
			var s, n = this;
			n.defaults = {
				accessibility: !0,
				adaptiveHeight: !1,
				appendArrows: i(t),
				appendDots: i(t),
				arrows: !0,
				asNavFor: null,
				prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
				nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
				autoplay: !1,
				autoplaySpeed: 3e3,
				centerMode: !1,
				centerPadding: "50px",
				cssEase: "ease",
				customPaging: function (e, t) {
					return i('<button type="button" />').text(t + 1)
				},
				dots: !1,
				dotsClass: "slick-dots",
				draggable: !0,
				easing: "linear",
				edgeFriction: .35,
				fade: !1,
				focusOnSelect: !1,
				focusOnChange: !1,
				infinite: !0,
				initialSlide: 0,
				lazyLoad: "ondemand",
				mobileFirst: !1,
				pauseOnHover: !0,
				pauseOnFocus: !0,
				pauseOnDotsHover: !1,
				respondTo: "window",
				responsive: null,
				rows: 1,
				rtl: !1,
				slide: "",
				slidesPerRow: 1,
				slidesToShow: 1,
				slidesToScroll: 1,
				speed: 500,
				swipe: !0,
				swipeToSlide: !1,
				touchMove: !0,
				touchThreshold: 5,
				useCSS: !0,
				useTransform: !0,
				variableWidth: !1,
				vertical: !1,
				verticalSwiping: !1,
				waitForAnimate: !0,
				zIndex: 1e3
			}, n.initials = {
				animating: !1,
				dragging: !1,
				autoPlayTimer: null,
				currentDirection: 0,
				currentLeft: null,
				currentSlide: 0,
				direction: 1,
				$dots: null,
				listWidth: null,
				listHeight: null,
				loadIndex: 0,
				$nextArrow: null,
				$prevArrow: null,
				scrolling: !1,
				slideCount: null,
				slideWidth: null,
				$slideTrack: null,
				$slides: null,
				sliding: !1,
				slideOffset: 0,
				swipeLeft: null,
				swiping: !1,
				$list: null,
				touchObject: {},
				transformsEnabled: !1,
				unslicked: !1
			}, i.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = i(t), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = i(t).data("slick") || {}, n.options = i.extend({}, n.defaults, o, s), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = i.proxy(n.autoPlay, n), n.autoPlayClear = i.proxy(n.autoPlayClear, n), n.autoPlayIterator = i.proxy(n.autoPlayIterator, n), n.changeSlide = i.proxy(n.changeSlide, n), n.clickHandler = i.proxy(n.clickHandler, n), n.selectHandler = i.proxy(n.selectHandler, n), n.setPosition = i.proxy(n.setPosition, n), n.swipeHandler = i.proxy(n.swipeHandler, n), n.dragHandler = i.proxy(n.dragHandler, n), n.keyHandler = i.proxy(n.keyHandler, n), n.instanceUid = e++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0)
		}
	}()).prototype.activateADA = function () {
		this.$slideTrack.find(".slick-active").attr({
			"aria-hidden": "false"
		}).find("a, input, button, select").attr({
			tabindex: "0"
		})
	}, e.prototype.addSlide = e.prototype.slickAdd = function (e, t, o) {
		var s = this;
		if ("boolean" == typeof t) o = t, t = null;
		else if (t < 0 || t >= s.slideCount) return !1;
		s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : !0 === o ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function (e, t) {
			i(t).attr("data-slick-index", e)
		}), s.$slidesCache = s.$slides, s.reinit()
	}, e.prototype.animateHeight = function () {
		var i = this;
		if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
			var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
			i.$list.animate({
				height: e
			}, i.options.speed)
		}
	}, e.prototype.animateSlide = function (e, t) {
		var o = {},
			s = this;
		s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (e = -e), !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({
			left: e
		}, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({
			top: e
		}, s.options.speed, s.options.easing, t) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), i({
			animStart: s.currentLeft
		}).animate({
			animStart: e
		}, {
			duration: s.options.speed,
			easing: s.options.easing,
			step: function (i) {
				i = Math.ceil(i), !1 === s.options.vertical ? (o[s.animType] = "translate(" + i + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)", s.$slideTrack.css(o))
			},
			complete: function () {
				t && t.call()
			}
		})) : (s.applyTransition(), e = Math.ceil(e), !1 === s.options.vertical ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(o), t && setTimeout(function () {
			s.disableTransition(), t.call()
		}, s.options.speed))
	}, e.prototype.getNavTarget = function () {
		var e = this,
			t = e.options.asNavFor;
		return t && null !== t && (t = i(t).not(e.$slider)), t
	}, e.prototype.asNavFor = function (e) {
		var t = this.getNavTarget();
		null !== t && "object" == typeof t && t.each(function () {
			var t = i(this).slick("getSlick");
			t.unslicked || t.slideHandler(e, !0)
		})
	}, e.prototype.applyTransition = function (i) {
		var e = this,
			t = {};
		!1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
	}, e.prototype.autoPlay = function () {
		var i = this;
		i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed))
	}, e.prototype.autoPlayClear = function () {
		var i = this;
		i.autoPlayTimer && clearInterval(i.autoPlayTimer)
	}, e.prototype.autoPlayIterator = function () {
		var i = this,
			e = i.currentSlide + i.options.slidesToScroll;
		i.paused || i.interrupted || i.focussed || (!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll, i.currentSlide - 1 == 0 && (i.direction = 1))), i.slideHandler(e))
	}, e.prototype.buildArrows = function () {
		var e = this;
		!0 === e.options.arrows && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
			"aria-disabled": "true",
			tabindex: "-1"
		}))
	}, e.prototype.buildDots = function () {
		var e, t, o = this;
		if (!0 === o.options.dots) {
			for (o.$slider.addClass("slick-dotted"), t = i("<ul />").addClass(o.options.dotsClass), e = 0; e <= o.getDotCount(); e += 1) t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
			o.$dots = t.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active")
		}
	}, e.prototype.buildOut = function () {
		var e = this;
		e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function (e, t) {
			i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "")
		}), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
	}, e.prototype.buildRows = function () {
		var i, e, t, o, s, n, r, l = this;
		if (o = document.createDocumentFragment(), n = l.$slider.children(), l.options.rows > 1) {
			for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; i < s; i++) {
				var d = document.createElement("div");
				for (e = 0; e < l.options.rows; e++) {
					var a = document.createElement("div");
					for (t = 0; t < l.options.slidesPerRow; t++) {
						var c = i * r + (e * l.options.slidesPerRow + t);
						n.get(c) && a.appendChild(n.get(c))
					}
					d.appendChild(a)
				}
				o.appendChild(d)
			}
			l.$slider.empty().append(o), l.$slider.children().children().children().css({
				width: 100 / l.options.slidesPerRow + "%",
				display: "inline-block"
			})
		}
	}, e.prototype.checkResponsive = function (e, t) {
		var o, s, n, r = this,
			l = !1,
			d = r.$slider.width(),
			a = window.innerWidth || i(window).width();
		if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
			s = null;
			for (o in r.breakpoints) r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
			null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), l = s), e || !1 === l || r.$slider.trigger("breakpoint", [r, l])
		}
	}, e.prototype.changeSlide = function (e, t) {
		var o, s, n, r = this,
			l = i(e.currentTarget);
		switch (l.is("a") && e.preventDefault(), l.is("li") || (l = l.closest("li")), n = r.slideCount % r.options.slidesToScroll != 0, o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
			case "previous":
				s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
				break;
			case "next":
				s = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
				break;
			case "index":
				var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
				r.slideHandler(r.checkNavigable(d), !1, t), l.children().trigger("focus");
				break;
			default:
				return
		}
	}, e.prototype.checkNavigable = function (i) {
		var e, t;
		if (e = this.getNavigableIndexes(), t = 0, i > e[e.length - 1]) i = e[e.length - 1];
		else
			for (var o in e) {
				if (i < e[o]) {
					i = t;
					break
				}
				t = e[o]
			}
		return i
	}, e.prototype.cleanUpEvents = function () {
		var e = this;
		e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), i(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().off("click.slick", e.selectHandler), i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), i(window).off("resize.slick.slick-" + e.instanceUid, e.resize), i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
	}, e.prototype.cleanUpSlideEvents = function () {
		var e = this;
		e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1))
	}, e.prototype.cleanUpRows = function () {
		var i, e = this;
		e.options.rows > 1 && ((i = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(i))
	}, e.prototype.clickHandler = function (i) {
		!1 === this.shouldClick && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault())
	}, e.prototype.destroy = function (e) {
		var t = this;
		t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), i(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
			i(this).attr("style", i(this).data("originalStyling"))
		}), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t])
	}, e.prototype.disableTransition = function (i) {
		var e = this,
			t = {};
		t[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
	}, e.prototype.fadeSlide = function (i, e) {
		var t = this;
		!1 === t.cssTransitions ? (t.$slides.eq(i).css({
			zIndex: t.options.zIndex
		}), t.$slides.eq(i).animate({
			opacity: 1
		}, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({
			opacity: 1,
			zIndex: t.options.zIndex
		}), e && setTimeout(function () {
			t.disableTransition(i), e.call()
		}, t.options.speed))
	}, e.prototype.fadeSlideOut = function (i) {
		var e = this;
		!1 === e.cssTransitions ? e.$slides.eq(i).animate({
			opacity: 0,
			zIndex: e.options.zIndex - 2
		}, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({
			opacity: 0,
			zIndex: e.options.zIndex - 2
		}))
	}, e.prototype.filterSlides = e.prototype.slickFilter = function (i) {
		var e = this;
		null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit())
	}, e.prototype.focusHandler = function () {
		var e = this;
		e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (t) {
			t.stopImmediatePropagation();
			var o = i(this);
			setTimeout(function () {
				e.options.pauseOnFocus && (e.focussed = o.is(":focus"), e.autoPlay())
			}, 0)
		})
	}, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
		return this.currentSlide
	}, e.prototype.getDotCount = function () {
		var i = this,
			e = 0,
			t = 0,
			o = 0;
		if (!0 === i.options.infinite)
			if (i.slideCount <= i.options.slidesToShow) ++o;
			else
				for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
		else if (!0 === i.options.centerMode) o = i.slideCount;
		else if (i.options.asNavFor)
			for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
		else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
		return o - 1
	}, e.prototype.getLeft = function (i) {
		var e, t, o, s, n = this,
			r = 0;
		return n.slideOffset = 0, t = n.$slides.first().outerHeight(!0), !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = -1, !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)), r = t * n.options.slidesToShow * s), n.slideCount % n.options.slidesToScroll != 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1, r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth, r = (i + n.options.slidesToShow - n.slideCount) * t), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, r = 0), !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r, !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, e += (n.$list.width() - o.outerWidth()) / 2)), e
	}, e.prototype.getOption = e.prototype.slickGetOption = function (i) {
		return this.options[i]
	}, e.prototype.getNavigableIndexes = function () {
		var i, e = this,
			t = 0,
			o = 0,
			s = [];
		for (!1 === e.options.infinite ? i = e.slideCount : (t = -1 * e.options.slidesToScroll, o = -1 * e.options.slidesToScroll, i = 2 * e.slideCount); t < i;) s.push(t), t = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
		return s
	}, e.prototype.getSlick = function () {
		return this
	}, e.prototype.getSlideCount = function () {
		var e, t, o = this;
		return t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function (s, n) {
			if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft) return e = n, !1
		}), Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
	}, e.prototype.goTo = e.prototype.slickGoTo = function (i, e) {
		this.changeSlide({
			data: {
				message: "index",
				index: parseInt(i)
			}
		}, e)
	}, e.prototype.init = function (e) {
		var t = this;
		i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay())
	}, e.prototype.initADA = function () {
		var e = this,
			t = Math.ceil(e.slideCount / e.options.slidesToShow),
			o = e.getNavigableIndexes().filter(function (i) {
				return i >= 0 && i < e.slideCount
			});
		e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
			"aria-hidden": "true",
			tabindex: "-1"
		}).find("a, input, button, select").attr({
			tabindex: "-1"
		}), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (t) {
			var s = o.indexOf(t);
			i(this).attr({
				role: "tabpanel",
				id: "slick-slide" + e.instanceUid + t,
				tabindex: -1
			}), -1 !== s && i(this).attr({
				"aria-describedby": "slick-slide-control" + e.instanceUid + s
			})
		}), e.$dots.attr("role", "tablist").find("li").each(function (s) {
			var n = o[s];
			i(this).attr({
				role: "presentation"
			}), i(this).find("button").first().attr({
				role: "tab",
				id: "slick-slide-control" + e.instanceUid + s,
				"aria-controls": "slick-slide" + e.instanceUid + n,
				"aria-label": s + 1 + " of " + t,
				"aria-selected": null,
				tabindex: "-1"
			})
		}).eq(e.currentSlide).find("button").attr({
			"aria-selected": "true",
			tabindex: "0"
		}).end());
		for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++) e.$slides.eq(s).attr("tabindex", 0);
		e.activateADA()
	}, e.prototype.initArrowEvents = function () {
		var i = this;
		!0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {
			message: "previous"
		}, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", {
			message: "next"
		}, i.changeSlide), !0 === i.options.accessibility && (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler)))
	}, e.prototype.initDotEvents = function () {
		var e = this;
		!0 === e.options.dots && (i("li", e.$dots).on("click.slick", {
			message: "index"
		}, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1))
	}, e.prototype.initSlideEvents = function () {
		var e = this;
		e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)))
	}, e.prototype.initializeEvents = function () {
		var e = this;
		e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
			action: "start"
		}, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
			action: "move"
		}, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
			action: "end"
		}, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
			action: "end"
		}, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), i(document).on(e.visibilityChange, i.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)), i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)), i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), i(e.setPosition)
	}, e.prototype.initUI = function () {
		var i = this;
		!0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show()
	}, e.prototype.keyHandler = function (i) {
		var e = this;
		i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide({
			data: {
				message: !0 === e.options.rtl ? "next" : "previous"
			}
		}) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({
			data: {
				message: !0 === e.options.rtl ? "previous" : "next"
			}
		}))
	}, e.prototype.lazyLoad = function () {
		function e(e) {
			i("img[data-lazy]", e).each(function () {
				var e = i(this),
					t = i(this).attr("data-lazy"),
					o = i(this).attr("data-srcset"),
					s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
					r = document.createElement("img");
				r.onload = function () {
					e.animate({
						opacity: 0
					}, 100, function () {
						o && (e.attr("srcset", o), s && e.attr("sizes", s)), e.attr("src", t).animate({
							opacity: 1
						}, 200, function () {
							e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
						}), n.$slider.trigger("lazyLoaded", [n, e, t])
					})
				}, r.onerror = function () {
					e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e, t])
				}, r.src = t
			})
		}
		var t, o, s, n = this;
		if (!0 === n.options.centerMode ? !0 === n.options.infinite ? s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, s = Math.ceil(o + n.options.slidesToShow), !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)), t = n.$slider.find(".slick-slide").slice(o, s), "anticipated" === n.options.lazyLoad)
			for (var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++) r < 0 && (r = n.slideCount - 1), t = (t = t.add(d.eq(r))).add(d.eq(l)), r--, l++;
		e(t), n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow))
	}, e.prototype.loadSlider = function () {
		var i = this;
		i.setPosition(), i.$slideTrack.css({
			opacity: 1
		}), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad()
	}, e.prototype.next = e.prototype.slickNext = function () {
		this.changeSlide({
			data: {
				message: "next"
			}
		})
	}, e.prototype.orientationChange = function () {
		var i = this;
		i.checkResponsive(), i.setPosition()
	}, e.prototype.pause = e.prototype.slickPause = function () {
		var i = this;
		i.autoPlayClear(), i.paused = !0
	}, e.prototype.play = e.prototype.slickPlay = function () {
		var i = this;
		i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1
	}, e.prototype.postSlide = function (e) {
		var t = this;
		t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange && i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()))
	}, e.prototype.prev = e.prototype.slickPrev = function () {
		this.changeSlide({
			data: {
				message: "previous"
			}
		})
	}, e.prototype.preventDefault = function (i) {
		i.preventDefault()
	}, e.prototype.progressiveLazyLoad = function (e) {
		e = e || 1;
		var t, o, s, n, r, l = this,
			d = i("img[data-lazy]", l.$slider);
		d.length ? (t = d.first(), o = t.attr("data-lazy"), s = t.attr("data-srcset"), n = t.attr("data-sizes") || l.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function () {
			s && (t.attr("srcset", s), n && t.attr("sizes", n)), t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === l.options.adaptiveHeight && l.setPosition(), l.$slider.trigger("lazyLoaded", [l, t, o]), l.progressiveLazyLoad()
		}, r.onerror = function () {
			e < 3 ? setTimeout(function () {
				l.progressiveLazyLoad(e + 1)
			}, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), l.$slider.trigger("lazyLoadError", [l, t, o]), l.progressiveLazyLoad())
		}, r.src = o) : l.$slider.trigger("allImagesLoaded", [l])
	}, e.prototype.refresh = function (e) {
		var t, o, s = this;
		o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), t = s.currentSlide, s.destroy(!0), i.extend(s, s.initials, {
			currentSlide: t
		}), s.init(), e || s.changeSlide({
			data: {
				message: "index",
				index: t
			}
		}, !1)
	}, e.prototype.registerBreakpoints = function () {
		var e, t, o, s = this,
			n = s.options.responsive || null;
		if ("array" === i.type(n) && n.length) {
			s.respondTo = s.options.respondTo || "window";
			for (e in n)
				if (o = s.breakpoints.length - 1, n.hasOwnProperty(e)) {
					for (t = n[e].breakpoint; o >= 0;) s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;
					s.breakpoints.push(t), s.breakpointSettings[t] = n[e].settings
				} s.breakpoints.sort(function (i, e) {
				return s.options.mobileFirst ? i - e : e - i
			})
		}
	}, e.prototype.reinit = function () {
		var e = this;
		e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
	}, e.prototype.resize = function () {
		var e = this;
		i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function () {
			e.windowWidth = i(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
		}, 50))
	}, e.prototype.removeSlide = e.prototype.slickRemove = function (i, e, t) {
		var o = this;
		if (i = "boolean" == typeof i ? !0 === (e = i) ? 0 : o.slideCount - 1 : !0 === e ? --i : i, o.slideCount < 1 || i < 0 || i > o.slideCount - 1) return !1;
		o.unload(), !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit()
	}, e.prototype.setCSS = function (i) {
		var e, t, o = this,
			s = {};
		!0 === o.options.rtl && (i = -i), e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, !1 === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {}, !1 === o.cssTransitions ? (s[o.animType] = "translate(" + e + ", " + t + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)", o.$slideTrack.css(s)))
	}, e.prototype.setDimensions = function () {
		var i = this;
		!1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({
			padding: "0px " + i.options.centerPadding
		}) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), !0 === i.options.centerMode && i.$list.css({
			padding: i.options.centerPadding + " 0px"
		})), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
		var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
		!1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e)
	}, e.prototype.setFade = function () {
		var e, t = this;
		t.$slides.each(function (o, s) {
			e = t.slideWidth * o * -1, !0 === t.options.rtl ? i(s).css({
				position: "relative",
				right: e,
				top: 0,
				zIndex: t.options.zIndex - 2,
				opacity: 0
			}) : i(s).css({
				position: "relative",
				left: e,
				top: 0,
				zIndex: t.options.zIndex - 2,
				opacity: 0
			})
		}), t.$slides.eq(t.currentSlide).css({
			zIndex: t.options.zIndex - 1,
			opacity: 1
		})
	}, e.prototype.setHeight = function () {
		var i = this;
		if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
			var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
			i.$list.css("height", e)
		}
	}, e.prototype.setOption = e.prototype.slickSetOption = function () {
		var e, t, o, s, n, r = this,
			l = !1;
		if ("object" === i.type(arguments[0]) ? (o = arguments[0], l = arguments[1], n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0], s = arguments[1], l = arguments[2], "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")), "single" === n) r.options[o] = s;
		else if ("multiple" === n) i.each(o, function (i, e) {
			r.options[i] = e
		});
		else if ("responsive" === n)
			for (t in s)
				if ("array" !== i.type(r.options.responsive)) r.options.responsive = [s[t]];
				else {
					for (e = r.options.responsive.length - 1; e >= 0;) r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), e--;
					r.options.responsive.push(s[t])
				} l && (r.unload(), r.reinit())
	}, e.prototype.setPosition = function () {
		var i = this;
		i.setDimensions(), i.setHeight(), !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i])
	}, e.prototype.setProps = function () {
		var i = this,
			e = document.body.style;
		i.positionProp = !0 === i.options.vertical ? "top" : "left", "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === i.options.useCSS && (i.cssTransitions = !0), i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType
	}, e.prototype.setSlideClasses = function (i) {
		var e, t, o, s, n = this;
		if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(i).addClass("slick-current"), !0 === n.options.centerMode) {
			var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
			e = Math.floor(n.options.slidesToShow / 2), !0 === n.options.infinite && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i, t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(i).addClass("slick-center")
		} else i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = !0 === n.options.infinite ? n.options.slidesToShow + i : i, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
		"ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad()
	}, e.prototype.setupInfinite = function () {
		var e, t, o, s = this;
		if (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && (t = null, s.slideCount > s.options.slidesToShow)) {
			for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - o; e -= 1) t = e - 1, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
			for (e = 0; e < o + s.slideCount; e += 1) t = e, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
			s.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
				i(this).attr("id", "")
			})
		}
	}, e.prototype.interrupt = function (i) {
		var e = this;
		i || e.autoPlay(), e.interrupted = i
	}, e.prototype.selectHandler = function (e) {
		var t = this,
			o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide"),
			s = parseInt(o.attr("data-slick-index"));
		s || (s = 0), t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, !1, !0) : t.slideHandler(s)
	}, e.prototype.slideHandler = function (i, e, t) {
		var o, s, n, r, l, d = null,
			a = this;
		if (e = e || !1, !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === i))
			if (!1 === e && a.asNavFor(i), o = i, d = a.getLeft(o), r = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft, !1 === a.options.infinite && !1 === a.options.centerMode && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function () {
				a.postSlide(o)
			}) : a.postSlide(o));
			else if (!1 === a.options.infinite && !0 === a.options.centerMode && (i < 0 || i > a.slideCount - a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function () {
			a.postSlide(o)
		}) : a.postSlide(o));
		else {
			if (a.options.autoplay && clearInterval(a.autoPlayTimer), s = o < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : o - a.slideCount : o, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, s]), n = a.currentSlide, a.currentSlide = s, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide), a.updateDots(), a.updateArrows(), !0 === a.options.fade) return !0 !== t ? (a.fadeSlideOut(n), a.fadeSlide(s, function () {
				a.postSlide(s)
			})) : a.postSlide(s), void a.animateHeight();
			!0 !== t ? a.animateSlide(d, function () {
				a.postSlide(s)
			}) : a.postSlide(s)
		}
	}, e.prototype.startLoad = function () {
		var i = this;
		!0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading")
	}, e.prototype.swipeDirection = function () {
		var i, e, t, o, s = this;
		return i = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, t = Math.atan2(e, i), (o = Math.round(180 * t / Math.PI)) < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 ? !1 === s.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? !1 === s.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical"
	}, e.prototype.swipeEnd = function (i) {
		var e, t, o = this;
		if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1, !1;
		if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1;
		if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
			switch (t = o.swipeDirection()) {
				case "left":
				case "down":
					e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
					break;
				case "right":
				case "up":
					e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1
			}
			"vertical" != t && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [o, t]))
		} else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {})
	}, e.prototype.swipeHandler = function (i) {
		var e = this;
		if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), i.data.action) {
			case "start":
				e.swipeStart(i);
				break;
			case "move":
				e.swipeMove(i);
				break;
			case "end":
				e.swipeEnd(i)
		}
	}, e.prototype.swipeMove = function (i) {
		var e, t, o, s, n, r, l = this;
		return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null, !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide), l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX, l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY, l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))), !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0, !1) : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r), t = l.swipeDirection(), void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0, i.preventDefault()), s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1), !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1), o = l.touchObject.swipeLength, l.touchObject.edgeHit = !1, !1 === l.options.infinite && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction, l.touchObject.edgeHit = !0), !1 === l.options.vertical ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s, !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s), !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? (l.swipeLeft = null, !1) : void l.setCSS(l.swipeLeft))))
	}, e.prototype.swipeStart = function (i) {
		var e, t = this;
		if (t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow) return t.touchObject = {}, !1;
		void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, t.dragging = !0
	}, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
		var i = this;
		null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit())
	}, e.prototype.unload = function () {
		var e = this;
		i(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
	}, e.prototype.unslick = function (i) {
		var e = this;
		e.$slider.trigger("unslick", [e, i]), e.destroy()
	}, e.prototype.updateArrows = function () {
		var i = this;
		Math.floor(i.options.slidesToShow / 2), !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
	}, e.prototype.updateDots = function () {
		var i = this;
		null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"))
	}, e.prototype.visibility = function () {
		var i = this;
		i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1)
	}, i.fn.slick = function () {
		var i, t, o = this,
			s = arguments[0],
			n = Array.prototype.slice.call(arguments, 1),
			r = o.length;
		for (i = 0; i < r; i++)
			if ("object" == typeof s || void 0 === s ? o[i].slick = new e(o[i], s) : t = o[i].slick[s].apply(o[i].slick, n), void 0 !== t) return t;
		return o
	}
});


! function (t) {
	var e = -1,
		a = -1,
		o = function (t) {
			return parseFloat(t) || 0
		},
		i = function (e) {
			var a = t(e),
				i = null,
				n = [];
			return a.each(function () {
				var e = t(this),
					a = e.offset().top - o(e.css("margin-top")),
					r = n.length > 0 ? n[n.length - 1] : null;
				null === r ? n.push(e) : Math.floor(Math.abs(i - a)) <= 1 ? n[n.length - 1] = r.add(e) : n.push(e), i = a
			}), n
		},
		n = function (e) {
			var a = {
				byRow: !0,
				property: "height",
				target: null,
				remove: !1
			};
			return "object" == typeof e ? t.extend(a, e) : ("boolean" == typeof e ? a.byRow = e : "remove" === e && (a.remove = !0), a)
		},
		r = t.fn.matchHeight = function (e) {
			var a = n(e);
			if (a.remove) {
				var o = this;
				return this.css(a.property, ""), t.each(r._groups, function (t, e) {
					e.elements = e.elements.not(o)
				}), this
			}
			return this.length <= 1 && !a.target ? this : (r._groups.push({
				elements: this,
				options: a
			}), r._apply(this, a), this)
		};
	r.version = "master", r._groups = [], r._throttle = 80, r._maintainScroll = !1, r._beforeUpdate = null, r._afterUpdate = null, r._rows = i, r._parse = o, r._parseOptions = n, r._apply = function (e, a) {
		var s = n(a),
			h = t(e),
			c = [h],
			l = t(window).scrollTop(),
			p = t("html").outerHeight(!0),
			d = h.parents().filter(":hidden");
		return d.each(function () {
			var e = t(this);
			e.data("style-cache", e.attr("style"))
		}), d.css("display", "block"), s.byRow && !s.target && (h.each(function () {
			var e = t(this),
				a = e.css("display");
			"inline-block" !== a && "inline-flex" !== a && (a = "block"), e.data("style-cache", e.attr("style")), e.css({
				display: a,
				"padding-top": "0",
				"padding-bottom": "0",
				"margin-top": "0",
				"margin-bottom": "0",
				"border-top-width": "0",
				"border-bottom-width": "0",
				height: "100px",
				overflow: "hidden"
			})
		}), c = i(h), h.each(function () {
			var e = t(this);
			e.attr("style", e.data("style-cache") || "")
		})), t.each(c, function (e, a) {
			var i = t(a),
				n = 0;
			if (s.target) n = s.target.outerHeight(!1);
			else {
				if (s.byRow && i.length <= 1) return void i.css(s.property, "");
				i.each(function () {
					var e = t(this),
						a = e.css("display");
					"inline-block" !== a && "inline-flex" !== a && (a = "block");
					var o = {
						display: a
					};
					o[s.property] = "", e.css(o), e.outerHeight(!1) > n && (n = e.outerHeight(!1)), e.css("display", "")
				})
			}
			i.each(function () {
				var e = t(this),
					a = 0;
				s.target && e.is(s.target) || ("border-box" !== e.css("box-sizing") && (a += o(e.css("border-top-width")) + o(e.css("border-bottom-width")), a += o(e.css("padding-top")) + o(e.css("padding-bottom"))), e.css(s.property, n - a + "px"))
			})
		}), d.each(function () {
			var e = t(this);
			e.attr("style", e.data("style-cache") || null)
		}), r._maintainScroll && t(window).scrollTop(l / p * t("html").outerHeight(!0)), this
	}, r._applyDataApi = function () {
		var e = {};
		t("[data-match-height], [data-mh]").each(function () {
			var a = t(this),
				o = a.attr("data-mh") || a.attr("data-match-height");
			e[o] = o in e ? e[o].add(a) : a
		}), t.each(e, function () {
			this.matchHeight(!0)
		})
	};
	var s = function (e) {
		r._beforeUpdate && r._beforeUpdate(e, r._groups), t.each(r._groups, function () {
			r._apply(this.elements, this.options)
		}), r._afterUpdate && r._afterUpdate(e, r._groups)
	};
	r._update = function (o, i) {
		if (i && "resize" === i.type) {
			var n = t(window).width();
			if (n === e) return;
			e = n
		}
		o ? -1 === a && (a = setTimeout(function () {
			s(i), a = -1
		}, r._throttle)) : s(i)
	}, t(r._applyDataApi), t(window).bind("load", function (t) {
		r._update(!1, t)
	}), t(window).bind("resize orientationchange", function (t) {
		r._update(!0, t)
	})
}(jQuery);
(function ($) {
	$.fn.extend({
		rotaterator: function (options) {

			var defaults = {
				fadeSpeed: 500,
				pauseSpeed: 100,
				child: null
			};

			var options = $.extend(defaults, options);

			return this.each(function () {
				var o = options;
				var obj = $(this);
				var items = $(obj.children(), obj);
				items.each(function () {
					$(this).hide();
				})
				if (!o.child) {
					var next = $(obj).children(':first');
				} else {
					var next = o.child;
				}
				$(next).fadeIn(o.fadeSpeed, function () {
					$(next).delay(o.pauseSpeed).fadeOut(o.fadeSpeed, function () {
						var next = $(this).next();
						if (next.length == 0) {
							next = $(obj).children(':first');
						}
						$(obj).rotaterator({
							child: next,
							fadeSpeed: o.fadeSpeed,
							pauseSpeed: o.pauseSpeed
						});
					})
				});
			});
		}
	});
})(jQuery);

(function ($) {
	$.ajaxChimp = {
		responses: {
			"We have sent you a confirmation email": 0,
			"Please enter a value": 1,
			"An email address must contain a single @": 2,
			"The domain portion of the email address is invalid (the portion after the @: )": 3,
			"The username portion of the email address is invalid (the portion before the @: )": 4,
			"This email address looks fake or invalid. Please enter a real email address": 5
		},
		translations: {
			en: null
		},
		init: function (selector, options) {
			$(selector).ajaxChimp(options)
		}
	};
	$.fn.ajaxChimp = function (options) {
		$(this).each(function (i, elem) {
			var form = $(elem);
			var email = form.find("input[type=text]");
			var label = form.find("label[for=" + email.attr("id") + "]");
			var settings = $.extend({
				url: form.attr("action"),
				language: "en"
			}, options);
			var url = settings.url.replace("/post?", "/post-json?").concat("&c=?");
			form.attr("novalidate", "true");
			email.attr("name", "EMAIL");
			form.submit(function () {
				var msg;

				function successCallback(resp) {
					if (resp.result === "success") {
						msg = "We have sent you a confirmation email";
						label.removeClass("error").addClass("valid");
						email.removeClass("error").addClass("valid")
					} else {
						email.removeClass("valid").addClass("error");
						label.removeClass("valid").addClass("error");
						var index = -1;
						try {
							var parts = resp.msg.split(" - ", 2);
							if (parts[1] === undefined) {
								msg = resp.msg
							} else {
								var i = parseInt(parts[0], 10);
								if (i.toString() === parts[0]) {
									index = parts[0];
									msg = parts[1]
								} else {
									index = -1;
									msg = resp.msg
								}
							}
						} catch (e) {
							index = -1;
							msg = resp.msg
						}
					}
					if (settings.language !== "en" && $.ajaxChimp.responses[msg] !== undefined && $.ajaxChimp.translations && $.ajaxChimp.translations[settings.language] && $.ajaxChimp.translations[settings.language][$.ajaxChimp.responses[msg]]) {
						msg = $.ajaxChimp.translations[settings.language][$.ajaxChimp.responses[msg]]
					}
					label.html(msg);
					label.show(2e3);
					if (settings.callback) {
						settings.callback(resp)
					}
				}
				var data = {};
				var dataArray = form.serializeArray();
				$.each(dataArray, function (index, item) {
					data[item.name] = item.value
				});
				$.ajax({
					url: url,
					data: data,
					success: successCallback,
					dataType: "jsonp",
					error: function (resp, text) {
						console.log("mailchimp ajax submit error: " + text)
					}
				});
				var submitMsg = "Submitting...";
				if (settings.language !== "en" && $.ajaxChimp.translations && $.ajaxChimp.translations[settings.language] && $.ajaxChimp.translations[settings.language]["submit"]) {
					submitMsg = $.ajaxChimp.translations[settings.language]["submit"]
				}
				label.html(submitMsg).show(2e3);
				return false
			})
		});
		return this
	}
})(jQuery);


(function () {
	var ac = {
		frameRate: 350,
		animationTime: 700,
		stepSize: 45,
		pulseAlgorithm: true,
		pulseScale: 4,
		pulseNormalize: 1,
		accelerationDelta: 50,
		accelerationMax: 3,
		keyboardSupport: true,
		arrowScroll: 50,
		fixedBackground: true,
		excluded: ""
	};
	var I = ac;
	var G = false;
	var C = false;
	var m = {
		x: 0,
		y: 0
	};
	var b = false;
	var K = document.documentElement;
	var h;
	var R;
	var t;
	var ai = [];
	var i;
	var ad = /^Mac/.test(navigator.platform);
	var B = {
		left: 37,
		up: 38,
		right: 39,
		down: 40,
		spacebar: 32,
		pageup: 33,
		pagedown: 34,
		end: 35,
		home: 36
	};
	var T = {
		37: 1,
		38: 1,
		39: 1,
		40: 1
	};

	function am() {
		if (I.keyboardSupport) {
			k("keydown", H)
		}
	}

	function af() {
		if (b || !document.body) {
			return
		}
		b = true;
		var e = document.body;
		var ar = document.documentElement;
		var au = window.innerHeight;
		var at = e.scrollHeight;
		K = (document.compatMode.indexOf("CSS") >= 0) ? ar : e;
		h = e;
		am();
		if (top != self) {
			C = true
		} else {
			if (X && at > au && (e.offsetHeight <= au || ar.offsetHeight <= au)) {
				var ap = document.createElement("div");
				ap.style.cssText = "position:absolute; z-index:-10000; top:0; left:0; right:0; height:" + K.scrollHeight + "px";
				document.body.appendChild(ap);
				var an;
				t = function () {
					if (an) {
						return
					}
					an = setTimeout(function () {
						if (G) {
							return
						}
						ap.style.height = "0";
						ap.style.height = K.scrollHeight + "px";
						an = null
					}, 500)
				};
				setTimeout(t, 10);
				k("resize", t);
				var aq = {
					attributes: true,
					childList: true,
					characterData: false
				};
				R = new L(t);
				R.observe(e, aq);
				if (K.offsetHeight <= au) {
					var ao = document.createElement("div");
					ao.style.clear = "both";
					e.appendChild(ao)
				}
			}
		}
		if (!I.fixedBackground && !G) {
			e.style.backgroundAttachment = "scroll";
			ar.style.backgroundAttachment = "scroll"
		}
	}

	function d() {
		R && R.disconnect();
		a(S, u);
		a("mousedown", w);
		a("keydown", H);
		a("resize", t);
		a("load", af)
	}
	var V = [];
	var l = false;
	var v = Date.now();

	function ag(ap, ao, at) {
		M(ao, at);
		if (I.accelerationMax != 1) {
			var e = Date.now();
			var av = e - v;
			if (av < I.accelerationDelta) {
				var ar = (1 + (50 / av)) / 2;
				if (ar > 1) {
					ar = Math.min(ar, I.accelerationMax);
					ao *= ar;
					at *= ar
				}
			}
			v = Date.now()
		}
		V.push({
			x: ao,
			y: at,
			lastX: (ao < 0) ? 0.99 : -0.99,
			lastY: (at < 0) ? 0.99 : -0.99,
			start: Date.now()
		});
		if (l) {
			return
		}
		var au = D();
		var aq = (ap === au || ap === document.body);
		if (ap.$scrollBehavior == null && O(ap)) {
			ap.$scrollBehavior = ap.style.scrollBehavior;
			ap.style.scrollBehavior = "auto"
		}
		var an = function (ax) {
			var aw = Date.now();
			var aE = 0;
			var aD = 0;
			for (var az = 0; az < V.length; az++) {
				var aG = V[az];
				var aF = aw - aG.start;
				var ay = (aF >= I.animationTime);
				var aA = (ay) ? 1 : aF / I.animationTime;
				if (I.pulseAlgorithm) {
					aA = p(aA)
				}
				var aC = (aG.x * aA - aG.lastX) >> 0;
				var aB = (aG.y * aA - aG.lastY) >> 0;
				aE += aC;
				aD += aB;
				aG.lastX += aC;
				aG.lastY += aB;
				if (ay) {
					V.splice(az, 1);
					az--
				}
			}
			if (aq) {
				window.scrollBy(aE, aD)
			} else {
				if (aE) {
					ap.scrollLeft += aE
				}
				if (aD) {
					ap.scrollTop += aD
				}
			}
			if (!ao && !at) {
				V = []
			}
			if (V.length) {
				U(an, ap, (1000 / I.frameRate + 1))
			} else {
				l = false;
				if (ap.$scrollBehavior != null) {
					ap.style.scrollBehavior = ap.$scrollBehavior;
					ap.$scrollBehavior = null
				}
			}
		};
		U(an, ap, 0);
		l = true
	}

	function u(ap) {
		if (!b) {
			af()
		}
		var aq = ap.target;
		if (ap.defaultPrevented || ap.ctrlKey) {
			return true
		}
		if (s(h, "embed") || (s(aq, "embed") && /\.pdf/i.test(aq.src)) || s(h, "object") || aq.shadowRoot) {
			return true
		}
		var an = -ap.wheelDeltaX || ap.deltaX || 0;
		var e = -ap.wheelDeltaY || ap.deltaY || 0;
		if (ad) {
			if (ap.wheelDeltaX && A(ap.wheelDeltaX, 120)) {
				an = -120 * (ap.wheelDeltaX / Math.abs(ap.wheelDeltaX))
			}
			if (ap.wheelDeltaY && A(ap.wheelDeltaY, 120)) {
				e = -120 * (ap.wheelDeltaY / Math.abs(ap.wheelDeltaY))
			}
		}
		if (!an && !e) {
			e = -ap.wheelDelta || 0
		}
		if (ap.deltaMode === 1) {
			an *= 40;
			e *= 40
		}
		var ao = Y(aq);
		if (!ao) {
			if (C && ah) {
				Object.defineProperty(ap, "target", {
					value: window.frameElement
				});
				return parent.wheel(ap)
			}
			return true
		}
		if (ak(e)) {
			return true
		}
		if (Math.abs(an) > 1.2) {
			an *= I.stepSize / 120
		}
		if (Math.abs(e) > 1.2) {
			e *= I.stepSize / 120
		}
		ag(ao, an, e);
		ap.preventDefault();
		r()
	}

	function H(e) {
		var au = e.target;
		var aq = e.ctrlKey || e.altKey || e.metaKey || (e.shiftKey && e.keyCode !== B.spacebar);
		if (!document.body.contains(h)) {
			h = document.activeElement
		}
		var an = /^(textarea|select|embed|object)$/i;
		var ao = /^(button|submit|radio|checkbox|file|color|image)$/i;
		if (e.defaultPrevented || an.test(au.nodeName) || s(au, "input") && !ao.test(au.type) || s(h, "video") || z(e) || au.isContentEditable || aq) {
			return true
		}
		if ((s(au, "button") || s(au, "input") && ao.test(au.type)) && e.keyCode === B.spacebar) {
			return true
		}
		if (s(au, "input") && au.type == "radio" && T[e.keyCode]) {
			return true
		}
		var ap, ay = 0,
			aw = 0;
		var at = Y(h);
		if (!at) {
			return (C && ah) ? parent.keydown(e) : true
		}
		var ar = at.clientHeight;
		if (at == document.body) {
			ar = window.innerHeight
		}
		switch (e.keyCode) {
			case B.up:
				aw = -I.arrowScroll;
				break;
			case B.down:
				aw = I.arrowScroll;
				break;
			case B.spacebar:
				ap = e.shiftKey ? 1 : -1;
				aw = -ap * ar * 0.9;
				break;
			case B.pageup:
				aw = -ar * 0.9;
				break;
			case B.pagedown:
				aw = ar * 0.9;
				break;
			case B.home:
				if (at == document.body && document.scrollingElement) {
					at = document.scrollingElement
				}
				aw = -at.scrollTop;
				break;
			case B.end:
				var ax = at.scrollHeight - at.scrollTop;
				var av = ax - ar;
				aw = (av > 0) ? av + 10 : 0;
				break;
			case B.left:
				ay = -I.arrowScroll;
				break;
			case B.right:
				ay = I.arrowScroll;
				break;
			default:
				return true
		}
		ag(at, ay, aw);
		e.preventDefault();
		r()
	}

	function w(e) {
		h = e.target
	}
	var J = (function () {
		var e = 0;
		return function (an) {
			return an.uniqueID || (an.uniqueID = e++)
		}
	})();
	var o = {};
	var n = {};
	var ae;
	var al = {};

	function r() {
		clearTimeout(ae);
		ae = setInterval(function () {
			o = n = al = {}
		}, 1 * 1000)
	}

	function g(ap, ao, e) {
		var an = e ? o : n;
		for (var aq = ap.length; aq--;) {
			an[J(ap[aq])] = ao
		}
		return ao
	}

	function j(an, e) {
		return (e ? o : n)[J(an)]
	}

	function Y(ar) {
		var ao = [];
		var e = document.body;
		var an = K.scrollHeight;
		do {
			var aq = j(ar, false);
			if (aq) {
				return g(ao, aq)
			}
			ao.push(ar);
			if (an === ar.scrollHeight) {
				var at = W(K) && W(e);
				var ap = at || N(K);
				if (C && Z(K) || !C && ap) {
					return g(ao, D())
				}
			} else {
				if (Z(ar) && N(ar)) {
					return g(ao, ar)
				}
			}
		} while ((ar = ar.parentElement))
	}

	function Z(e) {
		return (e.clientHeight + 10 < e.scrollHeight)
	}

	function W(e) {
		var an = getComputedStyle(e, "").getPropertyValue("overflow-y");
		return (an !== "hidden")
	}

	function N(e) {
		var an = getComputedStyle(e, "").getPropertyValue("overflow-y");
		return (an === "scroll" || an === "auto")
	}

	function O(e) {
		var ao = J(e);
		if (al[ao] == null) {
			var an = getComputedStyle(e, "")["scroll-behavior"];
			al[ao] = ("smooth" == an)
		}
		return al[ao]
	}

	function k(ao, an, e) {
		window.addEventListener(ao, an, e || false)
	}

	function a(ao, an, e) {
		window.removeEventListener(ao, an, e || false)
	}

	function s(an, e) {
		return an && (an.nodeName || "").toLowerCase() === e.toLowerCase()
	}

	function M(e, an) {
		e = (e > 0) ? 1 : -1;
		an = (an > 0) ? 1 : -1;
		if (m.x !== e || m.y !== an) {
			m.x = e;
			m.y = an;
			V = [];
			v = 0
		}
	}
	if (window.localStorage && localStorage.SS_deltaBuffer) {
		try {
			ai = localStorage.SS_deltaBuffer.split(",")
		} catch (aj) {}
	}

	function ak(e) {
		if (!e) {
			return
		}
		if (!ai.length) {
			ai = [e, e, e]
		}
		e = Math.abs(e);
		ai.push(e);
		ai.shift();
		clearTimeout(i);
		i = setTimeout(function () {
			try {
				localStorage.SS_deltaBuffer = ai.join(",")
			} catch (ap) {}
		}, 1000);
		var an = e > 120 && F(e);
		var ao = !F(120) && !F(100) && !an;
		if (e < 50) {
			return true
		}
		return ao
	}

	function A(an, e) {
		return (Math.floor(an / e) == an / e)
	}

	function F(e) {
		return (A(ai[0], e) && A(ai[1], e) && A(ai[2], e))
	}

	function z(ao) {
		var an = ao.target;
		var e = false;
		if (document.URL.indexOf("www.youtube.com/watch") != -1) {
			do {
				e = (an.classList && an.classList.contains("html5-video-controls"));
				if (e) {
					break
				}
			} while ((an = an.parentNode))
		}
		return e
	}
	var U = (function () {
		return (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (ao, an, e) {
			window.setTimeout(ao, e || (1000 / 60))
		})
	})();
	var L = (window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver);
	var D = (function () {
		var e = document.scrollingElement;
		return function () {
			if (!e) {
				var ap = document.createElement("div");
				ap.style.cssText = "height:10000px;width:1px;";
				document.body.appendChild(ap);
				var ao = document.body.scrollTop;
				var an = document.documentElement.scrollTop;
				window.scrollBy(0, 3);
				if (document.body.scrollTop != ao) {
					(e = document.body)
				} else {
					(e = document.documentElement)
				}
				window.scrollBy(0, -3);
				document.body.removeChild(ap)
			}
			return e
		}
	})();

	function ab(e) {
		var ao, ap, an;
		e = e * I.pulseScale;
		if (e < 1) {
			ao = e - (1 - Math.exp(-e))
		} else {
			ap = Math.exp(-1);
			e -= 1;
			an = 1 - Math.exp(-e);
			ao = ap + (an * (1 - ap))
		}
		return ao * I.pulseNormalize
	}

	function p(e) {
		if (e >= 1) {
			return 1
		}
		if (e <= 0) {
			return 0
		}
		if (I.pulseNormalize == 1) {
			I.pulseNormalize /= ab(1)
		}
		return ab(e)
	}
	var Q = window.navigator.userAgent;
	var aa = /Edge/.test(Q);
	var ah = /chrome/i.test(Q) && !aa;
	var f = /safari/i.test(Q) && !aa;
	var c = /firefox/i.test(Q);
	var P = /mobile/i.test(Q);
	var y = /Windows NT 6.1/i.test(Q) && /rv:11/i.test(Q);
	var X = f && (/Version\/8/i.test(Q) || /Version\/9/i.test(Q));
	var x = false;
	try {
		window.addEventListener("test", null, Object.defineProperty({}, "passive", {
			get: function () {
				x = true
			}
		}))
	} catch (aj) {}
	var E = x ? {
		passive: false
	} : false;
	var S = "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";
	if (S) {
		k(S, u, E);
		k("mousedown", w);
		k("load", af)
	}

	function q(an) {
		for (var e in an) {
			if (ac.hasOwnProperty(e)) {
				I[e] = an[e]
			}
		}
	}
	q.destroy = d;
	if (window.SmoothScrollOptions) {
		q(window.SmoothScrollOptions)
	}
	if (typeof define === "function" && define.amd) {
		define(function () {
			return q
		})
	} else {
		if ("object" == typeof exports) {
			module.exports = q
		} else {
			window.SmoothScroll = q
		}
	}
})();





! function (e, t) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Swiper = t()
}(this, function () {
	"use strict";
	var f = "undefined" == typeof document ? {
			body: {},
			addEventListener: function () {},
			removeEventListener: function () {},
			activeElement: {
				blur: function () {},
				nodeName: ""
			},
			querySelector: function () {
				return null
			},
			querySelectorAll: function () {
				return []
			},
			getElementById: function () {
				return null
			},
			createEvent: function () {
				return {
					initEvent: function () {}
				}
			},
			createElement: function () {
				return {
					children: [],
					childNodes: [],
					style: {},
					setAttribute: function () {},
					getElementsByTagName: function () {
						return []
					}
				}
			},
			location: {
				hash: ""
			}
		} : document,
		Y = "undefined" == typeof window ? {
			document: f,
			navigator: {
				userAgent: ""
			},
			location: {},
			history: {},
			CustomEvent: function () {
				return this
			},
			addEventListener: function () {},
			removeEventListener: function () {},
			getComputedStyle: function () {
				return {
					getPropertyValue: function () {
						return ""
					}
				}
			},
			Image: function () {},
			Date: function () {},
			screen: {},
			setTimeout: function () {},
			clearTimeout: function () {}
		} : window,
		l = function (e) {
			for (var t = 0; t < e.length; t += 1) this[t] = e[t];
			return this.length = e.length, this
		};

	function L(e, t) {
		var a = [],
			i = 0;
		if (e && !t && e instanceof l) return e;
		if (e)
			if ("string" == typeof e) {
				var s, r, n = e.trim();
				if (0 <= n.indexOf("<") && 0 <= n.indexOf(">")) {
					var o = "div";
					for (0 === n.indexOf("<li") && (o = "ul"), 0 === n.indexOf("<tr") && (o = "tbody"), 0 !== n.indexOf("<td") && 0 !== n.indexOf("<th") || (o = "tr"), 0 === n.indexOf("<tbody") && (o = "table"), 0 === n.indexOf("<option") && (o = "select"), (r = f.createElement(o)).innerHTML = n, i = 0; i < r.childNodes.length; i += 1) a.push(r.childNodes[i])
				} else
					for (s = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || f).querySelectorAll(e.trim()) : [f.getElementById(e.trim().split("#")[1])], i = 0; i < s.length; i += 1) s[i] && a.push(s[i])
			} else if (e.nodeType || e === Y || e === f) a.push(e);
		else if (0 < e.length && e[0].nodeType)
			for (i = 0; i < e.length; i += 1) a.push(e[i]);
		return new l(a)
	}

	function r(e) {
		for (var t = [], a = 0; a < e.length; a += 1) - 1 === t.indexOf(e[a]) && t.push(e[a]);
		return t
	}
	L.fn = l.prototype, L.Class = l, L.Dom7 = l;
	var t = {
		addClass: function (e) {
			if (void 0 === e) return this;
			for (var t = e.split(" "), a = 0; a < t.length; a += 1)
				for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.add(t[a]);
			return this
		},
		removeClass: function (e) {
			for (var t = e.split(" "), a = 0; a < t.length; a += 1)
				for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.remove(t[a]);
			return this
		},
		hasClass: function (e) {
			return !!this[0] && this[0].classList.contains(e)
		},
		toggleClass: function (e) {
			for (var t = e.split(" "), a = 0; a < t.length; a += 1)
				for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.toggle(t[a]);
			return this
		},
		attr: function (e, t) {
			var a = arguments;
			if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
			for (var i = 0; i < this.length; i += 1)
				if (2 === a.length) this[i].setAttribute(e, t);
				else
					for (var s in e) this[i][s] = e[s], this[i].setAttribute(s, e[s]);
			return this
		},
		removeAttr: function (e) {
			for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
			return this
		},
		data: function (e, t) {
			var a;
			if (void 0 !== t) {
				for (var i = 0; i < this.length; i += 1)(a = this[i]).dom7ElementDataStorage || (a.dom7ElementDataStorage = {}), a.dom7ElementDataStorage[e] = t;
				return this
			}
			if (a = this[0]) {
				if (a.dom7ElementDataStorage && e in a.dom7ElementDataStorage) return a.dom7ElementDataStorage[e];
				var s = a.getAttribute("data-" + e);
				return s || void 0
			}
		},
		transform: function (e) {
			for (var t = 0; t < this.length; t += 1) {
				var a = this[t].style;
				a.webkitTransform = e, a.transform = e
			}
			return this
		},
		transition: function (e) {
			"string" != typeof e && (e += "ms");
			for (var t = 0; t < this.length; t += 1) {
				var a = this[t].style;
				a.webkitTransitionDuration = e, a.transitionDuration = e
			}
			return this
		},
		on: function () {
			for (var e, t = [], a = arguments.length; a--;) t[a] = arguments[a];
			var i = t[0],
				r = t[1],
				n = t[2],
				s = t[3];

			function o(e) {
				var t = e.target;
				if (t) {
					var a = e.target.dom7EventData || [];
					if (a.indexOf(e) < 0 && a.unshift(e), L(t).is(r)) n.apply(t, a);
					else
						for (var i = L(t).parents(), s = 0; s < i.length; s += 1) L(i[s]).is(r) && n.apply(i[s], a)
				}
			}

			function l(e) {
				var t = e && e.target && e.target.dom7EventData || [];
				t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t)
			}
			"function" == typeof t[1] && (i = (e = t)[0], n = e[1], s = e[2], r = void 0), s || (s = !1);
			for (var d, p = i.split(" "), c = 0; c < this.length; c += 1) {
				var u = this[c];
				if (r)
					for (d = 0; d < p.length; d += 1) {
						var h = p[d];
						u.dom7LiveListeners || (u.dom7LiveListeners = {}), u.dom7LiveListeners[h] || (u.dom7LiveListeners[h] = []), u.dom7LiveListeners[h].push({
							listener: n,
							proxyListener: o
						}), u.addEventListener(h, o, s)
					} else
						for (d = 0; d < p.length; d += 1) {
							var v = p[d];
							u.dom7Listeners || (u.dom7Listeners = {}), u.dom7Listeners[v] || (u.dom7Listeners[v] = []), u.dom7Listeners[v].push({
								listener: n,
								proxyListener: l
							}), u.addEventListener(v, l, s)
						}
			}
			return this
		},
		off: function () {
			for (var e, t = [], a = arguments.length; a--;) t[a] = arguments[a];
			var i = t[0],
				s = t[1],
				r = t[2],
				n = t[3];
			"function" == typeof t[1] && (i = (e = t)[0], r = e[1], n = e[2], s = void 0), n || (n = !1);
			for (var o = i.split(" "), l = 0; l < o.length; l += 1)
				for (var d = o[l], p = 0; p < this.length; p += 1) {
					var c = this[p],
						u = void 0;
					if (!s && c.dom7Listeners ? u = c.dom7Listeners[d] : s && c.dom7LiveListeners && (u = c.dom7LiveListeners[d]), u && u.length)
						for (var h = u.length - 1; 0 <= h; h -= 1) {
							var v = u[h];
							r && v.listener === r ? (c.removeEventListener(d, v.proxyListener, n), u.splice(h, 1)) : r || (c.removeEventListener(d, v.proxyListener, n), u.splice(h, 1))
						}
				}
			return this
		},
		trigger: function () {
			for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
			for (var a = e[0].split(" "), i = e[1], s = 0; s < a.length; s += 1)
				for (var r = a[s], n = 0; n < this.length; n += 1) {
					var o = this[n],
						l = void 0;
					try {
						l = new Y.CustomEvent(r, {
							detail: i,
							bubbles: !0,
							cancelable: !0
						})
					} catch (e) {
						(l = f.createEvent("Event")).initEvent(r, !0, !0), l.detail = i
					}
					o.dom7EventData = e.filter(function (e, t) {
						return 0 < t
					}), o.dispatchEvent(l), o.dom7EventData = [], delete o.dom7EventData
				}
			return this
		},
		transitionEnd: function (t) {
			var a, i = ["webkitTransitionEnd", "transitionend"],
				s = this;

			function r(e) {
				if (e.target === this)
					for (t.call(this, e), a = 0; a < i.length; a += 1) s.off(i[a], r)
			}
			if (t)
				for (a = 0; a < i.length; a += 1) s.on(i[a], r);
			return this
		},
		outerWidth: function (e) {
			if (0 < this.length) {
				if (e) {
					var t = this.styles();
					return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
				}
				return this[0].offsetWidth
			}
			return null
		},
		outerHeight: function (e) {
			if (0 < this.length) {
				if (e) {
					var t = this.styles();
					return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
				}
				return this[0].offsetHeight
			}
			return null
		},
		offset: function () {
			if (0 < this.length) {
				var e = this[0],
					t = e.getBoundingClientRect(),
					a = f.body,
					i = e.clientTop || a.clientTop || 0,
					s = e.clientLeft || a.clientLeft || 0,
					r = e === Y ? Y.scrollY : e.scrollTop,
					n = e === Y ? Y.scrollX : e.scrollLeft;
				return {
					top: t.top + r - i,
					left: t.left + n - s
				}
			}
			return null
		},
		css: function (e, t) {
			var a;
			if (1 === arguments.length) {
				if ("string" != typeof e) {
					for (a = 0; a < this.length; a += 1)
						for (var i in e) this[a].style[i] = e[i];
					return this
				}
				if (this[0]) return Y.getComputedStyle(this[0], null).getPropertyValue(e)
			}
			if (2 === arguments.length && "string" == typeof e) {
				for (a = 0; a < this.length; a += 1) this[a].style[e] = t;
				return this
			}
			return this
		},
		each: function (e) {
			if (!e) return this;
			for (var t = 0; t < this.length; t += 1)
				if (!1 === e.call(this[t], t, this[t])) return this;
			return this
		},
		html: function (e) {
			if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
			for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
			return this
		},
		text: function (e) {
			if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
			for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
			return this
		},
		is: function (e) {
			var t, a, i = this[0];
			if (!i || void 0 === e) return !1;
			if ("string" == typeof e) {
				if (i.matches) return i.matches(e);
				if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
				if (i.msMatchesSelector) return i.msMatchesSelector(e);
				for (t = L(e), a = 0; a < t.length; a += 1)
					if (t[a] === i) return !0;
				return !1
			}
			if (e === f) return i === f;
			if (e === Y) return i === Y;
			if (e.nodeType || e instanceof l) {
				for (t = e.nodeType ? [e] : e, a = 0; a < t.length; a += 1)
					if (t[a] === i) return !0;
				return !1
			}
			return !1
		},
		index: function () {
			var e, t = this[0];
			if (t) {
				for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
				return e
			}
		},
		eq: function (e) {
			if (void 0 === e) return this;
			var t, a = this.length;
			return new l(a - 1 < e ? [] : e < 0 ? (t = a + e) < 0 ? [] : [this[t]] : [this[e]])
		},
		append: function () {
			for (var e, t = [], a = arguments.length; a--;) t[a] = arguments[a];
			for (var i = 0; i < t.length; i += 1) {
				e = t[i];
				for (var s = 0; s < this.length; s += 1)
					if ("string" == typeof e) {
						var r = f.createElement("div");
						for (r.innerHTML = e; r.firstChild;) this[s].appendChild(r.firstChild)
					} else if (e instanceof l)
					for (var n = 0; n < e.length; n += 1) this[s].appendChild(e[n]);
				else this[s].appendChild(e)
			}
			return this
		},
		prepend: function (e) {
			var t, a, i = this;
			for (t = 0; t < this.length; t += 1)
				if ("string" == typeof e) {
					var s = f.createElement("div");
					for (s.innerHTML = e, a = s.childNodes.length - 1; 0 <= a; a -= 1) i[t].insertBefore(s.childNodes[a], i[t].childNodes[0])
				} else if (e instanceof l)
				for (a = 0; a < e.length; a += 1) i[t].insertBefore(e[a], i[t].childNodes[0]);
			else i[t].insertBefore(e, i[t].childNodes[0]);
			return this
		},
		next: function (e) {
			return 0 < this.length ? e ? this[0].nextElementSibling && L(this[0].nextElementSibling).is(e) ? new l([this[0].nextElementSibling]) : new l([]) : this[0].nextElementSibling ? new l([this[0].nextElementSibling]) : new l([]) : new l([])
		},
		nextAll: function (e) {
			var t = [],
				a = this[0];
			if (!a) return new l([]);
			for (; a.nextElementSibling;) {
				var i = a.nextElementSibling;
				e ? L(i).is(e) && t.push(i) : t.push(i), a = i
			}
			return new l(t)
		},
		prev: function (e) {
			if (0 < this.length) {
				var t = this[0];
				return e ? t.previousElementSibling && L(t.previousElementSibling).is(e) ? new l([t.previousElementSibling]) : new l([]) : t.previousElementSibling ? new l([t.previousElementSibling]) : new l([])
			}
			return new l([])
		},
		prevAll: function (e) {
			var t = [],
				a = this[0];
			if (!a) return new l([]);
			for (; a.previousElementSibling;) {
				var i = a.previousElementSibling;
				e ? L(i).is(e) && t.push(i) : t.push(i), a = i
			}
			return new l(t)
		},
		parent: function (e) {
			for (var t = [], a = 0; a < this.length; a += 1) null !== this[a].parentNode && (e ? L(this[a].parentNode).is(e) && t.push(this[a].parentNode) : t.push(this[a].parentNode));
			return L(r(t))
		},
		parents: function (e) {
			for (var t = [], a = 0; a < this.length; a += 1)
				for (var i = this[a].parentNode; i;) e ? L(i).is(e) && t.push(i) : t.push(i), i = i.parentNode;
			return L(r(t))
		},
		closest: function (e) {
			var t = this;
			return void 0 === e ? new l([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
		},
		find: function (e) {
			for (var t = [], a = 0; a < this.length; a += 1)
				for (var i = this[a].querySelectorAll(e), s = 0; s < i.length; s += 1) t.push(i[s]);
			return new l(t)
		},
		children: function (e) {
			for (var t = [], a = 0; a < this.length; a += 1)
				for (var i = this[a].childNodes, s = 0; s < i.length; s += 1) e ? 1 === i[s].nodeType && L(i[s]).is(e) && t.push(i[s]) : 1 === i[s].nodeType && t.push(i[s]);
			return new l(r(t))
		},
		remove: function () {
			for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
			return this
		},
		add: function () {
			for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
			var a, i;
			for (a = 0; a < e.length; a += 1) {
				var s = L(e[a]);
				for (i = 0; i < s.length; i += 1) this[this.length] = s[i], this.length += 1
			}
			return this
		},
		styles: function () {
			return this[0] ? Y.getComputedStyle(this[0], null) : {}
		}
	};
	Object.keys(t).forEach(function (e) {
		L.fn[e] = t[e]
	});
	var e, a, i, V = {
			deleteProps: function (e) {
				var t = e;
				Object.keys(t).forEach(function (e) {
					try {
						t[e] = null
					} catch (e) {}
					try {
						delete t[e]
					} catch (e) {}
				})
			},
			nextTick: function (e, t) {
				return void 0 === t && (t = 0), setTimeout(e, t)
			},
			now: function () {
				return Date.now()
			},
			getTranslate: function (e, t) {
				var a, i, s;
				void 0 === t && (t = "x");
				var r = Y.getComputedStyle(e, null);
				return Y.WebKitCSSMatrix ? (6 < (i = r.transform || r.webkitTransform).split(",").length && (i = i.split(", ").map(function (e) {
					return e.replace(",", ".")
				}).join(", ")), s = new Y.WebKitCSSMatrix("none" === i ? "" : i)) : a = (s = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (i = Y.WebKitCSSMatrix ? s.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = Y.WebKitCSSMatrix ? s.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0
			},
			parseUrlQuery: function (e) {
				var t, a, i, s, r = {},
					n = e || Y.location.href;
				if ("string" == typeof n && n.length)
					for (s = (a = (n = -1 < n.indexOf("?") ? n.replace(/\S*\?/, "") : "").split("&").filter(function (e) {
							return "" !== e
						})).length, t = 0; t < s; t += 1) i = a[t].replace(/#\S+/g, "").split("="), r[decodeURIComponent(i[0])] = void 0 === i[1] ? void 0 : decodeURIComponent(i[1]) || "";
				return r
			},
			isObject: function (e) {
				return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
			},
			extend: function () {
				for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
				for (var a = Object(e[0]), i = 1; i < e.length; i += 1) {
					var s = e[i];
					if (null != s)
						for (var r = Object.keys(Object(s)), n = 0, o = r.length; n < o; n += 1) {
							var l = r[n],
								d = Object.getOwnPropertyDescriptor(s, l);
							void 0 !== d && d.enumerable && (V.isObject(a[l]) && V.isObject(s[l]) ? V.extend(a[l], s[l]) : !V.isObject(a[l]) && V.isObject(s[l]) ? (a[l] = {}, V.extend(a[l], s[l])) : a[l] = s[l])
						}
				}
				return a
			}
		},
		R = (i = f.createElement("div"), {
			touch: Y.Modernizr && !0 === Y.Modernizr.touch || !!("ontouchstart" in Y || Y.DocumentTouch && f instanceof Y.DocumentTouch),
			pointerEvents: !(!Y.navigator.pointerEnabled && !Y.PointerEvent),
			prefixedPointerEvents: !!Y.navigator.msPointerEnabled,
			transition: (a = i.style, "transition" in a || "webkitTransition" in a || "MozTransition" in a),
			transforms3d: Y.Modernizr && !0 === Y.Modernizr.csstransforms3d || (e = i.style, "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e),
			flexbox: function () {
				for (var e = i.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), a = 0; a < t.length; a += 1)
					if (t[a] in e) return !0;
				return !1
			}(),
			observer: "MutationObserver" in Y || "WebkitMutationObserver" in Y,
			passiveListener: function () {
				var e = !1;
				try {
					var t = Object.defineProperty({}, "passive", {
						get: function () {
							e = !0
						}
					});
					Y.addEventListener("testPassiveListener", null, t)
				} catch (e) {}
				return e
			}(),
			gestures: "ongesturestart" in Y
		}),
		s = function (e) {
			void 0 === e && (e = {});
			var t = this;
			t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function (e) {
				t.on(e, t.params.on[e])
			})
		},
		n = {
			components: {
				configurable: !0
			}
		};
	s.prototype.on = function (e, t, a) {
		var i = this;
		if ("function" != typeof t) return i;
		var s = a ? "unshift" : "push";
		return e.split(" ").forEach(function (e) {
			i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][s](t)
		}), i
	}, s.prototype.once = function (i, s, e) {
		var r = this;
		if ("function" != typeof s) return r;
		return r.on(i, function e() {
			for (var t = [], a = arguments.length; a--;) t[a] = arguments[a];
			s.apply(r, t), r.off(i, e)
		}, e)
	}, s.prototype.off = function (e, i) {
		var s = this;
		return s.eventsListeners && e.split(" ").forEach(function (a) {
			void 0 === i ? s.eventsListeners[a] = [] : s.eventsListeners[a] && s.eventsListeners[a].length && s.eventsListeners[a].forEach(function (e, t) {
				e === i && s.eventsListeners[a].splice(t, 1)
			})
		}), s
	}, s.prototype.emit = function () {
		for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
		var a, i, s, r = this;
		return r.eventsListeners && ("string" == typeof e[0] || Array.isArray(e[0]) ? (a = e[0], i = e.slice(1, e.length), s = r) : (a = e[0].events, i = e[0].data, s = e[0].context || r), (Array.isArray(a) ? a : a.split(" ")).forEach(function (e) {
			if (r.eventsListeners && r.eventsListeners[e]) {
				var t = [];
				r.eventsListeners[e].forEach(function (e) {
					t.push(e)
				}), t.forEach(function (e) {
					e.apply(s, i)
				})
			}
		})), r
	}, s.prototype.useModulesParams = function (a) {
		var i = this;
		i.modules && Object.keys(i.modules).forEach(function (e) {
			var t = i.modules[e];
			t.params && V.extend(a, t.params)
		})
	}, s.prototype.useModules = function (i) {
		void 0 === i && (i = {});
		var s = this;
		s.modules && Object.keys(s.modules).forEach(function (e) {
			var a = s.modules[e],
				t = i[e] || {};
			a.instance && Object.keys(a.instance).forEach(function (e) {
				var t = a.instance[e];
				s[e] = "function" == typeof t ? t.bind(s) : t
			}), a.on && s.on && Object.keys(a.on).forEach(function (e) {
				s.on(e, a.on[e])
			}), a.create && a.create.bind(s)(t)
		})
	}, n.components.set = function (e) {
		this.use && this.use(e)
	}, s.installModule = function (t) {
		for (var e = [], a = arguments.length - 1; 0 < a--;) e[a] = arguments[a + 1];
		var i = this;
		i.prototype.modules || (i.prototype.modules = {});
		var s = t.name || Object.keys(i.prototype.modules).length + "_" + V.now();
		return (i.prototype.modules[s] = t).proto && Object.keys(t.proto).forEach(function (e) {
			i.prototype[e] = t.proto[e]
		}), t.static && Object.keys(t.static).forEach(function (e) {
			i[e] = t.static[e]
		}), t.install && t.install.apply(i, e), i
	}, s.use = function (e) {
		for (var t = [], a = arguments.length - 1; 0 < a--;) t[a] = arguments[a + 1];
		var i = this;
		return Array.isArray(e) ? (e.forEach(function (e) {
			return i.installModule(e)
		}), i) : i.installModule.apply(i, [e].concat(t))
	}, Object.defineProperties(s, n);
	var o = {
		updateSize: function () {
			var e, t, a = this,
				i = a.$el;
			e = void 0 !== a.params.width ? a.params.width : i[0].clientWidth, t = void 0 !== a.params.height ? a.params.height : i[0].clientHeight, 0 === e && a.isHorizontal() || 0 === t && a.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), V.extend(a, {
				width: e,
				height: t,
				size: a.isHorizontal() ? e : t
			}))
		},
		updateSlides: function () {
			var e = this,
				t = e.params,
				a = e.$wrapperEl,
				i = e.size,
				s = e.rtlTranslate,
				r = e.wrongRTL,
				n = e.virtual && t.virtual.enabled,
				o = n ? e.virtual.slides.length : e.slides.length,
				l = a.children("." + e.params.slideClass),
				d = n ? e.virtual.slides.length : l.length,
				p = [],
				c = [],
				u = [],
				h = t.slidesOffsetBefore;
			"function" == typeof h && (h = t.slidesOffsetBefore.call(e));
			var v = t.slidesOffsetAfter;
			"function" == typeof v && (v = t.slidesOffsetAfter.call(e));
			var f = e.snapGrid.length,
				m = e.snapGrid.length,
				g = t.spaceBetween,
				b = -h,
				w = 0,
				y = 0;
			if (void 0 !== i) {
				var x, T;
				"string" == typeof g && 0 <= g.indexOf("%") && (g = parseFloat(g.replace("%", "")) / 100 * i), e.virtualSize = -g, s ? l.css({
					marginLeft: "",
					marginTop: ""
				}) : l.css({
					marginRight: "",
					marginBottom: ""
				}), 1 < t.slidesPerColumn && (x = Math.floor(d / t.slidesPerColumn) === d / e.params.slidesPerColumn ? d : Math.ceil(d / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (x = Math.max(x, t.slidesPerView * t.slidesPerColumn)));
				for (var E, S = t.slidesPerColumn, C = x / S, M = C - (t.slidesPerColumn * C - d), k = 0; k < d; k += 1) {
					T = 0;
					var z = l.eq(k);
					if (1 < t.slidesPerColumn) {
						var P = void 0,
							$ = void 0,
							L = void 0;
						"column" === t.slidesPerColumnFill ? (L = k - ($ = Math.floor(k / S)) * S, (M < $ || $ === M && L === S - 1) && S <= (L += 1) && (L = 0, $ += 1), P = $ + L * x / S, z.css({
							"-webkit-box-ordinal-group": P,
							"-moz-box-ordinal-group": P,
							"-ms-flex-order": P,
							"-webkit-order": P,
							order: P
						})) : $ = k - (L = Math.floor(k / C)) * C, z.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== L && t.spaceBetween && t.spaceBetween + "px").attr("data-swiper-column", $).attr("data-swiper-row", L)
					}
					if ("none" !== z.css("display")) {
						if ("auto" === t.slidesPerView) {
							var I = Y.getComputedStyle(z[0], null),
								D = z[0].style.transform,
								O = z[0].style.webkitTransform;
							D && (z[0].style.transform = "none"), O && (z[0].style.webkitTransform = "none"), T = t.roundLengths ? e.isHorizontal() ? z.outerWidth(!0) : z.outerHeight(!0) : e.isHorizontal() ? z[0].getBoundingClientRect().width + parseFloat(I.getPropertyValue("margin-left")) + parseFloat(I.getPropertyValue("margin-right")) : z[0].getBoundingClientRect().height + parseFloat(I.getPropertyValue("margin-top")) + parseFloat(I.getPropertyValue("margin-bottom")), D && (z[0].style.transform = D), O && (z[0].style.webkitTransform = O), t.roundLengths && (T = Math.floor(T))
						} else T = (i - (t.slidesPerView - 1) * g) / t.slidesPerView, t.roundLengths && (T = Math.floor(T)), l[k] && (e.isHorizontal() ? l[k].style.width = T + "px" : l[k].style.height = T + "px");
						l[k] && (l[k].swiperSlideSize = T), u.push(T), t.centeredSlides ? (b = b + T / 2 + w / 2 + g, 0 === w && 0 !== k && (b = b - i / 2 - g), 0 === k && (b = b - i / 2 - g), Math.abs(b) < .001 && (b = 0), t.roundLengths && (b = Math.floor(b)), y % t.slidesPerGroup == 0 && p.push(b), c.push(b)) : (t.roundLengths && (b = Math.floor(b)), y % t.slidesPerGroup == 0 && p.push(b), c.push(b), b = b + T + g), e.virtualSize += T + g, w = T, y += 1
					}
				}
				if (e.virtualSize = Math.max(e.virtualSize, i) + v, s && r && ("slide" === t.effect || "coverflow" === t.effect) && a.css({
						width: e.virtualSize + t.spaceBetween + "px"
					}), R.flexbox && !t.setWrapperSize || (e.isHorizontal() ? a.css({
						width: e.virtualSize + t.spaceBetween + "px"
					}) : a.css({
						height: e.virtualSize + t.spaceBetween + "px"
					})), 1 < t.slidesPerColumn && (e.virtualSize = (T + t.spaceBetween) * x, e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween, e.isHorizontal() ? a.css({
						width: e.virtualSize + t.spaceBetween + "px"
					}) : a.css({
						height: e.virtualSize + t.spaceBetween + "px"
					}), t.centeredSlides)) {
					E = [];
					for (var A = 0; A < p.length; A += 1) {
						var H = p[A];
						t.roundLengths && (H = Math.floor(H)), p[A] < e.virtualSize + p[0] && E.push(H)
					}
					p = E
				}
				if (!t.centeredSlides) {
					E = [];
					for (var B = 0; B < p.length; B += 1) {
						var G = p[B];
						t.roundLengths && (G = Math.floor(G)), p[B] <= e.virtualSize - i && E.push(G)
					}
					p = E, 1 < Math.floor(e.virtualSize - i) - Math.floor(p[p.length - 1]) && p.push(e.virtualSize - i)
				}
				if (0 === p.length && (p = [0]), 0 !== t.spaceBetween && (e.isHorizontal() ? s ? l.css({
						marginLeft: g + "px"
					}) : l.css({
						marginRight: g + "px"
					}) : l.css({
						marginBottom: g + "px"
					})), t.centerInsufficientSlides) {
					var N = 0;
					if (u.forEach(function (e) {
							N += e + (t.spaceBetween ? t.spaceBetween : 0)
						}), (N -= t.spaceBetween) < i) {
						var X = (i - N) / 2;
						p.forEach(function (e, t) {
							p[t] = e - X
						}), c.forEach(function (e, t) {
							c[t] = e + X
						})
					}
				}
				V.extend(e, {
					slides: l,
					snapGrid: p,
					slidesGrid: c,
					slidesSizesGrid: u
				}), d !== o && e.emit("slidesLengthChange"), p.length !== f && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), c.length !== m && e.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset()
			}
		},
		updateAutoHeight: function (e) {
			var t, a = this,
				i = [],
				s = 0;
			if ("number" == typeof e ? a.setTransition(e) : !0 === e && a.setTransition(a.params.speed), "auto" !== a.params.slidesPerView && 1 < a.params.slidesPerView)
				for (t = 0; t < Math.ceil(a.params.slidesPerView); t += 1) {
					var r = a.activeIndex + t;
					if (r > a.slides.length) break;
					i.push(a.slides.eq(r)[0])
				} else i.push(a.slides.eq(a.activeIndex)[0]);
			for (t = 0; t < i.length; t += 1)
				if (void 0 !== i[t]) {
					var n = i[t].offsetHeight;
					s = s < n ? n : s
				} s && a.$wrapperEl.css("height", s + "px")
		},
		updateSlidesOffset: function () {
			for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
		},
		updateSlidesProgress: function (e) {
			void 0 === e && (e = this && this.translate || 0);
			var t = this,
				a = t.params,
				i = t.slides,
				s = t.rtlTranslate;
			if (0 !== i.length) {
				void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
				var r = -e;
				s && (r = e), i.removeClass(a.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
				for (var n = 0; n < i.length; n += 1) {
					var o = i[n],
						l = (r + (a.centeredSlides ? t.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + a.spaceBetween);
					if (a.watchSlidesVisibility) {
						var d = -(r - o.swiperSlideOffset),
							p = d + t.slidesSizesGrid[n];
						(0 <= d && d < t.size || 0 < p && p <= t.size || d <= 0 && p >= t.size) && (t.visibleSlides.push(o), t.visibleSlidesIndexes.push(n), i.eq(n).addClass(a.slideVisibleClass))
					}
					o.progress = s ? -l : l
				}
				t.visibleSlides = L(t.visibleSlides)
			}
		},
		updateProgress: function (e) {
			void 0 === e && (e = this && this.translate || 0);
			var t = this,
				a = t.params,
				i = t.maxTranslate() - t.minTranslate(),
				s = t.progress,
				r = t.isBeginning,
				n = t.isEnd,
				o = r,
				l = n;
			0 === i ? n = r = !(s = 0) : (r = (s = (e - t.minTranslate()) / i) <= 0, n = 1 <= s), V.extend(t, {
				progress: s,
				isBeginning: r,
				isEnd: n
			}), (a.watchSlidesProgress || a.watchSlidesVisibility) && t.updateSlidesProgress(e), r && !o && t.emit("reachBeginning toEdge"), n && !l && t.emit("reachEnd toEdge"), (o && !r || l && !n) && t.emit("fromEdge"), t.emit("progress", s)
		},
		updateSlidesClasses: function () {
			var e, t = this,
				a = t.slides,
				i = t.params,
				s = t.$wrapperEl,
				r = t.activeIndex,
				n = t.realIndex,
				o = t.virtual && i.virtual.enabled;
			a.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = o ? t.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + r + '"]') : a.eq(r)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass));
			var l = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
			i.loop && 0 === l.length && (l = a.eq(0)).addClass(i.slideNextClass);
			var d = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
			i.loop && 0 === d.length && (d = a.eq(-1)).addClass(i.slidePrevClass), i.loop && (l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), d.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass))
		},
		updateActiveIndex: function (e) {
			var t, a = this,
				i = a.rtlTranslate ? a.translate : -a.translate,
				s = a.slidesGrid,
				r = a.snapGrid,
				n = a.params,
				o = a.activeIndex,
				l = a.realIndex,
				d = a.snapIndex,
				p = e;
			if (void 0 === p) {
				for (var c = 0; c < s.length; c += 1) void 0 !== s[c + 1] ? i >= s[c] && i < s[c + 1] - (s[c + 1] - s[c]) / 2 ? p = c : i >= s[c] && i < s[c + 1] && (p = c + 1) : i >= s[c] && (p = c);
				n.normalizeSlideIndex && (p < 0 || void 0 === p) && (p = 0)
			}
			if ((t = 0 <= r.indexOf(i) ? r.indexOf(i) : Math.floor(p / n.slidesPerGroup)) >= r.length && (t = r.length - 1), p !== o) {
				var u = parseInt(a.slides.eq(p).attr("data-swiper-slide-index") || p, 10);
				V.extend(a, {
					snapIndex: t,
					realIndex: u,
					previousIndex: o,
					activeIndex: p
				}), a.emit("activeIndexChange"), a.emit("snapIndexChange"), l !== u && a.emit("realIndexChange"), a.emit("slideChange")
			} else t !== d && (a.snapIndex = t, a.emit("snapIndexChange"))
		},
		updateClickedSlide: function (e) {
			var t = this,
				a = t.params,
				i = L(e.target).closest("." + a.slideClass)[0],
				s = !1;
			if (i)
				for (var r = 0; r < t.slides.length; r += 1) t.slides[r] === i && (s = !0);
			if (!i || !s) return t.clickedSlide = void 0, void(t.clickedIndex = void 0);
			t.clickedSlide = i, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(L(i).attr("data-swiper-slide-index"), 10) : t.clickedIndex = L(i).index(), a.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
		}
	};
	var d = {
		getTranslate: function (e) {
			void 0 === e && (e = this.isHorizontal() ? "x" : "y");
			var t = this.params,
				a = this.rtlTranslate,
				i = this.translate,
				s = this.$wrapperEl;
			if (t.virtualTranslate) return a ? -i : i;
			var r = V.getTranslate(s[0], e);
			return a && (r = -r), r || 0
		},
		setTranslate: function (e, t) {
			var a = this,
				i = a.rtlTranslate,
				s = a.params,
				r = a.$wrapperEl,
				n = a.progress,
				o = 0,
				l = 0;
			a.isHorizontal() ? o = i ? -e : e : l = e, s.roundLengths && (o = Math.floor(o), l = Math.floor(l)), s.virtualTranslate || (R.transforms3d ? r.transform("translate3d(" + o + "px, " + l + "px, 0px)") : r.transform("translate(" + o + "px, " + l + "px)")), a.previousTranslate = a.translate, a.translate = a.isHorizontal() ? o : l;
			var d = a.maxTranslate() - a.minTranslate();
			(0 === d ? 0 : (e - a.minTranslate()) / d) !== n && a.updateProgress(e), a.emit("setTranslate", a.translate, t)
		},
		minTranslate: function () {
			return -this.snapGrid[0]
		},
		maxTranslate: function () {
			return -this.snapGrid[this.snapGrid.length - 1]
		}
	};
	var p = {
		setTransition: function (e, t) {
			this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
		},
		transitionStart: function (e, t) {
			void 0 === e && (e = !0);
			var a = this,
				i = a.activeIndex,
				s = a.params,
				r = a.previousIndex;
			s.autoHeight && a.updateAutoHeight();
			var n = t;
			if (n || (n = r < i ? "next" : i < r ? "prev" : "reset"), a.emit("transitionStart"), e && i !== r) {
				if ("reset" === n) return void a.emit("slideResetTransitionStart");
				a.emit("slideChangeTransitionStart"), "next" === n ? a.emit("slideNextTransitionStart") : a.emit("slidePrevTransitionStart")
			}
		},
		transitionEnd: function (e, t) {
			void 0 === e && (e = !0);
			var a = this,
				i = a.activeIndex,
				s = a.previousIndex;
			a.animating = !1, a.setTransition(0);
			var r = t;
			if (r || (r = s < i ? "next" : i < s ? "prev" : "reset"), a.emit("transitionEnd"), e && i !== s) {
				if ("reset" === r) return void a.emit("slideResetTransitionEnd");
				a.emit("slideChangeTransitionEnd"), "next" === r ? a.emit("slideNextTransitionEnd") : a.emit("slidePrevTransitionEnd")
			}
		}
	};
	var c = {
		slideTo: function (e, t, a, i) {
			void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0);
			var s = this,
				r = e;
			r < 0 && (r = 0);
			var n = s.params,
				o = s.snapGrid,
				l = s.slidesGrid,
				d = s.previousIndex,
				p = s.activeIndex,
				c = s.rtlTranslate;
			if (s.animating && n.preventInteractionOnTransition) return !1;
			var u = Math.floor(r / n.slidesPerGroup);
			u >= o.length && (u = o.length - 1), (p || n.initialSlide || 0) === (d || 0) && a && s.emit("beforeSlideChangeStart");
			var h, v = -o[u];
			if (s.updateProgress(v), n.normalizeSlideIndex)
				for (var f = 0; f < l.length; f += 1) - Math.floor(100 * v) >= Math.floor(100 * l[f]) && (r = f);
			if (s.initialized && r !== p) {
				if (!s.allowSlideNext && v < s.translate && v < s.minTranslate()) return !1;
				if (!s.allowSlidePrev && v > s.translate && v > s.maxTranslate() && (p || 0) !== r) return !1
			}
			return h = p < r ? "next" : r < p ? "prev" : "reset", c && -v === s.translate || !c && v === s.translate ? (s.updateActiveIndex(r), n.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== n.effect && s.setTranslate(v), "reset" !== h && (s.transitionStart(a, h), s.transitionEnd(a, h)), !1) : (0 !== t && R.transition ? (s.setTransition(t), s.setTranslate(v), s.updateActiveIndex(r), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, i), s.transitionStart(a, h), s.animating || (s.animating = !0, s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function (e) {
				s && !s.destroyed && e.target === this && (s.$wrapperEl[0].removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd), s.onSlideToWrapperTransitionEnd = null, delete s.onSlideToWrapperTransitionEnd, s.transitionEnd(a, h))
			}), s.$wrapperEl[0].addEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd))) : (s.setTransition(0), s.setTranslate(v), s.updateActiveIndex(r), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, i), s.transitionStart(a, h), s.transitionEnd(a, h)), !0)
		},
		slideToLoop: function (e, t, a, i) {
			void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0);
			var s = e;
			return this.params.loop && (s += this.loopedSlides), this.slideTo(s, t, a, i)
		},
		slideNext: function (e, t, a) {
			void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
			var i = this,
				s = i.params,
				r = i.animating;
			return s.loop ? !r && (i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft, i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a)) : i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a)
		},
		slidePrev: function (e, t, a) {
			void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
			var i = this,
				s = i.params,
				r = i.animating,
				n = i.snapGrid,
				o = i.slidesGrid,
				l = i.rtlTranslate;
			if (s.loop) {
				if (r) return !1;
				i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft
			}

			function d(e) {
				return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
			}
			var p, c = d(l ? i.translate : -i.translate),
				u = n.map(function (e) {
					return d(e)
				}),
				h = (o.map(function (e) {
					return d(e)
				}), n[u.indexOf(c)], n[u.indexOf(c) - 1]);
			return void 0 !== h && (p = o.indexOf(h)) < 0 && (p = i.activeIndex - 1), i.slideTo(p, e, t, a)
		},
		slideReset: function (e, t, a) {
			return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, a)
		},
		slideToClosest: function (e, t, a) {
			void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
			var i = this,
				s = i.activeIndex,
				r = Math.floor(s / i.params.slidesPerGroup);
			if (r < i.snapGrid.length - 1) {
				var n = i.rtlTranslate ? i.translate : -i.translate,
					o = i.snapGrid[r];
				(i.snapGrid[r + 1] - o) / 2 < n - o && (s = i.params.slidesPerGroup)
			}
			return i.slideTo(s, e, t, a)
		},
		slideToClickedSlide: function () {
			var e, t = this,
				a = t.params,
				i = t.$wrapperEl,
				s = "auto" === a.slidesPerView ? t.slidesPerViewDynamic() : a.slidesPerView,
				r = t.clickedIndex;
			if (a.loop) {
				if (t.animating) return;
				e = parseInt(L(t.clickedSlide).attr("data-swiper-slide-index"), 10), a.centeredSlides ? r < t.loopedSlides - s / 2 || r > t.slides.length - t.loopedSlides + s / 2 ? (t.loopFix(), r = i.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(), V.nextTick(function () {
					t.slideTo(r)
				})) : t.slideTo(r) : r > t.slides.length - s ? (t.loopFix(), r = i.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(), V.nextTick(function () {
					t.slideTo(r)
				})) : t.slideTo(r)
			} else t.slideTo(r)
		}
	};
	var u = {
		loopCreate: function () {
			var i = this,
				e = i.params,
				t = i.$wrapperEl;
			t.children("." + e.slideClass + "." + e.slideDuplicateClass).remove();
			var s = t.children("." + e.slideClass);
			if (e.loopFillGroupWithBlank) {
				var a = e.slidesPerGroup - s.length % e.slidesPerGroup;
				if (a !== e.slidesPerGroup) {
					for (var r = 0; r < a; r += 1) {
						var n = L(f.createElement("div")).addClass(e.slideClass + " " + e.slideBlankClass);
						t.append(n)
					}
					s = t.children("." + e.slideClass)
				}
			}
			"auto" !== e.slidesPerView || e.loopedSlides || (e.loopedSlides = s.length), i.loopedSlides = parseInt(e.loopedSlides || e.slidesPerView, 10), i.loopedSlides += e.loopAdditionalSlides, i.loopedSlides > s.length && (i.loopedSlides = s.length);
			var o = [],
				l = [];
			s.each(function (e, t) {
				var a = L(t);
				e < i.loopedSlides && l.push(t), e < s.length && e >= s.length - i.loopedSlides && o.push(t), a.attr("data-swiper-slide-index", e)
			});
			for (var d = 0; d < l.length; d += 1) t.append(L(l[d].cloneNode(!0)).addClass(e.slideDuplicateClass));
			for (var p = o.length - 1; 0 <= p; p -= 1) t.prepend(L(o[p].cloneNode(!0)).addClass(e.slideDuplicateClass))
		},
		loopFix: function () {
			var e, t = this,
				a = t.params,
				i = t.activeIndex,
				s = t.slides,
				r = t.loopedSlides,
				n = t.allowSlidePrev,
				o = t.allowSlideNext,
				l = t.snapGrid,
				d = t.rtlTranslate;
			t.allowSlidePrev = !0, t.allowSlideNext = !0;
			var p = -l[i] - t.getTranslate();
			i < r ? (e = s.length - 3 * r + i, e += r, t.slideTo(e, 0, !1, !0) && 0 !== p && t.setTranslate((d ? -t.translate : t.translate) - p)) : ("auto" === a.slidesPerView && 2 * r <= i || i >= s.length - r) && (e = -s.length + i + r, e += r, t.slideTo(e, 0, !1, !0) && 0 !== p && t.setTranslate((d ? -t.translate : t.translate) - p));
			t.allowSlidePrev = n, t.allowSlideNext = o
		},
		loopDestroy: function () {
			var e = this.$wrapperEl,
				t = this.params,
				a = this.slides;
			e.children("." + t.slideClass + "." + t.slideDuplicateClass).remove(), a.removeAttr("data-swiper-slide-index")
		}
	};
	var h = {
		setGrabCursor: function (e) {
			if (!(R.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked)) {
				var t = this.el;
				t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab"
			}
		},
		unsetGrabCursor: function () {
			R.touch || this.params.watchOverflow && this.isLocked || (this.el.style.cursor = "")
		}
	};
	var v = {
			appendSlide: function (e) {
				var t = this,
					a = t.$wrapperEl,
					i = t.params;
				if (i.loop && t.loopDestroy(), "object" == typeof e && "length" in e)
					for (var s = 0; s < e.length; s += 1) e[s] && a.append(e[s]);
				else a.append(e);
				i.loop && t.loopCreate(), i.observer && R.observer || t.update()
			},
			prependSlide: function (e) {
				var t = this,
					a = t.params,
					i = t.$wrapperEl,
					s = t.activeIndex;
				a.loop && t.loopDestroy();
				var r = s + 1;
				if ("object" == typeof e && "length" in e) {
					for (var n = 0; n < e.length; n += 1) e[n] && i.prepend(e[n]);
					r = s + e.length
				} else i.prepend(e);
				a.loop && t.loopCreate(), a.observer && R.observer || t.update(), t.slideTo(r, 0, !1)
			},
			addSlide: function (e, t) {
				var a = this,
					i = a.$wrapperEl,
					s = a.params,
					r = a.activeIndex;
				s.loop && (r -= a.loopedSlides, a.loopDestroy(), a.slides = i.children("." + s.slideClass));
				var n = a.slides.length;
				if (e <= 0) a.prependSlide(t);
				else if (n <= e) a.appendSlide(t);
				else {
					for (var o = e < r ? r + 1 : r, l = [], d = n - 1; e <= d; d -= 1) {
						var p = a.slides.eq(d);
						p.remove(), l.unshift(p)
					}
					if ("object" == typeof t && "length" in t) {
						for (var c = 0; c < t.length; c += 1) t[c] && i.append(t[c]);
						o = e < r ? r + t.length : r
					} else i.append(t);
					for (var u = 0; u < l.length; u += 1) i.append(l[u]);
					s.loop && a.loopCreate(), s.observer && R.observer || a.update(), s.loop ? a.slideTo(o + a.loopedSlides, 0, !1) : a.slideTo(o, 0, !1)
				}
			},
			removeSlide: function (e) {
				var t = this,
					a = t.params,
					i = t.$wrapperEl,
					s = t.activeIndex;
				a.loop && (s -= t.loopedSlides, t.loopDestroy(), t.slides = i.children("." + a.slideClass));
				var r, n = s;
				if ("object" == typeof e && "length" in e) {
					for (var o = 0; o < e.length; o += 1) r = e[o], t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1);
					n = Math.max(n, 0)
				} else r = e, t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1), n = Math.max(n, 0);
				a.loop && t.loopCreate(), a.observer && R.observer || t.update(), a.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1)
			},
			removeAllSlides: function () {
				for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
				this.removeSlide(e)
			}
		},
		m = function () {
			var e = Y.navigator.userAgent,
				t = {
					ios: !1,
					android: !1,
					androidChrome: !1,
					desktop: !1,
					windows: !1,
					iphone: !1,
					ipod: !1,
					ipad: !1,
					cordova: Y.cordova || Y.phonegap,
					phonegap: Y.cordova || Y.phonegap
				},
				a = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
				i = e.match(/(Android);?[\s\/]+([\d.]+)?/),
				s = e.match(/(iPad).*OS\s([\d_]+)/),
				r = e.match(/(iPod)(.*OS\s([\d_]+))?/),
				n = !s && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
			if (a && (t.os = "windows", t.osVersion = a[2], t.windows = !0), i && !a && (t.os = "android", t.osVersion = i[2], t.android = !0, t.androidChrome = 0 <= e.toLowerCase().indexOf("chrome")), (s || n || r) && (t.os = "ios", t.ios = !0), n && !r && (t.osVersion = n[2].replace(/_/g, "."), t.iphone = !0), s && (t.osVersion = s[2].replace(/_/g, "."), t.ipad = !0), r && (t.osVersion = r[3] ? r[3].replace(/_/g, ".") : null, t.iphone = !0), t.ios && t.osVersion && 0 <= e.indexOf("Version/") && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]), t.desktop = !(t.os || t.android || t.webView), t.webView = (n || s || r) && e.match(/.*AppleWebKit(?!.*Safari)/i), t.os && "ios" === t.os) {
				var o = t.osVersion.split("."),
					l = f.querySelector('meta[name="viewport"]');
				t.minimalUi = !t.webView && (r || n) && (1 * o[0] == 7 ? 1 <= 1 * o[1] : 7 < 1 * o[0]) && l && 0 <= l.getAttribute("content").indexOf("minimal-ui")
			}
			return t.pixelRatio = Y.devicePixelRatio || 1, t
		}();

	function g() {
		var e = this,
			t = e.params,
			a = e.el;
		if (!a || 0 !== a.offsetWidth) {
			t.breakpoints && e.setBreakpoint();
			var i = e.allowSlideNext,
				s = e.allowSlidePrev,
				r = e.snapGrid;
			if (e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), t.freeMode) {
				var n = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
				e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses(), t.autoHeight && e.updateAutoHeight()
			} else e.updateSlidesClasses(), ("auto" === t.slidesPerView || 1 < t.slidesPerView) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);
			e.allowSlidePrev = s, e.allowSlideNext = i, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
		}
	}
	var b = {
		attachEvents: function () {
			var e = this,
				t = e.params,
				a = e.touchEvents,
				i = e.el,
				s = e.wrapperEl;
			e.onTouchStart = function (e) {
				var t = this,
					a = t.touchEventsData,
					i = t.params,
					s = t.touches;
				if (!t.animating || !i.preventInteractionOnTransition) {
					var r = e;
					if (r.originalEvent && (r = r.originalEvent), a.isTouchEvent = "touchstart" === r.type, (a.isTouchEvent || !("which" in r) || 3 !== r.which) && !(!a.isTouchEvent && "button" in r && 0 < r.button || a.isTouched && a.isMoved))
						if (i.noSwiping && L(r.target).closest(i.noSwipingSelector ? i.noSwipingSelector : "." + i.noSwipingClass)[0]) t.allowClick = !0;
						else if (!i.swipeHandler || L(r).closest(i.swipeHandler)[0]) {
						s.currentX = "touchstart" === r.type ? r.targetTouches[0].pageX : r.pageX, s.currentY = "touchstart" === r.type ? r.targetTouches[0].pageY : r.pageY;
						var n = s.currentX,
							o = s.currentY,
							l = i.edgeSwipeDetection || i.iOSEdgeSwipeDetection,
							d = i.edgeSwipeThreshold || i.iOSEdgeSwipeThreshold;
						if (!l || !(n <= d || n >= Y.screen.width - d)) {
							if (V.extend(a, {
									isTouched: !0,
									isMoved: !1,
									allowTouchCallbacks: !0,
									isScrolling: void 0,
									startMoving: void 0
								}), s.startX = n, s.startY = o, a.touchStartTime = V.now(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, 0 < i.threshold && (a.allowThresholdMove = !1), "touchstart" !== r.type) {
								var p = !0;
								L(r.target).is(a.formElements) && (p = !1), f.activeElement && L(f.activeElement).is(a.formElements) && f.activeElement !== r.target && f.activeElement.blur(), p && t.allowTouchMove && i.touchStartPreventDefault && r.preventDefault()
							}
							t.emit("touchStart", r)
						}
					}
				}
			}.bind(e), e.onTouchMove = function (e) {
				var t = this,
					a = t.touchEventsData,
					i = t.params,
					s = t.touches,
					r = t.rtlTranslate,
					n = e;
				if (n.originalEvent && (n = n.originalEvent), a.isTouched) {
					if (!a.isTouchEvent || "mousemove" !== n.type) {
						var o = "touchmove" === n.type ? n.targetTouches[0].pageX : n.pageX,
							l = "touchmove" === n.type ? n.targetTouches[0].pageY : n.pageY;
						if (n.preventedByNestedSwiper) return s.startX = o, void(s.startY = l);
						if (!t.allowTouchMove) return t.allowClick = !1, void(a.isTouched && (V.extend(s, {
							startX: o,
							startY: l,
							currentX: o,
							currentY: l
						}), a.touchStartTime = V.now()));
						if (a.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
							if (t.isVertical()) {
								if (l < s.startY && t.translate <= t.maxTranslate() || l > s.startY && t.translate >= t.minTranslate()) return a.isTouched = !1, void(a.isMoved = !1)
							} else if (o < s.startX && t.translate <= t.maxTranslate() || o > s.startX && t.translate >= t.minTranslate()) return;
						if (a.isTouchEvent && f.activeElement && n.target === f.activeElement && L(n.target).is(a.formElements)) return a.isMoved = !0, void(t.allowClick = !1);
						if (a.allowTouchCallbacks && t.emit("touchMove", n), !(n.targetTouches && 1 < n.targetTouches.length)) {
							s.currentX = o, s.currentY = l;
							var d, p = s.currentX - s.startX,
								c = s.currentY - s.startY;
							if (!(t.params.threshold && Math.sqrt(Math.pow(p, 2) + Math.pow(c, 2)) < t.params.threshold))
								if (void 0 === a.isScrolling && (t.isHorizontal() && s.currentY === s.startY || t.isVertical() && s.currentX === s.startX ? a.isScrolling = !1 : 25 <= p * p + c * c && (d = 180 * Math.atan2(Math.abs(c), Math.abs(p)) / Math.PI, a.isScrolling = t.isHorizontal() ? d > i.touchAngle : 90 - d > i.touchAngle)), a.isScrolling && t.emit("touchMoveOpposite", n), void 0 === a.startMoving && (s.currentX === s.startX && s.currentY === s.startY || (a.startMoving = !0)), a.isScrolling) a.isTouched = !1;
								else if (a.startMoving) {
								t.allowClick = !1, n.preventDefault(), i.touchMoveStopPropagation && !i.nested && n.stopPropagation(), a.isMoved || (i.loop && t.loopFix(), a.startTranslate = t.getTranslate(), t.setTransition(0), t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"), a.allowMomentumBounce = !1, !i.grabCursor || !0 !== t.allowSlideNext && !0 !== t.allowSlidePrev || t.setGrabCursor(!0), t.emit("sliderFirstMove", n)), t.emit("sliderMove", n), a.isMoved = !0;
								var u = t.isHorizontal() ? p : c;
								s.diff = u, u *= i.touchRatio, r && (u = -u), t.swipeDirection = 0 < u ? "prev" : "next", a.currentTranslate = u + a.startTranslate;
								var h = !0,
									v = i.resistanceRatio;
								if (i.touchReleaseOnEdges && (v = 0), 0 < u && a.currentTranslate > t.minTranslate() ? (h = !1, i.resistance && (a.currentTranslate = t.minTranslate() - 1 + Math.pow(-t.minTranslate() + a.startTranslate + u, v))) : u < 0 && a.currentTranslate < t.maxTranslate() && (h = !1, i.resistance && (a.currentTranslate = t.maxTranslate() + 1 - Math.pow(t.maxTranslate() - a.startTranslate - u, v))), h && (n.preventedByNestedSwiper = !0), !t.allowSlideNext && "next" === t.swipeDirection && a.currentTranslate < a.startTranslate && (a.currentTranslate = a.startTranslate), !t.allowSlidePrev && "prev" === t.swipeDirection && a.currentTranslate > a.startTranslate && (a.currentTranslate = a.startTranslate), 0 < i.threshold) {
									if (!(Math.abs(u) > i.threshold || a.allowThresholdMove)) return void(a.currentTranslate = a.startTranslate);
									if (!a.allowThresholdMove) return a.allowThresholdMove = !0, s.startX = s.currentX, s.startY = s.currentY, a.currentTranslate = a.startTranslate, void(s.diff = t.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY)
								}
								i.followFinger && ((i.freeMode || i.watchSlidesProgress || i.watchSlidesVisibility) && (t.updateActiveIndex(), t.updateSlidesClasses()), i.freeMode && (0 === a.velocities.length && a.velocities.push({
									position: s[t.isHorizontal() ? "startX" : "startY"],
									time: a.touchStartTime
								}), a.velocities.push({
									position: s[t.isHorizontal() ? "currentX" : "currentY"],
									time: V.now()
								})), t.updateProgress(a.currentTranslate), t.setTranslate(a.currentTranslate))
							}
						}
					}
				} else a.startMoving && a.isScrolling && t.emit("touchMoveOpposite", n)
			}.bind(e), e.onTouchEnd = function (e) {
				var t = this,
					a = t.touchEventsData,
					i = t.params,
					s = t.touches,
					r = t.rtlTranslate,
					n = t.$wrapperEl,
					o = t.slidesGrid,
					l = t.snapGrid,
					d = e;
				if (d.originalEvent && (d = d.originalEvent), a.allowTouchCallbacks && t.emit("touchEnd", d), a.allowTouchCallbacks = !1, !a.isTouched) return a.isMoved && i.grabCursor && t.setGrabCursor(!1), a.isMoved = !1, void(a.startMoving = !1);
				i.grabCursor && a.isMoved && a.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
				var p, c = V.now(),
					u = c - a.touchStartTime;
				if (t.allowClick && (t.updateClickedSlide(d), t.emit("tap", d), u < 300 && 300 < c - a.lastClickTime && (a.clickTimeout && clearTimeout(a.clickTimeout), a.clickTimeout = V.nextTick(function () {
						t && !t.destroyed && t.emit("click", d)
					}, 300)), u < 300 && c - a.lastClickTime < 300 && (a.clickTimeout && clearTimeout(a.clickTimeout), t.emit("doubleTap", d))), a.lastClickTime = V.now(), V.nextTick(function () {
						t.destroyed || (t.allowClick = !0)
					}), !a.isTouched || !a.isMoved || !t.swipeDirection || 0 === s.diff || a.currentTranslate === a.startTranslate) return a.isTouched = !1, a.isMoved = !1, void(a.startMoving = !1);
				if (a.isTouched = !1, a.isMoved = !1, a.startMoving = !1, p = i.followFinger ? r ? t.translate : -t.translate : -a.currentTranslate, i.freeMode) {
					if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
					if (p > -t.maxTranslate()) return void(t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
					if (i.freeModeMomentum) {
						if (1 < a.velocities.length) {
							var h = a.velocities.pop(),
								v = a.velocities.pop(),
								f = h.position - v.position,
								m = h.time - v.time;
							t.velocity = f / m, t.velocity /= 2, Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0), (150 < m || 300 < V.now() - h.time) && (t.velocity = 0)
						} else t.velocity = 0;
						t.velocity *= i.freeModeMomentumVelocityRatio, a.velocities.length = 0;
						var g = 1e3 * i.freeModeMomentumRatio,
							b = t.velocity * g,
							w = t.translate + b;
						r && (w = -w);
						var y, x, T = !1,
							E = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
						if (w < t.maxTranslate()) i.freeModeMomentumBounce ? (w + t.maxTranslate() < -E && (w = t.maxTranslate() - E), y = t.maxTranslate(), T = !0, a.allowMomentumBounce = !0) : w = t.maxTranslate(), i.loop && i.centeredSlides && (x = !0);
						else if (w > t.minTranslate()) i.freeModeMomentumBounce ? (w - t.minTranslate() > E && (w = t.minTranslate() + E), y = t.minTranslate(), T = !0, a.allowMomentumBounce = !0) : w = t.minTranslate(), i.loop && i.centeredSlides && (x = !0);
						else if (i.freeModeSticky) {
							for (var S, C = 0; C < l.length; C += 1)
								if (l[C] > -w) {
									S = C;
									break
								} w = -(w = Math.abs(l[S] - w) < Math.abs(l[S - 1] - w) || "next" === t.swipeDirection ? l[S] : l[S - 1])
						}
						if (x && t.once("transitionEnd", function () {
								t.loopFix()
							}), 0 !== t.velocity) g = r ? Math.abs((-w - t.translate) / t.velocity) : Math.abs((w - t.translate) / t.velocity);
						else if (i.freeModeSticky) return void t.slideToClosest();
						i.freeModeMomentumBounce && T ? (t.updateProgress(y), t.setTransition(g), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd(function () {
							t && !t.destroyed && a.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(i.speed), t.setTranslate(y), n.transitionEnd(function () {
								t && !t.destroyed && t.transitionEnd()
							}))
						})) : t.velocity ? (t.updateProgress(w), t.setTransition(g), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd(function () {
							t && !t.destroyed && t.transitionEnd()
						}))) : t.updateProgress(w), t.updateActiveIndex(), t.updateSlidesClasses()
					} else if (i.freeModeSticky) return void t.slideToClosest();
					(!i.freeModeMomentum || u >= i.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
				} else {
					for (var M = 0, k = t.slidesSizesGrid[0], z = 0; z < o.length; z += i.slidesPerGroup) void 0 !== o[z + i.slidesPerGroup] ? p >= o[z] && p < o[z + i.slidesPerGroup] && (k = o[(M = z) + i.slidesPerGroup] - o[z]) : p >= o[z] && (M = z, k = o[o.length - 1] - o[o.length - 2]);
					var P = (p - o[M]) / k;
					if (u > i.longSwipesMs) {
						if (!i.longSwipes) return void t.slideTo(t.activeIndex);
						"next" === t.swipeDirection && (P >= i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M)), "prev" === t.swipeDirection && (P > 1 - i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M))
					} else {
						if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
						"next" === t.swipeDirection && t.slideTo(M + i.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(M)
					}
				}
			}.bind(e), e.onClick = function (e) {
				this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
			}.bind(e);
			var r = "container" === t.touchEventsTarget ? i : s,
				n = !!t.nested;
			if (R.touch || !R.pointerEvents && !R.prefixedPointerEvents) {
				if (R.touch) {
					var o = !("touchstart" !== a.start || !R.passiveListener || !t.passiveListeners) && {
						passive: !0,
						capture: !1
					};
					r.addEventListener(a.start, e.onTouchStart, o), r.addEventListener(a.move, e.onTouchMove, R.passiveListener ? {
						passive: !1,
						capture: n
					} : n), r.addEventListener(a.end, e.onTouchEnd, o)
				}(t.simulateTouch && !m.ios && !m.android || t.simulateTouch && !R.touch && m.ios) && (r.addEventListener("mousedown", e.onTouchStart, !1), f.addEventListener("mousemove", e.onTouchMove, n), f.addEventListener("mouseup", e.onTouchEnd, !1))
			} else r.addEventListener(a.start, e.onTouchStart, !1), f.addEventListener(a.move, e.onTouchMove, n), f.addEventListener(a.end, e.onTouchEnd, !1);
			(t.preventClicks || t.preventClicksPropagation) && r.addEventListener("click", e.onClick, !0), e.on(m.ios || m.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", g, !0)
		},
		detachEvents: function () {
			var e = this,
				t = e.params,
				a = e.touchEvents,
				i = e.el,
				s = e.wrapperEl,
				r = "container" === t.touchEventsTarget ? i : s,
				n = !!t.nested;
			if (R.touch || !R.pointerEvents && !R.prefixedPointerEvents) {
				if (R.touch) {
					var o = !("onTouchStart" !== a.start || !R.passiveListener || !t.passiveListeners) && {
						passive: !0,
						capture: !1
					};
					r.removeEventListener(a.start, e.onTouchStart, o), r.removeEventListener(a.move, e.onTouchMove, n), r.removeEventListener(a.end, e.onTouchEnd, o)
				}(t.simulateTouch && !m.ios && !m.android || t.simulateTouch && !R.touch && m.ios) && (r.removeEventListener("mousedown", e.onTouchStart, !1), f.removeEventListener("mousemove", e.onTouchMove, n), f.removeEventListener("mouseup", e.onTouchEnd, !1))
			} else r.removeEventListener(a.start, e.onTouchStart, !1), f.removeEventListener(a.move, e.onTouchMove, n), f.removeEventListener(a.end, e.onTouchEnd, !1);
			(t.preventClicks || t.preventClicksPropagation) && r.removeEventListener("click", e.onClick, !0), e.off(m.ios || m.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", g)
		}
	};
	var w, y = {
			setBreakpoint: function () {
				var e = this,
					t = e.activeIndex,
					a = e.initialized,
					i = e.loopedSlides;
				void 0 === i && (i = 0);
				var s = e.params,
					r = s.breakpoints;
				if (r && (!r || 0 !== Object.keys(r).length)) {
					var n = e.getBreakpoint(r);
					if (n && e.currentBreakpoint !== n) {
						var o = n in r ? r[n] : e.originalParams,
							l = s.loop && o.slidesPerView !== s.slidesPerView;
						V.extend(e.params, o), V.extend(e, {
							allowTouchMove: e.params.allowTouchMove,
							allowSlideNext: e.params.allowSlideNext,
							allowSlidePrev: e.params.allowSlidePrev
						}), e.currentBreakpoint = n, l && a && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - i + e.loopedSlides, 0, !1)), e.emit("breakpoint", o)
					}
				}
			},
			getBreakpoint: function (e) {
				if (e) {
					var t = !1,
						a = [];
					Object.keys(e).forEach(function (e) {
						a.push(e)
					}), a.sort(function (e, t) {
						return parseInt(e, 10) - parseInt(t, 10)
					});
					for (var i = 0; i < a.length; i += 1) {
						var s = a[i];
						this.params.breakpointsInverse ? s <= Y.innerWidth && (t = s) : s >= Y.innerWidth && !t && (t = s)
					}
					return t || "max"
				}
			}
		},
		I = {
			isIE: !!Y.navigator.userAgent.match(/Trident/g) || !!Y.navigator.userAgent.match(/MSIE/g),
			isEdge: !!Y.navigator.userAgent.match(/Edge/g),
			isSafari: (w = Y.navigator.userAgent.toLowerCase(), 0 <= w.indexOf("safari") && w.indexOf("chrome") < 0 && w.indexOf("android") < 0),
			isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(Y.navigator.userAgent)
		};
	var x = {
			init: !0,
			direction: "horizontal",
			touchEventsTarget: "container",
			initialSlide: 0,
			speed: 300,
			preventInteractionOnTransition: !1,
			edgeSwipeDetection: !1,
			edgeSwipeThreshold: 20,
			freeMode: !1,
			freeModeMomentum: !0,
			freeModeMomentumRatio: 1,
			freeModeMomentumBounce: !0,
			freeModeMomentumBounceRatio: 1,
			freeModeMomentumVelocityRatio: 1,
			freeModeSticky: !1,
			freeModeMinimumVelocity: .02,
			autoHeight: !1,
			setWrapperSize: !1,
			virtualTranslate: !1,
			effect: "slide",
			breakpoints: void 0,
			breakpointsInverse: !1,
			spaceBetween: 0,
			slidesPerView: 1,
			slidesPerColumn: 1,
			slidesPerColumnFill: "column",
			slidesPerGroup: 1,
			centeredSlides: !1,
			slidesOffsetBefore: 0,
			slidesOffsetAfter: 0,
			normalizeSlideIndex: !0,
			centerInsufficientSlides: !1,
			watchOverflow: !1,
			roundLengths: !1,
			touchRatio: 1,
			touchAngle: 45,
			simulateTouch: !0,
			shortSwipes: !0,
			longSwipes: !0,
			longSwipesRatio: .5,
			longSwipesMs: 300,
			followFinger: !0,
			allowTouchMove: !0,
			threshold: 0,
			touchMoveStopPropagation: !0,
			touchStartPreventDefault: !0,
			touchReleaseOnEdges: !1,
			uniqueNavElements: !0,
			resistance: !0,
			resistanceRatio: .85,
			watchSlidesProgress: !1,
			watchSlidesVisibility: !1,
			grabCursor: !1,
			preventClicks: !0,
			preventClicksPropagation: !0,
			slideToClickedSlide: !1,
			preloadImages: !0,
			updateOnImagesReady: !0,
			loop: !1,
			loopAdditionalSlides: 0,
			loopedSlides: null,
			loopFillGroupWithBlank: !1,
			allowSlidePrev: !0,
			allowSlideNext: !0,
			swipeHandler: null,
			noSwiping: !0,
			noSwipingClass: "swiper-no-swiping",
			noSwipingSelector: null,
			passiveListeners: !0,
			containerModifierClass: "swiper-container-",
			slideClass: "swiper-slide",
			slideBlankClass: "swiper-slide-invisible-blank",
			slideActiveClass: "swiper-slide-active",
			slideDuplicateActiveClass: "swiper-slide-duplicate-active",
			slideVisibleClass: "swiper-slide-visible",
			slideDuplicateClass: "swiper-slide-duplicate",
			slideNextClass: "swiper-slide-next",
			slideDuplicateNextClass: "swiper-slide-duplicate-next",
			slidePrevClass: "swiper-slide-prev",
			slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
			wrapperClass: "swiper-wrapper",
			runCallbacksOnInit: !0
		},
		T = {
			update: o,
			translate: d,
			transition: p,
			slide: c,
			loop: u,
			grabCursor: h,
			manipulation: v,
			events: b,
			breakpoints: y,
			checkOverflow: {
				checkOverflow: function () {
					var e = this,
						t = e.isLocked;
					e.isLocked = 1 === e.snapGrid.length, e.allowSlideNext = !e.isLocked, e.allowSlidePrev = !e.isLocked, t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), t && t !== e.isLocked && (e.isEnd = !1, e.navigation.update())
				}
			},
			classes: {
				addClasses: function () {
					var t = this.classNames,
						a = this.params,
						e = this.rtl,
						i = this.$el,
						s = [];
					s.push(a.direction), a.freeMode && s.push("free-mode"), R.flexbox || s.push("no-flexbox"), a.autoHeight && s.push("autoheight"), e && s.push("rtl"), 1 < a.slidesPerColumn && s.push("multirow"), m.android && s.push("android"), m.ios && s.push("ios"), (I.isIE || I.isEdge) && (R.pointerEvents || R.prefixedPointerEvents) && s.push("wp8-" + a.direction), s.forEach(function (e) {
						t.push(a.containerModifierClass + e)
					}), i.addClass(t.join(" "))
				},
				removeClasses: function () {
					var e = this.$el,
						t = this.classNames;
					e.removeClass(t.join(" "))
				}
			},
			images: {
				loadImage: function (e, t, a, i, s, r) {
					var n;

					function o() {
						r && r()
					}
					e.complete && s ? o() : t ? ((n = new Y.Image).onload = o, n.onerror = o, i && (n.sizes = i), a && (n.srcset = a), t && (n.src = t)) : o()
				},
				preloadImages: function () {
					var e = this;

					function t() {
						null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
					}
					e.imagesToLoad = e.$el.find("img");
					for (var a = 0; a < e.imagesToLoad.length; a += 1) {
						var i = e.imagesToLoad[a];
						e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t)
					}
				}
			}
		},
		E = {},
		S = function (u) {
			function h() {
				for (var e, t, s, a = [], i = arguments.length; i--;) a[i] = arguments[i];
				1 === a.length && a[0].constructor && a[0].constructor === Object ? s = a[0] : (t = (e = a)[0], s = e[1]), s || (s = {}), s = V.extend({}, s), t && !s.el && (s.el = t), u.call(this, s), Object.keys(T).forEach(function (t) {
					Object.keys(T[t]).forEach(function (e) {
						h.prototype[e] || (h.prototype[e] = T[t][e])
					})
				});
				var r = this;
				void 0 === r.modules && (r.modules = {}), Object.keys(r.modules).forEach(function (e) {
					var t = r.modules[e];
					if (t.params) {
						var a = Object.keys(t.params)[0],
							i = t.params[a];
						if ("object" != typeof i || null === i) return;
						if (!(a in s && "enabled" in i)) return;
						!0 === s[a] && (s[a] = {
							enabled: !0
						}), "object" != typeof s[a] || "enabled" in s[a] || (s[a].enabled = !0), s[a] || (s[a] = {
							enabled: !1
						})
					}
				});
				var n = V.extend({}, x);
				r.useModulesParams(n), r.params = V.extend({}, n, E, s), r.originalParams = V.extend({}, r.params), r.passedParams = V.extend({}, s);
				var o = (r.$ = L)(r.params.el);
				if (t = o[0]) {
					if (1 < o.length) {
						var l = [];
						return o.each(function (e, t) {
							var a = V.extend({}, s, {
								el: t
							});
							l.push(new h(a))
						}), l
					}
					t.swiper = r, o.data("swiper", r);
					var d, p, c = o.children("." + r.params.wrapperClass);
					return V.extend(r, {
						$el: o,
						el: t,
						$wrapperEl: c,
						wrapperEl: c[0],
						classNames: [],
						slides: L(),
						slidesGrid: [],
						snapGrid: [],
						slidesSizesGrid: [],
						isHorizontal: function () {
							return "horizontal" === r.params.direction
						},
						isVertical: function () {
							return "vertical" === r.params.direction
						},
						rtl: "rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction"),
						rtlTranslate: "horizontal" === r.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction")),
						wrongRTL: "-webkit-box" === c.css("display"),
						activeIndex: 0,
						realIndex: 0,
						isBeginning: !0,
						isEnd: !1,
						translate: 0,
						previousTranslate: 0,
						progress: 0,
						velocity: 0,
						animating: !1,
						allowSlideNext: r.params.allowSlideNext,
						allowSlidePrev: r.params.allowSlidePrev,
						touchEvents: (d = ["touchstart", "touchmove", "touchend"], p = ["mousedown", "mousemove", "mouseup"], R.pointerEvents ? p = ["pointerdown", "pointermove", "pointerup"] : R.prefixedPointerEvents && (p = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), r.touchEventsTouch = {
							start: d[0],
							move: d[1],
							end: d[2]
						}, r.touchEventsDesktop = {
							start: p[0],
							move: p[1],
							end: p[2]
						}, R.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop),
						touchEventsData: {
							isTouched: void 0,
							isMoved: void 0,
							allowTouchCallbacks: void 0,
							touchStartTime: void 0,
							isScrolling: void 0,
							currentTranslate: void 0,
							startTranslate: void 0,
							allowThresholdMove: void 0,
							formElements: "input, select, option, textarea, button, video",
							lastClickTime: V.now(),
							clickTimeout: void 0,
							velocities: [],
							allowMomentumBounce: void 0,
							isTouchEvent: void 0,
							startMoving: void 0
						},
						allowClick: !0,
						allowTouchMove: r.params.allowTouchMove,
						touches: {
							startX: 0,
							startY: 0,
							currentX: 0,
							currentY: 0,
							diff: 0
						},
						imagesToLoad: [],
						imagesLoaded: 0
					}), r.useModules(), r.params.init && r.init(), r
				}
			}
			u && (h.__proto__ = u);
			var e = {
				extendedDefaults: {
					configurable: !0
				},
				defaults: {
					configurable: !0
				},
				Class: {
					configurable: !0
				},
				$: {
					configurable: !0
				}
			};
			return ((h.prototype = Object.create(u && u.prototype)).constructor = h).prototype.slidesPerViewDynamic = function () {
				var e = this,
					t = e.params,
					a = e.slides,
					i = e.slidesGrid,
					s = e.size,
					r = e.activeIndex,
					n = 1;
				if (t.centeredSlides) {
					for (var o, l = a[r].swiperSlideSize, d = r + 1; d < a.length; d += 1) a[d] && !o && (n += 1, s < (l += a[d].swiperSlideSize) && (o = !0));
					for (var p = r - 1; 0 <= p; p -= 1) a[p] && !o && (n += 1, s < (l += a[p].swiperSlideSize) && (o = !0))
				} else
					for (var c = r + 1; c < a.length; c += 1) i[c] - i[r] < s && (n += 1);
				return n
			}, h.prototype.update = function () {
				var a = this;
				if (a && !a.destroyed) {
					var e = a.snapGrid,
						t = a.params;
					t.breakpoints && a.setBreakpoint(), a.updateSize(), a.updateSlides(), a.updateProgress(), a.updateSlidesClasses(), a.params.freeMode ? (i(), a.params.autoHeight && a.updateAutoHeight()) : (("auto" === a.params.slidesPerView || 1 < a.params.slidesPerView) && a.isEnd && !a.params.centeredSlides ? a.slideTo(a.slides.length - 1, 0, !1, !0) : a.slideTo(a.activeIndex, 0, !1, !0)) || i(), t.watchOverflow && e !== a.snapGrid && a.checkOverflow(), a.emit("update")
				}

				function i() {
					var e = a.rtlTranslate ? -1 * a.translate : a.translate,
						t = Math.min(Math.max(e, a.maxTranslate()), a.minTranslate());
					a.setTranslate(t), a.updateActiveIndex(), a.updateSlidesClasses()
				}
			}, h.prototype.init = function () {
				var e = this;
				e.initialized || (e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), e.params.grabCursor && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit), e.attachEvents(), e.initialized = !0, e.emit("init"))
			}, h.prototype.destroy = function (e, t) {
				void 0 === e && (e = !0), void 0 === t && (t = !0);
				var a = this,
					i = a.params,
					s = a.$el,
					r = a.$wrapperEl,
					n = a.slides;
				return void 0 === a.params || a.destroyed || (a.emit("beforeDestroy"), a.initialized = !1, a.detachEvents(), i.loop && a.loopDestroy(), t && (a.removeClasses(), s.removeAttr("style"), r.removeAttr("style"), n && n.length && n.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), a.emit("destroy"), Object.keys(a.eventsListeners).forEach(function (e) {
					a.off(e)
				}), !1 !== e && (a.$el[0].swiper = null, a.$el.data("swiper", null), V.deleteProps(a)), a.destroyed = !0), null
			}, h.extendDefaults = function (e) {
				V.extend(E, e)
			}, e.extendedDefaults.get = function () {
				return E
			}, e.defaults.get = function () {
				return x
			}, e.Class.get = function () {
				return u
			}, e.$.get = function () {
				return L
			}, Object.defineProperties(h, e), h
		}(s),
		C = {
			name: "device",
			proto: {
				device: m
			},
			static: {
				device: m
			}
		},
		M = {
			name: "support",
			proto: {
				support: R
			},
			static: {
				support: R
			}
		},
		k = {
			name: "browser",
			proto: {
				browser: I
			},
			static: {
				browser: I
			}
		},
		z = {
			name: "resize",
			create: function () {
				var e = this;
				V.extend(e, {
					resize: {
						resizeHandler: function () {
							e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
						},
						orientationChangeHandler: function () {
							e && !e.destroyed && e.initialized && e.emit("orientationchange")
						}
					}
				})
			},
			on: {
				init: function () {
					Y.addEventListener("resize", this.resize.resizeHandler), Y.addEventListener("orientationchange", this.resize.orientationChangeHandler)
				},
				destroy: function () {
					Y.removeEventListener("resize", this.resize.resizeHandler), Y.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
				}
			}
		},
		P = {
			func: Y.MutationObserver || Y.WebkitMutationObserver,
			attach: function (e, t) {
				void 0 === t && (t = {});
				var a = this,
					i = new P.func(function (e) {
						if (1 !== e.length) {
							var t = function () {
								a.emit("observerUpdate", e[0])
							};
							Y.requestAnimationFrame ? Y.requestAnimationFrame(t) : Y.setTimeout(t, 0)
						} else a.emit("observerUpdate", e[0])
					});
				i.observe(e, {
					attributes: void 0 === t.attributes || t.attributes,
					childList: void 0 === t.childList || t.childList,
					characterData: void 0 === t.characterData || t.characterData
				}), a.observer.observers.push(i)
			},
			init: function () {
				var e = this;
				if (R.observer && e.params.observer) {
					if (e.params.observeParents)
						for (var t = e.$el.parents(), a = 0; a < t.length; a += 1) e.observer.attach(t[a]);
					e.observer.attach(e.$el[0], {
						childList: !1
					}), e.observer.attach(e.$wrapperEl[0], {
						attributes: !1
					})
				}
			},
			destroy: function () {
				this.observer.observers.forEach(function (e) {
					e.disconnect()
				}), this.observer.observers = []
			}
		},
		$ = {
			name: "observer",
			params: {
				observer: !1,
				observeParents: !1
			},
			create: function () {
				V.extend(this, {
					observer: {
						init: P.init.bind(this),
						attach: P.attach.bind(this),
						destroy: P.destroy.bind(this),
						observers: []
					}
				})
			},
			on: {
				init: function () {
					this.observer.init()
				},
				destroy: function () {
					this.observer.destroy()
				}
			}
		},
		D = {
			update: function (e) {
				var t = this,
					a = t.params,
					i = a.slidesPerView,
					s = a.slidesPerGroup,
					r = a.centeredSlides,
					n = t.params.virtual,
					o = n.addSlidesBefore,
					l = n.addSlidesAfter,
					d = t.virtual,
					p = d.from,
					c = d.to,
					u = d.slides,
					h = d.slidesGrid,
					v = d.renderSlide,
					f = d.offset;
				t.updateActiveIndex();
				var m, g, b, w = t.activeIndex || 0;
				m = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", r ? (g = Math.floor(i / 2) + s + o, b = Math.floor(i / 2) + s + l) : (g = i + (s - 1) + o, b = s + l);
				var y = Math.max((w || 0) - b, 0),
					x = Math.min((w || 0) + g, u.length - 1),
					T = (t.slidesGrid[y] || 0) - (t.slidesGrid[0] || 0);

				function E() {
					t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load()
				}
				if (V.extend(t.virtual, {
						from: y,
						to: x,
						offset: T,
						slidesGrid: t.slidesGrid
					}), p === y && c === x && !e) return t.slidesGrid !== h && T !== f && t.slides.css(m, T + "px"), void t.updateProgress();
				if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
					offset: T,
					from: y,
					to: x,
					slides: function () {
						for (var e = [], t = y; t <= x; t += 1) e.push(u[t]);
						return e
					}()
				}), void E();
				var S = [],
					C = [];
				if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
				else
					for (var M = p; M <= c; M += 1)(M < y || x < M) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + M + '"]').remove();
				for (var k = 0; k < u.length; k += 1) y <= k && k <= x && (void 0 === c || e ? C.push(k) : (c < k && C.push(k), k < p && S.push(k)));
				C.forEach(function (e) {
					t.$wrapperEl.append(v(u[e], e))
				}), S.sort(function (e, t) {
					return e < t
				}).forEach(function (e) {
					t.$wrapperEl.prepend(v(u[e], e))
				}), t.$wrapperEl.children(".swiper-slide").css(m, T + "px"), E()
			},
			renderSlide: function (e, t) {
				var a = this,
					i = a.params.virtual;
				if (i.cache && a.virtual.cache[t]) return a.virtual.cache[t];
				var s = i.renderSlide ? L(i.renderSlide.call(a, e, t)) : L('<div class="' + a.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
				return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", t), i.cache && (a.virtual.cache[t] = s), s
			},
			appendSlide: function (e) {
				this.virtual.slides.push(e), this.virtual.update(!0)
			},
			prependSlide: function (e) {
				var t = this;
				if (t.virtual.slides.unshift(e), t.params.virtual.cache) {
					var a = t.virtual.cache,
						i = {};
					Object.keys(a).forEach(function (e) {
						i[e + 1] = a[e]
					}), t.virtual.cache = i
				}
				t.virtual.update(!0), t.slideNext(0)
			}
		},
		O = {
			name: "virtual",
			params: {
				virtual: {
					enabled: !1,
					slides: [],
					cache: !0,
					renderSlide: null,
					renderExternal: null,
					addSlidesBefore: 0,
					addSlidesAfter: 0
				}
			},
			create: function () {
				var e = this;
				V.extend(e, {
					virtual: {
						update: D.update.bind(e),
						appendSlide: D.appendSlide.bind(e),
						prependSlide: D.prependSlide.bind(e),
						renderSlide: D.renderSlide.bind(e),
						slides: e.params.virtual.slides,
						cache: {}
					}
				})
			},
			on: {
				beforeInit: function () {
					var e = this;
					if (e.params.virtual.enabled) {
						e.classNames.push(e.params.containerModifierClass + "virtual");
						var t = {
							watchSlidesProgress: !0
						};
						V.extend(e.params, t), V.extend(e.originalParams, t), e.virtual.update()
					}
				},
				setTranslate: function () {
					this.params.virtual.enabled && this.virtual.update()
				}
			}
		},
		A = {
			handle: function (e) {
				var t = this,
					a = t.rtlTranslate,
					i = e;
				i.originalEvent && (i = i.originalEvent);
				var s = i.keyCode || i.charCode;
				if (!t.allowSlideNext && (t.isHorizontal() && 39 === s || t.isVertical() && 40 === s)) return !1;
				if (!t.allowSlidePrev && (t.isHorizontal() && 37 === s || t.isVertical() && 38 === s)) return !1;
				if (!(i.shiftKey || i.altKey || i.ctrlKey || i.metaKey || f.activeElement && f.activeElement.nodeName && ("input" === f.activeElement.nodeName.toLowerCase() || "textarea" === f.activeElement.nodeName.toLowerCase()))) {
					if (t.params.keyboard.onlyInViewport && (37 === s || 39 === s || 38 === s || 40 === s)) {
						var r = !1;
						if (0 < t.$el.parents("." + t.params.slideClass).length && 0 === t.$el.parents("." + t.params.slideActiveClass).length) return;
						var n = Y.innerWidth,
							o = Y.innerHeight,
							l = t.$el.offset();
						a && (l.left -= t.$el[0].scrollLeft);
						for (var d = [
								[l.left, l.top],
								[l.left + t.width, l.top],
								[l.left, l.top + t.height],
								[l.left + t.width, l.top + t.height]
							], p = 0; p < d.length; p += 1) {
							var c = d[p];
							0 <= c[0] && c[0] <= n && 0 <= c[1] && c[1] <= o && (r = !0)
						}
						if (!r) return
					}
					t.isHorizontal() ? (37 !== s && 39 !== s || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), (39 === s && !a || 37 === s && a) && t.slideNext(), (37 === s && !a || 39 === s && a) && t.slidePrev()) : (38 !== s && 40 !== s || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), 40 === s && t.slideNext(), 38 === s && t.slidePrev()), t.emit("keyPress", s)
				}
			},
			enable: function () {
				this.keyboard.enabled || (L(f).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
			},
			disable: function () {
				this.keyboard.enabled && (L(f).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
			}
		},
		H = {
			name: "keyboard",
			params: {
				keyboard: {
					enabled: !1,
					onlyInViewport: !0
				}
			},
			create: function () {
				V.extend(this, {
					keyboard: {
						enabled: !1,
						enable: A.enable.bind(this),
						disable: A.disable.bind(this),
						handle: A.handle.bind(this)
					}
				})
			},
			on: {
				init: function () {
					this.params.keyboard.enabled && this.keyboard.enable()
				},
				destroy: function () {
					this.keyboard.enabled && this.keyboard.disable()
				}
			}
		};
	var B = {
			lastScrollTime: V.now(),
			event: -1 < Y.navigator.userAgent.indexOf("firefox") ? "DOMMouseScroll" : function () {
				var e = "onwheel",
					t = e in f;
				if (!t) {
					var a = f.createElement("div");
					a.setAttribute(e, "return;"), t = "function" == typeof a[e]
				}
				return !t && f.implementation && f.implementation.hasFeature && !0 !== f.implementation.hasFeature("", "") && (t = f.implementation.hasFeature("Events.wheel", "3.0")), t
			}() ? "wheel" : "mousewheel",
			normalize: function (e) {
				var t = 0,
					a = 0,
					i = 0,
					s = 0;
				return "detail" in e && (a = e.detail), "wheelDelta" in e && (a = -e.wheelDelta / 120), "wheelDeltaY" in e && (a = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = a, a = 0), i = 10 * t, s = 10 * a, "deltaY" in e && (s = e.deltaY), "deltaX" in e && (i = e.deltaX), (i || s) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, s *= 40) : (i *= 800, s *= 800)), i && !t && (t = i < 1 ? -1 : 1), s && !a && (a = s < 1 ? -1 : 1), {
					spinX: t,
					spinY: a,
					pixelX: i,
					pixelY: s
				}
			},
			handleMouseEnter: function () {
				this.mouseEntered = !0
			},
			handleMouseLeave: function () {
				this.mouseEntered = !1
			},
			handle: function (e) {
				var t = e,
					a = this,
					i = a.params.mousewheel;
				if (!a.mouseEntered && !i.releaseOnEdges) return !0;
				t.originalEvent && (t = t.originalEvent);
				var s = 0,
					r = a.rtlTranslate ? -1 : 1,
					n = B.normalize(t);
				if (i.forceToAxis)
					if (a.isHorizontal()) {
						if (!(Math.abs(n.pixelX) > Math.abs(n.pixelY))) return !0;
						s = n.pixelX * r
					} else {
						if (!(Math.abs(n.pixelY) > Math.abs(n.pixelX))) return !0;
						s = n.pixelY
					}
				else s = Math.abs(n.pixelX) > Math.abs(n.pixelY) ? -n.pixelX * r : -n.pixelY;
				if (0 === s) return !0;
				if (i.invert && (s = -s), a.params.freeMode) {
					a.params.loop && a.loopFix();
					var o = a.getTranslate() + s * i.sensitivity,
						l = a.isBeginning,
						d = a.isEnd;
					if (o >= a.minTranslate() && (o = a.minTranslate()), o <= a.maxTranslate() && (o = a.maxTranslate()), a.setTransition(0), a.setTranslate(o), a.updateProgress(), a.updateActiveIndex(), a.updateSlidesClasses(), (!l && a.isBeginning || !d && a.isEnd) && a.updateSlidesClasses(), a.params.freeModeSticky && (clearTimeout(a.mousewheel.timeout), a.mousewheel.timeout = V.nextTick(function () {
							a.slideToClosest()
						}, 300)), a.emit("scroll", t), a.params.autoplay && a.params.autoplayDisableOnInteraction && a.autoplay.stop(), o === a.minTranslate() || o === a.maxTranslate()) return !0
				} else {
					if (60 < V.now() - a.mousewheel.lastScrollTime)
						if (s < 0)
							if (a.isEnd && !a.params.loop || a.animating) {
								if (i.releaseOnEdges) return !0
							} else a.slideNext(), a.emit("scroll", t);
					else if (a.isBeginning && !a.params.loop || a.animating) {
						if (i.releaseOnEdges) return !0
					} else a.slidePrev(), a.emit("scroll", t);
					a.mousewheel.lastScrollTime = (new Y.Date).getTime()
				}
				return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
			},
			enable: function () {
				var e = this;
				if (!B.event) return !1;
				if (e.mousewheel.enabled) return !1;
				var t = e.$el;
				return "container" !== e.params.mousewheel.eventsTarged && (t = L(e.params.mousewheel.eventsTarged)), t.on("mouseenter", e.mousewheel.handleMouseEnter), t.on("mouseleave", e.mousewheel.handleMouseLeave), t.on(B.event, e.mousewheel.handle), e.mousewheel.enabled = !0
			},
			disable: function () {
				var e = this;
				if (!B.event) return !1;
				if (!e.mousewheel.enabled) return !1;
				var t = e.$el;
				return "container" !== e.params.mousewheel.eventsTarged && (t = L(e.params.mousewheel.eventsTarged)), t.off(B.event, e.mousewheel.handle), !(e.mousewheel.enabled = !1)
			}
		},
		G = {
			update: function () {
				var e = this,
					t = e.params.navigation;
				if (!e.params.loop) {
					var a = e.navigation,
						i = a.$nextEl,
						s = a.$prevEl;
					s && 0 < s.length && (e.isBeginning ? s.addClass(t.disabledClass) : s.removeClass(t.disabledClass), s[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)), i && 0 < i.length && (e.isEnd ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass), i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass))
				}
			},
			init: function () {
				var e, t, a = this,
					i = a.params.navigation;
				(i.nextEl || i.prevEl) && (i.nextEl && (e = L(i.nextEl), a.params.uniqueNavElements && "string" == typeof i.nextEl && 1 < e.length && 1 === a.$el.find(i.nextEl).length && (e = a.$el.find(i.nextEl))), i.prevEl && (t = L(i.prevEl), a.params.uniqueNavElements && "string" == typeof i.prevEl && 1 < t.length && 1 === a.$el.find(i.prevEl).length && (t = a.$el.find(i.prevEl))), e && 0 < e.length && e.on("click", function (e) {
					e.preventDefault(), a.isEnd && !a.params.loop || a.slideNext()
				}), t && 0 < t.length && t.on("click", function (e) {
					e.preventDefault(), a.isBeginning && !a.params.loop || a.slidePrev()
				}), V.extend(a.navigation, {
					$nextEl: e,
					nextEl: e && e[0],
					$prevEl: t,
					prevEl: t && t[0]
				}))
			},
			destroy: function () {
				var e = this.navigation,
					t = e.$nextEl,
					a = e.$prevEl;
				t && t.length && (t.off("click"), t.removeClass(this.params.navigation.disabledClass)), a && a.length && (a.off("click"), a.removeClass(this.params.navigation.disabledClass))
			}
		},
		N = {
			update: function () {
				var e = this,
					t = e.rtl,
					s = e.params.pagination;
				if (s.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
					var r, a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
						i = e.pagination.$el,
						n = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
					if (e.params.loop ? ((r = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > a - 1 - 2 * e.loopedSlides && (r -= a - 2 * e.loopedSlides), n - 1 < r && (r -= n), r < 0 && "bullets" !== e.params.paginationType && (r = n + r)) : r = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === s.type && e.pagination.bullets && 0 < e.pagination.bullets.length) {
						var o, l, d, p = e.pagination.bullets;
						if (s.dynamicBullets && (e.pagination.bulletSize = p.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), i.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (s.dynamicMainBullets + 4) + "px"), 1 < s.dynamicMainBullets && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += r - e.previousIndex, e.pagination.dynamicBulletIndex > s.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = s.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)), o = r - e.pagination.dynamicBulletIndex, d = ((l = o + (Math.min(p.length, s.dynamicMainBullets) - 1)) + o) / 2), p.removeClass(s.bulletActiveClass + " " + s.bulletActiveClass + "-next " + s.bulletActiveClass + "-next-next " + s.bulletActiveClass + "-prev " + s.bulletActiveClass + "-prev-prev " + s.bulletActiveClass + "-main"), 1 < i.length) p.each(function (e, t) {
							var a = L(t),
								i = a.index();
							i === r && a.addClass(s.bulletActiveClass), s.dynamicBullets && (o <= i && i <= l && a.addClass(s.bulletActiveClass + "-main"), i === o && a.prev().addClass(s.bulletActiveClass + "-prev").prev().addClass(s.bulletActiveClass + "-prev-prev"), i === l && a.next().addClass(s.bulletActiveClass + "-next").next().addClass(s.bulletActiveClass + "-next-next"))
						});
						else if (p.eq(r).addClass(s.bulletActiveClass), s.dynamicBullets) {
							for (var c = p.eq(o), u = p.eq(l), h = o; h <= l; h += 1) p.eq(h).addClass(s.bulletActiveClass + "-main");
							c.prev().addClass(s.bulletActiveClass + "-prev").prev().addClass(s.bulletActiveClass + "-prev-prev"), u.next().addClass(s.bulletActiveClass + "-next").next().addClass(s.bulletActiveClass + "-next-next")
						}
						if (s.dynamicBullets) {
							var v = Math.min(p.length, s.dynamicMainBullets + 4),
								f = (e.pagination.bulletSize * v - e.pagination.bulletSize) / 2 - d * e.pagination.bulletSize,
								m = t ? "right" : "left";
							p.css(e.isHorizontal() ? m : "top", f + "px")
						}
					}
					if ("fraction" === s.type && (i.find("." + s.currentClass).text(s.formatFractionCurrent(r + 1)), i.find("." + s.totalClass).text(s.formatFractionTotal(n))), "progressbar" === s.type) {
						var g;
						g = s.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
						var b = (r + 1) / n,
							w = 1,
							y = 1;
						"horizontal" === g ? w = b : y = b, i.find("." + s.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + w + ") scaleY(" + y + ")").transition(e.params.speed)
					}
					"custom" === s.type && s.renderCustom ? (i.html(s.renderCustom(e, r + 1, n)), e.emit("paginationRender", e, i[0])) : e.emit("paginationUpdate", e, i[0]), i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](s.lockClass)
				}
			},
			render: function () {
				var e = this,
					t = e.params.pagination;
				if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
					var a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
						i = e.pagination.$el,
						s = "";
					if ("bullets" === t.type) {
						for (var r = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, n = 0; n < r; n += 1) t.renderBullet ? s += t.renderBullet.call(e, n, t.bulletClass) : s += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
						i.html(s), e.pagination.bullets = i.find("." + t.bulletClass)
					}
					"fraction" === t.type && (s = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', i.html(s)), "progressbar" === t.type && (s = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>', i.html(s)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
				}
			},
			init: function () {
				var a = this,
					e = a.params.pagination;
				if (e.el) {
					var t = L(e.el);
					0 !== t.length && (a.params.uniqueNavElements && "string" == typeof e.el && 1 < t.length && 1 === a.$el.find(e.el).length && (t = a.$el.find(e.el)), "bullets" === e.type && e.clickable && t.addClass(e.clickableClass), t.addClass(e.modifierClass + e.type), "bullets" === e.type && e.dynamicBullets && (t.addClass("" + e.modifierClass + e.type + "-dynamic"), a.pagination.dynamicBulletIndex = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && t.addClass(e.progressbarOppositeClass), e.clickable && t.on("click", "." + e.bulletClass, function (e) {
						e.preventDefault();
						var t = L(this).index() * a.params.slidesPerGroup;
						a.params.loop && (t += a.loopedSlides), a.slideTo(t)
					}), V.extend(a.pagination, {
						$el: t,
						el: t[0]
					}))
				}
			},
			destroy: function () {
				var e = this,
					t = e.params.pagination;
				if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
					var a = e.pagination.$el;
					a.removeClass(t.hiddenClass), a.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && a.off("click", "." + t.bulletClass)
				}
			}
		},
		X = {
			setTranslate: function () {
				var e = this;
				if (e.params.scrollbar.el && e.scrollbar.el) {
					var t = e.scrollbar,
						a = e.rtlTranslate,
						i = e.progress,
						s = t.dragSize,
						r = t.trackSize,
						n = t.$dragEl,
						o = t.$el,
						l = e.params.scrollbar,
						d = s,
						p = (r - s) * i;
					a ? 0 < (p = -p) ? (d = s - p, p = 0) : r < -p + s && (d = r + p) : p < 0 ? (d = s + p, p = 0) : r < p + s && (d = r - p), e.isHorizontal() ? (R.transforms3d ? n.transform("translate3d(" + p + "px, 0, 0)") : n.transform("translateX(" + p + "px)"), n[0].style.width = d + "px") : (R.transforms3d ? n.transform("translate3d(0px, " + p + "px, 0)") : n.transform("translateY(" + p + "px)"), n[0].style.height = d + "px"), l.hide && (clearTimeout(e.scrollbar.timeout), o[0].style.opacity = 1, e.scrollbar.timeout = setTimeout(function () {
						o[0].style.opacity = 0, o.transition(400)
					}, 1e3))
				}
			},
			setTransition: function (e) {
				this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
			},
			updateSize: function () {
				var e = this;
				if (e.params.scrollbar.el && e.scrollbar.el) {
					var t = e.scrollbar,
						a = t.$dragEl,
						i = t.$el;
					a[0].style.width = "", a[0].style.height = "";
					var s, r = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
						n = e.size / e.virtualSize,
						o = n * (r / e.size);
					s = "auto" === e.params.scrollbar.dragSize ? r * n : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? a[0].style.width = s + "px" : a[0].style.height = s + "px", i[0].style.display = 1 <= n ? "none" : "", e.params.scrollbarHide && (i[0].style.opacity = 0), V.extend(t, {
						trackSize: r,
						divider: n,
						moveDivider: o,
						dragSize: s
					}), t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass)
				}
			},
			setDragPosition: function (e) {
				var t, a = this,
					i = a.scrollbar,
					s = a.rtlTranslate,
					r = i.$el,
					n = i.dragSize,
					o = i.trackSize;
				t = ((a.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - r.offset()[a.isHorizontal() ? "left" : "top"] - n / 2) / (o - n), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);
				var l = a.minTranslate() + (a.maxTranslate() - a.minTranslate()) * t;
				a.updateProgress(l), a.setTranslate(l), a.updateActiveIndex(), a.updateSlidesClasses()
			},
			onDragStart: function (e) {
				var t = this,
					a = t.params.scrollbar,
					i = t.scrollbar,
					s = t.$wrapperEl,
					r = i.$el,
					n = i.$dragEl;
				t.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), s.transition(100), n.transition(100), i.setDragPosition(e), clearTimeout(t.scrollbar.dragTimeout), r.transition(0), a.hide && r.css("opacity", 1), t.emit("scrollbarDragStart", e)
			},
			onDragMove: function (e) {
				var t = this.scrollbar,
					a = this.$wrapperEl,
					i = t.$el,
					s = t.$dragEl;
				this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), a.transition(0), i.transition(0), s.transition(0), this.emit("scrollbarDragMove", e))
			},
			onDragEnd: function (e) {
				var t = this,
					a = t.params.scrollbar,
					i = t.scrollbar.$el;
				t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, a.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = V.nextTick(function () {
					i.css("opacity", 0), i.transition(400)
				}, 1e3)), t.emit("scrollbarDragEnd", e), a.snapOnRelease && t.slideToClosest())
			},
			enableDraggable: function () {
				var e = this;
				if (e.params.scrollbar.el) {
					var t = e.scrollbar,
						a = e.touchEvents,
						i = e.touchEventsDesktop,
						s = e.params,
						r = t.$el[0],
						n = !(!R.passiveListener || !s.passiveListeners) && {
							passive: !1,
							capture: !1
						},
						o = !(!R.passiveListener || !s.passiveListeners) && {
							passive: !0,
							capture: !1
						};
					R.touch || !R.pointerEvents && !R.prefixedPointerEvents ? (R.touch && (r.addEventListener(a.start, e.scrollbar.onDragStart, n), r.addEventListener(a.move, e.scrollbar.onDragMove, n), r.addEventListener(a.end, e.scrollbar.onDragEnd, o)), (s.simulateTouch && !m.ios && !m.android || s.simulateTouch && !R.touch && m.ios) && (r.addEventListener("mousedown", e.scrollbar.onDragStart, n), f.addEventListener("mousemove", e.scrollbar.onDragMove, n), f.addEventListener("mouseup", e.scrollbar.onDragEnd, o))) : (r.addEventListener(i.start, e.scrollbar.onDragStart, n), f.addEventListener(i.move, e.scrollbar.onDragMove, n), f.addEventListener(i.end, e.scrollbar.onDragEnd, o))
				}
			},
			disableDraggable: function () {
				var e = this;
				if (e.params.scrollbar.el) {
					var t = e.scrollbar,
						a = e.touchEvents,
						i = e.touchEventsDesktop,
						s = e.params,
						r = t.$el[0],
						n = !(!R.passiveListener || !s.passiveListeners) && {
							passive: !1,
							capture: !1
						},
						o = !(!R.passiveListener || !s.passiveListeners) && {
							passive: !0,
							capture: !1
						};
					R.touch || !R.pointerEvents && !R.prefixedPointerEvents ? (R.touch && (r.removeEventListener(a.start, e.scrollbar.onDragStart, n), r.removeEventListener(a.move, e.scrollbar.onDragMove, n), r.removeEventListener(a.end, e.scrollbar.onDragEnd, o)), (s.simulateTouch && !m.ios && !m.android || s.simulateTouch && !R.touch && m.ios) && (r.removeEventListener("mousedown", e.scrollbar.onDragStart, n), f.removeEventListener("mousemove", e.scrollbar.onDragMove, n), f.removeEventListener("mouseup", e.scrollbar.onDragEnd, o))) : (r.removeEventListener(i.start, e.scrollbar.onDragStart, n), f.removeEventListener(i.move, e.scrollbar.onDragMove, n), f.removeEventListener(i.end, e.scrollbar.onDragEnd, o))
				}
			},
			init: function () {
				var e = this;
				if (e.params.scrollbar.el) {
					var t = e.scrollbar,
						a = e.$el,
						i = e.params.scrollbar,
						s = L(i.el);
					e.params.uniqueNavElements && "string" == typeof i.el && 1 < s.length && 1 === a.find(i.el).length && (s = a.find(i.el));
					var r = s.find("." + e.params.scrollbar.dragClass);
					0 === r.length && (r = L('<div class="' + e.params.scrollbar.dragClass + '"></div>'), s.append(r)), V.extend(t, {
						$el: s,
						el: s[0],
						$dragEl: r,
						dragEl: r[0]
					}), i.draggable && t.enableDraggable()
				}
			},
			destroy: function () {
				this.scrollbar.disableDraggable()
			}
		},
		F = {
			setTransform: function (e, t) {
				var a = this.rtl,
					i = L(e),
					s = a ? -1 : 1,
					r = i.attr("data-swiper-parallax") || "0",
					n = i.attr("data-swiper-parallax-x"),
					o = i.attr("data-swiper-parallax-y"),
					l = i.attr("data-swiper-parallax-scale"),
					d = i.attr("data-swiper-parallax-opacity");
				if (n || o ? (n = n || "0", o = o || "0") : this.isHorizontal() ? (n = r, o = "0") : (o = r, n = "0"), n = 0 <= n.indexOf("%") ? parseInt(n, 10) * t * s + "%" : n * t * s + "px", o = 0 <= o.indexOf("%") ? parseInt(o, 10) * t + "%" : o * t + "px", null != d) {
					var p = d - (d - 1) * (1 - Math.abs(t));
					i[0].style.opacity = p
				}
				if (null == l) i.transform("translate3d(" + n + ", " + o + ", 0px)");
				else {
					var c = l - (l - 1) * (1 - Math.abs(t));
					i.transform("translate3d(" + n + ", " + o + ", 0px) scale(" + c + ")")
				}
			},
			setTranslate: function () {
				var i = this,
					e = i.$el,
					t = i.slides,
					s = i.progress,
					r = i.snapGrid;
				e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, t) {
					i.parallax.setTransform(t, s)
				}), t.each(function (e, t) {
					var a = t.progress;
					1 < i.params.slidesPerGroup && "auto" !== i.params.slidesPerView && (a += Math.ceil(e / 2) - s * (r.length - 1)), a = Math.min(Math.max(a, -1), 1), L(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, t) {
						i.parallax.setTransform(t, a)
					})
				})
			},
			setTransition: function (s) {
				void 0 === s && (s = this.params.speed);
				this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, t) {
					var a = L(t),
						i = parseInt(a.attr("data-swiper-parallax-duration"), 10) || s;
					0 === s && (i = 0), a.transition(i)
				})
			}
		},
		q = {
			getDistanceBetweenTouches: function (e) {
				if (e.targetTouches.length < 2) return 1;
				var t = e.targetTouches[0].pageX,
					a = e.targetTouches[0].pageY,
					i = e.targetTouches[1].pageX,
					s = e.targetTouches[1].pageY;
				return Math.sqrt(Math.pow(i - t, 2) + Math.pow(s - a, 2))
			},
			onGestureStart: function (e) {
				var t = this,
					a = t.params.zoom,
					i = t.zoom,
					s = i.gesture;
				if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !R.gestures) {
					if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
					i.fakeGestureTouched = !0, s.scaleStart = q.getDistanceBetweenTouches(e)
				}
				s.$slideEl && s.$slideEl.length || (s.$slideEl = L(e.target).closest(".swiper-slide"), 0 === s.$slideEl.length && (s.$slideEl = t.slides.eq(t.activeIndex)), s.$imageEl = s.$slideEl.find("img, svg, canvas"), s.$imageWrapEl = s.$imageEl.parent("." + a.containerClass), s.maxRatio = s.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, 0 !== s.$imageWrapEl.length) ? (s.$imageEl.transition(0), t.zoom.isScaling = !0) : s.$imageEl = void 0
			},
			onGestureChange: function (e) {
				var t = this.params.zoom,
					a = this.zoom,
					i = a.gesture;
				if (!R.gestures) {
					if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
					a.fakeGestureMoved = !0, i.scaleMove = q.getDistanceBetweenTouches(e)
				}
				i.$imageEl && 0 !== i.$imageEl.length && (R.gestures ? this.zoom.scale = e.scale * a.currentScale : a.scale = i.scaleMove / i.scaleStart * a.currentScale, a.scale > i.maxRatio && (a.scale = i.maxRatio - 1 + Math.pow(a.scale - i.maxRatio + 1, .5)), a.scale < t.minRatio && (a.scale = t.minRatio + 1 - Math.pow(t.minRatio - a.scale + 1, .5)), i.$imageEl.transform("translate3d(0,0,0) scale(" + a.scale + ")"))
			},
			onGestureEnd: function (e) {
				var t = this.params.zoom,
					a = this.zoom,
					i = a.gesture;
				if (!R.gestures) {
					if (!a.fakeGestureTouched || !a.fakeGestureMoved) return;
					if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !m.android) return;
					a.fakeGestureTouched = !1, a.fakeGestureMoved = !1
				}
				i.$imageEl && 0 !== i.$imageEl.length && (a.scale = Math.max(Math.min(a.scale, i.maxRatio), t.minRatio), i.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + a.scale + ")"), a.currentScale = a.scale, a.isScaling = !1, 1 === a.scale && (i.$slideEl = void 0))
			},
			onTouchStart: function (e) {
				var t = this.zoom,
					a = t.gesture,
					i = t.image;
				a.$imageEl && 0 !== a.$imageEl.length && (i.isTouched || (m.android && e.preventDefault(), i.isTouched = !0, i.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, i.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
			},
			onTouchMove: function (e) {
				var t = this,
					a = t.zoom,
					i = a.gesture,
					s = a.image,
					r = a.velocity;
				if (i.$imageEl && 0 !== i.$imageEl.length && (t.allowClick = !1, s.isTouched && i.$slideEl)) {
					s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = V.getTranslate(i.$imageWrapEl[0], "x") || 0, s.startY = V.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), t.rtl && (s.startX = -s.startX, s.startY = -s.startY));
					var n = s.width * a.scale,
						o = s.height * a.scale;
					if (!(n < i.slideWidth && o < i.slideHeight)) {
						if (s.minX = Math.min(i.slideWidth / 2 - n / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - o / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !a.isScaling) {
							if (t.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void(s.isTouched = !1);
							if (!t.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void(s.isTouched = !1)
						}
						e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), r.prevPositionX || (r.prevPositionX = s.touchesCurrent.x), r.prevPositionY || (r.prevPositionY = s.touchesCurrent.y), r.prevTime || (r.prevTime = Date.now()), r.x = (s.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2, r.y = (s.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2, Math.abs(s.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0), Math.abs(s.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0), r.prevPositionX = s.touchesCurrent.x, r.prevPositionY = s.touchesCurrent.y, r.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
					}
				}
			},
			onTouchEnd: function () {
				var e = this.zoom,
					t = e.gesture,
					a = e.image,
					i = e.velocity;
				if (t.$imageEl && 0 !== t.$imageEl.length) {
					if (!a.isTouched || !a.isMoved) return a.isTouched = !1, void(a.isMoved = !1);
					a.isTouched = !1, a.isMoved = !1;
					var s = 300,
						r = 300,
						n = i.x * s,
						o = a.currentX + n,
						l = i.y * r,
						d = a.currentY + l;
					0 !== i.x && (s = Math.abs((o - a.currentX) / i.x)), 0 !== i.y && (r = Math.abs((d - a.currentY) / i.y));
					var p = Math.max(s, r);
					a.currentX = o, a.currentY = d;
					var c = a.width * e.scale,
						u = a.height * e.scale;
					a.minX = Math.min(t.slideWidth / 2 - c / 2, 0), a.maxX = -a.minX, a.minY = Math.min(t.slideHeight / 2 - u / 2, 0), a.maxY = -a.minY, a.currentX = Math.max(Math.min(a.currentX, a.maxX), a.minX), a.currentY = Math.max(Math.min(a.currentY, a.maxY), a.minY), t.$imageWrapEl.transition(p).transform("translate3d(" + a.currentX + "px, " + a.currentY + "px,0)")
				}
			},
			onTransitionEnd: function () {
				var e = this.zoom,
					t = e.gesture;
				t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0, e.scale = 1, e.currentScale = 1)
			},
			toggle: function (e) {
				var t = this.zoom;
				t.scale && 1 !== t.scale ? t.out() : t.in(e)
			},
			in: function (e) {
				var t, a, i, s, r, n, o, l, d, p, c, u, h, v, f, m, g = this,
					b = g.zoom,
					w = g.params.zoom,
					y = b.gesture,
					x = b.image;
				(y.$slideEl || (y.$slideEl = g.clickedSlide ? L(g.clickedSlide) : g.slides.eq(g.activeIndex), y.$imageEl = y.$slideEl.find("img, svg, canvas"), y.$imageWrapEl = y.$imageEl.parent("." + w.containerClass)), y.$imageEl && 0 !== y.$imageEl.length) && (y.$slideEl.addClass("" + w.zoomedSlideClass), void 0 === x.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, a = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = x.touchesStart.x, a = x.touchesStart.y), b.scale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, b.currentScale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, e ? (f = y.$slideEl[0].offsetWidth, m = y.$slideEl[0].offsetHeight, i = y.$slideEl.offset().left + f / 2 - t, s = y.$slideEl.offset().top + m / 2 - a, o = y.$imageEl[0].offsetWidth, l = y.$imageEl[0].offsetHeight, d = o * b.scale, p = l * b.scale, h = -(c = Math.min(f / 2 - d / 2, 0)), v = -(u = Math.min(m / 2 - p / 2, 0)), (r = i * b.scale) < c && (r = c), h < r && (r = h), (n = s * b.scale) < u && (n = u), v < n && (n = v)) : n = r = 0, y.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + n + "px,0)"), y.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + b.scale + ")"))
			},
			out: function () {
				var e = this,
					t = e.zoom,
					a = e.params.zoom,
					i = t.gesture;
				i.$slideEl || (i.$slideEl = e.clickedSlide ? L(e.clickedSlide) : e.slides.eq(e.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas"), i.$imageWrapEl = i.$imageEl.parent("." + a.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (t.scale = 1, t.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + a.zoomedSlideClass), i.$slideEl = void 0)
			},
			enable: function () {
				var e = this,
					t = e.zoom;
				if (!t.enabled) {
					t.enabled = !0;
					var a = !("touchstart" !== e.touchEvents.start || !R.passiveListener || !e.params.passiveListeners) && {
						passive: !0,
						capture: !1
					};
					R.gestures ? (e.$wrapperEl.on("gesturestart", ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.on("gesturechange", ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, a)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.on(e.touchEvents.move, ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.on(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, a)), e.$wrapperEl.on(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove)
				}
			},
			disable: function () {
				var e = this,
					t = e.zoom;
				if (t.enabled) {
					e.zoom.enabled = !1;
					var a = !("touchstart" !== e.touchEvents.start || !R.passiveListener || !e.params.passiveListeners) && {
						passive: !0,
						capture: !1
					};
					R.gestures ? (e.$wrapperEl.off("gesturestart", ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.off("gesturechange", ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.off("gestureend", ".swiper-slide", t.onGestureEnd, a)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.off(e.touchEvents.move, ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.off(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, a)), e.$wrapperEl.off(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove)
				}
			}
		},
		W = {
			loadInSlide: function (e, l) {
				void 0 === l && (l = !0);
				var d = this,
					p = d.params.lazy;
				if (void 0 !== e && 0 !== d.slides.length) {
					var c = d.virtual && d.params.virtual.enabled ? d.$wrapperEl.children("." + d.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : d.slides.eq(e),
						t = c.find("." + p.elementClass + ":not(." + p.loadedClass + "):not(." + p.loadingClass + ")");
					!c.hasClass(p.elementClass) || c.hasClass(p.loadedClass) || c.hasClass(p.loadingClass) || (t = t.add(c[0])), 0 !== t.length && t.each(function (e, t) {
						var i = L(t);
						i.addClass(p.loadingClass);
						var s = i.attr("data-background"),
							r = i.attr("data-src"),
							n = i.attr("data-srcset"),
							o = i.attr("data-sizes");
						d.loadImage(i[0], r || s, n, o, !1, function () {
							if (null != d && d && (!d || d.params) && !d.destroyed) {
								if (s ? (i.css("background-image", 'url("' + s + '")'), i.removeAttr("data-background")) : (n && (i.attr("srcset", n), i.removeAttr("data-srcset")), o && (i.attr("sizes", o), i.removeAttr("data-sizes")), r && (i.attr("src", r), i.removeAttr("data-src"))), i.addClass(p.loadedClass).removeClass(p.loadingClass), c.find("." + p.preloaderClass).remove(), d.params.loop && l) {
									var e = c.attr("data-swiper-slide-index");
									if (c.hasClass(d.params.slideDuplicateClass)) {
										var t = d.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + d.params.slideDuplicateClass + ")");
										d.lazy.loadInSlide(t.index(), !1)
									} else {
										var a = d.$wrapperEl.children("." + d.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
										d.lazy.loadInSlide(a.index(), !1)
									}
								}
								d.emit("lazyImageReady", c[0], i[0])
							}
						}), d.emit("lazyImageLoad", c[0], i[0])
					})
				}
			},
			load: function () {
				var i = this,
					t = i.$wrapperEl,
					a = i.params,
					s = i.slides,
					e = i.activeIndex,
					r = i.virtual && a.virtual.enabled,
					n = a.lazy,
					o = a.slidesPerView;

				function l(e) {
					if (r) {
						if (t.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0
					} else if (s[e]) return !0;
					return !1
				}

				function d(e) {
					return r ? L(e).attr("data-swiper-slide-index") : L(e).index()
				}
				if ("auto" === o && (o = 0), i.lazy.initialImageLoaded || (i.lazy.initialImageLoaded = !0), i.params.watchSlidesVisibility) t.children("." + a.slideVisibleClass).each(function (e, t) {
					var a = r ? L(t).attr("data-swiper-slide-index") : L(t).index();
					i.lazy.loadInSlide(a)
				});
				else if (1 < o)
					for (var p = e; p < e + o; p += 1) l(p) && i.lazy.loadInSlide(p);
				else i.lazy.loadInSlide(e);
				if (n.loadPrevNext)
					if (1 < o || n.loadPrevNextAmount && 1 < n.loadPrevNextAmount) {
						for (var c = n.loadPrevNextAmount, u = o, h = Math.min(e + u + Math.max(c, u), s.length), v = Math.max(e - Math.max(u, c), 0), f = e + o; f < h; f += 1) l(f) && i.lazy.loadInSlide(f);
						for (var m = v; m < e; m += 1) l(m) && i.lazy.loadInSlide(m)
					} else {
						var g = t.children("." + a.slideNextClass);
						0 < g.length && i.lazy.loadInSlide(d(g));
						var b = t.children("." + a.slidePrevClass);
						0 < b.length && i.lazy.loadInSlide(d(b))
					}
			}
		},
		j = {
			LinearSpline: function (e, t) {
				var a, i, s, r, n, o = function (e, t) {
					for (i = -1, a = e.length; 1 < a - i;) e[s = a + i >> 1] <= t ? i = s : a = s;
					return a
				};
				return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
					return e ? (n = o(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0
				}, this
			},
			getInterpolateFunction: function (e) {
				var t = this;
				t.controller.spline || (t.controller.spline = t.params.loop ? new j.LinearSpline(t.slidesGrid, e.slidesGrid) : new j.LinearSpline(t.snapGrid, e.snapGrid))
			},
			setTranslate: function (e, t) {
				var a, i, s = this,
					r = s.controller.control;

				function n(e) {
					var t = s.rtlTranslate ? -s.translate : s.translate;
					"slide" === s.params.controller.by && (s.controller.getInterpolateFunction(e), i = -s.controller.spline.interpolate(-t)), i && "container" !== s.params.controller.by || (a = (e.maxTranslate() - e.minTranslate()) / (s.maxTranslate() - s.minTranslate()), i = (t - s.minTranslate()) * a + e.minTranslate()), s.params.controller.inverse && (i = e.maxTranslate() - i), e.updateProgress(i), e.setTranslate(i, s), e.updateActiveIndex(), e.updateSlidesClasses()
				}
				if (Array.isArray(r))
					for (var o = 0; o < r.length; o += 1) r[o] !== t && r[o] instanceof S && n(r[o]);
				else r instanceof S && t !== r && n(r)
			},
			setTransition: function (t, e) {
				var a, i = this,
					s = i.controller.control;

				function r(e) {
					e.setTransition(t, i), 0 !== t && (e.transitionStart(), e.params.autoHeight && V.nextTick(function () {
						e.updateAutoHeight()
					}), e.$wrapperEl.transitionEnd(function () {
						s && (e.params.loop && "slide" === i.params.controller.by && e.loopFix(), e.transitionEnd())
					}))
				}
				if (Array.isArray(s))
					for (a = 0; a < s.length; a += 1) s[a] !== e && s[a] instanceof S && r(s[a]);
				else s instanceof S && e !== s && r(s)
			}
		},
		U = {
			makeElFocusable: function (e) {
				return e.attr("tabIndex", "0"), e
			},
			addElRole: function (e, t) {
				return e.attr("role", t), e
			},
			addElLabel: function (e, t) {
				return e.attr("aria-label", t), e
			},
			disableEl: function (e) {
				return e.attr("aria-disabled", !0), e
			},
			enableEl: function (e) {
				return e.attr("aria-disabled", !1), e
			},
			onEnterKey: function (e) {
				var t = this,
					a = t.params.a11y;
				if (13 === e.keyCode) {
					var i = L(e.target);
					t.navigation && t.navigation.$nextEl && i.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? t.a11y.notify(a.lastSlideMessage) : t.a11y.notify(a.nextSlideMessage)), t.navigation && t.navigation.$prevEl && i.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? t.a11y.notify(a.firstSlideMessage) : t.a11y.notify(a.prevSlideMessage)), t.pagination && i.is("." + t.params.pagination.bulletClass) && i[0].click()
				}
			},
			notify: function (e) {
				var t = this.a11y.liveRegion;
				0 !== t.length && (t.html(""), t.html(e))
			},
			updateNavigation: function () {
				var e = this;
				if (!e.params.loop) {
					var t = e.navigation,
						a = t.$nextEl,
						i = t.$prevEl;
					i && 0 < i.length && (e.isBeginning ? e.a11y.disableEl(i) : e.a11y.enableEl(i)), a && 0 < a.length && (e.isEnd ? e.a11y.disableEl(a) : e.a11y.enableEl(a))
				}
			},
			updatePagination: function () {
				var i = this,
					s = i.params.a11y;
				i.pagination && i.params.pagination.clickable && i.pagination.bullets && i.pagination.bullets.length && i.pagination.bullets.each(function (e, t) {
					var a = L(t);
					i.a11y.makeElFocusable(a), i.a11y.addElRole(a, "button"), i.a11y.addElLabel(a, s.paginationBulletMessage.replace(/{{index}}/, a.index() + 1))
				})
			},
			init: function () {
				var e = this;
				e.$el.append(e.a11y.liveRegion);
				var t, a, i = e.params.a11y;
				e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (a = e.navigation.$prevEl), t && (e.a11y.makeElFocusable(t), e.a11y.addElRole(t, "button"), e.a11y.addElLabel(t, i.nextSlideMessage), t.on("keydown", e.a11y.onEnterKey)), a && (e.a11y.makeElFocusable(a), e.a11y.addElRole(a, "button"), e.a11y.addElLabel(a, i.prevSlideMessage), a.on("keydown", e.a11y.onEnterKey)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey)
			},
			destroy: function () {
				var e, t, a = this;
				a.a11y.liveRegion && 0 < a.a11y.liveRegion.length && a.a11y.liveRegion.remove(), a.navigation && a.navigation.$nextEl && (e = a.navigation.$nextEl), a.navigation && a.navigation.$prevEl && (t = a.navigation.$prevEl), e && e.off("keydown", a.a11y.onEnterKey), t && t.off("keydown", a.a11y.onEnterKey), a.pagination && a.params.pagination.clickable && a.pagination.bullets && a.pagination.bullets.length && a.pagination.$el.off("keydown", "." + a.params.pagination.bulletClass, a.a11y.onEnterKey)
			}
		},
		K = {
			init: function () {
				var e = this;
				if (e.params.history) {
					if (!Y.history || !Y.history.pushState) return e.params.history.enabled = !1, void(e.params.hashNavigation.enabled = !0);
					var t = e.history;
					t.initialized = !0, t.paths = K.getPathValues(), (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || Y.addEventListener("popstate", e.history.setHistoryPopState))
				}
			},
			destroy: function () {
				this.params.history.replaceState || Y.removeEventListener("popstate", this.history.setHistoryPopState)
			},
			setHistoryPopState: function () {
				this.history.paths = K.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
			},
			getPathValues: function () {
				var e = Y.location.pathname.slice(1).split("/").filter(function (e) {
						return "" !== e
					}),
					t = e.length;
				return {
					key: e[t - 2],
					value: e[t - 1]
				}
			},
			setHistory: function (e, t) {
				if (this.history.initialized && this.params.history.enabled) {
					var a = this.slides.eq(t),
						i = K.slugify(a.attr("data-history"));
					Y.location.pathname.includes(e) || (i = e + "/" + i);
					var s = Y.history.state;
					s && s.value === i || (this.params.history.replaceState ? Y.history.replaceState({
						value: i
					}, null, i) : Y.history.pushState({
						value: i
					}, null, i))
				}
			},
			slugify: function (e) {
				return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
			},
			scrollToSlide: function (e, t, a) {
				var i = this;
				if (t)
					for (var s = 0, r = i.slides.length; s < r; s += 1) {
						var n = i.slides.eq(s);
						if (K.slugify(n.attr("data-history")) === t && !n.hasClass(i.params.slideDuplicateClass)) {
							var o = n.index();
							i.slideTo(o, e, a)
						}
					} else i.slideTo(0, e, a)
			}
		},
		_ = {
			onHashCange: function () {
				var e = this,
					t = f.location.hash.replace("#", "");
				if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
					var a = e.$wrapperEl.children("." + e.params.slideClass + '[data-hash="' + t + '"]').index();
					if (void 0 === a) return;
					e.slideTo(a)
				}
			},
			setHash: function () {
				var e = this;
				if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
					if (e.params.hashNavigation.replaceState && Y.history && Y.history.replaceState) Y.history.replaceState(null, null, "#" + e.slides.eq(e.activeIndex).attr("data-hash") || "");
					else {
						var t = e.slides.eq(e.activeIndex),
							a = t.attr("data-hash") || t.attr("data-history");
						f.location.hash = a || ""
					}
			},
			init: function () {
				var e = this;
				if (!(!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled)) {
					e.hashNavigation.initialized = !0;
					var t = f.location.hash.replace("#", "");
					if (t)
						for (var a = 0, i = e.slides.length; a < i; a += 1) {
							var s = e.slides.eq(a);
							if ((s.attr("data-hash") || s.attr("data-history")) === t && !s.hasClass(e.params.slideDuplicateClass)) {
								var r = s.index();
								e.slideTo(r, 0, e.params.runCallbacksOnInit, !0)
							}
						}
					e.params.hashNavigation.watchState && L(Y).on("hashchange", e.hashNavigation.onHashCange)
				}
			},
			destroy: function () {
				this.params.hashNavigation.watchState && L(Y).off("hashchange", this.hashNavigation.onHashCange)
			}
		},
		Z = {
			run: function () {
				var e = this,
					t = e.slides.eq(e.activeIndex),
					a = e.params.autoplay.delay;
				t.attr("data-swiper-autoplay") && (a = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = V.nextTick(function () {
					e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"))
				}, a)
			},
			start: function () {
				var e = this;
				return void 0 === e.autoplay.timeout && (!e.autoplay.running && (e.autoplay.running = !0, e.emit("autoplayStart"), e.autoplay.run(), !0))
			},
			stop: function () {
				var e = this;
				return !!e.autoplay.running && (void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0))
			},
			pause: function (e) {
				var t = this;
				t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)) : (t.autoplay.paused = !1, t.autoplay.run())))
			}
		},
		Q = {
			setTranslate: function () {
				for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) {
					var i = e.slides.eq(a),
						s = -i[0].swiperSlideOffset;
					e.params.virtualTranslate || (s -= e.translate);
					var r = 0;
					e.isHorizontal() || (r = s, s = 0);
					var n = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
					i.css({
						opacity: n
					}).transform("translate3d(" + s + "px, " + r + "px, 0px)")
				}
			},
			setTransition: function (e) {
				var a = this,
					t = a.slides,
					i = a.$wrapperEl;
				if (t.transition(e), a.params.virtualTranslate && 0 !== e) {
					var s = !1;
					t.transitionEnd(function () {
						if (!s && a && !a.destroyed) {
							s = !0, a.animating = !1;
							for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1) i.trigger(e[t])
						}
					})
				}
			}
		},
		J = {
			setTranslate: function () {
				var e, t = this,
					a = t.$el,
					i = t.$wrapperEl,
					s = t.slides,
					r = t.width,
					n = t.height,
					o = t.rtlTranslate,
					l = t.size,
					d = t.params.cubeEffect,
					p = t.isHorizontal(),
					c = t.virtual && t.params.virtual.enabled,
					u = 0;
				d.shadow && (p ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = L('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({
					height: r + "px"
				})) : 0 === (e = a.find(".swiper-cube-shadow")).length && (e = L('<div class="swiper-cube-shadow"></div>'), a.append(e)));
				for (var h = 0; h < s.length; h += 1) {
					var v = s.eq(h),
						f = h;
					c && (f = parseInt(v.attr("data-swiper-slide-index"), 10));
					var m = 90 * f,
						g = Math.floor(m / 360);
					o && (m = -m, g = Math.floor(-m / 360));
					var b = Math.max(Math.min(v[0].progress, 1), -1),
						w = 0,
						y = 0,
						x = 0;
					f % 4 == 0 ? (w = 4 * -g * l, x = 0) : (f - 1) % 4 == 0 ? (w = 0, x = 4 * -g * l) : (f - 2) % 4 == 0 ? (w = l + 4 * g * l, x = l) : (f - 3) % 4 == 0 && (w = -l, x = 3 * l + 4 * l * g), o && (w = -w), p || (y = w, w = 0);
					var T = "rotateX(" + (p ? 0 : -m) + "deg) rotateY(" + (p ? m : 0) + "deg) translate3d(" + w + "px, " + y + "px, " + x + "px)";
					if (b <= 1 && -1 < b && (u = 90 * f + 90 * b, o && (u = 90 * -f - 90 * b)), v.transform(T), d.slideShadows) {
						var E = p ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
							S = p ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
						0 === E.length && (E = L('<div class="swiper-slide-shadow-' + (p ? "left" : "top") + '"></div>'), v.append(E)), 0 === S.length && (S = L('<div class="swiper-slide-shadow-' + (p ? "right" : "bottom") + '"></div>'), v.append(S)), E.length && (E[0].style.opacity = Math.max(-b, 0)), S.length && (S[0].style.opacity = Math.max(b, 0))
					}
				}
				if (i.css({
						"-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
						"-moz-transform-origin": "50% 50% -" + l / 2 + "px",
						"-ms-transform-origin": "50% 50% -" + l / 2 + "px",
						"transform-origin": "50% 50% -" + l / 2 + "px"
					}), d.shadow)
					if (p) e.transform("translate3d(0px, " + (r / 2 + d.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");
					else {
						var C = Math.abs(u) - 90 * Math.floor(Math.abs(u) / 90),
							M = 1.5 - (Math.sin(2 * C * Math.PI / 360) / 2 + Math.cos(2 * C * Math.PI / 360) / 2),
							k = d.shadowScale,
							z = d.shadowScale / M,
							P = d.shadowOffset;
						e.transform("scale3d(" + k + ", 1, " + z + ") translate3d(0px, " + (n / 2 + P) + "px, " + -n / 2 / z + "px) rotateX(-90deg)")
					} var $ = I.isSafari || I.isUiWebView ? -l / 2 : 0;
				i.transform("translate3d(0px,0," + $ + "px) rotateX(" + (t.isHorizontal() ? 0 : u) + "deg) rotateY(" + (t.isHorizontal() ? -u : 0) + "deg)")
			},
			setTransition: function (e) {
				var t = this.$el;
				this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
			}
		},
		ee = {
			setTranslate: function () {
				for (var e = this, t = e.slides, a = e.rtlTranslate, i = 0; i < t.length; i += 1) {
					var s = t.eq(i),
						r = s[0].progress;
					e.params.flipEffect.limitRotation && (r = Math.max(Math.min(s[0].progress, 1), -1));
					var n = -180 * r,
						o = 0,
						l = -s[0].swiperSlideOffset,
						d = 0;
					if (e.isHorizontal() ? a && (n = -n) : (d = l, o = -n, n = l = 0), s[0].style.zIndex = -Math.abs(Math.round(r)) + t.length, e.params.flipEffect.slideShadows) {
						var p = e.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
							c = e.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
						0 === p.length && (p = L('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "left" : "top") + '"></div>'), s.append(p)), 0 === c.length && (c = L('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "right" : "bottom") + '"></div>'), s.append(c)), p.length && (p[0].style.opacity = Math.max(-r, 0)), c.length && (c[0].style.opacity = Math.max(r, 0))
					}
					s.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)")
				}
			},
			setTransition: function (e) {
				var a = this,
					t = a.slides,
					i = a.activeIndex,
					s = a.$wrapperEl;
				if (t.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), a.params.virtualTranslate && 0 !== e) {
					var r = !1;
					t.eq(i).transitionEnd(function () {
						if (!r && a && !a.destroyed) {
							r = !0, a.animating = !1;
							for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1) s.trigger(e[t])
						}
					})
				}
			}
		},
		te = {
			setTranslate: function () {
				for (var e = this, t = e.width, a = e.height, i = e.slides, s = e.$wrapperEl, r = e.slidesSizesGrid, n = e.params.coverflowEffect, o = e.isHorizontal(), l = e.translate, d = o ? t / 2 - l : a / 2 - l, p = o ? n.rotate : -n.rotate, c = n.depth, u = 0, h = i.length; u < h; u += 1) {
					var v = i.eq(u),
						f = r[u],
						m = (d - v[0].swiperSlideOffset - f / 2) / f * n.modifier,
						g = o ? p * m : 0,
						b = o ? 0 : p * m,
						w = -c * Math.abs(m),
						y = o ? 0 : n.stretch * m,
						x = o ? n.stretch * m : 0;
					Math.abs(x) < .001 && (x = 0), Math.abs(y) < .001 && (y = 0), Math.abs(w) < .001 && (w = 0), Math.abs(g) < .001 && (g = 0), Math.abs(b) < .001 && (b = 0);
					var T = "translate3d(" + x + "px," + y + "px," + w + "px)  rotateX(" + b + "deg) rotateY(" + g + "deg)";
					if (v.transform(T), v[0].style.zIndex = 1 - Math.abs(Math.round(m)), n.slideShadows) {
						var E = o ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
							S = o ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
						0 === E.length && (E = L('<div class="swiper-slide-shadow-' + (o ? "left" : "top") + '"></div>'), v.append(E)), 0 === S.length && (S = L('<div class="swiper-slide-shadow-' + (o ? "right" : "bottom") + '"></div>'), v.append(S)), E.length && (E[0].style.opacity = 0 < m ? m : 0), S.length && (S[0].style.opacity = 0 < -m ? -m : 0)
					}
				}(R.pointerEvents || R.prefixedPointerEvents) && (s[0].style.perspectiveOrigin = d + "px 50%")
			},
			setTransition: function (e) {
				this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
			}
		},
		ae = {
			init: function () {
				var e = this,
					t = e.params.thumbs,
					a = e.constructor;
				t.swiper instanceof a ? (e.thumbs.swiper = t.swiper, V.extend(e.thumbs.swiper.originalParams, {
					watchSlidesProgress: !0,
					slideToClickedSlide: !1
				}), V.extend(e.thumbs.swiper.params, {
					watchSlidesProgress: !0,
					slideToClickedSlide: !1
				})) : V.isObject(t.swiper) && (e.thumbs.swiper = new a(V.extend({}, t.swiper, {
					watchSlidesVisibility: !0,
					watchSlidesProgress: !0,
					slideToClickedSlide: !1
				})), e.thumbs.swiperCreated = !0), e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", e.thumbs.onThumbClick)
			},
			onThumbClick: function () {
				var e = this,
					t = e.thumbs.swiper;
				if (t) {
					var a = t.clickedIndex;
					if (null != a) {
						var i;
						if (i = t.params.loop ? parseInt(L(t.clickedSlide).attr("data-swiper-slide-index"), 10) : a, e.params.loop) {
							var s = e.activeIndex;
							e.slides.eq(s).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, s = e.activeIndex);
							var r = e.slides.eq(s).prevAll('[data-swiper-slide-index="' + i + '"]').eq(0).index(),
								n = e.slides.eq(s).nextAll('[data-swiper-slide-index="' + i + '"]').eq(0).index();
							i = void 0 === r ? n : void 0 === n ? r : n - s < s - r ? n : r
						}
						e.slideTo(i)
					}
				}
			},
			update: function (e) {
				var t = this,
					a = t.thumbs.swiper;
				if (a) {
					var i = "auto" === a.params.slidesPerView ? a.slidesPerViewDynamic() : a.params.slidesPerView;
					if (t.realIndex !== a.realIndex) {
						var s, r = a.activeIndex;
						if (a.params.loop) {
							a.slides.eq(r).hasClass(a.params.slideDuplicateClass) && (a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft, r = a.activeIndex);
							var n = a.slides.eq(r).prevAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index(),
								o = a.slides.eq(r).nextAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index();
							s = void 0 === n ? o : void 0 === o ? n : o - r < r - n ? o : n
						} else s = t.realIndex;
						a.visibleSlidesIndexes.indexOf(s) < 0 && (a.params.centeredSlides ? s = r < s ? s - Math.floor(i / 2) + 1 : s + Math.floor(i / 2) - 1 : r < s && (s = s - i + 1), a.slideTo(s, e ? 0 : void 0))
					}
					var l = 1,
						d = t.params.thumbs.slideThumbActiveClass;
					if (1 < t.params.slidesPerView && !t.params.centeredSlides && (l = t.params.slidesPerView), a.slides.removeClass(d), a.params.loop)
						for (var p = 0; p < l; p += 1) a.$wrapperEl.children('[data-swiper-slide-index="' + (t.realIndex + p) + '"]').addClass(d);
					else
						for (var c = 0; c < l; c += 1) a.slides.eq(t.realIndex + c).addClass(d)
				}
			}
		},
		ie = [C, M, k, z, $, O, H, {
			name: "mousewheel",
			params: {
				mousewheel: {
					enabled: !1,
					releaseOnEdges: !1,
					invert: !1,
					forceToAxis: !1,
					sensitivity: 1,
					eventsTarged: "container"
				}
			},
			create: function () {
				var e = this;
				V.extend(e, {
					mousewheel: {
						enabled: !1,
						enable: B.enable.bind(e),
						disable: B.disable.bind(e),
						handle: B.handle.bind(e),
						handleMouseEnter: B.handleMouseEnter.bind(e),
						handleMouseLeave: B.handleMouseLeave.bind(e),
						lastScrollTime: V.now()
					}
				})
			},
			on: {
				init: function () {
					this.params.mousewheel.enabled && this.mousewheel.enable()
				},
				destroy: function () {
					this.mousewheel.enabled && this.mousewheel.disable()
				}
			}
		}, {
			name: "navigation",
			params: {
				navigation: {
					nextEl: null,
					prevEl: null,
					hideOnClick: !1,
					disabledClass: "swiper-button-disabled",
					hiddenClass: "swiper-button-hidden",
					lockClass: "swiper-button-lock"
				}
			},
			create: function () {
				V.extend(this, {
					navigation: {
						init: G.init.bind(this),
						update: G.update.bind(this),
						destroy: G.destroy.bind(this)
					}
				})
			},
			on: {
				init: function () {
					this.navigation.init(), this.navigation.update()
				},
				toEdge: function () {
					this.navigation.update()
				},
				fromEdge: function () {
					this.navigation.update()
				},
				destroy: function () {
					this.navigation.destroy()
				},
				click: function (e) {
					var t = this.navigation,
						a = t.$nextEl,
						i = t.$prevEl;
					!this.params.navigation.hideOnClick || L(e.target).is(i) || L(e.target).is(a) || (a && a.toggleClass(this.params.navigation.hiddenClass), i && i.toggleClass(this.params.navigation.hiddenClass))
				}
			}
		}, {
			name: "pagination",
			params: {
				pagination: {
					el: null,
					bulletElement: "span",
					clickable: !1,
					hideOnClick: !1,
					renderBullet: null,
					renderProgressbar: null,
					renderFraction: null,
					renderCustom: null,
					progressbarOpposite: !1,
					type: "bullets",
					dynamicBullets: !1,
					dynamicMainBullets: 1,
					formatFractionCurrent: function (e) {
						return e
					},
					formatFractionTotal: function (e) {
						return e
					},
					bulletClass: "swiper-pagination-bullet",
					bulletActiveClass: "swiper-pagination-bullet-active",
					modifierClass: "swiper-pagination-",
					currentClass: "swiper-pagination-current",
					totalClass: "swiper-pagination-total",
					hiddenClass: "swiper-pagination-hidden",
					progressbarFillClass: "swiper-pagination-progressbar-fill",
					progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
					clickableClass: "swiper-pagination-clickable",
					lockClass: "swiper-pagination-lock"
				}
			},
			create: function () {
				var e = this;
				V.extend(e, {
					pagination: {
						init: N.init.bind(e),
						render: N.render.bind(e),
						update: N.update.bind(e),
						destroy: N.destroy.bind(e),
						dynamicBulletIndex: 0
					}
				})
			},
			on: {
				init: function () {
					this.pagination.init(), this.pagination.render(), this.pagination.update()
				},
				activeIndexChange: function () {
					this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update()
				},
				snapIndexChange: function () {
					this.params.loop || this.pagination.update()
				},
				slidesLengthChange: function () {
					this.params.loop && (this.pagination.render(), this.pagination.update())
				},
				snapGridLengthChange: function () {
					this.params.loop || (this.pagination.render(), this.pagination.update())
				},
				destroy: function () {
					this.pagination.destroy()
				},
				click: function (e) {
					var t = this;
					t.params.pagination.el && t.params.pagination.hideOnClick && 0 < t.pagination.$el.length && !L(e.target).hasClass(t.params.pagination.bulletClass) && t.pagination.$el.toggleClass(t.params.pagination.hiddenClass)
				}
			}
		}, {
			name: "scrollbar",
			params: {
				scrollbar: {
					el: null,
					dragSize: "auto",
					hide: !1,
					draggable: !1,
					snapOnRelease: !0,
					lockClass: "swiper-scrollbar-lock",
					dragClass: "swiper-scrollbar-drag"
				}
			},
			create: function () {
				var e = this;
				V.extend(e, {
					scrollbar: {
						init: X.init.bind(e),
						destroy: X.destroy.bind(e),
						updateSize: X.updateSize.bind(e),
						setTranslate: X.setTranslate.bind(e),
						setTransition: X.setTransition.bind(e),
						enableDraggable: X.enableDraggable.bind(e),
						disableDraggable: X.disableDraggable.bind(e),
						setDragPosition: X.setDragPosition.bind(e),
						onDragStart: X.onDragStart.bind(e),
						onDragMove: X.onDragMove.bind(e),
						onDragEnd: X.onDragEnd.bind(e),
						isTouched: !1,
						timeout: null,
						dragTimeout: null
					}
				})
			},
			on: {
				init: function () {
					this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate()
				},
				update: function () {
					this.scrollbar.updateSize()
				},
				resize: function () {
					this.scrollbar.updateSize()
				},
				observerUpdate: function () {
					this.scrollbar.updateSize()
				},
				setTranslate: function () {
					this.scrollbar.setTranslate()
				},
				setTransition: function (e) {
					this.scrollbar.setTransition(e)
				},
				destroy: function () {
					this.scrollbar.destroy()
				}
			}
		}, {
			name: "parallax",
			params: {
				parallax: {
					enabled: !1
				}
			},
			create: function () {
				V.extend(this, {
					parallax: {
						setTransform: F.setTransform.bind(this),
						setTranslate: F.setTranslate.bind(this),
						setTransition: F.setTransition.bind(this)
					}
				})
			},
			on: {
				beforeInit: function () {
					this.params.parallax.enabled && (this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
				},
				init: function () {
					this.params.parallax && this.parallax.setTranslate()
				},
				setTranslate: function () {
					this.params.parallax && this.parallax.setTranslate()
				},
				setTransition: function (e) {
					this.params.parallax && this.parallax.setTransition(e)
				}
			}
		}, {
			name: "zoom",
			params: {
				zoom: {
					enabled: !1,
					maxRatio: 3,
					minRatio: 1,
					toggle: !0,
					containerClass: "swiper-zoom-container",
					zoomedSlideClass: "swiper-slide-zoomed"
				}
			},
			create: function () {
				var t = this,
					a = {
						enabled: !1,
						scale: 1,
						currentScale: 1,
						isScaling: !1,
						gesture: {
							$slideEl: void 0,
							slideWidth: void 0,
							slideHeight: void 0,
							$imageEl: void 0,
							$imageWrapEl: void 0,
							maxRatio: 3
						},
						image: {
							isTouched: void 0,
							isMoved: void 0,
							currentX: void 0,
							currentY: void 0,
							minX: void 0,
							minY: void 0,
							maxX: void 0,
							maxY: void 0,
							width: void 0,
							height: void 0,
							startX: void 0,
							startY: void 0,
							touchesStart: {},
							touchesCurrent: {}
						},
						velocity: {
							x: void 0,
							y: void 0,
							prevPositionX: void 0,
							prevPositionY: void 0,
							prevTime: void 0
						}
					};
				"onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function (e) {
					a[e] = q[e].bind(t)
				}), V.extend(t, {
					zoom: a
				})
			},
			on: {
				init: function () {
					this.params.zoom.enabled && this.zoom.enable()
				},
				destroy: function () {
					this.zoom.disable()
				},
				touchStart: function (e) {
					this.zoom.enabled && this.zoom.onTouchStart(e)
				},
				touchEnd: function (e) {
					this.zoom.enabled && this.zoom.onTouchEnd(e)
				},
				doubleTap: function (e) {
					this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
				},
				transitionEnd: function () {
					this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
				}
			}
		}, {
			name: "lazy",
			params: {
				lazy: {
					enabled: !1,
					loadPrevNext: !1,
					loadPrevNextAmount: 1,
					loadOnTransitionStart: !1,
					elementClass: "swiper-lazy",
					loadingClass: "swiper-lazy-loading",
					loadedClass: "swiper-lazy-loaded",
					preloaderClass: "swiper-lazy-preloader"
				}
			},
			create: function () {
				V.extend(this, {
					lazy: {
						initialImageLoaded: !1,
						load: W.load.bind(this),
						loadInSlide: W.loadInSlide.bind(this)
					}
				})
			},
			on: {
				beforeInit: function () {
					this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
				},
				init: function () {
					this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
				},
				scroll: function () {
					this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
				},
				resize: function () {
					this.params.lazy.enabled && this.lazy.load()
				},
				scrollbarDragMove: function () {
					this.params.lazy.enabled && this.lazy.load()
				},
				transitionStart: function () {
					var e = this;
					e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load()
				},
				transitionEnd: function () {
					this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
				}
			}
		}, {
			name: "controller",
			params: {
				controller: {
					control: void 0,
					inverse: !1,
					by: "slide"
				}
			},
			create: function () {
				var e = this;
				V.extend(e, {
					controller: {
						control: e.params.controller.control,
						getInterpolateFunction: j.getInterpolateFunction.bind(e),
						setTranslate: j.setTranslate.bind(e),
						setTransition: j.setTransition.bind(e)
					}
				})
			},
			on: {
				update: function () {
					this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
				},
				resize: function () {
					this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
				},
				observerUpdate: function () {
					this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
				},
				setTranslate: function (e, t) {
					this.controller.control && this.controller.setTranslate(e, t)
				},
				setTransition: function (e, t) {
					this.controller.control && this.controller.setTransition(e, t)
				}
			}
		}, {
			name: "a11y",
			params: {
				a11y: {
					enabled: !0,
					notificationClass: "swiper-notification",
					prevSlideMessage: "Previous slide",
					nextSlideMessage: "Next slide",
					firstSlideMessage: "This is the first slide",
					lastSlideMessage: "This is the last slide",
					paginationBulletMessage: "Go to slide {{index}}"
				}
			},
			create: function () {
				var t = this;
				V.extend(t, {
					a11y: {
						liveRegion: L('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
					}
				}), Object.keys(U).forEach(function (e) {
					t.a11y[e] = U[e].bind(t)
				})
			},
			on: {
				init: function () {
					this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation())
				},
				toEdge: function () {
					this.params.a11y.enabled && this.a11y.updateNavigation()
				},
				fromEdge: function () {
					this.params.a11y.enabled && this.a11y.updateNavigation()
				},
				paginationUpdate: function () {
					this.params.a11y.enabled && this.a11y.updatePagination()
				},
				destroy: function () {
					this.params.a11y.enabled && this.a11y.destroy()
				}
			}
		}, {
			name: "history",
			params: {
				history: {
					enabled: !1,
					replaceState: !1,
					key: "slides"
				}
			},
			create: function () {
				var e = this;
				V.extend(e, {
					history: {
						init: K.init.bind(e),
						setHistory: K.setHistory.bind(e),
						setHistoryPopState: K.setHistoryPopState.bind(e),
						scrollToSlide: K.scrollToSlide.bind(e),
						destroy: K.destroy.bind(e)
					}
				})
			},
			on: {
				init: function () {
					this.params.history.enabled && this.history.init()
				},
				destroy: function () {
					this.params.history.enabled && this.history.destroy()
				},
				transitionEnd: function () {
					this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
				}
			}
		}, {
			name: "hash-navigation",
			params: {
				hashNavigation: {
					enabled: !1,
					replaceState: !1,
					watchState: !1
				}
			},
			create: function () {
				var e = this;
				V.extend(e, {
					hashNavigation: {
						initialized: !1,
						init: _.init.bind(e),
						destroy: _.destroy.bind(e),
						setHash: _.setHash.bind(e),
						onHashCange: _.onHashCange.bind(e)
					}
				})
			},
			on: {
				init: function () {
					this.params.hashNavigation.enabled && this.hashNavigation.init()
				},
				destroy: function () {
					this.params.hashNavigation.enabled && this.hashNavigation.destroy()
				},
				transitionEnd: function () {
					this.hashNavigation.initialized && this.hashNavigation.setHash()
				}
			}
		}, {
			name: "autoplay",
			params: {
				autoplay: {
					enabled: !1,
					delay: 3e3,
					waitForTransition: !0,
					disableOnInteraction: !0,
					stopOnLastSlide: !1,
					reverseDirection: !1
				}
			},
			create: function () {
				var t = this;
				V.extend(t, {
					autoplay: {
						running: !1,
						paused: !1,
						run: Z.run.bind(t),
						start: Z.start.bind(t),
						stop: Z.stop.bind(t),
						pause: Z.pause.bind(t),
						onTransitionEnd: function (e) {
							t && !t.destroyed && t.$wrapperEl && e.target === this && (t.$wrapperEl[0].removeEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].removeEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd), t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop())
						}
					}
				})
			},
			on: {
				init: function () {
					this.params.autoplay.enabled && this.autoplay.start()
				},
				beforeTransitionStart: function (e, t) {
					this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
				},
				sliderFirstMove: function () {
					this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
				},
				destroy: function () {
					this.autoplay.running && this.autoplay.stop()
				}
			}
		}, {
			name: "effect-fade",
			params: {
				fadeEffect: {
					crossFade: !1
				}
			},
			create: function () {
				V.extend(this, {
					fadeEffect: {
						setTranslate: Q.setTranslate.bind(this),
						setTransition: Q.setTransition.bind(this)
					}
				})
			},
			on: {
				beforeInit: function () {
					var e = this;
					if ("fade" === e.params.effect) {
						e.classNames.push(e.params.containerModifierClass + "fade");
						var t = {
							slidesPerView: 1,
							slidesPerColumn: 1,
							slidesPerGroup: 1,
							watchSlidesProgress: !0,
							spaceBetween: 0,
							virtualTranslate: !0
						};
						V.extend(e.params, t), V.extend(e.originalParams, t)
					}
				},
				setTranslate: function () {
					"fade" === this.params.effect && this.fadeEffect.setTranslate()
				},
				setTransition: function (e) {
					"fade" === this.params.effect && this.fadeEffect.setTransition(e)
				}
			}
		}, {
			name: "effect-cube",
			params: {
				cubeEffect: {
					slideShadows: !0,
					shadow: !0,
					shadowOffset: 20,
					shadowScale: .94
				}
			},
			create: function () {
				V.extend(this, {
					cubeEffect: {
						setTranslate: J.setTranslate.bind(this),
						setTransition: J.setTransition.bind(this)
					}
				})
			},
			on: {
				beforeInit: function () {
					var e = this;
					if ("cube" === e.params.effect) {
						e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d");
						var t = {
							slidesPerView: 1,
							slidesPerColumn: 1,
							slidesPerGroup: 1,
							watchSlidesProgress: !0,
							resistanceRatio: 0,
							spaceBetween: 0,
							centeredSlides: !1,
							virtualTranslate: !0
						};
						V.extend(e.params, t), V.extend(e.originalParams, t)
					}
				},
				setTranslate: function () {
					"cube" === this.params.effect && this.cubeEffect.setTranslate()
				},
				setTransition: function (e) {
					"cube" === this.params.effect && this.cubeEffect.setTransition(e)
				}
			}
		}, {
			name: "effect-flip",
			params: {
				flipEffect: {
					slideShadows: !0,
					limitRotation: !0
				}
			},
			create: function () {
				V.extend(this, {
					flipEffect: {
						setTranslate: ee.setTranslate.bind(this),
						setTransition: ee.setTransition.bind(this)
					}
				})
			},
			on: {
				beforeInit: function () {
					var e = this;
					if ("flip" === e.params.effect) {
						e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d");
						var t = {
							slidesPerView: 1,
							slidesPerColumn: 1,
							slidesPerGroup: 1,
							watchSlidesProgress: !0,
							spaceBetween: 0,
							virtualTranslate: !0
						};
						V.extend(e.params, t), V.extend(e.originalParams, t)
					}
				},
				setTranslate: function () {
					"flip" === this.params.effect && this.flipEffect.setTranslate()
				},
				setTransition: function (e) {
					"flip" === this.params.effect && this.flipEffect.setTransition(e)
				}
			}
		}, {
			name: "effect-coverflow",
			params: {
				coverflowEffect: {
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: !0
				}
			},
			create: function () {
				V.extend(this, {
					coverflowEffect: {
						setTranslate: te.setTranslate.bind(this),
						setTransition: te.setTransition.bind(this)
					}
				})
			},
			on: {
				beforeInit: function () {
					var e = this;
					"coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
				},
				setTranslate: function () {
					"coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
				},
				setTransition: function (e) {
					"coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
				}
			}
		}, {
			name: "thumbs",
			params: {
				thumbs: {
					swiper: null,
					slideThumbActiveClass: "swiper-slide-thumb-active",
					thumbsContainerClass: "swiper-container-thumbs"
				}
			},
			create: function () {
				V.extend(this, {
					thumbs: {
						swiper: null,
						init: ae.init.bind(this),
						update: ae.update.bind(this),
						onThumbClick: ae.onThumbClick.bind(this)
					}
				})
			},
			on: {
				beforeInit: function () {
					var e = this.params.thumbs;
					e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0))
				},
				slideChange: function () {
					this.thumbs.swiper && this.thumbs.update()
				},
				update: function () {
					this.thumbs.swiper && this.thumbs.update()
				},
				resize: function () {
					this.thumbs.swiper && this.thumbs.update()
				},
				observerUpdate: function () {
					this.thumbs.swiper && this.thumbs.update()
				},
				setTransition: function (e) {
					var t = this.thumbs.swiper;
					t && t.setTransition(e)
				},
				beforeDestroy: function () {
					var e = this.thumbs.swiper;
					e && this.thumbs.swiperCreated && e && e.destroy()
				}
			}
		}];
	return void 0 === S.use && (S.use = S.Class.use, S.installModule = S.Class.installModule), S.use(ie), S
});