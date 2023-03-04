import React from 'react'
import CharacterItem from './CharacterItem'
import Spinner from '../ui/Spinner'

const CharacterGrid = ({ items, isLoading, filteredCards}) => {
        return (isLoading ? (
        <Spinner />
        ) : (<section className='cards'>
            {filteredCards.map((item) => (
                <CharacterItem
                    key={item.id}
                    item={item}>
                </CharacterItem>
            ))}
            
        </section>)
        )
}


export default CharacterGrid
