import { arrowRight } from "../assets/icons";
import Button from "../components/Button";

const Hero = () => {
  return (
     <section id="home" className="flex flex-col justify-center w-full min-h-screen border-2 xl:flex-row gab-10 max-container">
     <div className="relative flex flex-col items-start justify-center w-full xl:w-2/5 max-xl:padding-x pt-28">
     <p>Our Summer Collection</p>
    <h1>
     <span>The new Arrival</span>
      <br />
    <span>Nike</span>
  Shoes
    </h1>
    <p>Discover stylish Nike arrivals quality comfort, and innovation for your active life</p>

    <Button />


      </div>

    </section>
  )
}

export default Hero
