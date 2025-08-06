import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PostPage from './pages/PostPage';
import PostForm from './components/PostForm';
import { getUserId } from './utils/userSession';
import './styles/styles.css';

export default function App() {
  useEffect(() => {
    getUserId(); // Assign pseudo-user ID
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/create" element={<PostForm mode="create" />} />
        <Route path="/update/:id" element={<PostForm mode="update" />} />
      </Routes>
    </BrowserRouter>
  );
}
