import React from 'react'
import first from '../assets/second.png'; 

const Five = ({ onNavigate }) => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="relative w-[500px] h-[500px] bg-white shadow-lg p-2 flex flex-col items-center">
        <div
          className="relative shadow-lg mt-5 p-6 flex flex-col justify-between"
          style={{
            backgroundImage: `url(${first})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '440px',
            height: '260px',
          }}
        >
         

          <div className='bg-white text-[#CA3F2A] border border-[#CA3F2A] rounded-xl p-3 font-timmy text-lg'>
            <p className="text-center">
              You’re purchasing Superior room at the <br />
              Park Plaza Westminster Bridge London <br />
              from 24-06-2024 to 24-06-2024 for <br />
              USDC 447.90 for 2 guests.
            </p>
          </div>

          <p className='items-center justify-center mt-[14px] text-xs border border-[#969393] mx-12 flex text-white font-timmy'>0xC6253c09fD4041d38CfC29d15266634D384843AC</p>

          {/* Input Section */}
          <div className="flex flex-col items-center "> 
            <button className="bg-[#CA3F2A] text-white px-20 mt-3   rounded-md text-lg font-semibold "
            onClick={onNavigate}>
             Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Five