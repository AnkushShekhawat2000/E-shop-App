import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";




const CoralSlider = () => {
    const slides = [
       "https://images.unsplash.com/photo-1555529669-26f9d103abdd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNob29waW5nfGVufDB8fDB8fHww",
       "https://plus.unsplash.com/premium_photo-1672883552124-5353ca268f32?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNob29waW5nfGVufDB8fDB8fHww",
       "https://images.unsplash.com/photo-1594968973184-9040a5a79963?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNob29waW5nfGVufDB8fDB8fHww",
       "https://plus.unsplash.com/premium_photo-1676587710786-091c654bb38a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2xvdGglMjBkaXNjb3VudHxlbnwwfHwwfHx8MA%3D%3D",
       "https://images.unsplash.com/photo-1576748872293-f4972ceda096?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNsb3RoJTIwZGlzY291bnR8ZW58MHx8MHx8fDA%3D"
    ];

    return (
        <div style={{ width: "80%", margin: "auto", paddingTop: "20px" }}>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                style={{ borderRadius: "10px", overflow: "hidden" }}
            >
                {slides.map((src, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={src}
                            alt={`Slide ${index + 1}`}
                            style={{
                                width: "100%",
                                height: "400px",
                                objectFit: "cover",
                                borderRadius: "10px",
                                border: "5px solid coral",
                            }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CoralSlider;
