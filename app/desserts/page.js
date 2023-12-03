"use client";
import Link from 'next/link';
import { useState } from 'react';
export default function Desserts() {
    const desserts = [
        { name: "Basundi", description: "Sweetened dense milk dessert flavored with cardamom", price: "$4" },
        { name: "Shrikhand", description: "Sweet dish made of strained yogurt", price: "$4" },
        { name: "Gulab Jamun", description: "Deep-fried dough balls soaked in sweet syrup", price: "$5" },
        { name: "Jalebi", description: "Sweet pretzel-shaped fried dessert", price: "$4" },
        { name: "Ras Malai", description: "Cottage cheese balls in sweetened milk", price: "$6" },
        { name: "Rasgulla", description: "Spongy cottage cheese balls in syrup", price: "$5" },
        { name: "Kaju Katli", description: "Diamond-shaped sweet made from cashew nuts", price: "$6" },
        
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
                        <li><Link href="./mains" className="m-3">Mains</Link></li>
                        
                        <li><Link href="./beverages" className="m-3">Beverages</Link></li>
                        <li><Link href="./hero" className="m-3">Home </Link></li>
                    </ul>
                    
                </nav>
            </div>

            
            <div className="flex-grow bg-white rounded-3xl shadow-lg overflow-auto">
                <div className="bg-dessert bg-cover bg-no-repeat py-10 px-10" >
                    <h1 className="text-4xl font-bold text-center text-white mb-6">Desserts</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {desserts.map((desserts, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md p-4">
                                <img src={`./images/${desserts.name}.png`} alt={desserts.name} className='h-40 w-full object-cover mb-6' />
                                <h3 className="text-xl font-medium text-gray-900">{desserts.name}</h3>
                                <p className="text-base text-gray-700">{desserts.description}</p>
                                <h3 className="text-xl font-medium text-gray-900">{desserts.price}</h3>
                                <button onClick={() => addToCart(desserts)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Add to Cart
                                </button>
                            </div>
                        ))}
                    </div>

                    <button onClick={toggleCart} className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded my-4 mx-auto block">
                    {showCart ? 'Hide Cart' : 'View Cart'}
                </button>

               
                {showCart && (
                    <div className=" p-4 bg-white rounded-lg shadow-lg">
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