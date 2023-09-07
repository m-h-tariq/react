import React from "react";
import BgVideo from "../../SharedComponents/Bgvideo/BgVideo";
import Features1 from "../../SharedComponents/Featurs/Features1";
import { Services2 } from "../../SharedComponents/Services2/Services2";
import Images from "../../Images/images";

const QualityAssuranceAutomation = () => {
  return (
    <div>
      <BgVideo
        bg={Images.Bgone}
        name="/ DevOps Solutions"
        desc1=""
        desc2="Transform Your "
        desc3="Testing Processes"
        desc4="Bring unparalleled efficiency and precision to your software testing, ensuring thorough coverage and faster time-to-market.  Embrace the power of automation and elevate your QA practices to new heights, enabling your team to focus on innovation and delivering top-notch software with confidence."
        see="Embrace the power of automation"
      />
      <Features1 />
      <Services2 />
    </div>
  );
};

export default QualityAssuranceAutomation;
