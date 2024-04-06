import { ratingCards } from "../../assets/assets";

const NinthSection = () => {
  return (
    <>
      <div className="flex flex-col justify-center gap-9  items-center b-radius w-[100%]  mt-[10%] ">
        <span className="font-bold text-3xl">
          What Our Clients Say About Us
        </span>
        <div className="flex-col w-full items-center md:w-[70%] flex lg:flex-row justify-between gap-5 ">
          {ratingCards.map((card, i) => {
            return (
              <div
                key={i}
                className="w-full md:w-[350px] flex flex-col gap-3rounded-lg shadow-xl p-5"
              >
                <div className="flex flex-col items-center gap-2 ">
                  <img src={card.img} alt="" />
                  <div className="flex">
                    {card.star.map((str, i) => {
                      return <img src={str} alt="" />;
                    })}
                  </div>
                  <p>{card.para}</p>
                  <div className="flex  justify-between items-center gap-10">
                    <span className="font-bold text-lg">{card.name}</span>
                    <img src={card.btn} alt="" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center">
          <img src="skip page.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default NinthSection;
