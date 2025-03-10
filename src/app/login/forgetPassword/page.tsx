"use client"
import { useRouter } from "next/navigation"

const ForgetPassword = () => {
     const router = useRouter()
      const back_login = async () => {
        const back = await new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(
                alert("Succesfully Forget Your Password")
            )
            router.replace(`/login`)
            reject(Error("Error"))
          }, 1000)
        })
        console.log(back)
      }
    return(
        <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 w-[750px] max-mt:w-[500px] max-st:w-[420px] max-lm:w-[360px] max-mm:w-[300px]">
      <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
          <h1 className="mb-1 text-xl font-bold leading-tight tracking-tight text-red-600 md:text-2xl dark:text-white">Forgot your password?</h1>
          <p className="font-medium text-black dark:text-gray-400">Don't fret! Just type in your email and we will send you a code to reset your password!</p>
          <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
              <div>
                  <label form="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                  <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required/>
              </div>
              <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required/>
                  </div>
                  <div className="ml-3 text-sm">
                    <label form="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                  </div>
              </div>
              <button onClick={back_login} type="submit" className="w-full text-white bg-blue-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Reset password</button>
          </form>
      </div>
  </div>
</section>
    )
}

export default ForgetPassword