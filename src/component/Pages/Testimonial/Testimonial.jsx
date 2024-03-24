import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";
const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("testimonials.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div style={{ background: "var(--Gray-50, #F1F2F4)", padding: "80px 0px" }}>
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-4xl text-center mb-12">Clients Testimonial</h2>
        <div>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.name}>
                <div
                  style={{
                    background: "var(--Gray-Scale-White, #FFF)",
                    boxShadow: "0px 12px 80px 0px rgba(0, 44, 109, 0.05)",
                  }}
                  className="w-96 h-56 p-4 space-y-3 rounded-lg"
                >
                  <Rating
                    style={{ maxWidth: 130 }}
                    value={review.star}
                    readOnly
                  />

                  <p className="text-[14px] h-20 text-justify text-gray-600">
                    {review.short_description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <img
                        className="w-12 h-12 rounded-full mr-3"
                        src={review.image}
                        alt=""
                      />
                      <span>
                        <h2 className="text-[16px]">{review.name}</h2>
                        <p className="text-[12px] text-gray-600">
                          {review.title}
                        </p>
                      </span>
                    </div>
                    <FaQuoteLeft className="text-3xl text-gray-600"></FaQuoteLeft>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
