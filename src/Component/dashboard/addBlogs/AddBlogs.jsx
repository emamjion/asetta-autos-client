import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContex } from "./../../Providers/Authprovider";
import Swal from "sweetalert2";
const AddBlogs = () => {
  const { user } = useContext(AuthContex);
  // console.log(user);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    data.email = user?.email;
    data.author = user?.displayName;
    data.authorImage = user?.photoURL;

    // const love = [
    //   {email : data?.email},
    //   {postLove : 0},
    // ]
    // const love = {
    //   'email' : [],
    //   'love' : 0,
    // }

    // data.postLove = love;

    data.loveEmails = []
    
    

    console.log(data);

    fetch('https://asetta-autos-server-gules.vercel.app/blogPost', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Response data:', data);
        if(data.insertedId){
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Successfully blog added!',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
      .catch(error => {
        console.error('error', error);
      });
  };
  return (
    <div className="px-4 py-10 border  shadow-sm drop-shadow-sm">
      <h2 className="uppercase text-center text-xl md:text-4xl font-bold">
        Add Your Blogs
      </h2>
      <div className="border p-4 md:p-10 text-gray-800 my-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* row 1 */}
          <div className="md:flex gap-5 mb-5">
            <div className="w-full mb-5">
              <h4 className="text-lg">
                Your Name<span className="text-red-600">*</span>
              </h4>
              <input
                className="border  py-2 px-4 text-xl w-full"
                placeholder="Your Name"
                defaultValue={user?.displayName}
                disabled
                type="text"
                {...register("author", { required: false })}
                aria-invalid={errors.author ? "true" : "false"}
              />
              {/* {errors.name?.type === 'required' && <p role="alert" className="text-red-700">name is required</p>} */}
            </div>

            <div className="w-full mb-5">
              <h4 className="text-lg">
                Your Email<span className="text-red-600">*</span>
              </h4>
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
              <h4 className="text-lg">
                author Image<span className="text-red-600">*</span>
              </h4>
              <input
                className="border py-2 px-4 text-xl w-full"
                placeholder="authorImage"
                defaultValue={user?.photoURL}
                disabled
                type="text"
                // {...register("authorImage", { required: "authorImage is required" })}
                // aria-invalid={errors.authorImage ? "true" : "false"}
              />
              {errors.authorImage && (
                <p role="alert" className="text-red-700">
                  {errors.authorImage?.message}
                </p>
              )}
            </div>
            <div className="w-full mb-5">
              <h4 className="text-lg">
                date<span className="text-red-600">*</span>
              </h4>
              <input
                className="border py-2 px-4 text-xl w-full"
                placeholder="date"
                type="date"
                {...register("date", { required: "date is required" })}
                aria-invalid={errors.date ? "true" : "false"}
              />
              {errors.date && (
                <p role="alert" className="text-red-700">
                  {errors.date?.message}
                </p>
              )}
            </div>
          </div>
          {/* row 3 */}
          <div className="md:flex gap-5 mb-5">
            <div className="w-full mb-5">
              <h4 className="text-lg">
                title<span className="text-red-600">*</span>
              </h4>
              <input
                className="border py-2 px-4 text-xl w-full"
                placeholder="title"
                type="text"
                {...register("title", { required: "title is required" })}
                aria-invalid={errors.make ? "true" : "false"}
              />
              {errors.title && (
                <p role="alert" className="text-red-700">
                  {errors.title?.message}
                </p>
              )}
            </div>
          </div>
          {/* row 4 */}
          <div className="md:flex gap-5 mb-5">
            <div className="w-full mb-5">
              <h4 className="text-lg">
                Full Blogs<span className="text-red-600">*</span>
              </h4>
              <textarea
                rows={3}
                maxLength={450}
                className="border py-2 px-4 text-lg w-full"
                placeholder="content"
                type="text"
                {...register("content", { required: "content is required" })}
                aria-invalid={errors.content ? "true" : "false"}
              />
              {errors.content && (
                <p role="alert" className="text-red-700">
                  {errors.content?.message}
                </p>
              )}
            </div>
          </div>
          {/* row 5 */}
          <div className="md:flex gap-5 mb-5">
            <div className="w-full mb-5">
              <h4 className="text-lg">
                Blog Image<span className="text-red-600">*</span>
              </h4>
              <input
                className="border py-2 px-4 text-xl w-full"
                placeholder="Blog Image"
                type="url"
                {...register("image", { required: "image is required" })}
                aria-invalid={errors.make ? "true" : "false"}
              />
              {errors.image && (
                <p role="alert" className="text-red-700">
                  {errors.image?.message}
                </p>
              )}
            </div>
          </div>

          <input
            type="submit"
            value={"submit"}
            className="btn bg-red-700 text-white hover:bg-red-800"
          />
        </form>
      </div>
    </div>
  );
};

export default AddBlogs;
