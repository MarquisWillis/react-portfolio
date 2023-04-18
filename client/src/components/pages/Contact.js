import React from "react";

export default function Contact() {
  async function submitMessage(event) {
    event.target.preventDefault();
    window.location.href = {};
  }

  return (
    <div className="flex flex-col align-items-center">
      <div>
        <h1 className="text-white p-2">Contact</h1>
      </div>

      <div className="block max-w-md rounded-lg bg-white p-6 mb-5 shadow-lg dark:bg-neutral-700 w-100">
        <form target="_blank" action="https://formsubmit.co/marquiswillis99@gmail.com" method="POST">
          <div className="relative mb-6" data-te-input-wrapper-init>
            <div className="flex justify-center mb-2">
              Name
            </div>
            <input
              type="text"
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleInput7"
              placeholder="Name"
              required
            />
          </div>
          <div className="relative mb-6" data-te-input-wrapper-init>
            <div className="flex justify-center mb-2">
              Email address
            </div>
            <input
              type="email"
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleInput8"
              placeholder="Email address"
              required
            />
          </div>
          <div className="relative mb-6" data-te-input-wrapper-init>
            <div className="flex justify-center mb-2">
              Message
            </div>
            <textarea
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlTextarea13"
              rows="10"
              placeholder="Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full rounded bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
