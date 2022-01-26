import React from "react"
import { styled, useTheme } from "@mui/material/styles"

import MuiBox from "@mui/material/Box"
import MuiBadge from "@mui/material/Badge"
import useMediaQuery from "@mui/material/useMediaQuery"

import Menu, { MenuItemProps } from "./Menu"
import Container from "../Container"
import GridContainer from "../GridContainer"
import GridItem from "../GridItem"
import Button from "../Button"
import Icon from "../Icon"

export interface HeaderProps {
  children?: JSX.Element | JSX.Element[] | string
  logo: JSX.Element | JSX.Element[] | string
  links?: MenuItemProps[]
  cartHandler?: () => void
  userHandler?: () => void
}

export const HeaderBox = styled("header")(({ theme }) => ({
  margin: "0 auto",
  padding: theme.spacing(2.5, 0),
  position: "fixed",
  zIndex: 100,
  width: "100%",
  backdropFilter: "blur(1rem)",

  ".Button-widthIcon.MuiButton-text": {
    padding: 0
  },

  [theme.breakpoints.down("lg")]: {
    padding: "12px 0",
    marginBottom: 0
  }
}))

const HeaderComponent: React.FC<HeaderProps> = ({ children, logo, links, cartHandler, userHandler }) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <HeaderBox>
      <Container>
        <GridContainer justifyContent="space-between" alignItems="middle" direction={{ xs: "row", md: "row" }}>
          <GridItem xs={6} sm={3}>
            {logo}
          </GridItem>
          <GridItem xs={6} sm={9}>
            <MuiBox sx={{ display: "flex", alignItems: "center", height: "100%", justifyContent: "flex-end" }}>
              {!isMobile && <Menu list={links} />}
              {cartHandler && (
                <MuiBox sx={{ display: "flex", alignItems: "center" }}>
                  <MuiBadge color="error" variant="dot" sx={{ verticalAlign: "inherit" }}>
                    <Button
                      variant="text"
                      color="primary"
                      size="sm"
                      sx={{ padding: "0 !important" }}
                      startIcon={<Icon iconKey="cart" size="md" />}
                      onClick={cartHandler}
                    />
                  </MuiBadge>
                </MuiBox>
              )}
              <MuiBox sx={{ display: "flex" }} ml={{ xs: 2, md: 1 }}>
                {isMobile ? (
                  <Button variant="text" color="primary" size="sm" startIcon={<Icon iconKey="menu" size="md" />} />
                ) : (
                  <>{children}</>
                )}
              </MuiBox>
            </MuiBox>
          </GridItem>
        </GridContainer>
      </Container>
    </HeaderBox>
  )
}

export default HeaderComponent
