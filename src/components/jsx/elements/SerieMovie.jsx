import { Link } from "react-router-dom";

const SerieMovie = ({ titleSerie, link, movies, icon, imgMovie, id }) => {
  const hoverStyles = {
    1: "left-[40px]",
    2: "right-1/4",
    3: "right-1/4",
    4: "right-1/4",
    5: "right-1/4",
    6: "right-[60px]",
  };

  return (
    <div className="group z-10">
      {/* Series Title with Icon */}
      <div className="flex gap-1 items-center hover:text-[#38A93B] group-hover:text-[#38A93B]">
        <Link to={link}>{titleSerie}</Link>
        {icon}
      </div>

      {/* Dropdown Menu */}
      <div
        className={`absolute mt-0 bg-[#16191E] hidden group-hover:block shadow-lg rounded-lg w-auto justify-items-center  ${
          hoverStyles[id] || "left-0"
        }`}
      >
        <div className="flex gap-4 ml-7 ">
          {/* Movie Links */}
          <div className="grid grid-cols-2 gap-x-5 space-y-0">
            {movies &&
              movies.map((movie, id) => (
                <Link
                  key={id}
                  to={movie.link}
                  className="block hover:text-[#38A93B] rounded"
                >
                  {movie.title}
                </Link>
              ))}
          </div>
          {/* Image */}
          {imgMovie && (
            <div>
              <img
                src={imgMovie}
                alt={titleSerie}
                className="w-[300px] rounded-lg"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SerieMovie;
