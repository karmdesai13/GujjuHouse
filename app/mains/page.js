"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function Mains() {
    const mains = [
        { name: "Undhiyu", description: "Mixed vegetable dish cooked in a traditional Gujarati style", price: "$10" },
        { name: "Gujarati-Kadhi", description: "Sweet and spicy yogurt-based curry", price: "$9" },
        { name: "Thepla", description: "Flatbread made from wheat flour and fenugreek leaves", price: "$8" },
        { name: "Aloo Paratha", description: "Whole wheat flatbread stuffed with spiced potatoes", price: "$7" },
        { name: "Vegetable Pulao", description: "Rice cooked with mixed vegetables and spices", price: "$9" },
        { name: "Dal Dhokli", description: "Wheat flour dumplings simmered in lentil curry", price: "$10" },
        { name: "Palak Paneer", description: "Cottage cheese in a thick spinach gravy", price: "$11" },
        { name: "Chole Bhature", description: "Spicy chickpeas curry served with fluffy bread", price: "$10" },
        { name: "Paneer Tikka", description: "Marinated and grilled paneer cubes", price: "$12" },
        { name: "Khichu", description: "Steamed rice flour dough served with oil and spices", price: "$7" }
    ];
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        const existingItem = cart.find(cartItem => cartItem.name === item.name);
        if (existingItem) {
            setCart(cart.map(cartItem => 
                cartItem.name === item.name ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
            ));
        } else {
            setCart([...cart, { ...item, quantity: 1 }]);
        }
    };

    const removeFromCart = (itemName) => {
        setCart(cart.filter(cartItem => cartItem.name !== itemName));
    };

    const increaseQuantity = (item) => {
        setCart(cart.map(cartItem => 
            cartItem.name === item.name ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        ));
    };

    const decreaseQuantity = (item) => {
        setCart(cart.map(cartItem => 
            cartItem.name === item.name && cartItem.quantity > 1 ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
        ));
    };


    

    const [showCart, setShowCart] = useState(false); 

    const toggleCart = () => {
        setShowCart(!showCart);  
    };


   

    return(
        <div className="flex h-screen">
            
            <div className="sidebar bg-orange-500 text-white w-64 p-5">
                <h2 className="text-xl font-semibold mb-5">Menu Categories</h2>
                <nav>
                    <ul className="space-y-3">
                    
                        <li><Link href="./starters" className="m-3 ">Starters</Link></li>
                        
                        <li><Link href="./desserts" className="m-3">Desserts</Link></li>
                        <li><Link href="./beverages" className="m-3">Beverages</Link></li>
                        <li><Link href="./hero" className="m-3">Home </Link></li>
                    </ul>
                    
                </nav>
            </div>

           
            <div className="flex-grow bg-white rounded-3xl  overflow-auto">
                <div className=" bg-main bg-cover bg-no-repeat py-10 px-10" >
                    <h1 className="text-4xl font-bold text-center text-white mb-6">Mains</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {mains.map((main, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md p-4 space-y-2">
                                <img src={`./images/${main.name}.png`} alt={main.name} className='h-40 w-full object-cover mb-6' />
                                <h3 className="text-xl font-medium text-gray-900">{main.name}</h3>
                                <p className="text-base text-gray-700">{main.description}</p>
                                <h3 className="text-xl font-medium text-gray-900">{main.price}</h3>
                                <button onClick={() => addToCart(main)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded relative">
                                    Add to Cart
                                </button>
                            </div>
                        ))}
                    </div>

                    <button 
                    onClick={toggleCart}
                    className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded my-4 mx-auto block">
                    {showCart ? 'Hide Cart' : 'View Cart'}
                </button>

                
                {showCart && (
                    <div className="container mx-auto p-4 bg-white rounded-lg shadow-lg">
                        <h2 className="text-2xl mb-4">Your Cart</h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {cart.map((item, index) => (
                                <li key={index} className="bg-white rounded-lg shadow-md p-4">
                                    <img src={`./images/${item.name}.png`} alt={item.name} className='h-40 w-full object-cover mb-6' />
                                    <h3 className="text-xl font-medium text-gray-900">{item.name}</h3>
                                    <p className="text-base text-gray-700">{item.description}</p>
                                    <h3 className="text-xl font-medium text-gray-900 mb-3">{item.price}</h3>
                                    <div className="flex items-center justify-between mb-2">
                            <button onClick={() => decreaseQuantity(item)} className="bg-red-500 text-white px-2 py-1">-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => increaseQuantity(item)} className="bg-green-500 text-white px-2 py-1">+</button>
                        </div>
                        <button onClick={() => removeFromCart(item.name)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                            Remove
                        </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                    
                
            </div>
        </div>
        </div>
    )
}