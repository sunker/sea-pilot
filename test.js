foodev.RootPackage("eniro");
foodev.RootPackage("enirosp");
(function() {
    eniro.isTouch = typeof window.ontouchstart !== "undefined";
    if (window.console && typeof console.log === "function" && typeof console.debug === "function" && typeof console.warn === "function" && typeof console.dir === "function") eniro.console = console;
    else {
        var a = function() {};
        eniro.console = {
            log: a,
            debug: a,
            warn: a,
            dir: a
        }
    }
    eniro.$IMPLEMENT = function() {
        var a = "",
            c;
        if (typeof Object.getPrototypeOf === "function") {
            var d = arguments,
                e = "",
                f = Object.getPrototypeOf(this);
            if (f)
                for (c in f)
                    if (f.hasOwnProperty(c) && f[c] === d.callee.caller) {
                        e =
                            c;
                        break
                    }
            if (!e)
                for (c in this) this.hasOwnProperty(c) && this[c] === d.callee.caller && (e = c);
            e && (typeof this.getClassName === "function" && (a = this.getClassName()), a += "#" + e + " method to be implemented by API service provider")
        }
        a || (a = "Method to be implemented by API service provider");
        throw Error(a);
    };
    eniro.impl = function(a, c, d) {
        var e = a;
        if (a && a.prototype && typeof a.prototype[c] === "function") e = a.prototype;
        e[c] ? e[c] = d : (a = a.prototype && a.getFullClassName ? a.getFullClassName() + "#" : a.toString() + ".", eniro.impl.errors = eniro.impl.errors || [], eniro.impl.errors.push(a + c))
    };
    eniro.impl.delayedThrows = function() {
        if (eniro.impl.errors) throw Error("Implemention of target not declared in API: " + eniro.impl.errors.join(" "));
    }
})();
(function() {
    var a = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101,
        3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271,
        366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376,
        3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954,
        1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836,
        1088359270, 936918E3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117
    ];
    eniro.crc32 = function(b) {
        var c = function(a) {
                return a < 0 ? 4294967296 + a : a
            },
            d, e = 4294967295,
            f = b.length;
        for (d = 0; d < f; d++) e = c(a[c(e ^ b.charCodeAt(d)) & 255] ^ e >> 8 & 16777215);
        return c(e ^ 4294967295)
    };
    eniro.getCookie = function(a) {
        var c, d, e = document.cookie.split(";");
        for (c = 0, d = e.length; c <
            d; ++c) {
            var f = e[c].trim().split("=");
            if (f[0] === a) return f[1]
        }
        return null
    };
    eniro.waitForCookie = function(a, c, d) {
        var e = eniro.getCookie(a);
        e ? c(e) : d <= 0 ? c() : window.setTimeout(function() {
            eniro.waitForCookie(a, c, d - 100)
        }, 100)
    }
})();
eniro.Package("maps");
eniro.maps.Class("Srs", {
    id: null,
    name: null,
    initialize: function(a, b) {
        foodev.assert(a, "id", "string");
        foodev.assert(b, "name", "string");
        this.id = a;
        this.name = b
    },
    getId: function() {
        return this.id
    },
    getName: function() {
        return this.name
    },
    approxEquals: function(a, b, c, d, e) {
        foodev.assert(a, "x1", "number");
        foodev.assert(b, "y1", "number");
        foodev.assert(c, "x2", "number");
        foodev.assert(d, "y2", "number");
        foodev.assert(e, "tol", "number");
        a = this.$approxEquals(a, b, c, d, e);
        foodev.assert(a, "$result", "boolean");
        return a
    }
});
eniro.maps.Srs.prototype.toString = function() {
    return this.getClassName() + "(" + this.name + ")"
};
eniro.maps.Srs.prototype.equals = foodev.makeEquals(eniro.maps.Srs);
eniro.maps.Class("MapTypeSrs", {
    Extends: eniro.maps.Srs,
    initialize: function(a, b) {
        eniro.maps.Srs.prototype.initialize.call(this, a, b)
    },
    getResolution: function(a, b) {
        foodev.assert(a, "srsZoom", "number");
        foodev.assert(b, "coord", eniro.maps.Coordinate, true);
        var c = this.$getResolution(a, b);
        foodev.assert(c, "$result", "number");
        return c
    },
    getSrsZoom: function(a, b) {
        foodev.assert(a, "resolution", "number");
        foodev.assert(b, "coord", eniro.maps.Coordinate, true);
        var c, d;
        for (c = 0; c <= 21; c++)
            if (d = this.getResolution(c, b), a > d) break;
        return c - 1
    }
});
eniro.maps.Srs.WGS84 = new eniro.maps.Srs("EPSG:4326", "WGS84");
eniro.maps.Srs.WGS84.$approxEquals = function(a, b, c, d, e) {
    eniro.$IMPLEMENT.apply(this, arguments)
};
eniro.maps.Srs.SPHMERC = new eniro.maps.MapTypeSrs("EPSG:900913", "SPHMERC");
eniro.maps.Srs.SPHMERC.$approxEquals = function(a, b, c, d, e) {
    eniro.$IMPLEMENT.apply(this, arguments)
};
eniro.maps.Srs.SPHMERC.$getResolution = function(a, b) {
    eniro.$IMPLEMENT.apply(this, arguments)
};
eniro.Package("maps");
eniro.maps.Class("Point", {
    x: null,
    y: null,
    initialize: function(a, b) {
        foodev.assert(a, "x", "number");
        foodev.assert(b, "y", "number");
        this.x = a;
        this.y = b
    },
    getX: function() {
        return this.x
    },
    getY: function() {
        return this.y
    }
});
eniro.maps.Point.prototype.toString = function() {
    return this.getClassName() + "(" + this.x + "," + this.y + ")"
};
eniro.maps.Point.prototype.equals = foodev.makeEquals(eniro.maps.Point);
eniro.Package("maps");
eniro.maps.Class("Coordinate", {
    Extends: eniro.maps.Point,
    srs: null,
    initialize: function(a, b, c) {
        eniro.maps.Point.prototype.initialize.apply(this, [a, b]);
        foodev.assert(c, "srs", eniro.maps.Srs);
        this.srs = c
    },
    getSrs: function() {
        return this.srs
    },
    approxEquals: function(a, b) {
        foodev.assert(a, "other", eniro.maps.Coordinate);
        if (this.getSrs() !== a.getSrs()) throw Error("Srs mismatch");
        b || (b = 5);
        return this.srs.approxEquals(this.getX(), this.getY(), a.getX(), a.getY(), b)
    },
    transform: function(a) {
        foodev.assert(a, "srs", eniro.maps.Srs);
        return this.srs.equals(a) ? this : (a = this.$transform(a), foodev.assert(a, "$result", eniro.maps.Coordinate), a)
    }
});
eniro.maps.Coordinate.prototype.toString = function() {
    return this.getClassName() + "(" + this.getX() + "," + this.getY() + ":" + this.srs.getName() + ")"
};
eniro.maps.Coordinate.prototype.$transform = function(a) {
    eniro.$IMPLEMENT.apply(this, arguments)
};
eniro.maps.Coordinate.prototype.equals = foodev.makeEquals(eniro.maps.Coordinate);
eniro.Package("maps");
eniro.maps.Class("LatLng", {
    Extends: eniro.maps.Coordinate,
    initialize: function(a, b) {
        eniro.maps.Coordinate.prototype.initialize.apply(this, [b, a, eniro.maps.Srs.WGS84])
    },
    getLat: function() {
        return this.getY()
    },
    getLng: function() {
        return this.getX()
    }
});
eniro.maps.LatLng.prototype.toString = function() {
    return this.getClassName() + "(" + this.getLat() + "," + this.getLng() + ")"
};
eniro.maps.LatLng.prototype.lat = eniro.maps.LatLng.prototype.getLat;
eniro.maps.LatLng.prototype.lng = eniro.maps.LatLng.prototype.getLng;
eniro.maps.Package("event");
(function() {
    var a = 100,
        b = eniro.$IMPLEMENT,
        c = eniro.$IMPLEMENT,
        d = function(a, b) {
            if (typeof a.$e_listeners !== "object") a.$e_listeners = {};
            a.$e_listeners[b] || (a.$e_listeners[b] = {});
            return a.$e_listeners[b]
        },
        e;
    e = function(b, c, e) {
        foodev.assert(b, "obj", "object");
        foodev.assert(c, "eventName", "string");
        foodev.assert(e, "fn", "function");
        if (b.onAddEventListener && typeof b.onAddEventListener === "function") b.onAddEventListener(c, e);
        this.obj = b;
        this.eventName = c;
        this.fn = e;
        this.wrapper = null;
        this.id = ++a;
        d(b, c)[this.id] = this
    };
    e.prototype.remove = function() {
        if (this.obj) foodev.elIs(this.obj) && c(this), delete d(this.obj, this.eventName)[this.id], this.wrapper = this.fn = this.eventName = this.obj = null
    };
    e.prototype.wrap = function() {
        var a = this;
        this.wrapper = function(b) {
            b = window.event || b;
            if (b.srcElement) b.target = b.srcElement;
            typeof a.fn === "function" && a.fn.call(a.obj, b)
        };
        this.wrap = function() {
            return this.wrapper
        };
        return this.wrapper
    };
    window.addEventListener ? (b = function(a) {
        a.obj.addEventListener(a.eventName, a.fn, false)
    }, c = function(a) {
        a.obj.removeEventListener(a.eventName,
            a.fn, false)
    }) : document.attachEvent && (b = function(a) {
        a.obj.attachEvent("on" + a.eventName, a.wrap())
    }, c = function(a) {
        a.obj.detachEvent("on" + a.eventName, a.wrap())
    });
    eniro.maps.event = {
        False: function() {
            return false
        },
        True: function() {
            return true
        },
        addListener: function(a, b, c) {
            return new e(a, b, c)
        },
        addListenerOnce: function(a, b, c) {
            var d = new e(a, b, function() {
                c.apply(this, arguments);
                d.remove()
            });
            return d
        },
        addDomListener: function(a, c, d) {
            a = new e(a, c, d);
            b(a);
            return a
        },
        addDomListenerOnce: function(a, c, d) {
            var i = new e(a,
                c,
                function() {
                    d.apply(this, arguments);
                    i.remove()
                });
            b(i);
            return i
        },
        clearInstanceListeners: function(a) {
            if (a.$e_listeners) {
                var b, c;
                for (b in a.$e_listeners)
                    if (a.$e_listeners.hasOwnProperty(b))
                        for (c in a.$e_listeners[b]) a.$e_listeners[b].hasOwnProperty(c) && typeof a.$e_listeners[b][c].remove === "function" && a.$e_listeners[b][c].remove()
            }
        },
        clearListeners: function(a, b) {
            var c = d(a, b),
                e;
            for (e in c) c.hasOwnProperty(e) && typeof c[e].remove === "function" && c[e].remove()
        },
        removeListener: function(a) {
            foodev.assert(a, "listener",
                e);
            a.remove()
        },
        trigger: function(a, b, c) {
            c = Array.prototype.slice.call(arguments, 2);
            if (typeof a.$e_listeners === "object") {
                var e = d(a, b),
                    h;
                for (h in e) e.hasOwnProperty(h) && (typeof e[h].wrapper === "function" ? e[h].wrapper.apply(e[h].obj, c) : typeof e[h].fn === "function" && e[h].fn.apply(e[h].obj, c))
            }
        },
        stop: function(a, b) {
            if (!b) a.preventDefault ? a.preventDefault() : a.returnValue = false;
            a.stopPropagation ? a.stopPropagation() : a.cancelBubble = true
        }
    }
})();
eniro.maps.Package("widget");
eniro.maps.widget.Class("Control", {
    map: null,
    div: null,
    initialize: function() {
        if (this.div === null) this.div = document.createElement("div")
    },
    postinitialize: function() {},
    destroy: function() {
        this.div && eniro.maps.event.clearInstanceListeners(this.div);
        eniro.maps.event.clearInstanceListeners(this);
        this.map = this.div = null
    },
    getDiv: function() {
        return foodev.elIs(this.div) ? this.div : null
    },
    setMap: function(a) {
        (this.map = a) && this.postinitialize()
    }
});
eniro.Package("maps");
eniro.maps.Class("Size", {
    width: null,
    height: null,
    initialize: function(a, b) {
        foodev.assert(a, "width", "number");
        foodev.assert(b, "height", "number");
        this.width = a;
        this.height = b
    },
    getWidth: function() {
        return this.width
    },
    getHeight: function() {
        return this.height
    }
});
eniro.maps.Size.prototype.toString = function() {
    return this.getClassName() + "(" + this.getWidth() + "," + this.getHeight() + ")"
};
eniro.maps.Size.prototype.equals = foodev.makeEquals(eniro.maps.Size);
eniro.Package("maps");
eniro.maps.Class("MarkerImage", {
    image: null,
    url: null,
    anchor: null,
    size: null,
    bubbleOffset: null,
    bubbleMargin: null,
    initialize: function(a, b, c, d, e, f) {
        function g() {
            if (!this.image.$loaded) this.image.onload = null, this.onLoad(true)
        }
        foodev.assert(a, "url", "string");
        foodev.assert(b, "size", eniro.maps.Size, true, true);
        foodev.assert(c, "origin", eniro.maps.Point, true, true);
        foodev.assert(d, "anchor", eniro.maps.Point, true, true);
        this.url = a;
        this.size = b;
        this.origin = c;
        this.anchor = d;
        this.bubbleOffset = e;
        this.bubbleMargin = f;
        this.image =
            new Image;
        this.image.onload = foodev.bind(this, g);
        this.image.src = a;
        this.image.complete && g.call(this)
    },
    onLoad: function() {
        if (!this.size) this.size = new eniro.maps.Size(this.image.width, this.image.height);
        if (!this.anchor) this.anchor = new eniro.maps.Point(this.size.getWidth() / 2, this.size.getHeight());
        var a = this.getSize().getWidth() / 2,
            b = this.getSize().getHeight() / 2;
        if (!this.bubbleOffset) this.bubbleOffset = new eniro.maps.Point(a - this.anchor.getX(), b - this.anchor.getY());
        if (!this.bubbleMargin) this.bubbleMargin = [b, a, b, a];
        this.image.$loaded = true;
        eniro.maps.event.trigger(this, "loaded")
    },
    getUrl: function() {
        return this.url
    },
    getAnchor: function() {
        return this.anchor
    },
    getSize: function() {
        return this.size
    },
    isLoaded: function() {
        return this.image && this.image.$loaded
    },
    getBubbleOffset: function() {
        return this.bubbleOffset
    },
    getBubbleMargin: function() {
        return this.bubbleMargin
    }
});
eniro.maps.MarkerImage.prototype.toString = function() {
    return this.getClassName()
};
eniro.maps.MarkerImage.prototype.equals = foodev.makeEquals(eniro.maps.MarkerImage);
eniro.Package("maps");
eniro.maps.Class("Marker", {
    clickable: false,
    draggable: false,
    rotatable: false,
    position: null,
    icon: null,
    visible: true,
    zIndex: 2,
    initialize: function(a) {
        foodev.assert(a, "opts", "object", true, true);
        a && this.setOptions(a)
    },
    setOptions: function(a) {
        foodev.assert(a, "opts", "object");
        a.position && this.setPosition(a.position);
        a.icon && this.setIcon(a.icon);
        a.visible && this.setVisible(a.visible);
        a.clickable && this.setClickable(a.clickable);
        a.rotatable && this.setRotatable(a.rotatable);
        a.draggable && this.setDraggable(a.draggable);
        if (typeof a.zIndex ===
            "number") this.zIndex = a.zIndex;
        a.map && this.setMap(a.map)
    },
    destroy: function() {
        eniro.maps.event.clearInstanceListeners(this);
        this.$remove(true);
        this.setMap(null)
    },
    setMap: function(a) {
        if (a !== this.map) {
            if (this.map) this.$remove(false), this.map = a;
            if (a) {
                this.map = a;
                var b = this,
                    a = function() {
                        b.$add();
                        b.registerEvents()
                    },
                    c = this.getMarkerImage();
                c.isLoaded() ? a() : eniro.maps.event.addListener(c, "loaded", a)
            }
        }
    },
    getMap: function() {
        return this.map
    },
    setPosition: function(a) {
        foodev.assert(a, "latlng", eniro.maps.LatLng);
        this.position =
            a;
        this.$move()
    },
    getPosition: function() {
        return this.position
    },
    setIcon: function(a) {
        if (a === null) this.icon = null, this.$update();
        else {
            if (!a || typeof a !== "string" && !(a instanceof eniro.maps.MarkerImage)) throw Error("Bad icon: " + a);
            typeof a === "string" && (a = new eniro.maps.MarkerImage(a));
            this.icon = a;
            var b = this,
                c = function() {
                    b.$update()
                };
            a.isLoaded() ? c() : eniro.maps.event.addListener(a, "loaded", c)
        }
    },
    getIcon: function() {
        return this.icon === null ? null : this.icon
    },
    getMarkerImage: function() {
        return this.icon === null ? this.getDefaultMarkerImage() :
            this.icon
    },
    getDefaultMarkerImage: function() {
        if (!this.DEFAULT_MARKER_IMAGE) {
            var a = this.createDefaultMarkerImage((this.map.isSSL() ? eniro.Config["appnode.ssl.url"] : eniro.Config["appnode.url"]) + "/media/markers/search/yellow-single.png?v=" + eniro.Config["media.version"]);
            eniro.maps.Marker.prototype.DEFAULT_MARKER_IMAGE = a
        }
        return this.DEFAULT_MARKER_IMAGE
    },
    createDefaultMarkerImage: function(a) {
        var b = new eniro.maps.Size(34, 42),
            c = new eniro.maps.Point(3, 33),
            d = new eniro.maps.Point(13, -17);
        return new eniro.maps.MarkerImage(a,
            b, null, c, d, [18, 16, 14, 14])
    },
    setVisible: function(a) {
        foodev.assert(a, "visible", "boolean");
        this.visible = a;
        this.$update()
    },
    isVisible: function() {
        return this.visible
    },
    setClickable: function(a) {
        foodev.assert(a, "clickable", "boolean");
        this.clickable = a;
        this.$update()
    },
    isClickable: function() {
        return this.clickable
    },
    setDraggable: function(a) {
        foodev.assert(a, "draggable", "boolean");
        if (this.draggable = a) this.rotatable = false;
        this.$update()
    },
    isDraggable: function() {
        return this.draggable
    },
    setRotatable: function(a) {
        foodev.assert(a,
            "rotatable", "boolean");
        if (this.rotatable = a) this.draggable = false;
        this.$update()
    },
    isRotatable: function() {
        return this.rotatable
    },
    setRotation: function(a) {
        foodev.assert(a, "rotation", "number");
        this.$setRotation(a)
    },
    getRotation: function() {
        return this.$getRotation()
    },
    onAddEventListener: function(a) {
        switch (a) {
            case "click":
                this.setClickable(true)
        }
    },
    registerEvents: function() {
        this.$register("click", foodev.bind(this, function(a) {
            this.clickable && eniro.maps.event.trigger(this, "click", a)
        }));
        this.$register("mouseover",
            foodev.bind(this, function(a) {
                eniro.maps.event.trigger(this, "mouseover", a)
            }));
        this.$register("mouseout", foodev.bind(this, function(a) {
            eniro.maps.event.trigger(this, "mouseout", a)
        }));
        this.$register("dragstart", foodev.bind(this, function(a) {
            (this.draggable || this.rotatable) && eniro.maps.event.trigger(this, "dragstart", a)
        }));
        this.$register("drag", foodev.bind(this, function(a) {
            (this.draggable || this.rotatable) && eniro.maps.event.trigger(this, "drag", a)
        }));
        this.$register("dragend", foodev.bind(this, function(a) {
            (this.draggable ||
                this.rotatable) && eniro.maps.event.trigger(this, "dragend", a)
        }))
    }
});
eniro.maps.Marker.prototype.toString = function() {
    return this.getClassName() + "(" + this.getPosition() + ")"
};
eniro.maps.Marker.prototype.getVisible = eniro.maps.Marker.prototype.isVisible;
eniro.maps.Marker.prototype.getClickable = eniro.maps.Marker.prototype.isClickable;
eniro.maps.Marker.prototype.getDraggable = eniro.maps.Marker.prototype.isDraggable;
eniro.maps.Marker.prototype.equals = foodev.makeEquals(eniro.maps.Marker);
eniro.maps.Marker.prototype.$add = function() {
    eniro.$IMPLEMENT.apply(this, arguments)
};
eniro.maps.Marker.prototype.$update = function() {
    eniro.$IMPLEMENT.apply(this, arguments)
};
eniro.maps.Marker.prototype.$move = function() {
    eniro.$IMPLEMENT.apply(this, arguments)
};
eniro.maps.Marker.prototype.$setRotation = function(a) {
    eniro.$IMPLEMENT.apply(this, arguments)
};
eniro.maps.Marker.prototype.$getRotation = function() {
    eniro.$IMPLEMENT.apply(this, arguments)
};
eniro.maps.Marker.prototype.$remove = function(a) {
    eniro.$IMPLEMENT.apply(this, arguments)
};
eniro.maps.Marker.prototype.$register = function(a, b) {
    eniro.$IMPLEMENT.apply(this, arguments)
};
eniro.Package("maps");
eniro.maps.Class("InfoWindow", {
    Extends: eniro.maps.widget.Control,
    div: false,
    listeners: true,
    position: null,
    content: null,
    actualPosition: null,
    offset: null,
    margin: null,
    dragListener: null,
    marker: null,
    cssClasses: [],
    initialize: function(a) {
        eniro.maps.widget.Control.prototype.initialize.apply(this, arguments);
        foodev.assert(a, "opts", "object", true, true);
        a && (a.position && this.setPosition(a.position), a.content && this.setContent(a.content), a.cssClasses && this.setCssClasses(a.cssClasses))
    },
    destroy: function() {
        this.$remove(true);
        this.setMap(null);
        eniro.maps.event.clearInstanceListeners(this)
    },
    getMap: function() {
        return this.map
    },
    setPosition: function(a) {
        foodev.assert(a, "latlng", eniro.maps.LatLng);
        this.position = a;
        this.$update()
    },
    getPosition: function() {
        return this.position
    },
    setContent: function(a) {
        if (!a) throw Error("empty content");
        if (typeof a === "string") {
            var b = document.createElement("div");
            b.innerHTML = a;
            b.$asText = a;
            a = b
        }
        if (!foodev.elIs(a)) throw Error("content is not of required type (DOM/string)");
        this.content = a;
        this.fixAnchors(a);
        this.$updateBubble()
    },
    fixAnchors: function(a) {
        if (a.href) {
            var b = a.target || "_self";
            eniro.maps.event.addDomListener(a, "touchend", function() {
                window.open(this.href, b);
                return false
            })
        }
        var c, d;
        for (c = 0, d = a.childNodes.length; c < d; ++c) this.fixAnchors(a.childNodes[c])
    },
    getContent: function() {
        return this.content && this.content.$asText ? this.content.$asText : this.content
    },
    open: function(a) {
        if (!a) throw Error("Target is required");
        var b;
        this.marker = this.margin = this.offset = null;
        if (a instanceof eniro.maps.Map) b = a, this.actualPosition =
            this.position;
        else if (a instanceof eniro.maps.Marker) {
            this.marker = a;
            b = a.getMap();
            if (!b) throw Error("Target eniro.maps.Marker is not positioned on a map instance");
            this.actualPosition = a.getPosition();
            var c = a.getMarkerImage();
            if (c) {
                if (!c.isLoaded()) {
                    eniro.maps.event.addListener(c, "loaded", foodev.bind(this, function() {
                        this.open(a)
                    }));
                    return
                }
                this.offset = c.getBubbleOffset();
                this.margin = c.getBubbleMargin()
            }
        } else throw Error("Target is not of required type eniro.maps.Map or eniro.maps.Marker");
        if (!this.actualPosition) throw Error("InfoWindow is missing a position. Use either setPosition() or open() on a eniro.maps.Marker");
        this.setMap(b);
        this.$add();
        this.registerEvents()
    },
    close: function() {
        this.getMap() && (this.$remove(false), this.setMap(null))
    },
    setCssClasses: function(a) {
        this.cssClasses = a
    },
    registerEvents: function() {
        if (!this.registred) this.registred = true, this.$register("mouseover", foodev.bind(this, function(a) {
            eniro.maps.event.trigger(this, "mouseover", a)
        })), this.$register("mouseout", foodev.bind(this, function(a) {
            eniro.maps.event.trigger(this, "mouseout", a)
        })), this.$register("click", foodev.bind(this, function(a) {
            eniro.maps.event.trigger(this,
                "click", a)
        })), this.$register("close", foodev.bind(this, function(a) {
            eniro.maps.event.trigger(this, "close", a)
        }))
    }
});
eniro.maps.InfoWindow.prototype.toString = function() {
    return this.getClassName() + "(" + this.getPosition() + ")"
};
eniro.maps.InfoWindow.prototype.equals = foodev.makeEquals(eniro.maps.InfoWindow);
eniro.maps.InfoWindow.prototype.$add = function() {
    eniro.$IMPLEMENT.apply(this, arguments)
};
eniro.maps.InfoWindow.prototype.$update = function() {
    eniro.$IMPLEMENT.apply(this, arguments)
};
eniro.maps.InfoWindow.prototype.$remove = function(a) {
    eniro.$IMPLEMENT.apply(this, arguments)
};
eniro.maps.InfoWindow.prototype.$updateBubble = function() {
    eniro.$IMPLEMENT.apply(this, arguments)
};
eniro.maps.InfoWindow.prototype.$register = function(a, b) {
    eniro.$IMPLEMENT.apply(this, arguments)
};
eniro.Package("maps");
eniro.maps.Class("Bounds", {
    sw: null,
    ne: null,
    initialize: function(a, b) {
        foodev.assert(a, "sw", eniro.maps.Point);
        foodev.assert(b, "ne", eniro.maps.Point);
        if (a instanceof eniro.maps.Coordinate) {
            foodev.assert(b, "ne", eniro.maps.Coordinate);
            if (!a.getSrs().equals(b.getSrs())) throw Error("South west srs " + a.getSrs() + " is not the same as north east " + b.getSrs());
            if (a.getY() > b.getY()) throw Error("South west y (" + a.getY() + ") is greater than the north east (" + b.getY() + ").");
            if (a.getX() > b.getX()) throw Error("South west x (" +
                a.getX() + ") is greater than the north east (" + b.getX() + ").");
        }
        this.sw = a;
        this.ne = b
    },
    getSw: function() {
        return this.sw
    },
    getNe: function() {
        return this.ne
    },
    flipNorthSouth: function() {
        var a, b;
        this.sw instanceof eniro.maps.Coordinate ? (a = new eniro.maps.Coordinate(this.getSw().getX(), this.getNe().getY(), this.getSrs()), b = new eniro.maps.Coordinate(this.getNe().getX(), this.getSw().getY(), this.getSrs())) : (a = new eniro.maps.Point(this.getSw().getX(), this.getNe().getY()), b = new eniro.maps.Point(this.getNe().getX(), this.getSw().getY()));
        return new eniro.maps.Bounds(a, b)
    },
    flipEastWest: function() {
        var a, b;
        this.sw instanceof eniro.maps.Coordinate ? (a = new eniro.maps.Coordinate(this.getNe().getX(), this.getSw().getY(), this.getSrs()), b = new eniro.maps.Coordinate(this.getSw().getX(), this.getNe().getY(), this.getSrs())) : (a = new eniro.maps.Point(this.getNe().getX(), this.getSw().getY()), b = new eniro.maps.Point(this.getSw().getX(), this.getNe().getY()));
        return new eniro.maps.Bounds(a, b)
    },
    getSrs: function() {
        return this.sw.getSrs && this.sw.getSrs()
    },
    getCenter: function() {
        var a =
            this.sw.getY() + (this.ne.getY() - this.sw.getY()) / 2,
            b = this.sw.getX() + (this.ne.getX() - this.sw.getX()) / 2,
            c = this.getSrs();
        return c === eniro.maps.Srs.WGS84 ? new eniro.maps.LatLng(a, b) : new eniro.maps.Coordinate(b, a, c)
    },
    contains: function(a) {
        if (!a) throw Error("Missing other");
        if (a instanceof eniro.maps.Bounds) return this.contains(a.getSw()) && this.contains(a.getNe());
        if (!a instanceof eniro.maps.Point) throw Error("Excpected other to be eniro.maps.Point or eniro.maps.Bounds");
        return a.getY() >= this.sw.getY() && a.getY() <=
            this.ne.getY() && a.getX() >= this.sw.getX() && a.getX() <= this.ne.getX()
    },
    equals: function(a, b) {
        foodev.assert(a, "other", eniro.maps.Bounds);
        foodev.assert(b, "exact", "boolean", true);
        return b ? this.exactEquals(a) : this.sw.approxEquals(a.getSw()) && this.ne.approxEquals(a.getNe())
    },
    extend: function(a) {
        foodev.assert(a, "coord", eniro.maps.Point);
        var b = this.sw.getY() < a.getY() ? this.sw.getY() : a.getY(),
            c = this.sw.getX() < a.getX() ? this.sw.getX() : a.getX(),
            d = this.ne.getY() > a.getY() ? this.ne.getY() : a.getY(),
            a = this.ne.getX() > a.getX() ?
            this.ne.getX() : a.getX();
        return new eniro.maps.Bounds(new eniro.maps.Coordinate(c, b, this.getSrs()), new eniro.maps.Coordinate(a, d, this.getSrs()))
    },
    intersects: function(a) {
        var b = a.getSw().getY() >= this.sw.getY() && a.getSw().getY() <= this.ne.getY() || this.sw.getY() >= a.getSw().getY() && this.sw.getY() <= a.getNe().getY(),
            c = a.getNe().getY() >= this.sw.getY() && a.getNe().getY() <= this.ne.getY() || this.ne.getY() > a.getSw().getY() && this.ne.getY() < a.getNe().getY(),
            d = a.getSw().getX() >= this.sw.getX() && a.getSw().getX() <= this.ne.getX() ||
            this.sw.getX() >= a.getSw().getX() && this.sw.getX() <= a.getNe().getX(),
            a = a.getNe().getX() >= this.sw.getX() && a.getNe().getX() <= this.ne.getX() || this.ne.getX() >= a.getSw().getX() && this.ne.getX() <= a.getNe().getX();
        return (b || c) && (d || a)
    },
    isEmpty: function() {
        return this.sw.equals(this.ne)
    },
    toSpan: function() {
        var a = this.ne.getY() - this.sw.getY(),
            b = this.ne.getX() - this.sw.getX();
        return new eniro.maps.Size(b, a)
    },
    toUrlValue: function(a, b) {
        foodev.assert(a, "precision", "number", true);
        foodev.assert(b, "coordReverse", "boolean",
            true);
        a || (a = 6);
        b || (b = false);
        var c = Math.pow(10, a),
            d = b ? this.sw.getY() : this.sw.getX(),
            e = b ? this.sw.getX() : this.sw.getY(),
            f = b ? this.ne.getY() : this.ne.getX(),
            g = b ? this.ne.getX() : this.ne.getY();
        return Math.round(d * c) / c + "," + Math.round(e * c) / c + "," + Math.round(f * c) / c + "," + Math.round(g * c) / c
    },
    union: function(a) {
        foodev.assert(a, "other", eniro.maps.Bounds);
        var b = this.sw.getY() < a.getSw().getY() ? this.sw.getY() : a.getSw().getY(),
            c = this.sw.getX() < a.getSw().getX() ? this.sw.getX() : a.getSw().getX(),
            d = this.ne.getY() > a.getNe().getY() ?
            this.ne.getY() : a.getNe().getY(),
            a = this.ne.getX() > a.getNe().getX() ? this.ne.getX() : a.getNe().getX(),
            b = new eniro.maps.Coordinate(c, b, this.getSrs()),
            d = new eniro.maps.Coordinate(a, d, this.getSrs());
        return new eniro.maps.Bounds(b, d)
    },
    transform: function(a) {
        if (!(this.sw instanceof eniro.maps.Coordinate)) throw Error("Unable to transform eniro.maps.Bounds without srs (perhaps pixels?).");
        foodev.assert(a, "srs", eniro.maps.Srs);
        return this.getSrs() === a ? this : a === eniro.maps.Srs.WGS84 ? new eniro.maps.LatLngBounds(this.sw.transform(a),
            this.ne.transform(a)) : new eniro.maps.Bounds(this.sw.transform(a), this.ne.transform(a))
    }
});
eniro.maps.Bounds.prototype.toString = function() {
    return this.getClassName() + "(" + this.getSw().getX() + "," + this.getSw().getY() + "," + this.getNe().getX() + "," + this.getNe().getY() + (this.getSrs() ? ":" + this.getSrs().getName() : "") + ")"
};
eniro.maps.Bounds.prototype.exactEquals = foodev.makeEquals(eniro.maps.Bounds);
eniro.Package("maps");
eniro.maps.Class("LatLngBounds", {
    Extends: eniro.maps.Bounds,
    initialize: function(a, b) {
        eniro.maps.Bounds.prototype.initialize.apply(this, arguments);
        foodev.assert(a, "sw", eniro.maps.LatLng);
        foodev.assert(b, "ne", eniro.maps.LatLng)
    },
    toUrlValue: function(a, b) {
        foodev.assert(a, "precision", "number", true);
        foodev.assert(b, "latLngReverse", "boolean", true);
        a || (a = 6);
        b || (b = false);
        return eniro.maps.Bounds.toUrlValue.apply(this, [a, !b])
    }
});
eniro.maps.LatLngBounds.prototype.toString = function() {
    return this.getClassName() + "(" + this.sw.getLat() + "," + this.sw.getLng() + "," + this.ne.getLat() + "," + this.ne.getLng() + ":" + this.sw.getSrs().getName() + ")"
};
eniro.maps.LatLngBounds.make = function(a, b, c, d) {
    foodev.assert(a, "lat1", "number");
    foodev.assert(b, "lng1", "number");
    foodev.assert(c, "lat2", "number");
    foodev.assert(d, "lng2", "number");
    var e = new eniro.maps.LatLng(Math.min(a, c), Math.min(b, d)),
        a = new eniro.maps.LatLng(Math.max(a, c), Math.max(b, d));
    return new eniro.maps.LatLngBounds(e, a)
};
eniro.maps.LatLngBounds.prototype.getSouthWest = eniro.maps.LatLngBounds.prototype.sw;
eniro.maps.LatLngBounds.prototype.getNorthEast = eniro.maps.LatLngBounds.prototype.ne;
eniro.Package("maps");
eniro.maps.Class("MapTypeId", {
    id: null,
    srs: null,
    initialize: function(a, b) {
        foodev.assert(a, "id", "string");
        foodev.assert(b, "srs", eniro.maps.MapTypeSrs);
        this.id = a;
        this.srs = b
    },
    getId: function() {
        return this.id
    },
    getSrs: function() {
        return this.srs
    }
});
eniro.maps.MapTypeId.prototype.toString = function() {
    for (var a in eniro.maps.MapTypeId)
        if (eniro.maps.MapTypeId.hasOwnProperty(a) && eniro.maps.MapTypeId[a] instanceof eniro.maps.MapTypeId && eniro.maps.MapTypeId[a] === this) break;
    if (!a) a = this.id;
    return a
};
eniro.maps.MapTypeId.valueOf = function(a) {
    for (var b in eniro.maps.MapTypeId)
        if (eniro.maps.MapTypeId.hasOwnProperty(b) && eniro.maps.MapTypeId[b] instanceof eniro.maps.MapTypeId && eniro.maps.MapTypeId[b].getId() === a) return eniro.maps.MapTypeId[b];
    return null
};
eniro.maps.MapTypeId.prototype.equals = foodev.makeEquals(eniro.maps.MapTypeId);
eniro.maps.MapTypeId.MAP = new eniro.maps.MapTypeId("map", eniro.maps.Srs.SPHMERC);
eniro.maps.MapTypeId.AERIAL = new eniro.maps.MapTypeId("aerial", eniro.maps.Srs.SPHMERC);
eniro.maps.MapTypeId.HYBRID = new eniro.maps.MapTypeId("hybrid", eniro.maps.Srs.SPHMERC);
eniro.maps.MapTypeId.NAUTICAL = new eniro.maps.MapTypeId("nautical", eniro.maps.Srs.SPHMERC);
eniro.maps.MapTypeId.ROADMAP = eniro.maps.MapTypeId.MAP;
eniro.maps.MapTypeId.TERRAIN = eniro.maps.MapTypeId.MAP;
eniro.maps.MapTypeId.SATELLITE = eniro.maps.MapTypeId.AERIAL;
eniro.Package("maps");
eniro.maps.Class("Profile", {
    initialize: function(a) {
        foodev.assert(a, "properties", "object");
        this.get = function(b, c) {
            var d = foodev.valueForPath(a, b);
            d === null && (c !== void 0 ? d = c : eniro.console.warn("Missing in profile: " + b));
            return d
        };
        this.assertTemplate([], this.TEMPLATE)
    },
    assertTemplate: function(a, b) {
        for (var c in b)
            if (b.hasOwnProperty(c)) {
                a.push(c);
                switch (typeof b[c]) {
                    case "string":
                        var d = a.join(".");
                        foodev.assert(this.get(d), d, b[c]);
                        break;
                    case "object":
                        this.assertTemplate(a, b[c])
                }
                a.pop()
            }
    },
    getId: function() {
        return this.get("id",
            null)
    },
    getLangCode: function() {
        return this.get("languageCode", null)
    },
    get: function(a, b) {
        eniro.$IMPLEMENT.call(this, a, b)
    },
    expand: function(a, b) {
        var c = a + "_" + b;
        if (this.expand.cache) {
            if (this.expand.cache[c]) return this.expand.cache[c]
        } else this.expand.cache = {};
        var d = [],
            e;
        for (e = a; e <= b; e++) d.push(e);
        return this.expand.cache[c] = d
    },
    mapZoomLevels: function(a) {
        foodev.assert(a, "mapTypeId", eniro.maps.MapTypeId);
        a = this.get("zoomLevels")[a.getId()];
        return a = this.expand(a.min, a.max)
    },
    srsZoomForMapZoom: function(a, b) {
        foodev.assert(a,
            "mapTypeId", eniro.maps.MapTypeId);
        foodev.assert(b, "mapZoom", "number");
        b -= 1;
        var c = this.get("zoomLevels")[a.getId()],
            c = this.expand(c.min, c.max);
        b < 0 ? b = 0 : b > c.length - 1 && (b = c.length - 1);
        return c[b]
    },
    mapZoomForSrsZoom: function(a, b) {
        foodev.assert(a, "mapTypeId", eniro.maps.MapTypeId);
        foodev.assert(b, "srsZoom", "number");
        var c = this.get("zoomLevels")[a.getId()];
        if (!c) throw Error("No zoom levels defined for maptype: " + a);
        var c = this.expand(c.min, c.max),
            d = foodev.arrIn(c, b),
            e;
        if (d === -1)
            if (b < c[0]) d = 0;
            else if (b < c[c.length -
                1])
            for (e = 0; e < c.length; e++) b > c[e] && (d = e);
        else d = c.length - 1;
        d += 1;
        return d
    },
    i18n: function(a, b) {
        foodev.assert(a, "key", "string");
        foodev.assert(b, "context", "object", true);
        var c = this.get("lang")[a];
        return c ? c : (eniro.console.warn("Missing i18n key: " + a), "[" + a + "]")
    },
    TEMPLATE: {
        id: "string",
        languageCode: "string",
        associatedSite: "string",
        mapTypeIds: ["object"],
        zoomLevels: {
            map: {
                min: "number",
                max: "number"
            },
            aerial: {
                min: "number",
                max: "number"
            },
            hybrid: {
                min: "number",
                max: "number"
            },
            nautical: {
                min: "number",
                max: "number"
            }
        },
        init: {
            coordinates: {
                lon: "string",
                lat: "string"
            },
            zoomLevel: "number"
        },
        statistics: ["object"],
        lang: "object"
    }
});
eniro.Package("maps");
eniro.maps.Class("Projection", {
    map: null,
    srs: null,
    initialize: function(a, b) {
        foodev.assert(a, "map", eniro.maps.Map);
        foodev.assert(b, "srs", eniro.maps.Srs);
        this.map = a;
        this.srs = b
    },
    fromCoordinateToPoint: function(a) {
        foodev.assert(a, "coord", eniro.maps.Coordinate);
        var a = a.transform(this.srs),
            b = 1 / this.srs.getResolution(this.map.getSrsZoom(), a),
            c = this.map.getBounds(),
            c = c.transform(this.srs);
        return new eniro.maps.Point(b * (a.getX() - c.getSw().getX()), b * (c.getNe().getY() - a.getY()))
    },
    fromPointToCoordinate: function(a) {
        foodev.assert(a,
            "point", eniro.maps.Point);
        var b = this.map.getViewportSize(),
            c = this.map.getCenter(),
            d = this.srs.getResolution(this.map.getSrsZoom(), c),
            c = c.transform(this.srs),
            e = a.getX() - b.getWidth() / 2,
            a = a.getY() - b.getHeight() / 2,
            c = new eniro.maps.Coordinate(c.getX() + e * d, c.getY() - a * d, this.srs);
        return c = c.transform(eniro.maps.Srs.WGS84)
    }
});
eniro.Package("maps");
eniro.maps.Class("Drawn", {
    map: null,
    color: null,
    opacity: null,
    weight: null,
    zIndex: null,
    fillColor: null,
    fillOpacity: null,
    clickable: false,
    initialize: function() {},
    redraw: function(a) {
        this.$redraw(a);
        a && this.map && this.registerEvents()
    },
    setOptions: function(a) {
        foodev.assert(a, "opts", "object");
        a.hasOwnProperty("map") && this.setMap(a.map);
        a.hasOwnProperty("strokeColor") && this.setStrokeColor(a.strokeColor);
        a.hasOwnProperty("strokeOpacity") && this.setStrokeOpacity(a.strokeOpacity);
        a.hasOwnProperty("strokeWeight") &&
            this.setStrokeWeight(a.strokeWeight);
        a.hasOwnProperty("zIndex") && this.setZIndex(a.zIndex);
        a.hasOwnProperty("fillColor") && this.setFillColor(a.fillColor);
        a.hasOwnProperty("fillOpacity") && this.setFillOpacity(a.fillOpacity)
    },
    setMap: function(a) {
        this.map = a;
        this.redraw(true)
    },
    getMap: function() {
        return this.map
    },
    setStrokeColor: function(a) {
        foodev.assert(a, "color", "string");
        this.color = a;
        this.redraw()
    },
    getStrokeColor: function() {
        return this.color
    },
    setStrokeOpacity: function(a) {
        foodev.assert(a, "opacity", "number");
        this.opacity = a;
        this.redraw()
    },
    getStrokeOpacity: function() {
        return this.opacity
    },
    setStrokeWeight: function(a) {
        foodev.assert(a, "weight", "number");
        this.weight = a;
        this.redraw()
    },
    getStrokeWeight: function() {
        return this.weight
    },
    setZIndex: function(a) {
        foodev.assert(a, "zIndex", "number");
        this.zIndex = a;
        this.redraw()
    },
    getZIndex: function() {
        return this.zIndex
    },
    setFillColor: function(a) {
        foodev.assert(a, "fillColor", "string");
        this.fillColor = a;
        this.redraw()
    },
    getFillColor: function() {
        return this.fillColor
    },
    setFillOpacity: function(a) {
        foodev.assert(a,
            "fillOpacity", "number");
        this.fillOpacity = a;
        this.redraw()
    },
    getFillOpacity: function() {
        return this.fillOpacity
    },
    onAddEventListener: function(a) {
        if (a === "click") this.clickable = true, this.$redraw()
    },
    registerEvents: function() {
        this.$register("click", foodev.bind(this, function(a) {
            this.clickable && eniro.maps.event.trigger(this, "click", a)
        }));
        this.$register("mouseover", foodev.bind(this, function(a) {
            eniro.maps.event.trigger(this, "mouseover", a)
        }));
        this.$register("mouseout", foodev.bind(this, function(a) {
            eniro.maps.event.trigger(this,
                "mouseout", a)
        }))
    },
    isClickable: function() {
        return this.clickable
    }
});
eniro.maps.Drawn.prototype.$redraw = function() {
    eniro.$IMPLEMENT.apply(this, arguments)
};
eniro.maps.Drawn.prototype.$register = function() {
    eniro.$IMPLEMENT.apply(this, arguments)
};
eniro.Package("maps");
eniro.maps.Class("MapArray", {
    array: null,
    initialize: function(a) {
        foodev.assert(a, "array", "array", true, true);
        a || (a = []);
        this.array = a
    },
    getArray: function() {
        return this.array
    },
    clear: function() {
        var a;
        for (a = this.array.length - 1; a >= 0; a--) eniro.maps.event.trigger(this, "remove_at", a, this.array[a]), this.array.splice(a, 1)
    },
    forEach: function(a) {
        foodev.assert(a, "callback", "function");
        var b = this.array.length,
            c;
        for (c = 0; c < b; c++) a.call(this, this.array[c], c)
    },
    getAt: function(a) {
        foodev.assert(a, "i", "number");
        return this.array[a]
    },
    getLength: function() {
        return this.array.length
    },
    insertAt: function(a, b) {
        foodev.assert(a, "i", "number");
        foodev.assert(b, "elem");
        this.array.splice(a, 0, b);
        eniro.maps.event.trigger(this, "insert_at", a, this.array[a])
    },
    pop: function() {
        var a = this.array.length - 1;
        if (!(a < 0)) {
            var b = this.array.pop();
            eniro.maps.event.trigger(this, "remove_at", a, b);
            return b
        }
    },
    push: function(a) {
        var b = Array.prototype.slice.call(arguments),
            c, d;
        for (c = 0, d = b.length; c < d; ++c) foodev.assert(b[c], "elem"), eniro.maps.event.trigger(this, "insert_at",
            this.array.push(b[c]), b[c])
    },
    removeAt: function(a) {
        foodev.assert(a, "i", "number");
        var b = this.array[a];
        b !== void 0 && (this.array.splice(a, 1), eniro.maps.event.trigger(this, "remove_at", a, b));
        return b
    },
    setAt: function(a, b) {
        foodev.assert(a, "i", "number");
        foodev.assert(b, "elem");
        var c = this.array[a];
        c !== void 0 && (this.array[a] = b, eniro.maps.event.trigger(this, "set_at", a, b));
        return c
    }
});
eniro.maps.MapArray.prototype.toString = function() {
    return this.getClassName() + "[" + this.array.length + "]"
};
eniro.Package("maps");
eniro.maps.Class("Polyline", {
    Extends: eniro.maps.Drawn,
    path: null,
    initialize: function(a) {
        foodev.assert(a, "opts", "object", true);
        a = foodev.extend({}, a);
        if (a.zIndex === void 0) this.zIndex = 1;
        this.setOptions(a);
        this.path || this.setPath([])
    },
    setOptions: function(a) {
        foodev.assert(a, "opts", "object");
        var b = false,
            c = false;
        this.redraw = function(a) {
            b = true;
            c = a || c
        };
        try {
            eniro.maps.Drawn.prototype.setOptions.apply(this, arguments), a.path && this.setPath(a.path)
        } finally {
            delete this.redraw
        }
        b && this.redraw(c)
    },
    setPath: function(a) {
        foodev.arrIs(a) &&
            (a = new eniro.maps.MapArray(a));
        foodev.assert(a, "path", eniro.maps.MapArray);
        this.$setPath(a);
        this.path = a;
        this.redraw()
    },
    getPath: function() {
        return this.path
    },
    setFillColor: function() {
        throw Error("Lines don't have setFillColor()");
    },
    setFillOpacity: function() {
        throw Error("Lines don't have setFillOpacity()");
    }
});
eniro.maps.Polyline.prototype.toString = function() {
    return this.getClassName() + "[" + this.path.getLength() + "]"
};
eniro.maps.Polyline.prototype.$setPath = function(a) {
    eniro.$IMPLEMENT.apply(this, arguments)
};
eniro.Package("maps");
eniro.maps.Class("Polygon", {
    Extends: eniro.maps.Drawn,
    exterior: null,
    interior: null,
    initialize: function(a) {
        foodev.assert(a, "opts", "object", true);
        a = foodev.extend({}, a);
        if (a.zIndex === void 0) this.zIndex = 0;
        if (!a.exterior) a.exterior = new eniro.maps.MapArray;
        if (!a.interior) a.interior = new eniro.maps.MapArray;
        this.setOptions(a)
    },
    setOptions: function(a) {
        foodev.assert(a, "opts", "object");
        var b = false,
            c = false;
        this.redraw = function(a) {
            b = true;
            c = a || c
        };
        try {
            eniro.maps.Drawn.prototype.setOptions.apply(this, arguments), a.exterior &&
                this.setExterior(a.exterior), a.interior && this.setInterior(a.interior)
        } finally {
            delete this.redraw
        }
        b && this.redraw(c)
    },
    setExterior: function(a) {
        foodev.arrIs(a) && (a = new eniro.maps.MapArray(a));
        foodev.assert(a, "exterior", eniro.maps.MapArray);
        this.$setExterior(a);
        this.exterior = a;
        this.redraw()
    },
    getExterior: function() {
        return this.exterior
    },
    setInterior: function(a) {
        foodev.arrIs(a) && (a = new eniro.maps.MapArray(a));
        foodev.assert(a, "interior", eniro.maps.MapArray);
        a.forEach(function(b, c) {
            foodev.arrIs(b) && (b = new eniro.maps.MapArray(b),
                a.setAt(c, b))
        });
        this.$setInterior(a);
        this.interior = a;
        this.redraw()
    },
    getInterior: function() {
        return this.interior
    }
});
eniro.maps.Polygon.prototype.toString = function() {
    return this.getClassName() + "[" + this.exterior.getLength() + "," + this.interior.getLength() + "]"
};
eniro.maps.Polygon.prototype.$setExterior = function(a) {
    eniro.$IMPLEMENT.apply(this, arguments)
};
eniro.maps.Polygon.prototype.$setInterior = function(a) {
    eniro.$IMPLEMENT.apply(this, arguments)
};
eniro.Package("maps.widget");
eniro.maps.widget.Class("MapTypeControl", {
    Extends: eniro.maps.widget.Control,
    initialize: function() {
        eniro.maps.widget.Control.prototype.initialize.call(this)
    },
    postinitialize: function() {
        var a = this.div,
            b = this.map.getProfile().get("mapTypeIds");
        if (b.length === 1) this.div = null;
        else {
            var c, d;
            for (c = 0, d = b.length; c < d; c++) {
                var e = document.createElement("div");
                e.tabIndex = "0";
                e.mapTypeId = b[c].getId();
                e.innerHTML = this.map.getProfile().i18n("map.layers." + b[c].getId());
                foodev.addClass(e, "e-maptypecontrol-item-" + b[c].getId());
                a.appendChild(e)
            }
            foodev.addClass(a.lastChild, "e-last");
            eniro.maps.event.addDomListener(a, "click", foodev.bind(this, this.onClick));
            eniro.maps.event.addDomListener(a, "keydown", foodev.bind(this, this.onClick));
            eniro.maps.event.addDomListener(a, "mousedown", foodev.bind(this, this.onButtonPressed));
            eniro.maps.event.addDomListener(a, "mouseup", foodev.bind(this, this.onButtonReleased));
            eniro.maps.event.addDomListener(a, "mouseout", foodev.bind(this, this.onButtonReleased));
            eniro.maps.event.addDomListener(a, "touchstart",
                foodev.bind(this, this.onButtonPressed));
            eniro.maps.event.addDomListener(a, "touchend", foodev.bind(this, this.onButtonReleased))
        }
    },
    onClick: function(a) {
        if (a.target.nodeName === "DIV" && a.target.mapTypeId && (a.type === "click" || a.type === "keydown" && a.keyCode === 13)) this.map.setMapTypeId(eniro.maps.MapTypeId.valueOf(a.target.mapTypeId)), a.target.focus(), eniro.maps.event.stop(a, true)
    },
    onButtonPressed: function(a) {
        a.target.nodeName === "DIV" && a.target.mapTypeId && foodev.addClass(a.target, "e-buttonactive")
    },
    onButtonReleased: function(a) {
        a.target.nodeName ===
            "DIV" && a.target.mapTypeId && foodev.removeClass(a.target, "e-buttonactive")
    }
});
eniro.Package("maps.widget");
eniro.maps.widget.Class("ZoomControl", {
    Extends: eniro.maps.widget.Control,
    initialize: function() {
        eniro.maps.widget.Control.prototype.initialize.call(this);
        foodev.addClass(this.div, "e-zoomcontrol");
        this.list = document.createElement("div");
        this.div.appendChild(this.list);
        eniro.maps.event.addDomListener(this.list, "click", foodev.bind(this, this.onClick));
        eniro.maps.event.addDomListener(this.list, "keydown", foodev.bind(this, this.onClick));
        eniro.maps.event.addDomListener(this.list, "mousedown", foodev.bind(this,
            this.onButtonPressed));
        eniro.maps.event.addDomListener(this.list, "mouseup", foodev.bind(this, this.onButtonReleased));
        eniro.maps.event.addDomListener(this.list, "mouseout", foodev.bind(this, this.onButtonReleased));
        eniro.maps.event.addDomListener(this.list, "touchstart", foodev.bind(this, this.onButtonPressed));
        eniro.maps.event.addDomListener(this.list, "touchend", foodev.bind(this, this.onButtonReleased))
    },
    postinitialize: function() {
        eniro.maps.event.addListener(this.map, "maptypeid_changed", foodev.bind(this,
            this.onMapTypeIdChanged))
    },
    onMapTypeIdChanged: function() {
        var a = this.map.getMapTypeId();
        this.list.innerHTML = "";
        var b = document.createElement("div");
        foodev.addClass(b, "e-zoomcontrol-zoomout");
        b.tabIndex = "0";
        this.list.appendChild(b);
        b = this.map.getProfile().mapZoomLevels(a);
        for (a = 1, b = b.length; a <= b; a++) {
            var c = document.createElement("div");
            foodev.addClass(c, "e-zoomcontrol-item");
            foodev.addClass(c, "e-zoomcontrol-item-" + a);
            c.tabIndex = "0";
            c.mapZoom = a;
            c.innerHTML = a.toString();
            this.list.appendChild(c)
        }
        a = document.createElement("div");
        foodev.addClass(a, "e-zoomcontrol-zoomin");
        a.tabIndex = "0";
        this.list.appendChild(a)
    },
    onButtonPressed: function(a) {
        a.target.nodeName === "DIV" && foodev.addClass(a.target, "e-buttonactive")
    },
    onButtonReleased: function(a) {
        a.target.nodeName === "DIV" && foodev.removeClass(a.target, "e-buttonactive")
    },
    onClick: function(a) {
        if (a.target.nodeName === "DIV" && (a.type === "click" || a.type === "keydown" && a.keyCode === 13)) a.target.mapZoom ? this.map.setZoom(a.target.mapZoom) : foodev.hasClass(a.target, "e-zoomcontrol-zoomin") ? this.map.setZoom(this.map.getZoom() +
            1) : foodev.hasClass(a.target, "e-zoomcontrol-zoomout") && this.map.setZoom(this.map.getZoom() - 1), a.target.focus(), eniro.maps.event.stop(a, true)
    }
});
eniro.Package("maps.widget");
eniro.maps.widget.Class("SearchBoxSuggest", {
    KEY_CODES: {
        ENTER: 13,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40
    },
    MAX_HITS: 6,
    SUGGEST_DELAY: 250,
    searchBoxControl: null,
    map: null,
    div: null,
    input: null,
    features: null,
    selectedIndex: -1,
    timeout: null,
    ignoreSearchResult: false,
    initialize: function(a) {
        this.div = document.createElement("div");
        foodev.addClass(this.div, "e-searchboxsuggest");
        this.searchBoxControl = a;
        this.input = a.input;
        this.map = a.map;
        this.index = a.index + "_sug";
        eniro.maps.event.addDomListener(this.input, "keyup", foodev.bind(this,
            this.onKeyUp));
        this.searchDoListener = eniro.maps.event.addListener(this.map, "searchDo", foodev.bind(this, this.clearSuggest));
        this.searchClearListener = eniro.maps.event.addListener(this.map, "searchClear", foodev.bind(this, this.clearSuggest))
    },
    destroy: function() {
        if (this.searchDoListener) eniro.maps.event.removeListener(this.searchDoListener), this.searchDoListener = null;
        if (this.searchClearListener) eniro.maps.event.removeListener(this.searchClearListener), this.searchClearListener = null
    },
    onKeyUp: function(a) {
        switch (a.keyCode) {
            case this.KEY_CODES.UP:
                this.prevIndex();
                break;
            case this.KEY_CODES.DOWN:
                this.nextIndex();
                break;
            case this.KEY_CODES.LEFT:
            case this.KEY_CODES.RIGHT:
                break;
            case this.KEY_CODES.ENTER:
                this.stopSearch();
                this.ignoreSearchResult = true;
                break;
            default:
                this.ignoreSearchResult = false, this.searchDelayed(this.SUGGEST_DELAY)
        }
    },
    stopSearch: function() {
        this.timeout && window.clearTimeout(this.timeout)
    },
    searchDelayed: function(a) {
        this.stopSearch();
        var b = this;
        this.timeout = window.setTimeout(function() {
            b.search()
        }, a)
    },
    search: function() {
        var a = this.input.value;
        if (a.length >
            2) {
            var b = this.map.isSSL() ? eniro.Config["search.url.ssl"] : eniro.Config["search.url"],
                a = {
                    index: this.index,
                    q: a,
                    pageSize: this.MAX_HITS,
                    profile: this.map.getProfile().get("searchProfile")
                };
            this.request = foodev.jsonp({
                url: b + "/search/search.json",
                params: a,
                success: this.onRequestSuccess,
                bind: this
            })
        } else this.clearSuggest()
    },
    onRequestSuccess: function(a) {
        if (this.ignoreSearchResult) this.clearSuggest();
        else {
            var b = document.createElement("ul"),
                a = a.search[this.index].features,
                c = this,
                d = function(a, b, d) {
                    return function() {
                        c.selectIndex(a,
                            b);
                        d && (c.searchBoxControl.search(), c.clearSuggest())
                    }
                },
                e = this.input.value,
                f = RegExp("^" + e + ".", "i"),
                g, j;
            for (g = 0, j = a.length; g < j; ++g) {
                var i = document.createElement("li");
                b.appendChild(i);
                var h = a[g].sug;
                f.test(h) && (h = [h.substring(0, e.length), "<strong>", h.substring(e.length), "</strong>"].join(""));
                i.innerHTML = h;
                eniro.maps.event.addDomListener(i, "mouseover", d(g));
                eniro.maps.event.addDomListener(i, "click", d(g, true, true))
            }
            eniro.maps.event.addDomListener(b, "mouseout", d(-1));
            this.clearSuggest();
            this.div.appendChild(b);
            this.features = a
        }
    },
    clearSuggest: function() {
        for (; this.div.childNodes.length > 0;) this.div.removeChild(this.div.firstChild);
        this.features = null;
        this.selectedIndex = -1
    },
    prevIndex: function() {
        this.features && this.selectIndex(this.selectedIndex <= 0 ? this.features.length - 1 : this.selectedIndex - 1, true)
    },
    nextIndex: function() {
        this.features && this.selectIndex(this.selectedIndex >= this.features.length - 1 ? 0 : this.selectedIndex + 1, true)
    },
    selectIndex: function(a, b) {
        this.validIndex() && foodev.removeClass(this.div.firstChild.children[this.selectedIndex],
            "e-selected");
        this.selectedIndex = a;
        this.validIndex() && (foodev.addClass(this.div.firstChild.children[this.selectedIndex], "e-selected"), b === true && this.copyValue())
    },
    copyValue: function() {
        if (this.validIndex()) this.input.value = this.features[this.selectedIndex].sug, this.input.focus()
    },
    validIndex: function(a) {
        if (!a && a !== 0) a = this.selectedIndex;
        return a >= 0 && a < this.features.length
    }
});
enirosp.Package("maps");
eniro.maps.widget.Class("SearchLogic", {
    INFO_WINDOW_HIDE_DELAY: 200,
    map: null,
    options: null,
    markers: [],
    lastGeo: null,
    initialize: function(a, b) {
        this.map = a;
        this.options = b || {}
    },
    destroy: function() {
        this.deleteMarkers();
        this.map = null
    },
    deleteMarkers: function() {
        for (var a in this.markers) this.markers.hasOwnProperty(a) && this.deleteMarker(a)
    },
    deleteMarker: function(a) {
        var b = this.markers[a];
        if (b.$infoWindow) b.$infoWindow.destroy(), b.$infoWindow = null;
        delete this.markers[a];
        b.destroy()
    },
    parseFeatures: function(a) {
        var b =
            "yp",
            c = [];
        try {
            if (a.yp.id) c = [a.yp], b = "yp";
            else if (a.yp.features.length > 0) c = a.yp.features, b = "yp";
            else if (a.geo.id) c = [a.geo], b = "geo";
            else if (a.geo.features.length > 0) c = a.geo.features, b = "geo"
        } catch (d) {}
        return {
            type: b,
            features: c
        }
    },
    clear: function() {
        this.lastGeo = null;
        this.deleteMarkers()
    },
    update: function(a) {
        var b = this.parseFeatures(a),
            a = b.type,
            c = b.features,
            b = [],
            d = [],
            e, f, g, j = this.map.isSSL() ? eniro.Config["appnode.ssl.url"] : eniro.Config["appnode.url"];
        if (a === "yp" && this.lastGeo !== null) e = this.lastGeo, f = new eniro.maps.LatLng(e.geometry.coordinates[1],
            e.geometry.coordinates[0]), g = this.options.icon, g || (g = j + "/media/markers/search/" + this.map.getProfile().get("marker.geoHangaround") + "-single" + this.map.getScalePostfix() + ".png?v=" + eniro.Config["media.version"], g = eniro.maps.Marker.prototype.createDefaultMarkerImage.call(this, g)), f = new eniro.maps.Marker({
            position: f,
            map: this.map,
            icon: g
        }), this.attachInfoWindow(f, e, "geo"), d[e.id] = f;
        var i, h;
        for (i = c.length - 1; i >= 0; --i)
            if (e = c[i], e.address && e.address.type === "R") b = b.concat(this.getRoadGeometry(e, this.map));
            else if (e.geometry) f =
            new eniro.maps.LatLng(e.geometry.coordinates[1], e.geometry.coordinates[0]), g = this.options.icon, g || (g = j + "/media/markers/search/" + this.map.getProfile().get("marker." + a) + "-" + (i + 1) + this.map.getScalePostfix() + ".png?v=" + eniro.Config["media.version"], g = eniro.maps.Marker.prototype.createDefaultMarkerImage.call(this, g)), f = new eniro.maps.Marker({
                position: f,
                map: this.map,
                icon: g
            }), this.attachInfoWindow(f, e, a), d[e.id] = f;
        if (a === "geo") this.lastGeo = c.length === 1 && d.length > 0 ? c[0] : null;
        for (h in this.markers) this.markers.hasOwnProperty(h) &&
            (d[h] && this.markers[h].$infoWindow && this.markers[h].$infoWindow.$sticky && d[h].$showInfoWindow(true), this.deleteMarker(h));
        if (this.roads)
            for (i = 0, h = this.roads.length; i < h; ++i) this.roads[i].setMap(null);
        this.roads = b;
        this.markers = d;
        this.map.setFocus(true)
    },
    getRoadGeometry: function(a, b) {
        var c = [],
            d, e, f, g;
        for (d = 0, g = a.geometry.coordinates.length; d < g; ++d) {
            var j = a.geometry.coordinates[d],
                i = [];
            for (e = 0, f = j.length; e < f; ++e) i.push(new eniro.maps.LatLng(j[e][1], j[e][0]));
            e = new eniro.maps.Polyline({
                map: b,
                path: new eniro.maps.MapArray(i)
            });
            c.push(e)
        }
        return c
    },
    attachInfoWindow: function(a, b, c) {
        var d = this,
            e = function() {
                a.$infoWindow && !a.$infoWindow.$sticky && a.$infoWindow.close()
            },
            f = function() {
                a.$timer && window.clearTimeout(a.$timer);
                a.$timer = window.setTimeout(e, d.INFO_WINDOW_HIDE_DELAY)
            };
        a.$showInfoWindow = function(e) {
            if (!a.$infoWindow) a.$infoWindow = new eniro.maps.InfoWindow({
                    cssClasses: ["e-searchbox-bubble", c === "yp" ? "e-bubble-yp" : "e-bubble-geo"]
                }), eniro.maps.event.addListener(a.$infoWindow, "close", function() {
                    a.$infoWindow.$sticky = false
                }),
                eniro.maps.event.addListener(a.$infoWindow, "mouseover", function() {
                    a.$timer && window.clearTimeout(a.$timer)
                }), eniro.maps.event.addListener(a.$infoWindow, "mouseout", f), c === "yp" && eniro.maps.event.addListener(a.$infoWindow, "click", function(a) {
                    foodev.hasClass(a.target, "e-homepage-link") ? eniro.maps.event.trigger(this.map, "statistics_log", {
                        scope: "navigate",
                        event: "homepage",
                        data: {
                            id: b.id,
                            name: b.customerCode + "|" + b.companyName,
                            context: "bubble"
                        }
                    }) : foodev.hasClass(a.target, "e-phonenumber-link") && eniro.maps.event.trigger(this.map,
                        "statistics_log", {
                            scope: "navigate",
                            event: "phonenumber",
                            data: {
                                id: b.id,
                                name: b.customerCode + "|" + b.companyName,
                                context: "bubble"
                            }
                        })
                });
            if (!a.$infoWindow.$sticky) a.$infoWindow.$sticky = e, e = c === "yp" ? d.ypContent(b) : d.geoContent(b), a.$infoWindow.setContent(e), a.$infoWindow.open(a)
        };
        eniro.maps.event.addListener(a, "mouseover", function() {
            this.$showInfoWindow(false)
        });
        eniro.maps.event.addListener(a, "click", function() {
            this.$showInfoWindow(true)
        });
        eniro.maps.event.addListener(a, "mouseout", f)
    },
    ypContent: function(a) {
        var b,
            c, d = [],
            e = "";
        for (b = 0, c = a.links.length; b < c; ++b) {
            var f = a.links[b];
            f.type === "HOMEPAGE" && (e = ['<a class="e-homepage-link" target="_blank" href="', f.href, '">', f.href.replace(/^http:\/\//, ""), "</a>"].join(""))
        }
        d.push(['<li class="e-action"><a target="_blank" href="http://', this.map.getProfile().get("associatedSite"), "/query?what=map&mop=yp&advert_code=", a.id, '">', this.map.getProfile().i18n("map.searchboxcontrol.route"), "</a></li>"].join(""));
        f = [];
        for (b = 0, c = a.addresses.length; b < c; ++b) {
            var g = a.addresses[b];
            f.push(['<li class="e-address">', g.label, "<br/>", g.postcode, " ", g.area, "</li>"].join(""))
        }
        g = [];
        for (b = 0, c = a.phoneNumbers.length; b < c; ++b) g.push(['<li class="e-phonenumber"><a class="e-phonenumber-link" href="tel:', a.phoneNumbers[b], '">', a.phoneNumbers[b], "</a></li>"].join(""));
        return ['<div class="e-title">', a.companyName, "</div>", e, '<ul class="e-phonenumbers">', g.join(""), '</ul><ul class="e-addresses">', f.join(""), '</ul><ul class="e-actions">', d.join(""), "</ul>"].join("")
    },
    geoContent: function(a) {
        return ['<div class="e-title">',
            a.address.label, '</div><ul class="e-addresses"><li class="e-address">', a.address.postcode, " ", a.address.area, '</li></ul><ul class="e-actions"><li class="e-action"><a target="_blank" href="http://', this.map.getProfile().get("associatedSite"), "/query?what=maps&search_word=&geo_area=", a.address.label, " ", a.address.area, '">', this.map.getProfile().i18n("map.searchboxcontrol.route"), "</a></li></ul>"
        ].join("")
    }
});
eniro.Package("maps");
eniro.maps.Class("SplatterLayer", {
    visibility: false,
    index: "yp",
    features: {},
    spatial: new RTree,
    arcRadius: 3.5,
    reqCount: 0,
    listenersAdded: false,
    staticSearch: null,
    infoWindow: new eniro.maps.InfoWindow({
        cssClasses: ["e-searchbox-bubble", "e-bubble-yp"]
    }),
    initialize: function(a) {
        this.$initialize(a);
        this.listeners = [];
        this.listenerFunctions = {
            mousemove: foodev.bind(this, this.onMouseMove),
            movestart: foodev.bind(this, this.onMoveStart),
            moveend: foodev.bind(this, this.onMoveEnd),
            click: foodev.bind(this, this.onClick),
            zoom_changed: foodev.bind(this,
                this.clearFeatures),
            searchResultAvailable: foodev.bind(this, this.onSearchResultAvailable)
        };
        a = this.toolTip = document.createElement("div");
        a.className = "splatter-tooltip";
        eniro.maps.event.addDomListener(a, "mouseover", foodev.bind(this, function() {
            clearTimeout(this.toolTipTimeout)
        }));
        eniro.maps.event.addDomListener(a, "mouseout", foodev.bind(this, function() {
            this.hideToolTip()
        }));
        eniro.maps.event.addDomListener(a, "click", foodev.bind(this, this.onClickToolTip))
    },
    destroy: function() {
        this.removeListeners()
    },
    setSearch: function(a) {
        this.staticSearch =
            a;
        this.doSearch(a)
    },
    showToolTip: function(a, b) {
        clearTimeout(this.toolTipTimeout);
        var c = this;
        this.toolTipTimeout = setTimeout(function() {
            var d = c.map.getProjection().fromCoordinateToPoint(a);
            c.map.mapDiv.appendChild(c.toolTip);
            c.toolTip.innerHTML = b;
            var e = c.toolTip.offsetWidth,
                f = c.toolTip.offsetHeight,
                g = d.getX() + 10,
                j = d.getY() + 10;
            c.insideViewport(g, j, e, f) || (g = d.getX() - e - 10, c.insideViewport(g, j, e, f) || (j = d.getY() - f - 10, c.insideViewport(g, j, e, f) || (g = d.getX() + 10, c.insideViewport(g, j, e, f) || (j = d.getY() + 10))));
            c.toolTip.style.left = g + "px";
            c.toolTip.style.top = j + "px";
            c.toolTip.style.visibility = "visible"
        }, 200)
    },
    insideViewport: function(a, b, c, d) {
        var e = this.map.viewDiv.offsetWidth,
            f = this.map.viewDiv.offsetHeight;
        return a > 0 && b > 0 && a + c < e && b + d < f
    },
    hideToolTip: function(a) {
        clearTimeout(this.toolTipTimeout);
        if (a) this.toolTip.style.visibility = "hidden";
        else {
            var b = this;
            this.toolTipTimeout = setTimeout(function() {
                b.toolTip.style.visibility = "hidden"
            }, 200)
        }
    },
    getToolTipContent: function(a) {
        var b = [];
        b.push("<ul>");
        var c, d;
        for (c =
            0, d = a.length; c < d && c < 5; ++c) b.push("<li>"), b.push(a[c].companyName), b.push("</li>");
        b.push("</ul>");
        return b.join("")
    },
    onClickToolTip: function() {},
    setVisibility: function(a) {
        this.$setVisibility(a);
        a ? this.addListeners() : this.removeListeners();
        this.visibility = a
    },
    addTo: function(a) {
        this.map = a;
        this.$addTo(a);
        this.addListeners()
    },
    removeFrom: function(a) {
        this.removeListeners();
        this.$removeFrom(a);
        this.map = null
    },
    addListeners: function() {
        if (this.map && !this.listenersAdded) {
            for (var a in this.listenerFunctions) this.listenerFunctions.hasOwnProperty(a) &&
                this.listeners.push(eniro.maps.event.addListener(this.map, a, this.listenerFunctions[a]));
            this.listenersAdded = true
        }
    },
    removeListeners: function() {
        if (this.map) {
            var a, b;
            for (a = 0, b = this.listeners.length; a < b; ++a) eniro.maps.event.removeListener(this.listeners[a]);
            this.listenersAdded = false
        }
    },
    clearFeatures: function() {
        clearTimeout(this.addFeaturesTimeout);
        this.spatial = new RTree;
        this.features = {};
        this.$clearFeatures()
    },
    onMouseOverFeatures: function(a, b) {
        this.map.viewDiv.style.cursor = "pointer";
        this.showToolTip(b.latLng,
            this.getToolTipContent(a))
    },
    onMouseOutFeatures: function() {
        this.map.viewDiv.style.cursor = "";
        this.hideToolTip()
    },
    onClickFeature: function(a) {
        var b = new eniro.maps.LatLng(a.geometry.coordinates[1], a.geometry.coordinates[0]);
        this.infoWindow.setContent(eniro.maps.widget.SearchLogic.prototype.ypContent.call(this, a));
        this.infoWindow.setPosition(b);
        this.infoWindow.open(this.map);
        this.hideToolTip(true)
    },
    onMouseMove: function(a) {
        if (!this.dragging) {
            var b = a.target.tagName.toLowerCase();
            if (!(b !== "svg" && b !== "canvas"))
                if (b =
                    this.getFeaturesAtLatLng(a.latLng), b.length > 0) {
                    if (!this.compareArrays(b, this.hoverFeatures) && this.clickFeature !== b[0]) this.hoverFeatures = b, this.onMouseOverFeatures(b, a)
                } else this.onMouseOutFeatures(a)
        }
    },
    compareArrays: function(a, b) {
        if (a && b) {
            if (a.length !== b.lenth) return false;
            var c, d;
            for (c = 0, d = a.length; c < d; ++c)
                if (a[c] !== b[c]) return false
        }
        return a === b
    },
    onMoveStart: function() {
        this.hideToolTip();
        clearTimeout(this.addFeaturesTimeout);
        this.dragging = true
    },
    onMoveEnd: function() {
        this.dragging = false;
        this.staticSearch &&
            this.doSearch(this.staticSearch)
    },
    onClick: function(a) {
        a = this.getFeaturesAtLatLng(a.latLng);
        if (a.length > 0) {
            this.clickFeature = a[0];
            var b = this.map.getProfile().get("searchProfile", null);
            b || (b = this.map.getProfile().getId());
            foodev.jsonp({
                url: eniro.Config["search.url"] + "/search/search.json",
                params: {
                    index: this.index,
                    profile: b,
                    id: a[0].id
                },
                success: this.onIdSearchSuccess,
                feature: a[0],
                bind: this
            })
        }
    },
    getFeaturesAtLatLng: function(a) {
        a = a.transform(eniro.maps.Srs.SPHMERC);
        return this.spatial.search({
            x: a.getX() -
                1,
            y: a.getY() - 1,
            w: 2,
            h: 2
        })
    },
    onIdSearchSuccess: function(a) {
        this.onClickFeature(a.search[this.index], a)
    },
    doSearch: function(a) {
        this.search = a;
        var b = this.map.getBounds(),
            c = b.getSw(),
            b = b.getNe(),
            b = [c.getLng(), c.getLat(), b.getLng(), b.getLat()],
            d = this.map.isNarrow() ? 200 : 1E3,
            c = eniro.Config["search.url"] + "/search/search.json",
            e = this.map.getProfile().get("searchProfile", null);
        e || (e = this.map.getProfile().getId());
        a = {
            profile: e,
            index: this.index + "_sp",
            BBOX: b.join(","),
            q: a.q,
            pageSize: d
        };
        this.request = foodev.jsonp({
            url: c,
            params: a,
            success: this.onRequestSuccess,
            bind: this,
            reqCount: ++this.reqCount
        })
    },
    onSearchResultAvailable: function(a) {
        var b = foodev.valueForPath(a, "json.displ.index");
        b !== this.index || a.search.id || !a.json.search[b] ? this.clearFeatures() : (this.search && this.search.q !== a.search.q && this.clearFeatures(), this.doSearch(a.search))
    },
    onRequestSuccess: function(a, b) {
        if (!(this.reqCount > b.reqCount)) {
            var c = a.displ.index;
            if (a.search[c]) {
                var d = a.search[c].features || [],
                    e = this;
                (function g(a) {
                    for (var b = a, a = d.length, c = []; b < a &&
                        c.length < 50;) {
                        var k = d[b++];
                        e.putIfAbsent(k) && c.push(k)
                    }
                    e.addNewFeatures(c);
                    if (b < a) e.addFeaturesTimeout = setTimeout(function() {
                        g(b)
                    }, 50)
                })(0)
            }
        }
    },
    addNewFeatures: function(a) {
        var b, c;
        for (b = 0, c = a.length; b < c; ++b) {
            var d = a[b],
                e = (new eniro.maps.LatLng(d.coordinates[1], d.coordinates[0])).transform(eniro.maps.Srs.SPHMERC);
            d.pos = e;
            e = this.map.getSrsZoom();
            e = (this.arcRadius + 2) * this.map.getMapTypeId().getSrs().getResolution(e);
            this.spatial.insert({
                x: d.pos.getX() - e,
                y: d.pos.getY() - e,
                w: e * 2,
                h: e * 2
            }, d)
        }
        this.$addFeatures(a)
    },
    putIfAbsent: function(a) {
        var b = parseInt(a.id, 10) % 100,
            c = this.features[b];
        c || (c = [], this.features[b] = c);
        b = "x" + a.id;
        return c[b] === void 0 ? (c[b] = a, true) : false
    }
});
eniro.maps.SplatterLayer.prototype.$initialize = function() {
    eniro.$IMPLEMENT.apply(this, arguments)
};
eniro.maps.SplatterLayer.prototype.$addTo = function(a) {
    eniro.$IMPLEMENT.apply(this, arguments)
};
eniro.maps.SplatterLayer.prototype.$removeFrom = function(a) {
    eniro.$IMPLEMENT.apply(this, arguments)
};
eniro.maps.SplatterLayer.prototype.$setVisibility = function(a) {
    eniro.$IMPLEMENT.apply(this, arguments)
};
eniro.maps.SplatterLayer.prototype.$clearFeatures = function(a) {
    eniro.$IMPLEMENT.apply(this, arguments)
};
eniro.maps.SplatterLayer.prototype.$addFeatures = function(a) {
    eniro.$IMPLEMENT.apply(this, arguments)
};
eniro.Package("maps.widget");
eniro.maps.widget.Class("SearchBoxControl", {
    Extends: eniro.maps.widget.Control,
    index: "ypgeo",
    suggestEnabled: true,
    suggest: null,
    form: null,
    input: null,
    placeholder: null,
    clearButton: null,
    searchLogic: null,
    initialize: function(a) {
        this.options = a || {};
        a = a.type;
        this.index = a === "yp" || a === "geo" || a === "ypgeo" ? a : "ypgeo";
        if (this.options.suggest === false || this.index === "yp") this.suggestEnabled = false;
        eniro.maps.widget.Control.prototype.initialize.call(this);
        a = document.createElement("input");
        foodev.addClass(a, "e-searchboxcontrol-input");
        a.autocomplete = "off";
        a.setAttribute("autocomplete", "off");
        var b = document.createElement("span");
        foodev.addClass(b, "e-placeholder");
        foodev.addClass(b, "e-unselectable");
        b.unselectable = "on";
        b.setAttribute("unselectable", "on", 0);
        var c = document.createElement("span");
        foodev.addClass(c, "e-clear");
        var d = document.createElement("form");
        foodev.addClass(d, "e-searchboxcontrol-form");
        d.appendChild(a);
        d.appendChild(b);
        d.appendChild(c);
        this.div.appendChild(d);
        eniro.maps.event.addDomListener(d, "submit", foodev.bind(this,
            this.onSubmit));
        eniro.maps.event.addDomListener(b, "click", foodev.bind(this, this.onPlaceholderClick));
        eniro.maps.event.addDomListener(c, "click", foodev.bind(this, this.onClear));
        eniro.maps.event.addDomListener(a, "keydown", foodev.bind(this, this.onKeyDown));
        eniro.maps.event.addDomListener(a, "keyup", foodev.bind(this, this.onKeyUp));
        this.form = d;
        this.input = a;
        this.placeholder = b;
        this.clearButton = c
    },
    postinitialize: function() {
        this.searchLogic = new eniro.maps.widget.SearchLogic(this.map);
        this.searchListener = eniro.maps.event.addListener(this.map,
            "searchResultAvailable", foodev.bind(this, this.onSearchResultAvailable));
        if (this.suggestEnabled) this.suggest = new eniro.maps.widget.SearchBoxSuggest(this), this.form.appendChild(this.suggest.div);
        var a;
        a = this.index === "geo" ? this.map.getProfile().i18n("map.searchboxcontrol.placeholder.geo") : this.index === "yp" ? this.map.getProfile().i18n("map.searchboxcontrol.placeholder.yp") : this.map.getProfile().i18n("map.searchboxcontrol.placeholder");
        this.placeholder.appendChild(document.createTextNode(a));
        a = document.createElement("canvas");
        if (a.getContext && a.getContext("2d") && (a = this.map.getProfile().get("splatter"))) this.splatterLayer = new eniro.maps.SplatterLayer(a), this.splatterLayer.addTo(this.map), eniro.maps.event.addListener(this.map, "searchDo", foodev.bind(this, this.onSearch)), eniro.maps.event.addListener(this.map, "searchClear", foodev.bind(this, this.onSearchClear))
    },
    onSearch: function() {
        this.splatterLayer.setVisibility(true)
    },
    onSearchClear: function() {
        this.splatterLayer.setVisibility(false)
    },
    destroy: function() {
        if (this.searchListener) eniro.maps.event.removeListener(this.searchListener),
            this.searchListener = null;
        this.suggest && this.suggest.destroy();
        this.searchLogic.destroy();
        eniro.maps.widget.Control.prototype.destroy.apply(this, arguments)
    },
    onPlaceholderClick: function() {
        try {
            this.input.focus()
        } catch (a) {}
        return true
    },
    onKeyDown: function(a) {
        return a.keyCode === 37 || a.keyCode === 38 || a.keyCode === 39 || a.keyCode === 40 ? (eniro.maps.event.stop(a, true), false) : true
    },
    checkPlaceholderAndClearButtonVisibility: function() {
        var a = this.placeholder,
            b = this.clearButton,
            c = this.input.value.length;
        if (c > 0 && a.style.display !==
            "none") a.style.display = "none", b.style.display = "inline";
        else if (c === 0) a.style.display = "inline", b.style.display = "none"
    },
    onKeyUp: function() {
        this.checkPlaceholderAndClearButtonVisibility()
    },
    search: function() {
        eniro.maps.event.trigger(this.map, "searchDo", {
            index: this.index,
            q: this.input.value,
            type: "searchDo",
            profile: this.map.getProfile().get("searchProfile")
        })
    },
    onSubmit: function(a) {
        eniro.maps.event.stop(a, false);
        this.input.value ? this.search() : this.clear();
        return false
    },
    clear: function() {
        this.searchLogic.clear();
        this.input.value = "";
        this.checkPlaceholderAndClearButtonVisibility();
        eniro.maps.event.trigger(this.map, "searchClear")
    },
    onClear: function() {
        this.clear()
    },
    onSearchResultAvailable: function(a) {
        a && a.json && a.json.search && (eniro.maps.event.trigger(this.map, "statistics_log", {
            scope: "content",
            event: a.json.displ.index,
            data: {
                result: a,
                provider: a.search.index
            }
        }), this.searchLogic.update(a.json.search))
    }
});
enirosp.Package("maps");
eniro.maps.widget.Class("StickySearch", {
    Extends: eniro.maps.widget.Control,
    div: false,
    started: false,
    reqCount: 0,
    searchLogic: null,
    listeners: [],
    initialize: function(a, b) {
        foodev.assert(a, "search", "string");
        this.search = a;
        this.options = foodev.extend({
            type: "yp",
            relevance: [],
            pageSize: 25
        }, b || {})
    },
    postinitialize: function() {
        var a = {};
        if (this.options.icon) a.icon = this.options.icon;
        this.searchLogic = new eniro.maps.widget.SearchLogic(this.map, a);
        this.listeners.push(eniro.maps.event.addListener(this.map, "center_changed",
            foodev.bind(this, this.onMapMove)));
        this.listeners.push(eniro.maps.event.addListener(this.map, "zoom_changed", foodev.bind(this, this.onMapMove)));
        this.listeners.push(eniro.maps.event.addListener(this.map, "bounds_changed", foodev.bind(this, this.onMapMove)));
        this.listeners.push(eniro.maps.event.addListener(this.map, "maptypeid_changed", foodev.bind(this, this.onMapMove)));
        this.listeners.push(eniro.maps.event.addListener(this.map, "map_started", foodev.bind(this, this.onMapStarted)))
    },
    destroy: function() {
        this.searchLogic.destroy();
        this.searchLogic = null;
        var a, b;
        for (a = 0, b = this.listeners.length; a < b; ++a) this.listeners[a].remove()
    },
    onMapStarted: function() {
        this.started = true;
        this.updateSearch("first")
    },
    onMapMove: function() {
        if (!this.onMapMoveTimeout) {
            var a;
            a = foodev.bind(this, function() {
                delete this.onMapMoveTimeout;
                this.updateSearch("move")
            });
            this.onMapMoveTimeout = setTimeout(a, 1)
        }
    },
    updateSearch: function(a) {
        if (this.map && this.started) {
            var b = this.map.getViewportSize(),
                c = this.map.getCenter(),
                d = Math.pow(10, 6),
                c = Math.round(c.getLng() * d) /
                d + "," + Math.round(c.getLat() * d) / d,
                a = {
                    index: this.options.type || "ypgeo",
                    q: this.search,
                    phase: a,
                    profile: this.map.getProfile().get("searchProfile"),
                    viewPx: b.getWidth() + "," + b.getHeight(),
                    center: c,
                    zoom: this.map.getSrsZoom(),
                    adjPx: "0,0,0,0",
                    relevance: this.options.relevance.join(","),
                    pageSize: this.options.pageSize
                },
                b = this.map.isSSL() ? eniro.Config["search.url.ssl"] : eniro.Config["search.url"];
            this.request = foodev.jsonp({
                url: b + "/search/search.json",
                params: a,
                success: this.onRequestSuccess,
                bind: this,
                reqCount: ++this.reqCount
            })
        }
    },
    onRequestSuccess: function(a, b) {
        this.reqCount > b.reqCount || this.searchLogic.update(a.search)
    }
});
eniro.Package("maps.widget");
eniro.maps.widget.Class("MyLocationControl", {
    Extends: eniro.maps.widget.Control,
    myLocationButton: null,
    myLocationActive: false,
    myLocationMarker: null,
    myLocationLatLng: null,
    postinitialize: function() {
        var a = new eniro.maps.Size(30, 32),
            b = new eniro.maps.Point(15, 16),
            c = (this.map.isSSL() ? eniro.Config["appnode.ssl.url"] : eniro.Config["appnode.url"]) + "/media/markers/draw/crosshair" + this.map.getScalePostfix() + ".png?v=" + eniro.Config["media.version"],
            a = new eniro.maps.MarkerImage(c, a, null, b, null, null);
        this.myLocationMarker =
            new eniro.maps.Marker({
                position: null,
                icon: a,
                map: null
            });
        a = document.createElement("span");
        a.setAttribute("title", this.map.getProfile().i18n("mylocation.title"));
        foodev.addClass(a, "e-mylocation");
        a.tabIndex = "0";
        this.div.appendChild(a);
        eniro.maps.event.addDomListener(a, "click", foodev.bind(this, this.onToggleMyLocation));
        eniro.maps.event.addDomListener(a, "keydown", foodev.bind(this, this.onToggleMyLocation));
        this.myLocationButton = a
    },
    destroy: function() {
        eniro.maps.widget.Control.prototype.destroy.apply(this,
            arguments)
    },
    onToggleMyLocation: function(a) {
        if (a.target === this.myLocationButton && (a.type === "click" || a.type === "keydown" && a.keyCode === 13)) this.myLocationActive ? (foodev.removeClass(this.myLocationButton, "e-mylocation-active"), this.myLocationActive = false) : (foodev.addClass(this.myLocationButton, "e-mylocation-active"), this.myLocationActive = true), eniro.maps.event.trigger(this.map, "mylocation_changed")
    }
});
eniro.Package("maps");
eniro.maps.Class("Map", {
    PAN_PERCENTAGE: 0.5,
    opts: null,
    mapDiv: null,
    viewDiv: null,
    headerDiv: null,
    profile: null,
    projection: null,
    controls: null,
    unloadListener: null,
    sessionId: null,
    visitorId: null,
    uuid: null,
    partnerId: null,
    mapTypeControlDiv: null,
    mapTypeControl: null,
    zoomControl: null,
    searchBoxControlDiv: null,
    searchBoxControl: null,
    searchBoxControlOptions: null,
    stickySearchController: null,
    myLocationControlDiv: null,
    myLocationControl: null,
    myLocationWatchId: null,
    focus: false,
    started: false,
    ssl: false,
    dpr: 1,
    initialize: function(a,
        b) {
        foodev.assert(a, "mapDiv", "element");
        this.opts = b || {};
        this.dpr = window.devicePixelRatio || 1;
        eniro.maps.$sessionCounter++;
        this.sessionId = eniro.maps.$sessionId;
        eniro.maps.$sessionCounter > 1 && (this.sessionId += ":" + eniro.maps.$sessionCounter);
        var c = this;
        eniro.waitForCookie("s_vi", function(a) {
            a ? (a = /\[CS\]v1\|(\S+)\[CE\]/.exec(a), c.visitorId = a[1]) : c.visitorId = "xxxxxxxxxxxxxxxx".replace(/[x]/g, function() {
                return (Math.random() * 36 | 0).toString(36)
            })
        }, 500);
        this.uuid = eniro.maps.$uuid || "";
        if (eniro.maps.$partnerId) this.partnerId =
            eniro.maps.$partnerId;
        this.controls = [];
        this.mapDiv = a;
        this.initViewDiv();
        this.initFocus();
        this.initProfile();
        var d = this.getProfile();
        foodev.addClass(this.viewDiv, "e-map-" + d.get("id"));
        b || (b = {});
        this.ssl = typeof b.ssl === "undefined" ? location.protocol === "https:" : b.ssl;
        this.$initialize();
        this.registerEvents();
        if (!b.center) {
            var e = parseFloat(d.get("init.coordinates.lat")),
                f = parseFloat(d.get("init.coordinates.lon"));
            b.center = new eniro.maps.LatLng(e, f)
        }
        if (!b.mapTypeId) b.mapTypeId = eniro.maps.MapTypeId.MAP;
        if (!b.zoom &&
            !b.srsZoom && (b.srsZoom = d.get("init.zoomLevel"), this.isNarrow())) b.srsZoom = Math.max(0, b.srsZoom - 1);
        if (typeof b.mapTypeControl === "undefined") b.mapTypeControl = true;
        if (typeof b.zoomControl === "undefined") b.zoomControl = true;
        if (typeof b.searchBoxControl === "undefined") b.searchBoxControl = false;
        if (typeof b.myLocationControl === "undefined") b.myLocationControl = false;
        this.setOptions(b);
        this.updateZoomClasses();
        this.unloadListener = eniro.maps.event.addDomListener(window, "unload", foodev.bind(this, this.destroy));
        eniro.maps.event.addListener(this,
            "zoom_changed", foodev.bind(this, this.updateZoomClasses));
        eniro.maps.event.addListener(this, "map_started", foodev.bind(this, function() {
            this.started = true;
            this.setMapWidthClass()
        }));
        eniro.maps.event.addListener(this, "mylocation_changed", foodev.bind(this, this.updateMyLocation));
        eniro.maps.event.addListener(this, "map_resized", foodev.bind(this, this.setMapWidthClass));
        this.$postinitialize();
        this.scheduleMapStarted()
    },
    registerEvents: function() {
        var a = this;
        this.$register("bounds_changed", function() {
            eniro.maps.event.trigger(a,
                "bounds_changed")
        });
        this.$register("center_changed", function() {
            eniro.maps.event.trigger(a, "center_changed")
        });
        this.$register("maptypeid_changed", function() {
            eniro.maps.event.trigger(a, "maptypeid_changed")
        });
        this.$register("zoom_changed", function() {
            eniro.maps.event.trigger(a, "zoom_changed")
        });
        this.$register("click", foodev.bind(this, function(a) {
            eniro.maps.event.trigger(this, "click", a)
        }));
        this.$register("touchend", foodev.bind(this, function(a) {
            eniro.maps.event.trigger(this, "click", a)
        }));
        this.$register("mouseover",
            foodev.bind(this, function(a) {
                eniro.maps.event.trigger(this, "mouseover", a)
            }));
        this.$register("mouseout", foodev.bind(this, function(a) {
            eniro.maps.event.trigger(this, "mouseout", a)
        }));
        this.$register("mousemove", foodev.bind(this, function(a) {
            eniro.maps.event.trigger(this, "mousemove", a)
        }));
        this.$register("movestart", foodev.bind(this, function(a) {
            eniro.maps.event.trigger(this, "movestart", a)
        }));
        this.$register("moveend", foodev.bind(this, function(a) {
            eniro.maps.event.trigger(this, "moveend", a)
        }))
    },
    scheduleMapStarted: function() {
        setTimeout(foodev.bind(this,
            function() {
                eniro.maps.event.trigger(this, "map_started")
            }), 0)
    },
    destroy: function() {
        this.$destroy();
        if (this.viewDiv) window.addEventListener ? (this.viewDiv.removeEventListener("focus", this.onFocus, true), this.viewDiv.removeEventListener("blur", this.onBlur, true)) : (this.viewDiv.onfocusin = null, this.viewDiv.onfocusout = null);
        if (this.controls) {
            var a, b;
            for (a = 0, b = this.controls.length; a < b; ++a) this.controls[a] && (typeof this.controls[a].destroy === "function" && this.controls[a].destroy(), this.remove(this.controls[a]))
        }
        eniro.maps.event.clearInstanceListeners(this);
        this.mapDiv && eniro.maps.event.clearInstanceListeners(this.mapDiv);
        this.viewDiv && eniro.maps.event.clearInstanceListeners(this.viewDiv);
        this.myLocationControl = this.stickySearchController = this.searchBoxControlOptions = this.searchBoxControl = this.zoomControl = this.mapTypeControl = this.projection = this.profile = this.viewDiv = this.mapDiv = null;
        this.unloadListener && eniro.maps.event.removeListener(this.unloadListener);
        this.unloadListener = null
    },
    initViewDiv: function() {
        if (!this.viewDiv) this.viewDiv = document.createElement("div"),
            foodev.addClass(this.viewDiv, "e-map"), this.headerDiv = document.createElement("div"), foodev.addClass(this.headerDiv, "e-mapheader"), this.myLocationControlDiv = document.createElement("div"), this.myLocationControlDiv.id = "e-mylocationcontrol", this.headerDiv.appendChild(this.myLocationControlDiv), foodev.addClass(this.myLocationControlDiv, "e-mylocationcontrol"), this.searchBoxControlDiv = document.createElement("div"), this.searchBoxControlDiv.id = "e-searchboxcontrol", this.headerDiv.appendChild(this.searchBoxControlDiv),
            foodev.addClass(this.searchBoxControlDiv, "e-searchboxcontrol"), this.mapTypeControlDiv = document.createElement("div"), this.mapTypeControlDiv.id = "e-maptypecontrol", this.headerDiv.appendChild(this.mapTypeControlDiv), foodev.addClass(this.mapTypeControlDiv, "e-maptypecontrol"), this.viewDiv.appendChild(this.headerDiv), this.mapDiv.appendChild(this.viewDiv)
    },
    initFocus: function() {
        if (typeof this.viewDiv.tabIndex === "undefined" || this.viewDiv.tabIndex < 0) this.viewDiv.tabIndex = "0";
        this.onFocus = foodev.bind(this, this.onFocus);
        this.onBlur = foodev.bind(this, this.onBlur);
        this.onUserInput = foodev.bind(this, this.onUserInput);
        eniro.maps.event.addDomListener(this.viewDiv, "click", this.onUserInput);
        eniro.maps.event.addDomListener(this.viewDiv, "keydown", this.onUserInput);
        window.addEventListener ? (this.viewDiv.addEventListener("focus", this.onFocus, true), this.viewDiv.addEventListener("blur", this.onBlur, true)) : (this.viewDiv.onfocusin = this.onFocus, this.viewDiv.onfocusout = this.onBlur)
    },
    onFocus: function(a) {
        a = window.event || a;
        if (!a.target) a.target =
            a.srcElement;
        if (foodev.ancIs(this.viewDiv, a.target)) this.focus = true
    },
    onBlur: function(a) {
        a = window.event || a;
        if (!a.target) a.target = a.srcElement;
        if (foodev.ancIs(this.viewDiv, a.target)) this.focus = false
    },
    onUserInput: function() {
        this.focus || this.viewDiv.focus()
    },
    initProfile: function() {
        foodev.assert(eniro.maps.$profile, "eniro.maps.$profile", eniro.maps.Profile);
        this.profile = eniro.maps.$profile
    },
    fitBounds: function(a) {
        foodev.assert(a, "bounds", eniro.maps.LatLngBounds);
        var b = this.getMapTypeId(),
            a = a.transform(b.getSrs()),
            c = this.getViewportSize(),
            d = a.getCenter(),
            a = a.toSpan(),
            c = Math.max(a.getWidth() / c.getWidth(), a.getHeight() / c.getHeight()),
            b = b.getSrs().getSrsZoom(c, d),
            d = d.transform(eniro.maps.Srs.WGS84);
        this.setMapState({
            center: d,
            srsZoom: b
        })
    },
    setOptions: function(a) {
        foodev.assert(a, "opts", "object");
        foodev.assert(a.mapTypeId, "opts.mapTypeId", eniro.maps.MapTypeId, true);
        foodev.assert(a.center, "opts.center", eniro.maps.LatLng, true);
        foodev.assert(a.zoom, "opts.zoom", "number", true);
        foodev.assert(a.srsZoom, "opts.srsZoom", "number",
            true);
        foodev.assert(a.mapTypeControl, "opts.mapTypeControl", "boolean", true);
        foodev.assert(a.zoomControl, "opts.zoomControl", "boolean", true);
        foodev.assert(a.searchBoxControl, "opts.searchBoxControl", "boolean", true);
        foodev.assert(a.myLocationControl, "opts.myLocationControl", "boolean", true);
        foodev.assert(a.ssl, "opts.ssl", "boolean", true);
        if (typeof a.ssl === "undefined") a.ssl = location.protocol === "https:";
        var b = {
            mapTypeId: a.mapTypeId,
            center: a.center,
            mapTypeControl: a.mapTypeControl,
            zoomControl: a.zoomControl,
            searchBoxControl: a.searchBoxControl,
            searchBoxControlOptions: a.searchBoxControlOptions,
            myLocationControl: a.myLocationControl,
            ssl: a.ssl
        };
        if (!navigator || !navigator.geolocation) b.myLocationControl = false;
        if (a.srsZoom) b.srsZoom = a.srsZoom;
        else if (a.zoom) b.zoom = a.zoom;
        this.setMapState(b)
    },
    getBounds: function() {
        var a = this.$getBounds();
        foodev.assert(a, "$result", eniro.maps.LatLngBounds, false, true);
        return a
    },
    getCenter: function() {
        var a = this.$getCenter();
        foodev.assert(a, "$result", eniro.maps.LatLng, false, true);
        return a
    },
    setCenter: function(a) {
        foodev.assert(a, "latLng", eniro.maps.LatLng);
        this.setMapState({
            center: a
        })
    },
    panTo: function(a) {
        foodev.assert(a, "latLng", eniro.maps.LatLng);
        var b = this.getProjection(),
            c = this.getCenter(),
            c = b.fromCoordinateToPoint(c),
            b = b.fromCoordinateToPoint(a),
            a = b.getX() - c.getX(),
            c = b.getY() - c.getY();
        this.panBy(a, c)
    },
    panBy: function(a, b) {
        var c = this.getViewportSize();
        Math.abs(a) < c.width && Math.abs(b) < c.height ? this.$panSmoothBy(a, b) : this.$panDirectBy(a, b)
    },
    panLeft: function() {
        this.panBy(-this.getViewportSize().width *
            this.PAN_PERCENTAGE, 0)
    },
    panRight: function() {
        this.panBy(this.getViewportSize().width * this.PAN_PERCENTAGE, 0)
    },
    panUp: function() {
        this.panBy(0, -this.getViewportSize().height * this.PAN_PERCENTAGE)
    },
    panDown: function() {
        this.panBy(0, this.getViewportSize().height * this.PAN_PERCENTAGE)
    },
    updateSize: function() {
        this.$updateSize()
    },
    getSessionId: function() {
        return this.sessionId
    },
    getVisitorId: function() {
        return this.visitorId
    },
    getUuid: function() {
        return this.uuid
    },
    getPartnerId: function() {
        return this.partnerId
    },
    getMapDiv: function() {
        return this.mapDiv
    },
    getMapTypeId: function() {
        return this.$getMapTypeId()
    },
    setMapTypeId: function(a) {
        foodev.assert(a, "mapTypeId", eniro.maps.MapTypeId);
        this.setMapState({
            mapTypeId: a
        })
    },
    getProfile: function() {
        return this.profile
    },
    getProjection: function() {
        if (this.projection === null) this.projection = new eniro.maps.Projection(this, this.getMapTypeId().getSrs());
        return this.projection
    },
    getZoom: function() {
        var a = this.getSrsZoom();
        return this.profile.mapZoomForSrsZoom(this.getMapTypeId(), a)
    },
    setZoom: function(a) {
        foodev.assert(a, "zoom",
            "number");
        this.setMapState({
            zoom: a
        })
    },
    getSrsZoom: function() {
        var a = this.$getSrsZoom();
        foodev.assert(a, "$result", "number");
        return a
    },
    setSrsZoom: function(a) {
        foodev.assert(a, "srsZoom", "number");
        this.setMapState({
            srsZoom: a
        })
    },
    getViewportSize: function() {
        return new eniro.maps.Size(this.viewDiv.offsetWidth, this.viewDiv.offsetHeight)
    },
    setMapState: function(a) {
        foodev.assert(a, "state", "object");
        foodev.assert(a.mapTypeId, "state.mapTypeId", eniro.maps.MapTypeId, true);
        foodev.assert(a.center, "state.center", eniro.maps.LatLng,
            true);
        foodev.assert(a.zoom, "state.zoom", "number", true);
        foodev.assert(a.srsZoom, "state.srsZoom", "number", true);
        foodev.assert(a.ssl, "state.ssl", "boolean", true);
        var b = this.getMapTypeId(),
            c = b;
        if (a.mapTypeId) b && a.mapTypeId.equals(b) ? delete a.mapTypeId : c = a.mapTypeId, a.mapTypeId && ((b = this.viewDiv.className.replace(/(.*(e-maptypeid-[a-z]+).*)|.*/, "$2")) && foodev.removeClass(this.viewDiv, b), foodev.addClass(this.viewDiv, "e-maptypeid-" + a.mapTypeId.getId()));
        if (a.center && c && (b = this.getCenter())) b = b.transform(a.center.getSrs()),
            a.center.approxEquals(b) && delete a.center;
        if (a.zoom) a.srsZoom = this.profile.srsZoomForMapZoom(c, a.zoom), delete a.zoom;
        a.srsZoom && this.getSrsZoom() === a.srsZoom && delete a.srsZoom;
        if (a.mapTypeId)(b = a.srsZoom) || (b = this.getSrsZoom()), b = this.profile.srsZoomForMapZoom(c, this.profile.mapZoomForSrsZoom(c, b)), a.srsZoom = b;
        this.viewDiv.appendChild(this.headerDiv);
        if (typeof a.ssl === "boolean") this.ssl = a.ssl;
        if (typeof a.myLocationControl === "boolean")
            if (a.myLocationControl && this.myLocationControl === null) this.myLocationControl =
                new eniro.maps.widget.MyLocationControl, this.add(this.myLocationControl, this.myLocationControlDiv);
            else if (!a.myLocationControl && this.myLocationControl !== null) this.remove(this.myLocationControl, this.myLocationControlDiv), this.myLocationControl.destroy(), this.myLocationControl = null;
        if (typeof a.searchBoxControl === "boolean")
            if (a.searchBoxControl && this.searchBoxControl === null) this.searchBoxControl = new eniro.maps.widget.SearchBoxControl(a.searchBoxControlOptions || {}), this.add(this.searchBoxControl, this.searchBoxControlDiv);
            else if (!a.searchBoxControl && this.searchBoxControl !== null) this.remove(this.searchBoxControl, this.searchBoxControlDiv), this.searchBoxControl.destroy(), this.searchBoxControl = null;
        if (typeof a.mapTypeControl === "boolean")
            if (a.mapTypeControl && this.mapTypeControl === null) this.mapTypeControl = new eniro.maps.widget.MapTypeControl, this.add(this.mapTypeControl, this.mapTypeControlDiv);
            else if (!a.mapTypeControl && this.mapTypeControl !== null) this.remove(this.mapTypeControl, this.mapTypeControlDiv), this.mapTypeControl.destroy(),
            this.mapTypeControl = null;
        if (typeof a.zoomControl === "boolean")
            if (a.zoomControl && this.zoomControl === null) this.zoomControl = new eniro.maps.widget.ZoomControl, this.add(this.zoomControl);
            else if (!a.zoomControl && this.zoomControl !== null) this.remove(this.zoomControl), this.zoomControl.destroy(), this.zoomControl = null;
        (a.mapTypeId || a.center || a.srsZoom) && this.$setMapState(a)
    },
    updateMyLocation: function() {
        if (this.myLocationControl && this.myLocationControl.myLocationActive === false) {
            if (this.myLocationControl.myLocationMarker.setVisible(false),
                this.myLocationWatchId) navigator.geolocation.clearWatch(this.myLocationWatchId), this.myLocationWatchId = null
        } else {
            var a = this;
            navigator.geolocation && navigator.geolocation.getCurrentPosition(function(b) {
                var c = new eniro.maps.LatLng(b.coords.latitude, b.coords.longitude);
                if (c) {
                    var d = b.coords.accuracy;
                    d < 2E3 && (d = 2E3);
                    var e = d / 6371008 / Math.PI * 180 / Math.sqrt(2),
                        d = d / 6371008 / Math.PI * 180 / Math.sqrt(2) / Math.cos(b.coords.latitude * Math.PI / 180),
                        b = new eniro.maps.LatLng(c.lat() - e, c.lng() - d),
                        e = new eniro.maps.LatLng(c.lat() +
                            e, c.lng() + d),
                        e = new eniro.maps.LatLngBounds(b, e);
                    a.fitBounds(e);
                    a.myLocationControl.myLocationLatLng = c;
                    a.myLocationControl.myLocationMarker.position = c;
                    a.myLocationControl.myLocationMarker.map = a;
                    a.myLocationControl.myLocationMarker.setVisible(true);
                    a.myLocationControl.myLocationMarker.$olMarker ? a.myLocationControl.myLocationMarker.$update() : a.myLocationControl.myLocationMarker.$add();
                    if (a.myLocationWatchId) navigator.geolocation.clearWatch(a.myLocationWatchId), a.myLocationWatchId = null;
                    a.myLocationWatchId =
                        navigator.geolocation.watchPosition(function(b) {
                            if (b = new eniro.maps.LatLng(b.coords.latitude, b.coords.longitude)) a.myLocationControl.myLocationMarker.position = b, a.myLocationControl.myLocationMarker.map = a, a.myLocationControl.myLocationMarker.$olMarker ? a.myLocationControl.myLocationMarker.$move() : a.myLocationControl.myLocationMarker.$add()
                        }, function() {}, {
                            enableHighAccuracy: true,
                            maximumAge: 2E4
                        })
                }
            }, function() {})
        }
    },
    updateZoomClasses: function() {
        var a = this.getZoom(),
            b;
        for (b = 1; b < 20; b++) foodev.removeClass(this.viewDiv,
            "e-zoom-min" + b), foodev.removeClass(this.viewDiv, "e-zoom-max" + b), foodev.removeClass(this.viewDiv, "e-zoom-" + b);
        for (b = 1; b < 20; b++) b <= a && foodev.addClass(this.viewDiv, "e-zoom-min" + b), b >= a && foodev.addClass(this.viewDiv, "e-zoom-max" + b);
        foodev.addClass(this.viewDiv, "e-zoom-" + a)
    },
    isNarrow: function() {
        return this.getViewportSize().width < 470
    },
    setMapWidthClass: function() {
        var a = this.getViewportSize().width;
        this.isNarrow() ? (foodev.addClass(this.viewDiv, "e-narrow"), foodev.removeClass(this.viewDiv, "e-wide")) : a > 600 ?
            (foodev.addClass(this.viewDiv, "e-wide"), foodev.removeClass(this.viewDiv, "e-narrow")) : (foodev.removeClass(this.viewDiv, "e-narrow"), foodev.removeClass(this.viewDiv, "e-wide"));
        this.searchBoxControl ? foodev.addClass(this.viewDiv, "e-searchboxactive") : foodev.removeClass(this.viewDiv, "e-searchboxactive");
        this.myLocationControl ? foodev.addClass(this.viewDiv, "e-mylocation-visible") : foodev.removeClass(this.viewDiv, "e-mylocation-visible")
    },
    addStickySearch: function(a, b) {
        var c = new eniro.maps.widget.StickySearch(a,
            b);
        this.add(c);
        return {
            ctrl: c
        }
    },
    removeStickySearch: function(a) {
        a.ctrl && (this.remove(a.ctrl), a.ctrl.destroy())
    },
    add: function(a, b) {
        b = b || this.viewDiv;
        foodev.assert(a, "control", eniro.maps.widget.Control);
        typeof a.setMap === "function" && a.setMap(this);
        if (typeof a.getDiv === "function") {
            var c = a.getDiv();
            c && (!c.parentNode || c.parentNode.nodeType === 11) && b.appendChild(c)
        }
        this.controls.push(a)
    },
    remove: function(a, b) {
        b = b || this.viewDiv;
        if (a !== null) {
            foodev.assert(a, "control", eniro.maps.widget.Control);
            var c, d, e;
            for (c =
                0, d = this.controls.length; c < d; ++c)
                if (this.controls[c] === a) {
                    e = true;
                    this.controls[c] = null;
                    this.controls.splice(c, 0);
                    break
                }
            e && (typeof a.setMap === "function" && a.setMap(null), typeof a.getDiv === "function" && (c = a.getDiv()) && c.parentNode === b && b.removeChild(c))
        }
    },
    hasFocus: function() {
        return this.focus
    },
    isSSL: function() {
        return this.ssl
    },
    setFocus: function(a) {
        foodev.assert(a, "focus", "boolean");
        a ? this.viewDiv.focus() : this.hasFocus() && (this.viewDiv.focus(), this.viewDiv.blur())
    },
    isStarted: function() {
        return this.started
    },
    getScale: function() {
        return this.dpr >= 1.5 ? 2 : 1
    },
    getScalePostfixNoHyphen: function() {
        return this.getScale() > 1 ? this.getScale() + "x" : ""
    },
    getScalePostfix: function() {
        return this.getScale() > 1 ? "-" + this.getScale() + "x" : ""
    }
});
eniro.maps.Map.prototype.$getSrsZoom = function() {
    eniro.$IMPLEMENT.apply(this, arguments)
};
eniro.maps.Map.prototype.$getCenter = function() {
    eniro.$IMPLEMENT.apply(this, arguments)
};
eniro.maps.Map.prototype.$getBounds = function() {
    eniro.$IMPLEMENT.apply(this, arguments)
};
eniro.maps.Map.prototype.$getMapTypeId = function() {
    eniro.$IMPLEMENT.apply(this, arguments)
};
eniro.maps.Map.prototype.$setMapState = function(a) {
    eniro.$IMPLEMENT.apply(this, arguments)
};
eniro.maps.Map.prototype.$panDirectBy = function(a, b) {
    eniro.$IMPLEMENT.apply(this, arguments)
};
eniro.maps.Map.prototype.$panSmoothBy = function(a, b) {
    eniro.$IMPLEMENT.apply(this, arguments)
};
eniro.maps.Map.prototype.$updateSize = function() {
    eniro.$IMPLEMENT.apply(this, arguments)
};
eniro.maps.Map.prototype.$initialize = function() {
    eniro.$IMPLEMENT.apply(this, arguments)
};
eniro.maps.Map.prototype.$register = function(a, b) {
    eniro.$IMPLEMENT.apply(this, arguments)
};
eniro.maps.Map.prototype.$destroy = function() {
    eniro.$IMPLEMENT.apply(this, arguments)
};
eniro.maps.Map.prototype.$postinitialize = function() {
    eniro.$IMPLEMENT.apply(this, arguments)
};