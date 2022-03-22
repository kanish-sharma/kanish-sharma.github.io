import styled from "styled-components";

export const BasicInfo = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  justify-content: center;
  align-items: center;
  height: 15rem;
  width: 100%;
  margin: 0;
  /* background-color: blue; */
`;

export const BasicInfoSmall = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  margin-top: 5em;
  height: 2em;
  width: 70em;
  margin: 0;
`;

export const NameInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: white;
  width: 50%;
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 50%;
`;

export const Name = styled.h1`
  display: flex;
  flex-direction: column;
  margin: 0;
  font-weight: 500;
`;

export const Designation = styled.h2`
  display: flex;
  flex-direction: column;
  margin: 0;
  font-size: large;
  font-weight: 400;
`;

export const Mail = styled.a`
  color: black;
  cursor: pointer;
  font-weight: bold;
`;
export const Site = styled.a`
  color: black;
  cursor: pointer;
`;

export const IconEnvelope = styled.div`
  background-color: white;
  border-width: 2px;
  border-style: solid;
  border-radius: 80px;
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 10px;
  &:hover {
    background-color: white;
    border-width: 2px;
    border-style: solid;
    border-radius: 80px;
    padding: "0px 10px 10px 10px";s
  }
`;
export const AboutInfo = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: center;
  align-items: center;
  /* height: 25rem; */
  width: 100%;
  max-height: 20rem;
  /* flex-wrap: wrap; */
`;

export const AboutDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  align-items: center;
  width: 40em;
  margin-bottom: 4em;
  margin: 0;
`;

export const AboutHeading = styled.h1`
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: center;
  align-items: center;
  border-bottom-color: grey;
  border-bottom-width: 0.08em;
  border-bottom-style: dashed;
  width: 35em;
  font-weight: 200;
`;

export const AboutDetailedDiv = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  justify-content: center;
  align-items: center;
  width: 80em;
  margin-bottom: 4em;
`;

export const AboutPic = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: center;
  align-items: center;
  /* border-width: 3px;
  border-color: black;
  border-style: solid; */
  width: 35%;
`;

export const AboutPicSpan = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: center;
  align-items: center;
  height: 35%;
  /* border-width: 3px;
  border-color: black;
  border-style: solid; */
`;

export const AboutDetailedInfo = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: center;
  align-items: flex-start;
  width: 75%;
  margin-bottom: 4em;
  margin-right: 5em;
  flex-wrap: wrap;
`;

export const ExperienceInfo = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: center;
  align-items: center;
  height: 25%;
  width: 100%;
`;

export const ExperienceDiv = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  justify-content: center;
  align-items: center;
  width: 70em;
  margin-bottom: 1em;
  border-bottom-color: ${(props) => (props.last ? "white" : "grey")};
  border-bottom-width: 0.08em;
  border-bottom-style: dashed;
`;

export const ExperienceCompany = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: flex-start;
  align-items: flex-start;
  width: 30%;
  align-self: flex-start;
`;

export const ExperienceDetails = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: center;
  align-items: center;
  /* height: 25%; */
  width: 70%;
`;

export const CompanyName = styled.h1`
  color: black;
  margin: 0;
  font-weight: 500;
  font-size: 1.4em;
`;

export const CompanyDesignation = styled.h2`
  color: black;
  margin: 0;
  font-weight: 500;
  font-size: 1em;
`;

export const CompanyDuration = styled.h3`
  color: grey;
  margin: 0;
  font-weight: 200;
  font-size: 1em;
`;

export const EducationInfo = styled.div`
  display: flex;
  flex-direction: column;
  background-color: yellowgreen;
  justify-content: center;
  align-items: center;
  height: 25%;
  width: 100%;
`;

export const Footer = styled.p`
display:flex;
align-items: center;
justify-content: center;

`
