import Card from '../Card/Card';
import './FeaturedProducts.scss';
import useFetch from '../../hooks/useFetch';

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam autem
          saepe, eveniet nam quas fugiat ex temporibus tempore nulla labore
          magni natus sequi nobis neque similique. Incidunt, rerum? Beatae,
          minima?
        </p>
      </div>

      <div className="bottom">
        {error
          ? 'Something went wrong'
          : loading
          ? 'Loading...'
          : data.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
