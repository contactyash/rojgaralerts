import React from "react";
import { arrowDownIcon, crossIcon, editIcon } from "../assets/svg";
import AdminProvider, { AdminContext } from "./AdminProvider";

const ListView = props => {
  const {
    dept,
    postName,
    componentName,
    id,
    showDetails,
    admin,
    ...rest
  } = props;
  //THE PROBELM --------
  //this listview component is in two different trees (or in nextjs pages)
  //which cant have single top component
  //one tree's top component is wrapped in ADMINPROVIDER other is not
  //if we wrap ADMINPROVIDER here than other trees child component will not rerender
  //bcoz that is then a different instance of adminprovider

  //here seems a right reason to have two different contextprovider
  //but we actually don't need
  return (
    <AdminContext.Consumer>
      {context => {
        return (
          <div className="list-item">
            {context && context.state.access ? (
              <div className="admin-mode list-head">
                <div className="dept-name" onClick={showDetails}>
                  <h3>{dept}</h3>
                </div>
                <div className="icons">
                  <div
                    onClick={() =>
                      context.handleEdit({
                        ...rest,
                        dept,
                        postName,
                        id,
                        componentName
                      })
                    }
                    className="edit-button"
                  >
                    {editIcon}
                  </div>
                  <div
                    onClick={() => context.handleRemove(componentName, id)}
                    className="remove-button"
                  >
                    {crossIcon}
                  </div>
                </div>
              </div>
            ) : (
              <div className="dept-name" onClick={showDetails}>
                <div>
                  <h3>{dept}</h3>
                </div>
                <div>{arrowDownIcon}</div>
              </div>
            )}
            <div className="post-name">
              <h4>{postName}</h4>
            </div>
          </div>
        );
      }}
    </AdminContext.Consumer>
  );
};
export default React.memo(ListView);
