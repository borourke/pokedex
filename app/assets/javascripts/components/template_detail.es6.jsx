class TemplateDetail extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      copy_url: 'https://sandbox.cf3.us/jobs/' + this.props.job_id + '/copy',
      reviews: [],
      tags: [],
      template: {}
    }
  }

  componentDidMount () {
    $.ajax({
      url: 'templates/show/' + this.props.id,
      type: 'GET',
      dataType: 'json',
      success: function (data) {
        console.log(data)
        this.setState({template: data.template, reviews: data.reviews, tags: data.tags })
      }.bind(this),
      failure: function (data) {
        console.log("ajax failed")
      }.bind(this)
    })
  }

  render () {
    return (
      <div className="b_template-detail">
        <div>
          <h4>Description</h4>
          <p>
            {this.state.template.description}
          </p>
        </div>
        <div>
          <h4>Tags</h4>
          {this.state.tags.map(function(tag, i) {
            return (
              <span key={i} className="label label-default b_template-detail__tag">{tag.tag}</span>
            )
          })}
        </div>
        <br/>
        <div>
          <h4>Reviews</h4>
          {this.state.reviews.map(function(review, i) {
            return (
              <TemplateReview
                key={i}
                reviewer={review.reviewer}
                review={review.review}
              />
            )
          })}
        </div>
        <div className='b_template-detail__copy'>
          <a className='btn btn-success' href={this.state.copy_url} target='_blank'>Copy to My Account</a>
        </div>
      </div>
    )
  }
}

TemplateDetail.propTypes = {
  id: React.PropTypes.number,
  job_id: React.PropTypes.number
};
