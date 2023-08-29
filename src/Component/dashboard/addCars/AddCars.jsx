import { useForm } from "react-hook-form";
const AddCars = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <div className="px-4 xl:px-[140px] 2xl:px-[240px] py-10 border">
            <h2 className="uppercase text-center text-xl md:text-4xl font-bold">Add Your Cars</h2>
            <div className="border p-4 md:p-10 text-gray-800 my-10">
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* row 1 */}
      <div className="md:flex gap-5 mb-5">
      <div className="w-full mb-5">
        <h4 className="text-lg">Your Name<span className="text-red-600">*</span></h4>
      <input
        className="border py-2 px-4 text-xl w-full"
        placeholder="Your Name"
        type="text"
        {...register("name", { required: true })} 
        aria-invalid={errors.name ? "true" : "false"} 
      />
      {errors.name?.type === 'required' && <p role="alert" className="text-red-700">name is required</p>}
      </div>

      <div className="w-full mb-5">
      <h4 className="text-lg">Your Email<span className="text-red-600">*</span></h4>
      <input 
            className="border py-2 px-4 text-xl w-full"
            placeholder="Your Email"
        type="email"
        {...register("email", { required: "Email Address is required" })} 
        aria-invalid={errors.email ? "true" : "false"} 
      />
      {errors.email && <p role="alert" className="text-red-700">{errors.email?.message}</p>}
      </div>
      </div>
      {/* row 2 */}
      <div className="md:flex gap-5 mb-5">
      <div className="w-full mb-5">
      <h4 className="text-lg">Company name<span className="text-red-600">*</span></h4>
      <input 
            className="border py-2 px-4 text-xl w-full"
            placeholder="Company name"
        type="text"
        {...register("make", { required: "Company name is required" })} 
        aria-invalid={errors.make ? "true" : "false"} 
      />
      {errors.make && <p role="alert" className="text-red-700">{errors.make?.message}</p>}
      </div>
      <div className="w-full mb-5">
      <h4 className="text-lg">Model<span className="text-red-600">*</span></h4>
      <input 
            className="border py-2 px-4 text-xl w-full"
            placeholder="Model"
        type="text"
        {...register("model", { required: "model is required" })} 
        aria-invalid={errors.model ? "true" : "false"} 
      />
      {errors.model && <p role="alert" className="text-red-700">{errors.model?.message}</p>}
      </div>
      <div className="w-full mb-5">
      <h4 className="text-lg">Color<span className="text-red-600">*</span></h4>
      <input 
            className="border py-2 px-4 text-xl w-full"
            placeholder="color"
        type="text"
        {...register("color", { required: "color is required" })} 
        aria-invalid={errors.model ? "true" : "false"} 
      />
      {errors.color && <p role="alert" className="text-red-700">{errors.color?.message}</p>}
      </div>
      </div>
      {/* row 3 */}
      <div className="md:flex gap-5 mb-5">
      <div className="w-full mb-5">
      <h4 className="text-lg">price<span className="text-red-600">*</span></h4>
      <input 
            className="border py-2 px-4 text-xl w-full"
            placeholder="price"
        type="number"
        {...register("price", { required: "price is required" })} 
        aria-invalid={errors.price ? "true" : "false"} 
      />
      {errors.price && <p role="alert" className="text-red-700">{errors.price?.message}</p>}
      </div>
      <div className="w-full mb-5">
      <h4 className="text-lg">mileage<span className="text-red-600">*</span></h4>
      <input 
            className="border py-2 px-4 text-xl w-full"
            placeholder="mileage"
        type="number"
        {...register("mileage", { required: "mileage is required" })} 
        aria-invalid={errors.mileage ? "true" : "false"} 
      />
      {errors.mileage && <p role="alert" className="text-red-700">{errors.mileage?.message}</p>}
      </div>
      <div className="w-full mb-5">
      <h4 className="text-lg">fuel_type<span className="text-red-600">*</span></h4>
      <input 
            className="border py-2 px-4 text-xl w-full"
            placeholder="date"
        type="text"
        {...register("date", { required: "fuel_type is required" })} 
        aria-invalid={errors.fuel_type ? "true" : "false"} 
      />
      {errors.fuel_type && <p role="alert" className="text-red-700">{errors.fuel_type?.message}</p>}
      </div>
      <div className="w-full mb-5">
      <h4 className="text-lg">date<span className="text-red-600">*</span></h4>
      <input 
            className="border py-2 px-4 text-xl w-full"
            placeholder="date"
        type="date"
        {...register("date", { required: "date is required" })} 
        aria-invalid={errors.date ? "true" : "false"} 
      />
      {errors.date && <p role="alert" className="text-red-700">{errors.date?.message}</p>}
      </div>
      </div>
      {/* row 4 */}
      <div className="md:flex gap-5 mb-5">
      <div className="w-full mb-5">
      <h4 className="text-lg">description<span className="text-red-600">*</span></h4>
      <textarea
            rows={4} 
            maxLength={450}
            className="border py-2 px-4 text-lg w-full"
            placeholder="description"
        type="text"
        {...register("description", { required: "description is required" })} 
        aria-invalid={errors.description ? "true" : "false"} 
      />
      {errors.description && <p role="alert" className="text-red-700">{errors.description?.message}</p>}
      </div>
      </div>
      <input type="submit" className="btn bg-red-700 text-white hover:bg-red-800"/>
    </form>
            </div>
        </div>
    );
};

export default AddCars;