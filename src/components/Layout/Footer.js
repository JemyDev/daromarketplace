import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Daro Marketplace</h5>
              <p className="grey-text text-lighten-4">Retrouvez les shops et tout les prix de votre serveur préféré !</p>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            © DARO, 2018 - Tous droits réservés
            <a className="grey-text text-lighten-4 right" href="http://daro.fr">Site de DARO</a>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;
