import './index.scss'
import Slider from '../../components/Slider'
import FilterPanel from '../../components/FilterPanel/FilterPanel'
import FilterList from '../../components/FilterList'
import ShrinkedFilterPanel from '../../components/FilterPanelSmall/ShrinkedFilterPanel'
import ReviewForm from '../../components/ReviewForm'
import ReviewList from '../../components/ReviewList'

const Home = () => {
    return (
        <>
            <div className='Home'>
                {/* TODO: create a Search bar component */}
                <Slider />
                <div className='shrinkedFilterPanel'>
                <ShrinkedFilterPanel />
                </div>
                <div className="filter-function-container">
                    <FilterPanel mainFilter={true} open={true}/>
                    <FilterList />
                </div>
            </div>
        </>
    )
}

export default Home