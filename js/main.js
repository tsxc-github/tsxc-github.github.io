function getQueryString(t){const e=window.location.href;return new URL(e).searchParams.get(t)}function saveData(t,e){t="Yurchiu_"+t,e=JSON.stringify(e),window.localStorage&&localStorage.setItem(t,e)}function readData(t){return window.localStorage?(t="Yurchiu_"+t,JSON.parse(localStorage.getItem(t))):""}function HideIt(){1==readData("toolbar")&&$(".toolbar").hide(),1==readData("disVRecord")&&(santaRemove(),natsukiRemove()),1==readData("disAplayer")&&metingRemove()}function hideBars(){$(".toolbar").hide(),$(".sidebar").hide(),$(".fake-sidebar").hide(),$(".hideBars").hide(),$(".showBars").show(),$(".footer").css("margin-left","0"),$(".article").css("width","100%"),HideIt()}function showBars(){$(".toolbar").show(),$(".sidebar").show(),$(".fake-sidebar").show(),$(".hideBars").show(),$(".showBars").hide(),$(".footer").removeAttr("style",""),$(".article").removeAttr("style",""),HideIt()}function topbarToggle(){$(".sidebar").toggleClass("sidebar-display"),$(".santa-container").toggleClass("appear"),$(".natsuki-container").toggleClass("appear"),$("meting-js").toggleClass("appear"),HideIt()}function santaColorEgg(){$(".santa").attr("onclick","santaRemove()"),$(".santa .body").attr("style","font-size: 500px;")}function metingRemove(){$("meting-js").removeClass("appear"),$("meting-js").hide()}function santaRemove(){$(".santa-container").removeClass("appear"),$(".santa-container").hide()}function natsukiRemove(){$(".natsuki-container").removeClass("appear"),$(".natsuki-container").hide()}function Fool(){readData("fool")||(document.body.classList.add("reverse-coloregg"),window.setTimeout((function(){saveData("fool","fool"),document.body.classList.remove("reverse-coloregg")}),1e4))}function AprilHair(){var t=Math.floor(60*Math.random()),e=Math.floor(50*Math.random()),a=Math.floor(360*Math.random()),o=document.createElement("img");o.src="/img/hair.png",o.style.position="fixed",o.style.bottom="".concat(t,"%"),o.style.right="".concat(e,"%"),o.style.zIndex="9999",o.style.pointerEvents="none",o.style.width="40%",o.style.maxWidth="190px",o.style.transform="".concat("rotate(",a,"deg)"),document.body.append(o)}function colorSetting(t=0){type=readData("color"),t&&(type=t),2==type?$("html").addClass("color-std"):3==type?$("html").addClass("color-white"):4==type?($("html").addClass("color-night"),window.document.documentElement.setAttribute("data-theme","dark")):5==type&&$("html").addClass("color-trans")}function specialSetting(t=0){type=readData("special"),t&&(type=t),2==type?$("html").addClass("grayscale"):3==type?$("html").addClass("invert"):4==type&&$("html").addClass("blur")}function consolePrint(){console.log("\n %c Theme cutie ©2020-2023 %c by Yurchiu | yz-hs.github.io ","color:#444;background:#eee;padding:5px 0;","color:#eee;background:#444;padding:5px;")}function Stretch(){$("body").css("width","100%"),$(".article").addClass("article-stretch")}function Setting(){colorSetting(),specialSetting(),HideIt(),1==readData("stretch")&&Stretch()}