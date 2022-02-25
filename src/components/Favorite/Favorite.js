import styles from './Favorite.module.scss'
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import { getFilteredFavoriteCards } from '../../redux/cardsReducer'

const Favorite = () => {
    const cards = useSelector(state => getFilteredFavoriteCards(state));
    if(cards.length === 0) 
    return (
        <h1 className={styles.errorTitle}>No cards...</h1>
    )
    return (
        <div className={styles.container}>
            <article className={styles.column}>
                <ul className={styles.cards}>
                    {cards.map(card => <Card key={card.id} cardId={card.id} title={card.title} /> )}
                </ul>
            </article>
        </div>
    );
}

export default Favorite;