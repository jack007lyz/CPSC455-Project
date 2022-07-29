import './index.scss'
import SidebarStudent from '../../components/SidebarStudent'
import InformationStudent from '../../components/InformationStudent'
import InstSideMenu from '../../components/InstSideMenu/InstSideMenu'
import ScrollToTop from '../../components/HomePageSections/SectionTwo/ScrollToTop'
import Reviews from '../../components/ReviewsList/Reviews'
import { useRef } from 'react'
import StuSideMenu from '../../components/StuSideMenu/StuSideMenu'
import StudentMap from '../../components/StudentMap/StudentMap'
const ProfileStudent = () => {
    const information = useRef(null)

    return (
        <>
            <ScrollToTop />
            <div className="ProfileStudent">
                <h1>ProfileStudent</h1>
            </div>
            <div className="ProfileStudent__sidebar">
                <SidebarStudent />
            </div>

            <div className="StuSideMenuProps">
                <StuSideMenu section1 = {information}/>
                <div className="ProfileStudent__information" ref = {information}>
                    <InformationStudent/>
                    {/* <Reviews/> */}
                    <Reviews idType={'studentId'} page={'profilePage'} />
                </div>
            </div>
            <StudentMap/>
        </>
    )
}

export default ProfileStudent