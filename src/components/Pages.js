import React, { useRef } from "react";
import Typical from "react-typical";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import bgimage from "../images/priscilla-du-preez-ZvvYXz72yZI-unsplash.jpg";
import react_native_img from "../images/reactNative.png";
import python_img from "../images/python.png";
import js_img from "../images/JS.png";
import html_img from "../images/html.png";
import bootstrap_img from "../images/bootstrap.png";
import css_img from "../images/css.png";
import django_img from "../images/django.png";
import git_img from "../images/git.png";
import linux_img from "../images/linux.png";
import mongo_img from "../images/mongo.png";
import mysql_img from "../images/mysql.png";
import postgresql_img from "../images/postgresql.png";
import react_img from "../images/react.png";
import redux_img from "../images/redux.png";
import node_img from "../images/node.png";
import material_img from "../images/material.png";

const StyledButtonGroup = styled(ButtonGroup)`
    width: 300px;
    height: 70px;
    position: fixed;
    right: 15%;
    margin-top: 15px;

    .nav-button {
        color: white;
        background-color: #2d3436;
        border-radius: 30px;
        box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.4);
        &:hover {
            background-color: rgba(0, 0, 0, 0.3);
        }
    }

    @media (max-width: 680px) {
        opacity: 0;
        position: absolute;
        left: -300%;
        .nav-button {
            display: hidden;
        }
    }
`;

const MenuBar = styled(FontAwesomeIcon)`
    display: none;
    position: fixed;
    right: 15%;
    margin-top: 60px;

    color: white;

    @media (max-width: 679px) {
        display: block;
    }
`;

const MenuBarBoxes = styled(MenuItem)`
    && {
        background-color: #2d3436;
        color: white;

        &.MuiList-padding {
            background-color: #2d3436;
        }
    }
`;

const StyledHome = styled.div`
    display: flex;
    color: white;
    flex-basis: auto;
    background-image: url(${bgimage});
    background-size: cover;

    width: 100vw;
    height: 100vh;
    max-width: 100%;

    .home-item {
        margin: auto;
    }
`;

const StyledTypical = styled(Typical)`
    font-size: calc(1em + 3vw);
    text-align: center;
    align-self: center;
    justify-self: center;
    text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.4);
    padding: 1rem;
    background-color: black;

    @media (max-width: 680px) {
        font-size: calc(0.5em + 3vw);
    }

    @media (max-width: 320px) {
        font-size: calc(0.3em + 3vw);
    }
`;

const StyledAbout = styled.div`
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    grid-template-columns: repeat(5, 1fr);

    background-color: lightgray;
    width: 100vw;
    height: 100vh;
    max-width: 100%;
`;

const AboutPage = styled.div`
    grid-column: 1 / 6;
    grid-row: 1 / 3;
    display: flex;

    background-color: lightgray;
`;

const DetailAbout = styled.div`
    /* border: 1px solid black; */
    letter-spacing: 0.08rem;
    line-height: 1.5;
    text-align: ${(props) => (props.introduce ? "left" : "center")};
    font-size: ${(props) => (props.introduce ? "1.2rem" : "3rem")};
    flex-grow: ${(props) => (props.introduce ? "1" : "1")};
    flex-basis: ${(props) => (props.introduce ? "60vw" : "30vw")};
    margin: 10vw;
    align-self: center;
    justify-self: center;

    @media (max-width: 770px) {
        font-size: ${(props) =>
            props.introduce ? `calc(0.5em + 1vw)` : `calc(1.5em + 2vw)`};
    }

    @media (max-width: 390px) {
        font-size: ${(props) =>
            props.introduce ? `calc(0.5em + 0.5vw)` : `calc(1.5em + 2vw)`};
    }
`;

const SkillPage = styled.div`
    display: flex;
    grid-column: 1 / 6;
    grid-row: 3 / 6;
    max-width: 100%;

    background-color: #c7ecee;
`;

const SkillDetail = styled.div`
    /* border: 1px solid black; */
    font-size: 3rem;
    flex-grow: ${(props) => (props.left ? "1" : "1")};
    flex-shrink: ${(props) => (props.left ? 0 : 1)};
    align-self: center;
    justify-self: center;
    text-align: center;

    .skill-container {
        display: flex;
        justify-content: center;
        margin-bottom: 1rem;
    }

    .skill-child {
        border: 3px solid rgba(0, 0, 0, 0.5);
        padding: 10px;
        border-radius: 30px;
        width: 70px;
        height: 70px;
        background-position: center;
        background-size: cover;
        margin-right: 10px;

        @media (max-height: 950px) {
            width: 50px;
            height: 50px;
        }

        @media (max-width: 480px) {
            width: 30px;
            height: 30px;
        }

        @media (max-width: 390px) {
            width: 20px;
            height: 20px;
            margin-right: 5px;
        }
    }
`;

const StyledProject = styled.div`
    display: flex;
    background-color: #ffbe76;
    width: 100vw;
    height: 100vh;
    max-width: 100%;
`;

export default function Page() {
    const HomeRef = useRef();
    const AboutRef = useRef();
    const SkillsRef = useRef();
    const ProjectRef = useRef();

    function NavMenu() {
        return (
            <StyledButtonGroup>
                <Button
                    className="nav-button"
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        window.scrollTo(0, HomeRef.current.offsetTop);
                    }}
                >
                    Home
                </Button>
                <Button
                    className="nav-button"
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        window.scrollTo(0, AboutRef.current.offsetTop);
                    }}
                >
                    About
                </Button>
                <Button
                    className="nav-button"
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        window.scrollTo(0, SkillsRef.current.offsetTop);
                    }}
                >
                    Skills
                </Button>
                <Button
                    className="nav-button"
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        window.scrollTo(0, ProjectRef.current.offsetTop);
                    }}
                >
                    Project
                </Button>
            </StyledButtonGroup>
        );
    }

    function ShortMenu() {
        const [anchorEl, setAnchorEl] = React.useState(null);

        const handleClick = (event) => {
            setAnchorEl(event.currentTarget);
        };

        const handleClose = (e) => {
            setAnchorEl(null);

            if (e.target.innerText === "Home") {
                window.scrollTo(0, HomeRef.current.offsetTop);
            }

            if (e.target.innerText === "About") {
                window.scrollTo(0, AboutRef.current.offsetTop);
            }

            if (e.target.innerText === "Skills") {
                window.scrollTo(0, SkillsRef.current.offsetTop);
            }

            if (e.target.innerText === "Project") {
                window.scrollTo(0, ProjectRef.current.offsetTop);
            }
        };

        return (
            <React.Fragment>
                <MenuBar icon={faBars} size="3x" onClick={handleClick} />
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuBarBoxes
                        onClick={(e) => {
                            handleClose(e);
                        }}
                    >
                        Home
                    </MenuBarBoxes>
                    <MenuBarBoxes
                        onClick={(e) => {
                            handleClose(e);
                        }}
                    >
                        About
                    </MenuBarBoxes>
                    <MenuBarBoxes
                        onClick={(e) => {
                            handleClose(e);
                        }}
                    >
                        Skills
                    </MenuBarBoxes>
                    <MenuBarBoxes
                        onClick={(e) => {
                            handleClose(e);
                        }}
                    >
                        Project
                    </MenuBarBoxes>
                </Menu>
            </React.Fragment>
        );
    }

    function MainContents() {
        return (
            <React.Fragment>
                <StyledHome ref={HomeRef}>
                    <div className="home-item">
                        <StyledTypical
                            steps={[
                                "안녕하세요",
                                1000,
                                "안녕하세요 이민수의",
                                2000,
                                "안녕하세요 이민수의 포트폴리오 입니다",
                                3000,
                            ]}
                            wrapper="p"
                        />
                    </div>
                </StyledHome>

                <StyledAbout>
                    <AboutPage ref={AboutRef}>
                        <DetailAbout>About Me</DetailAbout>
                        <DetailAbout introduce>
                            안녕하세요!! 풀스택 개발자를 꿈꾸는 경영학을 전공한
                            이민수 입니다. 우연한 기회로 파이썬을 접한 후
                            프로그래밍에 흥미를 느끼고 혼자서 이것 저것 공부하다
                            보니 어느덧 개발자를 꿈꾸게 되었습니다. 비록
                            전공자는 아니지만, 누구 보다 열심히 공부하고 있다고
                            자부합니다. 혼자서 공부 해서 비록 부족한 점이 많다고
                            생각하지만 부족한 부분을 매꾸는 방법을 체득했습니다.
                            열심히 하고 잘하는 개발자가 되고 싶습니다!
                        </DetailAbout>
                    </AboutPage>
                    <SkillPage ref={SkillsRef}>
                        <SkillDetail left>Skills</SkillDetail>
                        <SkillDetail right>
                            <div className="skill-container">
                                <div
                                    className="skill-child"
                                    style={{
                                        backgroundImage: `url(${js_img})`,
                                    }}
                                />
                                <div
                                    className="skill-child"
                                    style={{
                                        backgroundImage: `url(${python_img})`,
                                    }}
                                ></div>
                            </div>
                            <div className="skill-container">
                                <div
                                    className="skill-child"
                                    style={{
                                        backgroundImage: `url(${html_img})`,
                                    }}
                                />
                                <div
                                    className="skill-child"
                                    style={{
                                        backgroundImage: `url(${css_img})`,
                                    }}
                                ></div>
                                <div
                                    className="skill-child"
                                    style={{
                                        backgroundImage: `url(${bootstrap_img})`,
                                    }}
                                ></div>
                                <div
                                    className="skill-child"
                                    style={{
                                        backgroundImage: `url(${material_img})`,
                                    }}
                                ></div>
                            </div>
                            <div className="skill-container">
                                <div
                                    className="skill-child"
                                    style={{
                                        backgroundImage: `url(${react_img})`,
                                    }}
                                ></div>
                                <div
                                    className="skill-child"
                                    style={{
                                        backgroundImage: `url(${node_img})`,
                                    }}
                                ></div>
                                <div
                                    className="skill-child"
                                    style={{
                                        backgroundImage: `url(${django_img})`,
                                    }}
                                ></div>
                                <div
                                    className="skill-child"
                                    style={{
                                        backgroundImage: `url(${react_native_img})`,
                                    }}
                                ></div>
                            </div>
                            <div className="skill-container">
                                <div
                                    className="skill-child"
                                    style={{
                                        backgroundImage: `url(${mongo_img})`,
                                    }}
                                ></div>
                                <div
                                    className="skill-child"
                                    style={{
                                        backgroundImage: `url(${mysql_img})`,
                                    }}
                                ></div>
                                <div
                                    className="skill-child"
                                    style={{
                                        backgroundImage: `url(${postgresql_img})`,
                                    }}
                                ></div>
                            </div>
                            <div className="skill-container">
                                <div
                                    className="skill-child"
                                    style={{
                                        backgroundImage: `url(${linux_img})`,
                                    }}
                                ></div>
                                <div
                                    className="skill-child"
                                    style={{
                                        backgroundImage: `url(${git_img})`,
                                    }}
                                ></div>
                                <div
                                    className="skill-child"
                                    style={{
                                        backgroundImage: `url(${redux_img})`,
                                    }}
                                ></div>
                            </div>
                        </SkillDetail>
                    </SkillPage>
                </StyledAbout>

                <StyledProject ref={ProjectRef}>
                    <div>Project</div>
                </StyledProject>
            </React.Fragment>
        );
    }

    return (
        <div>
            <NavMenu />
            <ShortMenu />
            <MainContents />
        </div>
    );
}
