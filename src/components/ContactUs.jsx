import React from "react";

const ContactUs = () => {
  // Set the background color of the whole web page to violet-900
  document.body.style.background = "linear-gradient(to bottom, #0D0C28, #5900b3)";

  return (
    <div className="grid grid-cols-1 pt-20 md:grid-cols-2 gap-4 overlay bg-opacity-20 bg-black border-1 border-black m-4 rounded-tl rounded-br rounded-tr rounded-bl">
      <div className="-mt-3 font-arial pr-2 pl-2 py-4 text-left">
        <h2 className="text-white text-5xl mb-6 pl-8">Contact Us</h2>
        <p className="text-white mb-4 pr-4 pl-8">
          Whether you have a question about our AI-powered technology, need assistance with our products, or want to explore potential partnerships, our team is here to provide prompt and personalized support.
        </p>
      </div>

      <div className=" px-4 text-left">
        <form
          className="form-container"
          action="https://getform.io/f/87fd37e4-92f4-4ac1-a188-49e55bfc8344"
          method="POST"
        >
          <label htmlFor="organization" className="block text-white mb-2 text-sm">
            Organization name
          </label>
          <input
            type="text"
            id="organization"
            name="organization"
            className="w-full text-sm p-2 outline-none mb-4 border text-white border-opacity-30 border-white hover:border-white rounded bg-violet-950"
            placeholder="GT Protocol"
            required
          />

          <label htmlFor="topic" className="block text-white text-sm mb-2">
            Topic
          </label>
          <select
            id="topic"
            name="topic"
            className="w-full text-sm p-2 mb-4 border outline-none text-white border-white border-opacity-30 rounded hover:border-white bg-violet-950"
            required
          >
            <option value="" disabled selected>
              Choose topic
            </option>
            <option value="Marketing cooperation" className="hover:border-white bg-violet-950">Marketing cooperation</option>
            <option value="Partnership cooperation">Partnership cooperation</option>
            <option value="Product support">Product support</option>
            <option value="CV">CV</option>
            <option value="Other">Other</option>
          </select>

          <label htmlFor="email" className="block text-white mb-2 text-sm">
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full text-sm p-2 mb-4 outline-none text-white border border-opacity-30 border-white hover:border-white rounded bg-violet-950"
            placeholder="name@company.com"
            required
          />

          <label htmlFor="telegram" className="block text-white mb-2 text-sm">
            Your telegram ID
          </label>
          <input
            type="text"
            id="telegram"
            name="telegram"
            className="w-full text-sm p-2 mb-4 outline-none text-white border border-opacity-30 border-white hover:border-white rounded bg-violet-950"
            placeholder="@john_smith"
            required
          />

          <label htmlFor="request" className="block text-white mb-2 text-sm">
            How can we help you?
          </label>
          <textarea
            id="request"
            name="request"
            rows="6"
            className="w-full outline-none text-sm p-2 mb-4 border text-white border-opacity-30 max-h-24 min-h-24 border-white rounded hover:border-white bg-violet-950"
            placeholder="Describe your request"
            required
          ></textarea>

          <button
            type="submit"
            className="border-white border-2 border-opacity-30  bg-violet-950 mb-10 text-white px-4 py-2 text-sm rounded cursor-pointer  hover:border-white"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
