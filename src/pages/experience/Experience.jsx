import { useState } from "react";
import { ExperiencesCard } from "../../components/experience/Experience";
import { certificateData } from "../../data/certificate";
const Experiences = () => {
  const [cData, setCData] = useState(certificateData);
  return (
    <div className="main" id="achievements">
      <div className="achievement-main-div">
        <div className="achievement-header">
          <h1 className="heading achievement-heading">Certificates</h1>
        </div>
        <div className="achievement-cards-div">
          {cData.map((data) => (
            <ExperiencesCard key={data.id} {...data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export { Experiences };
