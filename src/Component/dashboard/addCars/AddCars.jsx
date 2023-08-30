import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContex } from './../../Providers/Authprovider';
const AddCars = () => {
  const {user} = useContext(AuthContex)
  // console.log(user);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => {
      data.email = user?.email
      data.name = user?.displayName


      data.engine = {
        'type' : data?.type,
        'displacement' : data?.displacement,
        'horsepower' : data?.horsepower,
        'description' : data?.E_details
      }

      data.features = [
        {
          'name' : data?.F_name1,
          'description' : data?.F_details1,
        },
        {
          'name' : data?.F_name2,
          'description' : data?.F_details2,
        },
      ]


      const uploadCars = 
        {
          'image' : data.image,
          'make' : data.make,
          'model' : data.model,
          'date' : data.date,
          'color' : data.color,
          'vin' : data.vin,
          'transmission' : data.transmission,
          'fuel_type' : data.fuel_type,
          'mileage' : data.mileage,
          'features' : data.features,
          'engine' : data.engine,
          'price' : data.price,
          'dealerEmail' : data.email
        }
      

      console.log(uploadCars);
    };
    return (
        <div className="px-4 xl:px-[140px] 2xl:px-[240px] py-10 border  shadow-sm drop-shadow-sm">
            <h2 className="uppercase text-center text-xl md:text-4xl font-bold">Add Your Cars</h2>
            <div className="border p-4 md:p-10 text-gray-800 my-10">
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* row 1 */}
      <div className="md:flex gap-5 mb-5">
      <div className="w-full mb-5">
        <h4 className="text-lg">Your Name<span className="text-red-600">*</span></h4>
      <input
        className="border  py-2 px-4 text-xl w-full"
        placeholder="Your Name"
        defaultValue={user?.displayName}
        disabled
        type="text"
        {...register("name", { required: false })} 
        aria-invalid={errors.name ? "true" : "false"} 
      />
      {/* {errors.name?.type === 'required' && <p role="alert" className="text-red-700">name is required</p>} */}
      </div>

      <div className="w-full mb-5">
      <h4 className="text-lg">Your Email<span className="text-red-600">*</span></h4>
      <input 
            className="border py-2 px-4 text-xl w-full"
            placeholder="Your Email"
            defaultValue={user?.email}
        disabled
        type="email"
        {...register("email", { required: false })} 
        aria-invalid={errors.email ? "true" : "false"} 
      />
      {/* {errors.email && <p role="alert" className="text-red-700">{errors.email?.message}</p>} */}
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
      {errors?.model && <p role="alert" className="text-red-700">{errors.model?.message}</p>}
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
      <hr className="mb-6 hidden md:block mt-2  mx-auto border-gray-300"/>
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
      <h4 className="text-lg">vehicle identification number (VIN)<span className="text-red-600">*</span></h4>
      <input 
            className="border py-2 px-4 text-xl w-full"
            placeholder="VIN"
        type="text"
        {...register("vin", { required: "VIN is required" })} 
        aria-invalid={errors.vin ? "true" : "false"} 
      />
      {errors.vin && <p role="alert" className="text-red-700">{errors.vin?.message}</p>}
      </div>
      <div className="w-full mb-5">
      <h4 className="text-lg">transmission<span className="text-red-600">*</span></h4>
      <input 
            className="border py-2 px-4 text-xl w-full"
            placeholder="transmission"
        type="text"
        {...register("transmission", { required: "transmission is required" })} 
        aria-invalid={errors.transmission ? "true" : "false"} 
      />
      {errors.transmission && <p role="alert" className="text-red-700">{errors.transmission?.message}</p>}
      </div>
      </div>
      {/* row 5 */}
      <h2 className="md:text-xl font-semibold mb-4">Engine Details : </h2>
      <div className="md:flex gap-5 mb-5">
      <div className="w-full mb-5">
      <h4 className="text-lg">type<span className="text-red-600">*</span></h4>
      <input 
            className="border py-2 px-4 text-xl w-full"
            placeholder="type V8"
        type="type"
        {...register("type", { required: "type is required" })} 
        aria-invalid={errors.type ? "true" : "false"} 
      />
      {errors.type && <p role="alert" className="text-red-700">{errors.type?.message}</p>}
      </div>
      <div className="w-full mb-5">
      <h4 className="text-lg">displacement<span className="text-red-600">*</span></h4>
      <input 
            className="border py-2 px-4 text-xl w-full"
            placeholder="displacement 5.4L"
        type="number"
        {...register("displacement", { required: "displacement is required" })} 
        aria-invalid={errors.displacement ? "true" : "false"} 
      />
      {errors.displacement && <p role="alert" className="text-red-700">{errors.displacement?.message}</p>}
      </div>
      <div className="w-full mb-5">
      <h4 className="text-lg">horsepower<span className="text-red-600">*</span></h4>
      <input 
            className="border py-2 px-4 text-xl w-full"
            placeholder="horsepower 450"
        type="text"
        {...register("horsepower", { required: "horsepower is required" })} 
        aria-invalid={errors.horsepower ? "true" : "false"} 
      />
      {errors.horsepower && <p role="alert" className="text-red-700">{errors.horsepower?.message}</p>}
      </div>
      </div>

      {/* row 6 */}
      <div className="md:flex gap-5 mb-5">
      <div className="w-full mb-5">
      <h4 className="text-lg">Engine Description<span className="text-red-600">*</span></h4>
      <textarea
            rows={3} 
            maxLength={450}
            className="border py-2 px-4 text-lg w-full"
            placeholder="description"
        type="text"
        {...register("E_details", { required: "Engine details is required" })} 
        aria-invalid={errors.E_details ? "true" : "false"} 
      />
      {errors.E_details && <p role="alert" className="text-red-700">{errors.E_details?.message}</p>}
      </div>
      </div>

      {/* row 7 */}
      <h2 className="text-xl font-semibold mb-4">Add Your Car Feature : <span className="text-red-600">(optional)</span></h2>
      <div className="md:flex gap-5 mb-5">
      <div className="md:flex gap-5 mb-5 w-full">
      <div className="w-full mb-5">
      <h4 className="text-lg font-semibold">Feature 1</h4>
      

      <div className="w-full mb-5">
      <h4 className="text-lg">Feature name 1</h4>
      <input 
            className="border py-2 px-4 text-xl w-full"
            placeholder="Feature name "
        type="text"
        {...register("F_name1", { required:false})} 
        aria-invalid={errors.horsepower ? "true" : "false"} 
      />
      {errors.F_name && <p role="alert" className="text-red-700">{errors.F_name?.message}</p>}
      </div>
      <h4 className="text-lg">Feature Details 1</h4>
      <textarea
            rows={3} 
            maxLength={450}
            className="border py-2 px-4 text-lg w-full"
            placeholder="Feature details 1"
        type="text"
        {...register("F_details1", { required: false })} 
        aria-invalid={errors.F_details1 ? "true" : "false"} 
      />
      {errors.F_details1 && <p role="alert" className="text-red-700">{errors.F_details1?.message}</p>}
      </div>
      </div>
      <div className="md:flex gap-5 mb-5 w-full">
      <div className="w-full mb-5">
      <h4 className="text-lg font-semibold">Feature 2</h4>
      

      <div className="w-full mb-5">
      <h4 className="text-lg">Feature name 2</h4>
      <input 
            className="border py-2 px-4 text-xl w-full"
            placeholder="Feature name "
        type="text"
        {...register("F_name2", { required:false})} 
        aria-invalid={errors.F_name2 ? "true" : "false"} 
      />
      {errors.F_name2 && <p role="alert" className="text-red-700">{errors.F_name2?.message}</p>}
      </div>
      <h4 className="text-lg">Feature Details 2</h4>
      <textarea
            rows={3} 
            maxLength={450}
            className="border py-2 px-4 text-lg w-full"
            placeholder="Feature details 2"
        type="text"
        {...register("F_details2", { required: false })} 
        aria-invalid={errors.F_details2 ? "true" : "false"} 
      />
      {errors.F_details2 && <p role="alert" className="text-red-700">{errors.F_details2?.message}</p>}
      </div>
      </div>
      </div>

      {/* row 8 */}
      <h2 className="text-xl font-semibold mb-4">Add Your Car : <span className="text-red-600">Photo</span></h2>
      <div className="md:flex gap-5 mb-5">
      <div className="w-full mb-5">
        
      <h4 className="text-lg">photo URL<span className="text-red-600">*</span></h4>
      <input 
            className="border py-2 px-4 text-xl w-full"
            placeholder="photo URL"
        type="url"
        {...register("image", { required: "image is required" })} 
        aria-invalid={errors.transmission ? "true" : "false"} 
      />
      {errors.image && <p role="alert" className="text-red-700">{errors.image?.message}</p>}
      </div>
      </div>
      <input type="submit" className="btn bg-red-700 text-white hover:bg-red-800"/>
    </form>
            </div>
        </div>
    );
};

export default AddCars;