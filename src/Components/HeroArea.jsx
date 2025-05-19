import PinInvokeIcon from '@mui/icons-material/PinInvoke';
function HeroArea() {
  return (
    <section className="bg-[url(/img/heroarea.png)] bg-cover bg-center h-[75vh] lg:h-[70vh] md:h-[70vh]">
        <div className="flex justify-center sm:items-start items-center   flex-col text-white w-full h-full max-w-[1440px] mx-auto px-4 md:px-8">
            <h2 className=" text-xl mb-2 text-[#0FF1F6]">AI SDRs (aiDRs)</h2>
            <h1 className=" w-full sm:text-6xl text-center sm:text-start text-5xl max-w-[300px] sm:max-w-[400px] mb-5 px">More <span className="italic">leads</span>, less <span className="italic">people</span> .</h1>
            <p className="max-w-[600px] text-center sm:text-start">Train an aiDR on your ICP and messaging matrix. Activate it on a patch. It will send personalized sequences to every target contact.</p>
            <button className="btnColor mt-6 px-5 py-2 mx-5 sm:mx-0 rounded-full text-black text-sm w-full sm:w-auto">Sign Up for the Beta  < PinInvokeIcon/> </button>
        </div>
    </section>
  )
}

export default HeroArea;