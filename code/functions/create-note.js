const sendQuery = require("./helpers/send-query");

const CREATE_NOTE = `
  mutation($text: String!){
    createNote(data: {text: $text}){
      _id
      text
    }
  }
`;

exports.handler = async event => {
  const { text } = JSON.parse(event.body);
  const { data, errors } = await sendQuery(CREATE_NOTE, { text });

  if (errors) {
    return {
      statusCode: 500,
      body: JSON.stringify(errors)
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ newNote: data.createNote })
  };
};