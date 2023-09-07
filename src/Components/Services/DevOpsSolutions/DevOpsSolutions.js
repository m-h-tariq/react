import React from "react";
import BgVideo from "../../SharedComponents/Bgvideo/BgVideo";
import Features1 from "../../SharedComponents/Featurs/Features1";
import { Services2 } from "../../SharedComponents/Services2/Services2";
import Images from "../../Images/images";
import CustomerBenefits from "../../SharedComponents/CustomerBenefits/CustomerBenefits";
export const DevOpsSolutions = () => {
  return (
    <div>
      <BgVideo
        bg={Images.Artificial_intelligent_bg}
        name="/ DevOps Solutions"
        desc1=""
        desc2="Do Better with "
        desc3="DevOps Excellence"
        desc4="We offer comprehensive DevOps services that enable organizations to bridge the gap between development and operations, enhancing collaboration, efficiency, and software delivery."
        see="Unlock DevOps Potential"
      />
      <Features1 Software_Heading="software solutions"
    Produce="We can produce the best "
    third_text=" for you"
    Intelligent_Heading="Intelligent Automation"
    Intelligent_text=" Streamline and optimize your business processes by leveraging the
    power of artificial intelligence. Automate repetitive tasks, improve
    operational efficiency, and reduce human errors."
    Natural_Heading="Natural Language Processing"
    Natural_text="Enhance customer interactions and extract valuable insights from
    unstructured data such as text and speech. Understand customer
    sentiment, enable chatbots, and improve information retrieval
    systems."
    Machine_Heading="Machine Learning"
    Machine_text=" Harness the potential of data by utilizing machine learning
    algorithms. Gain valuable insights, make data-driven decisions, and
    predict future trends and patterns based on historical data."
    Computer_Heading="Computer Vision"
    Computer_text="  Unlock the potential of visual data through advanced computer vision
    techniques. Perform image recognition, object detection, and video
    analysis to extract valuable information and make informed
    decisions."
    Predictive_Heading="Predictive Analytics"
    Predictive_text="Leverage predictive analytics capabilities powered by AI to forecast future trends, customer behavior, and market dynamics. "
    Personalized_Heading="Personalized Results"
    Personalized_text="Delight your customers with personalized recommendations based on
    their preferences and behaviors. Increase engagement, drive
    conversions, and create a unique user experience tailored to each
    individual."
    />
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
        data={
          [
            {
            text:"PyTorch",
            class:"all-logos-class change-picture",
          },
          {
            text:"TensorFlow",
            class:"all-logos-class Change-tensor",
          },
          {
            text:"Python",
            class:"all-logos-class Change-Python",
          },
          {
            text:"OpenCV",
            class:"all-logos-class change-open-cv",
          },

          ]
        }
       
      />
    </div>
  );
};
