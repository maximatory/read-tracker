import { Link, useNavigate, useParams } from "react-router-dom"
import styles from './BookCardPage.module.scss';
import { useGetBookByIdQuery } from "../../store/services/booksApi";

import Button from "../../components/Button/Button";
import { useEffect, useState } from "react";


export default function BookCardPage() {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const [cardBook, setCardBook] = useState([])

  const {
    data,
    isLoading,
    isSuccess,
    error,
  } = useGetBookByIdQuery(bookId)

  if (error) {
    navigate("/404", { replace: true });
  }

  useEffect(()=>{
    if(isSuccess){
      setCardBook({
        googleId: bookId,
        img: data.volumeInfo.imageLinks,
        title: data.volumeInfo.title,
        authors: data.volumeInfo.authors,
        description: data.volumeInfo.description,
      })
    }
  }, [isSuccess])

  return (
    <>
      {data &&
        <div className={styles.card}>
          <div className={styles.card__imageWrapper}>
            <img src={data.volumeInfo.imageLinks ? data.volumeInfo.imageLinks.thumbnail : "обложка отсутствует"} alt="poster" />
          </div>

          <div className={styles.card__contentWrapper}>
            <h4 className={styles.card__title}>Наименование</h4>
            <div
              className={styles.card__title}
            >{data.volumeInfo.title ? data.volumeInfo.title : 'Нет информации'}</div>

            <h4 className={styles.card__title}>Автор</h4>
            <div
              className={styles.card__author}
            >{data.volumeInfo.authors ? data.volumeInfo.authors.map(author => author) : 'Нет информации'}</div>

            <button>
              <Link to={"/search"}>Назад к поиску</Link>
            </button>
            <Button
              name="библиотеку"
              card={cardBook}
              type="library"
            />
            <Button
              name="вишлист"
              card={cardBook}
              type="wishlist"
            />

          </div>

          <div className={styles.card__description}>
            <h4 className={styles.card__title}>Описание</h4>
            {data.volumeInfo.description ? data.volumeInfo.description : 'Описание отсутствует'}
          </div>
        </div>
      }
    </>
  )
}
