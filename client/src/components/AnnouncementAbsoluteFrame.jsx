import React from 'react'
import { Frame, Window } from './styles/AnnouncementAbsoluteFrame.styled'

const AnnouncementAbsoluteFrame = ({ readAnnouncement, setReadAnnouncement }) => {
    return (
        <Window>
            <Frame>
                <div style={{
                    backgroundColor: "white",
                    color: "#343434",
                    textAlign: "center",
                    fontSize: "1.2em",
                    fontWeight: "600",
                    padding: "5px 0",
                    borderTopLeftRadius: "8px",
                    borderTopRightRadius: "8px",
                    borderBottom: "1px solid silver",
                    height: "25px",
                    overflow: "hidden"
                }}>{readAnnouncement?.head}</div>
                <p style={{
                    overflowY: "auto",
                    height: "calc(100% - 58px)",
                    padding: "2px 5px"
                }}>
                    {
                        readAnnouncement?.description.split("\n").map((line, i) => (
                            <React.Fragment key={i}>
                                &nbsp;
                                {line}
                                <br />
                            </React.Fragment>
                        ))
                    }
                </p>

                <button onClick={() => setReadAnnouncement(null)} style={{
                    position: "absolute",
                    backgroundColor: "red",
                    width: "20px",
                    height: "20px",
                    top: "-10px",
                    right: "-10px",
                    borderRadius: "50%",
                    color: "white",
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer"
                }}>X</button>
            </Frame>

        </Window>
    )
}

export default AnnouncementAbsoluteFrame