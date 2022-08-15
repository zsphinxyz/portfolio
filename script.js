var viewer = $("#viewer");

    // cancel button function
$("#cancel").click(function(){
    viewer.addClass('rm');
    $('body').css('overflow', 'scroll');
    $('.info_text').addClass('rm');
    $('.info_text').empty();
});

let all_imgs = $('.img')
let current;
let alt;

    // click img pop up viewer 
all_imgs.click(function(e){
    current = e.currentTarget;
    var i = all_imgs.index(current);
    alt = e.currentTarget.alt;
    $("#pop").html(current.outerHTML)
    viewer.removeClass('rm');
    $('body').css('overflow', 'hidden');


        // next & prev button     
    $('#next').click(function(){
        i = all_imgs.index(current);
        current = all_imgs[i + 1]
        alt = current.alt;
        $("#pop").html(current.outerHTML)
        $('.info_text').empty();
        $('.info_text').addClass('rm');
        console.log(i)
    }) 
    
    console.log(i)
})

    // click info button
$("#info").click(function(e){
    console.log('clicked')
    if ($('.info_text').hasClass('rm')){ 
        $('.info_text').html(alt);
        $('.info_text').removeClass('rm');
    }
    else{
        $('.info_text').empty();
        $('.info_text').addClass('rm');
    }
});


    // change banner 
function ch_banner(){
    var bg = $('.bg');
    var imgs = $('.c4 img, .c3 img');
    ran = Math.round(Math.random()*(imgs.length-1));
    ran_img = imgs[ran].attributes[0].nodeValue;
    console.log(ran_img);
    bg.css('background-image', 'url('+ran_img+')');

}

$('.bg img').ready(
    setInterval(ch_banner, 5000)
)


/*
            --- To do ---

To add video info 
To adjust viewer size according to the screen size
- To add contact
- To write img alt
- To change banner everytime the website loads
responsive
To add next and previous button
add animation to pop-up
To change jasmin to jasmine
To draw logos for logo designs section
To check spelling
Maybe to add a mail box to send some text from client
*/