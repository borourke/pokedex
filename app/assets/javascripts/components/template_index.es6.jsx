class TemplateIndex extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      templates: []
    }
  }

  componentDidMount () {
    $.ajax({
      url: 'templates/index',
      type: 'GET',
      dataType: 'json',
      success: function (data) {
        console.log(data)
        this.setState({ templates: data.templates})
      }.bind(this),
      fail: function (data) {
        console.log("ajax failed")
      }.bind(this)
    })
  }


  render () {
    return (
      <div>
        <input type='text' className='form-control fake-tq-search' placeholder='Search for templates'/>
        <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
        <ul className="b_template-index list-group">
          {this.state.templates.map(function(template, i) {
            return (
              <TemplateRow
                key={i}
                title={template.title}
                downloads={template.downloads}
                rating={template.rating}
                summary={template.summary}
                author={template.author}
                imageUrl={template.image_url}
                id={template.template_id}
                job_id={template.job_id}
              />
            )
          })}
        </ul>
      </div>
    )
  }
}
