import React, { useState } from 'react';
import '../estilos/buttonSwitch.css'

const ButtonSwitch = ({onChange, ...props}) => {
  const [checked, setChecked] = useState(true);
  const handleToggle = () => {
    const newValue = !checked;
    setChecked(newValue);
    onChange(newValue);
  };

  return (
    <div {...props}>
    <span className='coment'>See my level in statistics</span>
    <div>
      <input type="checkbox" name="toggle_switch" id="toggle_switch" onChange={handleToggle} />
      <label id='buttonSwitch' htmlFor="toggle_switch" />
    </div>

    </div>
  );
};

export default ButtonSwitch;

