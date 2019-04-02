var colMenu = document.getElementById('colMenu');
var colButton = document.getElementById('colButton');
colButton.addEventListener('click', function(){
    colMenu.classList.toggle('hidden');
});

var profMenu = document.getElementById('profMenu');
var profButton = document.getElementById('profButton');
profButton.addEventListener('click', function(){
    profMenu.classList.toggle('hidden');
});