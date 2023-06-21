import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props: any) => {
  return (
    <form className={classes.form}>
      <Input
        label="Menge"
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Hinzufügen</button>
    </form>
  );
};

export default MealItemForm;
