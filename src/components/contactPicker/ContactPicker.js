import React from "react";

export const ContactPicker = ({ value, name, onChange, contacts }) => {
  return (
    <select aria-label="Contact Picker" value={value} name={name} onChange={onChange}>
      <option value={""} key={-1}>
        No Contact Selected
      </option>
      {contacts.map((contact) => {
        return (
          <option value={contact} key={contact}>
            {contact}
          </option>
        );
      })}
    </select>
  );
};
