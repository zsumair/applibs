import { useState } from "react";
import Pagination from "./Pagination";
import LibraryCard from "./LibraryCard";
import Link from "next/link";

function Libraries({ libraryList, selectedCategory }) {
  const [libsPerPage, setLibsPerPage] = useState(12);

  const lastPostIndex = libsPerPage;
  const firstPostIndex = lastPostIndex - libsPerPage;
  let currentLibs = libraryList?.slice(firstPostIndex, lastPostIndex);
  return (
    <>
      <div className="space-y-4">
        {/* <h2 className="text-lg font-bold sm:text-xl">Application UI</h2> */}
        <h2 className="text-lg font-bold sm:text-xl">{selectedCategory}</h2>

        {currentLibs.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {currentLibs &&
              currentLibs?.map((library) => (
                <LibraryCard {...library} key={library?.name} />
              ))}
          </div>
        ) : (
          <>
            <h3 className="text-xl">
              Oops, no library added yet, why don't you add one{" "}
              <Link className="underline" href="/submitlib">
                here
              </Link>
            </h3>
          </>
        )}

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
