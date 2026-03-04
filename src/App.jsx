import React, { useState } from 'react';
import CocktailMenu from './jsx/CocktailMenu';
import ViniMenu from './jsx/ViniMenu';
import SpiritsMenu from './jsx/SpiritsMenu';
import AmariMenu from './jsx/AmariMenu';
import LiquoriMenu from './jsx/LiquoriMenu';
import CaffetteriaMenu from './jsx/CaffetteriaMenu';
import SoftDrinksMenu from './jsx/SoftDrinksMenu';
import './css/CocktailMenu.css';

const menuSections = [
    { id: 'cocktail', icon: '🍸', title: 'Cocktail Menù', desc: 'Signature & classici', color: '#D4A017' },
    { id: 'vini', icon: '🍷', title: 'Vini & Bollicine', desc: 'Bianchi, rossi, champagne', color: '#C41E3A' },
    { id: 'spirits', icon: '🫙', title: 'Gin & Vodka', desc: 'Selezione premium', color: '#87CEEB' },
    { id: 'amari', icon: '🥃', title: 'Amari & Distillati', desc: 'Rum, Whisky, Cognac…', color: '#DAA520' },
    { id: 'liquori', icon: '🍯', title: 'Liquori', desc: 'Dolci e aromatici', color: '#FFB347' },
    { id: 'caffetteria', icon: '☕', title: 'Caffetteria', desc: 'Caffè, pasticceria, dessert', color: '#6F4E37' },
    { id: 'softdrinks', icon: '🥤', title: 'Soft Drink & Aperitivi', desc: 'Spritz, birre e analcolici', color: '#32CD32' },
];

function MainMenu({ onSelect }) {
    return (
        <div className="menu-wrapper">
            <div className="menu-bg" />
            <header className="menu-header">
                <p className="menu-subtitle">✦ Benvenuti ✦</p>
                <h1 className="menu-title">Gran Caffè Margherita</h1>
                <div className="header-line" />
                <p className="menu-choose">Scegli la tua esperienza</p>
            </header>

            <div className="nav-grid">
                {menuSections.map((section) => (
                    <button
                        key={section.id}
                        className="nav-card"
                        style={{ '--nav-color': section.color }}
                        onClick={() => onSelect(section.id)}
                    >
                        <div className="nav-card-body">
                            <span className="nav-card-icon">{section.icon}</span>
                            <div className="nav-card-text">
                                <span className="nav-card-title">{section.title}</span>
                                <span className="nav-card-desc">{section.desc}</span>
                            </div>
                        </div>
                        <div className="nav-card-accent" />
                    </button>
                ))}
            </div>

            <footer className="menu-footer">
                <p>Si prega di bere responsabilmente · Drink Responsibly</p>
            </footer>
        </div>
    );
}

export default function App() {
    const [section, setSection] = useState(null);
    const goBack = () => setSection(null);

    if (section === 'cocktail') return <CocktailMenu onBack={goBack} />;
    if (section === 'vini') return <ViniMenu onBack={goBack} />;
    if (section === 'spirits') return <SpiritsMenu onBack={goBack} />;
    if (section === 'amari') return <AmariMenu onBack={goBack} />;
    if (section === 'liquori') return <LiquoriMenu onBack={goBack} />;
    if (section === 'caffetteria') return <CaffetteriaMenu onBack={goBack} />;
    if (section === 'softdrinks') return <SoftDrinksMenu onBack={goBack} />;

    return <MainMenu onSelect={setSection} />;
}
