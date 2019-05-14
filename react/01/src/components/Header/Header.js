import React from "react";
import styles from "./Header.module.css";
import injectSheet from "react-jss";
import classnames from "classnames/bind";
import PropTypes from "prop-types";

const cx = classnames.bind(styles);

const inline = {
  logo: {
    backgroundColor: "orange",
    padding: ".5rem",
    fontSize: "1.5rem",
    color: "#fff"
  }
};

// OLD NOTE
// const Header = ({classes, logoTitle, logged}) => {
// 	const cls = [styles.header];
// 	if(logged) {
// 		cls.push(styles.headerLogged);
// 	}
// 	return (
// 		<header className={cls.join(' ')}>
// 			<span className={classes.logo}>{logoTitle}</span>
// 		</header>
// 	);
// }
// /OLD NOTE

const Header = ({ classes, logoTitle, logged }) => {
  return (
    <header className={cx({ header: true, headerLogged: logged })}>
      <span className={classes.logo}>{logoTitle}</span>
    </header>
  );
};

Header.propTypes = {
  classes: PropTypes.object,
  logoTitle: PropTypes.string.isRequired,
  logged: PropTypes.bool
};

const StyledHeader = (() => injectSheet(inline)(Header))();

export default StyledHeader;
