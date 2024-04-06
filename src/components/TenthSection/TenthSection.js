import { insight } from "../../assets/assets";

const TenthSection = () => {
  return (
    <>
      <div className="mt-[5%]">
        <img src="Rectangle 17.png" alt="" className="w-[100%]" />

        <div className="w-[85%] m-auto flex flex-col gap-10 items-center mt-[-21%]">
          <span className="font-bold text-3xl text-white">Latest Insight</span>
          <div className="flex-col gap-10 items-center md:flex md:flex-row justify-center">
            {insight.map((card, i) => {
              return (
                <div
                  key={i}
                  className="w-[300px] border-2 border-gray-300 rounded-2xl shadow-md "
                >
                  <div>
                    <img src={card.img} alt="" />
                  </div>
                  <div className="flex flex-col justify-start gap-3 p-2">
                    <span className="font-bold text-xl">{card.name}</span>
                    <p>{card.para}</p>
                    <div className="flex justify-between items-center">
                      <span>{card.date}</span>
                      <img src={card.btn} alt="" className="cursor-pointer" />
                    </div>
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

export default TenthSection;
