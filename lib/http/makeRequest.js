async function makeRequest(parameters) {
  const {
    authorization,
    headers = {},
    host,
    path,
    payload,
  } = parameters;

  // Construct full URL
  const url = `https://${host}${path}`;

  // Add authorization to headers
  const finalHeaders = {
    ...headers,
    'Authorization': authorization,
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: finalHeaders,
    body: JSON.stringify(payload),
  });

  const data = await response.text();

  return {
    data,
    headers: Object.fromEntries(response.headers.entries()),
    status: response.status,
  };
}

module.exports = makeRequest;
