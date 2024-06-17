import { memo } from 'react';

interface PreviewProps {
  image?: string;
  title?: string;
}
export const Preview = memo(({ image, title }: PreviewProps) => {
  return (
    <div className="w-card-preview h-418 px-8 py-6 bg-white rounded-xl">
      <img
        src={image}
        alt={title}
        className="w-52 h-prev-book object-contain"
      />
      <div className="mt-7 text-dark flex items-center gap-4 justify-around">
        <div className="text-xs font-bold">
          <img
            src="/images/preview.svg"
            alt="preview icon"
            className=" w-4 h-4 ml-2"
          />
          <p className="leading-5">Review</p>
        </div>
        <div className="text-xs font-bold">
          <img
            src="/images/notes.svg"
            alt="notes icon"
            className=" w-4 h-4 ml-2"
          />
          <p className="leading-5">Notes</p>
        </div>
        <div className="text-xs font-bold">
          <img
            src="/images/share.svg"
            alt="share icon"
            className=" w-4 h-4 ml-2"
          />
          <p className="leading-5">Share</p>
        </div>
      </div>
    </div>
  );
});
