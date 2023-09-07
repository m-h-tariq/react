
import styles from "./Property1Variant3.module.css";
import React from "react";
import { Link } from "react-router-dom";
import Images from "../../Images/images";
const Property1Variant3 = () => {

  // function HideItem() {
    
  //   var element = document.getElementById("Property1Variant3_frame4variant3__nzBsi");
    
  //   element.style.display = " none";
  // }
  
  
  return (
    
    <div className={styles.frame4variant3}>
      <div className={styles.background_color_effect}>

      </div>
      {/* <div className={styles.frame4variant3Inner}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.frameItem} />
        </div>
      </div> */}
      {/* <b className={styles.services}>Services</b>
      <div className={styles.frame4variant3Child} />
      <div className={styles.frame4variant3Item} />
      <div className={styles.rectangleDiv} />
      <div className={styles.frame4variant3Child1} />
      <b className={styles.portfolio}>Portfolio</b>
      <div className={styles.parent}>
        <b className={styles.b}>+1 (302) 321-4914</b>
        <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
      </div>
      <b className={styles.aboutUs}>About Us</b>
      <div className={styles.contactUsWrapper}>
        <b className={styles.contactUs}>Contact Us</b>
      </div>
      <div className={styles.bigEntities}>Big Entities</div>
      <img
        className={styles.imgpshFullsizeAnim2Icon}
        alt=""
        src="/imgpsh-fullsize-anim-1@2x.png"
      />
      <img
        className={styles.frame4variant3Child2}
        alt=""
        src="/vector-31.svg"
      /> */}
      <div className="services_main">
      <div className={styles.makeTechnologyWork}>
        <a> Make technology work for your business </a>
      </div>
      <div className={styles.artificialIntelligence}>
        <Link to="/services/artificialintelligence" className={styles.artificialIntelligence1}>
          Artificial Intelligence
        </Link>
      </div>
      <div className={styles.naturalLanguageProcessing}>
        Natural Language Processing
      </div>
      <div className={styles.fullStackDevelopment}>Full Stack Development</div>
      <div className={styles.customSoftwareDevelopment}>
        Custom Software Development
      </div>
      <div className={styles.platformAsA}>Platform as a Service</div>
      <div className={styles.testAutomationFramework}>
        Test Automation Framework Development:
      </div>
      <div className={styles.scalableStaffingSolutions}>
        Scalable staffing solutions
      </div>
      <div className={styles.mobileAppDesign}>
        Mobile App Design and Development
      </div>
      <div className={styles.userResearch}>User Research</div>
      <div className={styles.deepNeuralNetwork}>Deep Neural Network</div>
      <div className={styles.webAppMaintenance}>
        Web App Maintenance and Support
      </div>
      <div className={styles.softwareSupportAnd}>
        Software Support and Maintenance
      </div>
      <div className={styles.infrastructureAsA}>
        Infrastructure as a Code/ Service
      </div>
      <div className={styles.automatedTestScript}>
        Automated Test Script Development
      </div>
      <div className={styles.mobileAppTesting}>
        Mobile App Testing and Deployement
      </div>
      <div className={styles.linearRegression}>Linear Regression</div>
      <div className={styles.webAppConsulting}>Web App Consulting</div>
      <div className={styles.buildAutomationAnd}>
        Build Automation and Deployment
      </div>
      <div className={styles.securityCompliances}>Security Compliances</div>
      <div className={styles.continuousIntegrationAnd}>
        Continuous Integration and Testing
      </div>
      <div className={styles.userInterfaceDesign}>User Interface design</div>
      <div className={styles.userTesting}>User Testing</div>
      <div className={styles.userExperienceDesign}>
        <Link to="/services/userexperiencedesign" className={styles.artificialIntelligence1}>User Experience Design</Link>
      </div>
      <div className={styles.webAppDevelopment}>
        <Link to="/webappdevelopment" className={styles.artificialIntelligence1}>Web App Development</Link>
      </div>
      <div className={styles.mobileAppDevelopment}>
        <Link to="/mobileappdevelopment" className={styles.artificialIntelligence1}>Mobile App Development</Link>
      </div>
      <div className={styles.blockchainDevelopment}>
        <Link to="/blockchaindevelopment" className={styles.artificialIntelligence1}>Blockchain Development</Link>
      </div>
      <div className={styles.softwareDevelopment}>
      <Link to="/softwaredevelopment" className={styles.artificialIntelligence1}>Software Development</Link>
      </div>
      <div className={styles.staffAugmentation}>
        <Link to="/staffaugmentation" className={styles.artificialIntelligence1}>Staff Augmentation</Link>
      </div>
      <div className={styles.devopsSolutions}>
        <Link to="/devopssolutions" className={styles.artificialIntelligence1}>DevOps Solutions</Link>
      </div>
      <div className={styles.qaAutomations}>
        <Link to="/aualityassuranceautomation" className={styles.artificialIntelligence1}>QA Automations</Link>
      </div>
      <div className={styles.container}>
      <div  className={styles.exploreOurOffer}> <Link to="/explore">Explore our services </Link></div>
      <img className={styles.component17Icon} alt="" src={Images.Button_Arrow} />
      </div>
      <div className={styles.frame4variant3Child3} />
      <div className={styles.frame4variant3Child4} />
      <div className={styles.frame4variant3Child5} />
      <div className={styles.frame4variant3Child6} />
      <div className={styles.frame4variant3Child7} />
      <div className={styles.frame4variant3Child8} />
      <div className={styles.frame4variant3Child9} />
      <div className={styles.frame4variant3Child10} />
      <div className={styles.frame4variant3Child11} />
      <div className={styles.smartContractDevelopment}>
        Smart Contract Development
      </div>
      <div className={styles.blockchainApplicationDevelop}>
        Blockchain Application Development
      </div>
      <div className={styles.blockchainConsultingAnd}>
        Blockchain Consulting and Integration
      </div>
    </div>
    </div>
  );
};

export default Property1Variant3;
