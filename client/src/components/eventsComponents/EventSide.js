import React, { Component } from "react";

class EventSide extends Component {
  render() {
    return (
      <div className="mainCellRight">
        <div className="rightContainer">
          <div className="rightHeading">
            <p>Keşfet</p>
          </div>
          <div className="rightFlex">
            <div className="rightCard">
              <i className="fas fa-calendar absoluteIcon" />
              <div className="rightCardTint" onClick="takvim()">
                <i className="fas fa-calendar" />
                <p>Bugün</p>
              </div>
            </div>
            <div className="rightCard" style={{ background: "#f8c449" }}>
              <i className="fas fa-calendar absoluteIcon" />
              <div className="rightCardTint" onClick="takvim()">
                <i className="fas fa-calendar" />
                <p>Yarın</p>
              </div>
            </div>
            <div className="rightCard" style={{ background: "#845af4" }}>
              <i className="fas fa-calendar absoluteIcon" />
              <div className="rightCardTint" onClick="takvim()">
                <i className="fas fa-calendar" />
                <p>Bu Hafta</p>
              </div>
            </div>
            <div className="rightCard" style={{ background: "#c6cad3" }}>
              <i className="fas fa-calendar absoluteIcon" />
              <div className="rightCardTint" onClick="takvim()">
                <i className="fas fa-calendar" />
                <p>Tarih Seç</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EventSide;
