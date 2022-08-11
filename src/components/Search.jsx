import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";

export function Search() {
    const query = useQuery();
    const search = query.get("search");
    const history = useHistory();

    return (
        <form className={styles.searchContainer}>
            <div className={styles.searchBox}>
                <input
                    className={styles.searchInput}
                    type="text"
                    value={search ?? ""}
                    autoFocus
                    placeholder="Movie Title"
                    aria-label="Search Movies"
                    onChange={(e) => {
                        const value = e.target.value;
                        if (!value.startsWith(" ")) {
                            history.push("/?search=" + value);
                        }
                    }}
                />

                <FaSearch className={styles.searchButton} />
            </div>
        </form>
    );
}
