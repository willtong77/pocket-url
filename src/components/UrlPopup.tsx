import { FC } from 'react';
import { toast } from 'react-toastify';

const UrlPopup: FC<{
  shortUrl: string | readonly string[] | undefined | number
}> = ({
  shortUrl
}) => {
/*
<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
</svg>
*/
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
        strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
        d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
      />
    </svg>
  );

  const RedirectSvg = () => (
    <a href={String(shortUrl)} target='_blank' rel='noreferrer'>
      <svg xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 stroke-pink-400 hover:scale-110 hover:cursor-pointer"
        fill="none" viewBox="0 0 24 24" stroke="currentColor"
      >
        <path
          strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
        />
      </svg>
    </a>
  )

  return (
    <>
      <div>
        <input
          className="text-sm rounded-lg block w-full p-2.5 bg-gray-700 border border-gray-600 text-white hover:cursor-text"
          type="email" id="email"
          value={shortUrl} disabled readOnly
        />
        <div className='absolute -translate-y-8 translate-x-96'>
          <div className='absolute flex flex-row -translate-x-14 space-x-1'>
            <ClipboardSvg/>
            <RedirectSvg/>
          </div>
        </div>
      </div>
    </>
  );
}

export default UrlPopup;
