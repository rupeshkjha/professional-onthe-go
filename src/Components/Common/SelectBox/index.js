import React from "react";
import "./SelectBox.scss";
import { ReactSVG } from "react-svg";
import arrow from "../../../Assets/Common/arrow-right.png";

export default class SelectBox extends React.Component {
  state = {
    showMenu: false,
    selectedText: "",
  };

  componentDidMount() {
    this.setState({
      selectedText: this.props.selectedText || "",
    });
  }

  componentDidUpdate(prevProps, prevStste) {
    if (prevProps.selectedText !== this.props.selectedText) {
      this.setState({
        selectedText: this.props.selectedText || "",
      });
    }
  }

  showMenu = (event, flag) => {
    event.stopPropagation();
    this.setState({
      showMenu: flag,
    });
  };

  selectItem = (item) => {
    this.setState({
      selectedText: this.props.no_value ? "" : item.name,
      showMenu: false,
    });

    this.props.onChange(item);
  };

  changeText = (e) => {
    this.setState({
      selectedText: e.currentTarget.value,
    });
  };

  render() {
    const { className, icon, placeholder, options, show_arrow } = this.props;
    const { showMenu, selectedText } = this.state;
    console.log("options update", options)
    const filteredOptions = options && options.length ? 
    options.filter(item =>
        item.name.toLowerCase().includes(selectedText.toLowerCase())
      ) : []

    return (
      <div className="selectbox-component">
        <div className={`selectbox-container ${className || ""}`}>
          {icon && <ReactSVG src={icon} style={{ fill: "#C5CBD7" }} />}
          <input
            type="text"
            className="search-text"
            onFocus={(e) => this.showMenu(e, true)}
            onBlur={(e) => this.showMenu(e, false)}
            placeholder={placeholder}
            value={selectedText}
            onChange={(e) => this.changeText(e)}
          />
          {show_arrow && <img src={arrow} alt="arrow" />}
        </div>
        {showMenu && (
          <div className="options-area">
            <div>
              {filteredOptions.map((item, index) => (
                <div
                  className="option"
                  key={index}
                  onMouseDown={(e) => this.selectItem(item)}
                >
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="under-dot selectbox-bg" />
      </div>
    );
  }
}
