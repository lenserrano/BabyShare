import './dropdown.js';
import './cards.js';
import '../sass/main.scss';
import {product, myProducts} from './cards.js';
import { EDEADLK } from 'constants';

const producto = document.getElementById('mas-vendidos');

producto.innerHTML = product.map(myProducts).join('');

const heart = document.querySelectorAll('.heart');
    heart.forEach(element => {
        element.addEventListener('click', (e) => { 
            const product_ = product.find( el => {
                return el.id === parseInt(e.target.dataset.productid) 
    
            });
            product_.liked = !product_.liked;
            console.log(product_.numberLikes);
            const newLikes = contLikes(product_.numberLikes, product_.liked);
            console.log(newLikes);
            product_.numberLikes = newLikes;
            console.log(product);
            vista(product_);         
        });
     });

const vista = (product) =>{
    let html = '';
    const favs = document.getElementById('likes'+product.id);
    if( product.liked == true){
        html = `<i class="fas fa-heart heart" data-productId = "${product.id}"></i>
        <span id="n-likes${product.id}">${product.numberLikes}</span></span>`

    }else{
        html = `<i class="far fa-heart heart" data-productId = "${product.id}"></i>
        <span id="n-likes${product.id}">${product.numberLikes}</span></span>`
    }
    favs.innerHTML = html;
}
 

 function contLikes(likes, isLiked){
    if( isLiked == true ){
        return likes = likes + 1;
    }else{
        return likes = likes - 1;
    }
    
 }
/* $(document).ready(function(){
    var refreshId = setInterval( function(){
        $('#counterLikes').load('index.html');
    }, 20000);
});
 */