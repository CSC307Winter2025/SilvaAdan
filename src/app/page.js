import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1><b>Adan Silva's Resume</b></h1>
      <h2><b>Contact Information</b></h2>
      <ul>
        <li><b>Email:</b> <Link href="mailto:adan.t.silva77@gmail.com">adan.t.silva77@gmail.com</Link></li>
        <li><b>GitHub Username:</b> <Link href="https://github.com/secmancer">secmancer</Link></li>
        <li><b>LinkedIn Username:</b> <Link href="https://www.linkedin.com/in/adan-silva-secmancer/">adan-silva-secmancer</Link></li>
      </ul>
      <h2><b>My Projects</b></h2>
      <ul>
          <li><b>SwerveBot-2022</b> A template for a swerve drive using CTRE CANcoders, CTRE Pigeon2 gyro, and REV NEO/SparkMaxes. Used during the 2022 offseason and officially adopted by several other teams. Some code was push up to the well known YAGSL swerve library.</li>
          <li><b>Robot-2023</b>: Source code for a FRC robot designed to play the 2022-2023 FRC season's game: <i>CHARGED UP!</i></li>
          <li><b>Password Strength Analyzer and Generator:</b> A tool that evaluates the strength of user passwords and suggests stronger alternatives, along with including a password generator that creates secure, randomized passwords based on user-defined criteria.</li>
          <li><b>Ransomware Detection and Prevention Tool</b> A system that monitors file systems for ransomware-like behavior, such as rapid file encryption. It also isolates infected systems and alert administrators before significant damage occurs.</li>
          <li><b>Encrypted File Sharing Platform</b> A secure platform for sharing files with end-to-end encryption. The system includes features like self-destructing files and access control to ensure data security.</li>
          <li><b>Penetration Testing Framework</b> A comprehensive penetration testing framework that automates and streamlines the process of identifying vulnerabilities in systems, networks, and applications. It also features a suite of tools and modules designed to simulate real-world cyberattacks, allowing security professionals to assess the robustness of their defenses.</li>
      </ul>
      <h2><b>Work Experience</b></h2>
      <p>WORK IN PROGRESS. come back later</p>
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
