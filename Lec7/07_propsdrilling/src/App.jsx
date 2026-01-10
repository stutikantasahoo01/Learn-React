import React from "react";
import Card from "./components/card.jsx";
const App = () => {
  const jobOpenings = [
    {
      company_name: "Google",
      company_logo:
        "https://imgs.search.brave.com/yfipyVYvHS03XoxabbDivLh6bnn3fOL_bndNuT16xzY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTQv/ODQ4LzcyMS9zbWFs/bC9nb29nbGUtaWNv/bi1sb2dvLWZyZWUt/cG5nLnBuZw",
      date_of_post: "2 days ago",
      post: "Software Engineer, Early Career",
      tag1: "Full time",
      tag2: "Junior level",
      pay_per_hour: 78,
      location: "Seattle, WA",
    },
    {
      company_name: "Meta",
      company_logo:
        "https://imgs.search.brave.com/LY2taOaJ164Exo29kfHpylmKkov2r0ZQx1tBlpuDi_s/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjYv/MTM1LzMyMC9zbWFs/bC9tZXRhLXNvY2lh/bC1tZWRpYS1zeW1i/b2wtbG9nby1kZXNp/Z24taWxsdXN0cmF0/aW9uLWZyZWUtdmVj/dG9yLmpwZw",
      date_of_post: "5 days ago",
      post: "Manager, MSL Strategic Initiatives",
      tag1: "Full time",
      tag2: "Senior level",
      pay_per_hour: 112,
      location: "Menlo Park, CA",
    },
    {
      company_name: "Microsoft",
      company_logo:
        "https://imgs.search.brave.com/vqS_jeOnWhv8xrQBUpv0zNV7p0EOixsm1xvMCged_Rw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDY4MTA4/NTIucG5n",
      date_of_post: "3 days ago",
      post: "Technical Program Manager",
      tag1: "Full time",
      tag2: "Senior level",
      pay_per_hour: 95,
      location: "Noida, India",
    },
    {
      company_name: "Amazon",
      company_logo:
        "https://imgs.search.brave.com/f0vAfkZWfAxc6ZFRBITyOb8U5J4QFg8tfd5VGxEN0aM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzEw/L0FtYXpvbi1Mb2dv/LTIwMDAtNTAweDI4/MS5wbmc",
      date_of_post: "10 days ago",
      post: "Software Development Engineer in Test",
      tag1: "Full time",
      tag2: "Junior level",
      pay_per_hour: 65,
      location: "Austin, TX",
    },
    {
      company_name: "Netflix",
      company_logo:
        "https://imgs.search.brave.com/hAiypPNDgbK6Kb8JyK8JFh-zXXBBL-UMaPg5XDuqvtk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzQ1LzIvbmV0Zmxp/eC1sb2dvLXBuZ19z/ZWVrbG9nby00NTE5/ODEucG5n",
      date_of_post: "1 day ago",
      post: "Content Operations Specialist",
      tag1: "Part time",
      tag2: "Junior level",
      pay_per_hour: 55,
      location: "Mumbai, India",
    },
    {
      company_name: "Apple",
      company_logo:
        "https://imgs.search.brave.com/DzF429iIjcgfhk0pJCKDMQYDLonOYkei9DZ_3Yl8s8A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMi8w/OS8xOC8xOC80MC9h/cHBsZS1sb2dvLTc0/NjM3OTVfNjQwLnBu/Zw",
      date_of_post: "4 days ago",
      post: "AI/ML Software Engineer",
      tag1: "Full time",
      tag2: "Senior level",
      pay_per_hour: 125,
      location: "Cupertino, CA",
    },
    {
      company_name: "Microsoft",
      company_logo:
        "https://imgs.search.brave.com/vqS_jeOnWhv8xrQBUpv0zNV7p0EOixsm1xvMCged_Rw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDY4MTA4/NTIucG5n",
      date_of_post: "2 days ago",
      post: "Software Engineer II",
      tag1: "Full time",
      tag2: "Mid level",
      pay_per_hour: 88,
      location: "Hyderabad, India",
    },
    {
      company_name: "Amazon",
      company_logo:
        "https://imgs.search.brave.com/f0vAfkZWfAxc6ZFRBITyOb8U5J4QFg8tfd5VGxEN0aM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzEw/L0FtYXpvbi1Mb2dv/LTIwMDAtNTAweDI4/MS5wbmc",
      date_of_post: "7 days ago",
      post: "Cloud Support Associate",
      tag1: "Full time",
      tag2: "Junior level",
      pay_per_hour: 52,
      location: "Bangalore, India",
    },
    {
      company_name: "Meta",
      company_logo:
        "https://imgs.search.brave.com/LY2taOaJ164Exo29kfHpylmKkov2r0ZQx1tBlpuDi_s/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjYv/MTM1LzMyMC9zbWFs/bC9tZXRhLXNvY2lh/bC1tZWRpYS1zeW1i/b2wtbG9nby1kZXNp/Z24taWxsdXN0cmF0/aW9uLWZyZWUtdmVj/dG9yLmpwZw",
      date_of_post: "12 days ago",
      post: "Product Designer",
      tag1: "Part time",
      tag2: "Senior level",
      pay_per_hour: 105,
      location: "Remote, USA",
    },
    {
      company_name: "Google",
      company_logo:
        "https://imgs.search.brave.com/yfipyVYvHS03XoxabbDivLh6bnn3fOL_bndNuT16xzY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTQv/ODQ4LzcyMS9zbWFs/bC9nb29nbGUtaWNv/bi1sb2dvLWZyZWUt/cG5nLnBuZw",
      date_of_post: "6 days ago",
      post: "Data Scientist, Analytics",
      tag1: "Full time",
      tag2: "Senior level",
      pay_per_hour: 115,
      location: "New York, NY",
    },
  ];
  return (
    <div className="parent">
      {jobOpenings.map(function (el, idx) {
        return (
          <div key={idx}>
            <Card
              company={el.company_name}
              logo={el.company_logo}
              date={el.date_of_post}
              post={el.post}
              tag1={el.tag1}
              tag2={el.tag2}
              pay={el.pay_per_hour}
              location={el.location}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
