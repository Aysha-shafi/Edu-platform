import { FiBookOpen } from "react-icons/fi";
import { LuGraduationCap } from "react-icons/lu";
import { BiBullseye } from "react-icons/bi";
import { LuAward, LuCrown } from "react-icons/lu";
import { FaUserFriends } from "react-icons/fa";

export const programs = [
  {
    title: "School Tuition",
    desc: "Classes 4-12 covering CBSE, ICSE, and State syllabus",
    icon: <FiBookOpen />,
    color: "bg-blue-500 text-white",
    features: [
      "Interactive Live Classes",
      "Doubt Clearing Sessions",
      "Regular Assessments",
    ],
  },
  {
    title: "College Tuition",
    desc: "BSc, BCom, BA, BTech and other degree programs",
    icon: <LuGraduationCap />,
    color: "bg-purple-500 text-white",
    features: [
      "Subject Experts",
      "Practical Learning",
      "Project Guidance",
    ],
  },
  {
    title: "Entrance Coaching",
    desc: "NEET, JEE, KEAM, CUET  preparation",
    icon: <BiBullseye />,
    color: "bg-green-500 text-white",
    features: ["Mock Tests", "Previous Year Papers", "Rank Prediction"],
  },
  {
    title: "Government Exams",
    desc: "SSC, Bank, PSC, Railway exam\npreparation",
    icon: <LuAward />,
    color: "bg-orange-500 text-white",
    features: ["Current Affairs", "Speed Training", "Interview Prep"],
  },
  {
    title: "UPSC Coaching",
    desc: "Prelims, Mains, Interview, Optional\nsubjects",
    icon: <LuCrown />,
    color: "bg-red-500 text-white",
    features: [
      "Comprehensive Coverage",
      "Essay Writing",
      "Personality Dev",
    ],
  },
  {
    title: "Skill Development",
    desc: "Professional skills and certification\ncourses",
    icon: <FaUserFriends />,
    color: "bg-teal-500 text-white",
    features: [
      "Industry Relevant",
      "Hands-on Practice",
      "Certificate",
    ],
  },
];
