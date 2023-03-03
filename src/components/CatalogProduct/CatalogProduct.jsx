import { useDispatch } from 'react-redux';
import { API_URL } from '../../const.js';
import { addProduct } from '../../store/order/orderSlice.js';
import style from './CatalogProduct.module.css';

export const CatalogProduct = ({ item }) => { 
  const dispatch = useDispatch();
  return (
    <article className={style.product}>
                  <img src={`${API_URL}/${item.image}`} alt={item.title} className={style.image}/>

                  <p className={style.price}>
                    {item.price}<span className="currency">₽</span>
                  </p>

                  <h3 className={style.title}>
                    <button className={style.detail}>{item.title}</button>
                  </h3>

                  <p className={style.weight}>{item.weight}г</p>

                  <button 
                  className={style.add} 
                  type="button"
                  onClick={ () => {
                    dispatch(addProduct({id: item.id}))
                  }}
                  >Добавить</button>
                </article>
);
}