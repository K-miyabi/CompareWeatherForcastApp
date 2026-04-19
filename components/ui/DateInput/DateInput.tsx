import { useMapContext } from "../../../hooks/useMap";
import styles from "./DateInput.module.css";
import "react-datepicker/dist/react-datepicker.css";

const DateInput = () => {
  const { pastDate, setPastDate } = useMapContext();

  return (
    <div className={styles.container}>
      <input
        type="date"
        value={pastDate}
        onChange={(e) => setPastDate(e.target.value)}
        className={styles.container}
      />
    </div>
  );
};
export default DateInput;
