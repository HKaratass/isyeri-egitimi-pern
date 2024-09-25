import { AnnouncementSide, AnnouncementSideHead, AnnouncementSideScroll, FlexWrapper } from './style/index.styled'
import EventArea from './components/EventArea'
import Slider from './components/Slider'
import AnnouncementArticle from './components/AnnouncementArticle'
import { announcementApi } from '@/api/announcement';
import { useQuery } from '@tanstack/react-query'
import AnnouncementArticleSkeleton from './components/AnnouncementArticleSkeleton';


const index = ({ readAnnouncement }) => {
    const { isLoading, isError, data, error } = useQuery({
        queryKey: ['announcements'],
        queryFn: () => {
            return announcementApi('get', '');
        }
    })
    return (
        <>
            <Slider />
            <FlexWrapper>
                <EventArea/>

                <AnnouncementSide>
                    <AnnouncementSideHead>
                        Duyurular
                    </AnnouncementSideHead>
                    <AnnouncementSideScroll>
                        {
                            (isLoading || isError) ?
                                <>
                                    <AnnouncementArticleSkeleton err={isError}/>
                                    <AnnouncementArticleSkeleton err={isError}/>
                                    <AnnouncementArticleSkeleton err={isError}/>
                                    <AnnouncementArticleSkeleton err={isError}/>
                                </>
                                :
                                data?.resData?.map((k, i) => (
                                    <AnnouncementArticle readAnnouncement={readAnnouncement} data={k} key={i} lazy={i > 3} />
                                ))
                        }
                    </AnnouncementSideScroll>
                </AnnouncementSide>
            </FlexWrapper>

        </>
    )
}

export default index