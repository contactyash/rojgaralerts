import Posts from "./Posts";
import Filters from "./Filters";
const VisiblePosts = props => {
  const { filterString, visiblePosts, stateFilterString } = props;
  return (
    <React.Fragment>
      {visiblePosts
        .filter(el => {
          return !filterString && !stateFilterString
            ? true
            : filterString
            ? el.dept.includes(filterString) ||
              el.postName.includes(filterString)
            : stateFilterString
            ? el.state && el.state.includes(stateFilterString)
            : null;
        })
        .map((el, i) => {
          return <Posts {...el} key={i} id={el.key} admin={false} />;
        })}
    </React.Fragment>
  );
};
export default React.memo(VisiblePosts);
