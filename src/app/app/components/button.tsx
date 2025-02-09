interface data {
  value: string
}

const Button = ({value}: data) => {
  return(
      <div className="w-[160px] h-[58px] mt-[22px] bg-black flex items-center cursor-pointer justify-center p-[20px] max-lg:mt-[16px] max-lg:w-[160px] max-lg:h-[55px] max-lt:mt-[0px] max-lt:w-[145px] max-mt:w-[135px] max-mt:h-[50px] max-mm:w-[110px] max-mm:h-[40px]">
          <button className="w-[100px] h-[24px] font-bold text-[16px] text-[#FFFF] max-mm:text-[12px]">{value}</button>
      </div>
  )
}

export default Button