class TemplateApp extends React.Component {

  render () {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-xs-1'></div>
          <div className='col-xs-10'>
            <h2>Pokedex</h2>
            <TemplateIndex/>
          </div>
          <div className='col-xs-1'></div>
        </div>
      </div>
    );
  }
}
