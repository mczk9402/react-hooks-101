import React from "react";

const Event = (props) => {
  const { id, title, body } = props.event;

  const handleClickDeleteButton = () => {
    const result = window.confirm(`イベント(id=${id})を本当に削除してもいいですか？`);

    // result &&
    //   props.dispatch({
    //     type: "DELETE_EVENT",
    //     id,
    //   });

    if (result)
      props.dispatch({
        type: "DELETE_EVENT",
        id,
      });
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{body}</td>
      <td>
        <button className="btn btn-danger" onClick={handleClickDeleteButton}>
          削除
        </button>
      </td>
    </tr>
  );
};

export default Event;
