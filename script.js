var viewer = $("#viewer");

    // cancel button
$("#cancel").click(function(){
    viewer.addClass('rm');
    $('body').css('overflow', 'scroll');
    $('.info_text').addClass('rm');
    $('.info_text').empty();
});

let all_imgs = $('.img')
let current;
let alt;

function next_item_of_array(li, item){
    current_item = li.index(item)
    return(li[current_item + 1]);
}

function prev_item_of_array(li, item){
    current_item = li.index(item)
    return(li[current_item - 1]);
}

    // click img pop up viewer 
all_imgs.click(function(e){
    current = e.currentTarget;
    alt = e.currentTarget.alt;
    $("#pop").html(current.outerHTML)
    viewer.removeClass('rm');
    $('body').css('overflow', 'hidden');

})

    // next button 
$('#next').click(function(){
    let next_item = next_item_of_array(all_imgs, current);

    if( all_imgs.index(current) + 1 >= all_imgs.length ){
        current = all_imgs[0];
    }
    else{
        current = next_item;
    }

    $("#pop").html(current.outerHTML)
    alt = current.alt;
    $('.info_text').empty();
    $('.info_text').addClass('rm');
})

    // prev button 
$('#prev').click(function(){
    let prev_item = prev_item_of_array(all_imgs, current);

    if( all_imgs.index(current) <= 0 ){
        current = all_imgs.last()[0];
    }
    else{
        current = prev_item;
    }

    $("#pop").html(current.outerHTML)
    alt = current.alt;
    $('.info_text').empty();
    $('.info_text').addClass('rm');
})


    // click info button
$("#info").click(function(e){
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
    bg.css('background-image', 'url('+ran_img+')');
}

$('.intro .bg').ready(
    setInterval(ch_banner, 5000)
)

    // width of the viewer imgs

var w = window.innerWidth;
var h = window.innerHeight;

console.log(w, h);


/*
            --- To do ---

To add video info 
To adjust viewer size according to the screen size
- To add contact
- To write img alt
- To change banner everytime the website loads
- responsive
- To add next and previous button
add animation to pop-up
- To change jasmin to jasmine
- To draw logos for logo designs section
- To check spelling
Maybe to add a mail box to send some text from client
*/