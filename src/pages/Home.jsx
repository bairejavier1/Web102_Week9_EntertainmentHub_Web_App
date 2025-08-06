import { useEffect, useState } from 'react';
import { supabase } from '../services/supabaseClient';
import Post from '../components/Post';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [sortBy, setSortBy] = useState('created_at');
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      let query = supabase.from('posts').select();
      if (searchTerm) query = query.ilike('title', `%${searchTerm}%`);
      const { data } = await query.order(sortBy, { ascending: false });
      setPosts(data);
    };
    fetchPosts();
  }, [sortBy, searchTerm]);

  return (
    <>
      <input
        placeholder="Search by title"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
        <option value="created_at">Newest</option>
        <option value="upvotes">Top Voted</option>
      </select>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}
