import Posts from "./Posts";
import Filters from "./Filters";
const VisiblePosts = props => {
  const { filterString, visiblePosts, stateFilterString } = props;
  const filterdPosts = visiblePosts.filter(el => {
    return !filterString && !stateFilterString
      ? true
      : filterString
      ? el.dept.includes(filterString) || el.postName.includes(filterString)
      : stateFilterString
      ? el.state &&
        el.state.toLowerCase().includes(stateFilterString.toLowerCase())
      : null;
  });
  return (
    <React.Fragment>
      {filterdPosts.length ? (
        filterdPosts.map((el, i) => {
          return <Posts {...el} key={i} id={el.key} admin={false} />;
        })
      ) : (
        <div>no result</div>
      )}
    </React.Fragment>
  );
};
export default React.memo(VisiblePosts);
