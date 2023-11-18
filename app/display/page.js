import { useCart } from './CartContext'; // adjust the path as needed

export default function Cart() {
    const { cartItems } = useCart();

    return (
        <div className="cart-page">
            <h1 className="text-4xl font-bold text-center mb-6">Your Cart</h1>
            {cartItems.map((item, index) => (
                <div key={index} className="flex justify-between items-center mb-4">
                    <div>
                        <h3 className="text-lg">{item.name} - {item.price}</h3>
                        <p>{item.description}</p>
                    </div>
                    <span className="text-lg">Quantity: {item.quantity}</span>
                </div>
            ))}
        </div>
    );
}
