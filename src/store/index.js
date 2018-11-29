import database from "../firebase/firebase";
import Router from "next/router";

export function handleChange(e) {
  const key = e.target.name;
  let val = e.target.value;
  if (key === "dept") {
    val = val.toUpperCase();
  } else if (
    key === "postName" ||
    key === "updated" ||
    key === "additional" ||
    key === "eduQuals"
  ) {
    val = val.capitalize();
  }
  this.setState({
    ...this.state,
    form: { ...this.state.form, [key]: val }
  });
}

export function handleSelectDate(date, name) {
  const selectedDate = date ? date.toLocaleDateString : date;
  this.setState({
    ...this.state,
    form: { ...this.state.form, [name]: selectedDate }
  });
}

export function handleEdit(editObj) {
  this.setState({
    ...this.state,
    form: {
      id: null,
      componentName: "latestPosts",
      state: "",
      dept: "",
      releaseDate: "",
      startDate: "",
      endDate: "",
      totalPosts: "",
      postName: "",
      maxAge: "",
      minAge: "",
      eduQuals: "",
      officialLink: "",
      pdfLink: "",
      updated: "",
      additional: "",
      ...editObj
    }
  });
  if (this.props.router.pathname !== "/admin-access") {
    Router.push("/admin-access");
  }
}

export function resetForm() {
  this.setState({
    ...this.state,
    form: {
      id: null,
      componentName: "latestPosts",
      state: "",
      dept: "",
      releaseDate: "",
      startDate: "",
      endDate: "",
      totalPosts: "",
      postName: "",
      maxAge: "",
      minAge: "",
      eduQuals: "",
      officialLink: "",
      pdfLink: "",
      updated: "",
      additional: ""
    }
  });
}
export function handleRemove(comp, id) {
  const path = comp + "/" + id;
  database.ref(path).remove();
}
export function handleSubmit(e) {
  e.preventDefault();
  //I can't think how to do below stuff better;
  //grabing form state for all inputs;
  const {
    id,
    componentName,
    dept,
    releaseDate,
    state,
    startDate,
    endDate,
    totalPosts,
    minAge,
    postName,
    maxAge,
    eduQuals,
    officialLink,
    pdfLink,
    updated,
    additional
  } = this.state.form;
  //creating or updating latest post will send this inputs object
  const latestPostsData = {
    componentName,
    dept,
    releaseDate,
    state,
    startDate,
    endDate,
    totalPosts,
    minAge,
    postName,
    maxAge,
    eduQuals,
    officialLink,
    pdfLink,
    updated,
    additional
  };
  //creating or updating admitcard post will send this inputs object

  const admitCardsData = {
    componentName,
    releaseDate,
    dept,
    postName,
    officialLink,
    state
  };
  //creating or updating result post will send this inputs object

  const resultsData = {
    componentName,
    releaseDate,
    dept,
    postName,
    officialLink,
    state
  };
  //WHY THIS OBJECT?
  //this is like for two level  dyanmic object value ....wait
  const toSendData = { latestPostsData, resultsData, admitCardsData };

  //sending data to firebase
  //when someone hit editbtn we grab id of that post and set in form state
  //if id is available then we are updating post otherwise a new post is created

  if (id) {
    //WOW ES6,7,8;
    //computed property name and computed value name(i.e our two level dynamic values);
    database
      .ref()
      .update({
        [`${componentName}/${id}`]: toSendData[`${componentName}Data`]
      })
      .then(() => console.log("edits saved"));
  } else {
    database
      .ref(`${componentName}`)
      .push(toSendData[`${componentName}Data`])
      .then(() => console.log("saved"));
  }
}
