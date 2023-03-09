import Box from "./Box";

const options = {
  weekday: "short",
  year: "numeric",
  month: "long",
  day: "numeric",
};
export default function TodoItem({ title, isCompleted, notes, dueDate }) {
  console.log(dueDate);
  return (
    <>
      <Box>
        <h2> {title} </h2>
        <p> {notes}</p>
        <p> {dueDate.toLocaleDateString("de-DE", options)}</p>
        {isCompleted && "✔"}
      </Box>
    </>
  );
}
