import { useForm } from "react-hook-form";
import { useContent } from "../../Context/useContent";
import { useState } from "react";

function Form({ dog }) {
  const [checked, setChecked] = useState(false);
  const { showDogForm } = useContent();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = function (data) {
    if (!checked) return;

    console.log(data);
    reset();
  };
  return (
    <div className="h-100 w-full overflow-y-scroll opacity-100">
      <form onSubmit={handleSubmit(onSubmit)}>
        {showDogForm && (
          <div>
            <h3 className="text-2xl font-bold">
              Hi👋, i am{" "}
              <span className="relative inline-block text-white before:absolute before:-inset-1 before:block before:-skew-x-7 before:bg-pink-500">
                <span className="relative text-white">{dog.name}🐺</span>
              </span>
              ,please fill this form
            </h3>
            <div className="form-row">
              <label htmlFor="fullName">full Name</label>
              <input
                type="text"
                id="fullName"
                className="border-3 border-gray-300 shadow-sm focus:ring-1 focus:ring-gray-400 focus:outline-none"
                {...register("fullName", { required: "name is required" })}
              />
              {errors && <span>{errors.fullName?.message}</span>}
            </div>

            <div className="form-row">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name=""
                id="email"
                className="border-3 border-gray-300 shadow-sm focus:ring-1 focus:ring-gray-400 focus:outline-none"
                {...register("email", { required: "email is required" })}
              />
              {errors && <span>{errors.email?.message}</span>}
            </div>

            <div className="form-row">
              <label htmlFor="address">Home Address</label>
              <textarea
                type="textarea"
                id="address"
                className="border-2 border-gray-300 shadow-sm focus:ring-1 focus:ring-gray-400 focus:outline-none"
                {...register("address", { required: "address is required" })}
              />
            </div>

            <div className="form-row">
              <label htmlFor="reason">Why do you want to adopt?</label>
              <textarea
                type="textarea"
                className="border-2 border-gray-300 shadow-sm focus:ring-1 focus:ring-gray-400 focus:outline-none"
                name=""
                id="reason"
              />
            </div>

            <div className="form-row gap-0">
              <label htmlFor="experience" className="mb-2 block text-gray-700">
                Experience with animals
              </label>
              <select
                name="experience"
                className="border-3 border-gray-300 p-2 shadow-sm focus:ring-1 focus:ring-gray-400 focus:outline-none"
                id="experience"
              >
                <option value="none">None</option>
                <option value="beginner">Beginner</option>
                <option value="experienced">Experienced</option>
              </select>
            </div>

            <div className="flex items-center space-x-4">
              <input
                className=""
                type="checkbox"
                name=""
                id="check"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
              />
              <label htmlFor="check">I agree to the terms</label>
            </div>

            <div className="item-center my-5 mr-4 flex justify-end space-x-3">
              <button
                type="reset"
                className="border-1 border-gray-500 p-1 text-sm font-bold text-gray-900 hover:bg-gray-200"
              >
                Cancel
              </button>
              <button className="bg-pink-500 p-2 text-sm font-bold text-white hover:bg-pink-600">
                Submit
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default Form;
