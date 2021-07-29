import { Redirect, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import NewPost from './Pages/NewPost/NewPost';
import PostDetail from './Pages/PostDetail/PostDetail';
import PostsList from './Pages/PostList/PostsList';
import ErrorPage from './components/UI/ErrorPage';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        {/* Default Route */}
        <Route exact path="/">
          <Redirect to="/posts" />
        </Route>
        {/* Route For List Of Posts */}
        <Route exact path="/posts">
          <PostsList />
        </Route>
        {/* Route For Post In Details */}
        <Route path="/posts/:postId">
          <PostDetail />
        </Route>
        {/* Route For ENtering New Post */}
        <Route path="/new-post">
          <NewPost />
        </Route>
        {/* Route For Undefined URL */}
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
