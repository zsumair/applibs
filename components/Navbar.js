import { useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { authContext } from "@/store/auth-context";
// import { signOut } from "firebase/auth";
// import { auth } from "@/config/firebase";
import useAuth from "@/utils/useAuth";

function Navbar() {
  const router = useRouter();
  const { currentUser, logout, check } = useContext(authContext);

  function goToLogin() {
    router.push("/login");
  }
  function goToSubmit() {
    router.push("/submitlib");
  }
  async function goToLogout() {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-sm md:text-xl">
          {"<AppLibsList />"}
        </Link>
      </div>
      <div className="flex-none gap-2 ">
        {/* <div className="form-control hidden md:block">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered"
          />
        </div> */}
        <div className="navbar-end">
          <div className="flex gap-2">
            <button
              onClick={goToSubmit}
              className="btn btn-ghost btn-xs sm:btn-sm md:btn-sm lg:btn-sm "
            >
              Submit library
            </button>

            {currentUser ? (
              <>
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-xs md:btn-sm lg:btn-sm btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img
                        src={currentUser?.photoURL}
                        alt={currentUser?.displayName}
                      />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <span className="text-xs md:text-md md:uppercase justify-between">
                        Hi, {currentUser.displayName}
                      </span>
                    </li>

                    <li>
                      <button
                        onClick={goToLogout}
                        className="btn pb-7 btn-ghost items-center btn-xs sm:btn-sm md:btn-sm lg:btn-sm"
                      >
                        logout
                      </button>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <button
                onClick={goToLogin}
                className="btn btn-ghost btn-xs sm:btn-sm md:btn-sm lg:btn-sm"
              >
                login
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
