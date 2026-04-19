import styles from "./ToggleButton.module.css";
import { useMapContext } from "@/hooks/useMap";

const ToggleButton = () => {
  const { isRainLayer, setIsRainLayer } = useMapContext();
  const handleClick = () => {
    setIsRainLayer(!isRainLayer);
  };
  return (
    <label className={styles.toggle}>
      <input type="checkbox" defaultChecked onClick={handleClick} />
    </label>
  );
};
export default ToggleButton;
