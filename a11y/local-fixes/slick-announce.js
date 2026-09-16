// Accessibility Fix for Carousels - Spell

(() => {

    const carousels = document.querySelectorAll(".a11y-carousel-fix");

    carousels.forEach((carousel) => {

        window.jQuery(carousel).on("afterChange", (event, slick, currentSlide) => {

            const activeSlide = slick.$slides[currentSlide];
            const img = activeSlide.querySelector("img");
            const slideText = img ? (img.alt.trim() ?? "") : (activeSlide.querySelector(".a11y-text-carousel-annc")?.textContent.trim() ?? "");
            const slideNumber = currentSlide + 1;
            const totalSlides = slick.slideCount;

            const ariaAnnc = document.querySelector("#magicbullet-message");

            if(ariaAnnc) {

                ariaAnnc.textContent = `Slide ${slideNumber} of ${totalSlides}. ${slideText}`;
            
            }

        });

    });

})();