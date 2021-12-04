import React, { useState } from "react";

import { DELETE_ALL_EVENT } from "../actions";

const EventForm = ({ state, dispatch }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addEvent = (e) => {
    // formの中だからキャンセルしないとリロードする？
    e.preventDefault();

    dispatch({
      type: "CREATE_EVENT",
      title,
      body,
    });

    setTitle("");
    setBody("");
  };

  const deleteAllEvents = (e) => {
    e.preventDefault();
    const result = window.confirm("全てのイベントを本当に削除しても良いですか？");

    // result &&
    //   dispatch({
    //     type: "DELETE_ALL_EVENT",
    //   });

    if (result)
      dispatch({
        type: DELETE_ALL_EVENT,
      });
  };

  const unCreatable = title === "" || body === "";
  return (
    <>
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input
            className="form-control"
            id="formEventTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody">ボディー</label>
          <textarea
            className="form-control"
            id="formEventBody"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        {/* <button
          className="btn btn-primary"
          onClick={addEvent}
          disabled={!title || !body ? true : false}
        >
          イベントを作成する
        </button> */}
        <button className="btn btn-primary" onClick={addEvent} disabled={unCreatable}>
          イベントを作成する
        </button>
        {/* <button className="btn btn-danger" onClick={deleteAllEvents} disabled={!state[0]}>
          {console.log(state)}
          すべてのイベントを削除する
        </button> */}
        <button className="btn btn-danger" onClick={deleteAllEvents} disabled={state.length === 0}>
          すべてのイベントを削除する
        </button>
      </form>
    </>
  );
};

export default EventForm;
