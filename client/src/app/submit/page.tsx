"use client";
import React, { useState } from "react";
import Header from "~/components/header/header";
import { GoIssueDraft } from "react-icons/go";
import List from "~/components/post/list";
import draftToHtml from "draftjs-to-html";

import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {
  ContentState,
  convertFromHTML,
  convertToRaw,
  EditorState,
} from "draft-js";
const CreatePost: React.FC = () => {
  const [rawHTML, setRawHTML] = useState("");
  const blocksFromHTML: any = convertFromHTML(rawHTML);

  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(
      ContentState.createFromBlockArray(blocksFromHTML)
    )
  );

  const handleOnChange = (newEditorState: EditorState) => {
    setEditorState(newEditorState);
    const rawContentState = convertToRaw(newEditorState.getCurrentContent());
    const markup = draftToHtml(rawContentState);
    setRawHTML(markup);
  };
  return (
    <>
      <div className=" w-[40vw] mr-6 rounded-[3px] p-1 ">
        <div className="border-b-[1px] border-gray-600 pb-3">
          <h1 className="font-bold   font-nunito text-gray-200 text-[18px]  mt-2 ">
            Create a Post
          </h1>
        </div>

        <div className="border-[1px] bg-darkcontent border-gray-600 my-3 h-[40px] w-80 rounded-[4px] flex items-center">
          <GoIssueDraft className="text-gray-400 h-6 w-6 mx-2 " />
          <h1 className=" text-gray-200 font-medium">Choose a community</h1>
        </div>

        <div className=" rounded-[4px]">
          <Editor
            editorState={editorState}
            onEditorStateChange={handleOnChange}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            wrapperStyle={{ backgroundColor: "#1F2937" }}
            toolbar={{
              options: [
                "inline",
                "blockType",
                "fontSize",
                "fontFamily",
                "list",
                "textAlign",
                "colorPicker",
                "link",
                "emoji",
                "remove",
                "history",
              ],
              inline: {
                options: ["bold", "italic", "underline", "strikethrough"],
              },
              blockType: {
                options: [
                  "Normal",
                  "H1",
                  "H2",
                  "H3",
                  "H4",
                  "H5",
                  "H6",
                  "Blockquote",
                  "Code",
                ],
              },
              fontSize: {
                options: [14, 16, 18, 24, 30],
              },
              fontFamily: {
                options: ["Arial", "Georgia", "Impact", "Tahoma", "Verdana"],
              },
              list: {
                options: ["unordered", "ordered"],
              },
              textAlign: {
                options: ["left", "center", "right", "justify"],
              },
            }}
          />
        </div>
      </div>
    </>
  );
};

const SubMitPage: React.FC = () => {
  return (
    <>
      <Header />
      <div
        className={`flex justify-center w-[59vw] min-h-screen pt-[70px] container`}
      >
        <CreatePost />
        <List />
      </div>
    </>
  );
};
export default SubMitPage;
