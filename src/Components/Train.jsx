import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
function Train() {
  const listData = ["Quick to ramp","Easy to optimize","Quick to scale up","Works with all your existing tools"]
  return (
    <section className="bg-[url(img/train.png)] text-white bg-center bg-cover">
        <div className="max-w-[1440px] mx-auto px-8 flex items-center justify-start flex-col text-start sm:pb-10 pb-2">
            <div className='py-2 sm:py-5 lg:py-20'>
                <h2 className="text-3xl my-2">Train your aiDR on your...</h2>
                <h3 className="text-2xl text-[#0FF1F6] italic mb-2">prefered email st </h3>
                <p className="mt-5 mb-6 max-w-[300px] font-light text-gray-400">You’re in control. Train your aiDR on elements of your Marketing strategy.</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 space-y-3">
                    {listData.map((list , i) => (
                        <li key={i} className='text-sm text-[#14BCB2]'>
                            <CheckCircleOutlineIcon />
                            <span className='ml-1'>{list}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Train