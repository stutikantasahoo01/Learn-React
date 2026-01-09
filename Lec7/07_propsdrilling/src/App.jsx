import React from "react";
import { Bookmark } from "lucide-react";

const App = () => {
  return (
    <div className="parent">
      <div className="card">
        <div className="top">
          <img
            src="https://imgs.search.brave.com/vF4y19HDADbDSzV1Sqgqth7f7PhNjYNEs65f19xvIuM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzMv/MjIwLzkzNi9zbWFs/bC9hbWF6b24tbG9n/by1zeW1ib2wtZWNv/bW1lcmNlLXdlYnNp/dGUtaXRzLWhlYWRx/dWFydGVycy1hcmUt/bG9jYXRlZC1pbi1z/ZWF0dGxlLWluLXdh/c2hpbmd0b24tc3Rh/dGUtdW5pdGVkLXN0/YXRlcy1vZi1hbWVy/aWNhLWFtYXpvbi1p/cy10aGUtbGFyZ2Vz/dC1vbmxpbmUtc2Fs/ZXMtd2Vic2l0ZS1p/bi10aGUtdW5pdGVk/LXN0YXRlcy1mcmVl/LXBuZy5wbmc"
            alt=""
          />
          <button>
            Save <Bookmark />{" "}
          </button>
        </div>
        <div className="content">
          <h2>
            Amazon <span>5 days ago</span>
          </h2>
          <h1>Senior Ui/Ux Designer</h1>
          <div>
            <h3>Part Time</h3>
            <h3>Senior Level</h3>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h3>$120/hr</h3>
            <h3>Mumbai,India</h3>
          </div>
          <button>Apply now</button>
        </div>
      </div>
    </div>
  );
};

export default App;
