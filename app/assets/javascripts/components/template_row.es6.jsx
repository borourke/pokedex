class TemplateRow extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      showDetails: false
    }
  }

  toggleDetails () {
    this.setState({showDetails: !this.state.showDetails})
  }

  render () {
    let details;
    if (this.state.showDetails) {
      details = (
        <TemplateDetail id={this.props.id}/>
      )
    }
    return (
      <li className='b_template-row list-group-item'>
        <div>
          <div className='b_template-row__cell'>
            <h4><a onClick={this.toggleDetails.bind(this)}>{this.props.title}</a></h4>
            <div>{this.props.summary}</div>
            <div>Rating: {this.props.rating}</div>
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
  imageUrl: React.PropTypes.string
};
