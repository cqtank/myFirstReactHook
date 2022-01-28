const Item = ({ id, name, msg, date, time, deleteData, submittingStatus }) => {
  function deleteItem() {
    submittingStatus.current = true;
    deleteData(function (prevData) {
      return prevData.filter((x) => x.id !== id);
    });
  }

  return (
    <div className="item">
      <div>
        <p>{name}</p>
        <p>{msg}</p>
        <p>
          {date} {time}
        </p>
      </div>
      <button className="remove" onClick={deleteItem}>
        delete
      </button>
    </div>
  );
};

export default Item;
