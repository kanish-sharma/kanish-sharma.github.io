import React from "react";
import {
  AboutDetailedDiv,
  AboutDetailedInfo,
  AboutDiv,
  AboutHeading,
  AboutInfo,
  AboutPic,
  AboutPicSpan,
  BasicInfo,
  BasicInfoSmall,
  CompanyDesignation,
  CompanyDuration,
  CompanyName,
  ContactInfo,
  Designation,
  ExperienceCompany,
  ExperienceDetails,
  ExperienceDiv,
  ExperienceInfo,
  Footer,
  Mail,
  Name,
  NameInfo,
} from "./Profile.styled";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const Profile = () => {
  let skills = [
    "React",
    "Node",
    "MongoDB",
    "Redux",
    "React-Native",
    "Docker",
    "Salesforce",
    "Git",
    "JIRA",
    "Agile",
    "React Testing library",
  ];
  return (
    <>
      <BasicInfo>
        <BasicInfoSmall>
          <NameInfo>
            <Name>Kanish Sharma</Name>
            <Designation>Associate Technical Lead</Designation>
          </NameInfo>
          <ContactInfo>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "row",
                margin: "10px"
              }}
            >
              <li>
                <a
                  target="_blank"
                  href="https://github.com/kanish-sharma"
                  rel="noreferrer"
                >
                  {" "}
                  <GitHubIcon fontSize="large" htmlColor="black" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.instagram.com/the_kanish_sharma/"
                  rel="noreferrer"
                >
                  {" "}
                  <InstagramIcon
                    fontSize="large"
                    htmlColor="#3f729b"
                  />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/kanish-sharma-75ba0756/"
                  rel="noreferrer"
                >
                  {" "}
                  <LinkedInIcon fontSize="large" htmlColor="#0072b1" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://twitter.com/kanishn"
                  rel="noreferrer"
                >
                  {" "}
                  <TwitterIcon fontSize="large" htmlColor="#1DA1F2" />
                </a>
              </li>
            </ul>
            <span>
              E-Mail: <Mail href="/">kanoosharma@gmail.com</Mail>{" "}
            </span>
          </ContactInfo>
        </BasicInfoSmall>
      </BasicInfo>
      <AboutInfo>
        <AboutDiv>
          <AboutHeading>About Me</AboutHeading>
        </AboutDiv>
        <AboutDetailedDiv>
          <AboutPic>
            <AboutPicSpan>
              <img
                src="/profileLinkedIn.jpg"
                alt="Profile Pic"
                height="30%"
                width="50%"
                style={{ objectFit: "fill", borderRadius: "100px" }}
              ></img>
            </AboutPicSpan>
          </AboutPic>
          <AboutDetailedInfo>
            <span>
              Hi ,My name is Kanish and I am currently an Associate Technical Lead
              at Grazitti Interactive with over 6 years of experince.
            </span>
            <br />
            <span>
              Languages I have experience with are :{" "}
              <mark
                style={{
                  backgroundColor: "black",
                  color: "white",
                  padding: "2px 2px",
                  fontWeight: "400",
                  brightness: "0.85",
                  borderRadius: "5px",
                }}
              >
                JavaScript{" "}
              </mark>{" "}
              and{" "}
              <mark
                style={{
                  backgroundColor: "black",
                  color: "white",
                  padding: "2px 2px",
                  fontWeight: "400",
                  brightness: "0.85",
                  borderRadius: "5px",
                }}
              >
                {" "}
                Python
              </mark>
            </span>
            <br />
            <span>
              Framework and tools I have used are:{" "}
              {skills.map((skill, i) => (
                <span>
                  <mark
                    style={{
                      backgroundColor: "black",
                      color: "white",
                      padding: "2px 2px",
                      fontWeight: "400",
                      brightness: "0.85",
                      borderRadius: "5px",
                    }}
                  >
                    {skill}
                  </mark>
                  ,{" "}
                </span>
              ))}
            </span>
          </AboutDetailedInfo>
        </AboutDetailedDiv>
      </AboutInfo>
      <ExperienceInfo>
        <AboutDiv>
          <AboutHeading>Experience</AboutHeading>
        </AboutDiv>
        <ExperienceDiv>
          <ExperienceCompany>
            <CompanyName>Grazitti Interactive</CompanyName>
            <CompanyDesignation>Associate Technical Lead</CompanyDesignation>
            <CompanyDuration>Oct 2025- Present</CompanyDuration>
          </ExperienceCompany>
          <ExperienceDetails>
            <p>
              Working as an Associate Technical Lead in Professional Service team. <br/>
              Handled Client delievery expectations, Client communication and internal communication <br/>
              Review the code/work of 1 software engineer and directly manage 1 software engineer fresher.
              Handle complex clients and brainstorm solutions for customisations.
            </p>
          </ExperienceDetails>
        </ExperienceDiv>
        <ExperienceDiv>
          <ExperienceCompany>
            <CompanyName>Grazitti Interactive</CompanyName>
            <CompanyDesignation>Senior Software Engineer</CompanyDesignation>
            <CompanyDuration>July 2024 - Oct 25</CompanyDuration>
          </ExperienceCompany>
          <ExperienceDetails>
            <p>
              Contributed to internal modules of SearchUnify, an AI-powered cognitive search platform.<br/>
              Developed custom API crawler for Adobe Experience Manager, enhancing automation and data retrieval.
              Handle deadlines for Implementation of product in client salesforce environments.
            </p>
          </ExperienceDetails>
        </ExperienceDiv>
        <ExperienceDiv>
          <ExperienceCompany>
            <CompanyName>Grazitti Interactive</CompanyName>
            <CompanyDesignation>Software Engineer</CompanyDesignation>
            <CompanyDuration>Oct 2022 - July 2024</CompanyDuration>
          </ExperienceCompany>
          <ExperienceDetails>
            <p>
              Utilized ELK stack (Elasticsearch, Logstash, Kibana) for log analysis and debugging efficiency.<br/>
              Debug issue faced by client while using our product SearchUnify.
              Integrated React.js code across Salesforce, Zendesk, Monday.com, and Higher Logic Vanilla platforms.
            </p>
          </ExperienceDetails>
        </ExperienceDiv>
        <ExperienceDiv>
          <ExperienceCompany>
            <CompanyName>Infosys Limited</CompanyName>
            <CompanyDesignation>Senior Systems Engineer</CompanyDesignation>
            <CompanyDuration>Jan 2022-present</CompanyDuration>
          </ExperienceCompany>
          <ExperienceDetails>
            <p>
              Worked as Senior Systems Engineer on a React SPA. The application
              was a budgeting manager for a large financial services giant. The
              application was to be modernised from an already existing version.
              Worked on making common components to be used accross the app.
              Worked on making an Excel like Grid to be used for carrying out
              budgeting.
            </p>
          </ExperienceDetails>
        </ExperienceDiv>
        <ExperienceDiv>
          <ExperienceCompany>
            <CompanyName>Infosys Limited</CompanyName>
            <CompanyDesignation>Systems Engineer</CompanyDesignation>
            <CompanyDuration>April 2020- Dec 2021</CompanyDuration>
          </ExperienceCompany>
          <ExperienceDetails>
            <p>
              Worked on a React-Native app used by a insurance service giant.
              The app was used to make insurance policies and update/service
              policies. Worked on making the UI responsive as it was only made
              to run on a tablet.Also worked on making the servicing part of
              policies which involved making Ui forms and making APi calls for
              the same.
            </p>
          </ExperienceDetails>
        </ExperienceDiv>
        <ExperienceDiv last={true}>
          <ExperienceCompany>
            <CompanyName>Infosys Limited</CompanyName>
            <CompanyDesignation>Systems Engineer Trainee</CompanyDesignation>
            <CompanyDuration>Nov 2019 - March 2020</CompanyDuration>
          </ExperienceCompany>
          <ExperienceDetails>
            <p>
              Learnt a lot of basics OOPS concepts such as Encapsulation,
              Abstraction, Inheritance, Polymorphism. Python was the language
              used to teach all these. Also learnt basic loops and other basic
              concepts such as operators and logic building. In the second phase
              learnt Swift Language and Cocoa Touch. Made a small application to
              demonstrate Cocoa touch learning in a team of four people.
            </p>
          </ExperienceDetails>
        </ExperienceDiv>
      </ExperienceInfo>
      <ExperienceInfo>
        <AboutDiv>
          <AboutHeading>Education</AboutHeading>
        </AboutDiv>
        <ExperienceDiv last={true}>
          <ExperienceCompany>
            <CompanyName>SLIET Deemed University</CompanyName>
            <CompanyDesignation>
              B.E - Mechanical Engineering{" "}
            </CompanyDesignation>
            <CompanyDuration>2016-2019</CompanyDuration>
          </ExperienceCompany>
          <ExperienceDetails>
            <p>
              During my Degree ,I learnt lots of key skills such as team work
              and project management. Although the main focus was on learning
              technical things but I also used my free time to play Chess and
              basketball.
            </p>
          </ExperienceDetails>
        </ExperienceDiv>
      </ExperienceInfo>
      <ExperienceInfo>
        <AboutDiv>
          <AboutHeading>When I'm not programming</AboutHeading>
        </AboutDiv>
        <ExperienceDiv last={true}>
          <p>
            When I am not programming, I am usually off on some shopping spree
            or looking for good places to eat. I also like to listen to music
            and binge-watch web series/movies.I also like to play Chess and
            badminton in my free time.
          </p>
        </ExperienceDiv>
      </ExperienceInfo>
      <Footer>
        <i>Kanish Sharma </i> -{" "}
        <a
          href="mailto:kanoosharma@gmail.com"
          target="_blank"
          rel="noreferrer"
          style={{ color: "black" }}
        >
          <i>kanoosharma@gmail.com</i>
        </a>
      </Footer>
    </>
  );
};

export default Profile;
