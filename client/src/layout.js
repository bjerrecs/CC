import React, { useState } from 'react';
import Aside from './aside';
import Main from './main';

function Layout({ setLocale }) {
  const [rtl, setRtl] = useState(false);
  const [collapsed, setCollapsed] = useState();
  const [lscollapsed, setlsCollapsed] = React.useState(localStorage.getItem('collapsed') === 'true');
  const [image, setImage] = useState(true);
  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = (checked) => {
    setCollapsed(checked);
    setlsCollapsed(checked);
    console.log('handleCollapsedChange: ' + checked)
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
    console.log('Toggled: ' + value)
  };

  React.useEffect(() => {
    localStorage.setItem('collapsed', lscollapsed);
  }, [lscollapsed]);

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