import React, { useState, forwardRef, useImperativeHandle } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ICellEditorParams } from 'ag-grid-community';

interface DateEditorProps extends ICellEditorParams {}

const DateEditor = forwardRef((props: DateEditorProps, ref) => {
  const [date, setDate] = useState<Date>(props.value);

  useImperativeHandle(ref, () => ({
    getValue: () => {
      return date;
    },
  }));

  const handleChange = (selectedDate: Date) => {
    setDate(selectedDate);
    props.stopEditing(); // Stop editing when date is selected
  };

  return (
    <DatePicker
      selected={date}
      onChange={handleChange}
      dateFormat="MM/dd/yyyy"
      placeholderText="Select a date"
    />
  );
});

export default DateEditor;
