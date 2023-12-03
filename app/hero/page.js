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
    { src: 'images/Basundi.png', alt: 'Basundi' },
    { src: 'images/Dhokla.png', alt: 'Dhokla' },
    { src: 'images/Handvo.png', alt: 'Handvo' },
    
];

      
      
    return (
        <div className=" bg-hero " >
      
      <header className="text-white">
        <div className=" mx-auto flex flex-wrap p-5  items-center justify-between">
          
          <div className="flex items-center">
            <img src="./images/Food2.png" alt="logo" className="rounded-full h-12 w-12 mr-3" /> 
            <span className="text-3xl font-bold">Gujju House</span>
          </div>
          
          
          <nav className="flex flex-wrap text-base">
           
            <a  href="./hero" className="mr-5  cursor-pointer hover:underline transition-transform hover:scale-125 duration-300">Home</a>
            <a   href="./menu" className="mr-5 cursor-pointer hover:underline transition-transform hover:scale-125 duration-300">Menu</a>
            <a   href="./about" className="mr-5 hover:underline transition-transform hover:scale-125 duration-300">About Us</a>
            
            <a   href="./SignIn" className="mr-5 cursor-pointer hover:underline transition-transform hover:scale-125 duration-300">Sign-In</a>

            
          </nav>
        </div>
      </header>
        
        
      <section className="rounded-3xl bg-orange-600 text-center mr-5 ml-5  px-5 py-24 m-4 items-center justify-center text-white ">
        <div>
          <h2 className="text-2xl font-semibold ">The Essence of Gujarati Cuisine</h2>
          <div className=" mt-6">
            <p className="mb-4">
              Gujarati cuisine is much more than just a treat for your taste buds. It's a journey through a rich cultural landscape, marked by diverse flavors and unique cooking techniques. Each dish tells a story of different regions and communities of Gujarat.
            </p>
            <p>
              From the hearty Kathiyawadi meals that reflect the robust spirit of Saurashtra to the subtle and sweet flavors typical of Surati cuisine, our menu is a homage to these varied culinary traditions.
            </p>
          </div>
        </div>
      </section>

      
      <section className="rounded-3xl bg-orange-600 mr-5 ml-5 px-5 py-24 m-4 items-center justify-center text-white text-center ">
        <div >
          <h2 className="text-2xl font-semibold">Meet Our Team</h2>
          <p className="mb-6">The heart and soul of Gujju House</p>
          <div className="flex justify-center  gap-6">
            
            <div >
              <img src="./images/zain.png" alt="Chef" className="rounded-full w-32 h-32 mb-2"/>
              <h3 className="">Chef Zain</h3>
              <p className="text-gray-200">Head Chef</p>
            </div>
            
            <div >
              <img src="./images/prit.png" alt="Chef" className="rounded-full w-32 h-32 mb-2"/>
              <h3>Chef Prit</h3>
              <p className="text-gray-200">Head Chef</p>
            </div>
            <div >
              <img src="./images/owner.png" alt="Chef" className="rounded-full w-32 h-32 mb-2"/>
              <h3> Karm</h3>
              <p className="text-gray-200">Owner</p>
            </div>
            <div >
              <img src="./images/manager.png" alt="Chef" className="rounded-full w-32 h-32 mb-2"/>
              <h3 > Sourabh</h3>
              <p className="text-gray-200">Manager</p>
            </div>
          </div>
        </div>
      </section>

          <section className="rounded-3xl bg-orange-600 mr-5 ml-5  px-5 py-24 m-4 items-center justify-center ">
        <div >
          <h2 className="text-4xl underline font-semibold text-white text-center">Featured Dishes</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {dishes.map((dish) => (
              <div key={dish.name} className="bg-white rounded-lg  p-4 max-w-sm">
                <img src={`./images/${dish.name}.png`}  className='h-40 mb-6
                    transition-transform hover:scale-110 duration-300' />
                <h3 className="text-xl font-medium text-gray-900">{dish.name}</h3>
                <p className="text-base text-gray-700">{dish.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className=" mr-5 ml-5 rounded-3xl bg-orange-600 mx-auto  px-5 m-4 py-24 items-center justify-center ">
        <div >
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

          
          <div className="mt-8 flex items-center justify-center  ">
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
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
                Submit Testimonial
              </button>
            </form>
          </div>
        </div>
      </section>

      
      <div>
            
            <div className="bg-orange-600 mr-5 ml-5  grid items-center justify-center rounded-lg p-10">
            <h2 className="text-4xl font-semibold mb-10 text-white text-center">Gallery</h2>
                <div className="flex">
                    
                    {galleryImages.map((image, index) => (
                        <div key={index} className=" w-28 h-40 bg-[#6B626C] rounded-lg transition-all duration-1000 ease-in-out overflow-hidden shadow-lg hover:translate-y-[-16px] hover:cursor-pointer group">
                            <img className="h-40  object-cover rounded-md" src={image.src} alt={image.alt} />
                            {index !== 0 && <div className=" group-hover:left-14"></div>}
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </div>
        );
  }
  
  export default Hero;
  