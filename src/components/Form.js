import React from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { AdminContext } from "./AdminProvider";
import database from "../firebase/firebase";

class Form extends React.PureComponent {
  render() {
    return (
      <AdminContext.Consumer>
        {context => {
          const {
            handleSubmit,
            handleSelectDate,
            handleChange,
            resetForm
          } = context;
          const {
            id,
            componentName,
            releaseDate,
            endDate,
            startDate,
            dept,
            state,
            totalPosts,
            minAge,
            postName,
            maxAge,
            eduQuals,
            officialLink,
            pdfLink,
            updated,
            additional
          } = context.state.form;
          return (
            <div className="form">
              <form onSubmit={e => handleSubmit(e)}>
                <div>
                  <select
                    name="componentName"
                    id="select"
                    value={componentName || "latestPosts"}
                    onChange={handleChange}
                  >
                    <option value="latestPosts">Latest Posts</option>
                    <option value="admitCards">Admit Cards</option>
                    <option value="results">Results</option>
                  </select>
                </div>
                <div>
                  <input
                    type="text"
                    name="state"
                    placeholder="state(short code only)"
                    value={state}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="department"
                    name="dept"
                    value={dept}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="post name"
                    name="postName"
                    value={postName}
                    onChange={handleChange}
                  />
                </div>
                <div className="with-label">
                  <label htmlFor="releaseDate">Release Date</label>
                  <div className="label" />
                  <div className="input">
                    <DayPickerInput
                      onDayChange={date =>
                        handleSelectDate(date, "releaseDate")
                      }
                      placeholder={
                        releaseDate ? `${releaseDate}` : "DD / MM / YYYY"
                      }
                    />
                  </div>
                </div>
                <div className="with-label">
                  <div className="label">
                    <label htmlFor="startDate">Start Date</label>
                  </div>
                  <div className="input">
                    <DayPickerInput
                      onDayChange={date => handleSelectDate(date, "startDate")}
                      placeholder={
                        startDate ? `${startDate}` : "DD / MM / YYYY"
                      }
                    />
                  </div>
                </div>
                <div className="with-label">
                  <label htmlFor="endDate">End Date</label>
                  <div className="label" />
                  <div className="input">
                    <DayPickerInput
                      onDayChange={date => handleSelectDate(date, "endDate")}
                      placeholder={endDate ? `${endDate}` : "DD / MM / YYYY"}
                    />
                  </div>
                </div>
                <div>
                  <input
                    type="number"
                    placeholder="total posts"
                    name="totalPosts"
                    value={totalPosts}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <input
                    type="number"
                    placeholder="max-age"
                    name="maxAge"
                    value={maxAge}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <input
                    type="number"
                    placeholder="min-age"
                    name="minAge"
                    value={minAge}
                    onChange={handleChange}
                  />
                </div>
                <input
                  type="text"
                  placeholder="eduacational quals"
                  name="eduQuals"
                  value={eduQuals}
                  onChange={handleChange}
                />
                <div className="with-label">
                  <div className="label">
                    <label htmlFor="officialLink">official Link</label>
                  </div>
                  <div className="input">
                    <input
                      type="url"
                      placeholder="official link"
                      id="officialLink"
                      name="officialLink"
                      value={officialLink}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <input
                    type="url"
                    id="pdfLink"
                    placeholder="pdf link"
                    name="pdfLink"
                    value={pdfLink}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="updated"
                    name="updated"
                    value={updated}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="addtional"
                    name="additional"
                    value={additional}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <input
                    type="reset"
                    onClick={resetForm}
                    className="reset-btn"
                  />
                </div>
                <div>
                  <button>submit</button>
                </div>
              </form>
            </div>
          );
        }}
      </AdminContext.Consumer>
    );
  }
}
export default Form;
