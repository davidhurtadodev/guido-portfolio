export default function TextContainer({
  text,
  className,
}: {
  text: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`w-[315px] h-[410px] mb-20 lg:w-[590px] lg:h-[310px] ${
        className && className
      }`}
    >
      <div className="w-full flex justify-center">
        <div className="w-[305px] h-[5px] lg:w-[580px]  bg-[#D7D5CD]"></div>
      </div>
      <div className="flex ">
        <div className="w-[5px] h-[400px] lg:w-[5px] lg:h-[300px] bg-[#D7D5CD] ml-0 mr-auto shrink-0"></div>
        <div className="ml-[10px] my-[10px] mr-[34px]">{text}</div>
        <div className="w-[5px] h-[400px] lg:w-[5px] lg:h-[300px] bg-[#D7D5CD] mr-0 ml-auto shrink-0"></div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-[305px] h-[5px] lg:w-[580px] bg-[#D7D5CD]"></div>
      </div>
    </div>
  );
}
