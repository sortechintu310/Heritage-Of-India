const formatText = (text) => {
  return (
    <span
      className="formatted-text"
      style={{
        whiteSpace: "pre-wrap",
        wordBreak: "break-word",
        overflowWrap: "break-word",
      }}
    >
      {text.replace(/\n+/g, " ").replace(/\. /g, ".\n").trim()}
    </span>
  );
}

export {formatText};
