(() => {
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const slides = document.querySelectorAll('.slider_img');
    const number = document.querySelector('.number');
    const imgSlides = document.querySelectorAll('.imgSlide');

    const animItems = document.querySelectorAll('.animate');

    let index = 0;

    let slidesData = [
        {
            src: "./img/slider.jpg",
            index: "01"
        },
        {
            src: "./img/slider1.jpg",
            index: "02"
        }
    ];


    function onScrollElem(entry) {
        entry.forEach(el => {
          if (el.isIntersecting) {
            el.target.classList.add('element-show');
          }
          else {
            el.target.classList.remove('element-show');
            }
        });
      }

      let options = { threshold: [0.6] };
      let observer = new IntersectionObserver(onScrollElem, options);
      for (let elm of animItems) {
        observer.observe(elm);
      }


    const activSlide = el => {

        for (let img of imgSlides) {
            let slideCerrent = slidesData.map((el) => el.src)
            img.src = slideCerrent[el];
        }

        for (let slide of slides) {
            slide.classList.remove('active')
        }

        let numberSlide = slidesData.map((el) => el.index)
        number.innerHTML = numberSlide[el];

        slides[el].classList.add('active');
    }

    const prepareSlide = ind => {
        activSlide(ind);
    }

    const nextSlide = () => {
        if (index === slides.length - 1) {
            index = 0;
            prepareSlide(index);
        }
        else {
            index++;
            prepareSlide(index);
        }
    }

    const prevSlide = () => {
        if (index === 0) {
            index = slides.length - 1;
            prepareSlide(index);
        }
        else {
            index--;
            prepareSlide(index);
        }
    }

    nextButton.addEventListener('click', () => {
        nextSlide();
    });

    prevButton.addEventListener('click', () => {
        prevSlide();
    })
    
})();

