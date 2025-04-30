import { TestimonialData } from "../data";

function Testimonials() {
    return (
        <section className="testimonials">
            <h2 className="testimonial_title"> {TestimonialData.title} </h2>
            <div className="testimonial_content">
                {TestimonialData.clients.map((testimonial) => (
                    <div key={testimonial.id} className="testimonial_card">
                        <img src={testimonial.imgUrl} alt={testimonial.alt} />
                        <p className="testimonial_text">{testimonial.text}</p>
                        <h3> {testimonial.name} </h3>
                        <p className="testimonial_position"> {testimonial.position} </p>
                    </div>
                ))}
            </div>
        </section>
    )
};

export default Testimonials