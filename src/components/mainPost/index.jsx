import './styles.css';

export default function MainPost({ post }) {
    return (
        <div className="main-post">

            <img className="main-post-img" src={post.image} alt="" />

            <div className='main-post-preview'>
                <span>{post.tag}</span>
                <h1>{post.title}</h1>
                <p>{post.text}</p>
                <span>{post.data}</span>
            </div>
        </div>
    );
}