import {cards3} from "../../assets/assets";

const SixthSection = () => {
  return (
    <>
      <div className="w-[85%] m-auto flex flex-col gap-10 items-center py-10">
        <span className="font-bold text-3xl">Overview of Services</span>
        <div className="flex-wrap md:flex justify-center gap-10 ">
          {cards3.map((card, i) => {
            return (
              <div
                key={i}
                className="w-[300px] border-2 border-gray-300 rounded-2xl shadow-md "
              >
                <div>
                  <img src={card.img} alt="" />
                </div>
                <div className="flex flex-col justify-start gap-3 p-2">
                  <span className="font-bold text-xl">{card.heading}</span>
                  <p>{card.para}</p>
                  <img
                    src={card.btn}
                    alt=""
                    className="w-[200px] cursor-pointer"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SixthSection;
