/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Priya's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Priya's Portfolio",
    type: "website",
  },
};

//Home Page
const greeting = {
  title: "SHANMUGA PRIYA",
  logo_name: "ShanmugaPriya",
  nickname: "DIGITAL MARKETER",
  subTitle:
    "Highly motivated digital marketing fresher with solid understanding of online marketing principles, proficient in WordPress, social media, and google Analysis.",
  resumeLink:
    "https://drive.google.com/file/d/1ruPKGsM2ResaszAp14YVBXzNrFMuWryS/view?usp=drive_link"
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/shanmuga-priya-80b67a246",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:shanmugapriya6111@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/priyagopal_611/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Digital Marketing",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Digital marketing is the promotion of products, services, or brands through various online channels.",
        "⚡ It leverages the internet to connect with targeted audiences, enhance brand visibility, and drive measurable results.",
        "⚡ Digital marketing is data-driven, highly adaptable, and can be precisely targeted to specific customer segments.",
      ],
      softwareSkills: [
      ],
    },
    {
      title: "SEO & SMM",
      fileName: "FullStackImg",
      skills: [
        "⚡ SEO focuses on improving a website’s visibility in search engine results to drive organic (non-paid) traffic.",
        "⚡ Includes optimizing keywords, meta descriptions, on-page content, website structure, and building backlinks.",
        "⚡ SSM is about promoting brands and engaging with audiences on social media platforms (e.g., Facebook, Instagram, Twitter, LinkedIn).",
        "⚡ Includes creating and sharing content, running social ads, influencer partnerships, and community engagement.",
      ],
      softwareSkills: [
      ],
    },
    {
      title: "Web Designing",
      fileName: "DesignImg",
      skills: [
        "⚡ WordPress is a powerful, user-friendly content management system (CMS) that allows for flexible and dynamic web design.",
        "⚡ It’s ideal for creating a range of websites, from personal blogs to full-scale business sites and e-commerce platforms.",
      ],
      softwareSkills: [
      ],
    },  
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
  ],
};

const degrees = {
  degrees: [
    {
      title: "Vysya College of Arts and Science - Salem",
      subtitle: "B.Sc in Computer Science",
      logo_path: "vysya.png",
      alt_name: "Vysya College",
      duration: "2019 - 2022",
      descriptions: [
        "⚡ I have studied bascis of all the Computer Science fields with various Applications",
        "⚡ Apart from this, I have done courses on Digital Marketing,Product and Brand Management",
      ],
      website_link: "http://vysyainfo.in",
    },
    {
      title: "Sona School of Management - Salem",
      subtitle: "Master of Bussiness Administartion",
      logo_path: "sona.png",
      alt_name: "Sona school of managament",
      duration: "2022 - 2024",
      descriptions: [
        "⚡ An MBA covers core areas such as finance, marketing, operations, human resources, and strategic management, providing a broad foundation in business principles and practices.",
        "⚡ The program emphasizes leadership skills, critical thinking, and decision-making, often including projects, internships.",
      ],
      website_link: "https://www.sonabusinessschool.com",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Financial Modeling and Valuation",
      subtitle: "- Internshala Trainings",
      logo_path: "internshala.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1NgmWHRdKosqHR-rxAkGXMO2WvQ7KNjjh/view?usp=drive_link",
      alt_name: "Internshala",
      color_code: "#ffff",
    },
    {
      title: "Product and Brand Management",
      subtitle: "- NPTEL",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1WOXBDIgnjUthVM0YfEJyMziNfUJDOnFH/view?usp=drive_link",
      alt_name: "nptel",
      color_code: "#00000099",
    },
    {
      title: "Investment Banking Certification",
      subtitle: "- Equigenius Services",
      logo_path: "eqservices.png",
      certificate_link:
        "https://drive.google.com/file/d/1U_w9Rj-FBBfIjlsGt1OJDuB5ymT437BJ/view?usp=drive_link",
      alt_name: "Eqservices",
      color_code: "#0C9D5899",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    " Initially started my career with a freelancing startup called JP DIGITAL in which organizations were enhanced in a digital way with help of SEO & SMM  and also took part in many internship & volunteership. I'm currently working in an evolving startup NUVLINZ PVT. LTD.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Digital Marketing Specialist",
          company: "Nulinz Private Limited",
          company_url: "https://www.nulinz.com/",
          logo_path: "nuvlinz.png",
          duration: "September 2024 - Present",
          location: "Salem, TamilNadu",
          description:
          "Nulinz Technologies is a forward-thinking tech company dedicated to developing innovative digital solutions that drive growth and efficiency for its clients. As a Digital Marketing Specialist at Nulinz Technologies, I contributed to the company’s mission by creating impactful digital marketing strategies to elevate brand presence, engage target audiences, and drive measurable growth.",
          color: "#000000",
        },
        {
          title: "Digital Marketer",
          company: "JP Digital",
          company_url: "http://jpdigitalsalem.byethost3.com/?i=1",
          logo_path: "jp digital.png",
          duration: "January 2024",
          location: "Salem, TamilNadu",
          description:
            "JP Digital is a dynamic freelancing startup specializing in digital marketing solutions tailored to help businesses grow their online presence. Founded with a passion for creative digital strategy and data-driven marketing.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships & Projects",
      experiences: [
        {
          title: "DM Intern",
          company: "Aahhaa Residency",
          company_url: "https://www.aahhaaresidency.com",
          logo_path: "aahhaa residency.jpg",
          duration: "June 2024 - August 2024",
          location: "Salem, TamilNadu",
          description:
            "Designed and launched a WordPress website for a hotel, integrated google My Business for Enhanced online presence and booking capabilities.",
          color: "#000000",
        },
        {
          title: "Product Branding Specialist",
          company: "Sam Turbo Industry Private  Limited",
          company_url: "https://www.sampumps.com/",
          logo_path: "samindus.jpg",
          duration: "Feburary 2024 - May 2024",
          location: "Coimbatore, TamilNadu",
          description:
            "Analyzed secondary data on product branding and marketing to identify key factors influencing consumer engagement, brand loyalty and market success to understand the marketing strategies.",
          color: "#ee3c26",
        },
        {
          title: "DM Intern",
          company: "Venkateshwara Cars",
          company_url: "https://www.venkateshwaracars.com/",
          logo_path: "venkat cars.jpg",
          duration: "January 2024 - Feburary 2024",
          location: "Salem, TamilNadu",
          description:
            "Boosted car sales leads by 30% and improved online presence using business WhatsApp, Instagram ads , sending targeted messages and providing quick customer support to drive sales and engagement.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Community Development Program (suicide Prevention)",
          company: "NGO",
          company_url: "https://about.google/",
          logo_path: "voulteer.jpg",
          duration: "October 2022 - January 2023",
          location: "Salem, TamilNadu",
          description:
            "Developed and Implemented ‘Empowering Minds’ program to promote mental health awareness and suicide preventions in school and colleges.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects met the client's needs and enhanced them with successful marketing statergy",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "MS.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you in Digital Marketing with the Best Strategies",
  },
  blogSection: {
    title: "Freelancer",
    subtitle:
      "I also like to expand my knowledge by doing Freelancing projects. Visit JP Digital in need !!",
    link: "http://jpdigitalsalem.byethost3.com/?i=1",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Kalliyappa Chettiyar Colony, Peramanur",
    locality: "Salem",
    country: "India",
    region: "TamilNadu",
    postalCode: "636007",
    streetAddress: "Kalliyappa Chettiyar Colony",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/hCfJ7bNSTB6Gbosz8?g_st=aw",
  },
  phoneSection: {
    title: "Contact",
    subtitle: "+91 99522 88261",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
