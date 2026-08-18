import { star } from "../assets/icons";
import { reviews } from "../constants";

const CustomerReviews = () => {

  
  return (
    <section className="max-container">
      <div className="flex flex-col items-center">
        <h3 className="text-4xl font-bold text-center font-palanquin">
          What Our <span className="text-coral-red">Customers</span> Say?
        </h3>
        <p className="max-w-lg m-auto mt-4 text-center info-text">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
      </div>

      <div className="flex items-center flex-1 mt-24 justify-evenly max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <div
            key={review.customerName}
            className="flex flex-col items-center flex-1 text-center"
          >
            <img
              src={review.imgURL}
              alt={review.customerName}
              className="object-cover w-24 h-24 rounded-full"
            />
            <p className="max-w-sm mt-6 font-montserrat text-slate-gray">
              {review.feedback}
            </p>

            <div className="mt-3 flex justify-center items-center gap-2.5">
              <img src={star} alt="rating star" width={24} height={24} />
              <p className="text-xl font-montserrat text-slate-gray">
                ({review.rating})
              </p>
            </div>

            <h3 className="mt-1 text-2xl font-bold font-palanquin">
              {review.customerName}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
 