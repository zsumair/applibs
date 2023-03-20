import { useState, useContext, useRef } from "react";
import Link from "next/link";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
// import { toast } from "react-toastify";
import { categories } from "@/utils/Categories";
import {
  getDocs,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db, auth } from "@/config/firebase";
import { authContext } from "@/store/auth-context";
import Login from "./login";

function SubmitLib() {
  let initialState = {
    libName: "",
    libURL: "",
    libDesc: "",
  };

  const { currentUser, logout, check } = useContext(authContext);
  const librariesCollectionRef = collection(db, "libraries");
  const createdTimeStamp = serverTimestamp();

  const [state, setState] = useState(initialState);
  const [libraryCategory, setLibraryCategory] = useState("SaaS");
  const [error, setErrorMessage] = useState(null);
  const [success, setSuccessMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleCategory = (e) => {
    setLibraryCategory(e.target.value);
  };

  const handleInput = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  function getTimestampInSeconds() {
    return Math.floor(Date.now() / 1000);
  }

  const handleSubmitLibrary = async (e) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(false);
    setLoading(true);
    try {
      const { libName, libURL, libDesc } = state;
      await addDoc(librariesCollectionRef, {
        name: libName,
        category: libraryCategory,
        url: libURL,
        description: libDesc,
        created_at: createdTimeStamp,
        userId: auth?.currentUser?.uid,
      });
      setState(initialState);
      setSuccessMessage(true);
      setLoading(false);
    } catch (error) {
      setErrorMessage("Product is not submitted, try again");
      console.log(error);
      setSuccessMessage(false);
      setLoading(false);
    }
  };

  if (!currentUser) {
    return <Login />;
  }

  return (
    <Layout>
      <div className="py-12 md:py-24">
        <div className="card lg:card-side bg-base-300 shadow-sm shadow-gray-300 max-w-xl mx-auto flex">
          <div className="card-body">
            <h2 className="">
              Please submit library (or) package details below
            </h2>

            <form onSubmit={handleSubmitLibrary}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="libName"
                  onChange={handleInput}
                  value={state.libName}
                  placeholder="Name"
                  className="input input-bordered w-full "
                  required
                />
                <label className="label">
                  <span className="label-text-alt">
                    Please enter a valid name
                  </span>
                </label>
              </div>

              <div className="form-control mb-2">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <select
                  onChange={handleCategory}
                  className="select select-bordered"
                >
                  {categories?.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.item}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">URL</span>
                </label>
                <input
                  type="url"
                  name="libURL"
                  onChange={handleInput}
                  value={state.libURL}
                  placeholder="Enter Url"
                  className="input input-bordered w-full "
                  required
                />
                <label className="label">
                  <span className="label-text-alt">This field is required</span>
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                  <span className="label-text-alt">max: 110 chars</span>
                </label>
                <textarea
                  placeholder="Describe in 110 chars"
                  name="libDesc"
                  onChange={handleInput}
                  value={state.libDesc}
                  maxLength="110"
                  className="textarea textarea-bordered leading-tight textarea-md w-full"
                ></textarea>

                <label className="label">
                  <span className="label-text-alt">This field is required</span>
                </label>
              </div>

              <div className="form-control pt-4">
                <button
                  className={
                    "btn gap-2 dark:bg-zinc-100 dark:hover:bg-zinc-100 dark:text-black " +
                    (loading ? "loading" : "")
                  }
                >
                  Submit
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </button>
              </div>
            </form>
            {error && (
              <div className="alert alert-error shadow-lg">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current flex-shrink-0 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Error! Please try again.</span>
                </div>
              </div>
            )}
            {success && (
              <div className="alert alert-success shadow-lg">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current flex-shrink-0 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>successfully submitted</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default SubmitLib;
