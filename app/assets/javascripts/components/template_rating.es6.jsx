class TemplateRating extends React.Component {
  render () {
    let ratings = []
    for (var i = 0; i < this.props.rating; i++) {
      ratings.push( <img className='pokeball' src='/assets/pokeball.png'/> )
    }

    return (
      <div className='b_template-rating'>
        Rating:
        {ratings}
      </div>
    );
  }
}

TemplateRating.propTypes = {
  rating: React.PropTypes.number
};
