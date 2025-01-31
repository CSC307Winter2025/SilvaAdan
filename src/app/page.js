import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // Job list
  let jobs = [{
    id: 1,
    name: "Jr. SOC Analyst Student Assistant",
    organization: "Cal Poly SLO",
    start: "March 2024",
    end: "Present",
    description: "Use Splunk to monitor and analyze network traffic, investigate security incidents, and respond to alerts. Collaborate with the security team to develop and implement security policies and procedures. Conduct vulnerability assessments and penetration tests to identify and remediate security risks. Assist with security awareness training and incident response exercises."
  }, {
    id: 2,
    name: "Cybersecurity Intern",
    organization: "NGHTWLL Consulting LLC",
    start: "January 2024",
    end: "Present",
    description: "Conduct security assessments and penetration tests to identify vulnerabilities in clients' systems, networks, and applications. Develop and implement security policies, procedures, and controls to protect clients' data and assets. Monitor and analyze security events and incidents to detect and respond to threats. Assist with security awareness training and incident response exercises."
  }, {
    id: 3,
    name: "FRC Software Lead",
    organization: "FRC Team 3512",
    start: "June 2022",
    end: "June 2023",
    description: "Worked with a team of students to design, build, and program a robot to compete in the FIRST Robotics Competition. Led the software team in developing code for the robot's autonomous and teleoperated modes. Collaborated with other team members to integrate sensors, actuators, and other hardware components into the robot's control system. Participated in regional and national competitions, where the team won several awards for its robot design and performance."
  }];

  // Add a new job to the list
  function addJob(name, organization, start, end, description) {
    let newJob = {
      id: jobs.length + 1,
      name: name,
      organization: organization,
      start: start,
      end: end,
      description: description
    };
  }

  // Job list component
  let jobsHTML = jobs.map((job) => {
    return (
    <ul key={job.id}>
    <li><span><Link href={`/job/${job.id}`}>{job.name}</Link></span></li>
    <li><span>{job.start} - {job.end}</span></li>
    </ul>);
  });

  // Page source code
  return (
    <div>
      <h1><b>Adan Silva&apos;s Resume</b></h1>
      <h2><b>Contact Information</b></h2>
      <ul>
        <li><b>Email:</b> <Link href="mailto:adan.t.silva77@gmail.com">adan.t.silva77@gmail.com</Link></li>
        <li><b>GitHub Username:</b> <Link href="https://github.com/secmancer">secmancer</Link></li>
        <li><b>LinkedIn Username:</b> <Link href="https://www.linkedin.com/in/adan-silva-secmancer/">adan-silva-secmancer</Link></li>
      </ul>
      <h2><b>My Projects</b></h2>
      <ul>
          <li><b>SwerveBot-2022</b> A template for a swerve drive using CTRE CANcoders, CTRE Pigeon2 gyro, and REV NEO/SparkMaxes. Used during the 2022 offseason and officially adopted by several other teams. Some code was push up to the well known YAGSL swerve library.</li>
          <li><b>Robot-2023</b>: Source code for a FRC robot designed to play the 2022-2023 FRC season&apos;s game: <i>CHARGED UP!</i></li>
          <li><b>Password Strength Analyzer and Generator:</b> A tool that evaluates the strength of user passwords and suggests stronger alternatives, along with including a password generator that creates secure, randomized passwords based on user-defined criteria.</li>
          <li><b>Ransomware Detection and Prevention Tool</b> A system that monitors file systems for ransomware-like behavior, such as rapid file encryption. It also isolates infected systems and alert administrators before significant damage occurs.</li>
          <li><b>Encrypted File Sharing Platform</b> A secure platform for sharing files with end-to-end encryption. The system includes features like self-destructing files and access control to ensure data security.</li>
          <li><b>Penetration Testing Framework</b> A comprehensive penetration testing framework that automates and streamlines the process of identifying vulnerabilities in systems, networks, and applications. It also features a suite of tools and modules designed to simulate real-world cyberattacks, allowing security professionals to assess the robustness of their defenses.</li>
      </ul>
      <h2><b>Work Experience</b></h2>
      {jobsHTML}
      <h2><b>My Skills</b></h2>
      <ul>
        <li>Security Operations</li>
        <li>Operating Systems</li>
        <li>Networking</li>
        <li>Centralized Services Administration</li>
        <li>Vulnerability Assessment</li> 
        <li>Security Engineering</li>
        <li>Information Technology</li>
        <li>Ethical Hacking</li>
        <li>Cybersecurity</li>
        <li>Writing</li>
        <li>Written Communication</li>
        <li>Web Development</li>
      </ul>
    </div>
  );
}
