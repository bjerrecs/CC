import React from 'react';
import Switch1 from 'react-switch';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import { FaTachometerAlt, FaWarehouse, FaTools, FaUserAlt, FaWrench, FaBookOpen, FaUsersCog } from 'react-icons/fa';
import { useAuth0 } from "@auth0/auth0-react";
import ProfilePicture from './components/profile-picture';
import { LoadingComponent } from './component';

const Aside = ({ 
  lscollapsed, collapsed, rtl, toggled, handleToggleSidebar, handleCollapsedChange
}) => {
  const { user } = useAuth0();

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
        <Menu iconShape="circle" popperArrow="true">
          <MenuItem
            icon={<FaTachometerAlt />}
          >
            <a href="/dashboard">Dashboard</a>
          </MenuItem>
        </Menu >
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

          <SubMenu title='Maintenance' icon={<FaWrench />} >
            <MenuItem>
              <a href="/maintenance/dashboard">Dashboard</a>
            </MenuItem>
            <MenuItem>
              <a href="/maintenance/schedule">Schedule New</a>
            </MenuItem>
          </SubMenu>

          <SubMenu title='Reports' icon={<FaBookOpen />} >
            <MenuItem>
              <a href="/">Patch Management</a>
            </MenuItem>
            <MenuItem>
              <a href="/">LOAD</a>
            </MenuItem>
            <MenuItem>
              <a href="/">Zabbix</a>
            </MenuItem>
            <MenuItem>
              <a href="/">Microsoft Licenses</a>
            </MenuItem>
          </SubMenu>

          <SubMenu
            title='Tools'
            icon={<FaTools />}
          >
            <MenuItem>
              <a href="/">Map</a>
            </MenuItem>
            <MenuItem>
              <a href="/email">Email test</a>
            </MenuItem>
            <MenuItem>
              <a href="/patch">Patch Information</a>
            </MenuItem>
            <MenuItem>
              <a href="/sms">Password SMS</a>
            </MenuItem>
            <MenuItem>
              <a href="">Powerstack</a>
            </MenuItem>
          </SubMenu>
        </Menu>

        <Menu iconShape="square">
          <SubMenu title="Admin" icon={<FaUsersCog />}>
            <SubMenu title="Git Version" icon={<FaTools />}>
            <MenuItem>Branch:</MenuItem>
            <MenuItem>Hash:</MenuItem>
            </SubMenu>
          </SubMenu>
        </Menu>
      </SidebarContent>

      <SidebarFooter style={{ textAlign: 'center' }}>
      <Menu>
        <SubMenu className="pro-inner-item-custom"
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
            <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
            <div className="block ">
              <Switch1
                height={16}
                width={30}
                checkedIcon={false}
                uncheckedIcon={false}
                onChange={handleCollapsedChange}
                checked={collapsed}
                onColor="#084298"
                offColor="#bbbbbb"
              />
              <span>Toggle Sidebar</span>
            </div>
            </span>
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
