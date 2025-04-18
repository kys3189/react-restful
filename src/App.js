import logo from './logo.svg';
import './App.css';
import PostsContainer from './rest/post/PostsContainer';
import PostContainer from './rest/post/PostContainer';
import JoinContainer from './rest/member/JoinContainer';
import UpdateContainer from './rest/member/UpdateContainer';
import DeleteContainer from './rest/member/DeleteContainer';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
