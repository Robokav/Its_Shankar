
import React from 'react';
import { Instagram, Github, Twitter,Mail, MessageCircle, Linkedin, ExternalLink,Youtube } from 'lucide-react';
import profileImg from "./assets/profile.jpeg";

export const USER_PROFILE = {
  name: "Dr. Shankar Aenagandula",
  role: "Proffesor",
  avatar: profileImg,
  bio: "Professor and researcher working in Microwave NDT, Antenna Systems, EMI/EMC, and Sensor Technologies with a passion for innovation, education, and impactful engineering research."
};

export const SOCIAL_LINKS = [
  {
    id: '1',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/shankar-aenagandula-1bb22b54?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    icon: <Linkedin  className="w-5 h-5" />,
    color: 'hover:bg-[#0077B5]',
    textColor: 'hover:text-white'
  },
  {
    id: '2',
    name: 'Gmail',
    url:"mailto:shankar.aenagandula@gmail.com",
    //url: 'https://mail.google.com/mail/?view=cm&to=shankar.aenagandula@gmail.com',
    icon: <Mail className="w-5 h-5" />,
    color: 'hover:bg-[#D44638]',
    glowColor: 'group-hover:shadow-[0_0_20px_-5px_#D44638]'
  },
    /*{
    id: '3',
    name: 'Instagram',
    url: 'https://www.instagram.com/kav_in2506/',
    icon: <Instagram className="w-5 h-5" />,
    color: 'hover:bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]',
    textColor: 'hover:text-white'
  },*/
  /*{
    id: '2',
    name: 'YouTube',
    url: 'https://youtube.com/@yourhandle',
    icon: <Youtube className="w-5 h-5" />,
    color: 'hover:bg-[#FF0000]',
    textColor: 'hover:text-white'
  },*/
    {
    id: '4',
    name: 'WhatsApp',
    url: 'https://wa.me/9540745895',
    icon: <MessageCircle className="w-5 h-5" />,
    color: 'hover:bg-[#25D366]',
    textColor: 'hover:text-white'
  },
 /* {
    id: '4',
    name: 'GitHub',
    url: 'https://github.com',
    icon: <Github className="w-5 h-5" />,
    color: 'hover:bg-slate-900',
    textColor: 'hover:text-white'
  }*/
/*{
    id: '5',
    name: 'Twitter (X)',
    url: 'https://twitter.com',
    icon: <Twitter className="w-5 h-5" />,
    color: 'hover:bg-[#1DA1F2]',
    textColor: 'hover:text-white'
  }*/


];
