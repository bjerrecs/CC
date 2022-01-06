import React from 'react';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import { FaTachometerAlt, FaWarehouse, FaTools, FaGithub, FaUserAlt, FaWrench } from 'react-icons/fa';
import { useAuth0 } from "@auth0/auth0-react";
import ProfilePicture from './components/profile-picture';
import { LoadingComponent } from './component';

const Aside = ({ image, collapsed, rtl, toggled, handleToggleSidebar }) => {
  const { user, logout } = useAuth0();
  if (user) {
  return (
    <ProSidebar
      rtl={rtl}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div
          style={{
            padding: '24px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 14,
            letterSpacing: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
        <img
            src="/radar.svg"
            width="40"
            height="40"
            className="d-inline-block align-center cclogopad"
            alt="CC Logo"
        />
          CONTROL CENTER
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem
            icon={<FaTachometerAlt />}
          >
            <a href="/dashboard">Dashboard</a>
          </MenuItem>
        </Menu>
        <Menu iconShape="circle">
          <SubMenu
            title="Clients"
            icon={<FaUserAlt />}
          >
            <MenuItem>
              <a href="/clients">Search Clients</a>
            </MenuItem>
            <MenuItem>
              <a href="/client/new">Add Clients</a>
            </MenuItem>
            <MenuItem>
              <a href="/client/modify">Modify Clients</a>
            </MenuItem>
          </SubMenu>
          <SubMenu
            title='Warehouse'
            icon={<FaWarehouse />}
          >
            <MenuItem>
              <a href="/warehouse">Search</a>
            </MenuItem>
            <MenuItem>
              <a href="/warehouse/locations">Locations</a>
            </MenuItem>
          </SubMenu>
          <SubMenu
            title='Maintenance'
            icon={<FaWrench />}
          >
            <MenuItem>
              <a href="/maintenance/dashboard">View Planed</a>
            </MenuItem>
            <MenuItem>
              <a href="/maintenance/schedule">Schedule New</a>
            </MenuItem>
          </SubMenu>
          <SubMenu
            title='Tools'
            icon={<FaTools />}
          >
            <MenuItem>
              <a href="/email">Email</a>
            </MenuItem>
            <MenuItem>
              <a href="/patch">Patch</a>
            </MenuItem>
          </SubMenu>
        </Menu>

        <Menu iconShape="square">
          <SubMenu title="Admin Tools" icon={<FaTools />}>
            <MenuItem>Component 1</MenuItem>
            <SubMenu title="Sub Component 1" icon={<FaTools />}>
            <MenuItem>Component 1</MenuItem>
            </SubMenu>
          </SubMenu>
        </Menu>
      </SidebarContent>

      <SidebarFooter style={{ textAlign: 'center' }}>
      <Menu>
        <SubMenu
            title={ <ProfilePicture small={collapsed} /> }
        >
            <MenuItem>
            <a href="/profile">Profile</a>
            </MenuItem>
            <MenuItem>
            <a href="lLogout">Logout</a>
            </MenuItem>
          </SubMenu>
        </Menu>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: '20px 24px',
          }}
        >
          <a
            href="https://github.com/azouaoui-med/react-pro-sidebar"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
              Github
            </span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
} else {
  return (
    <LoadingComponent />
  )
}
};

export default Aside;
