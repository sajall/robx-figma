import {cards2} from "../../assets/assets";

const FifthSection = () => {
  return (
    <>
      <div className="gradient w-[100%] p-14">
        <div className="flex-wrap gap-5 md:w-[85%] m-auto flex justify-between items-start py-10 ">
          <div className="w-full md:w-[40%] flex flex-col gap-3 justify-center items-start text-white">
            <span className="font-bold text-2xl">
              Our bespoke website include the fllowing
            </span>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus
              vulputate aenean aliquam accumsan vestibulum in sit Blandit
              sodales lacus vulputate aenean aliquam accumsa
            </p>
            <img src="button (2).png" alt="" />
          </div>

          <div className="w-full md:w-[35%] flex gap-5 flex-col">
            {cards2.map((card, i) => {
              return (
                <div
                  key={i}
                  className="flex flex-col gap-3  rounded-lg shadow-lg bg-white p-5"
                >
                  <div className="flex items-center gap-2 ">
                    <img src={card.icon} alt="" />
                    <span className="font-bold text-lg">{card.heading}</span>
                  </div>
                  <div>
                    <p>{card.para}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default FifthSection;
