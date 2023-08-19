"use strict";

(function () {
  var prevButton = document.getElementById('prev');
  var nextButton = document.getElementById('next');
  var slides = document.querySelectorAll('.slider_img');
  var number = document.querySelector('.number');
  var imgSlides = document.querySelectorAll('.imgSlide');
  var animItems = document.querySelectorAll('.animate');
  var index = 0;
  var slidesData = [{
    src: "./img/slider.jpg",
    index: "01"
  }, {
    src: "./img/slider1.jpg",
    index: "02"
  }];

  function onScrollElem(entry) {
    entry.forEach(function (el) {
      if (el.isIntersecting) {
        el.target.classList.add('element-show');
      } else {
        el.target.classList.remove('element-show');
      }
    });
  }

  var options = {
    threshold: [0.5]
  };
  var observer = new IntersectionObserver(onScrollElem, options);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = animItems[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var elm = _step.value;
      observer.observe(elm);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var activSlide = function activSlide(el) {
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = imgSlides[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var img = _step2.value;
        var slideCerrent = slidesData.map(function (el) {
          return el.src;
        });
        img.src = slideCerrent[el];
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
          _iterator2["return"]();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = slides[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var slide = _step3.value;
        slide.classList.remove('active');
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
          _iterator3["return"]();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }

    var numberSlide = slidesData.map(function (el) {
      return el.index;
    });
    number.innerHTML = numberSlide[el];
    slides[el].classList.add('active');
  };

  var prepareSlide = function prepareSlide(ind) {
    activSlide(ind);
  };

  var nextSlide = function nextSlide() {
    if (index === slides.length - 1) {
      index = 0;
      prepareSlide(index);
    } else {
      index++;
      prepareSlide(index);
    }
  };

  var prevSlide = function prevSlide() {
    if (index === 0) {
      index = slides.length - 1;
      prepareSlide(index);
    } else {
      index--;
      prepareSlide(index);
    }
  };

  nextButton.addEventListener('click', function () {
    nextSlide();
  });
  prevButton.addEventListener('click', function () {
    prevSlide();
  });
})();