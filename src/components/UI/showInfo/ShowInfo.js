const ShowInfo = ({ right, left, className, full, nowrap = true }) => {
  return (
    <div
      className={`${className} items-center md:flex  ${
        full && "col-span-full w-full"
      }`}
    >
      <p className={`ml-2 ${nowrap && "whitespace-nowrap"}`}>{right + " : "}</p>
      <p className="">{left || "تعیین نشده"}</p>
    </div>
  );
};

export default ShowInfo;
