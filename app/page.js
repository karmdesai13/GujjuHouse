import Link from 'next/link';

function App() {
  return (
    <div className="hero bg-food bg-no-repeat bg-cover min-h-screen bg-opacity-60" >
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-lg">
    <p className=" text-5xl mb-4 font-bold text-white ">Welcome to Our <span className="text-orange-600">Gujarati Fast Food</span> <span className="text-blue-500">Restaurant</span></p>
      <p className="mb-8 text-3xl ">Experience the taste of authentic Gujarati cuisine.</p>
      <Link href="./hero" className="btn btn-primary transition-transform
      hover:scale-110 duration-300">Get Started</Link>
    </div>
  </div>
</div>
  );
}

export default App;
