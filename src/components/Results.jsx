import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import { Loader } from "./index";
import { useSearchContext } from "../contexts/SearchContextProvider";

const Results = () => {
  const {
    result: { results, image_results, entries },
    loading,
    getResult,
    searchTerm,
  } = useSearchContext();
  const location = useLocation();

  useEffect(() => {
    if (searchTerm !== "") {
      if (location.pathname === "/videos") {
        getResult(`/search/q=${searchTerm} videos`);
      } else {
        getResult(`${location.pathname}/q=${searchTerm}&num=40`);
      }
    }
  }, [searchTerm, location.pathname]);

  if (loading) return <Loader />;

  if (location.pathname === "/search") {
    return (
      <div className="flex flex-wrap justify-between space-y-6 md:px-56 mt-10">
        {results?.map(({ link, title }, index) => (
          <div key={index} className="w-full md:w-2/5">
            <a href={link} rel="noreferrer" target="_blank">
              <p className="text-sm mr-2">
                {link.length > 20 ? link.substring(0, 20).concat("...") : link}
              </p>
            </a>
            <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
              {title}
            </p>
          </div>
        ))}
      </div>
    );
  }

  if (location.pathname === "/image") {
    return (
      <div className="flex flex-wrap justify-center items-center space-y-6">
        {image_results?.map(({ image, link: { href, title } }, index) => (
          <a
            className="sm:p-3 p-5"
            href={href}
            key={index}
            target="_blank"
            rel="noreferrer"
          >
            <img src={image?.src} alt={title} loading="lazy" />
            <p className="w-36 break-words text-sm mt-3">{title}</p>
          </a>
        ))}
      </div>
    );
  }

  if (location.pathname === "/video") {
    return (
      <div className="flex flex-wrap">
        {results?.map((video, index) => (
          <div key={index} className="p-2">
            {video?.additional_links?.[0]?.href && (
              <ReactPlayer
                url={video.additional_links?.[0]?.href}
                controls
                width="400px"
                height="200px"
              />
            )}
          </div>
        ))}
      </div>
    );
  }

  if (location.pathname === "/news") {
    return (
      <div className="flex flex-wrap justify-between space-y-6 md:px-56 mt-10 items-center">
        {entries?.map(({ links, id, source, title }) => (
          <div key={id} className="w-full md:w-2/5">
            <a
              href={links?.[0].href}
              rel="noreferrer"
              target="_blank"
              className="hover:underline"
            >
              <p className="text-lg dark:text-blue-300 text-blue-700">
                {title}
              </p>
            </a>
            <div className="flex gap-4">
              <a href={source?.href} target="_blank" rel="noreferrer">
                {source.href}
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  }
};

export default Results;
