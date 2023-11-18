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
            <header className="text-white body-font">
                <div className="container mx-auto flex flex-wrap p-5 md:flex-row items-center justify-between">
          
                    <div className="flex items-center">
                        <img src="./images/Food2.png" alt="logo" className="rounded-full h-12 w-12 mr-3" /> 
                        <span className="text-3xl font-bold">Gujju House</span>
                    </div>
          
                    <nav className="flex flex-wrap text-base">
                    <a  href="./hero" className="mr-5  cursor-pointer hover:underline transition-transform hover:scale-125 duration-300">Home</a>
                    <a   href="./menu" className="mr-5 cursor-pointer hover:underline transition-transform hover:scale-125 duration-300">Menu</a>
                    <a  href="./about" className="mr-5 hover:underline transition-transform hover:scale-125 duration-300">About Us</a>
                    <a className="hover:underline transition-transform hover:scale-125 duration-300">Contact</a>
                    </nav>
                </div>
            </header>
            <div className=" flex items-center justify-center flex-col">
            <h1 className="text-5xl text-white mt-5">Menu</h1>
            <p className="text-white text-xl mt-5">Experience the taste of authentic Gujarati cuisine.</p>
            </div>

        
        

        <div className=" mr-5 mt-5 ml-5 px-10 py-10 bg-white rounded-3xl " style={{ backgroundImage: "url('./images/Starters.png')"
        ,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat" }}>
                <h1 className="text-4xl font-bold text-center text-white mb-6">Starters</h1>
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

                <Link href="./starters" className=" flex mt-5 ml-60 mr-60  justify-center rounded-xl bg-blue-600 p-5 text-white
                    transition-transform hover:scale-110 hover:underline duration-700">More Starters</Link>
                
            </div>

            
            <div className="  mr-5 mt-5 ml-5 px-10 py-10  bg-white rounded-3xl shadow-lg" style={{ backgroundImage: "url('./images/Main.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"  }}>
                <h1 className="text-4xl font-bold text-center text-white mb-6">Mains</h1>
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
                <Link href="./starters" className=" flex mt-5 ml-60 mr-60  justify-center rounded-xl bg-blue-600 p-5 text-white
                    transition-transform hover:scale-110 hover:underline duration-700">More Main Course</Link>
            </div>

            <div className="  mr-5 mt-5 ml-5 px-10 py-10  bg-white rounded-3xl shadow-lg" style={{ backgroundImage: "url('./images/D.png')" ,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat" }}>
                <h1 className="text-4xl font-bold text-center text-white mb-6">Desserts</h1>
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
                
            <a href="./desserts"
               className="border-0 outline outline-2 outline-white bg-black text-white outline-offset-0 cursor-pointer text-lg leading-10 max-w-[160px] w-full tracking-wider font-semibold relative no-underline uppercase flex justify-center transition-all duration-550 ease-in-out hover:border-2 hover:border-[#FF9950] hover:outline-transparent hover:outline-offset-4 hover:text-[#FF9950]"
               title="Learn">
                More 
            </a>
        
            </div>

            

            <div className="  mr-5 mt-5 ml-5 px-10 py-10  bg-white rounded-3xl shadow-lg" style={{ backgroundImage: "url('./images/B.png')" ,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"   }}>
                <h1 className="text-4xl font-bold text-center text-white mb-6">Beverages</h1>
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
                <Link href="./beverages" className=" flex mt-5 ml-60 mr-60  justify-center rounded-xl bg-blue-600 p-5 text-white
                    transition-transform hover:scale-110 hover:underline duration-700">More beverages</Link>
            </div>
        </div>
    
    );
}
