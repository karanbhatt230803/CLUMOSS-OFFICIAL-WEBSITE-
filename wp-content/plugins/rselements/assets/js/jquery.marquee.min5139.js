(function(n) {
    jQuery('.marquee_text').addClass("initialized");
    n.fn.marquee = function(t) {
        return this.each(function() {
            jQuery('.marquee_text').addClass("initialized");
            var i = n.extend({}, n.fn.marquee.defaults, t),
                r = n(this),
                u, p, f = 3,
                nt = "animation-play-state",
                a = !1,
                ft = function(n, t, i) {
                    for (var u = ["webkit", "moz", "MS", "o", ""], r = 0; r < u.length; r++) u[r] || (t = t.toLowerCase()), n.addEventListener(u[r] + t, i, !1)
                },
                et = function(n) {
                    var t = [];
                    for (var i in n) 
                    return t.push(), "{" + t.join(",") + "}"
                },
                w = {
                    pause: function() {
                        a && i.allowCss3Support ? u.css(nt, "paused") : n.fn.pause && u.pause();
                        r.data("runningStatus", "paused");
                        r.trigger("paused")
                    },
                    resume: function() {
                        a && i.allowCss3Support ? u.css(nt, "running") : n.fn.resume && u.resume();
                        r.data("runningStatus", "resumed");
                        r.trigger("resumed")
                    },
                    toggle: function() {
                        w[r.data("runningStatus") == "resumed" ? "pause" : "resume"]()
                    },
                    destroy: function() {
                        clearTimeout(r.timer);
                        r.find("*").addBack().unbind();
                        r.html(r.find(".js-marquee:first").html())
                    }
                },
                b, k, v, o, l, h, c, g, tt, it, d;
            if (typeof t == "string") 
            else {
                if (n.each(i, function(n) {
                        if (b = r.attr("data-" + n), typeof b != "undefined") {
                            switch (b) {
                                case "true":
                                    b = !0;
                                    break;
                                case "false":
                                    b = !1
                            }
                            i[n] = b
                        }
                    }), i.speed && (i.duration = parseInt(r.width(), 10) / i.speed * 1e3), k = i.direction == "up" || i.direction == "down", i.gap = i.duplicated ? parseInt(i.gap) : 0, r.wrapInner('<div class="js-marquee"><\/div>'), v = r.find(".js-marquee").css({
                        "margin-right": i.gap,
                        float: "left"
                    }), i.duplicated && v.clone(!0).appendTo(r), r.wrapInner('<div style="width:100000px" class="js-marquee-wrapper"><\/div>'), u = r.find(".js-marquee-wrapper"), k ? (o = r.height(), u.removeAttr("style"), r.height(o), r.find(".js-marquee").css({
                        float: "none",
                        "margin-bottom": i.gap,
                        "margin-right": 0
                    }), i.duplicated && r.find(".js-marquee:last").css({
                        "margin-bottom": 0
                    }), l = r.find(".js-marquee:first").height() + i.gap, i.startVisible && !i.duplicated ? (i._completeDuration = (parseInt(l, 10) + parseInt(o, 10)) / parseInt(o, 10) * i.duration, i.duration *= parseInt(l, 10) / parseInt(o, 10)) : i.duration *= (parseInt(l, 10) + parseInt(o, 10)) / parseInt(o, 10)) : (h = r.find(".js-marquee:first").width() + i.gap, c = r.width(), i.startVisible && !i.duplicated ? (i._completeDuration = (parseInt(h, 10) + parseInt(c, 10)) / parseInt(c, 10) * i.duration, i.duration *= parseInt(h, 10) / parseInt(c, 10)) : i.duration *= (parseInt(h, 10) + parseInt(c, 10)) / parseInt(c, 10)), i.duplicated && (i.duration /= 2), i.allowCss3Support) {
                    v = document.body || document.createElement("div");
                    var s = "marqueeAnimation-" + Math.floor(1e7 * Math.random()),
                        rt = ["Webkit", "Moz", "O", "ms", "Khtml"],
                        ut = "animation",
                        e = "",
                        y = "";
                    if (v.style.animation && (y = "@keyframes " + s + " ", a = !0), !1 === a)
                        for (g = 0; g < rt.length; g++)
                            if (void 0 !== v.style[rt[g] + "AnimationName"]) {
                                v = "-" + rt[g].toLowerCase() + "-";
                                ut = v + ut;
                                nt = v + nt;
                                y = "@" + v + "keyframes " + s + " ";
                                a = !0;
                                break
                            }
                    
                }
                tt = function() {
                    u.css("transform", "translateY(" + (i.direction == "up" ? o + "px" : "-" + l + "px") + ")")
                };
                it = function() {
                    u.css("transform", "translateX(" + (i.direction == "left" ? c + "px" : "-" + h + "px") + ")")
                };
                i.duplicated ? (k ? i.startVisible ? u.css("transform", "translateY(0)") : u.css("transform", "translateY(" + (i.direction == "up" ? o + "px" : "-" + (2 * l - i.gap) + "px") + ")") : i.startVisible ? u.css("transform", "translateX(0)") : u.css("transform", "translateX(" + (i.direction == "left" ? c + "px" : "-" + (2 * h - i.gap) + "px") + ")"), i.startVisible || (f = 1)) : i.startVisible ? f = 2 : k ? tt() : it();
                d = function() {
                    if (i.duplicated && (f === 1 ? (i._originalDuration = i.duration, i.duration = k ? i.direction == "up" ? i.duration + o / (l / i.duration) : 2 * i.duration : i.direction == "left" ? i.duration + c / (h / i.duration) : 2 * i.duration, e && (e = s + " " + i.duration / 1e3 + "s " + i.delayBeforeStart / 1e3 + "s " + i.css3easing), f++) : f === 2 && (i.duration = i._originalDuration, e && (s += "0", y = n.trim(y) + "0 ", e = s + " " + i.duration / 1e3 + "s 0s infinite " + i.css3easing), f++)), k ? i.duplicated ? (f > 2 && u.css("transform", "translateY(" + (i.direction == "up" ? 0 : "-" + l + "px") + ")"), p = {
                            transform: "translateY(" + (i.direction == "up" ? "-" + l + "px" : 0) + ")"
                        }) : i.startVisible ? f === 2 ? (e && (e = s + " " + i.duration / 1e3 + "s " + i.delayBeforeStart / 1e3 + "s " + i.css3easing), p = {
                            transform: "translateY(" + (i.direction == "up" ? "-" + l + "px" : o + "px") + ")"
                        }, f++) : f === 3 && (i.duration = i._completeDuration, e && (s += "0", y = n.trim(y) + "0 ", e = s + " " + i.duration / 1e3 + "s 0s infinite " + i.css3easing), tt()) : (tt(), p = {
                            transform: "translateY(" + (i.direction == "up" ? "-" + u.height() + "px" : o + "px") + ")"
                        }) : i.duplicated ? (f > 2 && u.css("transform", "translateX(" + (i.direction == "left" ? 0 : "-" + h + "px") + ")"), p = {
                            transform: "translateX(" + (i.direction == "left" ? "-" + h + "px" : 0) + ")"
                        }) : i.startVisible ? f === 2 ? (e && (e = s + " " + i.duration / 1e3 + "s " + i.delayBeforeStart / 1e3 + "s " + i.css3easing), p = {
                            transform: "translateX(" + (i.direction == "left" ? "-" + h + "px" : c + "px") + ")"
                        }, f++) : f === 3 && (i.duration = i._completeDuration, e && (s += "0", y = n.trim(y) + "0 ", e = s + " " + i.duration / 1e3 + "s 0s infinite " + i.css3easing), it()) : (it(), p = {
                            transform: "translateX(" + (i.direction == "left" ? "-" + h + "px" : c + "px") + ")"
                        }), r.trigger("beforeStarting"), a) {
                        u.css(ut, e);
                        var t = y + " { 100%  " + et(p) + "}",
                            v = u.find("style");
                        v.length !== 0 ? v.filter(":last").html(t) : n("head").append("<style>" + t + "<\/style>");
                        ft(u[0], "AnimationIteration", function() {
                            r.trigger("finished")
                        });
                        ft(u[0], "AnimationEnd", function() {
                            d();
                            r.trigger("finished")
                        })
                    } else u.animate(p, i.duration, i.easing, function() {
                        r.trigger("finished");
                        i.pauseOnCycle ? r.timer = setTimeout(d, i.delayBeforeStart) : d()
                    });
                    r.data("runningStatus", "resumed")
                };
                r.bind("pause", w.pause);
                r.bind("resume", w.resume);
                
                a && i.allowCss3Support ? d() : r.timer = setTimeout(d, i.delayBeforeStart)
            }
        })
    };
   
    n.fn.marquee.defaults = {
        allowCss3Support: !0,
        css3easing: "linear",
        easing: "linear",
        delayBeforeStart: 1e3,
        direction: "left",
        duplicated: !1,
        duration: 5e3,
        gap: 20,
        pauseOnCycle: !1,
        pauseOnHover: !1,
        startVisible: !1
    }
})(jQuery)