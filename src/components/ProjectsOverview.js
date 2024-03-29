import React, { Component } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import { Grid, withStyles, Link, Divider } from '@material-ui/core';
import ProjectCard from './ProjectCard';


const StyledTabs = withStyles(theme => ({
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        '& > div': {
            maxWidth: 80,
            width: '100%',
            backgroundColor: theme.palette.primary.main,
        },
    },
}))(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);

const styles = theme => ({
    content: {
        margin: 40,
        height: "100%",
        [theme.breakpoints.down('md')]: {
            margin: 15,
        },
    },
    tabView: {
        marginTop: 50,
        height: "100%",
    },
    tab: {
        textTransform: 'none',
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
        color: '#757575',
    },

    button: {
        textTransform: "none",
        margin: theme.spacing(2),
    },
});

const StyledLink = withStyles(theme => ({
    root: {
        '&:hover': {
            color: "#af7b6b",
        },
    }
}))(props => <Link underline="none" {...props} />);



class ProjectsOverview extends Component {
    state = {
        tabValue: 0
    };

    handleTabChange = (event, tabValue) => {
        this.setState({ tabValue });
    };

    render() {

        const { classes } = this.props;


        // Course Projects

        const cs440Subtitle = <>
            Implementation and extension of a ray tracer in C++ using the <StyledLink href="https://wjakob.github.io/nori/">Nori framework</StyledLink>, 2018
        </>
        const cs440Description = <>
            During the course given by <StyledLink href="https://rgl.epfl.ch/people/wjakob/">Wenzel Jakob</StyledLink> at EPFL I extended my ray tracer with various features including a volumetric path tracer and won the 2nd place in the yearly rendering competition among ~45 entries.
        </>
        const cs440Project = <ProjectCard image={require('../data/images/cs440.png')}
            title="Advanced Computer Graphics"
            subtitle={cs440Subtitle}
            description={cs440Description}
            projectPageLink={"https://weiphil.github.io/acg2018/"} />



        // TODO Semester project

        // Research Projects
        // const layeredAnisoDescription = <>
        //     I enhanced <StyledLink href="https://belcour.github.io/blog/research/2018/05/05/brdf-realtime-layered.html">Laurent Belcour's Siggraph Paper</StyledLink> creating a new BSDF (Bidirectional Scattering Distribution Function) plugin for anisotropic layered materials in the <StyledLink href="https://www.mitsuba-renderer.org/">Mitsuba Renderer</StyledLink>. This extended BSDF model has great performances in offline and realtime rendering frameworks thanks to statistical evaluation of the layered structure. It will soon be part of the High Definition Rendering Pipeline (HDRP) of <StyledLink href="https://unity.com/">Unity</StyledLink>.
        // </>
        // const layeredAnisoProject = <ProjectCard image={require('../data/images/layered_aniso.png')}
        //     title="Efficient Rendering of Anisotropic Layered Materials using an Atomic Decomposition with Statistical Operators"
        //     subtitle="Philippe Weier and Laurent Belcour at Unity Labs, 2019"
        //     description={layeredAnisoDescription} />

        const layeredAnisoDescription = <>
            Research Project in Rendering at Unity Labs under the supervision of Laurent Belcour
        </>
        const layeredAnisoProject = <ProjectCard image={require('../data/images/unity_logo.png')}
            title="In Progress"
            subtitle="Graphics Intern at Unity Labs"
            description={layeredAnisoDescription} />

        // Personal Projects

        const qulkanProject = <ProjectCard image={require('../data/images/qulkanScreenshot.png')}
            title="Qulkan"
            subtitle="A GPU Oriented Prototyping tool in C++17, 2019"
            description={"Qulkan is a personal project designed to give a quick start to anyone considering using OpenGL or Vulkan as a graphical API. It has been designed to offer a simple and flexible interface for more complex software or research validation tools."} />


        const procaryotaProject = <ProjectCard image={require('../data/images/procaryotaScreenshot.png')}
            title="Procaryota"
            subtitle="A 2D space-shooter like game in C#, 2018"
            description={"Procaryota is beeing developped in my free time for fun. You incarnate a little cell fighting evil viruses, continuously evolving and trying to make his way through a dangerous environment."}
            githubLink="https://github.com/WeiPhil/Procaryota" />


        const lotrDescription = <>
            The Lotr Army Companion App is a full-stack Web Application created in React. It has been created for the table-top game <StyledLink href="https://www.games-workshop.com/en-EU/Middle-earth">Middle-Earth Strategy Battle Game</StyledLink> and its unofficial extension Battle Companies. It has a full database of all the Middle-Earth characters and an interactive army creation interface allowing you to quickly build up any army you would like to play.
            </>
        const lotrProject = <ProjectCard image={require('../data/images/lotrScreenshot.png')}
            title="Lotr Army Companion App"
            subtitle="Lord of the Ring: An unofficial companion App for your armies, 2018"
            description={lotrDescription}
            githubLink="https://github.com/WeiPhil/LotrArmyCompanion" />

        ///////////////////////

        const personalProjects = [qulkanProject, procaryotaProject, lotrProject]
        const researchProjects = [layeredAnisoProject]
        const courseProjects = [cs440Project]


        return (
            <div className={classes.content}>
                <StyledTabs variant="fullWidth" value={this.state.tabValue} onChange={this.handleTabChange} >
                    <Tab disableRipple className={classes.tab} label="Course Projects" />
                    <Tab disableRipple className={classes.tab} label="Research Projects" />
                    <Tab disableRipple className={classes.tab} label="Personal Projects" />
                </StyledTabs>

                <SwipeableViews enableMouseEvents
                    onSwitching={(i, type) => {
                        if (type === "end") {
                            this.setState({ tabValue: i });
                        }
                    }}
                    className={classes.tabView} index={this.state.tabValue} >

                    <Grid container direction="column">

                        {courseProjects.map((projectCard, index) => (
                            <div key={index} >
                                {index !== 0 && <Divider style={{ marginTop: index !== 0 && 20 }} />}
                                <Grid item key={index} style={{ marginTop: index !== 0 && 40 }}>
                                    {projectCard}
                                </Grid>
                            </div>
                        ))}

                    </Grid >

                    <Grid container direction="column">

                        {researchProjects.map((projectCard, index) => (
                            <div key={index} >
                                {index !== 0 && <Divider style={{ marginTop: index !== 0 && 20 }} />}
                                <Grid item style={{ marginTop: index !== 0 && 40 }}>
                                    {projectCard}
                                </Grid>
                            </div>
                        ))}

                    </Grid >
                    <Grid container direction="column">

                        {personalProjects.map((projectCard, index) => (
                            <div key={index} >
                                {index !== 0 && <Divider style={{ marginTop: index !== 0 && 20 }} />}
                                <Grid item key={index} style={{ marginTop: index !== 0 && 40 }}>
                                    {projectCard}
                                </Grid>
                            </div>
                        ))}

                    </Grid >


                </SwipeableViews>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(ProjectsOverview);