import { useEffect, useState } from "react";
import { categories } from "@/utils/Categories";
import { db } from "@/config/firebase";
import { getDocs, collection, orderBy, where } from "firebase/firestore";
import Link from "next/link";
import LibraryCard from "./LibraryCard";
import { useRouter } from "next/router";
import Pagination from "./Pagination";
import Libraries from "./Libraries";
import Skeleton from "./Skeleton";

function Content() {
  const [libraryList, setLibraryList] = useState([]);
  const [newList, setNewList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function getCategory(item) {
    setIsLoading(true);
    setNewList(libraryList);
    setSelectedCategory(item);
    const newItem = libraryList.filter((newVal) => {
      return newVal.category === item;
    });
    // console.log("newitem", newItem);
    // console.log("library", libraryList);
    setNewList(newItem);
    setIsLoading(false);
  }

  const librariesCollectionRef = collection(db, "libraries");

  useEffect(() => {
    getLibrariesList();
  }, []);

  async function getLibrariesList() {
    setIsLoading(true);
    try {
      const data = await getDocs(
        librariesCollectionRef,
        orderBy("created_at.seconds", "desc")
      );
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setLibraryList(filteredData);
      setNewList(filteredData);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  }

  // const filterItem = (curcat) => {
  //   const newItem = Data.filter((newVal) => {
  //     return newVal.category === curcat;
  //   });
  //   setItem(newItem);
  // };

  // console.log("newlistagain", selectedCategory);

  return (
    <div>
      <main role="main" id="MainContent">
        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-6 text-center lg:py-12">
            <h5 className="text-md font-bold text-gray-900 sm:text-4xl pb-4">
              Find Libraries for React
            </h5>

            <ul className="inline-flex md:flex flex-wrap mx-auto gap-2 p-4">
              <>
                <li className="pb-1">
                  <button
                    onClick={() => {
                      setNewList(libraryList);
                      setSelectedCategory("");
                    }}
                    className="btn btn-xs sm:btn-sm md:btn-sm lg:btn-sm btn-outline"
                  >
                    All
                  </button>
                </li>
                {categories?.map((category) => (
                  <li key={category.value} className="pb-1">
                    <button
                      onClick={(e) => getCategory(category.value)}
                      key={category.value}
                      className={
                        "btn btn-xs sm:btn-sm md:btn-sm lg:btn-sm btn-outline"
                      }
                    >
                      {category.item}
                    </button>
                  </li>
                ))}
              </>
            </ul>
          </div>
        </section>
        <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-12">
          <Libraries
            libraryList={newList}
            selectedCategory={selectedCategory}
            isLoading={isLoading}
          />
        </div>
      </main>
    </div>
  );
}

export default Content;
