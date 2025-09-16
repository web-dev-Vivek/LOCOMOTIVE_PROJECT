const events = [
  {
    id: 1,
    title: "NexHack",
    category: "Hackathon",
    date: "2025/09/26",
    prize: "$1128",
    registerLink: "https://innoventrix-mr.devfolio.co/overview",
    imageUrl:
      "https://innoventrix-mr.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fa82c9fd540354940bf9137364d1375a7%2Fassets%2Fcover%2F131.png&w=1440&q=100",
    isVerified: true,
  },
  {
    id: 2,
    title: "Ride Hack 25",
    category: "Hackathon",
    date: "2025/09/30",
    prize: "₹250000",
    registerLink:
      "https://unstop.com/hackathons/ride-hack-25-jaypee-institute-of-information-technology-noida-1549533",
    imageUrl:
      "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-68b352a173594_ride_logo_final.jpg?d=200x200",
    isVerified: true,
  },
  {
    id: 3,
    title: " Hacker's Premier League",
    category: "Hackathon",
    date: "2025/09/27",
    prize: "₹65000",
    registerLink:
      "https://unstop.com/hackathons/hackers-premier-league-guru-gobind-singh-indraprastha-university-ggsipu-delhi-1544497",
    imageUrl:
      "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-68a7535a54730_hpl.jpeg.jpg?d=200x200",
    isVerified: true,
  },
  {
    id: 4,
    title: "Hack-O-Relay 4.0 ",
    category: "Hackathon",
    date: "2025/09/25",
    prize: "₹16000",
    registerLink:
      "https://unstop.com/hackathons/hack-o-relay-40-dronacharya-college-of-engineering-dce-gurgaon-1546121",
    imageUrl:
      "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-68a9edd50cd73_screenshot_2025-08-21_113424.png?d=200x200",
    isVerified: true,
  },
  {
    id: 5,
    title: "Biz Tech Ideathon 2025 ",
    category: "Hackathon",
    date: "2025/09/05",
    prize: "₹37000",
    registerLink:
      "https://unstop.com/hackathons/biz-tech-ideathon-2025-new-delhi-institute-of-management-ndim-new-delhi-1545323",
    imageUrl:
      "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-68ad8f2eee5f0_biz_tech_ideathon_2025.png?d=200x200",
    isVerified: true,
  },
  {
    id: 6,
    title: "VulnVanguard: Trust Nothing, Secure Everything",
    category: "Hackathon",
    date: "2025/10/01",
    prize: "₹50000",
    registerLink:
      "https://unstop.com/hackathons/vulnvanguard-trust-nothing-secure-everything-srm-institute-of-science-and-technology-srmist-delhincr-campus-1547283",
    imageUrl:
      "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-67ead2ec0deb0_logo_white.jpg?d=200x200",
    isVerified: true,
  },
  // {
  //   id: 2,
  //   title: "Ride Hack 25",
  //   category: "Hackathon",
  //   date: "2025/09/30",
  //   prize: "₹250000",
  //   registerLink:
  //     "https://unstop.com/hackathons/ride-hack-25-jaypee-institute-of-information-technology-noida-1549533",
  //   imageUrl:
  //     "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-68b352a173594_ride_logo_final.jpg?d=200x200",
  //   isVerified: true,
  // },{
  //   id: 2,
  //   title: "Ride Hack 25",
  //   category: "Hackathon",
  //   date: "2025/09/30",
  //   prize: "₹250000",
  //   registerLink:
  //     "https://unstop.com/hackathons/ride-hack-25-jaypee-institute-of-information-technology-noida-1549533",
  //   imageUrl:
  //     "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-68b352a173594_ride_logo_final.jpg?d=200x200",
  //   isVerified: true,
  // },{
  //   id: 2,
  //   title: "Ride Hack 25",
  //   category: "Hackathon",
  //   date: "2025/09/30",
  //   prize: "₹250000",
  //   registerLink:
  //     "https://unstop.com/hackathons/ride-hack-25-jaypee-institute-of-information-technology-noida-1549533",
  //   imageUrl:
  //     "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-68b352a173594_ride_logo_final.jpg?d=200x200",
  //   isVerified: true,
  // },{
  //   id: 2,
  //   title: "Ride Hack 25",
  //   category: "Hackathon",
  //   date: "2025/09/30",
  //   prize: "₹250000",
  //   registerLink:
  //     "https://unstop.com/hackathons/ride-hack-25-jaypee-institute-of-information-technology-noida-1549533",
  //   imageUrl:
  //     "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-68b352a173594_ride_logo_final.jpg?d=200x200",
  //   isVerified: true,
  // },{
  //   id: 2,
  //   title: "Ride Hack 25",
  //   category: "Hackathon",
  //   date: "2025/09/30",
  //   prize: "₹250000",
  //   registerLink:
  //     "https://unstop.com/hackathons/ride-hack-25-jaypee-institute-of-information-technology-noida-1549533",
  //   imageUrl:
  //     "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-68b352a173594_ride_logo_final.jpg?d=200x200",
  //   isVerified: true,
  // },{
  //   id: 2,
  //   title: "Ride Hack 25",
  //   category: "Hackathon",
  //   date: "2025/09/30",
  //   prize: "₹250000",
  //   registerLink:
  //     "https://unstop.com/hackathons/ride-hack-25-jaypee-institute-of-information-technology-noida-1549533",
  //   imageUrl:
  //     "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-68b352a173594_ride_logo_final.jpg?d=200x200",
  //   isVerified: true,
  // },{
  //   id: 2,
  //   title: "Ride Hack 25",
  //   category: "Hackathon",
  //   date: "2025/09/30",
  //   prize: "₹250000",
  //   registerLink:
  //     "https://unstop.com/hackathons/ride-hack-25-jaypee-institute-of-information-technology-noida-1549533",
  //   imageUrl:
  //     "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-68b352a173594_ride_logo_final.jpg?d=200x200",
  //   isVerified: true,
  // },{
  //   id: 2,
  //   title: "Ride Hack 25",
  //   category: "Hackathon",
  //   date: "2025/09/30",
  //   prize: "₹250000",
  //   registerLink:
  //     "https://unstop.com/hackathons/ride-hack-25-jaypee-institute-of-information-technology-noida-1549533",
  //   imageUrl:
  //     "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-68b352a173594_ride_logo_final.jpg?d=200x200",
  //   isVerified: true,
  // },{
  //   id: 2,
  //   title: "Ride Hack 25",
  //   category: "Hackathon",
  //   date: "2025/09/30",
  //   prize: "₹250000",
  //   registerLink:
  //     "https://unstop.com/hackathons/ride-hack-25-jaypee-institute-of-information-technology-noida-1549533",
  //   imageUrl:
  //     "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-68b352a173594_ride_logo_final.jpg?d=200x200",
  //   isVerified: true,
  // },{
  //   id: 2,
  //   title: "Ride Hack 25",
  //   category: "Hackathon",
  //   date: "2025/09/30",
  //   prize: "₹250000",
  //   registerLink:
  //     "https://unstop.com/hackathons/ride-hack-25-jaypee-institute-of-information-technology-noida-1549533",
  //   imageUrl:
  //     "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-68b352a173594_ride_logo_final.jpg?d=200x200",
  //   isVerified: true,
  // },{
  //   id: 2,
  //   title: "Ride Hack 25",
  //   category: "Hackathon",
  //   date: "2025/09/30",
  //   prize: "₹250000",
  //   registerLink:
  //     "https://unstop.com/hackathons/ride-hack-25-jaypee-institute-of-information-technology-noida-1549533",
  //   imageUrl:
  //     "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-68b352a173594_ride_logo_final.jpg?d=200x200",
  //   isVerified: true,
  // },{
  //   id: 2,
  //   title: "Ride Hack 25",
  //   category: "Hackathon",
  //   date: "2025/09/30",
  //   prize: "₹250000",
  //   registerLink:
  //     "https://unstop.com/hackathons/ride-hack-25-jaypee-institute-of-information-technology-noida-1549533",
  //   imageUrl:
  //     "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-68b352a173594_ride_logo_final.jpg?d=200x200",
  //   isVerified: true,
  // },
];

export default events;
