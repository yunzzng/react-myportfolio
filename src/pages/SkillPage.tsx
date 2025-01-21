import React, { FC } from "react";
import styles from "../css/skill.module.css";
import skills, { Skill } from "../data/skills";

type SkillProps = Skill;

const SkillComponent: React.FC<SkillProps> = ({ name, percentage, icon }) => {
  return (
    <div
      className={styles.skillItem}
      style={{ "--progress": `${percentage}%` } as React.CSSProperties}
    >
      <div className={styles.circle}>
        <div className={styles.skillIcon}>
          <img src={icon} alt={name} />
        </div>
        <div className={styles.progressText}>{percentage}%</div>
      </div>
      <div>{name}</div>
    </div>
  );
};

const SkillPage: FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Skill</h2>
      <div className={styles.skillContainer}>
        {skills.map((skill, index) => (
          <SkillComponent
            key={index}
            name={skill.name}
            percentage={skill.percentage}
            icon={skill.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillPage;