import { useState } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import UrlPopup from "./components/UrlPopup";

function App() {
  const [urlGenerated, setUrlGenerated] = useState(false);

  const shortUrl = 'tmp';

  return (
    <>
      <div>
        <div className='flex flex-col space-y-20 items-center h-full min-h-screen w-full min-w-screen bg-gray-900'>
          <h1 className='text-9xl translate-y-10 text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-pink-500'>
            Pocket URL
          </h1>

          <div className='translate-y-24 mb-6 w-96'>
            <input type="email" id="email" className="text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Long Url" required/>
          </div>
          <button
            className="relative inline-flex items-center translate-y-6 justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white text-white"
            onClick={() => setUrlGenerated(true)}
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Generate Url
            </span>
          </button>
          <div>
            { urlGenerated
              ? <UrlPopup shortUrl={shortUrl}/>
              : null
            }
          </div>
        </div>
        <ToastContainer
          position="bottom-right"
          autoClose={1750}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
        />
      </div>
    </>
  );
}

export default App;
