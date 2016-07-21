class TemplateDetail extends React.Component {

  componentDidMount () {
    $.ajax({
      url: 'templates/show/' + this.props.id,
      type: 'GET',
      dataType: 'json',
      success: function (data) {
        console.log(data)
        this.setState({template: data.template, reviews: data.reviews, tags: data.tags})
      }.bind(this),
      failure: function (data) {
        console.log("ajax failed")
      }.bind(this)
    })
  }

  render () {
    return (
      <div>
        <div>Rating: {this.props.rating}</div>
        <div>Downloads: {this.props.downloads}</div>
        <div>Reviews: {this.props.reviews}</div>
        <div>Tags: {this.props.tags}</div>
      </div>
    );
  }
}

TemplateDetail.propTypes = {
  id: React.PropTypes.number
};
