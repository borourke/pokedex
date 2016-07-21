class TemplateReview extends React.Component {
  render () {
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <h5>{this.props.reviewer}</h5>
          <div>{this.props.review}</div>
        </div>
      </div>
    );
  }
}

TemplateReview.propTypes = {
  reviewer: React.PropTypes.string,
  review: React.PropTypes.string
};
