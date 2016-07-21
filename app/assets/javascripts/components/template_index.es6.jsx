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
      failure: function (data) {
        console.log("ajax failed")
      }.bind(this)
    })
  }


  render () {
    return (
      <div className="b_template-index">
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
            />
          )
        })}
      </div>
    );
  }
}
