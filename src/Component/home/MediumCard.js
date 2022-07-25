function MediumCard({img, title}) {
  return (
    <div className="cursor-pointer hover:scale-105 transition transform duration-300 ease-out">

     <div className="relative h-60 w-80">
        <img
        alt="Medium Card"
        src={img}
        layout="fill"
        className="rounded-xl"
        />
     </div>
    </div>
  )
}

export default MediumCard