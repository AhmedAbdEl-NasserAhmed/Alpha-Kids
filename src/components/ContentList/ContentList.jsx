import ContentItem from "./ContentItem/ContentItem";

import styles from "./ContentList.module.scss";

function ContentList({ data, imgSize }) {
  return (
    <ul className={styles["content-list"]}>
      {imgSize === "small" && (
        <h2 className="text-3xl font-semibold">Related category</h2>
      )}

      {data?.map((item, index) => (
        <ContentItem imgSize={imgSize} data={data} key={index} item={item} />
      ))}
    </ul>
  );
}

export default ContentList;
