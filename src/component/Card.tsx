interface CardProps {
  record: {
    image: string | undefined; ride: string 
}; // Adjust the type based on the actual structure of 'record'
  num: number;
}

export const Card = ({ record, num }: CardProps) => {
  return (
    <div className="flex w-full p-6 max-w-lg flex-col rounded-lg bg-white shadow-sm border border-slate-200 my-6">
  <div className="flex items-center gap-4 text-slate-800">
  <div className="flex w-full flex-col">
      <div className="flex items-center justify-between">
        <h5 className="text-xl font-semibold text-slate-800">
          {record.ride}
        </h5>
      </div>
      <p className="text-2xl uppercase font-bold text-black-500 mt-2">
        {num}
      </p>
    </div>
    <img src={record.image} alt="Tania Andrew" className="relative inline-block h-[40px] w-[40px] !rounded-full  object-cover object-center" />
  </div>
</div>   
  )
}
