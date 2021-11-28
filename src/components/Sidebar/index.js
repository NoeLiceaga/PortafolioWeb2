import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SideBtnWrap,
  SidebarLink,
  SidebarRoute,
  SidebarMenu
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen = {isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="Parcials" onClick={toggle}>Primer Parcial</SidebarLink>
          <SidebarLink to="" onClick={toggle}>Segundo Parcial</SidebarLink>
          <SidebarLink to="" onClick={toggle}>Tercer Parcial</SidebarLink>
          <SidebarLink to="" onClick={toggle}>Examenes</SidebarLink>
          <SidebarLink to="info" onClick={toggle}>Info</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="">Cerrar</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
