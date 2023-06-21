import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Die Schnitzelbär Speisekarte</h2>
      <p>Klar, normalerweise steht der Bär für Gemütlichkeit.</p>
      <p>
        Doch bei uns machen wir ihm Dampf unterm Fell. Da dir das Wasser bereits im Mund zerläuft, versuchen wir immer,
        schnell zu sein. Wir kennen nämlich die Gefahr der Unterschnitzelung.
      </p>
    </section>
  );
};

export default MealsSummary;
