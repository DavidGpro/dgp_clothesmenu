const selectElement = document.querySelector('.slider');
const toggleIcon = document.getElementById('icon-fa');
var clothe = null

$(function() {
    window.addEventListener('message', function(event) {
        if (event.data.type == "openNUI") {
            $("#header").css('visibility', 'visible');
            $("#footer").css('visibility', 'visible');
            $("#icon").css('visibility', 'visible');
            $("#cross").css('visibility', 'visible');
        } else if (event.data.type == "setClothesState") {
            setClothesState(event.data.value)
        }
    });
});

$('#icon').click(function() {
    if (toggleIcon.classList.contains('fa-plus-square')) {
        $("#header").css('visibility', 'hidden');
        $("#footer").css('visibility', 'hidden');
        $("#catalog").css('visibility', 'visible');
        toggleIcon.classList.replace('far', 'fas');
        toggleIcon.classList.replace('fa-plus-square', 'fa-arrow-left');
    } else {
        $("#header").css('visibility', 'visible');
        $("#footer").css('visibility', 'visible');
        $("#catalog").css('visibility', 'hidden');
        toggleIcon.classList.replace('fas', 'far');
        toggleIcon.classList.replace('fa-arrow-left', 'fa-plus-square');
    }
});

$('.button-style').click(function() {
    console.log($(this).attr("data-info"))
    let image = $(this).attr("data-info")
    clothe = image
    $('#indicator-image').css('background-image', 'url(img/' + image + '.png');
    $("#header").css('visibility', 'visible');
    $("#footer").css('visibility', 'visible');
    $("#catalog").css('visibility', 'hidden');
    toggleIcon.classList.replace('fas', 'far');
    toggleIcon.classList.replace('fa-arrow-left', 'fa-plus-square');

    $.post('http://dgp_clothesmenu/setClothesState', JSON.stringify({ name: image }))
});

$('#cross').click(function() {
    $("#cross").css('visibility', 'hidden');
    $("#header").css('visibility', 'hidden');
    $("#footer").css('visibility', 'hidden');
    $("#catalog").css('visibility', 'hidden');
    $("#icon").css('visibility', 'hidden');
    $("#indicator-image").css("background-image", "");

    $.post('http://dgp_clothesmenu/close', JSON.stringify({}))
});



selectElement.addEventListener('change', (event) => {
    if ($('#indicator-image').css('background-image') != 'none') {
        if (clothe == 'visor' || clothe == 'hat' || clothe == 'glasses' || clothe == 'ear' || clothe == 'watch' || clothe == 'bracelet') {
            let func = 'ToggleProps(' + clothe + ')'
            $.post('http://dgp_clothesmenu/changeClothesState', JSON.stringify({ type: clothe, func: func }))
        } else {
            let func = 'ToggleClothing(' + clothe + ')'
            $.post('http://dgp_clothesmenu/changeClothesState', JSON.stringify({ type: clothe, func: func }))
        }
    }
});

function setClothesState(type) {
    $(".slider").val(type)
}