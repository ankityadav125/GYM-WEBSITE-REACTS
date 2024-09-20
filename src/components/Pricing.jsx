import { Check } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const pricing = [
    {
      imgUrl: "https://images.unsplash.com/photo-1532384816664-01b8b7238c8d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "QUARTERLY",
      price: 18000,
      length: 3,
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1577221084712-45b0445d2b00?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "HALF YEARLY",
      price: 34000,
      length: 6,
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1545346315-f4c47e3e1b55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8",
      title: "YEARLY",
      price: 67000,
      length: 12,
    },
  ];
  return (
    <section className="pricing">
      <h1>NEXUS FITNESS PLANS</h1>
      <div className="wrapper">
        {pricing.map((element) => {
          return (
            <div className="card" key={element}>
              <img src={element.imgUrl} alt="" />
              <div className="title">
                <h1>{element.title}</h1>
                <h1>PACKAGE</h1>
                <h3>Rs {element.price}</h3>
                <p>For {element.length} Months </p>
              </div>
              <div className="description">
                <p>
                  <Check />
                  Equipment
                </p>
                <p>
                  <Check />
                  All Day Fre Training
                </p>
                <p>
                  <Check />
                  Free Restroom
                </p>
                <p>
                  <Check />
                  24/7 Skilled Support
                </p>
                <p>
                  <Check />
                  20 Days Freezing Option
                </p>
                <Link to={"/"}>Join Now</Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
