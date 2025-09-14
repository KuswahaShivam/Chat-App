// import React from 'react'
import cardimg from '../assets/cardimg.svg'
import cardimg2 from '../assets/cardimg2.svg'

const Card = () => {
  return (
    <div>
      <div className="card-container w-full md:grid-cols-2 sm:grid-cols-2 flex justify-around gap-5 py-[23px]">
                        <div className="card p-5 bg-gradient-to-br from bg-red-50 to-sky-50  w-60 min-h-20 rounded-xl">
                            <div className="w-full h-30">
                                <div className="card-img bg-white float-left rounded-full p-2 ">
                                    <img src={cardimg} alt="" className='w-5' />
                                </div>
                            </div>
                            <div className="cardContent w-60 ">
                                <h3>Give me a concise summary of this meeting transcript</h3>
                            </div>

                        </div>



                        {/* second Card */}
                        <div className="card p-5 bg-gradient-to-br from bg-red-50 to-sky-50  w-60 min-h-20 rounded-xl">
                            <div className="w-full h-30">
                                <div className="card-img bg-white float-left rounded-full p-2 ">
                                    <img src={cardimg} alt="" className='w-5' />
                                </div>
                            </div>

                            <div className="cardContent w-60">
                                <h3>Write a product description for a minimalist smartwatch</h3>
                            </div>

                        </div>


                        {/* third Card */}

                        <div className="card p-5 bg-gradient-to-br from bg-red-50 to-sky-50  w-60 min-h-20 rounded-xl">
                            <div className="w-full h-30">
                             <div className="card-img bg-blue-500 float-left rounded-full p-2 ">
                                <img src={cardimg2} alt="" className='w-5 '/>
                            </div>
                            </div>
                            <div className="cardContent w-50 flex items-baseline-last  ">
                                <h3 className='text-lg'>Provide a polite response to a customer asking for a refund</h3>
                            </div>

                        </div>
                    </div>
    </div>
  )
}

export default Card
