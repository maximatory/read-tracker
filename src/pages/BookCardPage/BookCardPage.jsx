import { Link, useNavigate, useParams } from "react-router-dom"
import { apiBook } from "../../api/apiBooks"
import { useEffect, useState } from "react";
import styles from './BookCardPage.module.scss';

export default function BookCardPage() {
  const [data, setData] = useState({});
  const { bookId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getBook = async () => {
      try {
        const responseData = await apiBook(bookId)
        setData(responseData.volumeInfo)
        console.log(responseData)
      } catch (error) {
        console.log(error)
        navigate("/404", { replace: true });
      }
    }
    getBook();
  }, [])



  return (
    <>
      {data &&
        <div className={styles.card}>
          <div className={styles.card__imageWrapper}>
            <img src={data.imageLinks ? data.imageLinks.thumbnail : "обложка отсутствует"} alt="poster" />
          </div>

          <div className={styles.card__contentWrapper}>
            <h4 className={styles.card__title}>Наименование</h4>
            <div
              className={styles.card__title}
            >{data.title ? data.title : 'Нет информации'}</div>

            <h4 className={styles.card__title}>Автор</h4>
            <div
              className={styles.card__author}
            >{data.authors ? data.authors.map(author => author) : 'Нет информации'}</div>

            <button>
              <Link to={"/search"}>Назад к поиску</Link>
            </button>
            <button>Добавить в библиотеку</button>
            <button>Добавить в вишлист</button>
          </div>

          <div className={styles.card__description}>
            <h4 className={styles.card__title}>Описание</h4>
            {data.description ? data.description : 'Описание отсутствует'}
          </div>
        </div>
      }
    </>
  )
}
