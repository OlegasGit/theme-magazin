//Init for my components

$( function() {
	// Init tabs
    $( "#tabs" ).tabs();
    $( "#tabs-product" ).tabs();
  } );


$('.medium-card').on('click', function(){
    // Find cards and remove class row-card
    $('.all-items-container .card').removeClass('row-card');
    $('.all-items-container .col-4').removeClass('col-12');
    $('.all-items-container .card-img').removeClass('d-none');
    $('.all-items-container .row-card-img').removeClass('d-block');
});

$('.row-card').on('click', function(){
    // Find cards and add class row-card
    $('.all-items-container .card').addClass('row-card');
    $('.all-items-container .col-4').addClass('col-12');
    $('.all-items-container .card-img').addClass('d-none');
    $('.all-items-container .row-card-img').addClass('d-block');
});





// Init for all-new-items page
$('.grid-thumbs').on('click', function(){
    // Find cards and remove class row-card
    $('.all-items-container .card').removeClass('row-card');
    $('.all-items-container .col-4').removeClass('col-12');
    $('.all-items-container .card-img').removeClass('d-none');
    $('.all-items-container .row-card-img').removeClass('d-block');
});

$('.grid-list').on('click', function(){
    // Find cards and add class row-card
    $('.all-items-container .card').addClass('row-card');
    $('.all-items-container .col-4').addClass('col-12');
    $('.all-items-container .card-img').addClass('d-none');
    $('.all-items-container .row-card-img').addClass('d-block');
});
