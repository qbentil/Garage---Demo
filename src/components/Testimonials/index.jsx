/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState } from "react";
import Title from "../Title";
const data = [
  {
    id: 1,
    name: "Shadrack Bentil",
    title: "CEO",
    org: "PukkaTech",
    desc: "Guarage is the best place to find a car to buy or rent. I have been using it for a while now and I have never been disappointed.",
    imgSrc: "https://codersquiz.netlify.app/img/bentil.jpeg",
  },
  {
    id: 2,
    name: "John Doe",
    title: "CEO",
    org: "Google",
    desc: "Garage is an auto tech platform that connects fleet owners to maintenance services and affordable parts.",
    imgSrc:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png",
  },
  {
    id: 3,
    name: "Roberta Casas",
    title: "Lead Developer",
    org: "Google",
    desc: "We are focused on differentiating ourselves through deep data operations and community driven growth.",
    imgSrc:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png",
  },
];

const Testimony = ({ data }) => {
  const { name, title, org, desc, imgSrc } = data;
  return (
    <figure className="max-w-screen-md mx-auto">
      <svg
        className="h-12 mx-auto mb-3 text-gray-400"
        viewBox="0 0 24 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
          fill="currentColor"
        />
      </svg>
      <blockquote>
        <p className="text-2xl font-medium text-gray-900 ">{desc}</p>
      </blockquote>
      <figcaption className="flex items-center justify-center mt-6 space-x-3">
        <img
          className="w-6 h-6 rounded-full"
          src={imgSrc}
          alt="profile picture"
        />
        <div className="flex items-center divide-x-2 divide-gray-500 ">
          <div className="pr-3 font-medium text-gray-900 ">{name}</div>
          <div className="pl-3 text-sm font-light text-gray-500 ">
            {title} at {org}
          </div>
        </div>
      </figcaption>
    </figure>
  );
};
const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  return (
    <section className="w-full my-3 px-6 py-1">
      <div className="w-full flex items-center justify-center">
        <Title title="Testimonials"  />
      </div>
      {/* content */}
      <section className="">
        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
          <Testimony data={data[current]} />
        </div>
      </section>
      {/* dots with hover effect and color change */}
      <div className="flex items-center justify-center mt-6 space-x-3">
        {data.map((item, index) => (
          <button key={item.id} onClick={() => setCurrent(index)}>
            <div
              className={`
              w-3 h-3 rounded-full cursor-pointer hover:bg-sky-600 hover:shadow-lg
              ${current === index ? "bg-sky-600 shadow-lg" : "bg-gray-300"}
            `}
            ></div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
