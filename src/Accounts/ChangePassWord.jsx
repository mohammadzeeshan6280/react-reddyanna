import { useState } from 'react';

const ChangePassword = () => {
  const [form, setForm] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validatePassword();
    if (Object.keys(validationErrors).length === 0) {
      alert('Password successfully changed');
    } else {
      setErrors(validationErrors);
    }
  };

  return (
 <div className="container-fluid">
    <div className="row">
        <div className="col-lg-12">
        <form className="cp_form" onSubmit={handleSubmit}>
      {/* Password Fields */}
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

      {/* New Password */}
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

      {/* Confirm Password */}
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

      <button type="submit" className="btn btn-thmemes">Change Password</button>
    </form>
        </div>
    </div>
 </div>

  );
};

export default ChangePassword;
