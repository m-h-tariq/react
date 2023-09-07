import styles from "./Features1.module.css";
const Features1 = (props) => {
  return (
    <div className={styles.features}>
      <div className={styles.featuresChild} />
      <div className={styles.weCanProduceContainer}>
        <span className={styles.weCanProduceContainer1}>
          <span>{props.Produce}</span>
          <span style={{color:"blue"}}>{props.UI_knowledge}</span>
          <span>{props.to}</span>
           <br></br>
          <span className={styles.softwareSolutions}>{props.Software_Heading}</span>
          <span>{props.third_text}</span>
        </span>
      </div>
      <div className={styles.featureCardParent}>
        <div className={styles.featureCard}>
          <div className={styles.featureCardChild} />
          <b className={styles.intelligentAutomation}>{props.Intelligent_Heading}</b>
          <div className={styles.streamlineAndOptimize}>
           {props.Intelligent_text}
          </div>
        </div>
        <div className={styles.component18}>
          <div className={styles.featureCardChild} />
          <b className={styles.intelligentAutomation1}>
            {props.Natural_Heading}
          </b>
          <div className={styles.streamlineAndOptimize}>
           {props.Natural_text}
          </div>
        </div>
        <div className={styles.component17}>
          <div className={styles.featureCardChild} />
          <b className={styles.intelligentAutomation}>{props.Machine_Heading}</b>
          <div className={styles.streamlineAndOptimize}>
           {props.Machine_text}
          </div>
        </div>
      </div>
      
      <div className={styles.component19Parent}>
        <div className={styles.component19}>
          <div className={styles.featureCardChild} />
          <b className={styles.intelligentAutomation}>{props.Computer_Heading}</b>
          <div className={styles.streamlineAndOptimize}>
          {props.Computer_text}
          </div>
        </div>
        <div className={styles.component20}>
          <div className={styles.featureCardChild} />
          <b className={styles.intelligentAutomation}>{props.Predictive_Heading}</b>
          <div
            className={styles.streamlineAndOptimize}
          >{props.Predictive_text}</div>
        </div>
        <div className={styles.component21}>
          <div className={styles.featureCardChild} />
          <b className={styles.intelligentAutomation}>{props.Personalized_Heading}</b>
          <div className={styles.streamlineAndOptimize}>
            {props.Personalized_text}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features1;
