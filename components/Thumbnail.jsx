import Image from "next/image";
import { IMAGE_BASE_URL } from "../utils/request";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { forwardRef } from "react";

const Thumbnail = forwardRef(({ result }, ref) => {
  return (
    <div
      ref={ref}
      className="p-2 group cursor-pointer transition duration-200 ease-in 
    transform sm:hover:scale-105 hover:z-50 3xl:flex flex-wrap justify-center"
    >
      <Image
        layout="responsive"
        src={`${IMAGE_BASE_URL}${result.backdrop_path || result.poster_path}`}
        height={1080}
        width={1920}
        alt="Movie Image"
      />

      <div className="p-2">
        <p className="truncate max-w-md">{result.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {result.media_type && `${result.media_type} •`}{" "}
          {result.release_date || result.firs_air_date}•{" "}
          <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
        </p>
      </div>
    </div>
  );
});

export default Thumbnail;
