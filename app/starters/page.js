"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function Starters() {
    // Sample dishes for each category
    const starters = [
        { name: "KhamanDhokla", description: "Savory steamed cake made from gram flour", price: "$5" },
        { name: "Fafda-Jalebi", description: "Crunchy salty snack paired with sweet jalebi", price: "$6" },
        { name: "Patra", description: "Steamed Colocasia leaves, seasoned with spices", price: "$4" },
        { name: "Gathiya", description: "Deep-fried and spiced chickpea flour snack", price: "$3" },
        { name: "Khandvi", description: "Rolled, bright yellow snack made of gram flour", price: "$4" },
        { name: "Dhokla", description: "Fermented rice and chickpeas snack", price: "$5" },
        { name: "Pani Puri", description: "Hollow puri filled with a mixture of flavored water", price: "$4" },
        { name: "Sev Khamani", description: "Spicy grated steamed cake topped with sev", price: "$5" },
        { name: "Dal Vada", description: "Crispy deep-fried lentil fritters", price: "$4" },
        { name: "Chakri", description: "Spiral-shaped savory snack", price: "$3" }
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

    const [showCart, setShowCart] = useState(false);  // New state for toggling cart visibility

    const toggleCart = () => {
        setShowCart(!showCart);  // Toggle the cart visibility
    };

   

    

    
    

   

    return(
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="sidebar bg-orange-500 text-white w-64 p-5">
                <h2 className="text-xl font-semibold mb-5">Menu Categories</h2>
                <nav>
                    <ul className="space-y-3">
                    
                        <li><Link href="./starters" className="m-3 ">Starters</Link></li>
                        <li><Link href="./mains" className="m-3">Mains</Link></li>
                        <li><Link href="./desserts" className="m-3">Desserts</Link></li>
                        <li><Link href="./beverages" className="m-3">Beverages</Link></li>
                        <li><Link href="./hero" className="m-3">Home Page</Link></li>

                    </ul>
                    
                </nav>
            </div>

            {/* Menu Content */}
            <div className="flex-grow bg-white rounded-3xl shadow-lg overflow-auto">
                <div className="bg-cover bg-no-repeat py-10 px-10" style={{ backgroundImage: "url('./images/Starters.png')" }}>
                    <h1 className="text-4xl font-bold text-center text-white mb-6">Starters</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {starters.map((starters, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md p-4">
                                <img src={`./images/${starters.name}.png`} alt={starters.name} className='h-40 w-full object-cover mb-6' />
                                <h3 className="text-xl font-medium text-gray-900">{starters.name}</h3>
                                <p className="text-base text-gray-700">{starters.description}</p>
                                <h3 className="text-xl font-medium text-gray-900">{starters.price}</h3>
                                <button 
                onClick={() => addToCart(starters)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Add to Cart
            </button>
                            </div>
                        ))}
                    </div>

                    <button 
                    onClick={toggleCart}
                    className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded my-4 mx-auto block"
                >
                    {showCart ? 'Hide Cart' : 'View Cart'}
                </button>

                {/* Cart Section - Conditional Rendering */}
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
                        <button 
        onClick={() => removeFromCart(item.name)}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
    >
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
        
    );

                            }