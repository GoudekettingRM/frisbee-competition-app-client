import React from "react";
import Menu from "@material-ui/core/Menu";
import IconButton from "@material-ui/core/IconButton";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";

class MenuButton extends React.Component {
  state = {
    anchorEl: null
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const { edgePosition } = this.props;
    const open = Boolean(anchorEl);
    const Wrapper = this.props.iconType;
    const listItems = this.props.items.map((item, index) => (
      <Tab
        key={index}
        onClick={this.handleClose}
        className={this.props.class}
        label={item.label}
        component={Link}
        to={item.path}
      />
    ));

    return (
      <div>
        <IconButton
          edge={edgePosition}
          aria-owns={open ? "menu-appbar" : null}
          aria-haspopup="true"
          onClick={this.handleMenu}
          color="inherit">
          {<Wrapper />}
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          open={open}
          onClose={this.handleClose}>
          {listItems}
        </Menu>
      </div>
    );
  }
}

export default MenuButton;
