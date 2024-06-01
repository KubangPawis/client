const ShowModal = () => {
    return ( 
        <>
        <div className='w-[600px] h-[600px] bg-[#f9b45f] rounded-3xl mx-auto my-5 text-center'>Hello</div>
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Username
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"></input>

        </form>
        </>
     );
}
 
export default ShowModal;