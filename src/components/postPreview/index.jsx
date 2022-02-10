import './styles.css';

export default function PostPreview({ post }) {
    return (
        <div className="post-preview">

            <img className="post-preview-img" src={post.image} alt="" />

            <div className='post-preview-preview'>
                <span>Tag</span>
                <h1>Título</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit nostrum hic beatae, explicabo voluptatem iure rem? Iste voluptates ea illum ipsam veniam possimus! Quis voluptates aspernatur excepturi praesentium nemo! Perspiciatis!</p>
                <span>31 de Out, 2022</span>
            </div>
        </div>
    );
}