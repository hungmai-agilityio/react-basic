import { useNavigate } from 'react-router-dom';

// Constants
import { CELL, SIZE, TYPE, MESSAGE_VALID, URLS } from '@/constants';

// Interfaces
import { IBook } from '@/interfaces';

// Font Awesome
import { faHeart } from '@fortawesome/free-solid-svg-icons';

// Services
import { getBookById } from '@/services';

// Components
import Button from '@/components/Button/Default';
import { Table } from '@/components/Table';
import { Body } from '@/components/Table/Body';
import { Cell } from '@/components/Table/Cell';
import { Head } from '@/components/Table/Head';
import { Row } from '@/components/Table/Row';
import Empty from '@/components/Table/Row/Empty';
import ButtonIcon from '@/components/Button/Icon';
import Label from '@/components/Label';

interface IProps {
  data: IBook[];
  onFavoriteClick: (bookId: string) => void;
  favorites: string[];
  borrowedBooks: string[];
}

const TableBook = ({
  data,
  onFavoriteClick,
  favorites,
  borrowedBooks
}: IProps) => {
  const navigate = useNavigate();

  const handleFavoriteClick = (bookId: string) => {
    onFavoriteClick(bookId);
  };

  const handlePreviewBook = async (bookId: string) => {
    const book = await getBookById(bookId);

    if (book) {
      navigate(`${URLS.BOOK_PREVIEW}?bookId=${bookId}`);
    }
  };

  const renderBookRow = data.map((book) => (
    <Row key={book.id} type={CELL.TD}>
      <Cell type={CELL.TD}>
        <div className="flex gap-12 items-center">
          <img src={book.image} alt={book.title} className="w-20 h-24" />
          <div className="text-dark">
            <p className="text-lg">{book.title}</p>
            <p className="text-sm">
              {book.author}, {book.created_at.toString().substring(0, 4)}
            </p>
          </div>
        </div>
      </Cell>
      <Cell type={CELL.TD}>
        <p className="text-lg">
          {book.rating}
          <span className="text-sm text-silver-250">/5</span>
        </p>
      </Cell>
      <Cell type={CELL.TD}>
        <p className="text-lg ">{book.subjects.join(', ')}</p>
        <p className="text-sm">{book.text}</p>
      </Cell>
      <Cell type={CELL.TD}>
        {borrowedBooks.includes(book.id) ? <Label isBorrow /> : <Label />}
      </Cell>
      <Cell type={CELL.TD}>
        <div className="ml-9">
          <ButtonIcon
            data={book.id}
            onClickSecond={handleFavoriteClick}
            icon={faHeart}
            styles={
              favorites.includes(book.id)
                ? 'text-red-500'
                : 'text-gray-400 hover:text-red-550'
            }
          />
        </div>
      </Cell>
      <Cell type={CELL.TD}>
        <Button
          name="Preview"
          data={book.id}
          onClickSecond={handlePreviewBook}
          type={TYPE.SECOND}
          size={SIZE.MINI}
        />
      </Cell>
    </Row>
  ));

  const renderRowEmpty = <Empty message={MESSAGE_VALID.SEARCH_EMPTY} />;

  return (
    <>
      <Table>
        <Head>
          <Row type={CELL.TH}>
            <Cell size={SIZE.LARGE} type={CELL.TH}>
              Title
            </Cell>
            <Cell size={SIZE.SMALL} type={CELL.TH}>
              Ratings
            </Cell>
            <Cell size={SIZE.MEDIUM} type={CELL.TH}>
              Category
            </Cell>
            <Cell size={SIZE.SMALL} type={CELL.TH}>
              Status
            </Cell>
            <Cell size={SIZE.SMALL} type={CELL.TH}></Cell>
            <Cell size={SIZE.MEDIUM} type={CELL.TH}></Cell>
          </Row>
        </Head>
        <Body>{data.length === 0 ? renderRowEmpty : renderBookRow}</Body>
      </Table>
    </>
  );
};

export default TableBook;
