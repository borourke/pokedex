class TemplateRow extends React.Component {
  render () {
    return (
      <div className='b_template-row'>
        <div>Title: {this.props.title}</div>
        <div>Summary: {this.props.summary}</div>
        <div>Rating: {this.props.rating}</div>
        <div>Downloads: {this.props.downloads}</div>
        <div>Author: {this.props.author}</div>
      </div>
    );
  }
}

TemplateRow.propTypes = {
  title: React.PropTypes.string,
  summary: React.PropTypes.string,
  rating: React.PropTypes.number,
  downloads: React.PropTypes.number,
  author: React.PropTypes.string,
  id: React.PropTypes.number,
  imageUrl: React.PropTypes.string
};
