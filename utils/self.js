var x = [];

!function (x, t) {
  !function (t) {
    for (; --t;) x.push(x.shift());
  }(++t);
}(x, 102);

var t = function (t, e) {
  return x[t -= 0];
};

Object[t("0x0")](exports, t("0x1"), {
  value: !![]
});

!function (x) {
  x && x[t("0x1")];
}(require(t("0x2")));

var n = getApp();

exports[t("0x3")] = Page({
  data: {
    NAV_HEIGHT: wx.STATUS_BAR_HEIGHT + wx[t("0x4")],
    height: wx.DEFAULT_CONTENT_HEIGHT,
    current: 0,
    show: ![],
    menuSta: !![],
    menushow: ![],
    loginMask: ![],
    showMask: ![],
    shareMask: ![],
    imageMask: ![],
    longtime: ![],
    headtap: !![],
    tabcurrent: 0,
    songFavSta: 0,
    dsenFavSta: 0,
    dartFavSta: 0,
    poptabStyle: {
      "font-size": t("0x5"),
      padding: "20rpx 0",
      "font-weight": t("0x6"),
      color: t("0x7"),
      "width:": t("0x8")
    },
    popactiveTabStyle: {
      color: t("0x9"),
      "font-weight": t("0xa"),
      "border-right": t("0xb")
    },
    customStyle: {
      "background-color": t("0xc")
    },
    tabStyle: {
      "font-size": "32rpx",
      flex: t("0xd"),
      padding: t("0xe"),
      "margin-left": "20rpx",
      "margin-right": "20rpx",
      color: t("0x7"),
      "font-weight": "300"
    },
    activeTabStyle2: {
      color: t("0x9"),
      "border-bottom": "1px solid #333333"
    },
    maskStyle: {
      "background-color": t("0xf")
    },
    menuMaskStyle: {
      "background-color": "rgba(255,255,255,.9)"
    },
    muiscImgPlayer: "",
    dateobj: {}
  },
  onLoad: function (x) {
    var e = {
      wnMKV: function (x, t) {
        return x == t;
      },
      swLrG: function (x, t, e) {
        return x(t, e);
      },
      XVkkE: function (x, t) {
        return x == t;
      },
      LgCCg: function (x, t) {
        return x == t;
      },
      eYGxC: function (x, t) {
        return x == t;
      },
      rgFyu: function (x, t) {
        return x - t;
      },
      ysAIM: function (x, t) {
        return x === t;
      },
      ZHAGl: t("0x10"),
      aNaDK: t("0x11"),
      YyhAq: "Apr",
      Fbatm: t("0x12"),
      IqYvC: t("0x13"),
      tGGsP: t("0x14"),
      JdaWQ: t("0x15"),
      iEXYM: t("0x16"),
      kTZyl: t("0x17"),
      nhxTo: t("0x18"),
      OVoii: t("0x19"),
      ZLNWz: t("0x1a"),
      qXGxN: t("0x1b"),
      RRfUC: t("0x1c"),
      EByXt: t("0x1d"),
      oYlfF: function (x, t) {
        return x === t;
      },
      Tiqgr: t("0x1e"),
      vBAlX: t("0x1f"),
      zWkcs: function (x, t) {
        return x == t;
      },
      DOexY: t("0x20"),
      lDmzQ: function (x, t) {
        return x == t;
      },
      KLMKw: function (x, t) {
        return x === t;
      },
      UVQQt: t("0x21"),
      XWaJZ: function (x, t) {
        return x < t;
      },
      FwPbq: t("0x22"),
      zLWQV: t("0x23"),
      Yyodh: function (x, t) {
        return x + t;
      },
      VvLvJ: function (x, t) {
        return x === t;
      },
      xHXxg: t("0x24"),
      rXKUJ: t("0x25"),
      bCtzF: function (x, t) {
        return x(t);
      },
      ZGSLR: function (x, t) {
        return x !== t;
      },
      GxbXR: t("0x26"),
      IFrLK: function (x, t) {
        return x > t;
      },
      DvuXL: function (x, t) {
        return x < t;
      },
      xWFzH: t("0x27"),
      vqjFA: t("0x28"),
      jSJUu: t("0x29"),
      PNXCk: function (x, t) {
        return x === t;
      },
      JJWQG: t("0x2a"),
      uIldq: t("0x2b"),
      clpGW: t("0x2c"),
      wjDGh: t("0x2d")
    }, r = this;
    if (x[t("0x2e")]) if (e[t("0x2f")](e[t("0x30")], t("0x25"))) {
      for (var i = e[t("0x31")](decodeURIComponent, x[t("0x2e")]).split(","), c = [], u = 0; e[t("0x32")](u, i[t("0x33")]); u++) e[t("0x34")](t("0x35"), e[t("0x36")]) ? c[t("0x37")](i[u][t("0x38")]("=")) : e[t("0x39")](setTimeout, function () {
        e[t("0x3a")](n[t("0x3b")][t("0x3c")], 1e4) && r[t("0x3d")]({
          loginMask: !![]
        });
      }, 1e3);
      if (e[t("0x3e")](c[t("0x33")], 0)) {
        for (var s = {}, o = 0; e[t("0x3f")](o, c[t("0x33")]); o++) if (t("0x40") === t("0x41")) {
          if (e[t("0x42")](m, 0)) {
            var d = r[t("0x43")][t("0x44")] - 1;
            r[t("0x3d")]({
              dsongFav: d,
              songFavSta: 0
            });
          }
          if (e[t("0x45")](m, 1)) {
            var f = r[t("0x43")].dsentencFav - 1;
            r.setData({
              dsentencFav: f,
              dsenFavSta: 0
            });
          }
          if (e[t("0x46")](m, 2)) {
            var l = e[t("0x47")](r[t("0x43")][t("0x48")], 1);
            r[t("0x3d")]({
              darticleFav: l,
              dartFavSta: 0
            });
          }
        } else s[c[o][0]] = c[o][1];
        r[t("0x49")](s.tid), r.setData({
          current: s[t("0x4a")]
        });
      }
    } else {
      var h = this, v = x[t("0x4b")][t("0x4c")].show;
      e[t("0x46")](v, !![]) ? h[t("0x3d")]({
        menushow: !![],
        menuSta: ![]
      }) : h[t("0x3d")]({
        menushow: ![],
        menuSta: !![]
      });
    } else if (e.xWFzH === e[t("0x4d")]) test += rowPart[a]; else if (x[t("0x4e")]) {
      var g = x[t("0x4e")], m = x[t("0x4a")];
      r.peaceread(g), r[t("0x3d")]({
        current: m
      });
    } else r.peaceread();
    if (!wx[t("0x4f")](e[t("0x50")]).token) if (e[t("0x51")](e[t("0x52")], e[t("0x52")])) e[t("0x39")](setTimeout, function () {
      e[t("0x53")](e[t("0x54")], "EbwiV") ? r[t("0x3d")]({
        musicPlay: "",
        muiscImgPlayer: ""
      }) : e[t("0x46")](n[t("0x3b")][t("0x3c")], 1e4) && r.setData({
        loginMask: !![]
      });
    }, 1e3); else {
      var p = res[t("0x43")][t("0x43")][0][t("0x55")].split("-"), w = {
        1: e[t("0x56")],
        2: "Feb",
        3: t("0x57"),
        4: e[t("0x58")],
        5: e[t("0x59")],
        6: t("0x5a"),
        7: e[t("0x5b")],
        8: e[t("0x5c")],
        9: e[t("0x5d")],
        10: e[t("0x5e")],
        11: e[t("0x5f")],
        12: e[t("0x60")]
      };
      r[t("0x3d")]({
        date: p[2],
        month: w[p[1]],
        year: p[0],
        newoneId: res[t("0x43")][t("0x43")][0].id,
        rsongImg: res[t("0x43")][t("0x43")][0][t("0x61")][t("0x62")](/http:/g, e[t("0x63")]),
        dsongImg: res.data[t("0x43")][0][t("0x64")],
        dsongTit: res[t("0x43")][t("0x43")][0][t("0x65")],
        dsongSin: res[t("0x43")][t("0x43")][0][t("0x66")],
        dsongFav: res[t("0x43")][t("0x43")][0].mfav,
        dsongShr: res[t("0x43")].data[0][t("0x67")],
        dsentTit: res[t("0x43")].data[0][t("0x68")],
        dsentenc: res[t("0x43")][t("0x43")][0].j_contents,
        darticle: res.data[t("0x43")][0].w_contents,
        dsentencAur: res[t("0x43")][t("0x43")][0][t("0x69")],
        dsentencFav: res[t("0x43")].data[0][t("0x6a")],
        dsentencShr: res[t("0x43")].data[0][t("0x6b")],
        darticleTit: res.data[t("0x43")][0][t("0x6c")],
        darticleAur: res.data[t("0x43")][0].w_author,
        darticleImg: res[t("0x43")][t("0x43")][0].pic_w.replace(/http:/g, e[t("0x63")]),
        darticleFav: res[t("0x43")][t("0x43")][0][t("0x6d")],
        darticleShr: res.data[t("0x43")][0][t("0x6e")]
      });
    }
    wx.getSystemInfo({
      success: function (x) {
        r[t("0x3d")]({
          WIN_HEIGHT: x[t("0x6f")]
        });
      }
    }), wx[t("0x70")]({
      url: e.uIldq,
      success: function (x) {
        0 == x[t("0x43")][t("0x71")] && (e[t("0x46")](x[t("0x43")][t("0x43")][t("0x72")], 0) ? e.RRfUC === e[t("0x73")] ? r[t("0x3d")]({
          longtime: !![]
        }) : (r[t("0x3d")]({
          showMask: ![]
        }), n[t("0x74")](), wx[t("0x75")]({
          title: e[t("0x76")],
          icon: e.qXGxN
        }), n.globalData[t("0x3c")] = 0) : r[t("0x3d")]({
          longtime: ![]
        }));
      }
    }), wx[t("0x70")]({
      url: e.clpGW,
      data: {},
      success: function (a) {
        var i = {
          zcOQp: e[t("0x77")],
          uaAlo: function (x, t) {
            return e.zWkcs(x, t);
          },
          hesCl: e.DOexY
        };
        if (e.lDmzQ(a[t("0x43")][t("0x71")], 0)) if (e[t("0x78")](e[t("0x79")], e[t("0x79")])) {
          r[t("0x3d")]({
            duyear: a.data.data
          });
          for (var c = 0; e.XWaJZ(c, a[t("0x43")][t("0x43")][t("0x33")]); c++) wx[t("0x70")]({
            url: t("0x7a"),
            data: {
              year: a[t("0x43")].data[c]
            },
            success: function (a) {
              var i = {
                NPxAP: function (x, a) {
                  return e[t("0x46")](x, a);
                },
                Ziped: function (x, t) {
                  return x == t;
                },
                WsnnQ: function (x, a) {
                  return e[t("0x46")](x, a);
                }
              };
              if (e[t("0x53")](e[t("0x7b")], e[t("0x7b")])) {
                if (0 == a[t("0x43")][t("0x71")]) if (e[t("0x7c")](t("0x7d"), e.Tiqgr)) {
                  var c = this;
                  wx.stopBackgroundAudio(), c[t("0x7e")].play(), c[t("0x3d")]({
                    audioPlay: !![]
                  });
                } else r[t("0x3d")]({
                  dumonth: a[t("0x43")][t("0x43")]
                }), wx[t("0x70")]({
                  url: "https://xiaodu.maliapi.com/api/1?viewid=home&part=mon_get_day",
                  data: {
                    year: a[t("0x43")][t("0x43")][0][2],
                    mon: a.data[t("0x43")][0][0]
                  },
                  success: function (x) {
                    i[t("0x7f")](x[t("0x43")][t("0x71")], 0) && r[t("0x3d")]({
                      monthData: x[t("0x43")][t("0x43")]
                    });
                  }
                });
              } else {
                var u = this;
                if (i[t("0x80")](n[t("0x3b")][t("0x3c")], 1e4)) return void u[t("0x3d")]({
                  loginMask: !![]
                });
                var s = x[t("0x4b")][t("0x4c")][t("0x81")];
                i[t("0x82")](s, !![]) ? this[t("0x3d")]({
                  show: !![],
                  headtap: ![]
                }) : this[t("0x3d")]({
                  show: ![],
                  headtap: !![]
                });
              }
            }
          });
        } else for (var u = i[t("0x83")][t("0x38")]("|"), s = 0; [];) {
          switch (u[s++]) {
            case "0":
              var o = {
                lmkbw: function (x, e) {
                  return i[t("0x84")](x, e);
                }
              };
              continue;

            case "1":
              var d = l.data[t("0x85")];
              continue;

            case "2":
              var f = wx[t("0x4f")](t("0x29")).token;
              continue;

            case "3":
              var l = this;
              continue;

            case "4":
              wx.request({
                url: i[t("0x86")],
                data: {
                  id: d,
                  token: f
                },
                success: function (x) {
                  o[t("0x87")](x[t("0x43")].code, 0) && l.setData({
                    songFavSta: x[t("0x43")].data.m_status,
                    dsenFavSta: x.data[t("0x43")][t("0x88")],
                    dartFavSta: x[t("0x43")].data[t("0x89")]
                  });
                }
              });
              continue;
          }
          break;
        }
      }
    }), wx[t("0x8a")](function () {
      r[t("0x3d")]({
        musicPlay: "",
        muiscImgPlayer: ""
      });
    }), wx[t("0x8b")](function () {
      var x = {
        EvgUJ: function (x, a) {
          return e[t("0x47")](x, a);
        }
      };
      if (e[t("0x8c")] !== t("0x22")) {
        var a = x[t("0x8d")](r[t("0x43")].darticleFav, 1);
        r[t("0x3d")]({
          darticleFav: a,
          dartFavSta: 0
        });
      } else r.setData({
        musicPlay: 1,
        muiscImgPlayer: e[t("0x8e")]
      });
    }), wx[t("0x8f")](function () {
      var x = {
        BVbHr: function (x, a) {
          return e[t("0x90")](x, a);
        },
        AyxQB: function (x, t) {
          return x * t;
        }
      };
      e[t("0x2f")]("ufyxD", e.xHXxg) ? r[t("0x3d")]({
        musicPlay: "",
        muiscImgPlayer: ""
      }) : ctx[t("0x91")](row[b], 20, x[t("0x92")](410, x.AyxQB(b, 30)), 360);
    }), r[t("0x7e")] = wx[t("0x93")](e[t("0x94")]);
  },
  scrollRightTap: function (x) {
    console[t("0x95")](x);
  },
  audioPlay: function () {
    var x = this;
    wx.stopBackgroundAudio(), x.audioCtx[t("0x96")](), x[t("0x3d")]({
      audioPlay: !![]
    });
  },
  pausePlay: function () {
    var x = this;
    x[t("0x7e")][t("0x97")](), x[t("0x3d")]({
      audioPlay: ![]
    });
  },
  getArticleTap: function (x) {
    var e = this, a = x[t("0x4b")][t("0x4c")].id;
    e.peaceread(a), e[t("0x7e")].pause(), wx.stopBackgroundAudio(), e[t("0x3d")]({
      show: ![],
      headtap: !![],
      current: 0,
      audioPlay: ![]
    });
  },
  peaceread: function (x) {
    var e = {
      sWYCl: t("0x11"),
      cxtGP: t("0x98"),
      pJyMc: t("0x99"),
      NqYhk: t("0x12"),
      LgDVo: t("0x5a"),
      xwLJQ: "Jul",
      wqigQ: t("0x16"),
      YQdyC: "Nov",
      szmJC: t("0x18"),
      sNvaw: t("0x19"),
      rsEbz: function (x, t) {
        return x == t;
      },
      SstiI: t("0x57"),
      NfKXp: "Aug",
      DkEvW: t("0x15"),
      hLrrw: function (x, t) {
        return x !== t;
      },
      KpwUc: t("0x9a"),
      GZQxl: function (x, t) {
        return x !== t;
      },
      ziQDg: t("0x9b"),
      yRbIc: t("0x9c"),
      zMEuH: t("0x9d"),
      WSRjK: function (x, t) {
        return x === t;
      },
      yNNYR: t("0x9e"),
      WRCLw: t("0x9f"),
      ETFua: function (x, t, e) {
        return x(t, e);
      }
    }, a = this;
    x ? e[t("0xa0")](e.ziQDg, e[t("0xa1")]) ? wx[t("0x70")]({
      url: e[t("0xa2")],
      data: {
        id: x
      },
      success: function (x) {
        if (0 == x[t("0x43")][t("0x71")]) {
          var n = x.data[t("0x43")][0][t("0x55")][t("0x38")]("-"), r = {
            1: e[t("0xa3")],
            2: e[t("0xa4")],
            3: t("0x57"),
            4: e[t("0xa5")],
            5: e[t("0xa6")],
            6: e.LgDVo,
            7: e.xwLJQ,
            8: t("0x14"),
            9: t("0x15"),
            10: e[t("0xa7")],
            11: e[t("0xa8")],
            12: e[t("0xa9")]
          };
          a[t("0x3d")]({
            date: n[2],
            month: r[n[1]],
            year: n[0],
            newoneId: x[t("0x43")].data[0].id,
            rsongImg: x[t("0x43")][t("0x43")][0][t("0x61")][t("0x62")](/http:/g, e[t("0xaa")]),
            dsongImg: x[t("0x43")][t("0x43")][0][t("0x64")],
            dsongTit: x[t("0x43")][t("0x43")][0][t("0x65")],
            dsongSin: x[t("0x43")][t("0x43")][0][t("0x66")],
            dsongFav: x[t("0x43")].data[0][t("0xab")],
            dsongShr: x[t("0x43")][t("0x43")][0].m_share,
            dsentTit: x[t("0x43")][t("0x43")][0][t("0x68")],
            dsentenc: x.data[t("0x43")][0][t("0xac")],
            darticle: x[t("0x43")][t("0x43")][0][t("0xad")],
            dsentencAur: x[t("0x43")][t("0x43")][0][t("0x69")],
            dsentencFav: x[t("0x43")][t("0x43")][0].j_fav,
            dsentencShr: x.data[t("0x43")][0][t("0x6b")],
            darticleTit: x[t("0x43")][t("0x43")][0][t("0x6c")],
            darticleAur: x[t("0x43")][t("0x43")][0][t("0xae")],
            darticleImg: x[t("0x43")][t("0x43")][0][t("0xaf")][t("0x62")](/http:/g, t("0x19")),
            darticleFav: x.data.data[0].w_fav,
            darticleShr: x[t("0x43")][t("0x43")][0].w_share
          });
        }
      }
    }) : a[t("0x3d")]({
      musicPlay: 1,
      muiscImgPlayer: t("0x23")
    }) : e[t("0xb0")](t("0xb1"), e[t("0xb2")]) ? this[t("0x3d")]({
      show: !![],
      headtap: ![]
    }) : wx[t("0x70")]({
      url: e.WRCLw,
      success: function (x) {
        if (e.rsEbz(x[t("0x43")].code, 0)) {
          var n = x.data[t("0x43")][0][t("0x55")][t("0x38")]("-"), r = {
            1: "Jan",
            2: e.cxtGP,
            3: e[t("0xb3")],
            4: e[t("0xa5")],
            5: t("0x12"),
            6: e[t("0xb4")],
            7: e[t("0xb5")],
            8: e[t("0xb6")],
            9: e.DkEvW,
            10: e[t("0xa7")],
            11: t("0x17"),
            12: e.szmJC
          };
          a[t("0x3d")]({
            date: n[2],
            month: r[n[1]],
            year: n[0],
            newoneId: x[t("0x43")][t("0x43")][0].id,
            rsongImg: x.data.data[0].pic.replace(/http:/g, t("0x19")),
            dsongImg: x[t("0x43")][t("0x43")][0][t("0x64")],
            dsongTit: x[t("0x43")][t("0x43")][0][t("0x65")],
            dsongSin: x[t("0x43")][t("0x43")][0].m_author,
            dsongFav: x[t("0x43")][t("0x43")][0][t("0xab")],
            dsongShr: x[t("0x43")].data[0][t("0x67")],
            dsentTit: x.data[t("0x43")][0].j_title,
            dsentenc: x[t("0x43")][t("0x43")][0].j_contents,
            darticle: x.data[t("0x43")][0].w_contents,
            dsentencAur: x[t("0x43")][t("0x43")][0][t("0x69")],
            dsentencFav: x[t("0x43")][t("0x43")][0][t("0xb7")],
            dsentencShr: x[t("0x43")][t("0x43")][0].j_share,
            darticleTit: x[t("0x43")][t("0x43")][0][t("0x6c")],
            darticleAur: x.data[t("0x43")][0][t("0xae")],
            darticleImg: x.data[t("0x43")][0].pic_w[t("0x62")](/http:/g, t("0x19")),
            darticleFav: x[t("0x43")].data[0][t("0xb8")],
            darticleShr: x.data[t("0x43")][0][t("0x6e")]
          });
        }
      }
    }), e[t("0xb9")](setTimeout, function () {
      var x = {
        mlTRX: function (x, t) {
          return x + t;
        }
      };
      if (e[t("0xba")](e[t("0xbb")], "MJYfX")) a.getFavStar(); else {
        var n = x.mlTRX(a[t("0x43")][t("0xbc")], 1);
        a[t("0x3d")]({
          darticleShr: n
        });
      }
    }, 800);
  },
  getFavStar: function () {
    var x = {
      gxukV: function (x, t) {
        return x == t;
      },
      rcqzL: function (x, t) {
        return x === t;
      },
      swMhB: t("0xbd"),
      cPGaQ: "__appUserInfo"
    }, a = this, n = a[t("0x43")][t("0x85")], r = wx[t("0x4f")](x[t("0xbe")]).token;
    wx[t("0x70")]({
      url: t("0x20"),
      data: {
        id: n,
        token: r
      },
      success: function (n) {
        if (x[t("0xbf")](n.data[t("0x71")], 0)) if (x.rcqzL(x[t("0xc0")], x[t("0xc0")])) a.setData({
          songFavSta: n[t("0x43")].data[t("0xc1")],
          dsenFavSta: n[t("0x43")][t("0x43")][t("0x88")],
          dartFavSta: n[t("0x43")][t("0x43")][t("0x89")]
        }); else {
          var r = this, i = e[t("0xc2")][t("0xc3")];
          r[t("0x3d")]({
            current: i
          });
        }
      }
    });
  },
  getMonthTap: function (x) {
    for (var e = {
      KOxLH: function (x, t) {
        return x == t;
      },
      oWMyV: "https://xiaodu.maliapi.com/api/1?viewid=home&part=mon_get_day"
    }, a = t("0xc4")[t("0x38")]("|"), n = 0; [];) {
      switch (a[n++]) {
        case "0":
          var r = this;
          continue;

        case "1":
          var i = {
            SwpbO: function (x, a) {
              return e[t("0xc5")](x, a);
            }
          };
          continue;

        case "2":
          x[t("0x4b")][t("0x4c")][t("0xc6")];
          continue;

        case "3":
          var c = x.currentTarget[t("0x4c")][t("0xc7")];
          continue;

        case "4":
          wx.request({
            url: e.oWMyV,
            data: {
              year: c,
              mon: u
            },
            success: function (x) {
              i[t("0xc8")](x.data[t("0x71")], 0) && r[t("0x3d")]({
                monthData: x[t("0x43")][t("0x43")]
              });
            }
          });
          continue;

        case "5":
          var u = x[t("0x4b")].dataset.id;
          continue;
      }
      break;
    }
  },
  getShareSongTap: function (x) {
    for (var e = {
      PrSED: function (x, t) {
        return x == t;
      },
      ukNwz: function (x, t) {
        return x == t;
      },
      OuUPY: function (x, t) {
        return x == t;
      }
    }, a = t("0xc9")[t("0x38")]("|"), n = 0; [];) {
      switch (a[n++]) {
        case "0":
          e[t("0xca")](i, 2) && r[t("0x3d")]({
            shareMask: !![],
            shareNumber: 2
          });
          continue;

        case "1":
          e[t("0xcb")](i, 1) && r[t("0x3d")]({
            shareMask: !![],
            shareNumber: 1
          });
          continue;

        case "2":
          e[t("0xcc")](i, 0) && r[t("0x3d")]({
            shareMask: !![],
            shareNumber: 0
          });
          continue;

        case "3":
          var r = this;
          continue;

        case "4":
          var i = x[t("0x4b")][t("0x4c")].id;
          continue;
      }
      break;
    }
  },
  closeShareHaibaoTap: function () {
    this.setData({
      imageMask: ![]
    });
  },
  getShareHaibaoTap: function (x) {
    var e = {
      hAzLS: function (x, t) {
        return x == t;
      },
      ulXrB: function (x, t) {
        return x + t;
      },
      qWCrE: t("0xcd"),
      SQtvG: "shareCanvas",
      elFCU: t("0xce"),
      fFZIk: t("0x9"),
      hrZiO: t("0xcf"),
      ADzjA: "#eee",
      gkthR: t("0xd0"),
      ChYFk: t("0xd1"),
      YzGwj: function (x, t, e) {
        return x(t, e);
      },
      pJLag: "微信号复制成功",
      pJRSc: t("0x1b"),
      tmrbd: "totorohost",
      KtvJD: function (x, t) {
        return x !== t;
      },
      gNiUE: t("0xd2"),
      WjcmC: t("0xd3"),
      zXuAH: function (x, t) {
        return x === t;
      },
      LmYTz: t("0x23"),
      aoyze: t("0xd4"),
      UYnrp: function (x, t) {
        return x != t;
      },
      BiPIH: function (x, t) {
        return x + t;
      },
      TkLPa: function (x, t) {
        return x + t;
      },
      TTNJH: function (x, t) {
        return x == t;
      },
      owsNK: function (x, t) {
        return x < t;
      },
      UXnej: t("0xd5"),
      SaIfY: "lbHnm",
      FFTCR: function (x, t) {
        return x != t;
      },
      HeeKZ: t("0xd6"),
      JpgCP: t("0xd7"),
      aVxMx: function (x, t) {
        return x !== t;
      },
      YsTPb: t("0xd8"),
      xuUCv: t("0xd9"),
      yPIaf: t("0xda"),
      oguyN: t("0xdb"),
      WvMXp: t("0xdc"),
      LBqHb: t("0xdd"),
      DQFUj: function (x, t) {
        return x * t;
      },
      uBrBP: t("0xde"),
      PXkPS: function (x, t) {
        return x !== t;
      },
      YGVJQ: t("0x7"),
      CPlzx: t("0xdf"),
      nMrjV: function (x, t) {
        return x === t;
      },
      FvyHm: t("0xe0"),
      hIrXl: function (x, t) {
        return x == t;
      },
      SUnBt: t("0xe1"),
      Ecebq: t("0xe2"),
      KEyeD: function (x, t) {
        return x + t;
      },
      LWvLP: function (x, t) {
        return x + t;
      },
      ewwfx: function (x, t) {
        return x + t;
      },
      hzbft: t("0xe3"),
      rshtp: t("0xe4"),
      vtiKn: function (x, t) {
        return x + t;
      },
      drueN: t("0xe5"),
      mdejY: function (x, t) {
        return x == t;
      },
      DOBfn: "UAlKL",
      DiWrY: t("0xe6"),
      ZMGKL: function (x, t) {
        return x == t;
      },
      EAbtw: t("0xe7"),
      QjyFY: "保存成功",
      DogYE: function (x, t) {
        return x + t;
      },
      UvHTm: t("0xe8"),
      HMKCC: function (x, t) {
        return x === t;
      },
      OMxLx: function (x, t) {
        return x === t;
      },
      YapYc: t("0xe9"),
      ulBMH: t("0xea"),
      kQNxA: function (x, t) {
        return x > t;
      },
      ZIsgl: t("0xeb"),
      QINpW: t("0xec"),
      DqkBF: t("0xed"),
      Gtndp: t("0xee"),
      HbQvT: function (x, t) {
        return x == t;
      },
      rDwic: t("0xef"),
      iVSFX: t("0xf0"),
      TeYoN: t("0xf1"),
      rFQet: function (x, t) {
        return x > t;
      },
      orxux: t("0xf2"),
      vwexX: function (x, t) {
        return x !== t;
      },
      IjKql: "EIsPl",
      mOypS: t("0xf3"),
      jfMpQ: function (x, t) {
        return x + t;
      },
      ayria: function (x, t) {
        return x + t;
      },
      gveOU: t("0xf4"),
      NzbIS: function (x, t) {
        return x == t;
      },
      gXetL: t("0xf5"),
      ZkfYe: function (x, t) {
        return x + t;
      },
      NmlAx: t("0xf6"),
      AEuex: t("0xf7"),
      tBikQ: function (x, t) {
        return x == t;
      },
      ttoCm: "https://xiaodu.maliapi.com/api/1?viewid=home&part=get_qrcode",
      prWDg: function (x, t) {
        return x + t;
      },
      CmClb: function (x, t) {
        return x + t;
      },
      gwvBM: t("0xf8"),
      raWmu: function (x, t) {
        return x + t;
      }
    }, r = this, c = r[t("0x43")][t("0x85")], u = x[t("0x4b")][t("0x4c")].id;
    if (e[t("0xf9")](u, 0)) {
      wx[t("0x70")]({
        url: e.Ecebq,
        data: {
          id: c,
          type: u
        },
        success: function (x) {
          if (e.hAzLS(x[t("0x43")][t("0x71")], 0)) {
            var a = e.ulXrB(r[t("0x43")][t("0xfa")], 1);
            r.setData({
              dsongShr: a
            });
          }
        }
      }), wx[t("0xfb")]({
        title: e.gXetL,
        mask: !![]
      });
      var s = wx[t("0xfc")](e[t("0xfd")]), o = r[t("0x43")][t("0xfe")], d = r[t("0x43")][t("0xc6")], f = r[t("0x43")][t("0xc7")], l = r[t("0x43")][t("0xff")], h = r[t("0x43")][t("0x100")], v = r[t("0x43")].dsongSin;
      wx.request({
        url: t("0x101"),
        data: {
          scene: e[t("0x102")](e[t("0x103")](e.ZkfYe(e[t("0x104")], c), e[t("0x105")]), u),
          page: "pages/index"
        },
        success: function (x) {
          if (e[t("0x106")](x[t("0x43")][t("0x71")], 0)) {
            var a = x[t("0x43")][t("0x43")];
            wx[t("0x107")]({
              url: a,
              success: function (a) {
                var n = {
                  HXsak: e[t("0x108")],
                  GPCRk: e[t("0xfd")],
                  znzGS: t("0xd6"),
                  TpqYG: e[t("0x109")],
                  XfLpf: e[t("0x10a")],
                  EccAo: t("0x7"),
                  jRpav: e[t("0x10b")],
                  atRHv: e[t("0x10c")],
                  HlsKz: e[t("0x10d")],
                  XTPKs: function (x, t) {
                    return x + t;
                  },
                  DIiuY: e.ChYFk,
                  WdIgV: function (x, a, n) {
                    return e[t("0x10e")](x, a, n);
                  },
                  wlqPT: e[t("0x10f")],
                  QJVFW: e[t("0x110")],
                  hwDdR: e.tmrbd
                };
                e[t("0x111")](e[t("0x112")], e[t("0x113")]) ? e[t("0x114")](x[t("0x115")], 200) && wx[t("0x116")]({
                  src: l,
                  success: function (x) {
                    s[t("0x117")](n[t("0x118")]), s[t("0x119")](0, 0, 400, 800), s.drawImage(n.TpqYG, 20, 30, 80, 80),
                      s[t("0x117")](n[t("0x11a")]), s[t("0x11b")](18), s[t("0x91")]("小独", 108, 63), s[t("0x117")](n[t("0x11c")]),
                      s[t("0x11b")](14), s.fillText(n[t("0x11d")], 108, 92), s[t("0x11e")] = n[t("0x11f")],
                      s.lineWidth = .5, s[t("0x120")](), s[t("0x121")](20, 130), s[t("0x122")](380, 130),
                      s.stroke(), s[t("0x123")](x[t("0x124")], 20, 160, 360, 360), s[t("0x117")](n.HlsKz),
                      s[t("0x119")](20, 450, 365, 70), s[t("0x117")](n.XfLpf), s[t("0x11b")](19), s[t("0x91")](h, 25, 480),
                      s.setFillStyle("#666666"), s.setFontSize(14), s[t("0x91")](n[t("0x125")](n[t("0x126")], v), 25, 505),
                      s[t("0x11e")] = n.atRHv, s.lineWidth = .5, s.beginPath(), s[t("0x121")](20, 550),
                      s[t("0x122")](380, 550), s[t("0x127")](), s.drawImage(a[t("0x128")], 240, 565, 120, 120),
                      s[t("0x117")](n[t("0x11a")]), s[t("0x11b")](40), s[t("0x91")](o, 50, 636), s.setFontSize(22),
                      s[t("0x91")](n[t("0x125")](d + ".", f), 96, 636), s.save(), s[t("0x129")](), n[t("0x12a")](setTimeout, function () {
                        "AKnLl" === n[t("0x12b")] ? wx.canvasToTempFilePath({
                          x: 0,
                          y: 0,
                          width: 400,
                          height: 700,
                          canvasId: n[t("0x12c")],
                          success: function (x) {
                            wx[t("0x12d")](), r[t("0x3d")]({
                              shareImg: x[t("0x128")],
                              shareMask: ![],
                              imageMask: !![]
                            });
                          }
                        }) : r[t("0x3d")]({
                          menushow: !![],
                          menuSta: ![]
                        });
                      }, 500);
                  }
                }) : wx.setClipboardData({
                  data: n[t("0x12e")],
                  success: function (x) {
                    wx[t("0x75")]({
                      title: n[t("0x12f")],
                      icon: n[t("0x130")],
                      duration: 500
                    });
                  }
                });
              }
            });
          }
        }
      });
    }
    e[t("0x131")](u, 1) && (wx[t("0x70")]({
      url: e[t("0x132")],
      data: {
        id: c,
        type: u
      },
      success: function (x) {
        var a = {
          hFYMZ: e.LmYTz
        };
        if (e.zXuAH(e.aoyze, e[t("0x133")])) {
          if (0 == x[t("0x43")][t("0x71")]) {
            var n = e[t("0x134")](r[t("0x43")][t("0x135")], 1);
            r.setData({
              dsentencShr: n
            });
          }
        } else wx[t("0x136")]({
          dataUrl: music,
          title: title,
          coverImgUrl: image
        }), r[t("0x3d")]({
          musicPlay: id,
          muiscImgPlayer: a[t("0x137")]
        });
      }
    }), wx[t("0xfb")]({
      title: e[t("0x138")],
      mask: !![]
    }), wx[t("0x70")]({
      url: e[t("0x139")],
      data: {
        scene: e[t("0x13a")](e[t("0x13b")](e[t("0x104")] + c, e.AEuex), u),
        page: e[t("0x13c")]
      },
      success: function (x) {
        var u = {
          SkRFE: function (x, a) {
            return e[t("0x13d")](x, a);
          },
          adpSZ: function (x, a) {
            return e[t("0x13e")](x, a);
          },
          nWwFF: function (x, t) {
            return x + t;
          },
          kRMiR: function (x, t) {
            return e.TkLPa(x, t);
          },
          FVtkm: function (x, a) {
            return e[t("0x13f")](x, a);
          },
          lGjqX: e[t("0xfd")],
          YYlGx: function (x, t) {
            return e.owsNK(x, t);
          },
          XHQJT: function (x, a) {
            return e[t("0x114")](x, a);
          },
          wKDfy: e[t("0x140")],
          oWjKL: e[t("0x141")],
          HkYpT: function (x, a) {
            return e[t("0x142")](x, a);
          },
          cBTRI: e[t("0x143")],
          SObBF: e[t("0x109")],
          VcSHC: e[t("0x10a")],
          eIXdK: e[t("0x10b")],
          MhSUb: e[t("0x10c")],
          TOaUH: e[t("0x144")],
          vwVZt: function (x, t) {
            return x === t;
          },
          goCDU: "NSrSf",
          WNjix: function (x, a) {
            return e[t("0x145")](x, a);
          },
          ZQHmC: e[t("0x146")],
          OHsuM: e[t("0x147")],
          iNInI: function (x, a) {
            return e[t("0x114")](x, a);
          },
          fJHRB: e.yPIaf,
          XNjPc: e[t("0x148")],
          UivHe: function (x, a) {
            return e[t("0x13e")](x, a);
          },
          giFSp: function (x, t) {
            return x !== t;
          },
          lqWbG: e[t("0x149")],
          UKzsS: e[t("0x14a")],
          poUCx: function (x, a) {
            return e[t("0x14b")](x, a);
          },
          YPfKz: e[t("0x14c")],
          bRlVQ: function (x, t) {
            return e.PXkPS(x, t);
          },
          fZvVy: t("0x14d"),
          OYste: function (x, a) {
            return e[t("0x13e")](x, a);
          },
          UYRwv: e[t("0x14e")],
          SeLLY: e[t("0x14f")],
          FhVRQ: function (x, a) {
            return e[t("0x13e")](x, a);
          }
        };
        if (e.nMrjV("nqtNy", e[t("0x150")])) {
          if (e[t("0x151")](x[t("0x43")][t("0x71")], 0)) {
            var s = x[t("0x43")][t("0x43")];
            wx[t("0x107")]({
              url: s,
              success: function (e) {
                var a = {
                  zPesk: function (x, t) {
                    return u.kRMiR(x, t);
                  },
                  tIxxu: function (x, e) {
                    return u[t("0x152")](x, e);
                  },
                  QVfIt: u.lGjqX
                };
                if (200 === x[t("0x115")]) {
                  for (var s = wx[t("0xfc")](u[t("0x153")]), o = r[t("0x43")].date, d = r[t("0x43")][t("0xc6")], f = r[t("0x43")][t("0xc7")], l = r[t("0x43")].dsentencAur, h = r.data[t("0x154")], v = r[t("0x43")][t("0x155")].split("\n"), g = [], m = 0; u[t("0x156")](m, v[t("0x33")]); m++) u[t("0x157")](u.wKDfy, u.oWjKL) ? dilist[t("0x37")](scarr[i][t("0x38")]("=")) : u[t("0x158")](v[m], "") && g[t("0x37")](v[m]);
                  if (s[t("0x117")](u[t("0x159")]), s[t("0x119")](0, 0, 400, 580), s[t("0x123")](u[t("0x15a")], 20, 30, 80, 80),
                    s.setFillStyle(u[t("0x15b")]), s[t("0x11b")](18), s[t("0x91")]("小独", 108, 63), s[t("0x117")]("#999999"),
                    s[t("0x11b")](14), s[t("0x91")](u[t("0x15c")], 108, 92), s[t("0x11e")] = u.MhSUb,
                    s[t("0x15d")] = .5, s.beginPath(), s[t("0x121")](20, 130), s[t("0x122")](380, 130),
                    s[t("0x127")](), s[t("0x117")](u.TOaUH), s[t("0x11b")](18), g[t("0x33")] > 4) if (u[t("0x15e")](u[t("0x15f")], u[t("0x15f")])) {
                      for (var p = g[t("0x160")](0, 4), w = p[1], b = "", S = [], m = 0; m < w[t("0x33")]; m++) {
                        if (!u[t("0x161")](u[t("0x162")], u[t("0x163")])) {
                          var F = {
                            FgYmB: function (x, t) {
                              return x == t;
                            }
                          }, y = r.data[t("0x155")];
                          return wx[t("0x70")]({
                            url: t("0xe2"),
                            data: {
                              id: c,
                              type: id
                            },
                            success: function (x) {
                              if (F[t("0x169")](x[t("0x43")][t("0x71")], 0)) {
                                var e = r.data.dsentencShr + 1;
                                r[t("0x3d")]({
                                  dsentencShr: e
                                });
                              }
                            }
                          }), {
                              title: y,
                              path: u[t("0x168")](u[t("0x16a")](u[t("0x16b")](t("0xe3"), c), t("0xe4")), id)
                            };
                        }
                        if (!u[t("0x156")](s.measureText(b)[t("0x164")], 300)) break;
                        if (u[t("0x165")](u[t("0x166")], u[t("0x167")])) {
                          var k = u[t("0x168")](r[t("0x43")][t("0xbc")], 1);
                          r.setData({
                            darticleShr: k
                          });
                        } else b += w[m];
                      }
                      S[t("0x37")](b);
                      var I = u[t("0x16c")](S[0], ".......");
                      p[t("0x16d")](4, 1, I), g = p;
                    } else {
                      var P = a[t("0x16e")](r[t("0x43")][t("0x44")], 1);
                      r[t("0x3d")]({
                        dsongFav: P,
                        songFavSta: 1
                      });
                    }
                  for (var T = 0; T < g.length; T++) u[t("0x16f")](u[t("0x170")], u[t("0x171")]) ? s.fillText(g[T], 20, u[t("0x16c")](200, u[t("0x172")](T, 30)), 360) : a[t("0x173")](n[t("0x3b")][t("0x3c")], 1e4) && r[t("0x3d")]({
                    loginMask: !![]
                  });
                  s[t("0x117")](t("0x9")), s[t("0x11b")](18), s.setTextAlign(u[t("0x174")]), h && (u[t("0x175")](u[t("0x176")], "OyHfu") ? s[t("0x91")](u[t("0x177")]("《" + h, "》"), 380, 370) : r[t("0x3d")]({
                    menushow: ![],
                    menuSta: !![]
                  })), s[t("0x117")](u[t("0x178")]), s[t("0x11b")](14), s[t("0x91")](l + t("0x179"), 380, 390),
                    s[t("0x17a")](u[t("0x17b")]), s[t("0x11e")] = u.MhSUb, s.lineWidth = .5, s.beginPath(),
                    s[t("0x121")](20, 420), s[t("0x122")](380, 420), s[t("0x127")](), s[t("0x123")](e[t("0x128")], 240, 435, 120, 120),
                    s[t("0x117")](u[t("0x15b")]), s[t("0x11b")](40), s[t("0x91")](o, 50, 506), s.setFontSize(22),
                    s[t("0x91")](u[t("0x177")](u.FhVRQ(d, "."), f), 100, 506), s[t("0x17c")](), s[t("0x129")](),
                    setTimeout(function () {
                      wx.canvasToTempFilePath({
                        x: 0,
                        y: 0,
                        width: 400,
                        height: 580,
                        canvasId: a.QVfIt,
                        success: function (x) {
                          wx.hideLoading(), r.setData({
                            shareImg: x[t("0x128")],
                            shareMask: ![],
                            imageMask: !![]
                          });
                        }
                      });
                    }, 500);
                }
              }
            });
          }
        } else e[t("0x17d")](acs[a], "") && row[t("0x37")](acs[a]);
      }
    })), 2 == u && (wx[t("0x70")]({
      url: t("0xe2"),
      data: {
        id: c,
        type: u
      },
      success: function (a) {
        var n = {
          FaDUO: function (x, a) {
            return e[t("0x151")](x, a);
          },
          XjOJl: function (x, a) {
            return e[t("0x17e")](x, a);
          }
        };
        if (e[t("0x17f")] !== e[t("0x17f")]) for (var i = e[t("0x180")][t("0x38")]("|"), u = 0; [];) {
          switch (i[u++]) {
            case "0":
              var s = r[t("0x43")][t("0x181")];
              continue;

            case "1":
              var o = r[t("0x43")][t("0x182")];
              continue;

            case "2":
              wx[t("0x70")]({
                url: e[t("0x132")],
                data: {
                  id: c,
                  type: id
                },
                success: function (x) {
                  if (n[t("0x183")](x[t("0x43")][t("0x71")], 0)) {
                    var e = n[t("0x184")](r.data[t("0xbc")], 1);
                    r.setData({
                      darticleShr: e
                    });
                  }
                }
              });
              continue;

            case "3":
              var d = r[t("0x43")][t("0x185")];
              continue;

            case "4":
              return {
                title: e[t("0x13e")](o, "-") + s,
                path: e[t("0x186")](e.LWvLP(e[t("0x187")](e[t("0x188")], c), e[t("0x189")]), id),
                imageUrl: d
              };
          }
          break;
        } else if (e[t("0x18a")](a[t("0x43")][t("0x71")], 0)) if (e[t("0x18b")](e[t("0x18c")], "UAlKL")) {
          var f = x[t("0x4e")], l = x.type;
          r[t("0x49")](f), r[t("0x3d")]({
            current: l
          });
        } else {
          var h = e[t("0x17e")](r.data[t("0xbc")], 1);
          r[t("0x3d")]({
            darticleShr: h
          });
        }
      }
    }), wx[t("0xfb")]({
      title: e[t("0x138")],
      mask: !![]
    }), wx[t("0x70")]({
      url: e[t("0x139")],
      data: {
        scene: e[t("0x13b")](e[t("0x18d")](e[t("0x18d")](e[t("0x104")], c), t("0xf7")), u),
        page: e[t("0x13c")]
      },
      success: function (a) {
        var n = {
          bJlty: function (x, a) {
            return e[t("0x18e")](x, a);
          },
          eEzAb: function (x, t) {
            return x - t;
          },
          hhehq: e.rDwic,
          wsHfD: e[t("0x18f")],
          ptQyo: t("0xd6"),
          pUmzc: e[t("0x10a")],
          YOVnW: t("0xcf"),
          SfFet: e.TeYoN,
          KYAsg: function (x, a) {
            return e[t("0x190")](x, a);
          },
          SfUZc: e.orxux,
          PNqFF: function (x, a) {
            return e[t("0x191")](x, a);
          },
          nbSMG: function (x, a) {
            return e[t("0x192")](x, a);
          },
          WawHz: e[t("0x193")],
          HnhEx: function (x, a) {
            return e[t("0x194")](x, a);
          },
          kWrUf: e[t("0x195")],
          ihiog: function (x, a) {
            return e[t("0x196")](x, a);
          },
          BKYeT: function (x, t) {
            return x * t;
          },
          hlCLW: e[t("0x10c")],
          GkLjM: function (x, t) {
            return e.ayria(x, t);
          },
          qswiO: function (x, t, e) {
            return x(t, e);
          }
        };
        if (0 == a[t("0x43")][t("0x71")]) if (e[t("0x192")](e[t("0x197")], e[t("0x197")])) n[t("0x198")](a.data.code, 0) && r[t("0x3d")]({
          monthData: a[t("0x43")][t("0x43")]
        }); else {
          var i = a[t("0x43")][t("0x43")];
          wx[t("0x107")]({
            url: i,
            success: function (i) {
              var c = {
                eEOFF: e[t("0x199")],
                KBknV: function (x, a) {
                  return e[t("0x19a")](x, a);
                },
                UAudk: e[t("0x19b")],
                BQKJm: e[t("0x19c")],
                HtSvk: e[t("0x110")],
                wgemp: function (x, a) {
                  return e[t("0x194")](x, a);
                }
              };
              if (e[t("0x18b")](e[t("0x19d")], "tYAIh")) k += y[P]; else if (e[t("0x19e")](a[t("0x115")], 200)) if (e.OMxLx(e[t("0x19f")], e[t("0x1a0")])) {
                var u = n[t("0x1a1")](r[t("0x43")][t("0x44")], 1);
                r[t("0x3d")]({
                  dsongFav: u,
                  songFavSta: 0
                });
              } else {
                var s = wx[t("0xfc")](e[t("0xfd")]), o = r.data[t("0xfe")], d = r[t("0x43")].month, f = r.data[t("0xc7")], l = r.data[t("0x185")], h = (S = r[t("0x43")].darticleTit)[t("0x38")]("");
                if (e[t("0x1a2")](h[t("0x33")], 18)) if (e[t("0x18b")](e[t("0x1a3")], e.ZIsgl)) for (var v = c[t("0x1a4")][t("0x38")]("|"), g = 0; [];) {
                  switch (v[g++]) {
                    case "0":
                      var m = {
                        tprvF: function (x, e) {
                          return c[t("0x1a5")](x, e);
                        }
                      };
                      continue;

                    case "1":
                      var p = x[t("0x4b")][t("0x4c")].id;
                      continue;

                    case "2":
                      x.currentTarget[t("0x4c")][t("0xc6")];
                      continue;

                    case "3":
                      var w = this;
                      continue;

                    case "4":
                      var b = x[t("0x4b")][t("0x4c")][t("0xc7")];
                      continue;

                    case "5":
                      wx.request({
                        url: c.UAudk,
                        data: {
                          year: b,
                          mon: p
                        },
                        success: function (x) {
                          m.tprvF(x[t("0x43")].code, 0) && w[t("0x3d")]({
                            monthData: x[t("0x43")][t("0x43")]
                          });
                        }
                      });
                      continue;
                  }
                  break;
                } else var S = e.DogYE(S[t("0x160")](0, 18), t("0x1a6"));
                for (var F = r.data[t("0x181")], y = r.data[t("0x1a7")][t("0x62")](/\n\n/g, "").split(""), k = "", I = [], P = 0; e[t("0x191")](P, y.length); P++) e[t("0x1a8")] === e[t("0x1a9")] ? (wx[t("0x12d")](),
                  r[t("0x3d")]({
                    shareImg: a[t("0x128")],
                    shareMask: ![],
                    imageMask: !![]
                  })) : s[t("0x1aa")](k)[t("0x164")] < 320 ? k += y[P] : e[t("0x1ab")](e[t("0x1ac")], "nvett") ? r[t("0x3d")]({
                    shareMask: !![],
                    shareNumber: 0
                  }) : (P-- , I[t("0x37")](k), k = "");
                I[t("0x37")](k), wx[t("0x116")]({
                  src: l,
                  success: function (x) {
                    if (n[t("0x1ad")] !== n[t("0x1ae")]) {
                      if (s[t("0x117")](n[t("0x1af")]), s[t("0x119")](0, 0, 400, 800), s[t("0x123")](t("0xce"), 20, 30, 80, 80),
                        s[t("0x117")](n[t("0x1b0")]), s[t("0x11b")](18), s.fillText("小独", 108, 63), s[t("0x117")](t("0x7")),
                        s[t("0x11b")](14), s[t("0x91")](n[t("0x1b1")], 108, 92), s[t("0x11e")] = t("0x1b2"),
                        s[t("0x15d")] = .5, s[t("0x120")](), s[t("0x121")](20, 130), s[t("0x122")](380, 130),
                        s[t("0x127")](), s.drawImage(x[t("0x124")], 20, 145, 360, 180), s[t("0x117")](n[t("0x1b0")]),
                        s[t("0x11b")](18), s[t("0x91")](S, 20, 355), s[t("0x117")]("#999999"), s[t("0x11b")](13),
                        s[t("0x91")](F, 20, 380), s[t("0x117")](n[t("0x1b3")]), s[t("0x11b")](15), n[t("0x1b4")](I[t("0x33")], 4)) if (n[t("0x1b5")] === t("0x1b6")) r[t("0x1b7")](); else {
                          for (var e = I[t("0x160")](0, 4), a = e[1], u = "", l = [], h = 0; n[t("0x1b8")](h, a[t("0x33")]); h++) if (s[t("0x1aa")](u)[t("0x164")] < 300) u += a[h]; else {
                            if (!n[t("0x1b9")](n[t("0x1ba")], n[t("0x1ba")])) break;
                            wx[t("0x75")]({
                              title: c[t("0x1bb")],
                              icon: c[t("0x1bc")],
                              duration: 2e3
                            });
                          }
                          l[t("0x37")](u);
                          var v = n[t("0x1bd")](l[0], n[t("0x1be")]);
                          e[t("0x16d")](4, 1, v), I = e;
                        }
                      for (var g = 0; g < I[t("0x33")]; g++) s[t("0x91")](I[g], 20, n.ihiog(410, n[t("0x1bf")](g, 30)), 360);
                      s[t("0x11e")] = n.hlCLW, s[t("0x15d")] = .5, s[t("0x120")](), s[t("0x121")](20, 550),
                        s[t("0x122")](380, 550), s[t("0x127")](), s.drawImage(i[t("0x128")], 240, 565, 120, 120),
                        s[t("0x117")](n[t("0x1b0")]), s[t("0x11b")](40), s[t("0x91")](o, 50, 636), s.setFontSize(22),
                        s[t("0x91")](n.GkLjM(d, ".") + f, 96, 636), s[t("0x17c")](), s[t("0x129")](), n.qswiO(setTimeout, function () {
                          wx.canvasToTempFilePath({
                            x: 0,
                            y: 0,
                            width: 400,
                            height: 700,
                            canvasId: t("0x1c0"),
                            success: function (x) {
                              wx[t("0x12d")](), r[t("0x3d")]({
                                shareImg: x[t("0x128")],
                                shareMask: ![],
                                imageMask: !![]
                              });
                            }
                          });
                        }, 500);
                    } else if (c[t("0x1a5")](x.data[t("0x71")], 0)) {
                      var m = c.wgemp(r.data[t("0xfa")], 1);
                      r.setData({
                        dsongShr: m
                      });
                    }
                  }
                });
              }
            }
          });
        }
      }
    }));
  },
  saveShareImgTap: function () {
    var x = {
      jskNO: function (x, t) {
        return x == t;
      },
      MwmMn: function (x, t) {
        return x === t;
      },
      BXStr: t("0x1c1"),
      mkbwM: t("0x1c2"),
      SFQZQ: t("0x1b")
    }, a = this, n = a[t("0x43")][t("0x1c3")];
    wx[t("0x1c4")]({
      filePath: n,
      success: function (a) {
        if (x[t("0x1c5")](x[t("0x1c6")], t("0x1c1"))) wx[t("0x75")]({
          title: x[t("0x1c7")],
          icon: x[t("0x1c8")],
          duration: 2e3
        }); else for (var n = "3|0|2|1|4"[t("0x38")]("|"), r = 0; [];) {
          switch (n[r++]) {
            case "0":
              var i = e[t("0x4b")].dataset.id;
              continue;

            case "1":
              1 == i && c[t("0x3d")]({
                shareMask: !![],
                shareNumber: 1
              });
              continue;

            case "2":
              x[t("0x1c9")](i, 0) && c.setData({
                shareMask: !![],
                shareNumber: 0
              });
              continue;

            case "3":
              var c = this;
              continue;

            case "4":
              2 == i && c[t("0x3d")]({
                shareMask: !![],
                shareNumber: 2
              });
              continue;
          }
          break;
        }
      }
    }), a[t("0x3d")]({
      imageMask: ![]
    });
  },
  previewImage: function (x) {
    var e = x[t("0x4b")].dataset[t("0x1ca")];
    wx[t("0x1cb")]({
      urls: [e]
    });
  },
  onShareAppMessage: function (x) {
    var a = {
      AwKGp: function (x, t) {
        return x(t);
      },
      PYlOp: function (x, t) {
        return x < t;
      },
      gRUnW: function (x, t) {
        return x < t;
      },
      lMvOe: t("0x1cc"),
      LWqtl: "Dngue",
      ebucr: function (x, t) {
        return x == t;
      },
      zcecv: function (x, t) {
        return x + t;
      },
      eaAOR: function (x, t) {
        return x == t;
      },
      DXIFA: function (x, t) {
        return x === t;
      },
      RHqAv: t("0x1cd"),
      UHsKT: t("0x1ce"),
      cAAZl: function (x, t) {
        return x !== t;
      },
      weWtt: t("0x1cf"),
      ddhmx: t("0x1d0"),
      GgVPl: t("0x23"),
      SehBa: function (x, t) {
        return x == t;
      },
      NGOvw: t("0x11"),
      roMwl: t("0x98"),
      JZTio: t("0x57"),
      NJFse: t("0x12"),
      VlUFq: "Jul",
      gqykF: t("0x14"),
      IXtGR: t("0x15"),
      sZNtV: "Oct",
      spsjj: "Dec",
      rvrOo: t("0x19"),
      zVJsU: t("0x1d1"),
      VMGew: t("0x1d2"),
      SmUIv: "yNLZM",
      pqjll: "https://xiaodu.maliapi.com/api/1?viewid=home&part=wz_share",
      aDwFq: t("0xe3"),
      ZqALt: t("0xe4"),
      Jrijf: function (x, t) {
        return x == t;
      },
      tTkuE: function (x, t) {
        return x + t;
      },
      phYIk: t("0x1d3"),
      ajgdr: function (x, t) {
        return x + t;
      },
      PYOYI: function (x, t) {
        return x + t;
      },
      aDbii: function (x, t) {
        return x !== t;
      },
      jwHrG: t("0x1d4"),
      dOjEs: "dukoa",
      DvFnq: t("0x1d5"),
      UTjzP: t("0x1d6")
    }, n = this, r = n[t("0x43")][t("0x85")];
    if (x[t("0x1d7")] === a[t("0x1d8")]) if (a[t("0x1d9")](a.VMGew, a.VMGew)) {
      for (var i = a.AwKGp(decodeURIComponent, e.scene)[t("0x38")](","), c = [], u = 0; a[t("0x1da")](u, i[t("0x33")]); u++) c.push(i[u][t("0x38")]("="));
      if (c[t("0x33")] > 0) {
        for (var s = {}, o = 0; a[t("0x1db")](o, c[t("0x33")]); o++) s[c[o][0]] = c[o][1];
        n[t("0x49")](s[t("0x4e")]), n[t("0x3d")]({
          current: s[t("0x4a")]
        });
      }
    } else {
      var d = x[t("0x1dc")][t("0x4c")].id;
      if (a[t("0x1dd")](d, 0)) {
        if (a[t("0x1de")] === a.SmUIv) {
          var f = n[t("0x43")][t("0x100")], l = n[t("0x43")][t("0x1df")], h = n[t("0x43")][t("0xff")];
          return wx.request({
            url: a.pqjll,
            data: {
              id: r,
              type: d
            },
            success: function (x) {
              if (a[t("0x1e0")] !== a[t("0x1e1")]) {
                if (a[t("0x1e2")](x[t("0x43")][t("0x71")], 0)) {
                  var e = a[t("0x1e3")](n.data[t("0xfa")], 1);
                  n.setData({
                    dsongShr: e
                  });
                }
              } else n[t("0x3d")]({
                longtime: ![]
              });
            }
          }), {
              title: a[t("0x1e3")](f, "-") + l,
              path: a[t("0x1e3")](a[t("0x1e3")](a[t("0x1e4")], r), a[t("0x1e5")]) + d,
              imageUrl: h
            };
        }
        n[t("0x3d")]({
          shareMask: !![],
          shareNumber: 2
        });
      }
      if (a[t("0x1e6")](d, 1)) {
        var v = n.data[t("0x155")];
        return wx[t("0x70")]({
          url: a[t("0x1e7")],
          data: {
            id: r,
            type: d
          },
          success: function (x) {
            if (a.eaAOR(x[t("0x43")][t("0x71")], 0)) if (a[t("0x1e8")](a.RHqAv, a[t("0x1e9")])) a[t("0x1e2")](x[t("0x43")][t("0x71")], 0) && (a[t("0x1ea")](x.data[t("0x43")][t("0x72")], 0) ? n.setData({
              longtime: !![]
            }) : n[t("0x3d")]({
              longtime: ![]
            })); else {
              var e = a.zcecv(n[t("0x43")][t("0x135")], 1);
              n[t("0x3d")]({
                dsentencShr: e
              });
            }
          }
        }), {
            title: v,
            path: a.zcecv(a[t("0x1eb")](a[t("0x1eb")](a[t("0x1e4")], r), a[t("0x1e5")]), d)
          };
      }
      if (a.Jrijf(d, 2)) {
        if (a.phYIk === t("0x1d3")) {
          var g = n[t("0x43")][t("0x182")], m = n[t("0x43")][t("0x181")], p = n[t("0x43")][t("0x185")];
          return wx[t("0x70")]({
            url: a[t("0x1e7")],
            data: {
              id: r,
              type: d
            },
            success: function (x) {
              if (a[t("0x1d9")]("ShvWX", a.weWtt)) {
                var r = e[t("0x4b")][t("0x4c")][t("0x1ca")];
                wx[t("0x1cb")]({
                  urls: [r]
                });
              } else if (a[t("0x1ea")](x[t("0x43")][t("0x71")], 0)) {
                var i = a.zcecv(n[t("0x43")][t("0xbc")], 1);
                n.setData({
                  darticleShr: i
                });
              }
            }
          }), {
              title: a[t("0x1ec")](a[t("0x1ed")](g, "-"), m),
              path: a[t("0x1ed")](a[t("0x1ed")](a.aDwFq + r, a[t("0x1e5")]), d),
              imageUrl: p
            };
        }
        for (var w = a[t("0x1ee")][t("0x38")]("|"), b = 0; [];) {
          switch (w[b++]) {
            case "0":
              var S = I[t("0x43")].dsongImg;
              continue;

            case "1":
              var F = e[t("0x4b")][t("0x4c")].id;
              continue;

            case "2":
              var y = I.data[t("0x1df")];
              continue;

            case "3":
              var k = I[t("0x43")][t("0x100")];
              continue;

            case "4":
              a[t("0x1ea")](F, 1) ? (wx[t("0x136")]({
                dataUrl: S,
                title: k,
                coverImgUrl: y
              }), I.setData({
                musicPlay: F,
                muiscImgPlayer: a[t("0x1ef")]
              })) : (wx[t("0x1f0")](), I[t("0x3d")]({
                musicPlay: "",
                muiscImgPlayer: ""
              }));
              continue;

            case "5":
              var I = this;
              continue;
          }
          break;
        }
      }
    } else {
      if (a[t("0x1f1")](a[t("0x1f2")], a[t("0x1f3")])) return {
        title: a[t("0x1f4")],
        path: a[t("0x1f5")]
      };
      if (a[t("0x1dd")](x[t("0x43")][t("0x71")], 0)) {
        var P = x[t("0x43")][t("0x43")][0][t("0x55")].split("-"), T = {
          1: a[t("0x1f6")],
          2: a.roMwl,
          3: a[t("0x1f7")],
          4: t("0x99"),
          5: a[t("0x1f8")],
          6: t("0x5a"),
          7: a[t("0x1f9")],
          8: a[t("0x1fa")],
          9: a[t("0x1fb")],
          10: a[t("0x1fc")],
          11: t("0x17"),
          12: a.spsjj
        };
        n[t("0x3d")]({
          date: P[2],
          month: T[P[1]],
          year: P[0],
          newoneId: x[t("0x43")][t("0x43")][0].id,
          rsongImg: x[t("0x43")][t("0x43")][0][t("0x61")][t("0x62")](/http:/g, a[t("0x1fd")]),
          dsongImg: x[t("0x43")][t("0x43")][0][t("0x64")],
          dsongTit: x[t("0x43")][t("0x43")][0].m_name,
          dsongSin: x[t("0x43")][t("0x43")][0][t("0x66")],
          dsongFav: x[t("0x43")][t("0x43")][0][t("0xab")],
          dsongShr: x.data[t("0x43")][0][t("0x67")],
          dsentTit: x.data[t("0x43")][0][t("0x68")],
          dsentenc: x[t("0x43")][t("0x43")][0][t("0xac")],
          darticle: x[t("0x43")][t("0x43")][0][t("0xad")],
          dsentencAur: x[t("0x43")][t("0x43")][0][t("0x69")],
          dsentencFav: x[t("0x43")][t("0x43")][0][t("0xb7")],
          dsentencShr: x[t("0x43")][t("0x43")][0].j_share,
          darticleTit: x.data[t("0x43")][0][t("0x6c")],
          darticleAur: x.data[t("0x43")][0][t("0xae")],
          darticleImg: x.data[t("0x43")][0][t("0xaf")][t("0x62")](/http:/g, a[t("0x1fd")]),
          darticleFav: x[t("0x43")][t("0x43")][0].wfav,
          darticleShr: x[t("0x43")].data[0][t("0x6e")]
        });
      }
    }
  },
  openPopup: function (x) {
    var e = {
      ewJgt: function (x, t) {
        return x == t;
      },
      ucDnO: function (x, t) {
        return x + t;
      },
      ljwOi: function (x, t) {
        return x !== t;
      },
      SNqRK: t("0x1fe"),
      tcBox: function (x, t) {
        return x == t;
      },
      IiCVc: function (x, t) {
        return x === t;
      },
      YWbEF: t("0x1ff"),
      IPPRP: "JvkYx"
    }, a = this;
    if (e[t("0x200")](n[t("0x3b")][t("0x3c")], 1e4)) return e[t("0x201")](e[t("0x202")], e[t("0x202")]),
      void a[t("0x3d")]({
        loginMask: !![]
      });
    var r = x[t("0x4b")][t("0x4c")][t("0x81")];
    if (e[t("0x203")](r, !![])) if (e[t("0x204")](e[t("0x205")], e.IPPRP)) {
      if (e.ewJgt(res.data.code, 0)) {
        var i = e.ucDnO(a[t("0x43")].dsentencShr, 1);
        a[t("0x3d")]({
          dsentencShr: i
        });
      }
    } else this.setData({
      show: !![],
      headtap: ![]
    }); else this[t("0x3d")]({
      show: ![],
      headtap: !![]
    });
  },
  handleMenuMask: function (x) {
    var e = {
      yCkBV: function (x, t) {
        return x == t;
      },
      dRgSV: function (x, t) {
        return x + t;
      },
      UUlIT: function (x, t) {
        return x == t;
      },
      SLpEu: t("0xe7"),
      mQVXb: function (x, t) {
        return x === t;
      },
      hIfyo: t("0x206"),
      TQzwh: t("0x207"),
      yqilG: function (x, t) {
        return x === t;
      },
      vuXlk: t("0x208")
    }, a = this;
    if (x[t("0x4b")][t("0x4c")][t("0x81")] == !![]) if (e.mQVXb(e.hIfyo, e.TQzwh)) {
      if (e[t("0x209")](res.data.code, 0)) {
        var n = e[t("0x20a")](a[t("0x43")][t("0xbc")], 1);
        a[t("0x3d")]({
          darticleShr: n
        });
      }
    } else a[t("0x3d")]({
      menushow: !![],
      menuSta: ![]
    }); else e[t("0x20b")](e[t("0x20c")], e[t("0x20c")]) ? a.setData({
      menushow: ![],
      menuSta: !![]
    }) : e.UUlIT(res[t("0x43")].code, 0) && (a[t("0x3d")]({
      dumonth: res.data[t("0x43")]
    }), wx.request({
      url: e[t("0x20d")],
      data: {
        year: res[t("0x43")][t("0x43")][0][2],
        mon: res[t("0x43")][t("0x43")][0][0]
      },
      success: function (x) {
        0 == x[t("0x43")][t("0x71")] && a.setData({
          monthData: x[t("0x43")][t("0x43")]
        });
      }
    }));
  },
  handleChangeTap: function (x) {
    var e = x.detail[t("0x20e")];
    this[t("0x3d")]({
      tabcurrent: e
    });
  },
  playerMusic: function (x) {
    var e = {
      RNijF: function (x, t) {
        return x == t;
      },
      KYOVz: t("0x23"),
      WEUcE: function (x, t) {
        return x === t;
      },
      vLewZ: t("0x20f")
    }, a = this, n = a.data.dsongImg, r = a[t("0x43")][t("0x100")], i = a[t("0x43")][t("0x1df")], c = x[t("0x4b")][t("0x4c")].id;
    e[t("0x210")](c, 1) ? (wx[t("0x136")]({
      dataUrl: n,
      title: r,
      coverImgUrl: i
    }), a[t("0x3d")]({
      musicPlay: c,
      muiscImgPlayer: e[t("0x211")]
    })) : e.WEUcE(e[t("0x212")], t("0x20f")) ? (wx.pauseBackgroundAudio(), a[t("0x3d")]({
      musicPlay: "",
      muiscImgPlayer: ""
    })) : this[t("0x3d")]({
      show: ![],
      headtap: !![]
    });
  },
  handleChange: function (x) {
    var e = x.detail[t("0x20e")];
    this[t("0x3d")]({
      current: e
    });
  },
  handleContentChange: function (x) {
    var e = this, a = x[t("0xc2")][t("0xc3")];
    e[t("0x3d")]({
      current: a
    });
  },
  userlogin: function (x) {
    for (var e = {
      EUaeg: "0|5|2|4|3|1|6",
      PHlLn: t("0x213")
    }, a = e[t("0x214")].split("|"), r = 0; [];) {
      switch (a[r++]) {
        case "0":
          var i = {
            VIuAg: t("0x215"),
            NurpB: t("0x216"),
            jLAyy: e[t("0x217")]
          };
          continue;

        case "1":
          var c = x.detail[t("0x218")];
          continue;

        case "2":
          var u = x[t("0xc2")].iv;
          continue;

        case "3":
          var s = x[t("0xc2")][t("0x219")];
          continue;

        case "4":
          var o = x[t("0xc2")].rawData;
          continue;

        case "5":
          var d = this;
          continue;

        case "6":
          wx[t("0x74")]({
            success: function (x) {
              var e = {
                bzvDc: i[t("0x21a")],
                EBBtT: i[t("0x21b")],
                qouJv: i[t("0x21c")],
                HMhRz: t("0x1a"),
                Loqqh: t("0x1b")
              };
              wx.request({
                url: t("0x21d"),
                data: {
                  iv: u,
                  code: x[t("0x71")],
                  rawData: o,
                  signature: s,
                  encryptedData: c
                },
                success: function (x) {
                  0 == x[t("0x43")].code ? (d[t("0x3d")]({
                    showMask: ![]
                  }), n.login(), wx[t("0x75")]({
                    title: e[t("0x222")],
                    icon: e[t("0x223")]
                  }), n.globalData[t("0x3c")] = 0) : wx[t("0x21e")]({
                    content: e[t("0x21f")],
                    showCancel: ![],
                    confirmColor: e[t("0x220")],
                    confirmText: e[t("0x221")],
                    success: function (x) { }
                  });
                }
              });
            }
          });
          continue;
      }
      break;
    }
  },
  getFavSongTap: function (x) {
    var e = {
      JtiPA: t("0xd6"),
      RVMqj: t("0xce"),
      RaWPL: t("0x7"),
      DacIE: t("0xcf"),
      RsZoh: t("0x1b2"),
      zrfIN: t("0x9"),
      xfiIq: "#666666",
      bzeLE: t("0xd1"),
      eWsqz: function (x, t) {
        return x + t;
      },
      yijpP: function (x, t) {
        return x == t;
      },
      BXDQc: function (x, t) {
        return x + t;
      },
      MPHra: function (x, t) {
        return x == t;
      },
      ZGdAV: "BCYdA",
      COnoq: function (x, t) {
        return x == t;
      },
      IiFOx: function (x, t) {
        return x !== t;
      },
      ypFBP: t("0x224"),
      QdVqz: "__appUserInfo"
    }, a = this, r = x.currentTarget[t("0x4c")].id, i = x.currentTarget[t("0x4c")].type;
    if (1e4 == n[t("0x3b")][t("0x3c")]) {
      if (!e[t("0x225")](t("0x224"), e[t("0x226")])) return void a[t("0x3d")]({
        loginMask: !![]
      });
      a[t("0x3d")]({
        longtime: !![]
      });
    }
    var c = wx[t("0x4f")](e[t("0x227")])[t("0x228")];
    wx[t("0x70")]({
      url: t("0x229"),
      data: {
        id: r,
        type: i,
        token: c
      },
      success: function (x) {
        var n = {
          qVEKA: e[t("0x22a")],
          CZEne: e[t("0x22b")],
          YCvpa: e[t("0x22c")],
          RlGVs: e[t("0x22d")],
          BubCm: e.RsZoh,
          iDfcp: t("0xd0"),
          HdFOl: e[t("0x22e")],
          DmGJY: e[t("0x22f")],
          MlWOP: e[t("0x230")],
          qMyhH: function (x, a) {
            return e[t("0x231")](x, a);
          }
        };
        if (e[t("0x232")](x[t("0x43")][t("0x71")], 0)) {
          if (0 == i) {
            var r = e[t("0x233")](a[t("0x43")].dsongFav, 1);
            a[t("0x3d")]({
              dsongFav: r,
              songFavSta: 1
            });
          }
          if (e[t("0x234")](i, 1)) if (e[t("0x235")] === t("0x236")) {
            var c = e[t("0x233")](a[t("0x43")][t("0x237")], 1);
            a[t("0x3d")]({
              dsentencFav: c,
              dsenFavSta: 1
            });
          } else ctx[t("0x117")](n[t("0x238")]), ctx[t("0x119")](0, 0, 400, 800), ctx.drawImage(n[t("0x239")], 20, 30, 80, 80),
            ctx.setFillStyle(t("0x9")), ctx[t("0x11b")](18), ctx[t("0x91")]("小独", 108, 63),
            ctx[t("0x117")](n[t("0x23a")]), ctx[t("0x11b")](14), ctx[t("0x91")](n[t("0x23b")], 108, 92),
            ctx[t("0x11e")] = n[t("0x23c")], ctx[t("0x15d")] = .5, ctx[t("0x120")](), ctx[t("0x121")](20, 130),
            ctx[t("0x122")](380, 130), ctx.stroke(), ctx.drawImage(x[t("0x124")], 20, 160, 360, 360),
            ctx.setFillStyle(n.iDfcp), ctx[t("0x119")](20, 450, 365, 70), ctx.setFillStyle(n[t("0x23d")]),
            ctx.setFontSize(19), ctx[t("0x91")](tit, 25, 480), ctx[t("0x117")](n[t("0x23e")]),
            ctx[t("0x11b")](14), ctx[t("0x91")](n[t("0x23f")] + use, 25, 505), ctx[t("0x11e")] = n[t("0x23c")],
            ctx.lineWidth = .5, ctx[t("0x120")](), ctx.moveTo(20, 550), ctx[t("0x122")](380, 550),
            ctx[t("0x127")](), ctx[t("0x123")](qr.tempFilePath, 240, 565, 120, 120), ctx[t("0x117")](n.HdFOl),
            ctx[t("0x11b")](40), ctx[t("0x91")](dat, 50, 636), ctx[t("0x11b")](22), ctx[t("0x91")](n[t("0x240")](mon + ".", yer), 96, 636),
            ctx[t("0x17c")](), ctx[t("0x129")](), setTimeout(function () {
              wx[t("0x241")]({
                x: 0,
                y: 0,
                width: 400,
                height: 700,
                canvasId: t("0x1c0"),
                success: function (x) {
                  wx.hideLoading(), a[t("0x3d")]({
                    shareImg: x.tempFilePath,
                    shareMask: ![],
                    imageMask: !![]
                  });
                }
              });
            }, 500);
          if (e[t("0x242")](i, 2)) {
            var u = e[t("0x233")](a[t("0x43")][t("0x48")], 1);
            a[t("0x3d")]({
              darticleFav: u,
              dartFavSta: 1
            });
          }
        }
      }
    });
  },
  delFavSongTap: function (x) {
    var e = {
      VhxZu: function (x, t) {
        return x == t;
      },
      ShDIn: function (x, t) {
        return x - t;
      },
      wnixC: function (x, t) {
        return x !== t;
      },
      jYdie: "RJHBu",
      aAhsB: function (x, t) {
        return x - t;
      },
      UCLfi: t("0x29"),
      oEQUL: "https://xiaodu.maliapi.com/api/1?viewid=home&part=fav_wzdel"
    }, a = this, n = x[t("0x4b")][t("0x4c")].id, r = x[t("0x4b")][t("0x4c")][t("0x4a")], i = wx[t("0x4f")](e[t("0x243")])[t("0x228")];
    wx[t("0x70")]({
      url: e[t("0x244")],
      data: {
        id: n,
        type: r,
        token: i
      },
      success: function (x) {
        if (0 == x[t("0x43")][t("0x71")]) {
          if (e.VhxZu(r, 0)) {
            var n = e.ShDIn(a[t("0x43")][t("0x44")], 1);
            a[t("0x3d")]({
              dsongFav: n,
              songFavSta: 0
            });
          }
          if (e[t("0x245")](r, 1)) if (e.wnixC(e.jYdie, e[t("0x246")])) a.setData({
            WIN_HEIGHT: x[t("0x6f")]
          }); else {
            var i = a.data.dsentencFav - 1;
            a[t("0x3d")]({
              dsentencFav: i,
              dsenFavSta: 0
            });
          }
          if (e.VhxZu(r, 2)) {
            var c = e.aAhsB(a.data[t("0x48")], 1);
            a.setData({
              darticleFav: c,
              dartFavSta: 0
            });
          }
        }
      }
    });
  },
  getCopyWechat: function () {
    var x = {
      fmnvQ: function (x, t) {
        return x !== t;
      },
      qsymr: t("0x247"),
      LUJGX: t("0x248"),
      RBnbU: t("0x1b"),
      SwOLN: t("0x249")
    };
    wx[t("0x24a")]({
      data: x[t("0x24b")],
      success: function (e) {
        x.fmnvQ(t("0x24c"), x.qsymr) ? wx[t("0x75")]({
          title: x[t("0x24d")],
          icon: x[t("0x24e")],
          duration: 500
        }) : test += rowPart[a];
      }
    });
  }
});