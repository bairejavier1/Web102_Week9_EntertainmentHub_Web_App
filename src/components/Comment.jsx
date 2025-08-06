import { useState, useEffect } from 'react';
import { supabase } from '../services/supabaseClient';
import { getUserId } from '../utils/userSession';

export default function Comment({ postId }) {
  const [text, setText] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments();
  }, [postId]);

  const fetchComments = async () => {
    const { data } = await supabase
      .from('comments')
      .select()
      .eq('post_id', postId)
      .order('created_at', { ascending: false });
    setComments(data);
  };

  const handleSubmit = async () => {
    await supabase.from('comments').insert([
      {
        content: text,
        post_id: postId,
        author_id: getUserId(),
        created_at: new Date().toISOString()
      }
    ]);
    setText('');
    fetchComments();
  };

  return (
    <div className="comment-section">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Leave a comment"
      />
      <button onClick={handleSubmit}>Submit</button>
      {comments.map((comment) => (
        <div key={comment.id} className="comment">
          <p>{comment.content}</p>
          <small>{new Date(comment.created_at).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
}
