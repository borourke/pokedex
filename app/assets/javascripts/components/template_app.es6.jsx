class TemplateApp extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      page: 'TemplateIndex',
      showHeader: true
    }
  }

  showTemplateForm () {
    this.setState( { page: 'TemplateForm', showHeader: false} )
  }

  goHome() {
    console.log("triggered")
    this.setState( { page: 'TemplateIndex', showHeader: true} )
  }

  render () {
    let page;
    let header;
    if (this.state.page == 'TemplateIndex') {
      page = (
        <TemplateIndex/>
      )
    } else if (this.state.page == 'TemplateForm') {
      page = (
        <TemplateForm goHome={this.goHome.bind(this)}/>
      )
    }

    if (this.state.showHeader) {
      header = (
        <div>
          <div className='inline-blocked'>
            <h4>Find templates created by other CrowdFlower users</h4>
          </div>
          <div className='b_new-template-btn inline-blocked pull-right'>
            <a href='javascript:void(0)' className='btn btn-primary' onClick={this.showTemplateForm.bind(this)}>New Template</a>
          </div>
          <br/>
          <br/>
        </div>
      )
    }

    return (
      <div className='container'>
        <div className='row'>
          <div className='col-xs-1'></div>
          <div className='col-xs-10'>
            <h2>Pokedex</h2>
            {header}
            {page}
          </div>
          <div className='col-xs-1'></div>
        </div>
      </div>
    );
  }
}
