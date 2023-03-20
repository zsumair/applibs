import { useState } from "react";
import Pagination from "./Pagination";
import LibraryCard from "./LibraryCard";

function Libraries({ libraryList, selectedCategory }) {
  const [libsPerPage, setLibsPerPage] = useState(12);
  //   console.log("library", libraryList);
  //   console.log("selectedCategory", selectedCategory);

  const lastPostIndex = libsPerPage;
  const firstPostIndex = lastPostIndex - libsPerPage;
  let currentLibs = libraryList?.slice(firstPostIndex, lastPostIndex);
  return (
    <>
      <div className="space-y-4">
        {/* <h2 className="text-lg font-bold sm:text-xl">Application UI</h2> */}
        <h2 className="text-lg font-bold sm:text-xl">{selectedCategory}</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {currentLibs &&
            currentLibs?.map((library) => (
              <LibraryCard {...library} key={library?.name} />
            ))}
        </div>
        <Pagination
          totalLibs={libraryList?.length}
          libsPerPage={libsPerPage}
          setLibsPerPage={setLibsPerPage}
        />
      </div>
    </>
  );
}

export default Libraries;
