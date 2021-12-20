import DatePicker from 'sassy-datepicker';

function Calender() {
  const onChange = ( date ) => {
    console.log( date.toString() );
  };

  return (
    <DatePicker onChange={ onChange } />
  );
}
export default Calender