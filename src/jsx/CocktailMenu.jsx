import React, { useState, useEffect } from 'react';
import '../css/CocktailMenu.css';

import alexanderImg from '../foto/ALEXANDER.png';
import americanoImg from '../foto/AMERICANO.png';
import americanBeautyImg from '../foto/AMERICAN_BEAUTY.png';
import b52Img from '../foto/B52.png';
import belliniImg from '../foto/BELLINI.png';
import blackRussianImg from '../foto/BLACK_RUSSIAN.png';
import bloodyMaryImg from '../foto/BLODY_MARY.webp';
import caipirinhaImg from '../foto/CAIPIRINHA.png';
import caipiroskaImg from '../foto/CAIPIROSKA.png';
import cinnamonSunsetImg from '../foto/CINNAMON_SUNSET.png';
import citrusMirageImg from '../foto/CITRUS_MIRAGE.png';
import cocktailMartiniImg from '../foto/COCKTAIL_MARTINI.png';
import cosmopolitanImg from '../foto/COSMOPOLITAN.png';
import cubaLibreImg from '../foto/CUBA_LIBRE.png';
import daiquiriImg from '../foto/DAIQUIRI.png';
import garibaldiImg from '../foto/GARIBALDI.webp';
import ginFizzImg from '../foto/GIN_FIZZ.png';
import godFatherImg from '../foto/GOD_FATHER.png';
import godMotherImg from '../foto/GOD_MOTHER.png';
import irishCoffeeImg from '../foto/IRISH_COFFEE.jpg';
import jackColaImg from '../foto/JACK_&_COLA.png';
import japaneseIceTeaImg from '../foto/JAPANESE_ICE_TEA.png';
import jegerMojitoImg from '../foto/JEGER_MOJITO.png';
import juneBugImg from '../foto/JUNE_BUG.png';
import mangoRoyalImg from '../foto/MANGO_ROYAL.jpg';
import midnightWhisperImg from '../foto/MIDNIGHT_WHISPER.png';
import poireDoreeImg from '../foto/POIRE_DORÉE.png';
import pornstarMartiniImg from '../foto/PORNOSTAR_MARTINI.png';
import wildRubyImg from '../foto/WILD_RUBY.png';

const signatureCocktails = [
    {
        id: 's1',
        name: 'Citrus Mirage',
        ingredients: ['Gin Tanqueray Sevilla', 'Liquore al Mandarino', 'Aperol', 'Succo di Limone'],
        image: citrusMirageImg,
        color: '#FF8C00',
    },
    {
        id: 's2',
        name: 'Wild Ruby',
        ingredients: ['Sciroppo Frutti Rossi', 'Succo Maracuja', 'Succo Lampone', 'Succo Ananas', 'Succo Melograno'],
        image: wildRubyImg,
        color: '#C41E3A',
    },
    {
        id: 's3',
        name: 'Mango Royal',
        ingredients: ['Vodka Premium', 'Sciroppo al Mango', 'Succo Lime', 'Succo Ananas'],
        image: mangoRoyalImg,
        color: '#FFB347',
    },
    {
        id: 's4',
        name: 'Midnight Whisper',
        ingredients: ['Whisky', 'Liquore al Caffè', 'Sciroppo alla Cannella', 'Sciroppo Pop Corn'],
        image: midnightWhisperImg,
        color: '#4A2C2A',
    },
    {
        id: 's5',
        name: 'Poire Dorée',
        ingredients: ['François Peyrott', 'Bitter Orange', 'Frangelico', 'Top di Soda'],
        image: poireDoreeImg,
        color: '#D4A017',
    },
    {
        id: 's6',
        name: 'Cinnamon Sunset',
        ingredients: ['Gin Tanqueray', 'Aperol', 'Cannella', "Succo d'Arancia", 'Succo Limone'],
        image: cinnamonSunsetImg,
        color: '#E25822',
    },
];

const classicCocktails = [
    { id: 'c1', name: 'Alexander', ingredients: ['Cognac', 'Crema di Cacao', 'Panna', 'Noce Moscata'], image: alexanderImg, color: '#8B4513' },
    { id: 'c2', name: 'Americano', ingredients: ['Bitter Campari', 'Vermouth Rosso', 'Soda'], image: americanoImg, color: '#DC143C' },
    { id: 'c3', name: 'American Beauty', ingredients: ['Brandy', 'Vermouth Dry', 'Crème de Menthe', 'Porto Rosso', "Succo d'Arancia"], image: americanBeautyImg, color: '#C71585' },
    { id: 'c4', name: 'B52', ingredients: ['Kahlúa', 'Baileys', 'Grand Marnier'], image: b52Img, color: '#8B6914' },
    { id: 'c5', name: 'Bellini', ingredients: ['Prosecco', 'Purea di Pesca'], image: belliniImg, color: '#FFDAB9' },
    { id: 'c6', name: 'Black Russian', ingredients: ['Vodka', 'Liquore al Caffè'], image: blackRussianImg, color: '#2C2C2C' },
    { id: 'c7', name: 'Bloody Mary', ingredients: ['Vodka', 'Succo di Pomodoro', 'Limone', 'Tabasco', 'Salsa Worcestershire', 'Sale', 'Pepe'], image: bloodyMaryImg, color: '#B22222' },
    { id: 'c8', name: 'Bonaparte', ingredients: ['Cranberry', 'Prosecco', 'Gocce di Limone'], image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=400&h=500&fit=crop', color: '#FFD700' },
    { id: 'c9', name: 'Caipirinha', ingredients: ['Cachaça', 'Zucchero di Canna', 'Lime'], image: caipirinhaImg, color: '#32CD32' },
    { id: 'c10', name: 'Capiroska', ingredients: ['Vodka', 'Lime', 'Zucchero di Canna'], image: caipiroskaImg, color: '#9ACD32' },
    { id: 'c11', name: 'Cosmopolitan', ingredients: ['Vodka Limone', 'Cointreau', 'Succo Lime', 'Succo Cranberry'], image: cosmopolitanImg, color: '#FF69B4' },
    { id: 'c12', name: 'Cuba Libre', ingredients: ['Rum Bianco', 'Coca Cola'], image: cubaLibreImg, color: '#8B0000' },
    { id: 'c13', name: 'Daiquiri', ingredients: ['Rum Bianco', 'Succo Lime', 'Sciroppo di Zucchero'], image: daiquiriImg, color: '#E0FFFF' },
    { id: 'c14', name: 'Cocktail Martini', ingredients: ['Gin', 'Dry Vermouth'], image: cocktailMartiniImg, color: '#C0C0C0' },
    { id: 'c15', name: 'Garibaldi', ingredients: ['Bitter Campari', "Succo d'Arancia"], image: garibaldiImg, color: '#FF4500' },
    { id: 'c16', name: 'Godfather', ingredients: ['Scotch Whiskey', 'Amaretto'], image: godFatherImg, color: '#DAA520' },
    { id: 'c17', name: 'Godmother', ingredients: ['Vodka Liscia', 'Amaretto'], image: godMotherImg, color: '#DEB887' },
    { id: 'c18', name: 'Gin Fizz', ingredients: ['Gin', 'Succo di Limone', 'Sciroppo di Zucchero', 'Soda'], image: ginFizzImg, color: '#87CEEB' },
    { id: 'c19', name: 'Irish Coffee', ingredients: ['Irish Whisky', 'Caffè', 'Zucchero di Canna', 'Panna Fresca'], image: irishCoffeeImg, color: '#6F4E37' },
    { id: 'c20', name: 'Jack & Coca', ingredients: ['Jack Daniels', 'Coca Cola'], image: jackColaImg, color: '#3B2F2F' },
    { id: 'c21', name: 'Jäger Mojito', ingredients: ['Jägermeister', 'Zucchero di Canna', 'Lime', 'Arancia', 'Menta', 'Ginger Ale'], image: jegerMojitoImg, color: '#2E8B57' },
    { id: 'c22', name: 'Japanese Ice Tea', ingredients: ['Vodka', 'Gin', 'Rum Bianco', 'Midori', 'Sweet & Sour', 'Lemonsoda'], image: japaneseIceTeaImg, color: '#66CDAA' },
    { id: 'c23', name: 'June Bug', ingredients: ['Midori', 'Malibu', 'Liquore Banana', 'Sweet & Sour', "Succo d'Ananas"], image: juneBugImg, color: '#ADFF2F' },
    { id: 'c24', name: 'Long Beach Ice Tea', ingredients: ['Vodka', 'Gin', 'Rum Bianco', 'Triple Sec', 'Sweet & Sour', 'Succo Cranberry'], image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=500&fit=crop', color: '#DB7093' },
    { id: 'c25', name: 'Long Island Ice Tea', ingredients: ['Vodka', 'Gin', 'Rum Bianco', 'Triple Sec', 'Sweet & Sour', 'Coca Cola'], image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&h=500&fit=crop', color: '#D2691E' },
    { id: 'c26', name: 'Pornostar Martini', ingredients: ['Vodka alla Vaniglia', 'Passion Fruit Purée', 'Liquore al Frutto della Passione', 'Succo di Limone', 'Sciroppo alla Vaniglia'], image: pornstarMartiniImg, color: '#FFD700' },
    { id: 'c27', name: 'Margarita', ingredients: ['Tequila', 'Cointreau', 'Succo Lime'], image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=500&fit=crop', color: '#7FFF00' },
    { id: 'c28', name: 'Mai Tai', ingredients: ['Rum Bianco', 'Rum Scuro', 'Orange Curaçao', 'Lime', 'Sciroppo Orzata', 'Granatina'], image: 'https://images.unsplash.com/photo-1530062845289-9109b2c9c868?w=400&h=500&fit=crop', color: '#FF6347' },
    { id: 'c29', name: 'Manhattan', ingredients: ['Canadian Whisky', 'Vermouth Rosso', 'Angostura'], image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=500&fit=crop', color: '#800020' },
    { id: 'c30', name: 'Miami Ice Tea', ingredients: ['Vodka', 'Gin', 'Rum Bianco', 'Triple Sec', 'Blu Curaçao', 'Sweet & Sour', 'Coca Cola'], image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=500&fit=crop', color: '#00CED1' },
    { id: 'c31', name: 'Mimosa', ingredients: ['Prosecco', "Succo d'Arancia"], image: 'https://images.unsplash.com/photo-1605270012917-bf157c5a9541?w=400&h=500&fit=crop', color: '#FFA500' },
    { id: 'c32', name: 'Mojito', ingredients: ['Rum Bianco', 'Zucchero di Canna', 'Lime', 'Menta', 'Soda'], image: 'https://images.unsplash.com/photo-1609951651556-5334e2706168?w=400&h=500&fit=crop', color: '#00FA9A' },
    { id: 'c33', name: 'Moscow Mule', ingredients: ['Vodka', 'Ginger Beer', 'Succo Lime'], image: 'https://images.unsplash.com/photo-1598514982901-abe62cca3e29?w=400&h=500&fit=crop', color: '#B87333' },
    { id: 'c34', name: 'Negroni', ingredients: ['Gin', 'Vermouth Rosso', 'Bitter Campari'], image: 'https://images.unsplash.com/photo-1566633806827-5ce21ce2c4e3?w=400&h=500&fit=crop', color: '#CC5500' },
    { id: 'c35', name: 'Negroni Sbagliato', ingredients: ['Bitter Campari', 'Vermouth Rosso', 'Prosecco'], image: 'https://images.unsplash.com/photo-1566633806827-5ce21ce2c4e3?w=400&h=500&fit=crop', color: '#E34234' },
    { id: 'c36', name: 'Old Fashioned', ingredients: ['Bourbon Whisky', 'Zucchero', 'Angostura', 'Acqua'], image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=400&h=500&fit=crop', color: '#CC7722' },
    { id: 'c37', name: 'Piña Colada', ingredients: ['Rum Bianco', 'Latte di Cocco', 'Ananas'], image: 'https://images.unsplash.com/photo-1571950006739-2ca7af3b5c57?w=400&h=500&fit=crop', color: '#FFFACD' },
    { id: 'c38', name: 'Rossini', ingredients: ['Prosecco', 'Purea di Fragola'], image: 'https://images.unsplash.com/photo-1578664182767-6bf00caa0d44?w=400&h=500&fit=crop', color: '#FF2052' },
    { id: 'c39', name: 'Sex on the Beach', ingredients: ['Vodka', 'Peach Tree', "Succo d'Arancia", 'Cranberry'], image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=500&fit=crop', color: '#FF7F50' },
    { id: 'c40', name: 'Tintoretto', ingredients: ['Prosecco', 'Sciroppo di Melograno'], image: 'https://images.unsplash.com/photo-1578664182767-6bf00caa0d44?w=400&h=500&fit=crop', color: '#E30B5C' },
];

function Modal({ cocktail, onClose }) {
    const [imgLoaded, setImgLoaded] = useState(false);

    useEffect(() => {
        const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleKey);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKey);
        };
    }, [onClose]);

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div
                className="modal-content"
                style={{ '--accent-color': cocktail.color }}
                onClick={(e) => e.stopPropagation()}
            >
                <button className="modal-close" onClick={onClose}>✕</button>

                <div className="modal-image-wrapper">
                    <div className="modal-image-glow" />
                    {!imgLoaded && <div className="image-placeholder modal-placeholder" />}
                    <img
                        src={cocktail.image}
                        alt={cocktail.name}
                        className={`modal-image ${imgLoaded ? 'loaded' : ''}`}
                        onLoad={() => setImgLoaded(true)}
                        onError={(e) => {
                            e.target.src = `https://placehold.co/400x500/${cocktail.color.replace('#', '')}/ 1a1a2e?text=${encodeURIComponent(cocktail.name)}&font=raleway`;
                            setImgLoaded(true);
                        }}
                    />
                </div>

                <h2 className="modal-name">{cocktail.name}</h2>
                <div className="modal-divider" />
                <h3 className="modal-ingredients-title">Ingredienti</h3>
                <ul className="modal-ingredients-list">
                    {cocktail.ingredients.map((ing, i) => (
                        <li key={i} className="modal-ingredient" style={{ animationDelay: `${i * 0.07}s` }}>
                            <span className="ingredient-dot" />
                            {ing}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

function CocktailCard({ cocktail, onClick }) {
    const [imgLoaded, setImgLoaded] = useState(false);

    return (
        <div
            className="cocktail-card"
            style={{ '--accent-color': cocktail.color }}
            onClick={onClick}
        >
            <div className="card-glow" />
            <div className="card-content">
                <div className="card-image-wrapper">
                    {!imgLoaded && <div className="image-placeholder" />}
                    <img
                        src={cocktail.image}
                        alt={cocktail.name}
                        className={`card-image ${imgLoaded ? 'loaded' : ''}`}
                        onLoad={() => setImgLoaded(true)}
                        onError={(e) => {
                            e.target.src = `https://placehold.co/400x500/${cocktail.color.replace('#', '')}/1a1a2e?text=${encodeURIComponent(cocktail.name)}&font=raleway`;
                            setImgLoaded(true);
                        }}
                    />
                    <div className="card-image-overlay" />
                </div>
                <div className="card-info">
                    <h2 className="cocktail-name">{cocktail.name}</h2>
                    <span className="card-tap-hint">Tocca per i dettagli</span>
                </div>
            </div>
        </div>
    );
}

export default function CocktailMenu({ onBack }) {
    const [category, setCategory] = useState(null);
    const [selectedCocktail, setSelectedCocktail] = useState(null);

    const currentList = category === 'signature' ? signatureCocktails : classicCocktails;

    if (!category) {
        return (
            <div className="menu-wrapper">
                <div className="menu-bg" />
                <header className="menu-header">
                    <p className="menu-subtitle">✦ Cocktail Menù ✦</p>
                    <h1 className="menu-title">Gran Caffè Margherita</h1>
                    <div className="header-line" />
                    <p className="menu-choose">Scegli la tua esperienza</p>
                    {onBack && (
                        <button className="back-btn" style={{ marginTop: '1rem' }} onClick={onBack}>← Torna al Menù</button>
                    )}
                </header>

                <div className="category-selection">
                    <button className="category-btn signature-btn" onClick={() => setCategory('signature')}>
                        <div className="cat-img-wrapper">
                            <img
                                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&h=400&fit=crop"
                                alt="Signature"
                                className="cat-img"
                            />
                            <div className="cat-img-overlay" />
                        </div>
                        <div className="cat-text">
                            <span className="cat-label">Signature Cocktails</span>
                            <span className="cat-desc">Le nostre creazioni esclusive</span>
                        </div>
                    </button>

                    <button className="category-btn classic-btn" onClick={() => setCategory('classic')}>
                        <div className="cat-img-wrapper">
                            <img
                                src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600&h=400&fit=crop"
                                alt="Classici"
                                className="cat-img"
                            />
                            <div className="cat-img-overlay" />
                        </div>
                        <div className="cat-text">
                            <span className="cat-label">Cocktail Classici</span>
                            <span className="cat-desc">I grandi classici intramontabili</span>
                        </div>
                    </button>
                </div>

                <footer className="menu-footer">
                    <p>Si prega di bere responsabilmente · Drink Responsibly</p>
                </footer>
            </div>
        );
    }

    return (
        <div className="menu-wrapper">
            <div className="menu-bg" />
            <header className="menu-header">
                <p className="menu-subtitle">
                    {category === 'signature' ? '✦ Signature Cocktails ✦' : '✦ Cocktail Classici ✦'}
                </p>
                <h1 className="menu-title">Gran Caffè Margherita</h1>
                <div className="header-line" />
                <button className="back-btn" onClick={() => setCategory(null)}>← Torna al Menù</button>
            </header>

            <div className="cocktail-grid">
                {currentList.map((cocktail) => (
                    <CocktailCard
                        key={cocktail.id}
                        cocktail={cocktail}
                        onClick={() => setSelectedCocktail(cocktail)}
                    />
                ))}
            </div>

            {selectedCocktail && (
                <Modal cocktail={selectedCocktail} onClose={() => setSelectedCocktail(null)} />
            )}

            <footer className="menu-footer">
                <p>Si prega di bere responsabilmente · Drink Responsibly</p>
            </footer>
        </div>
    );
}