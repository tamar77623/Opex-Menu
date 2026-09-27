let p1 = document.getElementById('p1')
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');
let p4 = document.getElementById('p4');
let burgerimg = document.getElementById('burgerimg');
let pizzaimg = document.getElementById('pizzaimg');
let pastaimg = document.getElementById('pastaimg');
let saladimg = document.getElementById('saladimg');
let drinkimg = document.getElementById('drinkimg');
p1.onclick = function(){
    pizzaimg.style.display = 'none';
    pastaimg.style.display = 'none';
    saladimg.style.display = 'none';
    drinkimg.style.display = 'none'
    burgerimg.style.display = 'block'
}
p2.onclick = function(){
    pizzaimg.style.display = 'block';
    pastaimg.style.display = 'none';
    saladimg.style.display = 'none';
    drinkimg.style.display = 'none';
    burgerimg.style.display = 'none'
}
p3.onclick = function(){
    pizzaimg.style.display = 'none';
    pastaimg.style.display = 'none';
    saladimg.style.display = 'block';
    drinkimg.style.display = 'none';
    burgerimg.style.display = 'none'
}
p4.onclick = function(){
    pizzaimg.style.display = 'none';
    pastaimg.style.display = 'none';
    saladimg.style.display = 'none';
    drinkimg.style.display = 'block';
    burgerimg.style.display = 'none'
}