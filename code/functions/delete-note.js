const sendQuery = require("./helpers/send-query");

const DELETE_NOTE = `
  mutation($id: ID!) {
    deleteNote(id: $id){
      _id
    }
  }
`;

exports.handler = async event => {
  const { id } = JSON.parse(event.body);
  const { data, errors } = await sendQuery(DELETE_NOTE, { id });

  if (errors) {
    return {
      statusCode: 500,
      body: JSON.stringify(errors)
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ deletedNote: data.deleteNote })
  };
};