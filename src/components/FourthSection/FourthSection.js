import { cards1 } from "../../assets/assets";

const FourthSection = () => {
  return (
    <>
      <div className="flex flex-col justify-center gap-9  items-center b-radius bg-gray-100 w-[100%] p-10 mt-[10%] ">
        <span className="font-bold text-3xl">Why Choose Us</span>

        <div className="flex-col w-full items-center md:w-[70%] flex  lg:flex-row gap-5 justify-between">
          {cards1.map((card, i) => {
            return (
              <div
                key={i}
                className=" md:flex flex-col gap-3 w-[350px] rounded-lg shadow-lg bg-white p-5"
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
    </>
  );
};

export default FourthSection;
