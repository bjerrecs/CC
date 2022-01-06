import React, { useState } from 'react';
import Aside from './aside';
import Main from './main';

function Layout({ setLocale }) {
  const [rtl, setRtl] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [lscollapsed, setlsCollapsed] = React.useState(localStorage.getItem('collapsed') === 'true');
  const [image, setImage] = useState(true);
  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = (checked) => {
    setCollapsed(checked);
    setlsCollapsed(checked);
  };

  const handleRtlChange = (checked) => {
    setRtl(checked);
    setLocale(checked ? 'ar' : 'en');
  };
  const handleImageChange = (checked) => {
    setImage(checked);
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  React.useEffect(() => {
    localStorage.setItem('collapsed', collapsed);
  }, [collapsed]);

  return (
    <div className={`app ${rtl ? 'rtl' : ''} ${toggled ? 'toggled' : ''}`}>
      <Aside
        image={image}
        collapsed={lscollapsed}
        rtl={rtl}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
        handleCollapsedChange={handleCollapsedChange}
      />
      <Main
        image={image}
        toggled={toggled}
        collapsed={lscollapsed}
        rtl={rtl}
        handleToggleSidebar={handleToggleSidebar}
        handleCollapsedChange={handleCollapsedChange}
        handleRtlChange={handleRtlChange}
        handleImageChange={handleImageChange}
      />
    </div>
  );
}

export default Layout;