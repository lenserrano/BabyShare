import myImage1 from '../img/perfiles/foto_perfil1.png'
import myImage2 from '../img/perfiles/foto_perfil2.png'
export const product = [
    {
        id: 1,
        imgSrcPerfil: myImage1,
        nameSeller: 'len-serrano',
        imgSrcProduct: 'https://picsum.photos/200',
        price: '$100.00',
        liked : true,
        numberLikes: 15,
        description: 'Artículo'
    },
    {
        id: 2,
        imgSrcPerfil: myImage2,
        nameSeller: 'gris-serrano',
        imgSrcProduct: 'https://picsum.photos/200',
        price: '$200.00',
        liked : false,
        numberLikes: 1,
        description: 'Artículo'
    }
]

export const myProducts = ({id, imgSrcPerfil,  nameSeller, imgSrcProduct, price, liked, numberLikes, description}) =>  
{
    return `<div class="card">
                <div class="seller-details">
                    <img src="${imgSrcPerfil}" alt="" class="avatar">
                    <p class="seller">${nameSeller}</p>
                </div>
                <figure class="favorites">
                    <img src="${imgSrcProduct}" alt="ropa">
                    <figcaption class="details">
                        <div class="price-like">
                            <span class="precio">${price}</span>
                            <span class="likes" id = "likes${id}" ><i class="${liked ? 'fas' : 'far'} fa-heart heart" data-productId = "${id}"></i> <span id="n-likes${id}">${numberLikes}</span></span>
                        </div>
                        <div class="name">
                            <span class="descripcion">${description}</span> 
                        </div>  
                    </figcaption>
                </figure> 
            </div>`
}


