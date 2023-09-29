const HomePage: React.FC = () => {
  console.log(process.env.DB_USER);
  return (
    <div>
      <h1>Homessssss page{process.env.DB_USER}</h1>
    </div>
  );
};
export default HomePage;
