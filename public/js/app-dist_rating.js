"use strict";function _classCallCheck(t,a){if(!(t instanceof a))throw new TypeError("Cannot call a class as a function")}var PopupManager=function t(a){_classCallCheck(this,t),this.togglePopup=function(t){t.preventDefault();var a=$(t.currentTarget).attr("data-popup-trigger");$(".popup[data-popup-target="+a+"]").toggleClass("popup--active")},this._$trigger=$("[data-popup-trigger], .popup__inner"),this._$content=$(".popup__content"),this._$trigger.click(this.togglePopup),this._$content.click(function(t){t.stopPropagation()})},Rate=function t(){var s=this;_classCallCheck(this,t),this.changeRating=function(t){var a=$(t.currentTarget),e=a.index()+1;a.siblings().removeClass("rate__stars-item--active"),a.addClass("rate__stars-item--active").prevAll().addClass("rate__stars-item--active"),s._$rate.removeClass(function(t,a){return(a.match(/(^|\s)rate--\S+/g)||[]).join(" ")}).addClass("rate--"+e+" rate--active")},this._$rate=$(".rate"),this._$star=$(".rate__stars-item"),this._$star.click(this.changeRating)};$(document).ready(function(){new PopupManager;if(0<$(".news-popup").length&&$(".news-popup__slider").slick({slidesToShow:1,slidesToScroll:1,dots:!0,arrows:!1,customPaging:function(){return""}}),0<$(".rate").length)new Rate});
//# sourceMappingURL=app-dist.js.map