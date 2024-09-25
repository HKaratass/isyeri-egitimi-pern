import React from 'react'
import { BarConatiner, BottomBar, Button, Float, MiddleBar, TopBar, Wrapper } from './styles/AnimOpenNavButton.styled'

const AnimOpenNavButton = ({ OPEN, setMobilOpen }) => {
    return (
        <Float $OPEN={OPEN}>
            <Wrapper $OPEN={OPEN}>
                <Button onClick={() => { setMobilOpen(!OPEN) }}>
                    <BarConatiner>
                        <TopBar $OPEN={OPEN} />
                        <MiddleBar $OPEN={OPEN} />
                        <BottomBar $OPEN={OPEN} />
                    </BarConatiner>
                </Button>
            </Wrapper>
        </Float>
    )
}

export default AnimOpenNavButton