import Lottie from "lottie-react";
import codeing from "../../public/animation_lkp9ic6d.json";



const Carosel = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
  <Lottie animationData={codeing} loop={true} />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  );
};

export default Carosel;
