import React, { Component } from "react";
import ConversationTable from "../components/conversationComponents/ConversationTable";
import ConversationModal from "../components/conversationComponents/ConversationModal";
import { Redirect } from "react-router-dom";

class ConversationPage extends Component {
  render() {
    const jwtToken = localStorage.getItem("token");
    if (!jwtToken) {
      return <Redirect to="/login" />;
    }
    return (
      <div className="container mt-2 bg-white">
        <div className="w100 mt-2">
          <ConversationModal />
        </div>
        <ConversationTable />
      </div>
    );
  }
}

export default ConversationPage;
