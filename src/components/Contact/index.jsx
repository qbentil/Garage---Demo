/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */

import Title from "../Title";

const Contact = () => {
  return (
    <section className="w-full my-3 px-6 py-1">
      <div className="w-full flex items-center justify-center flex-col gap-y-3">
        <Title title="Contact Us" />
        <p className="font-light text-gray-500 lg:mb-16 sm:text-xl ">
          Need details about our Business plan? Let us know.
        </p>
      </div>
      {/* content */}
      <section className="">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <form action="#" className="space-y-8">
            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border focus:border-sky-300 outline-none shadow-sm "                placeholder="name@garage.com"
                required
              />
            </div>
            <div>
              <label
                for="subject"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border focus:border-sky-300 outline-none shadow-sm "
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                for="message"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border focus:border-sky-300 outline-none "
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-sky-600 sm:w-fit hover:bg-sky-800 "
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </section>
  );
};

export default Contact;
