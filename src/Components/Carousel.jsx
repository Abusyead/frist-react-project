
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useState } from 'react';
import { DriveFileMove } from '@mui/icons-material';
function Carousel(){
    const Slides = [
        {
            id:1,
            img:"img/“.png",
            dis:"Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nuero et velit interdum, ac aliquet odio mattis.",
            name:"John Doe",
            para:"Chief Strategy Officer @ Company",
        },
        {
            id:2,
            img:"img/“.png",
            dis:"nice ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputaro et velit interdum, ac aliquet .",
            name:"Hublu programmer",
            para:"Chief Strategy Programner @ Company",
        },
        {
            id:3,
            img:"img/“.png",
            dis:"hello ipsum dolor sit amet, consectetur adipiscing elit. Nunc l et velit interdum, ac aliquet odio mattis.",
            name:"Eshan vai",
            para:"Hublu Officer @ Company",
        }
    ]

    const [currentIndex , setCurrentIndex] = useState(0);

    const preSlide = () =>{
        setCurrentIndex((preIndex) => preIndex ===0 ? Slides.length - 1 : preIndex -1)
    }

    const nextSlide = () => {
        setCurrentIndex((nextIndex)=> nextIndex === Slides.length - 1 ? 0 : nextIndex + 1 )
    }

    const {img , dis , name , para} = Slides[currentIndex]
    
  return (
    <section className="bg-[#002228]">
        <div className="max-w-[1440px] px-5 mx-auto py-15">
            <div className=" flex w-[100%]">
                <div className="w-[100%] flex justify-center items-center flex-col text-white px-20 relative">
                    <div className='h-[60px] w-[60px] flex items-center justify-center bg-[#183A40] rounded-full mb-6'>
                        <img src={img} alt="" />
                    </div>
                    
                    <p className="max-w-[570px] text-2xl text-center text-gray-300">{dis}</p>
                    <h3 className='mt-10 text-xl text-[#0FF1F6] text-center'>{name}</h3>
                    <h4 className='mt-3 text-[#96ACAF] text-center'>{para}</h4>
                    <div className="absolute flex items-center justify-between w-full h-full">
                        <button className='p-2 bg-[#96ACAF33] rounded-xl' onClick={preSlide}>
                            <ChevronLeftIcon className='text-[#0FF1F6]' />
                        </button>
                        <button className='p-2 bg-[#96ACAF33] rounded-xl' onClick={nextSlide}>
                            <ChevronRightIcon className='text-[#0FF1F6]' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Carousel