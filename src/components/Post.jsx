import { Link } from 'react-router-dom';

export default function Post({ post, mode = 'card' }) {
  return (
    <div className="post">
      <Link to={`/post/${post.id}`}>
        <h2>{post.title}</h2>
      </Link>
      {mode === 'detail' && (
        <>
          <p>{post.content}</p>
          {post.image_url && <img src={post.image_url} alt="Post visual" />}
        </>
      )}
      <p>{new Date(post.created_at).toLocaleString()}</p>
      <p>{post.upvotes} 🏓</p>
    </div>
  );
}
