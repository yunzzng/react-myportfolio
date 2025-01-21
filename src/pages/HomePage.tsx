import { FC } from "react";
import styles from "../css/home.module.css";
import { useNavigate } from "react-router-dom";
import certifications from "../data/certifications";
import portfolios from "../data/portfolios";
import aboutMe from "../data/about";
import educationAndExperience from "../data/educationAndExperience";
import news from "/img/news.png"
import about from "/img/about.png"
import education_experience from "/img/office.png"
import yunseul_img from "/img/yunseul.png"

type Certification = {
  name: string;
  date: string;
};

type Portfolio = {
  title: string;
  description: string;
  date: string;
};

type Education = {
  school: string;
  degree: string;
  period: string;
};

type Experience = {
  company: string;
  role: string;
  period: string;
};

const sortedCertifications: Certification[] = certifications.sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

const HomePage: FC = () => {
  const navigate = useNavigate();

  const handleClickMenu = (path: string) => {
    navigate(path);
  };

  return (
    <div className={styles.container}>
      {/* About Me 섹션 */}
      <section className={styles.aboutMeSection}>
        <div className={styles.imageContainer}>
          <img src={yunseul_img} alt="Profile" width="100%" />
        </div>
        <div className={styles.aboutText}>
          <h2 className={styles.heading}>
            <img src={about} alt="About" width="60" />
            About Me
          </h2>
          <p className={styles.paragraph}>{aboutMe.introduction}</p>
          {aboutMe.details.map((detail, index) => (
            <p key={index} className={styles.paragraph}>
              {detail}
            </p>
          ))}
        </div>
      </section>

      {/* 학력/경력 섹션 */}
      <section className={styles.section}>
        <h2 className={styles.heading}>
          <img src={education_experience} alt="Education & Experience" width="60" />
          Education & Experience
        </h2>
        <div className={styles.educationExperienceContainer}>
          {/* 학력 */}
          <div className={styles.educationContainer}>
            <h3>Education</h3>
            <ul className={styles.list}>
              {educationAndExperience.education.map((edu: Education, index: number) => (
                <li key={index} className={styles.listItem}>
                  <span className={styles.educationSchool}>{edu.school}</span>
                  <span className={styles.educationDegree}>{edu.degree}</span>
                  <span className={styles.educationPeriod}>{edu.period}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 경력 */}
          <div className={styles.experienceContainer}>
            <h3>Experience</h3>
            <ul className={styles.list}>
              {educationAndExperience.experience.map((exp: Experience, index: number) => (
                <li key={index} className={styles.listItem}>
                  <span className={styles.experienceCompany}>{exp.company}</span>
                  <span className={styles.experienceRole}>{exp.role}</span>
                  <span className={styles.experiencePeriod}>{exp.period}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* News 섹션 */}
      <section className={styles.section}>
        <h2 className={styles.heading}>
          <img src={news} alt="News" width="60" />
          Portfolio & Certification
        </h2>
        <div className={styles.newsContainer}>
          {/* 포트폴리오 리스트 */}
          <div className={styles.listContainer}>
            <div className={styles.newsHeader}>
              <h3>My Portfolio</h3>
              <button
                onClick={() => handleClickMenu("/portfolio")}
                className={styles.button}
              >
                자세히 보기
              </button>
            </div>
            <ul className={styles.list}>
              {portfolios.map((portfolio: Portfolio, index: number) => (
                <li key={index} className={styles.listItem}>
                  <div className={styles.portfolioTitle}>
                    <span>
                      {portfolio.title} [{portfolio.date}]
                    </span>
                  </div>
                  <div className={styles.portfolioDescription}>
                    <span>{portfolio.description}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* 자격증 리스트 */}
          <div className={styles.listContainer}>
            <div className={styles.newsHeader}>
              <h3>Certification</h3>
            </div>
            <ul className={styles.list}>
              {sortedCertifications.map((cert, index) => (
                <li key={index} className={styles.listItem}>
                  <span className={styles.certificationName}>{cert.name}</span>
                  <span className={styles.certificationDate}>{cert.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;