function Card({ title, description, link, demo }) {
  return (
    <div className="container mx-auto mb-[30px]">
      {/*Title*/}
      <div className="flex flex-col items-center justify-center">
        {/*Cards -> turn into its own component*/}
        <div className="bg-secondary w-[320px] h-[320px] rounded-[30px]">
          <div className="flex flex-col text-white text-center">
            {/*title*/}
            <div className="font-bold text-primaryTextColor text-[30px] mt-[25px]">
              <h1>{title}</h1>
            </div>
            <div className="mt-[10px] text-[20px]">
              {/*desc*/}
              <p>{description}</p>
            </div>
          </div>
          {/*buttons*/}
          <div className="flex space-x-[15px] justify-center items-center mt-[20px]">
            <a
              href={link}
              className="bg-bHoverColor hover:bg-bColor translate-colors duration-300 text-white font-bold py-1 px-4 rounded"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>
            <a
              href={demo}
              className="bg-bHoverColor hover:bg-bColor translate-colors duration-300 text-white font-bold py-1 px-4 rounded"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
