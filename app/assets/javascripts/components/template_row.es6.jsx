class TemplateRow extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      showDetails: false,
      job_url: "https://make.sandbox.cf3.us/jobs/" + this.props.job_id + "/preview_redirect"
    }
  }

  toggleDetails () {
    this.setState({showDetails: !this.state.showDetails})
  }

  render () {
    let details;
    if (this.state.showDetails) {
      details = (
        <TemplateDetail id={this.props.id} job_id={this.props.job_id}/>
      )
    }
    return (
      <li className='b_template-row list-group-item'>
        <div>
          <div className='b_template-row__cell'>
            <h4>
              <a href='javascript:void(0)' onClick={this.toggleDetails.bind(this)}>{this.props.title}</a>
              <a className='btn btn-primary btn-xs b_template_row__preview' target='_blank' href={this.state.job_url}>Preview</a>
            </h4>
            <div>
              {this.props.summary}
              <TemplateRating rating={this.props.rating}/>
            </div>
            <div>Downloads: {this.props.downloads}</div>
            <div>Author: {this.props.author}</div>
          </div>
          <div className='b_template-row__cell pull-right'>
            <img className='b_template_row__thumb' src={this.props.imageUrl}/>
          </div>
        </div>
        {details}
      </li>
    )
  }
}

TemplateRow.propTypes = {
  title: React.PropTypes.string,
  summary: React.PropTypes.string,
  rating: React.PropTypes.number,
  downloads: React.PropTypes.number,
  author: React.PropTypes.string,
  id: React.PropTypes.number,
  imageUrl: React.PropTypes.string,
  job_id: React.PropTypes.number
};
