var TemplateForm = React.createClass({

  render: function() {
    return (
      <div>
        <h4>Create New Template</h4>
        <div>
        <br/>
          <form className='form-horizontal'>
            <div className='form-group'>
              <label for='templateTitle' className='col-xs-2 control-label'>Title</label>
              <div className='col-xs-10'>
                <input type='text' name='template[title]' className='form-control' id='templateTitle' placeholder='Enter Job title' required/>
              </div>
            </div>
            <div className='form-group'>
              <label for='templateEmail' className='col-xs-2 control-label'>Email</label>
              <div className='col-xs-10'>
                <input type='email' name='template[email]' className='form-control' id='templateEmail' placeholder='Enter Creating User' required/>
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
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button type="submit" className="btn btn-default">Create</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
});
