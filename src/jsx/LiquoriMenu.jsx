import React from 'react';
import '../css/CocktailMenu.css';

const sections = [
    {
        id: 'liquori',
        title: 'Liquori',
        items: [
            { name: 'Amaretto Disaronno', price: 4 },
            { name: 'Amaretto Disaronno Velvet', price: 4 },
            { name: 'Anice de Capua', price: 5 },
            { name: 'Baileys', price: 5 },
            { name: 'Batida de Coco', price: 4 },
            { name: 'Caffè Borghetti', price: 4 },
            { name: 'Crema Averna', price: 5 },
            { name: 'Cointreau', price: 5.5 },
            { name: 'Cherry Orange', price: 4 },
            { name: 'Cherry Stock', price: 4 },
            { name: 'Dom Bénédictine', price: 5 },
            { name: 'Drambuie', price: 7 },
            { name: 'Finocchietto Alambicco Rosso', price: 4 },
            { name: 'Frangelico', price: 5 },
            { name: 'Galliano', price: 5 },
            { name: 'Grand Marnier', price: 7 },
            { name: 'Italicus Rosolio di Bergamotto', price: 7 },
            { name: 'Kahlúa', price: 4 },
            { name: 'Limoncello', price: 4 },
            { name: 'Liquirizia', price: 4 },
            { name: 'Marameo – Liquore al Cioccolato', price: 4 },
            { name: 'Liquore Strega', price: 4 },
            { name: 'Malibu', price: 4 },
            { name: 'Maraschino', price: 4 },
            { name: 'Mandarinetto', price: 4 },
            { name: 'Meloncello', price: 4 },
            { name: 'Mela Verde Bonollo', price: 4 },
            { name: 'Mirto Rosso', price: 4 },
            { name: 'Nocino', price: 4 },
            { name: 'Pernod', price: 5 },
            { name: 'Porto Sandeman', price: 5 },
            { name: "Pimm's", price: 5 },
            { name: 'Sheridans', price: 5 },
            { name: 'Southern Comfort', price: 4 },
            { name: 'Sambuca', price: 4 },
        ],
    },
];

export default function LiquoriMenu({ onBack }) {
    return (
        <div className="menu-wrapper">
            <div className="menu-bg" />
            <header className="menu-header">
                <p className="menu-subtitle">✦ Liquori ✦</p>
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
