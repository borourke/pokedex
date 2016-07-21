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
    let content;
    if (this.state.showDetails) {
      content = (
        <div>
          Expanded
        </div>
      )
    } else {
      content = (
        <div>
          <span className="b_template-row__cell">
            <div>Summary: {this.props.summary}</div>
            <div>Rating: {this.props.rating}</div>
            <div>Downloads: {this.props.downloads}</div>
            <div>Author: {this.props.author}</div>
          </span>
          <span>
            <img className='b_template_row__thumb' src={this.props.imageUrl}/>
          </span>
        </div>
      )
    }
    return (
      <li className='b_template-row list-group-item'>
        <div>Title: <a onClick={this.toggleDetails.bind(this)}>{this.props.title}</a></div>
        {content}
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
