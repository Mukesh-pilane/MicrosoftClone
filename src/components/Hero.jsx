import React from 'react'
import  styled from 'styled-components'
import {Slider} from 'react-slick'
const HeroSec = styled.div`
`
const HeroCard = styled.div`
position:relative;
background:yellow;
`
const ImgContainer = styled.div`
width:100%;
height:auto;
`
const HeroImg = styled.img`
width:100%;
`
const CardInfo = styled.div`
    position:absolute;
    padding-right: 5%;
    padding-left: 5%;
    width: 90%;
    top:25%
`
const CardHeading = styled.h1`
`

const CardDescription = styled.p
``

const CardLinkContainer = styled.div`

`
const CardButton = styled.button`
`

const CardLink = styled.a`
`

function Hero(){
  return(
    <HeroSec>
    <HeroCard>
    <ImgContainer>
    <HeroImg src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-M365-Icon-Bounce-Word-Merch:VP5-1920x600" />
    </ImgContainer>
    <CardInfo>
    <CardHeading>
     CardHeading
    </CardHeading>
    <CardDescription>
    The next-generation of games. Your goals. Friends and family. Windows 11 was made to bring you closer to everything you love.
    </CardDescription>
    <CardLinkContainer>
    <CardButton>
    Learn More
    </CardButton>
    <CardLink>
    jdjc
    </CardLink>
    </CardLinkContainer>
    </CardInfo>
    </HeroCard>
    </HeroSec>
    )
}

export default Hero