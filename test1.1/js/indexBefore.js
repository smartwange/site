function packager(namespaceStr) {
    for (var part, parts = namespaceStr.split("."), parent = window, i = 0; i < parts.length; i++)
        part = parts[i],
        parent[part] = parent[part] || {},
        parent = parent[part]
}

//var hi = function(){ alert("hi") };
//hi();
//等于...
//(function(){ alert("hi") })();
//!、+和()一样的效果可以把换成
//!function(){ alert("hi") }();
//!比()节省一个字符，或者说比()好看些
!function() {
    function e() {
        $(".page-loader .site-logo").addClass("fade-in-up");
        var e = !1;
        $(window).load(function() {
            e = !0
        });
        var i = function() {
            $(".page-loader").fadeOut(500, function() {
                $("body.has-preloader > *").not(".page-loader").not("script").addClass("fade-in-up"),
                setTimeout(function() {
                    $(".site-nav.level-1").addClass("site-nav-animated"),
                    setTimeout(function() {
                        $("body.has-preloader").removeClass("has-preloader")
                    }, 200)
                }, 200)
            })
        }
          , t = 0
          , a = setInterval(function() {
            t += 20,
            (e || t > 2500) && (i(),
            clearInterval(a))
        }, 20)
    }
    function i() {
        $("#tab_pane_news .title").one("inview", function() {
            $("#tab_pane_news").addClass("tab-news-animated")
        })
    }
    function t() {
        $("#office_map_image").attr("src", $("#office_info_list .list-item").first().data("map-url")),
        $("#office_info_list").on("click", ".list-item", function() {
            $("#office_info_list .list-item").removeClass("active"),
            $(this).addClass("active"),
            $("#office_map_image").attr("src", $(this).data("map-url"))
        })
    }
    function a() {
        function e(e) {
            e.val() ? e.closest(".form-group").find(".select2-selection__rendered").removeClass("is-initial-value") : e.closest(".form-group").find(".select2-selection__rendered").addClass("is-initial-value")
        }
        $("select").select2({
            minimumResultsForSearch: 1 / 0
        }),
        $("select").each(function() {
            e($(this)),
            $(this).change(function() {
                e($(this))
            })
        })
    }
    packager("app.pages.index"),
    app.pages.index = {
        init: function() {
            this.initHomepagePreloader(),
            this.initNewsAndDealsAnimation(),
            this.initOfficeList(),
            this.initSelect()
        },
        initHomepagePreloader: e,
        initNewsAndDealsAnimation: i,
        initOfficeList: t,
        initSelect: a
    }
}();
