import React from "react"
import { styled } from "@mui/material/styles"
import MuiBox from "@mui/material/Box"

import Container from "../Container"
import GridContainer from "../GridContainer"
import GridItem from "../GridItem"
import Typography from "../Typography"

export interface FooterProps {
  children?: JSX.Element | JSX.Element[] | string
  logo?: JSX.Element | JSX.Element[] | string
  copyright?: string
  description?: string
  list?: any
  security?: JSX.Element | JSX.Element[] | string
  footerBg?: string
}

export const FooterBox = styled("footer")<FooterProps>(({ theme, footerBg }) => ({
  margin: "0 auto",
  width: "100%",
  padding: theme.spacing(10, 0, 4),
  position: "relative",
  fontFeatureSettings: "'pnum' on, 'lnum' on, 'liga' off",

  "&:before": {
    content: "''",
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "300vh",
    pointerEvents: "none",
    zIndex: "-1",
    background: footerBg ? `url(${footerBg}) no-repeat center bottom / contain` : "none"
  },

  ".inline-list": {
    display: "flex"
  },

  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(5, 0)
  }
}))

export const LogoColumn = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  height: "100%",

  [theme.breakpoints.down("md")]: {
    marginTop: theme.spacing(2)
  }
}))

const FooterComponent: React.FC<FooterProps> = ({
  children,
  logo,
  copyright,
  description,
  footerBg,
  list,
  security,
  ...props
}) => {
  return (
    <FooterBox footerBg={footerBg} {...props}>
      <Container>
        <GridContainer justifyContent="space-between" direction={{ xs: "column-reverse", md: "row" }}>
          <GridItem xs={12} sm={6} lg={6}>
            <LogoColumn>
              {logo}
              <Typography variant="caption" component="div" mt={{ xs: 1, md: 2 }}>
                {description}
              </Typography>
              <MuiBox display="flex" alignItems="center" mt={{ xs: 1, md: 3 }}>
                <MuiBox pr={{ xs: 3, md: 5 }}>
                  <Typography variant="caption" component="div">
                    {copyright}
                  </Typography>
                </MuiBox>
                <MuiBox>{security}</MuiBox>
              </MuiBox>
            </LogoColumn>
          </GridItem>
          <GridItem xs={12} sm={5}>
            <GridContainer>{children}</GridContainer>
          </GridItem>
        </GridContainer>
      </Container>
    </FooterBox>
  )
}

export default FooterComponent
