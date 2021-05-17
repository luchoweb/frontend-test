import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import BlogController from "./controllers/Blog";
import ArticleController from "./controllers/Article";
import FavoritesController from "./controllers/Favorites";
import NotFoundView from "./views/notFound";
import LayoutView from "./views/layout";

export const App = () => {
  return (
    <BrowserRouter>
      <LayoutView>
        <Switch>
          <Route exact={true} path="/">
            <BlogController />
          </Route>
          <Route path="/favorites">
            <FavoritesController />
          </Route>
          <Route path="/article/:id">
            <ArticleController />
          </Route>
          <Route path="*">
            <NotFoundView />
          </Route>
        </Switch>
      </LayoutView>
    </BrowserRouter>
  );
}
