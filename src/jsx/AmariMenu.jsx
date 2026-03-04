import React from 'react';
import '../css/CocktailMenu.css';

const sections = [
    {
        id: 'amari',
        title: 'Amari',
        items: [
            { name: "AmaRé con le Erbe della Reggia di Caserta", price: 5 },
            { name: 'Amaro del Capo', price: 4 },
            { name: 'Amaro del Capo Peperoncino', price: 5 },
            { name: 'Amaro Formidable', price: 4 },
            { name: 'Amaro Marzadro', price: 5 },
            { name: 'Averna', price: 4 },
            { name: 'Amaro Amara di Sicilia', price: 5 },
            { name: 'Bicerin di Gianduiotto', price: 4 },
            { name: 'Branca Menta', price: 4 },
            { name: 'Braulio', price: 4 },
            { name: 'Borsci', price: 4 },
            { name: 'Cynar', price: 4 },
            { name: 'Eroico', price: 5 },
            { name: 'Fernet Branca', price: 4 },
            { name: 'Gin-co Crema Caffè al Ginseng', price: 5 },
            { name: 'Herbanegra', price: 4 },
            { name: 'Jägermeister', price: 4 },
            { name: 'Jefferson', price: 5 },
            { name: 'Lucano', price: 4 },
            { name: 'Montenegro', price: 4 },
            { name: 'Petrus', price: 4 },
            { name: 'Ramazzotti', price: 4 },
            { name: 'Unicum', price: 4 },
        ],
    },
    {
        id: 'acquavite',
        title: 'Acquavite',
        items: [
            { name: 'Mr. Mario Montanaro 1972', price: 10 },
            { name: 'Mr. Mario Montanaro 1974', price: 10 },
        ],
    },
    {
        id: 'rum',
        title: 'Rum',
        items: [
            { name: 'Appleton – Jamaica', price: 12 },
            { name: 'Bacardí Gran Reserva 8 Años', price: 9 },
            { name: 'Brugal', price: 8 },
            { name: 'Captain Morgan', price: 9 },
            { name: 'Don Papa', price: 9 },
            { name: 'Don Papa Baroko', price: 10 },
            { name: 'Don Papa Masskara', price: 10 },
            { name: 'Diplomático Reserve', price: 11 },
            { name: 'El Dorado 12y', price: 10 },
            { name: 'El Dorado 15y', price: 14 },
            { name: 'El Dorado 21y', price: 20 },
            { name: 'Kraken', price: 9 },
            { name: 'Havana 7', price: 7 },
            { name: 'J. Bally Agricole', price: 20 },
            { name: 'Legendario', price: 8 },
            { name: 'Matusalem', price: 6 },
            { name: 'Pampero', price: 8 },
            { name: 'Pellerossa', price: 8 },
            { name: 'Seven Tiki', price: 8 },
            { name: 'Zacapa 23', price: 17 },
            { name: 'Zacapa 23 Edition Negra', price: 20 },
            { name: "Zacapa XO'", price: 25 },
        ],
    },
    {
        id: 'whisky',
        title: 'Whisky',
        items: [
            { name: 'Ballantine\'s', price: 5 },
            { name: 'Bunnahabhain 12y', price: 18 },
            { name: 'Bunnahabhain 18y', price: 25 },
            { name: 'Caol Ila 12y', price: 12 },
            { name: 'Chivas Regal', price: 9 },
            { name: 'Four Roses', price: 6 },
            { name: "Jack Daniel's", price: 8 },
            { name: "Jack Daniel's Honey", price: 8 },
            { name: "Jack Daniel's Apple", price: 8 },
            { name: 'Jim Beam', price: 6 },
            { name: 'Jim Beam Rye', price: 7 },
            { name: 'Johnnie Walker Red Label', price: 7 },
            { name: 'Johnnie Walker Black Label', price: 9 },
            { name: 'Johnnie Walker White Label', price: 11 },
            { name: 'Johnnie Walker Golden Label', price: 14 },
            { name: 'Glen Grant', price: 6 },
            { name: 'J&B Whisky', price: 6 },
            { name: 'Irish Jameson', price: 6 },
            { name: 'Laphroaig 10y', price: 12 },
            { name: 'Lagavulin 8y', price: 11 },
            { name: 'Lagavulin 16y', price: 14 },
            { name: 'Macallan 12y', price: 19 },
            { name: 'Nikka Whisky', price: 14 },
            { name: 'Oban 14y', price: 14 },
            { name: 'Talisker 10y', price: 10 },
            { name: "William Lawson's", price: 5 },
            { name: 'The Kyoto', price: 14 },
            { name: 'The Chita', price: 12 },
        ],
    },
    {
        id: 'brandy',
        title: 'Brandy & Cognac',
        items: [
            { name: 'Baron Otard', price: 10 },
            { name: 'Courvoisier VS', price: 6 },
            { name: 'Frapin', price: 10 },
            { name: 'Hennessy', price: 6 },
            { name: 'Hennessy XO', price: 15 },
            { name: 'Martell VS', price: 6 },
            { name: 'Cardenal Mendoza', price: 6 },
            { name: 'Brandy Stravecchia', price: 4 },
            { name: 'Carlos I', price: 7 },
            { name: 'Poire Williams au Cognac François Peyrot', price: 8 },
            { name: 'Poire William Grande Réserve', price: 13 },
            { name: 'Stock 84', price: 4 },
            { name: 'Vecchia Romagna', price: 4 },
        ],
    },
    {
        id: 'tequila',
        title: 'Tequila',
        items: [
            { name: 'Tequila', price: 5 },
            { name: 'Tequila Reposado', price: 5 },
            { name: 'Tequila Silver Patrón', price: 16 },
        ],
    },
];

export default function AmariMenu({ onBack }) {
    return (
        <div className="menu-wrapper">
            <div className="menu-bg" />
            <header className="menu-header">
                <p className="menu-subtitle">✦ Amari & Distillati ✦</p>
                <h1 className="menu-title">Gran Caffè Margherita</h1>
                <div className="header-line" />
                <button className="back-btn" onClick={onBack}>← Torna al Menù</button>
            </header>

            <div className="menu-sections-wrapper">
                {sections.map((section) => (
                    <div key={section.id} className="menu-section">
                        <h2 className="menu-section-title">{section.title}</h2>
                        <ul className="menu-list">
                            {section.items.map((item, i) => (
                                <li key={i} className="menu-item">
                                    <span className="menu-item-name">{item.name}</span>
                                    <span className="menu-item-price">€ {item.price}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <footer className="menu-footer">
                <p>Si prega di bere responsabilmente · Drink Responsibly</p>
            </footer>
        </div>
    );
}
