class TemplateForm extends React.Component {

  submitForm (e) {
    e.preventDefault()
    $(e.target).append('<input type="hidden" name="authenticity_token" value="'+ $('meta[name="csrf-token"]').attr('content') + '" /> ')
    $.ajax({
      url: '/templates',
      type: 'POST',
      dataType: 'json',
      data: $(e.target).serialize(),
      success: function(data) {
        this.props.goHome()
      }.bind(this),
      failure: function(data) {
        console.log("failure to submit")
      }.bind(this)
    })

  }

  render () {
    return (
      <div>
        <h4>Create New Template</h4>
        <div>
        <br/>
          <form className='form-horizontal' onSubmit={this.submitForm.bind(this)}>
            <div className='form-group'>
              <label for='templateTitle' className='col-xs-2 control-label'>Title</label>
              <div className='col-xs-10'>
                <input type='text' name='template[title]' className='form-control' id='templateTitle' placeholder='Enter Job title' required/>
              </div>
            </div>
            <div className='form-group'>
              <label for='templateAuthor' className='col-xs-2 control-label'>Author</label>
              <div className='col-xs-10'>
                <input type='email' name='template[author]' className='form-control' id='templateAuthor' placeholder='Enter Creating User' required/>
              </div>
            </div>
            <div className='form-group'>
              <label for='templateJobId' className='col-xs-2 control-label'>Job Id</label>
              <div className='col-xs-10'>
                <input type='number' name='template[job_id]' className='form-control' id='templateJobId' placeholder='Enter Source Job Id' required/>
              </div>
            </div>
            <div className='form-group'>
              <label for='templateSummary' className='col-xs-2 control-label'>Summary</label>
              <div className='col-xs-10'>
                <textarea name='template[summary]' className='form-control' id='templateSummary' placeholder='Enter template description' required/>
              </div>
            </div>
            <div className='form-group'>
              <label for='templateImageUrl' className='col-xs-2 control-label'>Image Link</label>
              <div className='col-xs-10'>
                <input type='url' name='template[image_url]' className='form-control' id='templateImageUrl' placeholder='Enter thumbnail URL' required/>
              </div>
            </div>
            <div className='form-group'>
              <div className="col-sm-offset-2 col-sm-10">
                <button type='submit' className="btn btn-default">Create</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

TemplateDetail.propTypes = {
  goHome: React.PropTypes.func
}
