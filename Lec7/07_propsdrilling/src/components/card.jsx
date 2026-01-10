import React from "react";
import { Bookmark } from "lucide-react";
const card = ({company,logo,date,post,tag1,tag2,pay,location}) => {
  return (
    <>
      <div className="card">
        <div>
          <div className="top">
            <img
              src={logo}
              alt=""
            />
            <button>
              Save <Bookmark size={16} />
            </button>
          </div>
          <div className="content">
            <h2>
              {company}<span>{date}</span>
            </h2>
            <h1>{post}</h1>
            <div className="itms">
              <span>{tag1}</span>
              <span>{tag2}</span>
            </div>
          </div>
        </div>

        <div className="bottom">
          <div className="btm-itms">
            <h3>${pay}/h</h3>
            <span>{location}</span>
          </div>
          <button>Apply now</button>
        </div>
      </div>
    </>
  );
};

export default card;
