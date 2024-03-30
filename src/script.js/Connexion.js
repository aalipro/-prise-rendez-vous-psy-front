import Requete from "./Requete";
class Connexion {
  static getPatient(email,password){
    var url = `http://localhost/myecommerceapi/index.php/Patient/connexion`;
    url += `?email=${email}`;
    url += `&password=${password}`;
    return Requete.post(url)
        .then(response => {
            if(response.resultat.connexionReussie){
                return response.resultat;
            }
            else{
                return null;
            }
        })
  }
  static getUser(typeOfUser, email, password){
    var url = `http://localhost/myecommerceapi/index.php/${typeOfUser}/connexion`;
    url += `?email=${email}`;
    url += `&password=${password}`;
    return Requete.post(url)
        .then(response => {
            if(response.resultat.connexionReussie){
                return response.resultat;
            }
            else{
                return null;
            }
        })
  }
}

export default Connexion;
