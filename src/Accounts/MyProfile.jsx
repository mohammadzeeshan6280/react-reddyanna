import  { useState } from 'react';
import '../ModuleCss/MyProfile.css';

const Dashboard = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState('overview');

  // Function to handle tab clicks
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const [stackValues, setStackValues] = useState({
    stackVal0: 100,
    stackVal1: 50000000,
    stackVal2: 500,
    stackVal3: 2011,
    stackVal4: 500,
    stackVal5: 100,
    stackVal6: 1000,
    stackVal7: 22,
  });

  // Handler to update the values in the state
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setStackValues({
      ...stackValues,
      [id]: value,
    });
  };

  // Handler for the save button
  const handleSave = () => {
    // Save logic can be implemented here
    console.log('Saved Stack Values:', stackValues);
  };

// ------------------  Password ------------
const [form, setForm] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  
  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  
  // Password validation function
  const validatePassword = () => {
    const { oldPassword, newPassword, confirmPassword } = form;
    const errors = {};

    if (!oldPassword) {
      errors.oldPassword = 'Old Password is required';
    }

    if (!newPassword) {
      errors.newPassword = 'New Password is required';
    } else if (newPassword.length < 6) {
      errors.newPassword = 'New Password must be at least 6 characters';
    } else if (!/[A-Z]/.test(newPassword)) {
      errors.newPassword = 'New Password must contain at least 1 uppercase letter';
    } else if (!/[a-z]/.test(newPassword)) {
      errors.newPassword = 'New Password must contain at least 1 lowercase letter';
    } else if (!/[0-9]/.test(newPassword)) {
      errors.newPassword = 'New Password must contain at least 1 number';
    }

    if (!confirmPassword) {
      errors.confirmPassword = 'Confirm Password is required';
    } else if (newPassword !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    return errors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validatePassword();
    if (Object.keys(validationErrors).length === 0) {
      alert('Password successfully changed');
      // Submit the form or perform an action
    } else {
      setErrors(validationErrors);
    }
  };


  return (
<main>
    <div className="container-fluid">
    <h2 className='userscreen-title bg-dark'>Profile</h2>
        <div className="row">
            <div className="col-lg-4 col-md-12">
            <div className="profile-section">
        <div className="profile-picture d-flex justify-content-center">
          <img src="/profile_image.png" alt="Profile" className='w-25'/>
        </div>
        <h2 className="user-id">DEMO123</h2>
      </div>
            </div>
            <div className="col-lg-8 col-md-12">
            <div className="info-section">
        <div className="tabs">
          <span
            className={`tab ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => handleTabClick('overview')}
          >
            Overview
          </span>
          <span
            className={`tab ${activeTab === 'stack-settings' ? 'active' : ''}`}
            onClick={() => handleTabClick('stack-settings')}
          >
            Stack Settings
          </span>
          <span
            className={`tab ${activeTab === 'change-password' ? 'active' : ''}`}
            onClick={() => handleTabClick('change-password')}
          >
            Change Password
          </span>
        </div>

        {/* Conditional Rendering Based on Active Tab */}
        <div className="tab-content">
          {activeTab === 'overview' && (
            <div className="profile-overview">
      <h5 className="card-title">
        Welcome to reddybook, <b>demo123</b>
      </h5>
      <div className="row border-bottom">
        <div className="col-lg-3 col-4 label">User Id :</div>
        <div className="col-lg-9 col-8 data-show">demo123</div>
      </div>
      <div className="row border-bottom">
        <div className="col-lg-3 col-4 label">Available Chips :</div>
        <div className="col-lg-9 col-8 data-show" >0/-</div>
      </div>
      <div className="row border-bottom">
        <div className="col-lg-3 col-4 label">Exposure :</div>
        <div className="col-lg-9 col-8 data-show" >0.00/-</div>
      </div>
      <div className="row border-bottom">
        <div className="col-lg-3 col-4 label">Total Chips :</div>
        <div className="col-lg-9 col-8 data-show" >0/-</div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-4 label">Profit/Loss :</div>
        <div className="col-lg-9 col-8">
          <span className="green data-show" >0.00/-</span>
        </div>
      </div>
    </div>
          )}

          {activeTab === 'stack-settings' && (
            <div className='container-fluid'>
            <div className="row">
                
              {/* <h3>Stack Settings</h3>
              <p>Here you can manage your stack settings...</p> */}
              {/* Add any content or forms related to Stack Settings */}
              <form className="stack-setting">
      <div className="row my-2">
        <div className="col-6 mb-2">
          <div className="input-group">
            <span className="input-group-text">
              <b><small>100</small></b>
            </span>
            <input
              type="number"
              className="form-control"
              id="stackVal0"
              value={stackValues.stackVal0}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="col-6  mb-2">
          <div className="input-group">
            <span className="input-group-text">
              <b><small>50000000</small></b>
            </span>
            <input
              type="number"
              className="form-control"
              id="stackVal1"
              value={stackValues.stackVal1}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="col-6  mb-2">
          <div className="input-group">
            <span className="input-group-text">
              <b><small>500</small></b>
            </span>
            <input
              type="number"
              className="form-control"
              id="stackVal2"
              value={stackValues.stackVal2}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="col-6  mb-2">
          <div className="input-group">
            <span className="input-group-text">
              <b><small>2011</small></b>
            </span>
            <input
              type="number"
              className="form-control"
              id="stackVal3"
              value={stackValues.stackVal3}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="col-6  mb-2">
          <div className="input-group">
            <span className="input-group-text">
              <b><small>500</small></b>
            </span>
            <input
              type="number"
              className="form-control"
              id="stackVal4"
              value={stackValues.stackVal4}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="col-6  mb-2">
          <div className="input-group">
            <span className="input-group-text">
              <b><small>100</small></b>
            </span>
            <input
              type="number"
              className="form-control"
              id="stackVal5"
              value={stackValues.stackVal5}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="col-6  mb-2">
          <div className="input-group">
            <span className="input-group-text">
              <b><small>1000</small></b>
            </span>
            <input
              type="number"
              className="form-control"
              id="stackVal6"
              value={stackValues.stackVal6}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="col-6  mb-2">
          <div className="input-group">
            <span className="input-group-text">
              <b><small>22</small></b>
            </span>
            <input
              type="number"
              className="form-control"
              id="stackVal7"
              value={stackValues.stackVal7}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>

      <button type="button" className="btn btn-thmemes mb-2 w-100" onClick={handleSave} >
        Save
      </button>
    </form>
                    
                
            </div>
            </div>
          )}

          {activeTab === 'change-password' && (
            <div>
              <form className="cp_form" onSubmit={handleSubmit}>
      <div className="row mb-lg-3 mt-lg-2 align-items-center">
        <label htmlFor="currentPassword" className="col-md-3 col-lg-3 col-form-label text-lg-end">Current Password:</label>
        <div className="col-md-9 col-lg-9">
          <input
            type="password"
            name="oldPassword"
            id="currentPassword"
            className={`form-control ${errors.oldPassword ? 'is-invalid' : ''}`}
            value={form.oldPassword}
            onChange={handleChange}
          />
          {errors.oldPassword && <div className="invalid-feedback">{errors.oldPassword}</div>}
        </div>
      </div>

      <div className="row mb-lg-3 mt-lg-2 align-items-center">
        <label htmlFor="newPassword" className="col-md-3 col-lg-3 col-form-label text-lg-end">New Password:</label>
        <div className="col-md-9 col-lg-9">
          <input
            type="password"
            name="newPassword"
            id="newPassword"
            className={`form-control ${errors.newPassword ? 'is-invalid' : ''}`}
            value={form.newPassword}
            onChange={handleChange}
          />
          {errors.newPassword && <div className="invalid-feedback">{errors.newPassword}</div>}
        </div>
      </div>

      <div className="row mb-lg-3 mt-lg-2 align-items-center">
        <label htmlFor="renewPassword" className="col-md-3 col-lg-3 col-form-label text-lg-end">Re-enter New Password:</label>
        <div className="col-md-9 col-lg-9">
          <input
            type="password"
            name="confirmPassword"
            id="renewPassword"
            className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
            value={form.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
        </div>
      </div>

      <div className="feedback">
        <p className="small m-0">
          <i><b>Note:</b> The New Password must be at least 6 characters</i>
        </p>
        <p className="small m-0">
          <i><b>Note:</b> The New Password must contain at least: 1 uppercase letter, 1 lowercase letter, 1 number</i>
        </p>
      </div>

      <div className="row">
        <button type="submit" className="btn btn-thmemes">Change Password</button>
      </div>
    </form>
            </div>
          )}
        </div>
      </div>
            </div>
        </div>
    </div>
</main>
  );
};

export default Dashboard;






