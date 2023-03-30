import './Entete.css';

export default function Entete(){

    return (
        <header className='entete'>    
            <h1>Titre de page</h1>
            <span className='spacer'></span>
            <nav>
                <a href="">Accueil</a>
                <a href="">Liste</a>
            </nav>
        </header>
    );

}