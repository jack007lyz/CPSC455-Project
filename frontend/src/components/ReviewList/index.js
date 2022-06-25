import './index.scss'
import ReviewCard from '../ReviewCard'
import RateDisplay from '../RateDisplay'
import { v4 as uuidv4 } from 'uuid'

const ReviewList = ({ instructor }) => {
    const reviews = [
        {
            reviewer: 'Phil James',
            datetime: '22-Oct, 2022',
            rating: 4,
            comment: 'An awesome instructor!',
        },
        {
            reviewer: 'Dave Norman',
            datetime: '12-Jun, 2021',
            rating: 5,
            comment: 'I really love this instructor! He is patient and funny',
        },
        {
            reviewer: 'Brian Lee',
            datetime: '07-May, 2022',
            rating: 3,
            comment:
                'Helpful, but he is a busy man and sometimes it`s hard to contact with him',
        },
    ]
    return (
        <>
            <div className="ReviewList">
                {/* <h1>ReviewList</h1> */}
                {/* <RateDisplay item={reviews} /> */}
                {instructor.reviews.map((item, index) => (
                    <ReviewCard item={item} index={index} key={uuidv4()} />
                    // <RSection item={item} index={index} />
                ))}
            </div>
        </>
    )
}

export default ReviewList
