import './Main.css';
import React from 'react';

const Main = (props) => {


    const AddToCart = props.AddToCart;

    const Products = props.Data;

    const productMap = Products.map((Items) => {
        return (

            <div className='Products' key={Items.id}>
                <div className='P-Image'>
                    <img src={Items.image} alt={Items.title} />
                </div>
                <div className='P-DetailDiv'>
                    <div className='P-Title'>
                        {Items.title}
                    </div>
                    <br />
                    <div className='P-Price'>
                        <svg xmlns="http://www.w3.org/2000/svg" strokeWidth="1" stroke="#34a36b" width="18" height="18" fill="currentColor" className="bi bi-currency-rupee" viewBox="0 -3.5 15 18">
                            <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
                        </svg>
                        {Items.price.toLocaleString()}
                    </div>
                    <br />
                    <div className='Description'>
                        {Items.description}
                    </div>
                </div>
                <button onClick={() => AddToCart(Items)}>ADD TO CART</button>
            </div >

        )
    }
    );

    return (
        <div className='ProductMain'>
            {productMap}
        </div>
    );
};
export default Main;