import '../utils/style/Dashboard.css';

function Dashboard() {
  const firstName = "Jean";

  return (
    <section className="dashboard">
      <h1>Bonjour <span className='firstname'>{firstName}</span></h1>

      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </section>
  );
}

export default Dashboard;
