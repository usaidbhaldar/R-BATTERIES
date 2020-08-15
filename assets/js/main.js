

//Glider for Reviews section
new Glider(document.querySelector('.review-glider'), {
    slidesToShow: 3,
    draggable: true,
    dots: '#review-dots',
    rewind: true,
    arrows: {
        prev: '.review-glider-prev ',
        next: '.review-glider-next '
    },
    responsive: [
        {
          // screens greater than >= 775px
          breakpoint: 350,
          settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: 1,
            slidesToScroll: 1,
            itemWidth: 150,
            duration: 0.25
          }
        },{
          // screens greater than >= 1024px
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            itemWidth: 150,
            duration: 0.25
          }
        },{
          // screens greater than >= 1024px
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            itemWidth: 150,
            duration: 0.25
          }
        }
      ],
});

//Glider for blgos section 
new Glider(document.querySelector('.blogs-glider'), {
  slidesToShow: 3,
  slidesToScroll: 3,
  draggable: true,
  dots: '#blogs-dots',
  rewind: true,
  arrows: {
    prev: '.blogs-glider-prev',
    next: '.blogs-glider-next',
  },
  responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 350,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 1,
          slidesToScroll: 1,
          itemWidth: 150,
          duration: 0.25
        }
      },{
        // screens greater than >= 1024px
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          itemWidth: 150,
          duration: 0.25
        }
      },{
        // screens greater than >= 1024px
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          itemWidth: 150,
          duration: 0.25
        }
      }
    ],
})