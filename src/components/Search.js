import React from "react";
class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {searchResult:[]}
        
    }

    
  render() {
    const meetingDeskList = [
      "CONF-D-N",
      "E1860",
      "FCT",
      "MY-1860-1_w",
      "MY-1860-5_w",
      "nc180",
    ];
    const officeDeskList = ["AF-120-1-w", "AF-120-2-w", "AF-120-4-w"];
    const executiveDeskList = ["SD-01_SD-03", "SD-021"];

    return (
      <React.Fragment>
        <div className="title" style={{ borderLeftColor: "transparent" }}>
          "{this.props.searchInput}" 搜尋結果
        </div>
      </React.Fragment>
    );
  }
}
export default Search;
