import './UnderConstruction.scss';

const UnderConstruction = () => {
    return (
        <main className='construction-container'>
            <div className='construction-content'>
                <div className='construction-text'>
                    <h1>🚧 Site en cours de construction 🚧</h1>
                    <h4>
                        🔜 Nous travaillons actuellement sur ce site. Veuillez revenir plus tard 🔜
                    </h4>
                    <div className='construction-actions'>
                        <a
                        className='small-button'
                        href='mailto:contact@avenirtoitureouest.fr'
                        >
                        Envoyer un mail 📧
                        </a>
                        <a
                        className='small-button'
                        href='tel:0638826940'
                        >
                        Un coup de fil ? 📱
                        </a>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default UnderConstruction;