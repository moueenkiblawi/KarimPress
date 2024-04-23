
import { FaLaptopCode,FaPaintBrush,FaVideo ,FaBullhorn  } from "react-icons/fa";
import { MdOutlineManageHistory } from "react-icons/md";
import img from '../assets/eff2656efb895286c00bf452d9e9c117.jpg'
import value from '../assets/89e88328d619ed499aa9f099ab272b5e.jpg'
import { FaHeadset } from "react-icons/fa";
import { BsGift } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import { LuSettings2 } from "react-icons/lu";
import { SiGoogleoptimize } from "react-icons/si";
import memberOne from '../assets/member1.jpg'
import memberTwo from '../assets/member2.jpg'
import memberThree from '../assets/member3.jpg'
// import { FcSupport } from "react-icons/fc";
import back1 from '../assets/background4.jpg'
import back2 from '../assets/john-schnobrich-FlPc9_VocJ4-unsplash.jpg'
import back3 from '../assets/kenny-eliason-1-aA2Fadydc-unsplash.jpg'
import GraphicandDesign from '../assets/GraphicAndDesign.jpg'
import SoftwareSolution from '../assets/SoftwareSolution.jpg'
import Marketing from '../assets/Marketing.jpg'
import EventManagment from '../assets/EventManagment.jpg'
import VideoProduction from '../assets/VedioProduction.jpg'
import Camigns from '../assets/camigns.jpg'
export const routes=[
{
    name:"Home",
    path:"/",
},
{
    name:"About",
    path:"/About",
},
{
    name:"Services",
    path:"/Service",

},
{
    name:"Contact ",
    path:"/Contact",
},

];


export const analytics=[
    {
        name:"Active users",
        num:"12",
        desc:"M+",
    },
    {
        name:"Projects",
        num:"16",
        desc:'M+'

    },
    {
        name:"Support",
        num:"24",
        desc:"/7"

    },
];

export const features=[
    {
        title:"Choose a view",
        desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, asperiores.",

    },
    {
    title:"Meet your new bulter",
    desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, asperiores.",

    },
    {
        title:"Dive into the details",
        desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, asperiores.",

    },
    {
        title:"Power up",
        desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, asperiores.",
    },
    

];


export const counters=[
    {
        name:"Team Member",
        num:"500",
        desc:'+',
    },
    {
        name:"Client",
        num:"12",
        desc:'k+',
    },
    {
        name:"Projects",
        num:"390",
        desc:'+',

    },
    {
        name:"Meetings",
        num:"66",
        desc:'+',

    },
];

export const controls=[
    {
        num:"01",
        name:"Software Solution ",
        icon: FaLaptopCode,
    },
    {
        num:"02",
        name:"Digital Marketing",
        icon: FaBullhorn,
    },
    {
        num:"03",
        name:"Design and Branding",
        icon: FaPaintBrush,
    },
];

export const services=[
    {
        num:"01",
        title:"Software Solution",
        description:" Let's turn your vision into a reality and make a lasting impact in the digital realm. Contact us today to discuss your project ",
        icon: FaLaptopCode,
        Image:SoftwareSolution,
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure a veritatis aspernatur. Atque quo iusto blanditiis recusandae expedita pariatur reiciendis rem non excepturi voluptates. Ipsa odit alias explicabo est animi quidem quod cupiditate aperiam pariatur minus deserunt quos vero quia inventore maxime in ut veniam adipisci possimus sapiente, dignissimos nihil.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure a veritatis aspernatur. Atque quo iusto blanditiis recusandae expedita pariatur reiciendis rem non excepturi voluptates. Ipsa odit alias explicabo est animi quidem quod cupiditate aperiam pariatur minus deserunt quos vero quia inventore maxime in ut veniam adipisci possimus sapiente, dignissimos nihil.",

        subServices: [
            {
              num: "1.1",
              title: "Web Development",
              icon: FaLaptopCode,

              description: "Custom web development solutions tailored to your needs.",
            },
            {
              num: "1.2",
              title: "Mobile App Development",
              icon: FaLaptopCode,

              description: "Innovative mobile app solutions for iOS and Android platforms.",
            },

            {
                num: "1.3",
                title: "UI/UX Design",
                icon: FaLaptopCode,
                description: "Create intuitive and visually appealing user interfaces for your software.",
              },
        ],
    },

    {
        num: "02",
        title: "Digital Marketing",
        description: "Let's turn your vision into a reality and make a lasting impact in the digital realm. Contact us today to discuss your project",
        icon: FaBullhorn,
        Image: Marketing,
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure a veritatis aspernatur. Atque quo iusto blanditiis recusandae expedita pariatur reiciendis rem non excepturi voluptates. Ipsa odit alias explicabo est animi quidem quod cupiditate aperiam pariatur minus deserunt quos vero quia inventore maxime in ut veniam adipisci possimus sapiente, dignissimos nihil.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure a veritatis aspernatur. Atque quo iusto blanditiis recusandae expedita pariatur reiciendis rem non excepturi voluptates. Ipsa odit alias explicabo est animi quidem quod cupiditate aperiam pariatur minus deserunt quos vero quia inventore maxime in ut veniam adipisci possimus sapiente, dignissimos nihil.",
        subServices: [
          {
            num: "2.1",
            title: "Social Media Marketing",
            icon: FaBullhorn,
            description: "Effective social media strategies to boost your online presence.",
          },
          {
            num: "2.2",
            icon: FaBullhorn,
            title: "SEO Optimization",
            description: "Optimizing your website for search engines to increase visibility.",
          },
          {
            num: "2.3",
            title: "Email Marketing",
            icon: FaBullhorn,
            description: "Crafting compelling email campaigns to engage your audience.",
          },
         
        ],
      },
      {
        num: "03",
        title: "Design and Branding",
        description: "Let's turn your vision into a reality and make a lasting impact in the digital realm. Contact us today to discuss your project ",
        icon: FaPaintBrush,
        Image: GraphicandDesign,
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure a veritatis aspernatur. Atque quo iusto blanditiis recusandae expedita pariatur reiciendis rem non excepturi voluptates. Ipsa odit alias explicabo est animi quidem quod cupiditate aperiam pariatur minus deserunt quos vero quia inventore maxime in ut veniam adipisci possimus sapiente, dignissimos nihil.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure a veritatis aspernatur. Atque quo iusto blanditiis recusandae expedita pariatur reiciendis rem non excepturi voluptates. Ipsa odit alias explicabo est animi quidem quod cupiditate aperiam pariatur minus deserunt quos vero quia inventore maxime in ut veniam adipisci possimus sapiente, dignissimos nihil.",
        subServices: [
          {
            num: "3.1",
            title: "Graphic Design",
            icon: FaPaintBrush,
            description: "Creative graphic design solutions for visual communication.",
          },
          {
            num: "3.2",
            title: "Branding Strategy",
            icon: FaPaintBrush,
            description: "Strategic branding to establish a unique and memorable identity.",
          },
          {
            num: "3.3",
            title: "Print Design",
            icon: FaPaintBrush,
            description: "Print materials designed to leave a lasting impression.",
          },
        ],
      },
    {
        num: "04",
        title: "Event Management",
        description: "Let's turn your vision into a reality and make a lasting impact in the digital realm. Contact us today to discuss your project ",
        icon: FaVideo,
        Image: EventManagment,
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure a veritatis aspernatur. Atque quo iusto blanditiis recusandae expedita pariatur reiciendis rem non excepturi voluptates. Ipsa odit alias explicabo est animi quidem quod cupiditate aperiam pariatur minus deserunt quos vero quia inventore maxime in ut veniam adipisci possimus sapiente, dignissimos nihil.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure a veritatis aspernatur. Atque quo iusto blanditiis recusandae expedita pariatur reiciendis rem non excepturi voluptates. Ipsa odit alias explicabo est animi quidem quod cupiditate aperiam pariatur minus deserunt quos vero quia inventore maxime in ut veniam adipisci possimus sapiente, dignissimos nihil.",
        subServices: [
          {
            num: "4.1",
            title: "Event Planning",
            icon: FaVideo,
            description: "Comprehensive event planning services for a seamless experience.",
          },
          {
            num: "4.2",
            title: "Logistics Management",
            icon: FaVideo,
            description: "Efficient logistics planning to ensure the success of your event.",
          },
          {
            num: "4.3",
            title: "On-site Coordination",
            icon: FaVideo,
            description: "Professional on-site coordination for a stress-free event day.",
          },
        ],
      },
      {
        num: "05",
        title: "Video Production",
        description: "Let's turn your vision into a reality and make a lasting impact in the digital realm. Contact us today to discuss your project ",
        icon: MdOutlineManageHistory,
        Image: VideoProduction,
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure a veritatis aspernatur. Atque quo iusto blanditiis recusandae expedita pariatur reiciendis rem non excepturi voluptates. Ipsa odit alias explicabo est animi quidem quod cupiditate aperiam pariatur minus deserunt quos vero quia inventore maxime in ut veniam adipisci possimus sapiente, dignissimos nihil.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure a veritatis aspernatur. Atque quo iusto blanditiis recusandae expedita pariatur reiciendis rem non excepturi voluptates. Ipsa odit alias explicabo est animi quidem quod cupiditate aperiam pariatur minus deserunt quos vero quia inventore maxime in ut veniam adipisci possimus sapiente, dignissimos nihil.",
        subServices: [
          {
            num: "5.1",
            title: "Video Editing",
            icon: MdOutlineManageHistory,
            description: "Expert video editing for polished and engaging content.",
          },
          {
            num: "5.2",
            title: "Cinematography",
            icon: MdOutlineManageHistory,
            description: "Professional cinematography to capture the essence of your story.",
          },
          {
            num: "5.3",
            title: "Scriptwriting",
            icon: MdOutlineManageHistory,
            description: "Creative scriptwriting for compelling and impactful video narratives.",
          },
        ],
      },
    {
        num:"06",
        title:"Online & Offline Campaigns",
        description:" Let's turn your vision into a reality and make a lasting impact in the digital realm. Contact us today to discuss your project ",
        icon: MdOutlineManageHistory,
        Image:Camigns,
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure a veritatis aspernatur. Atque quo iusto blanditiis recusandae expedita pariatur reiciendis rem non excepturi voluptates. Ipsa odit alias explicabo est animi quidem quod cupiditate aperiam pariatur minus deserunt quos vero quia inventore maxime in ut veniam adipisci possimus sapiente, dignissimos nihil.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure a veritatis aspernatur. Atque quo iusto blanditiis recusandae expedita pariatur reiciendis rem non excepturi voluptates. Ipsa odit alias explicabo est animi quidem quod cupiditate aperiam pariatur minus deserunt quos vero quia inventore maxime in ut veniam adipisci possimus sapiente, dignissimos nihil.",
    },
]




export const about=[
    {
      
        title: "Our Mission",
        description:
          "We are committed to providing innovative solutions that exceed expectations. Our mission is to make a positive impact on the world through technology and creativity.",
      
      },
      
      {
        num: "02",
        title: "Our Values",
        description:
          "Integrity, excellence, and customer satisfaction are at the core of our values. We believe in building strong relationships with our clients based on trust and transparency.",
        icon: FaPaintBrush,
      },
      {
        num: "03",
        title: "Why Choose Us",
        description:
          "Discover the reasons why clients choose us. From our expertise and reliability to our passion for delivering results, we strive to be the partner of choice for businesses.",
        icon: FaVideo,
      },
]


export const aboutHero=[
    {
        
        title:"Who We Are?",
        desc:"Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, fugiat cupiditate explicabo adipisci rem rerum! Quo, porro illum laboriosam reiciendis magni quas laudantium nostrum eius id, tempore similique sequi perspiciatis harum eaque veniam cupiditate ratione d sit amet consectetur adipisicing elit. Nostrum aperiam aut quas et nesciunt officiis odio quibusdam sint, voluptatum quia fugit voluptatibus, facere maiores exercitationem harum similique qui non eos.",
        image:img,
    },
   
]






export const aboutValue=[
   
    {
      
        title: "Our Value",
        desc:
        "Guided by an unwavering commitment to integrity, excellence, and unwavering customer satisfaction, our vision is to be a beacon of trust and transparency in the ever-evolving landscape of technology and innovation. We aspire to redefine the standards of excellence, setting new benchmarks that reflect our dedication to delivering unparalleled solutions and experiences.      ",       
         image:value,
      },
]


export const aboutUs=[
    {
        title:"Support 24/7 ",
        desc:"Guided by an unwavering commitment to integrity ",
        icon:FaHeadset,
    },
    {
        title:"Support 24/7 ",
        desc:"Guided by an unwavering commitment to integrity ",
        icon:BsGift,
    },
    {
        title:"Optimization ",
        desc:"Guided by an unwavering commitment to integrity ",
        icon:SiGoogleoptimize,
    },
    {
        title:"Easy to Customize ",
        desc:"Guided by an unwavering commitment to integrity ",
        icon:IoMdSettings,
    },
    {
        title:"Gift For You  ",
        desc:"Guided by an unwavering commitment to integrity ",
        icon:BsGift,
    },
    {
        title:"Development ", 
        desc:"Guided by an unwavering commitment to integrity ",
        icon:LuSettings2,
    },
]

export const Team=[
    {
        image:memberOne,
        name:"John Doe",
        role:"Marketing",
    },
    {
        image:memberTwo,
        name:"John Doe",
        role:"Development",
    },
    {
        image:memberThree,
        name:"John Doe",
        role:"Manager",
    },
]

export const imageSlide=[
    {
        title:"Slider 1",
       Image:back1,
    },
    {
        title:"Slider 2",
       Image:back2,
    },
    {
        title:"Slider 3",
       Image:back3,
    },
]