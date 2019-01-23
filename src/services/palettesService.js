const ENDPOINT = 'https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palettes.json';

const fetchPalettes = () => fetch(ENDPOINT).then(res => res.json());

export {fetchPalettes};
