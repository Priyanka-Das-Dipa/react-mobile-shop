import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center h-[50vh]">
      <div class="relative flex w-96 flex-col rounded-xl bg-green-100 bg-clip-border text-gray-700 shadow-lg">
        <div class="p-6">
          <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
           Oops!! There is nothing....
          </h5>
          
        </div>
        <div class="p-6 pt-0">
          <Link to="/">
          <button
            class="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
           Go Back
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
