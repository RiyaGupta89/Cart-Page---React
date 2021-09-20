import React from 'react'

class CartItem extends React.Component {

    constructor() {
        super();
        this.state={
            title: 'Mobile Phone',
            price: 39999,
            qty: 1,
            img: ''
        }
    }
    increaseQuantity(){
        this.setState((prev) => {
            return{
            qty: prev.qty + 1
            }
        })
    }
    
    render() {
        // Object Destructuring
        const {title, price, qty} = this.state;
       
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={ {fontSize: 25} }>{title}</div>
                    <div style={ {color: '#777'} }>Rs. {price}</div>
                    <div style={ {color: '#777'} }>Qty: {qty}</div>
                    <div className="cart-item-actions">
                       <img className="action-icons" alt="increase" src="https://cdn-icons-png.flaticon.com/512/992/992683.png" />
                       <img className="action-icons" alt="decrease" src="https://cdn-icons-png.flaticon.com/512/992/992651.png" 
                       onClick={this.increaseQuantity.bind(this)}
                       />
                       <img className="action-icons" alt="delete" src="https://cdn-icons-png.flaticon.com/512/709/709519.png" />
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;