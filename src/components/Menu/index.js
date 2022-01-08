const MenuMobile = () => {
  return (
    <div className="container">
      <input type="checkbox" className="toggle" id="toggle" checked="checked" />
      <div className="menu">
        <div className="top">
          <span className="search">
            <input type="text" />
          </span>
          <a className="exit" href="#" tabIndex="0"></a>
        </div>
        <ul className="middle">
          <li tabIndex="0">
            <i className="fa fa-calendar"></i>Calendar
          </li>
          <li tabIndex="0">
            <i className="fa fa-camera"></i>Photos
          </li>
          <li tabIndex="0">
            <i className="fa fa-check-square-o"></i>Tasks
          </li>
          <li tabIndex="0">
            <i className="fa fa-map-marker"></i>Places
          </li>
          <li tabIndex="0">
            <i className="fa fa-codepen"></i>Codepen
          </li>
          <li tabIndex="0">
            <i className="fa fa-dribbble"></i>Dribbble
          </li>
          <li tabIndex="0">
            <i className="fa fa-user"></i>User account
          </li>
          <li tabIndex="0">
            <i className="fa fa-cogs"></i>Settings
          </li>
        </ul>
        <div className="bottom"></div>
        <div className="menu-back"></div>
        <div className="glass-reflection"></div>
      </div>
    </div>
  );
};

export default MenuMobile;