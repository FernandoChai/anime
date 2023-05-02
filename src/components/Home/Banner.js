import "../../css/banner.css"
import { useEffect, useState } from "react"
import { getPopularAnimes } from "../../api"

export const Banner = () => {

    const [popularAnimes, setPopularAnimes] = useState([])

    useEffect(() => {
        getPopularAnimes().then((result) => {
            setPopularAnimes(result.data)
        })
    }, [])

    const AnimeBannerList = () => {
        return popularAnimes.map((animes, i) => {
            return (
                <div className={"carousel-item " + (i === 0 ? 'active' : '')} data-bs-interval="100000" key={i}>
                    <img src={animes.animeImg} className="d-block w-100" style={{ objectFit: 'cover' }} height="450px" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>{animes.animeTitle}</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
            )
        })
    }

    const CarouselButtons = () => {
        return popularAnimes.map((animes, i) => {
            return (
                <button className={(i === 0 ? 'active' : '')} type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={i} aria-label={"Slide "+ i+1} key={i}></button>
            )
        })
    }


    return (
        <div id="carouselExampleDark" className="carousel carousel-light slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <CarouselButtons />
            </div>
            <div className="carousel-inner">
                <AnimeBannerList />
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}