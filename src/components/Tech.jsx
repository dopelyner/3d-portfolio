import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

const Tech = () => {
  return (
    <div className='flex flex-col flex-wrap mt-5'>
      <h2 className={`${styles.sectionHeadText} text-center`}>
        Technologies
      </h2>
      <p className={`${styles.sectionSubText} text-center`}>
        I've been dealing with
      </p>

      <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">

        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");