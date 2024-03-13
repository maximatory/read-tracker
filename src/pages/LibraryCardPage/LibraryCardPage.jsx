import { useParams } from "react-router-dom";
import { useGetCardByIdQuery } from "../../store/services/libraryApi";
import History from './components/History/History';
import Description from "./components/Description/Description";
import Banner from "./components/Banner/Banner";
import styles from './LibraryCardPage.module.scss';
import Control from "./components/Control/Control";




export default function LibraryCardPage() {
  const { cardId } = useParams();
  const { data } = useGetCardByIdQuery(cardId)

  return (
    <>
      {data &&
        <div>
          <Banner data={data}/>
          <Description data={data}/>
          <Control id={cardId}/>
          <History history={data.history} />
        </div>
      }
    </>
  )
}