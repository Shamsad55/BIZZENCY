$(function(){


      $('.folioSlider').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        prevArrow:".SliderArrowLeft",
        nextArrow:".SliderArrowRight",
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3,

            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else{
          entry.target.classList.remove('show');
          } 
        });
      });
        const hiddenElements = document.querySelectorAll('.Hidden');  
      hiddenElements.forEach((el) => observer.observe(el));

});

{
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
  console.log(entry)
  if (entry.isIntersecting) {
    entry.target.classList.add('show_90');
  } else{
    entry.target.classList.remove('show_90');
    } 
  });
});
  const hiddenElements = document.querySelectorAll('.Hidden_90');  
hiddenElements.forEach((el) => observer.observe(el));
};

{
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
  console.log(entry)
  if (entry.isIntersecting) {
    entry.target.classList.add('show_Illustaitor');
  } else{
    entry.target.classList.remove('show_Illustaitor');
    } 
  });
});
  const hiddenElements = document.querySelectorAll('.Hidden_Illustaitor');  
hiddenElements.forEach((el) => observer.observe(el));
};

{
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show_85');
    } else{
      entry.target.classList.remove('show_85');
      } 
    });
  });
    const hiddenElements = document.querySelectorAll('.Hidden_85');  
  hiddenElements.forEach((el) => observer.observe(el));
  };
  
  {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add('show_Dreamweaver');
      } else{
        entry.target.classList.remove('show_Dreamweaver');
        } 
      });
    });
      const hiddenElements = document.querySelectorAll('.Hidden_Dreamweaver');  
    hiddenElements.forEach((el) => observer.observe(el));
    };
    
    {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
          entry.target.classList.add('show_75');
        } else{
          entry.target.classList.remove('show_75');
          } 
        });
      });
        const hiddenElements = document.querySelectorAll('.Hidden_75');  
      hiddenElements.forEach((el) => observer.observe(el));
      };
    
      {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
          console.log(entry)
          if (entry.isIntersecting) {
            entry.target.classList.add('show_AfterEffect');
          } else{
            entry.target.classList.remove('show_AfterEffect');
            } 
          });
        });
          const hiddenElements = document.querySelectorAll('.Hidden_AfterEffect');  
        hiddenElements.forEach((el) => observer.observe(el));
        };
        
        {
          const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
            console.log(entry)
            if (entry.isIntersecting) {
              entry.target.classList.add('show_80');
            } else{
              entry.target.classList.remove('show_80');
              } 
            });
          });
            const hiddenElements = document.querySelectorAll('.Hidden_80');  
          hiddenElements.forEach((el) => observer.observe(el));
          };
     

