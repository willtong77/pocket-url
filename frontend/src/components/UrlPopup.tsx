import { FC } from 'react';
import { ReactElement as ClipboardSvg } from '../../svg/Clipboard.svg';

const UrlPopup: FC<{
  shortUrl: string | readonly string[] | undefined | number
}> = ({
  shortUrl
}) => {
  return (
    <>
      <div className='mb-6 w-96'>
        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white" value={shortUrl} disabled readOnly/>
        <ClipboardSvg/>
      </div>
    </>
  );
}

export default UrlPopup;
