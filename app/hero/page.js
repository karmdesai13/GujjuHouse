"use client";
import { useState } from "react";

function Hero() {

  const [testimonials, setTestimonials] = useState([
    {
      name: "Anjali Patel",
      text: "The Khaman Dhokla was absolutely delicious, and the ambiance of Gujju House made our family dinner even more special!",
      location: "Ahmedabad"
    },
    {
      name: "Rohan Mehta",
      text: "Undhiyu and Puri is a must-try! The flavors are authentic, and the service is impeccable.",
      location: "Mumbai" 
    },
    {
      name: "Sunita Desai",
      text: "I was blown away by the variety and quality of traditional Gujarati dishes. The Basundi was the perfect end to our meal.",
      location: "Surat" 
    }
    // Add more testimonials as needed
  ]);

  const dishes = [
    {
      name: "KhamanDhokla",
      description: "A savory steamed cake made from gram flour, perfect for a light snack."
    },
    {
      name: "Undhiyu",
      description: "A mixed vegetable dish cooked in a traditional Gujarati style, flavored with green herbs and spices."
    },
    {
      name: "Basundi",
      description: "A sweetened dense milk dessert, flavored with cardamom and nuts."
    },
    {
      name: "Thepla",
      description: "A soft flatbread made from whole wheat flour and fenugreek leaves, a staple in Gujarati cuisine."
    },
    {
      name: "Fafda-Jalebi",
      description: "A popular combination of crunchy salty fafda and sweet syrupy jalebi, often enjoyed as a breakfast item."
    },
    {
      name: "Gujarati-Kadhi",
      description: "A comforting yogurt-based curry with hints of spices and sweetness, often served with rice."
    },
    {
      name: "Handvo",
      description: "A baked savory cake made from a mix of lentils and rice, seasoned with spices and crunchy tempering."
    },
    {
      name: "Khandvi",
      description: "Delicate rolls made from gram flour and yogurt, seasoned with mustard seeds and coconut."
    },
    {
      name: "Dabeli",
      description: "A popular street food item consisting of a spicy potato mixture stuffed in a bun, garnished with pomegranate and sev."
    }
    
    
  ];

  const [newTestimonial, setNewTestimonial] = useState({
    name: '',
    text: '',
    location: ''
  });

  const handleInputChange = (event) => {
    setNewTestimonial({ ...newTestimonial, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTestimonials([...testimonials, newTestimonial]);
    setNewTestimonial({ name: '', text: '', location: '' }); 
  };
  
  const galleryImages = [
    { src: 'images/Thepla.png', alt: 'Thepla' },
    { src: 'images/Chakri.png', alt: 'Chakri' },
    { src: 'images/Basundi.png', alt: 'Forest mountains' },
    { src: 'images/Dhokla.png', alt: 'Forest mountains' },
    
];

      
      
    return (
        <div className="App " style={{ backgroundImage: "url('./images/Food.png')" }}>
      
      <header className="text-white body-font">
        <div className="container mx-auto flex flex-wrap p-5 md:flex-row items-center justify-between">
          
          <div className="flex items-center">
            <img src="./images/Food2.png" alt="logo" className="rounded-full h-12 w-12 mr-3" /> 
            <span className="text-3xl font-bold">Gujju House</span>
          </div>
          
          
          <nav className="flex flex-wrap text-base">
           
            <a  href="./hero" className="mr-5  cursor-pointer hover:underline transition-transform hover:scale-125 duration-300">Home</a>
            <a   href="./menu" className="mr-5 cursor-pointer hover:underline transition-transform hover:scale-125 duration-300">Menu</a>
            <a   href="./about" className="mr-5 hover:underline transition-transform hover:scale-125 duration-300">About Us</a>
            <a className="hover:underline transition-transform hover:scale-125 duration-300">Contact</a>
          </nav>
        </div>
      </header>
        
        
      <section className="rounded-3xl bg-orange-600 mx-auto mr-5 ml-5 flex px-5 py-24 m-4 items-center justify-center flex-col">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold text-white text-center">The Essence of Gujarati Cuisine</h2>
          <div className="text-center mt-6 text-white">
            <p className="mb-4">
              Gujarati cuisine is much more than just a treat for your taste buds. It's a journey through a rich cultural landscape, marked by diverse flavors and unique cooking techniques. Each dish tells a story of different regions and communities of Gujarat.
            </p>
            <p>
              From the hearty Kathiyawadi meals that reflect the robust spirit of Saurashtra to the subtle and sweet flavors typical of Surati cuisine, our menu is a homage to these varied culinary traditions.
            </p>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="rounded-3xl bg-orange-600 mx-auto flex mr-5 ml-5 px-5 py-24 m-4 items-center justify-center flex-col">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-semibold text-white">Meet Our Team</h2>
          <p className="mb-6 text-white">The heart and soul of Gujju House</p>
          <div className="flex flex-wrap justify-center">
            {/* Placeholder for team members */}
            <div className="p-4">
              <img src="./images/zain.png" alt="Chef" className="rounded-full w-32 h-32 mb-2"/>
              <h3 className="text-white">Chef Zain</h3>
              <p className="text-gray-200">Head Chef</p>
            </div>
            {/* Repeat for other team members */}
            <div className="p-4">
              <img src="./images/prit.png" alt="Chef" className="rounded-full w-32 h-32 mb-2"/>
              <h3 className="text-white">Chef Prit</h3>
              <p className="text-gray-200">Head Chef</p>
            </div>
            <div className="p-4">
              <img src="./images/owner.png" alt="Chef" className="rounded-full w-32 h-32 mb-2"/>
              <h3 className="text-white"> Karm</h3>
              <p className="text-gray-200">Owner</p>
            </div>
            <div className="p-4">
              <img src="./images/manager.png" alt="Chef" className="rounded-full w-32 h-32 mb-2"/>
              <h3 className="text-white"> Sourabh</h3>
              <p className="text-gray-200">Manager</p>
            </div>
          </div>
        </div>
      </section>

          <section className="rounded-3xl bg-orange-600 mr-5 ml-5 flex px-5 py-24 m-4 items-center justify-center flex-col">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold text-white text-center">Featured Dishes</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {dishes.map((dish) => (
              <div key={dish.name} className="bg-white rounded-lg shadow-lg p-4 max-w-sm">
                <img src={`./images/${dish.name}.png`}  className='h-40 mb-6
                    transition-transform hover:scale-110 duration-300' />
                <h3 className="text-xl font-medium text-gray-900">{dish.name}</h3>
                <p className="text-base text-gray-700">{dish.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className=" mr-5 ml-5 rounded-3xl bg-orange-600 mx-auto flex px-5 m-4 py-24 items-center justify-center flex-col">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold text-white text-center">Customer Testimonials</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 max-w-md">
                <p className="text-base text-gray-700">"{testimonial.text}"</p>
                <h5 className="text-lg font-medium text-gray-900 mt-4">- {testimonial.name}</h5>
                {testimonial.location && <p className="text-sm text-gray-600">{testimonial.location}</p>}
              </div>
            ))}
          </div>

          {/* Add Testimonial Form */}
          <div className="mt-8 flex items-center justify-center ">
            <form onSubmit={handleSubmit} >
              <input
                type="text"
                name="name"
                value={newTestimonial.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                required
                className="p-2 m-2"
                maxLength={20}
              />
              <input
                type="text"
                name="text"
                value={newTestimonial.text}
                onChange={handleInputChange}
                placeholder="Your Testimonial"
                required
                className="p-2 m-2"
                maxLength={100}
              />
              <input
                type="text"
                name="location"
                value={newTestimonial.location}
                onChange={handleInputChange}
                placeholder="Your Location"
                className="p-2 m-2"
                maxLength={20}
              />
              <button type="submit" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                Submit Testimonial
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <div>
            {/* Gallery Section */}
            <div className="bg-orange-600 mr-5 ml-5  grid place-items-center rounded-lg p-10">
            <h2 className="text-4xl font-semibold mb-10 text-white text-center">Gallery</h2>
                <div className="flex">
                    
                    {galleryImages.map((image, index) => (
                        <div key={index} className="relative left-0 w-28 h-40 bg-[#6B626C] rounded-lg transition-all duration-1000 ease-in-out overflow-hidden shadow-lg hover:translate-y-[-16px] hover:cursor-pointer group">
                            <img className="h-40  object-cover rounded-md" src={image.src} alt={image.alt} />
                            {index !== 0 && <div className="ml-[-45px] group-hover:left-14"></div>}
                        </div>
                    ))}
                </div>
            </div>

            
            
        </div>

      
      

    </div>
        

        
        
        
  
        
        
      
    );
  }
  
  export default Hero;
  