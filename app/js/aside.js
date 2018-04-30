let asideBtn = $('.mobile-aside-toggle');
let main = $('#main');
let overlay = $('.overlay');
let body = $('body');
let close = $('.close-icon');

asideBtn.on('click', function(e){
    main.toggleClass('show-aside');
    body.toggleClass('overflow');
});

overlay.on('click', function(e){
    main.toggleClass('show-aside');
    body.toggleClass('overflow');
});

close.on('click', function(e){
    main.toggleClass('show-aside');
    body.toggleClass('overflow');
});