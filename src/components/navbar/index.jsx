import './styles.css'

export default function Navbar() {
    return (
        <nav className="navbar">
            <div>
                <a href="/">
                    <h3>Ismael Cleiton</h3>
                </a>
            </div>

            <div>
                <a href="/">Home</a>
                <a href="/blog">Blog</a>
                <a href="/about">Sobre</a>
            </div>
        </nav>
    );
}