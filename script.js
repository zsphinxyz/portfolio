var viewer = $("#viewer")

    // cancel button function
$("#cancel").click(function(){
    viewer.addClass('rm');
    $('body').css('overflow', 'scroll');
    $('.info_text').addClass('rm');
    $('.info_text').empty();
});


var alt;

    // click img pop up viewer 
$('.img').click(function(e){
    var current = e.currentTarget;
    alt = e.currentTarget.alt;
    $("#pop").html(current.outerHTML)
    viewer.removeClass('rm');
    $('body').css('overflow', 'hidden');
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
    var bg = $('.bg img');
    var imgs = $('.c4 img, .c3 img');
    ran = Math.round(Math.random()*imgs.length);
    console.log(ran);
    ran_img = imgs[ran].attributes[0].nodeValue;
    bg.attr('src', ran_img);
}

setInterval(ch_banner, 5000);

    // next & prev button 





/*
            --- To do ---

To add video info 
To adjust viewer size according to the screen size
- To add contact
- To write img alt
- To change banner everytime the website loads
To style the scroll bar
To scroll horizontally with mouse drag move
To add next and previous button
add animation to pop-up
To change jasmin to jasmine
To draw logos for logo designs section
To check spelling
Maybe to add a mail box to send some text from client
*/