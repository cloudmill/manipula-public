/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 732:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ../node_modules/parsleyjs/dist/parsley.js
var parsley = __webpack_require__(563);
// EXTERNAL MODULE: ../node_modules/inputmask/dist/inputmask.js
var inputmask = __webpack_require__(419);
// EXTERNAL MODULE: ../node_modules/@fancyapps/ui/dist/index.esm.js
var index_esm = __webpack_require__(524);
;// CONCATENATED MODULE: ./scripts/forms.js
/* provided dependency */ var $ = __webpack_require__(638);



$(function () {
  // parsley
  $('form').parsley();
  $('form').on('submit', function (e) {
    e.preventDefault();
    e.target.closest('form').reset();
    e.target.closest('form').querySelectorAll('.form-input').forEach(function (it) {
      return it.classList.remove('active');
    });
    if (e.target.closest('[data-write-form]') || e.target.closest('[data-contacts-form]')) {
      index_esm/* Fancybox */.KR.close();
      index_esm/* Fancybox */.KR.show([{
        src: "#fancy-modal-success",
        type: 'inline'
      }]);
    } else if (e.target.closest('[data-subscribe-form]')) {
      index_esm/* Fancybox */.KR.show([{
        src: "#fancy-subscribe-success",
        type: 'inline'
      }]);
    }
    if (e.target.closest('[data-login-form]')) {
      index_esm/* Fancybox */.KR.close();
    }
  });
  Parsley.addMessages('ru', {
    defaultMessage: 'Некорректное значение',
    type: {
      email: 'Введите адрес электронной почты',
      url: 'Введите URL адрес',
      number: 'Введите число',
      integer: 'Введите целое число',
      digits: 'Введите только цифры',
      alphanum: 'Введите буквенно-цифровое значение'
    },
    notblank: 'Это поле должно быть заполнено',
    required: 'Заполните поле',
    pattern: 'Это значение некорректно',
    min: 'Это значение должно быть не менее чем %s',
    max: 'Это значение должно быть не более чем %s',
    range: 'Это значение должно быть от %s до %s',
    minlength: 'Минимум %s символов',
    maxlength: 'Это значение должно содержать не более %s символов',
    length: 'Это значение должно содержать от %s до %s символов',
    mincheck: 'Выберите не менее %s значений',
    maxcheck: 'Выберите не более %s значений',
    check: 'Выберите от %s до %s значений',
    equalto: 'Пароли не совпадают'
  });
  Parsley.setLocale('ru');

  // маска на телефон
  Inputmask({
    mask: '+7 (999) 999-99-99',
    showMaskOnHover: false
  }).mask('[data-mask-phone]');

  // валидация длины телефона
  Parsley.addValidator('phone', {
    requirementType: 'string',
    validateString: function validateString(value) {
      var result = value.replaceAll(/\D/g, '');
      return result.length === 11;
    },
    messages: {
      ru: 'Заполните поле'
    }
  });

  // маска на дату
  Inputmask({
    mask: '99.99.9999 - 99.99.9999',
    showMaskOnHover: false
  }).mask('[data-mask-date]');

  // валидатиция на цифры и спецсимволы
  Parsley.addValidator('string', {
    requirementType: 'string',
    validateString: function validateString(value) {
      var regexp = /[^а-яё\s]/i;
      return !regexp.test(value);
    },
    messages: {
      ru: 'Только кириллица'
    }
  });
  var inputs = document.querySelectorAll('[data-input]');
  if (inputs.length) {
    inputs.forEach(function (input) {
      input.oninput = function () {
        if (this.value) {
          this.classList.add('active');
        } else {
          this.classList.remove('active');
        }
      };
    });
  }
});
// EXTERNAL MODULE: ../node_modules/swiper/swiper.mjs + 1 modules
var swiper = __webpack_require__(904);
// EXTERNAL MODULE: ../node_modules/swiper/modules/index.mjs + 26 modules
var modules = __webpack_require__(90);
;// CONCATENATED MODULE: ./scripts/sliders.ts
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


function swiperInit() {
  var _breakpoints2;
  var sliders = document.querySelectorAll('[data-slider-id]');
  if (sliders.length > 0) {
    sliders.forEach(function (slider) {
      var slider_id = slider.getAttribute('data-slider-id');
      var slider_options = {
        navigation: {
          prevEl: "[data-prev=".concat(slider_id, "]"),
          nextEl: "[data-next=".concat(slider_id, "]")
        }
      };
      switch (slider_id) {
        case 'main':
          slider_options = _objectSpread(_objectSpread({}, slider_options), {}, {
            modules: [modules/* Pagination */.tl, modules/* Autoplay */.pt],
            loop: true,
            speed: 1000,
            autoplay: {
              delay: 4000
            },
            pagination: {
              el: "[data-swiper-pagination=".concat(slider_id, "]"),
              type: 'bullets'
            }
          });
          break;
        case 'products':
          slider_options = _objectSpread(_objectSpread({}, slider_options), {}, {
            modules: [modules/* Navigation */.W_],
            slidesPerView: 'auto',
            spaceBetween: 20

            // breakpoints: {
            //   [1024]: {
            //     slidesPerView: 6,
            //     spaceBetween: 20,
            //   },
            // },
          });

          break;
        case 'about':
          slider_options = _objectSpread(_objectSpread({}, slider_options), {}, {
            modules: [modules/* Navigation */.W_, modules/* Pagination */.tl, modules/* Autoplay */.pt],
            loop: true,
            speed: 1000,
            autoplay: {
              delay: 4000
            },
            pagination: {
              el: "[data-swiper-pagination=".concat(slider_id, "]"),
              type: 'bullets'
            }
          });
          break;
        case 'series':
        case 'solutions':
        case 'brands':
          slider_options = _objectSpread(_objectSpread({}, slider_options), {}, {
            modules: [modules/* Navigation */.W_],
            slidesPerView: 'auto'
          });
          break;
        case 'news':
          slider_options = _objectSpread(_objectSpread({}, slider_options), {}, {
            modules: [modules/* Navigation */.W_],
            slidesPerView: 'auto',
            breakpoints: _defineProperty({}, 1024, {
              slidesPerView: 1
            })
          });
          break;
        default:
          break;
      }
      var slider_el = new swiper/* default */.Z("[data-slider-id=\"".concat(slider_id, "\"]"), slider_options);
      if (slider_id === 'main' && window.matchMedia('(min-width: 1024px)').matches) {
        var getSlideBg = function getSlideBg(selector) {
          var _document$querySelect;
          return (_document$querySelect = document.querySelector(".main-slider-slide.swiper-slide-".concat(selector))) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.querySelector('[data-for-parallax]');
        }; // controlPrev?.addEventListener('click', () => {
        //   getSlideBg('active')?.setAttribute('data-swiper-parallax', '')
        //   getSlideBg('prev')?.setAttribute('data-swiper-parallax', '-30%')
        //   slider_el.slidePrev()
        // })
        // controlNext?.addEventListener('click', () => {
        //   getSlideBg('active')?.setAttribute('data-swiper-parallax', '30%')
        //   getSlideBg('next')?.setAttribute('data-swiper-parallax', '')
        //   slider_el.slideNext()
        // })
        var controlPrev = document.querySelector('[data-prev=main]');
        var controlNext = document.querySelector('[data-next=main]');
      }
    });
  }
  var productThumbs = new swiper/* default */.Z('#product-thumbs', {
    slidesPerView: 'auto',
    spaceBetween: 8
  });
  new swiper/* default */.Z('#product-slider', {
    modules: [modules/* Navigation */.W_, modules/* Thumbs */.o3],
    loop: true,
    navigation: {
      prevEl: "#product-slider-prev",
      nextEl: "#product-slider-next"
    },
    thumbs: {
      swiper: productThumbs
    }
  });
  var historyThumbs = new swiper/* default */.Z('#history-thumbs', {
    slidesPerView: 'auto'
  });
  new swiper/* default */.Z('#history-slider', {
    modules: [modules/* Navigation */.W_, modules/* Thumbs */.o3],
    loop: true,
    navigation: {
      prevEl: "#history-slider-prev",
      nextEl: "#history-slider-next"
    },
    thumbs: {
      swiper: historyThumbs
    }
  });
  new swiper/* default */.Z('#product-bottom-slider', {
    modules: [modules/* Navigation */.W_, modules/* Thumbs */.o3],
    slidesPerView: 1,
    spaceBetween: 8,
    breakpoints: (_breakpoints2 = {}, _defineProperty(_breakpoints2, 375, {
      slidesPerView: 'auto'
    }), _defineProperty(_breakpoints2, 1024, {
      slidesPerView: 4,
      spaceBetween: 20
    }), _breakpoints2),
    navigation: {
      prevEl: "#product-bottom-prev",
      nextEl: "#product-bottom-next"
    }
  });
}
;// CONCATENATED MODULE: ./scripts/fancybox.ts
function fancybox_typeof(obj) { "@babel/helpers - typeof"; return fancybox_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, fancybox_typeof(obj); }
function fancybox_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function fancybox_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? fancybox_ownKeys(Object(source), !0).forEach(function (key) { fancybox_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : fancybox_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function fancybox_defineProperty(obj, key, value) { key = fancybox_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function fancybox_toPropertyKey(arg) { var key = fancybox_toPrimitive(arg, "string"); return fancybox_typeof(key) === "symbol" ? key : String(key); }
function fancybox_toPrimitive(input, hint) { if (fancybox_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (fancybox_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


function fancyboxInit() {
  var defaults = fancybox_objectSpread(fancybox_objectSpread({}, index_esm/* Fancybox */.KR.defaults), {}, {
    dragToClose: false
  });
  var buttons = document.querySelectorAll('[data-fancy-button]');
  buttons.forEach(function (button) {
    var id = button.getAttribute('data-fancy-button');
    button === null || button === void 0 ? void 0 : button.addEventListener('click', function () {
      index_esm/* Fancybox */.KR.defaults = fancybox_objectSpread(fancybox_objectSpread({}, defaults), {}, {
        on: {
          shouldClose: function shouldClose() {
            button.classList.remove('active');
          }
        }
      });
      if (button.classList.contains('active')) {
        index_esm/* Fancybox */.KR.close();
      } else {
        if (id === 'catalog' || id === 'mobile-menu') {
          index_esm/* Fancybox */.KR.defaults = fancybox_objectSpread(fancybox_objectSpread({}, index_esm/* Fancybox */.KR.defaults), {}, {
            tpl: {
              closeButton: '<button data-fancybox-close class="f-button is-close-btn" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg></button>',
              main: "<div class=\"fancybox__container down\" role=\"dialog\" aria-modal=\"true\" aria-label=\"{{MODAL}}\" tabindex=\"-1\"><div class=\"fancybox__backdrop\"></div><div class=\"fancybox__carousel\"></div><div class=\"fancybox__footer\"></div></div>"
            }
          });
        }
        button.classList.add('active');
        if (id === 'filter1' || id === 'filter2') {
          index_esm/* Fancybox */.KR.close();
        }
        // @ts-ignore
        index_esm/* Fancybox */.KR.show([{
          src: "#fancy-modal-".concat(id),
          type: 'inline'
        }]);
      }
    });
  });
}
;// CONCATENATED MODULE: ./scripts/dropdown.js
/* provided dependency */ var dropdown_$ = __webpack_require__(638);
function dropdown() {
  var mediaQuery = window.matchMedia("(max-width: 1023px)");
  dropdown_$('[data-dropdown-button]').on('click', function () {
    if (Boolean(dropdown_$(this).closest('[data-dropdown-mob]').length) && mediaQuery.matches) {
      dropdown_$(this).closest('[data-dropdown]').toggleClass('active');
      dropdown_$(this).closest('[data-dropdown]').find('[data-dropdown-drop]').slideToggle(100);
    } else if (!dropdown_$(this).closest('[data-dropdown-mob]').length) {
      dropdown_$(this).closest('[data-dropdown]').toggleClass('active');
      dropdown_$(this).closest('[data-dropdown]').find('[data-dropdown-drop]').slideToggle(100);
    }
  });

  // $('[data-dropdown-button]').on('click', function () {
  //   $(this).closest('[data-dropdown]').toggleClass('active')
  //   $(this)
  //     .closest('[data-dropdown]')
  //     .find('[data-dropdown-drop]')
  //     .slideToggle(100)
  // })
}
;// CONCATENATED MODULE: ./scripts/tabs.js
function tabs() {
  var panels = document.querySelectorAll('[data-tabs-panel]');
  panels.forEach(function (el) {
    el.addEventListener('click', function (e) {
      var activeTab = e.target.closest('[data-tab]');
      var activePanel = e.target.closest('[data-tabs-panel]');
      var oldActiveTab = activePanel.querySelector('[data-tab].active');
      if (activeTab) {
        if (oldActiveTab) {
          oldActiveTab.classList.remove('active');
        }
        activeTab.classList.add('active');
      }
      if (activePanel.hasAttribute('data-tab-contents')) {
        var activeId = activeTab.getAttribute('data-tab');
        document.querySelectorAll('[data-tab-content]').forEach(function (it) {
          return it.classList.remove('show');
        });
        document.querySelector("[data-tab-content=\"".concat(activeId, "\"]")).classList.add('show');
      }
    });
  });
}
// EXTERNAL MODULE: ../node_modules/tippy.js/dist/tippy.esm.js + 54 modules
var tippy_esm = __webpack_require__(145);
// EXTERNAL MODULE: ../node_modules/tippy.js/dist/tippy.css
var tippy = __webpack_require__(527);
;// CONCATENATED MODULE: ./scripts/tippy.js


function tooltip() {
  var template1 = document.getElementById('solutions-search');
  var template2 = document.getElementById('search-grop');
  var solutionsInput = document.querySelector('[data-solutions-input]');
  if (template1 && solutionsInput) {
    var solutionsDrop = (0,tippy_esm/* default */.ZP)('[data-solutions-search]', {
      content: template1.innerHTML,
      placement: 'bottom-start',
      offset: [0, 4],
      arrow: false,
      allowHTML: true,
      interactive: true,
      // triggerTarget: solutionsInput,
      trigger: 'click'
    });

    // solutionsInput.addEventListener('input', (e) => {
    //   if (e.target.value.length > 0) {
    //     solutionsDrop.show()
    //   } else {
    //     solutionsDrop.hide()
    //   }
    // })
  }

  if (template2) {
    (0,tippy_esm/* default */.ZP)('[data-search-form-cont]', {
      content: template2.innerHTML,
      placement: 'bottom-start',
      offset: [0, 7],
      arrow: false,
      allowHTML: true,
      interactive: true,
      trigger: 'click'
    });
  }
}
;// CONCATENATED MODULE: ./scripts/contacts-map.js
function initContactsMap() {
  if (document.querySelector('#contacts-map')) {
    ymaps.ready(function () {
      if (document.querySelector('#contacts-map')) {
        try {
          var map = new ymaps.Map('contacts-map', {
            center: [55.695393, 37.421967],
            zoom: 11,
            controls: ['smallMapDefaultSet']
          }, {
            maxZoom: 22
          });
          var coords1 = [55.695393, 37.421967];
          var coords2 = [55.681945, 37.424345];
          var markSize = 40;
          var placemark1 = new ymaps.Placemark(coords1, {}, {
            iconLayout: 'default#image',
            // iconImageHref: `${window.CONFIG.path}assets/images/svg/office-placemark.svg`,
            iconImageHref: "assets/images/svg/placemark-blue.svg",
            iconImageSize: [markSize, markSize],
            iconImageOffset: [-markSize / 2, -markSize / 2],
            balloonPanelMaxMapArea: 0,
            hideIconOnBalloonOpen: false
          });
          var placemark2 = new ymaps.Placemark(coords2, {}, {
            iconLayout: 'default#image',
            // iconImageHref: `${window.CONFIG.path}assets/images/svg/office-placemark.svg`,
            iconImageHref: "assets/images/svg/placemark-dark.svg",
            iconImageSize: [markSize, markSize],
            iconImageOffset: [-markSize / 2, -markSize / 2],
            balloonPanelMaxMapArea: 0,
            hideIconOnBalloonOpen: false
          });
          map.geoObjects.add(placemark1);
          map.geoObjects.add(placemark2);
          map.YMap = map;
        } catch (err) {
          console.error(err);
        }
      }
    });
  }
}
;// CONCATENATED MODULE: ./scripts/where-buy-map.js
/* provided dependency */ var where_buy_map_$ = __webpack_require__(638);
// import { defaults } from './fancybox'
// map
// const BREAKPOINT = 1280;
var BREAKPOINT = 1024;
var mediaQuery = window.matchMedia("(min-width: ".concat(BREAKPOINT, "px)"));
function initPlacemarks(map, isClearCurrent) {
  // vars
  var markWidth = 32;
  var markHeight = 32;
  if (isClearCurrent) {
    map.geoObjects.removeAll();
  }
  var customItemContentLayout = ymaps.templateLayoutFactory.createClass('<div class="balloon__content balloon__content_cluster">' + '$[properties.balloon]' + '</div>');
  var clusterer = new ymaps.Clusterer({
    clusterIconLayout: ymaps.templateLayoutFactory.createClass('<div class="cluster">{{ properties.geoObjects.length }}</div>'),
    clusterBalloonItemContentLayout: customItemContentLayout,
    clusterBalloonContentLayout: 'cluster#balloonCarousel',
    hideIconOnBalloonOpen: false,
    clusterIconShape: {
      type: 'Rectangle',
      coordinates: [[0, 0], [50, 50]]
    }
  });
  clusterer.events.add(['balloonopen'], function (e) {
    var _clusterer$getCluster;
    var geoObjects = (_clusterer$getCluster = clusterer.getClusters()[0]) === null || _clusterer$getCluster === void 0 ? void 0 : _clusterer$getCluster.getGeoObjects();
    geoObjects === null || geoObjects === void 0 ? void 0 : geoObjects.forEach(function (geoObject) {
      var data = geoObject.properties._data;
      var div = document.createElement('div');
      div.innerHTML = data.balloon;
      var name = div.querySelector('.buy-page__title').textContent;
      var placemarks = document.querySelectorAll('[data-placemark]');
      placemarks.forEach(function (item) {
        var title = item.querySelector('.buy-page__title');
        if (title.textContent === name) {
          item.classList.add('active');
        }
      });
    });
  });
  clusterer.events.add(['balloonclose'], function (e) {
    var placemarks = document.querySelectorAll('[data-placemark].active');
    placemarks.forEach(function (item) {
      item.classList.remove('active');
    });
  });

  // balloon layout
  var layout = ymaps.templateLayoutFactory.createClass(['<div class="balloon">', '<div class="balloon__content">', '$[properties.balloon]', '</div>', '<div class="balloon__close"></div>', '<div class="balloon__arrow"></div>', '</div>'].join(''), {
    build: function build() {
      this.constructor.superclass.build.call(this);
      this._$element = where_buy_map_$('.balloon', this.getParentElement());
      var close = this._$element.find('.balloon__close');
      close.bind('click', this.onCloseClick);
      this.applyElementOffset();
    },
    onSublayoutSizeChange: function onSublayoutSizeChange() {
      layout.superclass.onSublayoutSizeChange.apply(this, arguments);
      if (!this._isElement(this._$element)) {
        return;
      }
      this.applyElementOffset();
      this.events.fire('shapechange');
    },
    applyElementOffset: function applyElementOffset() {
      this._$element.css({
        left: -(this._$element[0].offsetWidth / 2),
        top: -(this._$element[0].offsetHeight + markHeight + 4)
      });
    },
    getShape: function getShape() {
      if (!this._isElement(this._$element)) {
        return layout.superclass.getShape.call(this);
      }
      var position = this._$element.position();
      return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([[position.left, position.top], [position.left + this._$element[0].offsetWidth, position.top + this._$element[0].offsetHeight]]));
    },
    onCloseClick: function onCloseClick() {
      map.balloon.close();
    },
    _isElement: function _isElement(element) {
      return element && element[0];
    }
  });

  // добавление точек
  var placemarks = [];
  var requests = [];
  var placemarksParent = where_buy_map_$('[data-placemarks]');
  var placemarksNodes = where_buy_map_$('[data-placemark]');
  where_buy_map_$('[data-placemark]').each(function () {
    requests.push(ymaps.geocode(where_buy_map_$(this).data('placemark').trim()));
  });
  Promise.all(requests).then(function (res) {
    res.forEach(function (item, i) {
      // данные
      var balloon = placemarksNodes.eq(i).html();
      var storeType = placemarksNodes.eq(i).data('store-type');

      // экспозиция
      var expositions = placemarksNodes.eq(i).data('placemark-exposition');
      if (expositions) {
        var expositionHtml = createExposition(expositions);
        balloon += expositionHtml;
      }

      // placemark
      // const coordinates = $(this).data('placemark').split(' ');
      var coordinates = item.geoObjects.get(0).geometry.getCoordinates();
      var placemark = new ymaps.Placemark(coordinates, {
        balloon: balloon
      }, {
        iconLayout: 'default#image',
        // iconImageHref: `${window.CONFIG.path}/assets/images/svg/placemark-${storeType}.svg`,
        iconImageHref: "assets/images/svg/placemark-".concat(storeType, ".svg"),
        iconImageSize: [markWidth, markHeight],
        iconImageOffset: [-markWidth / 2, -markHeight / 2],
        balloonLayout: layout,
        balloonPanelMaxMapArea: 0,
        hideIconOnBalloonOpen: false
      });

      // events
      // placemark.events.add(['click'], () => {
      //   if (mediaQuery.matches) {
      //     const offsetTop = placemarksNodes.eq(i)[0].offsetTop

      //     placemarksParent.scrollTop(offsetTop + 1)
      //   } else {
      //     const modal = document.querySelector('[data-placemark-modal]')
      //     const container = modal.querySelector('[data-placemark-container]')

      //     container.innerHTML = balloon
      //     const options = {
      //       ...defaults,
      //       animationEffect: 'right',
      //     }
      //     $.fancybox.defaults = { ...$.fancybox.defaults, ...options }
      //     $.fancybox.open($(modal))
      //   }
      // })

      placemark.events.add(['balloonopen'], function () {
        placemarksNodes.eq(i).addClass('active');
      });
      placemark.events.add(['balloonclose'], function () {
        placemarksNodes.eq(i).removeClass('active');
      });
      if (mediaQuery.matches) {
        placemarksNodes.eq(i).on('click', function () {
          var parent = placemark.getParent();
          if (!parent) {
            map.setCenter(coordinates, 16);
          }
          try {
            placemark.balloon.open();
          } catch (e) {
            var cluster = findCluster(placemark, clusterer);
            clusterer.balloon.open(cluster);
          }
        });
      }
      placemarks.push(placemark);
    });
    // console.log(clusterer)
    clusterer.add(placemarks);
    map.geoObjects.add(clusterer);

    // позиционирование на точках
    map.setBounds(clusterer.getBounds(), {
      zoomMargin: Math.max(markWidth, markHeight)
    }).then(function () {
      if (placemarks.length === 1) {
        map.setZoom(15);
      }
    });
  });
}
function findCluster(placemark, clusterer) {
  var clusters = clusterer.getClusters();
  var result;
  for (var i = 0; i < clusters.length; i++) {
    var objects = clusters[i].getGeoObjects();
    for (var j = 0; j < objects.length; j++) {
      if (objects[j] === placemark) {
        result = clusters[i];
        break;
      }
    }
  }
  return result;
}

// function createExposition(items) {
//   const parent = $(document.createElement('div'))
//   let expositionItmes = []

//   items.forEach((item) => {
//     const str = `<a href="${item.link}" target="_blank" class="buy-page__exposition-item">${item.name}</a>`
//     expositionItmes.push(str)
//   })

//   const container = [
//     '<div class="buy-page__exposition">',
//     '<div class="buy-page__exposition-container">',
//     '<div class="buy-page__exposition-title">',
//     'Экспозиция',
//     '</div>',
//     '<div class="buy-page__exposition-list">',
//     `${expositionItmes.join('')}`,
//     '</div>',
//     '</div>',
//     '</div>',
//   ].join('')

//   parent.html(container)

//   return parent.html()
// }

function initBuyMap() {
  if (where_buy_map_$('#where-buy-map').length) {
    try {
      ymaps.ready(function () {
        var center = where_buy_map_$('#where-buy-map').data('map-center').split(' ');
        var zoom = Number(where_buy_map_$('#where-buy-map').data('map-zoom'));

        // init
        var map = new ymaps.Map('where-buy-map', {
          center: center ? center : [58.050234, 53.099332],
          zoom: zoom ? zoom : 5,
          controls: []
        }, {
          maxZoom: 22
        });
        if (!mediaQuery.matches) {
          map.behaviors.disable('drag');
        }
        initPlacemarks(map);

        // balloon close
        map.events.add('click', function () {
          if (map.balloon.isOpen()) {
            map.balloon.close();
          }
        });
        where_buy_map_$('#where-buy-map')[0].YMap = map;
      });
    } catch (err) {
      console.error(err);
    }
  }
}
;// CONCATENATED MODULE: ./app.js

// import AOS from 'aos'










window.addEventListener('DOMContentLoaded', function () {
  tooltip();
  swiperInit();
  fancyboxInit();
  dropdown();
  tabs();
  // select()
  initContactsMap();
  initBuyMap();
  var searchReset = document.querySelectorAll('[data-search-reset]');
  if (searchReset.length) {
    searchReset.forEach(function (it) {
      it.addEventListener('click', function (e) {
        var form = e.target.closest('[data-search-form]');
        form.querySelector('[data-search]').value = '';
      });
    });
  }
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			143: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [174], () => (__webpack_require__(732)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;