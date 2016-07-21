class TemplateIndex extends React.Component {

  componentDidMount () {
    console.log('mounted')
    $.ajax({
      url: 'templates/index',
      type: 'GET',
      dataType: 'json',
      success: function (data) {

      }.bind(this),
      failure: function (data) {
        console.log("ajax failed")
      }.bind(this)
    })
  }


  render () {
    return (
      <div className="b_template-index">
      </div>
    );
  }
}
