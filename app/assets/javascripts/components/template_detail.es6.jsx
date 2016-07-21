class TemplateDetail extends React.Component {
  render () {
    return (
      <div>
        <div>Title: {this.props.title}</div>
        <div>Summary: {this.props.summary}</div>
        <div>Description: {this.props.description}</div>
        <div>Rating: {this.props.rating}</div>
        <div>Downloads: {this.props.downloads}</div>
        <div>Reviews: {this.props.reviews}</div>
        <div>Tags: {this.props.tags}</div>
      </div>
    );
  }
}

TemplateDetail.propTypes = {
  title: React.PropTypes.string,
  summary: React.PropTypes.string,
  description: React.PropTypes.string,
  rating: React.PropTypes.number,
  downloads: React.PropTypes.number,
  reviews: React.PropTypes.array,
  tags: React.PropTypes.array
};
