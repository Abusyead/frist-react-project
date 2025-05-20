import PinInvokeIcon from '@mui/icons-material/PinInvoke'
function Started() {
  return (
    <section className="bg-[#002228] py-5 md:py-14">
        <div className='max-w-[1440px] px-5 mx-auto py-10 flex justify-center items-center text-center flex-col'>
            <h4 className='text-[#0FF1F6]'>GET STARTED</h4>
            <h3 className='text-3xl font-semibold my-2'><span className="italic">Embrace</span> the new era of <span className="italic">outbound</span>.</h3>
            <p className='max-w-[500px] text-gray-300 font-normal text-md my-4'>
                Wizia lets you train, activate, and       optimize aiDRs. 
                Take your outbound to new levels of performance and efficiency.
            </p>
            <button className="btnColor mt-6 px-5 py-2 mx-5 sm:mx-0 rounded-full text-black text-sm sm:w-auto">
                Sign Up for the Beta  <PinInvokeIcon />
            </button>
        </div>
    </section>
  )
}

export default Started