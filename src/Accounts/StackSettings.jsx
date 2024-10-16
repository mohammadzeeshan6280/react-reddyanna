import  { useState } from 'react';

const StackSettings = () => {
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

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setStackValues({
      ...stackValues,
      [id]: value,
    });
  };

  const handleSave = () => {
    console.log('Saved Stack Values:', stackValues);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <form className="stack-setting">
          <div className="row my-2">
            {/* Render your input fields here as per your stack setting UI */}
            {Object.keys(stackValues).map((key, index) => (
              <div className="col-6 mb-2" key={key}>
                <div className="input-group">
                  <span className="input-group-text">
                    <b><small>{stackValues[key]}</small></b>
                  </span>
                  <input
                    type="number"
                    className="form-control"
                    id={key}
                    value={stackValues[key]}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            ))}
          </div>
          <button type="button" className="btn btn-thmemes mb-2 w-100" onClick={handleSave}>
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default StackSettings;
