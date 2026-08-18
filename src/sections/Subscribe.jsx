import { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire up newsletter subscription request
  };

  return (
    <section className="flex items-center justify-between gap-10 max-lg:flex-col max-container">
      <h3 className="flex-1 text-4xl font-bold font-palanquin max-lg:text-center">
        Sign Up from <span className="text-coral-red">Updates</span> &
        Newsletter
      </h3>

      <form
        onSubmit={handleSubmit}
        className="flex sm:w-[500px] w-full items-center gap-3 sm:border border-slate-gray/30 rounded-full sm:pl-2 max-sm:flex-col"
      >
        <input
          type="email"
          placeholder="subscribe@nike.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="input"
        />
        <button
          type="submit"
          className="flex items-center justify-center py-4 text-lg leading-none text-white rounded-full px-7 font-montserrat bg-coral-red max-sm:w-full"
        >
          Sign up
        </button>
      </form>
    </section>
  );
};

export default Subscribe;
