"use strict";function _classCallCheck(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}var PopupManager=function t(o){_classCallCheck(this,t),this.togglePopup=function(t){t.preventDefault();var o=$(t.currentTarget).attr("data-popup-trigger");$(".popup[data-popup-target="+o+"]").toggleClass("popup--active")},this._$trigger=$("[data-popup-trigger], .popup__inner"),this._$content=$(".popup__content"),this._$trigger.click(this.togglePopup),this._$content.click(function(t){t.stopPropagation()})};$(document).ready(function(){new PopupManager;0<$(".news-popup").length&&$(".news-popup__slider").slick({slidesToShow:1,slidesToScroll:1,dots:!0,arrows:!1,customPaging:function(){return""}})});
//# sourceMappingURL=app-dist.js.map