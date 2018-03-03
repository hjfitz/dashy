require('local-env-var');
const axios = require('axios');
const { parse } = require('crypto-js/enc-utf8');
const base64 = require('crypto-js/enc-base64');

const token = base64.stringify(parse(`${process.env.TOGGL}:api_token`));

const toggl = axios.create({
  baseURL: 'https://www.toggl.com/api/v8/time_entries',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Basic ${token}`,
  },
});

const getCurrentEntries = () => toggl.get();

// getCurrentEntries().then(console.log);

const createEntry = async (desc, ...tags) => {

  // -d '{"time_entry":{"description":"Meeting with possible clients","tags":["billed"],"pid":123,"created_with":"curl"}}' \

};

const stopCurrentEntry = async () => {
  const { data: entries } = await getCurrentEntries();
  const { id } = entries[entries.length - 1];
  try {
    const data = await toggl.put(`/${id}/stop`);
    return data;
  } catch (err) {
    return {
      status: 'error',
      error: 'No timer running',
      err,
    };
  }
};

stopCurrentEntry().then(console.log);

const stopById = async id => {

};
