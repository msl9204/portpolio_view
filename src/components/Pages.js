import React from "react";
import Typical from "react-typical";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import bgimage from "../images/priscilla-du-preez-ZvvYXz72yZI-unsplash.jpg";

const StyledDiv = styled.div`
    overflow-y: scroll;
`;

const StyledHome = styled(Grid)`
    color: white;
    background-image: url(${bgimage});
    background-size: cover;
    width: 100vw;
    height: 100vh;
`;

const StyledAbout = styled(Grid)`
    background-color: grey;
    width: 100vw;
    height: 100vh;
`;

const StyledSkill = styled(Grid)`
    background-color: blue;
    width: 100vw;
    height: 100vh;
`;

const StyledProject = styled(Grid)`
    background-color: green;
    width: 100vw;
    height: 100vh;
`;

function NavMenu() {
    return (
        <nav>
            <a href="#page-1">1</a>
            <a href="#page-2">2</a>
            <a href="#page-3">3</a>
        </nav>
    );
}

export default function Page() {
    return (
        <StyledDiv>
            <NavMenu />
            <StyledHome container id="page-1">
                <Grid item>
                    <Typical
                        steps={[
                            "안녕하세요",
                            1000,
                            "안녕하세요 이민수의",
                            500,
                            "안녕하세요 이민수의 포트폴리오 입니다",
                            500,
                        ]}
                        wrapper="p"
                    />
                </Grid>
            </StyledHome>

            <StyledAbout container id="page-2">
                <Grid item>About</Grid>
            </StyledAbout>

            <StyledSkill container id="page-3">
                <Grid item>Skills</Grid>
            </StyledSkill>

            <StyledProject container>
                <Grid item>Project</Grid>
            </StyledProject>
        </StyledDiv>
    );
}
