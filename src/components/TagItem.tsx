function TagItem({ text }: {text: string}) {
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
