import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../services/supabaseClient';
import Post from '../components/Post';
import Comment from '../components/Comment';
import { getUserId } from '../utils/userSession';

export default function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      const { data } = await supabase.from('posts').select().eq('id', id).single();
      setPost(data);
    };
    fetchPost();
  }, [id]);

  const handleUpvote = async () => {
    await supabase.from('posts').update({ upvotes: post.upvotes + 1 }).eq('id', id);
    setPost((prev) => ({ ...prev, upvotes: prev.upvotes + 1 }));
  };

  const handleDelete = async () => {
    await supabase.from('comments').delete().eq('post_id', id); // delete associated comments
    await supabase.from('posts').delete().eq('id', id);
    navigate('/');
  };

  const handleEdit = () => {
    navigate(`/update/${id}`);
  };

  if (!post) return <div>Loading...</div>;

  return (
    <div className="post-page">
      <Post post={post} mode="detail" />
      <button onClick={handleUpvote}>Upvote 🏓</button>
      {post.author_id === getUserId() && (
        <>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
      <Comment postId={id} />
    </div>
  );
}
