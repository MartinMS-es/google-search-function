const axios = require('axios');

exports.handler = async function(event, context) {
  const query = event.queryStringParameters.query || 'estrategias SEO';
  const googleApiKey = 'AIzaSyDiuevLIuLiNaMhUqUcybrRHnmNpLybKEc';
  const googleCx = '065120bb4aebe4e8b';
  
  const endpoint = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query)}&key=${googleApiKey}&cx=${googleCx}`;

  try {
    const response = await axios.get(endpoint);
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    console.error('Error al consultar la API de Google:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error en la búsqueda' }),
    };
  }
};
