import { useContext, useEffect } from "react";
import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import RouteBanner from "../Shared/RouteBanner/RouteBanner";
import { BsFillSendFill,BsPerson } from "react-icons/bs";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPhone, FaRegAddressCard, FaMailBulk,FaComment,FaShare } from "react-icons/fa";
// import { AiFillLike } from "react-icons/ai";
import { AuthContex } from './../Providers/Authprovider';
import Swal from "sweetalert2";
import Comment from "../Comment/Comment";
import { FaBeer } from 'react-icons/fa';

const NewsDetails = () => {
  const { user } = useContext(AuthContex)
  const { id } = useParams();
  const [commentsLoadData, setCommentsLoadData] = useState([]);
  const [newsDetails, setNewsDetails] = useState([]);
  // console.log(commentsLoadData)

  // const newsDetails = useLoaderData();
  // console.log(newsDetails);

  const { image, author, title, _id, content, date, authorImage, blog } = newsDetails;
 
  // const likePerson = postLove?.email.find(LP=>LP === user?.email)

  

  // console.log(likePerson);


  useEffect(() => {
    fetch(`https://asetta-autos-production.up.railway.app/our-blogs/${id}`)
      .then(res => res.json())
      .then(data => setNewsDetails(data))
  }, [newsDetails])



  useEffect(() => {
    fetch(`https://asetta-autos-production.up.railway.app/blogComments/${id}`)
      .then(res => res.json())
      .then(data => setCommentsLoadData(data))
  }, [commentsLoadData])


  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();


  const handleCommentSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const comment = form.comment.value
    const commentData = {
      'name': user?.displayName,
      'email': user?.email,
      'photoURL': user?.photoURL,
      'comment': comment,
      'date': formattedDate,
      'postId': id,
    }

    form.comment.value= ''


    fetch('https://asetta-autos-production.up.railway.app/blogComments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(commentData)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Response data:', data);
        if (data.insertedId) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Successfully added!',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
      .catch(error => {
        console.error('error', error);
      });

  }

  // const handleLike =(id)=>{
  //   console.log("like", id);


  //   const likeEmail = {email : user?.email}

  //   console.log(likeEmail);

  //   fetch(`http://localhost:5000/blogLike/${id}`, {
  //           method: 'PATCH',
  //           headers: {
  //             'Content-Type': 'application/json'
  //           },
  //           body: JSON.stringify(likeEmail)
  //         })
  //           .then(response => {
  //             if (!response.ok) {
  //               throw new Error('Network response was not ok');
  //             }
  //             return response.json();
  //           })
  //           .then(data => {
  //             console.log('Response data:', data);
  //             if(data.modifiedCount > 0){
  //               // navigate('/dashboard/dealer-request-details')
                
  //             }
  //           })
  //           .catch(error => {
  //             console.error('error', error);
  //           });


  // }


  return (
    <>
      <RouteBanner SectionTitle={'Single Blog'} smallTitle={'Single Blog'}></RouteBanner>
      <div className="px-4 xl:px-[140px] 2xl:px-[240px] py-10 ">
        <div className="">
          <div>
            <div className=" p-5 text-black">
              <img className="w-full md:h-[800px] rounded-2xl" src={image} alt="" />  
              <h1 className="mt-7 font-bold text-3xl">{title}</h1>
              <p className="mt-7 text-justify">{content}</p>

              <div className="flex justify-between font-bold">
                <div className="flex gap-8 mt-7">
                {/* <p className="flex items-center hover:text-red-500 cursor-pointer gap-1"><button disabled={likePerson}><img className="w-6 hover:text-red-500" onClick={()=>handleLike(_id)} src="https://cdn-icons-png.flaticon.com/256/1077/1077035.png" alt="" /></button> </p> <span>{ postLove?.postLove} - Loves</span> */}
                  <p className="flex items-center gap-1"><FaComment className="text-red-700"></FaComment> {commentsLoadData?.length} Comments</p>
                </div>
                <p className="mt-7 flex items-center gap-1 me-10"><FaShare className="text-red-700"></FaShare>Share</p>
              </div>

              <hr className="mt-5" />

              <div className="mt-7 border-l-2 border-red-500 p-10 bg-[#f7f7f7]">
                <i className="mt-7">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution. </i>
                <h1 className="font-bold mt-4 ">Mark Crawford</h1>
              </div>
              <p className="mt-7 text-justify">{blog}</p>
              <hr className="mt-5" />
            </div>
            <div className="flex justify-start mt-7 bg-[#fff] gap-6  p-9 shadow-md rounded-lg border">
              <img className="w-[250px] h-[200px] rounded-2xl" src={authorImage} alt="" />
              <div>
                <h4 className="font-bold">Author</h4>
                <h1 className="font-bold text-2xl text-red-600 mt-2">{author}</h1>
                <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam libero expedita hic praesentium esse quae dolor dicta, quas quidem tempora, at, quos similique? Beatae voluptatem iste maxime vero iusto minima temporibus atque quaerat error corporis.</p>
                <div className="sociallink mt-3">
                  <a href="https://www.facebook.com">
                    <FaFacebook className='icons'></FaFacebook>
                  </a>
                  <a href="https://www.twitter.com">
                    <FaTwitter className='icons'></FaTwitter>
                  </a>
                  <a href="https://www.instagram.com">
                    <FaInstagram className='icons'></FaInstagram>
                  </a>
                  <a href="https://www.youtube.com">
                    <FaYoutube className='icons'></FaYoutube>
                  </a>
                </div>
              </div>
            </div>
            <div className=" bg-[#f7f7f7] p-10 rounded-xl mt-10">
              <h2 className="text-2xl font-bold mb-4">Leave a Comment</h2>
              <form onSubmit={handleCommentSubmit}>
                <div className="">
                  <div className="mb-4 rounded-2xl">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={user?.displayName}
                      disabled
                      className="w-full border border-gray-500 rounded-2xl py-5 pr-32 ps-4 focus:outline-none focus:border-blue-500"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="email"
                      id="email"
                      value={user?.email}
                      disabled
                      name="email"
                      className="w-full border border-gray-500 rounded-2xl py-5 pr-32 ps-4  focus:outline-none focus:border-blue-500"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <textarea
                    id="comment"
                    name="comment"
                    required
                    className="w-full border border-gray-500 rounded-2xl py-2 px-3 h-40 focus:outline-none focus:border-blue-500"
                    placeholder="Your Comment"
                  ></textarea>
                </div>
                <div className="mt-4">
                  <button type='submit' className="subscribe-button mt-10 hover:border border-red-600 bg-[#ef1721] hover:bg-black text-white duration-300 rounded-lg ">Post Comment<BsFillSendFill className='ml-2'></BsFillSendFill></button>
                </div>
              </form>

            </div>
            <h1 className="mt-10 mb-4 font-bold text-3xl">Comments: ({commentsLoadData?.length})</h1>
            <hr className="mb-7" />
            <div>
              {
                commentsLoadData.map(comment=><Comment key={comment._id} comment={comment}></Comment>)
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsDetails;