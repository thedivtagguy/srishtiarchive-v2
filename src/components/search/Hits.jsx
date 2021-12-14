import React from "react"
import { Link } from "gatsby"
import { connectHits } from 'react-instantsearch-dom';

const HitCard = ({ hits }) => {
    return (
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-4 md:grid-cols-1">
        {hits.map(hit => (
      <div class=" max-w-sm">
        <Link to={`/${hit.slug}`}>
          <div className="h-full overflow-hidden transition duration-300 ease-in-out  bg-[#fafafa] border-gray-500 border-opacity-25 rounded-xl border-3 group">
            <div className="h-56 transition duration-150 ease-in-out group-hover:opacity-75">
              {hit.thumbnailUrl ? (
                <img
                  style={{ width: "444px" }}
                  className="object-cover h-56"
                  src={hit.thumbnailUrl}
                  alt="Project Thumbnail"
                />
              ) : (
                <img
                  style={{ width: "444px" }}
                  className="object-cover h-56"
                  src="/social.png"
                  alt="Thumbnail for Project"
                />
              )}
            </div>
            <div className="p-4 sm:p-5">
              <div class="flex flex-row justify-between">
                <p class="uppercase tracking-wide mx-2 mb-1 font-medium text-sm text-gray-800">
                  {hit.major}
                </p>
                <p class="uppercase">
                  {" "}
                  {hit.featured && (
                    <span class="text-xs px-4 text-srishti-red font-bold">
                      Featured
                    </span>
                  )}
                </p>
              </div>
              <div class="h-20">
                <h1 className="px-2 text-xl font-extrabold ">{hit.name}</h1>
              </div>
            </div>
            <div class="">
              <p className="px-6 text-sm font-semibold tracking-wider">
                <span class="text-gray-800 rounded-md px-1 py-1">
                  {hit.author}{" "}
                  {hit.groupmembers && <span class="text-xs">et al.</span>}
                </span>
              </p>
              <p class="text-xs font-bold pl-6 mx-1 py-2  text-gray-700">
                {hit.category}
              </p>
            </div>
            <div class="flex-1 pr-4 pb-4 mx-1 inline-flex items-center">
              {  
              hit.tools.slice(0, 1).map((tag, i) => [
                <p
                  class="text-xs whitespace-normal ml-6 px-2 py-1 rounded-md border-1 border-opacity-40 border-dashed border-black"
                  key={i}
                >
                  <span class="text-black tracking-wider font-semibold">
                    {tag}
                  </span>
                  {i < hit.tools.slice(0, 1).length - 1 ? ", " : ""}
                </p>,
              ])}
            </div>
          </div>
        </Link>
      </div>
    ))}
    </div>
    )}
    

const CustomHits = connectHits(HitCard);
export default CustomHits;