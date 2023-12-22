import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
// import axios from "axios";
import { useForm } from "react-hook-form";




const SignUp = () => {

  const {
    register,
    handleSubmit,
    reset,

    formState: { errors }
  } = useForm();



  const { createUser, updateUserProfile, handleGoogleSignIn } = useContext(AuthContext);
  const [registrationError, setRegistrationError] = useState('');
  const [succes, setSucces] = useState('')
  const navigate = useNavigate()




  const handleGoogle = () => {
    handleGoogleSignIn()
      .then(result => {
        console.log(result.user);
        setSucces('succesfulllllll')
        // const content = {
        //   email: result.user?.email,
        //   name: result.user?.displayName,
        //   photo: result.user?.photoURL,
        //   memberShip: 'Bronze'

        // }
        // axios.post('https://hostizen-server-side.vercel.app/users', content)
        navigate(location?.state ? location.state : '/dashboard/home')
      })
      .catch(error => {
        console.error(error);

      })
  }

  const onSubmit = (data) => {

    console.log(data.password);
    createUser(data.email, data.password,)
      .then(result => {
        console.log(result.user);
        updateUserProfile(data.name, data.photo)
          .then(() => {
            console.log("User Profile Updated..")
            const content = {
              email: data?.email,
              name: data?.name,
              photo: data?.photo,


            }
            console.log(content);
            // axios.post('https://hostizen-server-side.vercel.app/users', content)
            // .then(res=>{
            //   if(res.data.insertedId){
            //     console.log("User Profile Updated..")
            reset();
            Swal.fire({
              title: 'Nice!',
              text: 'You have created an account successfully.',
              icon: 'success',
              confirmButtonText: 'Got it!'
            })
            navigate(location?.state ? location.state : '/dashboard/home')
            setSucces('You have created a account successfully!')
            window.location.reload()
            //   }
            // })


          })
          .catch((error) => { console.log(error) })

      })
      .catch(error => {
        setRegistrationError(error.message);
        Swal.fire({
          title: 'Oops!',
          text: error.message,
          icon: 'error',
          confirmButtonText: 'Okay'
        })
      })


  }


  return (
    <div className="min-h-screen mb-20" >
      <div className="flex  justify-between items-center  pt-44 mx-4 md:mx-10" >
        <div className="space-y-6  border-t-2 border-[#e4e1e1] relative flex flex-col w-full  mx-auto md:w-96  rounded-xl drop-shadow-2xl  shadow-2xl shadow-teal-700 
        ">
          <div className="flex justify-center mt-8">
            <div className="flex items-center ">
              <h1 className="text-center font-bold text-3xl">Sign Up!</h1>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className=" p-4 mb-2  space-y-6  max-w-screen-lg ">
            <div className="mb-4 flex flex-col gap-6 px-0 md:px-4 space-y-1">
              <div className="relative h-11 w-full drop-shadow-md">
                <input className="border focus:border-[#4f65e0] rounded-lg w-full h-full opacity-80 peer  border-blue-gray-200 border-t-transparent  px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2   focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 "
                  {...register("name")}
                  name="name" type="text"
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#4f65e0] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#4f65e0] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#4f65e0] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Name
                </label>
              </div>
              <div className="relative h-11 w-full drop-shadow-md">
                <input
                  className="border-2 focus:border-[#4f65e0] rounded-lg w-full h-full
                peer  border-blue-gray-200 border-t-transparent  px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2   focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  {...register("photo")}
                  name="photo" type="text"
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#4f65e0] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#4f65e0] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#4f65e0] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Photo URL
                </label>
              </div>
              <div className="relative h-11 w-full drop-shadow-md">
                <input
                  className="border-2 focus:border-[#4f65e0] rounded-lg w-full h-full
                peer  border-blue-gray-200 border-t-transparent  px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2   focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  {...register("email")}
                  name="email" type="email"
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#4f65e0] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#4f65e0] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#4f65e0] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Email
                </label>

              </div>
              <div className="relative h-11 w-full drop-shadow-md">
                <input
                  className="border-2 focus:border-[#4f65e0] rounded-lg w-full h-full
                peer  border-blue-gray-200 border-t-transparent  px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2   focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  {...register("password")}
                  name="password" type="password"
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#4f65e0] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#4f65e0] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#4f65e0] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Password
                </label>
              </div>

              <input className="btn hover:bg-[#515fdd] bg-[#4f65e0] text-white rounded-lg px-8 py-2"
                type="submit"
                value='SignUp' />
              <div className="divider  font-bold">OR</div>
              <FcGoogle onClick={handleGoogle} className='interactable text-4xl w-full   py-3 px-6 text-center   font-bold shadow-lg hover:shadow-xl    btn hover:border-[#4f65e0] border-[#4f65e0]   rounded-lg    normal-case'></FcGoogle>

            </div>

            <div className="flex justify-center  items-center mt-4">
              <p className=" text-sm block text-center font-sans   leading-relaxed font-bold text-white    lg:text-black antialiased">
                Already have an account?

              </p>

              <Link className="ml-1 block font-sans text-sm font-black border-b-2 border-[#4f65e0] p-0 leading-normal bg-[#4f65e0]  bg-clip-text text-transparent antialiased interactable " to='/login'>Login</Link>

            </div>
          </form>
          <div className="flex justify-center items-center mb-4 -mt-4">
            <div>
              {
                registrationError && <p className="text-red-500 text-sm font-semibold">{registrationError}</p>
              }
              {
                succes && <p className="text-green-400 text-sm font-semibold">{succes}</p>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;