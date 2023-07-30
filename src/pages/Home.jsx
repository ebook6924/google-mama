import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-220px)]">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sunflowers-63fe51093f04d.jpg?resize=980:*)",
        }}
      >
        <div className="hero-overlay bg-opacity-25"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-4 text-5xl font-bold">Hello there</h1>
            {/* animation */}
            <TypeAnimation className="text-white font-semibold"
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "I'am Dipongkar Roy",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Bsc in CSE",
                1000,
                "I am fronted web developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "3em", display: "inline-block" }}
              repeat={Infinity}
              
            />
            <p className="mb-4">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
