import React from "react";

const ChangePass = () => {
    return ( 
        <main id="content" role="main" class="w-full  max-w-md mx-auto p-6">
    <div class="mt-7 bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 border-2 border-[#edb269]">
      <div class="p-4 sm:p-7">  
        <div class="text-center">
          <h1 class="block text-2xl pb-4 font-bold text-gray-800 dark:text-white">Change Password</h1>
        </div>

        <div class="mt-5">
          <form>
            <div class="grid gap-y-3">
              <label htmlFor="password" class="block text-sm font-bold ml-1 dark:text-white">New Password</label>
              <div class="relative">
                  <input type="password" id="password" name="password" class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-[#E28413] shadow-sm" required aria-describedby="email-error"></input>
                </div>
                <label htmlFor="cpassword" class="block text-sm font-bold ml-1 dark:text-white">Confirm Password</label>
                <div class="relative">
                    <input type="password" id="cpassword" name="cpassword" class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-[#E28413] shadow-sm" required aria-describedby="email-error"></input>
                </div>
              <button type="submit" class="py-3 px-4 mt-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-[#da9a4d] text-white hover:bg-[#E28413] focus:outline-none focus:ring-2 focus:ring-[#E28413] focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">Reset Password</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
     );
}
 
export default ChangePass;


