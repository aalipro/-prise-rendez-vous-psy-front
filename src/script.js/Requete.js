// Importation de Axios, assurez-vous d'avoir Axios installé dans votre projet
// npm install axios
import axios from 'axios';

class Requete {
  // Attribut statique axios, permettant de configurer Axios globalement si nécessaire
  static axiosInstance = axios.create({
    // Vous pouvez ajouter des configurations par défaut ici, par exemple :
    baseURL: 'https://api.monserveur.com',
    // headers: {'X-Custom-Header': 'valeur'}
  });

  // Méthode statique pour les requêtes GET
  static async get(url, config = {}) {
    try {
      const response = await this.axiosInstance.get(url, config);
      return response.data;
    } catch (error) {
      // Gestion des erreurs
      console.error('Erreur GET:', error);
      throw error;
    }
  }

  // Méthode statique pour les requêtes POST
  static async post(url, data, config = {}) {
    try {
      const response = await this.axiosInstance.post(url, data, config);
      return response.data;
    } catch (error) {
      // Gestion des erreurs
      console.error('Erreur POST:', error);
      throw error;
    }
  }

  // Méthode statique pour les requêtes PUT
  static async put(url, data, config = {}) {
    try {
      const response = await this.axiosInstance.put(url, data, config);
      return response.data;
    } catch (error) {
      // Gestion des erreurs
      console.error('Erreur PUT:', error);
      throw error;
    }
  }

  // Méthode statique pour les requêtes DELETE
  static async delete(url, config = {}) {
    try {
      const response = await this.axiosInstance.delete(url, config);
      return response.data;
    } catch (error) {
      // Gestion des erreurs
      console.error('Erreur DELETE:', error);
      throw error;
    }
  }

  // Méthode statique pour les requêtes PATCH
  static async patch(url, data, config = {}) {
    try {
      const response = await this.axiosInstance.patch(url, data, config);
      return response.data;
    } catch (error) {
      // Gestion des erreurs
      console.error('Erreur PATCH:', error);
      throw error;
    }
  }
}

export default Requete;
