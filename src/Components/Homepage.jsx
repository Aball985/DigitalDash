import "../css/Homepage/Homepage.css";
import "./Darkmode/DarkModeToggle";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="wrapper">
        <div className="wrapper__title">
          <h1>Welcome to our Application</h1>
          <span className="rocket">🚀</span>
        </div>

        <div className="wave-wrap">
          <h1>We are Kotlin </h1>

          <span className="w wave">V</span>
          <span className="a wave">i</span>
          <span className="v wave">b</span>
          <span className="e wave">e</span>
          <span className="s wave">s</span>
        </div>
        <div className="p__wrapper">
          <p>
            Our application allows you to quickly view a wide range of
            interesting
            <b> metrics</b> To get started, simply select a <b>button</b>. Using
            the map you can directly locate a point of interest and see what is
            happening Any notable points are marked on the map
          </p>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="waves"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#034377"
          fill-opacity="0.95"
          d="M0,96L21.8,85.3C43.6,75,87,53,131,58.7C174.5,64,218,96,262,101.3C305.5,107,349,85,393,74.7C436.4,64,480,64,524,96C567.3,128,611,192,655,202.7C698.2,213,742,171,785,181.3C829.1,192,873,256,916,240C960,224,1004,128,1047,90.7C1090.9,53,1135,75,1178,106.7C1221.8,139,1265,181,1309,170.7C1352.7,160,1396,96,1418,64L1440,32L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Homepage;
