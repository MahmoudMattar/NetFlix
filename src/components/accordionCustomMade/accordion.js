import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";

import ExpandMoreIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
    margin: " 1.5em auto",
    maxWidth: "815px",
    padding: "0",
  },
  heading: {
    fontSize: theme.typography.pxToRem(25),
    fontWeight: theme.typography.fontWeightRegular,
  },
  here: {
    color: "#fff",
    backgroundColor: "rgb(48, 48, 48)",
    margin: "0 0 8px 0",
    display: "block",
    listStyleType: "disc",
    marginBlockStart: "0.5em",
    marginBlockEnd: "0.5em",
    marginInlineStart: "0px",
    marginInlineEnd: "0px",
    paddingInlineStart: "40px",
    fontSize: "1.625rem",
  },
  header: {
    textAlign: "center",
    fontSize: "50px",
    color: "white",
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <p className={classes.header}>Frequently Asked Questions</p>
      <div className={classes.root}>
        <Accordion
          className={classes.here}
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon style={{ color: "white" }} fontSize="large" />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              What is Netflix?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ fontSize: "25px" }}>
              Netflix is a streaming service that offers a wide variety of
              award-winning TV shows, movies, anime, documentaries, and more on
              thousands of internet-connected devices. You can watch as much as
              you want, whenever you want without a single commercial – all for
              one low monthly price. There's always something new to discover
              and new TV shows and movies are added every week!
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className={classes.here}
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon style={{ color: "white" }} fontSize="large" />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              How much does Netflix cost?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ fontSize: "25px" }}>
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
              streaming device, all for one fixed monthly fee. Plans range from
              EGP120 to EGP200 a month. No extra costs, no contracts.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className={classes.here}
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon style={{ color: "white" }} fontSize="large" />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              Where can I watch?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ fontSize: "25px" }}>
              Watch anywhere, anytime, on an unlimited number of devices. Sign
              in with your Netflix account to watch instantly on the web at
              netflix.com from your personal computer or on any
              internet-connected device that offers the Netflix app, including
              smart TVs, smartphones, tablets, streaming media players and game
              consoles. You can also download your favorite shows with the iOS,
              Android, or Windows 10 app. Use downloads to watch while you're on
              the go and without an internet connection. Take Netflix with you
              anywhere.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className={classes.here}
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon style={{ color: "white" }} fontSize="large" />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              How do I cancel?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ fontSize: "25px" }}>
              Netflix is flexible. There are no pesky contracts and no
              commitments. You can easily cancel your account online in two
              clicks. There are no cancellation fees – start or stop your
              account anytime.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className={classes.here}
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon style={{ color: "white" }} fontSize="large" />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              What can I watch on Netflix?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ fontSize: "25px" }}>
              Netflix has an extensive library of feature films, documentaries,
              TV shows, anime, award-winning Netflix originals, and more. Watch
              as much as you want, anytime you want.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
}
