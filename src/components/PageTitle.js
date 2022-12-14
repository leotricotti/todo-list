import styles from "../css/title.module.css";

export function PageTitle({ title }) {
  return <h1 className={styles.title}>{title}</h1>;
}
