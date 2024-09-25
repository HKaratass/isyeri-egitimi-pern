import { DeleteButton, FlexArea, SecondTagDiv, TagDiv, Wrapper } from './style/UserLine.styled'

const UserLine = ({ data, changeRank, deleteFunc, pending }) => {

    const formateDate = (dateISO) => {
        const dateTR = new Intl.DateTimeFormat('tr-TR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
            timeZone: 'Europe/Istanbul'
        }).format(dateISO);
        return dateTR;
    }

    return (
        <Wrapper>
            <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                <FlexArea>
                    <TagDiv><i>Ad Soyad:</i> {data.first_name} {data.last_name}</TagDiv>
                    <TagDiv><i>Kullanıcı Adı:</i> {data.user_name}</TagDiv>
                    <TagDiv><i>E-mail:</i> {data.email}</TagDiv>
                    <TagDiv><i>Tel:</i> {data.phone_number}</TagDiv>
                    <TagDiv><i>Yönetici Derecesi:</i>
                        <select
                            value={data.access_rank}
                            disabled={pending}
                            onChange={(e) => { changeRank(e, data.id) }}
                            name="access_rank"
                            style={{
                                outline: "none",
                                border: "none",
                                margin: "0 4px",
                                cursor: pending ? "progress" : "pointer"
                            }}
                        >
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                        </select>
                    </TagDiv>
                </FlexArea>
                <FlexArea>
                    <SecondTagDiv><i>Kayıt Eden:</i> {data.whoCreated}</SecondTagDiv>
                    <SecondTagDiv><i>Son Yetki Değiştiren:</i> {data.whoLastAuth}</SecondTagDiv>
                    <SecondTagDiv><i>Kayıt Tarihi:</i> {formateDate(new Date(data.created_at))}</SecondTagDiv>
                    <SecondTagDiv><i>Son Giriş Tarihi:</i> {data.last_sign_at ? formateDate(new Date(data.last_sign_at)) : <label style={{ color: "red" }}>Hiç Giriş Yapmadı</label>}</SecondTagDiv>
                </FlexArea>
            </div>
            <DeleteButton
                disabled={pending}
                $PENDING={pending}
                onClick={() => deleteFunc(data.id)}>SİL</DeleteButton>
        </Wrapper>
    )
}

export default UserLine