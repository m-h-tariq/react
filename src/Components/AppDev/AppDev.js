import React from "react";
import BgVideo from "../SharedComponents/Bgvideo/BgVideo";
import Images from "../Images/images";
import SoftwareSolutions from "../SharedComponents/SoftwareSolutions/SoftwareSolutions";
import CustomerBenefits from "../SharedComponents/CustomerBenefits/CustomerBenefits";

const AppDev = () => {
  return (
    <div>
      <BgVideo
        bg={Images.Web_Bg}
        name="/ Web App Development"
        desc1=""
        desc2="Crafting Exceptional"
        desc3="Web Experiences"
        desc4="From Vision to Reality. Our talented team of web developers combines innovative design with cutting-edge technology to deliver stunning websites that are not only visually captivating but also responsive, user-friendly, and tailored to your specific business needs."
        see="Build Your Digital Presence"
      />
       <SoftwareSolutions />
      

<div className="">
  <div className="container-fluid services-div3">
    <div className="row"></div>
  </div>
</div>
<CustomerBenefits
  Heading_Start="How customer"
  Heading_second_text="benefits from our"
  Heading_third_text="Intelligence Automation"
  Heading_forth_text="Services"
  Paragraph_text="  Discover how our AI-powered chatbot solution transformed a
  global e-commerce company's customer service operations. By
  leveraging natural language processing and machine learning
  algorithms, we developed an intelligent chatbot that provided
  instant responses to customer queries, resolved issues, and
  offered personalized recommendations."
  Users_value="1000+"
  BgImage={Images.Rectangle_129}
  Users="Users"
  Union_svg={Images.Union}
  Tech_stack="Tech Stack"
  
  Pytorch_change="change-picture"
  all-logos=".all-logos-class"
  Tensor_change="Change-tensor"
  Python_change="Change-Python"
  Open_cv_change="change-open-cv"
  // Tensor_flow={Images.Icon_1}
  // Python={Images.Python_pic}
  // Open_cv={Images.open_cv}
  Pytorch_text="PyTorch"
  Tensor_flow_text="TensorFlow"
  Python_text="Python"
  Open_cv_text="OpenCV"
  // Idea_heading="Have any idea in your mind?
  // Let’s discuss"
  // Idea_text="Ping us here and our support team will get back to you within 24 hours"
  // Bigentities_write_email="Email"
  // Bigentities_Email="info@bigentities.com"
  // Copy_text={Images.Copy}
  // Call={Images.Call_Vector}
  // Number="+1 (302) 321-4914"
  // Contact="Use Contact form"
//   Arrow_svg={<svg xmlns="http://www.w3.org/2000/svg" width="26" height="17" viewBox="0 0 26 17" fill="none">
//   <g clip-path="url(#clip0_1349_762)">
//     <path fill-rule="evenodd" clip-rule="evenodd" d="M16.9096 0.262469C17.2579 -0.0874896 17.8226 -0.0874896 18.1709 0.262469L25.7388 7.86634C25.906 8.0344 26 8.26233 26 8.5C26 8.73767 25.906 8.9656 25.7388 9.13366L18.1709 16.7375C17.8226 17.0875 17.2579 17.0875 16.9096 16.7375C16.5613 16.3876 16.5613 15.8202 16.9096 15.4702L22.9549 9.39612H0.891878C0.399308 9.39612 0 8.99492 0 8.5C0 8.00508 0.399308 7.60387 0.891878 7.60387H22.9549L16.9096 1.52978C16.5613 1.17982 16.5613 0.612428 16.9096 0.262469Z" fill="white"/>
//   </g>
//   <defs>
//     <clipPath id="clip0_1349_762">
//       <rect width="26" height="17" fill="white"/>
//     </clipPath>
//   </defs>
// </svg>}
/>
</div>
  );
};

export default AppDev;
