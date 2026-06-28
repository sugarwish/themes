var konten;
var musik;
var nomorWhatsapp;
var klikA = new Audio("https://dekatutorial.github.io/ct/klk.mp3");
klikA.autoplay = false;
klikA.loop = false;
var isy = true;
function typplay() {
  var _0x480dff = new Audio("https://dekatutorial.github.io/ct/typ.mp3");
  _0x480dff.autoplay = false;
  _0x480dff.loop = false;
  if (isy) {
    _0x480dff.play();
    isy = false;
    setTimeout(() => {
      isy = true;
    }, 100);
  }
}
function DekaTutorial(_0x547ec4, _0x551b86, _0x52dc97, _0x201962, _0x31145b, _0x40b9ce) {
    var _0x45c725 = "";
    var _0x215a65 = document.createElement("div");
    _0x45c725 = "<div class=\"pldr\"> <p></p> <p></p> <p></p> </div> <div class=\"new-container\" style=\"background-image: url('http://dekatutorial.github.io/v/kvn/asset/bg.webp')\"> <div class=\"top\"> <img src=\"https://dekatutorial.github.io/v/kvn/asset/flwr.webp\" class=\"f1\" /> <img src=\"https://dekatutorial.github.io/v/kvn/asset/flwr2.webp\" class=\"f2\" /> </div> <div class=\"bottom\"> <img src=\"https://dekatutorial.github.io/v/kvn/asset/flwr.webp\" class=\"f1\" /> <img src=\"https://dekatutorial.github.io/v/kvn/asset/flwr2.webp\" class=\"f2\" /> </div> <div class=\"new-content\"> <div class=\"title\"> <h3>" + _0x201962 + "</h3> <h2>" + _0x31145b + "</h2> <!-- <p>1 month</p> --> </div> <div class=\"foto\"> <!-- <div class=\"circle-love\"> <div class=\"circle-love-content\"> <img src=\"https://dekatutorial.github.io/v/kvn/asset/circle.webp\" class=\"circle\" /> <img src=\"https://dekatutorial.github.io/v/kvn/asset/love.webp\" class=\"love\" /> </div> </div> --> <img src=\"" + _0x40b9ce + "\" class=\"img-foto\" /> <img src=\"https://dekatutorial.github.io/v/kvn/asset/tape.svg\" class=\"tape tape1\" /> <img src=\"https://dekatutorial.github.io/v/kvn/asset/tape.svg\" class=\"tape tape2\" /> <img src=\"https://dekatutorial.github.io/v/kvn/asset/flwr3.webp\" class=\"flwr-foto\" /> </div> <button class=\"btn-start\">Click Me</button> </div> </div> <div class=\"pu-ctnr scs\" style=\"display: none\"> <div class=\"pu\"> <div class=\"t\"> <div><div></div></div> </div> <div class=\"c\"> <p>Pesan berhasil dikirim</p> <div class=\"scs-i\"> <div class=\"d d1\"></div> <div class=\"d d2\"></div> <div class=\"mlt\"></div> </div> <div class=\"btn\"><button>OK</button></div> </div> </div> </div> <div class=\"pu-ctnr fl\" style=\"display: none\"> <div class=\"pu\"> <div class=\"t\"> <div><div></div></div> </div> <div class=\"c\"> <p>Pesan gagal dikirim</p> <div class=\"scs-i\"> <div class=\"d d1\"></div> <div class=\"d d2\"></div> <div class=\"mlt\"></div> </div> <div class=\"btn\"><button>OK</button></div> </div> </div> </div> <div class=\"pu-ctnr pgs\" style=\"display: none\"> <div class=\"pu\"> <div class=\"t\"> <div><div></div></div> </div> <div class=\"c\"> <p>Mengirim pesan</p> <div class=\"pgsl\"></div> </div> </div> </div> <div class=\"pu-ctnr towa\" style=\"display: none\"> <div class=\"pu\"> <div class=\"t\"> <div><div></div></div> </div> <div class=\"c\"> <p>Kirim pesannya ke wa aku ya</p> <div class=\"btn\"><button>Kirim</button></div> </div> </div> </div> <div class=\"pu-ctnr jksg\" style=\"display: none\"> <div class=\"pu\"> <div class=\"t\"> <div><div></div></div> </div> <div class=\"c\"> <p>Jangan dikosongin dong</p> <div class=\"btn\"><button>OK</button></div> </div> </div> </div> <div class=\"pu-ctnr ta\" style=\"display: none\"> <div class=\"pu\"> <div class=\"t\"> <div><div></div></div> </div> <div class=\"c\"> <p>Ketik pesan disini</p> <textarea autocomplete=\"off\"></textarea> <div class=\"btn\"><button>Kirim</button></div> </div> </div> </div>";
    _0x215a65.innerHTML = _0x45c725;
    document.querySelector("body").appendChild(_0x215a65);
    if (_0x551b86 != "") {
      var _0x5ae3cc = new Audio(_0x551b86);
      _0x5ae3cc.autoplay = true;
      _0x5ae3cc.loop = true;
    }
    _0x547ec4.forEach(_0x8d37d1 => {
      if (typeof _0x8d37d1.ucapan === "undefined") {
        _0x8d37d1.ucapan = "";
      } else {
        ({});
      }
      if (typeof _0x8d37d1.gambar === "undefined") {
        _0x8d37d1.gambar = "";
      } else {
        ({});
      }
    });
    var _0x61c437 = 0;
    var _0xa46bac = 0;
    var _0xbd9b50 = 0;
    for (var _0x4c8c57 = 0; _0x4c8c57 < _0x547ec4.length; _0x4c8c57++) {
      var _0x34d7e6 = document.createElement("div");
      _0x34d7e6.classList.add("pu-ctnr");
      _0x34d7e6.classList.add("pu-ctn");
      _0x34d7e6.setAttribute("style", "display:none");
      _0x34d7e6.innerHTML = "<div class=\"pu\"><div class=\"t\"><div><div></div></div></div><div class=\"c\">" + (_0x547ec4[_0x4c8c57].gambar != "" ? "<img src=\"" + _0x547ec4[_0x4c8c57].gambar + "\" height=\"140\" />" : "") + (_0x547ec4[_0x4c8c57].ucapan != "" ? "<p>" + _0x547ec4[_0x4c8c57].ucapan + "</p>" : "") + "<div class=\"btn\"><button onclick=\"\">OK</button><!-- <button>BANGET</button> --></div></div></div>";
      document.body.appendChild(_0x34d7e6);
      var _0x294ae8 = document.querySelectorAll(".pu-ctn")[_0xa46bac++].querySelectorAll("button")[0];
      if (_0x4c8c57 != _0x547ec4.length - 1) {
        _0x294ae8.addEventListener("click", () => {
          _0x1f21bb(_0x61c437, _0x61c437 + 1);
          _0x61c437++;
        });
      } else {
        _0x294ae8.addEventListener("click", () => {
          _0x6754c4(_0x61c437);
          _0x3a0591(".ta");
          document.querySelector(".ta").querySelector("button").addEventListener("click", _0x4bd65f);
          _0x61c437 = 0;
        });
      }
    }
    function _0x3eda86() {
      var _0x2694de = document.querySelectorAll(".pu-ctn");
      _0x2694de[0].style.display = "flex";
    }
    function _0x1f21bb(_0x26ba84, _0x408227) {
      klikA.play();
      var _0x2fc160 = document.querySelectorAll(".pu-ctn");
      _0x2fc160[_0x26ba84].style.display = "none";
      _0x2fc160[_0x408227].style.display = "flex";
    }
    function _0x6754c4(_0x2abf68) {
      var _0x9425d1 = document.querySelectorAll(".pu-ctn");
      _0x9425d1[_0x547ec4.length - 1].style.display = "none";
    }
    function _0x3a0591(_0x3f4a09) {
      klikA.play();
      var _0x4e2d82 = document.querySelector(_0x3f4a09);
      _0x4e2d82.style.display = "flex";
      if (_0x3f4a09 == ".ta") {
        _0x4e2d82.querySelector("textarea").focus();
      }
    }
    function _0x2698fc(_0x47285f) {
      var _0x572cdc = document.querySelector(_0x47285f);
      _0x572cdc.style.display = "none";
    }
    function _0x4bd65f() {
      var _0x482655 = document.querySelector(".ta").querySelector("textarea").value;
      if (_0x482655 != "") {
        _0x2698fc(".ta");
        if (true) {
          _0x3a0591(".towa");
          document.querySelector(".towa").querySelector("button").addEventListener("click", () => {
            klikA.play();
            _0x2698fc(".towa");
            if (_0x52dc97.startsWith("62")) {
              location.assign("https://wa.me/" + _0x52dc97 + "?text=" + _0x482655);
            } else {
              location.assign("https://wa.me/?text=" + _0x482655);
            }
          });
        } else {
          _0x3a0591(".pgs");
          var _0x5d4754 = new FormData();
          _0x5d4754.append("p", _0x482655);
          fetch("", {
            method: "POST",
            body: _0x5d4754
          }).then(_0x25dbd6 => _0x25dbd6.json()).then(async _0x17c716 => {
            if (_0x17c716.s == 200) {
              _0xe881ec();
            }
          });
        }
      } else {
        _0xee7831();
      }
    }
    const _0x4b8e97 = document.querySelector(".new-content");
    const _0x3e20ea = document.querySelector(".new-container");
    document.querySelector(".btn-start").addEventListener("click", () => {
      klikA.play();
      _0x5ae3cc.play();
      _0x4b8e97.classList.add("hide");
      setTimeout(_0x3eda86, 500);
    });
    document.querySelector("textarea").addEventListener("keypress", typplay);
    function _0xee7831() {
      _0x2698fc(".ta");
      _0x3a0591(".jksg");
      document.querySelector(".jksg").querySelector("button").addEventListener("click", () => {
        _0x2698fc(".jksg");
        _0x3a0591(".ta");
      });
    }
    function _0xe881ec() {
      document.querySelector(".scs").querySelector("button").addEventListener("click", () => {
        klikA.play();
        _0x2698fc(".scs");
      });
      _0x3a0591(".scs");
      document.querySelector(".ta").querySelector("textarea").value = "";
      _0x2698fc(".pgs");
    }
    var _0x3a2f39 = document.querySelector(".pldr");
    var _0x36a533 = false;
    function _0x32922f() {
      _0x3a2f39.classList.add("rmv");
      setTimeout(() => {
        _0x3a2f39.remove();
      }, 500);
    }
    setTimeout(() => {
      if (!_0x36a533) {
        _0x32922f();
      }
    }, 15000);
    window.addEventListener("load", () => {
      _0x32922f();
      _0x36a533 = true;
      _0x3e20ea.classList.add("show");
    });

}
text1 = "Happy";
text2 = "Special Day";
foto = "https://dekatutorial.github.io/brd/foto.webp";
konten = [{
  gambar: "https://dekatutorial.github.io/v/stkr/Stiker 16.gif",
  ucapan: "Hallo Sayang👋🏻"
}, {
  gambar: "https://dekatutorial.github.io/v/stkr/Stiker 18.gif",
  ucapan: "Coba tebak deh siapa yang hari ini ulang tahun?"
}, {
  gambar: "https://dekatutorial.github.io/v/stkr/Stiker 2.gif",
  ucapan: "Yeahh betul kamu"
}, {
  gambar: "https://dekatutorial.github.io/v/stkr/Stiker 47.gif",
  ucapan: "Mau custom website ucapan online?"
}, {
  gambar: "https://dekatutorial.github.io/v/stkr/Stiker 15.gif",
  ucapan: "Order aja di Deka Tutorial"
}, {
  gambar: "https://dekatutorial.github.io/v/stkr/Stiker 36.gif",
  ucapan: "Bebas custom ucapan, foto sama musik"
}, {
  gambar: "https://dekatutorial.github.io/v/stkr/Stiker 42.gif",
  ucapan: "Kalo punya konsep sendiri bisa dibikinin juga"
}];
musik = "https://dekatutorial.github.io/musik/HAPPY%20BIRTHDAY%20INSTRUMENTAL%20(Piano%20&%20Sax%20-%20Happy%20Birthday%20to%20You%20by%20happysongchannel).mp3";
nomorWhatsapp = "nomorWhatsapp";
DekaTutorial(konten, musik, nomorWhatsapp, text1, text2, foto);