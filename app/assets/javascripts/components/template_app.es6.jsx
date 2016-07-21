class TemplateApp extends React.Component {

  componentDidMount () {
    console.log('mounted')
    $.ajax({
      url: '/index',
      type: 'GET',
      dataType: 'json'
    }).done( function() {
      console.log(success)
    }).failure( function() {
      console.log("AJAX FAILED")
    })
  }

  render () {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-xs-2'></div>
          <div className='col-xs-8'>
            <h2>Pokedex</h2>
          </div>
          <div className='col-xs-2'></div>
        </div>
      </div>
    );
  }
}
