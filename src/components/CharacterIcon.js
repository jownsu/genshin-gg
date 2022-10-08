import React from 'react'
import { ELEMENTS, WEAPONS, CHARACTER_ICON_URL, ASSET_URL, CHARACTER_CARD_URL } from '../configs/constants'

function CharacterIcon(props) {

    let {
        name, 
        vision, 
        weapon, 
        rarity, 
        isNew = false,
        hideName = false
    } = props;

    const renderStars = () => {
        let stars = [];

        for(let i = 1; i <= rarity; i++){
            stars.push(
                    <img src={ASSET_URL + 'star.png'} 
                         alt='star'
                         className='character__star' 
                    />
                );
        }

        return stars;
    }



    return (
        <a href='#'>
            <div className="character tooltip">
                <span>
                    <img src={CHARACTER_CARD_URL + name.split(' ').join('_') + '.png'} alt="" />
                </span>
                <img 
                    src={CHARACTER_ICON_URL + name.split(' ').join('_') + '.png'} 
                    alt='Albedo'
                    className='character__image'    
                />
                { 
                    weapon && 
                        <img 
                            src={WEAPONS[weapon]} 
                            alt={weapon}
                            className='character__weapon'
                        />
                }

                {
                    vision && 
                        <img 
                            src={ELEMENTS[vision]} 
                            alt={vision} 
                            className='character__element'    
                        />
                }
    

                { !hideName && <p className="character__name">{name}</p>}
                { isNew && <span className="character__new">New</span> }
                { rarity &&
                <div className="character__stars">
                    {renderStars()}
                </div> }
            </div>
 
        </a>
    )
}

export default CharacterIcon