import styled from "styled-components";

export const HomepageSection = styled.div`
    /* height: 100vh; */
    width: 100%;
    padding-bottom: 2.5rem;
`
export const HomepageHeading = styled.div`
    font-size: 4rem;
    font-family: 'Orbitron', sans-serif;
    font-weight: 500;
    color: ${({theme}) => theme.colors.mayaBlue};
    display: flex;
    justify-content: center;
    text-align: center;
    

    span {
        color: ${({theme}) => theme.colors.black};
        font-weight: 800;
    }

    @media (max-width: ${({theme}) => theme.mobile}) {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        font-size: 2rem;
    }
`

export const HeadingContentContainer = styled.div`
    width: 100%;
    background-color: aliceblue;
    /* height: 100%; */
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-content: center;


    img {
        width: 32%;
        height: 25%;
    }

    p {
        width: 40%;
        font-size: 1.5rem;
        text-align: justify;
    }
`

