import PostPreview from "../postPreview";

import './styles.css';

export default function PostList({ posts }) {
    posts = posts.slice(1, posts.length)
    return (
        <div className="post-list-container">
            {
                posts &&
                posts.map(Post => {
                    return <PostPreview post={Post} />;
                })
            }
        </div>
    );
}