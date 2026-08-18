import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className="flex items-center justify-between w-full gap-10 max-lg:flex-col max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt="Special offer shoes"
          width={773}
          height={687}
          className="object-contain w-full cursor-pointer max-[]:lg:w-[500px] max-sm:w-[500px]"
        />
      </div>

      <div className="flex flex-col flex-1">
        <h2 className="mt-10 text-4xl font-bold capitalize font-palanquin lg:max-w-lg">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text ">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premium selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>

        <div className="flex flex-wrap gap-4 mt-11">
          <Button label="Shop now" iconUrl={arrowRight} />
          <Button
            label="Learn more"
            
            className="font-light text-[#9A9A9A] font-sans leading-relaxed tracking-wide"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
