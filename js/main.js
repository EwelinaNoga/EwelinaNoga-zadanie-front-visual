'use strict';

//$(document).ready(function() {
//
//            var slider = $('#slider');
//            var slideShow = $('.slide-show');
//            var slideCount = $('.single-slide').length;
//            var slideWidth = 100/slideCount;
//            var slideIndex = 0;
//
//            $(".slide-show").css("width", slideCount * 70 + "%");
//
//            slideShow.find('.single-slide').each(function (index) {
//                $(this).css({
//                    "width": slideWidth + "%",
//                    "margin-left": slideWidth * index + "%",
//                });
//            });
//
//
//            $('.next-slide').click(function (event) {
//                event.preventDefault()
//                slide(slideIndex + 1)
//            });
//
//            $('.prev-slide').click(function (event) {
//                event.preventDefault()
//                slide(slideIndex - 1)
//            });
//
//            function slide(newSlideIndex) {
//
//                if (newSlideIndex < 0 || newSlideIndex >= slideCount) {
//                    return;
//                }
//
//                var caption = $('.slider-caption').eq(newSlideIndex);
//
//                caption.hide();
//
//                var marginLeft = (newSlideIndex * (-70)) + "%";
//
//                slideShow.animate({
//                    "margin-left": marginLeft
//                }, 800, function () {
//                    slideIndex = newSlideIndex
//                    caption.fadeIn('slow');
//                });
//
//            };
//    
//});
