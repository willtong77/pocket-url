import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import UrlPopup from "./components/UrlPopup";
import generateShortUrl from "./generateShortUrl";

function App() {
  const [urlGenerated, setUrlGenerated] = useState(false);
  const [shortUrl, setShortUrl] = useState('');
  const [longUrl, setLongUrl] = useState('');
  const [alias, setAlias] = useState('');
  const [buttonText, setButtonText] = useState('Generate Url');
  const [secondFormText, setSecondFormText] = useState('Your custom domain (optional)');

  const handleLongUrlChange = (event) => {
    setLongUrl(event.target.value);
  }

  const handleAliasChange = (event) => {
    setAlias(event.target.value);
  }

  const handleGenerateClick = async () => {
    if (!longUrl && !urlGenerated) {
      toast.error('You must insert a Url!', {
        theme: 'dark'
      });
    } else { 
      if (!urlGenerated) {
        const short = await generateShortUrl(longUrl, alias);
        if (short === 'error') return;
        setShortUrl(short);
        toast.success('Url Generated!', { theme: 'dark' });
        console.log('here we are')
      } else { setLongUrl(''); }
      setButtonText(!urlGenerated ? 'Generate Another!' : 'Generate Url');
      setSecondFormText(!urlGenerated ? 'Your Pocket URL' : 'Your custom domain (optional)');
      setUrlGenerated(!urlGenerated);
    }
  };

  return (
    <>
      <div>
        <div className='flex flex-col space-y-20 items-center h-full min-h-screen w-full min-w-screen bg-gray-900'>
          <h1 className='text-8xl translate-y-10 text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-pink-500'>
            Pocket URL
          </h1>
          <h1 className='text-xl -translate-y-5 text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-pink-500'>
            URLs so small, they fit in your pocket!
          </h1>
          <div className='-translate-y-6 mb-6 w-96'>
            <h1 className='text-1xl -translate-y-1 text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-pink-500'>
              Your Long URL
            </h1>
            { !urlGenerated ?
              <input
                className="text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                required
                type="text" id={longUrl}
                onChange={handleLongUrlChange}
              />
              :
              <input
                className="text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 hover:cursor-text"
                type="text" value={longUrl}
                required disabled readOnly
              />
            }
          </div>
          <button
            className="relative inline-flex items-center translate-y-4 p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white text-white"
            onClick={handleGenerateClick}
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
              { buttonText }
            </span>
          </button>
          <div className="-translate-y-52 mb-6 w-96">
            <h1 className='text-1xl -translate-y-1 text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-pink-500'>
              {secondFormText}
            </h1>
            { urlGenerated ? 
              <div>
                <UrlPopup shortUrl={shortUrl}/>
              </div>
              :
              <div>
                <input
                className="text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                required
                type="text" id={alias}
                onChange={handleAliasChange}
                />
              </div>
            }
          </div>
        </div>
        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
          closeButton={false}
        />
      </div>
    </>
  );
}

export default App;
