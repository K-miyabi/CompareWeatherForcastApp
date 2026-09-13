"use client";
import SideBar from "@/components/ui/SideBar/SideBar";
import styles from "./page.module.css";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("@/components/Map/Map"), {
  ssr: false,
});

export default function Home() {
  return (
    <main>
      <div className={styles.map}>
        <Map />
      </div>
      <SideBar />
    </main>
  );
}
