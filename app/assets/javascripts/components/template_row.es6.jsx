class TemplateRow extends React.Component {
  render () {
    return (
      <div>
        <div>Title: {this.props.title}</div>
        <div>Summary: {this.props.summary}</div>
        <div>Description: {this.props.description}</div>
        <div>Rating: {this.props.rating}</div>
        <div>Downloads: {this.props.downloads}</div>
      </div>
    );
  }
}

TemplateRow.propTypes = {
  title: React.PropTypes.string,
  summary: React.PropTypes.string,
  description: React.PropTypes.string,
  rating: React.PropTypes.number,
  downloads: React.PropTypes.number
};
