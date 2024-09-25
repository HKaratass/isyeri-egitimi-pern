import React, { useEffect, useState } from 'react'
import EventItem from './EventItem'
import { HeaderContainer, ScrollArea, SelectIssue, SelectYear, ShowAll, TableHead, TableHeadDate, TagLabel, Wrapper } from './styles/EventArea.styled'
import { useNavigate } from 'react-router-dom'
import { SkeletonBase } from '@/style/Skeleton.styled'
import { useQuery } from '@tanstack/react-query'
import { eventApi } from '@/api/event'

const EventArea = ({ All }) => {
    const navigate = useNavigate();
    const { isLoading, isError, data, error } = useQuery({
        queryKey: ['e_pre'],
        queryFn: () => {
            return eventApi('get', All ? 'pre' : 'pre/limit');
        }
    })

    const [events, setEvents] = useState([]);
    const [years, setYears] = useState([]);
    useEffect(() => {
        setEvents(data?.resData);
        if (All) {
            data?.resData.forEach((k) => {
                const startDateYear = new Date(k.start_date).getFullYear();
                if (!years.includes(startDateYear)) {
                    years.push(startDateYear);
                }

            });
            setYears(years.sort(function (a, b) {
                return b - a;
            }));
        }
    }, [data])

    const [category, setCategory] = useState('-1');
    const [year, setYear] = useState('-1');
    function handleChange(e) {
        if (e.target.name === 'category') {
            setCategory(e.target.value);
        } else if (e.target.name === 'year') {
            setYear(e.target.value);
        }
    }

    return (
        <Wrapper $ALL={!All}>
            <TagLabel>Etkinlik Listesi</TagLabel>
            {!All && <ShowAll onClick={() => { navigate("/events") }}>Tümü</ShowAll>}
            {
                All &&
                <>
                    <SelectYear disabled={isLoading || isError} onChange={handleChange} name='year'>
                        <option hidden value={-1}>Yıl Seçiniz</option>
                        <option value={-1}>Tümü</option>
                        {
                            years.map((k, i) => (
                                <option key={i} value={k}>{k}</option>

                            ))
                        }
                    </SelectYear>

                    <SelectIssue disabled={isLoading} onChange={handleChange} name='category'>
                        <option hidden value={-1}>Kategori Seçiniz</option>
                        <option value={-1}>Tümü</option>
                        <option value={0}>Sempozyum</option>
                        <option value={1}>Panel</option>
                        <option value={2}>Çalıştay</option>
                    </SelectIssue>
                </>

            }

            <HeaderContainer $ALL={!All}>
                <TableHead>Üst Başlık</TableHead>
                <TableHead>Alt Başlık</TableHead>
                <TableHeadDate>Tarih</TableHeadDate>
            </HeaderContainer>
            <ScrollArea $ALL={!All}>
                {
                    (isLoading || isError) ?
                        <>
                            <SkeletonBase $CLR={isError && "#b96060"} style={{ margin: "2px", padding: "2px" }} $WIDTH={"calc(100% - 8px)"} $HEIGHT={"1.917em"} $BR={"2px"} />
                            <SkeletonBase $CLR={isError && "#b96060"} style={{ margin: "2px", padding: "2px" }} $WIDTH={"calc(100% - 8px)"} $HEIGHT={"1.917em"} $BR={"2px"} />
                            <SkeletonBase $CLR={isError && "#b96060"} style={{ margin: "2px", padding: "2px" }} $WIDTH={"calc(100% - 8px)"} $HEIGHT={"1.917em"} $BR={"2px"} />
                            <SkeletonBase $CLR={isError && "#b96060"} style={{ margin: "2px", padding: "2px" }} $WIDTH={"calc(100% - 8px)"} $HEIGHT={"1.917em"} $BR={"2px"} />
                            <SkeletonBase $CLR={isError && "#b96060"} style={{ margin: "2px", padding: "2px" }} $WIDTH={"calc(100% - 8px)"} $HEIGHT={"1.917em"} $BR={"2px"} />
                            <SkeletonBase $CLR={isError && "#b96060"} style={{ margin: "2px", padding: "2px" }} $WIDTH={"calc(100% - 8px)"} $HEIGHT={"1.917em"} $BR={"2px"} />
                            <SkeletonBase $CLR={isError && "#b96060"} style={{ margin: "2px", padding: "2px" }} $WIDTH={"calc(100% - 8px)"} $HEIGHT={"1.917em"} $BR={"2px"} />
                            <SkeletonBase $CLR={isError && "#b96060"} style={{ margin: "2px", padding: "2px" }} $WIDTH={"calc(100% - 8px)"} $HEIGHT={"1.917em"} $BR={"2px"} />
                            <SkeletonBase $CLR={isError && "#b96060"} style={{ margin: "2px", padding: "2px" }} $WIDTH={"calc(100% - 8px)"} $HEIGHT={"1.917em"} $BR={"2px"} />
                            <SkeletonBase $CLR={isError && "#b96060"} style={{ margin: "2px", padding: "2px" }} $WIDTH={"calc(100% - 8px)"} $HEIGHT={"1.917em"} $BR={"2px"} />
                        </>
                        :
                        events?.filter((k, _) => {
                            if (year !== '-1' && category !== '-1')
                                return (new Date(k.start_date).getFullYear().toString() === year && k.event_type === category)
                            if (year !== '-1')
                                return new Date(k.start_date).getFullYear().toString() === year
                            if (category !== '-1')
                                return k.event_type === category
                            else {
                                return k
                            }
                        }).map((k, i) => (
                            <EventItem
                                data={{
                                    ...k,
                                    start_date: k.start_date ? new Date(k.start_date) : null,
                                    end_date: k.end_date ? new Date(k.end_date) : null
                                }}
                                key={i} />
                        ))
                }
            </ScrollArea>
        </Wrapper>
    )
}

export default EventArea