/*
 * This combined file was created by the DataTables downloader builder:
 *   https://datatables.net/download
 *
 * To rebuild or modify this file with the latest versions of the included
 * software please visit:
 *   https://datatables.net/download/#bs4/jszip-2.5.0/dt-1.10.20/b-1.6.0/b-html5-1.6.0
 *
 * Included libraries:
 *  JSZip 2.5.0, DataTables 1.10.20, Buttons 1.6.0, HTML5 export 1.6.0
 */

/*!

JSZip - A Javascript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2014 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/master/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/master/LICENSE
*/
! function (a) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = a();
    else if ("function" == typeof define && define.amd) define([], a);
    else {
        var b;
        "undefined" != typeof window ? b = window : "undefined" != typeof global ? b = global : "undefined" != typeof self && (b = self), b.JSZip = a()
    }
}(function () {
    return function a(b, c, d) {
        function e(g, h) {
            if (!c[g]) {
                if (!b[g]) {
                    var i = "function" == typeof require && require;
                    if (!h && i) return i(g, !0);
                    if (f) return f(g, !0);
                    throw new Error("Cannot find module '" + g + "'")
                }
                var j = c[g] = {
                    exports: {}
                };
                b[g][0].call(j.exports, function (a) {
                    var c = b[g][1][a];
                    return e(c ? c : a)
                }, j, j.exports, a, b, c, d)
            }
            return c[g].exports
        }
        for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]);
        return e
    }({
        1: [function (a, b, c) {
            "use strict";
            var d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            c.encode = function (a) {
                for (var b, c, e, f, g, h, i, j = "", k = 0; k < a.length;) b = a.charCodeAt(k++), c = a.charCodeAt(k++), e = a.charCodeAt(k++), f = b >> 2, g = (3 & b) << 4 | c >> 4, h = (15 & c) << 2 | e >> 6, i = 63 & e, isNaN(c) ? h = i = 64 : isNaN(e) && (i = 64), j = j + d.charAt(f) + d.charAt(g) + d.charAt(h) + d.charAt(i);
                return j
            }, c.decode = function (a) {
                var b, c, e, f, g, h, i, j = "",
                    k = 0;
                for (a = a.replace(/[^A-Za-z0-9\+\/\=]/g, ""); k < a.length;) f = d.indexOf(a.charAt(k++)), g = d.indexOf(a.charAt(k++)), h = d.indexOf(a.charAt(k++)), i = d.indexOf(a.charAt(k++)), b = f << 2 | g >> 4, c = (15 & g) << 4 | h >> 2, e = (3 & h) << 6 | i, j += String.fromCharCode(b), 64 != h && (j += String.fromCharCode(c)), 64 != i && (j += String.fromCharCode(e));
                return j
            }
        }, {}],
        2: [function (a, b) {
            "use strict";

            function c() {
                this.compressedSize = 0, this.uncompressedSize = 0, this.crc32 = 0, this.compressionMethod = null, this.compressedContent = null
            }
            c.prototype = {
                getContent: function () {
                    return null
                },
                getCompressedContent: function () {
                    return null
                }
            }, b.exports = c
        }, {}],
        3: [function (a, b, c) {
            "use strict";
            c.STORE = {
                magic: "\x00\x00",
                compress: function (a) {
                    return a
                },
                uncompress: function (a) {
                    return a
                },
                compressInputType: null,
                uncompressInputType: null
            }, c.DEFLATE = a("./flate")
        }, {
            "./flate": 8
        }],
        4: [function (a, b) {
            "use strict";
            var c = a("./utils"),
                d = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117];
            b.exports = function (a, b) {
                if ("undefined" == typeof a || !a.length) return 0;
                var e = "string" !== c.getTypeOf(a);
                "undefined" == typeof b && (b = 0);
                var f = 0,
                    g = 0,
                    h = 0;
                b = -1 ^ b;
                for (var i = 0, j = a.length; j > i; i++) h = e ? a[i] : a.charCodeAt(i), g = 255 & (b ^ h), f = d[g], b = b >>> 8 ^ f;
                return -1 ^ b
            }
        }, {
            "./utils": 21
        }],
        5: [function (a, b) {
            "use strict";

            function c() {
                this.data = null, this.length = 0, this.index = 0
            }
            var d = a("./utils");
            c.prototype = {
                checkOffset: function (a) {
                    this.checkIndex(this.index + a)
                },
                checkIndex: function (a) {
                    if (this.length < a || 0 > a) throw new Error("End of data reached (data length = " + this.length + ", asked index = " + a + "). Corrupted zip ?")
                },
                setIndex: function (a) {
                    this.checkIndex(a), this.index = a
                },
                skip: function (a) {
                    this.setIndex(this.index + a)
                },
                byteAt: function () {},
                readInt: function (a) {
                    var b, c = 0;
                    for (this.checkOffset(a), b = this.index + a - 1; b >= this.index; b--) c = (c << 8) + this.byteAt(b);
                    return this.index += a, c
                },
                readString: function (a) {
                    return d.transformTo("string", this.readData(a))
                },
                readData: function () {},
                lastIndexOfSignature: function () {},
                readDate: function () {
                    var a = this.readInt(4);
                    return new Date((a >> 25 & 127) + 1980, (a >> 21 & 15) - 1, a >> 16 & 31, a >> 11 & 31, a >> 5 & 63, (31 & a) << 1)
                }
            }, b.exports = c
        }, {
            "./utils": 21
        }],
        6: [function (a, b, c) {
            "use strict";
            c.base64 = !1, c.binary = !1, c.dir = !1, c.createFolders = !1, c.date = null, c.compression = null, c.compressionOptions = null, c.comment = null, c.unixPermissions = null, c.dosPermissions = null
        }, {}],
        7: [function (a, b, c) {
            "use strict";
            var d = a("./utils");
            c.string2binary = function (a) {
                return d.string2binary(a)
            }, c.string2Uint8Array = function (a) {
                return d.transformTo("uint8array", a)
            }, c.uint8Array2String = function (a) {
                return d.transformTo("string", a)
            }, c.string2Blob = function (a) {
                var b = d.transformTo("arraybuffer", a);
                return d.arrayBuffer2Blob(b)
            }, c.arrayBuffer2Blob = function (a) {
                return d.arrayBuffer2Blob(a)
            }, c.transformTo = function (a, b) {
                return d.transformTo(a, b)
            }, c.getTypeOf = function (a) {
                return d.getTypeOf(a)
            }, c.checkSupport = function (a) {
                return d.checkSupport(a)
            }, c.MAX_VALUE_16BITS = d.MAX_VALUE_16BITS, c.MAX_VALUE_32BITS = d.MAX_VALUE_32BITS, c.pretty = function (a) {
                return d.pretty(a)
            }, c.findCompression = function (a) {
                return d.findCompression(a)
            }, c.isRegExp = function (a) {
                return d.isRegExp(a)
            }
        }, {
            "./utils": 21
        }],
        8: [function (a, b, c) {
            "use strict";
            var d = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array,
                e = a("pako");
            c.uncompressInputType = d ? "uint8array" : "array", c.compressInputType = d ? "uint8array" : "array", c.magic = "\b\x00", c.compress = function (a, b) {
                return e.deflateRaw(a, {
                    level: b.level || -1
                })
            }, c.uncompress = function (a) {
                return e.inflateRaw(a)
            }
        }, {
            pako: 24
        }],
        9: [function (a, b) {
            "use strict";

            function c(a, b) {
                return this instanceof c ? (this.files = {}, this.comment = null, this.root = "", a && this.load(a, b), void(this.clone = function () {
                    var a = new c;
                    for (var b in this) "function" != typeof this[b] && (a[b] = this[b]);
                    return a
                })) : new c(a, b)
            }
            var d = a("./base64");
            c.prototype = a("./object"), c.prototype.load = a("./load"), c.support = a("./support"), c.defaults = a("./defaults"), c.utils = a("./deprecatedPublicUtils"), c.base64 = {
                encode: function (a) {
                    return d.encode(a)
                },
                decode: function (a) {
                    return d.decode(a)
                }
            }, c.compressions = a("./compressions"), b.exports = c
        }, {
            "./base64": 1,
            "./compressions": 3,
            "./defaults": 6,
            "./deprecatedPublicUtils": 7,
            "./load": 10,
            "./object": 13,
            "./support": 17
        }],
        10: [function (a, b) {
            "use strict";
            var c = a("./base64"),
                d = a("./zipEntries");
            b.exports = function (a, b) {
                var e, f, g, h;
                for (b = b || {}, b.base64 && (a = c.decode(a)), f = new d(a, b), e = f.files, g = 0; g < e.length; g++) h = e[g], this.file(h.fileName, h.decompressed, {
                    binary: !0,
                    optimizedBinaryString: !0,
                    date: h.date,
                    dir: h.dir,
                    comment: h.fileComment.length ? h.fileComment : null,
                    unixPermissions: h.unixPermissions,
                    dosPermissions: h.dosPermissions,
                    createFolders: b.createFolders
                });
                return f.zipComment.length && (this.comment = f.zipComment), this
            }
        }, {
            "./base64": 1,
            "./zipEntries": 22
        }],
        11: [function (a, b) {
            (function (a) {
                "use strict";
                b.exports = function (b, c) {
                    return new a(b, c)
                }, b.exports.test = function (b) {
                    return a.isBuffer(b)
                }
            }).call(this, "undefined" != typeof Buffer ? Buffer : void 0)
        }, {}],
        12: [function (a, b) {
            "use strict";

            function c(a) {
                this.data = a, this.length = this.data.length, this.index = 0
            }
            var d = a("./uint8ArrayReader");
            c.prototype = new d, c.prototype.readData = function (a) {
                this.checkOffset(a);
                var b = this.data.slice(this.index, this.index + a);
                return this.index += a, b
            }, b.exports = c
        }, {
            "./uint8ArrayReader": 18
        }],
        13: [function (a, b) {
            "use strict";
            var c = a("./support"),
                d = a("./utils"),
                e = a("./crc32"),
                f = a("./signature"),
                g = a("./defaults"),
                h = a("./base64"),
                i = a("./compressions"),
                j = a("./compressedObject"),
                k = a("./nodeBuffer"),
                l = a("./utf8"),
                m = a("./stringWriter"),
                n = a("./uint8ArrayWriter"),
                o = function (a) {
                    if (a._data instanceof j && (a._data = a._data.getContent(), a.options.binary = !0, a.options.base64 = !1, "uint8array" === d.getTypeOf(a._data))) {
                        var b = a._data;
                        a._data = new Uint8Array(b.length), 0 !== b.length && a._data.set(b, 0)
                    }
                    return a._data
                },
                p = function (a) {
                    var b = o(a),
                        e = d.getTypeOf(b);
                    return "string" === e ? !a.options.binary && c.nodebuffer ? k(b, "utf-8") : a.asBinary() : b
                },
                q = function (a) {
                    var b = o(this);
                    return null === b || "undefined" == typeof b ? "" : (this.options.base64 && (b = h.decode(b)), b = a && this.options.binary ? D.utf8decode(b) : d.transformTo("string", b), a || this.options.binary || (b = d.transformTo("string", D.utf8encode(b))), b)
                },
                r = function (a, b, c) {
                    this.name = a, this.dir = c.dir, this.date = c.date, this.comment = c.comment, this.unixPermissions = c.unixPermissions, this.dosPermissions = c.dosPermissions, this._data = b, this.options = c, this._initialMetadata = {
                        dir: c.dir,
                        date: c.date
                    }
                };
            r.prototype = {
                asText: function () {
                    return q.call(this, !0)
                },
                asBinary: function () {
                    return q.call(this, !1)
                },
                asNodeBuffer: function () {
                    var a = p(this);
                    return d.transformTo("nodebuffer", a)
                },
                asUint8Array: function () {
                    var a = p(this);
                    return d.transformTo("uint8array", a)
                },
                asArrayBuffer: function () {
                    return this.asUint8Array().buffer
                }
            };
            var s = function (a, b) {
                    var c, d = "";
                    for (c = 0; b > c; c++) d += String.fromCharCode(255 & a), a >>>= 8;
                    return d
                },
                t = function () {
                    var a, b, c = {};
                    for (a = 0; a < arguments.length; a++)
                        for (b in arguments[a]) arguments[a].hasOwnProperty(b) && "undefined" == typeof c[b] && (c[b] = arguments[a][b]);
                    return c
                },
                u = function (a) {
                    return a = a || {}, a.base64 !== !0 || null !== a.binary && void 0 !== a.binary || (a.binary = !0), a = t(a, g), a.date = a.date || new Date, null !== a.compression && (a.compression = a.compression.toUpperCase()), a
                },
                v = function (a, b, c) {
                    var e, f = d.getTypeOf(b);
                    if (c = u(c), "string" == typeof c.unixPermissions && (c.unixPermissions = parseInt(c.unixPermissions, 8)), c.unixPermissions && 16384 & c.unixPermissions && (c.dir = !0), c.dosPermissions && 16 & c.dosPermissions && (c.dir = !0), c.dir && (a = x(a)), c.createFolders && (e = w(a)) && y.call(this, e, !0), c.dir || null === b || "undefined" == typeof b) c.base64 = !1, c.binary = !1, b = null, f = null;
                    else if ("string" === f) c.binary && !c.base64 && c.optimizedBinaryString !== !0 && (b = d.string2binary(b));
                    else {
                        if (c.base64 = !1, c.binary = !0, !(f || b instanceof j)) throw new Error("The data of '" + a + "' is in an unsupported format !");
                        "arraybuffer" === f && (b = d.transformTo("uint8array", b))
                    }
                    var g = new r(a, b, c);
                    return this.files[a] = g, g
                },
                w = function (a) {
                    "/" == a.slice(-1) && (a = a.substring(0, a.length - 1));
                    var b = a.lastIndexOf("/");
                    return b > 0 ? a.substring(0, b) : ""
                },
                x = function (a) {
                    return "/" != a.slice(-1) && (a += "/"), a
                },
                y = function (a, b) {
                    return b = "undefined" != typeof b ? b : !1, a = x(a), this.files[a] || v.call(this, a, null, {
                        dir: !0,
                        createFolders: b
                    }), this.files[a]
                },
                z = function (a, b, c) {
                    var f, g = new j;
                    return a._data instanceof j ? (g.uncompressedSize = a._data.uncompressedSize, g.crc32 = a._data.crc32, 0 === g.uncompressedSize || a.dir ? (b = i.STORE, g.compressedContent = "", g.crc32 = 0) : a._data.compressionMethod === b.magic ? g.compressedContent = a._data.getCompressedContent() : (f = a._data.getContent(), g.compressedContent = b.compress(d.transformTo(b.compressInputType, f), c))) : (f = p(a), (!f || 0 === f.length || a.dir) && (b = i.STORE, f = ""), g.uncompressedSize = f.length, g.crc32 = e(f), g.compressedContent = b.compress(d.transformTo(b.compressInputType, f), c)), g.compressedSize = g.compressedContent.length, g.compressionMethod = b.magic, g
                },
                A = function (a, b) {
                    var c = a;
                    return a || (c = b ? 16893 : 33204), (65535 & c) << 16
                },
                B = function (a) {
                    return 63 & (a || 0)
                },
                C = function (a, b, c, g, h) {
                    var i, j, k, m, n = (c.compressedContent, d.transformTo("string", l.utf8encode(b.name))),
                        o = b.comment || "",
                        p = d.transformTo("string", l.utf8encode(o)),
                        q = n.length !== b.name.length,
                        r = p.length !== o.length,
                        t = b.options,
                        u = "",
                        v = "",
                        w = "";
                    k = b._initialMetadata.dir !== b.dir ? b.dir : t.dir, m = b._initialMetadata.date !== b.date ? b.date : t.date;
                    var x = 0,
                        y = 0;
                    k && (x |= 16), "UNIX" === h ? (y = 798, x |= A(b.unixPermissions, k)) : (y = 20, x |= B(b.dosPermissions, k)), i = m.getHours(), i <<= 6, i |= m.getMinutes(), i <<= 5, i |= m.getSeconds() / 2, j = m.getFullYear() - 1980, j <<= 4, j |= m.getMonth() + 1, j <<= 5, j |= m.getDate(), q && (v = s(1, 1) + s(e(n), 4) + n, u += "up" + s(v.length, 2) + v), r && (w = s(1, 1) + s(this.crc32(p), 4) + p, u += "uc" + s(w.length, 2) + w);
                    var z = "";
                    z += "\n\x00", z += q || r ? "\x00\b" : "\x00\x00", z += c.compressionMethod, z += s(i, 2), z += s(j, 2), z += s(c.crc32, 4), z += s(c.compressedSize, 4), z += s(c.uncompressedSize, 4), z += s(n.length, 2), z += s(u.length, 2);
                    var C = f.LOCAL_FILE_HEADER + z + n + u,
                        D = f.CENTRAL_FILE_HEADER + s(y, 2) + z + s(p.length, 2) + "\x00\x00\x00\x00" + s(x, 4) + s(g, 4) + n + u + p;
                    return {
                        fileRecord: C,
                        dirRecord: D,
                        compressedObject: c
                    }
                },
                D = {
                    load: function () {
                        throw new Error("Load method is not defined. Is the file jszip-load.js included ?")
                    },
                    filter: function (a) {
                        var b, c, d, e, f = [];
                        for (b in this.files) this.files.hasOwnProperty(b) && (d = this.files[b], e = new r(d.name, d._data, t(d.options)), c = b.slice(this.root.length, b.length), b.slice(0, this.root.length) === this.root && a(c, e) && f.push(e));
                        return f
                    },
                    file: function (a, b, c) {
                        if (1 === arguments.length) {
                            if (d.isRegExp(a)) {
                                var e = a;
                                return this.filter(function (a, b) {
                                    return !b.dir && e.test(a)
                                })
                            }
                            return this.filter(function (b, c) {
                                return !c.dir && b === a
                            })[0] || null
                        }
                        return a = this.root + a, v.call(this, a, b, c), this
                    },
                    folder: function (a) {
                        if (!a) return this;
                        if (d.isRegExp(a)) return this.filter(function (b, c) {
                            return c.dir && a.test(b)
                        });
                        var b = this.root + a,
                            c = y.call(this, b),
                            e = this.clone();
                        return e.root = c.name, e
                    },
                    remove: function (a) {
                        a = this.root + a;
                        var b = this.files[a];
                        if (b || ("/" != a.slice(-1) && (a += "/"), b = this.files[a]), b && !b.dir) delete this.files[a];
                        else
                            for (var c = this.filter(function (b, c) {
                                    return c.name.slice(0, a.length) === a
                                }), d = 0; d < c.length; d++) delete this.files[c[d].name];
                        return this
                    },
                    generate: function (a) {
                        a = t(a || {}, {
                            base64: !0,
                            compression: "STORE",
                            compressionOptions: null,
                            type: "base64",
                            platform: "DOS",
                            comment: null,
                            mimeType: "application/zip"
                        }), d.checkSupport(a.type), ("darwin" === a.platform || "freebsd" === a.platform || "linux" === a.platform || "sunos" === a.platform) && (a.platform = "UNIX"), "win32" === a.platform && (a.platform = "DOS");
                        var b, c, e = [],
                            g = 0,
                            j = 0,
                            k = d.transformTo("string", this.utf8encode(a.comment || this.comment || ""));
                        for (var l in this.files)
                            if (this.files.hasOwnProperty(l)) {
                                var o = this.files[l],
                                    p = o.options.compression || a.compression.toUpperCase(),
                                    q = i[p];
                                if (!q) throw new Error(p + " is not a valid compression method !");
                                var r = o.options.compressionOptions || a.compressionOptions || {},
                                    u = z.call(this, o, q, r),
                                    v = C.call(this, l, o, u, g, a.platform);
                                g += v.fileRecord.length + u.compressedSize, j += v.dirRecord.length, e.push(v)
                            } var w = "";
                        w = f.CENTRAL_DIRECTORY_END + "\x00\x00\x00\x00" + s(e.length, 2) + s(e.length, 2) + s(j, 4) + s(g, 4) + s(k.length, 2) + k;
                        var x = a.type.toLowerCase();
                        for (b = "uint8array" === x || "arraybuffer" === x || "blob" === x || "nodebuffer" === x ? new n(g + j + w.length) : new m(g + j + w.length), c = 0; c < e.length; c++) b.append(e[c].fileRecord), b.append(e[c].compressedObject.compressedContent);
                        for (c = 0; c < e.length; c++) b.append(e[c].dirRecord);
                        b.append(w);
                        var y = b.finalize();
                        switch (a.type.toLowerCase()) {
                            case "uint8array":
                            case "arraybuffer":
                            case "nodebuffer":
                                return d.transformTo(a.type.toLowerCase(), y);
                            case "blob":
                                return d.arrayBuffer2Blob(d.transformTo("arraybuffer", y), a.mimeType);
                            case "base64":
                                return a.base64 ? h.encode(y) : y;
                            default:
                                return y
                        }
                    },
                    crc32: function (a, b) {
                        return e(a, b)
                    },
                    utf8encode: function (a) {
                        return d.transformTo("string", l.utf8encode(a))
                    },
                    utf8decode: function (a) {
                        return l.utf8decode(a)
                    }
                };
            b.exports = D
        }, {
            "./base64": 1,
            "./compressedObject": 2,
            "./compressions": 3,
            "./crc32": 4,
            "./defaults": 6,
            "./nodeBuffer": 11,
            "./signature": 14,
            "./stringWriter": 16,
            "./support": 17,
            "./uint8ArrayWriter": 19,
            "./utf8": 20,
            "./utils": 21
        }],
        14: [function (a, b, c) {
            "use strict";
            c.LOCAL_FILE_HEADER = "PK", c.CENTRAL_FILE_HEADER = "PK", c.CENTRAL_DIRECTORY_END = "PK", c.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK", c.ZIP64_CENTRAL_DIRECTORY_END = "PK", c.DATA_DESCRIPTOR = "PK\b"
        }, {}],
        15: [function (a, b) {
            "use strict";

            function c(a, b) {
                this.data = a, b || (this.data = e.string2binary(this.data)), this.length = this.data.length, this.index = 0
            }
            var d = a("./dataReader"),
                e = a("./utils");
            c.prototype = new d, c.prototype.byteAt = function (a) {
                return this.data.charCodeAt(a)
            }, c.prototype.lastIndexOfSignature = function (a) {
                return this.data.lastIndexOf(a)
            }, c.prototype.readData = function (a) {
                this.checkOffset(a);
                var b = this.data.slice(this.index, this.index + a);
                return this.index += a, b
            }, b.exports = c
        }, {
            "./dataReader": 5,
            "./utils": 21
        }],
        16: [function (a, b) {
            "use strict";
            var c = a("./utils"),
                d = function () {
                    this.data = []
                };
            d.prototype = {
                append: function (a) {
                    a = c.transformTo("string", a), this.data.push(a)
                },
                finalize: function () {
                    return this.data.join("")
                }
            }, b.exports = d
        }, {
            "./utils": 21
        }],
        17: [function (a, b, c) {
            (function (a) {
                "use strict";
                if (c.base64 = !0, c.array = !0, c.string = !0, c.arraybuffer = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array, c.nodebuffer = "undefined" != typeof a, c.uint8array = "undefined" != typeof Uint8Array, "undefined" == typeof ArrayBuffer) c.blob = !1;
                else {
                    var b = new ArrayBuffer(0);
                    try {
                        c.blob = 0 === new Blob([b], {
                            type: "application/zip"
                        }).size
                    } catch (d) {
                        try {
                            var e = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder,
                                f = new e;
                            f.append(b), c.blob = 0 === f.getBlob("application/zip").size
                        } catch (d) {
                            c.blob = !1
                        }
                    }
                }
            }).call(this, "undefined" != typeof Buffer ? Buffer : void 0)
        }, {}],
        18: [function (a, b) {
            "use strict";

            function c(a) {
                a && (this.data = a, this.length = this.data.length, this.index = 0)
            }
            var d = a("./dataReader");
            c.prototype = new d, c.prototype.byteAt = function (a) {
                return this.data[a]
            }, c.prototype.lastIndexOfSignature = function (a) {
                for (var b = a.charCodeAt(0), c = a.charCodeAt(1), d = a.charCodeAt(2), e = a.charCodeAt(3), f = this.length - 4; f >= 0; --f)
                    if (this.data[f] === b && this.data[f + 1] === c && this.data[f + 2] === d && this.data[f + 3] === e) return f;
                return -1
            }, c.prototype.readData = function (a) {
                if (this.checkOffset(a), 0 === a) return new Uint8Array(0);
                var b = this.data.subarray(this.index, this.index + a);
                return this.index += a, b
            }, b.exports = c
        }, {
            "./dataReader": 5
        }],
        19: [function (a, b) {
            "use strict";
            var c = a("./utils"),
                d = function (a) {
                    this.data = new Uint8Array(a), this.index = 0
                };
            d.prototype = {
                append: function (a) {
                    0 !== a.length && (a = c.transformTo("uint8array", a), this.data.set(a, this.index), this.index += a.length)
                },
                finalize: function () {
                    return this.data
                }
            }, b.exports = d
        }, {
            "./utils": 21
        }],
        20: [function (a, b, c) {
            "use strict";
            for (var d = a("./utils"), e = a("./support"), f = a("./nodeBuffer"), g = new Array(256), h = 0; 256 > h; h++) g[h] = h >= 252 ? 6 : h >= 248 ? 5 : h >= 240 ? 4 : h >= 224 ? 3 : h >= 192 ? 2 : 1;
            g[254] = g[254] = 1;
            var i = function (a) {
                    var b, c, d, f, g, h = a.length,
                        i = 0;
                    for (f = 0; h > f; f++) c = a.charCodeAt(f), 55296 === (64512 & c) && h > f + 1 && (d = a.charCodeAt(f + 1), 56320 === (64512 & d) && (c = 65536 + (c - 55296 << 10) + (d - 56320), f++)), i += 128 > c ? 1 : 2048 > c ? 2 : 65536 > c ? 3 : 4;
                    for (b = e.uint8array ? new Uint8Array(i) : new Array(i), g = 0, f = 0; i > g; f++) c = a.charCodeAt(f), 55296 === (64512 & c) && h > f + 1 && (d = a.charCodeAt(f + 1), 56320 === (64512 & d) && (c = 65536 + (c - 55296 << 10) + (d - 56320), f++)), 128 > c ? b[g++] = c : 2048 > c ? (b[g++] = 192 | c >>> 6, b[g++] = 128 | 63 & c) : 65536 > c ? (b[g++] = 224 | c >>> 12, b[g++] = 128 | c >>> 6 & 63, b[g++] = 128 | 63 & c) : (b[g++] = 240 | c >>> 18, b[g++] = 128 | c >>> 12 & 63, b[g++] = 128 | c >>> 6 & 63, b[g++] = 128 | 63 & c);
                    return b
                },
                j = function (a, b) {
                    var c;
                    for (b = b || a.length, b > a.length && (b = a.length), c = b - 1; c >= 0 && 128 === (192 & a[c]);) c--;
                    return 0 > c ? b : 0 === c ? b : c + g[a[c]] > b ? c : b
                },
                k = function (a) {
                    var b, c, e, f, h = a.length,
                        i = new Array(2 * h);
                    for (c = 0, b = 0; h > b;)
                        if (e = a[b++], 128 > e) i[c++] = e;
                        else if (f = g[e], f > 4) i[c++] = 65533, b += f - 1;
                    else {
                        for (e &= 2 === f ? 31 : 3 === f ? 15 : 7; f > 1 && h > b;) e = e << 6 | 63 & a[b++], f--;
                        f > 1 ? i[c++] = 65533 : 65536 > e ? i[c++] = e : (e -= 65536, i[c++] = 55296 | e >> 10 & 1023, i[c++] = 56320 | 1023 & e)
                    }
                    return i.length !== c && (i.subarray ? i = i.subarray(0, c) : i.length = c), d.applyFromCharCode(i)
                };
            c.utf8encode = function (a) {
                return e.nodebuffer ? f(a, "utf-8") : i(a)
            }, c.utf8decode = function (a) {
                if (e.nodebuffer) return d.transformTo("nodebuffer", a).toString("utf-8");
                a = d.transformTo(e.uint8array ? "uint8array" : "array", a);
                for (var b = [], c = 0, f = a.length, g = 65536; f > c;) {
                    var h = j(a, Math.min(c + g, f));
                    b.push(e.uint8array ? k(a.subarray(c, h)) : k(a.slice(c, h))), c = h
                }
                return b.join("")
            }
        }, {
            "./nodeBuffer": 11,
            "./support": 17,
            "./utils": 21
        }],
        21: [function (a, b, c) {
            "use strict";

            function d(a) {
                return a
            }

            function e(a, b) {
                for (var c = 0; c < a.length; ++c) b[c] = 255 & a.charCodeAt(c);
                return b
            }

            function f(a) {
                var b = 65536,
                    d = [],
                    e = a.length,
                    f = c.getTypeOf(a),
                    g = 0,
                    h = !0;
                try {
                    switch (f) {
                        case "uint8array":
                            String.fromCharCode.apply(null, new Uint8Array(0));
                            break;
                        case "nodebuffer":
                            String.fromCharCode.apply(null, j(0))
                    }
                } catch (i) {
                    h = !1
                }
                if (!h) {
                    for (var k = "", l = 0; l < a.length; l++) k += String.fromCharCode(a[l]);
                    return k
                }
                for (; e > g && b > 1;) try {
                    d.push("array" === f || "nodebuffer" === f ? String.fromCharCode.apply(null, a.slice(g, Math.min(g + b, e))) : String.fromCharCode.apply(null, a.subarray(g, Math.min(g + b, e)))), g += b
                } catch (i) {
                    b = Math.floor(b / 2)
                }
                return d.join("")
            }

            function g(a, b) {
                for (var c = 0; c < a.length; c++) b[c] = a[c];
                return b
            }
            var h = a("./support"),
                i = a("./compressions"),
                j = a("./nodeBuffer");
            c.string2binary = function (a) {
                for (var b = "", c = 0; c < a.length; c++) b += String.fromCharCode(255 & a.charCodeAt(c));
                return b
            }, c.arrayBuffer2Blob = function (a, b) {
                c.checkSupport("blob"), b = b || "application/zip";
                try {
                    return new Blob([a], {
                        type: b
                    })
                } catch (d) {
                    try {
                        var e = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder,
                            f = new e;
                        return f.append(a), f.getBlob(b)
                    } catch (d) {
                        throw new Error("Bug : can't construct the Blob.")
                    }
                }
            }, c.applyFromCharCode = f;
            var k = {};
            k.string = {
                string: d,
                array: function (a) {
                    return e(a, new Array(a.length))
                },
                arraybuffer: function (a) {
                    return k.string.uint8array(a).buffer
                },
                uint8array: function (a) {
                    return e(a, new Uint8Array(a.length))
                },
                nodebuffer: function (a) {
                    return e(a, j(a.length))
                }
            }, k.array = {
                string: f,
                array: d,
                arraybuffer: function (a) {
                    return new Uint8Array(a).buffer
                },
                uint8array: function (a) {
                    return new Uint8Array(a)
                },
                nodebuffer: function (a) {
                    return j(a)
                }
            }, k.arraybuffer = {
                string: function (a) {
                    return f(new Uint8Array(a))
                },
                array: function (a) {
                    return g(new Uint8Array(a), new Array(a.byteLength))
                },
                arraybuffer: d,
                uint8array: function (a) {
                    return new Uint8Array(a)
                },
                nodebuffer: function (a) {
                    return j(new Uint8Array(a))
                }
            }, k.uint8array = {
                string: f,
                array: function (a) {
                    return g(a, new Array(a.length))
                },
                arraybuffer: function (a) {
                    return a.buffer
                },
                uint8array: d,
                nodebuffer: function (a) {
                    return j(a)
                }
            }, k.nodebuffer = {
                string: f,
                array: function (a) {
                    return g(a, new Array(a.length))
                },
                arraybuffer: function (a) {
                    return k.nodebuffer.uint8array(a).buffer
                },
                uint8array: function (a) {
                    return g(a, new Uint8Array(a.length))
                },
                nodebuffer: d
            }, c.transformTo = function (a, b) {
                if (b || (b = ""), !a) return b;
                c.checkSupport(a);
                var d = c.getTypeOf(b),
                    e = k[d][a](b);
                return e
            }, c.getTypeOf = function (a) {
                return "string" == typeof a ? "string" : "[object Array]" === Object.prototype.toString.call(a) ? "array" : h.nodebuffer && j.test(a) ? "nodebuffer" : h.uint8array && a instanceof Uint8Array ? "uint8array" : h.arraybuffer && a instanceof ArrayBuffer ? "arraybuffer" : void 0
            }, c.checkSupport = function (a) {
                var b = h[a.toLowerCase()];
                if (!b) throw new Error(a + " is not supported by this browser")
            }, c.MAX_VALUE_16BITS = 65535, c.MAX_VALUE_32BITS = -1, c.pretty = function (a) {
                var b, c, d = "";
                for (c = 0; c < (a || "").length; c++) b = a.charCodeAt(c), d += "\\x" + (16 > b ? "0" : "") + b.toString(16).toUpperCase();
                return d
            }, c.findCompression = function (a) {
                for (var b in i)
                    if (i.hasOwnProperty(b) && i[b].magic === a) return i[b];
                return null
            }, c.isRegExp = function (a) {
                return "[object RegExp]" === Object.prototype.toString.call(a)
            }
        }, {
            "./compressions": 3,
            "./nodeBuffer": 11,
            "./support": 17
        }],
        22: [function (a, b) {
            "use strict";

            function c(a, b) {
                this.files = [], this.loadOptions = b, a && this.load(a)
            }
            var d = a("./stringReader"),
                e = a("./nodeBufferReader"),
                f = a("./uint8ArrayReader"),
                g = a("./utils"),
                h = a("./signature"),
                i = a("./zipEntry"),
                j = a("./support"),
                k = a("./object");
            c.prototype = {
                checkSignature: function (a) {
                    var b = this.reader.readString(4);
                    if (b !== a) throw new Error("Corrupted zip or bug : unexpected signature (" + g.pretty(b) + ", expected " + g.pretty(a) + ")")
                },
                readBlockEndOfCentral: function () {
                    this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2), this.zipComment = this.reader.readString(this.zipCommentLength), this.zipComment = k.utf8decode(this.zipComment)
                },
                readBlockZip64EndOfCentral: function () {
                    this.zip64EndOfCentralSize = this.reader.readInt(8), this.versionMadeBy = this.reader.readString(2), this.versionNeeded = this.reader.readInt(2), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
                    for (var a, b, c, d = this.zip64EndOfCentralSize - 44, e = 0; d > e;) a = this.reader.readInt(2), b = this.reader.readInt(4), c = this.reader.readString(b), this.zip64ExtensibleData[a] = {
                        id: a,
                        length: b,
                        value: c
                    }
                },
                readBlockZip64EndOfCentralLocator: function () {
                    if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), this.disksCount > 1) throw new Error("Multi-volumes zip are not supported")
                },
                readLocalFiles: function () {
                    var a, b;
                    for (a = 0; a < this.files.length; a++) b = this.files[a], this.reader.setIndex(b.localHeaderOffset), this.checkSignature(h.LOCAL_FILE_HEADER), b.readLocalPart(this.reader), b.handleUTF8(), b.processAttributes()
                },
                readCentralDir: function () {
                    var a;
                    for (this.reader.setIndex(this.centralDirOffset); this.reader.readString(4) === h.CENTRAL_FILE_HEADER;) a = new i({
                        zip64: this.zip64
                    }, this.loadOptions), a.readCentralPart(this.reader), this.files.push(a)
                },
                readEndOfCentral: function () {
                    var a = this.reader.lastIndexOfSignature(h.CENTRAL_DIRECTORY_END);
                    if (-1 === a) {
                        var b = !0;
                        try {
                            this.reader.setIndex(0), this.checkSignature(h.LOCAL_FILE_HEADER), b = !1
                        } catch (c) {}
                        throw new Error(b ? "Can't find end of central directory : is this a zip file ? If it is, see http://stuk.github.io/jszip/documentation/howto/read_zip.html" : "Corrupted zip : can't find end of central directory")
                    }
                    if (this.reader.setIndex(a), this.checkSignature(h.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === g.MAX_VALUE_16BITS || this.diskWithCentralDirStart === g.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === g.MAX_VALUE_16BITS || this.centralDirRecords === g.MAX_VALUE_16BITS || this.centralDirSize === g.MAX_VALUE_32BITS || this.centralDirOffset === g.MAX_VALUE_32BITS) {
                        if (this.zip64 = !0, a = this.reader.lastIndexOfSignature(h.ZIP64_CENTRAL_DIRECTORY_LOCATOR), -1 === a) throw new Error("Corrupted zip : can't find the ZIP64 end of central directory locator");
                        this.reader.setIndex(a), this.checkSignature(h.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(h.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral()
                    }
                },
                prepareReader: function (a) {
                    var b = g.getTypeOf(a);
                    this.reader = "string" !== b || j.uint8array ? "nodebuffer" === b ? new e(a) : new f(g.transformTo("uint8array", a)) : new d(a, this.loadOptions.optimizedBinaryString)
                },
                load: function (a) {
                    this.prepareReader(a), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles()
                }
            }, b.exports = c
        }, {
            "./nodeBufferReader": 12,
            "./object": 13,
            "./signature": 14,
            "./stringReader": 15,
            "./support": 17,
            "./uint8ArrayReader": 18,
            "./utils": 21,
            "./zipEntry": 23
        }],
        23: [function (a, b) {
            "use strict";

            function c(a, b) {
                this.options = a, this.loadOptions = b
            }
            var d = a("./stringReader"),
                e = a("./utils"),
                f = a("./compressedObject"),
                g = a("./object"),
                h = 0,
                i = 3;
            c.prototype = {
                isEncrypted: function () {
                    return 1 === (1 & this.bitFlag)
                },
                useUTF8: function () {
                    return 2048 === (2048 & this.bitFlag)
                },
                prepareCompressedContent: function (a, b, c) {
                    return function () {
                        var d = a.index;
                        a.setIndex(b);
                        var e = a.readData(c);
                        return a.setIndex(d), e
                    }
                },
                prepareContent: function (a, b, c, d, f) {
                    return function () {
                        var a = e.transformTo(d.uncompressInputType, this.getCompressedContent()),
                            b = d.uncompress(a);
                        if (b.length !== f) throw new Error("Bug : uncompressed data size mismatch");
                        return b
                    }
                },
                readLocalPart: function (a) {
                    var b, c;
                    if (a.skip(22), this.fileNameLength = a.readInt(2), c = a.readInt(2), this.fileName = a.readString(this.fileNameLength), a.skip(c), -1 == this.compressedSize || -1 == this.uncompressedSize) throw new Error("Bug or corrupted zip : didn't get enough informations from the central directory (compressedSize == -1 || uncompressedSize == -1)");
                    if (b = e.findCompression(this.compressionMethod), null === b) throw new Error("Corrupted zip : compression " + e.pretty(this.compressionMethod) + " unknown (inner file : " + this.fileName + ")");
                    if (this.decompressed = new f, this.decompressed.compressedSize = this.compressedSize, this.decompressed.uncompressedSize = this.uncompressedSize, this.decompressed.crc32 = this.crc32, this.decompressed.compressionMethod = this.compressionMethod, this.decompressed.getCompressedContent = this.prepareCompressedContent(a, a.index, this.compressedSize, b), this.decompressed.getContent = this.prepareContent(a, a.index, this.compressedSize, b, this.uncompressedSize), this.loadOptions.checkCRC32 && (this.decompressed = e.transformTo("string", this.decompressed.getContent()), g.crc32(this.decompressed) !== this.crc32)) throw new Error("Corrupted zip : CRC32 mismatch")
                },
                readCentralPart: function (a) {
                    if (this.versionMadeBy = a.readInt(2), this.versionNeeded = a.readInt(2), this.bitFlag = a.readInt(2), this.compressionMethod = a.readString(2), this.date = a.readDate(), this.crc32 = a.readInt(4), this.compressedSize = a.readInt(4), this.uncompressedSize = a.readInt(4), this.fileNameLength = a.readInt(2), this.extraFieldsLength = a.readInt(2), this.fileCommentLength = a.readInt(2), this.diskNumberStart = a.readInt(2), this.internalFileAttributes = a.readInt(2), this.externalFileAttributes = a.readInt(4), this.localHeaderOffset = a.readInt(4), this.isEncrypted()) throw new Error("Encrypted zip are not supported");
                    this.fileName = a.readString(this.fileNameLength), this.readExtraFields(a), this.parseZIP64ExtraField(a), this.fileComment = a.readString(this.fileCommentLength)
                },
                processAttributes: function () {
                    this.unixPermissions = null, this.dosPermissions = null;
                    var a = this.versionMadeBy >> 8;
                    this.dir = 16 & this.externalFileAttributes ? !0 : !1, a === h && (this.dosPermissions = 63 & this.externalFileAttributes), a === i && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || "/" !== this.fileName.slice(-1) || (this.dir = !0)
                },
                parseZIP64ExtraField: function () {
                    if (this.extraFields[1]) {
                        var a = new d(this.extraFields[1].value);
                        this.uncompressedSize === e.MAX_VALUE_32BITS && (this.uncompressedSize = a.readInt(8)), this.compressedSize === e.MAX_VALUE_32BITS && (this.compressedSize = a.readInt(8)), this.localHeaderOffset === e.MAX_VALUE_32BITS && (this.localHeaderOffset = a.readInt(8)), this.diskNumberStart === e.MAX_VALUE_32BITS && (this.diskNumberStart = a.readInt(4))
                    }
                },
                readExtraFields: function (a) {
                    var b, c, d, e = a.index;
                    for (this.extraFields = this.extraFields || {}; a.index < e + this.extraFieldsLength;) b = a.readInt(2), c = a.readInt(2), d = a.readString(c), this.extraFields[b] = {
                        id: b,
                        length: c,
                        value: d
                    }
                },
                handleUTF8: function () {
                    if (this.useUTF8()) this.fileName = g.utf8decode(this.fileName), this.fileComment = g.utf8decode(this.fileComment);
                    else {
                        var a = this.findExtraFieldUnicodePath();
                        null !== a && (this.fileName = a);
                        var b = this.findExtraFieldUnicodeComment();
                        null !== b && (this.fileComment = b)
                    }
                },
                findExtraFieldUnicodePath: function () {
                    var a = this.extraFields[28789];
                    if (a) {
                        var b = new d(a.value);
                        return 1 !== b.readInt(1) ? null : g.crc32(this.fileName) !== b.readInt(4) ? null : g.utf8decode(b.readString(a.length - 5))
                    }
                    return null
                },
                findExtraFieldUnicodeComment: function () {
                    var a = this.extraFields[25461];
                    if (a) {
                        var b = new d(a.value);
                        return 1 !== b.readInt(1) ? null : g.crc32(this.fileComment) !== b.readInt(4) ? null : g.utf8decode(b.readString(a.length - 5))
                    }
                    return null
                }
            }, b.exports = c
        }, {
            "./compressedObject": 2,
            "./object": 13,
            "./stringReader": 15,
            "./utils": 21
        }],
        24: [function (a, b) {
            "use strict";
            var c = a("./lib/utils/common").assign,
                d = a("./lib/deflate"),
                e = a("./lib/inflate"),
                f = a("./lib/zlib/constants"),
                g = {};
            c(g, d, e, f), b.exports = g
        }, {
            "./lib/deflate": 25,
            "./lib/inflate": 26,
            "./lib/utils/common": 27,
            "./lib/zlib/constants": 30
        }],
        25: [function (a, b, c) {
            "use strict";

            function d(a, b) {
                var c = new s(b);
                if (c.push(a, !0), c.err) throw c.msg;
                return c.result
            }

            function e(a, b) {
                return b = b || {}, b.raw = !0, d(a, b)
            }

            function f(a, b) {
                return b = b || {}, b.gzip = !0, d(a, b)
            }
            var g = a("./zlib/deflate.js"),
                h = a("./utils/common"),
                i = a("./utils/strings"),
                j = a("./zlib/messages"),
                k = a("./zlib/zstream"),
                l = 0,
                m = 4,
                n = 0,
                o = 1,
                p = -1,
                q = 0,
                r = 8,
                s = function (a) {
                    this.options = h.assign({
                        level: p,
                        method: r,
                        chunkSize: 16384,
                        windowBits: 15,
                        memLevel: 8,
                        strategy: q,
                        to: ""
                    }, a || {});
                    var b = this.options;
                    b.raw && b.windowBits > 0 ? b.windowBits = -b.windowBits : b.gzip && b.windowBits > 0 && b.windowBits < 16 && (b.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new k, this.strm.avail_out = 0;
                    var c = g.deflateInit2(this.strm, b.level, b.method, b.windowBits, b.memLevel, b.strategy);
                    if (c !== n) throw new Error(j[c]);
                    b.header && g.deflateSetHeader(this.strm, b.header)
                };
            s.prototype.push = function (a, b) {
                var c, d, e = this.strm,
                    f = this.options.chunkSize;
                if (this.ended) return !1;
                d = b === ~~b ? b : b === !0 ? m : l, e.input = "string" == typeof a ? i.string2buf(a) : a, e.next_in = 0, e.avail_in = e.input.length;
                do {
                    if (0 === e.avail_out && (e.output = new h.Buf8(f), e.next_out = 0, e.avail_out = f), c = g.deflate(e, d), c !== o && c !== n) return this.onEnd(c), this.ended = !0, !1;
                    (0 === e.avail_out || 0 === e.avail_in && d === m) && this.onData("string" === this.options.to ? i.buf2binstring(h.shrinkBuf(e.output, e.next_out)) : h.shrinkBuf(e.output, e.next_out))
                } while ((e.avail_in > 0 || 0 === e.avail_out) && c !== o);
                return d === m ? (c = g.deflateEnd(this.strm), this.onEnd(c), this.ended = !0, c === n) : !0
            }, s.prototype.onData = function (a) {
                this.chunks.push(a)
            }, s.prototype.onEnd = function (a) {
                a === n && (this.result = "string" === this.options.to ? this.chunks.join("") : h.flattenChunks(this.chunks)), this.chunks = [], this.err = a, this.msg = this.strm.msg
            }, c.Deflate = s, c.deflate = d, c.deflateRaw = e, c.gzip = f
        }, {
            "./utils/common": 27,
            "./utils/strings": 28,
            "./zlib/deflate.js": 32,
            "./zlib/messages": 37,
            "./zlib/zstream": 39
        }],
        26: [function (a, b, c) {
            "use strict";

            function d(a, b) {
                var c = new m(b);
                if (c.push(a, !0), c.err) throw c.msg;
                return c.result
            }

            function e(a, b) {
                return b = b || {}, b.raw = !0, d(a, b)
            }
            var f = a("./zlib/inflate.js"),
                g = a("./utils/common"),
                h = a("./utils/strings"),
                i = a("./zlib/constants"),
                j = a("./zlib/messages"),
                k = a("./zlib/zstream"),
                l = a("./zlib/gzheader"),
                m = function (a) {
                    this.options = g.assign({
                        chunkSize: 16384,
                        windowBits: 0,
                        to: ""
                    }, a || {});
                    var b = this.options;
                    b.raw && b.windowBits >= 0 && b.windowBits < 16 && (b.windowBits = -b.windowBits, 0 === b.windowBits && (b.windowBits = -15)), !(b.windowBits >= 0 && b.windowBits < 16) || a && a.windowBits || (b.windowBits += 32), b.windowBits > 15 && b.windowBits < 48 && 0 === (15 & b.windowBits) && (b.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new k, this.strm.avail_out = 0;
                    var c = f.inflateInit2(this.strm, b.windowBits);
                    if (c !== i.Z_OK) throw new Error(j[c]);
                    this.header = new l, f.inflateGetHeader(this.strm, this.header)
                };
            m.prototype.push = function (a, b) {
                var c, d, e, j, k, l = this.strm,
                    m = this.options.chunkSize;
                if (this.ended) return !1;
                d = b === ~~b ? b : b === !0 ? i.Z_FINISH : i.Z_NO_FLUSH, l.input = "string" == typeof a ? h.binstring2buf(a) : a, l.next_in = 0, l.avail_in = l.input.length;
                do {
                    if (0 === l.avail_out && (l.output = new g.Buf8(m), l.next_out = 0, l.avail_out = m), c = f.inflate(l, i.Z_NO_FLUSH), c !== i.Z_STREAM_END && c !== i.Z_OK) return this.onEnd(c), this.ended = !0, !1;
                    l.next_out && (0 === l.avail_out || c === i.Z_STREAM_END || 0 === l.avail_in && d === i.Z_FINISH) && ("string" === this.options.to ? (e = h.utf8border(l.output, l.next_out), j = l.next_out - e, k = h.buf2string(l.output, e), l.next_out = j, l.avail_out = m - j, j && g.arraySet(l.output, l.output, e, j, 0), this.onData(k)) : this.onData(g.shrinkBuf(l.output, l.next_out)))
                } while (l.avail_in > 0 && c !== i.Z_STREAM_END);
                return c === i.Z_STREAM_END && (d = i.Z_FINISH), d === i.Z_FINISH ? (c = f.inflateEnd(this.strm), this.onEnd(c), this.ended = !0, c === i.Z_OK) : !0
            }, m.prototype.onData = function (a) {
                this.chunks.push(a)
            }, m.prototype.onEnd = function (a) {
                a === i.Z_OK && (this.result = "string" === this.options.to ? this.chunks.join("") : g.flattenChunks(this.chunks)), this.chunks = [], this.err = a, this.msg = this.strm.msg
            }, c.Inflate = m, c.inflate = d, c.inflateRaw = e, c.ungzip = d
        }, {
            "./utils/common": 27,
            "./utils/strings": 28,
            "./zlib/constants": 30,
            "./zlib/gzheader": 33,
            "./zlib/inflate.js": 35,
            "./zlib/messages": 37,
            "./zlib/zstream": 39
        }],
        27: [function (a, b, c) {
            "use strict";
            var d = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
            c.assign = function (a) {
                for (var b = Array.prototype.slice.call(arguments, 1); b.length;) {
                    var c = b.shift();
                    if (c) {
                        if ("object" != typeof c) throw new TypeError(c + "must be non-object");
                        for (var d in c) c.hasOwnProperty(d) && (a[d] = c[d])
                    }
                }
                return a
            }, c.shrinkBuf = function (a, b) {
                return a.length === b ? a : a.subarray ? a.subarray(0, b) : (a.length = b, a)
            };
            var e = {
                    arraySet: function (a, b, c, d, e) {
                        if (b.subarray && a.subarray) return void a.set(b.subarray(c, c + d), e);
                        for (var f = 0; d > f; f++) a[e + f] = b[c + f]
                    },
                    flattenChunks: function (a) {
                        var b, c, d, e, f, g;
                        for (d = 0, b = 0, c = a.length; c > b; b++) d += a[b].length;
                        for (g = new Uint8Array(d), e = 0, b = 0, c = a.length; c > b; b++) f = a[b], g.set(f, e), e += f.length;
                        return g
                    }
                },
                f = {
                    arraySet: function (a, b, c, d, e) {
                        for (var f = 0; d > f; f++) a[e + f] = b[c + f]
                    },
                    flattenChunks: function (a) {
                        return [].concat.apply([], a)
                    }
                };
            c.setTyped = function (a) {
                a ? (c.Buf8 = Uint8Array, c.Buf16 = Uint16Array, c.Buf32 = Int32Array, c.assign(c, e)) : (c.Buf8 = Array, c.Buf16 = Array, c.Buf32 = Array, c.assign(c, f))
            }, c.setTyped(d)
        }, {}],
        28: [function (a, b, c) {
            "use strict";

            function d(a, b) {
                if (65537 > b && (a.subarray && g || !a.subarray && f)) return String.fromCharCode.apply(null, e.shrinkBuf(a, b));
                for (var c = "", d = 0; b > d; d++) c += String.fromCharCode(a[d]);
                return c
            }
            var e = a("./common"),
                f = !0,
                g = !0;
            try {
                String.fromCharCode.apply(null, [0])
            } catch (h) {
                f = !1
            }
            try {
                String.fromCharCode.apply(null, new Uint8Array(1))
            } catch (h) {
                g = !1
            }
            for (var i = new e.Buf8(256), j = 0; 256 > j; j++) i[j] = j >= 252 ? 6 : j >= 248 ? 5 : j >= 240 ? 4 : j >= 224 ? 3 : j >= 192 ? 2 : 1;
            i[254] = i[254] = 1, c.string2buf = function (a) {
                var b, c, d, f, g, h = a.length,
                    i = 0;
                for (f = 0; h > f; f++) c = a.charCodeAt(f), 55296 === (64512 & c) && h > f + 1 && (d = a.charCodeAt(f + 1), 56320 === (64512 & d) && (c = 65536 + (c - 55296 << 10) + (d - 56320), f++)), i += 128 > c ? 1 : 2048 > c ? 2 : 65536 > c ? 3 : 4;
                for (b = new e.Buf8(i), g = 0, f = 0; i > g; f++) c = a.charCodeAt(f), 55296 === (64512 & c) && h > f + 1 && (d = a.charCodeAt(f + 1), 56320 === (64512 & d) && (c = 65536 + (c - 55296 << 10) + (d - 56320), f++)), 128 > c ? b[g++] = c : 2048 > c ? (b[g++] = 192 | c >>> 6, b[g++] = 128 | 63 & c) : 65536 > c ? (b[g++] = 224 | c >>> 12, b[g++] = 128 | c >>> 6 & 63, b[g++] = 128 | 63 & c) : (b[g++] = 240 | c >>> 18, b[g++] = 128 | c >>> 12 & 63, b[g++] = 128 | c >>> 6 & 63, b[g++] = 128 | 63 & c);
                return b
            }, c.buf2binstring = function (a) {
                return d(a, a.length)
            }, c.binstring2buf = function (a) {
                for (var b = new e.Buf8(a.length), c = 0, d = b.length; d > c; c++) b[c] = a.charCodeAt(c);
                return b
            }, c.buf2string = function (a, b) {
                var c, e, f, g, h = b || a.length,
                    j = new Array(2 * h);
                for (e = 0, c = 0; h > c;)
                    if (f = a[c++], 128 > f) j[e++] = f;
                    else if (g = i[f], g > 4) j[e++] = 65533, c += g - 1;
                else {
                    for (f &= 2 === g ? 31 : 3 === g ? 15 : 7; g > 1 && h > c;) f = f << 6 | 63 & a[c++], g--;
                    g > 1 ? j[e++] = 65533 : 65536 > f ? j[e++] = f : (f -= 65536, j[e++] = 55296 | f >> 10 & 1023, j[e++] = 56320 | 1023 & f)
                }
                return d(j, e)
            }, c.utf8border = function (a, b) {
                var c;
                for (b = b || a.length, b > a.length && (b = a.length), c = b - 1; c >= 0 && 128 === (192 & a[c]);) c--;
                return 0 > c ? b : 0 === c ? b : c + i[a[c]] > b ? c : b
            }
        }, {
            "./common": 27
        }],
        29: [function (a, b) {
            "use strict";

            function c(a, b, c, d) {
                for (var e = 65535 & a | 0, f = a >>> 16 & 65535 | 0, g = 0; 0 !== c;) {
                    g = c > 2e3 ? 2e3 : c, c -= g;
                    do e = e + b[d++] | 0, f = f + e | 0; while (--g);
                    e %= 65521, f %= 65521
                }
                return e | f << 16 | 0
            }
            b.exports = c
        }, {}],
        30: [function (a, b) {
            b.exports = {
                Z_NO_FLUSH: 0,
                Z_PARTIAL_FLUSH: 1,
                Z_SYNC_FLUSH: 2,
                Z_FULL_FLUSH: 3,
                Z_FINISH: 4,
                Z_BLOCK: 5,
                Z_TREES: 6,
                Z_OK: 0,
                Z_STREAM_END: 1,
                Z_NEED_DICT: 2,
                Z_ERRNO: -1,
                Z_STREAM_ERROR: -2,
                Z_DATA_ERROR: -3,
                Z_BUF_ERROR: -5,
                Z_NO_COMPRESSION: 0,
                Z_BEST_SPEED: 1,
                Z_BEST_COMPRESSION: 9,
                Z_DEFAULT_COMPRESSION: -1,
                Z_FILTERED: 1,
                Z_HUFFMAN_ONLY: 2,
                Z_RLE: 3,
                Z_FIXED: 4,
                Z_DEFAULT_STRATEGY: 0,
                Z_BINARY: 0,
                Z_TEXT: 1,
                Z_UNKNOWN: 2,
                Z_DEFLATED: 8
            }
        }, {}],
        31: [function (a, b) {
            "use strict";

            function c() {
                for (var a, b = [], c = 0; 256 > c; c++) {
                    a = c;
                    for (var d = 0; 8 > d; d++) a = 1 & a ? 3988292384 ^ a >>> 1 : a >>> 1;
                    b[c] = a
                }
                return b
            }

            function d(a, b, c, d) {
                var f = e,
                    g = d + c;
                a = -1 ^ a;
                for (var h = d; g > h; h++) a = a >>> 8 ^ f[255 & (a ^ b[h])];
                return -1 ^ a
            }
            var e = c();
            b.exports = d
        }, {}],
        32: [function (a, b, c) {
            "use strict";

            function d(a, b) {
                return a.msg = G[b], b
            }

            function e(a) {
                return (a << 1) - (a > 4 ? 9 : 0)
            }

            function f(a) {
                for (var b = a.length; --b >= 0;) a[b] = 0
            }

            function g(a) {
                var b = a.state,
                    c = b.pending;
                c > a.avail_out && (c = a.avail_out), 0 !== c && (C.arraySet(a.output, b.pending_buf, b.pending_out, c, a.next_out), a.next_out += c, b.pending_out += c, a.total_out += c, a.avail_out -= c, b.pending -= c, 0 === b.pending && (b.pending_out = 0))
            }

            function h(a, b) {
                D._tr_flush_block(a, a.block_start >= 0 ? a.block_start : -1, a.strstart - a.block_start, b), a.block_start = a.strstart, g(a.strm)
            }

            function i(a, b) {
                a.pending_buf[a.pending++] = b
            }

            function j(a, b) {
                a.pending_buf[a.pending++] = b >>> 8 & 255, a.pending_buf[a.pending++] = 255 & b
            }

            function k(a, b, c, d) {
                var e = a.avail_in;
                return e > d && (e = d), 0 === e ? 0 : (a.avail_in -= e, C.arraySet(b, a.input, a.next_in, e, c), 1 === a.state.wrap ? a.adler = E(a.adler, b, e, c) : 2 === a.state.wrap && (a.adler = F(a.adler, b, e, c)), a.next_in += e, a.total_in += e, e)
            }

            function l(a, b) {
                var c, d, e = a.max_chain_length,
                    f = a.strstart,
                    g = a.prev_length,
                    h = a.nice_match,
                    i = a.strstart > a.w_size - jb ? a.strstart - (a.w_size - jb) : 0,
                    j = a.window,
                    k = a.w_mask,
                    l = a.prev,
                    m = a.strstart + ib,
                    n = j[f + g - 1],
                    o = j[f + g];
                a.prev_length >= a.good_match && (e >>= 2), h > a.lookahead && (h = a.lookahead);
                do
                    if (c = b, j[c + g] === o && j[c + g - 1] === n && j[c] === j[f] && j[++c] === j[f + 1]) {
                        f += 2, c++;
                        do; while (j[++f] === j[++c] && j[++f] === j[++c] && j[++f] === j[++c] && j[++f] === j[++c] && j[++f] === j[++c] && j[++f] === j[++c] && j[++f] === j[++c] && j[++f] === j[++c] && m > f);
                        if (d = ib - (m - f), f = m - ib, d > g) {
                            if (a.match_start = b, g = d, d >= h) break;
                            n = j[f + g - 1], o = j[f + g]
                        }
                    } while ((b = l[b & k]) > i && 0 !== --e);
                return g <= a.lookahead ? g : a.lookahead
            }

            function m(a) {
                var b, c, d, e, f, g = a.w_size;
                do {
                    if (e = a.window_size - a.lookahead - a.strstart, a.strstart >= g + (g - jb)) {
                        C.arraySet(a.window, a.window, g, g, 0), a.match_start -= g, a.strstart -= g, a.block_start -= g, c = a.hash_size, b = c;
                        do d = a.head[--b], a.head[b] = d >= g ? d - g : 0; while (--c);
                        c = g, b = c;
                        do d = a.prev[--b], a.prev[b] = d >= g ? d - g : 0; while (--c);
                        e += g
                    }
                    if (0 === a.strm.avail_in) break;
                    if (c = k(a.strm, a.window, a.strstart + a.lookahead, e), a.lookahead += c, a.lookahead + a.insert >= hb)
                        for (f = a.strstart - a.insert, a.ins_h = a.window[f], a.ins_h = (a.ins_h << a.hash_shift ^ a.window[f + 1]) & a.hash_mask; a.insert && (a.ins_h = (a.ins_h << a.hash_shift ^ a.window[f + hb - 1]) & a.hash_mask, a.prev[f & a.w_mask] = a.head[a.ins_h], a.head[a.ins_h] = f, f++, a.insert--, !(a.lookahead + a.insert < hb)););
                } while (a.lookahead < jb && 0 !== a.strm.avail_in)
            }

            function n(a, b) {
                var c = 65535;
                for (c > a.pending_buf_size - 5 && (c = a.pending_buf_size - 5);;) {
                    if (a.lookahead <= 1) {
                        if (m(a), 0 === a.lookahead && b === H) return sb;
                        if (0 === a.lookahead) break
                    }
                    a.strstart += a.lookahead, a.lookahead = 0;
                    var d = a.block_start + c;
                    if ((0 === a.strstart || a.strstart >= d) && (a.lookahead = a.strstart - d, a.strstart = d, h(a, !1), 0 === a.strm.avail_out)) return sb;
                    if (a.strstart - a.block_start >= a.w_size - jb && (h(a, !1), 0 === a.strm.avail_out)) return sb
                }
                return a.insert = 0, b === K ? (h(a, !0), 0 === a.strm.avail_out ? ub : vb) : a.strstart > a.block_start && (h(a, !1), 0 === a.strm.avail_out) ? sb : sb
            }

            function o(a, b) {
                for (var c, d;;) {
                    if (a.lookahead < jb) {
                        if (m(a), a.lookahead < jb && b === H) return sb;
                        if (0 === a.lookahead) break
                    }
                    if (c = 0, a.lookahead >= hb && (a.ins_h = (a.ins_h << a.hash_shift ^ a.window[a.strstart + hb - 1]) & a.hash_mask, c = a.prev[a.strstart & a.w_mask] = a.head[a.ins_h], a.head[a.ins_h] = a.strstart), 0 !== c && a.strstart - c <= a.w_size - jb && (a.match_length = l(a, c)), a.match_length >= hb)
                        if (d = D._tr_tally(a, a.strstart - a.match_start, a.match_length - hb), a.lookahead -= a.match_length, a.match_length <= a.max_lazy_match && a.lookahead >= hb) {
                            a.match_length--;
                            do a.strstart++, a.ins_h = (a.ins_h << a.hash_shift ^ a.window[a.strstart + hb - 1]) & a.hash_mask, c = a.prev[a.strstart & a.w_mask] = a.head[a.ins_h], a.head[a.ins_h] = a.strstart; while (0 !== --a.match_length);
                            a.strstart++
                        } else a.strstart += a.match_length, a.match_length = 0, a.ins_h = a.window[a.strstart], a.ins_h = (a.ins_h << a.hash_shift ^ a.window[a.strstart + 1]) & a.hash_mask;
                    else d = D._tr_tally(a, 0, a.window[a.strstart]), a.lookahead--, a.strstart++;
                    if (d && (h(a, !1), 0 === a.strm.avail_out)) return sb
                }
                return a.insert = a.strstart < hb - 1 ? a.strstart : hb - 1, b === K ? (h(a, !0), 0 === a.strm.avail_out ? ub : vb) : a.last_lit && (h(a, !1), 0 === a.strm.avail_out) ? sb : tb
            }

            function p(a, b) {
                for (var c, d, e;;) {
                    if (a.lookahead < jb) {
                        if (m(a), a.lookahead < jb && b === H) return sb;
                        if (0 === a.lookahead) break
                    }
                    if (c = 0, a.lookahead >= hb && (a.ins_h = (a.ins_h << a.hash_shift ^ a.window[a.strstart + hb - 1]) & a.hash_mask, c = a.prev[a.strstart & a.w_mask] = a.head[a.ins_h], a.head[a.ins_h] = a.strstart), a.prev_length = a.match_length, a.prev_match = a.match_start, a.match_length = hb - 1, 0 !== c && a.prev_length < a.max_lazy_match && a.strstart - c <= a.w_size - jb && (a.match_length = l(a, c), a.match_length <= 5 && (a.strategy === S || a.match_length === hb && a.strstart - a.match_start > 4096) && (a.match_length = hb - 1)), a.prev_length >= hb && a.match_length <= a.prev_length) {
                        e = a.strstart + a.lookahead - hb, d = D._tr_tally(a, a.strstart - 1 - a.prev_match, a.prev_length - hb), a.lookahead -= a.prev_length - 1, a.prev_length -= 2;
                        do ++a.strstart <= e && (a.ins_h = (a.ins_h << a.hash_shift ^ a.window[a.strstart + hb - 1]) & a.hash_mask, c = a.prev[a.strstart & a.w_mask] = a.head[a.ins_h], a.head[a.ins_h] = a.strstart); while (0 !== --a.prev_length);
                        if (a.match_available = 0, a.match_length = hb - 1, a.strstart++, d && (h(a, !1), 0 === a.strm.avail_out)) return sb
                    } else if (a.match_available) {
                        if (d = D._tr_tally(a, 0, a.window[a.strstart - 1]), d && h(a, !1), a.strstart++, a.lookahead--, 0 === a.strm.avail_out) return sb
                    } else a.match_available = 1, a.strstart++, a.lookahead--
                }
                return a.match_available && (d = D._tr_tally(a, 0, a.window[a.strstart - 1]), a.match_available = 0), a.insert = a.strstart < hb - 1 ? a.strstart : hb - 1, b === K ? (h(a, !0), 0 === a.strm.avail_out ? ub : vb) : a.last_lit && (h(a, !1), 0 === a.strm.avail_out) ? sb : tb
            }

            function q(a, b) {
                for (var c, d, e, f, g = a.window;;) {
                    if (a.lookahead <= ib) {
                        if (m(a), a.lookahead <= ib && b === H) return sb;
                        if (0 === a.lookahead) break
                    }
                    if (a.match_length = 0, a.lookahead >= hb && a.strstart > 0 && (e = a.strstart - 1, d = g[e], d === g[++e] && d === g[++e] && d === g[++e])) {
                        f = a.strstart + ib;
                        do; while (d === g[++e] && d === g[++e] && d === g[++e] && d === g[++e] && d === g[++e] && d === g[++e] && d === g[++e] && d === g[++e] && f > e);
                        a.match_length = ib - (f - e), a.match_length > a.lookahead && (a.match_length = a.lookahead)
                    }
                    if (a.match_length >= hb ? (c = D._tr_tally(a, 1, a.match_length - hb), a.lookahead -= a.match_length, a.strstart += a.match_length, a.match_length = 0) : (c = D._tr_tally(a, 0, a.window[a.strstart]), a.lookahead--, a.strstart++), c && (h(a, !1), 0 === a.strm.avail_out)) return sb
                }
                return a.insert = 0, b === K ? (h(a, !0), 0 === a.strm.avail_out ? ub : vb) : a.last_lit && (h(a, !1), 0 === a.strm.avail_out) ? sb : tb
            }

            function r(a, b) {
                for (var c;;) {
                    if (0 === a.lookahead && (m(a), 0 === a.lookahead)) {
                        if (b === H) return sb;
                        break
                    }
                    if (a.match_length = 0, c = D._tr_tally(a, 0, a.window[a.strstart]), a.lookahead--, a.strstart++, c && (h(a, !1), 0 === a.strm.avail_out)) return sb
                }
                return a.insert = 0, b === K ? (h(a, !0), 0 === a.strm.avail_out ? ub : vb) : a.last_lit && (h(a, !1), 0 === a.strm.avail_out) ? sb : tb
            }

            function s(a) {
                a.window_size = 2 * a.w_size, f(a.head), a.max_lazy_match = B[a.level].max_lazy, a.good_match = B[a.level].good_length, a.nice_match = B[a.level].nice_length, a.max_chain_length = B[a.level].max_chain, a.strstart = 0, a.block_start = 0, a.lookahead = 0, a.insert = 0, a.match_length = a.prev_length = hb - 1, a.match_available = 0, a.ins_h = 0
            }

            function t() {
                this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = Y, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new C.Buf16(2 * fb), this.dyn_dtree = new C.Buf16(2 * (2 * db + 1)), this.bl_tree = new C.Buf16(2 * (2 * eb + 1)), f(this.dyn_ltree), f(this.dyn_dtree), f(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new C.Buf16(gb + 1), this.heap = new C.Buf16(2 * cb + 1), f(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new C.Buf16(2 * cb + 1), f(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0
            }

            function u(a) {
                var b;
                return a && a.state ? (a.total_in = a.total_out = 0, a.data_type = X, b = a.state, b.pending = 0, b.pending_out = 0, b.wrap < 0 && (b.wrap = -b.wrap), b.status = b.wrap ? lb : qb, a.adler = 2 === b.wrap ? 0 : 1, b.last_flush = H, D._tr_init(b), M) : d(a, O)
            }

            function v(a) {
                var b = u(a);
                return b === M && s(a.state), b
            }

            function w(a, b) {
                return a && a.state ? 2 !== a.state.wrap ? O : (a.state.gzhead = b, M) : O
            }

            function x(a, b, c, e, f, g) {
                if (!a) return O;
                var h = 1;
                if (b === R && (b = 6), 0 > e ? (h = 0, e = -e) : e > 15 && (h = 2, e -= 16), 1 > f || f > Z || c !== Y || 8 > e || e > 15 || 0 > b || b > 9 || 0 > g || g > V) return d(a, O);
                8 === e && (e = 9);
                var i = new t;
                return a.state = i, i.strm = a, i.wrap = h, i.gzhead = null, i.w_bits = e, i.w_size = 1 << i.w_bits, i.w_mask = i.w_size - 1, i.hash_bits = f + 7, i.hash_size = 1 << i.hash_bits, i.hash_mask = i.hash_size - 1, i.hash_shift = ~~((i.hash_bits + hb - 1) / hb), i.window = new C.Buf8(2 * i.w_size), i.head = new C.Buf16(i.hash_size), i.prev = new C.Buf16(i.w_size), i.lit_bufsize = 1 << f + 6, i.pending_buf_size = 4 * i.lit_bufsize, i.pending_buf = new C.Buf8(i.pending_buf_size), i.d_buf = i.lit_bufsize >> 1, i.l_buf = 3 * i.lit_bufsize, i.level = b, i.strategy = g, i.method = c, v(a)
            }

            function y(a, b) {
                return x(a, b, Y, $, _, W)
            }

            function z(a, b) {
                var c, h, k, l;
                if (!a || !a.state || b > L || 0 > b) return a ? d(a, O) : O;
                if (h = a.state, !a.output || !a.input && 0 !== a.avail_in || h.status === rb && b !== K) return d(a, 0 === a.avail_out ? Q : O);
                if (h.strm = a, c = h.last_flush, h.last_flush = b, h.status === lb)
                    if (2 === h.wrap) a.adler = 0, i(h, 31), i(h, 139), i(h, 8), h.gzhead ? (i(h, (h.gzhead.text ? 1 : 0) + (h.gzhead.hcrc ? 2 : 0) + (h.gzhead.extra ? 4 : 0) + (h.gzhead.name ? 8 : 0) + (h.gzhead.comment ? 16 : 0)), i(h, 255 & h.gzhead.time), i(h, h.gzhead.time >> 8 & 255), i(h, h.gzhead.time >> 16 & 255), i(h, h.gzhead.time >> 24 & 255), i(h, 9 === h.level ? 2 : h.strategy >= T || h.level < 2 ? 4 : 0), i(h, 255 & h.gzhead.os), h.gzhead.extra && h.gzhead.extra.length && (i(h, 255 & h.gzhead.extra.length), i(h, h.gzhead.extra.length >> 8 & 255)), h.gzhead.hcrc && (a.adler = F(a.adler, h.pending_buf, h.pending, 0)), h.gzindex = 0, h.status = mb) : (i(h, 0), i(h, 0), i(h, 0), i(h, 0), i(h, 0), i(h, 9 === h.level ? 2 : h.strategy >= T || h.level < 2 ? 4 : 0), i(h, wb), h.status = qb);
                    else {
                        var m = Y + (h.w_bits - 8 << 4) << 8,
                            n = -1;
                        n = h.strategy >= T || h.level < 2 ? 0 : h.level < 6 ? 1 : 6 === h.level ? 2 : 3, m |= n << 6, 0 !== h.strstart && (m |= kb), m += 31 - m % 31, h.status = qb, j(h, m), 0 !== h.strstart && (j(h, a.adler >>> 16), j(h, 65535 & a.adler)), a.adler = 1
                    } if (h.status === mb)
                    if (h.gzhead.extra) {
                        for (k = h.pending; h.gzindex < (65535 & h.gzhead.extra.length) && (h.pending !== h.pending_buf_size || (h.gzhead.hcrc && h.pending > k && (a.adler = F(a.adler, h.pending_buf, h.pending - k, k)), g(a), k = h.pending, h.pending !== h.pending_buf_size));) i(h, 255 & h.gzhead.extra[h.gzindex]), h.gzindex++;
                        h.gzhead.hcrc && h.pending > k && (a.adler = F(a.adler, h.pending_buf, h.pending - k, k)), h.gzindex === h.gzhead.extra.length && (h.gzindex = 0, h.status = nb)
                    } else h.status = nb;
                if (h.status === nb)
                    if (h.gzhead.name) {
                        k = h.pending;
                        do {
                            if (h.pending === h.pending_buf_size && (h.gzhead.hcrc && h.pending > k && (a.adler = F(a.adler, h.pending_buf, h.pending - k, k)), g(a), k = h.pending, h.pending === h.pending_buf_size)) {
                                l = 1;
                                break
                            }
                            l = h.gzindex < h.gzhead.name.length ? 255 & h.gzhead.name.charCodeAt(h.gzindex++) : 0, i(h, l)
                        } while (0 !== l);
                        h.gzhead.hcrc && h.pending > k && (a.adler = F(a.adler, h.pending_buf, h.pending - k, k)), 0 === l && (h.gzindex = 0, h.status = ob)
                    } else h.status = ob;
                if (h.status === ob)
                    if (h.gzhead.comment) {
                        k = h.pending;
                        do {
                            if (h.pending === h.pending_buf_size && (h.gzhead.hcrc && h.pending > k && (a.adler = F(a.adler, h.pending_buf, h.pending - k, k)), g(a), k = h.pending, h.pending === h.pending_buf_size)) {
                                l = 1;
                                break
                            }
                            l = h.gzindex < h.gzhead.comment.length ? 255 & h.gzhead.comment.charCodeAt(h.gzindex++) : 0, i(h, l)
                        } while (0 !== l);
                        h.gzhead.hcrc && h.pending > k && (a.adler = F(a.adler, h.pending_buf, h.pending - k, k)), 0 === l && (h.status = pb)
                    } else h.status = pb;
                if (h.status === pb && (h.gzhead.hcrc ? (h.pending + 2 > h.pending_buf_size && g(a), h.pending + 2 <= h.pending_buf_size && (i(h, 255 & a.adler), i(h, a.adler >> 8 & 255), a.adler = 0, h.status = qb)) : h.status = qb), 0 !== h.pending) {
                    if (g(a), 0 === a.avail_out) return h.last_flush = -1, M
                } else if (0 === a.avail_in && e(b) <= e(c) && b !== K) return d(a, Q);
                if (h.status === rb && 0 !== a.avail_in) return d(a, Q);
                if (0 !== a.avail_in || 0 !== h.lookahead || b !== H && h.status !== rb) {
                    var o = h.strategy === T ? r(h, b) : h.strategy === U ? q(h, b) : B[h.level].func(h, b);
                    if ((o === ub || o === vb) && (h.status = rb), o === sb || o === ub) return 0 === a.avail_out && (h.last_flush = -1), M;
                    if (o === tb && (b === I ? D._tr_align(h) : b !== L && (D._tr_stored_block(h, 0, 0, !1), b === J && (f(h.head), 0 === h.lookahead && (h.strstart = 0, h.block_start = 0, h.insert = 0))), g(a), 0 === a.avail_out)) return h.last_flush = -1, M
                }
                return b !== K ? M : h.wrap <= 0 ? N : (2 === h.wrap ? (i(h, 255 & a.adler), i(h, a.adler >> 8 & 255), i(h, a.adler >> 16 & 255), i(h, a.adler >> 24 & 255), i(h, 255 & a.total_in), i(h, a.total_in >> 8 & 255), i(h, a.total_in >> 16 & 255), i(h, a.total_in >> 24 & 255)) : (j(h, a.adler >>> 16), j(h, 65535 & a.adler)), g(a), h.wrap > 0 && (h.wrap = -h.wrap), 0 !== h.pending ? M : N)
            }

            function A(a) {
                var b;
                return a && a.state ? (b = a.state.status, b !== lb && b !== mb && b !== nb && b !== ob && b !== pb && b !== qb && b !== rb ? d(a, O) : (a.state = null, b === qb ? d(a, P) : M)) : O
            }
            var B, C = a("../utils/common"),
                D = a("./trees"),
                E = a("./adler32"),
                F = a("./crc32"),
                G = a("./messages"),
                H = 0,
                I = 1,
                J = 3,
                K = 4,
                L = 5,
                M = 0,
                N = 1,
                O = -2,
                P = -3,
                Q = -5,
                R = -1,
                S = 1,
                T = 2,
                U = 3,
                V = 4,
                W = 0,
                X = 2,
                Y = 8,
                Z = 9,
                $ = 15,
                _ = 8,
                ab = 29,
                bb = 256,
                cb = bb + 1 + ab,
                db = 30,
                eb = 19,
                fb = 2 * cb + 1,
                gb = 15,
                hb = 3,
                ib = 258,
                jb = ib + hb + 1,
                kb = 32,
                lb = 42,
                mb = 69,
                nb = 73,
                ob = 91,
                pb = 103,
                qb = 113,
                rb = 666,
                sb = 1,
                tb = 2,
                ub = 3,
                vb = 4,
                wb = 3,
                xb = function (a, b, c, d, e) {
                    this.good_length = a, this.max_lazy = b, this.nice_length = c, this.max_chain = d, this.func = e
                };
            B = [new xb(0, 0, 0, 0, n), new xb(4, 4, 8, 4, o), new xb(4, 5, 16, 8, o), new xb(4, 6, 32, 32, o), new xb(4, 4, 16, 16, p), new xb(8, 16, 32, 32, p), new xb(8, 16, 128, 128, p), new xb(8, 32, 128, 256, p), new xb(32, 128, 258, 1024, p), new xb(32, 258, 258, 4096, p)], c.deflateInit = y, c.deflateInit2 = x, c.deflateReset = v, c.deflateResetKeep = u, c.deflateSetHeader = w, c.deflate = z, c.deflateEnd = A, c.deflateInfo = "pako deflate (from Nodeca project)"
        }, {
            "../utils/common": 27,
            "./adler32": 29,
            "./crc32": 31,
            "./messages": 37,
            "./trees": 38
        }],
        33: [function (a, b) {
            "use strict";

            function c() {
                this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1
            }
            b.exports = c
        }, {}],
        34: [function (a, b) {
            "use strict";
            var c = 30,
                d = 12;
            b.exports = function (a, b) {
                var e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C;
                e = a.state, f = a.next_in, B = a.input, g = f + (a.avail_in - 5), h = a.next_out, C = a.output, i = h - (b - a.avail_out), j = h + (a.avail_out - 257), k = e.dmax, l = e.wsize, m = e.whave, n = e.wnext, o = e.window, p = e.hold, q = e.bits, r = e.lencode, s = e.distcode, t = (1 << e.lenbits) - 1, u = (1 << e.distbits) - 1;
                a: do {
                    15 > q && (p += B[f++] << q, q += 8, p += B[f++] << q, q += 8), v = r[p & t];
                    b: for (;;) {
                        if (w = v >>> 24, p >>>= w, q -= w, w = v >>> 16 & 255, 0 === w) C[h++] = 65535 & v;
                        else {
                            if (!(16 & w)) {
                                if (0 === (64 & w)) {
                                    v = r[(65535 & v) + (p & (1 << w) - 1)];
                                    continue b
                                }
                                if (32 & w) {
                                    e.mode = d;
                                    break a
                                }
                                a.msg = "invalid literal/length code", e.mode = c;
                                break a
                            }
                            x = 65535 & v, w &= 15, w && (w > q && (p += B[f++] << q, q += 8), x += p & (1 << w) - 1, p >>>= w, q -= w), 15 > q && (p += B[f++] << q, q += 8, p += B[f++] << q, q += 8), v = s[p & u];
                            c: for (;;) {
                                if (w = v >>> 24, p >>>= w, q -= w, w = v >>> 16 & 255, !(16 & w)) {
                                    if (0 === (64 & w)) {
                                        v = s[(65535 & v) + (p & (1 << w) - 1)];
                                        continue c
                                    }
                                    a.msg = "invalid distance code", e.mode = c;
                                    break a
                                }
                                if (y = 65535 & v, w &= 15, w > q && (p += B[f++] << q, q += 8, w > q && (p += B[f++] << q, q += 8)), y += p & (1 << w) - 1, y > k) {
                                    a.msg = "invalid distance too far back", e.mode = c;
                                    break a
                                }
                                if (p >>>= w, q -= w, w = h - i, y > w) {
                                    if (w = y - w, w > m && e.sane) {
                                        a.msg = "invalid distance too far back", e.mode = c;
                                        break a
                                    }
                                    if (z = 0, A = o, 0 === n) {
                                        if (z += l - w, x > w) {
                                            x -= w;
                                            do C[h++] = o[z++]; while (--w);
                                            z = h - y, A = C
                                        }
                                    } else if (w > n) {
                                        if (z += l + n - w, w -= n, x > w) {
                                            x -= w;
                                            do C[h++] = o[z++]; while (--w);
                                            if (z = 0, x > n) {
                                                w = n, x -= w;
                                                do C[h++] = o[z++]; while (--w);
                                                z = h - y, A = C
                                            }
                                        }
                                    } else if (z += n - w, x > w) {
                                        x -= w;
                                        do C[h++] = o[z++]; while (--w);
                                        z = h - y, A = C
                                    }
                                    for (; x > 2;) C[h++] = A[z++], C[h++] = A[z++], C[h++] = A[z++], x -= 3;
                                    x && (C[h++] = A[z++], x > 1 && (C[h++] = A[z++]))
                                } else {
                                    z = h - y;
                                    do C[h++] = C[z++], C[h++] = C[z++], C[h++] = C[z++], x -= 3; while (x > 2);
                                    x && (C[h++] = C[z++], x > 1 && (C[h++] = C[z++]))
                                }
                                break
                            }
                        }
                        break
                    }
                } while (g > f && j > h);
                x = q >> 3, f -= x, q -= x << 3, p &= (1 << q) - 1, a.next_in = f, a.next_out = h, a.avail_in = g > f ? 5 + (g - f) : 5 - (f - g), a.avail_out = j > h ? 257 + (j - h) : 257 - (h - j), e.hold = p, e.bits = q
            }
        }, {}],
        35: [function (a, b, c) {
            "use strict";

            function d(a) {
                return (a >>> 24 & 255) + (a >>> 8 & 65280) + ((65280 & a) << 8) + ((255 & a) << 24)
            }

            function e() {
                this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new r.Buf16(320), this.work = new r.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0
            }

            function f(a) {
                var b;
                return a && a.state ? (b = a.state, a.total_in = a.total_out = b.total = 0, a.msg = "", b.wrap && (a.adler = 1 & b.wrap), b.mode = K, b.last = 0, b.havedict = 0, b.dmax = 32768, b.head = null, b.hold = 0, b.bits = 0, b.lencode = b.lendyn = new r.Buf32(ob), b.distcode = b.distdyn = new r.Buf32(pb), b.sane = 1, b.back = -1, C) : F
            }

            function g(a) {
                var b;
                return a && a.state ? (b = a.state, b.wsize = 0, b.whave = 0, b.wnext = 0, f(a)) : F
            }

            function h(a, b) {
                var c, d;
                return a && a.state ? (d = a.state, 0 > b ? (c = 0, b = -b) : (c = (b >> 4) + 1, 48 > b && (b &= 15)), b && (8 > b || b > 15) ? F : (null !== d.window && d.wbits !== b && (d.window = null), d.wrap = c, d.wbits = b, g(a))) : F
            }

            function i(a, b) {
                var c, d;
                return a ? (d = new e, a.state = d, d.window = null, c = h(a, b), c !== C && (a.state = null), c) : F
            }

            function j(a) {
                return i(a, rb)
            }

            function k(a) {
                if (sb) {
                    var b;
                    for (p = new r.Buf32(512), q = new r.Buf32(32), b = 0; 144 > b;) a.lens[b++] = 8;
                    for (; 256 > b;) a.lens[b++] = 9;
                    for (; 280 > b;) a.lens[b++] = 7;
                    for (; 288 > b;) a.lens[b++] = 8;
                    for (v(x, a.lens, 0, 288, p, 0, a.work, {
                            bits: 9
                        }), b = 0; 32 > b;) a.lens[b++] = 5;
                    v(y, a.lens, 0, 32, q, 0, a.work, {
                        bits: 5
                    }), sb = !1
                }
                a.lencode = p, a.lenbits = 9, a.distcode = q, a.distbits = 5
            }

            function l(a, b, c, d) {
                var e, f = a.state;
                return null === f.window && (f.wsize = 1 << f.wbits, f.wnext = 0, f.whave = 0, f.window = new r.Buf8(f.wsize)), d >= f.wsize ? (r.arraySet(f.window, b, c - f.wsize, f.wsize, 0), f.wnext = 0, f.whave = f.wsize) : (e = f.wsize - f.wnext, e > d && (e = d), r.arraySet(f.window, b, c - d, e, f.wnext), d -= e, d ? (r.arraySet(f.window, b, c - d, d, 0), f.wnext = d, f.whave = f.wsize) : (f.wnext += e, f.wnext === f.wsize && (f.wnext = 0), f.whave < f.wsize && (f.whave += e))), 0
            }

            function m(a, b) {
                var c, e, f, g, h, i, j, m, n, o, p, q, ob, pb, qb, rb, sb, tb, ub, vb, wb, xb, yb, zb, Ab = 0,
                    Bb = new r.Buf8(4),
                    Cb = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
                if (!a || !a.state || !a.output || !a.input && 0 !== a.avail_in) return F;
                c = a.state, c.mode === V && (c.mode = W), h = a.next_out, f = a.output, j = a.avail_out, g = a.next_in, e = a.input, i = a.avail_in, m = c.hold, n = c.bits, o = i, p = j, xb = C;
                a: for (;;) switch (c.mode) {
                    case K:
                        if (0 === c.wrap) {
                            c.mode = W;
                            break
                        }
                        for (; 16 > n;) {
                            if (0 === i) break a;
                            i--, m += e[g++] << n, n += 8
                        }
                        if (2 & c.wrap && 35615 === m) {
                            c.check = 0, Bb[0] = 255 & m, Bb[1] = m >>> 8 & 255, c.check = t(c.check, Bb, 2, 0), m = 0, n = 0, c.mode = L;
                            break
                        }
                        if (c.flags = 0, c.head && (c.head.done = !1), !(1 & c.wrap) || (((255 & m) << 8) + (m >> 8)) % 31) {
                            a.msg = "incorrect header check", c.mode = lb;
                            break
                        }
                        if ((15 & m) !== J) {
                            a.msg = "unknown compression method", c.mode = lb;
                            break
                        }
                        if (m >>>= 4, n -= 4, wb = (15 & m) + 8, 0 === c.wbits) c.wbits = wb;
                        else if (wb > c.wbits) {
                            a.msg = "invalid window size", c.mode = lb;
                            break
                        }
                        c.dmax = 1 << wb, a.adler = c.check = 1, c.mode = 512 & m ? T : V, m = 0, n = 0;
                        break;
                    case L:
                        for (; 16 > n;) {
                            if (0 === i) break a;
                            i--, m += e[g++] << n, n += 8
                        }
                        if (c.flags = m, (255 & c.flags) !== J) {
                            a.msg = "unknown compression method", c.mode = lb;
                            break
                        }
                        if (57344 & c.flags) {
                            a.msg = "unknown header flags set", c.mode = lb;
                            break
                        }
                        c.head && (c.head.text = m >> 8 & 1), 512 & c.flags && (Bb[0] = 255 & m, Bb[1] = m >>> 8 & 255, c.check = t(c.check, Bb, 2, 0)), m = 0, n = 0, c.mode = M;
                    case M:
                        for (; 32 > n;) {
                            if (0 === i) break a;
                            i--, m += e[g++] << n, n += 8
                        }
                        c.head && (c.head.time = m), 512 & c.flags && (Bb[0] = 255 & m, Bb[1] = m >>> 8 & 255, Bb[2] = m >>> 16 & 255, Bb[3] = m >>> 24 & 255, c.check = t(c.check, Bb, 4, 0)), m = 0, n = 0, c.mode = N;
                    case N:
                        for (; 16 > n;) {
                            if (0 === i) break a;
                            i--, m += e[g++] << n, n += 8
                        }
                        c.head && (c.head.xflags = 255 & m, c.head.os = m >> 8), 512 & c.flags && (Bb[0] = 255 & m, Bb[1] = m >>> 8 & 255, c.check = t(c.check, Bb, 2, 0)), m = 0, n = 0, c.mode = O;
                    case O:
                        if (1024 & c.flags) {
                            for (; 16 > n;) {
                                if (0 === i) break a;
                                i--, m += e[g++] << n, n += 8
                            }
                            c.length = m, c.head && (c.head.extra_len = m), 512 & c.flags && (Bb[0] = 255 & m, Bb[1] = m >>> 8 & 255, c.check = t(c.check, Bb, 2, 0)), m = 0, n = 0
                        } else c.head && (c.head.extra = null);
                        c.mode = P;
                    case P:
                        if (1024 & c.flags && (q = c.length, q > i && (q = i), q && (c.head && (wb = c.head.extra_len - c.length, c.head.extra || (c.head.extra = new Array(c.head.extra_len)), r.arraySet(c.head.extra, e, g, q, wb)), 512 & c.flags && (c.check = t(c.check, e, q, g)), i -= q, g += q, c.length -= q), c.length)) break a;
                        c.length = 0, c.mode = Q;
                    case Q:
                        if (2048 & c.flags) {
                            if (0 === i) break a;
                            q = 0;
                            do wb = e[g + q++], c.head && wb && c.length < 65536 && (c.head.name += String.fromCharCode(wb)); while (wb && i > q);
                            if (512 & c.flags && (c.check = t(c.check, e, q, g)), i -= q, g += q, wb) break a
                        } else c.head && (c.head.name = null);
                        c.length = 0, c.mode = R;
                    case R:
                        if (4096 & c.flags) {
                            if (0 === i) break a;
                            q = 0;
                            do wb = e[g + q++], c.head && wb && c.length < 65536 && (c.head.comment += String.fromCharCode(wb)); while (wb && i > q);
                            if (512 & c.flags && (c.check = t(c.check, e, q, g)), i -= q, g += q, wb) break a
                        } else c.head && (c.head.comment = null);
                        c.mode = S;
                    case S:
                        if (512 & c.flags) {
                            for (; 16 > n;) {
                                if (0 === i) break a;
                                i--, m += e[g++] << n, n += 8
                            }
                            if (m !== (65535 & c.check)) {
                                a.msg = "header crc mismatch", c.mode = lb;
                                break
                            }
                            m = 0, n = 0
                        }
                        c.head && (c.head.hcrc = c.flags >> 9 & 1, c.head.done = !0), a.adler = c.check = 0, c.mode = V;
                        break;
                    case T:
                        for (; 32 > n;) {
                            if (0 === i) break a;
                            i--, m += e[g++] << n, n += 8
                        }
                        a.adler = c.check = d(m), m = 0, n = 0, c.mode = U;
                    case U:
                        if (0 === c.havedict) return a.next_out = h, a.avail_out = j, a.next_in = g, a.avail_in = i, c.hold = m, c.bits = n, E;
                        a.adler = c.check = 1, c.mode = V;
                    case V:
                        if (b === A || b === B) break a;
                    case W:
                        if (c.last) {
                            m >>>= 7 & n, n -= 7 & n, c.mode = ib;
                            break
                        }
                        for (; 3 > n;) {
                            if (0 === i) break a;
                            i--, m += e[g++] << n, n += 8
                        }
                        switch (c.last = 1 & m, m >>>= 1, n -= 1, 3 & m) {
                            case 0:
                                c.mode = X;
                                break;
                            case 1:
                                if (k(c), c.mode = bb, b === B) {
                                    m >>>= 2, n -= 2;
                                    break a
                                }
                                break;
                            case 2:
                                c.mode = $;
                                break;
                            case 3:
                                a.msg = "invalid block type", c.mode = lb
                        }
                        m >>>= 2, n -= 2;
                        break;
                    case X:
                        for (m >>>= 7 & n, n -= 7 & n; 32 > n;) {
                            if (0 === i) break a;
                            i--, m += e[g++] << n, n += 8
                        }
                        if ((65535 & m) !== (m >>> 16 ^ 65535)) {
                            a.msg = "invalid stored block lengths", c.mode = lb;
                            break
                        }
                        if (c.length = 65535 & m, m = 0, n = 0, c.mode = Y, b === B) break a;
                    case Y:
                        c.mode = Z;
                    case Z:
                        if (q = c.length) {
                            if (q > i && (q = i), q > j && (q = j), 0 === q) break a;
                            r.arraySet(f, e, g, q, h), i -= q, g += q, j -= q, h += q, c.length -= q;
                            break
                        }
                        c.mode = V;
                        break;
                    case $:
                        for (; 14 > n;) {
                            if (0 === i) break a;
                            i--, m += e[g++] << n, n += 8
                        }
                        if (c.nlen = (31 & m) + 257, m >>>= 5, n -= 5, c.ndist = (31 & m) + 1, m >>>= 5, n -= 5, c.ncode = (15 & m) + 4, m >>>= 4, n -= 4, c.nlen > 286 || c.ndist > 30) {
                            a.msg = "too many length or distance symbols", c.mode = lb;
                            break
                        }
                        c.have = 0, c.mode = _;
                    case _:
                        for (; c.have < c.ncode;) {
                            for (; 3 > n;) {
                                if (0 === i) break a;
                                i--, m += e[g++] << n, n += 8
                            }
                            c.lens[Cb[c.have++]] = 7 & m, m >>>= 3, n -= 3
                        }
                        for (; c.have < 19;) c.lens[Cb[c.have++]] = 0;
                        if (c.lencode = c.lendyn, c.lenbits = 7, yb = {
                                bits: c.lenbits
                            }, xb = v(w, c.lens, 0, 19, c.lencode, 0, c.work, yb), c.lenbits = yb.bits, xb) {
                            a.msg = "invalid code lengths set", c.mode = lb;
                            break
                        }
                        c.have = 0, c.mode = ab;
                    case ab:
                        for (; c.have < c.nlen + c.ndist;) {
                            for (; Ab = c.lencode[m & (1 << c.lenbits) - 1], qb = Ab >>> 24, rb = Ab >>> 16 & 255, sb = 65535 & Ab, !(n >= qb);) {
                                if (0 === i) break a;
                                i--, m += e[g++] << n, n += 8
                            }
                            if (16 > sb) m >>>= qb, n -= qb, c.lens[c.have++] = sb;
                            else {
                                if (16 === sb) {
                                    for (zb = qb + 2; zb > n;) {
                                        if (0 === i) break a;
                                        i--, m += e[g++] << n, n += 8
                                    }
                                    if (m >>>= qb, n -= qb, 0 === c.have) {
                                        a.msg = "invalid bit length repeat", c.mode = lb;
                                        break
                                    }
                                    wb = c.lens[c.have - 1], q = 3 + (3 & m), m >>>= 2, n -= 2
                                } else if (17 === sb) {
                                    for (zb = qb + 3; zb > n;) {
                                        if (0 === i) break a;
                                        i--, m += e[g++] << n, n += 8
                                    }
                                    m >>>= qb, n -= qb, wb = 0, q = 3 + (7 & m), m >>>= 3, n -= 3
                                } else {
                                    for (zb = qb + 7; zb > n;) {
                                        if (0 === i) break a;
                                        i--, m += e[g++] << n, n += 8
                                    }
                                    m >>>= qb, n -= qb, wb = 0, q = 11 + (127 & m), m >>>= 7, n -= 7
                                }
                                if (c.have + q > c.nlen + c.ndist) {
                                    a.msg = "invalid bit length repeat", c.mode = lb;
                                    break
                                }
                                for (; q--;) c.lens[c.have++] = wb
                            }
                        }
                        if (c.mode === lb) break;
                        if (0 === c.lens[256]) {
                            a.msg = "invalid code -- missing end-of-block", c.mode = lb;
                            break
                        }
                        if (c.lenbits = 9, yb = {
                                bits: c.lenbits
                            }, xb = v(x, c.lens, 0, c.nlen, c.lencode, 0, c.work, yb), c.lenbits = yb.bits, xb) {
                            a.msg = "invalid literal/lengths set", c.mode = lb;
                            break
                        }
                        if (c.distbits = 6, c.distcode = c.distdyn, yb = {
                                bits: c.distbits
                            }, xb = v(y, c.lens, c.nlen, c.ndist, c.distcode, 0, c.work, yb), c.distbits = yb.bits, xb) {
                            a.msg = "invalid distances set", c.mode = lb;
                            break
                        }
                        if (c.mode = bb, b === B) break a;
                    case bb:
                        c.mode = cb;
                    case cb:
                        if (i >= 6 && j >= 258) {
                            a.next_out = h, a.avail_out = j, a.next_in = g, a.avail_in = i, c.hold = m, c.bits = n, u(a, p), h = a.next_out, f = a.output, j = a.avail_out, g = a.next_in, e = a.input, i = a.avail_in, m = c.hold, n = c.bits, c.mode === V && (c.back = -1);
                            break
                        }
                        for (c.back = 0; Ab = c.lencode[m & (1 << c.lenbits) - 1], qb = Ab >>> 24, rb = Ab >>> 16 & 255, sb = 65535 & Ab, !(n >= qb);) {
                            if (0 === i) break a;
                            i--, m += e[g++] << n, n += 8
                        }
                        if (rb && 0 === (240 & rb)) {
                            for (tb = qb, ub = rb, vb = sb; Ab = c.lencode[vb + ((m & (1 << tb + ub) - 1) >> tb)], qb = Ab >>> 24, rb = Ab >>> 16 & 255, sb = 65535 & Ab, !(n >= tb + qb);) {
                                if (0 === i) break a;
                                i--, m += e[g++] << n, n += 8
                            }
                            m >>>= tb, n -= tb, c.back += tb
                        }
                        if (m >>>= qb, n -= qb, c.back += qb, c.length = sb, 0 === rb) {
                            c.mode = hb;
                            break
                        }
                        if (32 & rb) {
                            c.back = -1, c.mode = V;
                            break
                        }
                        if (64 & rb) {
                            a.msg = "invalid literal/length code", c.mode = lb;
                            break
                        }
                        c.extra = 15 & rb, c.mode = db;
                    case db:
                        if (c.extra) {
                            for (zb = c.extra; zb > n;) {
                                if (0 === i) break a;
                                i--, m += e[g++] << n, n += 8
                            }
                            c.length += m & (1 << c.extra) - 1, m >>>= c.extra, n -= c.extra, c.back += c.extra
                        }
                        c.was = c.length, c.mode = eb;
                    case eb:
                        for (; Ab = c.distcode[m & (1 << c.distbits) - 1], qb = Ab >>> 24, rb = Ab >>> 16 & 255, sb = 65535 & Ab, !(n >= qb);) {
                            if (0 === i) break a;
                            i--, m += e[g++] << n, n += 8
                        }
                        if (0 === (240 & rb)) {
                            for (tb = qb, ub = rb, vb = sb; Ab = c.distcode[vb + ((m & (1 << tb + ub) - 1) >> tb)], qb = Ab >>> 24, rb = Ab >>> 16 & 255, sb = 65535 & Ab, !(n >= tb + qb);) {
                                if (0 === i) break a;
                                i--, m += e[g++] << n, n += 8
                            }
                            m >>>= tb, n -= tb, c.back += tb
                        }
                        if (m >>>= qb, n -= qb, c.back += qb, 64 & rb) {
                            a.msg = "invalid distance code", c.mode = lb;
                            break
                        }
                        c.offset = sb, c.extra = 15 & rb, c.mode = fb;
                    case fb:
                        if (c.extra) {
                            for (zb = c.extra; zb > n;) {
                                if (0 === i) break a;
                                i--, m += e[g++] << n, n += 8
                            }
                            c.offset += m & (1 << c.extra) - 1, m >>>= c.extra, n -= c.extra, c.back += c.extra
                        }
                        if (c.offset > c.dmax) {
                            a.msg = "invalid distance too far back", c.mode = lb;
                            break
                        }
                        c.mode = gb;
                    case gb:
                        if (0 === j) break a;
                        if (q = p - j, c.offset > q) {
                            if (q = c.offset - q, q > c.whave && c.sane) {
                                a.msg = "invalid distance too far back", c.mode = lb;
                                break
                            }
                            q > c.wnext ? (q -= c.wnext, ob = c.wsize - q) : ob = c.wnext - q, q > c.length && (q = c.length), pb = c.window
                        } else pb = f, ob = h - c.offset, q = c.length;
                        q > j && (q = j), j -= q, c.length -= q;
                        do f[h++] = pb[ob++]; while (--q);
                        0 === c.length && (c.mode = cb);
                        break;
                    case hb:
                        if (0 === j) break a;
                        f[h++] = c.length, j--, c.mode = cb;
                        break;
                    case ib:
                        if (c.wrap) {
                            for (; 32 > n;) {
                                if (0 === i) break a;
                                i--, m |= e[g++] << n, n += 8
                            }
                            if (p -= j, a.total_out += p, c.total += p, p && (a.adler = c.check = c.flags ? t(c.check, f, p, h - p) : s(c.check, f, p, h - p)), p = j, (c.flags ? m : d(m)) !== c.check) {
                                a.msg = "incorrect data check", c.mode = lb;
                                break
                            }
                            m = 0, n = 0
                        }
                        c.mode = jb;
                    case jb:
                        if (c.wrap && c.flags) {
                            for (; 32 > n;) {
                                if (0 === i) break a;
                                i--, m += e[g++] << n, n += 8
                            }
                            if (m !== (4294967295 & c.total)) {
                                a.msg = "incorrect length check", c.mode = lb;
                                break
                            }
                            m = 0, n = 0
                        }
                        c.mode = kb;
                    case kb:
                        xb = D;
                        break a;
                    case lb:
                        xb = G;
                        break a;
                    case mb:
                        return H;
                    case nb:
                    default:
                        return F
                }
                return a.next_out = h, a.avail_out = j, a.next_in = g, a.avail_in = i, c.hold = m, c.bits = n, (c.wsize || p !== a.avail_out && c.mode < lb && (c.mode < ib || b !== z)) && l(a, a.output, a.next_out, p - a.avail_out) ? (c.mode = mb, H) : (o -= a.avail_in, p -= a.avail_out, a.total_in += o, a.total_out += p, c.total += p, c.wrap && p && (a.adler = c.check = c.flags ? t(c.check, f, p, a.next_out - p) : s(c.check, f, p, a.next_out - p)), a.data_type = c.bits + (c.last ? 64 : 0) + (c.mode === V ? 128 : 0) + (c.mode === bb || c.mode === Y ? 256 : 0), (0 === o && 0 === p || b === z) && xb === C && (xb = I), xb)
            }

            function n(a) {
                if (!a || !a.state) return F;
                var b = a.state;
                return b.window && (b.window = null), a.state = null, C
            }

            function o(a, b) {
                var c;
                return a && a.state ? (c = a.state, 0 === (2 & c.wrap) ? F : (c.head = b, b.done = !1, C)) : F
            }
            var p, q, r = a("../utils/common"),
                s = a("./adler32"),
                t = a("./crc32"),
                u = a("./inffast"),
                v = a("./inftrees"),
                w = 0,
                x = 1,
                y = 2,
                z = 4,
                A = 5,
                B = 6,
                C = 0,
                D = 1,
                E = 2,
                F = -2,
                G = -3,
                H = -4,
                I = -5,
                J = 8,
                K = 1,
                L = 2,
                M = 3,
                N = 4,
                O = 5,
                P = 6,
                Q = 7,
                R = 8,
                S = 9,
                T = 10,
                U = 11,
                V = 12,
                W = 13,
                X = 14,
                Y = 15,
                Z = 16,
                $ = 17,
                _ = 18,
                ab = 19,
                bb = 20,
                cb = 21,
                db = 22,
                eb = 23,
                fb = 24,
                gb = 25,
                hb = 26,
                ib = 27,
                jb = 28,
                kb = 29,
                lb = 30,
                mb = 31,
                nb = 32,
                ob = 852,
                pb = 592,
                qb = 15,
                rb = qb,
                sb = !0;
            c.inflateReset = g, c.inflateReset2 = h, c.inflateResetKeep = f, c.inflateInit = j, c.inflateInit2 = i, c.inflate = m, c.inflateEnd = n, c.inflateGetHeader = o, c.inflateInfo = "pako inflate (from Nodeca project)"
        }, {
            "../utils/common": 27,
            "./adler32": 29,
            "./crc32": 31,
            "./inffast": 34,
            "./inftrees": 36
        }],
        36: [function (a, b) {
            "use strict";
            var c = a("../utils/common"),
                d = 15,
                e = 852,
                f = 592,
                g = 0,
                h = 1,
                i = 2,
                j = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0],
                k = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78],
                l = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0],
                m = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
            b.exports = function (a, b, n, o, p, q, r, s) {
                var t, u, v, w, x, y, z, A, B, C = s.bits,
                    D = 0,
                    E = 0,
                    F = 0,
                    G = 0,
                    H = 0,
                    I = 0,
                    J = 0,
                    K = 0,
                    L = 0,
                    M = 0,
                    N = null,
                    O = 0,
                    P = new c.Buf16(d + 1),
                    Q = new c.Buf16(d + 1),
                    R = null,
                    S = 0;
                for (D = 0; d >= D; D++) P[D] = 0;
                for (E = 0; o > E; E++) P[b[n + E]]++;
                for (H = C, G = d; G >= 1 && 0 === P[G]; G--);
                if (H > G && (H = G), 0 === G) return p[q++] = 20971520, p[q++] = 20971520, s.bits = 1, 0;
                for (F = 1; G > F && 0 === P[F]; F++);
                for (F > H && (H = F), K = 1, D = 1; d >= D; D++)
                    if (K <<= 1, K -= P[D], 0 > K) return -1;
                if (K > 0 && (a === g || 1 !== G)) return -1;
                for (Q[1] = 0, D = 1; d > D; D++) Q[D + 1] = Q[D] + P[D];
                for (E = 0; o > E; E++) 0 !== b[n + E] && (r[Q[b[n + E]]++] = E);
                if (a === g ? (N = R = r, y = 19) : a === h ? (N = j, O -= 257, R = k, S -= 257, y = 256) : (N = l, R = m, y = -1), M = 0, E = 0, D = F, x = q, I = H, J = 0, v = -1, L = 1 << H, w = L - 1, a === h && L > e || a === i && L > f) return 1;
                for (var T = 0;;) {
                    T++, z = D - J, r[E] < y ? (A = 0, B = r[E]) : r[E] > y ? (A = R[S + r[E]], B = N[O + r[E]]) : (A = 96, B = 0), t = 1 << D - J, u = 1 << I, F = u;
                    do u -= t, p[x + (M >> J) + u] = z << 24 | A << 16 | B | 0; while (0 !== u);
                    for (t = 1 << D - 1; M & t;) t >>= 1;
                    if (0 !== t ? (M &= t - 1, M += t) : M = 0, E++, 0 === --P[D]) {
                        if (D === G) break;
                        D = b[n + r[E]]
                    }
                    if (D > H && (M & w) !== v) {
                        for (0 === J && (J = H), x += F, I = D - J, K = 1 << I; G > I + J && (K -= P[I + J], !(0 >= K));) I++, K <<= 1;
                        if (L += 1 << I, a === h && L > e || a === i && L > f) return 1;
                        v = M & w, p[v] = H << 24 | I << 16 | x - q | 0
                    }
                }
                return 0 !== M && (p[x + M] = D - J << 24 | 64 << 16 | 0), s.bits = H, 0
            }
        }, {
            "../utils/common": 27
        }],
        37: [function (a, b) {
            "use strict";
            b.exports = {
                2: "need dictionary",
                1: "stream end",
                0: "",
                "-1": "file error",
                "-2": "stream error",
                "-3": "data error",
                "-4": "insufficient memory",
                "-5": "buffer error",
                "-6": "incompatible version"
            }
        }, {}],
        38: [function (a, b, c) {
            "use strict";

            function d(a) {
                for (var b = a.length; --b >= 0;) a[b] = 0
            }

            function e(a) {
                return 256 > a ? gb[a] : gb[256 + (a >>> 7)]
            }

            function f(a, b) {
                a.pending_buf[a.pending++] = 255 & b, a.pending_buf[a.pending++] = b >>> 8 & 255
            }

            function g(a, b, c) {
                a.bi_valid > V - c ? (a.bi_buf |= b << a.bi_valid & 65535, f(a, a.bi_buf), a.bi_buf = b >> V - a.bi_valid, a.bi_valid += c - V) : (a.bi_buf |= b << a.bi_valid & 65535, a.bi_valid += c)
            }

            function h(a, b, c) {
                g(a, c[2 * b], c[2 * b + 1])
            }

            function i(a, b) {
                var c = 0;
                do c |= 1 & a, a >>>= 1, c <<= 1; while (--b > 0);
                return c >>> 1
            }

            function j(a) {
                16 === a.bi_valid ? (f(a, a.bi_buf), a.bi_buf = 0, a.bi_valid = 0) : a.bi_valid >= 8 && (a.pending_buf[a.pending++] = 255 & a.bi_buf, a.bi_buf >>= 8, a.bi_valid -= 8)
            }

            function k(a, b) {
                var c, d, e, f, g, h, i = b.dyn_tree,
                    j = b.max_code,
                    k = b.stat_desc.static_tree,
                    l = b.stat_desc.has_stree,
                    m = b.stat_desc.extra_bits,
                    n = b.stat_desc.extra_base,
                    o = b.stat_desc.max_length,
                    p = 0;
                for (f = 0; U >= f; f++) a.bl_count[f] = 0;
                for (i[2 * a.heap[a.heap_max] + 1] = 0, c = a.heap_max + 1; T > c; c++) d = a.heap[c], f = i[2 * i[2 * d + 1] + 1] + 1, f > o && (f = o, p++), i[2 * d + 1] = f, d > j || (a.bl_count[f]++, g = 0, d >= n && (g = m[d - n]), h = i[2 * d], a.opt_len += h * (f + g), l && (a.static_len += h * (k[2 * d + 1] + g)));
                if (0 !== p) {
                    do {
                        for (f = o - 1; 0 === a.bl_count[f];) f--;
                        a.bl_count[f]--, a.bl_count[f + 1] += 2, a.bl_count[o]--, p -= 2
                    } while (p > 0);
                    for (f = o; 0 !== f; f--)
                        for (d = a.bl_count[f]; 0 !== d;) e = a.heap[--c], e > j || (i[2 * e + 1] !== f && (a.opt_len += (f - i[2 * e + 1]) * i[2 * e], i[2 * e + 1] = f), d--)
                }
            }

            function l(a, b, c) {
                var d, e, f = new Array(U + 1),
                    g = 0;
                for (d = 1; U >= d; d++) f[d] = g = g + c[d - 1] << 1;
                for (e = 0; b >= e; e++) {
                    var h = a[2 * e + 1];
                    0 !== h && (a[2 * e] = i(f[h]++, h))
                }
            }

            function m() {
                var a, b, c, d, e, f = new Array(U + 1);
                for (c = 0, d = 0; O - 1 > d; d++)
                    for (ib[d] = c, a = 0; a < 1 << _[d]; a++) hb[c++] = d;
                for (hb[c - 1] = d, e = 0, d = 0; 16 > d; d++)
                    for (jb[d] = e, a = 0; a < 1 << ab[d]; a++) gb[e++] = d;
                for (e >>= 7; R > d; d++)
                    for (jb[d] = e << 7, a = 0; a < 1 << ab[d] - 7; a++) gb[256 + e++] = d;
                for (b = 0; U >= b; b++) f[b] = 0;
                for (a = 0; 143 >= a;) eb[2 * a + 1] = 8, a++, f[8]++;
                for (; 255 >= a;) eb[2 * a + 1] = 9, a++, f[9]++;
                for (; 279 >= a;) eb[2 * a + 1] = 7, a++, f[7]++;
                for (; 287 >= a;) eb[2 * a + 1] = 8, a++, f[8]++;
                for (l(eb, Q + 1, f), a = 0; R > a; a++) fb[2 * a + 1] = 5, fb[2 * a] = i(a, 5);
                kb = new nb(eb, _, P + 1, Q, U), lb = new nb(fb, ab, 0, R, U), mb = new nb(new Array(0), bb, 0, S, W)
            }

            function n(a) {
                var b;
                for (b = 0; Q > b; b++) a.dyn_ltree[2 * b] = 0;
                for (b = 0; R > b; b++) a.dyn_dtree[2 * b] = 0;
                for (b = 0; S > b; b++) a.bl_tree[2 * b] = 0;
                a.dyn_ltree[2 * X] = 1, a.opt_len = a.static_len = 0, a.last_lit = a.matches = 0
            }

            function o(a) {
                a.bi_valid > 8 ? f(a, a.bi_buf) : a.bi_valid > 0 && (a.pending_buf[a.pending++] = a.bi_buf), a.bi_buf = 0, a.bi_valid = 0
            }

            function p(a, b, c, d) {
                o(a), d && (f(a, c), f(a, ~c)), E.arraySet(a.pending_buf, a.window, b, c, a.pending), a.pending += c
            }

            function q(a, b, c, d) {
                var e = 2 * b,
                    f = 2 * c;
                return a[e] < a[f] || a[e] === a[f] && d[b] <= d[c]
            }

            function r(a, b, c) {
                for (var d = a.heap[c], e = c << 1; e <= a.heap_len && (e < a.heap_len && q(b, a.heap[e + 1], a.heap[e], a.depth) && e++, !q(b, d, a.heap[e], a.depth));) a.heap[c] = a.heap[e], c = e, e <<= 1;
                a.heap[c] = d
            }

            function s(a, b, c) {
                var d, f, i, j, k = 0;
                if (0 !== a.last_lit)
                    do d = a.pending_buf[a.d_buf + 2 * k] << 8 | a.pending_buf[a.d_buf + 2 * k + 1], f = a.pending_buf[a.l_buf + k], k++, 0 === d ? h(a, f, b) : (i = hb[f], h(a, i + P + 1, b), j = _[i], 0 !== j && (f -= ib[i], g(a, f, j)), d--, i = e(d), h(a, i, c), j = ab[i], 0 !== j && (d -= jb[i], g(a, d, j))); while (k < a.last_lit);
                h(a, X, b)
            }

            function t(a, b) {
                var c, d, e, f = b.dyn_tree,
                    g = b.stat_desc.static_tree,
                    h = b.stat_desc.has_stree,
                    i = b.stat_desc.elems,
                    j = -1;
                for (a.heap_len = 0, a.heap_max = T, c = 0; i > c; c++) 0 !== f[2 * c] ? (a.heap[++a.heap_len] = j = c, a.depth[c] = 0) : f[2 * c + 1] = 0;
                for (; a.heap_len < 2;) e = a.heap[++a.heap_len] = 2 > j ? ++j : 0, f[2 * e] = 1, a.depth[e] = 0, a.opt_len--, h && (a.static_len -= g[2 * e + 1]);
                for (b.max_code = j, c = a.heap_len >> 1; c >= 1; c--) r(a, f, c);
                e = i;
                do c = a.heap[1], a.heap[1] = a.heap[a.heap_len--], r(a, f, 1), d = a.heap[1], a.heap[--a.heap_max] = c, a.heap[--a.heap_max] = d, f[2 * e] = f[2 * c] + f[2 * d], a.depth[e] = (a.depth[c] >= a.depth[d] ? a.depth[c] : a.depth[d]) + 1, f[2 * c + 1] = f[2 * d + 1] = e, a.heap[1] = e++, r(a, f, 1); while (a.heap_len >= 2);
                a.heap[--a.heap_max] = a.heap[1], k(a, b), l(f, j, a.bl_count)
            }

            function u(a, b, c) {
                var d, e, f = -1,
                    g = b[1],
                    h = 0,
                    i = 7,
                    j = 4;
                for (0 === g && (i = 138, j = 3), b[2 * (c + 1) + 1] = 65535, d = 0; c >= d; d++) e = g, g = b[2 * (d + 1) + 1], ++h < i && e === g || (j > h ? a.bl_tree[2 * e] += h : 0 !== e ? (e !== f && a.bl_tree[2 * e]++, a.bl_tree[2 * Y]++) : 10 >= h ? a.bl_tree[2 * Z]++ : a.bl_tree[2 * $]++, h = 0, f = e, 0 === g ? (i = 138, j = 3) : e === g ? (i = 6, j = 3) : (i = 7, j = 4))
            }

            function v(a, b, c) {
                var d, e, f = -1,
                    i = b[1],
                    j = 0,
                    k = 7,
                    l = 4;
                for (0 === i && (k = 138, l = 3), d = 0; c >= d; d++)
                    if (e = i, i = b[2 * (d + 1) + 1], !(++j < k && e === i)) {
                        if (l > j) {
                            do h(a, e, a.bl_tree); while (0 !== --j)
                        } else 0 !== e ? (e !== f && (h(a, e, a.bl_tree), j--), h(a, Y, a.bl_tree), g(a, j - 3, 2)) : 10 >= j ? (h(a, Z, a.bl_tree), g(a, j - 3, 3)) : (h(a, $, a.bl_tree), g(a, j - 11, 7));
                        j = 0, f = e, 0 === i ? (k = 138, l = 3) : e === i ? (k = 6, l = 3) : (k = 7, l = 4)
                    }
            }

            function w(a) {
                var b;
                for (u(a, a.dyn_ltree, a.l_desc.max_code), u(a, a.dyn_dtree, a.d_desc.max_code), t(a, a.bl_desc), b = S - 1; b >= 3 && 0 === a.bl_tree[2 * cb[b] + 1]; b--);
                return a.opt_len += 3 * (b + 1) + 5 + 5 + 4, b
            }

            function x(a, b, c, d) {
                var e;
                for (g(a, b - 257, 5), g(a, c - 1, 5), g(a, d - 4, 4), e = 0; d > e; e++) g(a, a.bl_tree[2 * cb[e] + 1], 3);
                v(a, a.dyn_ltree, b - 1), v(a, a.dyn_dtree, c - 1)
            }

            function y(a) {
                var b, c = 4093624447;
                for (b = 0; 31 >= b; b++, c >>>= 1)
                    if (1 & c && 0 !== a.dyn_ltree[2 * b]) return G;
                if (0 !== a.dyn_ltree[18] || 0 !== a.dyn_ltree[20] || 0 !== a.dyn_ltree[26]) return H;
                for (b = 32; P > b; b++)
                    if (0 !== a.dyn_ltree[2 * b]) return H;
                return G
            }

            function z(a) {
                pb || (m(), pb = !0), a.l_desc = new ob(a.dyn_ltree, kb), a.d_desc = new ob(a.dyn_dtree, lb), a.bl_desc = new ob(a.bl_tree, mb), a.bi_buf = 0, a.bi_valid = 0, n(a)
            }

            function A(a, b, c, d) {
                g(a, (J << 1) + (d ? 1 : 0), 3), p(a, b, c, !0)
            }

            function B(a) {
                g(a, K << 1, 3), h(a, X, eb), j(a)
            }

            function C(a, b, c, d) {
                var e, f, h = 0;
                a.level > 0 ? (a.strm.data_type === I && (a.strm.data_type = y(a)), t(a, a.l_desc), t(a, a.d_desc), h = w(a), e = a.opt_len + 3 + 7 >>> 3, f = a.static_len + 3 + 7 >>> 3, e >= f && (e = f)) : e = f = c + 5, e >= c + 4 && -1 !== b ? A(a, b, c, d) : a.strategy === F || f === e ? (g(a, (K << 1) + (d ? 1 : 0), 3), s(a, eb, fb)) : (g(a, (L << 1) + (d ? 1 : 0), 3), x(a, a.l_desc.max_code + 1, a.d_desc.max_code + 1, h + 1), s(a, a.dyn_ltree, a.dyn_dtree)), n(a), d && o(a)
            }

            function D(a, b, c) {
                return a.pending_buf[a.d_buf + 2 * a.last_lit] = b >>> 8 & 255, a.pending_buf[a.d_buf + 2 * a.last_lit + 1] = 255 & b, a.pending_buf[a.l_buf + a.last_lit] = 255 & c, a.last_lit++, 0 === b ? a.dyn_ltree[2 * c]++ : (a.matches++, b--, a.dyn_ltree[2 * (hb[c] + P + 1)]++, a.dyn_dtree[2 * e(b)]++), a.last_lit === a.lit_bufsize - 1
            }
            var E = a("../utils/common"),
                F = 4,
                G = 0,
                H = 1,
                I = 2,
                J = 0,
                K = 1,
                L = 2,
                M = 3,
                N = 258,
                O = 29,
                P = 256,
                Q = P + 1 + O,
                R = 30,
                S = 19,
                T = 2 * Q + 1,
                U = 15,
                V = 16,
                W = 7,
                X = 256,
                Y = 16,
                Z = 17,
                $ = 18,
                _ = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
                ab = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
                bb = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
                cb = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
                db = 512,
                eb = new Array(2 * (Q + 2));
            d(eb);
            var fb = new Array(2 * R);
            d(fb);
            var gb = new Array(db);
            d(gb);
            var hb = new Array(N - M + 1);
            d(hb);
            var ib = new Array(O);
            d(ib);
            var jb = new Array(R);
            d(jb);
            var kb, lb, mb, nb = function (a, b, c, d, e) {
                    this.static_tree = a, this.extra_bits = b, this.extra_base = c, this.elems = d, this.max_length = e, this.has_stree = a && a.length
                },
                ob = function (a, b) {
                    this.dyn_tree = a, this.max_code = 0, this.stat_desc = b
                },
                pb = !1;
            c._tr_init = z, c._tr_stored_block = A, c._tr_flush_block = C, c._tr_tally = D, c._tr_align = B
        }, {
            "../utils/common": 27
        }],
        39: [function (a, b) {
            "use strict";

            function c() {
                this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0
            }
            b.exports = c
        }, {}]
    }, {}, [9])(9)
});

/*!
   Copyright 2008-2019 SpryMedia Ltd.

 This source file is free software, available under the following license:
   MIT license - http://datatables.net/license

 This source file is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.

 For details please refer to: http://www.datatables.net
 DataTables 1.10.20
 ©2008-2019 SpryMedia Ltd - datatables.net/license
*/
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.findInternal = function (f, z, y) {
    f instanceof String && (f = String(f));
    for (var p = f.length, H = 0; H < p; H++) {
        var L = f[H];
        if (z.call(y, L, H, f)) return {
            i: H,
            v: L
        }
    }
    return {
        i: -1,
        v: void 0
    }
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (f, z, y) {
    f != Array.prototype && f != Object.prototype && (f[z] = y.value)
};
$jscomp.getGlobal = function (f) {
    return "undefined" != typeof window && window === f ? f : "undefined" != typeof global && null != global ? global : f
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function (f, z, y, p) {
    if (z) {
        y = $jscomp.global;
        f = f.split(".");
        for (p = 0; p < f.length - 1; p++) {
            var H = f[p];
            H in y || (y[H] = {});
            y = y[H]
        }
        f = f[f.length - 1];
        p = y[f];
        z = z(p);
        z != p && null != z && $jscomp.defineProperty(y, f, {
            configurable: !0,
            writable: !0,
            value: z
        })
    }
};
$jscomp.polyfill("Array.prototype.find", function (f) {
    return f ? f : function (f, y) {
        return $jscomp.findInternal(this, f, y).v
    }
}, "es6", "es3");
(function (f) {
    "function" === typeof define && define.amd ? define(["jquery"], function (z) {
        return f(z, window, document)
    }) : "object" === typeof exports ? module.exports = function (z, y) {
        z || (z = window);
        y || (y = "undefined" !== typeof window ? require("jquery") : require("jquery")(z));
        return f(y, z, z.document)
    } : f(jQuery, window, document)
})(function (f, z, y, p) {
    function H(a) {
        var b, c, d = {};
        f.each(a, function (e, h) {
            (b = e.match(/^([^A-Z]+?)([A-Z])/)) && -1 !== "a aa ai ao as b fn i m o s ".indexOf(b[1] + " ") && (c = e.replace(b[0], b[2].toLowerCase()),
                d[c] = e, "o" === b[1] && H(a[e]))
        });
        a._hungarianMap = d
    }

    function L(a, b, c) {
        a._hungarianMap || H(a);
        var d;
        f.each(b, function (e, h) {
            d = a._hungarianMap[e];
            d === p || !c && b[d] !== p || ("o" === d.charAt(0) ? (b[d] || (b[d] = {}), f.extend(!0, b[d], b[e]), L(a[d], b[d], c)) : b[d] = b[e])
        })
    }

    function Ga(a) {
        var b = q.defaults.oLanguage,
            c = b.sDecimal;
        c && Ha(c);
        if (a) {
            var d = a.sZeroRecords;
            !a.sEmptyTable && d && "No data available in table" === b.sEmptyTable && M(a, a, "sZeroRecords", "sEmptyTable");
            !a.sLoadingRecords && d && "Loading..." === b.sLoadingRecords && M(a, a,
                "sZeroRecords", "sLoadingRecords");
            a.sInfoThousands && (a.sThousands = a.sInfoThousands);
            (a = a.sDecimal) && c !== a && Ha(a)
        }
    }

    function jb(a) {
        F(a, "ordering", "bSort");
        F(a, "orderMulti", "bSortMulti");
        F(a, "orderClasses", "bSortClasses");
        F(a, "orderCellsTop", "bSortCellsTop");
        F(a, "order", "aaSorting");
        F(a, "orderFixed", "aaSortingFixed");
        F(a, "paging", "bPaginate");
        F(a, "pagingType", "sPaginationType");
        F(a, "pageLength", "iDisplayLength");
        F(a, "searching", "bFilter");
        "boolean" === typeof a.sScrollX && (a.sScrollX = a.sScrollX ? "100%" :
            "");
        "boolean" === typeof a.scrollX && (a.scrollX = a.scrollX ? "100%" : "");
        if (a = a.aoSearchCols)
            for (var b = 0, c = a.length; b < c; b++) a[b] && L(q.models.oSearch, a[b])
    }

    function kb(a) {
        F(a, "orderable", "bSortable");
        F(a, "orderData", "aDataSort");
        F(a, "orderSequence", "asSorting");
        F(a, "orderDataType", "sortDataType");
        var b = a.aDataSort;
        "number" !== typeof b || f.isArray(b) || (a.aDataSort = [b])
    }

    function lb(a) {
        if (!q.__browser) {
            var b = {};
            q.__browser = b;
            var c = f("<div/>").css({
                    position: "fixed",
                    top: 0,
                    left: -1 * f(z).scrollLeft(),
                    height: 1,
                    width: 1,
                    overflow: "hidden"
                }).append(f("<div/>").css({
                    position: "absolute",
                    top: 1,
                    left: 1,
                    width: 100,
                    overflow: "scroll"
                }).append(f("<div/>").css({
                    width: "100%",
                    height: 10
                }))).appendTo("body"),
                d = c.children(),
                e = d.children();
            b.barWidth = d[0].offsetWidth - d[0].clientWidth;
            b.bScrollOversize = 100 === e[0].offsetWidth && 100 !== d[0].clientWidth;
            b.bScrollbarLeft = 1 !== Math.round(e.offset().left);
            b.bBounding = c[0].getBoundingClientRect().width ? !0 : !1;
            c.remove()
        }
        f.extend(a.oBrowser, q.__browser);
        a.oScroll.iBarWidth = q.__browser.barWidth
    }

    function mb(a, b, c, d, e, h) {
        var g = !1;
        if (c !== p) {
            var k = c;
            g = !0
        }
        for (; d !== e;) a.hasOwnProperty(d) && (k = g ? b(k, a[d], d, a) : a[d], g = !0, d += h);
        return k
    }

    function Ia(a, b) {
        var c = q.defaults.column,
            d = a.aoColumns.length;
        c = f.extend({}, q.models.oColumn, c, {
            nTh: b ? b : y.createElement("th"),
            sTitle: c.sTitle ? c.sTitle : b ? b.innerHTML : "",
            aDataSort: c.aDataSort ? c.aDataSort : [d],
            mData: c.mData ? c.mData : d,
            idx: d
        });
        a.aoColumns.push(c);
        c = a.aoPreSearchCols;
        c[d] = f.extend({}, q.models.oSearch, c[d]);
        ma(a, d, f(b).data())
    }

    function ma(a, b, c) {
        b = a.aoColumns[b];
        var d = a.oClasses,
            e = f(b.nTh);
        if (!b.sWidthOrig) {
            b.sWidthOrig = e.attr("width") || null;
            var h = (e.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/);
            h && (b.sWidthOrig = h[1])
        }
        c !== p && null !== c && (kb(c), L(q.defaults.column, c, !0), c.mDataProp === p || c.mData || (c.mData = c.mDataProp), c.sType && (b._sManualType = c.sType), c.className && !c.sClass && (c.sClass = c.className), c.sClass && e.addClass(c.sClass), f.extend(b, c), M(b, c, "sWidth", "sWidthOrig"), c.iDataSort !== p && (b.aDataSort = [c.iDataSort]), M(b, c, "aDataSort"));
        var g = b.mData,
            k = U(g),
            l = b.mRender ? U(b.mRender) : null;
        c = function (a) {
            return "string" === typeof a && -1 !== a.indexOf("@")
        };
        b._bAttrSrc = f.isPlainObject(g) && (c(g.sort) || c(g.type) || c(g.filter));
        b._setter = null;
        b.fnGetData = function (a, b, c) {
            var d = k(a, b, p, c);
            return l && b ? l(d, b, a, c) : d
        };
        b.fnSetData = function (a, b, c) {
            return Q(g)(a, b, c)
        };
        "number" !== typeof g && (a._rowReadObject = !0);
        a.oFeatures.bSort || (b.bSortable = !1, e.addClass(d.sSortableNone));
        a = -1 !== f.inArray("asc", b.asSorting);
        c = -1 !== f.inArray("desc", b.asSorting);
        b.bSortable && (a || c) ? a && !c ? (b.sSortingClass =
            d.sSortableAsc, b.sSortingClassJUI = d.sSortJUIAscAllowed) : !a && c ? (b.sSortingClass = d.sSortableDesc, b.sSortingClassJUI = d.sSortJUIDescAllowed) : (b.sSortingClass = d.sSortable, b.sSortingClassJUI = d.sSortJUI) : (b.sSortingClass = d.sSortableNone, b.sSortingClassJUI = "")
    }

    function aa(a) {
        if (!1 !== a.oFeatures.bAutoWidth) {
            var b = a.aoColumns;
            Ja(a);
            for (var c = 0, d = b.length; c < d; c++) b[c].nTh.style.width = b[c].sWidth
        }
        b = a.oScroll;
        "" === b.sY && "" === b.sX || na(a);
        A(a, null, "column-sizing", [a])
    }

    function ba(a, b) {
        a = oa(a, "bVisible");
        return "number" ===
            typeof a[b] ? a[b] : null
    }

    function ca(a, b) {
        a = oa(a, "bVisible");
        b = f.inArray(b, a);
        return -1 !== b ? b : null
    }

    function W(a) {
        var b = 0;
        f.each(a.aoColumns, function (a, d) {
            d.bVisible && "none" !== f(d.nTh).css("display") && b++
        });
        return b
    }

    function oa(a, b) {
        var c = [];
        f.map(a.aoColumns, function (a, e) {
            a[b] && c.push(e)
        });
        return c
    }

    function Ka(a) {
        var b = a.aoColumns,
            c = a.aoData,
            d = q.ext.type.detect,
            e, h, g;
        var k = 0;
        for (e = b.length; k < e; k++) {
            var f = b[k];
            var n = [];
            if (!f.sType && f._sManualType) f.sType = f._sManualType;
            else if (!f.sType) {
                var m = 0;
                for (h =
                    d.length; m < h; m++) {
                    var w = 0;
                    for (g = c.length; w < g; w++) {
                        n[w] === p && (n[w] = I(a, w, k, "type"));
                        var u = d[m](n[w], a);
                        if (!u && m !== d.length - 1) break;
                        if ("html" === u) break
                    }
                    if (u) {
                        f.sType = u;
                        break
                    }
                }
                f.sType || (f.sType = "string")
            }
        }
    }

    function nb(a, b, c, d) {
        var e, h, g, k = a.aoColumns;
        if (b)
            for (e = b.length - 1; 0 <= e; e--) {
                var l = b[e];
                var n = l.targets !== p ? l.targets : l.aTargets;
                f.isArray(n) || (n = [n]);
                var m = 0;
                for (h = n.length; m < h; m++)
                    if ("number" === typeof n[m] && 0 <= n[m]) {
                        for (; k.length <= n[m];) Ia(a);
                        d(n[m], l)
                    } else if ("number" === typeof n[m] && 0 > n[m]) d(k.length +
                    n[m], l);
                else if ("string" === typeof n[m]) {
                    var w = 0;
                    for (g = k.length; w < g; w++)("_all" == n[m] || f(k[w].nTh).hasClass(n[m])) && d(w, l)
                }
            }
        if (c)
            for (e = 0, a = c.length; e < a; e++) d(e, c[e])
    }

    function R(a, b, c, d) {
        var e = a.aoData.length,
            h = f.extend(!0, {}, q.models.oRow, {
                src: c ? "dom" : "data",
                idx: e
            });
        h._aData = b;
        a.aoData.push(h);
        for (var g = a.aoColumns, k = 0, l = g.length; k < l; k++) g[k].sType = null;
        a.aiDisplayMaster.push(e);
        b = a.rowIdFn(b);
        b !== p && (a.aIds[b] = h);
        !c && a.oFeatures.bDeferRender || La(a, e, c, d);
        return e
    }

    function pa(a, b) {
        var c;
        b instanceof
        f || (b = f(b));
        return b.map(function (b, e) {
            c = Ma(a, e);
            return R(a, c.data, e, c.cells)
        })
    }

    function I(a, b, c, d) {
        var e = a.iDraw,
            h = a.aoColumns[c],
            g = a.aoData[b]._aData,
            k = h.sDefaultContent,
            f = h.fnGetData(g, d, {
                settings: a,
                row: b,
                col: c
            });
        if (f === p) return a.iDrawError != e && null === k && (O(a, 0, "Requested unknown parameter " + ("function" == typeof h.mData ? "{function}" : "'" + h.mData + "'") + " for row " + b + ", column " + c, 4), a.iDrawError = e), k;
        if ((f === g || null === f) && null !== k && d !== p) f = k;
        else if ("function" === typeof f) return f.call(g);
        return null ===
            f && "display" == d ? "" : f
    }

    function ob(a, b, c, d) {
        a.aoColumns[c].fnSetData(a.aoData[b]._aData, d, {
            settings: a,
            row: b,
            col: c
        })
    }

    function Na(a) {
        return f.map(a.match(/(\\.|[^\.])+/g) || [""], function (a) {
            return a.replace(/\\\./g, ".")
        })
    }

    function U(a) {
        if (f.isPlainObject(a)) {
            var b = {};
            f.each(a, function (a, c) {
                c && (b[a] = U(c))
            });
            return function (a, c, h, g) {
                var d = b[c] || b._;
                return d !== p ? d(a, c, h, g) : a
            }
        }
        if (null === a) return function (a) {
            return a
        };
        if ("function" === typeof a) return function (b, c, h, g) {
            return a(b, c, h, g)
        };
        if ("string" !== typeof a ||
            -1 === a.indexOf(".") && -1 === a.indexOf("[") && -1 === a.indexOf("(")) return function (b, c) {
            return b[a]
        };
        var c = function (a, b, h) {
            if ("" !== h) {
                var d = Na(h);
                for (var e = 0, l = d.length; e < l; e++) {
                    h = d[e].match(da);
                    var n = d[e].match(X);
                    if (h) {
                        d[e] = d[e].replace(da, "");
                        "" !== d[e] && (a = a[d[e]]);
                        n = [];
                        d.splice(0, e + 1);
                        d = d.join(".");
                        if (f.isArray(a))
                            for (e = 0, l = a.length; e < l; e++) n.push(c(a[e], b, d));
                        a = h[0].substring(1, h[0].length - 1);
                        a = "" === a ? n : n.join(a);
                        break
                    } else if (n) {
                        d[e] = d[e].replace(X, "");
                        a = a[d[e]]();
                        continue
                    }
                    if (null === a || a[d[e]] ===
                        p) return p;
                    a = a[d[e]]
                }
            }
            return a
        };
        return function (b, e) {
            return c(b, e, a)
        }
    }

    function Q(a) {
        if (f.isPlainObject(a)) return Q(a._);
        if (null === a) return function () {};
        if ("function" === typeof a) return function (b, d, e) {
            a(b, "set", d, e)
        };
        if ("string" !== typeof a || -1 === a.indexOf(".") && -1 === a.indexOf("[") && -1 === a.indexOf("(")) return function (b, d) {
            b[a] = d
        };
        var b = function (a, d, e) {
            e = Na(e);
            var c = e[e.length - 1];
            for (var g, k, l = 0, n = e.length - 1; l < n; l++) {
                g = e[l].match(da);
                k = e[l].match(X);
                if (g) {
                    e[l] = e[l].replace(da, "");
                    a[e[l]] = [];
                    c = e.slice();
                    c.splice(0, l + 1);
                    g = c.join(".");
                    if (f.isArray(d))
                        for (k = 0, n = d.length; k < n; k++) c = {}, b(c, d[k], g), a[e[l]].push(c);
                    else a[e[l]] = d;
                    return
                }
                k && (e[l] = e[l].replace(X, ""), a = a[e[l]](d));
                if (null === a[e[l]] || a[e[l]] === p) a[e[l]] = {};
                a = a[e[l]]
            }
            if (c.match(X)) a[c.replace(X, "")](d);
            else a[c.replace(da, "")] = d
        };
        return function (c, d) {
            return b(c, d, a)
        }
    }

    function Oa(a) {
        return J(a.aoData, "_aData")
    }

    function qa(a) {
        a.aoData.length = 0;
        a.aiDisplayMaster.length = 0;
        a.aiDisplay.length = 0;
        a.aIds = {}
    }

    function ra(a, b, c) {
        for (var d = -1, e = 0, h = a.length; e <
            h; e++) a[e] == b ? d = e : a[e] > b && a[e]--; - 1 != d && c === p && a.splice(d, 1)
    }

    function ea(a, b, c, d) {
        var e = a.aoData[b],
            h, g = function (c, d) {
                for (; c.childNodes.length;) c.removeChild(c.firstChild);
                c.innerHTML = I(a, b, d, "display")
            };
        if ("dom" !== c && (c && "auto" !== c || "dom" !== e.src)) {
            var k = e.anCells;
            if (k)
                if (d !== p) g(k[d], d);
                else
                    for (c = 0, h = k.length; c < h; c++) g(k[c], c)
        } else e._aData = Ma(a, e, d, d === p ? p : e._aData).data;
        e._aSortData = null;
        e._aFilterData = null;
        g = a.aoColumns;
        if (d !== p) g[d].sType = null;
        else {
            c = 0;
            for (h = g.length; c < h; c++) g[c].sType = null;
            Pa(a, e)
        }
    }

    function Ma(a, b, c, d) {
        var e = [],
            h = b.firstChild,
            g, k = 0,
            l, n = a.aoColumns,
            m = a._rowReadObject;
        d = d !== p ? d : m ? {} : [];
        var w = function (a, b) {
                if ("string" === typeof a) {
                    var c = a.indexOf("@"); - 1 !== c && (c = a.substring(c + 1), Q(a)(d, b.getAttribute(c)))
                }
            },
            u = function (a) {
                if (c === p || c === k) g = n[k], l = f.trim(a.innerHTML), g && g._bAttrSrc ? (Q(g.mData._)(d, l), w(g.mData.sort, a), w(g.mData.type, a), w(g.mData.filter, a)) : m ? (g._setter || (g._setter = Q(g.mData)), g._setter(d, l)) : d[k] = l;
                k++
            };
        if (h)
            for (; h;) {
                var q = h.nodeName.toUpperCase();
                if ("TD" ==
                    q || "TH" == q) u(h), e.push(h);
                h = h.nextSibling
            } else
                for (e = b.anCells, h = 0, q = e.length; h < q; h++) u(e[h]);
        (b = b.firstChild ? b : b.nTr) && (b = b.getAttribute("id")) && Q(a.rowId)(d, b);
        return {
            data: d,
            cells: e
        }
    }

    function La(a, b, c, d) {
        var e = a.aoData[b],
            h = e._aData,
            g = [],
            k, l;
        if (null === e.nTr) {
            var n = c || y.createElement("tr");
            e.nTr = n;
            e.anCells = g;
            n._DT_RowIndex = b;
            Pa(a, e);
            var m = 0;
            for (k = a.aoColumns.length; m < k; m++) {
                var w = a.aoColumns[m];
                var p = (l = c ? !1 : !0) ? y.createElement(w.sCellType) : d[m];
                p._DT_CellIndex = {
                    row: b,
                    column: m
                };
                g.push(p);
                if (l ||
                    !(c && !w.mRender && w.mData === m || f.isPlainObject(w.mData) && w.mData._ === m + ".display")) p.innerHTML = I(a, b, m, "display");
                w.sClass && (p.className += " " + w.sClass);
                w.bVisible && !c ? n.appendChild(p) : !w.bVisible && c && p.parentNode.removeChild(p);
                w.fnCreatedCell && w.fnCreatedCell.call(a.oInstance, p, I(a, b, m), h, b, m)
            }
            A(a, "aoRowCreatedCallback", null, [n, h, b, g])
        }
        e.nTr.setAttribute("role", "row")
    }

    function Pa(a, b) {
        var c = b.nTr,
            d = b._aData;
        if (c) {
            if (a = a.rowIdFn(d)) c.id = a;
            d.DT_RowClass && (a = d.DT_RowClass.split(" "), b.__rowc = b.__rowc ?
                ta(b.__rowc.concat(a)) : a, f(c).removeClass(b.__rowc.join(" ")).addClass(d.DT_RowClass));
            d.DT_RowAttr && f(c).attr(d.DT_RowAttr);
            d.DT_RowData && f(c).data(d.DT_RowData)
        }
    }

    function pb(a) {
        var b, c, d = a.nTHead,
            e = a.nTFoot,
            h = 0 === f("th, td", d).length,
            g = a.oClasses,
            k = a.aoColumns;
        h && (c = f("<tr/>").appendTo(d));
        var l = 0;
        for (b = k.length; l < b; l++) {
            var n = k[l];
            var m = f(n.nTh).addClass(n.sClass);
            h && m.appendTo(c);
            a.oFeatures.bSort && (m.addClass(n.sSortingClass), !1 !== n.bSortable && (m.attr("tabindex", a.iTabIndex).attr("aria-controls",
                a.sTableId), Qa(a, n.nTh, l)));
            n.sTitle != m[0].innerHTML && m.html(n.sTitle);
            Ra(a, "header")(a, m, n, g)
        }
        h && fa(a.aoHeader, d);
        f(d).find(">tr").attr("role", "row");
        f(d).find(">tr>th, >tr>td").addClass(g.sHeaderTH);
        f(e).find(">tr>th, >tr>td").addClass(g.sFooterTH);
        if (null !== e)
            for (a = a.aoFooter[0], l = 0, b = a.length; l < b; l++) n = k[l], n.nTf = a[l].cell, n.sClass && f(n.nTf).addClass(n.sClass)
    }

    function ha(a, b, c) {
        var d, e, h = [],
            g = [],
            k = a.aoColumns.length;
        if (b) {
            c === p && (c = !1);
            var l = 0;
            for (d = b.length; l < d; l++) {
                h[l] = b[l].slice();
                h[l].nTr =
                    b[l].nTr;
                for (e = k - 1; 0 <= e; e--) a.aoColumns[e].bVisible || c || h[l].splice(e, 1);
                g.push([])
            }
            l = 0;
            for (d = h.length; l < d; l++) {
                if (a = h[l].nTr)
                    for (; e = a.firstChild;) a.removeChild(e);
                e = 0;
                for (b = h[l].length; e < b; e++) {
                    var n = k = 1;
                    if (g[l][e] === p) {
                        a.appendChild(h[l][e].cell);
                        for (g[l][e] = 1; h[l + k] !== p && h[l][e].cell == h[l + k][e].cell;) g[l + k][e] = 1, k++;
                        for (; h[l][e + n] !== p && h[l][e].cell == h[l][e + n].cell;) {
                            for (c = 0; c < k; c++) g[l + c][e + n] = 1;
                            n++
                        }
                        f(h[l][e].cell).attr("rowspan", k).attr("colspan", n)
                    }
                }
            }
        }
    }

    function S(a) {
        var b = A(a, "aoPreDrawCallback",
            "preDraw", [a]);
        if (-1 !== f.inArray(!1, b)) K(a, !1);
        else {
            b = [];
            var c = 0,
                d = a.asStripeClasses,
                e = d.length,
                h = a.oLanguage,
                g = a.iInitDisplayStart,
                k = "ssp" == D(a),
                l = a.aiDisplay;
            a.bDrawing = !0;
            g !== p && -1 !== g && (a._iDisplayStart = k ? g : g >= a.fnRecordsDisplay() ? 0 : g, a.iInitDisplayStart = -1);
            g = a._iDisplayStart;
            var n = a.fnDisplayEnd();
            if (a.bDeferLoading) a.bDeferLoading = !1, a.iDraw++, K(a, !1);
            else if (!k) a.iDraw++;
            else if (!a.bDestroying && !qb(a)) return;
            if (0 !== l.length)
                for (h = k ? a.aoData.length : n, k = k ? 0 : g; k < h; k++) {
                    var m = l[k],
                        w = a.aoData[m];
                    null === w.nTr && La(a, m);
                    var u = w.nTr;
                    if (0 !== e) {
                        var q = d[c % e];
                        w._sRowStripe != q && (f(u).removeClass(w._sRowStripe).addClass(q), w._sRowStripe = q)
                    }
                    A(a, "aoRowCallback", null, [u, w._aData, c, k, m]);
                    b.push(u);
                    c++
                } else c = h.sZeroRecords, 1 == a.iDraw && "ajax" == D(a) ? c = h.sLoadingRecords : h.sEmptyTable && 0 === a.fnRecordsTotal() && (c = h.sEmptyTable), b[0] = f("<tr/>", {
                    "class": e ? d[0] : ""
                }).append(f("<td />", {
                    valign: "top",
                    colSpan: W(a),
                    "class": a.oClasses.sRowEmpty
                }).html(c))[0];
            A(a, "aoHeaderCallback", "header", [f(a.nTHead).children("tr")[0],
                Oa(a), g, n, l
            ]);
            A(a, "aoFooterCallback", "footer", [f(a.nTFoot).children("tr")[0], Oa(a), g, n, l]);
            d = f(a.nTBody);
            d.children().detach();
            d.append(f(b));
            A(a, "aoDrawCallback", "draw", [a]);
            a.bSorted = !1;
            a.bFiltered = !1;
            a.bDrawing = !1
        }
    }

    function V(a, b) {
        var c = a.oFeatures,
            d = c.bFilter;
        c.bSort && rb(a);
        d ? ia(a, a.oPreviousSearch) : a.aiDisplay = a.aiDisplayMaster.slice();
        !0 !== b && (a._iDisplayStart = 0);
        a._drawHold = b;
        S(a);
        a._drawHold = !1
    }

    function sb(a) {
        var b = a.oClasses,
            c = f(a.nTable);
        c = f("<div/>").insertBefore(c);
        var d = a.oFeatures,
            e =
            f("<div/>", {
                id: a.sTableId + "_wrapper",
                "class": b.sWrapper + (a.nTFoot ? "" : " " + b.sNoFooter)
            });
        a.nHolding = c[0];
        a.nTableWrapper = e[0];
        a.nTableReinsertBefore = a.nTable.nextSibling;
        for (var h = a.sDom.split(""), g, k, l, n, m, p, u = 0; u < h.length; u++) {
            g = null;
            k = h[u];
            if ("<" == k) {
                l = f("<div/>")[0];
                n = h[u + 1];
                if ("'" == n || '"' == n) {
                    m = "";
                    for (p = 2; h[u + p] != n;) m += h[u + p], p++;
                    "H" == m ? m = b.sJUIHeader : "F" == m && (m = b.sJUIFooter); - 1 != m.indexOf(".") ? (n = m.split("."), l.id = n[0].substr(1, n[0].length - 1), l.className = n[1]) : "#" == m.charAt(0) ? l.id = m.substr(1,
                        m.length - 1) : l.className = m;
                    u += p
                }
                e.append(l);
                e = f(l)
            } else if (">" == k) e = e.parent();
            else if ("l" == k && d.bPaginate && d.bLengthChange) g = tb(a);
            else if ("f" == k && d.bFilter) g = ub(a);
            else if ("r" == k && d.bProcessing) g = vb(a);
            else if ("t" == k) g = wb(a);
            else if ("i" == k && d.bInfo) g = xb(a);
            else if ("p" == k && d.bPaginate) g = yb(a);
            else if (0 !== q.ext.feature.length)
                for (l = q.ext.feature, p = 0, n = l.length; p < n; p++)
                    if (k == l[p].cFeature) {
                        g = l[p].fnInit(a);
                        break
                    } g && (l = a.aanFeatures, l[k] || (l[k] = []), l[k].push(g), e.append(g))
        }
        c.replaceWith(e);
        a.nHolding =
            null
    }

    function fa(a, b) {
        b = f(b).children("tr");
        var c, d, e;
        a.splice(0, a.length);
        var h = 0;
        for (e = b.length; h < e; h++) a.push([]);
        h = 0;
        for (e = b.length; h < e; h++) {
            var g = b[h];
            for (c = g.firstChild; c;) {
                if ("TD" == c.nodeName.toUpperCase() || "TH" == c.nodeName.toUpperCase()) {
                    var k = 1 * c.getAttribute("colspan");
                    var l = 1 * c.getAttribute("rowspan");
                    k = k && 0 !== k && 1 !== k ? k : 1;
                    l = l && 0 !== l && 1 !== l ? l : 1;
                    var n = 0;
                    for (d = a[h]; d[n];) n++;
                    var m = n;
                    var p = 1 === k ? !0 : !1;
                    for (d = 0; d < k; d++)
                        for (n = 0; n < l; n++) a[h + n][m + d] = {
                            cell: c,
                            unique: p
                        }, a[h + n].nTr = g
                }
                c = c.nextSibling
            }
        }
    }

    function ua(a, b, c) {
        var d = [];
        c || (c = a.aoHeader, b && (c = [], fa(c, b)));
        b = 0;
        for (var e = c.length; b < e; b++)
            for (var h = 0, g = c[b].length; h < g; h++) !c[b][h].unique || d[h] && a.bSortCellsTop || (d[h] = c[b][h].cell);
        return d
    }

    function va(a, b, c) {
        A(a, "aoServerParams", "serverParams", [b]);
        if (b && f.isArray(b)) {
            var d = {},
                e = /(.*?)\[\]$/;
            f.each(b, function (a, b) {
                (a = b.name.match(e)) ? (a = a[0], d[a] || (d[a] = []), d[a].push(b.value)) : d[b.name] = b.value
            });
            b = d
        }
        var h = a.ajax,
            g = a.oInstance,
            k = function (b) {
                A(a, null, "xhr", [a, b, a.jqXHR]);
                c(b)
            };
        if (f.isPlainObject(h) &&
            h.data) {
            var l = h.data;
            var n = "function" === typeof l ? l(b, a) : l;
            b = "function" === typeof l && n ? n : f.extend(!0, b, n);
            delete h.data
        }
        n = {
            data: b,
            success: function (b) {
                var c = b.error || b.sError;
                c && O(a, 0, c);
                a.json = b;
                k(b)
            },
            dataType: "json",
            cache: !1,
            type: a.sServerMethod,
            error: function (b, c, d) {
                d = A(a, null, "xhr", [a, null, a.jqXHR]); - 1 === f.inArray(!0, d) && ("parsererror" == c ? O(a, 0, "Invalid JSON response", 1) : 4 === b.readyState && O(a, 0, "Ajax error", 7));
                K(a, !1)
            }
        };
        a.oAjaxData = b;
        A(a, null, "preXhr", [a, b]);
        a.fnServerData ? a.fnServerData.call(g,
            a.sAjaxSource, f.map(b, function (a, b) {
                return {
                    name: b,
                    value: a
                }
            }), k, a) : a.sAjaxSource || "string" === typeof h ? a.jqXHR = f.ajax(f.extend(n, {
            url: h || a.sAjaxSource
        })) : "function" === typeof h ? a.jqXHR = h.call(g, b, k, a) : (a.jqXHR = f.ajax(f.extend(n, h)), h.data = l)
    }

    function qb(a) {
        return a.bAjaxDataGet ? (a.iDraw++, K(a, !0), va(a, zb(a), function (b) {
            Ab(a, b)
        }), !1) : !0
    }

    function zb(a) {
        var b = a.aoColumns,
            c = b.length,
            d = a.oFeatures,
            e = a.oPreviousSearch,
            h = a.aoPreSearchCols,
            g = [],
            k = Y(a);
        var l = a._iDisplayStart;
        var n = !1 !== d.bPaginate ? a._iDisplayLength :
            -1;
        var m = function (a, b) {
            g.push({
                name: a,
                value: b
            })
        };
        m("sEcho", a.iDraw);
        m("iColumns", c);
        m("sColumns", J(b, "sName").join(","));
        m("iDisplayStart", l);
        m("iDisplayLength", n);
        var p = {
            draw: a.iDraw,
            columns: [],
            order: [],
            start: l,
            length: n,
            search: {
                value: e.sSearch,
                regex: e.bRegex
            }
        };
        for (l = 0; l < c; l++) {
            var u = b[l];
            var sa = h[l];
            n = "function" == typeof u.mData ? "function" : u.mData;
            p.columns.push({
                data: n,
                name: u.sName,
                searchable: u.bSearchable,
                orderable: u.bSortable,
                search: {
                    value: sa.sSearch,
                    regex: sa.bRegex
                }
            });
            m("mDataProp_" + l, n);
            d.bFilter &&
                (m("sSearch_" + l, sa.sSearch), m("bRegex_" + l, sa.bRegex), m("bSearchable_" + l, u.bSearchable));
            d.bSort && m("bSortable_" + l, u.bSortable)
        }
        d.bFilter && (m("sSearch", e.sSearch), m("bRegex", e.bRegex));
        d.bSort && (f.each(k, function (a, b) {
            p.order.push({
                column: b.col,
                dir: b.dir
            });
            m("iSortCol_" + a, b.col);
            m("sSortDir_" + a, b.dir)
        }), m("iSortingCols", k.length));
        b = q.ext.legacy.ajax;
        return null === b ? a.sAjaxSource ? g : p : b ? g : p
    }

    function Ab(a, b) {
        var c = function (a, c) {
                return b[a] !== p ? b[a] : b[c]
            },
            d = wa(a, b),
            e = c("sEcho", "draw"),
            h = c("iTotalRecords",
                "recordsTotal");
        c = c("iTotalDisplayRecords", "recordsFiltered");
        if (e) {
            if (1 * e < a.iDraw) return;
            a.iDraw = 1 * e
        }
        qa(a);
        a._iRecordsTotal = parseInt(h, 10);
        a._iRecordsDisplay = parseInt(c, 10);
        e = 0;
        for (h = d.length; e < h; e++) R(a, d[e]);
        a.aiDisplay = a.aiDisplayMaster.slice();
        a.bAjaxDataGet = !1;
        S(a);
        a._bInitComplete || xa(a, b);
        a.bAjaxDataGet = !0;
        K(a, !1)
    }

    function wa(a, b) {
        a = f.isPlainObject(a.ajax) && a.ajax.dataSrc !== p ? a.ajax.dataSrc : a.sAjaxDataProp;
        return "data" === a ? b.aaData || b[a] : "" !== a ? U(a)(b) : b
    }

    function ub(a) {
        var b = a.oClasses,
            c =
            a.sTableId,
            d = a.oLanguage,
            e = a.oPreviousSearch,
            h = a.aanFeatures,
            g = '<input type="search" class="' + b.sFilterInput + '"/>',
            k = d.sSearch;
        k = k.match(/_INPUT_/) ? k.replace("_INPUT_", g) : k + g;
        b = f("<div/>", {
            id: h.f ? null : c + "_filter",
            "class": b.sFilter
        }).append(f("<label/>").append(k));
        h = function () {
            var b = this.value ? this.value : "";
            b != e.sSearch && (ia(a, {
                sSearch: b,
                bRegex: e.bRegex,
                bSmart: e.bSmart,
                bCaseInsensitive: e.bCaseInsensitive
            }), a._iDisplayStart = 0, S(a))
        };
        g = null !== a.searchDelay ? a.searchDelay : "ssp" === D(a) ? 400 : 0;
        var l = f("input",
            b).val(e.sSearch).attr("placeholder", d.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT", g ? Sa(h, g) : h).on("keypress.DT", function (a) {
            if (13 == a.keyCode) return !1
        }).attr("aria-controls", c);
        f(a.nTable).on("search.dt.DT", function (b, c) {
            if (a === c) try {
                l[0] !== y.activeElement && l.val(e.sSearch)
            } catch (w) {}
        });
        return b[0]
    }

    function ia(a, b, c) {
        var d = a.oPreviousSearch,
            e = a.aoPreSearchCols,
            h = function (a) {
                d.sSearch = a.sSearch;
                d.bRegex = a.bRegex;
                d.bSmart = a.bSmart;
                d.bCaseInsensitive = a.bCaseInsensitive
            },
            g = function (a) {
                return a.bEscapeRegex !==
                    p ? !a.bEscapeRegex : a.bRegex
            };
        Ka(a);
        if ("ssp" != D(a)) {
            Bb(a, b.sSearch, c, g(b), b.bSmart, b.bCaseInsensitive);
            h(b);
            for (b = 0; b < e.length; b++) Cb(a, e[b].sSearch, b, g(e[b]), e[b].bSmart, e[b].bCaseInsensitive);
            Db(a)
        } else h(b);
        a.bFiltered = !0;
        A(a, null, "search", [a])
    }

    function Db(a) {
        for (var b = q.ext.search, c = a.aiDisplay, d, e, h = 0, g = b.length; h < g; h++) {
            for (var k = [], l = 0, n = c.length; l < n; l++) e = c[l], d = a.aoData[e], b[h](a, d._aFilterData, e, d._aData, l) && k.push(e);
            c.length = 0;
            f.merge(c, k)
        }
    }

    function Cb(a, b, c, d, e, h) {
        if ("" !== b) {
            var g = [],
                k =
                a.aiDisplay;
            d = Ta(b, d, e, h);
            for (e = 0; e < k.length; e++) b = a.aoData[k[e]]._aFilterData[c], d.test(b) && g.push(k[e]);
            a.aiDisplay = g
        }
    }

    function Bb(a, b, c, d, e, h) {
        e = Ta(b, d, e, h);
        var g = a.oPreviousSearch.sSearch,
            k = a.aiDisplayMaster;
        h = [];
        0 !== q.ext.search.length && (c = !0);
        var f = Eb(a);
        if (0 >= b.length) a.aiDisplay = k.slice();
        else {
            if (f || c || d || g.length > b.length || 0 !== b.indexOf(g) || a.bSorted) a.aiDisplay = k.slice();
            b = a.aiDisplay;
            for (c = 0; c < b.length; c++) e.test(a.aoData[b[c]]._sFilterRow) && h.push(b[c]);
            a.aiDisplay = h
        }
    }

    function Ta(a, b,
        c, d) {
        a = b ? a : Ua(a);
        c && (a = "^(?=.*?" + f.map(a.match(/"[^"]+"|[^ ]+/g) || [""], function (a) {
            if ('"' === a.charAt(0)) {
                var b = a.match(/^"(.*)"$/);
                a = b ? b[1] : a
            }
            return a.replace('"', "")
        }).join(")(?=.*?") + ").*$");
        return new RegExp(a, d ? "i" : "")
    }

    function Eb(a) {
        var b = a.aoColumns,
            c, d, e = q.ext.type.search;
        var h = !1;
        var g = 0;
        for (c = a.aoData.length; g < c; g++) {
            var k = a.aoData[g];
            if (!k._aFilterData) {
                var f = [];
                var n = 0;
                for (d = b.length; n < d; n++) {
                    h = b[n];
                    if (h.bSearchable) {
                        var m = I(a, g, n, "filter");
                        e[h.sType] && (m = e[h.sType](m));
                        null === m && (m = "");
                        "string" !== typeof m && m.toString && (m = m.toString())
                    } else m = "";
                    m.indexOf && -1 !== m.indexOf("&") && (ya.innerHTML = m, m = $b ? ya.textContent : ya.innerText);
                    m.replace && (m = m.replace(/[\r\n\u2028]/g, ""));
                    f.push(m)
                }
                k._aFilterData = f;
                k._sFilterRow = f.join("  ");
                h = !0
            }
        }
        return h
    }

    function Fb(a) {
        return {
            search: a.sSearch,
            smart: a.bSmart,
            regex: a.bRegex,
            caseInsensitive: a.bCaseInsensitive
        }
    }

    function Gb(a) {
        return {
            sSearch: a.search,
            bSmart: a.smart,
            bRegex: a.regex,
            bCaseInsensitive: a.caseInsensitive
        }
    }

    function xb(a) {
        var b = a.sTableId,
            c = a.aanFeatures.i,
            d = f("<div/>", {
                "class": a.oClasses.sInfo,
                id: c ? null : b + "_info"
            });
        c || (a.aoDrawCallback.push({
            fn: Hb,
            sName: "information"
        }), d.attr("role", "status").attr("aria-live", "polite"), f(a.nTable).attr("aria-describedby", b + "_info"));
        return d[0]
    }

    function Hb(a) {
        var b = a.aanFeatures.i;
        if (0 !== b.length) {
            var c = a.oLanguage,
                d = a._iDisplayStart + 1,
                e = a.fnDisplayEnd(),
                h = a.fnRecordsTotal(),
                g = a.fnRecordsDisplay(),
                k = g ? c.sInfo : c.sInfoEmpty;
            g !== h && (k += " " + c.sInfoFiltered);
            k += c.sInfoPostFix;
            k = Ib(a, k);
            c = c.fnInfoCallback;
            null !== c && (k = c.call(a.oInstance,
                a, d, e, h, g, k));
            f(b).html(k)
        }
    }

    function Ib(a, b) {
        var c = a.fnFormatNumber,
            d = a._iDisplayStart + 1,
            e = a._iDisplayLength,
            h = a.fnRecordsDisplay(),
            g = -1 === e;
        return b.replace(/_START_/g, c.call(a, d)).replace(/_END_/g, c.call(a, a.fnDisplayEnd())).replace(/_MAX_/g, c.call(a, a.fnRecordsTotal())).replace(/_TOTAL_/g, c.call(a, h)).replace(/_PAGE_/g, c.call(a, g ? 1 : Math.ceil(d / e))).replace(/_PAGES_/g, c.call(a, g ? 1 : Math.ceil(h / e)))
    }

    function ja(a) {
        var b = a.iInitDisplayStart,
            c = a.aoColumns;
        var d = a.oFeatures;
        var e = a.bDeferLoading;
        if (a.bInitialised) {
            sb(a);
            pb(a);
            ha(a, a.aoHeader);
            ha(a, a.aoFooter);
            K(a, !0);
            d.bAutoWidth && Ja(a);
            var h = 0;
            for (d = c.length; h < d; h++) {
                var g = c[h];
                g.sWidth && (g.nTh.style.width = B(g.sWidth))
            }
            A(a, null, "preInit", [a]);
            V(a);
            c = D(a);
            if ("ssp" != c || e) "ajax" == c ? va(a, [], function (c) {
                var d = wa(a, c);
                for (h = 0; h < d.length; h++) R(a, d[h]);
                a.iInitDisplayStart = b;
                V(a);
                K(a, !1);
                xa(a, c)
            }, a) : (K(a, !1), xa(a))
        } else setTimeout(function () {
            ja(a)
        }, 200)
    }

    function xa(a, b) {
        a._bInitComplete = !0;
        (b || a.oInit.aaData) && aa(a);
        A(a, null, "plugin-init", [a, b]);
        A(a, "aoInitComplete", "init",
            [a, b])
    }

    function Va(a, b) {
        b = parseInt(b, 10);
        a._iDisplayLength = b;
        Wa(a);
        A(a, null, "length", [a, b])
    }

    function tb(a) {
        var b = a.oClasses,
            c = a.sTableId,
            d = a.aLengthMenu,
            e = f.isArray(d[0]),
            h = e ? d[0] : d;
        d = e ? d[1] : d;
        e = f("<select/>", {
            name: c + "_length",
            "aria-controls": c,
            "class": b.sLengthSelect
        });
        for (var g = 0, k = h.length; g < k; g++) e[0][g] = new Option("number" === typeof d[g] ? a.fnFormatNumber(d[g]) : d[g], h[g]);
        var l = f("<div><label/></div>").addClass(b.sLength);
        a.aanFeatures.l || (l[0].id = c + "_length");
        l.children().append(a.oLanguage.sLengthMenu.replace("_MENU_",
            e[0].outerHTML));
        f("select", l).val(a._iDisplayLength).on("change.DT", function (b) {
            Va(a, f(this).val());
            S(a)
        });
        f(a.nTable).on("length.dt.DT", function (b, c, d) {
            a === c && f("select", l).val(d)
        });
        return l[0]
    }

    function yb(a) {
        var b = a.sPaginationType,
            c = q.ext.pager[b],
            d = "function" === typeof c,
            e = function (a) {
                S(a)
            };
        b = f("<div/>").addClass(a.oClasses.sPaging + b)[0];
        var h = a.aanFeatures;
        d || c.fnInit(a, b, e);
        h.p || (b.id = a.sTableId + "_paginate", a.aoDrawCallback.push({
            fn: function (a) {
                if (d) {
                    var b = a._iDisplayStart,
                        g = a._iDisplayLength,
                        f = a.fnRecordsDisplay(),
                        m = -1 === g;
                    b = m ? 0 : Math.ceil(b / g);
                    g = m ? 1 : Math.ceil(f / g);
                    f = c(b, g);
                    var p;
                    m = 0;
                    for (p = h.p.length; m < p; m++) Ra(a, "pageButton")(a, h.p[m], m, f, b, g)
                } else c.fnUpdate(a, e)
            },
            sName: "pagination"
        }));
        return b
    }

    function Xa(a, b, c) {
        var d = a._iDisplayStart,
            e = a._iDisplayLength,
            h = a.fnRecordsDisplay();
        0 === h || -1 === e ? d = 0 : "number" === typeof b ? (d = b * e, d > h && (d = 0)) : "first" == b ? d = 0 : "previous" == b ? (d = 0 <= e ? d - e : 0, 0 > d && (d = 0)) : "next" == b ? d + e < h && (d += e) : "last" == b ? d = Math.floor((h - 1) / e) * e : O(a, 0, "Unknown paging action: " + b, 5);
        b =
            a._iDisplayStart !== d;
        a._iDisplayStart = d;
        b && (A(a, null, "page", [a]), c && S(a));
        return b
    }

    function vb(a) {
        return f("<div/>", {
            id: a.aanFeatures.r ? null : a.sTableId + "_processing",
            "class": a.oClasses.sProcessing
        }).html(a.oLanguage.sProcessing).insertBefore(a.nTable)[0]
    }

    function K(a, b) {
        a.oFeatures.bProcessing && f(a.aanFeatures.r).css("display", b ? "block" : "none");
        A(a, null, "processing", [a, b])
    }

    function wb(a) {
        var b = f(a.nTable);
        b.attr("role", "grid");
        var c = a.oScroll;
        if ("" === c.sX && "" === c.sY) return a.nTable;
        var d = c.sX,
            e = c.sY,
            h = a.oClasses,
            g = b.children("caption"),
            k = g.length ? g[0]._captionSide : null,
            l = f(b[0].cloneNode(!1)),
            n = f(b[0].cloneNode(!1)),
            m = b.children("tfoot");
        m.length || (m = null);
        l = f("<div/>", {
            "class": h.sScrollWrapper
        }).append(f("<div/>", {
            "class": h.sScrollHead
        }).css({
            overflow: "hidden",
            position: "relative",
            border: 0,
            width: d ? d ? B(d) : null : "100%"
        }).append(f("<div/>", {
            "class": h.sScrollHeadInner
        }).css({
            "box-sizing": "content-box",
            width: c.sXInner || "100%"
        }).append(l.removeAttr("id").css("margin-left", 0).append("top" === k ? g : null).append(b.children("thead"))))).append(f("<div/>", {
            "class": h.sScrollBody
        }).css({
            position: "relative",
            overflow: "auto",
            width: d ? B(d) : null
        }).append(b));
        m && l.append(f("<div/>", {
            "class": h.sScrollFoot
        }).css({
            overflow: "hidden",
            border: 0,
            width: d ? d ? B(d) : null : "100%"
        }).append(f("<div/>", {
            "class": h.sScrollFootInner
        }).append(n.removeAttr("id").css("margin-left", 0).append("bottom" === k ? g : null).append(b.children("tfoot")))));
        b = l.children();
        var p = b[0];
        h = b[1];
        var u = m ? b[2] : null;
        if (d) f(h).on("scroll.DT", function (a) {
            a = this.scrollLeft;
            p.scrollLeft = a;
            m && (u.scrollLeft = a)
        });
        f(h).css(e && c.bCollapse ? "max-height" : "height", e);
        a.nScrollHead = p;
        a.nScrollBody = h;
        a.nScrollFoot = u;
        a.aoDrawCallback.push({
            fn: na,
            sName: "scrolling"
        });
        return l[0]
    }

    function na(a) {
        var b = a.oScroll,
            c = b.sX,
            d = b.sXInner,
            e = b.sY;
        b = b.iBarWidth;
        var h = f(a.nScrollHead),
            g = h[0].style,
            k = h.children("div"),
            l = k[0].style,
            n = k.children("table");
        k = a.nScrollBody;
        var m = f(k),
            w = k.style,
            u = f(a.nScrollFoot).children("div"),
            q = u.children("table"),
            t = f(a.nTHead),
            r = f(a.nTable),
            v = r[0],
            za = v.style,
            T = a.nTFoot ? f(a.nTFoot) : null,
            A = a.oBrowser,
            x = A.bScrollOversize,
            ac = J(a.aoColumns, "nTh"),
            Ya = [],
            y = [],
            z = [],
            C = [],
            G, H = function (a) {
                a = a.style;
                a.paddingTop = "0";
                a.paddingBottom = "0";
                a.borderTopWidth = "0";
                a.borderBottomWidth = "0";
                a.height = 0
            };
        var D = k.scrollHeight > k.clientHeight;
        if (a.scrollBarVis !== D && a.scrollBarVis !== p) a.scrollBarVis = D, aa(a);
        else {
            a.scrollBarVis = D;
            r.children("thead, tfoot").remove();
            if (T) {
                var E = T.clone().prependTo(r);
                var F = T.find("tr");
                E = E.find("tr")
            }
            var I = t.clone().prependTo(r);
            t = t.find("tr");
            D = I.find("tr");
            I.find("th, td").removeAttr("tabindex");
            c || (w.width = "100%", h[0].style.width = "100%");
            f.each(ua(a, I), function (b, c) {
                G = ba(a, b);
                c.style.width = a.aoColumns[G].sWidth
            });
            T && N(function (a) {
                a.style.width = ""
            }, E);
            h = r.outerWidth();
            "" === c ? (za.width = "100%", x && (r.find("tbody").height() > k.offsetHeight || "scroll" == m.css("overflow-y")) && (za.width = B(r.outerWidth() - b)), h = r.outerWidth()) : "" !== d && (za.width = B(d), h = r.outerWidth());
            N(H, D);
            N(function (a) {
                z.push(a.innerHTML);
                Ya.push(B(f(a).css("width")))
            }, D);
            N(function (a, b) {
                    -1 !== f.inArray(a, ac) && (a.style.width = Ya[b])
                },
                t);
            f(D).height(0);
            T && (N(H, E), N(function (a) {
                C.push(a.innerHTML);
                y.push(B(f(a).css("width")))
            }, E), N(function (a, b) {
                a.style.width = y[b]
            }, F), f(E).height(0));
            N(function (a, b) {
                a.innerHTML = '<div class="dataTables_sizing">' + z[b] + "</div>";
                a.childNodes[0].style.height = "0";
                a.childNodes[0].style.overflow = "hidden";
                a.style.width = Ya[b]
            }, D);
            T && N(function (a, b) {
                a.innerHTML = '<div class="dataTables_sizing">' + C[b] + "</div>";
                a.childNodes[0].style.height = "0";
                a.childNodes[0].style.overflow = "hidden";
                a.style.width = y[b]
            }, E);
            r.outerWidth() <
                h ? (F = k.scrollHeight > k.offsetHeight || "scroll" == m.css("overflow-y") ? h + b : h, x && (k.scrollHeight > k.offsetHeight || "scroll" == m.css("overflow-y")) && (za.width = B(F - b)), "" !== c && "" === d || O(a, 1, "Possible column misalignment", 6)) : F = "100%";
            w.width = B(F);
            g.width = B(F);
            T && (a.nScrollFoot.style.width = B(F));
            !e && x && (w.height = B(v.offsetHeight + b));
            c = r.outerWidth();
            n[0].style.width = B(c);
            l.width = B(c);
            d = r.height() > k.clientHeight || "scroll" == m.css("overflow-y");
            e = "padding" + (A.bScrollbarLeft ? "Left" : "Right");
            l[e] = d ? b + "px" : "0px";
            T &&
                (q[0].style.width = B(c), u[0].style.width = B(c), u[0].style[e] = d ? b + "px" : "0px");
            r.children("colgroup").insertBefore(r.children("thead"));
            m.trigger("scroll");
            !a.bSorted && !a.bFiltered || a._drawHold || (k.scrollTop = 0)
        }
    }

    function N(a, b, c) {
        for (var d = 0, e = 0, h = b.length, g, k; e < h;) {
            g = b[e].firstChild;
            for (k = c ? c[e].firstChild : null; g;) 1 === g.nodeType && (c ? a(g, k, d) : a(g, d), d++), g = g.nextSibling, k = c ? k.nextSibling : null;
            e++
        }
    }

    function Ja(a) {
        var b = a.nTable,
            c = a.aoColumns,
            d = a.oScroll,
            e = d.sY,
            h = d.sX,
            g = d.sXInner,
            k = c.length,
            l = oa(a, "bVisible"),
            n = f("th", a.nTHead),
            m = b.getAttribute("width"),
            p = b.parentNode,
            u = !1,
            q, t = a.oBrowser;
        d = t.bScrollOversize;
        (q = b.style.width) && -1 !== q.indexOf("%") && (m = q);
        for (q = 0; q < l.length; q++) {
            var r = c[l[q]];
            null !== r.sWidth && (r.sWidth = Jb(r.sWidthOrig, p), u = !0)
        }
        if (d || !u && !h && !e && k == W(a) && k == n.length)
            for (q = 0; q < k; q++) l = ba(a, q), null !== l && (c[l].sWidth = B(n.eq(q).width()));
        else {
            k = f(b).clone().css("visibility", "hidden").removeAttr("id");
            k.find("tbody tr").remove();
            var v = f("<tr/>").appendTo(k.find("tbody"));
            k.find("thead, tfoot").remove();
            k.append(f(a.nTHead).clone()).append(f(a.nTFoot).clone());
            k.find("tfoot th, tfoot td").css("width", "");
            n = ua(a, k.find("thead")[0]);
            for (q = 0; q < l.length; q++) r = c[l[q]], n[q].style.width = null !== r.sWidthOrig && "" !== r.sWidthOrig ? B(r.sWidthOrig) : "", r.sWidthOrig && h && f(n[q]).append(f("<div/>").css({
                width: r.sWidthOrig,
                margin: 0,
                padding: 0,
                border: 0,
                height: 1
            }));
            if (a.aoData.length)
                for (q = 0; q < l.length; q++) u = l[q], r = c[u], f(Kb(a, u)).clone(!1).append(r.sContentPadding).appendTo(v);
            f("[name]", k).removeAttr("name");
            r = f("<div/>").css(h ||
                e ? {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: 1,
                    right: 0,
                    overflow: "hidden"
                } : {}).append(k).appendTo(p);
            h && g ? k.width(g) : h ? (k.css("width", "auto"), k.removeAttr("width"), k.width() < p.clientWidth && m && k.width(p.clientWidth)) : e ? k.width(p.clientWidth) : m && k.width(m);
            for (q = e = 0; q < l.length; q++) p = f(n[q]), g = p.outerWidth() - p.width(), p = t.bBounding ? Math.ceil(n[q].getBoundingClientRect().width) : p.outerWidth(), e += p, c[l[q]].sWidth = B(p - g);
            b.style.width = B(e);
            r.remove()
        }
        m && (b.style.width = B(m));
        !m && !h || a._reszEvt || (b = function () {
            f(z).on("resize.DT-" +
                a.sInstance, Sa(function () {
                    aa(a)
                }))
        }, d ? setTimeout(b, 1E3) : b(), a._reszEvt = !0)
    }

    function Jb(a, b) {
        if (!a) return 0;
        a = f("<div/>").css("width", B(a)).appendTo(b || y.body);
        b = a[0].offsetWidth;
        a.remove();
        return b
    }

    function Kb(a, b) {
        var c = Lb(a, b);
        if (0 > c) return null;
        var d = a.aoData[c];
        return d.nTr ? d.anCells[b] : f("<td/>").html(I(a, c, b, "display"))[0]
    }

    function Lb(a, b) {
        for (var c, d = -1, e = -1, h = 0, g = a.aoData.length; h < g; h++) c = I(a, h, b, "display") + "", c = c.replace(bc, ""), c = c.replace(/&nbsp;/g, " "), c.length > d && (d = c.length, e = h);
        return e
    }

    function B(a) {
        return null === a ? "0px" : "number" == typeof a ? 0 > a ? "0px" : a + "px" : a.match(/\d$/) ? a + "px" : a
    }

    function Y(a) {
        var b = [],
            c = a.aoColumns;
        var d = a.aaSortingFixed;
        var e = f.isPlainObject(d);
        var h = [];
        var g = function (a) {
            a.length && !f.isArray(a[0]) ? h.push(a) : f.merge(h, a)
        };
        f.isArray(d) && g(d);
        e && d.pre && g(d.pre);
        g(a.aaSorting);
        e && d.post && g(d.post);
        for (a = 0; a < h.length; a++) {
            var k = h[a][0];
            g = c[k].aDataSort;
            d = 0;
            for (e = g.length; d < e; d++) {
                var l = g[d];
                var n = c[l].sType || "string";
                h[a]._idx === p && (h[a]._idx = f.inArray(h[a][1], c[l].asSorting));
                b.push({
                    src: k,
                    col: l,
                    dir: h[a][1],
                    index: h[a]._idx,
                    type: n,
                    formatter: q.ext.type.order[n + "-pre"]
                })
            }
        }
        return b
    }

    function rb(a) {
        var b, c = [],
            d = q.ext.type.order,
            e = a.aoData,
            h = 0,
            g = a.aiDisplayMaster;
        Ka(a);
        var k = Y(a);
        var f = 0;
        for (b = k.length; f < b; f++) {
            var n = k[f];
            n.formatter && h++;
            Mb(a, n.col)
        }
        if ("ssp" != D(a) && 0 !== k.length) {
            f = 0;
            for (b = g.length; f < b; f++) c[g[f]] = f;
            h === k.length ? g.sort(function (a, b) {
                var d, h = k.length,
                    g = e[a]._aSortData,
                    f = e[b]._aSortData;
                for (d = 0; d < h; d++) {
                    var l = k[d];
                    var m = g[l.col];
                    var n = f[l.col];
                    m = m < n ? -1 : m > n ? 1 : 0;
                    if (0 !== m) return "asc" === l.dir ? m : -m
                }
                m = c[a];
                n = c[b];
                return m < n ? -1 : m > n ? 1 : 0
            }) : g.sort(function (a, b) {
                var h, g = k.length,
                    f = e[a]._aSortData,
                    l = e[b]._aSortData;
                for (h = 0; h < g; h++) {
                    var m = k[h];
                    var n = f[m.col];
                    var p = l[m.col];
                    m = d[m.type + "-" + m.dir] || d["string-" + m.dir];
                    n = m(n, p);
                    if (0 !== n) return n
                }
                n = c[a];
                p = c[b];
                return n < p ? -1 : n > p ? 1 : 0
            })
        }
        a.bSorted = !0
    }

    function Nb(a) {
        var b = a.aoColumns,
            c = Y(a);
        a = a.oLanguage.oAria;
        for (var d = 0, e = b.length; d < e; d++) {
            var h = b[d];
            var g = h.asSorting;
            var k = h.sTitle.replace(/<.*?>/g, "");
            var f = h.nTh;
            f.removeAttribute("aria-sort");
            h.bSortable && (0 < c.length && c[0].col == d ? (f.setAttribute("aria-sort", "asc" == c[0].dir ? "ascending" : "descending"), h = g[c[0].index + 1] || g[0]) : h = g[0], k += "asc" === h ? a.sSortAscending : a.sSortDescending);
            f.setAttribute("aria-label", k)
        }
    }

    function Za(a, b, c, d) {
        var e = a.aaSorting,
            h = a.aoColumns[b].asSorting,
            g = function (a, b) {
                var c = a._idx;
                c === p && (c = f.inArray(a[1], h));
                return c + 1 < h.length ? c + 1 : b ? null : 0
            };
        "number" === typeof e[0] && (e = a.aaSorting = [e]);
        c && a.oFeatures.bSortMulti ? (c = f.inArray(b, J(e, "0")), -1 !== c ? (b = g(e[c], !0), null ===
            b && 1 === e.length && (b = 0), null === b ? e.splice(c, 1) : (e[c][1] = h[b], e[c]._idx = b)) : (e.push([b, h[0], 0]), e[e.length - 1]._idx = 0)) : e.length && e[0][0] == b ? (b = g(e[0]), e.length = 1, e[0][1] = h[b], e[0]._idx = b) : (e.length = 0, e.push([b, h[0]]), e[0]._idx = 0);
        V(a);
        "function" == typeof d && d(a)
    }

    function Qa(a, b, c, d) {
        var e = a.aoColumns[c];
        $a(b, {}, function (b) {
            !1 !== e.bSortable && (a.oFeatures.bProcessing ? (K(a, !0), setTimeout(function () {
                Za(a, c, b.shiftKey, d);
                "ssp" !== D(a) && K(a, !1)
            }, 0)) : Za(a, c, b.shiftKey, d))
        })
    }

    function Aa(a) {
        var b = a.aLastSort,
            c = a.oClasses.sSortColumn,
            d = Y(a),
            e = a.oFeatures,
            h;
        if (e.bSort && e.bSortClasses) {
            e = 0;
            for (h = b.length; e < h; e++) {
                var g = b[e].src;
                f(J(a.aoData, "anCells", g)).removeClass(c + (2 > e ? e + 1 : 3))
            }
            e = 0;
            for (h = d.length; e < h; e++) g = d[e].src, f(J(a.aoData, "anCells", g)).addClass(c + (2 > e ? e + 1 : 3))
        }
        a.aLastSort = d
    }

    function Mb(a, b) {
        var c = a.aoColumns[b],
            d = q.ext.order[c.sSortDataType],
            e;
        d && (e = d.call(a.oInstance, a, b, ca(a, b)));
        for (var h, g = q.ext.type.order[c.sType + "-pre"], k = 0, f = a.aoData.length; k < f; k++)
            if (c = a.aoData[k], c._aSortData || (c._aSortData = []), !c._aSortData[b] || d) h = d ? e[k] : I(a, k, b, "sort"), c._aSortData[b] = g ? g(h) : h
    }

    function Ba(a) {
        if (a.oFeatures.bStateSave && !a.bDestroying) {
            var b = {
                time: +new Date,
                start: a._iDisplayStart,
                length: a._iDisplayLength,
                order: f.extend(!0, [], a.aaSorting),
                search: Fb(a.oPreviousSearch),
                columns: f.map(a.aoColumns, function (b, d) {
                    return {
                        visible: b.bVisible,
                        search: Fb(a.aoPreSearchCols[d])
                    }
                })
            };
            A(a, "aoStateSaveParams", "stateSaveParams", [a, b]);
            a.oSavedState = b;
            a.fnStateSaveCallback.call(a.oInstance, a, b)
        }
    }

    function Ob(a, b, c) {
        var d,
            e, h = a.aoColumns;
        b = function (b) {
            if (b && b.time) {
                var g = A(a, "aoStateLoadParams", "stateLoadParams", [a, b]);
                if (-1 === f.inArray(!1, g) && (g = a.iStateDuration, !(0 < g && b.time < +new Date - 1E3 * g || b.columns && h.length !== b.columns.length))) {
                    a.oLoadedState = f.extend(!0, {}, b);
                    b.start !== p && (a._iDisplayStart = b.start, a.iInitDisplayStart = b.start);
                    b.length !== p && (a._iDisplayLength = b.length);
                    b.order !== p && (a.aaSorting = [], f.each(b.order, function (b, c) {
                        a.aaSorting.push(c[0] >= h.length ? [0, c[1]] : c)
                    }));
                    b.search !== p && f.extend(a.oPreviousSearch,
                        Gb(b.search));
                    if (b.columns)
                        for (d = 0, e = b.columns.length; d < e; d++) g = b.columns[d], g.visible !== p && (h[d].bVisible = g.visible), g.search !== p && f.extend(a.aoPreSearchCols[d], Gb(g.search));
                    A(a, "aoStateLoaded", "stateLoaded", [a, b])
                }
            }
            c()
        };
        if (a.oFeatures.bStateSave) {
            var g = a.fnStateLoadCallback.call(a.oInstance, a, b);
            g !== p && b(g)
        } else c()
    }

    function Ca(a) {
        var b = q.settings;
        a = f.inArray(a, J(b, "nTable"));
        return -1 !== a ? b[a] : null
    }

    function O(a, b, c, d) {
        c = "DataTables warning: " + (a ? "table id=" + a.sTableId + " - " : "") + c;
        d && (c += ". For more information about this error, please see http://datatables.net/tn/" +
            d);
        if (b) z.console && console.log && console.log(c);
        else if (b = q.ext, b = b.sErrMode || b.errMode, a && A(a, null, "error", [a, d, c]), "alert" == b) alert(c);
        else {
            if ("throw" == b) throw Error(c);
            "function" == typeof b && b(a, d, c)
        }
    }

    function M(a, b, c, d) {
        f.isArray(c) ? f.each(c, function (c, d) {
            f.isArray(d) ? M(a, b, d[0], d[1]) : M(a, b, d)
        }) : (d === p && (d = c), b[c] !== p && (a[d] = b[c]))
    }

    function ab(a, b, c) {
        var d;
        for (d in b)
            if (b.hasOwnProperty(d)) {
                var e = b[d];
                f.isPlainObject(e) ? (f.isPlainObject(a[d]) || (a[d] = {}), f.extend(!0, a[d], e)) : c && "data" !== d && "aaData" !==
                    d && f.isArray(e) ? a[d] = e.slice() : a[d] = e
            } return a
    }

    function $a(a, b, c) {
        f(a).on("click.DT", b, function (b) {
            f(a).blur();
            c(b)
        }).on("keypress.DT", b, function (a) {
            13 === a.which && (a.preventDefault(), c(a))
        }).on("selectstart.DT", function () {
            return !1
        })
    }

    function E(a, b, c, d) {
        c && a[b].push({
            fn: c,
            sName: d
        })
    }

    function A(a, b, c, d) {
        var e = [];
        b && (e = f.map(a[b].slice().reverse(), function (b, c) {
            return b.fn.apply(a.oInstance, d)
        }));
        null !== c && (b = f.Event(c + ".dt"), f(a.nTable).trigger(b, d), e.push(b.result));
        return e
    }

    function Wa(a) {
        var b = a._iDisplayStart,
            c = a.fnDisplayEnd(),
            d = a._iDisplayLength;
        b >= c && (b = c - d);
        b -= b % d;
        if (-1 === d || 0 > b) b = 0;
        a._iDisplayStart = b
    }

    function Ra(a, b) {
        a = a.renderer;
        var c = q.ext.renderer[b];
        return f.isPlainObject(a) && a[b] ? c[a[b]] || c._ : "string" === typeof a ? c[a] || c._ : c._
    }

    function D(a) {
        return a.oFeatures.bServerSide ? "ssp" : a.ajax || a.sAjaxSource ? "ajax" : "dom"
    }

    function ka(a, b) {
        var c = Pb.numbers_length,
            d = Math.floor(c / 2);
        b <= c ? a = Z(0, b) : a <= d ? (a = Z(0, c - 2), a.push("ellipsis"), a.push(b - 1)) : (a >= b - 1 - d ? a = Z(b - (c - 2), b) : (a = Z(a - d + 2, a + d - 1), a.push("ellipsis"),
            a.push(b - 1)), a.splice(0, 0, "ellipsis"), a.splice(0, 0, 0));
        a.DT_el = "span";
        return a
    }

    function Ha(a) {
        f.each({
            num: function (b) {
                return Da(b, a)
            },
            "num-fmt": function (b) {
                return Da(b, a, bb)
            },
            "html-num": function (b) {
                return Da(b, a, Ea)
            },
            "html-num-fmt": function (b) {
                return Da(b, a, Ea, bb)
            }
        }, function (b, c) {
            C.type.order[b + a + "-pre"] = c;
            b.match(/^html\-/) && (C.type.search[b + a] = C.type.search.html)
        })
    }

    function Qb(a) {
        return function () {
            var b = [Ca(this[q.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));
            return q.ext.internal[a].apply(this,
                b)
        }
    }
    var q = function (a) {
            this.$ = function (a, b) {
                return this.api(!0).$(a, b)
            };
            this._ = function (a, b) {
                return this.api(!0).rows(a, b).data()
            };
            this.api = function (a) {
                return a ? new v(Ca(this[C.iApiIndex])) : new v(this)
            };
            this.fnAddData = function (a, b) {
                var c = this.api(!0);
                a = f.isArray(a) && (f.isArray(a[0]) || f.isPlainObject(a[0])) ? c.rows.add(a) : c.row.add(a);
                (b === p || b) && c.draw();
                return a.flatten().toArray()
            };
            this.fnAdjustColumnSizing = function (a) {
                var b = this.api(!0).columns.adjust(),
                    c = b.settings()[0],
                    d = c.oScroll;
                a === p || a ? b.draw(!1) :
                    ("" !== d.sX || "" !== d.sY) && na(c)
            };
            this.fnClearTable = function (a) {
                var b = this.api(!0).clear();
                (a === p || a) && b.draw()
            };
            this.fnClose = function (a) {
                this.api(!0).row(a).child.hide()
            };
            this.fnDeleteRow = function (a, b, c) {
                var d = this.api(!0);
                a = d.rows(a);
                var e = a.settings()[0],
                    h = e.aoData[a[0][0]];
                a.remove();
                b && b.call(this, e, h);
                (c === p || c) && d.draw();
                return h
            };
            this.fnDestroy = function (a) {
                this.api(!0).destroy(a)
            };
            this.fnDraw = function (a) {
                this.api(!0).draw(a)
            };
            this.fnFilter = function (a, b, c, d, e, f) {
                e = this.api(!0);
                null === b || b === p ?
                    e.search(a, c, d, f) : e.column(b).search(a, c, d, f);
                e.draw()
            };
            this.fnGetData = function (a, b) {
                var c = this.api(!0);
                if (a !== p) {
                    var d = a.nodeName ? a.nodeName.toLowerCase() : "";
                    return b !== p || "td" == d || "th" == d ? c.cell(a, b).data() : c.row(a).data() || null
                }
                return c.data().toArray()
            };
            this.fnGetNodes = function (a) {
                var b = this.api(!0);
                return a !== p ? b.row(a).node() : b.rows().nodes().flatten().toArray()
            };
            this.fnGetPosition = function (a) {
                var b = this.api(!0),
                    c = a.nodeName.toUpperCase();
                return "TR" == c ? b.row(a).index() : "TD" == c || "TH" == c ? (a = b.cell(a).index(),
                    [a.row, a.columnVisible, a.column]) : null
            };
            this.fnIsOpen = function (a) {
                return this.api(!0).row(a).child.isShown()
            };
            this.fnOpen = function (a, b, c) {
                return this.api(!0).row(a).child(b, c).show().child()[0]
            };
            this.fnPageChange = function (a, b) {
                a = this.api(!0).page(a);
                (b === p || b) && a.draw(!1)
            };
            this.fnSetColumnVis = function (a, b, c) {
                a = this.api(!0).column(a).visible(b);
                (c === p || c) && a.columns.adjust().draw()
            };
            this.fnSettings = function () {
                return Ca(this[C.iApiIndex])
            };
            this.fnSort = function (a) {
                this.api(!0).order(a).draw()
            };
            this.fnSortListener =
                function (a, b, c) {
                    this.api(!0).order.listener(a, b, c)
                };
            this.fnUpdate = function (a, b, c, d, e) {
                var h = this.api(!0);
                c === p || null === c ? h.row(b).data(a) : h.cell(b, c).data(a);
                (e === p || e) && h.columns.adjust();
                (d === p || d) && h.draw();
                return 0
            };
            this.fnVersionCheck = C.fnVersionCheck;
            var b = this,
                c = a === p,
                d = this.length;
            c && (a = {});
            this.oApi = this.internal = C.internal;
            for (var e in q.ext.internal) e && (this[e] = Qb(e));
            this.each(function () {
                var e = {},
                    g = 1 < d ? ab(e, a, !0) : a,
                    k = 0,
                    l;
                e = this.getAttribute("id");
                var n = !1,
                    m = q.defaults,
                    w = f(this);
                if ("table" !=
                    this.nodeName.toLowerCase()) O(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2);
                else {
                    jb(m);
                    kb(m.column);
                    L(m, m, !0);
                    L(m.column, m.column, !0);
                    L(m, f.extend(g, w.data()), !0);
                    var u = q.settings;
                    k = 0;
                    for (l = u.length; k < l; k++) {
                        var t = u[k];
                        if (t.nTable == this || t.nTHead && t.nTHead.parentNode == this || t.nTFoot && t.nTFoot.parentNode == this) {
                            var v = g.bRetrieve !== p ? g.bRetrieve : m.bRetrieve;
                            if (c || v) return t.oInstance;
                            if (g.bDestroy !== p ? g.bDestroy : m.bDestroy) {
                                t.oInstance.fnDestroy();
                                break
                            } else {
                                O(t, 0, "Cannot reinitialise DataTable",
                                    3);
                                return
                            }
                        }
                        if (t.sTableId == this.id) {
                            u.splice(k, 1);
                            break
                        }
                    }
                    if (null === e || "" === e) this.id = e = "DataTables_Table_" + q.ext._unique++;
                    var r = f.extend(!0, {}, q.models.oSettings, {
                        sDestroyWidth: w[0].style.width,
                        sInstance: e,
                        sTableId: e
                    });
                    r.nTable = this;
                    r.oApi = b.internal;
                    r.oInit = g;
                    u.push(r);
                    r.oInstance = 1 === b.length ? b : w.dataTable();
                    jb(g);
                    Ga(g.oLanguage);
                    g.aLengthMenu && !g.iDisplayLength && (g.iDisplayLength = f.isArray(g.aLengthMenu[0]) ? g.aLengthMenu[0][0] : g.aLengthMenu[0]);
                    g = ab(f.extend(!0, {}, m), g);
                    M(r.oFeatures, g, "bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" "));
                    M(r, g, ["asStripeClasses", "ajax", "fnServerData", "fnFormatNumber", "sServerMethod", "aaSorting", "aaSortingFixed", "aLengthMenu", "sPaginationType", "sAjaxSource", "sAjaxDataProp", "iStateDuration", "sDom", "bSortCellsTop", "iTabIndex", "fnStateLoadCallback", "fnStateSaveCallback", "renderer", "searchDelay", "rowId", ["iCookieDuration", "iStateDuration"],
                        ["oSearch", "oPreviousSearch"],
                        ["aoSearchCols", "aoPreSearchCols"],
                        ["iDisplayLength", "_iDisplayLength"]
                    ]);
                    M(r.oScroll, g, [
                        ["sScrollX", "sX"],
                        ["sScrollXInner", "sXInner"],
                        ["sScrollY", "sY"],
                        ["bScrollCollapse", "bCollapse"]
                    ]);
                    M(r.oLanguage, g, "fnInfoCallback");
                    E(r, "aoDrawCallback", g.fnDrawCallback, "user");
                    E(r, "aoServerParams", g.fnServerParams, "user");
                    E(r, "aoStateSaveParams", g.fnStateSaveParams, "user");
                    E(r, "aoStateLoadParams", g.fnStateLoadParams, "user");
                    E(r, "aoStateLoaded", g.fnStateLoaded, "user");
                    E(r, "aoRowCallback", g.fnRowCallback, "user");
                    E(r, "aoRowCreatedCallback", g.fnCreatedRow, "user");
                    E(r, "aoHeaderCallback", g.fnHeaderCallback, "user");
                    E(r, "aoFooterCallback", g.fnFooterCallback,
                        "user");
                    E(r, "aoInitComplete", g.fnInitComplete, "user");
                    E(r, "aoPreDrawCallback", g.fnPreDrawCallback, "user");
                    r.rowIdFn = U(g.rowId);
                    lb(r);
                    var x = r.oClasses;
                    f.extend(x, q.ext.classes, g.oClasses);
                    w.addClass(x.sTable);
                    r.iInitDisplayStart === p && (r.iInitDisplayStart = g.iDisplayStart, r._iDisplayStart = g.iDisplayStart);
                    null !== g.iDeferLoading && (r.bDeferLoading = !0, e = f.isArray(g.iDeferLoading), r._iRecordsDisplay = e ? g.iDeferLoading[0] : g.iDeferLoading, r._iRecordsTotal = e ? g.iDeferLoading[1] : g.iDeferLoading);
                    var y = r.oLanguage;
                    f.extend(!0, y, g.oLanguage);
                    y.sUrl && (f.ajax({
                        dataType: "json",
                        url: y.sUrl,
                        success: function (a) {
                            Ga(a);
                            L(m.oLanguage, a);
                            f.extend(!0, y, a);
                            ja(r)
                        },
                        error: function () {
                            ja(r)
                        }
                    }), n = !0);
                    null === g.asStripeClasses && (r.asStripeClasses = [x.sStripeOdd, x.sStripeEven]);
                    e = r.asStripeClasses;
                    var z = w.children("tbody").find("tr").eq(0); - 1 !== f.inArray(!0, f.map(e, function (a, b) {
                        return z.hasClass(a)
                    })) && (f("tbody tr", this).removeClass(e.join(" ")), r.asDestroyStripes = e.slice());
                    e = [];
                    u = this.getElementsByTagName("thead");
                    0 !== u.length &&
                        (fa(r.aoHeader, u[0]), e = ua(r));
                    if (null === g.aoColumns)
                        for (u = [], k = 0, l = e.length; k < l; k++) u.push(null);
                    else u = g.aoColumns;
                    k = 0;
                    for (l = u.length; k < l; k++) Ia(r, e ? e[k] : null);
                    nb(r, g.aoColumnDefs, u, function (a, b) {
                        ma(r, a, b)
                    });
                    if (z.length) {
                        var B = function (a, b) {
                            return null !== a.getAttribute("data-" + b) ? b : null
                        };
                        f(z[0]).children("th, td").each(function (a, b) {
                            var c = r.aoColumns[a];
                            if (c.mData === a) {
                                var d = B(b, "sort") || B(b, "order");
                                b = B(b, "filter") || B(b, "search");
                                if (null !== d || null !== b) c.mData = {
                                    _: a + ".display",
                                    sort: null !== d ? a + ".@data-" +
                                        d : p,
                                    type: null !== d ? a + ".@data-" + d : p,
                                    filter: null !== b ? a + ".@data-" + b : p
                                }, ma(r, a)
                            }
                        })
                    }
                    var C = r.oFeatures;
                    e = function () {
                        if (g.aaSorting === p) {
                            var a = r.aaSorting;
                            k = 0;
                            for (l = a.length; k < l; k++) a[k][1] = r.aoColumns[k].asSorting[0]
                        }
                        Aa(r);
                        C.bSort && E(r, "aoDrawCallback", function () {
                            if (r.bSorted) {
                                var a = Y(r),
                                    b = {};
                                f.each(a, function (a, c) {
                                    b[c.src] = c.dir
                                });
                                A(r, null, "order", [r, a, b]);
                                Nb(r)
                            }
                        });
                        E(r, "aoDrawCallback", function () {
                            (r.bSorted || "ssp" === D(r) || C.bDeferRender) && Aa(r)
                        }, "sc");
                        a = w.children("caption").each(function () {
                            this._captionSide =
                                f(this).css("caption-side")
                        });
                        var b = w.children("thead");
                        0 === b.length && (b = f("<thead/>").appendTo(w));
                        r.nTHead = b[0];
                        b = w.children("tbody");
                        0 === b.length && (b = f("<tbody/>").appendTo(w));
                        r.nTBody = b[0];
                        b = w.children("tfoot");
                        0 === b.length && 0 < a.length && ("" !== r.oScroll.sX || "" !== r.oScroll.sY) && (b = f("<tfoot/>").appendTo(w));
                        0 === b.length || 0 === b.children().length ? w.addClass(x.sNoFooter) : 0 < b.length && (r.nTFoot = b[0], fa(r.aoFooter, r.nTFoot));
                        if (g.aaData)
                            for (k = 0; k < g.aaData.length; k++) R(r, g.aaData[k]);
                        else(r.bDeferLoading ||
                            "dom" == D(r)) && pa(r, f(r.nTBody).children("tr"));
                        r.aiDisplay = r.aiDisplayMaster.slice();
                        r.bInitialised = !0;
                        !1 === n && ja(r)
                    };
                    g.bStateSave ? (C.bStateSave = !0, E(r, "aoDrawCallback", Ba, "state_save"), Ob(r, g, e)) : e()
                }
            });
            b = null;
            return this
        },
        C, t, x, cb = {},
        Rb = /[\r\n\u2028]/g,
        Ea = /<.*?>/g,
        cc = /^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,
        dc = /(\/|\.|\*|\+|\?|\||\(|\)|\[|\]|\{|\}|\\|\$|\^|\-)/g,
        bb = /[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi,
        P = function (a) {
            return a && !0 !== a && "-" !== a ? !1 :
                !0
        },
        Sb = function (a) {
            var b = parseInt(a, 10);
            return !isNaN(b) && isFinite(a) ? b : null
        },
        Tb = function (a, b) {
            cb[b] || (cb[b] = new RegExp(Ua(b), "g"));
            return "string" === typeof a && "." !== b ? a.replace(/\./g, "").replace(cb[b], ".") : a
        },
        db = function (a, b, c) {
            var d = "string" === typeof a;
            if (P(a)) return !0;
            b && d && (a = Tb(a, b));
            c && d && (a = a.replace(bb, ""));
            return !isNaN(parseFloat(a)) && isFinite(a)
        },
        Ub = function (a, b, c) {
            return P(a) ? !0 : P(a) || "string" === typeof a ? db(a.replace(Ea, ""), b, c) ? !0 : null : null
        },
        J = function (a, b, c) {
            var d = [],
                e = 0,
                h = a.length;
            if (c !==
                p)
                for (; e < h; e++) a[e] && a[e][b] && d.push(a[e][b][c]);
            else
                for (; e < h; e++) a[e] && d.push(a[e][b]);
            return d
        },
        la = function (a, b, c, d) {
            var e = [],
                h = 0,
                g = b.length;
            if (d !== p)
                for (; h < g; h++) a[b[h]][c] && e.push(a[b[h]][c][d]);
            else
                for (; h < g; h++) e.push(a[b[h]][c]);
            return e
        },
        Z = function (a, b) {
            var c = [];
            if (b === p) {
                b = 0;
                var d = a
            } else d = b, b = a;
            for (a = b; a < d; a++) c.push(a);
            return c
        },
        Vb = function (a) {
            for (var b = [], c = 0, d = a.length; c < d; c++) a[c] && b.push(a[c]);
            return b
        },
        ta = function (a) {
            a: {
                if (!(2 > a.length)) {
                    var b = a.slice().sort();
                    for (var c = b[0], d = 1,
                            e = b.length; d < e; d++) {
                        if (b[d] === c) {
                            b = !1;
                            break a
                        }
                        c = b[d]
                    }
                }
                b = !0
            }
            if (b) return a.slice();b = [];e = a.length;
            var h, g = 0;d = 0;a: for (; d < e; d++) {
                c = a[d];
                for (h = 0; h < g; h++)
                    if (b[h] === c) continue a;
                b.push(c);
                g++
            }
            return b
        };
    q.util = {
        throttle: function (a, b) {
            var c = b !== p ? b : 200,
                d, e;
            return function () {
                var b = this,
                    g = +new Date,
                    f = arguments;
                d && g < d + c ? (clearTimeout(e), e = setTimeout(function () {
                    d = p;
                    a.apply(b, f)
                }, c)) : (d = g, a.apply(b, f))
            }
        },
        escapeRegex: function (a) {
            return a.replace(dc, "\\$1")
        }
    };
    var F = function (a, b, c) {
            a[b] !== p && (a[c] = a[b])
        },
        da = /\[.*?\]$/,
        X = /\(\)$/,
        Ua = q.util.escapeRegex,
        ya = f("<div>")[0],
        $b = ya.textContent !== p,
        bc = /<.*?>/g,
        Sa = q.util.throttle,
        Wb = [],
        G = Array.prototype,
        ec = function (a) {
            var b, c = q.settings,
                d = f.map(c, function (a, b) {
                    return a.nTable
                });
            if (a) {
                if (a.nTable && a.oApi) return [a];
                if (a.nodeName && "table" === a.nodeName.toLowerCase()) {
                    var e = f.inArray(a, d);
                    return -1 !== e ? [c[e]] : null
                }
                if (a && "function" === typeof a.settings) return a.settings().toArray();
                "string" === typeof a ? b = f(a) : a instanceof f && (b = a)
            } else return [];
            if (b) return b.map(function (a) {
                e = f.inArray(this,
                    d);
                return -1 !== e ? c[e] : null
            }).toArray()
        };
    var v = function (a, b) {
        if (!(this instanceof v)) return new v(a, b);
        var c = [],
            d = function (a) {
                (a = ec(a)) && c.push.apply(c, a)
            };
        if (f.isArray(a))
            for (var e = 0, h = a.length; e < h; e++) d(a[e]);
        else d(a);
        this.context = ta(c);
        b && f.merge(this, b);
        this.selector = {
            rows: null,
            cols: null,
            opts: null
        };
        v.extend(this, this, Wb)
    };
    q.Api = v;
    f.extend(v.prototype, {
        any: function () {
            return 0 !== this.count()
        },
        concat: G.concat,
        context: [],
        count: function () {
            return this.flatten().length
        },
        each: function (a) {
            for (var b = 0, c =
                    this.length; b < c; b++) a.call(this, this[b], b, this);
            return this
        },
        eq: function (a) {
            var b = this.context;
            return b.length > a ? new v(b[a], this[a]) : null
        },
        filter: function (a) {
            var b = [];
            if (G.filter) b = G.filter.call(this, a, this);
            else
                for (var c = 0, d = this.length; c < d; c++) a.call(this, this[c], c, this) && b.push(this[c]);
            return new v(this.context, b)
        },
        flatten: function () {
            var a = [];
            return new v(this.context, a.concat.apply(a, this.toArray()))
        },
        join: G.join,
        indexOf: G.indexOf || function (a, b) {
            b = b || 0;
            for (var c = this.length; b < c; b++)
                if (this[b] ===
                    a) return b;
            return -1
        },
        iterator: function (a, b, c, d) {
            var e = [],
                h, g, f = this.context,
                l, n = this.selector;
            "string" === typeof a && (d = c, c = b, b = a, a = !1);
            var m = 0;
            for (h = f.length; m < h; m++) {
                var q = new v(f[m]);
                if ("table" === b) {
                    var u = c.call(q, f[m], m);
                    u !== p && e.push(u)
                } else if ("columns" === b || "rows" === b) u = c.call(q, f[m], this[m], m), u !== p && e.push(u);
                else if ("column" === b || "column-rows" === b || "row" === b || "cell" === b) {
                    var t = this[m];
                    "column-rows" === b && (l = Fa(f[m], n.opts));
                    var x = 0;
                    for (g = t.length; x < g; x++) u = t[x], u = "cell" === b ? c.call(q, f[m], u.row,
                        u.column, m, x) : c.call(q, f[m], u, m, x, l), u !== p && e.push(u)
                }
            }
            return e.length || d ? (a = new v(f, a ? e.concat.apply([], e) : e), b = a.selector, b.rows = n.rows, b.cols = n.cols, b.opts = n.opts, a) : this
        },
        lastIndexOf: G.lastIndexOf || function (a, b) {
            return this.indexOf.apply(this.toArray.reverse(), arguments)
        },
        length: 0,
        map: function (a) {
            var b = [];
            if (G.map) b = G.map.call(this, a, this);
            else
                for (var c = 0, d = this.length; c < d; c++) b.push(a.call(this, this[c], c));
            return new v(this.context, b)
        },
        pluck: function (a) {
            return this.map(function (b) {
                return b[a]
            })
        },
        pop: G.pop,
        push: G.push,
        reduce: G.reduce || function (a, b) {
            return mb(this, a, b, 0, this.length, 1)
        },
        reduceRight: G.reduceRight || function (a, b) {
            return mb(this, a, b, this.length - 1, -1, -1)
        },
        reverse: G.reverse,
        selector: null,
        shift: G.shift,
        slice: function () {
            return new v(this.context, this)
        },
        sort: G.sort,
        splice: G.splice,
        toArray: function () {
            return G.slice.call(this)
        },
        to$: function () {
            return f(this)
        },
        toJQuery: function () {
            return f(this)
        },
        unique: function () {
            return new v(this.context, ta(this))
        },
        unshift: G.unshift
    });
    v.extend = function (a,
        b, c) {
        if (c.length && b && (b instanceof v || b.__dt_wrapper)) {
            var d, e = function (a, b, c) {
                return function () {
                    var d = b.apply(a, arguments);
                    v.extend(d, d, c.methodExt);
                    return d
                }
            };
            var h = 0;
            for (d = c.length; h < d; h++) {
                var g = c[h];
                b[g.name] = "function" === g.type ? e(a, g.val, g) : "object" === g.type ? {} : g.val;
                b[g.name].__dt_wrapper = !0;
                v.extend(a, b[g.name], g.propExt)
            }
        }
    };
    v.register = t = function (a, b) {
        if (f.isArray(a))
            for (var c = 0, d = a.length; c < d; c++) v.register(a[c], b);
        else {
            d = a.split(".");
            var e = Wb,
                h;
            a = 0;
            for (c = d.length; a < c; a++) {
                var g = (h = -1 !==
                    d[a].indexOf("()")) ? d[a].replace("()", "") : d[a];
                a: {
                    var k = 0;
                    for (var l = e.length; k < l; k++)
                        if (e[k].name === g) {
                            k = e[k];
                            break a
                        } k = null
                }
                k || (k = {
                    name: g,
                    val: {},
                    methodExt: [],
                    propExt: [],
                    type: "object"
                }, e.push(k));
                a === c - 1 ? (k.val = b, k.type = "function" === typeof b ? "function" : f.isPlainObject(b) ? "object" : "other") : e = h ? k.methodExt : k.propExt
            }
        }
    };
    v.registerPlural = x = function (a, b, c) {
        v.register(a, c);
        v.register(b, function () {
            var a = c.apply(this, arguments);
            return a === this ? this : a instanceof v ? a.length ? f.isArray(a[0]) ? new v(a.context,
                a[0]) : a[0] : p : a
        })
    };
    var fc = function (a, b) {
        if ("number" === typeof a) return [b[a]];
        var c = f.map(b, function (a, b) {
            return a.nTable
        });
        return f(c).filter(a).map(function (a) {
            a = f.inArray(this, c);
            return b[a]
        }).toArray()
    };
    t("tables()", function (a) {
        return a ? new v(fc(a, this.context)) : this
    });
    t("table()", function (a) {
        a = this.tables(a);
        var b = a.context;
        return b.length ? new v(b[0]) : a
    });
    x("tables().nodes()", "table().node()", function () {
        return this.iterator("table", function (a) {
            return a.nTable
        }, 1)
    });
    x("tables().body()", "table().body()",
        function () {
            return this.iterator("table", function (a) {
                return a.nTBody
            }, 1)
        });
    x("tables().header()", "table().header()", function () {
        return this.iterator("table", function (a) {
            return a.nTHead
        }, 1)
    });
    x("tables().footer()", "table().footer()", function () {
        return this.iterator("table", function (a) {
            return a.nTFoot
        }, 1)
    });
    x("tables().containers()", "table().container()", function () {
        return this.iterator("table", function (a) {
            return a.nTableWrapper
        }, 1)
    });
    t("draw()", function (a) {
        return this.iterator("table", function (b) {
            "page" ===
            a ? S(b) : ("string" === typeof a && (a = "full-hold" === a ? !1 : !0), V(b, !1 === a))
        })
    });
    t("page()", function (a) {
        return a === p ? this.page.info().page : this.iterator("table", function (b) {
            Xa(b, a)
        })
    });
    t("page.info()", function (a) {
        if (0 === this.context.length) return p;
        a = this.context[0];
        var b = a._iDisplayStart,
            c = a.oFeatures.bPaginate ? a._iDisplayLength : -1,
            d = a.fnRecordsDisplay(),
            e = -1 === c;
        return {
            page: e ? 0 : Math.floor(b / c),
            pages: e ? 1 : Math.ceil(d / c),
            start: b,
            end: a.fnDisplayEnd(),
            length: c,
            recordsTotal: a.fnRecordsTotal(),
            recordsDisplay: d,
            serverSide: "ssp" === D(a)
        }
    });
    t("page.len()", function (a) {
        return a === p ? 0 !== this.context.length ? this.context[0]._iDisplayLength : p : this.iterator("table", function (b) {
            Va(b, a)
        })
    });
    var Xb = function (a, b, c) {
        if (c) {
            var d = new v(a);
            d.one("draw", function () {
                c(d.ajax.json())
            })
        }
        if ("ssp" == D(a)) V(a, b);
        else {
            K(a, !0);
            var e = a.jqXHR;
            e && 4 !== e.readyState && e.abort();
            va(a, [], function (c) {
                qa(a);
                c = wa(a, c);
                for (var d = 0, e = c.length; d < e; d++) R(a, c[d]);
                V(a, b);
                K(a, !1)
            })
        }
    };
    t("ajax.json()", function () {
        var a = this.context;
        if (0 < a.length) return a[0].json
    });
    t("ajax.params()", function () {
        var a = this.context;
        if (0 < a.length) return a[0].oAjaxData
    });
    t("ajax.reload()", function (a, b) {
        return this.iterator("table", function (c) {
            Xb(c, !1 === b, a)
        })
    });
    t("ajax.url()", function (a) {
        var b = this.context;
        if (a === p) {
            if (0 === b.length) return p;
            b = b[0];
            return b.ajax ? f.isPlainObject(b.ajax) ? b.ajax.url : b.ajax : b.sAjaxSource
        }
        return this.iterator("table", function (b) {
            f.isPlainObject(b.ajax) ? b.ajax.url = a : b.ajax = a
        })
    });
    t("ajax.url().load()", function (a, b) {
        return this.iterator("table", function (c) {
            Xb(c,
                !1 === b, a)
        })
    });
    var eb = function (a, b, c, d, e) {
            var h = [],
                g, k, l;
            var n = typeof b;
            b && "string" !== n && "function" !== n && b.length !== p || (b = [b]);
            n = 0;
            for (k = b.length; n < k; n++) {
                var m = b[n] && b[n].split && !b[n].match(/[\[\(:]/) ? b[n].split(",") : [b[n]];
                var q = 0;
                for (l = m.length; q < l; q++)(g = c("string" === typeof m[q] ? f.trim(m[q]) : m[q])) && g.length && (h = h.concat(g))
            }
            a = C.selector[a];
            if (a.length)
                for (n = 0, k = a.length; n < k; n++) h = a[n](d, e, h);
            return ta(h)
        },
        fb = function (a) {
            a || (a = {});
            a.filter && a.search === p && (a.search = a.filter);
            return f.extend({
                search: "none",
                order: "current",
                page: "all"
            }, a)
        },
        gb = function (a) {
            for (var b = 0, c = a.length; b < c; b++)
                if (0 < a[b].length) return a[0] = a[b], a[0].length = 1, a.length = 1, a.context = [a.context[b]], a;
            a.length = 0;
            return a
        },
        Fa = function (a, b) {
            var c = [],
                d = a.aiDisplay;
            var e = a.aiDisplayMaster;
            var h = b.search;
            var g = b.order;
            b = b.page;
            if ("ssp" == D(a)) return "removed" === h ? [] : Z(0, e.length);
            if ("current" == b)
                for (g = a._iDisplayStart, a = a.fnDisplayEnd(); g < a; g++) c.push(d[g]);
            else if ("current" == g || "applied" == g)
                if ("none" == h) c = e.slice();
                else if ("applied" == h) c =
                d.slice();
            else {
                if ("removed" == h) {
                    var k = {};
                    g = 0;
                    for (a = d.length; g < a; g++) k[d[g]] = null;
                    c = f.map(e, function (a) {
                        return k.hasOwnProperty(a) ? null : a
                    })
                }
            } else if ("index" == g || "original" == g)
                for (g = 0, a = a.aoData.length; g < a; g++) "none" == h ? c.push(g) : (e = f.inArray(g, d), (-1 === e && "removed" == h || 0 <= e && "applied" == h) && c.push(g));
            return c
        },
        gc = function (a, b, c) {
            var d;
            return eb("row", b, function (b) {
                    var e = Sb(b),
                        g = a.aoData;
                    if (null !== e && !c) return [e];
                    d || (d = Fa(a, c));
                    if (null !== e && -1 !== f.inArray(e, d)) return [e];
                    if (null === b || b === p || "" === b) return d;
                    if ("function" === typeof b) return f.map(d, function (a) {
                        var c = g[a];
                        return b(a, c._aData, c.nTr) ? a : null
                    });
                    if (b.nodeName) {
                        e = b._DT_RowIndex;
                        var k = b._DT_CellIndex;
                        if (e !== p) return g[e] && g[e].nTr === b ? [e] : [];
                        if (k) return g[k.row] && g[k.row].nTr === b.parentNode ? [k.row] : [];
                        e = f(b).closest("*[data-dt-row]");
                        return e.length ? [e.data("dt-row")] : []
                    }
                    if ("string" === typeof b && "#" === b.charAt(0) && (e = a.aIds[b.replace(/^#/, "")], e !== p)) return [e.idx];
                    e = Vb(la(a.aoData, d, "nTr"));
                    return f(e).filter(b).map(function () {
                        return this._DT_RowIndex
                    }).toArray()
                },
                a, c)
        };
    t("rows()", function (a, b) {
        a === p ? a = "" : f.isPlainObject(a) && (b = a, a = "");
        b = fb(b);
        var c = this.iterator("table", function (c) {
            return gc(c, a, b)
        }, 1);
        c.selector.rows = a;
        c.selector.opts = b;
        return c
    });
    t("rows().nodes()", function () {
        return this.iterator("row", function (a, b) {
            return a.aoData[b].nTr || p
        }, 1)
    });
    t("rows().data()", function () {
        return this.iterator(!0, "rows", function (a, b) {
            return la(a.aoData, b, "_aData")
        }, 1)
    });
    x("rows().cache()", "row().cache()", function (a) {
        return this.iterator("row", function (b, c) {
            b = b.aoData[c];
            return "search" === a ? b._aFilterData : b._aSortData
        }, 1)
    });
    x("rows().invalidate()", "row().invalidate()", function (a) {
        return this.iterator("row", function (b, c) {
            ea(b, c, a)
        })
    });
    x("rows().indexes()", "row().index()", function () {
        return this.iterator("row", function (a, b) {
            return b
        }, 1)
    });
    x("rows().ids()", "row().id()", function (a) {
        for (var b = [], c = this.context, d = 0, e = c.length; d < e; d++)
            for (var h = 0, g = this[d].length; h < g; h++) {
                var f = c[d].rowIdFn(c[d].aoData[this[d][h]]._aData);
                b.push((!0 === a ? "#" : "") + f)
            }
        return new v(c, b)
    });
    x("rows().remove()",
        "row().remove()",
        function () {
            var a = this;
            this.iterator("row", function (b, c, d) {
                var e = b.aoData,
                    h = e[c],
                    g, f;
                e.splice(c, 1);
                var l = 0;
                for (g = e.length; l < g; l++) {
                    var n = e[l];
                    var m = n.anCells;
                    null !== n.nTr && (n.nTr._DT_RowIndex = l);
                    if (null !== m)
                        for (n = 0, f = m.length; n < f; n++) m[n]._DT_CellIndex.row = l
                }
                ra(b.aiDisplayMaster, c);
                ra(b.aiDisplay, c);
                ra(a[d], c, !1);
                0 < b._iRecordsDisplay && b._iRecordsDisplay--;
                Wa(b);
                c = b.rowIdFn(h._aData);
                c !== p && delete b.aIds[c]
            });
            this.iterator("table", function (a) {
                for (var b = 0, d = a.aoData.length; b < d; b++) a.aoData[b].idx =
                    b
            });
            return this
        });
    t("rows.add()", function (a) {
        var b = this.iterator("table", function (b) {
                var c, d = [];
                var g = 0;
                for (c = a.length; g < c; g++) {
                    var f = a[g];
                    f.nodeName && "TR" === f.nodeName.toUpperCase() ? d.push(pa(b, f)[0]) : d.push(R(b, f))
                }
                return d
            }, 1),
            c = this.rows(-1);
        c.pop();
        f.merge(c, b);
        return c
    });
    t("row()", function (a, b) {
        return gb(this.rows(a, b))
    });
    t("row().data()", function (a) {
        var b = this.context;
        if (a === p) return b.length && this.length ? b[0].aoData[this[0]]._aData : p;
        var c = b[0].aoData[this[0]];
        c._aData = a;
        f.isArray(a) && c.nTr.id &&
            Q(b[0].rowId)(a, c.nTr.id);
        ea(b[0], this[0], "data");
        return this
    });
    t("row().node()", function () {
        var a = this.context;
        return a.length && this.length ? a[0].aoData[this[0]].nTr || null : null
    });
    t("row.add()", function (a) {
        a instanceof f && a.length && (a = a[0]);
        var b = this.iterator("table", function (b) {
            return a.nodeName && "TR" === a.nodeName.toUpperCase() ? pa(b, a)[0] : R(b, a)
        });
        return this.row(b[0])
    });
    var hc = function (a, b, c, d) {
            var e = [],
                h = function (b, c) {
                    if (f.isArray(b) || b instanceof f)
                        for (var d = 0, g = b.length; d < g; d++) h(b[d], c);
                    else b.nodeName &&
                        "tr" === b.nodeName.toLowerCase() ? e.push(b) : (d = f("<tr><td/></tr>").addClass(c), f("td", d).addClass(c).html(b)[0].colSpan = W(a), e.push(d[0]))
                };
            h(c, d);
            b._details && b._details.detach();
            b._details = f(e);
            b._detailsShow && b._details.insertAfter(b.nTr)
        },
        hb = function (a, b) {
            var c = a.context;
            c.length && (a = c[0].aoData[b !== p ? b : a[0]]) && a._details && (a._details.remove(), a._detailsShow = p, a._details = p)
        },
        Yb = function (a, b) {
            var c = a.context;
            c.length && a.length && (a = c[0].aoData[a[0]], a._details && ((a._detailsShow = b) ? a._details.insertAfter(a.nTr) :
                a._details.detach(), ic(c[0])))
        },
        ic = function (a) {
            var b = new v(a),
                c = a.aoData;
            b.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details");
            0 < J(c, "_details").length && (b.on("draw.dt.DT_details", function (d, e) {
                a === e && b.rows({
                    page: "current"
                }).eq(0).each(function (a) {
                    a = c[a];
                    a._detailsShow && a._details.insertAfter(a.nTr)
                })
            }), b.on("column-visibility.dt.DT_details", function (b, e, f, g) {
                if (a === e)
                    for (e = W(e), f = 0, g = c.length; f < g; f++) b = c[f], b._details && b._details.children("td[colspan]").attr("colspan",
                        e)
            }), b.on("destroy.dt.DT_details", function (d, e) {
                if (a === e)
                    for (d = 0, e = c.length; d < e; d++) c[d]._details && hb(b, d)
            }))
        };
    t("row().child()", function (a, b) {
        var c = this.context;
        if (a === p) return c.length && this.length ? c[0].aoData[this[0]]._details : p;
        !0 === a ? this.child.show() : !1 === a ? hb(this) : c.length && this.length && hc(c[0], c[0].aoData[this[0]], a, b);
        return this
    });
    t(["row().child.show()", "row().child().show()"], function (a) {
        Yb(this, !0);
        return this
    });
    t(["row().child.hide()", "row().child().hide()"], function () {
        Yb(this, !1);
        return this
    });
    t(["row().child.remove()", "row().child().remove()"], function () {
        hb(this);
        return this
    });
    t("row().child.isShown()", function () {
        var a = this.context;
        return a.length && this.length ? a[0].aoData[this[0]]._detailsShow || !1 : !1
    });
    var jc = /^([^:]+):(name|visIdx|visible)$/,
        Zb = function (a, b, c, d, e) {
            c = [];
            d = 0;
            for (var f = e.length; d < f; d++) c.push(I(a, e[d], b));
            return c
        },
        kc = function (a, b, c) {
            var d = a.aoColumns,
                e = J(d, "sName"),
                h = J(d, "nTh");
            return eb("column", b, function (b) {
                var g = Sb(b);
                if ("" === b) return Z(d.length);
                if (null !==
                    g) return [0 <= g ? g : d.length + g];
                if ("function" === typeof b) {
                    var l = Fa(a, c);
                    return f.map(d, function (c, d) {
                        return b(d, Zb(a, d, 0, 0, l), h[d]) ? d : null
                    })
                }
                var n = "string" === typeof b ? b.match(jc) : "";
                if (n) switch (n[2]) {
                    case "visIdx":
                    case "visible":
                        g = parseInt(n[1], 10);
                        if (0 > g) {
                            var m = f.map(d, function (a, b) {
                                return a.bVisible ? b : null
                            });
                            return [m[m.length + g]]
                        }
                        return [ba(a, g)];
                    case "name":
                        return f.map(e, function (a, b) {
                            return a === n[1] ? b : null
                        });
                    default:
                        return []
                }
                if (b.nodeName && b._DT_CellIndex) return [b._DT_CellIndex.column];
                g = f(h).filter(b).map(function () {
                    return f.inArray(this,
                        h)
                }).toArray();
                if (g.length || !b.nodeName) return g;
                g = f(b).closest("*[data-dt-column]");
                return g.length ? [g.data("dt-column")] : []
            }, a, c)
        };
    t("columns()", function (a, b) {
        a === p ? a = "" : f.isPlainObject(a) && (b = a, a = "");
        b = fb(b);
        var c = this.iterator("table", function (c) {
            return kc(c, a, b)
        }, 1);
        c.selector.cols = a;
        c.selector.opts = b;
        return c
    });
    x("columns().header()", "column().header()", function (a, b) {
        return this.iterator("column", function (a, b) {
            return a.aoColumns[b].nTh
        }, 1)
    });
    x("columns().footer()", "column().footer()", function (a,
        b) {
        return this.iterator("column", function (a, b) {
            return a.aoColumns[b].nTf
        }, 1)
    });
    x("columns().data()", "column().data()", function () {
        return this.iterator("column-rows", Zb, 1)
    });
    x("columns().dataSrc()", "column().dataSrc()", function () {
        return this.iterator("column", function (a, b) {
            return a.aoColumns[b].mData
        }, 1)
    });
    x("columns().cache()", "column().cache()", function (a) {
        return this.iterator("column-rows", function (b, c, d, e, f) {
            return la(b.aoData, f, "search" === a ? "_aFilterData" : "_aSortData", c)
        }, 1)
    });
    x("columns().nodes()",
        "column().nodes()",
        function () {
            return this.iterator("column-rows", function (a, b, c, d, e) {
                return la(a.aoData, e, "anCells", b)
            }, 1)
        });
    x("columns().visible()", "column().visible()", function (a, b) {
        var c = this,
            d = this.iterator("column", function (b, c) {
                if (a === p) return b.aoColumns[c].bVisible;
                var d = b.aoColumns,
                    e = d[c],
                    h = b.aoData,
                    n;
                if (a !== p && e.bVisible !== a) {
                    if (a) {
                        var m = f.inArray(!0, J(d, "bVisible"), c + 1);
                        d = 0;
                        for (n = h.length; d < n; d++) {
                            var q = h[d].nTr;
                            b = h[d].anCells;
                            q && q.insertBefore(b[c], b[m] || null)
                        }
                    } else f(J(b.aoData, "anCells",
                        c)).detach();
                    e.bVisible = a
                }
            });
        a !== p && this.iterator("table", function (d) {
            ha(d, d.aoHeader);
            ha(d, d.aoFooter);
            d.aiDisplay.length || f(d.nTBody).find("td[colspan]").attr("colspan", W(d));
            Ba(d);
            c.iterator("column", function (c, d) {
                A(c, null, "column-visibility", [c, d, a, b])
            });
            (b === p || b) && c.columns.adjust()
        });
        return d
    });
    x("columns().indexes()", "column().index()", function (a) {
        return this.iterator("column", function (b, c) {
            return "visible" === a ? ca(b, c) : c
        }, 1)
    });
    t("columns.adjust()", function () {
        return this.iterator("table", function (a) {
                aa(a)
            },
            1)
    });
    t("column.index()", function (a, b) {
        if (0 !== this.context.length) {
            var c = this.context[0];
            if ("fromVisible" === a || "toData" === a) return ba(c, b);
            if ("fromData" === a || "toVisible" === a) return ca(c, b)
        }
    });
    t("column()", function (a, b) {
        return gb(this.columns(a, b))
    });
    var lc = function (a, b, c) {
        var d = a.aoData,
            e = Fa(a, c),
            h = Vb(la(d, e, "anCells")),
            g = f([].concat.apply([], h)),
            k, l = a.aoColumns.length,
            n, m, q, u, t, v;
        return eb("cell", b, function (b) {
            var c = "function" === typeof b;
            if (null === b || b === p || c) {
                n = [];
                m = 0;
                for (q = e.length; m < q; m++)
                    for (k =
                        e[m], u = 0; u < l; u++) t = {
                        row: k,
                        column: u
                    }, c ? (v = d[k], b(t, I(a, k, u), v.anCells ? v.anCells[u] : null) && n.push(t)) : n.push(t);
                return n
            }
            if (f.isPlainObject(b)) return b.column !== p && b.row !== p && -1 !== f.inArray(b.row, e) ? [b] : [];
            c = g.filter(b).map(function (a, b) {
                return {
                    row: b._DT_CellIndex.row,
                    column: b._DT_CellIndex.column
                }
            }).toArray();
            if (c.length || !b.nodeName) return c;
            v = f(b).closest("*[data-dt-row]");
            return v.length ? [{
                row: v.data("dt-row"),
                column: v.data("dt-column")
            }] : []
        }, a, c)
    };
    t("cells()", function (a, b, c) {
        f.isPlainObject(a) &&
            (a.row === p ? (c = a, a = null) : (c = b, b = null));
        f.isPlainObject(b) && (c = b, b = null);
        if (null === b || b === p) return this.iterator("table", function (b) {
            return lc(b, a, fb(c))
        });
        var d = c ? {
                page: c.page,
                order: c.order,
                search: c.search
            } : {},
            e = this.columns(b, d),
            h = this.rows(a, d),
            g, k, l, n;
        d = this.iterator("table", function (a, b) {
            a = [];
            g = 0;
            for (k = h[b].length; g < k; g++)
                for (l = 0, n = e[b].length; l < n; l++) a.push({
                    row: h[b][g],
                    column: e[b][l]
                });
            return a
        }, 1);
        d = c && c.selected ? this.cells(d, c) : d;
        f.extend(d.selector, {
            cols: b,
            rows: a,
            opts: c
        });
        return d
    });
    x("cells().nodes()",
        "cell().node()",
        function () {
            return this.iterator("cell", function (a, b, c) {
                return (a = a.aoData[b]) && a.anCells ? a.anCells[c] : p
            }, 1)
        });
    t("cells().data()", function () {
        return this.iterator("cell", function (a, b, c) {
            return I(a, b, c)
        }, 1)
    });
    x("cells().cache()", "cell().cache()", function (a) {
        a = "search" === a ? "_aFilterData" : "_aSortData";
        return this.iterator("cell", function (b, c, d) {
            return b.aoData[c][a][d]
        }, 1)
    });
    x("cells().render()", "cell().render()", function (a) {
        return this.iterator("cell", function (b, c, d) {
                return I(b, c, d, a)
            },
            1)
    });
    x("cells().indexes()", "cell().index()", function () {
        return this.iterator("cell", function (a, b, c) {
            return {
                row: b,
                column: c,
                columnVisible: ca(a, c)
            }
        }, 1)
    });
    x("cells().invalidate()", "cell().invalidate()", function (a) {
        return this.iterator("cell", function (b, c, d) {
            ea(b, c, a, d)
        })
    });
    t("cell()", function (a, b, c) {
        return gb(this.cells(a, b, c))
    });
    t("cell().data()", function (a) {
        var b = this.context,
            c = this[0];
        if (a === p) return b.length && c.length ? I(b[0], c[0].row, c[0].column) : p;
        ob(b[0], c[0].row, c[0].column, a);
        ea(b[0], c[0].row,
            "data", c[0].column);
        return this
    });
    t("order()", function (a, b) {
        var c = this.context;
        if (a === p) return 0 !== c.length ? c[0].aaSorting : p;
        "number" === typeof a ? a = [
            [a, b]
        ] : a.length && !f.isArray(a[0]) && (a = Array.prototype.slice.call(arguments));
        return this.iterator("table", function (b) {
            b.aaSorting = a.slice()
        })
    });
    t("order.listener()", function (a, b, c) {
        return this.iterator("table", function (d) {
            Qa(d, a, b, c)
        })
    });
    t("order.fixed()", function (a) {
        if (!a) {
            var b = this.context;
            b = b.length ? b[0].aaSortingFixed : p;
            return f.isArray(b) ? {
                    pre: b
                } :
                b
        }
        return this.iterator("table", function (b) {
            b.aaSortingFixed = f.extend(!0, {}, a)
        })
    });
    t(["columns().order()", "column().order()"], function (a) {
        var b = this;
        return this.iterator("table", function (c, d) {
            var e = [];
            f.each(b[d], function (b, c) {
                e.push([c, a])
            });
            c.aaSorting = e
        })
    });
    t("search()", function (a, b, c, d) {
        var e = this.context;
        return a === p ? 0 !== e.length ? e[0].oPreviousSearch.sSearch : p : this.iterator("table", function (e) {
            e.oFeatures.bFilter && ia(e, f.extend({}, e.oPreviousSearch, {
                sSearch: a + "",
                bRegex: null === b ? !1 : b,
                bSmart: null ===
                    c ? !0 : c,
                bCaseInsensitive: null === d ? !0 : d
            }), 1)
        })
    });
    x("columns().search()", "column().search()", function (a, b, c, d) {
        return this.iterator("column", function (e, h) {
            var g = e.aoPreSearchCols;
            if (a === p) return g[h].sSearch;
            e.oFeatures.bFilter && (f.extend(g[h], {
                sSearch: a + "",
                bRegex: null === b ? !1 : b,
                bSmart: null === c ? !0 : c,
                bCaseInsensitive: null === d ? !0 : d
            }), ia(e, e.oPreviousSearch, 1))
        })
    });
    t("state()", function () {
        return this.context.length ? this.context[0].oSavedState : null
    });
    t("state.clear()", function () {
        return this.iterator("table",
            function (a) {
                a.fnStateSaveCallback.call(a.oInstance, a, {})
            })
    });
    t("state.loaded()", function () {
        return this.context.length ? this.context[0].oLoadedState : null
    });
    t("state.save()", function () {
        return this.iterator("table", function (a) {
            Ba(a)
        })
    });
    q.versionCheck = q.fnVersionCheck = function (a) {
        var b = q.version.split(".");
        a = a.split(".");
        for (var c, d, e = 0, f = a.length; e < f; e++)
            if (c = parseInt(b[e], 10) || 0, d = parseInt(a[e], 10) || 0, c !== d) return c > d;
        return !0
    };
    q.isDataTable = q.fnIsDataTable = function (a) {
        var b = f(a).get(0),
            c = !1;
        if (a instanceof q.Api) return !0;
        f.each(q.settings, function (a, e) {
            a = e.nScrollHead ? f("table", e.nScrollHead)[0] : null;
            var d = e.nScrollFoot ? f("table", e.nScrollFoot)[0] : null;
            if (e.nTable === b || a === b || d === b) c = !0
        });
        return c
    };
    q.tables = q.fnTables = function (a) {
        var b = !1;
        f.isPlainObject(a) && (b = a.api, a = a.visible);
        var c = f.map(q.settings, function (b) {
            if (!a || a && f(b.nTable).is(":visible")) return b.nTable
        });
        return b ? new v(c) : c
    };
    q.camelToHungarian = L;
    t("$()", function (a, b) {
        b = this.rows(b).nodes();
        b = f(b);
        return f([].concat(b.filter(a).toArray(),
            b.find(a).toArray()))
    });
    f.each(["on", "one", "off"], function (a, b) {
        t(b + "()", function () {
            var a = Array.prototype.slice.call(arguments);
            a[0] = f.map(a[0].split(/\s/), function (a) {
                return a.match(/\.dt\b/) ? a : a + ".dt"
            }).join(" ");
            var d = f(this.tables().nodes());
            d[b].apply(d, a);
            return this
        })
    });
    t("clear()", function () {
        return this.iterator("table", function (a) {
            qa(a)
        })
    });
    t("settings()", function () {
        return new v(this.context, this.context)
    });
    t("init()", function () {
        var a = this.context;
        return a.length ? a[0].oInit : null
    });
    t("data()",
        function () {
            return this.iterator("table", function (a) {
                return J(a.aoData, "_aData")
            }).flatten()
        });
    t("destroy()", function (a) {
        a = a || !1;
        return this.iterator("table", function (b) {
            var c = b.nTableWrapper.parentNode,
                d = b.oClasses,
                e = b.nTable,
                h = b.nTBody,
                g = b.nTHead,
                k = b.nTFoot,
                l = f(e);
            h = f(h);
            var n = f(b.nTableWrapper),
                m = f.map(b.aoData, function (a) {
                    return a.nTr
                }),
                p;
            b.bDestroying = !0;
            A(b, "aoDestroyCallback", "destroy", [b]);
            a || (new v(b)).columns().visible(!0);
            n.off(".DT").find(":not(tbody *)").off(".DT");
            f(z).off(".DT-" + b.sInstance);
            e != g.parentNode && (l.children("thead").detach(), l.append(g));
            k && e != k.parentNode && (l.children("tfoot").detach(), l.append(k));
            b.aaSorting = [];
            b.aaSortingFixed = [];
            Aa(b);
            f(m).removeClass(b.asStripeClasses.join(" "));
            f("th, td", g).removeClass(d.sSortable + " " + d.sSortableAsc + " " + d.sSortableDesc + " " + d.sSortableNone);
            h.children().detach();
            h.append(m);
            g = a ? "remove" : "detach";
            l[g]();
            n[g]();
            !a && c && (c.insertBefore(e, b.nTableReinsertBefore), l.css("width", b.sDestroyWidth).removeClass(d.sTable), (p = b.asDestroyStripes.length) &&
                h.children().each(function (a) {
                    f(this).addClass(b.asDestroyStripes[a % p])
                }));
            c = f.inArray(b, q.settings); - 1 !== c && q.settings.splice(c, 1)
        })
    });
    f.each(["column", "row", "cell"], function (a, b) {
        t(b + "s().every()", function (a) {
            var c = this.selector.opts,
                e = this;
            return this.iterator(b, function (d, f, k, l, n) {
                a.call(e[b](f, "cell" === b ? k : c, "cell" === b ? c : p), f, k, l, n)
            })
        })
    });
    t("i18n()", function (a, b, c) {
        var d = this.context[0];
        a = U(a)(d.oLanguage);
        a === p && (a = b);
        c !== p && f.isPlainObject(a) && (a = a[c] !== p ? a[c] : a._);
        return a.replace("%d", c)
    });
    q.version = "1.10.20";
    q.settings = [];
    q.models = {};
    q.models.oSearch = {
        bCaseInsensitive: !0,
        sSearch: "",
        bRegex: !1,
        bSmart: !0
    };
    q.models.oRow = {
        nTr: null,
        anCells: null,
        _aData: [],
        _aSortData: null,
        _aFilterData: null,
        _sFilterRow: null,
        _sRowStripe: "",
        src: null,
        idx: -1
    };
    q.models.oColumn = {
        idx: null,
        aDataSort: null,
        asSorting: null,
        bSearchable: null,
        bSortable: null,
        bVisible: null,
        _sManualType: null,
        _bAttrSrc: !1,
        fnCreatedCell: null,
        fnGetData: null,
        fnSetData: null,
        mData: null,
        mRender: null,
        nTh: null,
        nTf: null,
        sClass: null,
        sContentPadding: null,
        sDefaultContent: null,
        sName: null,
        sSortDataType: "std",
        sSortingClass: null,
        sSortingClassJUI: null,
        sTitle: null,
        sType: null,
        sWidth: null,
        sWidthOrig: null
    };
    q.defaults = {
        aaData: null,
        aaSorting: [
            [0, "asc"]
        ],
        aaSortingFixed: [],
        ajax: null,
        aLengthMenu: [10, 25, 50, 100],
        aoColumns: null,
        aoColumnDefs: null,
        aoSearchCols: [],
        asStripeClasses: null,
        bAutoWidth: !0,
        bDeferRender: !1,
        bDestroy: !1,
        bFilter: !0,
        bInfo: !0,
        bLengthChange: !0,
        bPaginate: !0,
        bProcessing: !1,
        bRetrieve: !1,
        bScrollCollapse: !1,
        bServerSide: !1,
        bSort: !0,
        bSortMulti: !0,
        bSortCellsTop: !1,
        bSortClasses: !0,
        bStateSave: !1,
        fnCreatedRow: null,
        fnDrawCallback: null,
        fnFooterCallback: null,
        fnFormatNumber: function (a) {
            return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands)
        },
        fnHeaderCallback: null,
        fnInfoCallback: null,
        fnInitComplete: null,
        fnPreDrawCallback: null,
        fnRowCallback: null,
        fnServerData: null,
        fnServerParams: null,
        fnStateLoadCallback: function (a) {
            try {
                return JSON.parse((-1 === a.iStateDuration ? sessionStorage : localStorage).getItem("DataTables_" + a.sInstance + "_" + location.pathname))
            } catch (b) {}
        },
        fnStateLoadParams: null,
        fnStateLoaded: null,
        fnStateSaveCallback: function (a, b) {
            try {
                (-1 === a.iStateDuration ? sessionStorage : localStorage).setItem("DataTables_" + a.sInstance + "_" + location.pathname, JSON.stringify(b))
            } catch (c) {}
        },
        fnStateSaveParams: null,
        iStateDuration: 7200,
        iDeferLoading: null,
        iDisplayLength: 10,
        iDisplayStart: 0,
        iTabIndex: 0,
        oClasses: {},
        oLanguage: {
            oAria: {
                sSortAscending: ": activate to sort column ascending",
                sSortDescending: ": activate to sort column descending"
            },
            oPaginate: {
                sFirst: "First",
                sLast: "Last",
                sNext: "Next",
                sPrevious: "Previous"
            },
            sEmptyTable: "No data available in table",
            sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
            sInfoEmpty: "Showing 0 to 0 of 0 entries",
            sInfoFiltered: "(filtered from _MAX_ total entries)",
            sInfoPostFix: "",
            sDecimal: "",
            sThousands: ",",
            sLengthMenu: "Show _MENU_ entries",
            sLoadingRecords: "Loading...",
            sProcessing: "Processing...",
            sSearch: "Search:",
            sSearchPlaceholder: "",
            sUrl: "",
            sZeroRecords: "No matching records found"
        },
        oSearch: f.extend({}, q.models.oSearch),
        sAjaxDataProp: "data",
        sAjaxSource: null,
        sDom: "lfrtip",
        searchDelay: null,
        sPaginationType: "simple_numbers",
        sScrollX: "",
        sScrollXInner: "",
        sScrollY: "",
        sServerMethod: "GET",
        renderer: null,
        rowId: "DT_RowId"
    };
    H(q.defaults);
    q.defaults.column = {
        aDataSort: null,
        iDataSort: -1,
        asSorting: ["asc", "desc"],
        bSearchable: !0,
        bSortable: !0,
        bVisible: !0,
        fnCreatedCell: null,
        mData: null,
        mRender: null,
        sCellType: "td",
        sClass: "",
        sContentPadding: "",
        sDefaultContent: null,
        sName: "",
        sSortDataType: "std",
        sTitle: null,
        sType: null,
        sWidth: null
    };
    H(q.defaults.column);
    q.models.oSettings = {
        oFeatures: {
            bAutoWidth: null,
            bDeferRender: null,
            bFilter: null,
            bInfo: null,
            bLengthChange: null,
            bPaginate: null,
            bProcessing: null,
            bServerSide: null,
            bSort: null,
            bSortMulti: null,
            bSortClasses: null,
            bStateSave: null
        },
        oScroll: {
            bCollapse: null,
            iBarWidth: 0,
            sX: null,
            sXInner: null,
            sY: null
        },
        oLanguage: {
            fnInfoCallback: null
        },
        oBrowser: {
            bScrollOversize: !1,
            bScrollbarLeft: !1,
            bBounding: !1,
            barWidth: 0
        },
        ajax: null,
        aanFeatures: [],
        aoData: [],
        aiDisplay: [],
        aiDisplayMaster: [],
        aIds: {},
        aoColumns: [],
        aoHeader: [],
        aoFooter: [],
        oPreviousSearch: {},
        aoPreSearchCols: [],
        aaSorting: null,
        aaSortingFixed: [],
        asStripeClasses: null,
        asDestroyStripes: [],
        sDestroyWidth: 0,
        aoRowCallback: [],
        aoHeaderCallback: [],
        aoFooterCallback: [],
        aoDrawCallback: [],
        aoRowCreatedCallback: [],
        aoPreDrawCallback: [],
        aoInitComplete: [],
        aoStateSaveParams: [],
        aoStateLoadParams: [],
        aoStateLoaded: [],
        sTableId: "",
        nTable: null,
        nTHead: null,
        nTFoot: null,
        nTBody: null,
        nTableWrapper: null,
        bDeferLoading: !1,
        bInitialised: !1,
        aoOpenRows: [],
        sDom: null,
        searchDelay: null,
        sPaginationType: "two_button",
        iStateDuration: 0,
        aoStateSave: [],
        aoStateLoad: [],
        oSavedState: null,
        oLoadedState: null,
        sAjaxSource: null,
        sAjaxDataProp: null,
        bAjaxDataGet: !0,
        jqXHR: null,
        json: p,
        oAjaxData: p,
        fnServerData: null,
        aoServerParams: [],
        sServerMethod: null,
        fnFormatNumber: null,
        aLengthMenu: null,
        iDraw: 0,
        bDrawing: !1,
        iDrawError: -1,
        _iDisplayLength: 10,
        _iDisplayStart: 0,
        _iRecordsTotal: 0,
        _iRecordsDisplay: 0,
        oClasses: {},
        bFiltered: !1,
        bSorted: !1,
        bSortCellsTop: null,
        oInit: null,
        aoDestroyCallback: [],
        fnRecordsTotal: function () {
            return "ssp" == D(this) ? 1 * this._iRecordsTotal :
                this.aiDisplayMaster.length
        },
        fnRecordsDisplay: function () {
            return "ssp" == D(this) ? 1 * this._iRecordsDisplay : this.aiDisplay.length
        },
        fnDisplayEnd: function () {
            var a = this._iDisplayLength,
                b = this._iDisplayStart,
                c = b + a,
                d = this.aiDisplay.length,
                e = this.oFeatures,
                f = e.bPaginate;
            return e.bServerSide ? !1 === f || -1 === a ? b + d : Math.min(b + a, this._iRecordsDisplay) : !f || c > d || -1 === a ? d : c
        },
        oInstance: null,
        sInstance: null,
        iTabIndex: 0,
        nScrollHead: null,
        nScrollFoot: null,
        aLastSort: [],
        oPlugins: {},
        rowIdFn: null,
        rowId: null
    };
    q.ext = C = {
        buttons: {},
        classes: {},
        builder: "bs4/jszip-2.5.0/dt-1.10.20/b-1.6.0/b-html5-1.6.0",
        errMode: "alert",
        feature: [],
        search: [],
        selector: {
            cell: [],
            column: [],
            row: []
        },
        internal: {},
        legacy: {
            ajax: null
        },
        pager: {},
        renderer: {
            pageButton: {},
            header: {}
        },
        order: {},
        type: {
            detect: [],
            search: {},
            order: {}
        },
        _unique: 0,
        fnVersionCheck: q.fnVersionCheck,
        iApiIndex: 0,
        oJUIClasses: {},
        sVersion: q.version
    };
    f.extend(C, {
        afnFiltering: C.search,
        aTypes: C.type.detect,
        ofnSearch: C.type.search,
        oSort: C.type.order,
        afnSortData: C.order,
        aoFeatures: C.feature,
        oApi: C.internal,
        oStdClasses: C.classes,
        oPagination: C.pager
    });
    f.extend(q.ext.classes, {
        sTable: "dataTable",
        sNoFooter: "no-footer",
        sPageButton: "paginate_button",
        sPageButtonActive: "current",
        sPageButtonDisabled: "disabled",
        sStripeOdd: "odd",
        sStripeEven: "even",
        sRowEmpty: "dataTables_empty",
        sWrapper: "dataTables_wrapper",
        sFilter: "dataTables_filter",
        sInfo: "dataTables_info",
        sPaging: "dataTables_paginate paging_",
        sLength: "dataTables_length",
        sProcessing: "dataTables_processing",
        sSortAsc: "sorting_asc",
        sSortDesc: "sorting_desc",
        sSortable: "sorting",
        sSortableAsc: "sorting_asc_disabled",
        sSortableDesc: "sorting_desc_disabled",
        sSortableNone: "sorting_disabled",
        sSortColumn: "sorting_",
        sFilterInput: "",
        sLengthSelect: "",
        sScrollWrapper: "dataTables_scroll",
        sScrollHead: "dataTables_scrollHead",
        sScrollHeadInner: "dataTables_scrollHeadInner",
        sScrollBody: "dataTables_scrollBody",
        sScrollFoot: "dataTables_scrollFoot",
        sScrollFootInner: "dataTables_scrollFootInner",
        sHeaderTH: "",
        sFooterTH: "",
        sSortJUIAsc: "",
        sSortJUIDesc: "",
        sSortJUI: "",
        sSortJUIAscAllowed: "",
        sSortJUIDescAllowed: "",
        sSortJUIWrapper: "",
        sSortIcon: "",
        sJUIHeader: "",
        sJUIFooter: ""
    });
    var Pb = q.ext.pager;
    f.extend(Pb, {
        simple: function (a, b) {
            return ["previous", "next"]
        },
        full: function (a, b) {
            return ["first", "previous", "next", "last"]
        },
        numbers: function (a, b) {
            return [ka(a, b)]
        },
        simple_numbers: function (a, b) {
            return ["previous", ka(a, b), "next"]
        },
        full_numbers: function (a, b) {
            return ["first", "previous", ka(a, b), "next", "last"]
        },
        first_last_numbers: function (a, b) {
            return ["first", ka(a, b), "last"]
        },
        _numbers: ka,
        numbers_length: 7
    });
    f.extend(!0, q.ext.renderer, {
        pageButton: {
            _: function (a, b,
                c, d, e, h) {
                var g = a.oClasses,
                    k = a.oLanguage.oPaginate,
                    l = a.oLanguage.oAria.paginate || {},
                    n, m, q = 0,
                    t = function (b, d) {
                        var p, r = g.sPageButtonDisabled,
                            u = function (b) {
                                Xa(a, b.data.action, !0)
                            };
                        var w = 0;
                        for (p = d.length; w < p; w++) {
                            var v = d[w];
                            if (f.isArray(v)) {
                                var x = f("<" + (v.DT_el || "div") + "/>").appendTo(b);
                                t(x, v)
                            } else {
                                n = null;
                                m = v;
                                x = a.iTabIndex;
                                switch (v) {
                                    case "ellipsis":
                                        b.append('<span class="ellipsis">&#x2026;</span>');
                                        break;
                                    case "first":
                                        n = k.sFirst;
                                        0 === e && (x = -1, m += " " + r);
                                        break;
                                    case "previous":
                                        n = k.sPrevious;
                                        0 === e && (x = -1, m +=
                                            " " + r);
                                        break;
                                    case "next":
                                        n = k.sNext;
                                        e === h - 1 && (x = -1, m += " " + r);
                                        break;
                                    case "last":
                                        n = k.sLast;
                                        e === h - 1 && (x = -1, m += " " + r);
                                        break;
                                    default:
                                        n = v + 1, m = e === v ? g.sPageButtonActive : ""
                                }
                                null !== n && (x = f("<a>", {
                                    "class": g.sPageButton + " " + m,
                                    "aria-controls": a.sTableId,
                                    "aria-label": l[v],
                                    "data-dt-idx": q,
                                    tabindex: x,
                                    id: 0 === c && "string" === typeof v ? a.sTableId + "_" + v : null
                                }).html(n).appendTo(b), $a(x, {
                                    action: v
                                }, u), q++)
                            }
                        }
                    };
                try {
                    var v = f(b).find(y.activeElement).data("dt-idx")
                } catch (mc) {}
                t(f(b).empty(), d);
                v !== p && f(b).find("[data-dt-idx=" +
                    v + "]").focus()
            }
        }
    });
    f.extend(q.ext.type.detect, [function (a, b) {
        b = b.oLanguage.sDecimal;
        return db(a, b) ? "num" + b : null
    }, function (a, b) {
        if (a && !(a instanceof Date) && !cc.test(a)) return null;
        b = Date.parse(a);
        return null !== b && !isNaN(b) || P(a) ? "date" : null
    }, function (a, b) {
        b = b.oLanguage.sDecimal;
        return db(a, b, !0) ? "num-fmt" + b : null
    }, function (a, b) {
        b = b.oLanguage.sDecimal;
        return Ub(a, b) ? "html-num" + b : null
    }, function (a, b) {
        b = b.oLanguage.sDecimal;
        return Ub(a, b, !0) ? "html-num-fmt" + b : null
    }, function (a, b) {
        return P(a) || "string" ===
            typeof a && -1 !== a.indexOf("<") ? "html" : null
    }]);
    f.extend(q.ext.type.search, {
        html: function (a) {
            return P(a) ? a : "string" === typeof a ? a.replace(Rb, " ").replace(Ea, "") : ""
        },
        string: function (a) {
            return P(a) ? a : "string" === typeof a ? a.replace(Rb, " ") : a
        }
    });
    var Da = function (a, b, c, d) {
        if (0 !== a && (!a || "-" === a)) return -Infinity;
        b && (a = Tb(a, b));
        a.replace && (c && (a = a.replace(c, "")), d && (a = a.replace(d, "")));
        return 1 * a
    };
    f.extend(C.type.order, {
        "date-pre": function (a) {
            a = Date.parse(a);
            return isNaN(a) ? -Infinity : a
        },
        "html-pre": function (a) {
            return P(a) ?
                "" : a.replace ? a.replace(/<.*?>/g, "").toLowerCase() : a + ""
        },
        "string-pre": function (a) {
            return P(a) ? "" : "string" === typeof a ? a.toLowerCase() : a.toString ? a.toString() : ""
        },
        "string-asc": function (a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        },
        "string-desc": function (a, b) {
            return a < b ? 1 : a > b ? -1 : 0
        }
    });
    Ha("");
    f.extend(!0, q.ext.renderer, {
        header: {
            _: function (a, b, c, d) {
                f(a.nTable).on("order.dt.DT", function (e, f, g, k) {
                    a === f && (e = c.idx, b.removeClass(c.sSortingClass + " " + d.sSortAsc + " " + d.sSortDesc).addClass("asc" == k[e] ? d.sSortAsc : "desc" == k[e] ? d.sSortDesc :
                        c.sSortingClass))
                })
            },
            jqueryui: function (a, b, c, d) {
                f("<div/>").addClass(d.sSortJUIWrapper).append(b.contents()).append(f("<span/>").addClass(d.sSortIcon + " " + c.sSortingClassJUI)).appendTo(b);
                f(a.nTable).on("order.dt.DT", function (e, f, g, k) {
                    a === f && (e = c.idx, b.removeClass(d.sSortAsc + " " + d.sSortDesc).addClass("asc" == k[e] ? d.sSortAsc : "desc" == k[e] ? d.sSortDesc : c.sSortingClass), b.find("span." + d.sSortIcon).removeClass(d.sSortJUIAsc + " " + d.sSortJUIDesc + " " + d.sSortJUI + " " + d.sSortJUIAscAllowed + " " + d.sSortJUIDescAllowed).addClass("asc" ==
                        k[e] ? d.sSortJUIAsc : "desc" == k[e] ? d.sSortJUIDesc : c.sSortingClassJUI))
                })
            }
        }
    });
    var ib = function (a) {
        return "string" === typeof a ? a.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : a
    };
    q.render = {
        number: function (a, b, c, d, e) {
            return {
                display: function (f) {
                    if ("number" !== typeof f && "string" !== typeof f) return f;
                    var g = 0 > f ? "-" : "",
                        h = parseFloat(f);
                    if (isNaN(h)) return ib(f);
                    h = h.toFixed(c);
                    f = Math.abs(h);
                    h = parseInt(f, 10);
                    f = c ? b + (f - h).toFixed(c).substring(2) : "";
                    return g + (d || "") + h.toString().replace(/\B(?=(\d{3})+(?!\d))/g,
                        a) + f + (e || "")
                }
            }
        },
        text: function () {
            return {
                display: ib,
                filter: ib
            }
        }
    };
    f.extend(q.ext.internal, {
        _fnExternApiFunc: Qb,
        _fnBuildAjax: va,
        _fnAjaxUpdate: qb,
        _fnAjaxParameters: zb,
        _fnAjaxUpdateDraw: Ab,
        _fnAjaxDataSrc: wa,
        _fnAddColumn: Ia,
        _fnColumnOptions: ma,
        _fnAdjustColumnSizing: aa,
        _fnVisibleToColumnIndex: ba,
        _fnColumnIndexToVisible: ca,
        _fnVisbleColumns: W,
        _fnGetColumns: oa,
        _fnColumnTypes: Ka,
        _fnApplyColumnDefs: nb,
        _fnHungarianMap: H,
        _fnCamelToHungarian: L,
        _fnLanguageCompat: Ga,
        _fnBrowserDetect: lb,
        _fnAddData: R,
        _fnAddTr: pa,
        _fnNodeToDataIndex: function (a,
            b) {
            return b._DT_RowIndex !== p ? b._DT_RowIndex : null
        },
        _fnNodeToColumnIndex: function (a, b, c) {
            return f.inArray(c, a.aoData[b].anCells)
        },
        _fnGetCellData: I,
        _fnSetCellData: ob,
        _fnSplitObjNotation: Na,
        _fnGetObjectDataFn: U,
        _fnSetObjectDataFn: Q,
        _fnGetDataMaster: Oa,
        _fnClearTable: qa,
        _fnDeleteIndex: ra,
        _fnInvalidate: ea,
        _fnGetRowElements: Ma,
        _fnCreateTr: La,
        _fnBuildHead: pb,
        _fnDrawHead: ha,
        _fnDraw: S,
        _fnReDraw: V,
        _fnAddOptionsHtml: sb,
        _fnDetectHeader: fa,
        _fnGetUniqueThs: ua,
        _fnFeatureHtmlFilter: ub,
        _fnFilterComplete: ia,
        _fnFilterCustom: Db,
        _fnFilterColumn: Cb,
        _fnFilter: Bb,
        _fnFilterCreateSearch: Ta,
        _fnEscapeRegex: Ua,
        _fnFilterData: Eb,
        _fnFeatureHtmlInfo: xb,
        _fnUpdateInfo: Hb,
        _fnInfoMacros: Ib,
        _fnInitialise: ja,
        _fnInitComplete: xa,
        _fnLengthChange: Va,
        _fnFeatureHtmlLength: tb,
        _fnFeatureHtmlPaginate: yb,
        _fnPageChange: Xa,
        _fnFeatureHtmlProcessing: vb,
        _fnProcessingDisplay: K,
        _fnFeatureHtmlTable: wb,
        _fnScrollDraw: na,
        _fnApplyToChildren: N,
        _fnCalculateColumnWidths: Ja,
        _fnThrottle: Sa,
        _fnConvertToWidth: Jb,
        _fnGetWidestNode: Kb,
        _fnGetMaxLenString: Lb,
        _fnStringToCss: B,
        _fnSortFlatten: Y,
        _fnSort: rb,
        _fnSortAria: Nb,
        _fnSortListener: Za,
        _fnSortAttachListener: Qa,
        _fnSortingClasses: Aa,
        _fnSortData: Mb,
        _fnSaveState: Ba,
        _fnLoadState: Ob,
        _fnSettingsFromNode: Ca,
        _fnLog: O,
        _fnMap: M,
        _fnBindAction: $a,
        _fnCallbackReg: E,
        _fnCallbackFire: A,
        _fnLengthOverflow: Wa,
        _fnRenderer: Ra,
        _fnDataSource: D,
        _fnRowAttributes: Pa,
        _fnExtend: ab,
        _fnCalculateEnd: function () {}
    });
    f.fn.dataTable = q;
    q.$ = f;
    f.fn.dataTableSettings = q.settings;
    f.fn.dataTableExt = q.ext;
    f.fn.DataTable = function (a) {
        return f(this).dataTable(a).api()
    };
    f.each(q, function (a, b) {
        f.fn.DataTable[a] = b
    });
    return f.fn.dataTable
});


/*!
 DataTables Bootstrap 4 integration
 ©2011-2017 SpryMedia Ltd - datatables.net/license
*/
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.findInternal = function (a, b, c) {
    a instanceof String && (a = String(a));
    for (var e = a.length, d = 0; d < e; d++) {
        var k = a[d];
        if (b.call(c, k, d, a)) return {
            i: d,
            v: k
        }
    }
    return {
        i: -1,
        v: void 0
    }
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
    a != Array.prototype && a != Object.prototype && (a[b] = c.value)
};
$jscomp.getGlobal = function (a) {
    return "undefined" != typeof window && window === a ? a : "undefined" != typeof global && null != global ? global : a
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function (a, b, c, e) {
    if (b) {
        c = $jscomp.global;
        a = a.split(".");
        for (e = 0; e < a.length - 1; e++) {
            var d = a[e];
            d in c || (c[d] = {});
            c = c[d]
        }
        a = a[a.length - 1];
        e = c[a];
        b = b(e);
        b != e && null != b && $jscomp.defineProperty(c, a, {
            configurable: !0,
            writable: !0,
            value: b
        })
    }
};
$jscomp.polyfill("Array.prototype.find", function (a) {
    return a ? a : function (a, c) {
        return $jscomp.findInternal(this, a, c).v
    }
}, "es6", "es3");
(function (a) {
    "function" === typeof define && define.amd ? define(["jquery", "datatables.net"], function (b) {
        return a(b, window, document)
    }) : "object" === typeof exports ? module.exports = function (b, c) {
        b || (b = window);
        c && c.fn.dataTable || (c = require("datatables.net")(b, c).$);
        return a(c, b, b.document)
    } : a(jQuery, window, document)
})(function (a, b, c, e) {
    var d = a.fn.dataTable;
    a.extend(!0, d.defaults, {
        dom: "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
        renderer: "bootstrap"
    });
    a.extend(d.ext.classes, {
        sWrapper: "dataTables_wrapper dt-bootstrap4",
        sFilterInput: "form-control form-control-sm",
        sLengthSelect: "custom-select custom-select-sm form-control form-control-sm",
        sProcessing: "dataTables_processing card",
        sPageButton: "paginate_button page-item"
    });
    d.ext.renderer.pageButton.bootstrap = function (b, l, v, w, m, r) {
        var k = new d.Api(b),
            x = b.oClasses,
            n = b.oLanguage.oPaginate,
            y = b.oLanguage.oAria.paginate || {},
            g, h, t = 0,
            u = function (c, d) {
                var e, l = function (b) {
                    b.preventDefault();
                    a(b.currentTarget).hasClass("disabled") || k.page() == b.data.action || k.page(b.data.action).draw("page")
                };
                var q = 0;
                for (e = d.length; q < e; q++) {
                    var f = d[q];
                    if (a.isArray(f)) u(c, f);
                    else {
                        h = g = "";
                        switch (f) {
                            case "ellipsis":
                                g = "&#x2026;";
                                h = "disabled";
                                break;
                            case "first":
                                g = n.sFirst;
                                h = f + (0 < m ? "" : " disabled");
                                break;
                            case "previous":
                                g = n.sPrevious;
                                h = f + (0 < m ? "" : " disabled");
                                break;
                            case "next":
                                g = n.sNext;
                                h = f + (m < r - 1 ? "" : " disabled");
                                break;
                            case "last":
                                g = n.sLast;
                                h = f + (m < r - 1 ? "" : " disabled");
                                break;
                            default:
                                g = f + 1, h = m === f ? "active" : ""
                        }
                        if (g) {
                            var p =
                                a("<li>", {
                                    "class": x.sPageButton + " " + h,
                                    id: 0 === v && "string" === typeof f ? b.sTableId + "_" + f : null
                                }).append(a("<a>", {
                                    href: "#",
                                    "aria-controls": b.sTableId,
                                    "aria-label": y[f],
                                    "data-dt-idx": t,
                                    tabindex: b.iTabIndex,
                                    "class": "page-link"
                                }).html(g)).appendTo(c);
                            b.oApi._fnBindAction(p, {
                                action: f
                            }, l);
                            t++
                        }
                    }
                }
            };
        try {
            var p = a(l).find(c.activeElement).data("dt-idx")
        } catch (z) {}
        u(a(l).empty().html('<ul class="pagination"/>').children("ul"), w);
        p !== e && a(l).find("[data-dt-idx=" + p + "]").focus()
    };
    return d
});


/*!
 Buttons for DataTables 1.6.0
 ©2016-2019 SpryMedia Ltd - datatables.net/license
*/
(function (d) {
    "function" === typeof define && define.amd ? define(["jquery", "datatables.net"], function (u) {
        return d(u, window, document)
    }) : "object" === typeof exports ? module.exports = function (u, t) {
        u || (u = window);
        t && t.fn.dataTable || (t = require("datatables.net")(u, t).$);
        return d(t, u, u.document)
    } : d(jQuery, window, document)
})(function (d, u, t, p) {
    function y(a) {
        a = new m.Api(a);
        var b = a.init().buttons || m.defaults.buttons;
        return (new n(a, b)).container()
    }
    var m = d.fn.dataTable,
        B = 0,
        C = 0,
        q = m.ext.buttons,
        n = function (a, b) {
            if (!(this instanceof n)) return function (b) {
                return (new n(b, a)).container()
            };
            "undefined" === typeof b && (b = {});
            !0 === b && (b = {});
            d.isArray(b) && (b = {
                buttons: b
            });
            this.c = d.extend(!0, {}, n.defaults, b);
            b.buttons && (this.c.buttons = b.buttons);
            this.s = {
                dt: new m.Api(a),
                buttons: [],
                listenKeys: "",
                namespace: "dtb" + B++
            };
            this.dom = {
                container: d("<" + this.c.dom.container.tag + "/>").addClass(this.c.dom.container.className)
            };
            this._constructor()
        };
    d.extend(n.prototype, {
        action: function (a, b) {
            a = this._nodeToButton(a);
            if (b === p) return a.conf.action;
            a.conf.action =
                b;
            return this
        },
        active: function (a, b) {
            var c = this._nodeToButton(a);
            a = this.c.dom.button.active;
            c = d(c.node);
            if (b === p) return c.hasClass(a);
            c.toggleClass(a, b === p ? !0 : b);
            return this
        },
        add: function (a, b) {
            var c = this.s.buttons;
            if ("string" === typeof b) {
                b = b.split("-");
                var e = this.s;
                c = 0;
                for (var d = b.length - 1; c < d; c++) e = e.buttons[1 * b[c]];
                c = e.buttons;
                b = 1 * b[b.length - 1]
            }
            this._expandButton(c, a, e !== p, b);
            this._draw();
            return this
        },
        container: function () {
            return this.dom.container
        },
        disable: function (a) {
            a = this._nodeToButton(a);
            d(a.node).addClass(this.c.dom.button.disabled);
            return this
        },
        destroy: function () {
            d("body").off("keyup." + this.s.namespace);
            var a = this.s.buttons.slice(),
                b;
            var c = 0;
            for (b = a.length; c < b; c++) this.remove(a[c].node);
            this.dom.container.remove();
            a = this.s.dt.settings()[0];
            c = 0;
            for (b = a.length; c < b; c++)
                if (a.inst === this) {
                    a.splice(c, 1);
                    break
                } return this
        },
        enable: function (a, b) {
            if (!1 === b) return this.disable(a);
            a = this._nodeToButton(a);
            d(a.node).removeClass(this.c.dom.button.disabled);
            return this
        },
        name: function () {
            return this.c.name
        },
        node: function (a) {
            if (!a) return this.dom.container;
            a = this._nodeToButton(a);
            return d(a.node)
        },
        processing: function (a, b) {
            var c = this.s.dt,
                e = this._nodeToButton(a);
            if (b === p) return d(e.node).hasClass("processing");
            d(e.node).toggleClass("processing", b);
            d(c.table().node()).triggerHandler("buttons-processing.dt", [b, c.button(a), c, d(a), e.conf]);
            return this
        },
        remove: function (a) {
            var b = this._nodeToButton(a),
                c = this._nodeToHost(a),
                e = this.s.dt;
            if (b.buttons.length)
                for (var g = b.buttons.length - 1; 0 <= g; g--) this.remove(b.buttons[g].node);
            b.conf.destroy && b.conf.destroy.call(e.button(a),
                e, d(a), b.conf);
            this._removeKey(b.conf);
            d(b.node).remove();
            a = d.inArray(b, c);
            c.splice(a, 1);
            return this
        },
        text: function (a, b) {
            var c = this._nodeToButton(a);
            a = this.c.dom.collection.buttonLiner;
            a = c.inCollection && a && a.tag ? a.tag : this.c.dom.buttonLiner.tag;
            var e = this.s.dt,
                g = d(c.node),
                f = function (a) {
                    return "function" === typeof a ? a(e, g, c.conf) : a
                };
            if (b === p) return f(c.conf.text);
            c.conf.text = b;
            a ? g.children(a).html(f(b)) : g.html(f(b));
            return this
        },
        _constructor: function () {
            var a = this,
                b = this.s.dt,
                c = b.settings()[0],
                e = this.c.buttons;
            c._buttons || (c._buttons = []);
            c._buttons.push({
                inst: this,
                name: this.c.name
            });
            for (var g = 0, f = e.length; g < f; g++) this.add(e[g]);
            b.on("destroy", function (b, e) {
                e === c && a.destroy()
            });
            d("body").on("keyup." + this.s.namespace, function (b) {
                if (!t.activeElement || t.activeElement === t.body) {
                    var c = String.fromCharCode(b.keyCode).toLowerCase(); - 1 !== a.s.listenKeys.toLowerCase().indexOf(c) && a._keypress(c, b)
                }
            })
        },
        _addKey: function (a) {
            a.key && (this.s.listenKeys += d.isPlainObject(a.key) ? a.key.key : a.key)
        },
        _draw: function (a, b) {
            a || (a = this.dom.container,
                b = this.s.buttons);
            a.children().detach();
            for (var c = 0, e = b.length; c < e; c++) a.append(b[c].inserter), a.append(" "), b[c].buttons && b[c].buttons.length && this._draw(b[c].collection, b[c].buttons)
        },
        _expandButton: function (a, b, c, e) {
            var g = this.s.dt,
                f = 0;
            b = d.isArray(b) ? b : [b];
            for (var h = 0, k = b.length; h < k; h++) {
                var r = this._resolveExtends(b[h]);
                if (r)
                    if (d.isArray(r)) this._expandButton(a, r, c, e);
                    else {
                        var l = this._buildButton(r, c);
                        l && (e !== p ? (a.splice(e, 0, l), e++) : a.push(l), l.conf.buttons && (l.collection = d("<div/>"), l.conf._collection =
                            l.collection, this._expandButton(l.buttons, l.conf.buttons, !0, e)), r.init && r.init.call(g.button(l.node), g, d(l.node), r), f++)
                    }
            }
        },
        _buildButton: function (a, b) {
            var c = this.c.dom.button,
                e = this.c.dom.buttonLiner,
                g = this.c.dom.collection,
                f = this.s.dt,
                h = function (b) {
                    return "function" === typeof b ? b(f, l, a) : b
                };
            b && g.button && (c = g.button);
            b && g.buttonLiner && (e = g.buttonLiner);
            if (a.available && !a.available(f, a)) return !1;
            var k = function (a, b, c, e) {
                e.action.call(b.button(c), a, b, c, e);
                d(b.table().node()).triggerHandler("buttons-action.dt",
                    [b.button(c), b, c, e])
            };
            g = a.tag || c.tag;
            var r = a.clickBlurs === p ? !0 : a.clickBlurs,
                l = d("<" + g + "/>").addClass(c.className).attr("tabindex", this.s.dt.settings()[0].iTabIndex).attr("aria-controls", this.s.dt.table().node().id).on("click.dtb", function (b) {
                    b.preventDefault();
                    !l.hasClass(c.disabled) && a.action && k(b, f, l, a);
                    r && l.blur()
                }).on("keyup.dtb", function (b) {
                    13 === b.keyCode && !l.hasClass(c.disabled) && a.action && k(b, f, l, a)
                });
            "a" === g.toLowerCase() && l.attr("href", "#");
            "button" === g.toLowerCase() && l.attr("type", "button");
            e.tag ? (g = d("<" + e.tag + "/>").html(h(a.text)).addClass(e.className), "a" === e.tag.toLowerCase() && g.attr("href", "#"), l.append(g)) : l.html(h(a.text));
            !1 === a.enabled && l.addClass(c.disabled);
            a.className && l.addClass(a.className);
            a.titleAttr && l.attr("title", h(a.titleAttr));
            a.attr && l.attr(a.attr);
            a.namespace || (a.namespace = ".dt-button-" + C++);
            e = (e = this.c.dom.buttonContainer) && e.tag ? d("<" + e.tag + "/>").addClass(e.className).append(l) : l;
            this._addKey(a);
            this.c.buttonCreated && (e = this.c.buttonCreated(a, e));
            return {
                conf: a,
                node: l.get(0),
                inserter: e,
                buttons: [],
                inCollection: b,
                collection: null
            }
        },
        _nodeToButton: function (a, b) {
            b || (b = this.s.buttons);
            for (var c = 0, e = b.length; c < e; c++) {
                if (b[c].node === a) return b[c];
                if (b[c].buttons.length) {
                    var d = this._nodeToButton(a, b[c].buttons);
                    if (d) return d
                }
            }
        },
        _nodeToHost: function (a, b) {
            b || (b = this.s.buttons);
            for (var c = 0, e = b.length; c < e; c++) {
                if (b[c].node === a) return b;
                if (b[c].buttons.length) {
                    var d = this._nodeToHost(a, b[c].buttons);
                    if (d) return d
                }
            }
        },
        _keypress: function (a, b) {
            if (!b._buttonsHandled) {
                var c =
                    function (e) {
                        for (var g = 0, f = e.length; g < f; g++) {
                            var h = e[g].conf,
                                k = e[g].node;
                            h.key && (h.key === a ? (b._buttonsHandled = !0, d(k).click()) : !d.isPlainObject(h.key) || h.key.key !== a || h.key.shiftKey && !b.shiftKey || h.key.altKey && !b.altKey || h.key.ctrlKey && !b.ctrlKey || h.key.metaKey && !b.metaKey || (b._buttonsHandled = !0, d(k).click()));
                            e[g].buttons.length && c(e[g].buttons)
                        }
                    };
                c(this.s.buttons)
            }
        },
        _removeKey: function (a) {
            if (a.key) {
                var b = d.isPlainObject(a.key) ? a.key.key : a.key;
                a = this.s.listenKeys.split("");
                b = d.inArray(b, a);
                a.splice(b,
                    1);
                this.s.listenKeys = a.join("")
            }
        },
        _resolveExtends: function (a) {
            var b = this.s.dt,
                c, e = function (c) {
                    for (var e = 0; !d.isPlainObject(c) && !d.isArray(c);) {
                        if (c === p) return;
                        if ("function" === typeof c) {
                            if (c = c(b, a), !c) return !1
                        } else if ("string" === typeof c) {
                            if (!q[c]) throw "Unknown button type: " + c;
                            c = q[c]
                        }
                        e++;
                        if (30 < e) throw "Buttons: Too many iterations";
                    }
                    return d.isArray(c) ? c : d.extend({}, c)
                };
            for (a = e(a); a && a.extend;) {
                if (!q[a.extend]) throw "Cannot extend unknown button type: " + a.extend;
                var g = e(q[a.extend]);
                if (d.isArray(g)) return g;
                if (!g) return !1;
                var f = g.className;
                a = d.extend({}, g, a);
                f && a.className !== f && (a.className = f + " " + a.className);
                var h = a.postfixButtons;
                if (h) {
                    a.buttons || (a.buttons = []);
                    f = 0;
                    for (c = h.length; f < c; f++) a.buttons.push(h[f]);
                    a.postfixButtons = null
                }
                if (h = a.prefixButtons) {
                    a.buttons || (a.buttons = []);
                    f = 0;
                    for (c = h.length; f < c; f++) a.buttons.splice(f, 0, h[f]);
                    a.prefixButtons = null
                }
                a.extend = g.extend
            }
            return a
        },
        _popover: function (a, b, c) {
            var e = this.c,
                g = d.extend({
                    align: "button-left",
                    autoClose: !1,
                    background: !0,
                    backgroundClassName: "dt-button-background",
                    contentClassName: e.dom.collection.className,
                    collectionLayout: "",
                    collectionTitle: "",
                    dropup: !1,
                    fade: 400,
                    rightAlignClassName: "dt-button-right",
                    tag: e.dom.collection.tag
                }, c),
                f = b.node(),
                h = function () {
                    d(".dt-button-collection").stop().fadeOut(g.fade, function () {
                        d(this).detach()
                    });
                    d(b.buttons('[aria-haspopup="true"][aria-expanded="true"]').nodes()).attr("aria-expanded", "false");
                    d("div.dt-button-background").off("click.dtb-collection");
                    n.background(!1, g.backgroundClassName, g.fade, f);
                    d("body").off(".dtb-collection");
                    b.off("buttons-action.b-internal")
                };
            !1 === a && h();
            c = d(b.buttons('[aria-haspopup="true"][aria-expanded="true"]').nodes());
            c.length && (f = c.eq(0), h());
            a = d(a);
            var k = d(b.table().container());
            f.attr("aria-expanded", "true");
            f.parents("body")[0] !== t.body && (f = t.body.lastChild);
            c = d("<" + g.tag + "/>").addClass(g.contentClassName).attr("role", "menu");
            g.collectionTitle && c.prepend('<div class="dt-button-collection-title">' + g.collectionTitle + "</div>");
            c.addClass(g.collectionLayout).css("display", "none").append(a).insertAfter(f).stop().fadeIn(g.fade);
            e = c.css("position");
            "dt-container" === g.align && (f = f.parent(), c.css("width", k.width()));
            if ("absolute" === e) {
                e = f.position();
                c.css({
                    top: e.top + f.outerHeight(),
                    left: e.left
                });
                var r = c.outerHeight(),
                    l = c.outerWidth(),
                    w = k.offset().top + k.height();
                w = e.top + f.outerHeight() + r - w;
                var D = e.top - r,
                    m = k.offset().top;
                r = e.top - r - 5;
                (w > m - D || g.dropup) && -r < m && c.css("top", r);
                (c.hasClass(g.rightAlignClassName) || "button-right" === g.align) && c.css("left", e.left + f.outerWidth() - l);
                r = e.left + l;
                k = k.offset().left + k.width();
                r > k && c.css("left",
                    e.left - (r - k));
                k = f.offset().left + l;
                k > d(u).width() && c.css("left", e.left - (k - d(u).width()))
            } else e = c.height() / 2, e > d(u).height() / 2 && (e = d(u).height() / 2), c.css("marginTop", -1 * e);
            g.background && n.background(!0, g.backgroundClassName, g.fade, f);
            d("div.dt-button-background").on("click.dtb-collection", function () {});
            d("body").on("click.dtb-collection", function (b) {
                var c = d.fn.addBack ? "addBack" : "andSelf";
                d(b.target).parents()[c]().filter(a).length || h()
            }).on("keyup.dtb-collection", function (a) {
                27 === a.keyCode && h()
            });
            g.autoClose && setTimeout(function () {
                b.on("buttons-action.b-internal", function (a, b, c, e) {
                    e[0] !== f[0] && h()
                })
            }, 0)
        }
    });
    n.background = function (a, b, c, e) {
        c === p && (c = 400);
        e || (e = t.body);
        a ? d("<div/>").addClass(b).css("display", "none").insertAfter(e).stop().fadeIn(c) : d("div." + b).stop().fadeOut(c, function () {
            d(this).removeClass(b).remove()
        })
    };
    n.instanceSelector = function (a, b) {
        if (a === p || null === a) return d.map(b, function (a) {
            return a.inst
        });
        var c = [],
            e = d.map(b, function (a) {
                return a.name
            }),
            g = function (a) {
                if (d.isArray(a))
                    for (var f =
                            0, k = a.length; f < k; f++) g(a[f]);
                else "string" === typeof a ? -1 !== a.indexOf(",") ? g(a.split(",")) : (a = d.inArray(d.trim(a), e), -1 !== a && c.push(b[a].inst)) : "number" === typeof a && c.push(b[a].inst)
            };
        g(a);
        return c
    };
    n.buttonSelector = function (a, b) {
        for (var c = [], e = function (a, b, c) {
                for (var d, g, f = 0, k = b.length; f < k; f++)
                    if (d = b[f]) g = c !== p ? c + f : f + "", a.push({
                        node: d.node,
                        name: d.conf.name,
                        idx: g
                    }), d.buttons && e(a, d.buttons, g + "-")
            }, g = function (a, b) {
                var f, h = [];
                e(h, b.s.buttons);
                var k = d.map(h, function (a) {
                    return a.node
                });
                if (d.isArray(a) ||
                    a instanceof d)
                    for (k = 0, f = a.length; k < f; k++) g(a[k], b);
                else if (null === a || a === p || "*" === a)
                    for (k = 0, f = h.length; k < f; k++) c.push({
                        inst: b,
                        node: h[k].node
                    });
                else if ("number" === typeof a) c.push({
                    inst: b,
                    node: b.s.buttons[a].node
                });
                else if ("string" === typeof a)
                    if (-1 !== a.indexOf(","))
                        for (h = a.split(","), k = 0, f = h.length; k < f; k++) g(d.trim(h[k]), b);
                    else if (a.match(/^\d+(\-\d+)*$/)) k = d.map(h, function (a) {
                    return a.idx
                }), c.push({
                    inst: b,
                    node: h[d.inArray(a, k)].node
                });
                else if (-1 !== a.indexOf(":name"))
                    for (a = a.replace(":name", ""), k =
                        0, f = h.length; k < f; k++) h[k].name === a && c.push({
                        inst: b,
                        node: h[k].node
                    });
                else d(k).filter(a).each(function () {
                    c.push({
                        inst: b,
                        node: this
                    })
                });
                else "object" === typeof a && a.nodeName && (h = d.inArray(a, k), -1 !== h && c.push({
                    inst: b,
                    node: k[h]
                }))
            }, f = 0, h = a.length; f < h; f++) g(b, a[f]);
        return c
    };
    n.defaults = {
        buttons: ["copy", "excel", "csv", "pdf", "print"],
        name: "main",
        tabIndex: 0,
        dom: {
            container: {
                tag: "div",
                className: "dt-buttons"
            },
            collection: {
                tag: "div",
                className: "dt-button-collection"
            },
            button: {
                tag: "ActiveXObject" in u ? "a" : "button",
                className: "dt-button",
                active: "active",
                disabled: "disabled"
            },
            buttonLiner: {
                tag: "span",
                className: ""
            }
        }
    };
    n.version = "1.6.0";
    d.extend(q, {
        collection: {
            text: function (a) {
                return a.i18n("buttons.collection", "Collection")
            },
            className: "buttons-collection",
            init: function (a, b, c) {
                b.attr("aria-expanded", !1)
            },
            action: function (a, b, c, e) {
                a.stopPropagation();
                e._collection.parents("body").length ? this.popover(!1, e) : this.popover(e._collection, e)
            },
            attr: {
                "aria-haspopup": !0
            }
        },
        copy: function (a, b) {
            if (q.copyHtml5) return "copyHtml5";
            if (q.copyFlash && q.copyFlash.available(a,
                    b)) return "copyFlash"
        },
        csv: function (a, b) {
            if (q.csvHtml5 && q.csvHtml5.available(a, b)) return "csvHtml5";
            if (q.csvFlash && q.csvFlash.available(a, b)) return "csvFlash"
        },
        excel: function (a, b) {
            if (q.excelHtml5 && q.excelHtml5.available(a, b)) return "excelHtml5";
            if (q.excelFlash && q.excelFlash.available(a, b)) return "excelFlash"
        },
        pdf: function (a, b) {
            if (q.pdfHtml5 && q.pdfHtml5.available(a, b)) return "pdfHtml5";
            if (q.pdfFlash && q.pdfFlash.available(a, b)) return "pdfFlash"
        },
        pageLength: function (a) {
            a = a.settings()[0].aLengthMenu;
            var b = d.isArray(a[0]) ?
                a[0] : a,
                c = d.isArray(a[0]) ? a[1] : a;
            return {
                extend: "collection",
                text: function (a) {
                    return a.i18n("buttons.pageLength", {
                        "-1": "Show all rows",
                        _: "Show %d rows"
                    }, a.page.len())
                },
                className: "buttons-page-length",
                autoClose: !0,
                buttons: d.map(b, function (a, b) {
                    return {
                        text: c[b],
                        className: "button-page-length",
                        action: function (b, c) {
                            c.page.len(a).draw()
                        },
                        init: function (b, c, d) {
                            var e = this;
                            c = function () {
                                e.active(b.page.len() === a)
                            };
                            b.on("length.dt" + d.namespace, c);
                            c()
                        },
                        destroy: function (a, b, c) {
                            a.off("length.dt" + c.namespace)
                        }
                    }
                }),
                init: function (a, b, c) {
                    var d = this;
                    a.on("length.dt" + c.namespace, function () {
                        d.text(c.text)
                    })
                },
                destroy: function (a, b, c) {
                    a.off("length.dt" + c.namespace)
                }
            }
        }
    });
    m.Api.register("buttons()", function (a, b) {
        b === p && (b = a, a = p);
        this.selector.buttonGroup = a;
        var c = this.iterator(!0, "table", function (c) {
            if (c._buttons) return n.buttonSelector(n.instanceSelector(a, c._buttons), b)
        }, !0);
        c._groupSelector = a;
        return c
    });
    m.Api.register("button()", function (a, b) {
        a = this.buttons(a, b);
        1 < a.length && a.splice(1, a.length);
        return a
    });
    m.Api.registerPlural("buttons().active()",
        "button().active()",
        function (a) {
            return a === p ? this.map(function (a) {
                return a.inst.active(a.node)
            }) : this.each(function (b) {
                b.inst.active(b.node, a)
            })
        });
    m.Api.registerPlural("buttons().action()", "button().action()", function (a) {
        return a === p ? this.map(function (a) {
            return a.inst.action(a.node)
        }) : this.each(function (b) {
            b.inst.action(b.node, a)
        })
    });
    m.Api.register(["buttons().enable()", "button().enable()"], function (a) {
        return this.each(function (b) {
            b.inst.enable(b.node, a)
        })
    });
    m.Api.register(["buttons().disable()",
        "button().disable()"
    ], function () {
        return this.each(function (a) {
            a.inst.disable(a.node)
        })
    });
    m.Api.registerPlural("buttons().nodes()", "button().node()", function () {
        var a = d();
        d(this.each(function (b) {
            a = a.add(b.inst.node(b.node))
        }));
        return a
    });
    m.Api.registerPlural("buttons().processing()", "button().processing()", function (a) {
        return a === p ? this.map(function (a) {
            return a.inst.processing(a.node)
        }) : this.each(function (b) {
            b.inst.processing(b.node, a)
        })
    });
    m.Api.registerPlural("buttons().text()", "button().text()", function (a) {
        return a ===
            p ? this.map(function (a) {
                return a.inst.text(a.node)
            }) : this.each(function (b) {
                b.inst.text(b.node, a)
            })
    });
    m.Api.registerPlural("buttons().trigger()", "button().trigger()", function () {
        return this.each(function (a) {
            a.inst.node(a.node).trigger("click")
        })
    });
    m.Api.register("button().popover()", function (a, b) {
        return this.map(function (c) {
            return c.inst._popover(a, this.button(this[0].node), b)
        })
    });
    m.Api.register("buttons().containers()", function () {
        var a = d(),
            b = this._groupSelector;
        this.iterator(!0, "table", function (c) {
            if (c._buttons) {
                c =
                    n.instanceSelector(b, c._buttons);
                for (var d = 0, g = c.length; d < g; d++) a = a.add(c[d].container())
            }
        });
        return a
    });
    m.Api.register("buttons().container()", function () {
        return this.containers().eq(0)
    });
    m.Api.register("button().add()", function (a, b) {
        var c = this.context;
        c.length && (c = n.instanceSelector(this._groupSelector, c[0]._buttons), c.length && c[0].add(b, a));
        return this.button(this._groupSelector, a)
    });
    m.Api.register("buttons().destroy()", function () {
        this.pluck("inst").unique().each(function (a) {
            a.destroy()
        });
        return this
    });
    m.Api.registerPlural("buttons().remove()", "buttons().remove()", function () {
        this.each(function (a) {
            a.inst.remove(a.node)
        });
        return this
    });
    var v;
    m.Api.register("buttons.info()", function (a, b, c) {
        var e = this;
        if (!1 === a) return this.off("destroy.btn-info"), d("#datatables_buttons_info").fadeOut(function () {
            d(this).remove()
        }), clearTimeout(v), v = null, this;
        v && clearTimeout(v);
        d("#datatables_buttons_info").length && d("#datatables_buttons_info").remove();
        a = a ? "<h2>" + a + "</h2>" : "";
        d('<div id="datatables_buttons_info" class="dt-button-info"/>').html(a).append(d("<div/>")["string" ===
            typeof b ? "html" : "append"](b)).css("display", "none").appendTo("body").fadeIn();
        c !== p && 0 !== c && (v = setTimeout(function () {
            e.buttons.info(!1)
        }, c));
        this.on("destroy.btn-info", function () {
            e.buttons.info(!1)
        });
        return this
    });
    m.Api.register("buttons.exportData()", function (a) {
        if (this.context.length) return E(new m.Api(this.context[0]), a)
    });
    m.Api.register("buttons.exportInfo()", function (a) {
        a || (a = {});
        var b = a;
        var c = "*" === b.filename && "*" !== b.title && b.title !== p && null !== b.title && "" !== b.title ? b.title : b.filename;
        "function" ===
        typeof c && (c = c());
        c === p || null === c ? c = null : (-1 !== c.indexOf("*") && (c = d.trim(c.replace("*", d("head > title").text()))), c = c.replace(/[^a-zA-Z0-9_\u00A1-\uFFFF\.,\-_ !\(\)]/g, ""), (b = x(b.extension)) || (b = ""), c += b);
        b = x(a.title);
        b = null === b ? null : -1 !== b.indexOf("*") ? b.replace("*", d("head > title").text() || "Exported data") : b;
        return {
            filename: c,
            title: b,
            messageTop: z(this, a.message || a.messageTop, "top"),
            messageBottom: z(this, a.messageBottom, "bottom")
        }
    });
    var x = function (a) {
            return null === a || a === p ? null : "function" === typeof a ?
                a() : a
        },
        z = function (a, b, c) {
            b = x(b);
            if (null === b) return null;
            a = d("caption", a.table().container()).eq(0);
            return "*" === b ? a.css("caption-side") !== c ? null : a.length ? a.text() : "" : b
        },
        A = d("<textarea/>")[0],
        E = function (a, b) {
            var c = d.extend(!0, {}, {
                    rows: null,
                    columns: "",
                    modifier: {
                        search: "applied",
                        order: "applied"
                    },
                    orthogonal: "display",
                    stripHtml: !0,
                    stripNewlines: !0,
                    decodeEntities: !0,
                    trim: !0,
                    format: {
                        header: function (a) {
                            return e(a)
                        },
                        footer: function (a) {
                            return e(a)
                        },
                        body: function (a) {
                            return e(a)
                        }
                    },
                    customizeData: null
                }, b),
                e = function (a) {
                    if ("string" !==
                        typeof a) return a;
                    a = a.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
                    a = a.replace(/<!\-\-.*?\-\->/g, "");
                    c.stripHtml && (a = a.replace(/<[^>]*>/g, ""));
                    c.trim && (a = a.replace(/^\s+|\s+$/g, ""));
                    c.stripNewlines && (a = a.replace(/\n/g, " "));
                    c.decodeEntities && (A.innerHTML = a, a = A.value);
                    return a
                };
            b = a.columns(c.columns).indexes().map(function (b) {
                var d = a.column(b).header();
                return c.format.header(d.innerHTML, b, d)
            }).toArray();
            var g = a.table().footer() ? a.columns(c.columns).indexes().map(function (b) {
                    var d =
                        a.column(b).footer();
                    return c.format.footer(d ? d.innerHTML : "", b, d)
                }).toArray() : null,
                f = d.extend({}, c.modifier);
            a.select && "function" === typeof a.select.info && f.selected === p && a.rows(c.rows, d.extend({
                selected: !0
            }, f)).any() && d.extend(f, {
                selected: !0
            });
            f = a.rows(c.rows, f).indexes().toArray();
            var h = a.cells(f, c.columns);
            f = h.render(c.orthogonal).toArray();
            h = h.nodes().toArray();
            for (var k = b.length, m = [], l = 0, n = 0, q = 0 < k ? f.length / k : 0; n < q; n++) {
                for (var u = [k], t = 0; t < k; t++) u[t] = c.format.body(f[l], n, t, h[l]), l++;
                m[n] = u
            }
            b = {
                header: b,
                footer: g,
                body: m
            };
            c.customizeData && c.customizeData(b);
            return b
        };
    d.fn.dataTable.Buttons = n;
    d.fn.DataTable.Buttons = n;
    d(t).on("init.dt plugin-init.dt", function (a, b) {
        "dt" === a.namespace && (a = b.oInit.buttons || m.defaults.buttons) && !b._buttons && (new n(b, a)).container()
    });
    m.ext.feature.push({
        fnInit: y,
        cFeature: "B"
    });
    m.ext.features && m.ext.features.register("buttons", y);
    return n
});


/*!
 Bootstrap integration for DataTables' Buttons
 ©2016 SpryMedia Ltd - datatables.net/license
*/
(function (c) {
    "function" === typeof define && define.amd ? define(["jquery", "datatables.net-bs4", "datatables.net-buttons"], function (a) {
        return c(a, window, document)
    }) : "object" === typeof exports ? module.exports = function (a, b) {
        a || (a = window);
        b && b.fn.dataTable || (b = require("datatables.net-bs4")(a, b).$);
        b.fn.dataTable.Buttons || require("datatables.net-buttons")(a, b);
        return c(b, a, a.document)
    } : c(jQuery, window, document)
})(function (c, a, b, d) {
    a = c.fn.dataTable;
    c.extend(!0, a.Buttons.defaults, {
        dom: {
            container: {
                className: "d-flex align-items-center justify-content-center"
            },
            button: {
                className: "d-none d-sm-inline-block btn btn-sm btn-okt-dark shadow-sm m-3"
            },
            collection: {
                tag: "div",
                className: "dt-button-collection dropdown-menu",
                button: {
                    tag: "a",
                    className: "dt-button dropdown-item",
                    active: "active",
                    disabled: "disabled"
                }
            }
        },
        buttonCreated: function (a, b) {
            return a.buttons ? c('<div class="btn-group"/>').append(b) : b
        }
    });
    a.ext.buttons.collection.className += " dropdown-toggle";
    a.ext.buttons.collection.rightAlignClassName = "dropdown-menu-right";
    return a.Buttons
});


/*!
 HTML5 export buttons for Buttons and DataTables.
 2016 SpryMedia Ltd - datatables.net/license

 FileSaver.js (1.3.3) - MIT license
 Copyright © 2016 Eli Grey - http://eligrey.com
*/
(function (f) {
    "function" === typeof define && define.amd ? define(["jquery", "datatables.net", "datatables.net-buttons"], function (g) {
        return f(g, window, document)
    }) : "object" === typeof exports ? module.exports = function (g, p, z, t) {
        g || (g = window);
        p && p.fn.dataTable || (p = require("datatables.net")(g, p).$);
        p.fn.dataTable.Buttons || require("datatables.net-buttons")(g, p);
        return f(p, g, g.document, z, t)
    } : f(jQuery, window, document)
})(function (f, g, p, z, t, w) {
    function A(a) {
        for (var b = ""; 0 <= a;) b = String.fromCharCode(a % 26 + 65) + b, a = Math.floor(a /
            26) - 1;
        return b
    }

    function E(a, b) {
        y === w && (y = -1 === C.serializeToString(f.parseXML(F["xl/worksheets/sheet1.xml"])).indexOf("xmlns:r"));
        f.each(b, function (b, c) {
            if (f.isPlainObject(c)) b = a.folder(b), E(b, c);
            else {
                if (y) {
                    var d = c.childNodes[0],
                        e, h = [];
                    for (e = d.attributes.length - 1; 0 <= e; e--) {
                        var m = d.attributes[e].nodeName;
                        var k = d.attributes[e].nodeValue; - 1 !== m.indexOf(":") && (h.push({
                            name: m,
                            value: k
                        }), d.removeAttribute(m))
                    }
                    e = 0;
                    for (m = h.length; e < m; e++) k = c.createAttribute(h[e].name.replace(":", "_dt_b_namespace_token_")),
                        k.value = h[e].value, d.setAttributeNode(k)
                }
                c = C.serializeToString(c);
                y && (-1 === c.indexOf("<?xml") && (c = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' + c), c = c.replace(/_dt_b_namespace_token_/g, ":"), c = c.replace(/xmlns:NS[\d]+="" NS[\d]+:/g, ""));
                c = c.replace(/<([^<>]*?) xmlns=""([^<>]*?)>/g, "<$1 $2>");
                a.file(b, c)
            }
        })
    }

    function r(a, b, d) {
        var c = a.createElement(b);
        d && (d.attr && f(c).attr(d.attr), d.children && f.each(d.children, function (a, b) {
            c.appendChild(b)
        }), null !== d.text && d.text !== w && c.appendChild(a.createTextNode(d.text)));
        return c
    }

    function L(a, b) {
        var d = a.header[b].length;
        a.footer && a.footer[b].length > d && (d = a.footer[b].length);
        for (var c = 0, f = a.body.length; c < f; c++) {
            var e = a.body[c][b];
            e = null !== e && e !== w ? e.toString() : ""; - 1 !== e.indexOf("\n") ? (e = e.split("\n"), e.sort(function (a, c) {
                return c.length - a.length
            }), e = e[0].length) : e = e.length;
            e > d && (d = e);
            if (40 < d) return 54
        }
        d *= 1.35;
        return 6 < d ? d : 6
    }
    var v = f.fn.dataTable;
    v.Buttons.pdfMake = function (a) {
        if (!a) return t || g.pdfMake;
        t = m_ake
    };
    v.Buttons.jszip = function (a) {
        if (!a) return z || g.JSZip;
        z = a
    };
    var B = function (a) {
        if (!("undefined" === typeof a || "undefined" !== typeof navigator && /MSIE [1-9]\./.test(navigator.userAgent))) {
            var b = a.document.createElementNS("http://www.w3.org/1999/xhtml", "a"),
                d = "download" in b,
                c = /constructor/i.test(a.HTMLElement) || a.safari,
                f = /CriOS\/[\d]+/.test(navigator.userAgent),
                e = function (c) {
                    (a.setImmediate || a.setTimeout)(function () {
                        throw c;
                    }, 0)
                },
                h = function (c) {
                    setTimeout(function () {
                        "string" === typeof c ? (a.URL || a.webkitURL || a).revokeObjectURL(c) : c.remove()
                    }, 4E4)
                },
                m = function (a) {
                    return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type) ?
                        new Blob([String.fromCharCode(65279), a], {
                            type: a.type
                        }) : a
                },
                k = function (k, q, n) {
                    n || (k = m(k));
                    var l = this,
                        g = "application/octet-stream" === k.type,
                        D = function () {
                            var a = ["writestart", "progress", "write", "writeend"];
                            a = [].concat(a);
                            for (var c = a.length; c--;) {
                                var b = l["on" + a[c]];
                                if ("function" === typeof b) try {
                                    b.call(l, l)
                                } catch (M) {
                                    e(M)
                                }
                            }
                        };
                    l.readyState = l.INIT;
                    if (d) {
                        var u = (a.URL || a.webkitURL || a).createObjectURL(k);
                        setTimeout(function () {
                            b.href = u;
                            b.download = q;
                            var a = new MouseEvent("click");
                            b.dispatchEvent(a);
                            D();
                            h(u);
                            l.readyState =
                                l.DONE
                        })
                    } else(function () {
                        if ((f || g && c) && a.FileReader) {
                            var b = new FileReader;
                            b.onloadend = function () {
                                var c = f ? b.result : b.result.replace(/^data:[^;]*;/, "data:attachment/file;");
                                a.open(c, "_blank") || (a.location.href = c);
                                l.readyState = l.DONE;
                                D()
                            };
                            b.readAsDataURL(k);
                            l.readyState = l.INIT
                        } else u || (u = (a.URL || a.webkitURL || a).createObjectURL(k)), g ? a.location.href = u : a.open(u, "_blank") || (a.location.href = u), l.readyState = l.DONE, D(), h(u)
                    })()
                },
                n = k.prototype;
            if ("undefined" !== typeof navigator && navigator.msSaveOrOpenBlob) return function (a,
                c, b) {
                c = c || a.name || "download";
                b || (a = m(a));
                return navigator.msSaveOrOpenBlob(a, c)
            };
            n.abort = function () {};
            n.readyState = n.INIT = 0;
            n.WRITING = 1;
            n.DONE = 2;
            n.error = n.onwritestart = n.onprogress = n.onwrite = n.onabort = n.onerror = n.onwriteend = null;
            return function (a, c, b) {
                return new k(a, c || a.name || "download", b)
            }
        }
    }("undefined" !== typeof self && self || "undefined" !== typeof g && g || this.content);
    v.fileSave = B;
    var G = function (a) {
            var b = "Sheet1";
            a.sheetName && (b = a.sheetName.replace(/[\[\]\*\/\\\?:]/g, ""));
            return b
        },
        H = function (a) {
            return a.newline ?
                a.newline : navigator.userAgent.match(/Windows/) ? "\r\n" : "\n"
        },
        I = function (a, b) {
            var d = H(b);
            a = a.buttons.exportData(b.exportOptions);
            var c = b.fieldBoundary,
                f = b.fieldSeparator,
                e = new RegExp(c, "g"),
                h = b.escapeChar !== w ? b.escapeChar : "\\",
                m = function (a) {
                    for (var b = "", d = 0, m = a.length; d < m; d++) 0 < d && (b += f), b += c ? c + ("" + a[d]).replace(e, h + c) + c : a[d];
                    return b
                },
                k = b.header ? m(a.header) + d : "";
            b = b.footer && a.footer ? d + m(a.footer) : "";
            for (var n = [], g = 0, q = a.body.length; g < q; g++) n.push(m(a.body[g]));
            return {
                str: k + n.join(d) + b,
                rows: n.length
            }
        },
        J = function () {
            if (-1 === navigator.userAgent.indexOf("Safari") || -1 !== navigator.userAgent.indexOf("Chrome") || -1 !== navigator.userAgent.indexOf("Opera")) return !1;
            var a = navigator.userAgent.match(/AppleWebKit\/(\d+\.\d+)/);
            return a && 1 < a.length && 603.1 > 1 * a[1] ? !0 : !1
        };
    try {
        var C = new XMLSerializer,
            y
    } catch (a) {}
    var F = {
            "_rels/.rels": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>',
            "xl/_rels/workbook.xml.rels": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>',
            "[Content_Types].xml": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="xml" ContentType="application/xml" /><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml" /><Default Extension="jpeg" ContentType="image/jpeg" /><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml" /><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml" /><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml" /></Types>',
            "xl/workbook.xml": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><fileVersion appName="xl" lastEdited="5" lowestEdited="5" rupBuild="24816"/><workbookPr showInkAnnotation="0" autoCompressPictures="0"/><bookViews><workbookView xWindow="0" yWindow="0" windowWidth="25600" windowHeight="19020" tabRatio="500"/></bookViews><sheets><sheet name="Sheet1" sheetId="1" r:id="rId1"/></sheets><definedNames/></workbook>',
            "xl/worksheets/sheet1.xml": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><sheetData/><mergeCells count="0"/></worksheet>',
            "xl/styles.xml": '<?xml version="1.0" encoding="UTF-8"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><numFmts count="6"><numFmt numFmtId="164" formatCode="#,##0.00_- [$$-45C]"/><numFmt numFmtId="165" formatCode="&quot;£&quot;#,##0.00"/><numFmt numFmtId="166" formatCode="[$€-2] #,##0.00"/><numFmt numFmtId="167" formatCode="0.0%"/><numFmt numFmtId="168" formatCode="#,##0;(#,##0)"/><numFmt numFmtId="169" formatCode="#,##0.00;(#,##0.00)"/></numFmts><fonts count="5" x14ac:knownFonts="1"><font><sz val="11" /><name val="Calibri" /></font><font><sz val="11" /><name val="Calibri" /><color rgb="FFFFFFFF" /></font><font><sz val="11" /><name val="Calibri" /><b /></font><font><sz val="11" /><name val="Calibri" /><i /></font><font><sz val="11" /><name val="Calibri" /><u /></font></fonts><fills count="6"><fill><patternFill patternType="none" /></fill><fill><patternFill patternType="none" /></fill><fill><patternFill patternType="solid"><fgColor rgb="FFD9D9D9" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFD99795" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="ffc6efce" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="ffc6cfef" /><bgColor indexed="64" /></patternFill></fill></fills><borders count="2"><border><left /><right /><top /><bottom /><diagonal /></border><border diagonalUp="false" diagonalDown="false"><left style="thin"><color auto="1" /></left><right style="thin"><color auto="1" /></right><top style="thin"><color auto="1" /></top><bottom style="thin"><color auto="1" /></bottom><diagonal /></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" /></cellStyleXfs><cellXfs count="67"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="left"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="center"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="right"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="fill"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment textRotation="90"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment wrapText="1"/></xf><xf numFmtId="9"   fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="164" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="165" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="166" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="167" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="168" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="169" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="3" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="4" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="1" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="2" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/></cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0" /></cellStyles><dxfs count="0" /><tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4" /></styleSheet>'
        },
        K = [{
                match: /^\-?\d+\.\d%$/,
                style: 60,
                fmt: function (a) {
                    return a / 100
                }
            }, {
                match: /^\-?\d+\.?\d*%$/,
                style: 56,
                fmt: function (a) {
                    return a / 100
                }
            }, {
                match: /^\-?\$[\d,]+.?\d*$/,
                style: 57
            }, {
                match: /^\-?£[\d,]+.?\d*$/,
                style: 58
            }, {
                match: /^\-?€[\d,]+.?\d*$/,
                style: 59
            }, {
                match: /^\-?\d+$/,
                style: 65
            }, {
                match: /^\-?\d+\.\d{2}$/,
                style: 66
            }, {
                match: /^\([\d,]+\)$/,
                style: 61,
                fmt: function (a) {
                    return -1 * a.replace(/[\(\)]/g, "")
                }
            }, {
                match: /^\([\d,]+\.\d{2}\)$/,
                style: 62,
                fmt: function (a) {
                    return -1 * a.replace(/[\(\)]/g, "")
                }
            }, {
                match: /^\-?[\d,]+$/,
                style: 63
            },
            {
                match: /^\-?[\d,]+\.\d{2}$/,
                style: 64
            }
        ];
    v.ext.buttons.copyHtml5 = {
        className: "buttons-copy buttons-html5",
        text: function (a) {
            return a.i18n("buttons.copy", "Copy")
        },
        action: function (a, b, d, c) {
            this.processing(!0);
            var g = this;
            a = I(b, c);
            var e = b.buttons.exportInfo(c),
                h = H(c),
                m = a.str;
            d = f("<div/>").css({
                height: 1,
                width: 1,
                overflow: "hidden",
                position: "fixed",
                top: 0,
                left: 0
            });
            e.title && (m = e.title + h + h + m);
            e.messageTop && (m = e.messageTop + h + h + m);
            e.messageBottom && (m = m + h + h + e.messageBottom);
            c.customize && (m = c.customize(m, c, b));
            c = f("<textarea readonly/>").val(m).appendTo(d);
            if (p.queryCommandSupported("copy")) {
                d.appendTo(b.table().container());
                c[0].focus();
                c[0].select();
                try {
                    var k = p.execCommand("copy");
                    d.remove();
                    if (k) {
                        b.buttons.info(b.i18n("buttons.copyTitle", "Copy to clipboard"), b.i18n("buttons.copySuccess", {
                            1: "Copied one row to clipboard",
                            _: "Copied %d rows to clipboard"
                        }, a.rows), 2E3);
                        this.processing(!1);
                        return
                    }
                } catch (q) {}
            }
            k = f("<span>" + b.i18n("buttons.copyKeys", "Press <i>ctrl</i> or <i>⌘</i> + <i>C</i> to copy the table data<br>to your system clipboard.<br><br>To cancel, click this message or press escape.") +
                "</span>").append(d);
            b.buttons.info(b.i18n("buttons.copyTitle", "Copy to clipboard"), k, 0);
            c[0].focus();
            c[0].select();
            var n = f(k).closest(".dt-button-info"),
                r = function () {
                    n.off("click.buttons-copy");
                    f(p).off(".buttons-copy");
                    b.buttons.info(!1)
                };
            n.on("click.buttons-copy", r);
            f(p).on("keydown.buttons-copy", function (a) {
                27 === a.keyCode && (r(), g.processing(!1))
            }).on("copy.buttons-copy cut.buttons-copy", function () {
                r();
                g.processing(!1)
            })
        },
        exportOptions: {},
        fieldSeparator: "\t",
        fieldBoundary: "",
        header: !0,
        footer: !1,
        title: "*",
        messageTop: "*",
        messageBottom: "*"
    };
    v.ext.buttons.csvHtml5 = {
        bom: !1,
        className: "buttons-csv buttons-html5",
        available: function () {
            return g.FileReader !== w && g.Blob
        },
        text: function (a) {
            return a.i18n("buttons.csv", "Salvar para Excel")
        },
        action: function (a, b, d, c) {
            this.processing(!0);
            a = I(b, c).str;
            d = b.buttons.exportInfo(c);
            var f = c.charset;
            c.customize && (a = c.customize(a, c, b));
            !1 !== f ? (f || (f = p.characterSet || p.charset), f && (f = ";charset=" + f)) : f = "";
            c.bom && (a = "﻿" + a);
            B(new Blob([a], {
                type: "text/csv" + f
            }), d.filename, !0);
            this.processing(!1)
        },
        filename: "*",
        extension: ".csv",
        exportOptions: {},
        fieldSeparator: ",",
        fieldBoundary: '"',
        escapeChar: '"',
        charset: null,
        header: !0,
        footer: !1
    };
    v.ext.buttons.excelHtml5 = {
        className: "buttons-excel buttons-html5",
        available: function () {
            return g.FileReader !== w && (z || g.JSZip) !== w && !J() && C
        },
        text: function (a) {
            return a.i18n("buttons.excel", "Salvar para Excel")
        },
        action: function (a, b, d, c) {
            this.processing(!0);
            var p = this,
                e = 0;
            a = function (a) {
                return f.parseXML(F[a])
            };
            var h = a("xl/worksheets/sheet1.xml"),
                m = h.getElementsByTagName("sheetData")[0];
            a = {
                _rels: {
                    ".rels": a("_rels/.rels")
                },
                xl: {
                    _rels: {
                        "workbook.xml.rels": a("xl/_rels/workbook.xml.rels")
                    },
                    "workbook.xml": a("xl/workbook.xml"),
                    "styles.xml": a("xl/styles.xml"),
                    worksheets: {
                        "sheet1.xml": h
                    }
                },
                "[Content_Types].xml": a("[Content_Types].xml")
            };
            var k = b.buttons.exportData(c.exportOptions),
                n, v, q = function (a) {
                    n = e + 1;
                    v = r(h, "row", {
                        attr: {
                            r: n
                        }
                    });
                    for (var b = 0, d = a.length; b < d; b++) {
                        var k = A(b) + "" + n,
                            g = null;
                        if (null === a[b] || a[b] === w || "" === a[b])
                            if (!0 === c.createEmptyCells) a[b] = "";
                            else continue;
                        var l = a[b];
                        a[b] = f.trim(a[b]);
                        for (var q = 0, p = K.length; q < p; q++) {
                            var u = K[q];
                            if (a[b].match && !a[b].match(/^0\d+/) && a[b].match(u.match)) {
                                g = a[b].replace(/[^\d\.\-]/g, "");
                                u.fmt && (g = u.fmt(g));
                                g = r(h, "c", {
                                    attr: {
                                        r: k,
                                        s: u.style
                                    },
                                    children: [r(h, "v", {
                                        text: g
                                    })]
                                });
                                break
                            }
                        }
                        g || ("number" === typeof a[b] || a[b].match && a[b].match(/^-?\d+(\.\d+)?$/) && !a[b].match(/^0\d+/) ? g = r(h, "c", {
                            attr: {
                                t: "n",
                                r: k
                            },
                            children: [r(h, "v", {
                                text: a[b]
                            })]
                        }) : (l = l.replace ? l.replace(/[\x00-\x09\x0B\x0C\x0E-\x1F\x7F-\x9F]/g, "") : l, g = r(h, "c", {
                            attr: {
                                t: "inlineStr",
                                r: k
                            },
                            children: {
                                row: r(h,
                                    "is", {
                                        children: {
                                            row: r(h, "t", {
                                                text: l,
                                                attr: {
                                                    "xml:space": "preserve"
                                                }
                                            })
                                        }
                                    })
                            }
                        })));
                        v.appendChild(g)
                    }
                    m.appendChild(v);
                    e++
                };
            c.customizeData && c.customizeData(k);
            var x = function (a, b) {
                    var c = f("mergeCells", h);
                    c[0].appendChild(r(h, "mergeCell", {
                        attr: {
                            ref: "A" + a + ":" + A(b) + a
                        }
                    }));
                    c.attr("count", parseFloat(c.attr("count")) + 1);
                    f("row:eq(" + (a - 1) + ") c", h).attr("s", "51")
                },
                l = b.buttons.exportInfo(c);
            l.title && (q([l.title], e), x(e, k.header.length - 1));
            l.messageTop && (q([l.messageTop], e), x(e, k.header.length - 1));
            c.header && (q(k.header,
                e), f("row:last c", h).attr("s", "2"));
            d = e;
            var t = 0;
            for (var y = k.body.length; t < y; t++) q(k.body[t], e);
            t = e;
            c.footer && k.footer && (q(k.footer, e), f("row:last c", h).attr("s", "2"));
            l.messageBottom && (q([l.messageBottom], e), x(e, k.header.length - 1));
            q = r(h, "cols");
            f("worksheet", h).prepend(q);
            x = 0;
            for (y = k.header.length; x < y; x++) q.appendChild(r(h, "col", {
                attr: {
                    min: x + 1,
                    max: x + 1,
                    width: L(k, x),
                    customWidth: 1
                }
            }));
            q = a.xl["workbook.xml"];
            f("sheets sheet", q).attr("name", G(c));
            c.autoFilter && (f("mergeCells", h).before(r(h, "autoFilter", {
                attr: {
                    ref: "A" + d + ":" + A(k.header.length - 1) + t
                }
            })), f("definedNames", q).append(r(q, "definedName", {
                attr: {
                    name: "_xlnm._FilterDatabase",
                    localSheetId: "0",
                    hidden: 1
                },
                text: G(c) + "!$A$" + d + ":" + A(k.header.length - 1) + t
            })));
            c.customize && c.customize(a, c, b);
            0 === f("mergeCells", h).children().length && f("mergeCells", h).remove();
            b = new(z || g.JSZip);
            d = {
                type: "blob",
                mimeType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            };
            E(b, a);
            b.generateAsync ? b.generateAsync(d).then(function (a) {
                    B(a, l.filename);
                    p.processing(!1)
                }) :
                (B(b.generate(d), l.filename), this.processing(!1))
        },
        init: function (dt, node, config) {
            now = new Date;
            filename = (now.getDate() + "-" + (now.getMonth()+1) + "-" + now.getFullYear());
            var table = dt.table().context[0].nTable;
            if (table) config.title = $(table).attr('data-title');
            config.filename = $(table).attr('data-title') + " - " + filename;
        },
        filename: "*",
        extension: ".xlsx",
        exportOptions: {},
        header: !0,
        footer: !0,
        title: "*",
        messageTop: "*",
        messageBottom: "*",
        createEmptyCells: !1,
        autoFilter: !1,
        sheetName: ""
    };
    v.ext.buttons.pdfHtml5 = {
        className: "buttons-pdf buttons-html5",
        available: function () {
            return g.FileReader !== w && (t || g.pdfMake)
        },
        text: function (a) {
            return a.i18n("buttons.pdf", "Salvar em PDF")
        },
        action: function (a, b, d, c) {
            this.processing(!0);
            d = b.buttons.exportData(c.exportOptions);
            a = b.buttons.exportInfo(c);
            var p = [];
            c.header && p.push(f.map(d.header, function (a) {
                return {
                    text: "string" === typeof a ? a : a + "",
                    style: "tableHeader"
                }
            }));
            for (var e = 0, h = d.body.length; e < h; e++) p.push(f.map(d.body[e], function (a) {
                if (null === a || a === w) a = "";
                return {
                    text: "string" === typeof a ? a : a + "   ",
                    style: e % 2 ? "tableBodyEven" : "tableBodyOdd"
                }
            }));
            c.footer && d.footer && p.push(f.map(d.footer, function (a) {
                return {
                    text: "string" === typeof a ? a : a + "",
                    style: "tableFooter"
                }
            }));
            d = {
                pageSize: c.pageSize,
                pageOrientation: c.orientation,
                content: [{
                    table: {
                        headerRows: 1,
                        widths: ['*', '*', '*', '*', '*'],
                        alignment: "center",
                        headerRows: 2,
                        body: p
                    },
                    layout: "noBorders"
                }],
                styles: {
                    tableHeader: {
                        bold: 1,
                        fontSize: 13,
                        color: "white",
                        fillColor: "#fe6400",
                        alignment: "center"
                    },
                    tableBodyEven: {
                        alignment: "center",
                        margin: 5,
                        fillColor: "#f68e38"
                    },
                    tableBodyOdd: {
                        alignment: "center",
                        margin: 5,
                        fillColor: "#fd7e14"
                    },
                    tableFooter: {
                        bold: 1,
                        fontSize: 13,
                        color: "white",
                        fillColor: "#fe6400",
                        alignment: "center"
                    },
                    title: {
                        alignment: "center",
                        fontSize: 15
                    },
                    message: {}
                },
                defaultStyle: {
                    fontSize: 10
                }
            };
            a.messageTop && d.content.unshift({
                text: a.messageTop,
                style: "message",
                margin: [0, 0, 0, 12]
            });
            a.messageBottom && d.content.push({
                text: a.messageBottom,
                style: "message",
                margin: [0, 0, 0, 12]
            });
            a.title && d.content.unshift({
                text: a.title,
                style: "title",
                margin: 5
            });
            c.customize && c.customize(d, c, b);
            b = (t || g.pdfMake).createPdf(d);
            "open" !== c.download || J() ? b.download(a.filename) : b.open();
            this.processing(!1)
        },
        init: function (dt, node, config) {
            now = new Date;
            filename = (now.getDate() + "-" + (now.getMonth()+1) + "-" + now.getFullYear());
            var table = dt.table().context[0].nTable;
            if (table) config.title = $(table).attr('data-title');
            config.filename = $(table).attr('data-title') + " - " + filename;
        },
        title: 'LISTA DE COMPRAS',
        filename: "*",
        extension: ".pdf",
        exportOptions: {},
        orientation: "portrait",
        pageSize: "A4",
        header: !0,
        footer: !0,
        messageTop: "*",
        messageBottom: "*",
        customize: function ( doc ) {
            
         },
        download: "download"
    };
    return v.Buttons
});
//Português brasil para DataTables
var ptBR = {
    "sEmptyTable": "Nada encontrado",
    "sInfo": "Mostrando _START_ até _END_ de _TOTAL_",
    "sInfoEmpty": "Vazio",
    "sInfoFiltered": "(Filtrados de _MAX_ itens)",
    "sInfoPostFix": "",
    "sInfoThousands": ".",
    "sLengthMenu": "_MENU_ resultados por página",
    "sLoadingRecords": "Carregando...",
    "sProcessing": "Processando...",
    "sZeroRecords": "Nenhum item encontrado",
    "sSearch": "Pesquisar",
    "oPaginate": {
        "sNext": "Próximo",
        "sPrevious": "Anterior",
        "sFirst": "Primeiro",
        "sLast": "Último"
    },
    "oAria": {
        "sSortAscending": ": Ordenar colunas de forma ascendente",
        "sSortDescending": ": Ordenar colunas de forma descendente"
    },
    "select": {
        "rows": {
            "_": "Selecionado %d linhas",
            "0": "Nenhuma linha selecionada",
            "1": "Selecionado 1 linha"
        }
    }
}
;(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.moment = factory()
}(this, (function () { 'use strict';

    var hookCallback;

    function hooks () {
        return hookCallback.apply(null, arguments);
    }

    // This is done to register the method called with moment()
    // without creating circular dependencies.
    function setHookCallback (callback) {
        hookCallback = callback;
    }

    function isArray(input) {
        return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
    }

    function isObject(input) {
        // IE8 will treat undefined and null as object if it wasn't for
        // input != null
        return input != null && Object.prototype.toString.call(input) === '[object Object]';
    }

    function isObjectEmpty(obj) {
        if (Object.getOwnPropertyNames) {
            return (Object.getOwnPropertyNames(obj).length === 0);
        } else {
            var k;
            for (k in obj) {
                if (obj.hasOwnProperty(k)) {
                    return false;
                }
            }
            return true;
        }
    }

    function isUndefined(input) {
        return input === void 0;
    }

    function isNumber(input) {
        return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
    }

    function isDate(input) {
        return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
    }

    function map(arr, fn) {
        var res = [], i;
        for (i = 0; i < arr.length; ++i) {
            res.push(fn(arr[i], i));
        }
        return res;
    }

    function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }

    function extend(a, b) {
        for (var i in b) {
            if (hasOwnProp(b, i)) {
                a[i] = b[i];
            }
        }

        if (hasOwnProp(b, 'toString')) {
            a.toString = b.toString;
        }

        if (hasOwnProp(b, 'valueOf')) {
            a.valueOf = b.valueOf;
        }

        return a;
    }

    function createUTC (input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, true).utc();
    }

    function defaultParsingFlags() {
        // We need to deep clone this object.
        return {
            empty           : false,
            unusedTokens    : [],
            unusedInput     : [],
            overflow        : -2,
            charsLeftOver   : 0,
            nullInput       : false,
            invalidMonth    : null,
            invalidFormat   : false,
            userInvalidated : false,
            iso             : false,
            parsedDateParts : [],
            meridiem        : null,
            rfc2822         : false,
            weekdayMismatch : false
        };
    }

    function getParsingFlags(m) {
        if (m._pf == null) {
            m._pf = defaultParsingFlags();
        }
        return m._pf;
    }

    var some;
    if (Array.prototype.some) {
        some = Array.prototype.some;
    } else {
        some = function (fun) {
            var t = Object(this);
            var len = t.length >>> 0;

            for (var i = 0; i < len; i++) {
                if (i in t && fun.call(this, t[i], i, t)) {
                    return true;
                }
            }

            return false;
        };
    }

    function isValid(m) {
        if (m._isValid == null) {
            var flags = getParsingFlags(m);
            var parsedParts = some.call(flags.parsedDateParts, function (i) {
                return i != null;
            });
            var isNowValid = !isNaN(m._d.getTime()) &&
                flags.overflow < 0 &&
                !flags.empty &&
                !flags.invalidMonth &&
                !flags.invalidWeekday &&
                !flags.weekdayMismatch &&
                !flags.nullInput &&
                !flags.invalidFormat &&
                !flags.userInvalidated &&
                (!flags.meridiem || (flags.meridiem && parsedParts));

            if (m._strict) {
                isNowValid = isNowValid &&
                    flags.charsLeftOver === 0 &&
                    flags.unusedTokens.length === 0 &&
                    flags.bigHour === undefined;
            }

            if (Object.isFrozen == null || !Object.isFrozen(m)) {
                m._isValid = isNowValid;
            }
            else {
                return isNowValid;
            }
        }
        return m._isValid;
    }

    function createInvalid (flags) {
        var m = createUTC(NaN);
        if (flags != null) {
            extend(getParsingFlags(m), flags);
        }
        else {
            getParsingFlags(m).userInvalidated = true;
        }

        return m;
    }

    // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.
    var momentProperties = hooks.momentProperties = [];

    function copyConfig(to, from) {
        var i, prop, val;

        if (!isUndefined(from._isAMomentObject)) {
            to._isAMomentObject = from._isAMomentObject;
        }
        if (!isUndefined(from._i)) {
            to._i = from._i;
        }
        if (!isUndefined(from._f)) {
            to._f = from._f;
        }
        if (!isUndefined(from._l)) {
            to._l = from._l;
        }
        if (!isUndefined(from._strict)) {
            to._strict = from._strict;
        }
        if (!isUndefined(from._tzm)) {
            to._tzm = from._tzm;
        }
        if (!isUndefined(from._isUTC)) {
            to._isUTC = from._isUTC;
        }
        if (!isUndefined(from._offset)) {
            to._offset = from._offset;
        }
        if (!isUndefined(from._pf)) {
            to._pf = getParsingFlags(from);
        }
        if (!isUndefined(from._locale)) {
            to._locale = from._locale;
        }

        if (momentProperties.length > 0) {
            for (i = 0; i < momentProperties.length; i++) {
                prop = momentProperties[i];
                val = from[prop];
                if (!isUndefined(val)) {
                    to[prop] = val;
                }
            }
        }

        return to;
    }

    var updateInProgress = false;

    // Moment prototype object
    function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
        if (!this.isValid()) {
            this._d = new Date(NaN);
        }
        // Prevent infinite loop in case updateOffset creates new moment
        // objects.
        if (updateInProgress === false) {
            updateInProgress = true;
            hooks.updateOffset(this);
            updateInProgress = false;
        }
    }

    function isMoment (obj) {
        return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
    }

    function absFloor (number) {
        if (number < 0) {
            // -0 -> 0
            return Math.ceil(number) || 0;
        } else {
            return Math.floor(number);
        }
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            value = absFloor(coercedNumber);
        }

        return value;
    }

    // compare two arrays, return the number of differences
    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if ((dontConvert && array1[i] !== array2[i]) ||
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    function warn(msg) {
        if (hooks.suppressDeprecationWarnings === false &&
                (typeof console !==  'undefined') && console.warn) {
            console.warn('Deprecation warning: ' + msg);
        }
    }

    function deprecate(msg, fn) {
        var firstTime = true;

        return extend(function () {
            if (hooks.deprecationHandler != null) {
                hooks.deprecationHandler(null, msg);
            }
            if (firstTime) {
                var args = [];
                var arg;
                for (var i = 0; i < arguments.length; i++) {
                    arg = '';
                    if (typeof arguments[i] === 'object') {
                        arg += '\n[' + i + '] ';
                        for (var key in arguments[0]) {
                            arg += key + ': ' + arguments[0][key] + ', ';
                        }
                        arg = arg.slice(0, -2); // Remove trailing comma and space
                    } else {
                        arg = arguments[i];
                    }
                    args.push(arg);
                }
                warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + (new Error()).stack);
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }

    var deprecations = {};

    function deprecateSimple(name, msg) {
        if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(name, msg);
        }
        if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true;
        }
    }

    hooks.suppressDeprecationWarnings = false;
    hooks.deprecationHandler = null;

    function isFunction(input) {
        return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
    }

    function set (config) {
        var prop, i;
        for (i in config) {
            prop = config[i];
            if (isFunction(prop)) {
                this[i] = prop;
            } else {
                this['_' + i] = prop;
            }
        }
        this._config = config;
        // Lenient ordinal parsing accepts just a number in addition to
        // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
        // TODO: Remove "ordinalParse" fallback in next major release.
        this._dayOfMonthOrdinalParseLenient = new RegExp(
            (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
                '|' + (/\d{1,2}/).source);
    }

    function mergeConfigs(parentConfig, childConfig) {
        var res = extend({}, parentConfig), prop;
        for (prop in childConfig) {
            if (hasOwnProp(childConfig, prop)) {
                if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                    res[prop] = {};
                    extend(res[prop], parentConfig[prop]);
                    extend(res[prop], childConfig[prop]);
                } else if (childConfig[prop] != null) {
                    res[prop] = childConfig[prop];
                } else {
                    delete res[prop];
                }
            }
        }
        for (prop in parentConfig) {
            if (hasOwnProp(parentConfig, prop) &&
                    !hasOwnProp(childConfig, prop) &&
                    isObject(parentConfig[prop])) {
                // make sure changes to properties don't modify parent config
                res[prop] = extend({}, res[prop]);
            }
        }
        return res;
    }

    function Locale(config) {
        if (config != null) {
            this.set(config);
        }
    }

    var keys;

    if (Object.keys) {
        keys = Object.keys;
    } else {
        keys = function (obj) {
            var i, res = [];
            for (i in obj) {
                if (hasOwnProp(obj, i)) {
                    res.push(i);
                }
            }
            return res;
        };
    }

    var defaultCalendar = {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[Last] dddd [at] LT',
        sameElse : 'L'
    };

    function calendar (key, mom, now) {
        var output = this._calendar[key] || this._calendar['sameElse'];
        return isFunction(output) ? output.call(mom, now) : output;
    }

    var defaultLongDateFormat = {
        LTS  : 'h:mm:ss A',
        LT   : 'h:mm A',
        L    : 'MM/DD/YYYY',
        LL   : 'MMMM D, YYYY',
        LLL  : 'MMMM D, YYYY h:mm A',
        LLLL : 'dddd, MMMM D, YYYY h:mm A'
    };

    function longDateFormat (key) {
        var format = this._longDateFormat[key],
            formatUpper = this._longDateFormat[key.toUpperCase()];

        if (format || !formatUpper) {
            return format;
        }

        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
            return val.slice(1);
        });

        return this._longDateFormat[key];
    }

    var defaultInvalidDate = 'Invalid date';

    function invalidDate () {
        return this._invalidDate;
    }

    var defaultOrdinal = '%d';
    var defaultDayOfMonthOrdinalParse = /\d{1,2}/;

    function ordinal (number) {
        return this._ordinal.replace('%d', number);
    }

    var defaultRelativeTime = {
        future : 'in %s',
        past   : '%s ago',
        s  : 'a few seconds',
        ss : '%d seconds',
        m  : 'a minute',
        mm : '%d minutes',
        h  : 'an hour',
        hh : '%d hours',
        d  : 'a day',
        dd : '%d days',
        M  : 'a month',
        MM : '%d months',
        y  : 'a year',
        yy : '%d years'
    };

    function relativeTime (number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return (isFunction(output)) ?
            output(number, withoutSuffix, string, isFuture) :
            output.replace(/%d/i, number);
    }

    function pastFuture (diff, output) {
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
    }

    var aliases = {};

    function addUnitAlias (unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
    }

    function normalizeUnits(units) {
        return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
    }

    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop;

        for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }

        return normalizedInput;
    }

    var priorities = {};

    function addUnitPriority(unit, priority) {
        priorities[unit] = priority;
    }

    function getPrioritizedUnits(unitsObj) {
        var units = [];
        for (var u in unitsObj) {
            units.push({unit: u, priority: priorities[u]});
        }
        units.sort(function (a, b) {
            return a.priority - b.priority;
        });
        return units;
    }

    function zeroFill(number, targetLength, forceSign) {
        var absNumber = '' + Math.abs(number),
            zerosToFill = targetLength - absNumber.length,
            sign = number >= 0;
        return (sign ? (forceSign ? '+' : '') : '-') +
            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
    }

    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

    var formatFunctions = {};

    var formatTokenFunctions = {};

    // token:    'M'
    // padded:   ['MM', 2]
    // ordinal:  'Mo'
    // callback: function () { this.month() + 1 }
    function addFormatToken (token, padded, ordinal, callback) {
        var func = callback;
        if (typeof callback === 'string') {
            func = function () {
                return this[callback]();
            };
        }
        if (token) {
            formatTokenFunctions[token] = func;
        }
        if (padded) {
            formatTokenFunctions[padded[0]] = function () {
                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
            };
        }
        if (ordinal) {
            formatTokenFunctions[ordinal] = function () {
                return this.localeData().ordinal(func.apply(this, arguments), token);
            };
        }
    }

    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, '');
        }
        return input.replace(/\\/g, '');
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens), i, length;

        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }

        return function (mom) {
            var output = '', i;
            for (i = 0; i < length; i++) {
                output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
            }
            return output;
        };
    }

    // format date using native date object
    function formatMoment(m, format) {
        if (!m.isValid()) {
            return m.localeData().invalidDate();
        }

        format = expandFormat(format, m.localeData());
        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

        return formatFunctions[format](m);
    }

    function expandFormat(format, locale) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }

        return format;
    }

    var match1         = /\d/;            //       0 - 9
    var match2         = /\d\d/;          //      00 - 99
    var match3         = /\d{3}/;         //     000 - 999
    var match4         = /\d{4}/;         //    0000 - 9999
    var match6         = /[+-]?\d{6}/;    // -999999 - 999999
    var match1to2      = /\d\d?/;         //       0 - 99
    var match3to4      = /\d\d\d\d?/;     //     999 - 9999
    var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999
    var match1to3      = /\d{1,3}/;       //       0 - 999
    var match1to4      = /\d{1,4}/;       //       0 - 9999
    var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999

    var matchUnsigned  = /\d+/;           //       0 - inf
    var matchSigned    = /[+-]?\d+/;      //    -inf - inf

    var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
    var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

    var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

    // any word (or two) characters or numbers including two/three word month in arabic.
    // includes scottish gaelic two word and hyphenated months
    var matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;

    var regexes = {};

    function addRegexToken (token, regex, strictRegex) {
        regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
            return (isStrict && strictRegex) ? strictRegex : regex;
        };
    }

    function getParseRegexForToken (token, config) {
        if (!hasOwnProp(regexes, token)) {
            return new RegExp(unescapeFormat(token));
        }

        return regexes[token](config._strict, config._locale);
    }

    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function unescapeFormat(s) {
        return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
        }));
    }

    function regexEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    var tokens = {};

    function addParseToken (token, callback) {
        var i, func = callback;
        if (typeof token === 'string') {
            token = [token];
        }
        if (isNumber(callback)) {
            func = function (input, array) {
                array[callback] = toInt(input);
            };
        }
        for (i = 0; i < token.length; i++) {
            tokens[token[i]] = func;
        }
    }

    function addWeekParseToken (token, callback) {
        addParseToken(token, function (input, array, config, token) {
            config._w = config._w || {};
            callback(input, config._w, config, token);
        });
    }

    function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens, token)) {
            tokens[token](input, config._a, config, token);
        }
    }

    var YEAR = 0;
    var MONTH = 1;
    var DATE = 2;
    var HOUR = 3;
    var MINUTE = 4;
    var SECOND = 5;
    var MILLISECOND = 6;
    var WEEK = 7;
    var WEEKDAY = 8;

    // FORMATTING

    addFormatToken('Y', 0, 0, function () {
        var y = this.year();
        return y <= 9999 ? '' + y : '+' + y;
    });

    addFormatToken(0, ['YY', 2], 0, function () {
        return this.year() % 100;
    });

    addFormatToken(0, ['YYYY',   4],       0, 'year');
    addFormatToken(0, ['YYYYY',  5],       0, 'year');
    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

    // ALIASES

    addUnitAlias('year', 'y');

    // PRIORITIES

    addUnitPriority('year', 1);

    // PARSING

    addRegexToken('Y',      matchSigned);
    addRegexToken('YY',     match1to2, match2);
    addRegexToken('YYYY',   match1to4, match4);
    addRegexToken('YYYYY',  match1to6, match6);
    addRegexToken('YYYYYY', match1to6, match6);

    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
    addParseToken('YYYY', function (input, array) {
        array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken('YY', function (input, array) {
        array[YEAR] = hooks.parseTwoDigitYear(input);
    });
    addParseToken('Y', function (input, array) {
        array[YEAR] = parseInt(input, 10);
    });

    // HELPERS

    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    // HOOKS

    hooks.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };

    // MOMENTS

    var getSetYear = makeGetSet('FullYear', true);

    function getIsLeapYear () {
        return isLeapYear(this.year());
    }

    function makeGetSet (unit, keepTime) {
        return function (value) {
            if (value != null) {
                set$1(this, unit, value);
                hooks.updateOffset(this, keepTime);
                return this;
            } else {
                return get(this, unit);
            }
        };
    }

    function get (mom, unit) {
        return mom.isValid() ?
            mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
    }

    function set$1 (mom, unit, value) {
        if (mom.isValid() && !isNaN(value)) {
            if (unit === 'FullYear' && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value, mom.month(), daysInMonth(value, mom.month()));
            }
            else {
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
            }
        }
    }

    // MOMENTS

    function stringGet (units) {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
            return this[units]();
        }
        return this;
    }


    function stringSet (units, value) {
        if (typeof units === 'object') {
            units = normalizeObjectUnits(units);
            var prioritized = getPrioritizedUnits(units);
            for (var i = 0; i < prioritized.length; i++) {
                this[prioritized[i].unit](units[prioritized[i].unit]);
            }
        } else {
            units = normalizeUnits(units);
            if (isFunction(this[units])) {
                return this[units](value);
            }
        }
        return this;
    }

    function mod(n, x) {
        return ((n % x) + x) % x;
    }

    var indexOf;

    if (Array.prototype.indexOf) {
        indexOf = Array.prototype.indexOf;
    } else {
        indexOf = function (o) {
            // I know
            var i;
            for (i = 0; i < this.length; ++i) {
                if (this[i] === o) {
                    return i;
                }
            }
            return -1;
        };
    }

    function daysInMonth(year, month) {
        if (isNaN(year) || isNaN(month)) {
            return NaN;
        }
        var modMonth = mod(month, 12);
        year += (month - modMonth) / 12;
        return modMonth === 1 ? (isLeapYear(year) ? 29 : 28) : (31 - modMonth % 7 % 2);
    }

    // FORMATTING

    addFormatToken('M', ['MM', 2], 'Mo', function () {
        return this.month() + 1;
    });

    addFormatToken('MMM', 0, 0, function (format) {
        return this.localeData().monthsShort(this, format);
    });

    addFormatToken('MMMM', 0, 0, function (format) {
        return this.localeData().months(this, format);
    });

    // ALIASES

    addUnitAlias('month', 'M');

    // PRIORITY

    addUnitPriority('month', 8);

    // PARSING

    addRegexToken('M',    match1to2);
    addRegexToken('MM',   match1to2, match2);
    addRegexToken('MMM',  function (isStrict, locale) {
        return locale.monthsShortRegex(isStrict);
    });
    addRegexToken('MMMM', function (isStrict, locale) {
        return locale.monthsRegex(isStrict);
    });

    addParseToken(['M', 'MM'], function (input, array) {
        array[MONTH] = toInt(input) - 1;
    });

    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
        var month = config._locale.monthsParse(input, token, config._strict);
        // if we didn't find a month name, mark the date as invalid.
        if (month != null) {
            array[MONTH] = month;
        } else {
            getParsingFlags(config).invalidMonth = input;
        }
    });

    // LOCALES

    var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
    function localeMonths (m, format) {
        if (!m) {
            return isArray(this._months) ? this._months :
                this._months['standalone'];
        }
        return isArray(this._months) ? this._months[m.month()] :
            this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
    }

    var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
    function localeMonthsShort (m, format) {
        if (!m) {
            return isArray(this._monthsShort) ? this._monthsShort :
                this._monthsShort['standalone'];
        }
        return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
            this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
    }

    function handleStrictParse(monthName, format, strict) {
        var i, ii, mom, llc = monthName.toLocaleLowerCase();
        if (!this._monthsParse) {
            // this is not used
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
            for (i = 0; i < 12; ++i) {
                mom = createUTC([2000, i]);
                this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeMonthsParse (monthName, format, strict) {
        var i, mom, regex;

        if (this._monthsParseExact) {
            return handleStrictParse.call(this, monthName, format, strict);
        }

        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
        }

        // TODO: add sorting
        // Sorting makes sure if one month (or abbr) is a prefix of another
        // see sorting in computeMonthsParse
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            if (strict && !this._longMonthsParse[i]) {
                this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
                this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
            }
            if (!strict && !this._monthsParse[i]) {
                regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
                return i;
            } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
                return i;
            } else if (!strict && this._monthsParse[i].test(monthName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function setMonth (mom, value) {
        var dayOfMonth;

        if (!mom.isValid()) {
            // No op
            return mom;
        }

        if (typeof value === 'string') {
            if (/^\d+$/.test(value)) {
                value = toInt(value);
            } else {
                value = mom.localeData().monthsParse(value);
                // TODO: Another silent failure?
                if (!isNumber(value)) {
                    return mom;
                }
            }
        }

        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }

    function getSetMonth (value) {
        if (value != null) {
            setMonth(this, value);
            hooks.updateOffset(this, true);
            return this;
        } else {
            return get(this, 'Month');
        }
    }

    function getDaysInMonth () {
        return daysInMonth(this.year(), this.month());
    }

    var defaultMonthsShortRegex = matchWord;
    function monthsShortRegex (isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsShortStrictRegex;
            } else {
                return this._monthsShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsShortRegex')) {
                this._monthsShortRegex = defaultMonthsShortRegex;
            }
            return this._monthsShortStrictRegex && isStrict ?
                this._monthsShortStrictRegex : this._monthsShortRegex;
        }
    }

    var defaultMonthsRegex = matchWord;
    function monthsRegex (isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsStrictRegex;
            } else {
                return this._monthsRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsRegex')) {
                this._monthsRegex = defaultMonthsRegex;
            }
            return this._monthsStrictRegex && isStrict ?
                this._monthsStrictRegex : this._monthsRegex;
        }
    }

    function computeMonthsParse () {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var shortPieces = [], longPieces = [], mixedPieces = [],
            i, mom;
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            shortPieces.push(this.monthsShort(mom, ''));
            longPieces.push(this.months(mom, ''));
            mixedPieces.push(this.months(mom, ''));
            mixedPieces.push(this.monthsShort(mom, ''));
        }
        // Sorting makes sure if one month (or abbr) is a prefix of another it
        // will match the longer piece.
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 12; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
        }
        for (i = 0; i < 24; i++) {
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    }

    function createDate (y, m, d, h, M, s, ms) {
        // can't just apply() to create a date:
        // https://stackoverflow.com/q/181348
        var date;
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            date = new Date(y + 400, m, d, h, M, s, ms);
            if (isFinite(date.getFullYear())) {
                date.setFullYear(y);
            }
        } else {
            date = new Date(y, m, d, h, M, s, ms);
        }

        return date;
    }

    function createUTCDate (y) {
        var date;
        // the Date.UTC function remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            var args = Array.prototype.slice.call(arguments);
            // preserve leap years using a full 400 year cycle, then reset
            args[0] = y + 400;
            date = new Date(Date.UTC.apply(null, args));
            if (isFinite(date.getUTCFullYear())) {
                date.setUTCFullYear(y);
            }
        } else {
            date = new Date(Date.UTC.apply(null, arguments));
        }

        return date;
    }

    // start-of-first-week - start-of-year
    function firstWeekOffset(year, dow, doy) {
        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
            fwd = 7 + dow - doy,
            // first-week day local weekday -- which local weekday is fwd
            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

        return -fwdlw + fwd - 1;
    }

    // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var localWeekday = (7 + weekday - dow) % 7,
            weekOffset = firstWeekOffset(year, dow, doy),
            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
            resYear, resDayOfYear;

        if (dayOfYear <= 0) {
            resYear = year - 1;
            resDayOfYear = daysInYear(resYear) + dayOfYear;
        } else if (dayOfYear > daysInYear(year)) {
            resYear = year + 1;
            resDayOfYear = dayOfYear - daysInYear(year);
        } else {
            resYear = year;
            resDayOfYear = dayOfYear;
        }

        return {
            year: resYear,
            dayOfYear: resDayOfYear
        };
    }

    function weekOfYear(mom, dow, doy) {
        var weekOffset = firstWeekOffset(mom.year(), dow, doy),
            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
            resWeek, resYear;

        if (week < 1) {
            resYear = mom.year() - 1;
            resWeek = week + weeksInYear(resYear, dow, doy);
        } else if (week > weeksInYear(mom.year(), dow, doy)) {
            resWeek = week - weeksInYear(mom.year(), dow, doy);
            resYear = mom.year() + 1;
        } else {
            resYear = mom.year();
            resWeek = week;
        }

        return {
            week: resWeek,
            year: resYear
        };
    }

    function weeksInYear(year, dow, doy) {
        var weekOffset = firstWeekOffset(year, dow, doy),
            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    }

    // FORMATTING

    addFormatToken('w', ['ww', 2], 'wo', 'week');
    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

    // ALIASES

    addUnitAlias('week', 'w');
    addUnitAlias('isoWeek', 'W');

    // PRIORITIES

    addUnitPriority('week', 5);
    addUnitPriority('isoWeek', 5);

    // PARSING

    addRegexToken('w',  match1to2);
    addRegexToken('ww', match1to2, match2);
    addRegexToken('W',  match1to2);
    addRegexToken('WW', match1to2, match2);

    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
        week[token.substr(0, 1)] = toInt(input);
    });

    // HELPERS

    // LOCALES

    function localeWeek (mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }

    var defaultLocaleWeek = {
        dow : 0, // Sunday is the first day of the week.
        doy : 6  // The week that contains Jan 6th is the first week of the year.
    };

    function localeFirstDayOfWeek () {
        return this._week.dow;
    }

    function localeFirstDayOfYear () {
        return this._week.doy;
    }

    // MOMENTS

    function getSetWeek (input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    function getSetISOWeek (input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    // FORMATTING

    addFormatToken('d', 0, 'do', 'day');

    addFormatToken('dd', 0, 0, function (format) {
        return this.localeData().weekdaysMin(this, format);
    });

    addFormatToken('ddd', 0, 0, function (format) {
        return this.localeData().weekdaysShort(this, format);
    });

    addFormatToken('dddd', 0, 0, function (format) {
        return this.localeData().weekdays(this, format);
    });

    addFormatToken('e', 0, 0, 'weekday');
    addFormatToken('E', 0, 0, 'isoWeekday');

    // ALIASES

    addUnitAlias('day', 'd');
    addUnitAlias('weekday', 'e');
    addUnitAlias('isoWeekday', 'E');

    // PRIORITY
    addUnitPriority('day', 11);
    addUnitPriority('weekday', 11);
    addUnitPriority('isoWeekday', 11);

    // PARSING

    addRegexToken('d',    match1to2);
    addRegexToken('e',    match1to2);
    addRegexToken('E',    match1to2);
    addRegexToken('dd',   function (isStrict, locale) {
        return locale.weekdaysMinRegex(isStrict);
    });
    addRegexToken('ddd',   function (isStrict, locale) {
        return locale.weekdaysShortRegex(isStrict);
    });
    addRegexToken('dddd',   function (isStrict, locale) {
        return locale.weekdaysRegex(isStrict);
    });

    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
        var weekday = config._locale.weekdaysParse(input, token, config._strict);
        // if we didn't get a weekday name, mark the date as invalid
        if (weekday != null) {
            week.d = weekday;
        } else {
            getParsingFlags(config).invalidWeekday = input;
        }
    });

    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
        week[token] = toInt(input);
    });

    // HELPERS

    function parseWeekday(input, locale) {
        if (typeof input !== 'string') {
            return input;
        }

        if (!isNaN(input)) {
            return parseInt(input, 10);
        }

        input = locale.weekdaysParse(input);
        if (typeof input === 'number') {
            return input;
        }

        return null;
    }

    function parseIsoWeekday(input, locale) {
        if (typeof input === 'string') {
            return locale.weekdaysParse(input) % 7 || 7;
        }
        return isNaN(input) ? null : input;
    }

    // LOCALES
    function shiftWeekdays (ws, n) {
        return ws.slice(n, 7).concat(ws.slice(0, n));
    }

    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
    function localeWeekdays (m, format) {
        var weekdays = isArray(this._weekdays) ? this._weekdays :
            this._weekdays[(m && m !== true && this._weekdays.isFormat.test(format)) ? 'format' : 'standalone'];
        return (m === true) ? shiftWeekdays(weekdays, this._week.dow)
            : (m) ? weekdays[m.day()] : weekdays;
    }

    var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
    function localeWeekdaysShort (m) {
        return (m === true) ? shiftWeekdays(this._weekdaysShort, this._week.dow)
            : (m) ? this._weekdaysShort[m.day()] : this._weekdaysShort;
    }

    var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
    function localeWeekdaysMin (m) {
        return (m === true) ? shiftWeekdays(this._weekdaysMin, this._week.dow)
            : (m) ? this._weekdaysMin[m.day()] : this._weekdaysMin;
    }

    function handleStrictParse$1(weekdayName, format, strict) {
        var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];

            for (i = 0; i < 7; ++i) {
                mom = createUTC([2000, 1]).day(i);
                this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
                this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
                this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeWeekdaysParse (weekdayName, format, strict) {
        var i, mom, regex;

        if (this._weekdaysParseExact) {
            return handleStrictParse$1.call(this, weekdayName, format, strict);
        }

        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
        }

        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already

            mom = createUTC([2000, 1]).day(i);
            if (strict && !this._fullWeekdaysParse[i]) {
                this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\\.?') + '$', 'i');
                this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$', 'i');
                this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$', 'i');
            }
            if (!this._weekdaysParse[i]) {
                regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function getSetDayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        if (input != null) {
            input = parseWeekday(input, this.localeData());
            return this.add(input - day, 'd');
        } else {
            return day;
        }
    }

    function getSetLocaleDayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, 'd');
    }

    function getSetISODayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }

        // behaves the same as moment#day except
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
        // as a setter, sunday should belong to the previous week.

        if (input != null) {
            var weekday = parseIsoWeekday(input, this.localeData());
            return this.day(this.day() % 7 ? weekday : weekday - 7);
        } else {
            return this.day() || 7;
        }
    }

    var defaultWeekdaysRegex = matchWord;
    function weekdaysRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysStrictRegex;
            } else {
                return this._weekdaysRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                this._weekdaysRegex = defaultWeekdaysRegex;
            }
            return this._weekdaysStrictRegex && isStrict ?
                this._weekdaysStrictRegex : this._weekdaysRegex;
        }
    }

    var defaultWeekdaysShortRegex = matchWord;
    function weekdaysShortRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysShortStrictRegex;
            } else {
                return this._weekdaysShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysShortRegex')) {
                this._weekdaysShortRegex = defaultWeekdaysShortRegex;
            }
            return this._weekdaysShortStrictRegex && isStrict ?
                this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
        }
    }

    var defaultWeekdaysMinRegex = matchWord;
    function weekdaysMinRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysMinStrictRegex;
            } else {
                return this._weekdaysMinRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysMinRegex')) {
                this._weekdaysMinRegex = defaultWeekdaysMinRegex;
            }
            return this._weekdaysMinStrictRegex && isStrict ?
                this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
        }
    }


    function computeWeekdaysParse () {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],
            i, mom, minp, shortp, longp;
        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, 1]).day(i);
            minp = this.weekdaysMin(mom, '');
            shortp = this.weekdaysShort(mom, '');
            longp = this.weekdays(mom, '');
            minPieces.push(minp);
            shortPieces.push(shortp);
            longPieces.push(longp);
            mixedPieces.push(minp);
            mixedPieces.push(shortp);
            mixedPieces.push(longp);
        }
        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
        // will match the longer piece.
        minPieces.sort(cmpLenRev);
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 7; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;

        this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
        this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
    }

    // FORMATTING

    function hFormat() {
        return this.hours() % 12 || 12;
    }

    function kFormat() {
        return this.hours() || 24;
    }

    addFormatToken('H', ['HH', 2], 0, 'hour');
    addFormatToken('h', ['hh', 2], 0, hFormat);
    addFormatToken('k', ['kk', 2], 0, kFormat);

    addFormatToken('hmm', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
    });

    addFormatToken('hmmss', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2);
    });

    addFormatToken('Hmm', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2);
    });

    addFormatToken('Hmmss', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2);
    });

    function meridiem (token, lowercase) {
        addFormatToken(token, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
        });
    }

    meridiem('a', true);
    meridiem('A', false);

    // ALIASES

    addUnitAlias('hour', 'h');

    // PRIORITY
    addUnitPriority('hour', 13);

    // PARSING

    function matchMeridiem (isStrict, locale) {
        return locale._meridiemParse;
    }

    addRegexToken('a',  matchMeridiem);
    addRegexToken('A',  matchMeridiem);
    addRegexToken('H',  match1to2);
    addRegexToken('h',  match1to2);
    addRegexToken('k',  match1to2);
    addRegexToken('HH', match1to2, match2);
    addRegexToken('hh', match1to2, match2);
    addRegexToken('kk', match1to2, match2);

    addRegexToken('hmm', match3to4);
    addRegexToken('hmmss', match5to6);
    addRegexToken('Hmm', match3to4);
    addRegexToken('Hmmss', match5to6);

    addParseToken(['H', 'HH'], HOUR);
    addParseToken(['k', 'kk'], function (input, array, config) {
        var kInput = toInt(input);
        array[HOUR] = kInput === 24 ? 0 : kInput;
    });
    addParseToken(['a', 'A'], function (input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
    });
    addParseToken(['h', 'hh'], function (input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('Hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
    });
    addParseToken('Hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
    });

    // LOCALES

    function localeIsPM (input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return ((input + '').toLowerCase().charAt(0) === 'p');
    }

    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
    function localeMeridiem (hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'pm' : 'PM';
        } else {
            return isLower ? 'am' : 'AM';
        }
    }


    // MOMENTS

    // Setting the hour should keep the time, because the user explicitly
    // specified which hour they want. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.
    var getSetHour = makeGetSet('Hours', true);

    var baseConfig = {
        calendar: defaultCalendar,
        longDateFormat: defaultLongDateFormat,
        invalidDate: defaultInvalidDate,
        ordinal: defaultOrdinal,
        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
        relativeTime: defaultRelativeTime,

        months: defaultLocaleMonths,
        monthsShort: defaultLocaleMonthsShort,

        week: defaultLocaleWeek,

        weekdays: defaultLocaleWeekdays,
        weekdaysMin: defaultLocaleWeekdaysMin,
        weekdaysShort: defaultLocaleWeekdaysShort,

        meridiemParse: defaultLocaleMeridiemParse
    };

    // internal storage for locale config files
    var locales = {};
    var localeFamilies = {};
    var globalLocale;

    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }

    // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {
        var i = 0, j, next, locale, split;

        while (i < names.length) {
            split = normalizeLocale(names[i]).split('-');
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) {
                    return locale;
                }
                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                    //the next array item is better than a shallower substring of this one
                    break;
                }
                j--;
            }
            i++;
        }
        return globalLocale;
    }

    function loadLocale(name) {
        var oldLocale = null;
        // TODO: Find a better way to register and load all the locales in Node
        if (!locales[name] && (typeof module !== 'undefined') &&
                module && module.exports) {
            try {
                oldLocale = globalLocale._abbr;
                var aliasedRequire = require;
                aliasedRequire('./locale/' + name);
                getSetGlobalLocale(oldLocale);
            } catch (e) {}
        }
        return locales[name];
    }

    // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    function getSetGlobalLocale (key, values) {
        var data;
        if (key) {
            if (isUndefined(values)) {
                data = getLocale(key);
            }
            else {
                data = defineLocale(key, values);
            }

            if (data) {
                // moment.duration._locale = moment._locale = data;
                globalLocale = data;
            }
            else {
                if ((typeof console !==  'undefined') && console.warn) {
                    //warn user if arguments are passed but the locale could not be set
                    console.warn('Locale ' + key +  ' not found. Did you forget to load it?');
                }
            }
        }

        return globalLocale._abbr;
    }

    function defineLocale (name, config) {
        if (config !== null) {
            var locale, parentConfig = baseConfig;
            config.abbr = name;
            if (locales[name] != null) {
                deprecateSimple('defineLocaleOverride',
                        'use moment.updateLocale(localeName, config) to change ' +
                        'an existing locale. moment.defineLocale(localeName, ' +
                        'config) should only be used for creating a new locale ' +
                        'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
                parentConfig = locales[name]._config;
            } else if (config.parentLocale != null) {
                if (locales[config.parentLocale] != null) {
                    parentConfig = locales[config.parentLocale]._config;
                } else {
                    locale = loadLocale(config.parentLocale);
                    if (locale != null) {
                        parentConfig = locale._config;
                    } else {
                        if (!localeFamilies[config.parentLocale]) {
                            localeFamilies[config.parentLocale] = [];
                        }
                        localeFamilies[config.parentLocale].push({
                            name: name,
                            config: config
                        });
                        return null;
                    }
                }
            }
            locales[name] = new Locale(mergeConfigs(parentConfig, config));

            if (localeFamilies[name]) {
                localeFamilies[name].forEach(function (x) {
                    defineLocale(x.name, x.config);
                });
            }

            // backwards compat for now: also set the locale
            // make sure we set the locale AFTER all child locales have been
            // created, so we won't end up with the child locale set.
            getSetGlobalLocale(name);


            return locales[name];
        } else {
            // useful for testing
            delete locales[name];
            return null;
        }
    }

    function updateLocale(name, config) {
        if (config != null) {
            var locale, tmpLocale, parentConfig = baseConfig;
            // MERGE
            tmpLocale = loadLocale(name);
            if (tmpLocale != null) {
                parentConfig = tmpLocale._config;
            }
            config = mergeConfigs(parentConfig, config);
            locale = new Locale(config);
            locale.parentLocale = locales[name];
            locales[name] = locale;

            // backwards compat for now: also set the locale
            getSetGlobalLocale(name);
        } else {
            // pass null for config to unupdate, useful for tests
            if (locales[name] != null) {
                if (locales[name].parentLocale != null) {
                    locales[name] = locales[name].parentLocale;
                } else if (locales[name] != null) {
                    delete locales[name];
                }
            }
        }
        return locales[name];
    }

    // returns locale data
    function getLocale (key) {
        var locale;

        if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
        }

        if (!key) {
            return globalLocale;
        }

        if (!isArray(key)) {
            //short-circuit everything else
            locale = loadLocale(key);
            if (locale) {
                return locale;
            }
            key = [key];
        }

        return chooseLocale(key);
    }

    function listLocales() {
        return keys(locales);
    }

    function checkOverflow (m) {
        var overflow;
        var a = m._a;

        if (a && getParsingFlags(m).overflow === -2) {
            overflow =
                a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
                a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
                a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
                a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
                a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
                a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
                -1;

            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
                overflow = DATE;
            }
            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
                overflow = WEEK;
            }
            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
                overflow = WEEKDAY;
            }

            getParsingFlags(m).overflow = overflow;
        }

        return m;
    }

    // Pick the first defined of two or three arguments.
    function defaults(a, b, c) {
        if (a != null) {
            return a;
        }
        if (b != null) {
            return b;
        }
        return c;
    }

    function currentDateArray(config) {
        // hooks is actually the exported moment object
        var nowValue = new Date(hooks.now());
        if (config._useUTC) {
            return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
        }
        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function configFromArray (config) {
        var i, date, input = [], currentDate, expectedWeekday, yearToUse;

        if (config._d) {
            return;
        }

        currentDate = currentDateArray(config);

        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }

        //if the day of the year is set, figure out what it is
        if (config._dayOfYear != null) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

            if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
                getParsingFlags(config)._overflowDayOfYear = true;
            }

            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }

        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }

        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
        }

        // Check for 24:00:00.000
        if (config._a[HOUR] === 24 &&
                config._a[MINUTE] === 0 &&
                config._a[SECOND] === 0 &&
                config._a[MILLISECOND] === 0) {
            config._nextDay = true;
            config._a[HOUR] = 0;
        }

        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
        expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();

        // Apply timezone offset from input. The actual utcOffset can be changed
        // with parseZone.
        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }

        if (config._nextDay) {
            config._a[HOUR] = 24;
        }

        // check for mismatching day of week
        if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== expectedWeekday) {
            getParsingFlags(config).weekdayMismatch = true;
        }
    }

    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;

            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
            if (weekday < 1 || weekday > 7) {
                weekdayOverflow = true;
            }
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;

            var curWeek = weekOfYear(createLocal(), dow, doy);

            weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

            // Default to current week.
            week = defaults(w.w, curWeek.week);

            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < 0 || weekday > 6) {
                    weekdayOverflow = true;
                }
            } else if (w.e != null) {
                // local weekday -- counting starts from beginning of week
                weekday = w.e + dow;
                if (w.e < 0 || w.e > 6) {
                    weekdayOverflow = true;
                }
            } else {
                // default to beginning of week
                weekday = dow;
            }
        }
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
            getParsingFlags(config)._overflowWeeks = true;
        } else if (weekdayOverflow != null) {
            getParsingFlags(config)._overflowWeekday = true;
        } else {
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear;
        }
    }

    // iso 8601 regex
    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
    var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

    var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

    var isoDates = [
        ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
        ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
        ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
        ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
        ['YYYY-DDD', /\d{4}-\d{3}/],
        ['YYYY-MM', /\d{4}-\d\d/, false],
        ['YYYYYYMMDD', /[+-]\d{10}/],
        ['YYYYMMDD', /\d{8}/],
        // YYYYMM is NOT allowed by the standard
        ['GGGG[W]WWE', /\d{4}W\d{3}/],
        ['GGGG[W]WW', /\d{4}W\d{2}/, false],
        ['YYYYDDD', /\d{7}/]
    ];

    // iso time formats and regexes
    var isoTimes = [
        ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
        ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
        ['HH:mm:ss', /\d\d:\d\d:\d\d/],
        ['HH:mm', /\d\d:\d\d/],
        ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
        ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
        ['HHmmss', /\d\d\d\d\d\d/],
        ['HHmm', /\d\d\d\d/],
        ['HH', /\d\d/]
    ];

    var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

    // date from iso format
    function configFromISO(config) {
        var i, l,
            string = config._i,
            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
            allowTime, dateFormat, timeFormat, tzFormat;

        if (match) {
            getParsingFlags(config).iso = true;

            for (i = 0, l = isoDates.length; i < l; i++) {
                if (isoDates[i][1].exec(match[1])) {
                    dateFormat = isoDates[i][0];
                    allowTime = isoDates[i][2] !== false;
                    break;
                }
            }
            if (dateFormat == null) {
                config._isValid = false;
                return;
            }
            if (match[3]) {
                for (i = 0, l = isoTimes.length; i < l; i++) {
                    if (isoTimes[i][1].exec(match[3])) {
                        // match[2] should be 'T' or space
                        timeFormat = (match[2] || ' ') + isoTimes[i][0];
                        break;
                    }
                }
                if (timeFormat == null) {
                    config._isValid = false;
                    return;
                }
            }
            if (!allowTime && timeFormat != null) {
                config._isValid = false;
                return;
            }
            if (match[4]) {
                if (tzRegex.exec(match[4])) {
                    tzFormat = 'Z';
                } else {
                    config._isValid = false;
                    return;
                }
            }
            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
            configFromStringAndFormat(config);
        } else {
            config._isValid = false;
        }
    }

    // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
    var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

    function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
        var result = [
            untruncateYear(yearStr),
            defaultLocaleMonthsShort.indexOf(monthStr),
            parseInt(dayStr, 10),
            parseInt(hourStr, 10),
            parseInt(minuteStr, 10)
        ];

        if (secondStr) {
            result.push(parseInt(secondStr, 10));
        }

        return result;
    }

    function untruncateYear(yearStr) {
        var year = parseInt(yearStr, 10);
        if (year <= 49) {
            return 2000 + year;
        } else if (year <= 999) {
            return 1900 + year;
        }
        return year;
    }

    function preprocessRFC2822(s) {
        // Remove comments and folding whitespace and replace multiple-spaces with a single space
        return s.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    }

    function checkWeekday(weekdayStr, parsedInput, config) {
        if (weekdayStr) {
            // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
            var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
                weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
            if (weekdayProvided !== weekdayActual) {
                getParsingFlags(config).weekdayMismatch = true;
                config._isValid = false;
                return false;
            }
        }
        return true;
    }

    var obsOffsets = {
        UT: 0,
        GMT: 0,
        EDT: -4 * 60,
        EST: -5 * 60,
        CDT: -5 * 60,
        CST: -6 * 60,
        MDT: -6 * 60,
        MST: -7 * 60,
        PDT: -7 * 60,
        PST: -8 * 60
    };

    function calculateOffset(obsOffset, militaryOffset, numOffset) {
        if (obsOffset) {
            return obsOffsets[obsOffset];
        } else if (militaryOffset) {
            // the only allowed military tz is Z
            return 0;
        } else {
            var hm = parseInt(numOffset, 10);
            var m = hm % 100, h = (hm - m) / 100;
            return h * 60 + m;
        }
    }

    // date and time from ref 2822 format
    function configFromRFC2822(config) {
        var match = rfc2822.exec(preprocessRFC2822(config._i));
        if (match) {
            var parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
            if (!checkWeekday(match[1], parsedArray, config)) {
                return;
            }

            config._a = parsedArray;
            config._tzm = calculateOffset(match[8], match[9], match[10]);

            config._d = createUTCDate.apply(null, config._a);
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

            getParsingFlags(config).rfc2822 = true;
        } else {
            config._isValid = false;
        }
    }

    // date from iso format or fallback
    function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);

        if (matched !== null) {
            config._d = new Date(+matched[1]);
            return;
        }

        configFromISO(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        configFromRFC2822(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        // Final attempt, use Input Fallback
        hooks.createFromInputFallback(config);
    }

    hooks.createFromInputFallback = deprecate(
        'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
        'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
        'discouraged and will be removed in an upcoming major release. Please refer to ' +
        'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
        function (config) {
            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
        }
    );

    // constant that refers to the ISO standard
    hooks.ISO_8601 = function () {};

    // constant that refers to the RFC 2822 form
    hooks.RFC_2822 = function () {};

    // date from string and format string
    function configFromStringAndFormat(config) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (config._f === hooks.ISO_8601) {
            configFromISO(config);
            return;
        }
        if (config._f === hooks.RFC_2822) {
            configFromRFC2822(config);
            return;
        }
        config._a = [];
        getParsingFlags(config).empty = true;

        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = '' + config._i,
            i, parsedInput, tokens, token, skipped,
            stringLength = string.length,
            totalParsedInputLength = 0;

        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
            // console.log('token', token, 'parsedInput', parsedInput,
            //         'regex', getParseRegexForToken(token, config));
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    getParsingFlags(config).unusedInput.push(skipped);
                }
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    getParsingFlags(config).empty = false;
                }
                else {
                    getParsingFlags(config).unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            }
            else if (config._strict && !parsedInput) {
                getParsingFlags(config).unusedTokens.push(token);
            }
        }

        // add remaining unparsed input length to the string
        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) {
            getParsingFlags(config).unusedInput.push(string);
        }

        // clear _12h flag if hour is <= 12
        if (config._a[HOUR] <= 12 &&
            getParsingFlags(config).bigHour === true &&
            config._a[HOUR] > 0) {
            getParsingFlags(config).bigHour = undefined;
        }

        getParsingFlags(config).parsedDateParts = config._a.slice(0);
        getParsingFlags(config).meridiem = config._meridiem;
        // handle meridiem
        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

        configFromArray(config);
        checkOverflow(config);
    }


    function meridiemFixWrap (locale, hour, meridiem) {
        var isPm;

        if (meridiem == null) {
            // nothing to do
            return hour;
        }
        if (locale.meridiemHour != null) {
            return locale.meridiemHour(hour, meridiem);
        } else if (locale.isPM != null) {
            // Fallback
            isPm = locale.isPM(meridiem);
            if (isPm && hour < 12) {
                hour += 12;
            }
            if (!isPm && hour === 12) {
                hour = 0;
            }
            return hour;
        } else {
            // this is not supposed to happen
            return hour;
        }
    }

    // date from string and array of format strings
    function configFromStringAndArray(config) {
        var tempConfig,
            bestMoment,

            scoreToBeat,
            i,
            currentScore;

        if (config._f.length === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }

        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
                tempConfig._useUTC = config._useUTC;
            }
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);

            if (!isValid(tempConfig)) {
                continue;
            }

            // if there is any input that was not parsed add a penalty for that format
            currentScore += getParsingFlags(tempConfig).charsLeftOver;

            //or tokens
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

            getParsingFlags(tempConfig).score = currentScore;

            if (scoreToBeat == null || currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }

        extend(config, bestMoment || tempConfig);
    }

    function configFromObject(config) {
        if (config._d) {
            return;
        }

        var i = normalizeObjectUnits(config._i);
        config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
            return obj && parseInt(obj, 10);
        });

        configFromArray(config);
    }

    function createFromConfig (config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        if (res._nextDay) {
            // Adding is smart enough around DST
            res.add(1, 'd');
            res._nextDay = undefined;
        }

        return res;
    }

    function prepareConfig (config) {
        var input = config._i,
            format = config._f;

        config._locale = config._locale || getLocale(config._l);

        if (input === null || (format === undefined && input === '')) {
            return createInvalid({nullInput: true});
        }

        if (typeof input === 'string') {
            config._i = input = config._locale.preparse(input);
        }

        if (isMoment(input)) {
            return new Moment(checkOverflow(input));
        } else if (isDate(input)) {
            config._d = input;
        } else if (isArray(format)) {
            configFromStringAndArray(config);
        } else if (format) {
            configFromStringAndFormat(config);
        }  else {
            configFromInput(config);
        }

        if (!isValid(config)) {
            config._d = null;
        }

        return config;
    }

    function configFromInput(config) {
        var input = config._i;
        if (isUndefined(input)) {
            config._d = new Date(hooks.now());
        } else if (isDate(input)) {
            config._d = new Date(input.valueOf());
        } else if (typeof input === 'string') {
            configFromString(config);
        } else if (isArray(input)) {
            config._a = map(input.slice(0), function (obj) {
                return parseInt(obj, 10);
            });
            configFromArray(config);
        } else if (isObject(input)) {
            configFromObject(config);
        } else if (isNumber(input)) {
            // from milliseconds
            config._d = new Date(input);
        } else {
            hooks.createFromInputFallback(config);
        }
    }

    function createLocalOrUTC (input, format, locale, strict, isUTC) {
        var c = {};

        if (locale === true || locale === false) {
            strict = locale;
            locale = undefined;
        }

        if ((isObject(input) && isObjectEmpty(input)) ||
                (isArray(input) && input.length === 0)) {
            input = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;

        return createFromConfig(c);
    }

    function createLocal (input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, false);
    }

    var prototypeMin = deprecate(
        'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
        function () {
            var other = createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other < this ? this : other;
            } else {
                return createInvalid();
            }
        }
    );

    var prototypeMax = deprecate(
        'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
        function () {
            var other = createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other > this ? this : other;
            } else {
                return createInvalid();
            }
        }
    );

    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
        }
        if (!moments.length) {
            return createLocal();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
            if (!moments[i].isValid() || moments[i][fn](res)) {
                res = moments[i];
            }
        }
        return res;
    }

    // TODO: Use [].sort instead?
    function min () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isBefore', args);
    }

    function max () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isAfter', args);
    }

    var now = function () {
        return Date.now ? Date.now() : +(new Date());
    };

    var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];

    function isDurationValid(m) {
        for (var key in m) {
            if (!(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
                return false;
            }
        }

        var unitHasDecimal = false;
        for (var i = 0; i < ordering.length; ++i) {
            if (m[ordering[i]]) {
                if (unitHasDecimal) {
                    return false; // only allow non-integers for smallest unit
                }
                if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                    unitHasDecimal = true;
                }
            }
        }

        return true;
    }

    function isValid$1() {
        return this._isValid;
    }

    function createInvalid$1() {
        return createDuration(NaN);
    }

    function Duration (duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;

        this._isValid = isDurationValid(normalizedInput);

        // representation for dateAddRemove
        this._milliseconds = +milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days +
            weeks * 7;
        // It is impossible to translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months +
            quarters * 3 +
            years * 12;

        this._data = {};

        this._locale = getLocale();

        this._bubble();
    }

    function isDuration (obj) {
        return obj instanceof Duration;
    }

    function absRound (number) {
        if (number < 0) {
            return Math.round(-1 * number) * -1;
        } else {
            return Math.round(number);
        }
    }

    // FORMATTING

    function offset (token, separator) {
        addFormatToken(token, 0, 0, function () {
            var offset = this.utcOffset();
            var sign = '+';
            if (offset < 0) {
                offset = -offset;
                sign = '-';
            }
            return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
        });
    }

    offset('Z', ':');
    offset('ZZ', '');

    // PARSING

    addRegexToken('Z',  matchShortOffset);
    addRegexToken('ZZ', matchShortOffset);
    addParseToken(['Z', 'ZZ'], function (input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
    });

    // HELPERS

    // timezone chunker
    // '+10:00' > ['10',  '00']
    // '-1530'  > ['-15', '30']
    var chunkOffset = /([\+\-]|\d\d)/gi;

    function offsetFromString(matcher, string) {
        var matches = (string || '').match(matcher);

        if (matches === null) {
            return null;
        }

        var chunk   = matches[matches.length - 1] || [];
        var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
        var minutes = +(parts[1] * 60) + toInt(parts[2]);

        return minutes === 0 ?
          0 :
          parts[0] === '+' ? minutes : -minutes;
    }

    // Return a moment from input, that is local/utc/zone equivalent to model.
    function cloneWithOffset(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
            // Use low-level api, because this fn is low-level api.
            res._d.setTime(res._d.valueOf() + diff);
            hooks.updateOffset(res, false);
            return res;
        } else {
            return createLocal(input).local();
        }
    }

    function getDateOffset (m) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
    }

    // HOOKS

    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    hooks.updateOffset = function () {};

    // MOMENTS

    // keepLocalTime = true means only change the timezone, without
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
    // +0200, so we adjust the time as needed, to be valid.
    //
    // Keeping the time actually adds/subtracts (one hour)
    // from the actual represented time. That is why we call updateOffset
    // a second time. In case it wants us to change the offset again
    // _changeInProgress == true case, then we have to adjust, because
    // there is no such time in the given timezone.
    function getSetOffset (input, keepLocalTime, keepMinutes) {
        var offset = this._offset || 0,
            localAdjust;
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        if (input != null) {
            if (typeof input === 'string') {
                input = offsetFromString(matchShortOffset, input);
                if (input === null) {
                    return this;
                }
            } else if (Math.abs(input) < 16 && !keepMinutes) {
                input = input * 60;
            }
            if (!this._isUTC && keepLocalTime) {
                localAdjust = getDateOffset(this);
            }
            this._offset = input;
            this._isUTC = true;
            if (localAdjust != null) {
                this.add(localAdjust, 'm');
            }
            if (offset !== input) {
                if (!keepLocalTime || this._changeInProgress) {
                    addSubtract(this, createDuration(input - offset, 'm'), 1, false);
                } else if (!this._changeInProgress) {
                    this._changeInProgress = true;
                    hooks.updateOffset(this, true);
                    this._changeInProgress = null;
                }
            }
            return this;
        } else {
            return this._isUTC ? offset : getDateOffset(this);
        }
    }

    function getSetZone (input, keepLocalTime) {
        if (input != null) {
            if (typeof input !== 'string') {
                input = -input;
            }

            this.utcOffset(input, keepLocalTime);

            return this;
        } else {
            return -this.utcOffset();
        }
    }

    function setOffsetToUTC (keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
    }

    function setOffsetToLocal (keepLocalTime) {
        if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;

            if (keepLocalTime) {
                this.subtract(getDateOffset(this), 'm');
            }
        }
        return this;
    }

    function setOffsetToParsedOffset () {
        if (this._tzm != null) {
            this.utcOffset(this._tzm, false, true);
        } else if (typeof this._i === 'string') {
            var tZone = offsetFromString(matchOffset, this._i);
            if (tZone != null) {
                this.utcOffset(tZone);
            }
            else {
                this.utcOffset(0, true);
            }
        }
        return this;
    }

    function hasAlignedHourOffset (input) {
        if (!this.isValid()) {
            return false;
        }
        input = input ? createLocal(input).utcOffset() : 0;

        return (this.utcOffset() - input) % 60 === 0;
    }

    function isDaylightSavingTime () {
        return (
            this.utcOffset() > this.clone().month(0).utcOffset() ||
            this.utcOffset() > this.clone().month(5).utcOffset()
        );
    }

    function isDaylightSavingTimeShifted () {
        if (!isUndefined(this._isDSTShifted)) {
            return this._isDSTShifted;
        }

        var c = {};

        copyConfig(c, this);
        c = prepareConfig(c);

        if (c._a) {
            var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
            this._isDSTShifted = this.isValid() &&
                compareArrays(c._a, other.toArray()) > 0;
        } else {
            this._isDSTShifted = false;
        }

        return this._isDSTShifted;
    }

    function isLocal () {
        return this.isValid() ? !this._isUTC : false;
    }

    function isUtcOffset () {
        return this.isValid() ? this._isUTC : false;
    }

    function isUtc () {
        return this.isValid() ? this._isUTC && this._offset === 0 : false;
    }

    // ASP.NET json date format regex
    var aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;

    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
    // and further modified to allow for strings containing both week and day
    var isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

    function createDuration (input, key) {
        var duration = input,
            // matching against regexp is expensive, do it on demand
            match = null,
            sign,
            ret,
            diffRes;

        if (isDuration(input)) {
            duration = {
                ms : input._milliseconds,
                d  : input._days,
                M  : input._months
            };
        } else if (isNumber(input)) {
            duration = {};
            if (key) {
                duration[key] = input;
            } else {
                duration.milliseconds = input;
            }
        } else if (!!(match = aspNetRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y  : 0,
                d  : toInt(match[DATE])                         * sign,
                h  : toInt(match[HOUR])                         * sign,
                m  : toInt(match[MINUTE])                       * sign,
                s  : toInt(match[SECOND])                       * sign,
                ms : toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
            };
        } else if (!!(match = isoRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y : parseIso(match[2], sign),
                M : parseIso(match[3], sign),
                w : parseIso(match[4], sign),
                d : parseIso(match[5], sign),
                h : parseIso(match[6], sign),
                m : parseIso(match[7], sign),
                s : parseIso(match[8], sign)
            };
        } else if (duration == null) {// checks for null or undefined
            duration = {};
        } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
            diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));

            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }

        ret = new Duration(duration);

        if (isDuration(input) && hasOwnProp(input, '_locale')) {
            ret._locale = input._locale;
        }

        return ret;
    }

    createDuration.fn = Duration.prototype;
    createDuration.invalid = createInvalid$1;

    function parseIso (inp, sign) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var res = inp && parseFloat(inp.replace(',', '.'));
        // apply sign while we're at it
        return (isNaN(res) ? 0 : res) * sign;
    }

    function positiveMomentsDifference(base, other) {
        var res = {};

        res.months = other.month() - base.month() +
            (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, 'M').isAfter(other)) {
            --res.months;
        }

        res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

        return res;
    }

    function momentsDifference(base, other) {
        var res;
        if (!(base.isValid() && other.isValid())) {
            return {milliseconds: 0, months: 0};
        }

        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
        } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }

        return res;
    }

    // TODO: remove 'name' arg after deprecation is removed
    function createAdder(direction, name) {
        return function (val, period) {
            var dur, tmp;
            //invert the arguments, but complain about it
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' +
                'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
                tmp = val; val = period; period = tmp;
            }

            val = typeof val === 'string' ? +val : val;
            dur = createDuration(val, period);
            addSubtract(this, dur, direction);
            return this;
        };
    }

    function addSubtract (mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = absRound(duration._days),
            months = absRound(duration._months);

        if (!mom.isValid()) {
            // No op
            return;
        }

        updateOffset = updateOffset == null ? true : updateOffset;

        if (months) {
            setMonth(mom, get(mom, 'Month') + months * isAdding);
        }
        if (days) {
            set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
        }
        if (milliseconds) {
            mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
        }
        if (updateOffset) {
            hooks.updateOffset(mom, days || months);
        }
    }

    var add      = createAdder(1, 'add');
    var subtract = createAdder(-1, 'subtract');

    function getCalendarFormat(myMoment, now) {
        var diff = myMoment.diff(now, 'days', true);
        return diff < -6 ? 'sameElse' :
                diff < -1 ? 'lastWeek' :
                diff < 0 ? 'lastDay' :
                diff < 1 ? 'sameDay' :
                diff < 2 ? 'nextDay' :
                diff < 7 ? 'nextWeek' : 'sameElse';
    }

    function calendar$1 (time, formats) {
        // We want to compare the start of today, vs this.
        // Getting start-of-today depends on whether we're local/utc/offset or not.
        var now = time || createLocal(),
            sod = cloneWithOffset(now, this).startOf('day'),
            format = hooks.calendarFormat(this, sod) || 'sameElse';

        var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);

        return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
    }

    function clone () {
        return new Moment(this);
    }

    function isAfter (input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() > localInput.valueOf();
        } else {
            return localInput.valueOf() < this.clone().startOf(units).valueOf();
        }
    }

    function isBefore (input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() < localInput.valueOf();
        } else {
            return this.clone().endOf(units).valueOf() < localInput.valueOf();
        }
    }

    function isBetween (from, to, units, inclusivity) {
        var localFrom = isMoment(from) ? from : createLocal(from),
            localTo = isMoment(to) ? to : createLocal(to);
        if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
            return false;
        }
        inclusivity = inclusivity || '()';
        return (inclusivity[0] === '(' ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) &&
            (inclusivity[1] === ')' ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
    }

    function isSame (input, units) {
        var localInput = isMoment(input) ? input : createLocal(input),
            inputMs;
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() === localInput.valueOf();
        } else {
            inputMs = localInput.valueOf();
            return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
        }
    }

    function isSameOrAfter (input, units) {
        return this.isSame(input, units) || this.isAfter(input, units);
    }

    function isSameOrBefore (input, units) {
        return this.isSame(input, units) || this.isBefore(input, units);
    }

    function diff (input, units, asFloat) {
        var that,
            zoneDelta,
            output;

        if (!this.isValid()) {
            return NaN;
        }

        that = cloneWithOffset(input, this);

        if (!that.isValid()) {
            return NaN;
        }

        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

        units = normalizeUnits(units);

        switch (units) {
            case 'year': output = monthDiff(this, that) / 12; break;
            case 'month': output = monthDiff(this, that); break;
            case 'quarter': output = monthDiff(this, that) / 3; break;
            case 'second': output = (this - that) / 1e3; break; // 1000
            case 'minute': output = (this - that) / 6e4; break; // 1000 * 60
            case 'hour': output = (this - that) / 36e5; break; // 1000 * 60 * 60
            case 'day': output = (this - that - zoneDelta) / 864e5; break; // 1000 * 60 * 60 * 24, negate dst
            case 'week': output = (this - that - zoneDelta) / 6048e5; break; // 1000 * 60 * 60 * 24 * 7, negate dst
            default: output = this - that;
        }

        return asFloat ? output : absFloor(output);
    }

    function monthDiff (a, b) {
        // difference in months
        var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
            // b is in (anchor - 1 month, anchor + 1 month)
            anchor = a.clone().add(wholeMonthDiff, 'months'),
            anchor2, adjust;

        if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor - anchor2);
        } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor2 - anchor);
        }

        //check for negative zero, return zero if negative zero
        return -(wholeMonthDiff + adjust) || 0;
    }

    hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
    hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

    function toString () {
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }

    function toISOString(keepOffset) {
        if (!this.isValid()) {
            return null;
        }
        var utc = keepOffset !== true;
        var m = utc ? this.clone().utc() : this;
        if (m.year() < 0 || m.year() > 9999) {
            return formatMoment(m, utc ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ');
        }
        if (isFunction(Date.prototype.toISOString)) {
            // native implementation is ~50x faster, use it when we can
            if (utc) {
                return this.toDate().toISOString();
            } else {
                return new Date(this.valueOf() + this.utcOffset() * 60 * 1000).toISOString().replace('Z', formatMoment(m, 'Z'));
            }
        }
        return formatMoment(m, utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
    }

    /**
     * Return a human readable representation of a moment that can
     * also be evaluated to get a new moment which is the same
     *
     * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
     */
    function inspect () {
        if (!this.isValid()) {
            return 'moment.invalid(/* ' + this._i + ' */)';
        }
        var func = 'moment';
        var zone = '';
        if (!this.isLocal()) {
            func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
            zone = 'Z';
        }
        var prefix = '[' + func + '("]';
        var year = (0 <= this.year() && this.year() <= 9999) ? 'YYYY' : 'YYYYYY';
        var datetime = '-MM-DD[T]HH:mm:ss.SSS';
        var suffix = zone + '[")]';

        return this.format(prefix + year + datetime + suffix);
    }

    function format (inputString) {
        if (!inputString) {
            inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
        }
        var output = formatMoment(this, inputString);
        return this.localeData().postformat(output);
    }

    function from (time, withoutSuffix) {
        if (this.isValid() &&
                ((isMoment(time) && time.isValid()) ||
                 createLocal(time).isValid())) {
            return createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function fromNow (withoutSuffix) {
        return this.from(createLocal(), withoutSuffix);
    }

    function to (time, withoutSuffix) {
        if (this.isValid() &&
                ((isMoment(time) && time.isValid()) ||
                 createLocal(time).isValid())) {
            return createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function toNow (withoutSuffix) {
        return this.to(createLocal(), withoutSuffix);
    }

    // If passed a locale key, it will set the locale for this
    // instance.  Otherwise, it will return the locale configuration
    // variables for this instance.
    function locale (key) {
        var newLocaleData;

        if (key === undefined) {
            return this._locale._abbr;
        } else {
            newLocaleData = getLocale(key);
            if (newLocaleData != null) {
                this._locale = newLocaleData;
            }
            return this;
        }
    }

    var lang = deprecate(
        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
        function (key) {
            if (key === undefined) {
                return this.localeData();
            } else {
                return this.locale(key);
            }
        }
    );

    function localeData () {
        return this._locale;
    }

    var MS_PER_SECOND = 1000;
    var MS_PER_MINUTE = 60 * MS_PER_SECOND;
    var MS_PER_HOUR = 60 * MS_PER_MINUTE;
    var MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;

    // actual modulo - handles negative numbers (for dates before 1970):
    function mod$1(dividend, divisor) {
        return (dividend % divisor + divisor) % divisor;
    }

    function localStartOfDate(y, m, d) {
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            return new Date(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
            return new Date(y, m, d).valueOf();
        }
    }

    function utcStartOfDate(y, m, d) {
        // Date.UTC remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
            return Date.UTC(y, m, d);
        }
    }

    function startOf (units) {
        var time;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) {
            return this;
        }

        var startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

        switch (units) {
            case 'year':
                time = startOfDate(this.year(), 0, 1);
                break;
            case 'quarter':
                time = startOfDate(this.year(), this.month() - this.month() % 3, 1);
                break;
            case 'month':
                time = startOfDate(this.year(), this.month(), 1);
                break;
            case 'week':
                time = startOfDate(this.year(), this.month(), this.date() - this.weekday());
                break;
            case 'isoWeek':
                time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date());
                break;
            case 'hour':
                time = this._d.valueOf();
                time -= mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR);
                break;
            case 'minute':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_MINUTE);
                break;
            case 'second':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_SECOND);
                break;
        }

        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }

    function endOf (units) {
        var time;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) {
            return this;
        }

        var startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

        switch (units) {
            case 'year':
                time = startOfDate(this.year() + 1, 0, 1) - 1;
                break;
            case 'quarter':
                time = startOfDate(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                break;
            case 'month':
                time = startOfDate(this.year(), this.month() + 1, 1) - 1;
                break;
            case 'week':
                time = startOfDate(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                break;
            case 'isoWeek':
                time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
                break;
            case 'hour':
                time = this._d.valueOf();
                time += MS_PER_HOUR - mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR) - 1;
                break;
            case 'minute':
                time = this._d.valueOf();
                time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
                break;
            case 'second':
                time = this._d.valueOf();
                time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
                break;
        }

        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }

    function valueOf () {
        return this._d.valueOf() - ((this._offset || 0) * 60000);
    }

    function unix () {
        return Math.floor(this.valueOf() / 1000);
    }

    function toDate () {
        return new Date(this.valueOf());
    }

    function toArray () {
        var m = this;
        return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
    }

    function toObject () {
        var m = this;
        return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds()
        };
    }

    function toJSON () {
        // new Date(NaN).toJSON() === null
        return this.isValid() ? this.toISOString() : null;
    }

    function isValid$2 () {
        return isValid(this);
    }

    function parsingFlags () {
        return extend({}, getParsingFlags(this));
    }

    function invalidAt () {
        return getParsingFlags(this).overflow;
    }

    function creationData() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        };
    }

    // FORMATTING

    addFormatToken(0, ['gg', 2], 0, function () {
        return this.weekYear() % 100;
    });

    addFormatToken(0, ['GG', 2], 0, function () {
        return this.isoWeekYear() % 100;
    });

    function addWeekYearFormatToken (token, getter) {
        addFormatToken(0, [token, token.length], 0, getter);
    }

    addWeekYearFormatToken('gggg',     'weekYear');
    addWeekYearFormatToken('ggggg',    'weekYear');
    addWeekYearFormatToken('GGGG',  'isoWeekYear');
    addWeekYearFormatToken('GGGGG', 'isoWeekYear');

    // ALIASES

    addUnitAlias('weekYear', 'gg');
    addUnitAlias('isoWeekYear', 'GG');

    // PRIORITY

    addUnitPriority('weekYear', 1);
    addUnitPriority('isoWeekYear', 1);


    // PARSING

    addRegexToken('G',      matchSigned);
    addRegexToken('g',      matchSigned);
    addRegexToken('GG',     match1to2, match2);
    addRegexToken('gg',     match1to2, match2);
    addRegexToken('GGGG',   match1to4, match4);
    addRegexToken('gggg',   match1to4, match4);
    addRegexToken('GGGGG',  match1to6, match6);
    addRegexToken('ggggg',  match1to6, match6);

    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
        week[token.substr(0, 2)] = toInt(input);
    });

    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
        week[token] = hooks.parseTwoDigitYear(input);
    });

    // MOMENTS

    function getSetWeekYear (input) {
        return getSetWeekYearHelper.call(this,
                input,
                this.week(),
                this.weekday(),
                this.localeData()._week.dow,
                this.localeData()._week.doy);
    }

    function getSetISOWeekYear (input) {
        return getSetWeekYearHelper.call(this,
                input, this.isoWeek(), this.isoWeekday(), 1, 4);
    }

    function getISOWeeksInYear () {
        return weeksInYear(this.year(), 1, 4);
    }

    function getWeeksInYear () {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }

    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
        var weeksTarget;
        if (input == null) {
            return weekOfYear(this, dow, doy).year;
        } else {
            weeksTarget = weeksInYear(input, dow, doy);
            if (week > weeksTarget) {
                week = weeksTarget;
            }
            return setWeekAll.call(this, input, week, weekday, dow, doy);
        }
    }

    function setWeekAll(weekYear, week, weekday, dow, doy) {
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

        this.year(date.getUTCFullYear());
        this.month(date.getUTCMonth());
        this.date(date.getUTCDate());
        return this;
    }

    // FORMATTING

    addFormatToken('Q', 0, 'Qo', 'quarter');

    // ALIASES

    addUnitAlias('quarter', 'Q');

    // PRIORITY

    addUnitPriority('quarter', 7);

    // PARSING

    addRegexToken('Q', match1);
    addParseToken('Q', function (input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
    });

    // MOMENTS

    function getSetQuarter (input) {
        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
    }

    // FORMATTING

    addFormatToken('D', ['DD', 2], 'Do', 'date');

    // ALIASES

    addUnitAlias('date', 'D');

    // PRIORITY
    addUnitPriority('date', 9);

    // PARSING

    addRegexToken('D',  match1to2);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', function (isStrict, locale) {
        // TODO: Remove "ordinalParse" fallback in next major release.
        return isStrict ?
          (locale._dayOfMonthOrdinalParse || locale._ordinalParse) :
          locale._dayOfMonthOrdinalParseLenient;
    });

    addParseToken(['D', 'DD'], DATE);
    addParseToken('Do', function (input, array) {
        array[DATE] = toInt(input.match(match1to2)[0]);
    });

    // MOMENTS

    var getSetDayOfMonth = makeGetSet('Date', true);

    // FORMATTING

    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

    // ALIASES

    addUnitAlias('dayOfYear', 'DDD');

    // PRIORITY
    addUnitPriority('dayOfYear', 4);

    // PARSING

    addRegexToken('DDD',  match1to3);
    addRegexToken('DDDD', match3);
    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
        config._dayOfYear = toInt(input);
    });

    // HELPERS

    // MOMENTS

    function getSetDayOfYear (input) {
        var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
        return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
    }

    // FORMATTING

    addFormatToken('m', ['mm', 2], 0, 'minute');

    // ALIASES

    addUnitAlias('minute', 'm');

    // PRIORITY

    addUnitPriority('minute', 14);

    // PARSING

    addRegexToken('m',  match1to2);
    addRegexToken('mm', match1to2, match2);
    addParseToken(['m', 'mm'], MINUTE);

    // MOMENTS

    var getSetMinute = makeGetSet('Minutes', false);

    // FORMATTING

    addFormatToken('s', ['ss', 2], 0, 'second');

    // ALIASES

    addUnitAlias('second', 's');

    // PRIORITY

    addUnitPriority('second', 15);

    // PARSING

    addRegexToken('s',  match1to2);
    addRegexToken('ss', match1to2, match2);
    addParseToken(['s', 'ss'], SECOND);

    // MOMENTS

    var getSetSecond = makeGetSet('Seconds', false);

    // FORMATTING

    addFormatToken('S', 0, 0, function () {
        return ~~(this.millisecond() / 100);
    });

    addFormatToken(0, ['SS', 2], 0, function () {
        return ~~(this.millisecond() / 10);
    });

    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
    addFormatToken(0, ['SSSS', 4], 0, function () {
        return this.millisecond() * 10;
    });
    addFormatToken(0, ['SSSSS', 5], 0, function () {
        return this.millisecond() * 100;
    });
    addFormatToken(0, ['SSSSSS', 6], 0, function () {
        return this.millisecond() * 1000;
    });
    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
        return this.millisecond() * 10000;
    });
    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
        return this.millisecond() * 100000;
    });
    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
        return this.millisecond() * 1000000;
    });


    // ALIASES

    addUnitAlias('millisecond', 'ms');

    // PRIORITY

    addUnitPriority('millisecond', 16);

    // PARSING

    addRegexToken('S',    match1to3, match1);
    addRegexToken('SS',   match1to3, match2);
    addRegexToken('SSS',  match1to3, match3);

    var token;
    for (token = 'SSSS'; token.length <= 9; token += 'S') {
        addRegexToken(token, matchUnsigned);
    }

    function parseMs(input, array) {
        array[MILLISECOND] = toInt(('0.' + input) * 1000);
    }

    for (token = 'S'; token.length <= 9; token += 'S') {
        addParseToken(token, parseMs);
    }
    // MOMENTS

    var getSetMillisecond = makeGetSet('Milliseconds', false);

    // FORMATTING

    addFormatToken('z',  0, 0, 'zoneAbbr');
    addFormatToken('zz', 0, 0, 'zoneName');

    // MOMENTS

    function getZoneAbbr () {
        return this._isUTC ? 'UTC' : '';
    }

    function getZoneName () {
        return this._isUTC ? 'Coordinated Universal Time' : '';
    }

    var proto = Moment.prototype;

    proto.add               = add;
    proto.calendar          = calendar$1;
    proto.clone             = clone;
    proto.diff              = diff;
    proto.endOf             = endOf;
    proto.format            = format;
    proto.from              = from;
    proto.fromNow           = fromNow;
    proto.to                = to;
    proto.toNow             = toNow;
    proto.get               = stringGet;
    proto.invalidAt         = invalidAt;
    proto.isAfter           = isAfter;
    proto.isBefore          = isBefore;
    proto.isBetween         = isBetween;
    proto.isSame            = isSame;
    proto.isSameOrAfter     = isSameOrAfter;
    proto.isSameOrBefore    = isSameOrBefore;
    proto.isValid           = isValid$2;
    proto.lang              = lang;
    proto.locale            = locale;
    proto.localeData        = localeData;
    proto.max               = prototypeMax;
    proto.min               = prototypeMin;
    proto.parsingFlags      = parsingFlags;
    proto.set               = stringSet;
    proto.startOf           = startOf;
    proto.subtract          = subtract;
    proto.toArray           = toArray;
    proto.toObject          = toObject;
    proto.toDate            = toDate;
    proto.toISOString       = toISOString;
    proto.inspect           = inspect;
    proto.toJSON            = toJSON;
    proto.toString          = toString;
    proto.unix              = unix;
    proto.valueOf           = valueOf;
    proto.creationData      = creationData;
    proto.year       = getSetYear;
    proto.isLeapYear = getIsLeapYear;
    proto.weekYear    = getSetWeekYear;
    proto.isoWeekYear = getSetISOWeekYear;
    proto.quarter = proto.quarters = getSetQuarter;
    proto.month       = getSetMonth;
    proto.daysInMonth = getDaysInMonth;
    proto.week           = proto.weeks        = getSetWeek;
    proto.isoWeek        = proto.isoWeeks     = getSetISOWeek;
    proto.weeksInYear    = getWeeksInYear;
    proto.isoWeeksInYear = getISOWeeksInYear;
    proto.date       = getSetDayOfMonth;
    proto.day        = proto.days             = getSetDayOfWeek;
    proto.weekday    = getSetLocaleDayOfWeek;
    proto.isoWeekday = getSetISODayOfWeek;
    proto.dayOfYear  = getSetDayOfYear;
    proto.hour = proto.hours = getSetHour;
    proto.minute = proto.minutes = getSetMinute;
    proto.second = proto.seconds = getSetSecond;
    proto.millisecond = proto.milliseconds = getSetMillisecond;
    proto.utcOffset            = getSetOffset;
    proto.utc                  = setOffsetToUTC;
    proto.local                = setOffsetToLocal;
    proto.parseZone            = setOffsetToParsedOffset;
    proto.hasAlignedHourOffset = hasAlignedHourOffset;
    proto.isDST                = isDaylightSavingTime;
    proto.isLocal              = isLocal;
    proto.isUtcOffset          = isUtcOffset;
    proto.isUtc                = isUtc;
    proto.isUTC                = isUtc;
    proto.zoneAbbr = getZoneAbbr;
    proto.zoneName = getZoneName;
    proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
    proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
    proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
    proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
    proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

    function createUnix (input) {
        return createLocal(input * 1000);
    }

    function createInZone () {
        return createLocal.apply(null, arguments).parseZone();
    }

    function preParsePostFormat (string) {
        return string;
    }

    var proto$1 = Locale.prototype;

    proto$1.calendar        = calendar;
    proto$1.longDateFormat  = longDateFormat;
    proto$1.invalidDate     = invalidDate;
    proto$1.ordinal         = ordinal;
    proto$1.preparse        = preParsePostFormat;
    proto$1.postformat      = preParsePostFormat;
    proto$1.relativeTime    = relativeTime;
    proto$1.pastFuture      = pastFuture;
    proto$1.set             = set;

    proto$1.months            =        localeMonths;
    proto$1.monthsShort       =        localeMonthsShort;
    proto$1.monthsParse       =        localeMonthsParse;
    proto$1.monthsRegex       = monthsRegex;
    proto$1.monthsShortRegex  = monthsShortRegex;
    proto$1.week = localeWeek;
    proto$1.firstDayOfYear = localeFirstDayOfYear;
    proto$1.firstDayOfWeek = localeFirstDayOfWeek;

    proto$1.weekdays       =        localeWeekdays;
    proto$1.weekdaysMin    =        localeWeekdaysMin;
    proto$1.weekdaysShort  =        localeWeekdaysShort;
    proto$1.weekdaysParse  =        localeWeekdaysParse;

    proto$1.weekdaysRegex       =        weekdaysRegex;
    proto$1.weekdaysShortRegex  =        weekdaysShortRegex;
    proto$1.weekdaysMinRegex    =        weekdaysMinRegex;

    proto$1.isPM = localeIsPM;
    proto$1.meridiem = localeMeridiem;

    function get$1 (format, index, field, setter) {
        var locale = getLocale();
        var utc = createUTC().set(setter, index);
        return locale[field](utc, format);
    }

    function listMonthsImpl (format, index, field) {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';

        if (index != null) {
            return get$1(format, index, field, 'month');
        }

        var i;
        var out = [];
        for (i = 0; i < 12; i++) {
            out[i] = get$1(format, i, field, 'month');
        }
        return out;
    }

    // ()
    // (5)
    // (fmt, 5)
    // (fmt)
    // (true)
    // (true, 5)
    // (true, fmt, 5)
    // (true, fmt)
    function listWeekdaysImpl (localeSorted, format, index, field) {
        if (typeof localeSorted === 'boolean') {
            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        } else {
            format = localeSorted;
            index = format;
            localeSorted = false;

            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        }

        var locale = getLocale(),
            shift = localeSorted ? locale._week.dow : 0;

        if (index != null) {
            return get$1(format, (index + shift) % 7, field, 'day');
        }

        var i;
        var out = [];
        for (i = 0; i < 7; i++) {
            out[i] = get$1(format, (i + shift) % 7, field, 'day');
        }
        return out;
    }

    function listMonths (format, index) {
        return listMonthsImpl(format, index, 'months');
    }

    function listMonthsShort (format, index) {
        return listMonthsImpl(format, index, 'monthsShort');
    }

    function listWeekdays (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
    }

    function listWeekdaysShort (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
    }

    function listWeekdaysMin (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
    }

    getSetGlobalLocale('en', {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (toInt(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        }
    });

    // Side effect imports

    hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
    hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);

    var mathAbs = Math.abs;

    function abs () {
        var data           = this._data;

        this._milliseconds = mathAbs(this._milliseconds);
        this._days         = mathAbs(this._days);
        this._months       = mathAbs(this._months);

        data.milliseconds  = mathAbs(data.milliseconds);
        data.seconds       = mathAbs(data.seconds);
        data.minutes       = mathAbs(data.minutes);
        data.hours         = mathAbs(data.hours);
        data.months        = mathAbs(data.months);
        data.years         = mathAbs(data.years);

        return this;
    }

    function addSubtract$1 (duration, input, value, direction) {
        var other = createDuration(input, value);

        duration._milliseconds += direction * other._milliseconds;
        duration._days         += direction * other._days;
        duration._months       += direction * other._months;

        return duration._bubble();
    }

    // supports only 2.0-style add(1, 's') or add(duration)
    function add$1 (input, value) {
        return addSubtract$1(this, input, value, 1);
    }

    // supports only 2.0-style subtract(1, 's') or subtract(duration)
    function subtract$1 (input, value) {
        return addSubtract$1(this, input, value, -1);
    }

    function absCeil (number) {
        if (number < 0) {
            return Math.floor(number);
        } else {
            return Math.ceil(number);
        }
    }

    function bubble () {
        var milliseconds = this._milliseconds;
        var days         = this._days;
        var months       = this._months;
        var data         = this._data;
        var seconds, minutes, hours, years, monthsFromDays;

        // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166
        if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
                (milliseconds <= 0 && days <= 0 && months <= 0))) {
            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
            days = 0;
            months = 0;
        }

        // The following code bubbles up values, see the tests for
        // examples of what that means.
        data.milliseconds = milliseconds % 1000;

        seconds           = absFloor(milliseconds / 1000);
        data.seconds      = seconds % 60;

        minutes           = absFloor(seconds / 60);
        data.minutes      = minutes % 60;

        hours             = absFloor(minutes / 60);
        data.hours        = hours % 24;

        days += absFloor(hours / 24);

        // convert days to months
        monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays));

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;

        data.days   = days;
        data.months = months;
        data.years  = years;

        return this;
    }

    function daysToMonths (days) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return days * 4800 / 146097;
    }

    function monthsToDays (months) {
        // the reverse of daysToMonths
        return months * 146097 / 4800;
    }

    function as (units) {
        if (!this.isValid()) {
            return NaN;
        }
        var days;
        var months;
        var milliseconds = this._milliseconds;

        units = normalizeUnits(units);

        if (units === 'month' || units === 'quarter' || units === 'year') {
            days = this._days + milliseconds / 864e5;
            months = this._months + daysToMonths(days);
            switch (units) {
                case 'month':   return months;
                case 'quarter': return months / 3;
                case 'year':    return months / 12;
            }
        } else {
            // handle milliseconds separately because of floating point math errors (issue #1867)
            days = this._days + Math.round(monthsToDays(this._months));
            switch (units) {
                case 'week'   : return days / 7     + milliseconds / 6048e5;
                case 'day'    : return days         + milliseconds / 864e5;
                case 'hour'   : return days * 24    + milliseconds / 36e5;
                case 'minute' : return days * 1440  + milliseconds / 6e4;
                case 'second' : return days * 86400 + milliseconds / 1000;
                // Math.floor prevents floating point math errors here
                case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
                default: throw new Error('Unknown unit ' + units);
            }
        }
    }

    // TODO: Use this.as('ms')?
    function valueOf$1 () {
        if (!this.isValid()) {
            return NaN;
        }
        return (
            this._milliseconds +
            this._days * 864e5 +
            (this._months % 12) * 2592e6 +
            toInt(this._months / 12) * 31536e6
        );
    }

    function makeAs (alias) {
        return function () {
            return this.as(alias);
        };
    }

    var asMilliseconds = makeAs('ms');
    var asSeconds      = makeAs('s');
    var asMinutes      = makeAs('m');
    var asHours        = makeAs('h');
    var asDays         = makeAs('d');
    var asWeeks        = makeAs('w');
    var asMonths       = makeAs('M');
    var asQuarters     = makeAs('Q');
    var asYears        = makeAs('y');

    function clone$1 () {
        return createDuration(this);
    }

    function get$2 (units) {
        units = normalizeUnits(units);
        return this.isValid() ? this[units + 's']() : NaN;
    }

    function makeGetter(name) {
        return function () {
            return this.isValid() ? this._data[name] : NaN;
        };
    }

    var milliseconds = makeGetter('milliseconds');
    var seconds      = makeGetter('seconds');
    var minutes      = makeGetter('minutes');
    var hours        = makeGetter('hours');
    var days         = makeGetter('days');
    var months       = makeGetter('months');
    var years        = makeGetter('years');

    function weeks () {
        return absFloor(this.days() / 7);
    }

    var round = Math.round;
    var thresholds = {
        ss: 44,         // a few seconds to seconds
        s : 45,         // seconds to minute
        m : 45,         // minutes to hour
        h : 22,         // hours to day
        d : 26,         // days to month
        M : 11          // months to year
    };

    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function relativeTime$1 (posNegDuration, withoutSuffix, locale) {
        var duration = createDuration(posNegDuration).abs();
        var seconds  = round(duration.as('s'));
        var minutes  = round(duration.as('m'));
        var hours    = round(duration.as('h'));
        var days     = round(duration.as('d'));
        var months   = round(duration.as('M'));
        var years    = round(duration.as('y'));

        var a = seconds <= thresholds.ss && ['s', seconds]  ||
                seconds < thresholds.s   && ['ss', seconds] ||
                minutes <= 1             && ['m']           ||
                minutes < thresholds.m   && ['mm', minutes] ||
                hours   <= 1             && ['h']           ||
                hours   < thresholds.h   && ['hh', hours]   ||
                days    <= 1             && ['d']           ||
                days    < thresholds.d   && ['dd', days]    ||
                months  <= 1             && ['M']           ||
                months  < thresholds.M   && ['MM', months]  ||
                years   <= 1             && ['y']           || ['yy', years];

        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale;
        return substituteTimeAgo.apply(null, a);
    }

    // This function allows you to set the rounding function for relative time strings
    function getSetRelativeTimeRounding (roundingFunction) {
        if (roundingFunction === undefined) {
            return round;
        }
        if (typeof(roundingFunction) === 'function') {
            round = roundingFunction;
            return true;
        }
        return false;
    }

    // This function allows you to set a threshold for relative time strings
    function getSetRelativeTimeThreshold (threshold, limit) {
        if (thresholds[threshold] === undefined) {
            return false;
        }
        if (limit === undefined) {
            return thresholds[threshold];
        }
        thresholds[threshold] = limit;
        if (threshold === 's') {
            thresholds.ss = limit - 1;
        }
        return true;
    }

    function humanize (withSuffix) {
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var locale = this.localeData();
        var output = relativeTime$1(this, !withSuffix, locale);

        if (withSuffix) {
            output = locale.pastFuture(+this, output);
        }

        return locale.postformat(output);
    }

    var abs$1 = Math.abs;

    function sign(x) {
        return ((x > 0) - (x < 0)) || +x;
    }

    function toISOString$1() {
        // for ISO strings we do not use the normal bubbling rules:
        //  * milliseconds bubble up until they become hours
        //  * days do not bubble at all
        //  * months bubble up until they become years
        // This is because there is no context-free conversion between hours and days
        // (think of clock changes)
        // and also not between days and months (28-31 days per month)
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var seconds = abs$1(this._milliseconds) / 1000;
        var days         = abs$1(this._days);
        var months       = abs$1(this._months);
        var minutes, hours, years;

        // 3600 seconds -> 60 minutes -> 1 hour
        minutes           = absFloor(seconds / 60);
        hours             = absFloor(minutes / 60);
        seconds %= 60;
        minutes %= 60;

        // 12 months -> 1 year
        years  = absFloor(months / 12);
        months %= 12;


        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
        var Y = years;
        var M = months;
        var D = days;
        var h = hours;
        var m = minutes;
        var s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
        var total = this.asSeconds();

        if (!total) {
            // this is the same as C#'s (Noda) and python (isodate)...
            // but not other JS (goog.date)
            return 'P0D';
        }

        var totalSign = total < 0 ? '-' : '';
        var ymSign = sign(this._months) !== sign(total) ? '-' : '';
        var daysSign = sign(this._days) !== sign(total) ? '-' : '';
        var hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

        return totalSign + 'P' +
            (Y ? ymSign + Y + 'Y' : '') +
            (M ? ymSign + M + 'M' : '') +
            (D ? daysSign + D + 'D' : '') +
            ((h || m || s) ? 'T' : '') +
            (h ? hmsSign + h + 'H' : '') +
            (m ? hmsSign + m + 'M' : '') +
            (s ? hmsSign + s + 'S' : '');
    }

    var proto$2 = Duration.prototype;

    proto$2.isValid        = isValid$1;
    proto$2.abs            = abs;
    proto$2.add            = add$1;
    proto$2.subtract       = subtract$1;
    proto$2.as             = as;
    proto$2.asMilliseconds = asMilliseconds;
    proto$2.asSeconds      = asSeconds;
    proto$2.asMinutes      = asMinutes;
    proto$2.asHours        = asHours;
    proto$2.asDays         = asDays;
    proto$2.asWeeks        = asWeeks;
    proto$2.asMonths       = asMonths;
    proto$2.asQuarters     = asQuarters;
    proto$2.asYears        = asYears;
    proto$2.valueOf        = valueOf$1;
    proto$2._bubble        = bubble;
    proto$2.clone          = clone$1;
    proto$2.get            = get$2;
    proto$2.milliseconds   = milliseconds;
    proto$2.seconds        = seconds;
    proto$2.minutes        = minutes;
    proto$2.hours          = hours;
    proto$2.days           = days;
    proto$2.weeks          = weeks;
    proto$2.months         = months;
    proto$2.years          = years;
    proto$2.humanize       = humanize;
    proto$2.toISOString    = toISOString$1;
    proto$2.toString       = toISOString$1;
    proto$2.toJSON         = toISOString$1;
    proto$2.locale         = locale;
    proto$2.localeData     = localeData;

    proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
    proto$2.lang = lang;

    // Side effect imports

    // FORMATTING

    addFormatToken('X', 0, 0, 'unix');
    addFormatToken('x', 0, 0, 'valueOf');

    // PARSING

    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', function (input, array, config) {
        config._d = new Date(parseFloat(input, 10) * 1000);
    });
    addParseToken('x', function (input, array, config) {
        config._d = new Date(toInt(input));
    });

    // Side effect imports

    //! moment.js

    hooks.version = '2.24.0';

    setHookCallback(createLocal);

    hooks.fn                    = proto;
    hooks.min                   = min;
    hooks.max                   = max;
    hooks.now                   = now;
    hooks.utc                   = createUTC;
    hooks.unix                  = createUnix;
    hooks.months                = listMonths;
    hooks.isDate                = isDate;
    hooks.locale                = getSetGlobalLocale;
    hooks.invalid               = createInvalid;
    hooks.duration              = createDuration;
    hooks.isMoment              = isMoment;
    hooks.weekdays              = listWeekdays;
    hooks.parseZone             = createInZone;
    hooks.localeData            = getLocale;
    hooks.isDuration            = isDuration;
    hooks.monthsShort           = listMonthsShort;
    hooks.weekdaysMin           = listWeekdaysMin;
    hooks.defineLocale          = defineLocale;
    hooks.updateLocale          = updateLocale;
    hooks.locales               = listLocales;
    hooks.weekdaysShort         = listWeekdaysShort;
    hooks.normalizeUnits        = normalizeUnits;
    hooks.relativeTimeRounding  = getSetRelativeTimeRounding;
    hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
    hooks.calendarFormat        = getCalendarFormat;
    hooks.prototype             = proto;

    // currently HTML5 input type only supports 24-hour formats
    hooks.HTML5_FMT = {
        DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',             // <input type="datetime-local" />
        DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',  // <input type="datetime-local" step="1" />
        DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',   // <input type="datetime-local" step="0.001" />
        DATE: 'YYYY-MM-DD',                             // <input type="date" />
        TIME: 'HH:mm',                                  // <input type="time" />
        TIME_SECONDS: 'HH:mm:ss',                       // <input type="time" step="1" />
        TIME_MS: 'HH:mm:ss.SSS',                        // <input type="time" step="0.001" />
        WEEK: 'GGGG-[W]WW',                             // <input type="week" />
        MONTH: 'YYYY-MM'                                // <input type="month" />
    };

     //! moment.js locale configuration

     hooks.defineLocale('pt-br', {
        months : 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
        monthsShort : 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
        weekdays : 'Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado'.split('_'),
        weekdaysShort : 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
        weekdaysMin : 'Do_2ª_3ª_4ª_5ª_6ª_Sá'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D [de] MMMM [de] YYYY',
            LLL : 'D [de] MMMM [de] YYYY [às] HH:mm',
            LLLL : 'dddd, D [de] MMMM [de] YYYY [às] HH:mm'
        },
        calendar : {
            sameDay: '[Hoje às] LT',
            nextDay: '[Amanhã às] LT',
            nextWeek: 'dddd [às] LT',
            lastDay: '[Ontem às] LT',
            lastWeek: function () {
                return (this.day() === 0 || this.day() === 6) ?
                    '[Último] dddd [às] LT' : // Saturday + Sunday
                    '[Última] dddd [às] LT'; // Monday - Friday
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : 'em %s',
            past : 'há %s',
            s : 'poucos segundos',
            ss : '%d segundos',
            m : 'um minuto',
            mm : '%d minutos',
            h : 'uma hora',
            hh : '%d horas',
            d : 'um dia',
            dd : '%d dias',
            M : 'um mês',
            MM : '%d meses',
            y : 'um ano',
            yy : '%d anos'
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal : '%dº'
    });

    hooks.locale('pt-br');

    return hooks;

})));