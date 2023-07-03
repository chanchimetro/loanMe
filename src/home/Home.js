import "./Home.css";

function Home({ user }) {
    return (
        <center>
            <div>
                {user.nombreusuario}
            </div>
            <h1>ESTA ES LA HOME</h1>
            <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--oEn9BS42--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/http://ahimsa.co.za/wp-content/uploads/2018/11/en-construction.gif"></img>
        </center>
    )
}
export default Home;