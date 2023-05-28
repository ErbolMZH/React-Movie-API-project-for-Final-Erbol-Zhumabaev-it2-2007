const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'c4bfaf794f8e946f49d714977691c261',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;