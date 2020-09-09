const sendQuery = require("./helpers/send-query");

const GET_ALL_NOTES = `
  query {
    allNotes {
      data {
        _id
        text
      }
    }
  }
`;

exports.handler = async () => {
  const { data, errors } = await sendQuery(GET_ALL_NOTES);

  if (errors) {
    return {
      statusCode: 500,
      body: JSON.stringify(errors)
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ notes: data.allNotes.data })
  };
};