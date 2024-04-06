const EleventhSection = () => {
  return (
    <>
      <div className="flex justify-between p-10 bg-gray-100 mt-[10%]">
        <div className="flex-wrap gap-5 md:flex justify-between w-[85%] m-auto ">
          <div className=" w-[100%] md:w-[40%] flex flex-col gap-3">
            <span className="font-bold text-3xl">
              Let’s talk about your project
            </span>
            <p>
              Do you have a project in mind, that you feel our approach would
              work well for?
            </p>
            <p>
              We’re always happy to discuss your project with you and put
              together a free proposal.
            </p>
          </div>

          {/* form */}
          <div className="w-[100%] md:max-w-md p-6 bg-white rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-4">
              {" "}
              Just fill out the form below to get started.
            </h2>
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input border-2 border-gray-300 rounded-sm w-[100%] h-[40px] indent-3"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input border-2 border-gray-300 rounded-sm w-[100%] h-[40px] indent-3"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  className="input border-2 border-gray-300 rounded-sm w-[100%] h-[40px] indent-3"
                />
              </div>
              <div className="mb-4">
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  className="input border-2 border-gray-300 rounded-sm w-[100%] h-[40px] indent-3"
                />
              </div>
              <div className="mb-4">
                <input
                  type="file"
                  name="brief"
                  placeholder="Send us your brief"
                  className="input border-2 border-gray-300 rounded-sm w-[100%] h-[40px] indent-3"
                />
              </div>
              <div className="mb-4">
                <textarea
                  name="message"
                  placeholder="Message"
                  className="input border-2 border-gray-300 rounded-sm w-[100%] h-[80px] indent-3"
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="agree"
                    className="mr-2 border-2 border-gray-300 "
                  />
                  <span>
                    Agree to have my information stored Privacy Policy
                  </span>
                </label>
              </div>
              <div className="mb-4">
                <button
                  type="submit"
                  className="gradient text-white py-2 px-4 rounded w-[100%]"
                >
                  Send Your Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EleventhSection;
