import { FC } from 'react';
import { toast } from 'react-toastify';

const UrlPopup: FC<{
  shortUrl: string | readonly string[] | undefined | number
}> = ({
  shortUrl
}) => {

  const ClipboardSvg = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 stroke-pink-400 hover:scale-110 hover:cursor-pointer"
      fill="none" viewBox="0 0 24 24"
      onClick={() => {
        navigator.clipboard.writeText(String(shortUrl));
        toast.success('Copied to clipboard!', {
          theme: 'dark'
        });
      }}
    >
      <path
        strokeLinecap="round" strokeLinejoin="round" strokeWidth="{1}"
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
      />
    </svg>
  );

  return (
    <>
      <div className='mb-6 w-80'>
        <input
          className="text-sm rounded-lg block w-full p-2.5 bg-gray-700 border border-gray-600 text-white hover:cursor-text"
          type="email" id="email"
          value={shortUrl} disabled readOnly
        />
        <div className='absolute -translate-y-8 translate-x-72'>
          <ClipboardSvg/>
        </div>
      </div>
    </>
  );
}

export default UrlPopup;
