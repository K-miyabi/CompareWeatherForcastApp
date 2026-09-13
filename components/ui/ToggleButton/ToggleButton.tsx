import styles from "./ToggleButton.module.css";
import { useMapContext } from "@/hooks/useMap";

const ToggleButton = () => {
  const { isRainLayer, setIsRainLayer } = useMapContext();
  const handleClick = () => {
    setIsRainLayer(!isRainLayer);
  };
  return (
    <label className={styles.toggle}>
      <input type="checkbox" checked={isRainLayer} onClick={handleClick} />
    </label>
  );
};
export default ToggleButton;
