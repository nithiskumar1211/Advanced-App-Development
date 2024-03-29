import "../assets/css/Home.css";
import { Pagination } from "swiper/modules";
import Counter from "./Counter";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect } from "react";

const Home = () => {
  const products = [
    {
      id: 1,
      imageUrl:
        "https://res.cloudinary.com/dwyfsuuzs/image/upload/v1710787331/wedding-cakes-9077a8f0-6709-4b2b-8c35-c6011817f339_j2tmxj.jpg",
      name: "Birthday Decorations",
      // mrp: "₹6999",
    },
    {
      id: 2,
      imageUrl:
        "https://res.cloudinary.com/dwyfsuuzs/image/upload/v1710787111/birthday-return-gifts-f6b88976-01fd-4a43-9fb3-8d5ecbcfb2a3_eahsc3.jpg",
      name: "Balloon Decoration",
      // mrp: "₹11599",
    },
    {
      id: 3,
      imageUrl:
        "https://images.homevents.in/service/decorations/boss-baby-theme/boss-baby-theme-ae0b4ff6-0b5d-4685-a9e0-5cd4a4ef0d24.jpg",
      name: " Baby Theme",
      // mrp: "₹11249",
    },
  ];
  const testimonials = [
    {
      id: 1,
      image:
        "https://images.homevents.in/testimonial/testimonial-4283df2c-872a-41da-a835-fca8f5c5ee9d.jpg",
      title: "John Doe",
      description:
        "Homevents made my daughter's birthday party unforgettable. The decorations were amazing!",
    },
    {
      id: 2,
      image:
        "https://images.homevents.in/testimonial/testimonial-4283df2c-872a-41da-a835-fca8f5c5ee9d.jpg",
      title: "Jane Doe",
      description:
        "Homevents made my son's birthday party unforgettable. The decorations were amazing!",
    },
    {
      id: 3,
      image:
        "https://images.homevents.in/testimonial/testimonial-4283df2c-872a-41da-a835-fca8f5c5ee9d.jpg",
      title: "Jane Doe",
      description:
        "Homevents made my son's birthday party unforgettable. The decorations were amazing!",
    },
    {
      id: 4,
      image:
        "https://images.homevents.in/testimonial/testimonial-4283df2c-872a-41da-a835-fca8f5c5ee9d.jpg",
      title: "Jane Doe",
      description:
        "Homevents made my son's birthday party unforgettable. The decorations were amazing!",
    },
  ];

  useEffect(() => {
    function reveal() {
      var reveals = document.querySelectorAll(".show-wrapper");
      for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;
        if (revealTop < windowheight - revealpoint) {
          reveals[i].classList.add("active-wrapper");
        } else {
          reveals[i].classList.remove("active-wrapper");
        }
      }
    }
    window.addEventListener("scroll", reveal);
    return () => {
      window.removeEventListener("scroll", reveal);
    };
  }, []);
  

  return (
    <div>
      {/* <div>
        <button className="com_quickenquiry">Quick Enquiry</button>
      </div> */}
      <div>
        <div className="secheader animated fadeInDown ">
          <h7 className="sec_head">
            How ! it can <strong style={{color:'red'}}>Processed?</strong>
            <h4 style={{fontSize:"25px",color:"grey"}}>
              Get birthday event experts on board in 3 easy steps to get your
              celebration mode on!
            </h4>
          </h7>
        </div>
        <div className="hitwork-list">
          <div className="hitwork-item">
            <div className="border-img">
              {/* <img
                src="https://images-stg.homevents.in/assets/howitwork-sec-be-icon2.png"
                // alt="side"
              /> */}
            </div>
            <a href="">
              <div className="hitwork-img">
                <img
                  src="https://res.cloudinary.com/dwyfsuuzs/image/upload/v1710788565/new-year-celebration-1043fc2f-3fd1-4d41-84e6-d1846fac5236_1_zd3ypl.png"
                  alt="Birthday Decorations"
                />
              </div>
              <div className="hitwork-cont">
                <h4>Plan your Event</h4>
                <p style={{color:'grey'}}>
                  Send us your event details and we will plan everything to
                  perfection to your preferences
                </p>
              </div>
            </a>
          </div>
          <div className="hitwork-item">
            <div className="border-img">
              {/* <img
                src="https://images-stg.homevents.in/assets/howitwork-sec-be-icon3.png"
                alt="side"
              /> */}
            </div>
            <a href="">
              <div className="hitwork-img">
                <img
                  src="https://images-stg.homevents.in/assets/hitwork-icon2.png"
                  alt="Birthday Decorations"
                />
              </div>
              <div className="hitwork-cont">
                <h4 >Plan your Event</h4>
                <p style={{color:'grey'}}>
                  Send us your event details and we will plan everything to
                  perfection to your preferences
                </p>
              </div>
            </a>
          </div>
          <div className="hitwork-item">
            <div className="border-img">
              {/* <img
                src="https://images-stg.homevents.in/assets/howitwork-sec-be-icon1.png"
                alt="side"
              /> */}
            </div>
            <a href="">
              <div className="hitwork-img">
                <img
                  src="https://res.cloudinary.com/dwyfsuuzs/image/upload/v1710788390/birthday-packages-f37f9dc8-e0ed-4d15-9386-3c64ba9c7393_tr7ams.png"
                  alt="Birthday Decorations"
                />
              </div>
              <div className="hitwork-cont">
                <h4>Plan your Event</h4>
                <p style={{color:'grey'}}>
                  Send us your event details and we will plan everything to
                  perfection to your preferences
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="show-wrapper">
        <div className="secheader animated fadeInDown">
          <h7 className="sec_head">
            Decorated for <strong style={{color:'red'}}>Birthdays</strong>
            <h4 style={{fontSize:'25px',color:'grey'}}>
              Crafting unforgettable birthdays, blending traditional charm with
              contemporary elegance.
            </h4>
          </h7>
        </div>
        <div className="slick-track">
          <div className="flex justify-center">
            {products.map((product) => (
              <div
                key={product.id}
                className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[25rem] mx-3 border"
              >
                <div className="h-[13rem] w-[20rem] hover:scale-125 transition-all duration-500 ">
                  <img
                    className="object-cover object-top w-full h-full"
                    src={product.imageUrl}
                    alt=""
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-xl text-gray-500">{product.mrp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="view-all-button-container">
          <button className="view-all-button">View All</button>
        </div>
      </div>
      <div className="img-occ-back show-wrapper">
        <div className="secheader animated fadeInDown">
          <h7 className="sec_head">
            Return Gifts For all <strong style={{color:"red"}}>Occassions</strong>
            <p className="p-small" style={{color:'grey',fontSize:"25px"}}>
              We&lsquo;ve got you covered for any gift-giving need! From useful
              to beautiful, find unique gifts for individuals or groups.
            </p>
          </h7>
        </div>
        <div className="giftoccas-lists">
          <div className="giftoccas-item">
            <a href="">
              <div className="giftoccas-img ">
                <img
                  src="https://images.homevents.in/card/card-3b7ddcff-dee6-4287-a08b-dcfd1fce237a.jpg"
                  alt=""
                  className="hover:scale-125 transition-all duration-500"
                />
              </div>
              <div className="giftoccas-cont">
                <h5>Birthday Return Gifts</h5>
                <h6>
                  From{" "}
                  <strong style={{color:'red'}}>
                    <span style={{color:'red'}}>₹</span>
                    99
                  </strong>{" "}
                  Onwords
                </h6>
              </div>
            </a>
          </div>
          <div className="giftoccas-item">
            <a href="">
              <div className="giftoccas-img">
                <img
                  src="https://res.cloudinary.com/dwyfsuuzs/image/upload/v1710790808/c3_trghss.jpg"
                  alt=""
                  className="hover:scale-125 transition-all duration-500"
                />
              </div>
              <div className="giftoccas-cont">
                <h5>Birthday Return Gifts</h5>
                <h6>
                  From{" "}
                  <strong  style={{color:'red'}}>
                    <span  style={{color:'red'}}>₹</span>
                    99
                  </strong>{" "}
                  Onwords
                </h6>
              </div>
            </a>
          </div>
          <div className="giftoccas-item">
            <a href="">
              <div className="giftoccas-img">
                <img
                  src="https://res.cloudinary.com/dwyfsuuzs/image/upload/v1710790677/1c_fxrqxj.jpg"
                  alt=""
                  className="hover:scale-125 transition-all duration-500"
                />
              </div>
              <div className="giftoccas-cont">
                <h5>Birthday Return Gifts</h5>
                <h6>
                  From{" "}
                  <strong  style={{color:'red'}}>
                    <span  style={{color:'red'}}>₹</span>
                    99
                  </strong>{" "}
                  Onwords
                </h6>
              </div>
            </a>
          </div>
          {/* <div className="giftoccas-item">
            <a href="">
              <div className="giftoccas-img">
                <img
                  src="https://images.homevents.in/card/card-3b7ddcff-dee6-4287-a08b-dcfd1fce237a.jpg"
                  alt=""
                  className="hover:scale-125 transition-all duration-500"
                />
              </div>
              <div className="giftoccas-cont">
                <h5>Birthday Return Gifts</h5>
                <h6>
                  From{" "}
                  <strong  style={{color:'red'}}>
                    <span  style={{color:'red'}}>₹</span>
                    99
                  </strong>{" "}
                  Onwords
                </h6>
              </div>
            </a>
          </div> */}
          {/* <div className="giftoccas-item">
            <a href="">
              <div className="giftoccas-img">
                <img
                  src="https://images.homevents.in/card/card-3b7ddcff-dee6-4287-a08b-dcfd1fce237a.jpg"
                  alt=""
                  className="hover:scale-125 transition-all duration-500"
                />
              </div>
              <div className="giftoccas-cont">
                <h5>Birthday Return Gifts</h5>
                <h6>
                  From{" "}
                  <strong>
                    <span>₹</span>
                    99
                  </strong>{" "}
                  Onwords
                </h6>
              </div>
            </a>
          </div> */}
          {/* <div className="giftoccas-item">
            <a href="">
              <div className="giftoccas-img">
                <img
                  src="https://images.homevents.in/card/card-3b7ddcff-dee6-4287-a08b-dcfd1fce237a.jpg"
                  alt=""
                  className="hover:scale-125 transition-all duration-500"
                />
              </div>
              <div className="giftoccas-cont">
                <h5>Birthday Return Gifts</h5>
                <h6>
                  From{" "}
                  <strong>
                    <span>₹</span>
                    99
                  </strong>{" "}
                  Onwords
                </h6>
              </div>
            </a>
          </div> */}
          {/* <div className="giftoccas-item">
            <a href="">
              <div className="giftoccas-img">
                <img
                  src="https://images.homevents.in/card/card-3b7ddcff-dee6-4287-a08b-dcfd1fce237a.jpg"
                  alt=""
                  className="hover:scale-125 transition-all duration-500"
                />
              </div>
              <div className="giftoccas-cont">
                <h5>Birthday Return Gifts</h5>
                <h6>
                  From{" "}
                  <strong>
                    <span>₹</span>
                    99
                  </strong>{" "}
                  Onwords
                </h6>
              </div>
            </a>
          </div> */}
        </div>
      </div>
      <div className="show-wrapper">
        <section className="whyhomevents">
          <div className="container-fuild">
            <div className="whyhomevents-confuld">
              <div className="whyh-left">
                <div className="secheader animated fadeInDown">
                  <h5 style={{color:'red'}}>Why Homevents</h5>
                  <h2 className="sec_head">As a Professional Event Planner</h2>
                  <p style={{color:'grey'}}>
                    we know what you expect and work towards exceeding it.
                    Events are labour and cost intensive and our experts help
                    you set the budget and stick to it while putting together
                    events that will dazzle your guests. We are partnered with
                    reputed caterers, venues, and other party service providers
                    that make the task of finalizing vendors a breeze. Most of
                    all, we plan and execute the event like it is our own, and
                    leave you to fully indulge in your day and make it your own.{" "}
                  </p>
                  <button style={{backgroundColor:'red'}}>Know More</button>
                </div>
              </div>
              <div className="whyh-right">
                <img
                  src="https://res.cloudinary.com/dwyfsuuzs/image/upload/v1710791337/c4_a3zjhw.jpg  "
                  alt="Birthday Decorations"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <section className="show-wrapper">
        <div className="container">
          <div className="home-count">
            <div className="hcount-item">
              <div className="hcountlist">
                <h3>
                  <span className="counter" data-count="200">
                    <Counter finalCount={200} />
                  </span>
                  <sub>+</sub>
                </h3>
                <h6>Event partners</h6>
              </div>
              <div className="hcountlist">
                <h3>
                  <span className="counter" data-count="5">
                    <Counter finalCount={5} />
                  </span>
                  <span>K</span>
                  <sub>+</sub>
                </h3>
                <h6>Happy Customers</h6>
              </div>
              <div className="hcountlist">
                <h3>
                  <span className="counter" data-count="1">
                    <Counter finalCount={1} />
                  </span>
                  <span>L</span>
                  <sub>+</sub>
                </h3>
                <h6>Themes</h6>
              </div>
              <div className="hcountlist">
                <h3>
                  <span className="counter" data-count="3">
                    <Counter finalCount={3} />
                  </span>
                  <span>K</span>
                  <sub>+</sub>
                </h3>
                <h6>Successful Events</h6>
              </div>
              <div className="hcountlist">
                <h3>
                  <span className="counter" data-count="100">
                    <Counter finalCount={100} />
                  </span>
                  <sub>+</sub>
                </h3>
                <h6>Weddings Planned</h6>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <div className="show-wrapper">
        <div className="secheader animated fadeInDown ">
          <h7 className="sec_head">
            What Our <strong style={{color:'red'}}>Clients Say</strong>
            <p style={{fontSize:"20px",color:'grey'}}>
              We take pride in creating the event and space for our client’s
              joyful moments. Here’s our clients telling why we are the best
              event organisers in the city.
            </p>
          </h7>
        </div>
        <Swiper
          loop={true}
          grabCursor={true}
          spaceBetween={24}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            576: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 48,
            },
          }}
          modules={[Pagination]}
          className="testimonial_container"
        >
          {testimonials.map(({ id, image, title, description }) => (
            <SwiperSlide className="testimonial_card" key={id}>
              <img src={image} alt={title} className="testimonial_img" />
              <h3 className="testimonial_name">{title}</h3>
              <p className="testimonial_description">{description}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
