import React from 'react';
import '../css/CocktailMenu.css';

const viniSections = [
    {
        id: 'bianchi',
        title: 'Vini Bianchi',
        items: [
            { name: 'Falanghina IGT "Futir" – Nifo Sarrapocchiello', calice: 6, bottiglia: 30 },
            { name: 'Fiano del Sannio DOC "Anafriis" – Nifo Sarrapocchiello', calice: 6, bottiglia: 30 },
            { name: 'Greco del Sannio DOC "Geneta" – Nifo Sarrapocchiello', calice: 6, bottiglia: 30 },
            { name: 'Chardonnay DOC "La Fuga Contessa Entellina" – Donnafugata', calice: 7, bottiglia: 40 },
            { name: 'Damarino DOC – Donnafugata', calice: 6, bottiglia: 30 },
            { name: 'Pallagrello Bianco IGP "Lancella" – Cantina di Lisandro', calice: 7, bottiglia: 30 },
            { name: 'Chardonnay Alto Adige DOC 2023 – Tramin', calice: 7, bottiglia: 40 },
            { name: 'Sauvignon Alto Adige DOC 2023 – Tramin', calice: 7, bottiglia: 40 },
            { name: 'Gewurztraminer Selida – Tramin', calice: 7, bottiglia: 40 },
        ],
    },
    {
        id: 'rossi',
        title: 'Vini Rossi',
        items: [
            { name: 'Aglianico IGT "Tritan" – Nifo Sarrapocchiello', calice: 6, bottiglia: 30 },
            { name: 'Aglianico del Taburno DOCG "Pontius" – Nifo Sarrapocchiello', calice: 6, bottiglia: 30 },
            { name: 'Cerasuolo di Vittoria DOCG "Floramundi" – Donnafugata', calice: 8, bottiglia: 50 },
            { name: 'Nero d\'Avola DOC "Contesa dei Venti" – Donnafugata', calice: 7, bottiglia: 40 },
            { name: 'Vittoria DOC Frappato "Bell\'Assai" – Donnafugata', calice: 8, bottiglia: 50 },
            { name: 'Pallagrello Nero IGT "Rosa del Tempo" – Cantina di Lisandro', calice: 6, bottiglia: 30 },
            { name: 'Pallagrello Nero Casavecchia IGP "Terarzulo" – Cantina di Lisandro', calice: 6, bottiglia: 30 },
            { name: 'Pallagrello Nero IGP "Nero di Rena" – Cantina di Lisandro', calice: 7, bottiglia: 40 },
            { name: 'Cimmarino Casavecchia IGT – Cantina di Lisandro', calice: 6, bottiglia: 30 },
        ],
    },
    {
        id: 'dolci',
        title: 'Vini Dolci e da Dessert',
        items: [
            { name: 'Passito di Pantelleria "Ben Rye" – Donnafugata', calice: 10, bottiglia: null },
            { name: 'Porto – Sandeman', calice: 5, bottiglia: null },
        ],
    },
    {
        id: 'calvados',
        title: 'Calvados',
        items: [
            { name: "Calvados Pays d'Auge 'Originel' – Lecompte", calice: 9, bottiglia: null },
        ],
    },
];

const bollicineSections = [
    {
        id: 'bollicine',
        title: 'Bollicine',
        items: [
            { name: 'Brachetto', calice: 4, bottiglia: 30 },
            { name: 'Bottega Prosecco Millesimato Extra Dry', calice: 4, bottiglia: 30 },
            { name: 'Bellavista', calice: 8, bottiglia: 60 },
            { name: 'Bellavista 1,5 L', calice: null, bottiglia: 120 },
            { name: 'Bellavista Rosé', calice: null, bottiglia: 70 },
            { name: 'Bellavista Teatro La Scala', calice: null, bottiglia: 80 },
            { name: 'Bellavista 3 L', calice: null, bottiglia: 280 },
            { name: "Ca' del Bosco Cuvée Prestige", calice: 8, bottiglia: 60 },
            { name: 'Champagne Perrier-Jouët "Belle Époque" 2014', calice: null, bottiglia: 220 },
            { name: 'Cliquot Veuve', calice: null, bottiglia: 100 },
            { name: 'Cliquot Veuve 1,5 L', calice: null, bottiglia: 220 },
            { name: 'Cliquot Rich Rosé', calice: null, bottiglia: 130 },
            { name: 'Chandon Garden Spritz', calice: null, bottiglia: 30 },
            { name: 'Krug Grande Cuvée', calice: null, bottiglia: 300 },
            { name: 'Moët & Chandon Impérial', calice: 10, bottiglia: 90 },
            { name: 'Moët & Chandon 1,5 L', calice: null, bottiglia: 220 },
            { name: 'Moët & Chandon Ice Impérial', calice: 12, bottiglia: 110 },
            { name: 'Moët & Chandon Ice Rosé', calice: null, bottiglia: 130 },
            { name: 'Moët Ice Magnum 1,5 L', calice: null, bottiglia: 230 },
            { name: 'Moët Ice Jéroboam 3 L', calice: null, bottiglia: 500 },
            { name: 'Moët Nir Nectar Rosé', calice: null, bottiglia: 290 },
            { name: 'Moët Golden Light Up 1,5 L', calice: null, bottiglia: 270 },
            { name: 'Cristal Louis Roederer', calice: null, bottiglia: 270 },
            { name: 'Champagne Brut "La Cuvée" Laurent Perrier', calice: null, bottiglia: 90 },
            { name: 'Champagne Brut R de Ruinart', calice: null, bottiglia: 90 },
            { name: 'Dom Pérignon 2012', calice: null, bottiglia: 420 },
        ],
    },
];

function WineItem({ item }) {
    const hasBothPrices = item.calice !== null && item.bottiglia !== null;
    const onlyCalice = item.calice !== null && item.bottiglia === null;
    const onlyBottiglia = item.calice === null && item.bottiglia !== null;

    return (
        <li className="menu-item">
            <span className="menu-item-name">{item.name}</span>
            <div className="wine-prices">
                {hasBothPrices && (
                    <>
                        <div className="wine-price-label">
                            <span className="wine-price-tag">🍷 Calice</span>
                            <span className="wine-price-value">€ {item.calice}</span>
                        </div>
                        <div className="wine-price-divider" />
                        <div className="wine-price-label">
                            <span className="wine-price-tag">🍾 Bottiglia</span>
                            <span className="wine-price-value">€ {item.bottiglia}</span>
                        </div>
                    </>
                )}
                {onlyCalice && (
                    <div className="wine-price-label">
                        <span className="wine-price-tag">🍷 Calice</span>
                        <span className="wine-price-value">€ {item.calice}</span>
                    </div>
                )}
                {onlyBottiglia && (
                    <div className="wine-price-label">
                        <span className="wine-price-tag">🍾 Bottiglia</span>
                        <span className="wine-price-value">€ {item.bottiglia}</span>
                    </div>
                )}
            </div>
        </li>
    );
}

export default function ViniMenu({ onBack }) {
    return (
        <div className="menu-wrapper">
            <div className="menu-bg" />
            <header className="menu-header">
                <p className="menu-subtitle">✦ Selezione Vini ✦</p>
                <h1 className="menu-title">Gran Caffè Margherita</h1>
                <div className="header-line" />
                <button className="back-btn" onClick={onBack}>← Torna al Menù</button>
            </header>

            <div className="menu-sections-wrapper">
                {[...viniSections, ...bollicineSections].map((section) => (
                    <div key={section.id} className="menu-section">
                        <h2 className="menu-section-title">{section.title}</h2>
                        <ul className="menu-list">
                            {section.items.map((item, i) => (
                                <WineItem key={i} item={item} />
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
