const fetchAll = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
    throw error; // Propager l'erreur pour la gérer dans le composant qui utilise cette fonction
  }
};

export default fetchAll;