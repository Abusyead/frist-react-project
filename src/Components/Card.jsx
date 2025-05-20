function Card() {
    const Carddata = [
        {
           img:"img/card-3.png",
           title:'You’re in Control',
           discription:"aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work."
        },
        {
           img:"img/card-2.png",
           title:'Infinitely Scalable',
           discription:"Train an aiDR on a patch. When you are happy with the results, scale it effortlessly."
        },
        {
           img:"img/card-1.png",
           title:'Incredibly Flexible',
           discription:"Train an aiDR on an outbound patch, to nurture inbound leads, or to reach out to your long tail of SMB customers at renewal time."
        }
    ]
  return (
    <section className="text-white py-[40px] sm:py-[100px] bg-[#002228]">
        <div className="max-w-[1440px] mx-auto  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 px-5">
            {Carddata.map((data,i) =>(
                <div key={i} className="hover:border-[1px] border-[1px] border-transparent hover:border-gray-500 box-content px-6 py-4 lg:py-8 rounded-2xl transform duration-300 cursor-pointer hover:shadow-sm  hover:shadow-gray-400">
                    <img src={data.img} alt="" />
                    <h2 className="py-2 font-semibold text-md">{data.title}</h2>
                    <p className="text-sm font-extralight text-[#ffffffa9] max-w-[400px]">{data.discription}</p>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Card;