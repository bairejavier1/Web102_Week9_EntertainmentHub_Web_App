import { useState, useEffect } from 'react';
import { supabase } from '../services/supabaseClient';
import { useNavigate, useParams } from 'react-router-dom';
import { getUserId } from '../utils/userSession';

export default function PostForm({ mode }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (mode === 'update' && id) {
      supabase.from('posts').select().eq('id', id).single()
        .then(({ data }) => {
          if (data) {
            setTitle(data.title);
            setContent(data.content);
            setImageUrl(data.image_url);
          }
        });
    }
  }, [id, mode]);

  const handleSubmit = async () => {
    const payload = {
      title,
      content,
      image_url: imageUrl,
      author_id: getUserId(),
      created_at: new Date().toISOString(),
      upvotes: 0
    };

    const { error } = mode === 'update'
      ? await supabase.from('posts').update(payload).eq('id', id)
      : await supabase.from('posts').insert([payload]);

    if (!error) navigate('/');
  };

  return (
    <div className="post-form">
      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} required />
      <textarea placeholder="Content" value={content} onChange={e => setContent(e.target.value)} />
      <input placeholder="Image URL" value={imageUrl} onChange={e => setImageUrl(e.target.value)} />
      <button onClick={handleSubmit}>{mode === 'update' ? 'Update' : 'Create'} Post</button>
    </div>
  );
}
