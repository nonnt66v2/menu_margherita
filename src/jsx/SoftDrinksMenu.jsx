import React from 'react';
import '../css/CocktailMenu.css';

const sections = [
    {
        id: 'soft',
        title: 'Soft Drink',
        items: [
            { name: 'Acqua Naturale 0,5 L', price: '1,50' },
            { name: 'Acqua Frizzante 0,5 L', price: '1,50' },
            { name: 'Acqua Naturale 1 L', price: 2 },
            { name: 'Acqua Frizzante 1 L', price: 2 },
            { name: 'Cedrata Tassoni', price: '3,50' },
            { name: 'Chinotto', price: '3,50' },
            { name: 'Coca Cola', price: '3,50' },
            { name: 'Coca Cola Zero', price: '3,50' },
            { name: 'Cocktail San Pellegrino Bianco', price: '3,50' },
            { name: 'Cocktail San Pellegrino Rosso', price: '3,50' },
            { name: 'Crodino', price: '3,50' },
            { name: 'Crodino Arancia Rossa', price: '3,50' },
            { name: 'Estathé Pesca / Limone', price: '3,50' },
            { name: 'Estathé Zero Pesca / Limone', price: '3,50' },
            { name: 'Ferrarelle Aranciata', price: '3,50' },
            { name: 'Ferrarelle Gassosa', price: '3,50' },
            { name: 'Ferrarelle Limonata', price: '3,50' },
            { name: 'Fi.gà', price: '3,50' },
            { name: 'Red Bull', price: '3,50' },
            { name: 'San Bitter Bianco', price: '3,50' },
            { name: 'San Bitter Rosso', price: '3,50' },
            { name: 'Schweppes Limone', price: '3,50' },
            { name: 'Schweppes Arancia', price: '3,50' },
            { name: 'Schweppes Tonica', price: '3,50' },
            { name: 'Lemon Premium', price: 4 },
            { name: 'Tonica Premium', price: 4 },
        ],
    },
    {
        id: 'aperitivi',
        title: 'Aperitivi Alcolici',
        items: [
            { name: 'Altolago', price: '4,50' },
            { name: 'Aperol Soda', price: '4,50' },
            { name: 'Apertass', price: 5 },
            { name: 'Aperol Barbieri', price: '4,50' },
            { name: 'Bitter Campari', price: '4,50' },
            { name: 'Biancosarti', price: 4 },
            { name: 'Campari Soda', price: 4 },
            { name: 'China Martini', price: 4 },
            { name: 'Cocchi Storico Vermouth di Torino', price: 7 },
            { name: 'Martini Bianco', price: 5 },
            { name: 'Martini Rosso', price: 5 },
            { name: 'Martini Dry', price: 5 },
            { name: 'Martini Riserva Speciale Ambrato', price: 7 },
            { name: 'Martini Riserva Speciale Rubino', price: 7 },
            { name: 'Martini Royal Bianco', price: 7 },
            { name: 'Martini Royal Rosso', price: 7 },
            { name: 'Punch', price: 7 },
            { name: 'Vermouth del Professore', price: 7 },
            { name: 'Vermouth Carlo Alberto Red', price: 7 },
            { name: 'Vermouth Il Sancio', price: 8 },
            { name: 'Vermouth Riserva Carlo Alberto', price: 10 },
        ],
    },
    {
        id: 'spritz',
        title: 'Spritz',
        items: [
            { name: 'Aperol Spritz', price: 7 },
            { name: 'Campari Spritz', price: 7 },
            { name: 'Fiero Spritz', price: 9 },
            { name: 'Hugo Spritz', price: 7 },
            { name: 'Limoncello Spritz', price: 7 },
            { name: 'Martini Spritz', price: 7 },
            { name: 'St. Germain Spritz', price: 11 },
            { name: 'Spritz Veneziano con Select Bitter', price: 7 },
            { name: 'Spritz al Vino', price: 7 },
            { name: 'Chandon Garden Spritz', price: 7 },
        ],
    },
    {
        id: 'birre',
        title: 'Birre',
        items: [
            { name: "Beck's", price: 4 },
            { name: 'Corona', price: 4 },
            { name: 'Ceres', price: 4 },
            { name: 'Heineken', price: 4 },
            { name: 'Ichnusa', price: 4 },
            { name: 'Ichnusa Non Filtrata', price: 4 },
            { name: 'Ichnusa Ambra Limpida', price: 4 },
            { name: 'Nastro Azzurro', price: 4 },
            { name: "Super Tennent's", price: 4 },
            { name: 'Birra alla Spina', price: 4 },
        ],
    },
];

export default function SoftDrinksMenu({ onBack }) {
    return (
        <div className="menu-wrapper">
            <div className="menu-bg" />
            <header className="menu-header">
                <p className="menu-subtitle">✦ Soft Drink & Aperitivi ✦</p>
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
