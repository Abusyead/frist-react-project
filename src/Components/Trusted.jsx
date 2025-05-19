function Trusted(){
    const imgData = [
        {img:"img/BackHub.png"},
        {img:"img/CableLabs.png"},
        {img:"img/DBS.png"},
        {img:"img/EasyEuro.png"},
        {img:"img/AMD.png"},
    ]
  return (
    <section className="bg-[#07292F] text-white my-6">
        <div className="max-w-[1440px] mx-auto flex flex-col justify-center items-center">
            <h3 className="text-[#0FF1F6] mb-8 uppercase tracking-wide">our trusted partners</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5  gap-[20px] md:gap-[50px] px-2  justify-items-center">
                {imgData.map((data , i) =>(
                    <div cls key={i} className="md:w-full flex justify-center">
                        <img src={data.img} alt="" />
                    </div>
                ))}
            </div>
            
        </div>
    </section>
  )
}

export default Trusted