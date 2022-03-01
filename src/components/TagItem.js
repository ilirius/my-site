function TagItem({ text }) {
  return (
    <>
      <span className="tag" rel="tag">
        {text}
      </span>
      <span className="comma">,</span>
    </>
  );
}

export default TagItem;
