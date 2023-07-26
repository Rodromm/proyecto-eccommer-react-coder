import { Link } from "react-router-dom"

export const CartItem = ({id, name, img, price, stock}) => {
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg" />
            </picture>
            <section>
                <p className="info"> Precio: ${price} </p>
                <p className="info"> stock disponible {stock} </p>
            </section>
            <footer className="ItemFooter">
               <Link to={`/item/${id} `} className='Option'> Ver detalle </Link>
            </footer>
        </article>
    )
}