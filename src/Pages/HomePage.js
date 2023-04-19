import { Link } from 'react-router-dom';
import '../Styles/HomePage.css';
import img_top from '../img/centertest.jpg'

function HomePage() {
  return (
    <div className="HomePage">
      <div className='bodydiv_homepage'>
      <p className='infowindows_homepage'>
       La version mobile n'est pas encore terminée, pour profiter de la meilleure expérience, veuillez utiliser un ordinateur.
      </p>
        <div className='divleft_homepage'>
          <div className="divtitle_homepage">
            <p className='titletop_homepage'>Notre dernier article</p>
            {/* <p className='divtexttop_homepage'>Voir tous les articles
              <span className="spanarrow_homepage">
                <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.1958 13.8868C10.955 13.6446 10.8395 13.352 10.8491 13.009C10.8587 12.6659 10.9843 12.3733 11.2259 12.1312L14.6268 8.71076H1.20385C0.862764 8.71076 0.576649 8.59453 0.34551 8.36206C0.11437 8.1296 -0.000798402 7.84224 4.16557e-06 7.5C4.16557e-06 7.15695 0.115574 6.86919 0.346713 6.63673C0.577853 6.40426 0.863566 6.28843 1.20385 6.28924H14.6268L11.1958 2.83856C10.955 2.59641 10.8347 2.30865 10.8347 1.97529C10.8347 1.64193 10.955 1.35457 11.1958 1.11323C11.4366 0.871076 11.7227 0.75 12.0542 0.75C12.3856 0.75 12.6713 0.871076 12.9113 1.11323L18.4189 6.65247C18.5393 6.77354 18.6248 6.90471 18.6753 7.04596C18.7259 7.18722 18.7508 7.33856 18.75 7.5C18.75 7.66143 18.7247 7.81278 18.6741 7.95404C18.6236 8.09529 18.5385 8.22646 18.4189 8.34753L12.8812 13.917C12.6605 14.139 12.3848 14.25 12.0542 14.25C11.7235 14.25 11.4374 14.1289 11.1958 13.8868Z" fill="#7B7B7B" />
                </svg>
              </span>
            </p> */}
          </div>
          <Link to='article' className="divimgleft_homepage">
            <div className='imgleftcore_homepage'>
              {/* <div className='divtopimgleftcore_homepage'>
                <div className='catdiv_homepage'>
                  <p>Local</p>
                </div>
                <div className='datediv_homepage'>
                  <p>Mardi 11 Avril 2023</p>
                </div>
              </div> */}
              {/* <div className='divbottomimgleftcore_homepage'>
                <div className='titlediv_homepage'>
                  <p>Bienvenu sur melon pour tous !</p>
                </div>
                <div className='arrowdiv_homepage'>
                  <p>
                    <svg width="35" height="23" viewBox="0 0 35 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.6003 21.8946C20.1573 21.491 19.9446 21.0034 19.9624 20.4316C19.9801 19.8599 20.2112 19.3722 20.6557 18.9686L26.9133 13.2679H2.21509C1.58749 13.2679 1.06103 13.0742 0.635738 12.6868C0.210441 12.2993 -0.00146906 11.8204 7.66464e-06 11.25C7.66464e-06 10.6783 0.212656 10.1987 0.637953 9.81121C1.06325 9.42377 1.58896 9.23072 2.21509 9.23206H26.9133L20.6003 3.48094C20.1573 3.07735 19.9358 2.59776 19.9358 2.04215C19.9358 1.48655 20.1573 1.00762 20.6003 0.605381C21.0433 0.201793 21.5698 0 22.1797 0C22.7895 0 23.3153 0.201793 23.7568 0.605381L33.8908 9.83744C34.1123 10.0392 34.2696 10.2578 34.3626 10.4933C34.4557 10.7287 34.5014 10.9809 34.5 11.25C34.5 11.5191 34.4534 11.7713 34.3604 12.0067C34.2674 12.2422 34.1108 12.4608 33.8908 12.6626L23.7014 21.9451C23.2953 22.315 22.7881 22.5 22.1797 22.5C21.5712 22.5 21.0448 22.2982 20.6003 21.8946Z" fill="#303030" />
                    </svg>
                  </p>
                </div>
              </div> */}
            </div>
            <img src={img_top} alt="img_top" className='imgtop_homepage' />
          </Link>
        </div>
        <div className='divright_homepage'>
          <Link to='actuparticipative' className="divrighttopimg_homepage">
            <div className='bottomtop_homepage'>
              <p>Actualité participative</p>
            </div>
          </Link>
          <Link to='galerie' className="divrightbottomimg_homepage">
            <div className='bottom_homepage'>
              <p>Galerie</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
