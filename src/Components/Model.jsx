import { useEffect, useState } from "react";
import banner from "../assets/images/JASMY TOKEN BANNER.webp";

const Model = () => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setModalOpen(true);
  }, []);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scrolling when the modal is closed
      document.body.style.overflowY = "auto";

      // Cleanup function to restore default overflow when component unmounts
      return () => {
        document.body.style.overflowY = "auto";
      };
    }
  });

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <>
        <div>
          {modalOpen && (
            <>
              {/* Backdrop */}
              <div
                className="fixed top-0 left-0 w-screen h-screen z-[9998] bg-black bg-opacity-50"
                onClick={closeModal}
              />

              {/* Modal */}
              <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full z-[9999]">
                <div className="relative bg-transparent max-w-full mx-4">
                  {/* Image Container */}
                  <div className="rounded-2xl">
                    <img
                      className="rounded-2xl w-full max-w-[60rem] h-auto"
                      src={banner}
                      alt=""
                    />
                  </div>

                  {/* Close Button */}
                  <button
                    className="absolute -top-3 -right-3 bg-blue-800 px-2 py-2 rounded-full"
                    onClick={() => setModalOpen(false)}
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </>
    </>
  );
};

export default Model;
