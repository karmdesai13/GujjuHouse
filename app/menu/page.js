import Link from 'next/link';
export default function Menu() {

    const starters = [
        { name: "KhamanDhokla", description: "Savory steamed cake made from gram flour", price: "$5" },
        { name: "Fafda-Jalebi", description: "Crunchy salty snack paired with sweet jalebi", price: "$6" },
        { name: "Patra", description: "Steamed Colocasia leaves, seasoned with spices", price: "$4" },
    ];

    const mains = [
        { name: "Undhiyu", description: "Mixed vegetable dish cooked in a traditional Gujarati style", price: "$10" },
        { name: "Gujarati-Kadhi", description: "Sweet and spicy yogurt-based curry", price: "$9" },
        { name: "Thepla", description: "Flatbread made from wheat flour and fenugreek leaves", price: "$8" },
    ];

    const desserts = [
        { name: "Basundi", description: "Sweetened dense milk dessert flavored with cardamom", price: "$4" },
        { name: "Shrikhand", description: "Sweet dish made of strained yogurt", price: "$4" },
        { name: "Gulab Jamun", description: "Deep-fried dough balls soaked in sweet syrup", price: "$5" }];

        const beverages = [
            { name: "Masala Chai", description: "Spiced milk tea", price: "$3" },
            { name: "Buttermilk", description: "Refreshing curd-based drink", price: "$2" },
            { name: "Lassi", description: "Yogurt-based milkshake", price: "$4" }];

    return (
        <div className=" min-h-screen  bg-orange-600" >
            <header className="text-white ">
                <div className=" flex flex-wrap p-5 items-center justify-between">
          
                    <div className="flex items-center">
                        <img src="./images/Food2.png" alt="logo" className="rounded-full h-12 w-12 mr-3" /> 
                        <span className="text-3xl font-bold">Gujju House</span>
                    </div>
          
                    <nav className="flex flex-wrap text-base items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" height="15" width="40" viewBox="0 0 576 512"><path fill="#ffffff" d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>
                    <a  href="./hero" className="mr-5  cursor-pointer hover:underline transition-transform hover:scale-125 duration-300">Home</a>
                    
                    <a   href="./menu" className="mr-5 cursor-pointer hover:underline transition-transform hover:scale-125 duration-300">Menu</a>
                    <a  href="./about" className="mr-5 hover:underline transition-transform hover:scale-125 duration-300">About Us</a>
                    <a className="hover:underline transition-transform hover:scale-125 duration-300">Contact</a>
                    </nav>
                </div>
            </header>
            <div className=" flex items-center justify-center flex-col text-white">
            <h1 className="text-5xl  mt-5">Menu</h1>
            <p className=" text-xl mt-5">Experience the taste of authentic Gujarati cuisine.</p>
            </div>

        
        

        <div className=" bg-starters bg-cover bg-no-repeat mr-5 mt-5 ml-5 px-10 py-10 bg-white rounded-3xl text-white ">
                <h1 className="text-4xl font-bold text-center mb-6">Starters</h1>
                <div className="flex flex-wrap justify-center gap-4">
                    {starters.map((starter) => (
                        <div key={starter.name} className="bg-white rounded-lg shadow-md p-4 max-w-sm">
                            <img src={`./images/${starter.name}.png`} className='h-40 mb-6 transition-transform hover:scale-110 duration-300' />
                            <h3 className="text-xl font-medium text-gray-900">{starter.name}</h3>
                            <p className="text-base text-gray-700">{starter.description}</p>
                            <h3 className="text-xl font-medium text-gray-900">{starter.price}</h3>
                        </div>
                    ))}
                </div>

        <Link href="./starters" className=" flex mt-5 ml-60 mr-60  justify-center rounded-xl bg-blue-600 p-5 
                    transition-transform hover:scale-110 hover:underline duration-700">More Starters</Link>
                
        </div>

            
            <div className="bg-main bg-cover bg-no-repeat  mr-5 mt-5 ml-5 px-10 py-10  bg-white rounded-3xl text-white " >
                <h1 className="text-4xl font-bold text-center mb-6">Mains</h1>
                <div className="flex flex-wrap justify-center gap-4">
                    {mains.map((main) => (
                        <div key={main.name} className="bg-white rounded-lg shadow-md p-4 max-w-sm">
                            <img src={`./images/${main.name}.png`} className='h-40 mb-6 transition-transform hover:scale-110 duration-300' />
                            <h3 className="text-xl font-medium text-gray-900">{main.name}</h3>
                            <p className="text-base text-gray-700">{main.description}</p>
                            <h3 className="text-xl font-medium text-gray-900">{main.price}</h3>
                        </div>
                    ))}
                </div>
                <Link href="./mains" className=" flex mt-5 ml-60 mr-60  justify-center rounded-xl bg-blue-600 p-5 
                    transition-transform hover:scale-110 hover:underline duration-700">More Main Course</Link>
            </div>

            <div className=" bg-dessert bg-cover bg-no-repeat mr-5 mt-5 ml-5 px-10 py-10  bg-white rounded-3xl  text-white" >
                <h1 className="text-4xl font-bold text-center  mb-6">Desserts</h1>
                <div className="flex flex-wrap justify-center gap-4">
                    {desserts.map((desserts) => (
                        <div key={desserts.name} className="bg-white rounded-lg shadow-md p-4 max-w-sm">
                            <img src={`./images/${desserts.name}.png`} className='h-40 mb-6 transition-transform hover:scale-110 duration-300' />
                            <h3 className="text-xl font-medium text-gray-900">{desserts.name}</h3>
                            <p className="text-base text-gray-700">{desserts.description}</p>
                            <h3 className="text-xl font-medium text-gray-900">{desserts.price}</h3>
                        </div>
                    ))}
                </div>
                
                <Link href="./desserts" className=" flex mt-5 ml-60 mr-60  justify-center rounded-xl bg-blue-600 p-5
                    transition-transform hover:scale-110 hover:underline duration-700">More Desserts</Link>
        
            </div>

            

            <div className=" bg-beverage bg-cover bg-no-repeat mr-5 mt-5 ml-5 px-10 py-10  bg-white rounded-3xl text-white ">
                <h1 className="text-4xl font-bold text-center  mb-6">Beverages</h1>
                <div className="flex flex-wrap justify-center gap-4">
                    {beverages.map((beverages) => (
                        <div key={beverages.name} className="bg-white rounded-lg shadow-md p-4 max-w-sm">
                            <img src={`./images/${beverages.name}.png`} className='h-40 mb-6 transition-transform hover:scale-110 duration-300' />
                            <h3 className="text-xl font-medium text-gray-900">{beverages.name}</h3>
                            <p className="text-base text-gray-700">{beverages.description}</p>
                            <h3 className="text-xl font-medium text-gray-900">{beverages.price}</h3>
                        </div>
                    ))}
                </div>
                <Link href="./beverages" className=" flex mt-5 ml-60 mr-60  justify-center rounded-xl bg-blue-600 p-5 
                    transition-transform hover:scale-110 hover:underline duration-700">More beverages</Link>
            </div>
        </div>
    
    );
}
