import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./dt.css"; // Import CSS file for custom styles

const TextEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));

  return (
    <div className={`text-editor ${isDarkMode ? "dark-mode" : ""}`}>
      <div className="mode-toggle">
        <button onClick={toggleDarkMode}>
          {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>
      <Editor
        editorState={editorState}
        toolbarClassName={`toolbarClassName ${
          isDarkMode ? "dark-toolbar" : ""
        }`}
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={onEditorStateChange}
        placeholder="Write something here..."
      />
      <textarea
        disabled
        value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
      ></textarea>
    </div>
  );
};

export default TextEditor;
