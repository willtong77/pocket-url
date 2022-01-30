import UrlForm from "./components/UrlForm";
import UrlPopup from "./components/UrlPopup";

function App() {
  return (
    <>
      <div className='flex flex-col space-y-20 items-center h-full min-h-screen w-full min-w-screen dark:bg-gray-900'>
        <h1 className='text-7xl translate-y-10 text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-pink-500'>
          Pocket URL
        </h1>
        <div className='translate-y-32'>
          <UrlForm />
        </div>
        <button className="relative inline-flex items-center translate-y-16 justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Generate Url
          </span>
        </button>
        <div>
          <UrlPopup shortUrl={'temp short url'}/>
        </div>
      </div>
    </>
  );
}

export default App;
