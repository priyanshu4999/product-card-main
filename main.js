  data = {
    imageDevice : "./images/image-product-mobile.jpg" ,
    imageMobile: "./images/image-product-desktop.jpg",
    buttonIcon : "./images/icon-cart.svg",
    category : "Perfume",
    brand : "Gabrielle Essence Eau De Parfum",
    tagline : `A floral, solar and voluptuous interpretation composed by Olivier Polge, 
  Perfumer-Creator for the House of CHANEL.`,
    offer : "$149.99",
    price : "$169.99",
    cart :  "Add to Cart"
}


const app = document.createElement("main")
const footer = document.createElement("footer")
app.innerHTML = `

    <article class="card">
        <figure class = "card__image" >
            <picture>
            <source srcset=${data.imageDevice} media="(max-width : 375px)">
            <img src=${data.imageMobile}>
            </picture>
        </figure>
        <section class="card__section">
          <span class="card__category">${data.category}</span>
          <h1 class="card__title">${data.brand}</h1>
          <p class="card__description">${data.tagline}</p>
          <div class="card__pricing">
              <h1 class="card__price--offer">${data.offer}</h1>
              <h4 class="card__price"><s>${data.price}</s></h4>
          </div>
          <button class ="button"><img src=${data.buttonIcon} alt = "#" class="button__icon"/>
            <span class="button__text">${data.cart}</span></button>
        </section>
    
    </article>
`

footer.innerHTML = `
  <footer class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Your Name Here</a>.
  </footer>
`
document.body.appendChild(app)
document.body.appendChild(footer)
