import styles from "./Empty.module.css";
import not_result from "../not-results.svg";

export function Empty() {
    return (
        <div className={styles.container}>
            <img src={not_result} alt="not-result" width={400} />
            <div>Without Results</div>
        </div>
    );
}
