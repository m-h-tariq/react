import React from "react";
import BgVideo from "../../SharedComponents/Bgvideo/BgVideo";
import Features1 from "../../SharedComponents/Featurs/Features1";
import { Services2 } from "../../SharedComponents/Services2/Services2";
import Images from "../../Images/images";

const StaffAugmentation = () => {
  return (
    <div>
      <BgVideo
        bg={Images.BgServices}
        name="/ DevOps Solutions"
        desc1=""
        desc2="Expand Your Team,  "
        desc3="Amplify Your Success"
        desc4="Amplify your business success by accessing top talent through our expert staff augmentation services. Unlock the power of a dynamic workforce and elevate your business to new heights with our trusted staff augmentation services"
        see="Get Top Talent"
      />
      <Features1 />
      <Services2 />
    </div>
  );
};

export default StaffAugmentation;
