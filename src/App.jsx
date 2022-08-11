import styles from "./App.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage";
import { Search } from "./components/Search";

function App() {
    return (
        <Router>
            <header>
                <Link to="/">
                    <h1 className={styles.title}> List of Movies🍿</h1>
                </Link>
                <Search />
            </header>

            <main>
                <Switch>
                    <Route exact path="/movies/:movieId">
                        <MovieDetails />
                    </Route>

                    <Route path="/">
                        <LandingPage />
                    </Route>
                </Switch>
            </main>
        </Router>
    );
}

export default App;
