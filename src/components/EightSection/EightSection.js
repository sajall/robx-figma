const EightSection = () => {
  return (
    <>
      <div className="w-[85%] m-auto mt-[10%] ">
        <div className=" flex-wrap md:flex justify-between ">
          <div className="w-[100%] md:w-[40%] flex flex-col gap-3">
            <span className="font-bold text-3xl">Our Work</span>
            <p>
              We don’t claim to be gurus or wizards. We’re just a super
              experienced, passionate team who knows how to get results for our
              clients. All our work is custom and thoughtfully designed,
              written, and developed with your business goals in mind.
            </p>
          </div>
          <div className="flex justify-end items-end ">
            <img src="button1.png" alt="" />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-8">
          <img src="work.png" alt="" />
          <img src="skip page.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default EightSection;
