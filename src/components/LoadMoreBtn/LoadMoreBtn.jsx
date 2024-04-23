import css from "./LoadMoreBtn.module.css";
import { BsChevronDoubleDown } from "react-icons/bs";

export default function LoadMoreBtn({ onClick }) {
  return (
    <div className={css.container}>
      <button className={css.btn} onClick={onClick} type="button">
        <BsChevronDoubleDown size="18" />
        Load more
      </button>
    </div>
  );
}