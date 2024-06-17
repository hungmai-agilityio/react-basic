import { AuthorProps } from '@/interfaces';

const Author = ({ author, title }: AuthorProps) => {
  return (
    <div className="w-445 h-418 p-8 rounded-xl bg-white text-lg text-dark mr-12">
      <p className="font-bold text-xl">
        <span className="text-orange-550">About </span>Author
      </p>
      <div className="flex justify-between items-center">
        <p className="font-semibold capitalize">{author}</p>
        <img src="/images/author.jpg" alt="author ${author}" className="w-36" />
      </div>
      <p className="text-xs mt-5">
        {author} is a usability consultant who has more than 30 years of
        experience as a user advocate for companies like Apple, Netscape, AOL,
        Lexus, and others. Based in part on the success of his first book,
        {title}, he has become a highly sought-after speaker on usability
        design.
      </p>
    </div>
  );
};

export default Author;
