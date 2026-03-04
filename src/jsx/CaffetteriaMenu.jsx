import React from 'react';
import '../css/CocktailMenu.css';

const sections = [
    {
        id: 'caffetteria',
        title: 'Caffetteria',
        items: [
            { name: 'Caffè Espresso', price: '1,80' },
            { name: 'Caffè Doppio', price: '3,60' },
            { name: 'Caffè Schiumato', price: '1,80' },
            { name: 'Caffè Macchiato', price: '1,80' },
            { name: 'Caffè Decaffeinato', price: 2 },
            { name: 'Caffè Ginseng', price: 2 },
            { name: 'Caffè Ginseng Max', price: 4 },
            { name: 'Caffè Orzo', price: 2 },
            { name: 'Caffè Orzo Max', price: 4 },
            { name: 'Caffè Nocciola', price: 3 },
            { name: 'Caffè Shakerato', price: 4 },
            { name: 'Caffè Americano', price: 3 },
            { name: 'Caffè Pugliese', price: 3 },
            { name: 'Caffè Marocchino', price: 2 },
            { name: 'Caffè Brasiliano', price: '1,50' },
            { name: 'Latte Bianco', price: '2,50' },
            { name: 'Latte Macchiato', price: '2,50' },
            { name: 'Cappuccino', price: 2 },
            { name: 'Cappuccino Decaffeinato', price: 3 },
            { name: 'Cappuccino di Soia', price: 3 },
            { name: 'Cappuccino Senza Lattosio', price: 3 },
            { name: 'Cappuccino Ginseng', price: 3 },
            { name: 'Cappuccino Nocciola', price: 3 },
            { name: 'Cappuccino Orzo', price: 3 },
            { name: 'Iced Caramel Macchiato', price: 5 },
            { name: 'Crema Caffè', price: 3 },
            { name: 'Caffè Freddo', price: '2,50' },
            { name: 'Caffè Kinder', price: 4 },
            { name: 'Caffè Kinder Ice', price: 4 },
            { name: 'Affogato al Caffè', price: '3,50' },
        ],
    },
    {
        id: 'pasticceria',
        title: 'Pasticceria',
        items: [
            { name: 'Abbraccio Crema Amarena', price: 2 },
            { name: 'Babà al Rhum', price: 4 },
            { name: 'Conchiglia Cioccolato', price: 2 },
            { name: 'Conchiglia Panna Latte', price: 2 },
            { name: 'Cornetto Vuoto al Burro', price: 2 },
            { name: 'Cornetto Albicocca', price: 2 },
            { name: 'Cornetto Aloe, Curcuma, Pesca', price: 2 },
            { name: 'Cornetto Cereali e Miele', price: 2 },
            { name: 'Cornetto Cioccolato', price: 2 },
            { name: 'Cornetto Cioccolato Bianco', price: 2 },
            { name: 'Cornetto Crema', price: 2 },
            { name: 'Cornetto Crema Amarena', price: 2 },
            { name: 'Cornetto Fiori di Sambuco', price: 2 },
            { name: 'Cornetto Frutti di Bosco', price: 2 },
            { name: 'Cornetto Ischitano', price: 2 },
            { name: 'Cornetto Pistacchio', price: 2 },
            { name: 'Cornetto Vegano', price: 2 },
            { name: 'Cornetto Mini', price: '1,50' },
            { name: 'Donuts Nocciola', price: 2 },
            { name: 'Graffa', price: 2 },
            { name: 'Mini Pastiera Napoletana', price: '4,50' },
            { name: 'Muffin Albicocca', price: 3 },
            { name: 'Muffin Cioccolato', price: 3 },
            { name: 'Muffin Cioccolato Bianco', price: 3 },
            { name: 'Muffin Frutti di Bosco', price: 3 },
            { name: 'Muffin Vuoto', price: '2,50' },
            { name: 'Mini Muffin Cioccolato', price: '1,50' },
            { name: 'Pasticciotto Leccese', price: 3 },
            { name: 'Mini Pasticciotto Leccese', price: 2 },
            { name: 'Sfogliatella Riccia / Frolla', price: 2 },
        ],
    },
    {
        id: 'succhi',
        title: 'Succhi di Frutta',
        items: [
            { name: 'Succo di Frutta Ace', price: 3 },
            { name: 'Succo di Frutta Albicocca', price: 3 },
            { name: 'Succo di Frutta Ananas', price: 3 },
            { name: 'Succo di Frutta Mela Annurca Bio', price: '3,50' },
            { name: 'Succo di Frutta Mirtillo', price: 3 },
            { name: 'Succo di Frutta Pesca', price: 3 },
            { name: 'Succo di Frutta Pesca Mango', price: '3,50' },
            { name: 'Succo di Frutta Pera', price: 3 },
            { name: 'Succo di Frutta Pompelmo', price: 3 },
        ],
    },
    {
        id: 'spremute',
        title: 'Spremute',
        items: [
            { name: "Spremuta d'Arancia", price: 5 },
            { name: 'Spremuta di Limone', price: 4 },
            { name: 'Spremuta di Melograno', price: 6 },
            { name: "Spremuta Mix Arancia e Limone", price: 5 },
            { name: "Spremuta Mix Arancia e Melograno", price: 6 },
            { name: 'Frullati di Frutta Fresca', price: 6 },
        ],
    },
    {
        id: 'dessert',
        title: 'Dessert',
        items: [
            { name: 'Cheesecake Albicocca', price: 5 },
            { name: 'Cheesecake Frutti di Bosco', price: 5 },
            { name: 'Cheesecake Pistacchio', price: 5 },
            { name: 'Cheesecake Nocciola', price: 5 },
            { name: 'Delizia al Limone', price: 5 },
            { name: 'Duetto: Pan di Spagna al Cacao con Crema al Cioccolato Bianco', price: 5 },
            { name: 'Tiramisù', price: 5 },
            { name: 'Tortino Cuore Caldo Cioccolato / Cioccolato Bianco / Pistacchio', price: '4,50' },
        ],
    },
];

export default function CaffetteriaMenu({ onBack }) {
    return (
        <div className="menu-wrapper">
            <div className="menu-bg" />
            <header className="menu-header">
                <p className="menu-subtitle">✦ Caffetteria & Pasticceria ✦</p>
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
                <p>Buona degustazione · Bon Appétit</p>
            </footer>
        </div>
    );
}
