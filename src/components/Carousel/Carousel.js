import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarousel } from '../../redux/thunks/carousel.js'


const Carousel = ({ type }) => {

    const dispatch = useDispatch()
    const carousel = useSelector(state => state.carousel.data)
    const status = useSelector(state => state.carousel.status)

    useEffect(() => {
        if (status !== 'loading') {
            console.log(status)
            dispatch(fetchCarousel(type))
        }
    }, [dispatch, type])

    return (<div>
        {
            carousel.length && carousel.map(c => (
                <div key={c._id}>
                    <p>{c.title}</p>
                    <img src={c.desktop_img} />
                </div>
            ))
        }
    </div>)


}

export default Carousel;

