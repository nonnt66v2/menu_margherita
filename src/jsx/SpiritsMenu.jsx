import React from 'react';
import '../css/CocktailMenu.css';

const sections = [
    {
        id: 'gin',
        title: 'Gin',
        items: [
            { name: 'Adamus', price: 12 },
            { name: 'Amuerte Black', price: 13 },
            { name: 'Amuerte White', price: 13 },
            { name: 'Boatyard Double Gin', price: 12 },
            { name: 'Boatyard Old Tom', price: 12 },
            { name: 'Boatyard Sloe Boat', price: 12 },
            { name: 'Bombay', price: 9 },
            { name: 'Bombay Lemon', price: 9 },
            { name: 'Bombay Sunset', price: 9 },
            { name: 'Bombay Citron Pressé', price: 9 },
            { name: 'Bulldog', price: 10 },
            { name: 'Bols Genever', price: 11 },
            { name: 'Beefeater 24', price: 7 },
            { name: 'Beefeater Red', price: 10 },
            { name: 'Cubical', price: 11 },
            { name: 'Elephant', price: 12 },
            { name: 'Engine', price: 11 },
            { name: 'Gin Mare', price: 9 },
            { name: 'Gin Mare Capri', price: 11 },
            { name: 'Gunpowder Irish Gin', price: 11 },
            { name: "Gardener's House", price: 9 },
            { name: "Hendrick's", price: 9 },
            { name: "Hendrick's Flora Adora", price: 10 },
            { name: "Hendrick's Gran Cabaret", price: 10 },
            { name: "Hendrick's Lunar", price: 10 },
            { name: "Hendrick's Neptuna", price: 10 },
            { name: 'Il Gin del Professore "The Fighting Bear"', price: 12 },
            { name: 'London N.3', price: 11 },
            { name: 'Luz Gin', price: 11 },
            { name: 'Malfy', price: 10 },
            { name: 'Malfy Arancia', price: 10 },
            { name: 'Malfy Lemon', price: 10 },
            { name: 'Malfy Pompelmo', price: 10 },
            { name: 'Monkey 47', price: 12 },
            { name: 'Old Grifu', price: 11 },
            { name: 'Puerto de Indias Strawberry', price: 10 },
            { name: 'Portofino', price: 12 },
            { name: 'Plymouth', price: 10 },
            { name: 'Roku', price: 11 },
            { name: 'Tanqueray', price: 9 },
            { name: 'Tanqueray 0.0', price: 9 },
            { name: 'Tanqueray Ten', price: 10 },
            { name: 'Tanqueray Sevilla', price: 10 },
            { name: 'Tanqueray Blackcurrant', price: 10 },
            { name: 'Warner Edwards Dry Gin', price: 11 },
        ],
    },
    {
        id: 'vodka',
        title: 'Vodka',
        items: [
            { name: 'Absolut', price: 9 },
            { name: 'Absolut Limone', price: 9 },
            { name: 'Absolut Pera', price: 9 },
            { name: 'Absolut Raspberry', price: 9 },
            { name: 'Absolut Ruby Red', price: 9 },
            { name: 'Absolut Vaniglia', price: 9 },
            { name: 'Grey Goose', price: 10 },
            { name: 'Odin Kauffman', price: 12 },
            { name: 'Skyy', price: 7 },
            { name: 'Beluga', price: 12 },
            { name: 'Belvedere', price: 10 },
            { name: 'Belvedere Citron', price: 10 },
            { name: 'Belvedere Pompelmo Rosa', price: 10 },
            { name: 'Moskowskaya', price: 7 },
        ],
    },
];

export default function SpiritsMenu({ onBack }) {
    return (
        <div className="menu-wrapper">
            <div className="menu-bg" />
            <header className="menu-header">
                <p className="menu-subtitle">✦ Gin & Vodka ✦</p>
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
