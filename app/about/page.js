
export default function AboutUs() {
    return (
        <div className="bg-orange-600 min-h-screen text-white p-10">
            <div className="container mx-auto text-center">
                <h1 className="text-5xl font-bold mb-8">About Gujju House</h1>
                <img src="./images/Food2.png" alt="Gujju House" className="mx-auto w-1/2 rounded-lg mb-8" />

                <div className="text-left space-y-6">
                    <section>
                        <h2 className="text-4xl font-semibold mb-4">Our Story</h2>
                        <p>
                            Gujju House was founded in 1990 with a passion for bringing the authentic flavors of Gujarat to our community. We started as a small family-run restaurant and have grown into a beloved destination for Gujarati cuisine enthusiasts.
                        </p>
                        <p>
                            Our menu is a celebration of the rich culinary heritage of Gujarat, featuring both traditional dishes and modern interpretations. From the street food staples of Ahmedabad to the sweet delicacies of Surat, we bring a diverse range of flavors to your plate.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-4xl font-semibold mb-4">Our Mission</h2>
                        <p>
                            At Gujju House, our mission is to provide an unforgettable dining experience through exceptional service and a menu that offers something for everyone. We believe in using fresh, high-quality ingredients to create dishes that not only taste great but also pay homage to the traditions of Gujarati cooking.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-4xl font-semibold mb-4">Culinary Philosophy and Specialties</h2>
                        <p>
                            At Gujju House, our culinary philosophy is rooted in the belief that food is not just about taste, it’s about the experience. Each dish on our menu is crafted with care, embracing both traditional methods and innovative techniques.
                        </p>
                        <p>
                            Our specialties include a range of Gujarati thalis, showcasing a variety of flavors and textures in one plate. We take pride in our signature dishes like "Kathiyawadi Thali," which offers a rustic and spicy taste of Western Gujarat, and the sweet-savory balance of "Surti Thali" from South Gujarat.
                        </p>
                        <p>
                            We also offer a variety of seasonal dishes that celebrate the local produce and festivals of Gujarat. Our chefs are constantly experimenting and evolving our menu to bring new and exciting flavors to our guests, while staying true to the heart and soul of Gujarati cuisine.
                        </p>
                        <img src="./images/gujju-house-specialties.jpg" alt="Gujju House Specialties" className="w-full rounded-lg mt-4" />
                    </section>
                </div>
            </div>
        </div>
    );
}
