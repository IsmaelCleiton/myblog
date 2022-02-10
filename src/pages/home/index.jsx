import MainPost from "../../components/mainPost"
import PostList from "../../components/postList"

import './styles.css'

export default function Home() {
    const posts = [
        {
            image: "https://tropicalestufas.com.br/wp-content/uploads/2020/06/flores-para-plantar-no-verao.jpg",
            date: '31 de Out, 2022',
            title: 'Título',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut alias ad blanditiis delectus est natus pariatur cum laboriosam doloremque, vitae ratione quibusdam fugit deleniti architecto laudantium corrupti veniam consectetur perspiciatis!',
        },
        {
            image: "https://tropicalestufas.com.br/wp-content/uploads/2020/06/flores-para-plantar-no-verao.jpg",
            date: '31 de Out, 2022',
            title: 'Título',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut alias ad blanditiis delectus est natus pariatur cum laboriosam doloremque, vitae ratione quibusdam fugit deleniti architecto laudantium corrupti veniam consectetur perspiciatis!',
        },
    ]

    return <div>
        <div>
            <h1>Home</h1>
            <MainPost post={posts[0]} />
            <h1>Posts</h1>
            <PostList posts={posts} />
        </div>
    </div>
}