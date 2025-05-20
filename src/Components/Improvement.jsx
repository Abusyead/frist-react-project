function Improvement() {
    const improdata = [
        {
            parse:"75%",
            dis:"Improvement in Open Rates"
        },
        {
            parse:"32%",
            dis:"Improvement in Ramp Time"
        },
        {
            parse:"35%",
            dis:"Improvement in Meetings Booked"
        },
    ]
  return (
    <section className="bg-[url(img/imt.png)] bg-center bg-cover py-15">
        <div className="max-w-[1440px] bh px-6 py-5 mx-auto">
            <h2 className="text-3xl font-semibold max-w-[500px]">Allocate effort where your reps make an inpact.</h2>
            <h3 className="text-2xl italic text-[#0FF1F6] my-2">Let us handle the rest.</h3>
            <p className="max-w-[520px] my-4 text-gray-300 text-md">Keep your reps “in the air” -- out in the field and on the phone where they can build relationships.</p>
            <div className="flex mt-14 gap-5">
               {improdata.map((improdata , i) =>(
                <div key={i}>
                     <h3 className="text-4xl text-[#0FF1F6] font-semibold mb-2">{improdata.parse}</h3>
                     <p className="max-w-[130px] text-[#E9EEF1] text-md">{improdata.dis}</p>
                </div>
               ))}
            </div>
        </div>
    </section>
  )
}

export default Improvement