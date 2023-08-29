/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { ContextApp } from "../ContextAPI";

import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore/lite";
import { db } from "../../services/firebase/firebase";

export function PopupComponent() {
  const { showModal, setShowModal } = useContext(ContextApp);
  const [email, setEmail] = useState("");
  const [valid, setValid] = useState(null);
  const [exist, setExist] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Получил коллекцию из firebase
    const subscribersRef = collection(db, "subscribers");
    //Проверка полей в коллекции
    const emailQuery = query(subscribersRef, where("email", "==", email));

    //улословие
    const querySnapshot = await getDocs(emailQuery);
    if (!querySnapshot.empty) {
      setExist(true);
    } else {
      setExist(false);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setValid(false);
    } else {
      const currentTime = new Date().toISOString();

      try {
        const docRef = await addDoc(collection(db, "subscribers"), {
          email: email,
          date: currentTime,
        });
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      setValid(true);

      //! Close window after a user type an email correctly and submit to the db.
      // setTimeout(() => {
      //   setEmail("");
      //   setShowModal(false);
      // }, 2000);
    }
  };

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-lg">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between px-6 py-4 rounded-t">
                  <h3 className="text-xl sm:text-2xl leading-tight font-bold tracking-tight text-gray-800 uppercase">
                    Рассылка от X-Boost
                  </h3>
                  <button
                    className=" top-7 right-4 "
                    onClick={() => setShowModal(false)}
                  >
                    <CloseRoundedIcon
                      fontSize="large"
                      className=" text-gray-500 hover:text-green-500 active:text-green-600 hover:shadow-inner hover:border-green-500 rounded-lg flex items-center "
                    />
                  </button>
                </div>
                {/*body*/}
                <div className="relative px-6 flex-auto">
                  <h3 className=" text-gray-500 text-md sm:text-lg leading-relaxed">
                    Узнай первым про новые фишки вертикального контента!{" "}
                    <span className="text-lg sm:text-xl text-green-400">
                      {" "}
                      Получай лучше кейсы!
                    </span>
                  </h3>
                </div>
                {/*footer*/}
                <form className="border-solid border-slate-200 rounded-b grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-12 gap-4 px-6 py-4">
                  <div className="relative sm:col-span-8">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none ">
                      <svg
                        className="w-4 h-4 text-gray-500 "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 16"
                      >
                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                      </svg>
                    </div>
                    <input
                      type="email"
                      value={email}
                      className={`bg-gray-50 border   text-sm rounded-lg ${
                        valid === null
                          ? "focus:ring-blue-500 focus:border-blue-500 border-gray-300 text-gray-900"
                          : valid
                          ? "focus:ring-green-500 focus:border-green-500 border-green-500 text-green-500"
                          : "focus:ring-red-500 focus:border-red-500 border-red-500 text-red-500"
                      }  block w-full pl-10 p-2.5 focus:outline-none  focus:ring-1`}
                      placeholder="name@mail.com"
                      onChange={handleEmailChange}
                    />
                  </div>
                  <div className="sm:col-span-4 ">
                    <button
                      className="w-full h-full bg-green-500 text-white active:bg-green-600 font-bold uppercase
                    text-sm rounded-md shadow-sm hover:shadow-lg "
                      type="button"
                      // onClick={() => setShowModal(false)}
                      onClick={handleSubmit}
                    >
                      Подписаться
                    </button>
                  </div>
                </form>
                {/* Show user State of their email */}
                <div className="px-6 flex-auto">
                  {valid === null ? null : valid ? (
                    exist ? (
                      <p className="mb-4 text-sm text-green-600 dark:text-green-500">
                        Эта почта уже подписана на наши обновления
                      </p>
                    ) : (
                      <p className="mb-4 text-sm text-green-600 dark:text-green-500">
                        <span className="font-medium">Успешно!</span> Ваша
                        электронная почта подтверждена, подписка активирована!
                      </p>
                    )
                  ) : (
                    <p className="mb-4 text-md text-red-600 dark:text-red-500">
                      <span className="font-medium">Упс!</span> Введенный email
                      недействителен. Пожалуйста, проверьте правильность
                      написания.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default PopupComponent;
