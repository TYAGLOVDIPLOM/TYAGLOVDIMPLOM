function imageComparison(selector) {
    let comparison = $(selector)
        .addClass('image-comparison')
        .prepend('<div class="image-comparison__before"></div>')
        .append('<button class ="image-comparison__slider"></button>');

    let images = comparison
        .find('img')
        .addClass('image-comparison__image')
        .css('max-width', comparison.width());

    let before = comparison
        .find('.image-comparison__before')
        .append(images.eq(0));

    comparison
        .find('.image-comparison__slider')
        .on('dragstart', () => false)
        .on('mousedown', function (e) {
            let slider = $(this);

            let doc = $(document).on('mousemove', (e) => {
                let offset = e.pageX - comparison.position().left;
                let width = comparison.width();

                if (offset < 0) offset = 0;
                if (offset > width) offset = width;

                slider.css('left', offset + 'px');
                before.css('width', offset + 'px');
            });

            doc.on('mouseup', () => doc.off('mousemove'));
        });        
}

imageComparison('#image-comparison');
imageComparison('#image-comparison2');
imageComparison('#image-comparison3');



document.getElementById("pesok").addEventListener("click", function() {
    window.location.href = "Forma.html";;
  });

  document.getElementById("visotka").addEventListener("click", function() {
    window.location.href = "Forma.html";;
  });

  document.getElementById("poroshok").addEventListener("click", function() {
    window.location.href = "Forma.html";;
  });


//добавление анимации сролла

gsap.registerPlugin(ScrollTriger, ScrollSmoother)

ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 1.5,
    effects: true
})