import { logos } from "../../assets/assets";

const SeventhSection = () => {
  return (
    <>
      <div className="gradient flex w-full justify-evenly items-center py-5 mt-7">
        {logos.map((card, i) => {
          return (
            <div className="w-[200px]">
              <img src={card.img} alt="" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SeventhSection;
