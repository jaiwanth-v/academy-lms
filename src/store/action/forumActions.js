export const createQuestion = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const auth = getState().firebase.auth;
    // const authorInfo = {uid:auth.uid,timeJoined:new Date}
    firestore
      .collection("forum")
      .add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorUID: auth.uid,
        timeAsked: new Date(),
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};

export const answerQuestion = (eventId, answer) => {
  console.log(typeof answer);
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const auth = getState().firebase.auth;
    const arrayUnion = firestore.FieldValue.arrayUnion;
    let personandanswer = {
      uid: auth.uid,
      name: profile.firstName,
      answer: answer,
      timeAnswered: new Date(),
    };
    firestore
      .collection("forum")
      .doc(eventId)
      .update({
        answers: arrayUnion(personandanswer),
      })
      .then(() => {
        dispatch({ type: "ANSWER_QUESTION", eventId });
      })
      .catch((err) => {
        dispatch({ type: "ANSWER_QUESTION_ERROR", err });
      });
  };
};
