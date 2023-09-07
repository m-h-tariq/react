import React from "react";
import Features1 from "../../SharedComponents/Featurs/Features1";
// import { Services1 } from "../../SharedComponents/Services1/Services1";
// import { Services2 } from "../../SharedComponents/Services2/Services2";
import BgVideo from "../../SharedComponents/Bgvideo/BgVideo";
import Images from "../../Images/images";
import CustomerBenefits from "../../SharedComponents/CustomerBenefits/CustomerBenefits";


const UserExperience = () => {
  return (
    <>
      <BgVideo
        bg={Images.User_bg}
        name="/ User Experience Design"
        desc1="Elevating"
        desc2="Experiences through"
        desc3="Intuitive Design"
        desc4="With a deep understanding of your target audience, we craft user-centric designs that engage, delight, and leave a lasting impression on your users."
        see="Enhance Your User Experience"
      />
       <Features1
    Produce="Utilise our"
    UI_knowledge=" UI/UX knowledge  "
    to=" to "
    Software_Heading=""
    third_text=" create a great product"
    Intelligent_Heading="User-Centric Design"
    Intelligent_text=" Put your users at the centre of your design process. Create intuitive and seamless user experiences that meet their needs and expectations, leading to increased user satisfaction and engagement. "
    Natural_Heading="Responsive Design"
    Natural_text="Ensure your website or application looks and functions flawlessly across a variety of devices and screen sizes. Provide a consistent and optimized user experience regardless of the device your users choose to access your product."
    Machine_Heading="Visual Branding"
    Machine_text=" Establish a strong brand identity through cohesive visual elements and aesthetics. Design visually appealing interfaces that resonate with your target audience and effectively communicate your brand message."
    Computer_Heading="Information Architecture"
    Computer_text="  Optimize the structure and organization of your content to facilitate easy navigation and find ability. Create logical and intuitive information hierarchies that enable users to quickly locate the information they seek."
    Predictive_Heading="Accessibility Design"
    Predictive_text="Ensure your digital products are accessible to all users, including those with disabilities. Implement inclusive design principles and techniques to provide equal access and a seamless user experience for everyone. "
    Personalized_Heading="Prototyping and Testing"
    Personalized_text="Iterate and refine your designs based on user feedback and testing. Use prototyping techniques to validate design decisions, uncover usability issues, and create highly usable and intuitive interfaces."
    />
    
      

      <div className="">
        <div className="container-fluid services-div3">
          <div className="row"></div>
        </div>
      </div>
      <CustomerBenefits
        Heading_Start="How customer"
        Heading_second_text="benefits from our"
        Heading_third_text="User Experience Design"
        Heading_forth_text="Services"
        Paragraph_text="  Explore how our UI/UX redesign transformed a leading e-commerce platform's user experience and boosted their conversion rates. By conducting extensive user research, we identified pain points and optimized the user journey, resulting in a streamlined and intuitive interface. The revamped UI, complemented by visually appealing design elements, led to a 40% increase in user engagement."
        Users_value="1000+"
        Users="Users"
        BgImage={Images.User_Service}
        Union_svg={Images.Union}
        Tech_stack="Tech Stack"
        data={
          [
            {
              text:"Figma",
              class:"all-logos-class figma",
            },
            {
              text:"Sketch",
              class:"all-logos-class sketch",
            },
            {
              text:"Invision",
              class:"all-logos-class linkedin",
            },
            {
              text:"Adobe xd",
              class:"all-logos-class adobe",
            },
          ]
        }
        
      />

    </>



    
  );
};

export default UserExperience;
