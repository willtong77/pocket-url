import { FC } from "react";

const LongUrlStatic: FC<{
  longUrl: string
}> = ({
  longUrl
}) => {
  return (
    <input
      className="text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 hover:cursor-text"
      type="text" value={longUrl}
      required disabled readOnly
    />
  )
}

export default LongUrlStatic;