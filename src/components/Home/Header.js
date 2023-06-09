export const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark mb-3 mt-3 container">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">MyAnime</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Featured</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Recently Update</a>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        Sign-in
                    </span>
                </div>
            </div>
        </nav>
    )
}